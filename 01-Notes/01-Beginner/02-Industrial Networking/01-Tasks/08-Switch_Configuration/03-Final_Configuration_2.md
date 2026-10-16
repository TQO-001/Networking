# Startup Configuration: Cisco Catalyst 9200L (CM-S5-H001)
```cisco
CM-S5-H001#show running-config
Building configuration...

Current configuration : 13890 bytes
!
! Last configuration change at 13:28:40 UTC Fri Oct 16 2026
!
version 17.12
service tcp-keepalives-in
service tcp-keepalives-out
service timestamps debug datetime msec localtime
service timestamps log datetime msec localtime
platform punt-keepalive disable-kernel-core
!
hostname CM-S5-H001
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
!
!
!
switch 1 provision c9200l-24t-4x
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
ip domain name iitcoldmill.local
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
crypto pki trustpoint TP-self-signed-2071347664
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-2071347664
 revocation-check none
 rsakeypair TP-self-signed-2071347664
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
crypto pki certificate chain TP-self-signed-2071347664
 certificate self-signed 01
  30820330 30820218 A0030201 02020101 300D0609 2A864886 F70D0101 0B050030
  31312F30 2D060355 04030C26 494F532D 53656C66 2D536967 6E65642D 43657274
  69666963 6174652D 32303731 33343736 3634301E 170D3236 31303136 31323039
  34375A17 0D333631 30313531 32303934 375A3031 312F302D 06035504 030C2649
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 30373133
  34373636 34308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201
  0A028201 0100A3B3 6A7792D4 0D67D727 6EE17929 64AC2F21 7C87FC0B 4F7B15E4
  3B29BC94 6CA47AD4 94BEAC05 8B797A9A 8B4E7859 74488415 2D8B0BF0 9B063E47
  14A1A96E 6F17E508 08E4BE46 C7CA3C04 7C8884CA 3D1665C1 AC0908D6 3FBCA552
  924C27BE ED911419 DC1C9501 704D9210 271F1728 9A494372 7BB7522F 041D62FD
  3FB1075E F1DD9E2F 898E90DC 2A6522CD B6DB5129 BC09A93F EDDE0C24 EAC69885
  6A156D61 3D606FBD ADF69C9C 8F9405A1 D6634444 C6CD4AA8 B42E62E9 9A8D9456
  AB2DDBCE 88C6C72B 7427EFFD D7C14098 CDD3F482 2FEE565C 5AB15A0D 17FBB74F
  52C98017 B89502BF 2AC0EE03 1D7634D4 572BEDE2 A3BEE51C CBA157AE 89CE78C7
  AAE90D10 E6CD0203 010001A3 53305130 1D060355 1D0E0416 041447F5 99C5602A
  B71BBE63 886F15F5 55894D90 53A3301F 0603551D 23041830 16801447 F599C560
  2AB71BBE 63886F15 F555894D 9053A330 0F060355 1D130101 FF040530 030101FF
  300D0609 2A864886 F70D0101 0B050003 82010100 0D3D3800 780AAD88 ACC3FCEF
  16CB00D1 6CBB3BAA 0612370D 09C58DE9 369D0C95 4B3A606D 8CE3DBBB 5DF70A40
  E99CB1FB B94A7105 0B49198A D9E66569 DC6634A4 5FA2B61F 6AE03460 8CF22766
  D5A4379B C129E8FE 12BC31D2 1CE9D2A4 77B47EC8 A39EF1F8 83950B24 21BEABD6
  48C1601B 85FB49F5 87FE9ACE D1F555BA 4C91EBE6 F249AA00 A698AA4C 0EFB8907
  F7301097 FD1A44A6 741D607B B3C593DC 6CA7D1B2 932CC3D7 2E111E5C 1F3BE5E3
  7B22B89B F432ED67 70DDD47A 2B25AD0D 510127A6 DAD96A12 C9DD2D92 ECD8FB3C
  59D36260 51A33BFC CCBAA8AC 0BD6B8FB 298AC2FB 3C1D1A59 0594A5ED E9DEA459
  7BBFBEE1 2C2DC7F2 EA4D3A3F F3F2B96B 8307D763
        quit
!
!
license boot level network-advantage addon dna-advantage
port-channel load-balance src-dst-ip
memory free low-watermark processor 8237
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
errdisable recovery cause loopback
errdisable recovery cause psp
errdisable recovery cause mrp-miscabling
errdisable recovery cause loopdetect
errdisable recovery interval 60
enable secret 9 $9$SAj6JEKZBr64pE$zUsz8MjIS.otz.wfpnzxhdC/uteMFBa1uDzi0gzeOwU
!
username Ind-it privilege 15 secret 9 $9$hic0ws/595cb6U$9oA4kJ6S9pYFq5vsz80feYys3rCh18
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
 name ClienServer
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
 match dscp af31  af32  af33
class-map match-any system-cpp-police-topology-control
  description Topology control
class-map match-any system-cpp-police-sw-forward
  description Sw forwarding, L2 LVX data packets, LOGGING, Transit Traffic
class-map match-any CONTROL-MGMT-QUEUE
 match dscp cs2  cs3  cs6  cs7
class-map match-any TRANSACTIONAL-DATA-QUEUE
 match dscp af21  af22  af23
class-map match-any system-cpp-default
  description EWLC data, Inter FED Traffic
class-map match-any VIDEO-PRIORITY-QUEUE
 match dscp cs5
 match dscp cs4
class-map match-any system-cpp-police-sys-data
  description Openflow, Exception, EGR Exception, NFL Sampled Data, RPF Failed
class-map match-any system-cpp-police-punt-webauth
  description Punt Webauth
class-map match-any BULK-SCAVENGER-DATA-QUEUE
 match dscp cs1  af11  af12  af13
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
 match dscp af41  af42  af43
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
  description ICMPGEN,BROADCAST,ICMP,L2LVXCntrl,ProtoSnoop,PuntWebauth,MCASTData,Transed
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
interface GigabitEthernet1/0/17
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet1/0/18
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet1/0/19
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet1/0/20
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet1/0/21
 switchport access vlan 30
 switchport mode access
 spanning-tree portfast
!
interface GigabitEthernet1/0/22
 switchport access vlan 30
 switchport mode access
 spanning-tree portfast
!
interface GigabitEthernet1/0/23
 switchport access vlan 30
 switchport mode access
 spanning-tree portfast
!
interface GigabitEthernet1/0/24
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
interface Vlan1
 no ip address
!
interface Vlan10
 ip address 172.16.12.202 255.255.255.0
!
interface Vlan11
 no ip address
!
interface Vlan40
 ip address 192.16.8.202 255.255.255.0
!
ip http server
ip http authentication local
ip http secure-server
ip forward-protocol nd
ip ssh bulk-mode 131072
ip ssh time-out 60
ip scp server enable
!
!
!
!
!
!
!
control-plane
 service-policy input system-cpp-policy
!
banner login ^CCCS6 Primary network^C
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
monitor session 1 destination interface Te1/1/4 encapsulation replicate
ntp server 172.16.12.21
!
!
!
!
!
!
end

CM-S5-H001#
CM-S5-H001#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/1, Te1/1/1, Te1/1/2
                                                Te1/1/3
10   ClienServer                      active    Gi1/0/5, Gi1/0/6, Gi1/0/7
                                                Gi1/0/8, Gi1/0/9, Gi1/0/10
                                                Gi1/0/11, Gi1/0/12
11   VLAN0011                         active
20   Control                          active    Gi1/0/13, Gi1/0/14, Gi1/0/15
                                                Gi1/0/16, Gi1/0/17, Gi1/0/18
                                                Gi1/0/19, Gi1/0/20
30   Thin_Client                      active    Gi1/0/21, Gi1/0/22, Gi1/0/23
                                                Gi1/0/24
40   MNGT                             active    Gi1/0/2, Gi1/0/3, Gi1/0/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
CM-S5-H001#
CM-S5-H001#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES manual up                    down
Vlan10                 172.16.12.202   YES manual up                    down
Vlan11                 unassigned      YES unset  up                    down
Vlan40                 192.16.8.202    YES manual up                    down
GigabitEthernet0/0     unassigned      YES unset  administratively down down
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
GigabitEthernet1/0/19  unassigned      YES unset  down                  down
GigabitEthernet1/0/20  unassigned      YES unset  down                  down
GigabitEthernet1/0/21  unassigned      YES unset  down                  down
GigabitEthernet1/0/22  unassigned      YES unset  down                  down
GigabitEthernet1/0/23  unassigned      YES unset  down                  down
GigabitEthernet1/0/24  unassigned      YES unset  down                  down
Te1/1/1                unassigned      YES unset  down                  down
Te1/1/2                unassigned      YES unset  down                  down
Te1/1/3                unassigned      YES unset  down                  down
Te1/1/4                unassigned      YES unset  down                  down
CM-S5-H001#
```