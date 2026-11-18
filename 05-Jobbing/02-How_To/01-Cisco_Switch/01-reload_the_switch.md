---
tags: [jobbing, how-to, cisco]
---
# Reload the switch

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** You need to restart the switch (new IOS image, stuck state, planned maintenance).
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] Console or SSH access
- [ ] Permission: a reload drops every device on that switch for roughly 60 to 90 seconds.

## Steps
- [ ] Save first (unless you deliberately want to discard changes): `copy running-config startup-config`
- [ ] Reload:
```cisco
Switch# reload
System configuration has been modified. Save? [yes/no]: yes
Proceed with reload? [confirm]
```
- [ ] ◇ Scheduled and safety variants (standard IOS): `reload in 5` (minutes), `reload at 22:30`, and `reload cancel` to abort. `reload in 5` before a risky remote change gives you an automatic way back if you lock yourself out, as long as you have not saved.
- [ ] Wait for it to come back, reconnect, run `show version`.

## Check it worked
- [ ] `show version` shows a fresh uptime and `Configuration register is 0x2102`.
- [ ] `show running-config | include hostname` is your hostname (not `Switch`).

## Gotchas
- After an intentional `erase startup-config` answer **no** to "Save?". Answering yes writes the old config straight back.
- If it comes up blank every time, the config register may still be `0x2142` from a password recovery. See the recover-a-lost-password guide.
- Your SSH session dies on reload. Know how you will reconnect (console, or wait for the management IP).

## Source notes
- [[02-factory_reset_and_flash_cleanup|02-factory_reset_and_flash_cleanup]]
- [[01-boot_process_and_password_recovery|01-boot_process_and_password_recovery]]
