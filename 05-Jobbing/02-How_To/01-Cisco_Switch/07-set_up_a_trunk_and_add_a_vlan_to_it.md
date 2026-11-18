---
tags: [jobbing, how-to, cisco]
---
# Set up a trunk and add a VLAN to it

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** A VLAN must cross a link between two switches (the most common job), or you are building a new uplink.

## What you need
- [ ] Port names at **both ends** of the link
- [ ] The VLAN IDs that must cross

## Steps
**A. Add VLANs to an existing trunk (do both ends):**
```cisco
Switch(config)# interface GigabitEthernet1/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan add 560,561,593
Switch(config-if)# end
Switch# copy running-config startup-config
```
| Want | Command |
|---|---|
| Add VLANs to the list | `switchport trunk allowed vlan add <ids>` |
| Remove VLANs | `switchport trunk allowed vlan remove <ids>` |
| **Replace the whole list (careful)** | `switchport trunk allowed vlan <ids>` |
| Allow everything again | `no switchport trunk allowed vlan` |

**B. Build a new trunk:**
```cisco
Switch(config)# vlan 999
Switch(config-vlan)# name NATIVE_UNUSED
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 999
Switch(config-if)# switchport trunk allowed vlan <ids>
Switch(config-if)# switchport nonegotiate
Switch(config-if)# no shutdown
```
(On 2960/IE-3000 class switches omit `switchport trunk encapsulation dot1q`. It is not accepted there.)

## Check it worked
- [ ] `show interfaces trunk` shows the VLANs in the allowed and active lists.
- [ ] `show interfaces GigabitEthernet1/1 switchport` on both ends.
- [ ] A device in the VLAN on the far side can ping its gateway.

## Gotchas
- The classic trap: VLAN exists and ports are assigned, but it was never added to the trunk's allowed list. It works on one switch and dies at the uplink.
- `switchport trunk allowed vlan 560` (no `add`) **replaces** the list and can cut off everything else.
- Native VLAN must match on both ends. Mismatch is silent unless you read CDP/logs.
- Both ends `dynamic auto` never form a trunk. Forcing `mode trunk` + `nonegotiate` on both ends is the reliable way.

## Source notes
- [[02-switch_configuration|Trunk configuration for the Moxa AP link]]
- [[08-trunking_and_native_vlans|08-trunking_and_native_vlans]]
