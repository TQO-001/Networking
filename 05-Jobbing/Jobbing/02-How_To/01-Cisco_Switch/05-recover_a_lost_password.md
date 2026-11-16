---
tags: [jobbing, how-to, cisco]
---
# Recover a lost password

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** You are locked out of a switch (lost enable password, inherited switch).
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] Console cable and a terminal program
- [ ] Physical access to the switch and permission to power-cycle it.

## Steps
> [!warning] This is the procedure from your notes. It uses `confreg 0x2142`, which is router-style. ◇ Many Catalyst and IE switches use a different method (a `switch:` loader prompt, Mode button). Check Cisco's password-recovery page for the exact model (IE-3000, IE-3300, 9200L) before doing this on a production switch.

- [ ] Power-cycle the switch and interrupt boot: hold the **Mode button** while applying power (reliable on IE-3000 / fixed-config switches), or send a real Break within about 60 seconds. PuTTY's Ctrl+C is not a Break.
- [ ] At the loader prompt:
```text
rommon 1 > confreg 0x2142
rommon 2 > reset
```
- [ ] The switch boots with a blank config. Then:
```cisco
Switch> enable
Switch# copy startup-config running-config
Switch# configure terminal
Switch(config)# enable secret <new-password>
Switch(config)# line vty 0 15
Switch(config-line)# login local
Switch(config-line)# exit
Switch(config)# config-register 0x2102
Switch(config)# exit
Switch# copy running-config startup-config
Switch# reload
```
- [ ] Re-create the local user if needed: `username ind-it privilege 15 secret <password>`.

## Check it worked
- [ ] `show version` ends with `Configuration register is 0x2102`.
- [ ] After the reload the old hostname and VLANs are back.

## Gotchas
- **Forgetting `config-register 0x2102`** makes the switch ignore its saved config on every reboot. It looks like "the switch will not keep its config".
- `copy startup-config running-config` and `copy running-config startup-config` are opposites. Read the direction every time.
- This does not get around AAA/TACACS+ or login-banner acknowledgement.
- Tell whoever owns the network first. The reboot drops everything on the switch.

## Source notes
- [[01-boot_process_and_password_recovery|01-boot_process_and_password_recovery]]
