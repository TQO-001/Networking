# IND-SW-EDNL_CTLL5

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: Department 34 (`02-Dept_34`).

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_CTLL5 |
| **IP Address** | 192.168.160.71 |
| **Vendor profile** | cisco_ios |
| **Model** | IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 3 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.91s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 567 CTTL5_Mgaurd | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 567 CTTL5_Mgaurd | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 590 EDPowerMeters | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 591 CTLL5_Network | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 591 CTLL5_Network | IND-SW-EDNL_Dept34_PTTL | GigabitEthernet1/0/25 | 192.168.160.84 | Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3) | 1000baseX(FD) | LLDP |
| **FastEthernet1/1** | down | — | — | — | — | — | — | — |
| **FastEthernet1/2** | down | — | — | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_Dept34_PTTL | GigabitEthernet1/0/25 | 192.168.160.84 | cisco WS-C2960X-24TS-L | — | CDP/LLDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.84
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/25
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


Total cdp entries displayed : 1
IND-SW-EDNL_CTLL5#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_Dept34_PGi1/1          120        B               Gi1/0/25
IND-SW-CTLL5-panel  Fa1/8          20         B               6

Total entries displayed: 2

IND-SW-EDNL_CTLL5#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
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

Time remaining: 109 seconds
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

Time remaining: 18 seconds
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

IND-SW-EDNL_CTLL5#
```

**`show vlan brief`**

```Cisco
show vlan brief

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
IND-SW-EDNL_CTLL5#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
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
IND-SW-EDNL_CTLL5#
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

IND-SW-EDNL_CTLL5 uptime is 4 hours, 29 minutes
System returned to ROM by power-on
System restarted at 10:37:10 EET Thu Nov 19 2026
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
Processor board ID FOC2144V1T3
Last reset from power-on
10 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:27:90:CC:EA:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC214159SY
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2144V1T3
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x53CCEA00
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(4)EA5            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_CTLL5#
```
