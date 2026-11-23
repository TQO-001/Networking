# IND-SW-EDNL_SubStationN

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_SubStationN]] in Network_04.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_SubStationN |
| **IP Address** | 192.168.160.36 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 3 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.27s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/10** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi1/2** | Not reported | — | IND-SW-EDNL_SubStationG | GigabitEthernet1/1 | 192.168.160.44 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **Gi1/3** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_SubStationG | GigabitEthernet1/1 | 192.168.160.44 | cisco IE-3000-8TC | — | CDP/LLDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL_SubStationD | GigabitEthernet1/2 | 192.168.160.43 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
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
Device ID: IND-SW-EDNL_SubStationG.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.44
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 142 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000002852618DDC00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.44

-------------------------
Device ID: IND-SW-EDNL_SubStationD.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.43
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 141 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07800FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.43


Total cdp entries displayed : 2
IND-SW-SubStationN#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_SubStatiGi1/1          120        B               Gi1/1
IND-SW-EDNL_SubStatiGi1/2          120        B               Gi1/2

Total entries displayed: 2

IND-SW-SubStationN#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 2852.618d.dc00
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_SubStationG.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 113 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.44
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 08cc.a7c0.7800
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SubStationD.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

Time remaining: 118 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.43
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 2

IND-SW-SubStationN#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
526  IND-S6                           active    
541  IND-Extrusions                   active    
560  managament                       active    
561  CESMS                            active    Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10
582  IND-SL6                          active    
590  EDPowermeters                    active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-SubStationN#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan541                unassigned      YES unset  up                    up      
Vlan560                192.168.160.36  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  down                  down    
GigabitEthernet1/5     unassigned      YES unset  down                  down    
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
IND-SW-SubStationN#
```

**`show version`**

```Cisco
show version
Cisco IOS XE Software, Version 16.12.03
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre


Cisco IOS-XE software, Copyright (c) 2005-2020 by cisco Systems, Inc.
All rights reserved.  Certain components of Cisco IOS-XE software are
licensed under the GNU General Public License ("GPL") Version 2.0.  The
software code licensed under GPL Version 2.0 is free software that comes
with ABSOLUTELY NO WARRANTY.  You can redistribute and/or modify such
GPL code under the terms of GPL Version 2.0.  For more details, see the
documentation or "License Notice" file accompanying the IOS-XE software,
or the applicable URL provided on the flyer accompanying the IOS-XE
software.


ROM: IOS-XE ROMMON
BOOTLDR: Version 4.1.3 [RELEASE SOFTWARE] crashkernel=64M
IND-SW-SubStationN uptime is 2 weeks, 4 days, 6 hours, 7 minutes
Uptime for this control processor is 2 weeks, 4 days, 6 hours, 8 minutes
System returned to ROM by power-on
System restarted at 08:58:53 EET Sun Nov 1 2026
System image file is "flash:ie3x00-universalk9.16.12.03.SPA.bin"
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
network-essentials  	Smart License                 	 network-essentials  
None                	Subscription Smart License    	 None                          


Smart Licensing Status: UNREGISTERED/No Licenses in Use

cisco IE-3200-8T2S (ARM) processor (revision V04) with 900129K/6147K bytes of memory.
Processor board ID FCW2451P69A
4 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
1958872K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : a0:3d:6e:1a:fb:80
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC24495PZW
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3200-8T2S
System Serial Number               : FCW2451P69A
Top Assembly Part Number           : 068-101629-04
Top Assembly Revision Number       : C0
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x241AFB80
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-SubStationN#
```
