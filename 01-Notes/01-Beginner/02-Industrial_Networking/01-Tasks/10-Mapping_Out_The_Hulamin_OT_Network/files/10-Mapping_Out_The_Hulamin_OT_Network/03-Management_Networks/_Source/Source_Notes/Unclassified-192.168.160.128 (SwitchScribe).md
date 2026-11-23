# Unclassified-192.168.160.128

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[Unclassified-192.168.160.128]] in Network_34.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.128 |
| **IP Address** | 192.168.160.128 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco WS-C2950SX-24 |
| **Total physical ports reported** | 10 |
| **Ports up** | 2 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.47s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Ap1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/10** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 564 CDHotMill_L1 | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | Unclassified-192.168.160.107 | TwentyFiveGigE2/0/27 | 192.168.160.107 | cisco C9500-48Y4C | — | CDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | Switch | FastEthernet0/2 | — | cisco WS-C2950SX-24 | — | CDP |
| **GigabitEthernet1/4** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/5** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: Switch
Entry address(es): 
Platform: cisco WS-C2950SX-24,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/3,  Port ID (outgoing port): FastEthernet0/2
Holdtime : 120 sec

Version :
Cisco Internetwork Operating System Software 
IOS (tm) C2950 Software (C2950-I6Q4L2-M), Version 12.1(22)EA8, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2006 by cisco Systems, Inc.
Compiled Fri 12-May-06 17:19 by myl

advertisement version: 2
Peer Source MAC: 0019.0637.21c2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000000019063721C0FF0000
VTP Management Domain: ''
Native VLAN: 1 (Mismatch)
Duplex: full
Management address(es): 

-------------------------
Device ID: IND-SW-CD-CORE.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.107
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE2/0/27
Holdtime : 129 sec

Version :
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

advertisement version: 2
Peer Source MAC: e80a.b9fd.ff1b
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.107


Total cdp entries displayed : 2
IND-SW-CDHL-HRM-MARAS#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID

Total entries displayed: 0

IND-SW-CDHL-HRM-MARAS#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail

Total entries displayed: 0

IND-SW-CDHL-HRM-MARAS#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2, Ap1/1
560  Management                       active    
564  CDHotMill_L1                     active    Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CDHL-HRM-MARAS#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.128 YES NVRAM  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  down                  down    
GigabitEthernet1/5     unassigned      YES unset  down                  down    
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
AppGigabitEthernet1/1  unassigned      YES unset  up                    up      
IND-SW-CDHL-HRM-MARAS#
```

**`show version`**

```Cisco
show version
Cisco IOS XE Software, Version 17.12.04
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre


Cisco IOS-XE software, Copyright (c) 2005-2024 by cisco Systems, Inc.
All rights reserved.  Certain components of Cisco IOS-XE software are
licensed under the GNU General Public License ("GPL") Version 2.0.  The
software code licensed under GPL Version 2.0 is free software that comes
with ABSOLUTELY NO WARRANTY.  You can redistribute and/or modify such
GPL code under the terms of GPL Version 2.0.  For more details, see the
documentation or "License Notice" file accompanying the IOS-XE software,
or the applicable URL provided on the flyer accompanying the IOS-XE
software.


ROM: IOS-XE ROMMON
BOOTLDR: Version 8.1.4 [RELEASE SOFTWARE] crashkernel=64M
IND-SW-CDHL-HRM-MARAS uptime is 2 days, 1 hour, 7 minutes
Uptime for this control processor is 2 days, 1 hour, 8 minutes
System returned to ROM by power-on
System image file is "flash:packages.conf"
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


Technology Package License Information: 

------------------------------------------------------------------------------
Technology-package                                     Technology-package
Current                        Type                       Next reboot  
------------------------------------------------------------------------------
network-advantage   	Smart License                 	 None                
None                	Subscription Smart License    	 None                          


Smart Licensing Status: Smart Licensing Using Policy

cisco IE-3300-8P2S (ARM) processor (revision V07) with 629084K/6147K bytes of memory.
Processor board ID FVH2943LA2P
2 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
3963588K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.

Base Ethernet MAC Address          : 34:c3:fd:61:3e:e0
Motherboard Assembly Number        : 73-101289-12
Motherboard Serial Number          : FVH2942AH4J
Model Revision Number              : V07
Motherboard Revision Number        : C
Model Number                       : IE-3300-8P2S
System Serial Number               : FVH2943LA2P
Top Assembly Part Number           : 68-101989-06
Top Assembly Revision Number       : A2
System FPGA version                : 0.89.2
CIP Serial Number                  : 0xD2613EE0
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CDHL-HRM-MARAS#
```
