# Unclassified-192.168.160.105

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[Unclassified-192.168.160.105]] in Network_16.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.105 |
| **IP Address** | 192.168.160.105 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 12 |
| **Ports up** | 2 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.75s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi0/1** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Gi0/10** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi0/12** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi0/2** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Gi0/3** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Gi0/4** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Gi0/5** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Gi0/6** | Not reported | 562 IND-CESMS_CCTV | — | — | — | — | — | — |
| **Gi0/7** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi0/8** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **Gi0/9** | Not reported | 561 CESMS | — | — | — | — | — | — |
| **GigabitEthernet0/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet0/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/11** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/7 | 192.168.1.1 | cisco C9500-48Y4C | 1000baseT(FD) | CDP/LLDP |
| **GigabitEthernet0/12** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/3** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/4** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/5** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/9** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet0/11,  Port ID (outgoing port): TwentyFiveGigE1/0/7
Holdtime : 153 sec

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
IND-SW-EDNL-FM_CMPM#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
ind-Core1-MSR.plant.Gi0/11         120        B,R             Twe1/0/7

Total entries displayed: 1

IND-SW-EDNL-FM_CMPM#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi0/11
Chassis id: e80a.b9f1.93a0
Port id: Twe1/0/7
Port Description: TwentyFiveGigE1/0/7
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description: 
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 105 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.1.1
Auto Negotiation - not supported
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 1

IND-SW-EDNL-FM_CMPM#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi0/12
250  IND-250                          active    
526  IND-S6                           active    
560  Management                       active    
561  CESMS                            active    Gi0/7, Gi0/8, Gi0/9, Gi0/10
562  IND-CESMS_CCTV                   active    Gi0/1, Gi0/2, Gi0/3, Gi0/4, Gi0/5, Gi0/6
582  IND-SL6                          active    
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL-FM_CMPM#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan5                  192.168.1.2     YES NVRAM  down                  down    
Vlan560                192.168.160.105 YES NVRAM  up                    up      
GigabitEthernet0/1     unassigned      YES unset  up                    up      
GigabitEthernet0/2     unassigned      YES unset  down                  down    
GigabitEthernet0/3     unassigned      YES unset  down                  down    
GigabitEthernet0/4     unassigned      YES unset  down                  down    
GigabitEthernet0/5     unassigned      YES unset  down                  down    
GigabitEthernet0/6     unassigned      YES unset  down                  down    
GigabitEthernet0/7     unassigned      YES unset  down                  down    
GigabitEthernet0/8     unassigned      YES unset  down                  down    
GigabitEthernet0/9     unassigned      YES unset  down                  down    
GigabitEthernet0/10    unassigned      YES unset  down                  down    
GigabitEthernet0/11    unassigned      YES unset  up                    up      
GigabitEthernet0/12    unassigned      YES unset  down                  down    
IND-SW-EDNL-FM_CMPM#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, C2960CX Software (C2960CX-UNIVERSALK9-M), Version 15.2(7)E7, RELEASE SOFTWARE (fc10)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2022 by Cisco Systems, Inc.
Compiled Thu 22-Sep-22 08:53 by mcpre

ROM: Bootstrap program is C2960CX boot loader
BOOTLDR: C2960CX Boot Loader (C2960CX-HBOOT-M) Version 15.2(6r)E, RELEASE SOFTWARE (fc1)

IND-SW-EDNL-FM_CMPM uptime is 1 year, 7 weeks, 6 days, 7 hours, 11 minutes
System returned to ROM by power-on
System restarted at 07:01:17 UTC Thu Sep 25 2025
System image file is "flash:/c2960cx-universalk9-mz.152-7.E7/c2960cx-universalk9-mz.152-7.E7.bin"
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

cisco WS-C2960CX-8PC-L (APM86XXX) processor (revision L0) with 524288K bytes of memory.
Processor board ID FOC2233T180
Last reset from power-on
3 Virtual Ethernet interfaces
12 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

512K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:B1:E3:E1:7F:00
Motherboard assembly number     : 73-100862-04
Power supply part number        : 341-0675-02
Motherboard serial number       : FOC22317U08
Power supply serial number      : LIT22302SUD
Model revision number           : L0
Motherboard revision number     : B0
Model number                    : WS-C2960CX-8PC-L
System serial number            : FOC2233T180
Top Assembly Part Number        : 68-100568-01
Top Assembly Revision Number    : C0
Version ID                      : V03
CLEI Code Number                : CMMT410BRB
Hardware Board Revision Number  : 0x09


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 12    WS-C2960CX-8PC-L          15.2(7)E7             C2960CX-UNIVERSALK9-M    


Configuration register is 0xF

IND-SW-EDNL-FM_CMPM#
```
