---
tags: [jobbing, how-to, server]
---
# Reset the server to defaults

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** You are installing a different OS or the settings are in a bad state.

## What you need
- [ ] Screen access ([[01-connect_to_the_server_screen_or_ilo|previous guide]])
- [ ] Acceptance that settings (and possibly RAID layout) change

## Steps
- [ ] Restart the server.
- [ ] When the iLO screen appears during boot press **F8**.
- [ ] When the screen changes press **F8** again, then choose **Set to defaults** on the blue screen.
- [ ] Let it reset and boot.

## Check it worked
- [ ] The server boots with default settings.

## Gotchas
- Decide your RAID layout before or right after the reset, or you will redo the next guide.

## Source notes
- [[03-server_setup_documentation|03-server_setup_documentation]]
