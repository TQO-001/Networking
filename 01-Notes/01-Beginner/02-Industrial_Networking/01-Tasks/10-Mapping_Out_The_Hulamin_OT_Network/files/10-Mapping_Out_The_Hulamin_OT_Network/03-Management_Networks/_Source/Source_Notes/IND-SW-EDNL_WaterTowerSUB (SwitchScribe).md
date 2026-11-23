# IND-SW-EDNL_WaterTowerSUB

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_WaterTowerSUB]] in Network_02.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_WaterTowerSUB |
| **IP Address** | 192.168.160.49 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 8 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 7.04s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 590 VLAN0590 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 562 IND-CCTV | IND-SW-EDNL_CCLCNGGAS | GigabitEthernet1/2 | 192.168.160.48 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3) | MAU type - not advertised | LLDP |
| **Fa1/6** | Not reported | 562 IND-CCTV | axis-b8a44f59a3e9 | eth0 | 192.168.162.25 | AXIS M2025-LE Network Camera 9.80.47 | MAU type - not advertised | LLDP |
| **Fa1/7** | Not reported | 562 IND-CCTV | axis-b8a44f78a4e4 | eth0 | 192.168.162.26 | AXIS M3115-LVE Network Camera 10.11.85 | MAU type - not advertised | LLDP |
| **Fa1/8** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | up | — | axis-b8a44f59a3e9 | eth0 | 192.168.162.25 | Linux | — | CDP |
| **FastEthernet1/6** | up | — | axis-b8a44f78a4e4 | eth0 | 192.168.162.26 | Linux | — | CDP |
| **FastEthernet1/7** | up | — | axis-b8a44f7df417 | eth0 | 192.168.162.27 | Linux | MAU type - not advertised | CDP/LLDP |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_CCLCNGGAS | GigabitEthernet1/2 | 192.168.160.48 | cisco IE-3000-8TC | — | CDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_CCLCNGGAS.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.48
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 126 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sun 15-Mar-20 07:11 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.48

-------------------------
Device ID: axis-b8a44f59a3e9
Entry address(es): 
  IP address: 192.168.162.25
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/5,  Port ID (outgoing port): eth0
Holdtime : 111 sec

Version :
AXIS M2025-LE Network Camera 9.80.47

advertisement version: 2

-------------------------
Device ID: axis-b8a44f7df417
Entry address(es): 
  IP address: 192.168.162.27
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/7,  Port ID (outgoing port): eth0
Holdtime : 91 sec

Version :
AXIS M3115-LVE Network Camera 10.11.85

advertisement version: 2

-------------------------
Device ID: axis-b8a44f78a4e4
Entry address(es): 
  IP address: 192.168.162.26
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/6,  Port ID (outgoing port): eth0
Holdtime : 109 sec

Version :
AXIS M3115-LVE Network Camera 10.11.85

advertisement version: 2


Total cdp entries displayed : 4
IND-SW-EDNL_WaterTowerSUB#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_CCLCNGGAGi1/1          120        B               port-002-00000
axis-b8a44f59a3e9   Fa1/5          120        S               b8a4.4f59.a3e9
axis-b8a44f78a4e4   Fa1/6          120        S               b8a4.4f78.a4e4
axis-b8a44f7df417   Fa1/7          120        S               b8a4.4f7d.f417

Total entries displayed: 4

IND-SW-EDNL_WaterTowerSUB#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 08cc.a7c0.79c0
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_CCLCNGGAS.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sun 15-Mar-20 07:11 by prod_rel_team

Time remaining: 91 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.48
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/5
Chassis id: b8a4.4f59.a3e9
Port id: b8a4.4f59.a3e9
Port Description: eth0
System Name: axis-b8a44f59a3e9

System Description: 
AXIS M2025-LE Network Camera 9.80.47

Time remaining: 110 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.25
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/6
Chassis id: b8a4.4f78.a4e4
Port id: b8a4.4f78.a4e4
Port Description: eth0
System Name: axis-b8a44f78a4e4

System Description: 
AXIS M3115-LVE Network Camera 10.11.85

Time remaining: 108 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.26
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/7
Chassis id: b8a4.4f7d.f417
Port id: b8a4.4f7d.f417
Port Description: eth0
System Name: axis-b8a44f7df417

System Description: 
AXIS M3115-LVE Network Camera 10.11.85

Time remaining: 90 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.27
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised


Total entries displayed: 4

IND-SW-EDNL_WaterTowerSUB#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active    
526  IND-S6                           active    
560  VLAN0560                         active    
561  VLAN0561                         active    Fa1/1, Fa1/2, Fa1/4, Fa1/8
562  IND-CCTV                         active    Fa1/5, Fa1/6, Fa1/7
582  IND-SL6                          active    
590  VLAN0590                         active    Fa1/3
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_WaterTowerSUB#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.49  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
Vlan591                unassigned      YES unset  down                  down    
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  up                    up      
FastEthernet1/6        unassigned      YES unset  up                    up      
FastEthernet1/7        unassigned      YES unset  up                    up      
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
IND-SW-EDNL_WaterTowerSUB#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sun 15-Mar-20 07:11 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-EDNL_WaterTowerSUB uptime is 3 weeks, 4 days, 19 hours, 9 minutes
System returned to ROM by power-on
System restarted at 19:56:37 EET Sat Oct 24 2026
System image file is "flash:ies-lanbasek9-mz.152-7.E2/ies-lanbasek9-mz.152-7.E2.bin"
Last reload reason: Reload command



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

cisco IE-3000-8TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2102V01T
Last reset from power-on
5 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 2C:31:24:41:54:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20525EC0
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2102V01T
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x58415400
SKU Brand Name                  : Cisco
cesium fpga version             : 2017.9.14
Device Manager Package          : English


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(7)E2             IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_WaterTowerSUB#
```
