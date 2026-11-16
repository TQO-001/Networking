---
tags: [jobbing, how-to, thin-client]
---
# Reimage a thin client from USB

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** You have a ThinUpdate USB stick and need to restore or install the OS on the unit.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] The bootable USB ([[01-make_a_thinpro_bootable_usb|guide]])
- [ ] Power adapter, keyboard and a monitor on the thin client
- [ ] Unit unboxed and checked for damage (mini PC, power brick, VESA bracket, accessories)

## Steps
- [ ] Plug the USB into a **front-panel** USB port.
- [ ] Power on and tap **F9** repeatedly to open the Boot Menu.
- [ ] Select the USB drive and restore the standard factory OS image.
- [ ] ◇ If the stick holds more than one image, a list appears. Type the number of the image you want and press Enter.
- [ ] Let imaging finish. When it reboots, **remove the USB**.
- [ ] Make sure the internal drive is enabled and **at the top of the boot order**.
- [ ] It should boot to the ThinPro desktop.

## Check it worked
- [ ] The thin client boots into the default Thin OS desktop with no USB inserted.

## Gotchas
- If it will not boot from the stick, try another front USB port or another stick before assuming the image is bad. ◇
- If you skip the boot order step it can keep trying the USB or boot nothing.
- Reimaging wipes the unit. Any settings (IP, VNC, kiosk) have to be redone.

## Source notes
- [[01-thin_client_setup|01-thin_client_setup]]
