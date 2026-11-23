# IND-SW-EDNL_S4SMCCRoomBottom

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_S4SMCCRoomBottom]] in Network_05.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_S4SMCCRoomBottom |
| **IP Address** | 192.168.160.29 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 29 |
| **Ports up** | 12 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.18s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **FastEthernet0** | down | — | — | — | — | — | — | — |
| **Gi1/0/10** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/11** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/12** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/13** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Gi1/0/15** | Not reported | 588 RG9 | — | — | — | — | — | — |
| **Gi1/0/16** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Gi1/0/17** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/18** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/19** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/20** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/21** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/22** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/23** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/26** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/28** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/4** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/5** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/6** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/7** | Not reported | 514 s4network | — | — | — | — | — | — |
| **Gi1/0/8** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/9** | Not reported | 514 s4network | — | — | — | — | — | — |
| **GigabitEthernet1/0/1** | up | — | IND-SW-EDNL_S4GaugeCab | GigabitEthernet1/1 | 192.168.160.32 | cisco IE-3000-8TC | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **GigabitEthernet1/0/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/11** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/12** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/13** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/14** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/15** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/16** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/17** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/18** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/19** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/20** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/21** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/22** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/23** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/24** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/25** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE2/0/3 | 192.168.1.1 | cisco C9500-48Y4C | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/0/26** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/27** | up | — | IND-SW-EDNL_S4PulPit | GigabitEthernet0/1 | 192.168.160.33 | cisco WS-C2960-8TC-L | — | CDP |
| **GigabitEthernet1/0/28** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/3** | up | — | IND-SW-CD_MainServerRoom | GigabitEthernet1/1 | 192.168.160.74 | cisco IE-5000-16S12P | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **GigabitEthernet1/0/4** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/9** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW_S4GaugeCab.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.32
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/0/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 126 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA9, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Wed 26-Jun-19 06:20 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.32

-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/0/25,  Port ID (outgoing port): TwentyFiveGigE2/0/3
Holdtime : 140 sec

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
Device ID: IND-SW_S4Pulpit.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.33
Platform: cisco WS-C2960-8TC-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/0/27,  Port ID (outgoing port): GigabitEthernet0/1
Holdtime : 175 sec

Version :
Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(35)SE5, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2007 by Cisco Systems, Inc.
Compiled Thu 19-Jul-07 20:06 by nachen

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002256DCEA80FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.33

-------------------------
Device ID: IND-SW-CD_MainServerRoom.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.74
Platform: cisco IE-5000-16S12P,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/0/3,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 154 sec

Version :
Cisco IOS Software, IE5000  Software (IE5000-UNIVERSALK9-M), Version 15.2(6)E1, RELEASE SOFTWARE (fc4)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2018 by Cisco Systems, Inc.
Compiled Tue 06-Mar-18 07:29 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000D4789B460780FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.74


Total cdp entries displayed : 4
IND-SW-EDNL_S4SMCCRoomBottom#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
ind-Core1-MSR.plant.Gi1/0/25       120        B,R             Twe2/0/3
IND-SW-CD_MainServerGi1/0/3        120        B               port-001
FASCADA             Gi1/0/20       20         S               port-001
IND-SW_S4GaugeCab.huGi1/0/1        120        B               port-001-00000

Total entries displayed: 4

IND-SW-EDNL_S4SMCCRoomBottom#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: e80a.b9f1.93a0
Port id: Twe2/0/3
Port Description: TwentyFiveGigE2/0/3
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description: 
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 113 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.1.1
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: d478.9b46.07c0
Port id: port-001
Port Description: GigabitEthernet1/1
System Name: IND-SW-CD_MainServerRoom.hulamin.co.za

System Description: 
Cisco IOS Software, IE5000  Software (IE5000-UNIVERSALK9-M), Version 15.2(6)E1, RELEASE SOFTWARE (fc4)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2018 by Cisco Systems, Inc.
Compiled Tue 06-Mar-18 07:29 by prod_rel_team

Time remaining: 94 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.74
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
Chassis id: fascada
Port id: port-001
Port Description - not advertised
System Name: FASCADA

System Description: 
VMware, Inc. VMware Virtual Platform,None,VMware-42 12 e7 fd 48 40 c7 dc-97 81 3c 5c 6e 84 ad e9 + HMI

Time remaining: 15 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.14.25
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
Chassis id: 2c0b.e9ff.bcc0
Port id: port-001-00000
Port Description: GigabitEthernet1/1
System Name: IND-SW_S4GaugeCab.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA9, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Wed 26-Jun-19 06:20 by prod_rel_team

Time remaining: 99 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.32
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


Total entries displayed: 4

