
```Cisco
IND-SW-EDNL-Lab1#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/1, Gi1/0/28
250  IND-250                          active
501  VLAN0501                         active
560  management                       active
561  cesms                            active
590  EDPowermeters                    active
593  Ignition                         active
595  LABS                             active    Gi1/0/2, Gi1/0/3, Gi1/0/4
                                                Gi1/0/5, Gi1/0/6, Gi1/0/7
                                                Gi1/0/8, Gi1/0/9, Gi1/0/10
                                                Gi1/0/11, Gi1/0/12, Gi1/0/13
                                                Gi1/0/14, Gi1/0/15, Gi1/0/16
                                                Gi1/0/17, Gi1/0/18, Gi1/0/19
                                                Gi1/0/20, Gi1/0/21, Gi1/0/22
                                                Gi1/0/23, Gi1/0/24, Gi1/0/25
                                                Gi1/0/26, Gi1/0/27
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-EDNL-Lab1#
IND-SW-EDNL-Lab1#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  192.168.1.3     YES NVRAM  administratively down down
Vlan560                192.168.160.127 YES manual up                    down
Vlan595                unassigned      YES unset  up                    down
FastEthernet0          unassigned      YES NVRAM  administratively down down
GigabitEthernet1/0/1   unassigned      YES unset  down                  down
GigabitEthernet1/0/2   unassigned      YES unset  down                  down
GigabitEthernet1/0/3   unassigned      YES unset  down                  down
GigabitEthernet1/0/4   unassigned      YES unset  down                  down
GigabitEthernet1/0/5   unassigned      YES unset  down                  down
GigabitEthernet1/0/6   unassigned      YES unset  down                  down
GigabitEthernet1/0/7   unassigned      YES unset  down                  down
GigabitEthernet1/0/8   unassigned      YES unset  down                  down
GigabitEthernet1/0/9   unassigned      YES unset  down                  down
GigabitEthernet1/0/10  unassigned      YES unset  down                  down
GigabitEthernet1/0/11  unassigned      YES unset  down                  down
GigabitEthernet1/0/12  unassigned      YES unset  down                  down
GigabitEthernet1/0/13  unassigned      YES unset  down                  down
GigabitEthernet1/0/14  unassigned      YES unset  down                  down
GigabitEthernet1/0/15  unassigned      YES unset  down                  down
GigabitEthernet1/0/16  unassigned      YES unset  down                  down
GigabitEthernet1/0/17  unassigned      YES unset  down                  down
GigabitEthernet1/0/18  unassigned      YES unset  down                  down

IND-SW-EDNL-Lab1#
IND-SW-EDNL-Lab1#show startup-config
Using 4127 out of 524288 bytes
!
! Last configuration change at 03:29:06 UTC Sat Jan 1 2000
! NVRAM config last updated at 03:29:20 UTC Sat Jan 1 2000
!
version 15.2
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname IND-SW-EDNL-Lab1
!
boot-start-marker
boot-end-marker
!
enable secret 9 $9$PYtEb6uj5Gb0rM$mMVJL0tznTTmHG72.njqrvA7CGqN.POA7y48LVNIq82
!
username ind-it privilege 15 secret 9 $9$pGX1nkoovZ14ec$zP4xcDW5A3UXaPusoSY/rZuTxkL2i51BtN2lkuCz.Do
no aaa new-model
switch 1 provision ws-c2960x-24ts-l
!
!
!
!
!
!
ip domain-name hulamin.co.za
!
!
!
!
!
!
!
crypto pki trustpoint TP-self-signed-2373042432
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-2373042432
 revocation-check none
 rsakeypair TP-self-signed-2373042432
!
!
crypto pki certificate chain TP-self-signed-2373042432
 certificate self-signed 01 nvram:IOS-Self-Sig#1.cer
archive
 log config
  logging enable
  logging size 200
  notify syslog contenttype plaintext
 path tftp://10.10.3.53/$h-
 write-memory
 time-period 1440
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
!
!
!
!
vlan internal allocation policy ascending
!
lldp run
!
!
!
!
!
!
!
!
!
!
interface FastEthernet0
 no ip address
 shutdown
!
interface GigabitEthernet1/0/1
 switchport mode trunk
!
interface GigabitEthernet1/0/2
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/3
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/4
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/5
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/6
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/7
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/8
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/9
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/10
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/11
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/12
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/13
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/14
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/15
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/16
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/17
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/18
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/19
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/20
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/21
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/22
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/23
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/24
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/25
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/26
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/27
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/0/28
!
interface Vlan1
 ip address 192.168.1.3 255.255.255.0
 shutdown
!
interface Vlan560
 ip address 192.168.160.127 255.255.255.0
!
interface Vlan595
 description LABS
 no ip address
!
ip default-gateway 192.168.160.1
!
ip http server
ip http secure-server
ip ssh time-out 60
ip ssh version 2
!
logging host 192.168.160.125
!
!
snmp-server community indro RO
snmp-server host 192.168.250.55 version 2c indro
!
line con 0
 stopbits 1
line vty 0 4
 login local
 transport input telnet ssh
line vty 5 15
 login local
 transport input telnet ssh
!
!
end

IND-SW-EDNL-Lab1#
```