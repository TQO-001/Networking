---
tags: [jobbing, how-to, cisco]
---
# Turn on port security

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** Only specific devices should be allowed on an access port.

## What you need
- [ ] An access port in the right VLAN
- [ ] A plan for what happens on a violation

## Steps
- [ ] On the access port:
```cisco
Switch(config)# interface <port>
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan <id>
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation restrict
```
- [ ] If you use `violation shutdown`, enable recovery so a mistake does not need a visit:
```cisco
Switch(config)# errdisable recovery cause psecure-violation
Switch(config)# errdisable recovery interval 300
```
- [ ] Save.

## Check it worked
- [ ] `show port-security` and `show port-security interface <port>`.
- [ ] `show port-security address` lists learned MACs.

## Gotchas
- `maximum` does nothing until `switchport port-security` is on.
- Do not enable sticky on a port that already has an unmanaged switch behind it. The first N MACs get learned and the rest become violations.
- Access ports only. Trunks have extra rules.

## Source notes
- [[10-port_security_fundamentals|10-port_security_fundamentals]]
