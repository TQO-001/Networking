---
tags: [jobbing, how-to, thin-client]
---
# Set static IP, hostname and admin mode

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** The thin client is freshly imaged and needs its network identity.

## What you need
- [ ] The unit's hostname and IP (table in [[02-thinpro_thin_client_setup|the guide]])
- [ ] Network cable into the OT/Ignition VLAN port

## Steps
- [ ] Switch from User mode to **Administrator mode**: right-click the desktop background (or press `Ctrl+Alt+Shift+S`) and choose the Administrator switch. The default admin password is often `root` unless your fleet changed it.
- [ ] Open **Network Settings** and set:
  - IP address: `192.168.193.<xxx>` (from the label)
  - Subnet mask: `255.255.255.0`
  - Default gateway: `192.168.193.1`
- [ ] Set the **hostname** to the site convention, e.g. `IND-ING-CCL2-COATER1`.
- [ ] Open a terminal and run `ping 192.168.193.1`.
- [ ] Stick a label on the chassis with hostname + IP.

## Check it worked
- [ ] Ping to `192.168.193.1` succeeds.
- [ ] The label matches the address register.
- [ ] `http://192.168.193.2:8088` opens in the browser.

## Gotchas
- No gateway ping usually means wrong port/VLAN on the switch or a typo in the address. Check the switch port is an access port in VLAN 593.
- Static addresses: keep a register. Duplicates cause intermittent drops that look like cable faults.

## Source notes
- [[01-thin_client_setup|01-thin_client_setup]]
- [[02-ignition_perspective_workstation_master_guide|02-ignition_perspective_workstation_master_guide]]
