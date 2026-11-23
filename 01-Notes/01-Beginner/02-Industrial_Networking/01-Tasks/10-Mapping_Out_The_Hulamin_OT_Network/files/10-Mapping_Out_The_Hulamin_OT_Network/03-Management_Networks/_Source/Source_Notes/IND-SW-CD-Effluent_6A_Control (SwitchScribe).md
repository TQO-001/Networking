# IND-SW-CD-Effluent_6A_Control

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD-Effluent_6A_Control]] in Network_21.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD-Effluent_6A_Control |
| **IP Address** | 192.168.160.94 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 14 |
| **Ports up** | 3 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 7.33s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa0/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/10** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/11** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/12** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/2** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/3** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/5** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/6** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/7** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/8** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa0/9** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **FastEthernet0/1** | down | — | — | — | — | — | — | — |
| **FastEthernet0/10** | down | — | — | — | — | — | — | — |
| **FastEthernet0/11** | down | — | — | — | — | — | — | — |
| **FastEthernet0/12** | down | — | — | — | — | — | — | — |
| **FastEthernet0/2** | down | — | — | — | — | — | — | — |
| **FastEthernet0/3** | down | — | — | — | — | — | — | — |
| **FastEthernet0/4** | down | — | — | — | — | — | — | — |
| **FastEthernet0/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet0/6** | down | — | — | — | — | — | — | — |
| **FastEthernet0/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet0/8** | down | — | — | — | — | — | — | — |
| **FastEthernet0/9** | down | — | — | — | — | — | — | — |
| **Gi0/1** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet0/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/2** | up | — | IND-SW-CD_Sub5MCC | GigabitEthernet1/2 | 192.168.160.96 | cisco IE-3000-8TC | 1000baseX(FD) | CDP/LLDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CD_Sub5MCC.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.96
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet0/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 153 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 07-Sep-20 00:36 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.96


Total cdp entries displayed : 1
IND-SW-CD-Sub6A_Control#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-CD_Sub5MCC.huGi0/2          120        B               Gi1/2

Total entries displayed: 1

IND-SW-CD-Sub6A_Control#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi0/2
Chassis id: 70c9.c6b5.bd00
Port id: Gi1/2
Port Description: GigabitEthernet1/2
System Name: IND-SW-CD_Sub5MCC.hulamin.co.za

System Description: 
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E3, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 07-Sep-20 00:36 by prod_rel_team

Time remaining: 100 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.96
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 1

IND-SW-CD-Sub6A_Control#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi0/1
250  IND-250                          active    
560  VLAN0560                         active    
561  VLAN0561                         active    Fa0/1, Fa0/2, Fa0/3, Fa0/4, Fa0/5, Fa0/6, Fa0/7, Fa0/8, Fa0/9, Fa0/10, Fa0/11, Fa0/12
590  CDPowermeters                    active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD-Sub6A_Control#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan50                 unassigned      YES unset  up                    down    
Vlan560                192.168.160.94  YES NVRAM  up                    up      
Vlan561                unassigned      YES manual up                    up      
Vlan590                unassigned      YES unset  up                    up      
FastEthernet0/1        unassigned      YES unset  down                  down    
FastEthernet0/2        unassigned      YES unset  down                  down    
FastEthernet0/3        unassigned      YES unset  down                  down    
FastEthernet0/4        unassigned      YES unset  down                  down    
FastEthernet0/5        unassigned      YES unset  up                    up      
FastEthernet0/6        unassigned      YES unset  down                  down    
FastEthernet0/7        unassigned      YES unset  up                    up      
FastEthernet0/8        unassigned      YES unset  down                  down    
FastEthernet0/9        unassigned      YES unset  down                  down    
FastEthernet0/10       unassigned      YES unset  down                  down    
FastEthernet0/11       unassigned      YES unset  down                  down    
FastEthernet0/12       unassigned      YES unset  down                  down    
GigabitEthernet0/1     unassigned      YES unset  down                  down    
GigabitEthernet0/2     unassigned      YES unset  up                    up      
IND-SW-CD-Sub6A_Control#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, C2960C Software (C2960c405-UNIVERSALK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sat 14-Mar-20 18:16 by prod_rel_team

ROM: Bootstrap program is C2960C boot loader
BOOTLDR: C2960C Boot Loader (C2960c405-HBOOT-M) Version 12.2(55r)EX9, RELEASE SOFTWARE (fc1)

IND-SW-CD-Sub6A_Control uptime is 14 weeks, 1 day, 21 hours, 30 minutes
System returned to ROM by power-on
System restarted at 17:35:30 ZA Tue Aug 11 2026
System image file is "flash:c2960c405-universalk9-mz.152-7.E2/c2960c405-universalk9-mz.152-7.E2.bin"
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

License Level: lanbase
License Type: Permanent
Next reload license Level: lanbase

cisco WS-C2960C-12PC-L (PowerPC405) processor (revision T1) with 131072K bytes of memory.
Processor board ID FOC2230Y131
Last reset from power-on
5 Virtual Ethernet interfaces
12 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:AA:6E:6F:EB:80
Motherboard assembly number     : 73-13531-04
Power supply part number        : 341-0407-03
Motherboard serial number       : FOC222851MJ
Power supply serial number      : DCB221920DT
Model revision number           : T1
Motherboard revision number     : A0
Model number                    : WS-C2960C-12PC-L
System serial number            : FOC2230Y131
Top Assembly Part Number        : 800-35141-05
Top Assembly Revision Number    : A1
Version ID                      : V05
CLEI Code Number                : CMMGD00ARE
Hardware Board Revision Number  : 0x01


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 14    WS-C2960C-12PC-L          15.2(7)E2             C2960c405-UNIVERSALK9-M  


Configuration register is 0xF

IND-SW-CD-Sub6A_Control#
```
