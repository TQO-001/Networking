# Startup Configuration: Cisco Catalyst 9300L (CM-S6-H001)
```Cisco
CM-S6-H001#show run
Building configuration...

Current configuration : 14148 bytes
!
! Last configuration change at 14:41:42 UTC Wed Mar 4 2026
!
version 17.12
service tcp-keepalives-in
service tcp-keepalives-out
service timestamps debug datetime msec localtime
service timestamps log datetime msec localtime
platform punt-keepalive disable-kernel-core
!
hostname CM-S6-H001
!
!
vrf definition Mgmt-vrf
 !
 address-family ipv4
 exit-address-family
 !
 address-family ipv6
 exit-address-family
!
no aaa new-model
switch 1 provision c9300l-24uxg-4x
!
!
!
!
!
!
!
!
!
no ip domain lookup
!
!
!
no ip igmp snooping vlan 10
no ip igmp snooping vlan 11
no ip igmp snooping vlan 20
no ip igmp snooping vlan 21
no ip igmp snooping vlan 30
no ip igmp snooping vlan 40
login on-success log
ipv6 nd raguard policy HOST_POLICY
!
udld enable

vtp mode transparent
vtp version 1
!
!
!
!
!
!
!
!
crypto pki trustpoint SLA-TrustPoint
 enrollment pkcs12
 revocation-check crl
 hash sha256
!
crypto pki trustpoint TP-self-signed-1452385883
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-1452385883
 revocation-check none
 rsakeypair TP-self-signed-1452385883
 hash sha256
!
!
crypto pki certificate chain SLA-TrustPoint
 certificate ca 01
  30820321 30820209 A0030201 02020101 300D0609 2A864886 F70D0101 0B050030
  32310E30 0C060355 040A1305 43697363 6F312030 1E060355 04031317 43697363
  6F204C69 63656E73 696E6720 526F6F74 20434130 1E170D31 33303533 30313934
  3834375A 170D3338 30353330 31393438 34375A30 32310E30 0C060355 040A1305
  43697363 6F312030 1E060355 04031317 43697363 6F204C69 63656E73 696E6720
  526F6F74 20434130 82012230 0D06092A 864886F7 0D010101 05000382 010F0030
  82010A02 82010100 A6BCBD96 131E05F7 145EA72C 2CD686E6 17222EA1 F1EFF64D
  CBB4C798 212AA147 C655D8D7 9471380D 8711441E 1AAF071A 9CAE6388 8A38E520
  1C394D78 462EF239 C659F715 B98C0A59 5BBB5CBD 0CFEBEA3 700A8BF7 D8F256EE
  4AA4E80D DB6FD1C9 60B1FD18 FFC69C96 6FA68957 A2617DE7 104FDC5F EA2956AC
  7390A3EB 2B5436AD C847A2C5 DAB553EB 69A9A535 58E9F3E3 C0BD23CF 58BD7188
  68E69491 20F320E7 948E71D7 AE3BCC84 F10684C7 4BC8E00F 539BA42B 42C68BB7
  C7479096 B4CB2D62 EA2F505D C7B062A4 6811D95B E8250FC4 5D5D5FB8 8F27D191
  C55F0D76 61F9A4CD 3D992327 A8BB03BD 4E6D7069 7CBADF8B DF5F4368 95135E44
  DFC7C6CF 04DD7FD1 02030100 01A34230 40300E06 03551D0F 0101FF04 04030201
  06300F06 03551D13 0101FF04 05300301 01FF301D 0603551D 0E041604 1449DC85
  4B3D31E5 1B3E6A17 606AF333 3D3B4C73 E8300D06 092A8648 86F70D01 010B0500
  03820101 00507F24 D3932A66 86025D9F E838AE5C 6D4DF6B0 49631C78 240DA905
  604EDCDE FF4FED2B 77FC460E CD636FDB DD44681E 3A5673AB 9093D3B1 6C9E3D8B
  D98987BF E40CBD9E 1AECA0C2 2189BB5C 8FA85686 CD98B646 5575B146 8DFC66A8
  467A3DF4 4D565700 6ADF0F0D CF835015 3C04FF7C 21E878AC 11BA9CD2 55A9232C
  7CA7B7E6 C1AF74F6 152E99B7 B1FCF9BB E973DE7F 5BDDEB86 C71E3B49 1765308B
  5FB0DA06 B92AFE7F 494E8A9E 07B85737 F3A58BE1 1A48A229 C37C1E69 39F08678
  80DDCD16 D6BACECA EEBC7CF9 8428787B 35202CDC 60E4616A B623CDBD 230E3AFB
  418616A9 4093E049 4D10AB75 27E86F73 932E35B5 8862FDAE 0275156F 719BB2F0
  D697DF7F 28
        quit
crypto pki certificate chain TP-self-signed-1452385883
 certificate self-signed 01
  30820330 30820218 A0030201 02020101 300D0609 2A864886 F70D0101 0B050030
  31312F30 2D060355 04030C26 494F532D 53656C66 2D536967 6E65642D 43657274
  69666963 6174652D 31343532 33383538 3833301E 170D3235 30353038 30393030
  32335A17 0D333530 35303830 39303032 335A3031 312F302D 06035504 030C2649
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D31 34353233
  38353838 33308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201
  0A028201 0100C3C6 EAC1EAD3 A1E3A5A6 59E83BEF 49F234DC 263C73A3 D7E8EAA7
  715C517D 3B69A976 FBB07577 60506672 E80D35C9 AC80393B 70B4F7F5 6F472408
  0C7063C4 E012084C 97242D92 B9B705B9 50C1717E 947E506C 04C4519F 0E7FC51F
  E7C06F34 DCFF8517 6F98E547 901F5AB0 E9B9DFC1 08A9CF0A 3F963D80 676F3020
  2938F4E8 8FD3E40C 7FBF3263 E32D082C 7E3FA534 4D0AC68E 99C98F05 E1760E0D
  E27F0DF5 929EFDD0 D42D9363 A852B72F FC8245B2 AD9F66AF 600409BD 5D7CF890
  26C8B9BE 6F59DF06 42ABBA0A 78636F07 517B0026 6851136A 5E99AB49 9F65A63B
  E22B547D E52F1FA3 89135B6C 82C77982 801C7431 03626D27 BDEB689A 3BCD5FD3
  9E4FBE0A 9CE70203 010001A3 53305130 1D060355 1D0E0416 04147814 F5598F8D
  156AB8AF CBF0CDF3 DA3756C6 B0A3301F 0603551D 23041830 16801478 14F5598F
  8D156AB8 AFCBF0CD F3DA3756 C6B0A330 0F060355 1D130101 FF040530 030101FF
  300D0609 2A864886 F70D0101 0B050003 82010100 3BAA7A07 D9B1ECF4 4E49CAD1
  FD357F38 9208A6B7 9A62CD49 2696DC5D 62A07D82 C5C699CC E2B7BD73 60C2D11D
  98808618 A151C49D 24D6C132 7EC3A31F 35AD4288 E2B2241C 7BEDE324 C52E54EF
  4F012472 F6237ACC 5D6E7C80 4506F6DB BC5F5C19 4DA5AFEE E400499F CFAF7963
  E1D7B4E8 4F3381C7 BF699507 5DF4025F 732DBE9F ABF2E4E7 BAA4B7DD 9674EC6A
  FB7FB949 C1684664 CA871721 188B5F4F F34170E5 95C9972E 3F187B77 5572C4FB
  D8E7B1D6 EB40B2B3 E61F404C 6F90FB66 AA78A35D 23BC8909 6936D257 850AB1F2
  8D22A739 0EE201A7 9D197F6B E2DEC9CC B0C6F533 D81BD1FC 38294D2C 6A37F887
  7674EE65 B0F26E40 BF11BD5F 86320841 D5FBE646
        quit
!
!
license boot level network-advantage addon dna-advantage
port-channel load-balance src-dst-ip
memory free low-watermark processor 130185
!
diagnostic bootup level minimal
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
!
!
errdisable recovery cause udld
errdisable recovery cause bpduguard
errdisable recovery cause security-violation
errdisable recovery cause channel-misconfig
errdisable recovery cause pagp-flap
errdisable recovery cause dtp-flap
errdisable recovery cause link-flap
errdisable recovery cause sfp-config-mismatch
errdisable recovery cause gbic-invalid
errdisable recovery cause l2ptguard
errdisable recovery cause psecure-violation
errdisable recovery cause port-mode-failure
errdisable recovery cause dhcp-rate-limit
errdisable recovery cause pppoe-ia-rate-limit
errdisable recovery cause mac-limit
errdisable recovery cause storm-control
errdisable recovery cause inline-power
errdisable recovery cause arp-inspection
errdisable recovery cause link-monitor-failure
errdisable recovery cause oam-remote-failure
errdisable recovery cause loopback
errdisable recovery cause psp
errdisable recovery cause mrp-miscabling
errdisable recovery cause loopdetect
enable secret 9 $9$Hw9HyLYVJcOm6U$08EbHDo.YkAJuBrtt3YaPv.ZFIiZ5jvvD8wkPE9Hwqo
!
username Admin privilege 15 secret 9 $9$3VAG3VAK3V6D1k$DSKfD9vHApT6/G/56YstWY4FNFT/x1rxhGvPlOTHyz2
!
redundancy
 mode sso
crypto engine compliance shield disable
!
!
!
!
!
transceiver type all
 monitoring
!
vlan 10
 name ClientServer
!
vlan 11
!
vlan 20
 name Control
!
vlan 30
 name Thin_Client
!
vlan 40
 name MNGT
!
!
class-map match-any system-cpp-police-ewlc-control
  description EWLC Control
class-map match-any MULTIMEDIA-STREAMING-QUEUE
 match dscp af31
 match dscp af32
 match dscp af33
class-map match-any system-cpp-police-topology-control
  description Topology control
class-map match-any system-cpp-police-sw-forward
  description Sw forwarding, L2 LVX data packets, LOGGING, Transit Traffic
class-map match-any CONTROL-MGMT-QUEUE
 match dscp cs7
 match dscp cs6
 match dscp cs3
 match dscp cs2
class-map match-any TRANSACTIONAL-DATA-QUEUE
 match dscp af21
 match dscp af22
 match dscp af23
class-map match-any system-cpp-default
  description EWLC Data, Inter FED Traffic
class-map match-any VIDEO-PRIORITY-QUEUE
 match dscp cs5
 match dscp cs4
class-map match-any system-cpp-police-sys-data
  description Openflow, Exception, EGR Exception, NFL Sampled Data, RPF Failed
class-map match-any system-cpp-police-punt-webauth
  description Punt Webauth
class-map match-any BULK-SCAVENGER-DATA-QUEUE
 match dscp af11
 match dscp af12
 match dscp af13
 match dscp cs1
class-map match-any system-cpp-police-l2lvx-control
  description L2 LVX control packets
class-map match-any system-cpp-police-forus
  description Forus Address resolution and Forus traffic
class-map match-any system-cpp-police-multicast-end-station
  description MCAST END STATION
class-map match-any system-cpp-police-high-rate-app
  description High Rate Applications
class-map match-any system-cpp-police-multicast
  description MCAST Data
class-map match-any system-cpp-police-l2-control
  description L2 control
class-map match-any system-cpp-police-dot1x-auth
  description DOT1X Auth
class-map match-any system-cpp-police-data
  description ICMP redirect, ICMP_GEN and BROADCAST
class-map match-any MULTIMEDIA-CONFERENCING-QUEUE
 match dscp af41
 match dscp af42
 match dscp af43
class-map match-any system-cpp-police-stackwise-virt-control
  description Stackwise Virtual OOB
class-map match-any non-client-nrt-class
class-map match-any system-cpp-police-routing-control
  description Routing control and Low Latency
class-map match-any system-cpp-police-protocol-snooping
  description Protocol snooping
class-map match-any system-cpp-police-dhcp-snooping
  description DHCP snooping
class-map match-any PRIORITY-QUEUE
 match dscp ef
class-map match-any system-cpp-police-ios-routing
  description L2 control, Topology control, Routing control, Low Latency
class-map match-any system-cpp-police-system-critical
  description System Critical and Gold Pkt
class-map match-any system-cpp-police-ios-feature
  description ICMPGEN,BROADCAST,ICMP,L2LVXCntrl,ProtoSnoop,PuntWebauth,MCASTData,Transit,DOT1XAuth,Swfwd,LOGGING,L2LVXData,ForusTraffic,ForusARP,McastEndStn,Openflow,Exception,EGRExcption,NflSampled,RpfFailed
!
policy-map 2P6Q3T
 class PRIORITY-QUEUE
  priority level 1
  police rate percent 10
 class VIDEO-PRIORITY-QUEUE
  priority level 2
  police rate percent 20
 class CONTROL-MGMT-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
 class MULTIMEDIA-CONFERENCING-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
  queue-limit dscp af43 percent 80
  queue-limit dscp af42 percent 90
  queue-limit dscp af41 percent 100
 class MULTIMEDIA-STREAMING-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
  queue-limit dscp af33 percent 80
  queue-limit dscp af32 percent 90
  queue-limit dscp af31 percent 100
 class TRANSACTIONAL-DATA-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
  queue-limit dscp af23 percent 80
  queue-limit dscp af22 percent 90
  queue-limit dscp af21 percent 100
 class BULK-SCAVENGER-DATA-QUEUE
  bandwidth remaining percent 5
  queue-buffers ratio 10
  queue-limit dscp values  cs1 af13 percent 80
  queue-limit dscp values  af12 percent 90
  queue-limit dscp values  af11 percent 100
 class class-default
  bandwidth remaining percent 25
  queue-buffers ratio 25
policy-map system-cpp-policy
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
interface GigabitEthernet0/0
 vrf forwarding Mgmt-vrf
 no ip address
 shutdown
 negotiation auto
!
interface GigabitEthernet1/0/1
 switchport mode access
 spanning-tree portfast
!
interface GigabitEthernet1/0/2
 switchport access vlan 40
 spanning-tree portfast
!
interface GigabitEthernet1/0/3
 switchport access vlan 40
 spanning-tree portfast
!
interface GigabitEthernet1/0/4
 switchport access vlan 40
 spanning-tree portfast
!
interface GigabitEthernet1/0/5
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/6
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/7
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/8
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/9
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/10
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/11
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/12
 switchport access vlan 10
 spanning-tree portfast
!
interface GigabitEthernet1/0/13
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet1/0/14
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet1/0/15
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet1/0/16
 switchport access vlan 20
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/17
 switchport access vlan 20
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/18
 switchport access vlan 20
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/19
 switchport access vlan 20
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/20
 switchport access vlan 20
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/21
 switchport access vlan 30
 switchport mode access
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/22
 switchport access vlan 30
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/23
 switchport access vlan 30
 spanning-tree portfast
!
interface TenGigabitEthernet1/0/24
 switchport access vlan 30
 switchport mode access
 spanning-tree portfast
!
interface TenGigabitEthernet1/1/1
 switchport mode trunk
 spanning-tree portfast trunk
!
interface TenGigabitEthernet1/1/2
 switchport mode trunk
 spanning-tree portfast trunk
!
interface TenGigabitEthernet1/1/3
 switchport mode trunk
 spanning-tree portfast trunk
!
interface TenGigabitEthernet1/1/4
 switchport mode trunk
 spanning-tree portfast trunk
!
interface AppGigabitEthernet1/0/1
!
interface Vlan1
 ip address 172.16.8.250 255.255.252.0
!
interface Vlan10
 ip address 172.16.12.204 255.255.252.0
!
interface Vlan11
 no ip address
!
interface Vlan40
 ip address 192.16.8.204 255.255.252.0
!
ip forward-protocol nd
ip http server
ip http authentication local
ip http secure-server
ip ssh bulk-mode 131072
ip ssh time-out 60
ip scp server enable
!
!
!
!
!
!
control-plane
 service-policy input system-cpp-policy
!
!
banner login ^CS6 Primary network^C
!
line con 0
 exec-timeout 0 0
 stopbits 1
line vty 0 4
 login local
 length 0
 transport input ssh
 transport output ssh
line vty 5 15
 login local
 length 0
 transport input ssh
 transport output ssh
line vty 16 31
 login
 transport input ssh
!
!
monitor session 1 source vlan 1 , 10 - 11 , 20 - 21 , 30 , 40
monitor session 1 destination interface Te1/0/20 encapsulation replicate
ntp server 172.16.12.21
!
!
!
!
!
!
end

CM-S6-H001#show vlan br

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/1, Te1/1/3, Te1/1/4
                                                Ap1/0/1
10   ClientServer                     active    Gi1/0/5, Gi1/0/6, Gi1/0/7
                                                Gi1/0/8, Gi1/0/9, Gi1/0/10
                                                Gi1/0/11, Gi1/0/12
11   VLAN0011                         active
20   Control                          active    Gi1/0/13, Gi1/0/14, Gi1/0/15
                                                Gi1/0/16, Te1/0/17, Te1/0/18
                                                Te1/0/19
30   Thin_Client                      active    Te1/0/21, Te1/0/22, Te1/0/23
                                                Te1/0/24
40   MNGT                             active    Gi1/0/2, Gi1/0/3, Gi1/0/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
CM-S6-H001#show ip int br
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  172.16.8.250    YES NVRAM  up                    up
Vlan10                 172.16.12.204   YES NVRAM  up                    up
Vlan11                 unassigned      YES unset  up                    up
Vlan40                 192.16.8.204    YES NVRAM  up                    up
GigabitEthernet0/0     unassigned      YES NVRAM  administratively down down
GigabitEthernet1/0/1   unassigned      YES unset  up                    up
GigabitEthernet1/0/2   unassigned      YES unset  up                    up
GigabitEthernet1/0/3   unassigned      YES unset  up                    up
GigabitEthernet1/0/4   unassigned      YES unset  down                  down
GigabitEthernet1/0/5   unassigned      YES unset  up                    up
GigabitEthernet1/0/6   unassigned      YES unset  up                    up
GigabitEthernet1/0/7   unassigned      YES unset  down                  down
GigabitEthernet1/0/8   unassigned      YES unset  down                  down
GigabitEthernet1/0/9   unassigned      YES unset  down                  down
GigabitEthernet1/0/10  unassigned      YES unset  down                  down
GigabitEthernet1/0/11  unassigned      YES unset  down                  down
GigabitEthernet1/0/12  unassigned      YES unset  down                  down
GigabitEthernet1/0/13  unassigned      YES unset  up                    up
GigabitEthernet1/0/14  unassigned      YES unset  up                    up
GigabitEthernet1/0/15  unassigned      YES unset  down                  down
GigabitEthernet1/0/16  unassigned      YES unset  down                  down
Te1/0/17               unassigned      YES unset  down                  down
Te1/0/18               unassigned      YES unset  down                  down
Te1/0/19               unassigned      YES unset  down                  down
Te1/0/20               unassigned      YES unset  up                    down
Te1/0/21               unassigned      YES unset  up                    up
Te1/0/22               unassigned      YES unset  up                    up
Te1/0/23               unassigned      YES unset  up                    up
Te1/0/24               unassigned      YES unset  up                    up
Te1/1/1                unassigned      YES unset  up                    up
Te1/1/2                unassigned      YES unset  up                    up
Te1/1/3                unassigned      YES unset  down                  down
Te1/1/4                unassigned      YES unset  down                  down
Ap1/0/1                unassigned      YES unset  up                    up

```

