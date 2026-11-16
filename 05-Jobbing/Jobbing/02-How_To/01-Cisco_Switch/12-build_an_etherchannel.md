---
tags: [jobbing, how-to, cisco]
---
# Build an EtherChannel

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** You want several cables between a switch and another switch or an ESXi server bundled into one logical link.

## What you need
- [ ] Matching ports on both sides
- [ ] Know whether the far end speaks LACP (switch-to-switch usually does, a free ESXi standard vSwitch does **not**)

## Steps
- [ ] Make the member ports identical **first** (same mode, VLANs, native VLAN):
```cisco
Switch(config)# interface range GigabitEthernet1/3 - 5
Switch(config-if-range)# switchport mode trunk
Switch(config-if-range)# switchport trunk allowed vlan 10,11,12
```
- [ ] Bundle them. Pick the mode that matches the far end:
```cisco
! switch to switch (LACP):
Switch(config-if-range)# channel-group 1 mode active
! to an ESXi standard vSwitch (static, no negotiation):
Switch(config-if-range)# channel-group 1 mode on
```
- [ ] Configure `interface port-channel 1` the same way (trunk, allowed VLANs) and `no shutdown`.
- [ ] If the far end is ESXi: on the vSwitch set teaming to **Route based on IP hash** ([[05-configure_esxi_networking_and_port_groups|ESXi networking guide]]).
- [ ] Save.

## Check it worked
- [ ] `show etherchannel summary` shows `Po1` as `SU` with members `P`.
- [ ] `show interfaces port-channel 1`.

## Gotchas
- LACP (`mode active`) to an ESXi standard vSwitch threw `LACP currently not enabled on the remote port` and suspended all three links in your lab. The fix was static `mode on` plus IP hash on ESXi.
- Mismatched member config puts ports in `s` (suspended). Fix members, then `shutdown` / `no shutdown`.
- Both ends `passive` never form a channel and show no error.

## Source notes
- [[09-etherchannel_and_lacp|09-etherchannel_and_lacp]]
- [[02-switches_documentation|Switches documentation (Sun Daddy lab)]]
