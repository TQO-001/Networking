This drill was perfomred immediately after drill 1

```text
Switch#
Switch#config t
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname IND-SW-CD-PP
IND-SW-CD-PP(config)#ip domain-name hulamin.local
IND-SW-CD-PP(config)#enable secret eni1cam
IND-SW-CD-PP(config)#username Ind-it privilege 15 secret Gijim@Pr0
IND-SW-CD-PP(config)#crypto key generate rsa
The name for the keys will be: IND-SW-CD-PP.hulamin.local
Choose the size of the key modulus in the range of 360 to 4096 for your
  General Purpose Keys. Choosing a key modulus greater than 512 may take
  a few minutes.

How many bits in the modulus [512]: 2048
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 19 seconds)

IND-SW-CD-PP(config)#
*Mar  1 00:49:33.551: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-SW-CD-PP(config)#ip ssh version 2
IND-SW-CD-PP(config)#ip ssh time-out 60
IND-SW-CD-PP(config)#ip ssh authentication-retries 3
IND-SW-CD-PP(config)#line console 0
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#logging synchronous
IND-SW-CD-PP(config-line)#exec-timeout 5 0
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#line vty 0 15
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#transport input ssh
IND-SW-CD-PP(config-line)#exec-timeout 5 0
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#banner motd
% Incomplete command.

IND-SW-CD-PP(config)#banner motd #
Enter TEXT message.  End with the character '#'.
UNAUTHORIZED ACCESS TO THIS DEVICE IS PROHIBITED.
All activity is logged and monitored.
#
IND-SW-CD-PP(config)#vlan 99
IND-SW-CD-PP(config-vlan)#name MGMT
IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#interface vlan 99
IND-SW-CD-PP(config-if)#
*Mar  1 00:54:51.572: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan99, changed state to down
IND-SW-CD-PP(config-if)#description Management-SVI
IND-SW-CD-PP(config-if)#ip address 192.168.99.2 255.255.255.0
IND-SW-CD-PP(config-if)#no shutdown
IND-SW-CD-PP(config-if)#exit
IND-SW-CD-PP(config)#ip default-gateway 192.168.99.1
IND-SW-CD-PP(config)#service password-encryption
IND-SW-CD-PP(config)#end
IND-SW-CD-PP#
*Mar  1 00:57:07.316: %SYS-5-CONFIG_I: Configured from console by console
IND-SW-CD-PP#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
IND-SW-CD-PP#show ip ssh
SSH Enabled - version 2.0
Authentication methods:publickey,keyboard-interactive,password
Authentication Publickey Algorithms:x509v3-ssh-rsa,ssh-rsa
Hostkey Algorithms:x509v3-ssh-rsa,ssh-rsa
Encryption Algorithms:aes128-ctr,aes192-ctr,aes256-ctr,aes128-cbc,3des-cbc,aes192-cbc,aes256-cbc
MAC Algorithms:hmac-sha1,hmac-sha1-96
Authentication timeout: 60 secs; Authentication retries: 3
Minimum expected Diffie Hellman key size : 1024 bits
IOS Keys in SECSH format(ssh-rsa, base64 encoded): IND-SW-CD-PP.hulamin.local
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCRg6P5sLC0WLXLUVzoe2oTMNT5xhpAichbwzTwZytx
5w9YSyKPSqbRPRcupy7vJPAt3LtIKHauSCFxYOs1JKaMbS2Mtyi/5P7t+o81trgKv3RV1WUwSnA6OgBb
KSz886Eae9UTUvaOx65z2rYHs+oyPUHckunQsfoXSdnSxLrv5t3YUupLkNOJsDrPWMCt6os7ZpVi5idP
0gRc0kGTBn7pSwvK+8kY62cJva+xpptLvzKougb4PgWjWefB97UIWeItEmjWaVVn1tAtLeVJZDoBSn5R
1KhioP8byiD6K550ey5pTkI8TgeQ53NMw8+Hzyc4AiyF9bmZdR036NDLT66h
IND-SW-CD-PP#show crypto key mypubkey rsa
% Key pair was generated at: 00:49:33 UTC Mar 1 1993
Key name: IND-SW-CD-PP.hulamin.local
Key type: RSA KEYS
 Storage Device: not specified
 Usage: General Purpose Key
 Key is not exportable. Redundancy enabled.
 Key Data:
  30820122 300D0609 2A864886 F70D0101 01050003 82010F00 3082010A 02820101
  009183A3 F9B0B0B4 58B5CB51 5CE87B6A 1330D4F9 C61A4089 C85BC334 F0672B71
  E70F584B 228F4AA6 D13D172E A72EEF24 F02DDCBB 482876AE 48217160 EB3524A6
  8C6D2D8C B728BFE4 FEEDFA8F 35B6B80A BF7455D5 65304A70 3A3A005B 292CFCF3
  A11A7BD5 1352F68E C7AE73DA B607B3EA 323D41DC 92E9D0B1 FA1749D9 D2C4BAEF
  E6DDD852 EA4B90D3 89B03ACF 58C0ADEA 8B3B6695 62E6274F D2045CD2 4193067E
  E94B0BCA FBC918EB 6709BDAF B1A69B4B BF32A8BA 06F83E05 A359E7C1 F7B50859
  E22D1268 D6695567 D6D02D2D E549643A 014A7E51 D4A862A0 FF1BCA20 FA2B9E74
  7B2E694E 423C4E07 90E7734C C3CF87CF 2738022C 85F5B999 751D37E8 D0CB4FAE
  A1020301 0001
% Key pair was generated at: 00:49:35 UTC Mar 1 1993
Key name: IND-SW-CD-PP.hulamin.local.server
Key type: RSA KEYS
Temporary key
 Usage: Encryption Key
 Key is not exportable.
 Key Data:
  307C300D 06092A86 4886F70D 01010105 00036B00 30680261 008BA6C1 EE5025A1
  B88C00A7 A4522777 309A6850 87A16C2C D009D536 ED0952BC 5C1788A6 C9B9E08A
  227594FD BECC61EE D9B7F1DF BFCD3E70 52FB5D22 381E765B EB5C784A F132BFE9
  C438AB9E 02B9049B 05EE89FC 05970062 A2ADEF48 42AD2970 F1020301 0001
IND-SW-CD-PP#show running-config | section line vty
line vty 0 4
 exec-timeout 5 0
 login local
 transport input ssh
line vty 5 15
 exec-timeout 5 0
 login local
 transport input ssh
IND-SW-CD-PP#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    up
Vlan99                 192.168.99.2    YES manual up                    down
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-CD-PP#show interfaces vlan 99
Vlan99 is up, line protocol is down
  Hardware is EtherSVI, address is 0056.2b85.7541 (bia 0056.2b85.7541)
  Description: Management-SVI
  Internet address is 192.168.99.2/24
  MTU 1500 bytes, BW 1000000 Kbit/sec, DLY 10 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive not supported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input never, output never, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     0 packets input, 0 bytes, 0 no buffer
     Received 0 broadcasts (0 IP multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 packets output, 0 bytes, 0 underruns
     0 output errors, 1 interface resets
     0 unknown protocol drops
     0 output buffer failures, 0 output buffers swapped out
IND-SW-CD-PP#
```

IND-SW-CD-PP# configure terminal
IND-SW-CD-PP(config)# interface FastEthernet1/1
IND-SW-CD-PP(config-if)# switchport mode access
IND-SW-CD-PP(config-if)# switchport access vlan 99
IND-SW-CD-PP(config-if)# exit
