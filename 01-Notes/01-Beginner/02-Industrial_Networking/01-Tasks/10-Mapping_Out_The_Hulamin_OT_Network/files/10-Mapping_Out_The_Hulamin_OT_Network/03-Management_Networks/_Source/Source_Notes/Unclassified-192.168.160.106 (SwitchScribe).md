# Unclassified-192.168.160.106

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[Unclassified-192.168.160.106]] in Network_32.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.106 |
| **IP Address** | 192.168.160.106 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 10 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.73s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 590 CDPowermeters | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | down | — | — | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | Unclassified-192.168.160.107 | TwentyFiveGigE2/0/13 | 192.168.160.107 | cisco C9500-48Y4C | — | CDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CD-CORE.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.107
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE2/0/13
Holdtime : 160 sec

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
  IP address: 192.168.160.107

CDR_Water_Recovery-SW#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID

Total entries displayed: 0

CDR_Water_Recovery-SW#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail

Total entries displayed: 0

CDR_Water_Recovery-SW#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
560  VLAN0560                         active    
561  VLAN0561                         active    Fa1/1, Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7, Fa1/8
590  CDPowermeters                    active    Fa1/2
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
CDR_Water_Recovery-SW#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.106 YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan590                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  down                  down    
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
CDR_Water_Recovery-SW#
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

CDR_Water_Recovery-SW uptime is 9 weeks, 6 days, 13 hours, 26 minutes
System returned to ROM by power-on
System restarted at 01:39:25 EET Fri Sep 11 2026
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
Processor board ID FOC1937Z32A
Last reset from power-on
4 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 04:6C:9D:9C:BA:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC19368871
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC1937Z32A
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x719CBA80
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 10    IE-3000-8TC        15.0(2)EY3            IES-LANBASEK9-M          


Configuration register is 0xF

CDR_Water_Recovery-SW#
```
