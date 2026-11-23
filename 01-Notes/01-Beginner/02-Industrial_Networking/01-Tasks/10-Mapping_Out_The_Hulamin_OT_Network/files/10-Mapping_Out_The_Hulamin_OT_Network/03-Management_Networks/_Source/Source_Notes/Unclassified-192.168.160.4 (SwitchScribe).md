# Unclassified-192.168.160.4

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[Unclassified-192.168.160.4]] in Network_01.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.4 |
| **IP Address** | 192.168.160.4 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 3 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.62s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **FastEthernet1/1** | down | — | — | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_SubStationE | GigabitEthernet1/2 | 192.168.160.60 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_SubStationE.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.60
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 126 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCFA80FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.60

IND-SW_ColdMillsRG#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
C6165               Fa1/3          3601                       6805.ca71.ddc6
IND-SW-EDNL_SubStatiGi1/1          120        B               port-002-00000
0001.053c.f7fa      Fa1/3          3601                       0001.053c.f7fa
6805.ca69.8abc      Fa1/3          3601                       6805.ca69.8abc

Total entries displayed: 4

IND-SW_ColdMillsRG#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: C6165
Port id: 6805.ca71.ddc6
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2726 seconds
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
Chassis id: 0027.90cc.fa82
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SubStationE.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 112 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.60
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: 0001.053c.f7fa
Port id: 0001.053c.f7fa
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2715 seconds
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
Chassis id: 6805.ca69.8abc
Port id: 6805.ca69.8abc
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3176 seconds
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

IND-SW_ColdMillsRG#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
501  IND-CCL                          active    
560  IND-Management                   active    
561  IND-CESMS                        active    
562  IND-CESMS_CCTV                   active    
563  IND-CCL_CESS                     active    
564  IND-CDHotMIl_L1                  active    
565  IND-FoilAnnealing                active    
566  IND-FoilSeparators               active    
567  IND-CTTL5                        active    
568  IND-CNG                          active    
569  IND-CCL2Gauge                    active    
570  CD_A19_Furnace_PLC_system        active    
571  CD_A19_Furnace_HMI_System        active    
572  IND-CCL1Gauge                    active    
573  IND-CNGCCLGAs_Access_PLC         active    
574  IND-AnnealingFurnace             active    
575  CD_EMERGENCY_PowerHMI_PLC        active    
576  CD_EMERGENCY_Power_PLC           active    
577  IND-CNGCDHotlineGAs_Access_PLC   active    
578  CD_A19_Furnace_Server_Access     active    
579  IND-PTTL                         active    
580  IND-Plate_Plant                  active    
581  IND-PTTL_DC_Drives               active    
582  IND-PTTL_AC_Drives               active    
584  LAB_in_the_Office                active    
585  A17_Anealing_Furnace             active    
586  System_Platform_2020             active    
587  Effluent_Plant                   active    
588  RG9                              active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7, Fa1/8
589  CD_PowerMeter                    active    
590  ED_PowerMeter                    active    
591  IND-SL5                          active    
593  Ignition                         active    
595  IND-Labs                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW_ColdMillsRG#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.4   YES NVRAM  up                    up      
Vlan561                unassigned      YES NVRAM  up                    up      
Vlan588                unassigned      YES NVRAM  up                    up      
FastEthernet1/1        unassigned      YES unset  down                  down    
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  down                  down    
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
IND-SW_ColdMillsRG#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(44r)EX5, RELEASE SOFTWARE (fc1)

IND-SW_ColdMillsRG uptime is 2 days, 21 hours, 48 minutes
System returned to ROM by power-on
System image file is "flash:/ies-lanbasek9-mz.122-58.SE2/ies-lanbasek9-mz.122-58.SE2.bin"


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
Processor board ID FOC2003Z0ZN
Last reset from power-on
4 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:AF:1F:D0:A8:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20026V0E
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2003Z0ZN
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x68D0A880
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 10    IE-3000-8TC        12.2(58)SE2           IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW_ColdMillsRG#
```
