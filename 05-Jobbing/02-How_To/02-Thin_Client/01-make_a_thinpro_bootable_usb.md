---
tags: [jobbing, how-to, thin-client]
---
# Make a ThinPro bootable USB

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** A thin client needs ThinPro (re)installed and you need an installer stick.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] A Windows PC with internet
- [ ] A USB flash drive, 8 GB or bigger ◇ (it will be **erased**)
- [ ] **HP ThinUpdate** (HP's free "Recovery Image and Software Download Tool", from the HP support page for the thin client model) ◇

## Steps
- [ ] Install and open HP ThinUpdate (accept any update prompt).
- [ ] Main menu: **Download a thin client recovery image to local storage or a USB drive** ◇
- [ ] On the Image Downloads screen choose: **Platform** = your model (HP Elite t655), **Operating system** = HP ThinPro, **Image** = the version you want (your task used **ThinPro 8.0**). ◇
- [ ] **Target** = USB drive, select your stick in the list, click **Create**.
- [ ] Confirm the warning that the drive will be formatted. Wait for "completed successfully", then eject the stick.
- [ ] Label the stick with the ThinPro version and the model it is for.

## Check it worked
- [ ] ThinUpdate reports success.
- [ ] The stick boots a thin client of that model in the next guide.

## Gotchas
- ThinUpdate **formats** the drive. Back up anything on it.
- ◇ Do not try Rufus or a hand-extracted `.dd.gz` file for ThinPro. Another HP user found only a ThinUpdate-made stick would boot on their thin client (you do use Rufus for **ESXi** on the server, that is a different job).
- ◇ Use a stick that is not tiny or ancient. HP notes that not every USB device has been tested with the tool.
- Your task also allowed **Windows 10 IoT Enterprise LTSC** as the OS. ThinUpdate makes that image too. Pick the one the task asks for.

## Source notes
- [[01-thin_client_setup|01-thin_client_setup]]
