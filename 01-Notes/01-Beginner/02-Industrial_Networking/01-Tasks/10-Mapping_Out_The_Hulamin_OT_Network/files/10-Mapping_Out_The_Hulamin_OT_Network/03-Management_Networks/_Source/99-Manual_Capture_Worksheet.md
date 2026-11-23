# IND-SW_ColdMillsRG (192.168.160.4)
```Cisco
IND-SW_ColdMillsRG>terminal length 0
IND-SW_ColdMillsRG>enable
Password:
IND-SW_ColdMillsRG#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES NVRAM  up                    up
Vlan560                192.168.160.4   YES NVRAM  up                    up
Vlan561                unassigned      YES NVRAM  up                    up
Vlan588                unassigned      YES NVRAM  up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  up                    up
FastEthernet1/3        unassigned      YES unset  up                    up
FastEthernet1/4        unassigned      YES unset  down                  down
FastEthernet1/5        unassigned      YES unset  down                  down
FastEthernet1/6        unassigned      YES unset  down                  down
FastEthernet1/7        unassigned      YES unset  down                  down
FastEthernet1/8        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW_ColdMillsRG#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/2
501  IND-CCL                          active
560  IND-Management                   active
561  IND-CESMS                        active
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
588  RG9                              active    Fa1/1, Fa1/2, Fa1/3, Fa1/4, Fa1/5, Fa1/6, Fa1/7, Fa1/8
589  CD_PowerMeter                    active
590  ED_PowerMeter                    active
591  IND-SL5                          active
593  Ignition                         active
595  IND-Labs                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW_ColdMillsRG#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
IND-SW-EDNL_SubStationE.hulamin.co.za
                 Gig 1/1           162              S I   IE-3000-8 Gig 1/2
IND-SW_ColdMillsRG#show cdp neighbors detail
-------------------------
Device ID: IND-SW-EDNL_SubStationE.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.60
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 162 sec

Version :
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000002790CCFA80FF0000
VTP Management Domain: ''
Native VLAN: 1
Duplex: full
Management address(es):
  IP address: 192.168.160.60

IND-SW_ColdMillsRG#show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
C6165               Fa1/3          3601                       6805.ca71.ddc6
IND-SW-EDNL_SubStatiGi1/1          120        B               port-002-00000
0001.053c.f7fa      Fa1/3          3601                       0001.053c.f7fa
6805.ca69.8abc      Fa1/3          3601                       6805.ca69.8abc

Total entries displayed: 4

IND-SW_ColdMillsRG#show lldp neighbors detail
------------------------------------------------
Chassis id: C6165
Port id: 6805.ca71.ddc6
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2755 seconds
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
Chassis id: 0027.90cc.fa82
Port id: port-002-00000
Port Description: GigabitEthernet1/2
System Name: IND-SW-EDNL_SubStationE.hulamin.co.za

System Description:
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

Time remaining: 111 seconds
System Capabilities: B,R
Enabled Capabilities: B
Management Addresses:
    IP: 192.168.160.60
    OID:
        1.3.6.1.4.1.24686.
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseX(FD)
Media Attachment Unit type: 26
Vlan ID: 1

------------------------------------------------
Chassis id: 0001.053c.f7fa
Port id: 0001.053c.f7fa
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 2745 seconds
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
Chassis id: 6805.ca69.8abc
Port id: 6805.ca69.8abc
Port Description - not advertised
System Name - not advertised
System Description - not advertised

Time remaining: 3205 seconds
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


Total entries displayed: 4

IND-SW_ColdMillsRG#show interfaces status

Port      Name               Status       Vlan       Duplex  Speed Type
Fa1/1                        notconnect   588          auto   auto 10/100BaseTX
Fa1/2                        connected    588        a-full  a-100 10/100BaseTX
Fa1/3                        connected    588        a-full  a-100 10/100BaseTX
Fa1/4                        notconnect   588          auto   auto 10/100BaseTX
Fa1/5                        notconnect   588          auto   auto 10/100BaseTX
Fa1/6                        notconnect   588          auto   auto 10/100BaseTX
Fa1/7                        notconnect   588          auto   auto 10/100BaseTX
Fa1/8                        notconnect   588          auto   auto 10/100BaseTX
Gi1/1                        connected    trunk      a-full a-1000 1000BaseSX SFP
Gi1/2                        notconnect   1            auto   auto 1000BaseSX SFP
IND-SW_ColdMillsRG#show inventory
NAME: "1", DESCR: "IE-3000-8TC"
PID: IE-3000-8TC       , VID: V03  , SN: FOC2003Z0ZN

NAME: "GigabitEthernet1/1", DESCR: "1000BaseSX SFP"
PID: GLC-SX-MMD          , VID: V01  , SN: AGJ2016R24S

NAME: "GigabitEthernet1/2", DESCR: "1000BaseSX SFP"
PID: GLC-SX-MMD          , VID: V01  , SN: AGJ2016R24W

NAME: "IE-3000-8TC - Module in slot 1", DESCR: "IE-3000-8TC - Module in slot 1"
PID: IE-3000-8TC       , VID: V03  , SN: FOC2003Z0ZN


IND-SW_ColdMillsRG#show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 12.2(58)SE2, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2011 by Cisco Systems, Inc.
Compiled Thu 21-Jul-11 00:59 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(44r)EX5, RELEASE SOFTWARE (fc1)

IND-SW_ColdMillsRG uptime is 2 days, 16 hours, 33 minutes
System returned to ROM by power-on
System image file is "flash:/ies-lanbasek9-mz.122-58.SE2/ies-lanbasek9-mz.122-58.SE2.bin"


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
Processor board ID FOC2003Z0ZN
Last reset from power-on
4 Virtual Ethernet interfaces
8 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:AF:1F:D0:A8:80
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20026V0E
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-8TC
System serial number            : FOC2003Z0ZN
Top Assembly Part Number        : 800-28538-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFE00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x68D0A880
SKU Brand Name                  : Cisco


Switch Ports Model              SW Version            SW Image
------ ----- -----              ----------            ----------
*    1 10    IE-3000-8TC        12.2(58)SE2           IES-LANBASEK9-M


Configuration register is 0xF

IND-SW_ColdMillsRG#show interfaces trunk

Port        Mode             Encapsulation  Status        Native vlan
Gi1/1       on               802.1q         trunking      1

Port        Vlans allowed on trunk
Gi1/1       1-4094

Port        Vlans allowed and active in management domain
Gi1/1       1,501,560-582,584-591,593,595

Port        Vlans in spanning tree forwarding state and not pruned
Gi1/1       1,501,560-582,584-591,593,595
IND-SW_ColdMillsRG#show etherchannel summary
Flags:  D - down        P - bundled in port-channel
        I - stand-alone s - suspended
        H - Hot-standby (LACP only)
        R - Layer3      S - Layer2
        U - in use      f - failed to allocate aggregator

        M - not in use, minimum links not met
        u - unsuitable for bundling
        w - waiting to be aggregated
        d - default port


Number of channel-groups in use: 0
Number of aggregators:           0

Group  Port-channel  Protocol    Ports
------+-------------+-----------+-----------------------------------------------

IND-SW_ColdMillsRG#

```

