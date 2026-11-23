# IND-SW-SL7Mcc

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: Department 34 (`02-Dept_34`).

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-SL7Mcc |
| **IP Address** | 192.168.160.112 |
| **Vendor profile** | cisco_ios |
| **Model** | IE-3200-8T2S |
| **Total physical ports reported** | 10 |
| **Ports up** | 7 |
| **Location** | SL7 Electric Room |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.36s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/10** | Not reported | 561 IND-CESMS | C7401-SL7-IBA | 40a6.b7ce.4a92 | — | — | 1000baseT(FD) | LLDP |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | — | CM1542-1 | Siemens, SIMATIC S7, Ethernet Port, X1 P2R | 192.168.210.100 | Siemens, SIMATIC S7, CM1542-1 | 100base-TX(FD), 100base-TX(HD) | LLDP |
| **Gi1/4** | Not reported | 593 Ignition | IND-SW-EDNL-SL7Oper | GigabitEthernet1/3 | 192.168.160.119 | Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3) | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Gi1/5** | Not reported | 591 SL7 | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 591 SL7 | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 591 SL7 | IND-SW-EDNL_SL7 | FastEthernet1/4 | 192.168.160.73 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1) | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Gi1/8** | Not reported | — | S7-1500                   6ES7 516-3AP03-0AB0  S C-S4A14B142024     5 V  3  0  3 | Siemens, SIMATIC S7, Ethernet Port, X2 P1 | 192.168.1.5 | Siemens, SIMATIC S7, CPU 1516-3 PN/DP, 6ES7 516-3AP03-0AB0, HW: Version 5, FW: Version V3.0.3, S C-S4A14B142024 | 100base-TX(FD), 100base-TX(HD) | LLDP |
| **Gi1/9** | Not reported | 591 SL7 | C7401-SL7-IBA | 28c5.c87e.0816 | — | — | 1000baseT(FD) | LLDP |
| **GigabitEthernet1/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/10** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | IND-SW-EDNL_SL7 | FastEthernet1/4 | 192.168.160.73 | cisco IE-3000-4TC | — | CDP/LLDP |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/8** | up | — | IND-SW-EDNL-SL7Oper | GigabitEthernet1/3 | 192.168.160.119 | cisco IE-3300-8P2S | — | CDP |
| **GigabitEthernet1/9** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL-SL7Oper.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.119
Platform: cisco IE-3300-8P2S,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/8,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 149 sec

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
  IP address: 192.168.160.119

-------------------------
Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.73
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/3,  Port ID (outgoing port): FastEthernet1/4
Holdtime : 129 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857380FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.73


Total cdp entries displayed : 2
IND-SW-SL7Mcc#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
C7401-SL7-IBA       Gi1/6          3601                       40a6.b7ce.4a92
C7401-SL7-IBA       Gi1/10         3601                       28c5.c87e.0816
CM1542-1            Gi1/9          20         S               port-002.sl7xaplc.profinetxadrives0b79
IND-SW-EDNL_SL7.hulaGi1/3          120        B               Fa1/4
S7-1500             Gi1/7          20         B,S             port-001.sl7xaplc.profinetxainterfacexb2469f
IND-SW-EDNL-SL7Oper.Gi1/8          20         B,R             port-003-00000
d0ad.08da.afc1      Gi1/4          3601                       d0ad.08da.afc1

Total entries displayed: 7

IND-SW-SL7Mcc#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/6
Chassis id: C7401-SL7-IBA
Port id: 40a6.b7ce.4a92
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3227 seconds
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

------------------------------------------------
Local Intf: Gi1/10
Chassis id: C7401-SL7-IBA
Port id: 28c5.c87e.0816
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3227 seconds
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

------------------------------------------------
Local Intf: Gi1/9
Chassis id: S7-1500 CM                6GK7 542-1AX10-0XE0  VPS9330589           1 V  4  0 21
Port id: port-002.sl7xaplc.profinetxadrives0b79
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P2R
System Name: CM1542-1

System Description: 
Siemens, SIMATIC S7, CM1542-1

Time remaining: 15 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.210.100
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/3
Chassis id: 0056.2b85.7380
Port id: Fa1/4
Port Description: FastEthernet1/4
System Name: IND-SW-EDNL_SL7.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 112 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.73
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/7
Chassis id: S7-1500                   6ES7 516-3AP03-0AB0  S C-S4A14B142024     5 V  3  0  3
Port id: port-001.sl7xaplc.profinetxainterfacexb2469f
Port Description: Siemens, SIMATIC S7, Ethernet Port, X2 P1
System Name - not advertised

System Description: 
Siemens, SIMATIC S7, CPU 1516-3 PN/DP, 6ES7 516-3AP03-0AB0, HW: Version 5, FW: Version V3.0.3, S C-S4A14B142024

Time remaining: 15 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.1.5
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/8
Chassis id: c860.8fbd.caeb
Port id: port-003-00000
Port Description: GigabitEthernet1/3
System Name: IND-SW-EDNL-SL7Oper.hulamin.co.za

System Description: 
Cisco IOS Software [Dublin], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.12.4, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Tue 23-Jul-24 09:58 by mcpre

Time remaining: 19 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.119
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/4
Chassis id: d0ad.08da.afc1
Port id: d0ad.08da.afc1
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3599 seconds
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


Total entries displayed: 7

IND-SW-SL7Mcc#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1, Gi1/2
250  IND-250                          active    
560  management                       active    
561  IND-CESMS                        active    Gi1/10
591  SL7                              active    Gi1/5, Gi1/6, Gi1/7, Gi1/9
593  Ignition                         active    Gi1/4
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-SL7Mcc#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.112 YES NVRAM  up                    up      
Vlan593                192.168.193.201 YES manual up                    up      
GigabitEthernet1/1     unassigned      YES unset  down                  down    
GigabitEthernet1/2     unassigned      YES unset  down                  down    
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  down                  down    
GigabitEthernet1/6     unassigned      YES unset  up                    up      
GigabitEthernet1/7     unassigned      YES unset  up                    up      
GigabitEthernet1/8     unassigned      YES unset  up                    up      
GigabitEthernet1/9     unassigned      YES unset  up                    up      
GigabitEthernet1/10    unassigned      YES unset  up                    up      
IND-SW-SL7Mcc#
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
IND-SW-SL7Mcc uptime is 26 weeks, 2 days, 1 hour, 15 minutes
Uptime for this control processor is 26 weeks, 2 days, 1 hour, 16 minutes
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
Processor board ID FCW2450P28E
3 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
1958872K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : 54:9f:c6:5f:f3:40
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC24482LRT
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3200-8T2S
System Serial Number               : FCW2450P28E
Top Assembly Part Number           : 068-101629-04
Top Assembly Revision Number       : C0
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x245FF340
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-SL7Mcc#
```