## System Overview

- **Hostname:** `CM-S6-H001`
- **Hardware Model:** Cisco Catalyst `C9300L-24UXG-4X`
- **Cisco IOS XE Version:** `17.12`
- **License Tier:** `network-advantage` with `dna-advantage`
- **High Availability:** Redundancy mode set to `sso` (Stateful Switchover)

## 1. System & Management Base Configuration

```Cisco
hostname CM-S6-H001

! Clock and Logging Settings
service tcp-keepalives-in
service tcp-keepalives-out
service timestamps debug datetime msec localtime
service timestamps log datetime msec localtime

! System Behavior & Performance
platform punt-keepalive disable-kernel-core
no ip domain lookup
memory free low-watermark processor 130185
diagnostic bootup level minimal
transceiver type all
 monitoring

! Local Authentication & Access Control
no aaa new-model
enable secret 9 <encrypted-secret>
username Admin privilege 15 secret 9 <encrypted-secret>
login on-success log

! Management VRF Setup
vrf definition Mgmt-vrf
 address-family ipv4
 exit-address-family
 address-family ipv6
 exit-address-family

! Banner
banner login ^CS6 Primary network^C

! NTP Server Configuration
ntp server 172.16.12.21
```

## 2. Layer 2 & VLAN Configuration

### Global L2 Settings

