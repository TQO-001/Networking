# IND-SW-CD_TRCMCC

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD_TRCMCC]] in Network_26.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD_TRCMCC |
| **IP Address** | 192.168.160.103 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3300-8T2X |
| **Total physical ports reported** | 10 |
| **Ports up** | 1 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.31s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/10** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 561 vlan0561 | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 561 vlan0561 | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | Unclassified-192.168.160.123 | TenGigabitEthernet1/2 | 192.168.160.123 | cisco IE-3300-8T2X | 1000baseX(FD) | CDP/LLDP |
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
Device ID: IND-CD-SW-Sub7
Entry address(es): 
  IP address: 192.168.160.123
Platform: cisco IE-3300-8T2X,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): TenGigabitEthernet1/2
Holdtime : 140 sec

Version :
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.123


Total cdp entries displayed : 1
IND-SW-CD_TRCMMC#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-CD-SW-Sub7      Gi1/2          120        B,R             port-002-00000

Total entries displayed: 1

IND-SW-CD_TRCMMC#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/2
Chassis id: 7864.a0ae.19eb
Port id: port-002-00000
Port Description: TenGigabitEthernet1/2
System Name: IND-CD-SW-Sub7

System Description: 
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

Time remaining: 91 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.123
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 1

IND-SW-CD_TRCMMC#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10
250  IND-250                          active    
560  vlan0560                         active    
561  vlan0561                         active    Gi1/3, Gi1/4
590  cdpowermeters                    active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD_TRCMMC#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.103 YES NVRAM  up                    up      
GigabitEthernet1/1     unassigned      YES unset  down                  down    
GigabitEthernet1/2     unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  down                  down    
GigabitEthernet1/4     unassigned      YES unset  down                  down    
GigabitEthernet1/5     unassigned      YES unset  down                  down    
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
IND-SW-CD_TRCMMC#
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
IND-SW-CD_TRCMMC uptime is 51 weeks, 2 days, 5 hours, 52 minutes
Uptime for this control processor is 51 weeks, 2 days, 5 hours, 53 minutes
System returned to ROM by power-on
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
Processor board ID FCW2508PB6D
2 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
1958872K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : bc:e7:12:e5:66:20
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC25054DE2
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3200-8T2S
System Serial Number               : FCW2508PB6D
Top Assembly Part Number           : 068-101629-04
Top Assembly Revision Number       : C0
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x19E56620
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CD_TRCMMC#
```
