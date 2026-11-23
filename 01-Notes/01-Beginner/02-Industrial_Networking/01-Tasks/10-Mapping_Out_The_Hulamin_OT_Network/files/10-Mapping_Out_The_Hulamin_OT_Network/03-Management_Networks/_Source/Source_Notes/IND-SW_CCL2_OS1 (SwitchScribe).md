# IND-SW_CCL2_OS1

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW_CCL2_OS1]] in Network_02.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW_CCL2_OS1 |
| **IP Address** | 192.168.160.21 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco WS-C2960X-48TS-L |
| **Total physical ports reported** | 29 |
| **Ports up** | 12 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.36s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **FastEthernet0** | down | — | — | — | — | — | — | — |
| **Gi1/0/1** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/10** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Gi1/0/11** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/12** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/13** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/14** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/15** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Gi1/0/16** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Gi1/0/17** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Gi1/0/18** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Gi1/0/19** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/2** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/20** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/21** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/22** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/23** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/24** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/28** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/0/3** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/4** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/5** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/6** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/7** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/0/8** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Gi1/0/9** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **GigabitEthernet1/0/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/10** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/11** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/12** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/13** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/14** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/15** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/16** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/17** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/18** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/19** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/20** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/21** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/22** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/23** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/24** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/25** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE2/0/12 | 192.168.1.1 | cisco C9500-48Y4C | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/0/26** | up | — | IND-SW_CCL2Coater_Bottom | GigabitEthernet1/1 | 192.168.160.18 | cisco IE-3300-8T2S | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/0/27** | up | — | IND-SW_CCL2_CompRoom | GigabitEthernet1/0/51 | 192.168.160.22 | cisco WS-C2960X-48TS-L | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/0/28** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/3** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/0/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/0/9** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CCL2_CompRoom.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.22
Platform: cisco WS-C2960X-48TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/0/27,  Port ID (outgoing port): GigabitEthernet1/0/51
Holdtime : 120 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.0(2a)EX5, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Mon 16-Feb-15 08:16 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000188B45FFC980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es): 
  IP address: 192.168.160.22

-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/0/25,  Port ID (outgoing port): TwentyFiveGigE2/0/12
Holdtime : 134 sec

Version :
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es): 
  IP address: 192.168.1.1

-------------------------
Device ID: IND-SW-CCL2_entry.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.18
Platform: cisco IE-3300-8T2S,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/0/26,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 149 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Tue 30-Jul-19 11:50 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es): 
  IP address: 192.168.160.18

IND-SW-CCL2_OS1#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
ind-Core1-MSR       Gi1/0/25       102        B,R             Twe2/0/12
IND-SW-CCL2_CompRoomGi1/0/27       117        B               Gi1/0/51
IND-SW-CCL2_entry   Gi1/0/26       116        B,R             Gi1/1
84a9.3e70.b13e      Gi1/0/5        3131                       84a9.3e70.b13e

Total entries displayed: 4

IND-SW-CCL2_OS1#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: e80a.b9f1.93a0
Port id: Twe2/0/12
Port Description: TwentyFiveGigE2/0/12
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description: 
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 102 seconds
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
Chassis id: 188b.45ff.c980
Port id: Gi1/0/51
Port Description: GigabitEthernet1/0/51
System Name: IND-SW-CCL2_CompRoom.hulamin.co.za

System Description: 
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.0(2a)EX5, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Mon 16-Feb-15 08:16 by prod_rel_team

Time remaining: 117 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.22
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: cc7f.7599.afe0
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-CCL2_entry.hulamin.co.za

System Description: 
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Tue 30-Jul-19 11:50 by mcpre

Time remaining: 115 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.160.18
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: 84a9.3e70.b13e
Port id: 84a9.3e70.b13e
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3131 seconds
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

