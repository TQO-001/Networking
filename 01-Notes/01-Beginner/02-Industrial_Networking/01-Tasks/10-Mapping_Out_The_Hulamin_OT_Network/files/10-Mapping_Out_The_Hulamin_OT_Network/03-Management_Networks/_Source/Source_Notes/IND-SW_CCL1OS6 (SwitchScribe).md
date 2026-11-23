# IND-SW_CCL1OS6

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW_CCL1OS6]] in Network_03.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW_CCL1OS6 |
| **IP Address** | 192.168.160.15 |
| **Vendor profile** | cisco_ios |
| **Model** | IE-3300-8P2S |
| **Total physical ports reported** | 10 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.54s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Ap1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/1** | Not reported | — | IND-SW_CCL1OS4 | Gi1/2 | 192.168.160.13 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **Gi1/10** | Not reported | 592 CCL_Ruler | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 592 CCL_Ruler | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 592 CCL_Ruler | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 592 CCL_Ruler | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/10** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
% CDP is not enabled
CCL1OS6#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW_CCL1OS4.hulamGi1/1          120        B               Gi1/2

Total entries displayed: 1

CCL1OS6#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Local Intf service instance: -
Chassis id: 0056.2b85.7480
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW_CCL1OS4.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 108 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.13
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: 0056.2b85.7482


Total entries displayed: 1

CCL1OS6#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2, Ap1/1
250  IND-250                          active    
501  VLAN0501                         active    Gi1/3, Gi1/4, Gi1/5, Gi1/6
526  IND-S6                           active    
560  management                       active    
563  CCl-CESS                         active    
582  IND-SL6                          active    
592  CCL_Ruler                        active    Gi1/7, Gi1/8, Gi1/9, Gi1/10
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
CCL1OS6#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan501                unassigned      YES unset  up                    up      
Vlan560                192.168.160.15  YES NVRAM  up                    up      
Vlan592                unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  down                  down    
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  up                    up      
AppGigabitEthernet1/1  unassigned      YES unset  up                    up      
CCL1OS6#
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
CCL1OS6 uptime is 1 year, 17 weeks, 5 days, 23 hours, 29 minutes
Uptime for this control processor is 1 year, 17 weeks, 5 days, 23 hours, 30 minutes
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
Processor board ID FVH2916L3F5
4 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
3963592K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.

Base Ethernet MAC Address          : 9c:a9:b8:8c:d1:80
Motherboard Assembly Number        : 73-101289-12
Motherboard Serial Number          : FVH2914AHG3
Model Revision Number              : V07
Motherboard Revision Number        : C
Model Number                       : IE-3300-8P2S
System Serial Number               : FVH2916L3F5
Top Assembly Part Number           : 68-101989-06
Top Assembly Revision Number       : A2
System FPGA version                : 0.89.2
CIP Serial Number                  : 0xDB8CD180
SKU Brand Name                     : Cisco


Configuration register is 0x102

CCL1OS6#
```
