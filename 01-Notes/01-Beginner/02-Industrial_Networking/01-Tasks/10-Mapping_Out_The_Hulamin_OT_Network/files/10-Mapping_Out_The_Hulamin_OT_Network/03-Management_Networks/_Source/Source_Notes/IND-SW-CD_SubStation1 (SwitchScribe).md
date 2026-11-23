# IND-SW-CD_SubStation1

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD_SubStation1]] in Network_23.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD_SubStation1 |
| **IP Address** | 192.168.160.51 |
| **Vendor profile** | cisco_ios |
| **Model** | Linux |
| **Total physical ports reported** | 10 |
| **Ports up** | 10 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.93s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 561 VLAN0561 | Managed Redundant Switch 03182 | 100TX,RJ45. | 192.168.127.253 | EDS-408A-MM-ST | MAU type - not advertised | LLDP |
| **Fa1/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 562 IND-CCTV | IND-SW-CD_SubStation4 | GigabitEthernet1/2 | 192.168.160.52 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **Fa1/7** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 576 VLAN0576 | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Diesel_CP01 | FastEthernet1/7 | 192.168.1.70 | cisco 1783-BMS10CGL | — | CDP |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/6** | up | — | axis-b8a44f78a516 | eth0 | 192.168.162.24 | Linux | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **FastEthernet1/6** | up | — | axis-e82725158d17 | eth0 | 192.168.162.46 | Linux | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **FastEthernet1/6** | up | — | axis-e82725134a6e | eth0 | 192.168.162.45 | Linux | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **FastEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **Gi1/1** | Not reported | — | IND-SW-CD_A19 | GigabitEthernet1/0/25 | 192.168.160.82 | Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3) | 1000baseX(FD) | LLDP |
| **Gi1/2** | Not reported | — | moxa | Ethernet Interface Port 08 | — | — | MAU type - not advertised | LLDP |
| **GigabitEthernet1/1** | up | — | IND-SW-CD_SubStation4 | GigabitEthernet1/2 | 192.168.160.52 | cisco IE-3000-8TC | — | CDP |
| **GigabitEthernet1/2** | up | — | IND-SW-CD_A19 | GigabitEthernet1/0/25 | 192.168.160.82 | cisco WS-C2960X-24TS-L | — | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: axis-b8a44f78a516
Entry address(es): 
  IP address: 192.168.162.24
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/6,  Port ID (outgoing port): eth0
Holdtime : 95 sec

Version :
AXIS M3115-LVE Network Camera 10.11.85

advertisement version: 2

-------------------------
Device ID: axis-e82725158d17
Entry address(es): 
  IP address: 192.168.162.46
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/6,  Port ID (outgoing port): eth0
Holdtime : 95 sec

Version :
AXIS M3125-LVE Dome Camera 11.11.128

advertisement version: 2

-------------------------
Device ID: IND-SW-CDHL_PLCRoom.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.82
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/0/25
Holdtime : 160 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000778D718800FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.82

-------------------------
Device ID: axis-e82725134a6e
Entry address(es): 
  IP address: 192.168.162.45
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/6,  Port ID (outgoing port): eth0
Holdtime : 95 sec

Version :
AXIS M3125-LVE Dome Camera 11.11.128

advertisement version: 2

-------------------------
Device ID: IND-SW-CD_SubStation4.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.52
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 157 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000701F5320E380FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.52

-------------------------
Device ID: Diesel_CP01
Entry address(es): 
  IP address: 192.168.1.70
Platform: cisco 1783-BMS10CGL,  Capabilities: Switch IGMP 
Interface: FastEthernet1/3,  Port ID (outgoing port): FastEthernet1/7
Holdtime : 146 sec

Version :
Cisco IOS Software, S5700 Software (S5700-UNIVERSALK9-M), Version 15.2(8)E1, RELEASE SOFTWARE (fc8)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2021 by Cisco Systems, Inc.
Compiled Tue 12-Oct-21 04:08 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1 (Mismatch)
Duplex: full
Management address(es): 
  IP address: 192.168.1.70


