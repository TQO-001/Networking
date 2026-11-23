# IND-SW-CCL_CESS

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CCL_CESS]] in Network_02.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CCL_CESS |
| **IP Address** | 192.168.160.23 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco WS-C2960X-48TS-L |
| **Total physical ports reported** | 18 |
| **Ports up** | 11 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.35s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/10** | Not reported | 501 IND-CCL2Network | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi2/1** | Not reported | 590 EDPowermeters | — | — | — | — | — | — |
| **Gi2/2** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi2/3** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi2/4** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi2/5** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi2/6** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi2/7** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **Gi2/8** | Not reported | 563 CCL-CES | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | IND-SW_CCL2_CompRoom | GigabitEthernet1/0/50 | 192.168.160.22 | cisco WS-C2960X-48TS-L | — | CDP |
| **GigabitEthernet1/10** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL_CCLServiceTunnel | GigabitEthernet1/1 | 192.168.160.42 | cisco IE-3000-8TC | — | CDP |
| **GigabitEthernet1/3** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/4** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/9** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet2/3** | down | — | — | — | — | — | — | — |
| **GigabitEthernet2/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet2/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet2/8** | down | — | — | — | — | — | — | — |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CCL2_CompRoom.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.22
Platform: cisco WS-C2960X-48TS-L,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/0/50
Holdtime : 179 sec

Version :
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.0(2a)EX5, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Mon 16-Feb-15 08:16 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000188B45FFC980FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.22

-------------------------
Device ID: IND-SW-EDNL_CCLServiceTunnel.hulamin.co.
Entry address(es): 
  IP address: 192.168.160.42
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 138 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(7)E2, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Sun 15-Mar-20 07:11 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.42


Total cdp entries displayed : 2
IND-SW-CCL_CESS#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
% LLDP is not enabled
IND-SW-CCL_CESS#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
% LLDP is not enabled
IND-SW-CCL_CESS#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    
250  IND-250                          active    
501  IND-CCL2Network                  active    Gi1/10
526  IND-S6                           active    
560  management                       active    
561  VLAN0561                         active    
562  IND-CCTV                         active    
563  CCL-CES                          active    Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi2/2, Gi2/3, Gi2/4, Gi2/5, Gi2/6, Gi2/7, Gi2/8
573  VLAN0573                         active    
582  IND-SL6                          active    
590  EDPowermeters                    active    Gi2/1
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CCL_CESS#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan501                unassigned      YES unset  up                    up      
Vlan560                192.168.160.23  YES NVRAM  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  down                  down    
GigabitEthernet1/4     unassigned      YES unset  down                  down    
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  up                    up      
GigabitEthernet1/8     unassigned      YES unset  up                    up      
GigabitEthernet1/9     unassigned      YES unset  up                    up      
GigabitEthernet1/10    unassigned      YES unset  up                    up      
GigabitEthernet2/1     unassigned      YES unset  up                    up      
GigabitEthernet2/2     unassigned      YES unset  down                  down    
GigabitEthernet2/3     unassigned      YES unset  down                  down    
GigabitEthernet2/4     unassigned      YES unset  up                    up      
GigabitEthernet2/5     unassigned      YES unset  up                    up      
GigabitEthernet2/6     unassigned      YES unset  up                    up      
GigabitEthernet2/7     unassigned      YES unset  down                  down    
GigabitEthernet2/8     unassigned      YES unset  down                  down    
IND-SW-CCL_CESS#
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
IND-SW-CCL_CESS uptime is 1 year, 40 weeks, 2 days, 10 hours, 33 minutes
Uptime for this control processor is 1 year, 40 weeks, 2 days, 10 hours, 34 minutes
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
Processor board ID FOC2429V05G
3 Virtual Ethernet interfaces
18 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
2025540K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : cc:7f:75:99:ae:c0
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC24283903
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3300-8T2S
System Serial Number               : FOC2429V05G
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x2E99AEC0
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-CCL_CESS#
```
