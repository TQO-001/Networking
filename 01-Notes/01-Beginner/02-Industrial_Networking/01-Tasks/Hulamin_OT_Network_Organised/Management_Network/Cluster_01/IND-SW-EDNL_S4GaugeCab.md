# IND-SW-EDNL_S4GaugeCab

> Cluster: Cluster_01  
> Classification: provisional LLDP/CDP discovery grouping. Confirm physical department/location before renaming or moving.

#### IND-SW-EDNL_S4GaugeCab

##### Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_S4GaugeCab |
| **IP Address** | 192.168.160.32 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco WS-C2960X-24TS-L |
| **Total physical ports reported** | 10 |
| **Ports up** | 2 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.86s |

##### Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 514 s4_Vlan | IND-SW-EDNL_S4SMCCRoomBottom | GigabitEthernet1/0/1 | 192.168.160.29 | Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E3, RELEASE SOFTWARE (fc3) | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| **Fa1/2** | Not reported | 514 s4_Vlan | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 514 s4_Vlan | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 514 s4_Vlan | — | — | — | — | — | — |
| **Fa1/5** | Not reported | 514 s4_Vlan | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 514 s4_Vlan | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 514 s4_Vlan | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 514 s4_Vlan | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | down | — | — | — | — | — | — | — |
| **FastEthernet1/3** | down | — | — | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW-EDNL_S4SMCCRoomBottom | GigabitEthernet1/0/1 | 192.168.160.29 | cisco WS-C2960X-24TS-L | — | CDP/LLDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

##### Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_S4SMCCRoomBottom.hulamin.co.
Entry address(es): 
  IP address: 192.168.160.29
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/1
Holdtime : 123 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Wed 26-Aug-15 07:12 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B286080FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.29


Total cdp entries displayed : 1
IND-SW_S4GaugeCab#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-EDNL_S4SMCCRoGi1/1          120        B               Gi1/0/1
PA151469-RT01       Fa1/1          10         B               port-007

Total entries displayed: 2

IND-SW_S4GaugeCab#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 0056.2b28.6080
Port id: Gi1/0/1
Port Description: GigabitEthernet1/0/1
System Name: IND-SW-EDNL_S4SMCCRoomBottom.hulamin.co.za

System Description: 
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Wed 26-Aug-15 07:12 by prod_rel_team

Time remaining: 112 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.29
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
Local Intf: Fa1/1
Chassis id: PA151469-RT01
Port id: port-007
Port Description: Port 7
System Name: PA151469-RT01
System Description - not advertised

Time remaining: 8 seconds
System Capabilities: B
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.4.1
    OID:
        1.3.6.1.4.1.4346.11.1.2.1.1.1.417.
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised


Total entries displayed: 2

IND-SW_S4GaugeCab#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active    
514  s4_Vlan                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7, Fa1/8
526  IND-S6                           active    
560  management                       active    
574  IND-AnnealingFurnace             active    
582  IND-SL6                          active    
593  Ignition                         active    
800  Local_gauge_network              active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW_S4GaugeCab#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan514                unassigned      YES unset  up                    up      
Vlan560                192.168.160.32  YES NVRAM  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  down                  down    
FastEthernet1/3        unassigned      YES unset  down                  down    
FastEthernet1/4        unassigned      YES unset  down                  down    
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
IND-SW_S4GaugeCab#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA9, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Wed 26-Jun-19 06:20 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW_S4GaugeCab uptime is 8 weeks, 1 day, 7 hours, 21 minutes
System returned to ROM by power-on
System restarted at 07:43:09 EET Wed Sep 23 2026
System image file is "flash:ies-lanbasek9-mz.152-4.EA9/ies-lanbasek9-mz.152-4.EA9.bin"
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
Processor board ID FOC2044V1X1
Last reset from power-on
3 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 2C:0B:E9:FF:BC:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20425GF9
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2044V1X1
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x63FFBC80
SKU Brand Name                  : Cisco
cesium fpga version             : 2017.9.14


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(4)EA9            IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW_S4GaugeCab#
```

---
