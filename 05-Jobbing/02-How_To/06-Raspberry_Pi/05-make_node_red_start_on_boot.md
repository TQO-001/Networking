---
tags: [jobbing, how-to, raspberry-pi]
---
# Make Node-RED start on boot

↩ Back to the guide: [[05-raspberry_pi_and_node_red_setup|Raspberry Pi: OS, remote access and Node-RED that survives a reboot]]

> **Use this when:** Node-RED must come back by itself after a reboot or power cut.

## What you need
- [ ] Node-RED installed ([[04-install_node_red|guide]])

## Steps
**A. Standard (system-wide Node.js) install:**
- [ ] `sudo systemctl enable nodered.service`
- [ ] Shortcuts: `node-red-start`, `node-red-stop`, `node-red-restart`, `node-red-log`

**B. nvm install: use PM2:**
- [ ] `npm install -g pm2`
- [ ] `pm2 start $(which node-red) -- --max-old-space-size=128`
- [ ] `pm2 startup`: it **prints a command. Copy and run that exact printed command** (it starts with `sudo env PATH=...`). PM2 does not configure systemd by itself.
- [ ] `pm2 save`
- [ ] Test: `sudo reboot`, then `pm2 status`.

## Check it worked
- [ ] After a reboot `pm2 status` (or `systemctl status nodered`) shows Node-RED **online** with no manual start.

## Gotchas
- Skipping the command that `pm2 startup` prints is the usual reason it does not come back after reboot.
- Useful: `pm2 logs node-red`, `pm2 restart node-red`, `pm2 stop node-red`.

## Source notes
- [[05-install_node_red|05-install_node_red]]
