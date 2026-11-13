# Startup Configuration: Cisco Catalyst 2960-X series (IND-SW-EDNL-Lab)
```Cisco
IND-SW-EDNL-Lab# show vlan brief

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
IND-SW-EDNL-Lab#show ip interface brief
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
IND-SW-EDNL-Lab#show startup-config
Using 3437 out of 33554432 bytes
!
! Last configuration change at 12:50:39 UTC Thu Oct 16 2025 by ind-it
!
version 17.9
service timestamps debug datetime msec
service timestamps log datetime msec
service call-home
no platform punt-keepalive disable-kernel-core
no platform punt-keepalive settings
no platform bridge-security all
!
hostname IND-SW-EDNL-Lab
!
aaa new-model
!
!
!
!
aaa session-id common
rep bpduleak
rep ztp
rep autodisc
ptp mode e2etransparent
vtp version 1
!
!
!
!
!
!
!
!
login on-success log
!
crypto pki trustpoint SLA-TrustPoint
 enrollment pkcs12
 revocation-check crl
!
crypto pki trustpoint TP-self-signed-1332356253
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-1332356253
 revocation-check none
 rsakeypair TP-self-signed-1332356253
!
!
crypto pki certificate chain SLA-TrustPoint
 certificate ca 01 nvram:CiscoLicensi#1CA.cer
crypto pki certificate chain TP-self-signed-1332356253
 certificate self-signed 01 nvram:IOS-Self-Sig#1.cer
!
diagnostic bootup level minimal
!
!
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
archive
 log config
  logging enable
 path tftp://10.10.3.53/$h-
 write-memory
 time-period 44640
memory free low-watermark processor 63570
!
!
alarm-profile defaultPort
 alarm not-operating
 syslog not-operating
 notifies not-operating
!
!
enable secret 9 $9$jdfJRMfcoXkE7U$l8u9AAnoZ4UQzK.q91ujdLDVGFI1gRgsQ.wiHX2u2Cs
!
username ind-it privilege 15 secret 9 $9$CyKR4s31U8fwQE$ZHtrO.WJpAf36a1IrtUDgNlvSGYuvDHomRUrp/C5tN2

crypto engine compliance shield disable
!
!
transceiver type all
 monitoring
vlan internal allocation policy ascending
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
!
!
!
!
interface GigabitEthernet1/1
 switchport mode trunk
!
interface GigabitEthernet1/2
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/3
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/4
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/5
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/6
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/7
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/8
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/9
 switchport access vlan 595
 switchport mode access
!
interface GigabitEthernet1/10
!
interface AppGigabitEthernet1/1
!
interface Vlan1
 no ip address
 shutdown
!
interface Vlan60
 no ip address
!
interface Vlan501
 no ip address
!
interface Vlan560
 ip address 192.168.160.121 255.255.255.0
!
interface Vlan595
 description LABS
 no ip address
!
ip default-gateway 192.168.160.1
ip http server
ip http authentication local
ip http secure-server
ip forward-protocol nd
!
ip ssh time-out 60
ip ssh version 2
!
!
logging host 192.168.160.125
!
snmp-server community indro RO
snmp-server host 192.168.250.55 version 2c indro
!
!
!
control-plane
!
!
line con 0
 stopbits 1
line aux 0
line vty 0 4
 transport input telnet ssh
line vty 5 15
 transport input telnet ssh
!
call-home
 ! If contact email address in call-home is configured as sch-smart-licensing@cisco.com
 ! the email address configured in Cisco Smart License Portal will be used as contact email address to send SCH notifications.
 contact-email-addr sch-smart-licensing@cisco.com
 profile "CiscoTAC-1"
  active
  destination transport-method http
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
!
!
!
end

IND-SW-EDNL-Lab#

```