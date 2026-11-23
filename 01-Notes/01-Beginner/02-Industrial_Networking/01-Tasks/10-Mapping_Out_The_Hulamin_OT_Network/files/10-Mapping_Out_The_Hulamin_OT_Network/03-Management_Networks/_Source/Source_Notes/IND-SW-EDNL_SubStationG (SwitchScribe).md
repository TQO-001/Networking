# IND-SW-EDNL_SubStationG

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_SubStationG]] in Network_04.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_SubStationG |
| **IP Address** | 192.168.160.44 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.64s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 562 IND-CCTV | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 1 default | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | down | — | — | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_SubStationN | GigabitEthernet1/1 | 192.168.160.36 | cisco IE-3200-8T2S | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL_ElectrciansWorkShop | GigabitEthernet1/1 | 192.168.160.27 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_ElectricalWorkShop.hulamin.c
Entry address(es): 
  IP address: 192.168.160.27
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 174 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000701F5320E400FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es): 
  IP address: 192.168.160.27

-------------------------
Device ID: IND-SW-SubStationN.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.36
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 166 sec

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
  IP address: 192.168.160.36

IND-SW-EDNL_SubStationG#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_ElectricGi1/2          120        B               Gi1/1
IND-SW-SubStationN  Gi1/1          120        B,R             Gi1/1

Total entries displayed: 2

IND-SW-EDNL_SubStationG#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: 701f.5320.e400
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_ElectricalWorkShop.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

Time remaining: 104 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.27
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: a03d.6e1a.fb80
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-SubStationN.hulamin.co.za

System Description: 
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

Time remaining: 106 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.36
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 2

IND-SW-EDNL_SubStationG#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/5, Fa1/6, Fa1/7, Fa1/8
250  IND-250                          active    
526  IND-S6                           active    
541  IND-Extrusions                   active    
560  Management                       active    
561  CESMS                            active    Fa1/1, Fa1/2, Fa1/3
562  IND-CCTV                         active    Fa1/4
582  IND-SL6                          active    
590  EDPowermeters                    active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_SubStationG#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan501                unassigned      YES unset  down                  down    
Vlan541                unassigned      YES unset  up                    up      
Vlan560                192.168.160.44  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan562                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  down                  down    
FastEthernet1/4        unassigned      YES unset  down                  down    
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-EDNL_SubStationG#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-EDNL_SubStationG uptime is 12 weeks, 4 days, 23 hours, 5 minutes
System returned to ROM by power-on
System restarted at 15:57:50 ZA Sat Aug 22 2026
System image file is "flash:/ies-lanbasek9-mz.150-2.EY3/ies-lanbasek9-mz.150-2.EY3.bin"


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
Processor board ID FOC2045V0ZF
Last reset from power-on
6 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 28:52:61:8D:DC:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20443E92
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2045V0ZF
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x638DDC00
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 10    IE-3000-8TC        15.0(2)EY3            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_SubStationG#
```