```Cisco
! Spanning Tree Protocol
spanning-tree mode rapid-pvst
spanning-tree extend system-id

! Unidirectional Link Detection & VTP
udld enable
vtp mode transparent
vtp version 1

! Disable IGMP Snooping on specific VLANs
no ip igmp snooping vlan 10
no ip igmp snooping vlan 11
no ip igmp snooping vlan 20
no ip igmp snooping vlan 21
no ip igmp snooping vlan 30
no ip igmp snooping vlan 40

! Link Load Balancing
port-channel load-balance src-dst-ip

! Global Errdisable Recovery
errdisable recovery cause udld
errdisable recovery cause bpduguard
errdisable recovery cause security-violation
errdisable recovery cause channel-misconfig
errdisable recovery cause pagp-flap
errdisable recovery cause dtp-flap
errdisable recovery cause link-flap
errdisable recovery cause sfp-config-mismatch
errdisable recovery cause gbic-invalid
errdisable recovery cause l2ptguard
errdisable recovery cause psecure-violation
errdisable recovery cause port-mode-failure
errdisable recovery cause dhcp-rate-limit
errdisable recovery cause pppoe-ia-rate-limit
errdisable recovery cause mac-limit
errdisable recovery cause storm-control
errdisable recovery cause inline-power
errdisable recovery cause arp-inspection
errdisable recovery cause link-monitor-failure
errdisable recovery cause oam-remote-failure
errdisable recovery cause loopback
errdisable recovery cause psp
errdisable recovery cause mrp-miscabling
errdisable recovery cause loopdetect
```

