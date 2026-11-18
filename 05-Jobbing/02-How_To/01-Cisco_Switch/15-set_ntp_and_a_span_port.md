---
tags: [jobbing, how-to, cisco]
---
# Set NTP and a SPAN port

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** The switch clock must follow a time server, or you need to mirror traffic to a capture port.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] NTP server IP for the site
- [ ] Which VLANs/ports to mirror and a free destination port

## Steps
- [ ] NTP:
```cisco
Switch(config)# ntp server <ntp-ip>
```
(Cold-mill switch used `172.16.12.21`.)
- [ ] SPAN (mirror) session:
```cisco
Switch(config)# monitor session 1 source vlan 1 , 10 - 11 , 20 - 21 , 30 , 40
Switch(config)# monitor session 1 destination interface Te1/1/4 encapsulation replicate
```
- [ ] Plug the capture device into the destination port.

## Check it worked
- [ ] `show ntp status` ◇ shows synchronized (may take a few minutes).
- [ ] `show monitor session 1` ◇ lists sources and destination.

## Gotchas
- The reference config used `Te1/0/20` as the SPAN destination but the 9200L only has four 10G ports (`Te1/1/1-4`). Check the port exists on your model.
- A SPAN destination does not behave like a normal trunk port, even if it still carries trunk config.
- VLAN 21 was in the source list but did not exist on that switch.

## Source notes
- [[01-Notes/01-Beginner/02-Industrial_Networking/01-Tasks/08-Switch_Configuration/01-Switch_Configuration|01-Switch_Configuration]]
- [[02-issues_and_changes|02-issues_and_changes]]
