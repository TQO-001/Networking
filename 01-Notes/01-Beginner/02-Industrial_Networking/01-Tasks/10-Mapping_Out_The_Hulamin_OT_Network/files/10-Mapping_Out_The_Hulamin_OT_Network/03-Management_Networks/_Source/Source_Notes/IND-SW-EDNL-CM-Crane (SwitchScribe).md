# IND-SW-EDNL-CM-Crane

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: Department 34 (`02-Dept_34`).

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL-CM-Crane |
| **IP Address** | 192.168.160.126 |
| **Vendor profile** | cisco_ios |
| **Model** | IE-3300-8P2S |
| **Total physical ports reported** | 10 |
| **Ports up** | 1 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.88s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Ap1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/10** | Not reported | 592 Crane | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 593 ignition | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_S4CoolingTowers | GigabitEthernet1/2 | 192.168.160.30 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | down | — | — | — | — | — | — | — |
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
Device ID: IND-SW-EDNL_S4CoolingTowers.hulamin.co.z
Entry address(es): 
  IP address: 192.168.160.30
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 124 sec

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
IND-SW-EDNL-CM-Crane#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_S4CoolinGi1/1          120        B               Gi1/2

Total entries displayed: 1

IND-SW-EDNL-CM-Crane#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
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

Time remaining: 92 seconds
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

IND-SW-EDNL-CM-Crane#
```

**`show vlan brief`**

```Cisco
show vlan brief

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
IND-SW-EDNL-CM-Crane#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
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
IND-SW-EDNL-CM-Crane#
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
IND-SW-EDNL-CM-Crane uptime is 2 weeks, 2 days, 2 hours, 23 minutes
Uptime for this control processor is 2 weeks, 2 days, 2 hours, 24 minutes
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
network-advantage   	Smart License                 	 network-advantage   
None                	Subscription Smart License    	 None                          


Smart Licensing Status: Smart Licensing Using Policy

cisco IE-3300-8P2S (ARM) processor (revision V07) with 629084K/6147K bytes of memory.
Processor board ID FVH2943LAT6
3 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
3963592K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.

Base Ethernet MAC Address          : e4:89:ca:a7:d5:c0
Motherboard Assembly Number        : 73-101289-12
Motherboard Serial Number          : FVH2942AJWQ
Model Revision Number              : V07
Motherboard Revision Number        : C
Model Number                       : IE-3300-8P2S
System Serial Number               : FVH2943LAT6
Top Assembly Part Number           : 68-101989-06
Top Assembly Revision Number       : A2
System FPGA version                : 0.89.2
CIP Serial Number                  : 0xD2A7D5C0
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-EDNL-CM-Crane#
```
