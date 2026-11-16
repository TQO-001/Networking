---
tags: [jobbing, how-to, raspberry-pi]
---
# Shut down or reboot safely

↩ Back to the guide: [[05-raspberry_pi_and_node_red_setup|Raspberry Pi: OS, remote access and Node-RED that survives a reboot]]

> **Use this when:** You need to power the Pi off or restart it.

## What you need
- [ ] A terminal on the Pi

## Steps
- [ ] Reboot: `sudo reboot`
- [ ] Power off: `sudo shutdown -h now`
- [ ] Wait for the green activity light to stop before unplugging.

## Check it worked
- [ ] The Pi is fully off before power is removed.

## Gotchas
- Pulling the plug on a running Pi can corrupt the microSD card.

## Source notes
- [[03-raspberry_setup_and_configuration|03-raspberry_setup_and_configuration]]
