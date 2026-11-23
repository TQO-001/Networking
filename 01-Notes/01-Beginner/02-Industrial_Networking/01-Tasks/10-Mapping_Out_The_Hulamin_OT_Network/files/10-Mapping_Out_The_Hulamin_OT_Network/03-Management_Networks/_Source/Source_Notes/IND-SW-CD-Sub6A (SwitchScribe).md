# IND-SW-CD-Sub6A

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD-Sub6A]] in Network_21.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD-Sub6A |
| **IP Address** | 192.168.160.92 |
| **Vendor profile** | cisco_ios |
| **Model** | Linux |
| **Total physical ports reported** | 10 |
| **Ports up** | 9 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 6.30s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 562 IND-CCTV | axis-b8a44f78a515 | eth0 | 192.168.162.23 | AXIS M3115-LVE Network Camera 10.11.85 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Fa1/6** | Not reported | 562 IND-CCTV | axis-b8a44f78a507 | eth0 | 192.168.162.22 | AXIS M3115-LVE Network Camera 10.11.85 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Fa1/7** | Not reported | 562 IND-CCTV | IND-SW-CD_Sub5MCC | GigabitEthernet1/1 | 192.168.160.96 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E3, RELEASE SOFTWARE (fc3) | 1000baseX(FD) | LLDP |
| **Fa1/8** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | up | — | axis-b8a44f78a507 | eth0 | 192.168.162.22 | Linux | — | CDP |
| **FastEthernet1/6** | up | — | axis-b8a44f66ba0b | eth0 | 192.168.162.21 | Linux | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **FastEthernet1/7** | up | — | axis-b8a44f78a515 | eth0 | 192.168.162.23 | Linux | — | CDP |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | — | IND-SW-CD-Effluent_6A | GigabitEthernet1/1 | 192.168.160.93 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **GigabitEthernet1/1** | up | — | IND-SW-CD-Effluent_6A | GigabitEthernet1/1 | 192.168.160.93 | cisco IE-3000-8TC | — | CDP/LLDP |
| **GigabitEthernet1/2** | up | — | IND-SW-CD_Sub5MCC | GigabitEthernet1/1 | 192.168.160.96 | cisco IE-3000-8TC | — | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: axis-b8a44f66ba0b
Entry address(es): 
  IP address: 192.168.162.21
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/6,  Port ID (outgoing port): eth0
Holdtime : 94 sec

Version :
AXIS M2035-LE Bullet Camera 10.12.114

advertisement version: 2

-------------------------
Device ID: IND-SW-CD-Effluent_6A.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.93
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 151 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07B00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.93

-------------------------
Device ID: axis-b8a44f78a515
Entry address(es): 
  IP address: 192.168.162.23
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/7,  Port ID (outgoing port): eth0
Holdtime : 95 sec

Version :
AXIS M3115-LVE Network Camera 10.11.85

advertisement version: 2

-------------------------
Device ID: axis-b8a44f78a507
Entry address(es): 
  IP address: 192.168.162.22
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/5,  Port ID (outgoing port): eth0
Holdtime : 110 sec

Version :
AXIS M3115-LVE Network Camera 10.11.85

advertisement version: 2

-------------------------
Device ID: IND-SW-CD_Sub5MCC.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.96
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 175 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 07-Sep-20 00:36 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.96


Total cdp entries displayed : 5
IND-SW-CD-Sub6A#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-CD-Effluent_6Gi1/1          120        B               Gi1/1
IND-SW-CD_Sub5MCC.huGi1/2          120        B               Gi1/1
axis-b8a44f78a515   Fa1/7          120        S               b8a4.4f78.a515
axis-b8a44f78a507   Fa1/5          120        S               b8a4.4f78.a507
axis-b8a44f66ba0b   Fa1/6          120        S               b8a4.4f66.ba0b

Total entries displayed: 5

IND-SW-CD-Sub6A#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 08cc.a7c0.7b00
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-CD-Effluent_6A.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

Time remaining: 115 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.93
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 70c9.c6b5.bd00
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-CD_Sub5MCC.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 07-Sep-20 00:36 by prod_rel_team

Time remaining: 90 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.96
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/7
Chassis id: b8a4.4f78.a515
Port id: b8a4.4f78.a515
Port Description: eth0
System Name: axis-b8a44f78a515

System Description: 
AXIS M3115-LVE Network Camera 10.11.85

Time remaining: 94 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.23
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
Local Intf: Fa1/5
Chassis id: b8a4.4f78.a507
Port id: b8a4.4f78.a507
Port Description: eth0
System Name: axis-b8a44f78a507

System Description: 
AXIS M3115-LVE Network Camera 10.11.85

Time remaining: 109 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.22
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
Chassis id: b8a4.4f66.ba0b
Port id: b8a4.4f66.ba0b
Port Description: eth0
System Name: axis-b8a44f66ba0b

System Description: 
AXIS M2035-LE Bullet Camera 10.12.114

Time remaining: 93 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.21
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 16
Vlan ID: - not advertised


Total entries displayed: 5

IND-SW-CD-Sub6A#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
560  IND-Management                   active    
561  IND-CESMS                        active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/8
562  IND-CCTV                         active    Fa1/5, Fa1/6, Fa1/7
590  PowerMeters                      active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD-Sub6A#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.92  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  up                    up      
FastEthernet1/6        unassigned      YES unset  up                    up      
FastEthernet1/7        unassigned      YES unset  up                    up      
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-CD-Sub6A#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 07-Sep-20 00:36 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-CD-Sub6A uptime is 9 weeks, 6 days, 13 hours, 25 minutes
System returned to ROM by power-on
System restarted at 01:39:12 ZA Fri Sep 11 2026
System image file is "flash:/ies-lanbasek9-mz.152-7.E3/ies-lanbasek9-mz.152-7.E3.bin"
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
Processor board ID FOC2048V218
Last reset from power-on
4 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 08:CC:A7:C0:77:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20477M2S
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2048V218
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x64C07780
SKU Brand Name                  : Cisco
cesium fpga version             : 2017.9.14
Device Manager Package          : English


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(7)E3             IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-CD-Sub6A#
```
