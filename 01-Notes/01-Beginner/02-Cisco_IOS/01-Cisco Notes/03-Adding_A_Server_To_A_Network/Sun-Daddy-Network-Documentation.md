# Sun Daddy Network - Documentation 

## 0. Devices on the Network
- **Switch 1 (SW1):** Cisco Catalyst IE-3300-8T2S-A feat. Cisco PWR-IE240W-PCAC-L
- **Switch 2 (SW2):** Cisco Catalyst IE-3300-8T2S-E
- **Server (SVR):** HPE ProLiant DL360p Gen8, running VMware ESXi
- **Virtual Firewall (vFW):** pfSense VM on the server - **one virtual NIC (em1)**, using VLAN sub-interfaces 
- **Laptop:** my personal laptop, used two ways 

## 1. Final Network Addressing Plan
This is the single source of truth. Every section below matches this table.

| Device                                    | Interface / Role                                           | IP Address        | Mask | Gateway         |
| ----------------------------------------- | ---------------------------------------------------------- | ----------------- | ---- | --------------- |
| vFW (pfSense)                             | LAN - VLAN 10, tag on em1 (`em1.10`)                       | `192.168.10.1`    | /24  | N/A             |
| vFW (pfSense)                             | OPT1 - VLAN 11, tag on em1 (`em1.11`)                      | `192.168.11.1`    | /24  | N/A             |
| vFW (pfSense)                             | OPT2 - VLAN 110, tag on em1 (`em1.110`)                    | `192.168.110.1`   | /24  | N/A             |
| Switch 1                                  | Interface Vlan110 (management)                             | `192.168.110.254` | /24  | `192.168.110.1` |
| Switch 2                                  | Interface Vlan110 (management)                             | `192.168.110.253` | /24  | `192.168.110.1` |
| Server(ESXi host)                         | vmk0, on a **private direct link** (not through the trunk) | `192.168.110.2`   | /24  | none needed     |
| VM1                                       | VLAN 10 host                                               | `192.168.10.10`   | /24  | `192.168.10.1`  |
| VM2                                       | VLAN 10 host                                               | `192.168.10.11`   | /24  | `192.168.10.1`  |
| VM3                                       | VLAN 11 host                                               | `192.168.11.10`   | /24  | `192.168.11.1`  |
| Laptop - NIC "B" (plugged into SW2)       | VLAN 10 host                                               | `192.168.10.50`   | /24  | `192.168.10.1`  |
| Laptop - NIC "A" (direct cable to server) | management-only link                                       | `192.168.110.3`   | /24  | none needed     |

**Why two laptop IPs / two links:** 
- The private direct cable to the server (vmnic0) is your emergency/host-management access - it never depends on the switches, trunk, or firewall being configured correctly, so you can never fully lock yourself out again, I say again cause you have no idea how many times I locked myself out. 
- Your second connection, through SW2, is your "real" test client that proves the actual VLAN/firewall network works end-to-end (this is what Task step 5, "ping VM3 from laptop," is testing). 
- If your laptop only has one Ethernet port, use a USB-Ethernet adapter for the second link, or Wi-Fi for whichever one doesn't need to be wired or just do what I do, unplug and plug, change ip settings and make your life miserable.

## 2. Server Physical Setup (iLO / boot / OS install)
No changes needed here - your original steps for connecting a monitor+keyboard (or iLO), powering on, resetting to defaults (F8), provisioning RAID (F5 → Smart Storage Administrator), BIOS/RBSU settings (F9), and installing ESXi via USB (Rufus, MBR partition scheme) are all correct and match standard Gen8 procedure. Keep using those. One addition:

- [ ] When you get to **"provision the storage array"**, actually do it this time (Task step 3 requires RAID 5) - create `OS_BOOT` as RAID 1 for the boot volume, and a separate `DATA_STORE` as **RAID 5** across your remaining drives, per the task.

## 3. Switch Configuration (CORRECTED)

### 3.1 What was wrong
1. **VLAN 11 was never created on SW1**, and **VLAN 10 was never created on SW2** - so tagged frames for those VLANs get dropped at the trunk even if cabled correctly.
2. **VLAN 110 (management) doesn't exist on either switch yet** - needed for the `192.168.110.0/24` management range your mentor gave you.
3. **SW1's server-facing port (Gi1/4) was configured as an access port on VLAN 10.** It needs to be a **trunk**, because the server sends VM1/VM2 traffic (VLAN 10), VM3 traffic (VLAN 11), *and* the firewall's VLAN 110 management traffic down that **one physical cable** (vmnic1). An access port can only carry one VLAN - it would silently drop everything except VLAN 10.
4. **SW2's laptop port (Fa1/1) was assigned to VLAN 11**, but the laptop's production IP (`192.168.10.50`) is on VLAN 10. Fix: put Fa1/1 in VLAN 10.
5. `switchport trunk encapsulation dot1q` throws `% Invalid input` on these IE-3300 models when run as its own line before `switchport mode trunk` - **skip that command entirely**, it's not needed on this hardware (dot1q is the only encapsulation these switches support, so `switchport mode trunk` alone is enough).
6. Trunk interfaces showed `down/down` - that's a physical cabling issue, not a config issue. Fixed by actually connecting the cable (see the Fix-It Guide, Part B).

