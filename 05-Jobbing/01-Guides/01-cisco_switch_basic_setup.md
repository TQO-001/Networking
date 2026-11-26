---
tags: [jobbing, guide, cisco]
---
# Cisco switch: basic setup

↩ Back to the index: [[00-index|Jobbing index]]

> **Goal:** Take a switch from blank (or half-configured) to managed, SSH-reachable, on the right VLANs, and saved.

## Before you start
- [ ] Console cable + terminal program (PuTTY / Tera Term) set to **9600 baud, 8 data bits, no parity, 1 stop bit, no flow control**.
- [ ] The switch name, management IP, VLAN list and user/passwords for *this* site (see [[01-work_vlan_list|the work VLAN list]]).
- [ ] Permission to touch the switch. A reload or a bad trunk change drops everything plugged into it.
- Work naming seen in your notes: switch hostnames look like `IND-SW-EDNL-<Location>`, the local admin account is `ind-it` (privilege 15), and the management VLAN on the plant network is **560**.
- Replace every `<placeholder>` below. Never paste real passwords into notes.

## Part 1: Enter config mode and set the identity
- [ ] Log in on the console, then:
```cisco
Switch> enable
Switch# configure terminal
Switch(config)# hostname <IND-SW-EDNL-Location>
Switch(config)# no ip domain lookup
Switch(config)# ip domain name <domain>
Switch(config)# banner login ^C<short text, e.g. site and switch role>^C
```
- `<domain>`: your notes used `iitcoldmill.local` (given by the manager) on the cold mill switch. Ask which domain applies at the site. The domain is also needed for SSH keys (Part 3).

## Part 2: Passwords and the local admin user
- [ ] Set the secrets (type the **plain password**; the switch stores a hash):
```cisco
Switch(config)# enable secret <password>
Switch(config)# username ind-it privilege 15 secret <password>
Switch(config)# service password-encryption
```
- Do not type `secret 9 <text>` with a plain password. The `9` means "this is already a type-9 hash", which is how it appears in `show running-config`.

## Part 3: SSH (so you can leave the console)
- [ ] Do this in order. Key generation needs the hostname and domain from Part 1:
```cisco
Switch(config)# crypto key generate rsa
How many bits in the modulus [512]: 2048
Switch(config)# ip ssh version 2
Switch(config)# ip ssh time-out 60
Switch(config)# line vty 0 15
Switch(config-line)# login local
Switch(config-line)# transport input ssh
Switch(config-line)# exit
```
- Full explanation and failure points: [[09-enable_ssh_properly|Enable SSH properly]]

## Part 4: Management IP and gateway
- [ ] Put the switch's own address on the management VLAN (plant: VLAN 560):
```cisco
Switch(config)# vlan 560
Switch(config-vlan)# name Management
Switch(config-vlan)# exit
Switch(config)# interface vlan 560
Switch(config-if)# ip address <ip> <mask>
Switch(config-if)# no shutdown
Switch(config-if)# exit
Switch(config)# ip default-gateway <gateway>
```
- The SVI shows `up/down` until a port in that VLAN has link. That is normal.

## Part 5: VLANs and ports
- [ ] Create and name the VLANs the site uses (names and numbers: [[01-work_vlan_list|the work VLAN list]]):
```cisco
Switch(config)# vlan <id>
Switch(config-vlan)# name <name>
```
- [ ] Access ports (end devices): 
```cisco
Switch(config)# interface range GigabitEthernet1/7 - 9
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan <id>
Switch(config-if-range)# spanning-tree portfast
```
- [ ] Uplinks to other switches are trunks, all VLANs allowed. Open [[07-set_up_a_trunk_and_add_a_vlan_to_it|Set up a trunk / add a VLAN to it]].
```Cisco
Switch(config)# interface 
Switch(config-if)# switchport mode trunk 
```

## Part 6: Global settings your work configs also carried (optional, ask first)
```cisco
Switch(config)# vtp mode transparent
Switch(config)# service timestamps log datetime msec localtime
Switch(config)# service timestamps debug datetime msec localtime
Switch(config)# service tcp-keepalives-in
Switch(config)# service tcp-keepalives-out
Switch(config)# errdisable recovery interval 60
Switch(config)# ntp server <ntp-ip>
```
- Errdisable causes, NTP and SPAN: [[15-set_ntp_and_a_span_port|Set NTP and a SPAN port]] and [[10-recover_an_err_disabled_port|Recover an err-disabled port]].

## Part 7: Save and verify
- [ ] `copy running-config startup-config`
- [ ] `show vlan brief`, `show ip interface brief`, then try SSH from your laptop. Keep the console cable plugged in until SSH works.
- [ ] Take an off-box backup now: [[02-save_and_back_up_the_config|Save and back up the config]]

## Sub-topics (how-to guides)
| Need to… | Open |
|---|---|
| Restart the switch | [[01-reload_the_switch|Reload the switch]] |
| Save and back up the config | [[02-save_and_back_up_the_config|Save and back up the config]] |
| Restore or roll back a config | [[03-restore_or_roll_back_a_config|Restore or roll back a config]] |
| Wipe a switch for redeployment | [[04-factory_reset_a_switch|Factory reset a switch]] |
| Get back in after a lost password | [[05-recover_a_lost_password|Recover a lost password]] |
| Create VLANs and put ports in them | [[06-create_vlans_and_assign_ports|Create VLANs and assign ports]] |
| Add a VLAN to a trunk / build a trunk | [[07-set_up_a_trunk_and_add_a_vlan_to_it|Set up a trunk and add a VLAN to it]] |
| Set the switch IP and gateway | [[08-set_a_management_ip_and_gateway|Set a management IP and gateway]] |
| Turn on SSH properly | [[09-enable_ssh_properly|Enable SSH properly]] |
| A port went err-disabled | [[10-recover_an_err_disabled_port|Recover an err-disabled port]] |
| Slow link, CRC errors, duplex mismatch | [[11-fix_speed_duplex_and_port_errors|Fix speed, duplex and port errors]] |
| Bundle links into an EtherChannel | [[12-build_an_etherchannel|Build an EtherChannel]] |
| Stop unknown devices on a port | [[13-turn_on_port_security|Turn on port security]] |
| Upgrade the IOS image | [[14-upgrade_the_ios_image|Upgrade the IOS image]] |
| Set NTP or mirror traffic (SPAN) | [[15-set_ntp_and_a_span_port|Set NTP and a SPAN port]] |
| See what state the switch is in | [[16-check_switch_status_show_commands|Check switch status (show commands)]] |

## Final checklist
- [ ] Hostname, domain, banner set
- [ ] `enable secret` and the `ind-it` user set
- [ ] SSH works from a laptop (not just the console)
- [ ] Management VLAN + IP + default gateway set, gateway pingable
- [ ] VLANs created and named, ports assigned, trunks allow the right VLANs
- [ ] `copy running-config startup-config` done
- [ ] Config backed up off the switch

## Source notes
- [[01-Notes/01-Beginner/02-Industrial_Networking/01-Tasks/08-Switch_Configuration/01-Switch_Configuration|Cisco IOS Switch Configuration Task (Catalyst 9200L, cold mill)]]
- [[02-initial_switch_configuration|Initial switch configuration (IE-3300 crane switch)]]
- [[05-basic_management_setup_real_ssh|Basic management setup, real SSH]]
- [[01-switch_commands|Switch command cheat sheet]]
