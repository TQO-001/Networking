# IND-SW-EDNL_SL6MCCRoom

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_SL6MCCRoom]] in Network_01.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_SL6MCCRoom |
| **IP Address** | 192.168.160.64 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 6 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.95s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 582 IND-SL6 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 582 IND-SL6 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 582 IND-SL6 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 582 IND-SL6 | IND-SW-EDNL_SubStationH | GigabitEthernet1/2 | 192.168.160.63 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **Fa1/5** | Not reported | 582 IND-SL6 | 40a6.b7ae.9be7 | 40a6.b7ae.9be7 | — | — | 1000baseT(FD) | LLDP |
| **Fa1/6** | Not reported | 582 IND-SL6 | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 582 IND-SL6 | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 582 IND-SL6 | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | down | — | — | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | — | IND-SW-EDNL_SubStationK | GigabitEthernet1/2 | 192.168.160.62 | Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1) | 1000baseX(FD) | LLDP |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_SubStationK | GigabitEthernet1/2 | 192.168.160.62 | cisco IE-3000-8TC | — | CDP |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL_SubStationH | GigabitEthernet1/2 | 192.168.160.63 | cisco IE-3000-8TC | — | CDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_SubStationK.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.62
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 170 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCFF00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.62

-------------------------
Device ID: IND-SW-EDNL_SubStationH.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.63
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 162 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE000FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.63


Total cdp entries displayed : 2
IND-SW-EDNL_SL6MCCRoom#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_SubStatiGi1/1          120        B               port-002-00000
IND-SW-EDNL_SubStatiGi1/2          120        B               port-002-00000
40a6.b7ae.9be7      Fa1/4          3601                       40a6.b7ae.9be7
d0ad.0855.7282      Fa1/5          3601                       d0ad.0855.7282

Total entries displayed: 4

IND-SW-EDNL_SL6MCCRoom#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0027.90cc.ff02
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SubStationK.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 117 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.62
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/2
Chassis id: 0027.90cc.e002
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SubStationH.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 99 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.63
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/4
Chassis id: 40a6.b7ae.9be7
Port id: 40a6.b7ae.9be7
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3452 seconds
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
Local Intf: Fa1/5
Chassis id: d0ad.0855.7282
Port id: d0ad.0855.7282
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3453 seconds
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


Total entries displayed: 4

IND-SW-EDNL_SL6MCCRoom#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  VLAN_250                         active    
282  VLAN0282                         active    
501  CCL                              active    
508  FM8_9_Plant_bus                  active    
509  FM8_9_Terminal_bus               active    
514  S4                               active    
515  FS15                             active    
519  Fs14                             active    
526  IND-S6                           active    
560  Switch_Management                active    
561  CESMS                            active    
562  CCTV                             active    
563  CESS                             active    
564  IND-CDhotMill                    active    
565  FoilFinishing_Seperators         active    
566  FoilFinishing_Annealing          active    
567  CTLL5_Mgaurd                     active    
568  IND-CNG_Network                  active    
569  IND-CCL2Gauge                    active    
570  IND-A19_Furnace_plc              active    
571  IND-A19_Furnace_HMM_Network      active    
572  IND-CCL1Gauge                    active    
573  IND-CCL1CNG-Alternative          active    
574  IND-Annealing_furnace            active    
575  CD_EMERGENCY_PowerHMI_PLC        active    
576  CD_EMERGENCY_PwrPLC_PLC_Network  active    
577  IND-CNGCDHotlineGAs_Access_PLC   active    
578  IND-A19Network                   active    
579  IND-PTTL                         active    
580  IND-PlatePlant                   active    
581  ED_Extrutions                    active    
582  IND-SL6                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7, Fa1/8
585  IND-A17                          active    
587  ED_Effluent_Plant                active    
588  IND-RG9                          active    
589  CD_Power_Meters                  active    
590  Power_Meters                     active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_SL6MCCRoom#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.64  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  down                  down    
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  up                    up      
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-EDNL_SL6MCCRoom#
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

IND-SW-EDNL_SL6MCCRoom uptime is 10 weeks, 1 day, 2 hours, 5 minutes
System returned to ROM by power-on
System restarted at 10:59:58 UTC Wed Sep 9 2026
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
Processor board ID FOC2144V1U5
Last reset from power-on
3 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:27:90:CC:F7:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC214159V3
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2144V1U5
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x53CCF700
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(4)EA5            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_SL6MCCRoom#
```