# IND-SW-EDNL_CompHouse1 (192.168.160.5)
```Cisco

```

# IND-SW-EDNL_CompHouse2and3 (192.168.160.6)
```Cisco

```

# IND-SW-EDNL_CompHouse4 (192.168.160.7)
```Cisco

```

# IND-SW_FS15MCC (192.168.160.8)
```Cisco

```

# IND-SW_FS14MCC (192.168.160.9)
```Cisco

```

# IND-SW-CCL1_PLC_B (192.168.160.10)
```Cisco

```

# IND-SW-CCL1PLCC (192.168.160.11)
```Cisco

```

# IND-SW-CCL1DevRoom (192.168.160.12)
```Cisco

```

# IND-SW_CCL1OS4 (192.168.160.13)
```Cisco

```

# IND-SW_CCL1OS5 (192.168.160.14)
```Cisco

```

# IND-SW_CCL1OS6 (192.168.160.15)
```Cisco

```

# IND-SW_CCL1OS9 (192.168.160.16)
```Cisco

```

# Unnamed Switch (192.168.160.17)
```Cisco

```

# IND-SW_CCL2Coater_Bottom (192.168.160.18)
```Cisco

```

# IND-SW_CCL2_DC_L (192.168.160.20)
```Cisco

```

# IND-SW_CCL2_OS1 (192.168.160.21)
```Cisco

```

# IND-SW_CCL2_CompRoom (192.168.160.22)
```Cisco

```

# IND-SW-CCL_CESS (192.168.160.23)
```Cisco

```

# IND-SW-EDNL_MainServerRoom (192.168.160.26)
```Cisco

```

# IND-SW-EDNL_ElectrciansWorkShop (192.168.160.27)
```Cisco

```

# IND-SW-EDNL_GeneratorSub (192.168.160.28)
```Cisco

```

# IND-SW-EDNL_S4SMCCRoomBottom (192.168.160.29)
```Cisco

```

# IND-SW-EDNL_S4CoolingTowers (192.168.160.30)
```Cisco

```

# IND-SW-EDNL_S5CoolingTowers (192.168.160.31)
```Cisco

```

# IND-SW-EDNL_S4GaugeCab (192.168.160.32)
```Cisco

```

# IND-SW-EDNL_S4PulPit (192.168.160.33)
```Cisco

```

# IND-SW-EDNL_S4MCCRoomTop (192.168.160.34)
```Cisco

```

# IND-SW-EDNL_SubStation1 (192.168.160.35)
```Cisco

```

# IND-SW-EDNL_SubStationN (192.168.160.36)
```Cisco

```

# IND-SW-EDNL_FoilColingTowers (192.168.160.37)
```Cisco

```

