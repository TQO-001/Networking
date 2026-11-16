---
tags: [jobbing, how-to, troubleshooting]
---
# Install missing drivers by hardware ID

↩ Back to the guide: [[07-legacy_industrial_pc_troubleshooting|Legacy industrial PC: dead machine, replacement and drivers]]

> **Use this when:** After moving to new hardware, devices show in Device Manager as unknown and the vendor installer does not work (typical on Windows XP).

## What you need
- [ ] Another PC with internet and a USB stick for the files
- [ ] The device's **Hardware ID**

## Steps
- [ ] Open **Device Manager** on the broken machine, open the unknown device, **Details**, and note the **Hardware ID** / Device Instance Path.
- [ ] Download drivers for the machine model from the manufacturer's support page (yours: HP Compaq Elite 8300 CMT). Install what you can.
- [ ] For installers that fail, **extract the `.exe`** and look for `setup.exe`, or install the driver manually from the `.inf`.
- [ ] If the vendor package has no `.inf` for your hardware ID, find an older driver package that does. Your NIC example: Hardware ID `PCI\VEN_8086&DEV_1533` (Intel I210-AT); driver package **12.3.35.0** from 2012 contained `e1rxp5132.inf`.
- [ ] **Device Manager, Other devices, Ethernet Controller, Update Driver, Install from a list or specific location**, point at the folder with the `.inf`.

## Check it worked
- [ ] The device renames itself (e.g. *Intel(R) Ethernet Server Adapter I210-T1*) with no error code.
- [ ] The NIC gets a link and an IP lease.

## Gotchas
- Do not trust that the manufacturer's installer supports old Windows. Search by hardware ID instead of by product name.
- Drivers that need `setup.exe` from an extracted folder are common. Try both routes.

## Source notes
- [[03-troubleshooting|03-troubleshooting]]
