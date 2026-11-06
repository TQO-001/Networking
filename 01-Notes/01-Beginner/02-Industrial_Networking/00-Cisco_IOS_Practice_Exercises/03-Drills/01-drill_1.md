# Cisco IOS Switch Configuration Documentation

### Section 1: Initial Setup & Management IP
```cisco
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#interface vlan
% Incomplete command.

Switch(config)#interface vlan 1
Switch(config-if)#ip address 10.10.22.110 255.255.255.0
Switch(config-if)#exit
Switch(config)#ip default-gateway 10.10.22.1
Switch(config)#
```

### Section 2: Device Naming & Line Security
- `ip domain-name` command - I forgot whether `domain-name` was one word with a dash or two words and I forgot it was a subcommand of `ip` command.
```cisco
Switch(config)#hostname IND-SW-CD-PP
IND-SW-CD-PP(config)#domain
IND-SW-CD-PP(config)#domain?
% Unrecognized command
IND-SW-CD-PP(config)#domain
                       ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#domain-name?
% Unrecognized command
IND-SW-CD-PP(config)#domain-nameip doman
IND-SW-CD-PP(config)#ip dom
IND-SW-CD-PP(config)#ip domain-n
IND-SW-CD-PP(config)#ip domain-name?
domain-name

IND-SW-CD-PP(config)#ip domain-name hulamin.co.za
```

- What I did was correct as the `secret` command can work for line security but it seems the `secret` keyword **does not exist** directly inside the line configuration mode (`config-line`) on standard Cisco IOS switches. So how switch is probably too old.
```cisco
IND-SW-CD-PP(config)#line vty 0 15
IND-SW-CD-PP(config-line)#secret [insert-password]
                            ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config-line)#password [insert-password]
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#console 0
                        ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#line console 0
IND-SW-CD-PP(config-line)#password [insert-password]
```

#### **Here I did my own thing dunno, why**
```cisco
IND-SW-CD-PP(config-line)#enable secret [enable-password]
IND-SW-CD-PP(config)#show enable secret
                       ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#show enable
                       ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#show running-config
                       ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#do show enable
                               ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#do show running-config brief
Building configuration...

Current configuration : 1134 bytes
!
! Last configuration change at 00:00:48 UTC Mon Mar 1 1993
!
version 15.2
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname IND-SW-CD-PP
!
boot-start-marker
boot-end-marker
!
enable secret 5 $1$859A$UnB261ao4ohTXSdYVmfpA/
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
ip domain-name hulamin.co.za
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
 ip address 10.10.22.110 255.255.255.0
!
ip default-gateway 10.10.22.1
ip http server
ip http secure-server
!
!
!
line con 0
 password [insert-password]
line vty 0 4
 password [insert-password]
 login
line vty 5 15
 password [insert-password]
 login
!
!
end

IND-SW-CD-PP(config)#use
IND-SW-CD-PP(config)#usern
IND-SW-CD-PP(config)#username Ind-it
IND-SW-CD-PP(config)#username Ind-it password [insert-wrong-password]
IND-SW-CD-PP(config)#username Ind-it password [insert-password]
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#cypto key generate rsa modulus 2048
                      ^
% Invalid input detected at '^' marker.
```

### Section 3: SSH Hardening
- This is a matter of doing something over and over, I memorized the process and knew the command `login local` fit in somewhere but I didn't know where.
```cisco
IND-SW-CD-PP(config)#crypto key generate rsa modulus 2048
The name for the keys will be: IND-SW-CD-PP.hulamin.co.za

% The key modulus size is 2048 bits
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 57 seconds)

IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
*Mar  2 18:47:23.762: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#ip ssh version 2
IND-SW-CD-PP(config)#login local
                           ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#line vty 0 5
IND-SW-CD-PP(config-line)#transport input ssh
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#exit
```

### Section 4: VLAN Creation & Port Configuration
```cisco
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#vlan 2
IND-SW-CD-PP(config-vlan)#name Gijima
IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  10.10.22.110    YES manual up                    down
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#interface range fa 1/2-4
IND-SW-CD-PP(config-if-range)#switchport mode access
IND-SW-CD-PP(config-if-range)#switchport access vlan 2
IND-SW-CD-PP(config-if-range)#exit
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#
IND-SW-CD-PP(config)#interface gig 1/2
IND-SW-CD-PP(config-if)#switchport mode trunk
IND-SW-CD-PP(config-if)#exit
```

### Section 5: Saving Configuration
- I made the mistake of executing `copy runnning-config startup-config` on the configure terminal.
```cisco
IND-SW-CD-PP(config)#copy running-config startup-config
                       ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP(config)#exit
IND-SW-CD-PP#configure terminal
*Mar  2 18:54:57.602: %SYS-5-CONFIG_I: Configured from
IND-SW-CD-PP#
IND-SW-CD-PP#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
IND-SW-CD-PP#
IND-SW-CD-PP#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Gi1/1, Gi1/2
2    Gijima                           active    Fa1/2, Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-SW-CD-PP#
IND-SW-CD-PP#
IND-SW-CD-PP#
```

### Reloading the Switch
- The only mistake I made here was miss spelling `erase startup-config`
```cisco

IND-SW-CD-PP>enable
Password:
IND-SW-CD-PP#show flash:

Directory of flash:/

    2  -rwx        1581   Mar 1 1993 02:33:09 +00:00  starup-config
    3  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  648  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  649  -rwx         616   Mar 2 1993 18:49:15 +00:00  vlan.dat
  650  -rwx        1314   Mar 1 1993 00:27:49 +00:00  start-config
  652  -rwx        1436   Mar 2 1993 18:55:22 +00:00  config.text
  653  -rwx        3575   Mar 2 1993 18:55:22 +00:00  private-config.text
  654  -rwx        6168   Mar 2 1993 18:55:22 +00:00  multiple-fs

64094208 bytes total (39587328 bytes free)
IND-SW-CD-PP#delete flash:vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
IND-SW-CD-PP#erase start-config
                        ^
% Invalid input detected at '^' marker.

IND-SW-CD-PP#erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
IND-SW-CD-PP#
*Mar  2 19:19:43.502: %SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
IND-SW-CD-PP#reload
Proceed with reload? [confirm]

*Mar  2 19:19:57.444: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload command.
```

# Areas Of Improvement
- **Understanding** - I don't understand what some commands **actually** do, I just when we are supposed to "put" a certain command. Having a basic understanding of the commands would be helpful for me in the long run.
- **Confidence** - I tend to doubt myself which is mainly because of the first point above but building that confidence comes with experience.
- **Commands & Sub-Commands** - I need to understand that some commands won't work 