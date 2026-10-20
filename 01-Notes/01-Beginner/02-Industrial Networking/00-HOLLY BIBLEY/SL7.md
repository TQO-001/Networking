![[Pasted image 20261019135734.png]]

## SL7 LV Room
![[Pasted image 20261019143336.png]]

### IND-SW-EDNL_SL7 Switch
![[49b9324d-d0da-4b51-8941-838609d39314.jpg|357]]  ![[aeb8191a-8e22-49cf-9271-24794a6b0f5c.jpg|324]]

- **IP Address:** 192.168.160.73 (Device has wrong label change to this IP address)
- **EKC Boxes:** 2
	- A17
	- Dept34

#### CDP Neighbors
##### The `show cdp neighbors` command
- Gig1/1 --> Gig1/2 (**TLL**)
- Fas1/4 --> Gig1/3 (**SL7_MCC**)
- Gig1/2 --> Gig1/1 (**A17**)

| **Device ID**                                | **Local Intrfce** | **Port ID** |
| -------------------------------------------- | ----------------- | ----------- |
| **IND-SW-EDNL_TLL.hulamin.co.za**            | Gig 1/1           | Gig 1/2     |
| **IND-SW-SL7Mcc.hulamin.co.za**              | Fas 1/4           | Gig 1/3     |
| **IND-SW-EDNL_A17ControlRoom.hulamin.co.za** | Gig 1/2           | Gig 1/1     |
##### The `show cdp neighbors detail` command
```Cisco
IND-SW-EDNL_SL7#show cdp neighbors detail
-------------------------

Device ID: IND-SW-EDNL_TLL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.59
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 138 sec

-------------------------

Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: FastEthernet1/4,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 129 sec

-------------------------

Device ID: IND-SW-EDNL_A17ControlRoom.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.65
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 165 sec
```


## SL7 Electric Room
![[Pasted image 20261019151917.png]]

### IND-SW-SL7MCC Switch
![[bc556298-6e8d-49a8-b27b-ee3e0a4e51bb.jpg|210]]

- **IP Address:** 192.168.160.112

#### CDP Neighbors
##### The `show cdp neighbors` command
- Gig1/8 --> Gig1/3(**SL7Oper**)
- Gig1/3 --> Fas1/4 (**SL7**)

| **Device ID**                         | **Local Intrfce** | **Port ID** |
| ------------------------------------- | ----------------- | ----------- |
| **IND-SW-EDNL-SL7Oper.hulamin.co.za** | Gig 1/8           | Gig 1/3     |
| **IND-SW-EDNL_SL7.hulamin.co.za**     | Gig 1/3           | Fas 1/4     |
##### The `show cdp neighbors detail` command
```Cisco
IND-SW-SL7Mcc#show cdp neighbors detail
-------------------------

Device ID: IND-SW-EDNL-SL7Oper.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.119
Platform: cisco IE-3300-8P2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/8,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 135 sec

-------------------------

Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es):
  IP address: 192.168.1.52
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): FastEthernet1/4
Holdtime : 172 sec
```

### SL7_SCADA_PC
![[5de39a01-75f9-406c-9378-3f542bea932e.jpg]]

### IBA_PC
![[c18f6e7a-8b00-44e4-9634-d33c361475dd 1.jpg]]


## SL7 Operating Desk
![[a8047b26-fde1-406d-95c5-f2a281eed9f4.jpg]]


### IND-SW-EDNL-SL7Oper Switch
![[e80bda32-0b9d-4a8e-8a6e-af425324257a.jpg]]

- **IP Address:** 192.168.160.119

#### CDP Neighbors
##### The `show cdp neighbors` command
- Gig1/3 --> Gig1/8(**SL7MCC**)

|**Device ID**|**Local Intrfce**|**Port ID**|
|---|---|---|
|**IND-SW-SL7Mcc.hulamin.co.za**|Gig 1/3|Gig 1/8|
##### The `show cdp neighbors detail` command
```Cisco
IND-SW-EDNL-SL7Oper#show cdp neighbors detail
-------------------------
Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): GigabitEthernet1/8
Holdtime : 155 sec
```

