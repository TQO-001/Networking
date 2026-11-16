---
tags: [jobbing, how-to, cisco]
---
# Create VLANs and assign ports

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** A new VLAN is needed, or devices must be moved onto the right VLAN.

## What you need
- [ ] The VLAN IDs and names for the site ([[01-work_vlan_list|work VLAN list]])
- [ ] Which ports each VLAN goes to

## Steps
- [ ] Create and name the VLANs:
```cisco
Switch(config)# vlan 10
Switch(config-vlan)# name ClientServer
Switch(config-vlan)# vlan 20
Switch(config-vlan)# name control
Switch(config-vlan)# vlan 30
Switch(config-vlan)# name Thin_Client
Switch(config-vlan)# vlan 40
Switch(config-vlan)# name MNGT
Switch(config-vlan)# exit
```
(Those are the cold-mill switch VLANs from your task. Use the site's own numbers.)
- [ ] Put ports in the VLAN and enable PortFast for end devices:
```cisco
Switch(config)# interface range GigabitEthernet1/0/5 - 12
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# spanning-tree portfast
Switch(config-if-range)# no shutdown
```
- [ ] Save: `copy running-config startup-config`

## Check it worked
- [ ] `show vlan brief` lists the VLAN with the right ports.
- [ ] `show interfaces status` shows the ports `connected` once a device is plugged in.
- [ ] `show mac address-table vlan 10` shows the device's MAC.

## Gotchas
- A typo in `switchport access vlan <id>` silently **creates** a new VLAN. Check `show vlan brief` for strays.
- Deleting a VLAN does not move its ports. They go `inactive` and pass nothing.
- The VLAN also has to be allowed on any trunk it needs to cross (next guide).
- Your cold-mill switch ran `vtp mode transparent`, so VLANs stay local to that switch.

## Source notes
- [[01-Notes/01-Beginner/02-Industrial_Networking/01-Tasks/08-Switch_Configuration/01-Switch_Configuration|01-Switch_Configuration]]
- [[07-vlans_and_access_ports|07-vlans_and_access_ports]]
