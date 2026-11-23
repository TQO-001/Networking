# IND-SW-EDNL_SL5

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: Department 34 (`02-Dept_34`).

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_SL5 |
| **IP Address** | 192.168.160.56 |
| **Vendor profile** | cisco_ios |
| **Model** | IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 6 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.96s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 590 EDPowerMeters | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 590 EDPowerMeters | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 591 IND_SL5 | emg | port-001 | 10.0.0.27 | — | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Fa1/8** | Not reported | 591 IND_SL5 | IND-SW-EDNL_SL4 | GigabitEthernet1/2 | 192.168.160.55 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **Fa1/8** | Not reported | 591 IND_SL5 | cp-343-1-lean | Siemens, SIMATIC NET, Fast Ethernet Switch Port 1, 100 Mbit, full duplex, autonegotiation, link | 192.168.0.1 | Siemens, SIMATIC NET, CP 343-1 Lean, 6GK7 343-1CX10-0XE0, HW: Version 5, FW: Version V2.3.2, VPB5543770 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Fa1/8** | Not reported | 591 IND_SL5 | IND-SW-EDNL_PTTL | GigabitEthernet1/1 | 192.168.160.70 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **Fa1/8** | Not reported | 591 IND_SL5 | plcxb1d0ed | Siemens, SIMATIC S7, Ethernet Port, X1 P1 | 192.168.2.30 | Siemens, SIMATIC S7, CPU-1200, 6ES7 214-1AG40-0XB0, HW: 4, FW: V.4.1.3, S C-H1S37241 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Fa1/8** | Not reported | 591 IND_SL5 | 3c52.826a.985e | 3c52.826a.985e | — | — | 1000baseT(FD) | LLDP |
| **FastEthernet1/1** | down | — | — | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **FastEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **Gi1/1** | Not reported | — | cpu1214 | Siemens, SIMATIC S7, Ethernet Port, X1 P1 | 10.0.0.20 | Siemens, SIMATIC S7, CPU-1200, 6ES7 214-1AG40-0XB0, HW: 4, FW: V.4.1.3, S C-H1S36170 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Gi1/2** | Not reported | — | pn-io | Siemens, SIMATIC NET, Fast Ethernet Port 2, 100 Mbit, full duplex, autonegotiation, link | 10.0.0.50 | Siemens, SIMATIC NET, CP 343-1, 6GK7 343-1EX30-0XE0, HW: Version 6, FW: Version V2.5.0, VPC1521145 | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_SL4 | GigabitEthernet1/2 | 192.168.160.55 | cisco IE-3000-8TC | — | CDP |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL_PTTL | GigabitEthernet1/1 | 192.168.160.70 | cisco IE-3000-8TC | — | CDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_PTTL.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.70
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 144 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.70

-------------------------
Device ID: IND-SW-EDNL_SL4.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.55
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 178 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CD0100FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.55


Total cdp entries displayed : 2
IND-SW-EDNL_SL5#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
emg                 Fa1/8          20                         port-001
cpu1214             Fa1/8          20         B,S             port-001
IND-SW-EDNL_SL4.hulaGi1/1          120        B               port-002-00000
cp-343-1-lean       Fa1/8          20         S               port-001
pn-io               Fa1/8          20         S               port-002
IND-SW-EDNL_PTTL.hulGi1/2          120        B               port-001-00000
plcxb1d0ed          Fa1/8          20         B,S             port-001
3c52.826a.985e      Fa1/8          3601                       3c52.826a.985e
3c52.8265.f065      Fa1/8          3601                       3c52.8265.f065
e073.e716.47af      Fa1/8          3601                       e073.e716.47af

Total entries displayed: 10

IND-SW-EDNL_SL5#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Fa1/8
Chassis id: emg
Port id: port-001
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 18 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses:
    IP: 10.0.0.27
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/8
Chassis id: cpu1214
Port id: port-001
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P1
System Name - not advertised

System Description: 
Siemens, SIMATIC S7, CPU-1200, 6ES7 214-1AG40-0XB0, HW: 4, FW: V.4.1.3, S C-H1S36170

Time remaining: 19 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 10.0.0.20
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    100base-T4
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0027.90cd.0101
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SL4.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 98 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.55
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: cp-343-1-lean
Port id: port-001
Port Description: Siemens, SIMATIC NET, Fast Ethernet Switch Port 1, 100 Mbit, full duplex, autonegotiation, link
System Name - not advertised

System Description: 
Siemens, SIMATIC NET, CP 343-1 Lean, 6GK7 343-1CX10-0XE0, HW: Version 5, FW: Version V2.3.2, VPB5543770

Time remaining: 17 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.0.1
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

------------------------------------------------
Local Intf: Fa1/8
Chassis id: pn-io
Port id: port-002
Port Description: Siemens, SIMATIC NET, Fast Ethernet Port 2, 100 Mbit, full duplex, autonegotiation, link
System Name - not advertised

System Description: 
Siemens, SIMATIC NET, CP 343-1, 6GK7 343-1EX30-0XE0, HW: Version 6, FW: Version V2.5.0, VPC1521145

Time remaining: 16 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 10.0.0.50
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

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 0027.90cc.e982
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL_PTTL.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 117 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.70
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/8
Chassis id: plcxb1d0ed
Port id: port-001
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P1
System Name - not advertised

System Description: 
Siemens, SIMATIC S7, CPU-1200, 6ES7 214-1AG40-0XB0, HW: 4, FW: V.4.1.3, S C-H1S37241

Time remaining: 17 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.2.30
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    100base-T4
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/8
Chassis id: 3c52.826a.985e
Port id: 3c52.826a.985e
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2693 seconds
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
Local Intf: Fa1/8
Chassis id: 3c52.8265.f065
Port id: 3c52.8265.f065
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2657 seconds
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
Local Intf: Fa1/8
Chassis id: e073.e716.47af
Port id: e073.e716.47af
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2665 seconds
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


Total entries displayed: 10

IND-SW-EDNL_SL5#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
501  CCL                              active    
519  FS14                             active    
526  IND-S6                           active    
560  VLAN0560                         active    
561  VLAN0561                         active    Fa1/1, Fa1/4, Fa1/5, Fa1/6, Fa1/7
567  CTTL5_Mgaurd                     active    
574  IND-AnnealingFurnace             active    
579  PTTL                             active    
582  IND-SL6                          active    
585  VLAN0585                         active    
590  EDPowerMeters                    active    Fa1/2, Fa1/3
591  IND_SL5                          active    Fa1/8
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_SL5#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan501                unassigned      YES unset  up                    up      
Vlan519                unassigned      YES unset  up                    up      
Vlan560                192.168.160.56  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan579                unassigned      YES unset  up                    up      
Vlan585                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
Vlan591                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  down                  down    
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  down                  down    
FastEthernet1/5        unassigned      YES unset  up                    up      
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-EDNL_SL5#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-EDNL_SL5 uptime is 22 weeks, 1 day, 1 hour, 28 minutes
System returned to ROM by power-on
System restarted at 13:35:49 EET Wed Jun 17 2026
System image file is "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin"
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

cisco IE-3000-8TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2143V2DH
Last reset from power-on
9 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:27:90:CC:D6:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC214159G7
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2143V2DH
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x53CCD600
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(4)EA5            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_SL5#
```
