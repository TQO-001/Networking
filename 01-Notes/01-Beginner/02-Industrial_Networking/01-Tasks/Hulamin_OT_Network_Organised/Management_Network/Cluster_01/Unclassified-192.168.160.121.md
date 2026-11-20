# Unclassified-192.168.160.121

> Cluster: Cluster_01  
> Classification: provisional LLDP/CDP discovery grouping. Confirm physical department/location before renaming or moving.

#### Unclassified-192.168.160.121

##### Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.121 |
| **IP Address** | 192.168.160.121 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 10 |
| **Ports up** | 5 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.31s |

##### Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Ap1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/1** | Not reported | — | IND-INS-5982 | 001b.21f0.9b5e | — | — | 1000baseT(FD) | LLDP |
| **Gi1/10** | Not reported | 1 default | — | — | — | — | — | — |
| **Gi1/2** | Not reported | 595 LABS | — | — | — | — | — | — |
| **Gi1/3** | Not reported | 595 LABS | 1cee.c944.ff58 | 1cee.c944.ff58 | — | — | 1000baseT(FD) | LLDP |
| **Gi1/4** | Not reported | 595 LABS | c8d9.d202.d2f2 | c8d9.d202.d2f2 | — | — | 1000baseT(FD) | LLDP |
| **Gi1/5** | Not reported | 595 LABS | — | — | — | — | — | — |
| **Gi1/6** | Not reported | 595 LABS | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/27 | 192.168.1.1 | Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5) | 1000baseX(FD) | LLDP |
| **Gi1/7** | Not reported | 595 LABS | — | — | — | — | — | — |
| **Gi1/8** | Not reported | 595 LABS | — | — | — | — | — | — |
| **Gi1/9** | Not reported | 595 LABS | — | — | — | — | — | — |
| **GigabitEthernet1/1** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/27 | 192.168.1.1 | cisco C9500-48Y4C | — | CDP |
| **GigabitEthernet1/10** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/5** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/6** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **GigabitEthernet1/7** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/8** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/9** | down | — | — | — | — | — | — | — |

##### Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/1,  Port ID (outgoing port): TwentyFiveGigE1/0/27
Holdtime : 138 sec

Version :
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

advertisement version: 2
Peer Source MAC: e80a.b9f1.93bb
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.1.1


Total cdp entries displayed : 1
IND-SW-EDNL-Lab#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
IND-INS-5982        Gi1/5          3601                       001b.21f0.9b5e
ind-Core1-MSR.plant.Gi1/1          120        B,R             Twe1/0/27
1cee.c944.ff58      Gi1/6          3601                       1cee.c944.ff58
c8d9.d202.d2f2      Gi1/3          3601                       c8d9.d202.d2f2
90b1.1c83.48be      Gi1/4          3601                       90b1.1c83.48be

Total entries displayed: 5

IND-SW-EDNL-Lab#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Gi1/5
Chassis id: IND-INS-5982
Port id: 001b.21f0.9b5e
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2737 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised
Peer Source MAC: 001b.21f0.9b5e

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities: 
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised

------------------------------------------------
Local Intf: Gi1/1
Chassis id: e80a.b9f1.93a0
Port id: Twe1/0/27
Port Description: TwentyFiveGigE1/0/27
System Name: ind-Core1-MSR.plant.hulamin.co.za

System Description: 
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

Time remaining: 113 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    IP: 192.168.1.1
Auto Negotiation - not supported
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1
Peer Source MAC: e80a.b9f1.93bb

------------------------------------------------
Local Intf: Gi1/6
Chassis id: 1cee.c944.ff58
Port id: 1cee.c944.ff58
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3576 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised
Peer Source MAC: 1cee.c944.ff58

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities: 
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised

------------------------------------------------
Local Intf: Gi1/3
Chassis id: c8d9.d202.d2f2
Port id: c8d9.d202.d2f2
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3376 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised
Peer Source MAC: c8d9.d202.d2f2

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities: 
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised

------------------------------------------------
Local Intf: Gi1/4
Chassis id: 90b1.1c83.48be
Port id: 90b1.1c83.48be
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3506 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised
Peer Source MAC: 90b1.1c83.48be

