---
tags: [jobbing, guide, troubleshooting]
---
# Legacy industrial PC: dead machine, replacement and drivers

↩ Back to the index: [[00-index|Jobbing index]]

> **Goal:** Diagnose an old industrial PC that will not start, move it onto replacement hardware and get drivers and activation working.

## Before you start
- [ ] The machine's job: do the cards in it (e.g. PCI data-acquisition or control cards) need legacy slots?
- [ ] A spare PC with enough legacy slots (your case needed at least 3 PCI slots)
- [ ] Tools: screwdrivers, a USB keyboard/mouse, a monitor, a drive to clone onto

## The order that worked
- [ ] Isolate: remove all cables, open the chassis ([[01-diagnose_a_dead_industrial_pc|Diagnose a dead PC]])
- [ ] **Clone the disk before repairing anything** (boot loops often mean the drive is dying)
- [ ] Fix or replace the hardware, move the cloned disk and the cards into the new chassis
- [ ] Install missing drivers by hardware ID ([[02-install_missing_drivers_by_hardware_id|Install drivers by hardware ID]])
- [ ] Activate the OS ([[03-activate_windows_xp_by_phone|Activate Windows XP by phone]])

## Sub-topics (how-to guides)
| Need to… | Open |
|---|---|
| Machine has no power LED / no POST | [[01-diagnose_a_dead_industrial_pc|Diagnose a dead industrial PC]] |
| A device has no driver after moving hardware | [[02-install_missing_drivers_by_hardware_id|Install missing drivers by hardware ID]] |
| Windows XP needs activating without internet | [[03-activate_windows_xp_by_phone|Activate Windows XP by phone]] |

## Final checklist
- [ ] Disk cloned and original kept untouched
- [ ] Machine boots and shows BIOS and OS
- [ ] All cards present and drivers show no errors in Device Manager
- [ ] OS activated
- [ ] Network up

## Source notes
- [[03-troubleshooting|Server diagnoses: troubleshooting]]
