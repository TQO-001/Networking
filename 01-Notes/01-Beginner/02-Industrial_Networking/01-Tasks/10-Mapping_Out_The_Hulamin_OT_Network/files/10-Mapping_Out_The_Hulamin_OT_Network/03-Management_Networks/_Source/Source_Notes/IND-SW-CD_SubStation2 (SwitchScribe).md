# IND-SW-CD_SubStation2

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD_SubStation2]] in Network_30.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD_SubStation2 |
| **IP Address** | 192.168.160.100 |
| **Vendor profile** | cisco_ios |
| **Model** | Linux |
| **Total physical ports reported** | 10 |
| **Ports up** | 3 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.28s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/10** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | Unclassified-192.168.160.107 | TwentyFiveGigE2/0/15 | 192.168.160.107 | cisco C9500-48Y4C | — | CDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/4** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/5** | up | — | axis-e827251571c5 | eth0 | 192.168.162.50 | Linux | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **GigabitEthernet1/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: axis-e827251571c5
Entry address(es): 
  IP address: 192.168.162.50
Platform: Linux,  Capabilities: Host 
Interface: GigabitEthernet1/5,  Port ID (outgoing port): eth0
Holdtime : 90 sec

Version :
AXIS M3125-LVE Dome Camera 11.11.128

advertisement version: 2

-------------------------
Device ID: IND-SW-CD-CORE.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.107
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE2/0/15
Holdtime : 141 sec

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


Total cdp entries displayed : 2
IND-SW-CD_Substation2#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
axis-e827251571c5   Gi1/5          120        S               e827.2515.71c5

Total entries displayed: 1

IND-SW-CD_Substation2#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/5
Chassis id: e827.2515.71c5
Port id: e827.2515.71c5
Port Description: eth0
System Name: axis-e827251571c5

System Description: 
AXIS M3125-LVE Dome Camera 11.11.128

Time remaining: 119 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.50
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised


Total entries displayed: 1

IND-SW-CD_Substation2#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active    
560  VLAN0560                         active    
561  VLAN0561                         active    Gi1/7, Gi1/8, Gi1/9, Gi1/10
562  IND-CESMS_CCTV                   active    Gi1/5
589  CDPowerMeter                     active    
590  CDPowermeters                    active    Gi1/3, Gi1/4, Gi1/6
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD_Substation2#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.100 YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan576                unassigned      YES unset  down                  down    
Vlan589                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  down                  down    
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
IND-SW-CD_Substation2#
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
IND-SW-CD_Substation2 uptime is 51 weeks, 2 days, 5 hours, 52 minutes
Uptime for this control processor is 51 weeks, 2 days, 5 hours, 53 minutes
System returned to ROM by power-on
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
Processor board ID FOC2429V00S
6 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
2025540K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : cc:7f:75:99:9a:c0
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC2428399S
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3300-8T2S
System Serial Number               : FOC2429V00S
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x2E999AC0
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CD_Substation2#
```
