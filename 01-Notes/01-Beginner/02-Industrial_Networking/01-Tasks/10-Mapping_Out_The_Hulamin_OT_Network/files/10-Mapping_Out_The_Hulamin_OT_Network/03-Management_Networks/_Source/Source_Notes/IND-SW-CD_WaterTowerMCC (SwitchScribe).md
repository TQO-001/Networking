# IND-SW-CD_WaterTowerMCC

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD_WaterTowerMCC]] in Network_21.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD_WaterTowerMCC |
| **IP Address** | 192.168.160.76 |
| **Vendor profile** | cisco_ios |
| **Model** | Linux |
| **Total physical ports reported** | 10 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 5.52s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 562 IND-CESMS_CCTV | IND-SW-CD_CoolingTower | GigabitEthernet1/1 | 192.168.160.75 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **FastEthernet1/1** | down | — | — | — | — | — | — | — |
| **FastEthernet1/2** | down | — | — | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | up | — | axis-b8a44f7cc26c | eth0 | 192.168.162.29 | Linux | 1000baseT(FD), 1000baseT(HD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **Gi1/2** | Not reported | — | IND-SW-CD-Effluent | GigabitEthernet1/2 | 192.168.160.58 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **GigabitEthernet1/1** | up | — | IND-SW-CD-Effluent | GigabitEthernet1/2 | 192.168.160.58 | cisco IE-3000-8TC | — | CDP/LLDP |
| **GigabitEthernet1/2** | up | — | IND-SW-CD_CoolingTower | GigabitEthernet1/1 | 192.168.160.75 | cisco IE-3000-8TC | — | CDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: axis-b8a44f7cc26c
Entry address(es): 
  IP address: 192.168.162.29
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/8,  Port ID (outgoing port): eth0
Holdtime : 107 sec

Version :
AXIS Q6315-LE PTZ Network Camera 11.5.64

advertisement version: 2

-------------------------
Device ID: IND-SW-CD_CoolingTower.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.75
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 150 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000703509181B00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.75

-------------------------
Device ID: IND-SW-CD-EffluentPlant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.58
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 137 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07700FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.58


Total cdp entries displayed : 3
IND-SW-CD_WaterTower#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-CD-EffluentPlGi1/1          120        B               Gi1/2
IND-SW-CD_CoolingTowGi1/2          120        B               port-001-00000
axis-b8a44f7cc26c   Fa1/8          120        S               b8a4.4f7c.c26c

Total entries displayed: 3

IND-SW-CD_WaterTower#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 08cc.a7c0.7700
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-CD-EffluentPlant.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

Time remaining: 108 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.58
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 7035.0918.1b02
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-CD_CoolingTower.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 115 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.75
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: b8a4.4f7c.c26c
Port id: b8a4.4f7c.c26c
Port Description: eth0
System Name: axis-b8a44f7cc26c

System Description: 
AXIS Q6315-LE PTZ Network Camera 11.5.64

Time remaining: 106 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.29
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


Total entries displayed: 3

IND-SW-CD_WaterTower#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
560  VLAN0560                         active    
561  VLAN0561                         active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5, Fa1/6
562  IND-CESMS_CCTV                   active    Fa1/7, Fa1/8
589  CDPowerMeter                     active    
590  CDPowermeters                    active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD_WaterTower#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.76  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan562                unassigned      YES unset  up                    up      
Vlan589                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  down                  down    
FastEthernet1/2        unassigned      YES unset  down                  down    
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  down                  down    
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-CD_WaterTower#
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

IND-SW-CD_WaterTower uptime is 9 weeks, 6 days, 13 hours, 8 minutes
System returned to ROM by power-on
System restarted at 01:54:52 ZA Fri Sep 11 2026
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
Processor board ID FOC2247V0PM
Last reset from power-on
6 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 70:C9:C6:B4:66:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC22453VYT
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2247V0PM
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x43B46600
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(4)EA5            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-CD_WaterTower#
```