MED Information:

    MED Codes:
          (NP) Network Policy, (LI) Location Identification
          (PS) Power Source Entity, (PD) Power Device
          (IN) Inventory

    Inventory information - not advertised
    Capabilities: 
    Device type: Endpoint Class I
    Network Policies - not advertised
    Power requirements - not advertised
    Location - not advertised


Total entries displayed: 5

IND-SW-EDNL-Lab#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/10, Ap1/1
250  IND-250                          active    
501  VLAN0501                         active    
560  management                       active    
561  cesms                            active    
590  EDPowermeters                    active    
593  Ignition                         active    
595  LABS                             active    Gi1/2, Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-EDNL-Lab#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan60                 unassigned      YES unset  down                  down    
Vlan501                unassigned      YES unset  up                    up      
Vlan560                192.168.160.121 YES NVRAM  up                    up      
Vlan595                unassigned      YES unset  up                    up      
GigabitEthernet1/1     unassigned      YES unset  up                    up      
GigabitEthernet1/2     unassigned      YES unset  down                  down    
GigabitEthernet1/3     unassigned      YES unset  up                    up      
GigabitEthernet1/4     unassigned      YES unset  up                    up      
GigabitEthernet1/5     unassigned      YES unset  up                    up      
GigabitEthernet1/6     unassigned      YES unset  up                    up      
GigabitEthernet1/7     unassigned      YES unset  down                  down    
GigabitEthernet1/8     unassigned      YES unset  down                  down    
GigabitEthernet1/9     unassigned      YES unset  down                  down    
GigabitEthernet1/10    unassigned      YES unset  down                  down    
AppGigabitEthernet1/1  unassigned      YES unset  up                    up      
IND-SW-EDNL-Lab#
```

**`show version`**

```Cisco
show version
Cisco IOS XE Software, Version 17.09.05c
Cisco IOS Software [Cupertino], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 17.9.5c, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2024 by Cisco Systems, Inc.
Compiled Fri 12-Jul-24 17:41 by mcpre


Cisco IOS-XE software, Copyright (c) 2005-2024 by cisco Systems, Inc.
All rights reserved.  Certain components of Cisco IOS-XE software are
licensed under the GNU General Public License ("GPL") Version 2.0.  The
software code licensed under GPL Version 2.0 is free software that comes
with ABSOLUTELY NO WARRANTY.  You can redistribute and/or modify such
GPL code under the terms of GPL Version 2.0.  For more details, see the
documentation or "License Notice" file accompanying the IOS-XE software,
or the applicable URL provided on the flyer accompanying the IOS-XE
software.


ROM: IOS-XE ROMMON
BOOTLDR: Version 7.1.14 [RELEASE SOFTWARE] crashkernel=64M
IND-SW-EDNL-Lab uptime is 49 weeks, 6 days, 23 hours, 50 minutes
Uptime for this control processor is 49 weeks, 6 days, 23 hours, 52 minutes
System returned to ROM by power-on
System image file is "flash:ie3x00-universalk9.17.09.05c.SPA.bin"
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


Smart Licensing Status: Smart Licensing Using Policy

cisco IE-3300-8P2S (ARM) processor (revision V07) with 635838K/6147K bytes of memory.
Processor board ID FCW2841Y0AN
5 Virtual Ethernet interfaces
10 Gigabit Ethernet interfaces
32768K bytes of non-volatile configuration memory.
3963756K bytes of physical memory.
523264K bytes of crashinfo at crashinfo:.
1684480K bytes of Flash at flash:.

Base Ethernet MAC Address          : 28:b5:91:d5:4f:80
Motherboard Assembly Number        : 73-101289-12
Motherboard Serial Number          : FOC28391UPZ
Model Revision Number              : V07
Motherboard Revision Number        : C
Model Number                       : IE-3300-8P2S
System Serial Number               : FCW2841Y0AN
Top Assembly Part Number           : 68-101577-07
Top Assembly Revision Number       : A2
System FPGA version                : 0.89.2
CIP Serial Number                  : 0xE2D54F80
SKU Brand Name                     : Cisco


Configuration register is 0x102

IND-SW-EDNL-Lab#
```

---
