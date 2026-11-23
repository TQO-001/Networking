# IND-SW-CD-Sub3A

> Source note from the SwitchScribe report of 2026-11-19, kept unchanged as evidence. Current documentation: [[IND-SW-CD-Sub3A]] in Network_24.

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]] · [[03-Neighbour_Groups#Group 1 — Connected switch group|Group 1]]

## Device Info

| Field | Value |
|---|---|
| **Name** | IND-SW-CD-Sub3A |
| **IP Address** | 192.168.160.104 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco IE-3300-8T2S |
| **Total physical ports reported** | 10 |
| **Ports up** | 5 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 6.11s |

## Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa1/1** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa1/2** | Not reported | 562 IND-CESMS_CCTV | 021b.1ba6.5b00 | 021b.1ba6.5b00 | — | — | 1000baseT(FD) | LLDP |
| **Fa1/3** | Not reported | 561 IND-CESMS | axis-e82725132650 | eth0 | 192.168.162.49 | AXIS M3125-LVE Dome Camera 11.11.128 | MAU type - not advertised | LLDP |
| **Fa1/4** | Not reported | 561 IND-CESMS | C7191 | port-001 | 0.0.0.0 | HP HP Elite Tower 800 G9 Desktop PC,,4CE335D0NN | MAU type - not advertised | LLDP |
| **Fa1/4** | Not reported | 561 IND-CESMS | 001b.21f0.9b65 | 001b.21f0.9b65 | — | — | 1000baseT(FD) | LLDP |
| **Fa1/5** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa1/6** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa1/7** | Not reported | 1 default | — | — | — | — | — | — |
| **Fa1/8** | Not reported | 1 default | — | — | — | — | — | — |
| **FastEthernet1/1** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/2** | up | — | axis-e82725132650 | eth0 | 192.168.162.49 | Linux | — | CDP |
| **FastEthernet1/3** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/4** | up | — | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| **FastEthernet1/5** | down | — | — | — | — | — | — | — |
| **FastEthernet1/6** | down | — | — | — | — | — | — | — |
| **FastEthernet1/7** | down | — | — | — | — | — | — | — |
| **FastEthernet1/8** | down | — | — | — | — | — | — | — |
| **Gi1/1** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet1/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet1/2** | up | — | IND-SW-CD_HFM | GigabitEthernet1/2 | 192.168.160.98 | cisco IE-3300-8T2S | — | CDP |

## Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: IND-SW-CD_HFM.hulamin.co.za
Entry address(es): 
  IP address: 192.168.160.98
Platform: cisco IE-3300-8T2S,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 178 sec

Version :
Cisco IOS Software [Gibraltar], IE3x00 Switch Software (IE3x00-UNIVERSALK9-M), Version 16.12.1, RELEASE SOFTWARE (fc3)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Tue 30-Jul-19 11:50 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es): 
  IP address: 192.168.160.98

-------------------------
Device ID: axis-e82725132650
Entry address(es): 
  IP address: 192.168.162.49
Platform: Linux,  Capabilities: Host 
Interface: FastEthernet1/2,  Port ID (outgoing port): eth0
Holdtime : 90 sec

Version :
AXIS M3125-LVE Dome Camera 11.11.128

advertisement version: 2


Total cdp entries displayed : 2
IND-SW-CD-Sub3A#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
C7191               Fa1/4          20         S               port-001
001b.21f0.9b65      Fa1/4          3601                       001b.21f0.9b65
021b.1ba6.5b00      Fa1/4          3601                       021b.1ba6.5b00
axis-e82725132650   Fa1/2          120        S               e827.2513.2650
001b.21f0.9b7d      Fa1/3          3601                       001b.21f0.9b7d

Total entries displayed: 5

IND-SW-CD-Sub3A#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
------------------------------------------------
Local Intf: Fa1/4
Chassis id: c7191
Port id: port-001
Port Description - not advertised
System Name: C7191

System Description: 
HP HP Elite Tower 800 G9 Desktop PC,,4CE335D0NN

Time remaining: 14 seconds
System Capabilities: S
Enabled Capabilities: S
Management Addresses:
    IP: 0.0.0.0
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/4
Chassis id: 001b.21f0.9b65
Port id: 001b.21f0.9b65
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3275 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

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
Local Intf: Fa1/4
Chassis id: 021b.1ba6.5b00
Port id: 021b.1ba6.5b00
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3319 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

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
Local Intf: Fa1/2
Chassis id: e827.2513.2650
Port id: e827.2513.2650
Port Description: eth0
System Name: axis-e82725132650

System Description: 
AXIS M3125-LVE Dome Camera 11.11.128

Time remaining: 119 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: S
Management Addresses:
    IP: 192.168.162.49
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Fa1/3
Chassis id: 001b.21f0.9b7d
Port id: 001b.21f0.9b7d
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3590 seconds
System Capabilities - not advertised
Enabled Capabilities - not advertised
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

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

IND-SW-CD-Sub3A#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/5, Fa1/6, Fa1/7, Fa1/8, Gi1/1
250  IND-250                          active    
560  IND-Management                   active    
561  IND-CESMS                        active    Fa1/1, Fa1/3, Fa1/4
562  IND-CESMS_CCTV                   active    Fa1/2
563  IND-CCL_CESS                     active    
564  IND-CDHotMIl_L1                  active    
565  IND-FoilAnnealing                active    
566  IND-FoilSeparators               active    
567  IND-CTTL5                        active    
568  IND-CNG                          active    
569  IND-CCL2Gauge                    active    
570  CD_A19_Furnace_PLC_system        active    
571  CD_A19_Furnace_HMI_System        active    
572  IND-CCL1Gauge                    active    
573  IND-CNGCCLGAs_Access_PLC         active    
574  IND-AnnealingFurnace             active    
575  CD_EMERGENCY_PowerHMI_PLC        active    
576  CD_EMERGENCY_Power_PLC           active    
577  IND-CNGCDHotlineGAs_Access_PLC   active    
578  CD_A19_Furnace_Server_Access     active    
579  IND-PTTL                         active    
580  IND-Plate_Plant                  active    
581  IND-PTTL_DC_Drives               active    
582  IND-PTTL_AC_Drives               active    
584  LAB_in_the_Office                active    
585  A17_Anealing_Furnace             active    
586  System_Platform_2020             active    
587  Effluent_Plant                   active    
588  RG9                              active    
589  CD_PowerMeter                    active    
590  ED_PowerMeter                    active    
591  IND-SL5                          active    
593  Ignition                         active    
595  IND-Labs                         active    
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-CD-Sub3A#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  administratively down down    
Vlan560                192.168.160.104 YES NVRAM  up                    up      
Vlan564                192.168.164.150 YES manual up                    up      
FastEthernet1/1        unassigned      YES unset  up                    up      
FastEthernet1/2        unassigned      YES unset  up                    up      
FastEthernet1/3        unassigned      YES unset  up                    up      
FastEthernet1/4        unassigned      YES unset  up                    up      
FastEthernet1/5        unassigned      YES unset  down                  down    
FastEthernet1/6        unassigned      YES unset  down                  down    
FastEthernet1/7        unassigned      YES unset  down                  down    
FastEthernet1/8        unassigned      YES unset  down                  down    
GigabitEthernet1/1     unassigned      YES unset  down                  down    
GigabitEthernet1/2     unassigned      YES unset  up                    up      
IND-SW-CD-Sub3A#
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

IND-SW-CD-Sub3A uptime is 51 weeks, 2 days, 5 hours, 47 minutes
System returned to ROM by power-on
System image file is "flash:/ies-lanbasek9-mz.152-7.E2/ies-lanbasek9-mz.152-7.E2.bin"
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
Processor board ID FOC2002Z4PD
Last reset from power-on
3 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:AF:1F:D0:A7:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20026UND
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2002Z4PD
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x68D0A780
SKU Brand Name                  : Cisco
cesium fpga version             : 2017.9.14
Device Manager Package          : English


Switch Ports Model                     SW Version            SW Image                 
------ ----- -----                     ----------            ----------               
*    1 10    IE-3000-8TC               15.2(7)E2             IES-LANBASEK9-M          


Configuration register is 0xF

IND-SW-CD-Sub3A#
```
