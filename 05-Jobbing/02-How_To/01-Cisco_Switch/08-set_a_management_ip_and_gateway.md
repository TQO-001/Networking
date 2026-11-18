---
tags: [jobbing, how-to, cisco]
---
# Set a management IP and gateway

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** The switch needs an address you can SSH to, or its address changed.

## What you need
- [ ] Management VLAN ID, switch IP, mask and gateway for the site
- [ ] Console access (do not do this only over SSH on the VLAN you are changing)

## Steps
- [ ] Create the SVI on the management VLAN:
```cisco
Switch(config)# interface vlan 560
Switch(config-if)# ip address <ip> <mask>
Switch(config-if)# no shutdown
Switch(config-if)# exit
```
- [ ] Layer 2 switch: set the default gateway
```cisco
Switch(config)# ip default-gateway <gateway>
```
- [ ] Layer 3 switch with `ip routing`: use `ip route 0.0.0.0 0.0.0.0 <next-hop>` instead.
- [ ] Optional out-of-band port (Catalyst 9200L): it sits in its own VRF and had no address in your task:
```cisco
Switch(config)# interface GigabitEthernet0/0
Switch(config-if)# vrf forwarding Mgmt-vrf
Switch(config-if)# no ip address
```
- [ ] Save.

## Check it worked
- [ ] `show ip interface brief` shows the SVI with the IP.
- [ ] You can ping the gateway from the switch and the switch from your laptop.

## Gotchas
- The SVI is `up/down` until some port in that VLAN has link and is up. That is expected.
- Check whether `ip routing` is on before choosing `ip default-gateway` vs `ip route`.
- In your cold-mill notes the VLAN 40 address is written `192.16.8.204`. That looks like a possible typo for `192.168.x`. Check the real one before copying it.

## Source notes
- [[01-Notes/01-Beginner/02-Industrial_Networking/01-Tasks/08-Switch_Configuration/01-Switch_Configuration|01-Switch_Configuration]]
- [[02-initial_switch_configuration|02-initial_switch_configuration]]
- [[05-basic_management_setup_real_ssh|05-basic_management_setup_real_ssh]]
