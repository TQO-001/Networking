---
tags: [jobbing, index]
---
# Jobbing: quick how-to guides for the job

Short, do-it-now guides built from the tasks you have already done. Open a **guide** for the full basics of a job, then jump into a **how-to** for one specific thing.

> **Legend:** `- [ ]` boxes are for ticking off as you work. ◇ marks anything that is **not from your notes** (general knowledge or the web). Check those on the device. Placeholders look like `<this>`. Never type real passwords into notes.

## Guides (start here)
| #   | Guide                                     | How-to files                                                             |                                                                      |
| --- | ----------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 1   | [[01-cisco_switch_basic_setup             | Cisco switch: basic setup]]                                              | 16 (reload, backup, VLANs, trunks, SSH, errdisable, EtherChannel...) |
| 2   | [[02-thinpro_thin_client_setup            | HP ThinPro thin client: from USB stick to a self-starting SCADA screen]] | 8 (bootable USB to auto-start)                                       |
| 3   | [[03-hpe_server_esxi_and_vms              | HPE ProLiant server: from power-on to VMs and a firewall]]               | 8 (iLO, RAID, ESXi, VMs, pfSense)                                    |
| 4   | [[04-moxa_wireless_bridge_setup           | Moxa AWK access points: wireless bridge between two sites]]              | 3 (+ trunk guide)                                                    |
| 5   | [[05-raspberry_pi_and_node_red_setup      | Raspberry Pi: OS, remote access and Node-RED that survives a reboot]]    | 6                                                                    |
| 6   | [[06-industrial_switch_hardware_install   | Cisco IE-3300 industrial switch: mount, wire and power up]]              | 2                                                                    |
| 7   | [[07-legacy_industrial_pc_troubleshooting | Legacy industrial PC: dead machine, replacement and drivers]]            | 3                                                                    |

## Reference
- [[01-work_vlan_list|Work VLAN list]]: plant, cold mill, crane switch and lab VLANs
- [[02-boot_and_setup_keys|Boot and setup keys]]: F8/F9/F11, thin client boot menu, Mode button
- [[03-default_logins_and_ports|Default logins and ports]]

## Quick fixes (most-opened)
- Restart a switch: [[01-reload_the_switch|Reload the switch]]
- Save and back up: [[02-save_and_back_up_the_config|Save and back up the config]]
- Add a VLAN across a link: [[07-set_up_a_trunk_and_add_a_vlan_to_it|Add a VLAN to a trunk]]
- Port went `err-disabled`: [[10-recover_an_err_disabled_port|Recover an err-disabled port]]
- See what a switch is doing: [[16-check_switch_status_show_commands|Show commands]]
- Thin client must auto-start: [[07-make_the_thin_client_start_on_its_own|Start on its own]]
- TightVNC will not connect to the Pi: [[03-connect_with_tightvnc_wayvnc_fix|WayVNC fix]]

## Practice tracker
Tick a line the first time you do that job for real.
- [ ] Basic switch setup end to end
- [ ] Reloaded a switch safely
- [ ] Backed up and restored a config
- [ ] Added a VLAN to a trunk on both ends
- [ ] Recovered an err-disabled port
- [ ] Built a ThinPro USB and reimaged a thin client
- [ ] Thin client auto-starts and survives a power cut
- [ ] Installed ESXi and created a VM
- [ ] Set up a Moxa master/slave pair
- [ ] Installed Node-RED that starts on boot
- [ ] Wired and powered an IE-3300

## Where the facts came from
Everything is taken from the task notes in this vault (each guide lists its source notes at the bottom). Items marked ◇ come from general knowledge or HP's published documentation.
