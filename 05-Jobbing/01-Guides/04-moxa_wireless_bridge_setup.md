---
tags: [jobbing, guide, wireless]
---
# Moxa AWK access points: wireless bridge between two sites

↩ Back to the index: [[00-index|Jobbing index]]

> **Goal:** Replace a wired link with a Moxa AWK-3131A master/slave wireless bridge that carries the right VLANs.

## Before you start
- [ ] Two Moxa AWK-3131A units, antennas (RP-SMA), a laptop, patch cables
- [ ] Power: **12 to 48 VDC** on the 10-pin terminal block (`V1+/V1-` or `V2+/V2-`) or **802.3af PoE** into the LAN port
- [ ] The final IPs. Your task used `192.168.193.98` (AP1) and `192.168.193.99` (AP2), mask `255.255.255.0`, gateway `192.168.193.1`
- [ ] The switch-side VLAN plan: trunk the needed VLANs to the switch the AP hangs off ([[07-set_up_a_trunk_and_add_a_vlan_to_it|trunk guide]])

## The order
- [ ] **Configure the APs one at a time on your bench.** Both come with the same default IP, so two powered on together on one network clash.
- [ ] 1. First login ([[01-first_login_to_a_moxa_ap|First login]])
- [ ] 2. Master and slave modes, SSID, WPA2 ([[02-set_master_slave_modes_and_wpa2|Master/slave and WPA2]])
- [ ] 3. Static IP, save, restart ([[03-change_the_ap_ip_and_save|Change IP and save]])
- [ ] 4. Switch side: access port in the right VLAN for the AP, trunk allowed VLANs on both switches
- [ ] 5. Install on site, check the link with ping, then move the device onto the right network

## Site gotchas from the Foil Mill install (13 Oct 2026)
- The previous radio link could not carry multiple VLANs, so the HMI sat on the commercial network instead of OT. The Moxa bridge was the fix.
- **Power decides which unit goes where.** The master was in a patch panel (no PSU there), the slave needed one, so master and slave were swapped on site.
- The address range first chosen was said to belong **only to routers and firewalls**. Get an approved range before you install.
- After setup the units pinged each other, then dropped out and reconnected by themselves. That was still open when the note ended.

## Sub-topics (how-to guides)
| Need to… | Open |
|---|---|
| Log into a factory-default AP | [[01-first_login_to_a_moxa_ap|First login to a Moxa AP]] |
| Set master or slave, SSID, WPA2 | [[02-set_master_slave_modes_and_wpa2|Set master/slave modes and WPA2]] |
| Change the AP IP and make it stick | [[03-change_the_ap_ip_and_save|Change the AP IP and save]] |
| Trunk the VLANs on the switch side | [[07-set_up_a_trunk_and_add_a_vlan_to_it|Set up a trunk and add a VLAN to it]] |

## Final checklist
- [ ] Both APs have unique static IPs and a changed admin password
- [ ] One is Master, one is Slave, same SSID, WPA2/AES
- [ ] Configuration saved **and** AP restarted
- [ ] Switch ports and trunks carry the right VLANs on both ends
- [ ] Ping across the link is stable (watch for the intermittent drops)
- [ ] HMI/device is back on the correct OT network

## Source notes
- [[03-access_point_setup|Setup your access point]]
- [[02-switch_configuration|02-switch_configuration]]
- [[04-shadowing|Shadow report: Moxa wireless bridge at Foil Mill]]
