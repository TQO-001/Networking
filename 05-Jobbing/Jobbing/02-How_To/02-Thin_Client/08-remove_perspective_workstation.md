---
tags: [jobbing, how-to, thin-client]
---
# Remove Perspective Workstation

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** A unit must go back to its pre-deployment state.

## What you need
- [ ] Admin mode and a terminal

## Steps
- [ ] Stop it: `pkill -f perspectiveworkstation` and `pkill -f java`, then `ps aux | grep -E 'perspective|java'` shows nothing.
- [ ] Open **Connections**, select `Perspective Workstation`, **Delete**.
- [ ] `rm -f /tmp/perspective.lock`
- [ ] `rm -rf /home/user/.ignition`
- [ ] `rm -rf /persistent/ignition`
- [ ] Cold reboot.

## Check it worked
- [ ] No Workstation window opens.
- [ ] The Connections list no longer has the entry.
- [ ] `ls /persistent/ignition` says no such file or directory.

## Gotchas
- This only removes the app and its config. Network settings and other connections are untouched.
- Double-check the path before `rm -rf`.

## Source notes
- [[02-ignition_perspective_workstation_master_guide|02-ignition_perspective_workstation_master_guide]]
