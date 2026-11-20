# Unclassified-192.168.160.116

> Cluster: Cluster_01  
> Classification: provisional LLDP/CDP discovery grouping. Confirm physical department/location before renaming or moving.

#### Unclassified-192.168.160.116

##### Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.116 |
| **IP Address** | 192.168.160.116 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3000-8TC |
| **Total physical ports reported** | 10 |
| **Ports up** | 5 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.34s |

##### Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Gi1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/10** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 590 EDPowermeters | — | — | — | — | — | — |
| **Gi1/4** | Not reported | 590 EDPowermeters | — | — | — | — | — | — |
| **Gi1/5** | Not reported | 590 EDPowermeters | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 590 EDPowermeters | — | — | — | — | — | — |
| **Gi1/7** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 561 cesms | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 561 cesms | — | — | — | — | — | — |
| **GigabitEthernet1/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | IND-SW-EDNL_SubStationM | GigabitEthernet1/1 | 192.168.41.111 | cisco IE-3000-8TC | — | CDP |
| **GigabitEthernet1/3** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/6** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/7** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/8** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/9** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |

##### Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_SubStationM.hulamin.co.za
Entry address(es): 
  IP address: 192.168.41.111
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 179 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF00000000000008CCA7C07680FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.41.111


Total cdp entries displayed : 1
IND-SW-EDNL_CompH6#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
% LLDP is not enabled
IND-SW-EDNL_CompH6#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
% LLDP is not enabled
IND-SW-EDNL_CompH6#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1
250  IND-250                          active    
560  management                       active    
561  cesms                            active    Gi1/7, Gi1/8, Gi1/9, Gi1/10
590  EDPowermeters                    active    Gi1/3, Gi1/4, Gi1/5, Gi1/6
593  Ignition                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL_CompH6#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.116 YES NVRAM  up                    up      
GigabitEthernet1/1     unassigned      YES unset  down                  down    
GigabitEthernet1/2     unassigned      YES unset  up                    up      
GigabitEthernet1/3     unassigned      YES unset  down                  down    
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  down                  down    
GigabitEthernet1/6     unassigned      YES unset  down                  down    
GigabitEthernet1/7     unassigned      YES unset  up                    up      
GigabitEthernet1/8     unassigned      YES unset  up                    up      
GigabitEthernet1/9     unassigned      YES unset  up                    up      
GigabitEthernet1/10    unassigned      YES unset  down                  down    
IND-SW-EDNL_CompH6#
```

**`show version`**

```Cisco
show version
Cisco IOS XE Software, Version 16.12.03
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.3, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Mon 09-Mar-20 20:30 by mcpre


Cisco IOS-XE software, Copyright (c) 2005-2020 by cisco Systems, Inc.
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
IND-SW-EDNL_CompH6 uptime is 7 weeks, 1 day, 1 hour, 28 minutes
Uptime for this control processor is 7 weeks, 1 day, 1 hour, 29 minutes
System returned to ROM by power-on
System image file is "flash:ie3x00-universalk9.16.12.03.SPA.bin"
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

cisco IE-3200-8T2S (ARM) processor (revision V04) with 900129K/6147K bytes of memory.
Processor board ID FCW2450P3M1
2 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
1958872K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.
0K bytes of WebUI ODM Files at webui:.

Base Ethernet MAC Address          : 54:9f:c6:5f:f5:e0
Motherboard Assembly Number        : 73-101446-09
Motherboard Serial Number          : FOC24475A33
Model Revision Number              : V04
Motherboard Revision Number        : 9
Model Number                       : IE-3200-8T2S
System Serial Number               : FCW2450P3M1
Top Assembly Part Number           : 068-101629-04
Top Assembly Revision Number       : C0
System FPGA version                : 0.81.2
CIP Serial Number                  : 0x245FF5E0
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-EDNL_CompH6#
```

---
