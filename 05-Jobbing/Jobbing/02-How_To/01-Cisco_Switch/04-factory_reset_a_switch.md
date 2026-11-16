---
tags: [jobbing, how-to, cisco]
---
# Factory reset a switch

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** You are redeploying, decommissioning or handing off a switch and want it fully clean.

## What you need
- [ ] Console cable (the switch will not be reachable over the network afterwards)
- [ ] Certainty that this is the right switch: check the hostname and neighbours' `show cdp neighbors`.

## Steps
- [ ] Look at flash first:
```cisco
Switch# dir flash:
```
- [ ] Erase the config **and** the VLAN database (they are separate):
```cisco
Switch# erase startup-config
Switch# delete flash:vlan.dat
```
- [ ] Reload and answer **no** to saving:
```cisco
Switch# reload
System configuration has been modified. Save? [yes/no]: no
Proceed with reload? [confirm]
```
- [ ] If it drops into the initial setup dialog, type `no`.

## Check it worked
- [ ] Prompt is `Switch>` (no hostname).
- [ ] `show vlan brief` shows VLAN 1 only.
- [ ] `show vtp status` shows configuration revision **0**.

## Gotchas
- Erasing only `startup-config` leaves `vlan.dat`: old VLANs and a possibly high VTP revision survive. Plug that switch into a live VTP domain and it can overwrite VLANs on every other switch.
- Answering yes to "Save?" undoes the erase.
- After the reload you need the console. SSH/vty/enable config is gone.
- Run `dir flash:` first. Flash names differ by model, do not assume.

## Source notes
- [[02-factory_reset_and_flash_cleanup|02-factory_reset_and_flash_cleanup]]
