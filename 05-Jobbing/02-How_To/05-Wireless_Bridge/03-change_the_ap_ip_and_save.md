---
tags: [jobbing, how-to, wireless]
---
# Change the AP IP and save

↩ Back to the guide: [[04-moxa_wireless_bridge_setup|Moxa AWK access points: wireless bridge between two sites]]

> **Use this when:** The AP must move off the factory IP onto the real network.

## What you need
- [ ] The target IP, mask and gateway for each AP (your task: `192.168.193.98` and `.99`, `255.255.255.0`, gateway `192.168.193.1`)

## Steps
- [ ] **Basic Setup, Network Setup**: change to **Static**, enter IP, mask, gateway.
- [ ] Save changes.
- [ ] **System Management, Save Configuration**, click **Save**.
- [ ] **System Management, Restart** and reboot the AP.
- [ ] Move your laptop (and the thin client, `192.168.193.149`, if you are testing with one) onto the new subnet, e.g. laptop `192.168.193.150`.
- [ ] Remember to enable VNC on the thin client.

## Check it worked
- [ ] The AP answers on its new IP after the restart.
- [ ] Ping the other AP and the gateway.

## Gotchas
- Saving the settings page is not enough. **Save Configuration** and **Restart** are separate steps.
- Check the chosen range is allowed. The Foil Mill range turned out to be reserved for routers and firewalls.

## Source notes
- [[03-access_point_setup|03-access_point_setup]]
- [[04-shadowing|04-shadowing]]
