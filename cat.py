
import os
import time

import climage

t_size = os.get_terminal_size()

output = climage.to_file('assets/success.jpg', 'cat_ansi', is_unicode=True)

with open('cat_ansi', 'r') as f:
    lines = f.readlines()
    for line in lines:
        print(line, end="")
        time.sleep(0.05)


