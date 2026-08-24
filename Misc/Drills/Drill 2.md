``` text
IND-SW-CD-PP>enable
Password:
IND-SW-CD-PP#dir flash:
Directory of flash:/

  652  -rwx        6168   Mar 1 1993 00:00:35 +00:00  multiple-fs
    2  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  647  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  648  -rwx        2716   Mar 1 1993 00:00:27 +00:00  vlan.dat
  649  -rwx        2697   Mar 1 1993 00:58:16 +00:00  config.text
  651  -rwx        1916   Mar 1 1993 00:58:16 +00:00  private-config.text

64094208 bytes total (39590400 bytes free)
IND-SW-CD-PP#erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
IND-SW-CD-PP#delete flash:vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
IND-SW-CD-PP#reload
Proceed with reload? [confirm]

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
mifs[7]: 594 files, 54 directories
mifs[7]: Total bytes     :   64094208
mifs[7]: Bytes used      :   24494080
mifs[7]: Bytes available :   39600128
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
mifs[9]: 594 files, 54 directories
mifs[9]: Total bytes     : 64094208
mifs[9]: Bytes used      : 24494080
mifs[9]: Bytes available : 39600128
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
*Mar  1 00:00:46.254: %PHY-5-TRANSCEIVERINSERTED: Slot=1 Port=1: Transceiver has been inserted
*Mar  1 00:00:47.462: %LINK-3-UPDOWN: Interface FastEthernet1/1, changed state to up
*Mar  1 00:00:47.580: %SYS-5-RESTART: System restarted --
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
*Mar  1 00:00:48.318: %SYS-5-CONFIG_I: Configured from console by console
*Mar  1 00:00:48.469: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/1, changed state to up
*Mar  1 00:01:17.250: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up


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
Switch>show running-config
             ^
% Invalid input detected at '^' marker.

Switch>enable
Switch#show running-config
Building configuration...

Current configuration : 911 bytes
!
! Last configuration change at 00:00:48 UTC Mon Mar 1 1993
!
version 15.2
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname Switch
!
boot-start-marker
boot-end-marker
!
!
no aaa new-model
system mtu routing 1500
ptp mode e2etransparent
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
no mac authentication
mac authentication table version 0
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
vlan internal allocation policy ascending
lldp run
!
!
!
!
!
!
interface FastEthernet1/1
!
interface FastEthernet1/2
!
interface FastEthernet1/3
!
interface FastEthernet1/4
!
interface GigabitEthernet1/1
!
interface GigabitEthernet1/2
!
interface Vlan1
 no ip address
!
ip http server
ip http secure-server
!
!
!
line con 0
line vty 5 15
!
!
end

Switch#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
Switch#show vtp status
VTP Version capable             : 1 to 3
VTP version running             : 1
VTP Domain Name                 :
VTP Pruning Mode                : Disabled
VTP Traps Generation            : Disabled
Device ID                       : 0056.2b85.7500
Configuration last modified by 0.0.0.0 at 0-0-00 00:00:00
Local updater ID is 0.0.0.0 (no valid interface found)

Feature VLAN:
--------------
VTP Operating Mode                : Server
Maximum VLANs supported locally   : 1005
Number of existing VLANs          : 5
Configuration Revision            : 0
MD5 digest                        : 0x57 0xCD 0x40 0x65 0x63 0x59 0x47 0xBD
                                    0x56 0x9D 0x4A 0x3E 0xA5 0x69 0x35 0xBC
Switch#show version
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team

ROM: Bootstrap program is Xmen2 boot loader
BOOTLDR: IES Boot Loader (IES-HBOOT-M) Version 12.2(53r)EZ3, RELEASE SOFTWARE (fc1)

Switch uptime is 39 minutes
System returned to ROM by power-on
System image file is "flash:/ies-lanbasek9-mz.152-4.EA5/ies-lanbasek9-mz.152-4.EA5.bin"
Last reload reason: Reload command



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

cisco IE-3000-4TC (PowerPC405) processor (revision S0) with 131072K bytes of memory.
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


Configuration register is 0xF

Switch#
```
