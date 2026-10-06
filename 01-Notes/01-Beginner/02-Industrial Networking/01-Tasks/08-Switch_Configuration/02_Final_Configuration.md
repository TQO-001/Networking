```cisco
CM-S6-H001#show running-config
Building configuration...

Current configuration : 12253 bytes
!
! Last configuration change at 13:43:33 UTC Tue Oct 6 2026
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
crypto pki trustpoint TP-self-signed-4104035006
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-4104035006
 revocation-check none
 rsakeypair TP-self-signed-4104035006
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
crypto pki certificate chain TP-self-signed-4104035006
 certificate self-signed 01
  30820330 30820218 A0030201 02020101 300D0609 2A864886 F70D0101 0B050030
  31312F30 2D060355 04030C26 494F532D 53656C66 2D536967 6E65642D 43657274
  69666963 6174652D 34313034 30333530 3036301E 170D3236 31303036 31303235
  32305A17 0D333631 30303531 30323532 305A3031 312F302D 06035504 030C2649
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D34 31303430
  33353030 36308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201
  0A028201 0100BBD3 6C539BEE E3ECD2A2 59525DB9 022E2697 FEF0C9BD 656A6CDF
  5753B41C DCA3D617 04BBDC79 6EBE8F81 8CBD0BE3 A9D17A64 4A922592 ABDEE4D1
  6B1FBD02 E536B14E 82DB4FA0 45D08189 74FAEED9 E4F9653F EE7DB251 49A198E1
  0791B359 A47040C9 E00208D9 46A02106 F5E12C22 D7354D9A DCC59EBC BDBDC6AE
  5F3D1D4D 0BB6345D 4F5DDBE0 508045C7 2FFCD5C3 75CFDDB7 A4E70505 E81C0496
  1E8CDBF9 0CF4AB35 0D150A1D AC18203A 05051D73 D51D64BB 2B8C918D 9722B208
  9A4535D4 0B167344 4527D64D 4C0A3E59 49E4C0D7 1F5FB7F5 6BEFE9C4 130ABFD5
  2C7A6217 48449DFE C9A9F8D7 906A2EE6 E098DC8C 07C7FE10 6E918AF5 0FDF58C9
  F0EBCD43 D35F0203 010001A3 53305130 1D060355 1D0E0416 041413E1 D87B9F90
  769F99D6 0FA06E11 76CBE881 8D83301F 0603551D 23041830 16801413 E1D87B9F
  90769F99 D60FA06E 1176CBE8 818D8330 0F060355 1D130101 FF040530 030101FF
  300D0609 2A864886 F70D0101 0B050003 82010100 031F3A3C 5C603B5A 85D48986
  9A420E6E F50DD03E C0DDAAC8 2955F1CD 26195DD3 63093B12 EDB74A16 5DCAE29B
  9CA64D29 CF958942 74977138 A2F8CF51 FAC1909E 788DE526 4BBC74F4 EBB4B888
  5E983799 DD4D65F9 656034F5 618FD7C0 77D3042D 8D0C8246 B0282961 4E6F7C13
  633267DC 7874D6D6 295D37DA C303E5CC EE869912 07AFA166 1AA9FDF1 92E7746D
  A92C7A1A 139942A0 D7689B06 163F59FA 03BEA7F1 0D2994C9 340C4582 2A086956
  54AC4B74 46B24AE5 BBB5AFA5 0B474F65 EEB7D7E0 37D4C77F A14F88D4 CAE5547F
  D42527A3 C774A649 2391596C A31C6D50 BA881763 86F29593 1DFEC39B 8E36D463
  12C97169 6A12B657 8A44BA06 93101A10 2324A72C
        quit
!
!
license boot level network-advantage addon dna-advantage
memory free low-watermark processor 8237
!
diagnostic bootup level minimal
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
!
!
enable secret 9 $9$pG5kxa2dtKIas.$z48SdbeoaVJflhmupl2Rfq4GxPKAFtWY2NflPH.sJnI
!
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
 class MULTIMEDIA-STREAMING-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
 class TRANSACTIONAL-DATA-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
 class BULK-SCAVENGER-DATA-QUEUE
  bandwidth remaining percent 5
  queue-buffers ratio 10
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
 ip address 172.16.8.250 255.255.255.0
!
interface Vlan10
 ip address 172.16.12.204 255.255.255.0
!
interface Vlan11
 no ip address
!
interface Vlan40
 ip address 192.16.8.204 255.255.255.0
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
banner login ^CCS6 Primary network^C
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

CM-S6-H001#
CM-S6-H001#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
CM-S6-H001(config)#ipv6 nd raquard policy HOST_POLICY
                             ^
% Invalid input detected at '^' marker.

CM-S6-H001(config)#ipv6 nd raguard policy HOST_POLICY
CM-S6-H001(config-nd-raguard)#device-role host
CM-S6-H001(config-nd-raguard)#exit
CM-S6-H001(config)#exit
CM-S6-H001#
*Oct  6 13:50:40.962: %SYS-5-CONFIG_I: Configured from console by console
CM-S6-H001#show running-config
Building configuration...

Current configuration : 12290 bytes
!
! Last configuration change at 13:50:40 UTC Tue Oct 6 2026
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
crypto pki trustpoint TP-self-signed-4104035006
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-4104035006
 revocation-check none
 rsakeypair TP-self-signed-4104035006
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
crypto pki certificate chain TP-self-signed-4104035006
 certificate self-signed 01
  30820330 30820218 A0030201 02020101 300D0609 2A864886 F70D0101 0B050030
  31312F30 2D060355 04030C26 494F532D 53656C66 2D536967 6E65642D 43657274
  69666963 6174652D 34313034 30333530 3036301E 170D3236 31303036 31303235
  32305A17 0D333631 30303531 30323532 305A3031 312F302D 06035504 030C2649
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D34 31303430
  33353030 36308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201
  0A028201 0100BBD3 6C539BEE E3ECD2A2 59525DB9 022E2697 FEF0C9BD 656A6CDF
  5753B41C DCA3D617 04BBDC79 6EBE8F81 8CBD0BE3 A9D17A64 4A922592 ABDEE4D1
  6B1FBD02 E536B14E 82DB4FA0 45D08189 74FAEED9 E4F9653F EE7DB251 49A198E1
  0791B359 A47040C9 E00208D9 46A02106 F5E12C22 D7354D9A DCC59EBC BDBDC6AE
  5F3D1D4D 0BB6345D 4F5DDBE0 508045C7 2FFCD5C3 75CFDDB7 A4E70505 E81C0496
  1E8CDBF9 0CF4AB35 0D150A1D AC18203A 05051D73 D51D64BB 2B8C918D 9722B208
  9A4535D4 0B167344 4527D64D 4C0A3E59 49E4C0D7 1F5FB7F5 6BEFE9C4 130ABFD5
  2C7A6217 48449DFE C9A9F8D7 906A2EE6 E098DC8C 07C7FE10 6E918AF5 0FDF58C9
  F0EBCD43 D35F0203 010001A3 53305130 1D060355 1D0E0416 041413E1 D87B9F90
  769F99D6 0FA06E11 76CBE881 8D83301F 0603551D 23041830 16801413 E1D87B9F
  90769F99 D60FA06E 1176CBE8 818D8330 0F060355 1D130101 FF040530 030101FF
  300D0609 2A864886 F70D0101 0B050003 82010100 031F3A3C 5C603B5A 85D48986
  9A420E6E F50DD03E C0DDAAC8 2955F1CD 26195DD3 63093B12 EDB74A16 5DCAE29B
  9CA64D29 CF958942 74977138 A2F8CF51 FAC1909E 788DE526 4BBC74F4 EBB4B888
  5E983799 DD4D65F9 656034F5 618FD7C0 77D3042D 8D0C8246 B0282961 4E6F7C13
  633267DC 7874D6D6 295D37DA C303E5CC EE869912 07AFA166 1AA9FDF1 92E7746D
  A92C7A1A 139942A0 D7689B06 163F59FA 03BEA7F1 0D2994C9 340C4582 2A086956
  54AC4B74 46B24AE5 BBB5AFA5 0B474F65 EEB7D7E0 37D4C77F A14F88D4 CAE5547F
  D42527A3 C774A649 2391596C A31C6D50 BA881763 86F29593 1DFEC39B 8E36D463
  12C97169 6A12B657 8A44BA06 93101A10 2324A72C
        quit
!
!
license boot level network-advantage addon dna-advantage
memory free low-watermark processor 8237
!
diagnostic bootup level minimal
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
!
!
enable secret 9 $9$pG5kxa2dtKIas.$z48SdbeoaVJflhmupl2Rfq4GxPKAFtWY2NflPH.sJnI
!
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
 class MULTIMEDIA-STREAMING-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
 class TRANSACTIONAL-DATA-QUEUE
  bandwidth remaining percent 10
  queue-buffers ratio 10
 class BULK-SCAVENGER-DATA-QUEUE
  bandwidth remaining percent 5
  queue-buffers ratio 10
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
 ip address 172.16.8.250 255.255.255.0
!
interface Vlan10
 ip address 172.16.12.204 255.255.255.0
!
interface Vlan11
 no ip address
!
interface Vlan40
 ip address 192.16.8.204 255.255.255.0
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
banner login ^CCS6 Primary network^C
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

CM-S6-H001#
```