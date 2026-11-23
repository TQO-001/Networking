![[sl7_index-01-sl7_network_documentation.png]]

# Dept 34 Network Documentation

> Source: CLI captures (`show vlan brief`, `show ip interface brief`, `show cdp neighbors [detail]`, `show lldp neighbors [detail]`) from 18 switches.
> Port counts come from `show ip interface brief`; models from the CDP `Platform` field; UTP/Fiber from LLDP media type (MAU) where available, otherwise from the port hardware.

## Table of Contents

- [[#Network Overview]]
	- [[#Switch Summary]]
	- [[#Switch-to-Switch Links]]
	- [[#Documentation Progress]]
- [[#Rooms & Locations]]
	- [[#SL7 LV Room]]
	- [[#SL7 Electric Room]]
	- [[#SL7 Operating Desk]]
- [[#Switch Reference]]
	- [[#IND-SW-EDNL_SL7]]
	- [[#IND-SW-SL7Mcc]]
	- [[#IND-SW-EDNL-SL7Oper]]
	- [[#IND-SW-EDNL_TLL]]
	- [[#IND-SW-EDNL_Dept34_PTTL]]
	- [[#IND-SW-Dept34_Distr]]
	- [[#IND-SW-EDNL_PTTL]]
	- [[#IND-SW-EDNL_CTLL5]]
	- [[#IND-SW-EDNL_PTTL_PLC]]
	- [[#IND-SW-EDNL_PTTL_PLC2]]
	- [[#IND-SW-EDNL_SL5]]
	- [[#IND-SW-EDNL_SL4]]
	- [[#IND-SW-EDNL-SL2]]
	- [[#IND-SW-EDNL_A17ControlRoom]]
	- [[#IND-SW-EDNL_EXTCOOLINGTOWER]]
	- [[#IND-SW-EDNL_S5CoolingTowers]]
	- [[#IND-SW-EDNL_S4CoolingTowers]]
	- [[#IND-SW-EDNL-CM-Crane]]
- [[#Notes & Items to Verify]]
	- [[#Observations]]
	- [[#To Verify]]

---

## Network Overview
### Switch Summary

| #   | Switch                           | Model            | IP Address      | Ports | Up  | UTP in use | Fiber in use | CDP Neighbors | Location                |
| --- | -------------------------------- | ---------------- | --------------- | ----- | --- | ---------- | ------------ | ------------- | ----------------------- |
| 1   | [[#IND-SW-EDNL_SL7]]             | IE-3000-4TC      | 192.168.160.73  | 6     | 5   | 3          | 2            | 3             | [[#SL7 LV Room]]        |
| 2   | [[#IND-SW-SL7Mcc]]               | IE-3200-8T2S     | 192.168.160.112 | 10    | 7   | 7          | 0            | 2             | [[#SL7 Electric Room]]  |
| 3   | [[#IND-SW-EDNL-SL7Oper]]         | IE-3300-8P2S     | 192.168.160.119 | 10    | 2   | 2          | 0            | 1             | [[#SL7 Operating Desk]] |
| 4   | [[#IND-SW-EDNL_TLL]]             | IE-3000-8TC      | 192.168.160.59  | 10    | 5   | 3          | 2            | 2             | —                       |
| 5   | [[#IND-SW-EDNL_Dept34_PTTL]]     | WS-C2960X-24TS-L | 192.168.160.84  | 28    | 11  | 7          | 4            | 4             | —                       |
| 6   | [[#IND-SW-Dept34_Distr]]         | IE-9320-22S2C4X  | 192.168.160.117 | 28    | 2   | 0          | 2            | 2             | —                       |
| 7   | [[#IND-SW-EDNL_PTTL]]            | IE-3000-8TC      | 192.168.160.70  | 10    | 10  | 8          | 2            | 3             | —                       |
| 8   | [[#IND-SW-EDNL_CTLL5]]           | IE-3000-8TC      | 192.168.160.71  | 10    | 3   | 2          | 1            | 1             | —                       |
| 9   | [[#IND-SW-EDNL_PTTL_PLC]]        | IE-3000-8TC      | 192.168.160.90  | 10    | 9   | 9          | 0            | 2             | —                       |
| 10  | [[#IND-SW-EDNL_PTTL_PLC2]]       | IE-3000-4TC      | 192.168.160.124 | 6     | 2   | 2          | 0            | 1             | —                       |
| 11  | [[#IND-SW-EDNL_SL5]]             | IE-3000-8TC      | 192.168.160.56  | 10    | 6   | 4          | 2            | 2             | —                       |
| 12  | [[#IND-SW-EDNL_SL4]]             | IE-3000-8TC      | 192.168.160.55  | 10    | 4   | 2          | 2            | 2             | —                       |
| 13  | [[#IND-SW-EDNL-SL2]]             | IE-3000-8TC      | 192.168.160.54  | 10    | 1   | 0          | 1            | 1             | —                       |
| 14  | [[#IND-SW-EDNL_A17ControlRoom]]  | IE-3000-8TC      | 192.168.160.65  | 10    | 4   | 2          | 2            | 2             | —                       |
| 15  | [[#IND-SW-EDNL_EXTCOOLINGTOWER]] | IE-3200-8T2S     | 192.168.160.101 | 10    | 5   | 3          | 2            | 2             | —                       |
| 16  | [[#IND-SW-EDNL_S5CoolingTowers]] | IE-3000-8TC      | 192.168.160.31  | 10    | 6   | 4          | 2            | 2             | —                       |
| 17  | [[#IND-SW-EDNL_S4CoolingTowers]] | IE-3000-8TC      | 192.168.160.30  | 10    | 8   | 6          | 2            | 2             | —                       |
| 18  | [[#IND-SW-EDNL-CM-Crane]]        | IE-3300-8P2S     | 192.168.160.126 | 10    | 1   | 0          | 1            | 1             | —                       |

**Legend:** *Ports* = physical front-panel ports · *Up* = link up/up · *UTP* = copper twisted pair (RJ45) · *Fiber* = SFP / 1000BASE-X link · *—* = not documented yet.

### Switch-to-Switch Links

| Link | End A | End B | Connection | Seen By |
|---|---|---|---|---|
| L01 | [[#IND-SW-EDNL_SL7]] `Gi1/1` | [[#IND-SW-EDNL_TLL]] `Gi1/2` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L02 | [[#IND-SW-EDNL_SL7]] `Fa1/4` | [[#IND-SW-SL7Mcc]] `Gi1/3` | UTP (100BASE-TX) | Both ends (CDP) |
| L03 | [[#IND-SW-EDNL_SL7]] `Gi1/2` | [[#IND-SW-EDNL_A17ControlRoom]] `Gi1/1` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L04 | [[#IND-SW-SL7Mcc]] `Gi1/8` | [[#IND-SW-EDNL-SL7Oper]] `Gi1/3` | UTP (1000BASE-T) | Both ends (CDP) |
| L05 | [[#IND-SW-EDNL_TLL]] `Gi1/1` | [[#IND-SW-EDNL_Dept34_PTTL]] `Gi1/0/27` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L06 | [[#IND-SW-EDNL_Dept34_PTTL]] `Gi1/0/26` | [[#IND-SW-EDNL_PTTL]] `Gi1/2` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L07 | [[#IND-SW-EDNL_Dept34_PTTL]] `Gi1/0/28` | [[#IND-SW-Dept34_Distr]] `Gi1/0/24` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L08 | [[#IND-SW-EDNL_Dept34_PTTL]] `Gi1/0/25` | [[#IND-SW-EDNL_CTLL5]] `Gi1/1` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L09 | [[#IND-SW-Dept34_Distr]] `Te1/0/27` | ind-Core1-MSR `Twe1/0/21` | Fiber (1000BASE-LX) | External device (one end) |
| L10 | [[#IND-SW-EDNL_PTTL]] `Fa1/8` | [[#IND-SW-EDNL_PTTL_PLC]] `Gi1/1` | UTP (100BASE-TX) | Both ends (CDP) |
| L11 | [[#IND-SW-EDNL_PTTL]] `Gi1/1` | [[#IND-SW-EDNL_SL5]] `Gi1/2` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L12 | [[#IND-SW-EDNL_PTTL_PLC]] `Gi1/2` | [[#IND-SW-EDNL_PTTL_PLC2]] `Gi1/1` | UTP (1000BASE-T) | Both ends (CDP) |
| L13 | [[#IND-SW-EDNL_SL5]] `Gi1/1` | [[#IND-SW-EDNL_SL4]] `Gi1/2` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L14 | [[#IND-SW-EDNL_SL4]] `Gi1/1` | [[#IND-SW-EDNL-SL2]] `Gi1/1` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L15 | [[#IND-SW-EDNL_A17ControlRoom]] `Gi1/2` | [[#IND-SW-EDNL_EXTCOOLINGTOWER]] `Gi1/1` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L16 | [[#IND-SW-EDNL_EXTCOOLINGTOWER]] `Gi1/2` | [[#IND-SW-EDNL_S5CoolingTowers]] `Gi1/2` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L17 | [[#IND-SW-EDNL_S5CoolingTowers]] `Gi1/1` | [[#IND-SW-EDNL_S4CoolingTowers]] `Gi1/1` | Fiber (1000BASE-SX) | Both ends (CDP) |
| L18 | [[#IND-SW-EDNL_S4CoolingTowers]] `Gi1/2` | [[#IND-SW-EDNL-CM-Crane]] `Gi1/1` | Fiber (1000BASE-SX) | Both ends (CDP) |

### Documentation Progress

- [x] Model type added for all 18 switches
- [x] Connection type (UTP / Fiber) added for every port that is up
- [x] Port counts and connected ports added for all 18 switches
- [x] CDP neighbours documented for all 18 switches
- [ ] Identify end devices on 46 connected ports that CDP/LLDP did not name (see *To Identify* under each switch)
- [ ] Location and photos documented — 3 of 18 done:
	- [ ] IND-SW-EDNL_TLL
	- [ ] IND-SW-EDNL_Dept34_PTTL
	- [ ] IND-SW-Dept34_Distr
	- [ ] IND-SW-EDNL_PTTL
	- [ ] IND-SW-EDNL_CTLL5
	- [ ] IND-SW-EDNL_PTTL_PLC
	- [ ] IND-SW-EDNL_PTTL_PLC2
	- [ ] IND-SW-EDNL_SL5
	- [ ] IND-SW-EDNL_SL4
	- [ ] IND-SW-EDNL-SL2
	- [ ] IND-SW-EDNL_A17ControlRoom
	- [ ] IND-SW-EDNL_EXTCOOLINGTOWER
	- [ ] IND-SW-EDNL_S5CoolingTowers
	- [ ] IND-SW-EDNL_S4CoolingTowers
	- [ ] IND-SW-EDNL-CM-Crane

---

## Rooms & Locations

### SL7 LV Room

![[sl7_lv_room-01-sl7_lv_room.png]]

#### IND-SW-EDNL_SL7 Switch
![[sl7_lv_room-02-sl7_lv_room.jpg|357]]  ![[sl7_lv_room-03-sl7_lv_room.jpg|324]]

- **IP Address:** 192.168.160.73 (Device has wrong label change to this IP address)
- **EKC Boxes:** 2
	- A17
	- Dept34
- **Full device info:** [[#IND-SW-EDNL_SL7]]

---

### SL7 Electric Room

![[sl7_electric_room-01-sl7_electric_room.png]]

#### IND-SW-SL7MCC Switch
![[sl7_electric_room-02-sl7_electric_room.jpg|210]]

- **IP Address:** 192.168.160.112
- **Full device info:** [[#IND-SW-SL7Mcc]]

#### SL7_SCADA_PC
- **Plant Description:** SL7 SCADA Thinclient - ENG
- **IP Address:** 192.168.193.112
- **Name:** T0246
- **Device Type:** Thin Client

![[sl7_electric_room-03-sl7_scada_pc.jpg]]

#### IBA_PC
- **Plant Description:** SL7 IBA
- **IP Address:** 192.168.191.42
- **Name:** C7401-SL7-IBA
- **Device Type:** PC

##### VMs
- **Plant Description:** IND-SL7-ENG_PLC
- **IP Address:** 192.168.191.50
- **Name:** IND-SL7-ENG_PLC
- **Device Type:** VM

- **Plant Description:** IND-SL7-ENG_Drives
- **IP Address:** 192.168.191.51
- **Name:** IND-SL7-ENG_Drives
- **Device Type:** VM

![[sl7_electric_room-04-vms.jpg]]

---

### SL7 Operating Desk

#### SL7_SCADA_THINCLIENT - OPERATOR
- **Plant Description:** SL7 SCADA Thinclient - operator
- **IP Address:** 192.168.191.146
- **Name:** T0247
- **Device Type:** Thin Client

![[sl7_operating_desk-01-sl7_scada_thinclient_operator.jpg]]

#### IND-SW-EDNL-SL7Oper Switch
![[sl7_operating_desk-02-sl7_scada_thinclient_operator.jpg]]

- **IP Address:** 192.168.160.119
- **Full device info:** [[#IND-SW-EDNL-SL7Oper]]

---

## Switch Reference

### IND-SW-EDNL_SL7

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-4TC |
| **IP Address** | 192.168.160.73 |
| **Location** | [[#SL7 LV Room]] |
| **Total ports** | 6 |
| **Port layout** | 4 × RJ45 10/100 (Fa1/1–Fa1/4) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (3):** Fa1/1, Fa1/2, Fa1/4 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 5 up / 1 down |
| **Ports down** | Fa1/3 |
| **Software** | IOS 15.0(2)EY3 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/2** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/4** | UTP (100BASE-TX) | — | [[#IND-SW-SL7Mcc]] | Gi1/3 | 192.168.160.112 | IE-3200-8T2S | CDP |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_TLL]] | Gi1/2 | 192.168.160.59 | IE-3000-8TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_A17ControlRoom]] | Gi1/1 | 192.168.160.65 | IE-3000-8TC | CDP |

##### To Identify

- [ ] Fa1/1 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/2 (VLAN 561 VLAN0561) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Gig1/2 (**TLL**)
- Fas1/4 --> Gig1/3 (**SL7Mcc**)
- Gig1/2 --> Gig1/1 (**A17ControlRoom**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_TLL.hulamin.co.za** | Gig 1/1 | Gig 1/2 | 192.168.160.59 | IE-3000-8TC |
| **IND-SW-SL7Mcc.hulamin.co.za** | Fas 1/4 | Gig 1/3 | 192.168.160.112 | IE-3200-8T2S |
| **IND-SW-EDNL_A17ControlRoom.hulamin.co.za** | Gig 1/2 | Gig 1/1 | 192.168.160.65 | IE-3000-8TC |

#### Raw CLI Output

*Earlier capture of `show cdp neighbors detail` (kept from the room notes):*

```Cisco
IND-SW-EDNL_SL7#show cdp neighbors detail
-------------------------

Device ID: IND-SW-EDNL_TLL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.59
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 138 sec

-------------------------

Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: FastEthernet1/4,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 129 sec

-------------------------

Device ID: IND-SW-EDNL_A17ControlRoom.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.65
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 165 sec
```

*Full capture:*

```Cisco
IND-SW-EDNL_SL7>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/2
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL_Network                     active
582  IND-SL6                          active
585  A17_network                      active
590  EDPowerMeters                    active    Fa1/1
591  SL7                              active
592  crane                            active
593  Ignition                         active    Fa1/3
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_SL7>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan501                unassigned      YES manual up                    up
Vlan560                192.168.160.73  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_SL7>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_TLL.hulamin.co.za
                 Gig 1/1           173              S I   IE-3000-8 Gig 1/2
IND-SW-SL7Mcc.hulamin.co.za
                 Fas 1/4           176             R S I  IE-3200-8 Gig 1/3
IND-SW-EDNL_A17ControlRoom.hulamin.co.za
                 Gig 1/2           158              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_SL7>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_TLL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.59
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 170 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCD580FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es):
  IP address: 192.168.160.59

-------------------------
Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: FastEthernet1/4,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 173 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es):
  IP address: 192.168.160.112

-------------------------
Device ID: IND-SW-EDNL_A17ControlRoom.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.65
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 155 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE080FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es):
  IP address: 192.168.160.65

IND-SW-EDNL_SL7>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-SL7Mcc       Fa1/4          120        B,R             Gi1/3
IND-SW-EDNL_TLL     Gi1/1          120        B               port-002-00000
IND-SW-EDNL_A17ContrGi1/2          120        B               port-001-00000

Total entries displayed: 3

IND-SW-EDNL_SL7>show lldp neighbors detail
------------------------------------------------
Chassis id: 549f.c65f.f340
Port id: Gi1/3
Port Description: GigabitEthernet1/3
System Name: IND-SW-SL7Mcc.hulamin.co.za

System Description:
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

Time remaining: 94 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.112
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: 1

------------------------------------------------
Chassis id: 0027.90cc.d582
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_TLL.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 105 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.59
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: 0027.90cc.e082
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_A17ControlRoom.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 105 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.65
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 3

IND-SW-EDNL_SL7>
```

---

### IND-SW-SL7Mcc

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3200-8T2S |
| **IP Address** | 192.168.160.112 |
| **Other IPs** | 192.168.193.201 (Vlan593) |
| **Location** | [[#SL7 Electric Room]] |
| **Total ports** | 10 |
| **Port layout** | 2 × SFP (GE) (Gi1/1, Gi1/2) + 8 × RJ45 10/100/1000 (Gi1/3–Gi1/10) |
| **Connection types in use** | **UTP (7):** Gi1/3, Gi1/4, Gi1/6–Gi1/10 |
| **Ports up / down** | 7 up / 3 down |
| **Ports down** | Gi1/1, Gi1/2, Gi1/5 |
| **Software** | IOS 16.12.3 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Gi1/3** | UTP (100BASE-TX) | — | [[#IND-SW-EDNL_SL7]] | Fa1/4 | 192.168.160.73 | IE-3000-4TC | CDP |
| **Gi1/4** | UTP | 593 Ignition | Unnamed device (MAC d0ad.08da.afc1) | — | — | — | LLDP |
| **Gi1/6** | UTP | 591 SL7 | C7401-SL7-IBA | 40a6.b7ce.4a92 | — | — | LLDP |
| **Gi1/7** | UTP (100BASE-TX) | 591 SL7 | S7-1500 | Siemens, SIMATIC S7, Ethernet Port, X2 P1 | 192.168.1.5 | — | LLDP |
| **Gi1/8** | UTP (1000BASE-T) | — | [[#IND-SW-EDNL-SL7Oper]] | Gi1/3 | 192.168.160.119 | IE-3300-8P2S | CDP |
| **Gi1/9** | UTP (100BASE-TX) | 591 SL7 | CM1542-1 | Siemens, SIMATIC S7, Ethernet Port, X1 P2R | 192.168.210.100 | — | LLDP |
| **Gi1/10** | UTP | 561 IND-CESMS | C7401-SL7-IBA | 28c5.c87e.0816 | — | — | LLDP |

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/8 --> Gig1/3 (**SL7Oper**)
- Gig1/3 --> Fas1/4 (**SL7**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL-SL7Oper.hulamin.co.za** | Gig 1/8 | Gig 1/3 | 192.168.160.119 | IE-3300-8P2S |
| **IND-SW-EDNL_SL7.hulamin.co.za** | Gig 1/3 | Fas 1/4 | 192.168.160.73 | IE-3000-4TC |

#### Raw CLI Output

*Earlier capture of `show cdp neighbors detail` (kept from the room notes):*

```Cisco
IND-SW-SL7Mcc#show cdp neighbors detail
-------------------------

Device ID: IND-SW-EDNL-SL7Oper.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.119
Platform: cisco IE-3300-8P2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/8,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 135 sec

-------------------------

Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es):
  IP address: 192.168.1.52
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): FastEthernet1/4
Holdtime : 172 sec
```

*Full capture:*

```Cisco
IND-SW-SL7Mcc>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1, Gi1/2
250  IND-250                          active
560  management                       active
561  IND-CESMS                        active    Gi1/10
591  SL7                              active    Gi1/5, Gi1/6, Gi1/7, Gi1/9
593  Ignition                         active    Gi1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-SL7Mcc>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.112 YES NVRAM  up                    up
Vlan593                192.168.193.201 YES manual up                    up
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  up                    up
GigabitEthernet1/4     unassigned      YES unset  up                    up
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  up                    up
GigabitEthernet1/7     unassigned      YES unset  up                    up
GigabitEthernet1/8     unassigned      YES unset  up                    up
GigabitEthernet1/9     unassigned      YES unset  up                    up
GigabitEthernet1/10    unassigned      YES unset  up                    up
IND-SW-SL7Mcc>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL-SL7Oper.hulamin.co.za
                 Gig 1/8           153             R S I  IE-3300-8 Gig 1/3
IND-SW-EDNL_SL7.hulamin.co.za
                 Gig 1/3           121              S I   IE-3000-4 Fas 1/4

Total cdp entries displayed : 2
IND-SW-SL7Mcc>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL-SL7Oper.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.119
Platform: cisco IE-3300-8P2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/8,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 147 sec

Version :
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.119

-------------------------
Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.73
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): FastEthernet1/4
Holdtime : 175 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857380FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.73


Total cdp entries displayed : 2
IND-SW-SL7Mcc>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
C7401-SL7-IBA       Gi1/6          3601                       40a6.b7ce.4a92
C7401-SL7-IBA       Gi1/10         3601                       28c5.c87e.0816
CM1542-1            Gi1/9          20         S               port-002.sl7xaplc.profinetxadrives0b79
IND-SW-EDNL_SL7.hulaGi1/3          120        B               Fa1/4
S7-1500             Gi1/7          20         B,S             port-001.sl7xaplc.profinetxainterfacexb2469f
IND-SW-EDNL-SL7Oper.Gi1/8          20         B,R             port-003-00000
d0ad.08da.afc1      Gi1/4          3601                       d0ad.08da.afc1

Total entries displayed: 7

IND-SW-SL7Mcc>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/6
Chassis id: C7401-SL7-IBA
Port id: 40a6.b7ce.4a92
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2776 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised

------------------------------------------------
Local Intf: Gi1/10
Chassis id: C7401-SL7-IBA
Port id: 28c5.c87e.0816
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2776 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised

------------------------------------------------
Local Intf: Gi1/9
Chassis id: S7-1500 CM                6GK7 542-1AX10-0XE0  VPS9330589           1 V  4  0 21
Port id: port-002.sl7xaplc.profinetxadrives0b79
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P2R
System Name: CM1542-1

System Description:
Siemens, SIMATIC S7, CM1542-1

Time remaining: 16 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.210.100
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/3
Chassis id: 0056.2b85.7380
Port id: Fa1/4
Port Description: FastEthernet1/4
System Name: IND-SW-EDNL_SL7.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 115 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.73
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/7
Chassis id: S7-1500                   6ES7 516-3AP03-0AB0  S C-S4A14B142024     5 V  3  0  3
Port id: port-001.sl7xaplc.profinetxainterfacexb2469f
Port Description: Siemens, SIMATIC S7, Ethernet Port, X2 P1
System Name - not advertised

System Description:
Siemens, SIMATIC S7, CPU 1516-3 PN/DP, 6ES7 516-3AP03-0AB0, HW: Version 5, FW: Version V3.0.3, S C-S4A14B142024

Time remaining: 18 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.1.5
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/8
Chassis id: c860.8fbd.caeb
Port id: port-003-00000
Port Description: GigabitEthernet1/3
System Name: IND-SW-EDNL-SL7Oper.hulamin.co.za

System Description:
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

Time remaining: 16 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.119
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/4
Chassis id: d0ad.08da.afc1
Port id: d0ad.08da.afc1
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3185 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised


Total entries displayed: 7

IND-SW-SL7Mcc>

```

---

### IND-SW-EDNL-SL7Oper

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3300-8P2S |
| **IP Address** | 192.168.160.119 |
| **Location** | [[#SL7 Operating Desk]] |
| **Total ports** | 10 |
| **Port layout** | 2 × SFP (GE) (Gi1/1, Gi1/2) + 8 × RJ45 PoE 10/100/1000 (Gi1/3–Gi1/10) |
| **Connection types in use** | **UTP (2):** Gi1/3, Gi1/7 |
| **Ports up / down** | 2 up / 8 down |
| **Ports down** | Gi1/1, Gi1/2, Gi1/4–Gi1/6, Gi1/8–Gi1/10 |
| **Other interfaces** | Ap1/1 (App-hosting port (internal), up) |
| **Software** | IOS 17.12.4 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Gi1/3** | UTP (1000BASE-T) | — | [[#IND-SW-SL7Mcc]] | Gi1/8 | 192.168.160.112 | IE-3200-8T2S | CDP |
| **Gi1/7** | UTP | 593 Ignition | Unknown (not seen by CDP/LLDP) | — | — | — | — |

##### To Identify

- [ ] Gi1/7 (VLAN 593 Ignition) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/3 --> Gig1/8 (**SL7Mcc**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-SL7Mcc.hulamin.co.za** | Gig 1/3 | Gig 1/8 | 192.168.160.112 | IE-3200-8T2S |

#### Raw CLI Output

*Earlier capture of `show cdp neighbors detail` (kept from the room notes):*

```Cisco
IND-SW-EDNL-SL7Oper#show cdp neighbors detail
-------------------------
Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): GigabitEthernet1/8
Holdtime : 155 sec
```

*Full capture:*

```Cisco
IND-SW-EDNL-SL7Oper>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1, Gi1/2, Gi1/6, Gi1/8, Gi1/9
                                                Gi1/10, Ap1/1
250  IND-250                          active
560  IND-Manangement                  active
561  IND-CESMS                        active    Gi1/5
591  IND-Dept34                       active    Gi1/4
593  Ignition                         active    Gi1/7
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL-SL7Oper>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.119 YES NVRAM  up                    up
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  up                    up
GigabitEthernet1/4     unassigned      YES unset  down                  down
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  up                    up
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  down                  down
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
IND-SW-EDNL-SL7Oper>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-SL7Mcc.hulamin.co.za
                 Gig 1/3           155             R S I  IE-3200-8 Gig 1/8

Total cdp entries displayed : 1
IND-SW-EDNL-SL7Oper>show cdp neighbors detail
-------------------------
Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): GigabitEthernet1/8
Holdtime : 154 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

advertisement version: 2
Peer Source MAC: 549f.c65f.f348
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.112


Total cdp entries displayed : 1
IND-SW-EDNL-SL7Oper>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-SL7Mcc.hulamiGi1/3          120        B,R             Gi1/8

Total entries displayed: 1

IND-SW-EDNL-SL7Oper>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/3
Local Intf service instance: -
Chassis id: 549f.c65f.f340
Port id: Gi1/8
Port Description: GigabitEthernet1/8
System Name: IND-SW-SL7Mcc.hulamin.co.za

System Description:
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

Time remaining: 114 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.112
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: 1
Peer Source MAC: 549f.c65f.f348


Total entries displayed: 1

IND-SW-EDNL-SL7Oper>

```

---

### IND-SW-EDNL_TLL

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.59 |
| **Other IPs** | 192.168.181.147 (Vlan581), 192.168.182.147 (Vlan582) |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (3):** Fa1/1, Fa1/2, Fa1/7 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 5 up / 5 down |
| **Ports down** | Fa1/3–Fa1/6, Fa1/8 |
| **Software** | IOS 15.2(4)EA5 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/2** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/7** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_Dept34_PTTL]] | Gi1/0/27 | 192.168.160.84 | WS-C2960X-24TS-L | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_SL7]] | Gi1/1 | 192.168.160.73 | IE-3000-4TC | CDP |

##### To Identify

- [ ] Fa1/1 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/2 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/7 (VLAN 561 VLAN0561) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Gig1/0/27 (**Dept34_PTTL**)
- Gig1/2 --> Gig1/1 (**SL7**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_Dept34_PTTL.hulamin.co.za** | Gig 1/1 | Gig 1/0/27 | 192.168.160.84 | WS-C2960X-24TS-L |
| **IND-SW-EDNL_SL7.hulamin.co.za** | Gig 1/2 | Gig 1/1 | 192.168.160.73 | IE-3000-4TC |

#### Raw CLI Output

```Cisco
Industrial IT Switch
IND-SW-EDNL_TLL>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/8
250  IND-250                          active
501  CCL                              active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL Network                     active
581  PTTL_ACDrives                    active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/1, Fa1/2
591  VLAN0591                         active
592  Crane                            active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_TLL>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan560                192.168.160.59  YES NVRAM  up                    up
Vlan567                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan581                192.168.181.147 YES NVRAM  up                    up
Vlan582                192.168.182.147 YES NVRAM  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  up                    up
FastEthernet1/8        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_TLL>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
                 Gig 1/1           171              S I   WS-C2960X Gig 1/0/27
IND-SW-EDNL_SL7.hulamin.co.za
                 Gig 1/2           128              S I   IE-3000-4 Gig 1/1

Total cdp entries displayed : 2
IND-SW-EDNL_TLL>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.84
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/27
Holdtime : 171 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000007802B1AFB900FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.84

-------------------------
Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.73
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 128 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857380FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.73


Total cdp entries displayed : 2
IND-SW-EDNL_TLL>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_Dept34_PGi1/1          120        B               Gi1/0/27
IND-SW-EDNL_SL7.hulaGi1/2          120        B               Gi1/1

Total entries displayed: 2

IND-SW-EDNL_TLL>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 7802.b1af.b900
Port id: Gi1/0/27
Port Description: GigabitEthernet1/0/27
System Name: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za

System Description:
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

Time remaining: 94 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.84
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 0056.2b85.7380
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_SL7.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 94 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.73
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 2

IND-SW-EDNL_TLL>

```

---

### IND-SW-EDNL_Dept34_PTTL

#### Device Info

| Field                       | Value                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| **Model**                   | Cisco WS-C2960X-24TS-L                                                                      |
| **IP Address**              | 192.168.160.84                                                                              |
| **Other IPs**               | 192.168.181.146 (Vlan581), 192.168.182.146 (Vlan582), 10.18.14.250 (Vlan591)                |
| **Location**                | Not documented yet                                                                          |
| **Total ports**             | 28                                                                                          |
| **Port layout**             | 24 × RJ45 10/100/1000 (Gi1/0/1–Gi1/0/24) + 4 × SFP (GE) (Gi1/0/25–Gi1/0/28)                 |
| **Connection types in use** | **UTP (7):** Gi1/0/2–Gi1/0/5, Gi1/0/7, Gi1/0/9, Gi1/0/24 · **Fiber (4):** Gi1/0/25–Gi1/0/28 |
| **Ports up / down**         | 11 up / 17 down                                                                             |
| **Ports down**              | Gi1/0/1, Gi1/0/6, Gi1/0/8, Gi1/0/10–Gi1/0/23                                                |
| **Other interfaces**        | Fa0 (RJ45 out-of-band management, administratively down), Po1 (Port-channel (logical), up)  |
| **Software**                | IOS 15.2(2)E7 (as reported by neighbours)                                                   |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Gi1/0/2** | UTP (1000BASE-T) | — | IND-SL7-ENG-DRI | port-001 | 192.168.191.51 | — | LLDP |
| **Gi1/0/2** | UTP (1000BASE-T) | — | IND-SL7-ENG-PLC | port-001 | 192.168.1.50 | — | LLDP |
| **Gi1/0/2** | UTP (1000BASE-T) | — | IND-PTTLACDRV | port-001 | 192.168.182.13 | — | LLDP |
| **Gi1/0/2** | UTP (1000BASE-T) | — | IND-CTLL5-ENG | port-001 | 10.18.14.210 | — | LLDP |
| **Gi1/0/3** | UTP | — | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/0/4** | UTP | — | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/0/5** | UTP | 1 default | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/0/7** | UTP | — | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/0/9** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/0/24** | UTP | — | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/0/25** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_CTLL5]] | Gi1/1 | 192.168.160.71 | IE-3000-8TC | CDP |
| **Gi1/0/26** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_PTTL]] | Gi1/2 | 192.168.160.70 | IE-3000-8TC | CDP |
| **Gi1/0/27** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_TLL]] | Gi1/1 | 192.168.160.59 | IE-3000-8TC | CDP |
| **Gi1/0/28** | Fiber (1000BASE-SX) | — | [[#IND-SW-Dept34_Distr]] | Gi1/0/24 | 192.168.160.117 | IE-9320-22S2C4X | CDP |

##### To Identify

- [ ] Gi1/0/3 (VLAN —) — identify the connected device
- [ ] Gi1/0/4 (VLAN —) — identify the connected device
- [ ] Gi1/0/5 (VLAN 1 default) — identify the connected device
- [ ] Gi1/0/7 (VLAN —) — identify the connected device
- [ ] Gi1/0/9 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Gi1/0/24 (VLAN —) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/0/27 --> Gig1/1 (**TLL**)
- Gig1/0/26 --> Gig1/2 (**PTTL**)
- Gig1/0/28 --> Gig1/0/24 (**Dept34_Distr**)
- Gig1/0/25 --> Gig1/1 (**CTLL5**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_TLL.hulamin.co.za** | Gig 1/0/27 | Gig 1/1 | 192.168.160.59 | IE-3000-8TC |
| **IND-SW-EDNL_PTTL.hulamin.co.za** | Gig 1/0/26 | Gig 1/2 | 192.168.160.70 | IE-3000-8TC |
| **IND-SW-Dept34_Distr** | Gig 1/0/28 | Gig 1/0/24 | 192.168.160.117 | IE-9320-22S2C4X |
| **IND-SW-EDNL_CTLL5.hulamin.co.za** | Gig 1/0/25 | Gig 1/1 | 192.168.160.71 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
IND-SW-EDNL_Dept34_PTTL>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/1, Gi1/0/5, Gi1/0/6, Gi1/0/8
                                                Gi1/0/16
250  IND-250                          active
501  CCL                              active
515  FS15                             active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Gi1/0/9, Gi1/0/14, Gi1/0/15, Gi1/0/17
                                                Gi1/0/18, Gi1/0/19, Gi1/0/20, Gi1/0/21
                                                Gi1/0/22, Gi1/0/23
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL Network                     active
581  PTTL_ACDrives                    active    Gi1/0/10, Gi1/0/11, Gi1/0/12, Gi1/0/13
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active
591  IND_SL5                          active
592  Crane                            active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_Dept34_PTTL>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan501                unassigned      YES unset  up                    up
Vlan515                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.84  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan567                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan581                192.168.181.146 YES NVRAM  up                    up
Vlan582                192.168.182.146 YES NVRAM  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                10.18.14.250    YES NVRAM  up                    up
FastEthernet0          unassigned      YES NVRAM  administratively down down
GigabitEthernet1/0/1   unassigned      YES unset  down                  down
GigabitEthernet1/0/2   unassigned      YES unset  up                    up
GigabitEthernet1/0/3   unassigned      YES unset  up                    up
GigabitEthernet1/0/4   unassigned      YES unset  up                    up
GigabitEthernet1/0/5   unassigned      YES unset  up                    down
GigabitEthernet1/0/6   unassigned      YES unset  down                  down
GigabitEthernet1/0/7   unassigned      YES unset  up                    up
GigabitEthernet1/0/8   unassigned      YES unset  down                  down
GigabitEthernet1/0/9   unassigned      YES unset  up                    up
GigabitEthernet1/0/10  unassigned      YES unset  down                  down
GigabitEthernet1/0/11  unassigned      YES unset  down                  down
GigabitEthernet1/0/12  unassigned      YES unset  down                  down
GigabitEthernet1/0/13  unassigned      YES unset  down                  down
GigabitEthernet1/0/14  unassigned      YES unset  down                  down
GigabitEthernet1/0/15  unassigned      YES unset  down                  down
GigabitEthernet1/0/16  unassigned      YES unset  down                  down
GigabitEthernet1/0/17  unassigned      YES unset  down                  down
GigabitEthernet1/0/18  unassigned      YES unset  down                  down
GigabitEthernet1/0/19  unassigned      YES unset  down                  down
GigabitEthernet1/0/20  unassigned      YES unset  down                  down
GigabitEthernet1/0/21  unassigned      YES unset  down                  down
GigabitEthernet1/0/22  unassigned      YES unset  down                  down
GigabitEthernet1/0/23  unassigned      YES unset  down                  down
GigabitEthernet1/0/24  unassigned      YES unset  up                    down
GigabitEthernet1/0/25  unassigned      YES unset  up                    up
GigabitEthernet1/0/26  unassigned      YES unset  up                    up
GigabitEthernet1/0/27  unassigned      YES unset  up                    up
GigabitEthernet1/0/28  unassigned      YES unset  up                    up
Port-channel1          unassigned      YES unset  up                    up
IND-SW-EDNL_Dept34_PTTL>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_TLL.hulamin.co.za
                 Gig 1/0/27        149              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_PTTL.hulamin.co.za
                 Gig 1/0/26        141              S I   IE-3000-8 Gig 1/2
IND-SW-Dept34_Distr
                 Gig 1/0/28        168              S I   IE-9320-2 Gig 1/0/24
IND-SW-EDNL_CTLL5.hulamin.co.za
                 Gig 1/0/25        163              S I   IE-3000-8 Gig 1/1

Total cdp entries displayed : 4
IND-SW-EDNL_Dept34_PTTL>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_TLL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.59
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/27,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 149 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCD580FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.59

-------------------------
Device ID: IND-SW-EDNL_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.70
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/26,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 141 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.70

-------------------------
Device ID: IND-SW-Dept34_Distr
Entry address(es):
  IP address: 192.168.160.117
  IPv6 address: FE80::B28D:57FF:FE9C:8EC7  (link-local)
Platform: cisco IE-9320-22S2C4X,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/28,  Port ID (outgoing port): GigabitEthernet1/0/24
Holdtime : 168 sec

Version :
Cisco IOS Software [Dublin], Catalyst L3 Switch Software (IE9K_IOSXE), Version 17.12.2, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Tue 14-Nov-23 06:36 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.117

-------------------------
Device ID: IND-SW-EDNL_CTLL5.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.71
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/25,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 163 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCEA00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.71


Total cdp entries displayed : 4
IND-SW-EDNL_Dept34_PTTL>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_CTLL5.huGi1/0/25       120        B               port-001-00000
IND-SW-Dept34_Distr Gi1/0/28       20         B               port-024
IND-SL7-ENG-DRI     Gi1/0/2        20         S               port-001
IND-SL7-ENG-PLC     Gi1/0/2        20         S               port-001
IND-PTTLACDRV       Gi1/0/2        20         S               port-001
IND-SW-EDNL_TLL.hulaGi1/0/27       120        B               port-001-00000
IND-CTLL5-ENG       Gi1/0/2        20         S               port-001
IND-SW-EDNL_PTTL.hulGi1/0/26       120        B               port-002-00000

Total entries displayed: 8

IND-SW-EDNL_Dept34_PTTL>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/0/25
Chassis id: 0027.90cc.ea40
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_CTLL5.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 99 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.71
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/0/28
Chassis id: b08d.579c.8ec7
Port id: port-024
Port Description: GigabitEthernet1/0/24
System Name: IND-SW-Dept34_Distr

System Description:
Cisco IOS Software [Dublin], Catalyst L3 Switch Software (IE9K_IOSXE), Version 17.12.2, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Tue 14-Nov-23 06:36 by mcpre

Time remaining: 18 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.117
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - not supported
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/0/2
Chassis id: ind-sl7-eng-dri
Port id: port-001
Port Description - not advertised
System Name: IND-SL7-ENG-DRI

System Description:
VMware, Inc. VMware Virtual Platform,None,VMware-42 24 a1 26 4c dd 0a ba-b4 07 a4 f5 66 49 19 c5 + engineering

Time remaining: 14 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.191.51
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    1000baseT(HD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 30
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/0/2
Chassis id: ind-sl7-eng-plc
Port id: port-001
Port Description - not advertised
System Name: IND-SL7-ENG-PLC

System Description:
VMware, Inc. VMware Virtual Platform,None,VMware-42 24 cb 94 46 3c 24 b6-cf ae 73 16 12 cf ef 8b

Time remaining: 15 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.1.50
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    1000baseT(HD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 30
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/0/2
Chassis id: ind-pttlacdrv
Port id: port-001
Port Description - not advertised
System Name: IND-PTTLACDRV

System Description:
VMware, Inc. VMware Virtual Platform,None,VMware-42 19 86 3f 39 83 18 a1-58 27 3c bc 7a ec b9 52 + engineering

Time remaining: 19 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.182.13
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    1000baseT(HD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 30
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/0/27
Chassis id: 0027.90cc.d582
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_TLL.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 90 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.59
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/0/2
Chassis id: ind-ctll5-eng
Port id: port-001
Port Description - not advertised
System Name: IND-CTLL5-ENG

System Description:
VMware, Inc. VMware Virtual Platform,None,VMware-42 24 59 3a 29 5c f4 10-b5 e7 a8 9c f2 a4 5a 79 + engineering

Time remaining: 12 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 10.18.14.210
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    1000baseT(HD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 30
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/0/26
Chassis id: 0027.90cc.e982
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_PTTL.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 111 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.70
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 8

IND-SW-EDNL_Dept34_PTTL>

```

---

### IND-SW-Dept34_Distr

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-9320-22S2C4X |
| **IP Address** | 192.168.160.117 |
| **Location** | Not documented yet |
| **Total ports** | 28 |
| **Port layout** | 22 × SFP (GE) (Gi1/0/1–Gi1/0/22) + 2 × Combo GE (RJ45 or SFP) (Gi1/0/23, Gi1/0/24) + 4 × SFP+ (10G) (Te1/0/25–Te1/0/28) |
| **Connection types in use** | **Fiber (2):** Gi1/0/24, Te1/0/27 |
| **Ports up / down** | 2 up / 26 down |
| **Ports down** | Gi1/0/1–Gi1/0/23, Te1/0/25, Te1/0/26, Te1/0/28 |
| **Other interfaces** | Ap1/0/1 (App-hosting port (internal), up) |
| **Software** | IOS 17.12.2 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Gi1/0/24** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_Dept34_PTTL]] | Gi1/0/28 | 192.168.160.84 | WS-C2960X-24TS-L | CDP |
| **Te1/0/27** | Fiber (1000BASE-LX) | — | **ind-Core1-MSR.plant.hulamin.co.za** | Twe1/0/21 | 192.168.1.1 | C9500-48Y4C | CDP |

#### CDP Neighbors

##### The `show cdp neighbors` command

- Ten1/0/27 --> Twe1/0/21 (**ind-Core1-MSR**)
- Gig1/0/24 --> Gig1/0/28 (**Dept34_PTTL**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **ind-Core1-MSR.plant.hulamin.co.za** | Ten 1/0/27 | Twe 1/0/21 | 192.168.1.1 | C9500-48Y4C |
| **IND-SW-EDNL_Dept34_PTTL.hulamin.co.za** | Gig 1/0/24 | Gig 1/0/28 | 192.168.160.84 | WS-C2960X-24TS-L |

#### Raw CLI Output

```Cisco
IND-SW-Dept34_Distr>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/1, Gi1/0/2, Gi1/0/3, Gi1/0/4
                                                Gi1/0/5, Gi1/0/6, Gi1/0/7, Gi1/0/8
                                                Gi1/0/9, Gi1/0/10, Gi1/0/11, Gi1/0/12
                                                Gi1/0/13, Gi1/0/14, Gi1/0/15, Gi1/0/16
                                                Gi1/0/17, Gi1/0/18, Gi1/0/19, Gi1/0/20
                                                Gi1/0/21, Gi1/0/22, Gi1/0/23, Te1/0/25
                                                Te1/0/26, Te1/0/28, Ap1/0/1
250  VLAN_250                         active
501  CCL                              active
508  FM8_9_Plant_bus                  active
509  FM8_9_Terminal_bus               active
514  S4                               active
515  FS15                             active
519  Fs14                             active
560  Switch_Management                active
561  CESMS                            active
562  CCTV                             active
563  CESS                             active
564  IND-CDhotMill                    active
565  FoilFinishing_Seperators         active
566  FoilFinishing_Annealing          active
567  CTLL5_Mgaurd                     active
568  IND-CNG_Network                  active
569  IND-CCL2Gauge                    active
570  IND-A19_Furnace_plc              active
571  IND-A19_Furnace_HMM_Network      active
572  IND-CCL1Gauge                    active
573  IND-CCL1CNG-Alternative          active
574  IND-Annealing_furnace            active
575  CD_EMERGENCY_PowerHMI_PLC        active
576  CD_EMERGENCY_PwrPLC_PLC_Network  active
577  IND-CNGCDHotlineGAs_Access_PLC   active
578  IND-A19Network                   active
579  IND-PTTL                         active
580  IND-PlatePlant                   active
581  ED_Extrutions                    active
582  VLAN0582                         active
585  IND-A17                          active
587  ED_Effluent_Plant                active
588  IND-RG9                          active
589  CD_Power_Meters                  active
590  Power_Meters                     active
591  IND_SL5                          active
592  Crane                            active
593  Igntion                          active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-Dept34_Distr>
IND-SW-Dept34_Distr>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.117 YES NVRAM  up                    up
GigabitEthernet1/0/1   unassigned      YES unset  down                  down
GigabitEthernet1/0/2   unassigned      YES unset  down                  down
GigabitEthernet1/0/3   unassigned      YES unset  down                  down
GigabitEthernet1/0/4   unassigned      YES unset  down                  down
GigabitEthernet1/0/5   unassigned      YES unset  down                  down
GigabitEthernet1/0/6   unassigned      YES unset  down                  down
GigabitEthernet1/0/7   unassigned      YES unset  down                  down
GigabitEthernet1/0/8   unassigned      YES unset  down                  down
GigabitEthernet1/0/9   unassigned      YES unset  down                  down
GigabitEthernet1/0/10  unassigned      YES unset  down                  down
GigabitEthernet1/0/11  unassigned      YES unset  down                  down
GigabitEthernet1/0/12  unassigned      YES unset  down                  down
GigabitEthernet1/0/13  unassigned      YES unset  down                  down
GigabitEthernet1/0/14  unassigned      YES unset  down                  down
GigabitEthernet1/0/15  unassigned      YES unset  down                  down
GigabitEthernet1/0/16  unassigned      YES unset  down                  down
GigabitEthernet1/0/17  unassigned      YES unset  down                  down
GigabitEthernet1/0/18  unassigned      YES unset  down                  down
GigabitEthernet1/0/19  unassigned      YES unset  down                  down
GigabitEthernet1/0/20  unassigned      YES unset  down                  down
GigabitEthernet1/0/21  unassigned      YES unset  down                  down
GigabitEthernet1/0/22  unassigned      YES unset  down                  down
GigabitEthernet1/0/23  unassigned      YES unset  down                  down
GigabitEthernet1/0/24  unassigned      YES unset  up                    up
Te1/0/25               unassigned      YES unset  down                  down
Te1/0/26               unassigned      YES unset  down                  down
Te1/0/27               unassigned      YES unset  up                    up
Te1/0/28               unassigned      YES unset  down                  down
Ap1/0/1                unassigned      YES unset  up                    up
IND-SW-Dept34_Distr>
IND-SW-Dept34_Distr>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
ind-Core1-MSR.plant.hulamin.co.za
                 Ten 1/0/27        157             R S I  C9500-48Y Twe 1/0/21
IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
                 Gig 1/0/24        178              S I   WS-C2960X Gig 1/0/28

Total cdp entries displayed : 2
IND-SW-Dept34_Distr>show cdp neighbors detail
-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es):
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP
Interface: TenGigabitEthernet1/0/27,  Port ID (outgoing port): TwentyFiveGigE1/0/21
Holdtime : 144 sec

Version :
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

advertisement version: 2
Peer Source MAC: e80a.b9f1.93b5
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.1.1

-------------------------
Device ID: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.84
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/24,  Port ID (outgoing port): GigabitEthernet1/0/28
Holdtime : 165 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

advertisement version: 2
Peer Source MAC: 7802.b1af.b91c
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000007802B1AFB900FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.84


Total cdp entries displayed : 2
IND-SW-Dept34_Distr>
IND-SW-Dept34_Distr>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_Dept34_PGi1/0/24       120        B               Gi1/0/28
ind-Core1-MSR.plant.Te1/0/27       120        B,R             Twe1/0/21

Total entries displayed: 2

IND-SW-Dept34_Distr>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/0/24
Local Intf service instance: -
Chassis id: 7802.b1af.b900
Port id: Gi1/0/28
Port Description: GigabitEthernet1/0/28
System Name: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za

System Description:
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

Time remaining: 92 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.84
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: 7802.b1af.b91c

------------------------------------------------
Local Intf: Te1/0/27
Local Intf service instance: -
Chassis id: e80a.b9f1.93a0
Port id: Twe1/0/21
Port Description: TwentyFiveGigE1/0/21
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description:
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 100 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.1.1
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 24
Vlan ID: 1
Peer Source MAC: e80a.b9f1.93b5


Total entries displayed: 2

```

---

### IND-SW-EDNL_PTTL

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.70 |
| **Other IPs** | 192.168.181.149 (Vlan581), 192.168.182.149 (Vlan582) |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (8):** Fa1/1–Fa1/8 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 10 up / 0 down |
| **Software** | IOS 15.2(4)EA5 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/2** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/3** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/4** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/5** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/6** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/7** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/8** | UTP (100BASE-TX) | — | [[#IND-SW-EDNL_PTTL_PLC]] | Gi1/1 | 192.168.160.90 | IE-3000-8TC | CDP |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_SL5]] | Gi1/2 | 192.168.160.56 | IE-3000-8TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_Dept34_PTTL]] | Gi1/0/26 | 192.168.160.84 | WS-C2960X-24TS-L | CDP |

##### To Identify

- [ ] Fa1/1 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/2 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/3 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/4 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/5 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/6 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/7 (VLAN 590 EDPowerMeters) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/2 --> Gig1/0/26 (**Dept34_PTTL**)
- Fas1/8 --> Gig1/1 (**PTTL_PLC**)
- Gig1/1 --> Gig1/2 (**SL5**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_Dept34_PTTL.hulamin.co.za** | Gig 1/2 | Gig 1/0/26 | 192.168.160.84 | WS-C2960X-24TS-L |
| **IND-SW-EDNL_PTTL_PLC.hulamin.co.za** | Fas 1/8 | Gig 1/1 | 192.168.160.90 | IE-3000-8TC |
| **IND-SW-EDNL_SL5.hulamin.co.za** | Gig 1/1 | Gig 1/2 | 192.168.160.56 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
Industrial IT Switch
IND-SW-EDNL_PTTL>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/5, Fa1/6
567  VLAN0567                         active
574  IND-AnnealingFurnace             active
579  PTTL                             active
581  PTTL_ACDrives                    active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/7
591  IND_SL5                          active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_PTTL>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.70  YES NVRAM  up                    up
Vlan571                unassigned      YES unset  down                  down
Vlan579                unassigned      YES unset  up                    up
Vlan581                192.168.181.149 YES NVRAM  up                    up
Vlan582                192.168.182.149 YES NVRAM  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  up                    up
FastEthernet1/4        unassigned      YES unset  up                    up
FastEthernet1/5        unassigned      YES unset  up                    up
FastEthernet1/6        unassigned      YES unset  up                    up
FastEthernet1/7        unassigned      YES unset  up                    up
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_PTTL>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
                 Gig 1/2           160              S I   WS-C2960X Gig 1/0/26
IND-SW-EDNL_PTTL_PLC.hulamin.co.za
                 Fas 1/8           127              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_SL5.hulamin.co.za
                 Gig 1/1           148              S I   IE-3000-8 Gig 1/2

Total cdp entries displayed : 3
IND-SW-EDNL_PTTL>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.84
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/0/26
Holdtime : 160 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000007802B1AFB900FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.84

-------------------------
Device ID: IND-SW-EDNL_PTTL_PLC.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.90
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: FastEthernet1/8,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 127 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07A00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.90

-------------------------
Device ID: IND-SW-EDNL_SL5.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.56
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 148 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCD600FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.56


Total cdp entries displayed : 3
IND-SW-EDNL_PTTL>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_Dept34_PGi1/2          120        B               Gi1/0/26
IND-SW-EDNL_SL5.hulaGi1/1          120        B               port-002-00000
IND-SW-EDNL_PTTL_PLCFa1/8          120        B               Gi1/1

Total entries displayed: 3

IND-SW-EDNL_PTTL>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/2
Chassis id: 7802.b1af.b900
Port id: Gi1/0/26
Port Description: GigabitEthernet1/0/26
System Name: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za

System Description:
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

Time remaining: 103 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.84
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0027.90cc.d640
Port id: port-002-00000
Port Description: IND-SW-EDNL_PTTL
System Name: IND-SW-EDNL_SL5.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 107 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.56
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: 08cc.a7c0.7a00
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_PTTL_PLC.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

Time remaining: 100 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.90
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: 1


Total entries displayed: 3

IND-SW-EDNL_PTTL>

```

---

### IND-SW-EDNL_CTLL5

#### Device Info

| Field                       | Value                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Model**                   | Cisco IE-3000-8TC                                                                                      |
| **IP Address**              | 192.168.160.71                                                                                         |
| **Other IPs**               | 192.168.167.50 (Vlan567), 192.168.181.148 (Vlan581), 192.168.182.148 (Vlan582), 10.18.14.251 (Vlan591) |
| **Location**                | Not documented yet                                                                                     |
| **Total ports**             | 10                                                                                                     |
| **Port layout**             | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2)                       |
| **Connection types in use** | **UTP (2):** Fa1/3, Fa1/8 · **Fiber (1):** Gi1/1                                                       |
| **Ports up / down**         | 3 up / 7 down                                                                                          |
| **Ports down**              | Fa1/1, Fa1/2, Fa1/4–Fa1/7, Gi1/2                                                                       |
| **Software**                | IOS 15.2(4)EA5 (as reported by neighbours)                                                             |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/3** | UTP | 567 CTTL5_Mgaurd | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/8** | UTP | 591 CTLL5_Network | IND-SW-CTLL5-panel | 1000TX,RJ45. | 192.168.160.113 | — | LLDP |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_Dept34_PTTL]] | Gi1/0/25 | 192.168.160.84 | WS-C2960X-24TS-L | CDP |

##### To Identify

- [ ] Fa1/3 (VLAN 567 CTTL5_Mgaurd) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Gig1/0/25 (**Dept34_PTTL**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_Dept34_PTTL.hulamin.co.za** | Gig 1/1 | Gig 1/0/25 | 192.168.160.84 | WS-C2960X-24TS-L |

#### Raw CLI Output

```Cisco

Industrial IT Switch
IND-SW-EDNL_CTLL5>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active
501  CCL                              active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/2, Fa1/6
567  CTTL5_Mgaurd                     active    Fa1/3, Fa1/4
574  IND-AnnealingFurnace             active
579  PTTL                             active
581  PTTL_ACDrives                    active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/5
591  CTLL5_Network                    active    Fa1/7, Fa1/8
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_CTLL5>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan560                192.168.160.71  YES NVRAM  up                    up
Vlan567                192.168.167.50  YES NVRAM  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan581                192.168.181.148 YES NVRAM  up                    up
Vlan582                192.168.182.148 YES NVRAM  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                10.18.14.251    YES NVRAM  up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  up                    up
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-EDNL_CTLL5>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
                 Gig 1/1           173              S I   WS-C2960X Gig 1/0/25

Total cdp entries displayed : 1
IND-SW-EDNL_CTLL5>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.84
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/25
Holdtime : 173 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000007802B1AFB900FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.84


Total cdp entries displayed : 1
IND-SW-EDNL_CTLL5>
IND-SW-EDNL_CTLL5>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_Dept34_PGi1/1          120        B               Gi1/0/25
IND-SW-CTLL5-panel  Fa1/8          20         B               6

Total entries displayed: 2

IND-SW-EDNL_CTLL5>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 7802.b1af.b900
Port id: Gi1/0/25
Port Description: GigabitEthernet1/0/25
System Name: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za

System Description:
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

Time remaining: 112 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.84
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: 0090.e8c5.41b8
Port id: 6
Port Description: 1000TX,RJ45.
System Name: IND-SW-CTLL5-panel

System Description:
EDS-G516E

Time remaining: 19 seconds
System Capabilities: B
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.113
    OID:
        0.0.0.0.1.0.0.0.3.0.0.0.6.0.0.0.1.0.0.0.4.0.0.0.1.0.0.33.14720.0.0.7.0.0.0.71.
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised


Total entries displayed: 2

IND-SW-EDNL_CTLL5>

```

---

### IND-SW-EDNL_PTTL_PLC

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.90 |
| **Other IPs** | 192.168.179.100 (Vlan579), 192.168.181.150 (Vlan581), 192.168.182.150 (Vlan582) |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (9):** Fa1/1, Fa1/2, Fa1/4–Fa1/8, Gi1/1, Gi1/2 |
| **Ports up / down** | 9 up / 1 down |
| **Ports down** | Fa1/3 |
| **Software** | IOS 12.2(58)SE2 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 579 PTTL | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/2** | UTP | 579 PTTL | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/4** | UTP | 579 PTTL | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/5** | UTP | 579 PTTL | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/6** | UTP | 579 PTTL | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/7** | UTP | 579 PTTL | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/8** | UTP | 581 PTTL_ACDrives | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/1** | UTP (100BASE-TX) | — | [[#IND-SW-EDNL_PTTL]] | Fa1/8 | 192.168.160.70 | IE-3000-8TC | CDP |
| **Gi1/2** | UTP (1000BASE-T) | — | [[#IND-SW-EDNL_PTTL_PLC2]] | Gi1/1 | 192.168.160.124 | IE-3000-4TC | CDP |

##### To Identify

- [ ] Fa1/1 (VLAN 579 PTTL) — identify the connected device
- [ ] Fa1/2 (VLAN 579 PTTL) — identify the connected device
- [ ] Fa1/4 (VLAN 579 PTTL) — identify the connected device
- [ ] Fa1/5 (VLAN 579 PTTL) — identify the connected device
- [ ] Fa1/6 (VLAN 579 PTTL) — identify the connected device
- [ ] Fa1/7 (VLAN 579 PTTL) — identify the connected device
- [ ] Fa1/8 (VLAN 581 PTTL_ACDrives) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Fas1/8 (**PTTL**)
- Gig1/2 --> Gig1/1 (**PTTL_PLC2**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_PTTL.hulamin.co.za** | Gig 1/1 | Fas 1/8 | 192.168.160.70 | IE-3000-8TC |
| **IND-SW-EDNL_PTTL_PLC2.hulamin.co.za** | Gig 1/2 | Gig 1/1 | 192.168.160.124 | IE-3000-4TC |

#### Raw CLI Output

```Cisco
ndustrial
IND-SW-EDNL_PTTL_PLC>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
526  IND-S6                           active
560  VLAN0560                         active
574  IND-AnnealingFurnace             active
579  PTTL                             active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5
                                                Fa1/6, Fa1/7
581  PTTL_ACDrives                    active    Fa1/8
582  IND-SL6                          active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_PTTL_PLC>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.90  YES NVRAM  up                    up
Vlan579                192.168.179.100 YES NVRAM  up                    up
Vlan581                192.168.181.150 YES NVRAM  up                    up
Vlan582                192.168.182.150 YES NVRAM  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  up                    up
FastEthernet1/5        unassigned      YES unset  up                    up
FastEthernet1/6        unassigned      YES unset  up                    up
FastEthernet1/7        unassigned      YES unset  up                    up
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_PTTL_PLC>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_PTTL.hulamin.co.za
                 Gig 1/1           135              S I   IE-3000-8 Fas 1/8
IND-SW-EDNL_PTTL_PLC2.hulamin.co.za
                 Gig 1/2           166              S I   IE-3000-4 Gig 1/1
IND-SW-EDNL_PTTL_PLC>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.70
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): FastEthernet1/8
Holdtime : 133 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.70

-------------------------
Device ID: IND-SW-EDNL_PTTL_PLC2.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.124
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 164 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857400FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.124

IND-SW-EDNL_PTTL_PLC>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_PTTL_PLCGi1/2          120        B               Gi1/1
IND-SW-EDNL_PTTL    Gi1/1          120        B               port-010-00000

Total entries displayed: 2

IND-SW-EDNL_PTTL_PLC>show lldp neighbors detail
------------------------------------------------
Chassis id: 0056.2b85.7400
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_PTTL_PLC2.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 109 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.124
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: 1

------------------------------------------------
Chassis id: 0027.90cc.e982
Port id: port-010-00000
Port Description: FastEthernet1/8
System Name: IND-SW-EDNL_PTTL.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 99 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.70
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: 1


Total entries displayed: 2

IND-SW-EDNL_PTTL_PLC>

```

---

### IND-SW-EDNL_PTTL_PLC2

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-4TC |
| **IP Address** | 192.168.160.124 |
| **Location** | Not documented yet |
| **Total ports** | 6 |
| **Port layout** | 4 × RJ45 10/100 (Fa1/1–Fa1/4) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (2):** Fa1/1, Gi1/1 |
| **Ports up / down** | 2 up / 4 down |
| **Ports down** | Fa1/2–Fa1/4, Gi1/2 |
| **Software** | IOS 15.0(2)EY3 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 579 -PTTL | Unnamed device (MAC 503e.aa16.6734) | — | — | — | LLDP |
| **Gi1/1** | UTP (1000BASE-T) | — | [[#IND-SW-EDNL_PTTL_PLC]] | Gi1/2 | 192.168.160.90 | IE-3000-8TC | CDP |

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Gig1/2 (**PTTL_PLC**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_PTTL_PLC.hulamin.co.za** | Gig 1/1 | Gig 1/2 | 192.168.160.90 | IE-3000-8TC |

#### Raw CLI Output

```Cisco

IND-SW-EDNL_PTTL_PLC2>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
501  VLAN0501                         active
560  IND-Management                   active
561  IND-CESMS                        active
562  IND-CESMS_CCTV                   active
563  IND-CCL_CESS                     active
564  IND-CDHotMIl_L1                  active
565  IND-FoilAnnealing                active
566  IND-FoilSeparators               active
567  IND-CTTL5                        active
568  IND-CNG                          active
569  IND-CCL2Gauge                    active
570  CD_A19_Furnace_PLC_system        active
571  CD_A19_Furnace_HMI_System        active
572  IND-CCL1Gauge                    active
573  IND-CNGCCLGAs_Access_PLC         active
574  IND-AnnealingFurnace             active
575  CD_EMERGENCY_PowerHMI_PLC        active
576  CD_EMERGENCY_Power_PLC           active
577  IND-CNGCDHotlineGAs_Access_PLC   active
578  CD_A19_Furnace_Server_Access     active
579  -PTTL                            active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
580  IND-Plate_Plant                  active
581  IND-PTTL_DC_Drives               active
582  IND-PTTL_AC_Drives               active
592  CCL_Ruler                        active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_PTTL_PLC2>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.124 YES NVRAM  up                    up
Vlan579                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-EDNL_PTTL_PLC2>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_PTTL_PLC.hulamin.co.za
                 Gig 1/1           123              S I   IE-3000-8 Gig 1/2
IND-SW-EDNL_PTTL_PLC2>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_PTTL_PLC.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.90
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 123 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07A00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es):
  IP address: 192.168.160.90

IND-SW-EDNL_PTTL_PLC2>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_PTTL_PLCGi1/1          120        B               Gi1/2
503e.aa16.6734      Fa1/1          3601                       503e.aa16.6734

Total entries displayed: 2

IND-SW-EDNL_PTTL_PLC2>show lldp neighbors detail
------------------------------------------------
Chassis id: 08cc.a7c0.7a00
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_PTTL_PLC.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

Time remaining: 96 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.90
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: 1

------------------------------------------------
Chassis id: 503e.aa16.6734
Port id: 503e.aa16.6734
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2922 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised


Total entries displayed: 2

IND-SW-EDNL_PTTL_PLC2>

```

---

### IND-SW-EDNL_SL5

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.56 |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (4):** Fa1/2, Fa1/3, Fa1/5, Fa1/8 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 6 up / 4 down |
| **Ports down** | Fa1/1, Fa1/4, Fa1/6, Fa1/7 |
| **Software** | IOS 15.2(4)EA5 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/2** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/3** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/5** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | emg | port-001 | 10.0.0.27 | — | LLDP |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | cpu1214 | Siemens, SIMATIC S7, Ethernet Port, X1 P1 | 10.0.0.20 | — | LLDP |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | cp-343-1-lean | Siemens, SIMATIC NET, Fast Ethernet Switch Port 1, 100 Mb… | 192.168.0.1 | — | LLDP |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | pn-io | Siemens, SIMATIC NET, Fast Ethernet Port 2, 100 Mbit, ful… | 10.0.0.50 | — | LLDP |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | plcxb1d0ed | Siemens, SIMATIC S7, Ethernet Port, X1 P1 | 192.168.2.30 | — | LLDP |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | Unnamed device (MAC 3c52.826a.985e) | — | — | — | LLDP |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | Unnamed device (MAC 3c52.8265.f065) | — | — | — | LLDP |
| **Fa1/8** | UTP (100BASE-TX) | 591 IND_SL5 | Unnamed device (MAC e073.e716.47af) | — | — | — | LLDP |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_SL4]] | Gi1/2 | 192.168.160.55 | IE-3000-8TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_PTTL]] | Gi1/1 | 192.168.160.70 | IE-3000-8TC | CDP |

##### To Identify

- [ ] Fa1/2 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/3 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/5 (VLAN 561 VLAN0561) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/2 --> Gig1/1 (**PTTL**)
- Gig1/1 --> Gig1/2 (**SL4**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_PTTL.hulamin.co.za** | Gig 1/2 | Gig 1/1 | 192.168.160.70 | IE-3000-8TC |
| **IND-SW-EDNL_SL4.hulamin.co.za** | Gig 1/1 | Gig 1/2 | 192.168.160.55 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
Industrial IT Switch
IND-SW-EDNL_SL5>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/4, Fa1/5, Fa1/6, Fa1/7
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL                             active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/2, Fa1/3
591  IND_SL5                          active    Fa1/8
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_SL5>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan501                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.56  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  up                    up
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  up                    up
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_SL5>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_PTTL.hulamin.co.za
                 Gig 1/2           126              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_SL4.hulamin.co.za
                 Gig 1/1           160              S I   IE-3000-8 Gig 1/2

Total cdp entries displayed : 2
IND-SW-EDNL_SL5>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.70
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 126 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.70

-------------------------
Device ID: IND-SW-EDNL_SL4.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.55
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 160 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CD0100FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.55


Total cdp entries displayed : 2
IND-SW-EDNL_SL5>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
emg                 Fa1/8          20                         port-001
cpu1214             Fa1/8          20         B,S             port-001
IND-SW-EDNL_SL4.hulaGi1/1          120        B               port-002-00000
cp-343-1-lean       Fa1/8          20         S               port-001
pn-io               Fa1/8          20         S               port-002
IND-SW-EDNL_PTTL.hulGi1/2          120        B               port-001-00000
plcxb1d0ed          Fa1/8          20         B,S             port-001
3c52.826a.985e      Fa1/8          3601                       3c52.826a.985e
3c52.8265.f065      Fa1/8          3601                       3c52.8265.f065
e073.e716.47af      Fa1/8          3601                       e073.e716.47af

Total entries displayed: 10

IND-SW-EDNL_SL5>show lldp neighbors detail
------------------------------------------------
Local Intf: Fa1/8
Chassis id: emg
Port id: port-001
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 19 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses:
    IP: 10.0.0.27
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/8
Chassis id: cpu1214
Port id: port-001
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P1
System Name - not advertised

System Description:
Siemens, SIMATIC S7, CPU-1200, 6ES7 214-1AG40-0XB0, HW: 4, FW: V.4.1.3, S C-H1S36170

Time remaining: 15 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 10.0.0.20
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    100base-T4
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0027.90cd.0101
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SL4.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 116 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.55
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: cp-343-1-lean
Port id: port-001
Port Description: Siemens, SIMATIC NET, Fast Ethernet Switch Port 1, 100 Mbit, full duplex, autonegotiation, link
System Name - not advertised

System Description:
Siemens, SIMATIC NET, CP 343-1 Lean, 6GK7 343-1CX10-0XE0, HW: Version 5, FW: Version V2.3.2, VPB5543770

Time remaining: 18 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.0.1
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/8
Chassis id: pn-io
Port id: port-002
Port Description: Siemens, SIMATIC NET, Fast Ethernet Port 2, 100 Mbit, full duplex, autonegotiation, link
System Name - not advertised

System Description:
Siemens, SIMATIC NET, CP 343-1, 6GK7 343-1EX30-0XE0, HW: Version 6, FW: Version V2.5.0, VPC1521145

Time remaining: 19 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 10.0.0.50
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 0027.90cc.e982
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_PTTL.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 110 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.70
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: plcxb1d0ed
Port id: port-001
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P1
System Name - not advertised

System Description:
Siemens, SIMATIC S7, CPU-1200, 6ES7 214-1AG40-0XB0, HW: 4, FW: V.4.1.3, S C-H1S37241

Time remaining: 15 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.2.30
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    100base-T4
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/8
Chassis id: 3c52.826a.985e
Port id: 3c52.826a.985e
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3249 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised

------------------------------------------------
Local Intf: Fa1/8
Chassis id: 3c52.8265.f065
Port id: 3c52.8265.f065
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3220 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised

------------------------------------------------
Local Intf: Fa1/8
Chassis id: e073.e716.47af
Port id: e073.e716.47af
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3226 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised


Total entries displayed: 10

IND-SW-EDNL_SL5>

```

---

### IND-SW-EDNL_SL4

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.55 |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (2):** Fa1/2, Fa1/8 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 4 up / 6 down |
| **Ports down** | Fa1/1, Fa1/3–Fa1/7 |
| **Software** | IOS 15.2(4)EA5 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/2** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/8** | UTP | 591 VLAN0591 | Unnamed device (MAC f8ed.fc52.42b1) | — | — | — | LLDP |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL-SL2]] | Gi1/1 | 192.168.160.54 | IE-3000-8TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_SL5]] | Gi1/1 | 192.168.160.56 | IE-3000-8TC | CDP |

##### To Identify

- [ ] Fa1/2 (VLAN 590 EDPowerMeters) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Gig1/1 (**SL2**)
- Gig1/2 --> Gig1/1 (**SL5**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL-SL2.hulamin.co.za** | Gig 1/1 | Gig 1/1 | 192.168.160.54 | IE-3000-8TC |
| **IND-SW-EDNL_SL5.hulamin.co.za** | Gig 1/2 | Gig 1/1 | 192.168.160.56 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
Industrial IT Switch
IND-SW-EDNL_SL4>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/3, Fa1/4, Fa1/5
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL_Network                     active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/2
591  VLAN0591                         active    Fa1/6, Fa1/7, Fa1/8
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_SL4>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.55  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_SL4>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL-SL2.hulamin.co.za
                 Gig 1/1           141              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_SL5.hulamin.co.za
                 Gig 1/2           139              S I   IE-3000-8 Gig 1/1

Total cdp entries displayed : 2
IND-SW-EDNL_SL4>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL-SL2.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.54
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 141 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE700FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.54

-------------------------
Device ID: IND-SW-EDNL_SL5.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.56
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 139 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCD600FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.56


Total cdp entries displayed : 2
IND-SW-EDNL_SL4>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_SL5.hulaGi1/2          120        B               port-001-00000
IND-SW-EDNL-SL2.hulaGi1/1          120        B               port-001-00000
f8ed.fc52.42b1      Fa1/8          3601                       f8ed.fc52.42b1

Total entries displayed: 3

IND-SW-EDNL_SL4>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/2
Chassis id: 0027.90cc.d640
Port id: port-001-00000
Port Description: IND-SW-EDNL_SL4
System Name: IND-SW-EDNL_SL5.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 100 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.56
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0027.90cc.e740
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL-SL2.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 119 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.54
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: f8ed.fc52.42b1
Port id: f8ed.fc52.42b1
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3060 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities:
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised


Total entries displayed: 3

IND-SW-EDNL_SL4>

```

---

### IND-SW-EDNL-SL2

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.54 |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **Fiber (1):** Gi1/1 |
| **Ports up / down** | 1 up / 9 down |
| **Ports down** | Fa1/1–Fa1/8, Gi1/2 |
| **Software** | IOS 15.2(4)EA5 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_SL4]] | Gi1/1 | 192.168.160.55 | IE-3000-8TC | CDP |

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Gig1/1 (**SL4**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_SL4.hulamin.co.za** | Gig 1/1 | Gig 1/1 | 192.168.160.55 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
Industrial IT Switch
IND-SW-EDNL-SL2>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active
501  CCL                              active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5
                                                Fa1/6, Fa1/7, Fa1/8
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL_Network                     active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL-SL2>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan50                 unassigned      YES unset  down                  down
Vlan501                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.54  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-EDNL-SL2>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_SL4.hulamin.co.za
                 Gig 1/1           126              S I   IE-3000-8 Gig 1/1

Total cdp entries displayed : 1
IND-SW-EDNL-SL2>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_SL4.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.55
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 126 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CD0100FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.55


Total cdp entries displayed : 1
IND-SW-EDNL-SL2>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_SL4.hulaGi1/1          120        B               port-001-00000

Total entries displayed: 1

IND-SW-EDNL-SL2>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0027.90cd.0101
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_SL4.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 95 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.55
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 1

IND-SW-EDNL-SL2>

```


----

---

### IND-SW-EDNL_A17ControlRoom

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.65 |
| **Other IPs** | 192.168.174.200 (Vlan574) |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (2):** Fa1/1, Fa1/8 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 4 up / 6 down |
| **Ports down** | Fa1/2–Fa1/7 |
| **Software** | IOS 15.2(4)EA5 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 574 IND-AnnealingFurnace | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/8** | UTP | 593 Ignition | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_SL7]] | Gi1/2 | 192.168.160.73 | IE-3000-4TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_EXTCOOLINGTOWER]] | Gi1/1 | 192.168.160.101 | IE-3200-8T2S | CDP |

##### To Identify

- [ ] Fa1/1 (VLAN 574 IND-AnnealingFurnace) — identify the connected device
- [ ] Fa1/8 (VLAN 593 Ignition) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/2 --> Gig1/1 (**EXTCOOLINGTOWER**)
- Gig1/1 --> Gig1/2 (**SL7**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za** | Gig 1/2 | Gig 1/1 | 192.168.160.101 | IE-3200-8T2S |
| **IND-SW-EDNL_SL7.hulamin.co.za** | Gig 1/1 | Gig 1/2 | 192.168.160.73 | IE-3000-4TC |

#### Raw CLI Output

```Cisco
IND-SW-EDNL_A17ControlRoom>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/6
250  IND-250                          active
501  CCL                              active
526  IND-S6                           active
560  IND-Management                   active
561  IND-CESMSNetwork                 active    Fa1/2, Fa1/4, Fa1/5, Fa1/7
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active    Fa1/1, Fa1/3
579  PTTL_Network                     active
582  IND-SL6                          active
585  A17_Network                      active
590  EDPowerMeters                    active
592  Crane                            active
593  Ignition                         active    Fa1/8
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_A17ControlRoom>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan560                192.168.160.65  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan567                unassigned      YES unset  up                    up
Vlan574                192.168.174.200 YES NVRAM  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_A17ControlRoom>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za
                 Gig 1/2           165             R S I  IE-3200-8 Gig 1/1
IND-SW-EDNL_SL7.hulamin.co.za
                 Gig 1/1           125              S I   IE-3000-4 Gig 1/2

Total cdp entries displayed : 2
IND-SW-EDNL_A17ControlRoom>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.101
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 165 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.101

-------------------------
Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.73
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 125 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857380FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.73


Total cdp entries displayed : 2
IND-SW-EDNL_A17ControlRoom>
IND-SW-EDNL_A17ControlRoom>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_SL7.hulaGi1/1          120        B               Gi1/2

Total entries displayed: 1

IND-SW-EDNL_A17ControlRoom>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0056.2b85.7380
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SL7.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 112 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.73
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 1

IND-SW-EDNL_A17ControlRoom>

```

---

### IND-SW-EDNL_EXTCOOLINGTOWER

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3200-8T2S |
| **IP Address** | 192.168.160.101 |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 2 × SFP (GE) (Gi1/1, Gi1/2) + 8 × RJ45 10/100/1000 (Gi1/3–Gi1/10) |
| **Connection types in use** | **UTP (3):** Gi1/3–Gi1/5 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 5 up / 5 down |
| **Ports down** | Gi1/6–Gi1/10 |
| **Software** | IOS 16.12.3 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_A17ControlRoom]] | Gi1/2 | 192.168.160.65 | IE-3000-8TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_S5CoolingTowers]] | Gi1/2 | 192.168.160.31 | IE-3000-8TC | CDP |
| **Gi1/3** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/4** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/5** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |

##### To Identify

- [ ] Gi1/3 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Gi1/4 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Gi1/5 (VLAN 561 VLAN0561) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/2 --> Gig1/2 (**S5CoolingTowers**)
- Gig1/1 --> Gig1/2 (**A17ControlRoom**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_S5CoolingTowers.hulamin.co.z** | Gig 1/2 | Gig 1/2 | 192.168.160.31 | IE-3000-8TC |
| **IND-SW-EDNL_A17ControlRoom.hulamin.co.za** | Gig 1/1 | Gig 1/2 | 192.168.160.65 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
IND-SW-EDNL_EXTCOOLINGTOWER>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10
250  IND-250                          active
501  501                              active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Gi1/3, Gi1/4, Gi1/5
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL_Network                     active
582  IND-SL6                          active
585  A17_network                      active
590  EDPowerMeters                    active
592  Crane                            active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_EXTCOOLINGTOWER>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.101 YES NVRAM  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
GigabitEthernet1/3     unassigned      YES unset  up                    up
GigabitEthernet1/4     unassigned      YES unset  up                    up
GigabitEthernet1/5     unassigned      YES unset  up                    up
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  down                  down
IND-SW-EDNL_EXTCOOLINGTOWER>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_S5CoolingTowers.hulamin.co.z
                 Gig 1/2           169              S I   IE-3000-8 Gig 1/2
IND-SW-EDNL_A17ControlRoom.hulamin.co.za
                 Gig 1/1           148              S I   IE-3000-8 Gig 1/2

Total cdp entries displayed : 2
IND-SW-EDNL_EXTCOOLINGTOWER>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_S5CoolingTowers.hulamin.co.z
Entry address(es):
  IP address: 192.168.160.31
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 167 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000094D4696AF780FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.31

-------------------------
Device ID: IND-SW-EDNL_A17ControlRoom.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.65
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 147 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE080FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.65


Total cdp entries displayed : 2
IND-SW-EDNL_EXTCOOLINGTOWER>show lldp neighbors
% LLDP is not enabled
IND-SW-EDNL_EXTCOOLINGTOWER>show lldp neighbors detail
% LLDP is not enabled
IND-SW-EDNL_EXTCOOLINGTOWER>enable
Password:
IND-SW-EDNL_EXTCOOLINGTOWER#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
IND-SW-EDNL_EXTCOOLI(config)#lldp run
IND-SW-EDNL_EXTCOOLI(config)#end
IND-SW-EDNL_EXTCOOLINGTOWER#show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_S5CoolinGi1/2          120        B               Gi1/2
IND-SW-EDNL_A17ContrGi1/1          120        B               port-002-00000

Total entries displayed: 2

IND-SW-EDNL_EXTCOOLINGTOWER#show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/2
Chassis id: 94d4.696a.f780
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_S5CoolingTowers.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 107 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.31
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0027.90cc.e082
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_A17ControlRoom.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 113 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.65
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 2

IND-SW-EDNL_EXTCOOLINGTOWER#

```

---

### IND-SW-EDNL_S5CoolingTowers

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.31 |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (4):** Fa1/1–Fa1/4 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 6 up / 4 down |
| **Ports down** | Fa1/5–Fa1/8 |
| **Software** | IOS 15.0(2)EY3 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/2** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/3** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/4** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_S4CoolingTowers]] | Gi1/1 | 192.168.160.30 | IE-3000-8TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_EXTCOOLINGTOWER]] | Gi1/2 | 192.168.160.101 | IE-3200-8T2S | CDP |

##### To Identify

- [ ] Fa1/1 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/2 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/3 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/4 (VLAN 561 VLAN0561) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/2 --> Gig1/2 (**EXTCOOLINGTOWER**)
- Gig1/1 --> Gig1/1 (**S4CoolingTowers**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za** | Gig 1/2 | Gig 1/2 | 192.168.160.101 | IE-3200-8T2S |
| **IND-SW-EDNL_S4CoolingTowers.hulamin.co.z** | Gig 1/1 | Gig 1/1 | 192.168.160.30 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
IND-SW-EDNL_S5CoolingTowers>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/3, Fa1/4, Fa1/5, Fa1/6
                                                Fa1/7, Fa1/8
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL_Network                     active
582  IND-SL6                          active
585  A17_Network                      active
590  EDPowerMeters                    active    Fa1/2
592  Crane                            active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_S5CoolingTowers>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan501                unassigned      YES unset  up                    up
Vlan560                192.168.160.31  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan578                unassigned      YES unset  down                  down
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  up                    up
FastEthernet1/4        unassigned      YES unset  up                    up
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_S5CoolingTowers>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za
                 Gig 1/2           147             R S I  IE-3200-8 Gig 1/2
IND-SW-EDNL_S4CoolingTowers.hulamin.co.z
                 Gig 1/1           136              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_S5CoolingTowers>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.101
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 146 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es):
  IP address: 192.168.160.101

-------------------------
Device ID: IND-SW-EDNL_S4CoolingTowers.hulamin.co.z
Entry address(es):
  IP address: 192.168.160.30
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 135 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B855C80FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es):
  IP address: 192.168.160.30

IND-SW-EDNL_S5CoolingTowers>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_EXTCOOLIGi1/2          120        B,R             Gi1/2
IND-SW-EDNL_S4CoolinGi1/1          120        B               Gi1/1

Total entries displayed: 2

IND-SW-EDNL_S5CoolingTowers>show lldp neighbors detail
------------------------------------------------
Chassis id: a03d.6e1a.fce0
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za

System Description:
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

Time remaining: 119 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.101
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: 0056.2b85.5c80
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_S4CoolingTowers.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 108 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.30
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 2

IND-SW-EDNL_S5CoolingTowers>

```

---

### IND-SW-EDNL_S4CoolingTowers

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3000-8TC |
| **IP Address** | 192.168.160.30 |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 8 × RJ45 10/100 (Fa1/1–Fa1/8) + 2 × Dual-purpose GE (RJ45 or SFP) (Gi1/1, Gi1/2) |
| **Connection types in use** | **UTP (6):** Fa1/1–Fa1/4, Fa1/6, Fa1/8 · **Fiber (2):** Gi1/1, Gi1/2 |
| **Ports up / down** | 8 up / 2 down |
| **Ports down** | Fa1/5, Fa1/7 |
| **Software** | IOS 15.0(2)EY3 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Fa1/1** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/2** | UTP | 590 EDPowerMeters | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/3** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/4** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/6** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Fa1/8** | UTP | 561 VLAN0561 | Unknown (not seen by CDP/LLDP) | — | — | — | — |
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_S5CoolingTowers]] | Gi1/1 | 192.168.160.31 | IE-3000-8TC | CDP |
| **Gi1/2** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL-CM-Crane]] | Gi1/1 | 192.168.160.126 | IE-3300-8P2S | CDP |

##### To Identify

- [ ] Fa1/1 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/2 (VLAN 590 EDPowerMeters) — identify the connected device
- [ ] Fa1/3 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/4 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/6 (VLAN 561 VLAN0561) — identify the connected device
- [ ] Fa1/8 (VLAN 561 VLAN0561) — identify the connected device

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/2 --> Gig1/1 (**CM-Crane**)
- Gig1/1 --> Gig1/1 (**S5CoolingTowers**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL-CM-Crane** | Gig 1/2 | Gig 1/1 | 192.168.160.126 | IE-3300-8P2S |
| **IND-SW-EDNL_S5CoolingTowers.hulamin.co.z** | Gig 1/1 | Gig 1/1 | 192.168.160.31 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
IND-SW-EDNL_S4CoolingTowers>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
501  CCL                              active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/3, Fa1/4, Fa1/5, Fa1/6
                                                Fa1/7, Fa1/8
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL_Network                     active
582  IND-SL6                          active
585  A17_network                      active
590  EDPowerMeters                    active    Fa1/2
592  Crane                            active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_S4CoolingTowers>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan560                192.168.160.30  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  up                    up
FastEthernet1/4        unassigned      YES unset  up                    up
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  up                    up
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_S4CoolingTowers>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL-CM-Crane
                 Gig 1/2           171             R S I  IE-3300-8 Gig 1/1
IND-SW-EDNL_S5CoolingTowers.hulamin.co.z
                 Gig 1/1           146              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_S4CoolingTowers>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL-CM-Crane
Entry address(es):
  IP address: 192.168.160.126
Platform: cisco IE-3300-8P2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 171 sec

Version :
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es):
  IP address: 192.168.160.126

-------------------------
Device ID: IND-SW-EDNL_S5CoolingTowers.hulamin.co.z
Entry address(es):
  IP address: 192.168.160.31
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 146 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000094D4696AF780FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es):
  IP address: 192.168.160.31

IND-SW-EDNL_S4CoolingTowers>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_S5CoolinGi1/1          120        B               Gi1/1
IND-SW-EDNL-CM-CraneGi1/2          120        B,R             port-001-00000

Total entries displayed: 2

IND-SW-EDNL_S4CoolingTowers>show lldp neighbors detail
------------------------------------------------
Chassis id: 94d4.696a.f780
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_S5CoolingTowers.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 111 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.31
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: e489.caa7.d5cb
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL-CM-Crane

System Description:
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

Time remaining: 114 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.126
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 2

IND-SW-EDNL_S4CoolingTowers>

```

---

### IND-SW-EDNL-CM-Crane

#### Device Info

| Field | Value |
|---|---|
| **Model** | Cisco IE-3300-8P2S |
| **IP Address** | 192.168.160.126 |
| **Other IPs** | 192.168.192.99 (Vlan561) |
| **Location** | Not documented yet |
| **Total ports** | 10 |
| **Port layout** | 2 × SFP (GE) (Gi1/1, Gi1/2) + 8 × RJ45 PoE 10/100/1000 (Gi1/3–Gi1/10) |
| **Connection types in use** | **Fiber (1):** Gi1/1 |
| **Ports up / down** | 1 up / 9 down |
| **Ports down** | Gi1/2–Gi1/10 |
| **Other interfaces** | Ap1/1 (App-hosting port (internal), up) |
| **Software** | IOS 17.12.4 (as reported by neighbours) |

#### Connected Ports

| Port | Connection | VLAN | Connected Device | Remote Port | Remote IP | Remote Model | Seen By |
|---|---|---|---|---|---|---|---|
| **Gi1/1** | Fiber (1000BASE-SX) | — | [[#IND-SW-EDNL_S4CoolingTowers]] | Gi1/2 | 192.168.160.30 | IE-3000-8TC | CDP |

#### CDP Neighbors

##### The `show cdp neighbors` command

- Gig1/1 --> Gig1/2 (**S4CoolingTowers**)

| **Device ID** | **Local Intrfce** | **Port ID** | **IP Address** | **Platform** |
|---|---|---|---|---|
| **IND-SW-EDNL_S4CoolingTowers.hulamin.co.z** | Gig 1/1 | Gig 1/2 | 192.168.160.30 | IE-3000-8TC |

#### Raw CLI Output

```Cisco
IND-SW-EDNL-CM-Crane>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2, Gi1/3, Gi1/4, Gi1/5, Ap1/1
560  Management                       active
561  IND-CESMS                        active    Gi1/7, Gi1/8, Gi1/9
590  powermeters                      active
592  Crane                            active    Gi1/10
593  ignition                         active    Gi1/6
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL-CM-Crane>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.126 YES NVRAM  up                    up
Vlan561                192.168.192.99  YES NVRAM  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  down                  down
GigabitEthernet1/4     unassigned      YES unset  down                  down
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  down                  down
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
IND-SW-EDNL-CM-Crane>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_S4CoolingTowers.hulamin.co.z
                 Gig 1/1           125              S I   IE-3000-8 Gig 1/2

Total cdp entries displayed : 1
IND-SW-EDNL-CM-Crane>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_S4CoolingTowers.hulamin.co.z
Entry address(es):
  IP address: 192.168.160.30
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 121 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Peer Source MAC: 0056.2b85.5c82
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B855C80FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.30


Total cdp entries displayed : 1
IND-SW-EDNL-CM-Crane>show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_S4CoolinGi1/1          120        B               Gi1/2

Total entries displayed: 1

IND-SW-EDNL-CM-Crane>show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Local Intf service instance: -
Chassis id: 0056.2b85.5c80
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_S4CoolingTowers.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 114 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.30
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: 0056.2b85.5c82


Total entries displayed: 1

IND-SW-EDNL-CM-Crane>

```

---

## Notes & Items to Verify

### Observations

- **Heading names:** switch headings now use the hostname shown at the CLI prompt. Renamed: `IND-SW-EDNL-SL7` → `IND-SW-EDNL_SL7`; `IND-SW-SL7MCC` → `IND-SW-SL7Mcc`; `IND-SW-EDNL_CTTL5` → `IND-SW-EDNL_CTLL5`; `IND-SW-EDNL_s4CoolingTowers` → `IND-SW-EDNL_S4CoolingTowers`; `IND-SW-EDNL_CM-Crane` → `IND-SW-EDNL-CM-Crane`.
- **SL7 switch IP:** the earlier capture on IND-SW-SL7Mcc listed IND-SW-EDNL_SL7 at `192.168.1.52`; the later captures list it at `192.168.160.73`.
- **Uplink to core:** IND-SW-Dept34_Distr `Te1/0/27` connects to `ind-Core1-MSR.plant.hulamin.co.za` (`C9500-48Y4C`, 192.168.1.1) on `Twe1/0/21`. This device is outside the 18 documented switches.
- **IBA PC:** LLDP on IND-SW-SL7Mcc sees `C7401-SL7-IBA` on both `Gi1/6` (VLAN 591) and `Gi1/10` (VLAN 561).
- **ENG VMs:** LLDP on IND-SW-EDNL_Dept34_PTTL `Gi1/0/2` sees `IND-SL7-ENG-DRI`, `IND-SL7-ENG-PLC`, `IND-PTTLACDRV` and `IND-CTLL5-ENG`. The first two names resemble the VMs documented under IBA_PC.
- **SL5 Fa1/8:** 8 LLDP neighbours (Siemens PLC / CP devices and unnamed MACs) are seen on this single port, so something downstream is fanning out from it.
- **Port-channel1:** up on IND-SW-EDNL_Dept34_PTTL; its member ports were not captured.
- **LLDP on EXTCOOLINGTOWER:** LLDP was not enabled at first; `lldp run` was entered during the capture, so its LLDP output reflects the state after that change.
- **Connection type method:** LLDP media type 26 (1000BASE-SX) and 24 (1000BASE-LX) are shown as Fiber; 16 (100BASE-TX) and 30 (1000BASE-T) as UTP. Ports with no LLDP media data use the port hardware (RJ45 = UTP, SFP = Fiber). The far end of a link shares the same type.
- **Port layouts:** the SFP / RJ45 split for the IE-3200 and IE-3300 switches (SFP = `Gi1/1`–`Gi1/2`) and for the 2960X and IE-9320 is taken from the models and agrees with the LLDP media seen on every connected port.
- **VLAN column:** `—` means the port is not listed in any access VLAN in `show vlan brief` (typically a trunk or routed port).

### To Verify

- [ ] Change the SL7 LV Room switch label to its current IP address `192.168.160.73`
- [ ] Confirm where the `IND-SL7-ENG-*` VMs are hosted (LLDP sees them on IND-SW-EDNL_Dept34_PTTL `Gi1/0/2`, the IBA PC is seen on IND-SW-SL7Mcc)
- [ ] Capture `show etherchannel summary` on IND-SW-EDNL_Dept34_PTTL to list the Port-channel1 members
- [ ] Find what is fanning out from IND-SW-EDNL_SL5 `Fa1/8`
- [ ] Identify the end devices on the 46 connected ports listed under *To Identify*
- [ ] Document room, location and photos for the other 15 switches
