# Unclassified-192.168.160.114

> Cluster: Cluster_01  
> Classification: provisional LLDP/CDP discovery grouping. Confirm physical department/location before renaming or moving.

#### Unclassified-192.168.160.114

##### Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.114 |
| **IP Address** | 192.168.160.114 |
| **Vendor profile** | cisco_ios |
| **Model** | Linux |
| **Total physical ports reported** | 10 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.57s |

##### Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/10** | Not reported | 562 cameras | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 562 cameras | CD-DieselPump-Camera2 | eth0 | 192.168.162.36 | AXIS M2035-LE Bullet Camera 10.12.166 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Gi1/4** | Not reported | 562 cameras | IND-SW-CD_HRM | GigabitEthernet1/2 | 192.168.160.97 | Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3) | 1000baseX(FD) | LLDP |
| **Gi1/5** | Not reported | 562 cameras | CD-DieselPump-Camera3 | eth0 | 192.168.162.37 | AXIS M2035-LE Bullet Camera 10.12.166 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Gi1/6** | Not reported | 562 cameras | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 562 cameras | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 562 cameras | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 562 cameras | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-CD_HRM | GigabitEthernet1/2 | 192.168.160.97 | cisco IE-3300-8T2S | — | CDP/LLDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | CD-DieselPump-Camera1 | eth0 | 192.168.162.35 | Linux | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **GigabitEthernet1/4** | up | — | CD-DieselPump-Camera3 | eth0 | 192.168.162.37 | Linux | — | CDP |
| **GigabitEthernet1/5** | up | — | CD-DieselPump-Camera2 | eth0 | 192.168.162.36 | Linux | — | CDP |
| **GigabitEthernet1/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |

##### Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: CD-DieselPump-Camera1
Entry address(es): 
  IP address: 192.168.162.35
Platform: Linux,  Capabilities: Host 
Interface: GigabitEthernet1/3,  Port ID (outgoing port): eth0
Holdtime : 99 sec

Version :
AXIS M2035-LE Bullet Camera 10.12.166

advertisement version: 2
Peer Source MAC: b8a4.4fc8.1544

-------------------------
Device ID: CD-DieselPump-Camera2
Entry address(es): 
  IP address: 192.168.162.36
Platform: Linux,  Capabilities: Host 
Interface: GigabitEthernet1/5,  Port ID (outgoing port): eth0
Holdtime : 99 sec

Version :
AXIS M2035-LE Bullet Camera 10.12.166

advertisement version: 2
Peer Source MAC: b8a4.4fb8.7da2

-------------------------
Device ID: CD-DieselPump-Camera3
Entry address(es): 
  IP address: 192.168.162.37
Platform: Linux,  Capabilities: Host 
Interface: GigabitEthernet1/4,  Port ID (outgoing port): eth0
Holdtime : 95 sec

Version :
AXIS M2035-LE Bullet Camera 10.12.166

advertisement version: 2
Peer Source MAC: b8a4.4fc5.7702

-------------------------
Device ID: IND-SW-CD_HRM.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.97
Platform: cisco IE-3300-8T2S,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 140 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Tue 30-Jul-19 11:50 by mcpre

advertisement version: 2
Peer Source MAC: cc7f.7599.1a02
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.97


Total cdp entries displayed : 4
IND_SW_CD_DieselDispenser#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-CD_HRM.hulamiGi1/1          120        B,R             Gi1/2
CD-DieselPump-CameraGi1/4          120        S               b8a4.4fc5.7702
CD-DieselPump-CameraGi1/5          120        S               b8a4.4fb8.7da2
CD-DieselPump-CameraGi1/3          120        S               b8a4.4fc8.1544

Total entries displayed: 4

IND_SW_CD_DieselDispenser#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: cc7f.7599.1a00
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-CD_HRM.hulamin.co.za

System Description: 
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Tue 30-Jul-19 11:50 by mcpre

Time remaining: 92 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.97
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: cc7f.7599.1a02

------------------------------------------------
Local Intf: Gi1/4
Chassis id: b8a4.4fc5.7702
Port id: b8a4.4fc5.7702
Port Description: eth0
System Name: CD-DieselPump-Camera3

System Description: 
AXIS M2035-LE Bullet Camera 10.12.166

Time remaining: 94 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.37
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 16
Vlan ID: - not advertised
Peer Source MAC: b8a4.4fc5.7702

------------------------------------------------
Local Intf: Gi1/5
Chassis id: b8a4.4fb8.7da2
Port id: b8a4.4fb8.7da2
Port Description: eth0
System Name: CD-DieselPump-Camera2

System Description: 
AXIS M2035-LE Bullet Camera 10.12.166

Time remaining: 98 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.36
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 16
Vlan ID: - not advertised
Peer Source MAC: b8a4.4fb8.7da2

------------------------------------------------
Local Intf: Gi1/3
Chassis id: b8a4.4fc8.1544
Port id: b8a4.4fc8.1544
Port Description: eth0
System Name: CD-DieselPump-Camera1

System Description: 
AXIS M2035-LE Bullet Camera 10.12.166

Time remaining: 98 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.35
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 16
Vlan ID: - not advertised
Peer Source MAC: b8a4.4fc8.1544


Total entries displayed: 4

IND_SW_CD_DieselDispenser#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active    
560  Management                       active    
561  cesms                            active    
562  cameras                          active    Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10
590  Powermeters                      active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND_SW_CD_DieselDispenser#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.114 YES NVRAM  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
AppGigabitEthernet1/1  unassigned      YES unset  up                    up      
IND_SW_CD_DieselDispenser#
```

**`show version`**

```Cisco
show version
Cisco IOS XE Software, Version 17.09.05c
Cisco IOS Software [Cupertino], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.9.5c, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Fri 12-Jul-24 17:41 by mcpre


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
BOOTLDR: Version 7.1.14 [RELEASE SOFTWARE] crashkernel=64M
IND_SW_CD_DieselDispenser uptime is 5 weeks, 3 days, 2 hours, 38 minutes
Uptime for this control processor is 5 weeks, 3 days, 2 hours, 39 minutes
System returned to ROM by power-on
System image file is "flash:ie3x00-universalk9.17.09.05c.SPA.bin"
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


Smart Licensing Status: Smart Licensing Using Policy

cisco IE-3300-8P2S (ARM) processor (revision V07) with 635838K/6147K bytes of memory.
Processor board ID FCW2832Y3YL
2 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
3963756K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.

Base Ethernet MAC Address          : 48:74:10:bc:06:80
Motherboard Assembly Number        : 73-101289-12
Motherboard Serial Number          : FOC28311MZM
Model Revision Number              : V07
Motherboard Revision Number        : C
Model Number                       : IE-3300-8P2S
System Serial Number               : FCW2832Y3YL
Top Assembly Part Number           : 68-101577-07
Top Assembly Revision Number       : A2
System FPGA version                : 0.89.2
CIP Serial Number                  : 0xEFBC0680
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND_SW_CD_DieselDispenser#
```

---