### VLAN Definitions

```Cisco
vlan 10
 name ClientServer
!
vlan 11
!
vlan 20
 name Control
!
vlan 30
 name Thin_Client
!
vlan 40
 name MNGT
```

## 3. Interfaces & IP Addressing

|**Interface**|**Type / Mode**|**VLAN / VRF**|**IP Address / Subnet**|**Status**|
|---|---|---|---|---|
|**Gi0/0**|Out-of-band Mgmt|`Mgmt-vrf`|Unassigned|Disabled|
|**Vlan1**|SVI|VLAN 1|`172.16.8.250 /22` (`255.255.252.0`)|Up|
|**Vlan10**|SVI|VLAN 10|`172.16.12.204 /22` (`255.255.252.0`)|Up|
|**Vlan11**|SVI|VLAN 11|Unassigned|Up|
|**Vlan40**|SVI|VLAN 40|`192.168.8.204 /22` (`255.255.252.0`)|Up|
|**Gi1/0/1**|Access|VLAN 1 (Default)|-|Up|
|**Gi1/0/2 - Gi1/0/4**|Access|VLAN 40 (MNGT)|-|Gi1/0/2-3 Up, Gi1/0/4 Down|
|**Gi1/0/5 - Gi1/0/12**|Access|VLAN 10 (ClientServer)|-|Gi1/0/5-6 Up, Gi1/0/7-12 Down|
|**Gi1/0/13 - Gi1/0/16**|Access|VLAN 20 (Control)|-|Gi1/0/13-14 Up, Gi1/0/15-16 Down|
|**Te1/0/17 - Te1/0/19**|Access|VLAN 20 (Control)|-|Down|
|**Te1/0/20**|SPAN Destination|-|-|Up / Down (Monitoring)|
|**Te1/0/21 - Te1/0/24**|Access|VLAN 30 (Thin_Client)|-|Up|
|**Te1/1/1 - Te1/1/4**|Trunk Uplinks|Trunk|-|Te1/1/1-2 Up, Te1/1/3-4 Down|

