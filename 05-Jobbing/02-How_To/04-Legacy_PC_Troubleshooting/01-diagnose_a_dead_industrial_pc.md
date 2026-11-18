---
tags: [jobbing, how-to, troubleshooting]
---
# Diagnose a dead industrial PC

↩ Back to the guide: [[07-legacy_industrial_pc_troubleshooting|Legacy industrial PC: dead machine, replacement and drivers]]

> **Use this when:** Mains is connected, the network LEDs light, but there is no power LED, no fans and no POST.

## What you need
- [ ] Screwdrivers, ability to open the chassis
- [ ] A USB keyboard and VGA/DVI monitor for testing

## Steps
- [ ] Unplug everything: power, Ethernet, peripherals.
- [ ] Unlock and open the top cover to see the mainboard, power routing and cards.
- [ ] Disconnect the SATA drives from the PSU harness and board to rule out a short.
- [ ] Trace the front-panel wiring from the power button back to the board's front-panel header (`JFP1` / `FRONT_PANEL`). In your case the **Power SW, Reset SW and Power LED pins had come unseated**.
- [ ] Re-seat them per the chassis pinout.
- [ ] Reconnect mains, press the power button. Fans should spin and POST should start. Plug in a keyboard and screen and confirm you reach the BIOS.
- [ ] **Before any OS repair**, clone the disk (offline, block level, e.g. `dd` or Clonezilla) to a replacement drive.
- [ ] If the OS loops, boot rescue media (you used **DLC Boot**) and check the filesystem.

## Check it worked
- [ ] The machine reaches POST and the BIOS.

## Gotchas
- A boot loop on an old industrial drive often means failing media. Clone first, repair second.
- Your machine also had intermittent faults (VGA only worked at one angle, coil whine after about 5 minutes). Those pointed to replacing the whole board and moving to equivalent hardware.

## Source notes
- [[03-troubleshooting|03-troubleshooting]]
