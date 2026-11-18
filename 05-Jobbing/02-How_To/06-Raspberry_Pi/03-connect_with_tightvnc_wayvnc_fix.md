---
tags: [jobbing, how-to, raspberry-pi]
---
# Connect with TightVNC (WayVNC fix)

↩ Back to the guide: [[05-raspberry_pi_and_node_red_setup|Raspberry Pi: OS, remote access and Node-RED that survives a reboot]]

> **Use this when:** TightVNC Viewer fails to connect to a Raspberry Pi OS Bookworm Pi.

## What you need
- [ ] Terminal on the Pi (physical or SSH)
- [ ] TightVNC Viewer on your laptop

## Steps
- [ ] Confirm WayVNC is the VNC server: `ps aux | grep -iE 'vnc|vncserver' | grep -v grep`
- [ ] Edit the config: `sudo nano /etc/wayvnc/config`
- [ ] Set:
```
address=0.0.0.0
enable_auth=false
```
- [ ] Save (`Ctrl+O`, Enter, `Ctrl+X`) and restart: `sudo systemctl restart wayvnc`
- [ ] In TightVNC Viewer enter the Pi IP and Connect. Leave the password blank.

## Check it worked
- [ ] TightVNC opens the Pi desktop with no TLS error.

## Gotchas
- **`enable_auth=false` turns off VNC authentication and encryption.** Anyone who can reach port 5900 gets the desktop. Use it only on a trusted/isolated network and revert it afterwards.
- Bookworm and later use WayVNC, which insists on modern TLS authentication that legacy viewers cannot do. That is why this fix exists.
- Your note says the real cause of the long headache was the firewall blocking the TightVNC server download. If you are not firewall-restricted you can install a TightVNC server instead.

## Source notes
- [[03-raspberry_setup_and_configuration|03-raspberry_setup_and_configuration]]
