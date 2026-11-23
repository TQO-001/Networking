# IND-SW-ENDL_SUBNMcc

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-ENDL_SUBNMcc]] in Network_10.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-ENDL_SUBNMcc |
| **IP Address** | 192.168.160.102 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 10 |
| **Ports up** | 9 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.95s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 590 ED_PowerMeter | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 590 ED_PowerMeter | — | — | — | — | — | — |
| **Fa1/3** | Not reported | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/3 | 192.168.1.1 | Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5) | 1000baseT(FD) | LLDP |
| **Fa1/4** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 590 ED_PowerMeter | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 565 IND-FoilAnnealing | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/8** | up | — | IND-SW-EDNL_FoilAnnealingSubN | FastEthernet0/14 | 192.168.165.250 | cisco WS-C2950SX-24 | — | CDP |
| **Gi1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/3 | 192.168.1.1 | cisco C9500-48Y4C | — | CDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): TwentyFiveGigE1/0/3
Holdtime : 147 sec

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
  IP address: 192.168.1.1

-------------------------
Device ID: IND-SW-EDNL_FoilAnnealingSubN
Entry address(es): 
  IP address: 192.168.165.250
Platform: cisco WS-C2950SX-24,  Capabilities: Switch IGMP 
Interface: FastEthernet1/8,  Port ID (outgoing port): FastEthernet0/14
Holdtime : 134 sec

Version :
Cisco Internetwork Operating System Software 
IOS (tm) C2950 Software (C2950-I6Q4L2-M), Version 12.1(22)EA9, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2006 by cisco Systems, Inc.
Compiled Fri 01-Dec-06 18:02 by weiliu

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000001CB1A5FC00FF0000
VTP Management Domain: ''
Native VLAN: 565
Duplex: full
Management address(es): 
  IP address: 192.168.165.250


Total cdp entries displayed : 2
IND-SW-EDNL-SubNMCC#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
ind-Core1-MSR.plant.Gi1/2          120        B,R             Twe1/0/3
IND-FA-ENG1         Fa1/3          20         S               port-001

Total entries displayed: 2

IND-SW-EDNL-SubNMCC#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/2
Chassis id: e80a.b9f1.93a0
Port id: Twe1/0/3
Port Description: TwentyFiveGigE1/0/3
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description: 
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 95 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.1.1
Auto Negotiation - not supported
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Local Intf: Fa1/3
Chassis id: ind-fa-eng1
Port id: port-001
Port Description - not advertised
System Name: IND-FA-ENG1

System Description: 
VMware, Inc. None,VMware-56 4d cf f5 99 af f0 c9-2b ed 08 13 aa 4c 60 c3,VMware20,1

Time remaining: 19 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.165.21
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


Total entries displayed: 2

IND-SW-EDNL-SubNMCC#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1
250  IND-250                          active    
519  FS14                             active    
526  IND-S6                           active    
541  IND-Extrusions                   active    
560  IND-Management                   active    
561  IND-CESMS                        active    Fa1/5, Fa1/6
562  IND-CESMS_CCTV                   active    
563  IND-CCL_CESS                     active    
564  IND-CDHotMIl_L1                  active    
565  IND-FoilAnnealing                active    Fa1/8
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
588  RG9                              active    
589  CD_PowerMeter                    active    
590  ED_PowerMeter                    active    Fa1/1, Fa1/2, Fa1/7
591  IND-SL5                          active    
593  Ignition                         active    Fa1/4
595  IND-Labs                         active    
900  VLAN0900                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL-SubNMCC#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.102 YES NVRAM  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  up                    up      
FastEthernet1/6        unassigned      YES unset  up                    up      
FastEthernet1/7        unassigned      YES unset  up                    up      
FastEthernet1/8        unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  down                  down    
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-EDNL-SubNMCC#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(5)E, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 19-Jul-16 02:21 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-EDNL-SubNMCC uptime is 2 weeks, 4 days, 6 hours, 7 minutes
System returned to ROM by power-on
System image file is "flash:/ies-lanbasek9-mz.152-5.E/ies-lanbasek9-mz.152-5.E.bin"
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
Processor board ID FOC2209V0UQ
Last reset from power-on
2 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 68:2C:7B:FC:6D:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC22065BBW
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2209V0UQ
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x4AFC6D80
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(5)E              IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL-SubNMCC#
```