```Cisco
! Out-of-Band Management Interface
interface GigabitEthernet0/0
 vrf forwarding Mgmt-vrf
 no ip address
 shutdown
 negotiation auto

! Access Interfaces Configuration
interface GigabitEthernet1/0/1
 switchport mode access
 spanning-tree portfast

interface range GigabitEthernet1/0/2 - 4
 switchport access vlan 40
 spanning-tree portfast

interface range GigabitEthernet1/0/5 - 12
 switchport access vlan 10
 spanning-tree portfast

interface range GigabitEthernet1/0/13 - 16
 switchport access vlan 20
 spanning-tree portfast

interface range TenGigabitEthernet1/0/17 - 20
 switchport access vlan 20
 spanning-tree portfast

interface range TenGigabitEthernet1/0/21 - 24
 switchport access vlan 30
 switchport mode access
 spanning-tree portfast

! Trunk Uplink Configuration
interface range TenGigabitEthernet1/1/1 - 4
 switchport mode trunk
 spanning-tree portfast trunk

! Switch Virtual Interfaces (SVIs)
interface Vlan1
 ip address 172.16.8.250 255.255.252.0

interface Vlan10
 ip address 172.16.12.204 255.255.252.0

interface Vlan11
 no ip address

interface Vlan40
 ip address 192.16.8.204 255.255.252.0
```