# IND-SW-EDNL_SubStationJ (192.168.160.38)
```Cisco

```

# IND-SW-EDNL_SubStationA (192.168.160.39)
```Cisco

```

# IND-SW-EDNL_SubStationB (192.168.160.40)
```Cisco

```

# IND-SW-EDNL-Dept34SubStation (192.168.160.41)
```Cisco

```

# IND-SW-EDNL_CCLServiceTunnel (192.168.160.42)
```Cisco

```

# IND-SW-EDNL_SubStationD (192.168.160.43)
```Cisco

```

# IND-SW-EDNL_SubStationG (192.168.160.44)
```Cisco

```

# IND-SW-EDNL_AnnealingFurnace (192.168.160.45)
```Cisco

```

# IND-SW-CD_PlatePlantStrecher (192.168.160.46)
```Cisco

```

# IND-SW-CD_CompHouse5 (192.168.160.47)
```Cisco

```

# IND-SW-EDNL_CCLCNGGAS (192.168.160.48)
```Cisco

```

# IND-SW-EDNL_WaterTowerSUB (192.168.160.49)
```Cisco

```

# CAMPS DRIFT REMELT BAILER (Ref Henri) (192.168.160.50)
```Cisco

```

# IND-SW-CD_SubStation1 (192.168.160.51)
```Cisco

```

# IND-SW-CD_SubStation4 (192.168.160.52)
```Cisco

```

# IND-SW-ENDL-INDServerRoom_Bottom (192.168.160.53)
```Cisco

```

# IND-SW-EDNL_SL2 (192.168.160.54)
```Cisco

```

# IND-SW-EDNL_SL4 (192.168.160.55)
```Cisco

```

# IND-SW-EDNL_SL5 (192.168.160.56)
```Cisco

```

# IND-SW-CD-BulkWaterTank (192.168.160.57)
```Cisco

```

# IND-SW-CD-Effluent (192.168.160.58)
```Cisco

```

# IND-SW-EDNL_TLL (192.168.160.59)
```Cisco

```

# IND-SW-EDNL_SubStationE (192.168.160.60)
```Cisco

```

# IND-SW-EDNL_S6MCCRoom (192.168.160.61)
```Cisco

```

# IND-SW-EDNL_SubStationK (192.168.160.62)
```Cisco

```

# IND-SW-EDNL_SubStationH (192.168.160.63)
```Cisco

```

# IND-SW-EDNL_SL6MCCRoom (192.168.160.64)
```Cisco

```

# IND-SW-EDNL_A17ControlRoom (192.168.160.65)
```Cisco

```

# IND-SW-EDNL_FoilSepratorsSubN (192.168.160.66)
```Cisco

```

# IND-SW-EDNL_FoilAnnealingSubN (192.168.160.67)
```Cisco

```

# Unnamed Switch (192.168.160.68)
```Cisco

```

# IND-SW-EDNL_SubStationM (192.168.160.69)
```Cisco

```

# IND-SW-EDNL_PTTL (192.168.160.70)
```Cisco

```

# IND-SW-EDNL_CTLL5 (192.168.160.71)
```Cisco

```

# Dept34 (192.168.160.72)
```Cisco

```

# IND-SW-EDNL_SL7 (192.168.160.73)
```Cisco

```

# IND-SW-CD_MainServerRoom (192.168.160.74)
```Cisco

```

# IND-SW-CD_CoolingTower (192.168.160.75)
```Cisco

```

# IND-SW-CD_WaterTowerMCC (192.168.160.76)
```Cisco

```

# IND-SW-EDNL_AdminMCC (192.168.160.77)
```Cisco

```

# IND-SW-CD-PP_CTLSsub (192.168.160.78)
```Cisco

```

# IND-SW-CD-PP_HSHTFsub (192.168.160.79)
```Cisco

```

# IND-SW-CD-PP_Compressor (192.168.160.80)
```Cisco

```

# IND-SW-CD-PP_FurnaceMCC (192.168.160.81)
```Cisco

```

# IND-SW-CD_A19 (192.168.160.82)
```Cisco

```

# IND-SW-CD_A19PLC (192.168.160.83)
```Cisco

```

# IND-SW-EDNL_Dept34_PTTL (192.168.160.84)
```Cisco

```

# IND-SW-CD_CNGGas (192.168.160.85)
```Cisco

```

# IND-SW-CDRF_ScalperPiller42 (192.168.160.86)
```Cisco

```

# IND-SW-CDHL_CoolingTowers (192.168.160.87)
```Cisco

```

# IND-SW-EDIIT_Foiloffice (192.168.160.88)
```Cisco

```

# IND-SW-CD_UBC (192.168.160.89)
```Cisco

```

# IND-SW-EDNL_PTTL_PLC (192.168.160.90)
```Cisco

```

# IND-SW-EDNL_EffluentPlant (192.168.160.91)
```Cisco

```

# IND-SW-CD-
