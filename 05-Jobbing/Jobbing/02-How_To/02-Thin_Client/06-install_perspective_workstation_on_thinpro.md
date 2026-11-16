---
tags: [jobbing, how-to, thin-client]
---
# Install Perspective Workstation on ThinPro

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** You need the Ignition Perspective **Workstation** app on a ThinPro unit (instead of a browser), or you hit "Unable to create browser instances".

## What you need
- [ ] The installer archive `perspectiveworkstation.tar.gz` on a USB stick
- [ ] A terminal on the thin client (admin mode)
- [ ] Know your gateway URL, project name and the non-root session user (your notes use `user`)

## Steps
- [ ] Confirm the platform: `uname -m` (expect `x86_64`) and `cat /etc/os-release`.
- [ ] Confirm persistent storage is writable:
```bash
mkdir -p /persistent/ignition
touch /persistent/ignition/write_test && rm /persistent/ignition/write_test
```
- [ ] Copy the archive from the stick (find it with `lsblk`) and extract it **into persistent storage** (anything in `/tmp` is wiped on reboot):
```bash
cp /tmp/tmpfs/media/STORE_N_GO_sda1/perspectiveworkstation.tar.gz /tmp/
tar -xzvf /tmp/perspectiveworkstation.tar.gz -C /persistent/ignition
chmod -R a+rX /persistent/ignition
rm /tmp/perspectiveworkstation.tar.gz
```
- [ ] Launch it as the **normal user, not root**:
```bash
su - user -c "cd /persistent/ignition/perspectiveworkstation && DISPLAY=:0 ./perspectiveworkstation.sh"
```
- [ ] In Workstation set Gateway address and the project, then set it as the **Default Application**.

## Check it worked
- [ ] A Perspective project opens and renders content (not a blank window).
- [ ] Still works after a reboot (files are under `/persistent`).

## Gotchas
- **"Unable to create browser instances"**: Chromium (inside the Workstation) refuses to start its sandbox as `root`. Run as the normal user. If it still fails, read `/home/user/.ignition/clientlauncher-data/workstation.log` for the real error instead of re-applying the fix blindly.
- Installing into `/tmp` means a manual reinstall after every reboot.
- Autostart is a separate job: [[07-make_the_thin_client_start_on_its_own|start on its own]].
- Your master guide notes it was written with AI from your own mistakes. Test it on one unit first.

## Source notes
- [[02-ignition_perspective_workstation_master_guide|02-ignition_perspective_workstation_master_guide]]