----
I got bored around here
----

## IND-SW-EDNL_TLL
```Cisco
Industrial IT Switch
IND-SW-EDNL_TLL>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/8
250  IND-250                          active
501  CCL                              active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL Network                     active
581  PTTL_ACDrives                    active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/1, Fa1/2
591  VLAN0591                         active
592  Crane                            active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_TLL>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan560                192.168.160.59  YES NVRAM  up                    up
Vlan567                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan581                192.168.181.147 YES NVRAM  up                    up
Vlan582                192.168.182.147 YES NVRAM  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  up                    up
FastEthernet1/8        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_TLL>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
                 Gig 1/1           157              S I   WS-C2960X Gig 1/0/27
IND-SW-EDNL_SL7.hulamin.co.za
                 Gig 1/2           123              S I   IE-3000-4 Gig 1/1

Total cdp entries displayed : 2
IND-SW-EDNL_TLL>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.84
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/27
Holdtime : 154 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000007802B1AFB900FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.84

-------------------------
Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es):
  IP address: 192.168.1.52
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 120 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857380FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.1.52


Total cdp entries displayed : 2
IND-SW-EDNL_TLL>

```

## IND-SW-EDNL_Dept34_PTTL
```Cisco
IND-SW-EDNL_Dept34_PTTL#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/1, Gi1/0/5, Gi1/0/6, Gi1/0/8
                                                Gi1/0/16
250  IND-250                          active
501  CCL                              active
515  FS15                             active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Gi1/0/9, Gi1/0/14, Gi1/0/15, Gi1/0/17
                                                Gi1/0/18, Gi1/0/19, Gi1/0/20, Gi1/0/21
                                                Gi1/0/22, Gi1/0/23
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL Network                     active
581  PTTL_ACDrives                    active    Gi1/0/10, Gi1/0/11, Gi1/0/12, Gi1/0/13
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active
591  IND_SL5                          active
592  Crane                            active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_Dept34_PTTL#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan501                unassigned      YES unset  up                    up
Vlan515                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.84  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan567                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan581                192.168.181.146 YES NVRAM  up                    up
Vlan582                192.168.182.146 YES NVRAM  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                10.18.14.250    YES NVRAM  up                    up
FastEthernet0          unassigned      YES NVRAM  administratively down down
GigabitEthernet1/0/1   unassigned      YES unset  down                  down
GigabitEthernet1/0/2   unassigned      YES unset  up                    up
GigabitEthernet1/0/3   unassigned      YES unset  up                    up
GigabitEthernet1/0/4   unassigned      YES unset  up                    up
GigabitEthernet1/0/5   unassigned      YES unset  up                    down
GigabitEthernet1/0/6   unassigned      YES unset  down                  down
GigabitEthernet1/0/7   unassigned      YES unset  up                    up
GigabitEthernet1/0/8   unassigned      YES unset  down                  down
GigabitEthernet1/0/9   unassigned      YES unset  up                    up
GigabitEthernet1/0/10  unassigned      YES unset  down                  down
GigabitEthernet1/0/11  unassigned      YES unset  down                  down
GigabitEthernet1/0/12  unassigned      YES unset  down                  down
GigabitEthernet1/0/13  unassigned      YES unset  down                  down
GigabitEthernet1/0/14  unassigned      YES unset  down                  down
GigabitEthernet1/0/15  unassigned      YES unset  down                  down
GigabitEthernet1/0/16  unassigned      YES unset  down                  down
GigabitEthernet1/0/17  unassigned      YES unset  down                  down
GigabitEthernet1/0/18  unassigned      YES unset  down                  down
GigabitEthernet1/0/19  unassigned      YES unset  down                  down
GigabitEthernet1/0/20  unassigned      YES unset  down                  down
GigabitEthernet1/0/21  unassigned      YES unset  down                  down
GigabitEthernet1/0/22  unassigned      YES unset  down                  down
GigabitEthernet1/0/23  unassigned      YES unset  down                  down
GigabitEthernet1/0/24  unassigned      YES unset  up                    down
GigabitEthernet1/0/25  unassigned      YES unset  up                    up
GigabitEthernet1/0/26  unassigned      YES unset  up                    up
GigabitEthernet1/0/27  unassigned      YES unset  up                    up
GigabitEthernet1/0/28  unassigned      YES unset  up                    up
Port-channel1          unassigned      YES unset  up                    up
IND-SW-EDNL_Dept34_PTTL#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_TLL.hulamin.co.za
                 Gig 1/0/27        162              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_PTTL.hulamin.co.za
                 Gig 1/0/26        146              S I   IE-3000-8 Gig 1/2
IND-SW-Dept34_Distr
                 Gig 1/0/28        158              S I   IE-9320-2 Gig 1/0/24
IND-SW-EDNL_CTLL5.hulamin.co.za
                 Gig 1/0/25        152              S I   IE-3000-8 Gig 1/1

Total cdp entries displayed : 4
IND-SW-EDNL_Dept34_PTTL#show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_TLL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.59
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/27,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 157 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCD580FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.59

-------------------------
Device ID: IND-SW-EDNL_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.70
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/26,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 141 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.70

-------------------------
Device ID: IND-SW-Dept34_Distr
Entry address(es):
  IP address: 192.168.160.117
  IPv6 address: FE80::B28D:57FF:FE9C:8EC7  (link-local)
Platform: cisco IE-9320-22S2C4X,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/28,  Port ID (outgoing port): GigabitEthernet1/0/24
Holdtime : 152 sec

Version :
Cisco IOS Software [Dublin], Catalyst L3 Switch Software (IE9K_IOSXE), Version 17.12.2, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Tue 14-Nov-23 06:36 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.117

-------------------------
Device ID: IND-SW-EDNL_CTLL5.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.71
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/0/25,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 146 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCEA00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.71


Total cdp entries displayed : 4
IND-SW-EDNL_Dept34_PTTL#

```