## 4. Quality of Service (QoS) & Control Plane Policing

### Class-Map Configurations

```Cisco
class-map match-any PRIORITY-QUEUE
 match dscp ef

class-map match-any VIDEO-PRIORITY-QUEUE
 match dscp cs5
 match dscp cs4

class-map match-any CONTROL-MGMT-QUEUE
 match dscp cs7
 match dscp cs6
 match dscp cs3
 match dscp cs2

class-map match-any MULTIMEDIA-CONFERENCING-QUEUE
 match dscp af41
 match dscp af42
 match dscp af43

class-map match-any MULTIMEDIA-STREAMING-QUEUE
 match dscp af31
 match dscp af32
 match dscp af33

class-map match-any TRANSACTIONAL-DATA-QUEUE
 match dscp af21
 match dscp af22
 match dscp af23

class-map match-any BULK-SCAVENGER-DATA-QUEUE
 match dscp af11
 match dscp af12
 match dscp af13
 match dscp cs1
```

### Policy-Map Configuration

```Cisco
policy-map 2P6Q3T
 class PRIORITY-QUEUE
  priority level 1
  police rate percent 10
 class VIDEO-PRIORITY-QUEUE
  priority level 2
  police rate percent 20
 class CONTROL-MGMT-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
 class MULTIMEDIA-CONFERENCING-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
  queue-limit dscp af43 percent 80
  queue-limit dscp af42 percent 90
  queue-limit dscp af41 percent 100
 class MULTIMEDIA-STREAMING-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
  queue-limit dscp af33 percent 80
  queue-limit dscp af32 percent 90
  queue-limit dscp af31 percent 100
 class TRANSACTIONAL-DATA-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
  queue-limit dscp af23 percent 80
  queue-limit dscp af22 percent 90
  queue-limit dscp af21 percent 100
 class BULK-SCAVENGER-DATA-QUEUE
  bandwidth remaining percent 5
  queue-buffers ratio 10
  queue-limit dscp values cs1 af13 percent 80
  queue-limit dscp values af12 percent 90
  queue-limit dscp values af11 percent 100
 class class-default
  bandwidth remaining percent 25
  queue-buffers ratio 25

! Apply CoPP to Control Plane
control-plane
 service-policy input system-cpp-policy
```

## 5. Security & Management Access

```Cisco
! HTTP & SSH Access Security
ip http server
ip http secure-server
ip http authentication local
ip ssh bulk-mode 131072
ip ssh time-out 60
ip scp server enable

! IPv6 Guard Policy
ipv6 nd raguard policy HOST_POLICY

! Line Terminal Access
line con 0
 exec-timeout 0 0
 stopbits 1

line vty 0 15
 login local
 length 0
 transport input ssh
 transport output ssh

line vty 16 31
 login
 transport input ssh
```

## 6. Traffic Monitoring (SPAN)

```Cisco
! Mirror traffic from VLANs 1, 10, 11, 20, 21, 30, and 40 out interface Te1/0/20
monitor session 1 source vlan 1 , 10 - 11 , 20 - 21 , 30 , 40
monitor session 1 destination interface Te1/0/20 encapsulation replicate
```

