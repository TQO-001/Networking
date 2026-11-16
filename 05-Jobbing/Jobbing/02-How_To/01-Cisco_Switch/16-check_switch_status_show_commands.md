---
tags: [jobbing, how-to, cisco]
---
# Check switch status (show commands)

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** You want to know what state a switch is in before or after changing anything.

## What you need
- [ ] Enable-mode access

## Steps
| Question | Command |
|---|---|
| Model, IOS, uptime, config register | `show version` |
| Serial numbers, SFPs | `show inventory` |
| What is configured now / at boot | `show running-config`, `show startup-config` |
| One section only | `show running-config | section line vty` |
| VLANs and their ports | `show vlan brief` |
| IPs and port up/down | `show ip interface brief` |
| Port state, speed, duplex, err-disabled | `show interfaces status` |
| One port in detail, errors | `show interfaces <port>`, `... counters errors` |
| Trunk ports and allowed VLANs | `show interfaces trunk` |
| One port's mode and VLAN | `show interfaces <port> switchport` |
| Who is plugged into which port | `show cdp neighbors`, `show cdp neighbors detail` |
| Where a MAC is | `show mac address-table vlan <id>` |
| EtherChannel state | `show etherchannel summary` |
| Port security | `show port-security` |
| SSH state and key | `show ip ssh`, `show crypto key mypubkey rsa` |
| Flash and boot image | `dir flash:`, `show boot` |
| Auto-recovery settings | `show errdisable recovery` |

## Check it worked
- [ ] You can answer: which VLAN is this port in, is it a trunk, what is on the other end?

## Gotchas
- `show running-config` is the live config. If you have not saved, it is not what a reboot will bring back. Compare with `show startup-config`.
- Use CDP on the neighbour switch as a sanity check before erasing or reloading anything.

## Source notes
- [[01-switch_commands|Switch command cheat sheet]]
- [[02-initial_switch_configuration|02-initial_switch_configuration]]
