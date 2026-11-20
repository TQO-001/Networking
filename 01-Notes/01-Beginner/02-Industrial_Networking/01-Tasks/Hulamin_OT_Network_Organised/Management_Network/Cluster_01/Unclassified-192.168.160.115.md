# Unclassified-192.168.160.115

> Cluster: Cluster_01  
> Classification: provisional LLDP/CDP discovery grouping. Confirm physical department/location before renaming or moving.

#### Unclassified-192.168.160.115

##### Device Info

| Field | Value |
|---|---|
| **Name** | Unclassified-192.168.160.115 |
| **IP Address** | 192.168.160.115 |
| **Vendor profile** | cisco_ios |
| **Model** | cisco C9500-48Y4C |
| **Total physical ports reported** | 10 |
| **Ports up** | 1 |
| **Location** | Not documented |
| **Transport** | SSH |
| **Connection port** | 22 |
| **Collection status** | success |
| **Connection method** | Netmiko SSH |
| **Collection time** | 4.83s |

##### Connected Ports / Discovered Neighbours

| Local Port | State | VLAN | Connected Device | Remote Port | Remote IP | Remote Platform | Media | Seen By |
|---|---|---|---|---|---|---|---|---|
| **Fa0/1** | Not reported | 501 IND-CCL | — | — | — | — | — | — |
| **Fa0/2** | Not reported | 595 IND-Test | — | — | — | — | — | — |
| **Fa0/3** | Not reported | 593 Ignition | — | — | — | — | — | — |
| **Fa0/4** | Not reported | 515 IND-FS15 | — | — | — | — | — | — |
| **Fa0/5** | Not reported | 250 VLAN0250 | — | — | — | — | — | — |
| **Fa0/6** | Not reported | 561 IND-CESMS | — | — | — | — | — | — |
| **Fa0/7** | Not reported | 250 VLAN0250 | — | — | — | — | — | — |
| **Fa0/8** | Not reported | 1 default | — | — | — | — | — | — |
| **FastEthernet0/1** | down | — | — | — | — | — | — | — |
| **FastEthernet0/2** | down | — | — | — | — | — | — | — |
| **FastEthernet0/3** | down | — | — | — | — | — | — | — |
| **FastEthernet0/4** | down | — | — | — | — | — | — | — |
| **FastEthernet0/5** | down | — | — | — | — | — | — | — |
| **FastEthernet0/6** | down | — | — | — | — | — | — | — |
| **FastEthernet0/7** | down | — | — | — | — | — | — | — |
| **FastEthernet0/8** | down | — | — | — | — | — | — | — |
| **Gi0/1** | Not reported | 1 default | — | — | — | — | — | — |
| **GigabitEthernet0/1** | down | — | — | — | — | — | — | — |
| **GigabitEthernet0/2** | up | — | ind-Core1-MSR.plant.hulamin.co.za | TwentyFiveGigE1/0/8 | 192.168.1.1 | cisco C9500-48Y4C | — | CDP |

##### Raw CLI Output

**`show cdp neighbors detail`**

```Cisco
show cdp neighbors detail
-------------------------
Device ID: ind-Core1-MSR.plant.hulamin.co.za
Entry address(es): 
  IP address: 192.168.1.1
Platform: cisco C9500-48Y4C,  Capabilities: Router Switch IGMP 
Interface: GigabitEthernet0/2,  Port ID (outgoing port): TwentyFiveGigE1/0/8
Holdtime : 178 sec

Version :
Cisco IOS Software [Cupertino], Catalyst L3 Switch Software (CAT9K_IOSXE), Version 17.9.4, RELEASE SOFTWARE (fc5)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2023 by Cisco Systems, Inc.
Compiled Wed 26-Jul-23 10:26 by mcpre

advertisement version: 2
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Power Available TLV:

    Power request id: 0, Power management id: 0, Power available: 0, Power management level: 0
Management address(es): 
  IP address: 192.168.1.1

IND-SW-Creche#
```

**`show lldp neighbors`**

```Cisco
show lldp neighbors
% LLDP is not enabled
IND-SW-Creche#
```

**`show lldp neighbors detail`**

```Cisco
show lldp neighbors detail
% LLDP is not enabled
IND-SW-Creche#
```

**`show vlan brief`**

```Cisco
show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/8, Gi0/1
14   VLAN0014                         active    
250  VLAN0250                         active    Fa0/5, Fa0/7
501  IND-CCL                          active    Fa0/1
514  S4                               active    
515  IND-FS15                         active    Fa0/4
519  fs14                             active    
525  IND-S5                           active    
560  IND-Management                   active    
561  IND-CESMS                        active    Fa0/6
562  IND-CESMS_CCTV                   active    
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
593  Ignition                         active    Fa0/3
595  IND-Test                         active    Fa0/2
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup 
1004 fddinet-default                  act/unsup 
1005 trnet-default                    act/unsup 
IND-SW-Creche#
```

**`show ip interface brief`**

```Cisco
show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up      
Vlan560                192.168.160.115 YES NVRAM  up                    up      
FastEthernet0/1        unassigned      YES unset  down                  down    
FastEthernet0/2        unassigned      YES unset  down                  down    
FastEthernet0/3        unassigned      YES unset  down                  down    
FastEthernet0/4        unassigned      YES unset  down                  down    
FastEthernet0/5        unassigned      YES unset  down                  down    
FastEthernet0/6        unassigned      YES unset  down                  down    
FastEthernet0/7        unassigned      YES unset  down                  down    
FastEthernet0/8        unassigned      YES unset  down                  down    
GigabitEthernet0/1     unassigned      YES unset  down                  down    
GigabitEthernet0/2     unassigned      YES unset  up                    up      
IND-SW-Creche#
```

**`show version`**

```Cisco
show version
Cisco IOS Software, C2960C Software (C2960c405-UNIVERSALK9-M), Version 15.0(2)SE8, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2015 by Cisco Systems, Inc.
Compiled Thu 14-May-15 03:20 by prod_rel_team

ROM: Bootstrap program is C2960C boot loader
BOOTLDR: C2960C Boot Loader (C2960c405-HBOOT-M) Version 12.2(55r)EX9, RELEASE SOFTWARE (fc1)

IND-SW-Creche uptime is 8 weeks, 6 days, 5 hours, 47 minutes
System returned to ROM by power-on
System image file is "flash:/c2960c405-universalk9-mz.150-2.SE8/c2960c405-universalk9-mz.150-2.SE8.bin"


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

cisco WS-C2960C-8TC-L (PowerPC405) processor (revision N0) with 131072K bytes of memory.
Processor board ID FOC2047Z42U
Last reset from power-on
2 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 08:CC:A7:40:E9:00
Motherboard assembly number     : 73-13530-04
Power supply part number        : 341-0208-03
Motherboard serial number       : FOC20473M0R
Power supply serial number      : LIT20382U3T
Model revision number           : N0
Motherboard revision number     : A0
Model number                    : WS-C2960C-8TC-L
System serial number            : FOC2047Z42U
Top Assembly Part Number        : 800-35230-03
Top Assembly Revision Number    : C0
Version ID                      : V03
CLEI Code Number                : CMMGB00ARC
Hardware Board Revision Number  : 0x01


Switch Ports Model              SW Version            SW Image                 
------ ----- -----              ----------            ----------               
*    1 10    WS-C2960C-8TC-L    15.0(2)SE8            C2960c405-UNIVERSALK9-M  


Configuration register is 0xF

IND-SW-Creche#
```

---
