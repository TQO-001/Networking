# IND-SW-EDNL_S4PulPit

> Cluster: Cluster_01  
> Classification: provisional LLDP/CDP discovery grouping. Confirm physical department/location before renaming or moving.

#### IND-SW-EDNL_S4PulPit

##### Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_S4PulPit |
| **IP Address** | 192.168.160.33 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco WS-C2960X-24TS-L |
| **Total physical ports reported** | 9 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | TELNET |
| **Connection port** | 23 |
| **Collection status** | partial |
| **Connection method** | Netmiko Telnet |
| **Collection time** | 6.12s |
| **Notes** | 2 command(s) could not be collected. |

##### Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa0/1** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **Fa0/2** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **Fa0/3** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **Fa0/4** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **Fa0/5** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **Fa0/6** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **Fa0/7** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **Fa0/8** | Not reported | 514 S4_Vlan | — | — | — | — | — | — |
| **FastEthernet0/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet0/2** | down | — | — | — | — | — | — | — |
| **FastEthernet0/3** | down | — | — | — | — | — | — | — |
| **FastEthernet0/4** | down | — | — | — | — | — | — | — |
| **FastEthernet0/5** | down | — | — | — | — | — | — | — |
| **FastEthernet0/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet0/7** | down | — | — | — | — | — | — | — |
| **FastEthernet0/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/1** | up | — | IND-SW-EDNL_S4SMCCRoomBottom | GigabitEthernet1/0/27 | 192.168.160.29 | cisco WS-C2960X-24TS-L | — | CDP |

##### Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_S4SMCCRoomBottom.hulamin.co.
Entry address(es): 
  IP address: 192.168.160.29
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet0/1,  Port ID (outgoing port): GigabitEthernet1/0/27
Holdtime : 142 sec

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

IND-SW_S4Pulpit#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
                      ^
% Invalid input detected at '^' marker.

IND-SW_S4Pulpit#
! COMMAND ERROR: CLI rejected the command: Invalid input
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
                      ^
% Invalid input detected at '^' marker.

IND-SW_S4Pulpit#
! COMMAND ERROR: CLI rejected the command: Invalid input
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
514  S4_Vlan                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4, Fa0/5, Fa0/6, Fa0/7, Fa0/8
560  management                       active    
593  Ignition                         active    
800  VLAN0800                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW_S4Pulpit#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan514                unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.33  YES NVRAM  up                    up      
FastEthernet0/1        unassigned      YES unset  up                    up      
FastEthernet0/2        unassigned      YES unset  down                  down    
FastEthernet0/3        unassigned      YES unset  down                  down    
FastEthernet0/4        unassigned      YES unset  down                  down    
FastEthernet0/5        unassigned      YES unset  down                  down    
FastEthernet0/6        unassigned      YES unset  up                    up      
FastEthernet0/7        unassigned      YES unset  down                  down    
FastEthernet0/8        unassigned      YES unset  up                    up      
GigabitEthernet0/1     unassigned      YES unset  up                    up      
IND-SW_S4Pulpit#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(35)SE5, RELEASE SOFTWARE (fc1)
Copyright (c) 1986-2007 by Cisco Systems, Inc.
Compiled Thu 19-Jul-07 20:06 by nachen
Image text-base: 0x00003000, data-base: 0x00D40000

ROM: Bootstrap program is C2960 boot loader
BOOTLDR: C2960 Boot Loader (C2960-HBOOT-M) Version 12.2(35r)SE2, RELEASE SOFTWARE (fc1)

IND-SW_S4Pulpit uptime is 24 weeks, 6 days, 6 hours, 6 minutes
System returned to ROM by power-on
System restarted at 08:56:34 EET Fri May 29 2026
System image file is "flash:c2960-lanbase-mz.122-35.SE5/c2960-lanbase-mz.122-35.SE5.bin"

cisco WS-C2960-8TC-L (PowerPC405) processor (revision A0) with 61440K/4088K bytes of memory.
Processor board ID FOC1227U5R3
Last reset from power-on
3 Virtual Ethernet interfaces
8 FastEthernet interfaces
1 Gigabit Ethernet interface
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:22:56:DC:EA:80
Motherboard assembly number     : 73-10611-07
Power supply part number        : 341-0208-01
Motherboard serial number       : FOC12275RXQ
Power supply serial number      : LIT12240HL4
Model revision number           : A0
Motherboard revision number     : C0
Model number                    : WS-C2960-8TC-L
System serial number            : FOC1227U5R3
Top Assembly Part Number        : 800-28132-01
Top Assembly Revision Number    : C0
Version ID                      : V01
CLEI Code Number                : COM8A00ARA
Hardware Board Revision Number  : 0x01


Switch   Ports  Model              SW Version              SW Image            
------   -----  -----              ----------              ----------          
*    1   9      WS-C2960-8TC-L     12.2(35)SE5             C2960-LANBASE-M     


Configuration register is 0xF

IND-SW_S4Pulpit#
```

---
