# IND-SW-EDNL_A17ControlRoom

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: Department 34 (`02-Dept_34`).

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_A17ControlRoom |
| **IP Address** | 192.168.160.65 |
| **Vendor profile** | cisco_ios |
| **Model** | IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.91s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 574 IND-AnnealingFurnace | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 561 IND-CESMSNetwork | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 574 IND-AnnealingFurnace | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 IND-CESMSNetwork | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 IND-CESMSNetwork | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 561 IND-CESMSNetwork | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | down | — | — | — | — | — | — | — |
| **FastEthernet1/3** | down | — | — | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **Gi1/1** | Not reported | — | IND-SW-EDNL_ExtcCoolingTowers | GigabitEthernet1/1 | 192.168.160.101 | Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5) | 1000baseX(FD) | LLDP |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_SL7 | GigabitEthernet1/2 | 192.168.160.73 | cisco IE-3000-4TC | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL_ExtcCoolingTowers | GigabitEthernet1/1 | 192.168.160.101 | cisco IE-3200-8T2S | — | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.101
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 139 sec

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
Holdtime : 159 sec

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
IND-SW-EDNL_A17ControlRoom#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_EXTCOOLIGi1/2          120        B,R             Gi1/1
IND-SW-EDNL_SL7.hulaGi1/1          120        B               Gi1/2

Total entries displayed: 2

IND-SW-EDNL_A17ControlRoom#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/2
Chassis id: a03d.6e1a.fce0
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_EXTCOOLINGTOWER.hulamin.co.za

System Description: 
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

Time remaining: 93 seconds
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

Time remaining: 109 seconds
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

IND-SW-EDNL_A17ControlRoom#
```

**`show vlan brief`**

```Cisco
show vlan brief

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
IND-SW-EDNL_A17ControlRoom#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
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
IND-SW-EDNL_A17ControlRoom#
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

IND-SW-EDNL_A17ControlRoom uptime is 20 weeks, 2 days, 5 hours, 18 minutes
System returned to ROM by power-on
System restarted at 09:44:18 EET Tue Jun 30 2026
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
Processor board ID FOC2144V1YQ
Last reset from power-on
9 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:27:90:CC:E0:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC21435NB3
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2144V1YQ
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x53CCE080
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(4)EA5            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_A17ControlRoom#
```
