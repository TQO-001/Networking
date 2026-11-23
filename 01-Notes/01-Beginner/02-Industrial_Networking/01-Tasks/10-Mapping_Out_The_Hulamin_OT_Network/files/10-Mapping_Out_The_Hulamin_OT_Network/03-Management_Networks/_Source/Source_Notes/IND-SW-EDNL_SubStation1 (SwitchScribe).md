# IND-SW-EDNL_SubStation1

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_SubStation1]] in Network_08.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_SubStation1 |
| **IP Address** | 192.168.160.35 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 7 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.74s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 562 IND-CCTV | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 562 IND-CCTV | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | axis-accc8e77c11f | eth0 | 192.168.162.11 | Linux | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/4 | 192.168.1.1 | cisco C9500-48Y4C | 1000baseT(FD) | CDP/LLDP |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL-Dept34SubStation | GigabitEthernet1/1 | 192.168.160.41 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL-Dept34SubStation.hulamin.co.
Entry address(es): 
  IP address: 192.168.160.41
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 179 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000002852618DDD80FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.41

-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE1/0/4
Holdtime : 148 sec

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
Device ID: axis-accc8e77c11f
Entry address(es): 
  IP address: 192.168.162.11
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/1,  Port ID (outgoing port): eth0
Holdtime : 91 sec

Version :
AXIS M1125 Network Camera 9.60.1

advertisement version: 2
Management address(es): 

IND-SW-EDNL_SubStation1#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
ind-Core1-MSR       Gi1/1          120        B,R             Twe1/0/4
IND-SW-EDNL-Dept34SuGi1/2          120        B               Gi1/1
axis-accc8e77c11f   Fa1/1          120        S               accc.8e77.c11f

Total entries displayed: 3

IND-SW-EDNL_SubStation1#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: e80a.b9f1.93a0
Port id: Twe1/0/4
Port Description: TwentyFiveGigE1/0/4
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description: 
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 118 seconds
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
Chassis id: 2852.618d.dd80
Port id: Gi1/1
Port Description: GigabitEthernet1/1
System Name: IND-SW-EDNL-Dept34SubStation.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 115 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.41
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: accc.8e77.c11f
Port id: accc.8e77.c11f
Port Description: eth0
System Name: axis-accc8e77c11f

System Description: 
AXIS M1125 Network Camera 9.60.1

Time remaining: 90 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.11
Auto Negotiation - supported, enabled
Physical media capabilities:
    Pause(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 16
Vlan ID: - not advertised


Total entries displayed: 3

IND-SW-EDNL_SubStation1#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
100  access_control                   active    
250  IND-250                          active    
526  IND-S6                           active    
560  Management                       active    
561  CESMS                            active    Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7, Fa1/8
562  IND-CCTV                         active    Fa1/1, Fa1/2
582  IND-SL6                          active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_SubStation1#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan100                unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.35  YES NVRAM  up                    up      
Vlan561                unassigned      YES NVRAM  up                    up      
Vlan562                192.168.162.200 YES NVRAM  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  up                    up      
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-EDNL_SubStation1#
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

IND-SW-EDNL_SubStation1 uptime is 12 weeks, 4 days, 23 hours, 4 minutes
System returned to ROM by power-on
System restarted at 15:58:18 EET Sat Aug 22 2026
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
Processor board ID FOC2048V1XT
Last reset from power-on
5 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 08:CC:A7:C0:7A:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20477PAF
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2048V1XT
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x64C07A80
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 10    IE-3000-8TC        12.2(58)SE2           IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_SubStation1#
```
