---
tags: [jobbing, how-to, hardware]
---
# Connect with a console cable

↩ Back to the guide: [[06-industrial_switch_hardware_install|Cisco IE-3300 industrial switch: mount, wire and power up]]

> **Use this when:** A switch is new, wiped, or unreachable and you need the console.

## What you need
- [ ] Console cable (RJ45-to-DB9, or USB-to-RJ45)
- [ ] A terminal program (PuTTY, Tera Term)

## Steps
- [ ] Plug the cable into the switch console port and your laptop.
- [ ] Find the COM port number in Windows Device Manager.
- [ ] Open the terminal on that COM port: **9600 baud, 8 data bits, no parity, 1 stop bit, no flow control**.
- [ ] Power on the switch and watch the boot output. This is where you spot a failed SD card read or corrupt image.
- [ ] Press Enter. If prompted for the initial setup dialog, answer `no` or continue. Then `enable`.

## Check it worked
- [ ] You get a prompt (`Switch>` or the hostname).

## Gotchas
- Garbled characters usually mean wrong baud rate.
- PuTTY's Ctrl+C is not a real Break signal (matters for password recovery).

## Source notes
- [[03-hardware_installation_guide|03-hardware_installation_guide]]
- [[01-boot_process_and_password_recovery|01-boot_process_and_password_recovery]]