### 3.2 Switch 1 - full corrected config
```cisco
Switch>enable
Password: [insert-password]
Switch#configure terminal
Switch(config)#enable secret [insert-password]
Switch(config)#hostname SW1

! Create ALL THREE required VLANs
SW1(config)#vlan 10,11,110
SW1(config-vlan)#exit

! VLAN 10 SVI (kept for local VLAN 10 reference / legacy)
SW1(config)#interface vlan 10
SW1(config-if)#ip address 192.168.10.254 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit

! VLAN 110 SVI - THIS is the real management interface
SW1(config)#interface vlan 110
SW1(config-if)#description Management_Interface
SW1(config-if)#ip address 192.168.110.254 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit

SW1(config)#ip default-gateway 192.168.110.1

! Access ports for any directly-attached VLAN 10 end devices (currently unused)
SW1(config)#interface range GigabitEthernet 1/3
SW1(config-if-range)#switchport mode access
SW1(config-if-range)#switchport access vlan 10
SW1(config-if-range)#exit

! Gi1/4 = SERVER PORT = must be a TRUNK (carries VLAN 10, 11, 110)
SW1(config)#interface GigabitEthernet 1/4
SW1(config-if)#description Trunk_to_ESXi_Server_vmnic1
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11,110
SW1(config-if)#no shutdown
SW1(config-if)#exit

! Gi1/10 = trunk to SW2
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#description Trunk_to_SW2
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11,110
SW1(config-if)#no shutdown
SW1(config-if)#exit

SW1(config)#exit
SW1#copy running-config startup-config
```

### 3.3 Switch 2 - full corrected config
```cisco
Switch>enable
Switch#configure terminal
Switch(config)#enable secret [insert-password]
Switch(config)#hostname SW2

SW2(config)#vlan 10,11,110
SW2(config-vlan)#exit

SW2(config)#interface vlan 11
SW2(config-if)#ip address 192.168.11.254 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit

SW2(config)#interface vlan 110
SW2(config-if)#description Management_Interface
SW2(config-if)#ip address 192.168.110.253 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit

SW2(config)#ip default-gateway 192.168.110.1

! Fa1/1 = LAPTOP PORT - must be VLAN 10 (matches laptop's 192.168.10.50)
SW2(config)#interface FastEthernet 1/1
SW2(config-if)#description Connection_to_Laptop
SW2(config-if)#switchport mode access
SW2(config-if)#switchport access vlan 10
SW2(config-if)#no shutdown
SW2(config-if)#exit

! Gi1/1 = trunk to SW1
SW2(config)#interface GigabitEthernet 1/1
SW2(config-if)#description Trunk_to_SW1
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport trunk allowed vlan 10,11,110
SW2(config-if)#no shutdown
SW2(config-if)#exit

SW2(config)#exit
SW2#copy running-config startup-config
```

### 3.4 Verification for both switches
```cisco
do show vlan brief              ! confirm 10, 11, 110 all show "active"
do show ip interface brief      ! confirm Vlan110 is up/up with correct IP
do show interfaces trunk        ! confirm Gi1/10 (SW1) and Gi1/1 (SW2) are trunking, allowed vlans list 10,11,110
```

## 4. Server Virtual Networking (ESXi) - CORRECTED
This section didn't really exist properly in your old docs - this is the missing piece that caused most of your lost-access loops.

You need **two separate virtual switches**, doing two completely different jobs:

| vSwitch | Uplink NIC | Job |
|---|---|---|
| **vSwitch0** | `vmnic0` (direct cable to laptop) | Emergency/host management ONLY. Never touches VLANs, trunks, or pfSense. |
| **vSwitch1** | `vmnic1` (cable to SW1 Gi1/4) | Carries all VM + firewall production traffic, tagged per VLAN. |

### 4.1 vSwitch0 (management, isolated)
- Only uplink: `vmnic0`.
- Port group: **Management Network**, VLAN ID `0` (none - it's a private point-to-point link, tags don't matter).
- `vmk0` static IP: `192.168.110.2 /24`, no gateway needed.
- Nothing else ever gets attached to this vSwitch. This is your permanent "can always get in" door.

### 4.2 vSwitch1 (production trunk)
- Only uplink: `vmnic1`.
- Security policy: set **Promiscuous Mode**, **MAC Address Changes**, and **Forged Transmits** to **Accept** (pfSense needs this to route between VLANs).
- Three port groups:

