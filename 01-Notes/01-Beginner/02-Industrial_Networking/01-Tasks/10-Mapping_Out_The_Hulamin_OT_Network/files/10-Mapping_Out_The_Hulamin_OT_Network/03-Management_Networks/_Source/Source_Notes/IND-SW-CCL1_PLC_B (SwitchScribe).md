# IND-SW-CCL1_PLC_B

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CCL1_PLC_B]] in Network_03.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field                             | Value             |
| --------------------------------- | ----------------- |
| **Name**                          | IND-SW-CCL1_PLC_B |
| **IP Address**                    | 192.168.160.10    |
| **Vendor profile**                | cisco_ios         |
| **Model**                         | cisco IE-3000-8TC |
| **Total physical ports reported** | 18                |
| **Ports up**                      | 9                 |
| **Location**                      | Not documented    |
| **Transport**                     | SSH               |
| **Connection port**               | 22                |
| **Collection status**             | success           |
| **Connection method**             | Netmiko SSH       |
| **Collection time**               | 4.77s             |

## Connected Ports / Discovered Neighbours
 
| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
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
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet2/1** | up | — | IND-SW_CCL1OS4 | GigabitEthernet1/1 | 192.168.160.13 | cisco IE-3000-4TC | MAU type 21 | CDP/LLDP |
| **FastEthernet2/2** | down | — | — | — | — | — | — | — |
| **FastEthernet2/3** | down | — | — | — | — | — | — | — |
| **FastEthernet2/4** | down | — | — | — | — | — | — | — |
| **FastEthernet2/5** | down | — | — | — | — | — | — | — |
| **FastEthernet2/6** | down | — | — | — | — | — | — | — |
| **FastEthernet2/7** | down | — | — | — | — | — | — | — |
| **FastEthernet2/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-CCL1PLCC | GigabitEthernet1/2 | 192.168.160.11 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/2** | up | — | IND-SW-CCL1DevRoom | GigabitEthernet1/0/26 | 192.168.160.12 | cisco WS-C2960X-24TS-L | 1000baseX(FD) | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW_CCL1PLCC.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.11
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 149 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000042AE2ADA480FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es): 
  IP address: 192.168.160.11

-------------------------
Device ID: IND-SW_CCL1OS4.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.13
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP 
Interface: FastEthernet2/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 140 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857480FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: half
Power Available TLV:

    Power request id: 0, Power management id: 1, Power available: 0, Power management level: -1
Management address(es): 
  IP address: 192.168.160.13

-------------------------
Device ID: IND-SW_CCL1DevRoom.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.12
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/0/26
Holdtime : 158 sec

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

IND-SW_CCL1_PLC_B#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW_CCL1DevRoom  Gi1/2          120        B               Gi1/0/26
D7483-CCL1IBA       Fa1/8          20         S               port-001
IND-SW_CCL1PLCC     Gi1/1          120        B               Gi1/2
CCL1_Vibration_1    Fa1/8          120        B,W             6
IND-SW_CCL1OS4      Fa2/1          120        B               Gi1/1
plcgateway          Fa1/1          20         B,S             port-002
acf4.6669.1ed4      Fa1/8          3601                       acf4.6669.1ed4

Total entries displayed: 7

IND-SW_CCL1_PLC_B#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: 009e.1efd.de00
Port id: Gi1/0/26
Port Description: GigabitEthernet1/0/26
System Name: IND-SW_CCL1DevRoom.hulamin.co.za

System Description: 
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Wed 26-Aug-15 07:12 by prod_rel_team

Time remaining: 90 seconds
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
Chassis id: d7483-ccl1iba
Port id: port-001
Port Description - not advertised
System Name: D7483-CCL1IBA

System Description: 
HP HP Elite Tower 800 G9 Desktop PC,SBKPF,SBKPFV2,4CE546CNDD + engineering

Time remaining: 12 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.1.170
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
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Chassis id: 042a.e2ad.a480
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW_CCL1PLCC.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 116 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.11
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: 0090.e827.1268
Port id: 6
Port Description: ixp1
System Name: CCL1_Vibration_1

System Description: 
AWK3121

Time remaining: 110 seconds
System Capabilities: B,W,R
Enabled Capabilities: B,W
Management Addresses:
    IP: 10.0.0.121
Auto Negotiation - supported, enabled
Physical media capabilities:
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised

------------------------------------------------
Chassis id: 0056.2b85.7480
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW_CCL1OS4.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 105 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.13
Auto Negotiation - supported, enabled
Physical media capabilities:
    Other/unknown
Media Attachment Unit type: 21
Vlan ID: 1

------------------------------------------------
Chassis id: plcgateway
Port id: port-002
Port Description: Siemens, SIMATIC S7, Ethernet Port, X1 P2R
System Name - not advertised

System Description: 
Siemens, SIMATIC S7, CPU-1200, 6ES7 215-1AG40-0XB0, HW: 15, FW: V.4.6.0, S C-T4A1EFYZ

Time remaining: 18 seconds
System Capabilities: B,S
Enabled Capabilities: B,S
Management Addresses:
    IP: 192.168.1.108
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
Chassis id: acf4.6669.1ed4
Port id: acf4.6669.1ed4
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2940 seconds
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

IND-SW_CCL1_PLC_B#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa2/2, Fa2/3, Fa2/4, Fa2/5, Fa2/6, Fa2/7, Fa2/8
2    VLAN0002                         active    
22   VLAN0022                         active    
250  IND-250                          active    
501  VLAN0501                         active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7, Fa1/8
526  IND-S6                           active    
560  VLAN0560                         active    
563  CCL-CESS                         active    
582  IND-SL6                          active    
592  CCL_Ruler                        active    
593  Ignition                         active    
904  VLAN0904                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW_CCL1_PLC_B#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan501                unassigned      YES unset  up                    up      
Vlan560                192.168.160.10  YES NVRAM  up                    up      
Vlan904                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  down                  down    
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
IND-SW_CCL1_PLC_B#
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

IND-SW_CCL1_PLC_B uptime is 2 years, 44 weeks, 5 days, 1 hour, 44 minutes
System returned to ROM by power-on
System restarted at 12:56:31 EET Thu Jan 11 2024
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
Processor board ID FOC1937Y43J
Last reset from power-on
4 Virtual Ethernet interfaces
16 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 04:6C:9D:9C:B9:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC1936880C
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC1937Y43J
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x719CB980
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 18    IE-3000-8TC        15.0(2)EY3            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW_CCL1_PLC_B#
```
