---
tags: [jobbing, guide, server]
---
# HPE ProLiant server: from power-on to VMs and a firewall

↩ Back to the index: [[00-index|Jobbing index]]

> **Goal:** Get an HPE ProLiant DL360p Gen8 running VMware ESXi with its network, a few VMs, and a virtual pfSense firewall.

## Before you start
- [ ] HPE ProLiant DL360p Gen8, two Ethernet cables (one for the dedicated **iLO** port, one for a production NIC), a laptop, a switch
- [ ] An OS ISO (your task used **VMware ESXi 6.5**) and a USB stick
- [ ] Keys to know (see [[02-boot_and_setup_keys|the keys page]]): **F8** iLO setup, **F5** storage admin, **F9** BIOS (RBSU), **F11** one-time boot menu
- [ ] Lab addressing plan from your task: VLAN 10 = management `192.168.10.0/24`, VLAN 11 = `192.168.11.0/24`, VLAN 12 = `192.168.12.0/24`

## Part 1: See the server (screen or iLO)
- [ ] [[01-connect_to_the_server_screen_or_ilo|Connect to the server]]

## Part 2: Reset it (if it is not clean)
- [ ] [[02-reset_the_server_to_defaults|Reset the server]]

## Part 3: Storage
- [ ] RAID 1 for the OS, RAID 5 for data, BIOS power profile and boot order. [[03-build_raid_arrays_and_set_boot_order|RAID and boot order]]

## Part 4: Install ESXi
- [ ] Bootable USB with Rufus (partition scheme **MBR**), boot menu, install. [[04-install_esxi_from_usb|Install ESXi]]

## Part 5: ESXi networking
- [ ] vSwitch with the bonded NICs, port groups per VLAN, IP hash. [[05-configure_esxi_networking_and_port_groups|ESXi networking]]

## Part 6: VMs
- [ ] [[06-create_a_vm|Create a VM]]

## Part 7: Virtual firewall
- [ ] [[07-set_up_a_pfsense_firewall_vm|pfSense VM]]
- [ ] [[08-lock_down_pfsense_gui_to_management_vlan|Lock down the GUI]]

## Post-install checklist (good practice in production)
- [ ] Set **NTP** for accurate time
- [ ] Back up the host configuration
- [ ] Apply the latest ESXi patches
- [ ] Check hardware health under **Monitor, Hardware**

## Sub-topics (how-to guides)
| Need to… | Open |
|---|---|
| See the server screen, or reach iLO | [[01-connect_to_the_server_screen_or_ilo|Connect to the server screen or iLO]] |
| Reset the server to defaults | [[02-reset_the_server_to_defaults|Reset the server to defaults]] |
| Build RAID arrays, BIOS power and boot order | [[03-build_raid_arrays_and_set_boot_order|Build RAID arrays and set boot order]] |
| Install ESXi from a USB stick | [[04-install_esxi_from_usb|Install ESXi from USB]] |
| Configure ESXi networking and port groups | [[05-configure_esxi_networking_and_port_groups|Configure ESXi networking and port groups]] |
| Create a VM | [[06-create_a_vm|Create a VM]] |
| Install a pfSense firewall VM | [[07-set_up_a_pfsense_firewall_vm|Set up a pfSense firewall VM]] |
| Lock the pfSense GUI to the management VLAN | [[08-lock_down_pfsense_gui_to_management_vlan|Lock down the pfSense GUI]] |

## Final checklist
- [ ] Server reachable on screen or via iLO
- [ ] RAID arrays built, boot order set
- [ ] ESXi installed, management IP reachable from your PC (ping both ways)
- [ ] ESXi uplinks bonded with matching switch config
- [ ] VMs created on the right port groups and pingable
- [ ] Firewall routing between the VLANs and its GUI reachable only from management

## Source notes
- [[00-server_configuration|HPE ProLiant DL360p Gen8 configuration sub-task]]
- [[03-server_setup_documentation|Server setup documentation]]
- [[04-creating_vms_documentation|Creating VMs]]
- [[05-firewall_configuration|Firewall configuration (pfSense)]]
- [[01-sun_daddy_network_task|Sun Daddy network task]]
