# IND-SW-CD_HRM

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD_HRM]] in Network_25.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD_HRM |
| **IP Address** | 192.168.160.97 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 10 |
| **Ports up** | 6 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.30s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/10** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 561 VLAN0561 | Unclassified-192.168.160.114 | GigabitEthernet1/1 | 192.168.160.114 | Cisco IOS Software [Cupertino], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.9.5c, RELEASE SOFTWARE (fc1) | 1000baseT(FD) | LLDP |
| **Gi1/6** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | Unclassified-192.168.160.107 | TwentyFiveGigE2/0/19 | 192.168.160.107 | cisco C9500-48Y4C | — | CDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | Unclassified-192.168.160.114 | GigabitEthernet1/1 | 192.168.160.114 | cisco IE-3300-8P2S | — | CDP |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CD-CORE.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.107
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE2/0/19
Holdtime : 138 sec

Version :
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.107

-------------------------
Device ID: IND_SW_CD_DieselDispenser
Entry address(es): 
  IP address: 192.168.160.114
Platform: cisco IE-3300-8P2S,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 135 sec

Version :
Cisco IOS Software [Cupertino], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.9.5c, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Fri 12-Jul-24 17:41 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.114


Total cdp entries displayed : 2
IND-SW-CD_HRM#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND_SW_CD_DieselDispGi1/2          20         B,R             port-001-00000
S7-1200 G2          Gi1/5          20         B,S             port-002.hrmxbdelimonxbgreaser205d

Total entries displayed: 2

IND-SW-CD_HRM#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/2
Chassis id: 4874.10bc.0680
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND_SW_CD_DieselDispenser

System Description: 
Cisco IOS Software [Cupertino], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.9.5c, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Fri 12-Jul-24 17:41 by mcpre

Time remaining: 15 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.114
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - not supported
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type: 24
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/5
Chassis id: S7-1200 G2                6ES7 214-1AH50-0XB0  S V-T2A0BAX62025     1 V  1  0  0
Port id: port-002.hrmxbdelimonxbgreaser205d
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P2R
System Name - not advertised

System Description: 
Siemens, SIMATIC S7, CPU 1214C DC/DC/DC, 6ES7 214-1AH50-0XB0, HW: Version 1, FW: Version V1.0.0, S V-T2A0BAX62025

Time remaining: 16 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.161.155
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
Media Attachment Unit type: 16
Vlan ID: - not advertised


Total entries displayed: 2

IND-SW-CD_HRM#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
560  VLAN0560                         active    
561  VLAN0561                         active    Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10
562  CCTV                             active    
589  CDPowerMeter                     active    
590  CDPowermeters                    active    Gi1/3
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD_HRM#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.97  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan562                unassigned      YES unset  up                    up      
Vlan589                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  up                    up      
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
IND-SW-CD_HRM#
```

**`show version`**

```Cisco
show version
Cisco IOS XE Software, Version 16.12.01
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Tue 30-Jul-19 11:50 by mcpre


Cisco IOS-XE software, Copyright (c) 2005-2019 by cisco Systems, Inc.
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
IND-SW-CD_HRM uptime is 42 weeks, 6 days, 23 hours, 58 minutes
Uptime for this control processor is 42 weeks, 6 days, 23 hours, 59 minutes
System returned to ROM by power-on
System restarted at 13:08:42 UTC Thu Jan 22 2026
System image file is "flash:ie3x00-universalk9.16.12.01.SPA.bin"
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

cisco IE-3300-8T2S (ARM) processor (revision V04) with 899826K/6147K bytes of memory.
Processor board ID FOC2426V0JH
6 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
2025540K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : cc:7f:75:99:1a:00
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC24261BF5
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3300-8T2S
System Serial Number               : FOC2426V0JH
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x2D991A00
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CD_HRM#
```
