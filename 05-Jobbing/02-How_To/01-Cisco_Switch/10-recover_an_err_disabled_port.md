---
tags: [jobbing, how-to, cisco]
---
# Recover an err-disabled port

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** A port shows `err-disabled`, a device lost link after a loop, rogue device or port-security hit.

## What you need
- [ ] Enable-mode access
- [ ] Ability to see what is plugged into the port

## Steps
- [ ] Find the port and the cause:
```cisco
Switch# show interfaces status err-disabled
Switch# show port-security interface <port>
```
- [ ] **Fix the cause first** (remove the rogue device, break the loop, fix the cable). Re-enabling without that just trips it again.
- [ ] Bounce the port:
```cisco
Switch(config)# interface <port>
Switch(config-if)# shutdown
Switch(config-if)# no shutdown
```
- [ ] One-off global setting so ports heal themselves:
```cisco
Switch(config)# errdisable recovery cause psecure-violation
Switch(config)# errdisable recovery cause bpduguard
Switch(config)# errdisable recovery cause link-flap
Switch(config)# errdisable recovery interval 60
```
(Your cold-mill switch listed about 20 causes with a 60 second interval. See [[01-Notes/01-Beginner/02-Industrial_Networking/01-Tasks/08-Switch_Configuration/01-Switch_Configuration|the task note]].)

## Check it worked
- [ ] `show interfaces status` shows `connected`.
- [ ] `show errdisable recovery` lists the causes you enabled.

## Gotchas
- `disabled` (someone typed `shutdown`) and `err-disabled` (protective auto-shutdown) are different. A plain `no shutdown` is the fix for the first only.
- The Catalyst 9200L in your task rejected `errdisable recovery cause link-monitor-failure` and `oam-remote-failure`. They are not supported on that model.
- Ports that show `connected` can still be racking up errors. Check counters.

## Source notes
- [[06-interface_troubleshooting_and_errdisable_recovery|06-interface_troubleshooting_and_errdisable_recovery]]
- [[02-issues_and_changes|Issues found during the 9200L task]]