## IND-SW-EDNL_PTTL
```Cisco
IND-SW-EDNL_PTTL>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/5, Fa1/6
567  VLAN0567                         active
574  IND-AnnealingFurnace             active
579  PTTL                             active
581  PTTL_ACDrives                    active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/7
591  IND_SL5                          active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_PTTL>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.70  YES NVRAM  up                    up
Vlan571                unassigned      YES unset  down                  down
Vlan579                unassigned      YES unset  up                    up
Vlan581                192.168.181.149 YES NVRAM  up                    up
Vlan582                192.168.182.149 YES NVRAM  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  up                    up
FastEthernet1/5        unassigned      YES unset  up                    up
FastEthernet1/6        unassigned      YES unset  up                    up
FastEthernet1/7        unassigned      YES unset  up                    up
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_PTTL>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
                 Gig 1/2           128              S I   WS-C2960X Gig 1/0/26
IND-SW-EDNL_PTTL_PLC.hulamin.co.za
                 Fas 1/8           132              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_SL5.hulamin.co.za
                 Gig 1/1           159              S I   IE-3000-8 Gig 1/2

Total cdp entries displayed : 3
IND-SW-EDNL_PTTL>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_Dept34_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.84
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/0/26
Holdtime : 125 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2017 by Cisco Systems, Inc.
Compiled Wed 12-Jul-17 13:06 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000007802B1AFB900FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.84

-------------------------
Device ID: IND-SW-EDNL_PTTL_PLC.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.90
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: FastEthernet1/8,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 129 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07A00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.90

-------------------------
Device ID: IND-SW-EDNL_SL5.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.56
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 156 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCD600FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.56


Total cdp entries displayed : 3
IND-SW-EDNL_PTTL>

```


