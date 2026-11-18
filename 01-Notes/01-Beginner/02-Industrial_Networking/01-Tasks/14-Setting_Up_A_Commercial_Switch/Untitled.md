```Cisco
IND-SW-CD_MainServerRoom>
IND-SW-CD_MainServerRoom>enable
Password:
IND-SW-CD_MainServerRoom#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/13, Gi1/14, Gi1/15, Gi1/16, Gi1/17, Gi1/18, Gi1/19, Gi1/20, Gi1/21, Gi1/22, Gi1/23, Gi1/24, Gi1/25, Gi1/26, Gi1/27, Gi1/28
250  IND-250                          active
501  VLAN0501                         active
560  Management                       active
561  CESMS                            active    Gi1/2, Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10, Gi1/11, Gi1/12
562  IND-CESMS_CCTV                   active
570  A19-PLC                          active
571  CD-A19-HMI                       active
576  CD_Emergencypower                active
577  SLGGAS                           active
578  A19 Network                      active
580  Plate plant Network              active
589  CDPowerMeter                     active
590  CDPowermeters                    active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-CD_MainServerRoom#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
IND-SW-CD_MainServer(config)#vlan 564
IND-SW-CD_MainServer(config-vlan)#name CDHotMill_L1
IND-SW-CD_MainServer(config-vlan)#exit
IND-SW-CD_MainServer(config)#interface vlan 564
IND-SW-CD_MainServer(config-if)#description HRM-MARAS
IND-SW-CD_MainServer(config-if)#exit
IND-SW-CD_MainServer(config)#interface gi 1/27
IND-SW-CD_MainServer(config-if)#switchport access vlan 564
IND-SW-CD_MainServer(config-if)#end
IND-SW-CD_MainServerRoom#
IND-SW-CD_MainServerRoom#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/13, Gi1/14, Gi1/15, Gi1/16, Gi1/17, Gi1/18, Gi1/19, Gi1/20, Gi1/21, Gi1/22, Gi1/23, Gi1/24, Gi1/25, Gi1/26, Gi1/28
250  IND-250                          active
501  VLAN0501                         active
560  Management                       active
561  CESMS                            active    Gi1/2, Gi1/3, Gi1/4, Gi1/5, Gi1/6, Gi1/7, Gi1/8, Gi1/9, Gi1/10, Gi1/11, Gi1/12
562  IND-CESMS_CCTV                   active
564  CDHotMill_L1                     active    Gi1/27
570  A19-PLC                          active
571  CD-A19-HMI                       active
576  CD_Emergencypower                active
577  SLGGAS                           active
578  A19 Network                      active
580  Plate plant Network              active
589  CDPowerMeter                     active
590  CDPowermeters                    active
593  Ignition                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-CD_MainServerRoom#
IND-SW-CD_MainServerRoom#show startup-config
Using 7435 out of 524288 bytes
!
! Last configuration change at 03:27:52 ZA Wed Mar 30 2011
! NVRAM config last updated at 10:04:23 ZA Tue Oct 27 2026 by ind-it
!
version 15.2
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname IND-SW-CD_MainServerRoom
!
boot-start-marker
boot-end-marker
!
!
enable secret 5 $1$qEtD$zqpnm1rWjg0CwReLpQ76Z/
!
username ind-it privilege 15 secret 5 $1$klg3$032kpZvA8cXBsHV1qu3wy/
aaa new-model
!
!
!
!
!
!
!
!
aaa session-id common
clock timezone ZA 2 0
system mtu routing 1500
!
!
!
ip domain-name hulamin.co.za
ip igmp snooping querier
vtp mode transparent
!
!
!
!
!
ptp mode e2etransparent
!
!
crypto pki trustpoint TP-self-signed-2605057920
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-2605057920
 revocation-check none
 rsakeypair TP-self-signed-2605057920
!
!
crypto pki certificate chain TP-self-signed-2605057920
 certificate self-signed 01 nvram:IOS-Self-Sig#1.cer
license boot level lanbase
archive
 log config
  logging enable
  hidekeys
 path tftp://10.10.3.53/$h
 write-memory
 time-period 44640
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
!
alarm profile defaultPort
 alarm not-operating
 syslog not-operating
 notifies not-operating
!
!

!
!
vlan 250
 name IND-250
!
vlan 501
!
vlan 560
 name Management
!
vlan 561
 name CESMS
!
vlan 562
 name IND-CESMS_CCTV
!
vlan 570
 name A19-PLC
!
vlan 571
 name CD-A19-HMI
!
vlan 576
 name CD_Emergencypower
!
vlan 577
 name SLGGAS
!
vlan 578
 name A19 Network
!
vlan 580
 name Plate plant Network
!
vlan 589
 name CDPowerMeter
!
vlan 590
 name CDPowermeters
!
vlan 593
 name Ignition
!
lldp run
!
!
!
!
!
interface GigabitEthernet1/1
 switchport access vlan 561
 switchport mode trunk
 no logging event link-status
!
interface GigabitEthernet1/2
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/3
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/4
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/5
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/6
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/7
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/8
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/9
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/10
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/11
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/12
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/13
 switchport mode trunk
!
interface GigabitEthernet1/14
 switchport mode trunk
!
interface GigabitEthernet1/15
 switchport mode trunk
!
interface GigabitEthernet1/16
 switchport mode trunk
!
interface GigabitEthernet1/17
 switchport mode trunk
!
interface GigabitEthernet1/18
 switchport mode trunk
!
interface GigabitEthernet1/19
 switchport mode trunk
!
interface GigabitEthernet1/20
 description Trunk to IND-SW-CDHL_CoolingTowers
 switchport mode trunk
!
interface GigabitEthernet1/21
 switchport mode trunk
!
interface GigabitEthernet1/22
 switchport mode trunk
!
interface GigabitEthernet1/23
 description Trunk to IND-CD_Cooling Tower (Remelt)
 switchport mode trunk
!
interface GigabitEthernet1/24
 description Trunk to IND-CD_Effluent Plant
 switchport mode trunk
!
interface GigabitEthernet1/25
 description Trunk to IND-Core1 (Industrial ServerRoom)
 switchport mode trunk
!
interface GigabitEthernet1/26
 description Trunk to IND-CD_PlatePlantStrecher
 switchport mode trunk
!
interface GigabitEthernet1/27
 description Trunk to IND-SW-CD_CompHouse5
 switchport mode trunk
!
interface GigabitEthernet1/28
 description Trunk to IND-SW-CD_SubStation4
 switchport mode trunk
!
interface Vlan1
 no ip address
 no ip route-cache
 shutdown
!
interface Vlan501
 no ip address
!
interface Vlan560
 ip address 192.168.160.74 255.255.255.0
 no ip route-cache
!
interface Vlan561
 no ip address
 no ip route-cache
 cip enable
!
interface Vlan576
 description CD_EmergencyPower
 no ip address
!
interface Vlan577
 no ip address
!
interface Vlan578
 no ip address
!
interface Vlan580
 no ip address
!
interface Vlan589
 description CDPowerMeters
 no ip address
!
interface Vlan590
 no ip address
!
interface Vlan593
 no ip address
!
interface Vlan900
 no ip address
!
interface Vlan903
 no ip address
!
ip default-gateway 192.168.160.1
ip forward-protocol nd
ip http server
ip http secure-server
!
ip ssh time-out 60
ip ssh version 2
!
!
logging host 10.10.22.39
logging host 192.168.160.125
!
!
snmp-server community hulaminrw RW
snmp-server community hulaminro RO
snmp-server community public RO
snmp-server community hulamin RO
snmp-server community indro RO
snmp-server enable traps snmp authentication linkdown linkup coldstart warmstart
snmp-server enable traps transceiver all
snmp-server enable traps call-home message-send-fail server-fail
snmp-server enable traps tty
snmp-server enable traps license
snmp-server enable traps bfd
snmp-server enable traps ethernet cfm cc mep-up mep-down cross-connect loop config
snmp-server enable traps ethernet cfm crosscheck mep-missing mep-unknown service-up
snmp-server enable traps auth-framework sec-violation
snmp-server enable traps ether-oam
snmp-server enable traps cluster
snmp-server enable traps config-copy
snmp-server enable traps config
snmp-server enable traps config-ctid
snmp-server enable traps pki
snmp-server enable traps energywise
snmp-server enable traps fru-ctrl
snmp-server enable traps entity
snmp-server enable traps event-manager
snmp-server enable traps power-ethernet group 1
snmp-server enable traps power-ethernet police
snmp-server enable traps cpu threshold
snmp-server enable traps rep
snmp-server enable traps vstack
snmp-server enable traps bridge newroot topologychange
snmp-server enable traps stpx inconsistency root-inconsistency loop-inconsistency
snmp-server enable traps syslog
snmp-server enable traps vtp
snmp-server enable traps vlancreate
snmp-server enable traps vlandelete
snmp-server enable traps flash insertion removal
snmp-server enable traps port-security
snmp-server enable traps envmon fan shutdown supply temperature status
snmp-server enable traps stackwise
snmp-server enable traps ethernet cfm alarm
snmp-server enable traps alarms informational
snmp-server enable traps bulkstat collection transfer
snmp-server enable traps errdisable
snmp-server enable traps mac-notification change move threshold
snmp-server enable traps vlan-membership
snmp-server host 192.168.250.55 indro
snmp-server host 10.10.2.58 public
snmp-server host 10.10.2.59 public
!
!
!
no vstack
!
line con 0
line vty 0 4
 password waltons
 transport input telnet ssh
line vty 5 15
 password waltons
 transport input telnet ssh
!
ntp master 5
ntp server 10.10.2.6
!
end

IND-SW-CD_MainServerRoom#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]!
IND-SW-CD_MainServerRoom#
IND-SW-CD_MainServerRoom#show startup-config
Using 7561 out of 524288 bytes
!
! Last configuration change at 15:52:42 ZA Mon Nov 16 2026 by ind-it
! NVRAM config last updated at 15:53:41 ZA Mon Nov 16 2026 by ind-it
!
version 15.2
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname IND-SW-CD_MainServerRoom
!
boot-start-marker
boot-end-marker
!
!
enable secret 5 $1$qEtD$zqpnm1rWjg0CwReLpQ76Z/
!
username ind-it privilege 15 secret 5 $1$klg3$032kpZvA8cXBsHV1qu3wy/
aaa new-model
!
!
!
!
!
!
!
!
aaa session-id common
clock timezone ZA 2 0
system mtu routing 1500
!
!
!
ip domain-name hulamin.co.za
ip igmp snooping querier
vtp mode transparent
!
!
!
!
!
ptp mode e2etransparent
!
!
crypto pki trustpoint TP-self-signed-2605057920
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-2605057920
 revocation-check none
 rsakeypair TP-self-signed-2605057920
!
!
crypto pki certificate chain TP-self-signed-2605057920
 certificate self-signed 01 nvram:IOS-Self-Sig#1.cer
license boot level lanbase
archive
 log config
  logging enable
  hidekeys
 path tftp://10.10.3.53/$h
 write-memory
 time-period 44640
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
!
alarm profile defaultPort
 alarm not-operating
 syslog not-operating
 notifies not-operating
!
!

!
!
vlan 250
 name IND-250
!
vlan 501
!
vlan 560
 name Management
!
vlan 561
 name CESMS
!
vlan 562
 name IND-CESMS_CCTV
!
vlan 564
 name CDHotMill_L1
!
vlan 570
 name A19-PLC
!
vlan 571
 name CD-A19-HMI
!
vlan 576
 name CD_Emergencypower
!
vlan 577
 name SLGGAS
!
vlan 578
 name A19 Network
!
vlan 580
 name Plate plant Network
!
vlan 589
 name CDPowerMeter
!
vlan 590
 name CDPowermeters
!
vlan 593
 name Ignition
!
lldp run
!
!
!
!
!
interface GigabitEthernet1/1
 switchport access vlan 561
 switchport mode trunk
 no logging event link-status
!
interface GigabitEthernet1/2
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/3
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/4
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/5
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/6
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/7
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/8
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/9
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/10
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/11
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/12
 switchport access vlan 561
 switchport mode access
 no logging event link-status
 shutdown
!
interface GigabitEthernet1/13
 switchport mode trunk
!
interface GigabitEthernet1/14
 switchport mode trunk
!
interface GigabitEthernet1/15
 switchport mode trunk
!
interface GigabitEthernet1/16
 switchport mode trunk
!
interface GigabitEthernet1/17
 switchport mode trunk
!
interface GigabitEthernet1/18
 switchport mode trunk
!
interface GigabitEthernet1/19
 switchport mode trunk
!
interface GigabitEthernet1/20
 description Trunk to IND-SW-CDHL_CoolingTowers
 switchport mode trunk
!
interface GigabitEthernet1/21
 switchport mode trunk
!
interface GigabitEthernet1/22
 switchport mode trunk
!
interface GigabitEthernet1/23
 description Trunk to IND-CD_Cooling Tower (Remelt)
 switchport mode trunk
!
interface GigabitEthernet1/24
 description Trunk to IND-CD_Effluent Plant
 switchport mode trunk
!
interface GigabitEthernet1/25
 description Trunk to IND-Core1 (Industrial ServerRoom)
 switchport mode trunk
!
interface GigabitEthernet1/26
 description Trunk to IND-CD_PlatePlantStrecher
 switchport mode trunk
!
interface GigabitEthernet1/27
 description Trunk to IND-SW-CD_CompHouse5
 switchport access vlan 564
 switchport mode trunk
!
interface GigabitEthernet1/28
 description Trunk to IND-SW-CD_SubStation4
 switchport mode trunk
!
interface Vlan1
 no ip address
 no ip route-cache
 shutdown
!
interface Vlan501
 no ip address
!
interface Vlan560
 ip address 192.168.160.74 255.255.255.0
 no ip route-cache
!
interface Vlan561
 no ip address
 no ip route-cache
 cip enable
!
interface Vlan564
 description HRM-MARAS
 no ip address
!
interface Vlan576
 description CD_EmergencyPower
 no ip address
!
interface Vlan577
 no ip address
!
interface Vlan578
 no ip address
!
interface Vlan580
 no ip address
!
interface Vlan589
 description CDPowerMeters
 no ip address
!
interface Vlan590
 no ip address
!
interface Vlan593
 no ip address
!
interface Vlan900
 no ip address
!
interface Vlan903
 no ip address
!
ip default-gateway 192.168.160.1
ip forward-protocol nd
ip http server
ip http secure-server
!
ip ssh time-out 60
ip ssh version 2
!
!
logging host 10.10.22.39
logging host 192.168.160.125
!
!
snmp-server community hulaminrw RW
snmp-server community hulaminro RO
snmp-server community public RO
snmp-server community hulamin RO
snmp-server community indro RO
snmp-server enable traps snmp authentication linkdown linkup coldstart warmstart
snmp-server enable traps transceiver all
snmp-server enable traps call-home message-send-fail server-fail
snmp-server enable traps tty
snmp-server enable traps license
snmp-server enable traps bfd
snmp-server enable traps ethernet cfm cc mep-up mep-down cross-connect loop config
snmp-server enable traps ethernet cfm crosscheck mep-missing mep-unknown service-up
snmp-server enable traps auth-framework sec-violation
snmp-server enable traps ether-oam
snmp-server enable traps cluster
snmp-server enable traps config-copy
snmp-server enable traps config
snmp-server enable traps config-ctid
snmp-server enable traps pki
snmp-server enable traps energywise
snmp-server enable traps fru-ctrl
snmp-server enable traps entity
snmp-server enable traps event-manager
snmp-server enable traps power-ethernet group 1
snmp-server enable traps power-ethernet police
snmp-server enable traps cpu threshold
snmp-server enable traps rep
snmp-server enable traps vstack
snmp-server enable traps bridge newroot topologychange
snmp-server enable traps stpx inconsistency root-inconsistency loop-inconsistency
snmp-server enable traps syslog
snmp-server enable traps vtp
snmp-server enable traps vlancreate
snmp-server enable traps vlandelete
snmp-server enable traps flash insertion removal
snmp-server enable traps port-security
snmp-server enable traps envmon fan shutdown supply temperature status
snmp-server enable traps stackwise
snmp-server enable traps ethernet cfm alarm
snmp-server enable traps alarms informational
snmp-server enable traps bulkstat collection transfer
snmp-server enable traps errdisable
snmp-server enable traps mac-notification change move threshold
snmp-server enable traps vlan-membership
snmp-server host 192.168.250.55 indro
snmp-server host 10.10.2.58 public
snmp-server host 10.10.2.59 public
!
!
!
no vstack
!
line con 0
line vty 0 4
 password waltons
 transport input telnet ssh
line vty 5 15
 password waltons
 transport input telnet ssh
!
ntp master 5
ntp server 10.10.2.6
!
end


```