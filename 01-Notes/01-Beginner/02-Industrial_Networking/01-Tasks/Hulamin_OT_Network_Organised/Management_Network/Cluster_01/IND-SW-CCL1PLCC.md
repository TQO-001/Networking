# IND-SW-CCL1PLCC

> Cluster: Cluster_01  
> Classification: provisional LLDP/CDP discovery grouping. Confirm physical department/location before renaming or moving.

#### IND-SW-CCL1PLCC

##### Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CCL1PLCC |
| **IP Address** | 192.168.160.11 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 18 |
| **Ports up** | 9 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.77s |

##### Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa2/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa2/3** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa2/4** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa2/5** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa2/6** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa2/7** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa2/8** | Not reported | 1 default | — | — | — | — | — | — |
| **FastEthernet1/1** | down | — | — | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet2/1** | up | — | IND-SW_CCL1OS9 | GigabitEthernet1/1 | 192.168.160.16 | cisco IE-3000-4TC | MAU type 21 | CDP/LLDP |
| **FastEthernet2/2** | down | — | — | — | — | — | — | — |
| **FastEthernet2/3** | down | — | — | — | — | — | — | — |
| **FastEthernet2/4** | down | — | — | — | — | — | — | — |
| **FastEthernet2/5** | down | — | — | — | — | — | — | — |
| **FastEthernet2/6** | down | — | — | — | — | — | — | — |
| **FastEthernet2/7** | down | — | — | — | — | — | — | — |
| **FastEthernet2/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-CCL1DevRoom | GigabitEthernet1/0/28 | 192.168.160.12 | cisco WS-C2960X-24TS-L | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/2** | up | — | IND-SW-CCL1_PLC_B | GigabitEthernet1/1 | 192.168.160.10 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |

##### Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW_CCL1_PLC_B.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.10
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 138 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000046C9D9CB980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es): 
  IP address: 192.168.160.10

-------------------------
Device ID: IND-SW_CCL1OS9.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.16
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP 
Interface: FastEthernet2/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 145 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857300FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: half
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es): 
  IP address: 192.168.160.16

-------------------------
Device ID: IND-SW_CCL1DevRoom.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.12
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/28
Holdtime : 171 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Wed 26-Aug-15 07:12 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000009E1EFDDE00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es): 
  IP address: 192.168.160.12

IND-SW_CCL1PLCC#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
001b.1bdd.b491      Fa1/2          20         S               port-003
IND-SW_CCL1OS9      Fa2/1          120        B               Gi1/1
IND-SW_CCL1DevRoom  Gi1/1          120        B               Gi1/0/28
SINAMICS DC MASTER  Fa1/7          20         B,S             port-002
IND-SW_CCL1_PLC_B   Gi1/2          120        B               Gi1/1
SINAMICS DC MASTER  Fa1/6          20         B,S             port-001
SINAMICS DC MASTER  Fa1/8          20         B,S             port-001

Total entries displayed: 7

IND-SW_CCL1PLCC#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: 001b.1bdd.b491
Port id: port-003
Port Description: Siemens, SIMATIC NET, Ethernet Port, X1 P3
System Name - not advertised

System Description: 
Siemens, SIMATIC NET, SCALANCE X208, 6GK5 208-0BA10-2AA3, HW: Version 7, FW: Version V05.01.03, SVPFO171024

Time remaining: 17 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    Other: 00 1B 1B FF FF FF 00
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-T2(FD)
    100base-T2(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Chassis id: 0056.2b85.7300
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW_CCL1OS9.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 101 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.16
Auto Negotiation - supported, enabled
Physical media capabilities:
    Other/unknown
Media Attachment Unit type: 21
Vlan ID: 1

------------------------------------------------
Chassis id: 009e.1efd.de00
Port id: Gi1/0/28
Port Description: GigabitEthernet1/0/28
System Name: IND-SW_CCL1DevRoom.hulamin.co.za

System Description: 
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Wed 26-Aug-15 07:12 by prod_rel_team

Time remaining: 119 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.12
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: rew
Port id: port-002
Port Description: Siemens, SINAMICS, Ethernet Port, X1400 P2R
System Name: SINAMICS DC MASTER

System Description: 
Siemens, SINAMICS, DC MASTER, 6RA8 078-6DV62-0AA0 , HW: 1, FW: V01.40.20, ZYL11200067     

Time remaining: 18 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.1.119
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
Chassis id: 046c.9d9c.b980
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW_CCL1_PLC_B.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 113 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.10
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: xb1
Port id: port-001
Port Description: Siemens, SINAMICS, Ethernet Port, X1400 P1R
System Name: SINAMICS DC MASTER

System Description: 
Siemens, SINAMICS, DC MASTER, 6RA8 031-6DV62-0AA0 , HW: 1, FW: V01.40.20, ZYL11700078     

Time remaining: 15 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.1.117
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
Chassis id: xb2
Port id: port-001
Port Description: Siemens, SINAMICS, Ethernet Port, X1400 P1R
System Name: SINAMICS DC MASTER

System Description: 
Siemens, SINAMICS, DC MASTER, 6RA8 031-6DV62-0AA0 , HW: 1, FW: V01.40.20, ZYL11700077     

Time remaining: 16 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.1.118
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


Total entries displayed: 7

IND-SW_CCL1PLCC#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa2/2, Fa2/3, Fa2/4, Fa2/5, Fa2/6, Fa2/7, Fa2/8
250  IND-250                          active    
501  VLAN0501                         active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/6, Fa1/7, Fa1/8
526  IND-S6                           active    
560  VLAN0560                         active    
561  VLAN0561                         active    Fa1/5
563  CLL-CESS                         active    
582  IND-SL6                          active    
592  CCL_Ruler                        active    
593  Ignition                         active    
904  VLAN0904                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW_CCL1PLCC#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan501                unassigned      YES unset  up                    up      
Vlan560                192.168.160.11  YES NVRAM  up                    up      
Vlan904                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  down                  down    
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  up                    up      
FastEthernet1/7        unassigned      YES unset  up                    up      
FastEthernet1/8        unassigned      YES unset  up                    up      
FastEthernet2/1        unassigned      YES unset  up                    up      
FastEthernet2/2        unassigned      YES unset  down                  down    
FastEthernet2/3        unassigned      YES unset  down                  down    
FastEthernet2/4        unassigned      YES unset  down                  down    
FastEthernet2/5        unassigned      YES unset  down                  down    
FastEthernet2/6        unassigned      YES unset  down                  down    
FastEthernet2/7        unassigned      YES unset  down                  down    
FastEthernet2/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW_CCL1PLCC#
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

IND-SW_CCL1PLCC uptime is 4 days, 38 minutes
System returned to ROM by power-on
System restarted at 14:27:09 EET Sun Nov 15 2026
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

cisco IE-3000-8TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2014Z0QL
Last reset from power-on
4 Virtual Ethernet interfaces
16 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 04:2A:E2:AD:A4:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC201078EB
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2014Z0QL
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x6BADA480
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 18    IE-3000-8TC        15.0(2)EY3            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW_CCL1PLCC#
```

---
