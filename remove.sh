cd /home

sudo rm -r james-monitor

sudo systemctl stop monitor
sudo systemctl disable monitor

sudo rm /lib/systemd/system/monitor.service
