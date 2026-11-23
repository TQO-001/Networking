# IND-SW-EDNL_CompHouse2&3_2ndSW

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_CompHouse2&3_2ndSW]] in Network_01.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_CompHouse2&3_2ndSW |
| **IP Address** | 192.168.160.95 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco WS-C2960X-24PD-L |
| **Total physical ports reported** | 8 |
| **Ports up** | 7 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.41s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi0/1** | Not reported | 590 EDPowerMeterMngt | — | — | — | — | — | — |
| **Gi0/2** | Not reported | 590 EDPowerMeterMngt | — | — | — | — | — | — |
| **Gi0/3** | Not reported | 590 EDPowerMeterMngt | — | — | — | — | — | — |
| **Gi0/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi0/5** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi0/6** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi0/7** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **GigabitEthernet0/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/8** | up | — | IND-SW-EDNL_CompHouse2and3 | GigabitEthernet1/0/24 | 192.168.160.6 | cisco WS-C2960X-24PD-L | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_CompHouse2and3.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.6
Platform: cisco WS-C2960X-24PD-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet0/8,  Port ID (outgoing port): GigabitEthernet1/0/24
Holdtime : 133 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sat 14-Mar-20 16:53 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.6

IND-SW-EDNL_CompHouse2&3_2ndSW#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_CompHousGi0/8          120        B               Gi1/0/24

Total entries displayed: 1

IND-SW-EDNL_CompHouse2&3_2ndSW#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: 5006.abd7.9280
Port id: Gi1/0/24
Port Description: GigabitEthernet1/0/24
System Name: IND-SW-EDNL_CompHouse2and3.hulamin.co.za

System Description: 
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sat 14-Mar-20 16:53 by prod_rel_team

Time remaining: 91 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.6
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: 1


Total entries displayed: 1

IND-SW-EDNL_CompHouse2&3_2ndSW#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
526  IND-S6                           active    
560  VLAN0560                         active    
561  VLAN0561                         active    Gi0/4, Gi0/5, Gi0/6, Gi0/7
574  IND-AnnealingFurnace             active    
582  IND-SL6                          active    
588  IND-RG9                          active    
590  EDPowerMeterMngt                 active    Gi0/1, Gi0/2, Gi0/3
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_CompHouse2&3_2ndSW#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.95  YES NVRAM  up                    up      
Vlan561                unassigned      YES NVRAM  up                    up      
Vlan590                unassigned      YES NVRAM  up                    up      
GigabitEthernet0/1     unassigned      YES unset  up                    up      
GigabitEthernet0/2     unassigned      YES unset  up                    up      
GigabitEthernet0/3     unassigned      YES unset  up                    up      
GigabitEthernet0/4     unassigned      YES unset  up                    up      
GigabitEthernet0/5     unassigned      YES unset  up                    up      
GigabitEthernet0/6     unassigned      YES unset  up                    up      
GigabitEthernet0/7     unassigned      YES unset  down                  down    
GigabitEthernet0/8     unassigned      YES unset  up                    up      
IND-SW-EDNL_CompHouse2&3_2ndSW#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, C2960 Software (C2960-LANBASEK9-M), Version 12.2(55)SE12, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Thu 28-Sep-17 02:53 by prod_rel_team
Image text-base: 0x00003000, data-base: 0x01900000

ROM: Bootstrap program is C2960 boot loader
BOOTLDR: C2960 Boot Loader (C2960-HBOOT-M) Version 12.2(35r)SE2, RELEASE SOFTWARE (fc1)

IND-SW-EDNL_CompHouse2&3_2ndSW uptime is 1 year, 19 weeks, 6 days, 9 hours, 49 minutes
System returned to ROM by power-on
System restarted at 03:04:46 UTC Thu Jul 3 2025
System image file is "flash:c2960-lanbasek9-mz.122-55.SE12.bin"


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

cisco WS-C2960G-8TC-L (PowerPC405) processor (revision A0) with 65536K bytes of memory.
Processor board ID FOC1335V4PX
Last reset from power-on
4 Virtual Ethernet interfaces
8 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:27:0C:62:17:80
Motherboard assembly number     : 73-10613-08
Power supply part number        : 341-0208-01
Motherboard serial number       : FOC13352QM1
Power supply serial number      : LIT13320GDW
Model revision number           : A0
Motherboard revision number     : B0
Model number                    : WS-C2960G-8TC-L
System serial number            : FOC1335V4PX
Top Assembly Part Number        : 800-28133-01
Top Assembly Revision Number    : E0
Version ID                      : V01
CLEI Code Number                : COM7S00ARA
Hardware Board Revision Number  : 0x01


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 8     WS-C2960G-8TC-L    12.2(55)SE12          C2960-LANBASEK9-M        


Configuration register is 0xF

IND-SW-EDNL_CompHouse2&3_2ndSW#
```
