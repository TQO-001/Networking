---
tags: [jobbing, guide, raspberry-pi]
---
# Raspberry Pi: OS, remote access and Node-RED that survives a reboot

↩ Back to the index: [[00-index|Jobbing index]]

> **Goal:** Flash a Pi, reach it remotely, install Node-RED and make Node-RED start on boot.

## Before you start
- [ ] Raspberry Pi, official power supply, microSD card (or other boot media), a laptop
- [ ] Desktop setup: monitor + keyboard + mouse. Headless setup: another computer on the same network
- [ ] On the Hulamin/Gijima network the Pi is blocked from the internet until you sign in at `gateway.hulamin.co.za/connect`

## The order
- [ ] 1. Flash the OS ([[01-flash_raspberry_pi_os_with_imager|Flash with Imager]])
- [ ] 2. Insert the card, connect peripherals, power **last**
- [ ] 3. Find the IP and enable VNC ([[02-find_the_pi_ip_and_enable_vnc|IP and VNC]])
- [ ] 4. Connect: MobaXterm VNC, or TightVNC with the WayVNC fix ([[03-connect_with_tightvnc_wayvnc_fix|TightVNC fix]])
- [ ] 5. Get internet access, install Node-RED ([[04-install_node_red|Install Node-RED]])
- [ ] 6. Make Node-RED start on boot ([[05-make_node_red_start_on_boot|Start on boot]])
- [ ] 7. Always shut down gracefully ([[06-shut_down_or_reboot_safely|Shut down safely]])

## Sub-topics (how-to guides)
| Need to… | Open |
|---|---|
| Write the OS to a card | [[01-flash_raspberry_pi_os_with_imager|Flash Raspberry Pi OS with Imager]] |
| Find the IP, turn on VNC | [[02-find_the_pi_ip_and_enable_vnc|Find the Pi IP and enable VNC]] |
| TightVNC will not connect to the Pi | [[03-connect_with_tightvnc_wayvnc_fix|Connect with TightVNC (WayVNC fix)]] |
| Install Node-RED | [[04-install_node_red|Install Node-RED]] |
| Node-RED must start on boot | [[05-make_node_red_start_on_boot|Make Node-RED start on boot]] |
| Reboot or power off without corrupting the card | [[06-shut_down_or_reboot_safely|Shut down or reboot safely]] |

## Final checklist
- [ ] Pi boots and you know its IP
- [ ] VNC (or SSH) works from your laptop
- [ ] Node-RED opens at `http://<pi-ip>:1880`
- [ ] After `sudo reboot`, Node-RED is back by itself
- [ ] You shut it down with a command, not by pulling the plug

## Source notes
- [[03-raspberry_setup_and_configuration|Raspberry Pi setup and configuration]]
- [[05-install_node_red|Install Node-RED]]
