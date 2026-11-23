# IND-SW-EDNL_PTTL_PLC2

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: Department 34 (`02-Dept_34`).

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_PTTL_PLC2 |
| **IP Address** | 192.168.160.124 |
| **Vendor profile** | cisco_ios |
| **Model** | IE-3000-4TC |
| **Total physical ports reported** | 6 |
| **Ports up** | 2 |
| **Location** | Not documented |
| **Transport** | TELNET |
| **Connection port** | 23 |
| **Collection status** | success |
| **Connection method** | Netmiko Telnet |
| **Collection time** | 6.16s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 579 -PTTL | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 579 -PTTL | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 579 -PTTL | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 579 -PTTL | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | down | — | — | — | — | — | — | — |
| **FastEthernet1/3** | down | — | — | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_PTTL_PLC | GigabitEthernet1/2 | 192.168.160.90 | cisco IE-3000-8TC | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_PTTL_PLC.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.90
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 168 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07A00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es): 
  IP address: 192.168.160.90

IND-SW-EDNL_PTTL_PLC2#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_PTTL_PLCGi1/1          120        B               Gi1/2
503e.aa16.6734      Fa1/1          3601                       503e.aa16.6734

Total entries displayed: 2

IND-SW-EDNL_PTTL_PLC2#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: 08cc.a7c0.7a00
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_PTTL_PLC.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

Time remaining: 98 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.90
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
Chassis id: 503e.aa16.6734
Port id: 503e.aa16.6734
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3228 seconds
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


Total entries displayed: 2

IND-SW-EDNL_PTTL_PLC2#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
501  VLAN0501                         active    
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
579  -PTTL                            active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
580  IND-Plate_Plant                  active    
581  IND-PTTL_DC_Drives               active    
582  IND-PTTL_AC_Drives               active    
592  CCL_Ruler                        active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_PTTL_PLC2#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.124 YES NVRAM  up                    up      
Vlan579                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  down                  down    
FastEthernet1/3        unassigned      YES unset  down                  down    
FastEthernet1/4        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
IND-SW-EDNL_PTTL_PLC2#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-EDNL_PTTL_PLC2 uptime is 22 weeks, 23 hours, 22 minutes
System returned to ROM by power-on
System image file is "flash:/ies-lanbasek9-mz.150-2.EY3/ies-lanbasek9-mz.150-2.EY3.bin"


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

cisco IE-3000-4TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2021Z2QL
Last reset from power-on
3 Virtual Ethernet interfaces
4 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:56:2B:85:74:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20207MTN
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-4TC
System serial number            : FOC2021Z2QL
Top Assembly Part Number        : 800-28494-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFD00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x6D857400
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 6     IE-3000-4TC        15.0(2)EY3            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_PTTL_PLC2#
```
