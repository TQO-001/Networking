---
tags: [jobbing, how-to, hardware]
---
# Wire AC power to the PSU

↩ Back to the guide: [[06-industrial_switch_hardware_install|Cisco IE-3300 industrial switch: mount, wire and power up]]

> **Use this when:** The PWR-IE240W-PCAC-L has a terminal block, not a plug, so you hardwire a power cord to it.

## What you need
- [ ] A 3-wire AC cord, copper, rated at least 75 C (167 F), **18 to 12 AWG** (the checklist in your note says 14 to 18 AWG, check the PSU datasheet)
- [ ] Strippers and a screwdriver
- [ ] Source voltage matches the label (100 to 240 V AC)

## Steps
- [ ] **Unplug the cord from the wall.** Never wire it while connected.
- [ ] Cut off the female end. Strip the outer jacket back about **50 mm (2 in)**, then each conductor about **7 mm (0.28 in)**.
- [ ] Identify the conductors. South Africa/Europe: **brown = Line (L)**, **blue = Neutral (N)**, **green/yellow = Earth**. (North America: black L, white N, green/yellow earth.)
- [ ] On the PSU input terminal block, **Ground first**, then **Neutral**, then **Line**. Tighten each screw.
- [ ] Tug each wire. No stray strands, nothing touching the next terminal.
- [ ] Close the AC terminal safety cover.
- [ ] Only then plug the cord in.

## Check it worked
- [ ] Every wire holds under a gentle tug and no bare strands show.
- [ ] Power LED lights once the DC side is also wired.

## Gotchas
- Always connect **ground first**.
- Confirm the circuit is de-energized and locked out before you touch a terminal.

## Source notes
- [[03-hardware_installation_guide|03-hardware_installation_guide]]
