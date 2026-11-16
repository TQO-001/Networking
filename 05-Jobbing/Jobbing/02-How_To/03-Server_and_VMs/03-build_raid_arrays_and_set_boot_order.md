---
tags: [jobbing, how-to, server]
---
# Build RAID arrays and set boot order

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** The server needs a boot volume and data volume, and should boot from them.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] Two identical disks for the OS array, remaining disks for data
- [ ] Screen access

## Steps
- [ ] Reboot and press **F5** for HPE Smart Storage Administrator. ◇ If nothing happens, the Smart Array P420i option ROM is usually reached with **F8** and Intelligent Provisioning with **F10**.
- [ ] Create **RAID 1** from two identical drives, name it `OS_BOOT`, use the maximum size.
- [ ] Create **RAID 5** from the remaining drives, name it `DATA_STORE`.
- [ ] Reboot and press **F9** for the ROM-Based Setup Utility (BIOS).
- [ ] Set **Power Management Controller Profile** to *Balanced Power and Performance* (quieter, lower power for lab use).
- [ ] Boot order: `OS_BOOT` first, then USB.

## Check it worked
- [ ] Both logical drives show as OK in SSA.
- [ ] The server tries `OS_BOOT` first and USB second.

## Gotchas
- Your note says it plainly: you skipped the RAID 5 step the first time and paid for it later. Do it.
- RAID 5 was already configured on the server in your task. Practising the build is part of the job.

## Source notes
- [[03-server_setup_documentation|03-server_setup_documentation]]
- [[00-server_configuration|00-server_configuration]]
