---
tags: [jobbing, how-to, cisco]
---
# Save and back up the config

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** You changed something and want it to survive a reboot, or you want a copy off the switch.

## What you need
- [ ] Enable-mode access
- [ ] For an off-box backup: a TFTP server reachable from the switch (laptop running a TFTP server works) and its IP.

## Steps
- [ ] Make the change permanent:
```cisco
Switch# copy running-config startup-config
```
(`write memory` does the same.) Until you do this a reboot or power loss reverts everything.
- [ ] Back it up off the switch, with a name that says which switch and when:
```cisco
Switch# copy running-config tftp:
Address or name of remote host []? <tftp-server-ip>
Destination filename [switch-confg]? <hostname>-<yyyy-mm-dd>.cfg
```
- [ ] Check the file landed in the TFTP server's folder.
- [ ] Habit: back up straight after every successful change, not "later".

## Check it worked
- [ ] `show startup-config` matches what you intended.
- [ ] The `.cfg` file exists on the TFTP side and is not empty.

## Gotchas
- A config that lives only in the switch's NVRAM is saved, not backed up.
- Do not accept the default filename `switch-confg`; six months later it tells you nothing.
- A backup you have never restored is a guess. Test a restore on a lab switch now and then.

## Source notes
- [[04-backup_restore_and_config_rollback|04-backup_restore_and_config_rollback]]
