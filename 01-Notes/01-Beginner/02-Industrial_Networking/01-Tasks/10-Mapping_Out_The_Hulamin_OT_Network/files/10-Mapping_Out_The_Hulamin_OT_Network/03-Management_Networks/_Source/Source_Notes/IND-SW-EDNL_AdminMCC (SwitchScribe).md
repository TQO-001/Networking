# IND-SW-EDNL_AdminMCC

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-EDNL_AdminMCC]] in Network_11.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-EDNL_AdminMCC |
| **IP Address** | 192.168.160.77 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 6 |
| **Ports up** | 4 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 6.06s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 590 EDPowerMeterMngt | — | — | — | — | — | — |
| **Fa1/3** | Not reported | 590 EDPowerMeterMngt | — | — | — | — | — | — |
| **Fa1/4** | Not reported | 561 VLAN0561 | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | down | — | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/1 | 192.168.1.1 | cisco C9500-48Y4C | MAU type - not advertised | CDP/LLDP |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE1/0/1
Holdtime : 133 sec

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


Total cdp entries displayed : 1
IND-SW-EDNL_AdminMCC#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
ind-Core1-MSR.plant.Gi1/1          120        B,R             Twe1/0/1

Total entries displayed: 1

IND-SW-EDNL_AdminMCC#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: e80a.b9f1.93a0
Port id: Twe1/0/1
Port Description: TwentyFiveGigE1/0/1
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description: 
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 103 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.1.1
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised


Total entries displayed: 1

IND-SW-EDNL_AdminMCC#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active    
526  IND-S6                           active    
560  VLAN0560                         active    
561  VLAN0561                         active    Fa1/1, Fa1/4
582  IND-SL6                          active    
590  EDPowerMeterMngt                 active    Fa1/2, Fa1/3
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_AdminMCC#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan501                unassigned      YES unset  down                  down    
Vlan560                192.168.160.77  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  up                    up      
Vlan562                unassigned      YES unset  down                  down    
Vlan590                unassigned      YES unset  up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  administratively down down    
IND-SW-EDNL_AdminMCC#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sun 15-Mar-20 07:11 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

IND-SW-EDNL_AdminMCC uptime is 49 weeks, 6 days, 23 hours, 34 minutes
System returned to ROM by power-on
System restarted at 15:16:15 ZA Thu Dec 4 2025
System image file is "flash:ies-lanbasek9-mz.152-7.E2/ies-lanbasek9-mz.152-7.E2.bin"
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

cisco IE-3000-4TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2033Z1WX
Last reset from power-on
6 Virtual Ethernet interfaces
4 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 2C:0B:E9:FE:FF:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20327TR5
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-4TC
System serial number            : FOC2033Z1WX
Top Assembly Part Number        : 800-28494-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFD00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x63FEFF00
SKU Brand Name                  : Cisco
cesium fpga version             : 2017.9.14
Device Manager Package          : English


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 6     IE-3000-4TC               15.2(7)E2             IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-EDNL_AdminMCC#
```
