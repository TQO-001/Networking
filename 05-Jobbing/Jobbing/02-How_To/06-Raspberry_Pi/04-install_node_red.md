---
tags: [jobbing, how-to, raspberry-pi]
---
# Install Node-RED

↩ Back to the guide: [[05-raspberry_pi_and_node_red_setup|Raspberry Pi: OS, remote access and Node-RED that survives a reboot]]

> **Use this when:** A Pi needs Node-RED installed or upgraded.

## What you need
- [ ] Internet access on the Pi (at Hulamin/Gijima sign in at `gateway.hulamin.co.za/connect`)
- [ ] Terminal on the Pi

## Steps
- [ ] Update: `sudo apt update && sudo apt upgrade -y`
- [ ] Optional route via **nvm** (this was the route in your note):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 24
node -v
npm -v
```
- [ ] Run the official installer script. It installs/upgrades Node.js and Node-RED:
```bash
bash <(curl -sL https://github.com/node-red/linux-installers/releases/latest/download/install-update-nodered-deb)
```
- [ ] Answer `y` to proceed and `y` to install the Pi-specific nodes (GPIO).
- [ ] Start it and open the editor: `http://localhost:1880` on the Pi or `http://<pi-ip>:1880` from another device.

## Check it worked
- [ ] The Node-RED editor loads on port 1880.

## Gotchas
- If you installed Node.js with **nvm**, the `node-red-start` style shortcuts and systemd service are **not** set up for you. See the start-on-boot guide.
- No internet on the Pi at work is a firewall sign-in problem, not a Pi problem.

## Source notes
- [[05-install_node_red|05-install_node_red]]
