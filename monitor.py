import functools
import json
import logging
import os
import subprocess
import sys
import time
from dataclasses import dataclass
from logging import Formatter, Logger, StreamHandler
from subprocess import PIPE, Popen
from time import struct_time

import requests

try:
    import ST7789 as ST7789
    from PIL import Image, ImageDraw, ImageFont
    from scd4x import SCD4X
except Exception as e:
    subprocess.check_call(
        [
            sys.executable,
            "-m",
            "pip",
            "install",
            "spidev",
            "rich",
            "requests",
            "scd4x",
            "ST7789",
            "Pillow",
        ]
    )


@dataclass
class Box:
    width: int
    height: int
    position: tuple[int, int, int, int]
    color: tuple[int, int, int]


@dataclass
class Icon:
    path: str
    position: tuple[int, int]
    width: int
    height: int
    background: tuple[int, int, int, int]
    background_color: tuple[int, int, int]


@dataclass
class Statistic:
    name: str
    value: str
    unit: str
    position: tuple[int, int]
    box: Box
    icon: Icon


@dataclass
class Settings:
    use_celsius: bool
    on_continually: bool
    start_time: int
    end_time: int
    compensate_temperature: bool
    compensate_temperature_factor: float
    manual_temperature_offset: float


class OfficeMonitor:
    HOUR_STARTUP: int = 7
    HOUR_SHUTOFF: int = 16
    MIN_SHUTOFF: int = 29

    FONT_SIZE: int = 152

    past_co2: int = 0

    smooth_size = 10
    cpu_temps: list[float] = []

    settings: Settings

    def __init__(self) -> None:
        # absolute path to the folder
        self.DIR_PATH: str = os.path.realpath(os.path.dirname(__file__))

        self.init_logging()

        try:
            # initiate CO2 sensor
            self.device = SCD4X(quiet=False)
            self.device.start_periodic_measurement()

            # initiate LCD display
            self.LCD = ST7789.ST7789(
                height=240,
                rotation=90,
                port=0,
                cs=ST7789.BG_SPI_CS_FRONT,  # BG_SPI_CS_BACK or BG_SPI_CS_FRONT
                dc=9,
                # 18 for back BG slot, 19 for front BG slot.
                backlight=19,
                spi_speed_hz=80 * 1000 * 1000,
                offset_left=0,
                offset_top=0,
            )
        except Exception as e:
            requests.post(
                "https://ntfy.damongolding.com/james",
                data=f"James' monitor init error: {e}",
                headers={"Authorization": "Basic ZGFtb246VG9ydG9pc2UwOQ=="},
            )

        # Font settings
        self.font = ImageFont.truetype(
            f"{self.DIR_PATH}/assets/Lato-Bold.ttf", self.FONT_SIZE
        )
        self.unit_font = ImageFont.truetype(
            f"{self.DIR_PATH}/assets/Lato-Bold.ttf", self.FONT_SIZE // 2
        )

        self.load_settings()

    def load_settings(self):
        try:
            with open(f"{self.DIR_PATH}/server/settings.json", "r") as f:
                settings: dict = json.load(f)
                self.settings = Settings(
                    use_celsius=settings.get("useCelsius", True),
                    on_continually=settings.get("onContinually", True),
                    start_time=settings.get("startTime", 7),
                    end_time=settings.get("endTime", 18),
                    compensate_temperature=settings.get("compensateTemperature", True),
                    compensate_temperature_factor=settings.get(
                        "compensateTemperatureFactor", 2.6
                    ),
                    manual_temperature_offset=settings.get(
                        "manualTemperatureOffset", 0.0
                    ),
                )
        except:
            self.settings = Settings(
                use_celsius=True,
                on_continually=True,
                start_time=7,
                end_time=18,
                compensate_temperature=True,
                compensate_temperature_factor=2.6,
                manual_temperature_offset=0.0,
            )

    def init_logging(self) -> None:
        """
        Initiate logging
        """
        self.logger: Logger = logging.getLogger(__name__)
        self.logger.setLevel(logging.INFO)
        self.handler = logging.FileHandler(f"{self.DIR_PATH}/log.txt", mode="w")
        self.formatter: Formatter = logging.Formatter(
            "%(asctime)s : %(levelname)s : %(message)s", "%Y-%m-%d %H:%M:%S"
        )
        self.handler.setFormatter(self.formatter)
        self.logger.addHandler(self.handler)

    # Gets the CPU temperature in degrees C
    def get_cpu_temperature(self):
        process = Popen(["vcgencmd", "measure_temp"], stdout=PIPE)
        output, _error = process.communicate()
        output = output.decode()
        return float(output[output.index("=") + 1 : output.rindex("'")])

    def get_comp_temperature(self, temperature: float) -> float:
        self.cpu_temp = self.get_cpu_temperature()
        self.cpu_temps.append(self.cpu_temp)

        if len(self.cpu_temps) > self.smooth_size:
            self.cpu_temps = self.cpu_temps[1:]

        smoothed_cpu_temp: float = sum(self.cpu_temps) / float(len(self.cpu_temps))
        comp_temperature: float = temperature - (
            (smoothed_cpu_temp - temperature)
            / self.settings.compensate_temperature_factor
        )

        if not self.settings.use_celsius:
            comp_temperature = self.celsius_to_fahrenheit(comp_temperature)

        return comp_temperature

    def celsius_to_fahrenheit(self, temp: float) -> float:
        return (temp * 9 / 5) + 32

    @functools.lru_cache(maxsize=128)
    def co2_level_color(self, co2_level: int) -> tuple[int, int, int]:
        """
        Returns a color based on the submitted CO2 level
        This is used for the CO2 background color
        """
        if co2_level < 1000:
            # green
            return (42, 139, 110)
        elif co2_level < 2000:
            # orange
            return (124, 104, 52)
        else:
            # red
            return (125, 62, 71)

    @functools.lru_cache(maxsize=128)
    def co2_level_icon_color(self, co2_level: int) -> tuple[int, int, int]:
        """
        Returns a color based on the submitted CO2 level
        This is used for the CO2 icon background color
        """
        if co2_level < 1000:
            # green
            return (84, 219, 147)
        elif co2_level < 2000:
            # orange
            return (248, 150, 30)
        else:
            # red
            return (249, 64, 68)

    def run(self) -> None:
        self.logger.info("Starting Office Monitor")

        while 1:
            self.load_settings()

            # Get the latest data from the sensor
            # If the sensor is not connected or not ready, log error, wait 1 second and try again
            try:
                co2, temperature, relative_humidity, _ = self.device.measure()  # type: ignore

                if self.settings.manual_temperature_offset != 0.0:
                    temperature += self.settings.manual_temperature_offset

                if not self.settings.use_celsius:
                    temperature = self.celsius_to_fahrenheit(temperature)

                comp_temperature = 0.0

                if self.settings.compensate_temperature:
                    comp_temperature = self.get_comp_temperature(temperature)

            except Exception as e:
                self.logger.error(e)
                time.sleep(1)
                continue

            # Create a new square image to use as a canvas/background
            image = Image.new("RGB", (960, 960), "#033b4a")
            draw = ImageDraw.Draw(image)

            #  Statistics to show on the display
            statistics: list[Statistic] = [
                Statistic(
                    name="temperature",
                    value=f"{temperature if not self.settings.compensate_temperature else comp_temperature:.1f}".rstrip(
                        "0"
                    ).rstrip(
                        "."
                    ),
                    unit="°",
                    position=(368, 93),
                    box=Box(
                        width=864,
                        height=272,
                        position=(48, 48, 48 + 846, 48 + 272),
                        color=(42, 139, 110),
                    ),
                    icon=Icon(
                        path=f"{self.DIR_PATH}/assets/icons/thermometer{'-comp' if self.settings.compensate_temperature else ''}{'-manual' if self.settings.manual_temperature_offset != 0.0 else ''}.png",
                        position=(72, 72),
                        width=224,
                        height=224,
                        background=(72, 72, 72 + 224, 72 + 224),
                        background_color=(84, 219, 147),
                    ),
                ),
                Statistic(
                    name="relative_humidity",
                    value=f"{relative_humidity:.1f}".rstrip("0").rstrip("."),
                    unit="%",
                    position=(368, 389),
                    box=Box(
                        width=864,
                        height=272,
                        position=(48, 344, 48 + 846, 344 + 272),
                        color=(42, 127, 147),
                    ),
                    icon=Icon(
                        path=f"{self.DIR_PATH}/assets/icons/droplet.png",
                        position=(72, 368),
                        width=224,
                        height=224,
                        background=(72, 368, 72 + 224, 368 + 224),
                        background_color=(84, 196, 220),
                    ),
                ),
                Statistic(
                    name="co2",
                    value=f"{int(co2)}",
                    unit="",
                    position=(368, 685),
                    box=Box(
                        width=864,
                        height=272,
                        position=(48, 640, 48 + 846, 640 + 272),
                        color=self.co2_level_color(int(co2)),
                    ),
                    icon=Icon(
                        path=f"{self.DIR_PATH}/assets/icons/co2.png",
                        position=(72, 664),
                        width=224,
                        height=224,
                        background=(72, 664, 72 + 224, 664 + 224),
                        background_color=self.co2_level_icon_color(int(co2)),
                    ),
                ),
            ]

            # Loop each statistic and draw it on the image
            for statistic in statistics:
                value: str = statistic.value
                value_position: tuple[int, int] = statistic.position
                value_width: float = draw.textlength(statistic.value, font=self.font)
                box_position: tuple[int, int, int, int] = statistic.box.position
                box_color: tuple[int, int, int] = statistic.box.color
                icon_position: tuple[int, int] = statistic.icon.position
                icon_path: str = statistic.icon.path
                icon_background: tuple[int, int, int, int] = statistic.icon.background
                icon_background_color: tuple[
                    int, int, int
                ] = statistic.icon.background_color

                draw.rounded_rectangle(box_position, radius=400, fill=box_color)
                draw.text(
                    value_position, text=value, font=self.font, fill=(255, 255, 255)
                )
                if statistic.unit == "%":
                    draw.text(
                        (
                            value_position[0] + value_width + 3,
                            value_position[1] + self.FONT_SIZE // 2 - 1,
                        ),
                        text=statistic.unit,
                        font=self.unit_font,
                        fill=(255, 255, 255),
                    )
                else:
                    draw.text(
                        (value_position[0] + value_width + 3, value_position[1]),
                        text=statistic.unit,
                        font=self.font,
                        fill=(255, 255, 255),
                    )
                draw.rounded_rectangle(
                    icon_background, radius=300, fill=icon_background_color
                )
                draw.bitmap(icon_position, bitmap=Image.open(icon_path))

            #  Check time and if it between 4:29pm and 7am, turn off the display
            current_time: struct_time = time.localtime()
            current_hour: int = current_time.tm_hour
            current_min: int = current_time.tm_min

            if (
                self.settings.on_continually
                or self.settings.start_time <= current_hour <= self.settings.end_time
            ):
                update_display = image.resize((240, 240), Image.Resampling.LANCZOS)
                self.LCD.display(update_display)
                self.LCD.set_backlight(1)
            else:
                self.LCD.set_backlight(0)

            #  Check if the co2 level has changed
            # if self.past_co2 != co2:
            #     self.update_homeassistant(co2)

            self.past_co2 = co2

            #  Sleep for 10 seconds
            time.sleep(10)


if __name__ == "__main__":
    app: OfficeMonitor = OfficeMonitor()
    app.run()