IND-SW-EDNL_S4SMCCRoomBottom#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/2, Gi1/0/4, Gi1/0/6, Gi1/0/8, Gi1/0/21, Gi1/0/22, Gi1/0/23, Gi1/0/26, Gi1/0/28
250  IND-250                          active    
501  CCL                              active    
514  s4network                        active    Gi1/0/5, Gi1/0/7, Gi1/0/9, Gi1/0/10, Gi1/0/11, Gi1/0/12, Gi1/0/17, Gi1/0/18, Gi1/0/19, Gi1/0/20
526  IND-S6                           active    
560  VLAN0560                         active    
561  IND-CESMS                        active    Gi1/0/16
567  CTTL5_Mgaurd                     active    
574  IND-AnnealingFurnace             active    
579  PTTL_Network                     active    
582  IND-SL6                          active    
585  A17_network                      active    
588  RG9                              active    Gi1/0/13, Gi1/0/15
590  EDPowerMeters                    active    
593  Ignition                         active    
800  VLAN0800                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_S4SMCCRoomBottom#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan501                unassigned      YES unset  up                    up      
Vlan514                unassigned      YES unset  up                    up      
Vlan560                192.168.160.29  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan579                unassigned      YES unset  up                    up      
Vlan585                unassigned      YES unset  up                    up      
Vlan588                192.168.188.21  YES NVRAM  up                    up      
Vlan590                unassigned      YES unset  up                    up      
Vlan800                unassigned      YES unset  up                    up      
FastEthernet0          unassigned      YES NVRAM  administratively down down    
GigabitEthernet1/0/1   unassigned      YES unset  up                    up      
GigabitEthernet1/0/2   unassigned      YES unset  down                  down    
GigabitEthernet1/0/3   unassigned      YES unset  up                    up      
GigabitEthernet1/0/4   unassigned      YES unset  down                  down    
GigabitEthernet1/0/5   unassigned      YES unset  up                    up      
GigabitEthernet1/0/6   unassigned      YES unset  down                  down    
GigabitEthernet1/0/7   unassigned      YES unset  down                  down    
GigabitEthernet1/0/8   unassigned      YES unset  down                  down    
GigabitEthernet1/0/9   unassigned      YES unset  down                  down    
GigabitEthernet1/0/10  unassigned      YES unset  down                  down    
GigabitEthernet1/0/11  unassigned      YES unset  up                    up      
GigabitEthernet1/0/12  unassigned      YES unset  up                    up      
GigabitEthernet1/0/13  unassigned      YES unset  down                  down    
GigabitEthernet1/0/14  unassigned      YES unset  up                    up      
GigabitEthernet1/0/15  unassigned      YES unset  down                  down    
GigabitEthernet1/0/16  unassigned      YES unset  up                    up      
GigabitEthernet1/0/17  unassigned      YES unset  up                    up      
GigabitEthernet1/0/18  unassigned      YES unset  down                  down    
GigabitEthernet1/0/19  unassigned      YES unset  up                    up      
GigabitEthernet1/0/20  unassigned      YES unset  up                    up      
GigabitEthernet1/0/21  unassigned      YES unset  down                  down    
GigabitEthernet1/0/22  unassigned      YES unset  down                  down    
GigabitEthernet1/0/23  unassigned      YES unset  down                  down    
GigabitEthernet1/0/24  unassigned      YES unset  down                  down    
GigabitEthernet1/0/25  unassigned      YES unset  up                    up      
GigabitEthernet1/0/26  unassigned      YES unset  down                  down    
GigabitEthernet1/0/27  unassigned      YES unset  up                    up      
GigabitEthernet1/0/28  unassigned      YES unset  down                  down    
IND-SW-EDNL_S4SMCCRoomBottom#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Wed 26-Aug-15 07:12 by prod_rel_team

ROM: Bootstrap program is C2960X boot loader
BOOTLDR: C2960X Boot Loader (C2960X-HBOOT-M) Version 15.2(2r)E2, RELEASE SOFTWARE (fc1)

IND-SW-EDNL_S4SMCCRoomBottom uptime is 15 weeks, 3 days, 4 hours, 47 minutes
System returned to ROM by power-on
System restarted at 10:10:31 ZA Mon Aug 3 2026
System image file is "flash:/c2960x-universalk9-mz.152-2.E3/c2960x-universalk9-mz.152-2.E3.bin"
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

cisco WS-C2960X-24TS-L (APM86XXX) processor (revision K0) with 524288K bytes of memory.
Processor board ID FCW2022B5WR
Last reset from power-on
10 Virtual Ethernet interfaces
1 FastEthernet interface
28 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

512K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:56:2B:28:60:80
Motherboard assembly number     : 73-15973-02
Power supply part number        : 341-0529-02
Motherboard serial number       : FOC20226H5B
Power supply serial number      : DCB201950BB
Model revision number           : K0
Motherboard revision number     : C0
Model number                    : WS-C2960X-24TS-L
Daughterboard assembly number   : 73-14200-03
Daughterboard serial number     : FOC202318J2
System serial number            : FCW2022B5WR
Top Assembly Part Number        : 800-41470-01
Top Assembly Revision Number    : F0
Version ID                      : V03
CLEI Code Number                : CMMMU00ARB
Daughterboard revision number   : A0
Hardware Board Revision Number  : 0x12


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 28    WS-C2960X-24TS-L          15.2(2)E3             C2960X-UNIVERSALK9-M     


Configuration register is 0xF

IND-SW-EDNL_S4SMCCRoomBottom#
```