Total cdp entries displayed : 6
IND-SW-CD_SubStation1#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
Managed Redundant SwFa1/8          120        B               3
moxa                Fa1/3          120                        Eth1/8
IND-SW-CDHL_PLCRoom.Gi1/2          120        B               Gi1/0/25
IND-SW-CD_SubStationGi1/1          120        B               port-002-00000
axis-e82725158d17   Fa1/6          120        S               e827.2515.8d17
axis-b8a44f78a516   Fa1/6          120        S               b8a4.4f78.a516
axis-e82725134a6e   Fa1/6          120        S               e827.2513.4a6e

Total entries displayed: 7

IND-SW-CD_SubStation1#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Fa1/8
Chassis id: 0090.e87e.2891
Port id: 3
Port Description: 100TX,RJ45.
System Name: Managed Redundant Switch 03182

System Description: 
EDS-408A-MM-ST

Time remaining: 97 seconds
System Capabilities: B
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.127.253
    OID:
        0.0.0.0.1.0.0.0.3.0.0.0.6.0.0.0.1.0.0.0.4.0.0.0.1.0.0.33.14720.0.0.7.0.0.0.7.
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/3
Chassis id: 0090.e8a0.be71
Port id: Eth1/8
Port Description: Ethernet Interface Port 08
System Name: moxa
System Description - not advertised

Time remaining: 100 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 0077.8d71.8800
Port id: Gi1/0/25
Port Description: GigabitEthernet1/0/25
System Name: IND-SW-CDHL_PLCRoom.hulamin.co.za

System Description: 
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

Time remaining: 97 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.82
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/1
Chassis id: 701f.5320.e3c0
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-CD_SubStation4.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 115 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.52
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/6
Chassis id: e827.2515.8d17
Port id: e827.2515.8d17
Port Description: eth0
System Name: axis-e82725158d17

System Description: 
AXIS M3125-LVE Dome Camera 11.11.128

Time remaining: 94 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.46
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/6
Chassis id: b8a4.4f78.a516
Port id: b8a4.4f78.a516
Port Description: eth0
System Name: axis-b8a44f78a516

System Description: 
AXIS M3115-LVE Network Camera 10.11.85

Time remaining: 94 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.24
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/6
Chassis id: e827.2513.4a6e
Port id: e827.2513.4a6e
Port Description: eth0
System Name: axis-e82725134a6e

System Description: 
AXIS M3125-LVE Dome Camera 11.11.128

Time remaining: 94 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.45
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised


Total entries displayed: 7

IND-SW-CD_SubStation1#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
560  VLAN0560                         active    
561  VLAN0561                         active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5, Fa1/7
562  IND-CCTV                         active    Fa1/6
576  VLAN0576                         active    Fa1/8
589  CDPowerMeter                     active    
590  CDPowermeters                    active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD_SubStation1#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.51  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan576                unassigned      YES unset  up                    up      
Vlan589                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
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
IND-SW-CD_SubStation1#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-CD_SubStation1 uptime is 51 weeks, 2 days, 5 hours, 40 minutes
System returned to ROM by power-on
System restarted at 09:14:39 ZA Tue Nov 25 2025
System image file is "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin"
Last reload reason: power-on



This product contains cryptographic features and is subject to United
States and local country laws governing import, export, transfer and
use. Delivery of Cisco cryptographic products does not imply
third-party authority to import, export, distribute or use encryption.
Importers, exporters, distributors and users are responsible for
compliance with U.S. and local country laws. By using this product you
agree to comply with applicable laws and regulations. If you are unable
to comply with U.S. and local laws, return this product immediately.

A summary of U.S. laws governing Cisco cryptographic products may be found at:
http://www.cisco.com/wwl/export/crypto/tool/stqrg.html

If you require further assistance please contact us by sending email to
export@cisco.com.

cisco IE-3000-8TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2133V24P
Last reset from power-on
6 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 70:1F:53:FE:56:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC21296NN7
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2133V24P
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x5FFE5600
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(4)EA5            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-CD_SubStation1#
```
