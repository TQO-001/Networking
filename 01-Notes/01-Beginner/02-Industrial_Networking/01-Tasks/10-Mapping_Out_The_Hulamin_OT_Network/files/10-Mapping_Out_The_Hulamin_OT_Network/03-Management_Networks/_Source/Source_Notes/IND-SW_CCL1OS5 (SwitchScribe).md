# IND-SW_CCL1OS5

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW_CCL1OS5]] in Network_03.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW_CCL1OS5 |
| **IP Address** | 192.168.160.14 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-4TC |
| **Total physical ports reported** | 6 |
| **Ports up** | 3 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.59s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **FastEthernet1/1** | down | — | — | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | down | — | — | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW_CCL1OS9 | GigabitEthernet1/2 | 192.168.160.16 | cisco IE-3000-4TC | MAU type 21 | CDP/LLDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW_CCL1OS9.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.16
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 141 sec

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

IND-SW_CCL1OS5#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW_CCL1OS9      Gi1/1          120        B               Gi1/2

Total entries displayed: 1

IND-SW_CCL1OS5#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Chassis id: 0056.2b85.7300
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW_CCL1OS9.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

Time remaining: 114 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.16
Auto Negotiation - supported, enabled
Physical media capabilities:
    Other/unknown
Media Attachment Unit type: 21
Vlan ID: 1


Total entries displayed: 1

IND-SW_CCL1OS5#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active    
501  VLAN0501                         active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
526  IND-S6                           active    
560  VLAN0560                         active    
563  CLL-CESS                         active    
582  IND-SL6                          active    
592  CCL_Ruler                        active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW_CCL1OS5#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.14  YES NVRAM  up                    up      
Vlan592                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  down                  down    
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  down                  down    
FastEthernet1/4        unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
IND-SW_CCL1OS5#
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

IND-SW_CCL1OS5 uptime is 19 weeks, 3 hours, 26 minutes
System returned to ROM by power-on
System restarted at 11:34:02 EET Thu Jul 9 2026
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
Processor board ID FOC2021Z2PU
Last reset from power-on
3 Virtual Ethernet interfaces
4 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:EB:D5:FD:24:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20207MH5
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-4TC
System serial number            : FOC2021Z2PU
Top Assembly Part Number        : 800-28494-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFD00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x6DFD2400
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 6     IE-3000-4TC        15.0(2)EY3            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW_CCL1OS5#
```