| Port Group | VLAN ID | Attach to |
|---|---|---|
| `PG_VLAN10` | `10` | VM1, VM2 |
| `PG_VLAN11` | `11` | VM3 |
| `PG_TRUNK_vFW` | `4095` (VLAN Trunking / all VLANs) | vFW's single vNIC (`em1`) |

Setting a port group's VLAN ID to a normal number (10 or 11) means ESXi handles the tagging for you - the VM itself sends/receives plain untagged traffic. Setting it to `4095` means ESXi passes *all* tags through untouched - this is what lets pfSense see VLAN 10, 11, and 110 all on its one vNIC.

## 5. Virtual Machines
Same as before - no changes needed:
- 2 vCPU / 8 GB RAM / 100 GB disk per VM, Windows 10 (64-bit) guest OS, ISO mounted from datastore.
- **VM1 → PG_VLAN10**, IP `192.168.10.10 /24`, gateway `192.168.10.1`
- **VM2 → PG_VLAN10**, IP `192.168.10.11 /24`, gateway `192.168.10.1`
- **VM3 → PG_VLAN11**, IP `192.168.11.10 /24`, gateway `192.168.11.1`
- Post-install checklist unchanged (NTP, backup host config, patch ESXi, check Monitor → Hardware).

## 6. Virtual Firewall (pfSense) - CORRECTED
Your old doc (05) told you to add **two separate network adapters** to pfSense. That's not what you actually built - your ESXi screenshot shows pfSense (`vFW`) with **one vNIC** (MAC `00:0c:29:5e:40:98`) present in all three VLAN port groups, which only happens with VLAN tagging on a single trunked NIC. So: keep the single-NIC design, and configure it like this.

### 6.1 VM settings
- One Network Adapter, attached to `PG_TRUNK_vFW` (VLAN ID 4095) on vSwitch1.
- No second adapter needed - you are not giving pfSense a real WAN/internet connection, it's purely routing between your three internal VLANs. During pfSense's initial setup wizard, if it demands a WAN interface, you can leave `em0` unassigned/unused - you only need `em1` and its VLAN sub-interfaces.

### 6.2 Interface Assignments (pfSense WebGUI)
Go to **Interfaces → Interface Assignments**:
1. **LAN**: bind directly to `VLAN 10 on em1` (i.e. `em1.10`) - **not** to plain `em1`. If LAN is ever bound to plain `em1`, it will conflict with any VLAN sub-interface using the same IP range - this is exactly what locked you out before.
2. **OPT1**: add `VLAN 11 on em1` (`em1.11`).
3. **OPT2**: add `VLAN 110 on em1` (`em1.110`), rename its description to `VLAN110_MGMT`.

### 6.3 IP addresses (Interfaces → LAN / OPT1 / OPT2)
| Interface | Description | IPv4 | 
|---|---|---|
| LAN | VLAN10 | `192.168.10.1/24` |
| OPT1 | VLAN11 | `192.168.11.1/24` |
| OPT2 | VLAN110_MGMT | `192.168.110.1/24` |

Enable each interface, set **Static IPv4**, enter the address, **Save**, then **Apply Changes** once at the end.

### 6.4 Firewall rules (pfSense blocks everything by default)
For **each** of LAN, OPT1, and OPT2, go to **Firewall → Rules → [that interface's tab] → Add**:
- Action: **Pass**
- Address Family: **IPv4**
- Protocol: **Any**
- Source: **Any**
- Destination: **Any**
- Save, then **Apply Changes** after all three are added.

Without this, pfSense will route correctly but silently drop everything - this is the "connects but nothing pings" failure mode.

## 7. Laptop
- **NIC A** (direct cable into the server's `vmnic0` port): static IP `192.168.110.3/24`, no gateway. This is only for reaching the ESXi Host Client (`https://192.168.110.2`).
- **NIC B** (cable into SW2 Fa1/1): static IP `192.168.10.50/24`, gateway `192.168.10.1`. This is your real test client for the task's final ping test.

## 8. Verification Checklist (do these in order once everything above is configured)
- [ ] `SW1# ping 192.168.110.253` - succeeds (management VLAN reaches SW2)
- [ ] From VM1, `ping 192.168.10.1` - succeeds (VM1 reaches pfSense LAN)
- [ ] From VM1, `ping 192.168.11.1` - succeeds (pfSense OPT1 reachable)
- [ ] From VM1, `ping 192.168.11.10` (VM3) - succeeds (inter-VLAN routing through pfSense works)
- [ ] From Laptop NIC B (`192.168.10.50`), `ping 192.168.10.1` - succeeds
- [ ] From Laptop NIC B, `ping 192.168.11.10` (VM3) - **succeeds - this is Task step 5, the finish line**
- [ ] From Laptop NIC A, browse `https://192.168.110.2` - ESXi Host Client loads regardless of anything else above