IND-SW-CCL2_OS1#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/28
250  IND-250                          active    
501  VLAN0501                         active    Gi1/0/1, Gi1/0/2, Gi1/0/3, Gi1/0/4, Gi1/0/5, Gi1/0/6, Gi1/0/7, Gi1/0/9, Gi1/0/11, Gi1/0/12, Gi1/0/13, Gi1/0/14, Gi1/0/19, Gi1/0/20, Gi1/0/21, Gi1/0/22, Gi1/0/23, Gi1/0/24
526  IND-S6                           active    
560  VLAN0560                         active    
561  IND-CESMS                        active    Gi1/0/8
562  IND-CCTV                         active    
563  IND-CCL_CESS                     active    
582  IND-SL6                          active    
590  EDPowerMeterMngt                 active    
592  CCL_Ruler                        active    
593  Ignition                         active    Gi1/0/10, Gi1/0/15, Gi1/0/16, Gi1/0/17, Gi1/0/18
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CCL2_OS1#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.21  YES NVRAM  up                    up      
Vlan590                unassigned      YES unset  up                    up      
FastEthernet0          unassigned      YES NVRAM  down                  down    
GigabitEthernet1/0/1   unassigned      YES unset  down                  down    
GigabitEthernet1/0/2   unassigned      YES unset  up                    up      
GigabitEthernet1/0/3   unassigned      YES unset  down                  down    
GigabitEthernet1/0/4   unassigned      YES unset  up                    up      
GigabitEthernet1/0/5   unassigned      YES unset  up                    up      
GigabitEthernet1/0/6   unassigned      YES unset  up                    up      
GigabitEthernet1/0/7   unassigned      YES unset  up                    up      
GigabitEthernet1/0/8   unassigned      YES unset  down                  down    
GigabitEthernet1/0/9   unassigned      YES unset  down                  down    
GigabitEthernet1/0/10  unassigned      YES unset  up                    up      
GigabitEthernet1/0/11  unassigned      YES unset  up                    up      
GigabitEthernet1/0/12  unassigned      YES unset  down                  down    
GigabitEthernet1/0/13  unassigned      YES unset  down                  down    
GigabitEthernet1/0/14  unassigned      YES unset  up                    up      
GigabitEthernet1/0/15  unassigned      YES unset  up                    up      
GigabitEthernet1/0/16  unassigned      YES unset  down                  down    
GigabitEthernet1/0/17  unassigned      YES unset  down                  down    
GigabitEthernet1/0/18  unassigned      YES unset  down                  down    
GigabitEthernet1/0/19  unassigned      YES unset  down                  down    
GigabitEthernet1/0/20  unassigned      YES unset  down                  down    
GigabitEthernet1/0/21  unassigned      YES unset  down                  down    
GigabitEthernet1/0/22  unassigned      YES unset  down                  down    
GigabitEthernet1/0/23  unassigned      YES unset  down                  down    
GigabitEthernet1/0/24  unassigned      YES unset  down                  down    
GigabitEthernet1/0/25  unassigned      YES unset  up                    up      
GigabitEthernet1/0/26  unassigned      YES unset  up                    up      
GigabitEthernet1/0/27  unassigned      YES unset  up                    up      
GigabitEthernet1/0/28  unassigned      YES unset  down                  down    
IND-SW-CCL2_OS1#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.0(2)EX5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2014 by Cisco Systems, Inc.
Compiled Fri 21-Feb-14 05:54 by prod_rel_team

ROM: Bootstrap program is C2960X boot loader
BOOTLDR: C2960X Boot Loader (C2960X-HBOOT-M) Version 15.0(2r)EX3, RELEASE SOFTWARE (fc1)

IND-SW-CCL2_OS1 uptime is 1 year, 16 weeks, 3 days, 7 hours, 10 minutes
System returned to ROM by power-on
System restarted at 07:24:34 ZA Sun Jul 27 2025
System image file is "flash:/c2960x-universalk9-mz.150-2.EX5/c2960x-universalk9-mz.150-2.EX5.bin"


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

cisco WS-C2960X-24TS-L (APM86XXX) processor (revision B0) with 524288K bytes of memory.
Processor board ID FCW1817A5QP
Last reset from power-on
3 Virtual Ethernet interfaces
1 FastEthernet interface
28 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

512K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 6C:FA:89:58:CE:00
Motherboard assembly number     : 73-14194-04
Power supply part number        : 341-0529-02
Motherboard serial number       : FOC18173AEL
Power supply serial number      : LIT18080AA9
Model revision number           : B0
Motherboard revision number     : A0
Model number                    : WS-C2960X-24TS-L
Daughterboard assembly number   : 73-14200-03
Daughterboard serial number     : FOC18172LZT
System serial number            : FCW1817A5QP
Top Assembly Part Number        : 800-38008-02
Top Assembly Revision Number    : C0
Version ID                      : V02
CLEI Code Number                : CMMMU00ARA
Daughterboard revision number   : A0
Hardware Board Revision Number  : 0x05


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 28    WS-C2960X-24TS-L   15.0(2)EX5            C2960X-UNIVERSALK9-M     


Configuration register is 0xF

IND-SW-CCL2_OS1#
```