## IND-SW-EDNL_PTTL_PLC
```Cisco
IND-SW-EDNL_PTTL_PLC>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
526  IND-S6                           active
560  VLAN0560                         active
574  IND-AnnealingFurnace             active
579  PTTL                             active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5
                                                Fa1/6, Fa1/7
581  PTTL_ACDrives                    active    Fa1/8
582  IND-SL6                          active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_PTTL_PLC>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.90  YES NVRAM  up                    up
Vlan579                192.168.179.100 YES NVRAM  up                    up
Vlan581                192.168.181.150 YES NVRAM  up                    up
Vlan582                192.168.182.150 YES NVRAM  up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  up                    up
FastEthernet1/5        unassigned      YES unset  up                    up
FastEthernet1/6        unassigned      YES unset  up                    up
FastEthernet1/7        unassigned      YES unset  up                    up
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_PTTL_PLC>
IND-SW-EDNL_PTTL_PLC>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_PTTL.hulamin.co.za
                 Gig 1/1           176              S I   IE-3000-8 Fas 1/8
IND-SW-EDNL_PTTL_PLC2.hulamin.co.za
                 Gig 1/2           161              S I   IE-3000-4 Gig 1/1
IND-SW-EDNL_PTTL_PLC>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.70
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): FastEthernet1/8
Holdtime : 170 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.70

-------------------------
Device ID: IND-SW-EDNL_PTTL_PLC2.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.124
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 156 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.0(2)EY3, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2013 by Cisco Systems, Inc.
Compiled Thu 14-Nov-13 13:52 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000000562B857400FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.124
```

## IND-SW-EDNL_SL5
```Cisco
IND-SW-EDNL_SL5>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/4, Fa1/5, Fa1/6, Fa1/7
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL                             active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/2, Fa1/3
591  IND_SL5                          active    Fa1/8
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_SL5>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan501                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.56  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
Vlan591                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  up                    up
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  up                    up
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_SL5>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_PTTL.hulamin.co.za
                 Gig 1/2           146              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_SL4.hulamin.co.za
                 Gig 1/1           128              S I   IE-3000-8 Gig 1/2

Total cdp entries displayed : 2
IND-SW-EDNL_SL5>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_PTTL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.70
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 142 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.70

-------------------------
Device ID: IND-SW-EDNL_SL4.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.55
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 124 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CD0100FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.55


Total cdp entries displayed : 2
IND-SW-EDNL_SL5>


```

## IND-SW-EDNL_SL4
```Cisco
IND-SW-EDNL_SL4>show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
250  IND-250                          active
501  CCL                              active
519  FS14                             active
526  IND-S6                           active
560  VLAN0560                         active
561  VLAN0561                         active    Fa1/1, Fa1/3, Fa1/4, Fa1/5
567  CTTL5_Mgaurd                     active
574  IND-AnnealingFurnace             active
579  PTTL_Network                     active
582  IND-SL6                          active
585  VLAN0585                         active
590  EDPowerMeters                    active    Fa1/2
591  VLAN0591                         active    Fa1/6, Fa1/7, Fa1/8
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL_SL4>show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down
Vlan501                unassigned      YES unset  up                    up
Vlan519                unassigned      YES unset  up                    up
Vlan560                192.168.160.55  YES NVRAM  up                    up
Vlan561                unassigned      YES unset  up                    up
Vlan579                unassigned      YES unset  up                    up
Vlan585                unassigned      YES unset  up                    up
Vlan590                unassigned      YES unset  up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  up                    up
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  up                    up
IND-SW-EDNL_SL4>show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL-SL2.hulamin.co.za
                 Gig 1/1           138              S I   IE-3000-8 Gig 1/1
IND-SW-EDNL_SL5.hulamin.co.za
                 Gig 1/2           129              S I   IE-3000-8 Gig 1/1

Total cdp entries displayed : 2
IND-SW-EDNL_SL4>show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL-SL2.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.54
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 131 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCE700FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.54

-------------------------
Device ID: IND-SW-EDNL_SL5.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.56
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 177 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCD600FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.56


Total cdp entries displayed : 2

```