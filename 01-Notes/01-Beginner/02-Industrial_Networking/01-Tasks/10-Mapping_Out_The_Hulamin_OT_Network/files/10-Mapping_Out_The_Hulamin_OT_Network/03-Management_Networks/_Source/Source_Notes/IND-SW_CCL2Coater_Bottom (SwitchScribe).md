# IND-SW_CCL2Coater_Bottom

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW_CCL2Coater_Bottom]] in Network_02.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW_CCL2Coater_Bottom |
| **IP Address** | 192.168.160.18 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco WS-C2960X-24TS-L |
| **Total physical ports reported** | 10 |
| **Ports up** | 6 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.31s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/10** | Not reported | 593 ignition | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 593 ignition | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 501 VLAN0501 | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 593 ignition | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW_CCL2_OS1 | GigabitEthernet1/0/26 | 192.168.160.21 | cisco WS-C2960X-24TS-L | 1000baseX(FD) | CDP/LLDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/9** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CCL2_OS1.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.21
Platform: cisco WS-C2960X-24TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/26
Holdtime : 144 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.0(2)EX5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2014 by Cisco Systems, Inc.
Compiled Fri 21-Feb-14 05:54 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF0000000000006CFA8958CE00FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.21


Total cdp entries displayed : 1
IND-SW-CCL2_entry#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-SW-CCL2_OS1.hulaGi1/1          120        B               Gi1/0/26

Total entries displayed: 1

IND-SW-CCL2_entry#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/1
Chassis id: 6cfa.8958.ce00
Port id: Gi1/0/26
Port Description: GigabitEthernet1/0/26
System Name: IND-SW-CCL2_OS1.hulamin.co.za

System Description: 
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.0(2)EX5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2014 by Cisco Systems, Inc.
Compiled Fri 21-Feb-14 05:54 by prod_rel_team

Time remaining: 103 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.21
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1


Total entries displayed: 1

IND-SW-CCL2_entry#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
250  IND-250                          active    
501  VLAN0501                         active    Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8
526  IND-S6                           active    
560  SwitchMngtVlan                   active    
582  IND-SL6                          active    
593  ignition                         active    Gi1/3, Gi1/9, Gi1/10
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CCL2_entry#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.18  YES NVRAM  up                    up      
Vlan561                unassigned      YES unset  down                  down    
Vlan600                unassigned      YES unset  down                  down    
Vlan700                unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
GigabitEthernet1/3     unassigned      YES unset  down                  down    
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  up                    up      
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  up                    up      
GigabitEthernet1/9     unassigned      YES unset  up                    up      
GigabitEthernet1/10    unassigned      YES unset  down                  down    
IND-SW-CCL2_entry#
```

**`show version`**

```Cisco
show version
Cisco IOS XE Software, Version 16.12.01
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Tue 30-Jul-19 11:50 by mcpre


Cisco IOS-XE software, Copyright (c) 2005-2019 by cisco Systems, Inc.
All rights reserved.  Certain components of Cisco IOS-XE software are
licensed under the GNU General Public License ("GPL") Version 2.0.  The
software code licensed under GPL Version 2.0 is free software that comes
with ABSOLUTELY NO WARRANTY.  You can redistribute and/or modify such
GPL code under the terms of GPL Version 2.0.  For more details, see the
documentation or "License Notice" file accompanying the IOS-XE software,
or the applicable URL provided on the flyer accompanying the IOS-XE
software.


ROM: IOS-XE ROMMON
BOOTLDR: Version 4.1.3 [RELEASE SOFTWARE] crashkernel=64M
IND-SW-CCL2_entry uptime is 9 weeks, 2 hours, 27 minutes
Uptime for this control processor is 9 weeks, 2 hours, 28 minutes
System returned to ROM by power-on
System image file is "flash:ie3x00-universalk9.16.12.01.SPA.bin"
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


Technology Package License Information: 

------------------------------------------------------------------------------
Technology-package                                     Technology-package
Current                        Type                       Next reboot  
------------------------------------------------------------------------------
network-essentials  	Smart License                 	 network-essentials  
None                	Subscription Smart License    	 None                          


Smart Licensing Status: UNREGISTERED/No Licenses in Use

cisco IE-3300-8T2S (ARM) processor (revision V04) with 899826K/6147K bytes of memory.
Processor board ID FOC2429V05R
5 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
2025540K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : cc:7f:75:99:af:e0
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC242839GZ
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3300-8T2S
System Serial Number               : FOC2429V05R
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x2E99AFE0
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CCL2_entry#
```
