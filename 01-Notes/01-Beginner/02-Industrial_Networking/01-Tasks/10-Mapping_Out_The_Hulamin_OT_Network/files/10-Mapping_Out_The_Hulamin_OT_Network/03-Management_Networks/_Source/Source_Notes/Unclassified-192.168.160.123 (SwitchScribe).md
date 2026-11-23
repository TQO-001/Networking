# Unclassified-192.168.160.123

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[Unclassified-192.168.160.123]] in Network_26.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.123 |
| **IP Address** | 192.168.160.123 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 10 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | TELNET |
| **Connection port** | 23 |
| **Collection status** | success |
| **Connection method** | Netmiko Telnet |
| **Collection time** | 6.30s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Ap1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/10** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 561 cesms | — | — | — | — | — | — |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |
| **TenGigabitEthernet1/1** | up | — | Unclassified-192.168.160.107 | TwentyFiveGigE2/0/7 | 192.168.160.107 | cisco C9500-48Y4C | — | CDP |
| **TenGigabitEthernet1/2** | up | — | IND-SW-CD_TRCMCC | GigabitEthernet1/2 | 192.168.160.103 | cisco IE-3200-8T2S | 1000baseX(FD) | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CD-CORE.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.107
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: TenGigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE2/0/7
Holdtime : 123 sec

Version :
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

advertisement version: 2
Peer Source MAC: e80a.b9fd.ff07
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.107

-------------------------
Device ID: IND-SW-CD_TRCMMC.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.103
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP 
Interface: TenGigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 132 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

advertisement version: 2
Peer Source MAC: bce7.12e5.6622
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.103


Total cdp entries displayed : 2
IND-CD-SW-Sub7#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-CD_TRCMMC.hulTe1/2          120        B,R             Gi1/2

Total entries displayed: 1

IND-CD-SW-Sub7#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Te1/2
Local Intf service instance: -
Chassis id: bce7.12e5.6620
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-CD_TRCMMC.hulamin.co.za

System Description: 
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

Time remaining: 92 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.103
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: bce7.12e5.6622


Total entries displayed: 1

IND-CD-SW-Sub7#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Ap1/1
560  Management                       active    
561  cesms                            active    Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10
590  Powermeters                      active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-CD-SW-Sub7#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.123 YES NVRAM  up                    up      
TenGigabitEthernet1/1  unassigned      YES unset  up                    up      
TenGigabitEthernet1/2  unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  down                  down    
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
AppGigabitEthernet1/1  unassigned      YES unset  up                    up      
IND-CD-SW-Sub7#
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
IND-CD-SW-Sub7 uptime is 9 weeks, 6 days, 13 hours, 27 minutes
Uptime for this control processor is 9 weeks, 6 days, 13 hours, 28 minutes
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

cisco IE-3300-8T2X (ARM) processor (revision V04) with 629084K/6147K bytes of memory.
Processor board ID FCW2903Y0V9
2 Virtual Ethernet interfaces
8 Gigabit Ethernet interfaces
2 Ten Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
3963592K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.

Base Ethernet MAC Address          : 78:64:a0:ae:19:e0
Motherboard Assembly Number        : 73-102053-04
Motherboard Serial Number          : FOC29020ASC
Model Revision Number              : V04
Motherboard Revision Number        : 4
Model Number                       : IE-3300-8T2X
System Serial Number               : FCW2903Y0V9
Top Assembly Part Number           : 68-102661-04
Top Assembly Revision Number       : D1
System FPGA version                : 0.89.2
CIP Serial Number                  : 0xD8AE19E0
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-CD-SW-Sub7#
```
