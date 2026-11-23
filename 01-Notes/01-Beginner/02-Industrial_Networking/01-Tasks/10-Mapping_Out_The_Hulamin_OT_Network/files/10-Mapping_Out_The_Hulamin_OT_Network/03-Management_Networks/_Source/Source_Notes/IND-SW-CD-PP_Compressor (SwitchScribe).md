# IND-SW-CD-PP_Compressor

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD-PP_Compressor]] in Network_22.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD-PP_Compressor |
| **IP Address** | 192.168.160.80 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3300-8T2S |
| **Total physical ports reported** | 10 |
| **Ports up** | 7 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.50s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Ap1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/10** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 590 Poweremeters | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 580 Plate-Plant-Network | IND-SW-CD-PP_HSHTFsub | GigabitEthernet1/2 | 192.168.160.79 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **Gi1/6** | Not reported | 590 Poweremeters | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |
| **Te1/2** | Not reported | — | IND-SW-CD-PP_FurnaceMCC | GigabitEthernet1/2 | 192.168.160.81 | Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5) | 1000baseX(FD) | LLDP |
| **TenGigabitEthernet1/1** | up | — | IND-SW-CD-PP_FurnaceMCC | GigabitEthernet1/2 | 192.168.160.81 | cisco IE-3300-8T2S | — | CDP/LLDP |
| **TenGigabitEthernet1/2** | up | — | IND-SW-CD-PP_HSHTFsub | GigabitEthernet1/2 | 192.168.160.79 | cisco IE-3000-8TC | — | CDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CD-PP-FurnaceMcc.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.81
Platform: cisco IE-3300-8T2S,  Capabilities: Router Switch IGMP 
Interface: TenGigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 137 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

advertisement version: 2
Peer Source MAC: 549f.c65f.de22
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.81

-------------------------
Device ID: IND-SW-CD-PP_HSHTFsub.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.79
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: TenGigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 146 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Peer Source MAC: 0027.90cc.f682
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCF680FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.79


Total cdp entries displayed : 2
IND-SW-CD-PP-Comp#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-CD-PP-FurnaceTe1/1          120        B,R             Gi1/2
IND-SW-CD-PP_HSHTFsuTe1/2          120        B               port-002-00000
pn-io               Gi1/5          20                         port-001

Total entries displayed: 3

IND-SW-CD-PP-Comp#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Te1/1
Local Intf service instance: -
Chassis id: 549f.c65f.de20
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-CD-PP-FurnaceMcc.hulamin.co.za

System Description: 
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre

Time remaining: 107 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.81
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: 549f.c65f.de22

------------------------------------------------
Local Intf: Te1/2
Local Intf service instance: -
Chassis id: 0027.90cc.f682
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-CD-PP_HSHTFsub.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 114 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.79
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: 0027.90cc.f682

------------------------------------------------
Local Intf: Gi1/5
Local Intf service instance: -
Chassis id: pn-io
Port id: port-001
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 19 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses:
    IP: 192.168.180.2
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised
Peer Source MAC: 000e.8cd8.fc76


Total entries displayed: 3

IND-SW-CD-PP-Comp#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/8, Gi1/9, Gi1/10, Ap1/1
250  ind-250                          active    
560  management                       active    
561  cesms                            active    Gi1/3, Gi1/7
570  A19-PCL                          active    
571  CD-A19-HMI                       active    
578  A19-Network                      active    
580  Plate-Plant-Network              active    Gi1/5
589  CDPowermeters                    active    
590  Poweremeters                     active    Gi1/4, Gi1/6
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD-PP-Comp#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    up      
Vlan560                192.168.160.80  YES manual up                    up      
TenGigabitEthernet1/1  unassigned      YES unset  up                    up      
TenGigabitEthernet1/2  unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  up                    up      
GigabitEthernet1/7     unassigned      YES unset  up                    up      
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
AppGigabitEthernet1/1  unassigned      YES unset  up                    up      
IND-SW-CD-PP-Comp#
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
IND-SW-CD-PP-Comp uptime is 11 weeks, 1 day, 3 minutes
Uptime for this control processor is 11 weeks, 1 day, 4 minutes
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

cisco IE-3300-8T2X (ARM) processor (revision V04) with 629084K/6147K bytes of memory.
Processor board ID FCW2903Y0VL
2 Virtual Ethernet interfaces
8 Gigabit Ethernet interfaces
2 Ten Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
3963588K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.

Base Ethernet MAC Address          : 78:64:a0:ae:1b:40
Motherboard Assembly Number        : 73-102053-04
Motherboard Serial Number          : FOC29020AUQ
Model Revision Number              : V04
Motherboard Revision Number        : 4
Model Number                       : IE-3300-8T2X
System Serial Number               : FCW2903Y0VL
Top Assembly Part Number           : 68-102661-04
Top Assembly Revision Number       : D1
System FPGA version                : 0.89.2
CIP Serial Number                  : 0xD8AE1B40
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CD-PP-Comp#
```
