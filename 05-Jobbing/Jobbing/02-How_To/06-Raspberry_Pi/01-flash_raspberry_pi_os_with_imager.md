---
tags: [jobbing, how-to, raspberry-pi]
---
# Flash Raspberry Pi OS with Imager

↩ Back to the guide: [[05-raspberry_pi_and_node_red_setup|Raspberry Pi: OS, remote access and Node-RED that survives a reboot]]

> **Use this when:** A Pi needs its OS written to a card or drive.

## What you need
- [ ] A computer with **Raspberry Pi Imager** installed
- [ ] A blank microSD card or USB drive (it will be **erased**)

## Steps
- [ ] Open Imager, choose your **Raspberry Pi device**.
- [ ] **Choose OS**: *Raspberry Pi OS (64-bit)* for general desktop use. For your own image use the bottom entry **Use custom** and pick the `.img` (zip/gz/xz also work).
- [ ] **Choose Storage**: pick the card or drive carefully.
- [ ] Use **OS customisation** to pre-set hostname, user + password, Wi-Fi and **SSH**.
- [ ] **Write**. Insert the card in the Pi.
- [ ] Connect peripherals first and the power supply **last**. The Pi boots by itself.

## Check it worked
- [ ] First-boot setup screens appear (desktop) or the Pi shows up on the network (headless).

## Gotchas
- Writing erases the target. Triple-check which drive you picked.
- The Pi can also boot from USB, NVMe via a HAT, or network (newer models).

## Source notes
- [[03-raspberry_setup_and_configuration|03-raspberry_setup_and_configuration]]
