# IND-SW-CD-PP_FurnaceMCC

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD-PP_FurnaceMCC]] in Network_22.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD-PP_FurnaceMCC |
| **IP Address** | 192.168.160.81 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco 1783-BMS20CA |
| **Total physical ports reported** | 18 |
| **Ports up** | 16 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.28s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/10** | Not reported | 580 Plate_Plant_Network | IND-SW-CD-PP_Compressor | TenGigabitEthernet1/1 | 192.168.160.80 | Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3) | 1000baseX(FD) | LLDP |
| **Gi1/2** | Not reported | — | C6696 | port-001 | 140.80.0.100 | HP HP EliteDesk 800 G6 Tower PC,SBKPF,CZC117CBXQ + engineering | 1000baseT(FD), 1000baseT(HD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Gi1/3** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 561 vlan561 | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 561 vlan561 | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 580 Plate_Plant_Network | — | — | — | — | — | — |
| **Gi2/1** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi2/2** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi2/3** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi2/4** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Gi2/5** | Not reported | 578 A19_network | — | — | — | — | — | — |
| **Gi2/6** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi2/7** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Gi2/8** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/10** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | IND-SW-CD-PP_Compressor | TenGigabitEthernet1/1 | 192.168.160.80 | cisco IE-3300-8T2X | — | CDP |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/9** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet2/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet2/8** | up | — | Switch | FastEthernet1/20 | — | cisco 1783-BMS20CA | — | CDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: Switch
Entry address(es): 
Platform: cisco 1783-BMS20CA,  Capabilities: Switch IGMP 
Interface: GigabitEthernet2/8,  Port ID (outgoing port): FastEthernet1/20
Holdtime : 137 sec

Version :
Cisco IOS Software, S5700 Software (S5700-UNIVERSALK9-M), Version 15.2(7)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 07-Sep-20 02:11 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full

-------------------------
Device ID: IND-SW-CD-PP-Comp
Entry address(es): 
  IP address: 192.168.160.80
Platform: cisco IE-3300-8T2X,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): TenGigabitEthernet1/1
Holdtime : 138 sec

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
  IP address: 192.168.160.80


Total cdp entries displayed : 2
IND-SW-CD-PP-FurnaceMcc#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
C6696               Gi1/10         20         S               port-001
IND-SW-CD-PP-Comp   Gi1/2          120        B,R             port-001-00000
9c7b.ef41.f811      Gi1/10         3601                       9c7b.ef41.f811

Total entries displayed: 3

IND-SW-CD-PP-FurnaceMcc#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/10
Chassis id: c6696
Port id: port-001
Port Description - not advertised
System Name: C6696

System Description: 
HP HP EliteDesk 800 G6 Tower PC,SBKPF,CZC117CBXQ + engineering

Time remaining: 12 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 140.80.0.100
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    1000baseT(HD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
    Other/unknown
Media Attachment Unit type: 30
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 7864.a0ae.1b4b
Port id: port-001-00000
Port Description: TenGigabitEthernet1/1
System Name: IND-SW-CD-PP-Comp

System Description: 
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

Time remaining: 118 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.80
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/10
Chassis id: 9c7b.ef41.f811
Port id: 9c7b.ef41.f811
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3187 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities: 
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised


Total entries displayed: 3

IND-SW-CD-PP-FurnaceMcc#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi2/6, Gi2/8
250  IND-250                          active    
560  vlan560                          active    
561  vlan561                          active    Gi1/6, Gi1/8
571  CD-A19-HMI                       active    
578  A19_network                      active    Gi2/5
580  Plate_Plant_Network              active    Gi1/9, Gi1/10
590  CDPowermeters                    active    Gi1/3, Gi1/4, Gi1/5, Gi1/7, Gi2/1, Gi2/2, Gi2/3, Gi2/4
593  Ignition                         active    Gi2/7
900  Vlan0900                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD-PP-FurnaceMcc#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.81  YES NVRAM  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  up                    up      
GigabitEthernet1/7     unassigned      YES unset  up                    up      
GigabitEthernet1/8     unassigned      YES unset  up                    up      
GigabitEthernet1/9     unassigned      YES unset  up                    up      
GigabitEthernet1/10    unassigned      YES unset  up                    up      
GigabitEthernet2/1     unassigned      YES unset  up                    up      
GigabitEthernet2/2     unassigned      YES unset  up                    up      
GigabitEthernet2/3     unassigned      YES unset  up                    up      
GigabitEthernet2/4     unassigned      YES unset  up                    up      
GigabitEthernet2/5     unassigned      YES unset  up                    up      
GigabitEthernet2/6     unassigned      YES unset  down                  down    
GigabitEthernet2/7     unassigned      YES unset  down                  down    
GigabitEthernet2/8     unassigned      YES unset  up                    up      
IND-SW-CD-PP-FurnaceMcc#
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
IND-SW-CD-PP-FurnaceMcc uptime is 11 weeks, 1 day, 4 hours, 1 minute
Uptime for this control processor is 11 weeks, 1 day, 4 hours, 2 minutes
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

cisco IE-3300-8T2S (ARM) processor (revision V04) with 900129K/6147K bytes of memory.
Processor board ID FCW2449PDC4
2 Virtual Ethernet interfaces
18 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
1958872K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : 54:9f:c6:5f:de:20
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC24475A2Z
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3300-8T2S
System Serial Number               : FCW2449PDC4
Top Assembly Part Number           : 068-101630-04
Top Assembly Revision Number       : C0
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x245FDE20
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CD-PP-FurnaceMcc#
```
