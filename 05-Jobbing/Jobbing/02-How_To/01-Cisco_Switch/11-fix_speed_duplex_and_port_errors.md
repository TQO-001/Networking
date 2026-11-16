---
tags: [jobbing, how-to, cisco]
---
# Fix speed, duplex and port errors

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** A link is slow, flapping, or counters show CRC/late-collision errors.

## What you need
- [ ] Access to both ends of the link

## Steps
- [ ] Overview, then the specific port:
```cisco
Switch# show interfaces status
Switch# show interfaces <port>
Switch# show interfaces <port> | include duplex|speed
Switch# show interfaces <port> counters errors
```
- [ ] Best fix: auto-negotiate on **both** ends. On the Catalyst 9200L the command to turn auto back on is `negotiation auto`.
- [ ] If you must force, force **both** ends to the same values:
```cisco
Switch(config)# interface <port>
Switch(config-if)# speed 100
Switch(config-if)# duplex full
```
- [ ] Re-check the counters after a few minutes. Replace the cable if CRC errors keep climbing.

## Check it worked
- [ ] Both ends report the same speed and duplex.
- [ ] Error counters stop increasing.

## Gotchas
- Forcing only one side guarantees a mismatch.
- "Connected" does not mean healthy. A bad cable can degrade the link without it ever going down.
- Some links in the plant are FastEthernet at one end (the SL7 notes list three), so the whole link runs at 100 Mb/s.

## Source notes
- [[06-interface_troubleshooting_and_errdisable_recovery|06-interface_troubleshooting_and_errdisable_recovery]]
- [[02-issues_and_changes|02-issues_and_changes]]
- [[01-topology_and_connections|01-topology_and_connections]]
