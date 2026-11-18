---
tags: [jobbing, how-to, raspberry-pi]
---
# Find the Pi IP and enable VNC

↩ Back to the guide: [[05-raspberry_pi_and_node_red_setup|Raspberry Pi: OS, remote access and Node-RED that survives a reboot]]

> **Use this when:** You want a graphical remote session to the Pi.

## What you need
- [ ] The Pi and your laptop on the same network

## Steps
- [ ] On the Pi run `hostname -I` (or hover over the network icon in the tray).
- [ ] Enable VNC, GUI: **Menu, Preferences, Raspberry Pi Configuration, Interfaces**, VNC = **Enabled**.
- [ ] Or CLI: `sudo raspi-config`, **Interface Options, VNC, Yes**. Reboot if asked: `sudo reboot`.
- [ ] MobaXterm: **Session, VNC**, host = Pi IP, port `5900`, then your Pi user password (or the VNC password).

## Check it worked
- [ ] You see the Pi desktop in MobaXterm.

## Gotchas
- Your work standard was TightVNC. If MobaXterm works but TightVNC does not, go to the TightVNC guide.

## Source notes
- [[03-raspberry_setup_and_configuration|03-raspberry_setup_and_configuration]]
