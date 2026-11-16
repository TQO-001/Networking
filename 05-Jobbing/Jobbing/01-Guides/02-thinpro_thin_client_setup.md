---
tags: [jobbing, guide, thin-client]
---
# HP ThinPro thin client: from USB stick to a self-starting SCADA screen

↩ Back to the index: [[00-index|Jobbing index]]

> **Goal:** Install ThinPro on an HP Elite t655, give it its network identity, remote access and a locked-down Ignition Perspective screen that starts by itself.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## Before you start
- [ ] Windows PC with internet (to run HP ThinUpdate) and a USB flash drive (HP lists **8 GB or larger** for ThinPro) ◇
- [ ] The device name and IP for this unit, written on a label before you start
- [ ] Network plan (OT network, VLAN 593 Ignition): subnet `192.168.193.0/24`, mask `255.255.255.0`, gateway `192.168.193.1`, Ignition server `192.168.193.2:8088`
- [ ] Naming: `IND-ING-CCL2-<PROCESS>`. The four units in your task:

| Hostname | Static IP |
|---|---|
| IND-ING-CCL2-COATER1 | 192.168.193.129 |
| IND-ING-CCL2-COATER2 | 192.168.193.128 |
| IND-ING-CCL2-LEVELLER | 192.168.193.127 |
| IND-ING-CCL2-EXIT | 192.168.193.126 |

## Part 1: Make the bootable USB
- [ ] On the Windows PC run HP ThinUpdate, download the ThinPro image for the t655 onto the USB stick. Details: [[01-make_a_thinpro_bootable_usb|Make a ThinPro bootable USB]]

## Part 2: Install the image on the thin client
- [ ] Plug the USB into the front port, power on, tap **F9** for the boot menu, pick the USB, restore the factory image, pull the USB when it reboots. Details: [[02-reimage_a_thin_client_from_usb|Reimage from USB]]

## Part 3: First boot: admin mode, static IP, hostname
- [ ] Switch to Administrator mode, set the static IP, mask and gateway, set the hostname, ping the gateway. Details: [[03-set_static_ip_hostname_and_admin_mode|Static IP, hostname, admin mode]]

## Part 4: Remote access
- [ ] Enable VNC and start it at boot so you never need to visit the unit again. Details: [[04-enable_vnc_remote_access|Enable VNC]]

## Part 5: The screen it shows
Pick **one**:
- [ ] **Browser kiosk** straight onto the Ignition process page (what your task asked for): [[05-set_up_a_kiosk_browser_for_ignition_perspective|Kiosk browser]]
- [ ] **Ignition Perspective Workstation** app (the longer route from your master guide): [[06-install_perspective_workstation_on_thinpro|Perspective Workstation]]

## Part 6: Make it start on its own
- [ ] App/browser auto-starts after boot, and the unit powers itself on after a power cut. Details: [[07-make_the_thin_client_start_on_its_own|Start on its own]]

## Sub-topics (how-to guides)
| Need to… | Open |
|---|---|
| Create the bootable USB (HP ThinUpdate) | [[01-make_a_thinpro_bootable_usb|Make a ThinPro bootable USB]] |
| Install the image from the USB | [[02-reimage_a_thin_client_from_usb|Reimage a thin client from USB]] |
| Static IP, hostname, admin mode | [[03-set_static_ip_hostname_and_admin_mode|Set static IP, hostname and admin mode]] |
| Remote desktop (VNC) | [[04-enable_vnc_remote_access|Enable VNC remote access]] |
| Locked-down browser on the Ignition process page | [[05-set_up_a_kiosk_browser_for_ignition_perspective|Set up a kiosk browser for Ignition Perspective]] |
| Install Perspective Workstation and fix browser errors | [[06-install_perspective_workstation_on_thinpro|Install Perspective Workstation on ThinPro]] |
| Auto-start the app and auto power-on | [[07-make_the_thin_client_start_on_its_own|Make the thin client start on its own]] |
| Remove Perspective Workstation again | [[08-remove_perspective_workstation|Remove Perspective Workstation]] |

## Final checklist
- [ ] Chassis labelled with hostname and IP
- [ ] Gateway pings
- [ ] VNC connects from a workstation
- [ ] Reboot: unit comes straight up in full-screen SCADA with no desktop or browser controls
- [ ] Pull the power and restore it: unit turns itself on and comes back (if the BIOS option exists on your model)

## Source notes
- [[01-thin_client_setup|HP Elite t655 deployment guide (task note)]]
- [[02-ignition_perspective_workstation_master_guide|Ignition Perspective Workstation on ThinPro: master guide]]
