---
tags: [jobbing, how-to, cisco]
---
# Restore or roll back a config

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** A change broke something and you want yesterday's config back, or a replacement switch needs the old one's config.

## What you need
- [ ] A saved `.cfg` file on a TFTP server
- [ ] Reachability to the TFTP server (ping it first)

## Steps
**Merge a saved config in (does NOT remove anything):**
```cisco
Switch# copy tftp: running-config
Address or name of remote host []? <tftp-server-ip>
Source filename []? <file>.cfg
Switch# copy running-config startup-config
```
**True rollback (makes running-config match the file exactly, additions and removals):**
```cisco
Switch# copy tftp: flash:
Switch# configure replace flash:<file>.cfg
```
**Safer over SSH (auto-reverts if you lock yourself out):**
```cisco
Switch# configure replace flash:<file>.cfg time 5
Switch# configure confirm
```
Run `configure confirm` yourself once you have checked the change is good. Then save.

## Check it worked
- [ ] `show running-config | include hostname` and a few key sections match the backup.
- [ ] `show archive config differences` shows what changed (if archive is enabled).

## Gotchas
- `copy tftp: running-config` only **merges**. Anything live that is not in the file stays. Use `configure replace` for an exact rollback.
- Before a big remote change touching management VLAN, your own uplink trunk or the vty lines, set up the `time` safety net or have console access ready.

## Source notes
- [[04-backup_restore_and_config_rollback|04-backup_restore_and_config_rollback]]
