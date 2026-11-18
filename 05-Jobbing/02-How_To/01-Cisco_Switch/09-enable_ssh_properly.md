---
tags: [jobbing, how-to, cisco]
---
# Enable SSH properly

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** You want real, encrypted remote access and Telnet switched off.

## What you need
- [ ] Console access
- [ ] A hostname that is not `Switch` and an `ip domain-name` set **before** you generate keys
- [ ] A management IP the laptop can reach ([[08-set_a_management_ip_and_gateway|guide]])

## Steps
- [ ] Identity first:
```cisco
Switch(config)# hostname <name>
Switch(config)# ip domain-name <domain>
```
- [ ] Local user and enable secret:
```cisco
Switch(config)# enable secret <password>
Switch(config)# username <user> privilege 15 secret <password>
```
- [ ] Generate the key (2048 bits) and lock SSH to version 2:
```cisco
Switch(config)# crypto key generate rsa
Switch(config)# ip ssh version 2
Switch(config)# ip ssh time-out 60
Switch(config)# ip ssh authentication-retries 3
```
- [ ] Lines: use the local user database and SSH only:
```cisco
Switch(config)# line console 0
Switch(config-line)# login local
Switch(config-line)# logging synchronous
Switch(config-line)# exit
Switch(config)# line vty 0 15
Switch(config-line)# login local
Switch(config-line)# transport input ssh
Switch(config-line)# exit
```
- [ ] Optional, as on the cold-mill switch: `ip scp server enable`, `login on-success log`.
- [ ] Save, then **test from a laptop** while the console is still plugged in.

## Check it worked
- [ ] `show ip ssh` shows SSH enabled, version 2.
- [ ] `show crypto key mypubkey rsa` shows a key.
- [ ] PuTTY to the switch IP, port 22, logs in. Port 23 (Telnet) is refused.

## Gotchas
- SSH will not start with no key. No key means one of: default hostname, no domain name, `crypto key generate rsa` never run.
- `login` (not `login local`) ignores the username you typed and uses a shared line password.
- A plant switch in your notes still allowed `transport input telnet ssh`. That sends passwords in clear text. Prefer `ssh` only.

## Source notes
- [[05-basic_management_setup_real_ssh|05-basic_management_setup_real_ssh]]
- [[01-Notes/01-Beginner/02-Industrial_Networking/01-Tasks/08-Switch_Configuration/01-Switch_Configuration|01-Switch_Configuration]]
