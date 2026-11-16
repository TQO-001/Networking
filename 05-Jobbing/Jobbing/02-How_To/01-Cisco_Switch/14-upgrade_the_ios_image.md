---
tags: [jobbing, how-to, cisco]
---
# Upgrade the IOS image

↩ Back to the guide: [[01-cisco_switch_basic_setup|Cisco switch: basic setup]]

> **Use this when:** A new IOS or IOS XE image has to be loaded onto the switch.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] The image file on a TFTP server
- [ ] Management IP working, TFTP server pingable
- [ ] Free space in flash
- [ ] A maintenance window: the switch reloads

## Steps
- [ ] Check space and reachability:
```cisco
Switch# dir flash:
Switch# ping <tftp-server-ip>
```
- [ ] If tight on space, delete the old image first.
- [ ] Copy the new image:
```cisco
Switch# copy tftp: flash:
Address or name of remote host []? <tftp-server-ip>
Source filename []? <image>.bin
```
- [ ] **Verify before reloading:** `verify flash:<image>.bin`
- [ ] Point the boot variable at it, save, reload:
```cisco
Switch(config)# boot system flash:<image>.bin
Switch# copy running-config startup-config
Switch# reload
```

## Check it worked
- [ ] `show version` shows the new version.
- [ ] `show boot` shows the new image.

## Gotchas
- Copying without checking space can leave a half-written file.
- Forgetting `boot system` can boot the old image.
- Reloading before `verify` risks a switch with no working image (recoverable via Xmodem from ROMMON, but slow).
- ◇ Catalyst 9200L and IE-3300 run IOS XE (install mode, `.bin` packages). The file names and exact `boot system` / `install` steps differ from the 2960-style example in your notes. Follow Cisco's upgrade guide for the model.

## Source notes
- [[03-ios_image_and_flash_management|03-ios_image_and_flash_management]]
