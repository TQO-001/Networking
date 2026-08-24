```text
*Mar  1 00:19:58.211: %SYS-5-CONFIG_I: Configured from console by console \
                  ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#
IND-SW-CD-PP#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  10.10.22.110    YES manual administratively down down
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-CD-PP#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
IND-SW-CD-PP#dir flash:
Directory of flash:/

    2  -rwx        1581   Mar 1 1993 02:33:09 +00:00  starup-config
    3  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  648  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  649  -rwx         616   Mar 1 1993 00:16:53 +00:00  vlan.dat
  650  -rwx        1314   Mar 1 1993 00:27:49 +00:00  start-config
  652  -rwx        1347   Mar 1 1993 00:20:40 +00:00  config.text
  653  -rwx        3566   Mar 1 1993 00:20:40 +00:00  private-config.text
  654  -rwx        6168   Mar 1 1993 00:20:40 +00:00  multiple-fs

64094208 bytes total (39587328 bytes free)
IND-SW-CD-PP#delete flash:vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
IND-SW-CD-PP#dir flash:
Directory of flash:/

    2  -rwx        1581   Mar 1 1993 02:33:09 +00:00  starup-config
    3  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  648  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  650  -rwx        1314   Mar 1 1993 00:27:49 +00:00  start-config
  652  -rwx        1347   Mar 1 1993 00:20:40 +00:00  config.text
  653  -rwx        3566   Mar 1 1993 00:20:40 +00:00  private-config.text
  654  -rwx        6168   Mar 1 1993 00:20:40 +00:00  multiple-fs

64094208 bytes total (39588864 bytes free)
IND-SW-CD-PP#erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
IND-SW-CD-PP#
*Mar  1 00:21:29.018: %SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#reload
Proceed with reload? [confirm]

*Mar  1 00:21:47.314: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload command.
Using driver version 1 for media type 1
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 0 seconds.
...done Initializing Flash.
done.
Loading "bs1:ies-hboot1-m"...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
File "bs1:ies-hboot1-m" uncompressed and installed, entry point: 0x7000000
executing...

Using driver version 3 for media type 1
Using driver version 3 for media type 2
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 1 seconds.
mifs[7]: 596 files, 54 directories
mifs[7]: Total bytes     :   64094208
mifs[7]: Bytes used      :   24498688
mifs[7]: Bytes available :   39595520
mifs[7]: mifs fsck took 26 seconds.
...done Initializing Flash.
done.
Loading "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin"...#######################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
################################################################################################################################################################################################################################

File "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin" uncompressed and installed, entry point: 0x3000
executing...

              Restricted Rights Legend

Use, duplication, or disclosure by the Government is
subject to restrictions as set forth in subparagraph
(c) of the Commercial Computer Software - Restricted
Rights clause at FAR sec. 52.227-19 and subparagraph
(c) (1) (ii) of the Rights in Technical Data and Computer
Software clause at DFARS sec. 252.227-7013.

           cisco Systems, Inc.
           170 West Tasman Drive
           San Jose, California 95134-1706



Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
Initializing flashfs...
Using driver version 4 for media type 1
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     : 258048
mifs[4]: Bytes used      : 133120
mifs[4]: Bytes available : 124928
mifs[4]: mifs fsck took 1 seconds.
mifs[4]: Initialization complete.

mifs[5]: 0 files, 1 directories
mifs[5]: Total bytes     : 1806336
mifs[5]: Bytes used      : 1024
mifs[5]: Bytes available : 1805312
mifs[5]: mifs fsck took 0 seconds.
mifs[5]: Initialization complete.

mifs[6]: 1 files, 1 directories
mifs[6]: Total bytes     : 11096064
mifs[6]: Bytes used      : 380416
mifs[6]: Bytes available : 10715648
mifs[6]: mifs fsck took 0 seconds.
mifs[6]: Initialization complete.

mifs[7]: 1 files, 1 directories
mifs[7]: Total bytes     : 18192384
mifs[7]: Bytes used      : 122368
mifs[7]: Bytes available : 18070016
mifs[7]: mifs fsck took 1 seconds.
mifs[7]: Initialization complete.

Using driver version 4 for media type 2
mifs[9]: 596 files, 54 directories
mifs[9]: Total bytes     : 64094208
mifs[9]: Bytes used      : 24498688
mifs[9]: Bytes available : 39595520
mifs[9]: mifs fsck took 0 seconds.
mifs[9]: Initialization complete.

...done Initializing flashfs.
Checking for Bootloader upgrade..

Boot Loader upgrade not needed(v)
POST: CPU MIC register Tests : Begin
POST: CPU MIC register Tests : End, Status Skipped

POST: PortASIC Memory Tests : Begin
POST: PortASIC Memory Tests : End, Status Skipped

Loading FPGA image from flash:/ies-lanbasek9-mz.152-4.EA5/fpga
Start FPGA programming (375883 bytes): / Done.

----------------------------------------------------------------
Cesium version information from file header:
a  Cesium.ncd b  2vp4fg456 c  2008/ 6/30 d  13:29: 0
----------------------------------------------------------------

POST: CPU MIC interface Loopback Tests : Begin
POST: CPU MIC interface Loopback Tests : End, Status Skipped

POST: PortASIC RingLoopback Tests : Begin
POST: PortASIC RingLoopback Tests : End, Status Skipped

POST: PortASIC CAM Subsystem Tests : Begin
POST: PortASIC CAM Subsystem Tests : End, Status Skipped

POST: PortASIC Port Loopback Tests : Begin
POST: PortASIC Port Loopback Tests : End, Status Skipped

Waiting for Port download...Complete


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


NAT is not supportedcisco IE-3000-4TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2022Z2UQ
Last reset from power-on
1 Virtual Ethernet interface
4 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:56:2B:85:75:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20218BAV
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-4TC
System serial number            : FOC2022Z2UQ
Top Assembly Part Number        : 800-28494-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFD00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x6D857500
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image
------ ----- -----                     ----------            ----------
*    1 6     IE-3000-4TC               15.2(4)EA5            IES-LANBASEK9-M




Press RETURN to get started!


*Mar  1 00:00:18.933: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down
*Mar  1 00:00:20.468: %SPANTREE-5-EXTENDED_SYSID: Extended SysId enabled for type vlan
*Mar  1 00:00:46.229: %PHY-5-TRANSCEIVERINSERTED: Slot=1 Port=1: Transceiver has been inserted
*Mar  1 00:00:47.555: %SYS-5-RESTART: System restarted --
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
*Mar  1 00:00:48.377: %SYS-5-CONFIG_I: Configured from console by console


         --- System Configuration Dialog ---

Enable secret warning
----------------------------------
In order to access the device manager, an enable secret is required
If you enter the initial configuration dialog, you will be prompted for the enable secret
If you choose not to enter the intial configuration dialog, or if you exit setup without setting the enable secret,
please set an enable secret using the following CLI in configuration mode-
enable secret 0 <cleartext password>
----------------------------------
Would you like to enter the initial configuration dialog? [yes/no]: n
Switch>
*Mar  1 00:38:38.619: %LINK-5-CHANGED: Interface Vlan1, changed state to administratively down
Switch>
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#interface vlan 1
Switch(config-if)#ip address 10.10.22.110 255.255.255.0
Switch(config-if)#exit
Switch(config)#do show default-gateway
                         ^
% Invalid input detected at '^' marker.

Switch(config)#do show ip default-gateway
0.0.0.0
Switch(config)#ip default-gateway 10.10.22.1
Switch(config)#do show ip default-gateway
10.10.22.1
Switch(config)#
Switch(config)#
Switch(config)#hostname IND-SW-CD-pp
IND-SW-CD-pp(config)#hostname IND-SW-CD-PP
IND-SW-CD-PP(config)#ip domain-name hulamin.co.za
IND-SW-CD-PP(config)#line vty 0 15
IND-SW-CD-PP(config-line)#password eni2cam
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#crypto key generate rsa modulus 2048
The name for the keys will be: IND-SW-CD-PP.hulamin.co.za

% The key modulus size is 2048 bits
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 25 seconds)

IND-SW-CD-PP(config)#
*Mar  1 00:45:47.042: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-SW-CD-PP(config)#ip ssh version 2
IND-SW-CD-PP(config)#line vty 0 5
IND-SW-CD-PP(config-line)#transport input ssh
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#rxit
                            ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#vlan 2
IND-SW-CD-PP(config-vlan)#name Gijima
IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#interface range FastEthernet 1/3-4
IND-SW-CD-PP(config-if-range)#do show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
2    Gijima                           active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
1    enet  100001     1500  -      -      -        -    -        0      0
2    enet  100002     1500  -      -      -        -    -        0      0
1002 fddi  101002     1500  -      -      -        -    -        0      0
1003 tr    101003     1500  -      -      -        -    -        0      0
1004 fdnet 101004     1500  -      -      -        ieee -        0      0
1005 trnet 101005     1500  -      -      -        ibm  -        0      0

Remote SPAN VLANs
------------------------------------------------------------------------------


Primary Secondary Type              Ports
------- --------- ----------------- ------------------------------------------

IND-SW-CD-PP(config-if-range)#switchport mode access
IND-SW-CD-PP(config-if-range)#switchport access vlan 2
IND-SW-CD-PP(config-if-range)#do show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Gi1/1, Gi1/2
2    Gijima                           active    Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
1    enet  100001     1500  -      -      -        -    -        0      0
2    enet  100002     1500  -      -      -        -    -        0      0
1002 fddi  101002     1500  -      -      -        -    -        0      0
1003 tr    101003     1500  -      -      -        -    -        0      0
1004 fdnet 101004     1500  -      -      -        ieee -        0      0
1005 trnet 101005     1500  -      -      -        ibm  -        0      0

Remote SPAN VLANs
------------------------------------------------------------------------------


Primary Secondary Type              Ports
------- --------- ----------------- ------------------------------------------

IND-SW-CD-PP(config-if-range)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Gi1/1, Gi1/2
2    Gijima                           active    Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-CD-PP(config-if-range)#exit
IND-SW-CD-PP(config)#interface FastInterface 1/2
                                   ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#FastInterface 1/2
                       ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#interface FastEthernet 1/2
IND-SW-CD-PP(config-if)#

































IND-SW-CD-PP con0 is now available





Press RETURN to get started.





*Mar  1 01:07:07.546: %SYS-5-CONFIG_I: Configured from console by console
*Mar  1 01:33:27.071: %LINK-3-UPDOWN: Interface FastEthernet1/1, changed state to up
*Mar  1 01:33:28.077: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/1, changed state to up
IND-SW-CD-PP>enable
IND-SW-CD-PP#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  10.10.22.110    YES manual administratively down down
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-CD-PP#
*Mar  1 01:51:16.920: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/1, changed state to down
*Mar  1 01:51:17.918: %LINK-3-UPDOWN: Interface FastEthernet1/1, changed state to down
*Mar  1 01:51:21.031: %LINK-3-UPDOWN: Interface FastEthernet1/1, changed state to up
*Mar  1 01:51:22.037: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/1, changed state to up

































IND-SW-CD-PP con0 is now available





Press RETURN to get started.






IND-SW-CD-PP>ping 10.10.22.111
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 10.10.22.111, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
IND-SW-CD-PP>ipconfig
% Unknown command or computer name, or unable to find computer address
IND-SW-CD-PP>show ip domain-name
hulamin.co.za
IND-SW-CD-PP>enable
IND-SW-CD-PP#username Ind-it
              ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#username Ind-it privilege 15 secret Gijim@Pr0
              ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
IND-SW-CD-PP(config)#username Ind-it privilege 15 secret Gijim@Pr0
IND-SW-CD-PP(config)#ip default-gateway 10.10.22.1
IND-SW-CD-PP(config)#exit
IND-SW-CD-PP#sh
*Mar  1 02:07:12.131: %SYS-5-CONFIG_I: Configured from console by consoleow \
                  ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#
IND-SW-CD-PP#show ip route
                      ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#do show ip route
                ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#do show ip interface brief
                ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#do show interface brief
                ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#do show ip interface brief
                ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#do show interface brief
                ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#show interface
Vlan1 is administratively down, line protocol is down
  Hardware is EtherSVI, address is 0056.2b85.7540 (bia 0056.2b85.7540)
  Internet address is 10.10.22.110/24
  MTU 1500 bytes, BW 1000000 Kbit/sec, DLY 10 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive not supported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input 00:00:00, output 01:38:01, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     465 packets input, 54650 bytes, 0 no buffer
     Received 0 broadcasts (0 IP multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     25 packets output, 3385 bytes, 0 underruns
     0 output errors, 2 interface resets
     0 unknown protocol drops
     0 output buffer failures, 0 output buffers swapped out
FastEthernet1/1 is up, line protocol is up (connected)
  Hardware is Fast Ethernet, address is 0056.2b85.7503 (bia 0056.2b85.7503)
  MTU 1500 bytes, BW 100000 Kbit/sec, DLY 100 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Full-duplex, 100Mb/s, media type is 10/100BaseTX
  input flow-control is off, output flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input 00:05:25, output 00:00:00, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     3519 packets input, 482754 bytes, 0 no buffer
     Received 3519 broadcasts (2563 multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 2563 multicast, 0 pause input
     0 input packets with dribble condition detected
     1708 packets output, 172909 bytes, 0 underruns
     0 output errors, 0 collisions, 1 interface resets
     0 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
FastEthernet1/2 is down, line protocol is down (notconnect)
  Hardware is Fast Ethernet, address is 0056.2b85.7504 (bia 0056.2b85.7504)
  MTU 1500 bytes, BW 10000 Kbit/sec, DLY 1000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Auto-duplex, Auto-speed, media type is 10/100BaseTX
  input flow-control is off, output flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input never, output never, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     0 packets input, 0 bytes, 0 no buffer
     Received 0 broadcasts (0 multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 0 multicast, 0 pause input
     0 input packets with dribble condition detected
     0 packets output, 0 bytes, 0 underruns
     0 output errors, 0 collisions, 1 interface resets
     0 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
FastEthernet1/3 is down, line protocol is down (notconnect)
  Hardware is Fast Ethernet, address is 0056.2b85.7505 (bia 0056.2b85.7505)
  MTU 1500 bytes, BW 10000 Kbit/sec, DLY 1000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Auto-duplex, Auto-speed, media type is 10/100BaseTX
  input flow-control is off, output flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input never, output never, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     0 packets input, 0 bytes, 0 no buffer
     Received 0 broadcasts (0 multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 0 multicast, 0 pause input
     0 input packets with dribble condition detected
     0 packets output, 0 bytes, 0 underruns
     0 output errors, 0 collisions, 1 interface resets
     0 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
FastEthernet1/4 is down, line protocol is down (notconnect)
  Hardware is Fast Ethernet, address is 0056.2b85.7506 (bia 0056.2b85.7506)
  MTU 1500 bytes, BW 10000 Kbit/sec, DLY 1000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Auto-duplex, Auto-speed, media type is 10/100BaseTX
  input flow-control is off, output flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input never, output never, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     0 packets input, 0 bytes, 0 no buffer
     Received 0 broadcasts (0 multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 0 multicast, 0 pause input
     0 input packets with dribble condition detected
     0 packets output, 0 bytes, 0 underruns
     0 output errors, 0 collisions, 1 interface resets
     0 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
GigabitEthernet1/1 is down, line protocol is down (notconnect)
  Hardware is Gigabit Ethernet, address is 0056.2b85.7501 (bia 0056.2b85.7501)
  MTU 1500 bytes, BW 10000 Kbit/sec, DLY 1000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive not set
  Auto-duplex, Auto-speed, link type is auto, media type is 1000BaseSX SFP
  input flow-control is off, output flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input never, output never, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     0 packets input, 0 bytes, 0 no buffer
     Received 0 broadcasts (0 multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 0 multicast, 0 pause input
     0 input packets with dribble condition detected
     0 packets output, 0 bytes, 0 underruns
     0 output errors, 0 collisions, 1 interface resets
     0 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
GigabitEthernet1/2 is down, line protocol is down (notconnect)
  Hardware is Gigabit Ethernet, address is 0056.2b85.7502 (bia 0056.2b85.7502)
  MTU 1500 bytes, BW 10000 Kbit/sec, DLY 1000 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive not set
  Auto-duplex, Auto-speed, link type is auto, media type is Not Present
  input flow-control is off, output flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input never, output never, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     0 packets input, 0 bytes, 0 no buffer
     Received 0 broadcasts (0 multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 0 multicast, 0 pause input
     0 input packets with dribble condition detected
     0 packets output, 0 bytes, 0 underruns
     0 output errors, 0 collisions, 1 interface resets
     0 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
IND-SW-CD-PP#show interface brief
                             ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  10.10.22.110    YES manual administratively down down
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-CD-PP#do show ip interface brief
                ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  10.10.22.110    YES manual administratively down down
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-CD-PP#show interface brief
                             ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#dir flash
%Error opening flash:/flash (No such file or directory)
IND-SW-CD-PP#dir flash:
Directory of flash:/

    2  -rwx        1581   Mar 1 1993 02:33:09 +00:00  starup-config
    3  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  648  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  649  -rwx         616   Mar 1 1993 00:51:22 +00:00  vlan.dat
  651  -rwx        6168   Mar 1 1993 00:00:53 +00:00  multiple-fs
  650  -rwx        1314   Mar 1 1993 00:27:49 +00:00  start-config

64094208 bytes total (39593984 bytes free)
IND-SW-CD-PP#delete flash:vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
IND-SW-CD-PP#erase running-config startup-config
                   ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
IND-SW-CD-PP#
*Mar  1 02:23:05.589: %SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#reload

System configuration has been modified. Save? [yes/no]: n
Proceed with reload? [confirm]

*Mar  1 02:23:19.698: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload command.
Using driver version 1 for media type 1
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 0 seconds.
...done Initializing Flash.
done.
Loading "bs1:ies-hboot1-m"...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
File "bs1:ies-hboot1-m" uncompressed and installed, entry point: 0x7000000
executing...

Using driver version 3 for media type 1
Using driver version 3 for media type 2
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 1 seconds.
mifs[7]: 596 files, 54 directories
mifs[7]: Total bytes     :   64094208
mifs[7]: Bytes used      :   24498688
mifs[7]: Bytes available :   39595520
mifs[7]: mifs fsck took 26 seconds.
...done Initializing Flash.
done.
Loading "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin"...#######################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
################################################################################################################################################################################################################################

File "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin" uncompressed and installed, entry point: 0x3000
executing...

              Restricted Rights Legend

Use, duplication, or disclosure by the Government is
subject to restrictions as set forth in subparagraph
(c) of the Commercial Computer Software - Restricted
Rights clause at FAR sec. 52.227-19 and subparagraph
(c) (1) (ii) of the Rights in Technical Data and Computer
Software clause at DFARS sec. 252.227-7013.

           cisco Systems, Inc.
           170 West Tasman Drive
           San Jose, California 95134-1706



Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
Initializing flashfs...
Using driver version 4 for media type 1
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     : 258048
mifs[4]: Bytes used      : 133120
mifs[4]: Bytes available : 124928
mifs[4]: mifs fsck took 1 seconds.
mifs[4]: Initialization complete.

mifs[5]: 0 files, 1 directories
mifs[5]: Total bytes     : 1806336
mifs[5]: Bytes used      : 1024
mifs[5]: Bytes available : 1805312
mifs[5]: mifs fsck took 0 seconds.
mifs[5]: Initialization complete.

mifs[6]: 1 files, 1 directories
mifs[6]: Total bytes     : 11096064
mifs[6]: Bytes used      : 380416
mifs[6]: Bytes available : 10715648
mifs[6]: mifs fsck took 0 seconds.
mifs[6]: Initialization complete.

mifs[7]: 1 files, 1 directories
mifs[7]: Total bytes     : 18192384
mifs[7]: Bytes used      : 122368
mifs[7]: Bytes available : 18070016
mifs[7]: mifs fsck took 1 seconds.
mifs[7]: Initialization complete.

Using driver version 4 for media type 2
mifs[9]: 596 files, 54 directories
mifs[9]: Total bytes     : 64094208
mifs[9]: Bytes used      : 24498688
mifs[9]: Bytes available : 39595520
mifs[9]: mifs fsck took 0 seconds.
mifs[9]: Initialization complete.

...done Initializing flashfs.
Checking for Bootloader upgrade..

Boot Loader upgrade not needed(v)
POST: CPU MIC register Tests : Begin
POST: CPU MIC register Tests : End, Status Skipped

POST: PortASIC Memory Tests : Begin
POST: PortASIC Memory Tests : End, Status Skipped

Loading FPGA image from flash:/ies-lanbasek9-mz.152-4.EA5/fpga
Start FPGA programming (375883 bytes): / Done.

----------------------------------------------------------------
Cesium version information from file header:
a  Cesium.ncd b  2vp4fg456 c  2008/ 6/30 d  13:29: 0
----------------------------------------------------------------

POST: CPU MIC interface Loopback Tests : Begin
POST: CPU MIC interface Loopback Tests : End, Status Skipped

POST: PortASIC RingLoopback Tests : Begin
POST: PortASIC RingLoopback Tests : End, Status Skipped

POST: PortASIC CAM Subsystem Tests : Begin
POST: PortASIC CAM Subsystem Tests : End, Status Skipped

POST: PortASIC Port Loopback Tests : Begin
POST: PortASIC Port Loopback Tests : End, Status Skipped

Waiting for Port download...Complete


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


NAT is not supportedcisco IE-3000-4TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2022Z2UQ
Last reset from power-on
1 Virtual Ethernet interface
4 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:56:2B:85:75:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20218BAV
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-4TC
System serial number            : FOC2022Z2UQ
Top Assembly Part Number        : 800-28494-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFD00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x6D857500
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image
------ ----- -----                     ----------            ----------
*    1 6     IE-3000-4TC               15.2(4)EA5            IES-LANBASEK9-M




Press RETURN to get started!


*Mar  1 00:00:18.966: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down
*Mar  1 00:00:20.493: %SPANTREE-5-EXTENDED_SYSID: Extended SysId enabled for type vlan
*Mar  1 00:00:46.246: %PHY-5-TRANSCEIVERINSERTED: Slot=1 Port=1: Transceiver has been inserted
*Mar  1 00:00:47.454: %LINK-3-UPDOWN: Interface FastEthernet1/1, changed state to up
*Mar  1 00:00:47.580: %SYS-5-RESTART: System restarted --
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
*Mar  1 00:00:48.293: %SYS-5-CONFIG_I: Configured from console by console
*Mar  1 00:00:48.460: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/1, changed state to up
*Mar  1 00:01:17.468: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up


         --- System Configuration Dialog ---

Enable secret warning
----------------------------------
In order to access the device manager, an enable secret is required
If you enter the initial configuration dialog, you will be prompted for the enable secret
If you choose not to enter the intial configuration dialog, or if you exit setup without setting the enable secret,
please set an enable secret using the following CLI in configuration mode-
enable secret 0 <cleartext password>
----------------------------------
Would you like to enter the initial configuration dialog? [yes/no]: n
Switch>enable
Switch#enable secret eni1cam
              ^
% Invalid input detected at '^' marker.

Switch#
Switch#
Switch#
Switch#
Switch#
Switch#
Switch#
Switch#
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#interface vlan 1
Switch(config-if)#ip address 10.10.22.110 255.255.255.0
Switch(config-if)#exit
Switch(config)#ip default-gateway 10.10.22.1
Switch(config)#hostname IND-SW-CD-PP
IND-SW-CD-PP(config)#ip domain-name hulamin.co.za
IND-SW-CD-PP(config)#line vty 0 15
IND-SW-CD-PP(config-line)#secret eni2cam
                            ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config-line)#password eni2cam
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#enable secret eni1cam
IND-SW-CD-PP(config)#end
IND-SW-CD-PP#
*Mar  1 00:09:17.146: %SYS-5-CONFIG_I: Configured from console by consoleen
IND-SW-CD-PP#end
% Unknown command or computer name, or unable to find computer address
IND-SW-CD-PP#exit

































IND-SW-CD-PP con0 is now available





Press RETURN to get started.




IND-SW-CD-PP>enable
Password:
IND-SW-CD-PP#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
IND-SW-CD-PP(config)#vlan 2
IND-SW-CD-PP(config-vlan)#name Gijima
IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#interface range 1/3-4
                                     ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#interface range FastEthernet 1/3-4
IND-SW-CD-PP(config-if-range)#switchport access vlan
% Incomplete command.

IND-SW-CD-PP(config-if-range)#switchport access vlan 2
IND-SW-CD-PP(config-if-range)#switchport mode access
IND-SW-CD-PP(config-if-range)#switchport access vlan 2
IND-SW-CD-PP(config-if-range)#exit
IND-SW-CD-PP(config)#interface FastEthernet 1/2
IND-SW-CD-PP(config-if)#switchport mode trunk
IND-SW-CD-PP(config-if)#exit
IND-SW-CD-PP(config)#crypto key generate rsa modulus 2048
The name for the keys will be: IND-SW-CD-PP.hulamin.co.za

% The key modulus size is 2048 bits
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 25 seconds)

IND-SW-CD-PP(config)#
*Mar  1 00:16:14.672: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-SW-CD-PP(config)#ip ssh version 2
IND-SW-CD-PP(config)#line vty 0 5
IND-SW-CD-PP(config-line)#transport input ssh
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#do show interface brief
                                        ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  10.10.22.110    YES manual up                    up
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-CD-PP(config)#vlan 2
IND-SW-CD-PP(config-vlan)#name Gijima
IND-SW-CD-PP(config-vlan)#show vlan
                            ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#do show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Gi1/1, Gi1/2
2    Gijima                           active    Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
1    enet  100001     1500  -      -      -        -    -        0      0
2    enet  100002     1500  -      -      -        -    -        0      0
1002 fddi  101002     1500  -      -      -        -    -        0      0
1003 tr    101003     1500  -      -      -        -    -        0      0
1004 fdnet 101004     1500  -      -      -        ieee -        0      0
1005 trnet 101005     1500  -      -      -        ibm  -        0      0

Remote SPAN VLANs
------------------------------------------------------------------------------


Primary Secondary Type              Ports
------- --------- ----------------- ------------------------------------------

IND-SW-CD-PP(config)#do show vlan | ip interface brief
                                     ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#copy running-config startup-config
                       ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#exit
IND-SW-CD-PP#enable
*Mar  1 00:19:05.346: %SYS-5-CONFIG_I: Configured from console by c
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#cop run start
Destination filename [startup-config]?
Building configuration...
[OK]
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#dir flash
%Error opening flash:/flash (No such file or directory)
IND-SW-CD-PP#dir flash:
Directory of flash:/

    2  -rwx        1581   Mar 1 1993 02:33:09 +00:00  starup-config
    3  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  648  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  649  -rwx         616   Mar 1 1993 00:10:24 +00:00  vlan.dat
  650  -rwx        1314   Mar 1 1993 00:27:49 +00:00  start-config
  652  -rwx        1323   Mar 1 1993 00:19:17 +00:00  config.text
  653  -rwx        3568   Mar 1 1993 00:19:17 +00:00  private-config.text
  654  -rwx        6168   Mar 1 1993 00:19:17 +00:00  multiple-fs

64094208 bytes total (39587328 bytes free)
IND-SW-CD-PP#delete flash:vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
IND-SW-CD-PP#erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
IND-SW-CD-PP#
*Mar  1 00:20:46.387: %SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
IND-SW-CD-PP#
IND-SW-CD-PP#reload
Proceed with reload? [confirm]

*Mar  1 00:20:54.717: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload command.
Using driver version 1 for media type 1
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 0 seconds.
...done Initializing Flash.
done.
Loading "bs1:ies-hboot1-m"...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
File "bs1:ies-hboot1-m" uncompressed and installed, entry point: 0x7000000
executing...

Using driver version 3 for media type 1
Using driver version 3 for media type 2
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 1 seconds.
mifs[7]: 596 files, 54 directories
mifs[7]: Total bytes     :   64094208
mifs[7]: Bytes used      :   24498688
mifs[7]: Bytes available :   39595520
mifs[7]: mifs fsck took 26 seconds.
...done Initializing Flash.
done.
Loading "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin"...#######################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
################################################################################################################################################################################################################################

File "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin" uncompressed and installed, entry point: 0x3000
executing...

              Restricted Rights Legend

Use, duplication, or disclosure by the Government is
subject to restrictions as set forth in subparagraph
(c) of the Commercial Computer Software - Restricted
Rights clause at FAR sec. 52.227-19 and subparagraph
(c) (1) (ii) of the Rights in Technical Data and Computer
Software clause at DFARS sec. 252.227-7013.

           cisco Systems, Inc.
           170 West Tasman Drive
           San Jose, California 95134-1706



Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
Initializing flashfs...
Using driver version 4 for media type 1
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     : 258048
mifs[4]: Bytes used      : 133120
mifs[4]: Bytes available : 124928
mifs[4]: mifs fsck took 1 seconds.
mifs[4]: Initialization complete.

mifs[5]: 0 files, 1 directories
mifs[5]: Total bytes     : 1806336
mifs[5]: Bytes used      : 1024
mifs[5]: Bytes available : 1805312
mifs[5]: mifs fsck took 0 seconds.
mifs[5]: Initialization complete.

mifs[6]: 1 files, 1 directories
mifs[6]: Total bytes     : 11096064
mifs[6]: Bytes used      : 380416
mifs[6]: Bytes available : 10715648
mifs[6]: mifs fsck took 0 seconds.
mifs[6]: Initialization complete.

mifs[7]: 1 files, 1 directories
mifs[7]: Total bytes     : 18192384
mifs[7]: Bytes used      : 122368
mifs[7]: Bytes available : 18070016
mifs[7]: mifs fsck took 1 seconds.
mifs[7]: Initialization complete.

Using driver version 4 for media type 2
mifs[9]: 596 files, 54 directories
mifs[9]: Total bytes     : 64094208
mifs[9]: Bytes used      : 24498688
mifs[9]: Bytes available : 39595520
mifs[9]: mifs fsck took 0 seconds.
mifs[9]: Initialization complete.

...done Initializing flashfs.
Checking for Bootloader upgrade..
Boot Loader upgrade not needed(v)

POST: CPU MIC register Tests : Begin
POST: CPU MIC register Tests : End, Status Skipped

POST: PortASIC Memory Tests : Begin
POST: PortASIC Memory Tests : End, Status Skipped

Loading FPGA image from flash:/ies-lanbasek9-mz.152-4.EA5/fpga
Start FPGA programming (375883 bytes): / Done.

----------------------------------------------------------------
Cesium version information from file header:
a  Cesium.ncd b  2vp4fg456 c  2008/ 6/30 d  13:29: 0
----------------------------------------------------------------

POST: CPU MIC interface Loopback Tests : Begin
POST: CPU MIC interface Loopback Tests : End, Status Skipped

POST: PortASIC RingLoopback Tests : Begin
POST: PortASIC RingLoopback Tests : End, Status Skipped

POST: PortASIC CAM Subsystem Tests : Begin
POST: PortASIC CAM Subsystem Tests : End, Status Skipped

POST: PortASIC Port Loopback Tests : Begin
POST: PortASIC Port Loopback Tests : End, Status Skipped

Waiting for Port download...Complete


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


NAT is not supportedcisco IE-3000-4TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2022Z2UQ
Last reset from power-on
1 Virtual Ethernet interface
4 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:56:2B:85:75:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20218BAV
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-4TC
System serial number            : FOC2022Z2UQ
Top Assembly Part Number        : 800-28494-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFD00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x6D857500
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image
------ ----- -----                     ----------            ----------
*    1 6     IE-3000-4TC               15.2(4)EA5            IES-LANBASEK9-M




Press RETURN to get started!


*Mar  1 00:00:18.958: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down
*Mar  1 00:00:20.484: %SPANTREE-5-EXTENDED_SYSID: Extended SysId enabled for type vlan
*Mar  1 00:00:46.246: %PHY-5-TRANSCEIVERINSERTED: Slot=1 Port=1: Transceiver has been inserted
*Mar  1 00:00:47.462: %LINK-3-UPDOWN: Interface FastEthernet1/1, changed state to up
*Mar  1 00:00:47.588: %SYS-5-RESTART: System restarted --
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
*Mar  1 00:00:48.402: %SYS-5-CONFIG_I: Configured from console by console
*Mar  1 00:00:48.469: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/1, changed state to up


         --- System Configuration Dialog ---

Enable secret warning
----------------------------------
In order to access the device manager, an enable secret is required
If you enter the initial configuration dialog, you will be prompted for the enable secret
If you choose not to enter the intial configuration dialog, or if you exit setup without setting the enable secret,
please set an enable secret using the following CLI in configuration mode-
enable secret 0 <cleartext password>
----------------------------------
Would you like to enter the initial configuration dialog? [yes/no]: n
Switch>
Switch>
Switch>
Switch>
Switch>
Switch>
Switch>
*Mar  1 00:01:06.144: %LINK-5-CHANGED: Interface Vlan1, changed state to administratively down
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#show vlan
                 ^
% Invalid input detected at '^' marker.

Switch(config)#do show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
1    enet  100001     1500  -      -      -        -    -        0      0
1002 fddi  101002     1500  -      -      -        -    -        0      0
1003 tr    101003     1500  -      -      -        -    -        0      0
1004 fdnet 101004     1500  -      -      -        ieee -        0      0
1005 trnet 101005     1500  -      -      -        ibm  -        0      0

Remote SPAN VLANs
------------------------------------------------------------------------------


Primary Secondary Type              Ports
------- --------- ----------------- ------------------------------------------

Switch(config)#
Switch(config)#
Switch(config)#
Switch(config)#
Switch(config)#vlan 1
Switch(config-vlan)#exit
Switch(config)#interface vlan 1
Switch(config-if)#
Switch(config-if)#
Switch(config-if)#
Switch(config-if)#ip address 10.10.22.110 255.255.255.0
Switch(config-if)#ip default-gateway 10.10.22.1
Switch(config)#
Switch(config)#
Switch(config)#
Switch(config)#hostname IND-SW-CD-PP
IND-SW-CD-PP(config)#ip domain-name hulamin.co.za
IND-SW-CD-PP(config)#line vty 0 15
IND-SW-CD-PP(config-line)#password eni2cam
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#enable secret eni1cam
IND-SW-CD-PP(config)#crypto key generate rsa modulus 2048
The name for the keys will be: IND-SW-CD-PP.hulamin.co.za

% The key modulus size is 2048 bits
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 21 seconds)

IND-SW-CD-PP(config)#
*Mar  1 00:07:53.444: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#ip ssh version 2
IND-SW-CD-PP(config)#line vty 0 5
IND-SW-CD-PP(config-line)#switchport mode access
                           ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config-line)#transport input ssh
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#vlan 2
IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#do show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
2    VLAN0002                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
1    enet  100001     1500  -      -      -        -    -        0      0
2    enet  100002     1500  -      -      -        -    -        0      0
1002 fddi  101002     1500  -      -      -        -    -        0      0
1003 tr    101003     1500  -      -      -        -    -        0      0
1004 fdnet 101004     1500  -      -      -        ieee -        0      0
1005 trnet 101005     1500  -      -      -        ibm  -        0      0

Remote SPAN VLANs
------------------------------------------------------------------------------


Primary Secondary Type              Ports
------- --------- ----------------- ------------------------------------------

IND-SW-CD-PP(config)#vlan 2
IND-SW-CD-PP(config-vlan)#name Gijima
IND-SW-CD-PP(config-vlan)#do show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
2    VLAN0002                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2
---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------
1    enet  100001     1500  -      -      -        -    -        0      0
2    enet  100002     1500  -      -      -        -    -        0      0
1002 fddi  101002     1500  -      -      -        -    -        0      0
1003 tr    101003     1500  -      -      -        -    -        0      0
1004 fdnet 101004     1500  -      -      -        ieee -        0      0
1005 trnet 101005     1500  -      -      -        ibm  -        0      0

Remote SPAN VLANs
------------------------------------------------------------------------------


Primary Secondary Type              Ports
------- --------- ----------------- ------------------------------------------

IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#interface range FastEthernet 1/3-4
IND-SW-CD-PP(config-if-range)#swithport mode access
                                  ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config-if-range)#switchport mode access
IND-SW-CD-PP(config-if-range)#switchport mode?
mode

IND-SW-CD-PP(config-if-range)#switchport?
switchport

IND-SW-CD-PP(config-if-range)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
2    Gijima                           active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-CD-PP(config-if-range)#
IND-SW-CD-PP(config-if-range)#
IND-SW-CD-PP(config-if-range)#
IND-SW-CD-PP(config-if-range)#switchport access vlan 2
IND-SW-CD-PP(config-if-range)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Gi1/1, Gi1/2
2    Gijima                           active    Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-CD-PP(config-if-range)#exit
IND-SW-CD-PP(config)#interface FastEthernet 1/2
IND-SW-CD-PP(config-if)#switchport mode trunk
IND-SW-CD-PP(config-if)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Gi1/1, Gi1/2
2    Gijima                           active    Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-CD-PP(config-if)#exit
IND-SW-CD-PP(config)#exit
IND-SW-CD-PP#
*Mar  1 00:15:03.335: %SYS-5-CONFIG_I: Configured from console by console
IND-SW-CD-PP#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#show flash:

Directory of flash:/

    2  -rwx        1581   Mar 1 1993 02:33:09 +00:00  starup-config
    3  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  648  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  649  -rwx         616   Mar 1 1993 00:11:00 +00:00  vlan.dat
  650  -rwx        1314   Mar 1 1993 00:27:49 +00:00  start-config
  652  -rwx        1333   Mar 1 1993 00:15:26 +00:00  config.text
  653  -rwx        3568   Mar 1 1993 00:15:26 +00:00  private-config.text
  654  -rwx        6168   Mar 1 1993 00:15:26 +00:00  multiple-fs

64094208 bytes total (39587328 bytes free)
IND-SW-CD-PP#delete flash:vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
IND-SW-CD-PP#erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
IND-SW-CD-PP#
*Mar  1 00:16:20.728: %SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
IND-SW-CD-PP#
IND-SW-CD-PP#reload
Proceed with reload? [confirm]

*Mar  1 00:16:44.502: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload command.
Using driver version 1 for media type 1
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 0 seconds.
...done Initializing Flash.
done.
Loading "bs1:ies-hboot1-m"...@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
File "bs1:ies-hboot1-m" uncompressed and installed, entry point: 0x7000000
executing...

Using driver version 3 for media type 1
Using driver version 3 for media type 2
Base ethernet MAC Address: 00:56:2b:85:75:00
Xmodem file system is available.
The password-recovery mechanism is enabled.
Initializing Flash...
mifs[2]: 1 files, 1 directories
mifs[2]: Total bytes     :     258048
mifs[2]: Bytes used      :     133120
mifs[2]: Bytes available :     124928
mifs[2]: mifs fsck took 0 seconds.
mifs[3]: 0 files, 1 directories
mifs[3]: Total bytes     :    1806336
mifs[3]: Bytes used      :       1024
mifs[3]: Bytes available :    1805312
mifs[3]: mifs fsck took 0 seconds.
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     :   11096064
mifs[4]: Bytes used      :     380416
mifs[4]: Bytes available :   10715648
mifs[4]: mifs fsck took 1 seconds.
mifs[5]: 1 files, 1 directories
mifs[5]: Total bytes     :   18192384
mifs[5]: Bytes used      :     122368
mifs[5]: Bytes available :   18070016
mifs[5]: mifs fsck took 1 seconds.
mifs[7]: 596 files, 54 directories
mifs[7]: Total bytes     :   64094208
mifs[7]: Bytes used      :   24498688
mifs[7]: Bytes available :   39595520
mifs[7]: mifs fsck took 26 seconds.
...done Initializing Flash.
done.
Loading "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin"...#######################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
################################################################################################################################################################################################################################

File "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin" uncompressed and installed, entry point: 0x3000
executing...

              Restricted Rights Legend

Use, duplication, or disclosure by the Government is
subject to restrictions as set forth in subparagraph
(c) of the Commercial Computer Software - Restricted
Rights clause at FAR sec. 52.227-19 and subparagraph
(c) (1) (ii) of the Rights in Technical Data and Computer
Software clause at DFARS sec. 252.227-7013.

           cisco Systems, Inc.
           170 West Tasman Drive
           San Jose, California 95134-1706



Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
Initializing flashfs...
Using driver version 4 for media type 1
mifs[4]: 1 files, 1 directories
mifs[4]: Total bytes     : 258048
mifs[4]: Bytes used      : 133120
mifs[4]: Bytes available : 124928
mifs[4]: mifs fsck took 1 seconds.
mifs[4]: Initialization complete.

mifs[5]: 0 files, 1 directories
mifs[5]: Total bytes     : 1806336
mifs[5]: Bytes used      : 1024
mifs[5]: Bytes available : 1805312
mifs[5]: mifs fsck took 0 seconds.
mifs[5]: Initialization complete.

mifs[6]: 1 files, 1 directories
mifs[6]: Total bytes     : 11096064
mifs[6]: Bytes used      : 380416
mifs[6]: Bytes available : 10715648
mifs[6]: mifs fsck took 0 seconds.
mifs[6]: Initialization complete.

mifs[7]: 1 files, 1 directories
mifs[7]: Total bytes     : 18192384
mifs[7]: Bytes used      : 122368
mifs[7]: Bytes available : 18070016
mifs[7]: mifs fsck took 1 seconds.
mifs[7]: Initialization complete.

Using driver version 4 for media type 2
mifs[9]: 596 files, 54 directories
mifs[9]: Total bytes     : 64094208
mifs[9]: Bytes used      : 24498688
mifs[9]: Bytes available : 39595520
mifs[9]: mifs fsck took 0 seconds.
mifs[9]: Initialization complete.

...done Initializing flashfs.
Checking for Bootloader upgrade..

Boot Loader upgrade not needed(v)
POST: CPU MIC register Tests : Begin
POST: CPU MIC register Tests : End, Status Skipped

POST: PortASIC Memory Tests : Begin
POST: PortASIC Memory Tests : End, Status Skipped

Loading FPGA image from flash:/ies-lanbasek9-mz.152-4.EA5/fpga
Start FPGA programming (375883 bytes): / Done.

----------------------------------------------------------------
Cesium version information from file header:
a  Cesium.ncd b  2vp4fg456 c  2008/ 6/30 d  13:29: 0
----------------------------------------------------------------

POST: CPU MIC interface Loopback Tests : Begin
POST: CPU MIC interface Loopback Tests : End, Status Skipped

POST: PortASIC RingLoopback Tests : Begin
POST: PortASIC RingLoopback Tests : End, Status Skipped

POST: PortASIC CAM Subsystem Tests : Begin
POST: PortASIC CAM Subsystem Tests : End, Status Skipped

POST: PortASIC Port Loopback Tests : Begin
POST: PortASIC Port Loopback Tests : End, Status Skipped

Waiting for Port download...Complete


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


NAT is not supportedcisco IE-3000-4TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
Processor board ID FOC2022Z2UQ
Last reset from power-on
1 Virtual Ethernet interface
4 FastEthernet interfaces
2 Gigabit Ethernet interfaces
The password-recovery mechanism is enabled.

64K bytes of flash-simulated non-volatile configuration memory.
Base ethernet MAC Address       : 00:56:2B:85:75:00
Motherboard assembly number     : 73-15595-01
Motherboard serial number       : FOC20218BAV
Model revision number           : S0
Motherboard revision number     : A0
Model number                    : IE-3000-4TC
System serial number            : FOC2022Z2UQ
Top Assembly Part Number        : 800-28494-03
Top Assembly Revision Number    : A0
Version ID                      : V03
CLEI Code Number                : CMMFD00ARB
Hardware Board Revision Number  : 0x02
CIP Serial Number               : 0x6D857500
SKU Brand Name                  : Cisco
cesium fpga version             : 2008.6.30


Switch Ports Model                     SW Version            SW Image
------ ----- -----                     ----------            ----------
*    1 6     IE-3000-4TC               15.2(4)EA5            IES-LANBASEK9-M




Press RETURN to get started!


*Mar  1 00:00:18.958: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down
*Mar  1 00:00:20.484: %SPANTREE-5-EXTENDED_SYSID: Extended SysId enabled for type vlan
*Mar  1 00:00:46.246: %PHY-5-TRANSCEIVERINSERTED: Slot=1 Port=1: Transceiver has been inserted
*Mar  1 00:00:47.445: %LINK-3-UPDOWN: Interface FastEthernet1/1, changed state to up
*Mar  1 00:00:47.571: %SYS-5-RESTART: System restarted --
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
*Mar  1 00:00:48.360: %SYS-5-CONFIG_I: Configured from console by console
*Mar  1 00:00:48.452: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/1, changed state to up
*Mar  1 00:01:17.351: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up


         --- System Configuration Dialog ---

Enable secret warning
----------------------------------
In order to access the device manager, an enable secret is required
If you enter the initial configuration dialog, you will be prompted for the enable secret
If you choose not to enter the intial configuration dialog, or if you exit setup without setting the enable secret,
please set an enable secret using the following CLI in configuration mode-
enable secret 0 <cleartext password>
----------------------------------
Would you like to enter the initial configuration dialog? [yes/no]: n
Switch>
*Mar  1 00:01:29.355: %LINK-5-CHANGED: Interface Vlan1, changed state to administratively down
*Mar  1 00:01:29.363: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down
Switch>
```