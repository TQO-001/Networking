# Cisco IOS Switch Configuration Task
The more you practice learning how to configure a switch in different ways, the easier it will become to memorize the commands and task given to you. Some of the objectives you will have to complete will not be used in a real working environment but the key to understanding why something **is/isn't** used is to understand how it works.

Unlike your walkthrough Exercises These tasks will assume you have a basic understanding of the task given. For example unless stated otherwise used the most convenient form of connection to a device, whether that be Serial-to-USB, SSH or even Telnet.

![[IE-3000-4TC.jpg|343]]

>**Cisco Catalyst IE-3300 Rugged Switch IE-3300-8T2S-E**

---
## Concepts explored
- Naming a switch
- Creating a user and user password on the switch
- Creating a **secure** Configuration mode password
- VLAN Configuraiton:
	- Creating a VLAN
	- Naming a VLAN
	- Assign port to a VLAN
	- Assign a IP address to a VLAN
- SSH and Telnet Configuration
- Testing Connectivity of devices
- Cisco IOS [[Switch_Commands]]:
	- `enable`, `enable secret [enable_password]`
	- `configure terminal`
	- `exit`
	- `hostname [switch_name]`
	- `username [username] secret [user_password`
	- `do [command]`
	- `show [data]`, `show vlan`, `do show vlan`, `show vlan brief`, `do show vlan brief`,
	- `show ip interface`, `show ip interface brief`, `do show ip interface brief`
	- `vlan [vlan-id]`
	- `name [vlan_name]`
	- `interface [type] [number]`
	- `switchport mode access`
	- `switchport access vlan [vlan-id]`
	- `no [command]`, `no shutdown`
	- `ip address [ip_address] [subnet_mask]`
	- `ip default-gateway [default_gateway_ip_address]`
	- `ip domain-name [domain_name]`
	- `crypto key generate rsa`, `crypto key generate rsa modulus 2048`
	- `ip ssh version [ssh_version]`
	- `ip ssh time-out [seconds]`
	- `line vty [remote_session_line_start] [remote_session_line_end]`
	- `transport input [protocol(s)]`
	- `login local`
	- `copy running-config startup-config`
	- `ping [ip_address]`

	- `delete [data]`, `delete flash:vlan.dat`
	- `erase startup-config`
	- `reload`

---
## What you will need
-  A LAN cable
- Serial-to-USB cable
- 2 PCs or Laptops
- A Cisco Switch with at *least* 6 ports (for this example we'll use a ***Cisco Catalyst IE-3300 Rugged Switch IE-3300-8T2S-E*** - old model)
- PuTTY or MobaXterm

---
## Complete the following:
1. Change the name of the Switch to `IND-ED-TEST`
2. Create VLANs, assign 1 port to each VLAN and give them their own names (One of them has to be named **MGMT**) - 10, 20, 30, 40, 50
3. Give the **MGMT (MANAGEMENT)** VLAN an IP address - `192.168.10.2/24`\
4. Enable SSH and Telnet

---
---
# Simulation
Let's try and simulate the task we were given, I won't include the documentation for the simulation as it would be somewhat redundant when we actually configure the actual switch and document the same process again.
![[Switch-Configuration-Simulation-Topology.png]]
### Cisco IOS CLI: show running-config (IND-ED-TEST)
```cisco
IND-ED-TEST#show running-config

Building configuration...

Current configuration : 1355 bytes
-----------------------------------------------------------------------

version 17.6

no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
-----------------------------------------------------------------------

hostname IND-ED-TEST
-----------------------------------------------------------------------

enable secret 5 $1$mERr$N49N/oZCXZ9WPbPXa/EqU.
-----------------------------------------------------------------------

no ip cef
no ipv6 cef
-----------------------------------------------------------------------

ptp mode e2etransparent
username Ind-it secret 5 $1$mERr$J8RttO1C8lRkTGfOkXb.C/
-----------------------------------------------------------------------

ip ssh version 2
ip ssh time-out 60
ip domain-name george.local
-----------------------------------------------------------------------

spanning-tree mode pvst
-----------------------------------------------------------------------

interface GigabitEthernet1/1
-----------------------------------------------------------------------

interface GigabitEthernet1/2
switchport access vlan 10
-----------------------------------------------------------------------

interface GigabitEthernet1/3
switchport access vlan 10
switchport mode access
-----------------------------------------------------------------------

interface GigabitEthernet1/4
switchport access vlan 20
switchport mode access
-----------------------------------------------------------------------

interface GigabitEthernet1/5
switchport access vlan 20
-----------------------------------------------------------------------

interface GigabitEthernet1/6
switchport access vlan 30
-----------------------------------------------------------------------

interface GigabitEthernet1/7
switchport access vlan 30
-----------------------------------------------------------------------

interface GigabitEthernet1/8
switchport access vlan 40
-----------------------------------------------------------------------

interface GigabitEthernet1/9
switchport access vlan 40
-----------------------------------------------------------------------

interface GigabitEthernet1/10
switchport access vlan 50
-----------------------------------------------------------------------

interface Vlan1
no ip address
shutdown
-----------------------------------------------------------------------

interface Vlan30
mac-address 0050.0f73.8301
ip address 192.168.10.2 255.255.255.0
-----------------------------------------------------------------------

ip default-gateway 192.168.10.1
ip classless
-----------------------------------------------------------------------

ip flow-export version 9
-----------------------------------------------------------------------

line con 0
-----------------------------------------------------------------------

line aux 0
-----------------------------------------------------------------------

line vty 0 4
login local
line vty 5 15
login local
-----------------------------------------------------------------------

end

IND-ED-TEST#
```

### Cisco IOS CLI: ping 192.168.10.3 (IE-3400 - IND-ED-TEST)
```cisco
IND-ED-TEST#ping 192.168.10.3
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.10.3, timeout is 2 seconds:
.!!!!
Success rate is 80 percent (4/5), round-trip min/avg/max = 0/0/1 ms

IND-ED-TEST#ping 192.168.10.3
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.10.3, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 0/0/1 ms
IND-ED-TEST#
```

### Cicso Packet Tracer Personal PC CMD : ping 192.168.10.2 (Laptop-PT)
```cisco

Cisco Packet Tracer PC Command Line 1.0
C:\>ping 192.168.10.2

Pinging 192.168.10.2 with 32 bytes of data:

Reply from 192.168.10.2: bytes=32 time=5ms TTL=255
Reply from 192.168.10.2: bytes=32 time=1ms TTL=255
Reply from 192.168.10.2: bytes=32 time<1ms TTL=255
Reply from 192.168.10.2: bytes=32 time<1ms TTL=255

Ping statistics for 192.168.10.2:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum = 5ms, Average = 1ms

C:\>
```

> Please refer to 00_Switch_Configuration_Simulation.pkt

---
---
# Documentation
### Step 1: Change the name of the Switch to `IND-ED-TEST`
- Use the `enable` command to enter PRIVILEGED EXEC mode
- Then use `configure terminal` to enter CONFIGURATION mode
- To change the hostname (name of the Switch) use the `hostname` command followed the name of the switch: `hostname [name_of_switch]`
```cisco
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname IND-ED-TEST
IND-ED-TEST(config)#
```

### Step 2: Create VLANs, assign 1 port to each and name them
**First let's see what we're working here.**
```cisco
IND-ED-TEST(config)#do show vlan

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

```

1. ***Now let's Create them***
	- To create a VLAN, it's pretty easy, use the `vlan` command followed by the VLAN-ID (an interger): `vlan [VLAN-ID]`
```cisco
IND-ED-TEST(config)#vlan 50
IND-ED-TEST(config-vlan)#vlan 40
IND-ED-TEST(config-vlan)#vlan 30
IND-ED-TEST(config-vlan)#vlan 20
IND-ED-TEST(config-vlan)#vlan 10
```

**Cool beans, how's it looking, are we cooking good looking? 
Let's check if our vlan's were created.**
```cisco
IND-ED-TEST(config)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
10   VLAN0010                         active
20   VLAN0020                         active
30   VLAN0030                         active
40   VLAN0040                         active
50   VLAN0050                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
```

2. ***Now let's name them***
	- Use the `vlan [VLAN-ID]` command to access the VLANs you created
	- I'm sure you noticed we used the `vlan [id]` command again, we aren't creating a VLAN again, it's already created but it's important to note that if you use the `vlan [id]` command and the VLAN-ID hasn't been already created it will create one be sure to double check in case you accidently name the wrong VLAN. ANOTHER thing to note is that when you use the `vlan [id]` command, the `(config-vlan)` mode is only used to create and name a VLAN.
	- `vlan [id]` command is used to create the VLAN and also to configure the specific VLAN.
```cisco
IND-ED-TEST(config-vlan)#vlan 10
IND-ED-TEST(config-vlan)#name USERS
IND-ED-TEST(config-vlan)#vlan 20
IND-ED-TEST(config-vlan)#name VOICE
IND-ED-TEST(config-vlan)#vlan 30
IND-ED-TEST(config-vlan)#name MGMT
IND-ED-TEST(config-vlan)#vlan 40
IND-ED-TEST(config-vlan)#name IOT
IND-ED-TEST(config-vlan)#vlan 50
IND-ED-TEST(config-vlan)#name GUEST
```

**Did we successfully rename the vlans?**
```cisco
```cisco
IND-ED-TEST(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-ED-TEST(config)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
                                                Gi1/1, Gi1/2
10   USERS                            active
20   VOICE                            active
30   MGMT                             active
40   IOT                              active
50   GUEST                            active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup

```

3. ***Assign 1 port to each VLAN***
	- To assign a port to a specific VLAN we first access the interface using the `interface [port]` command to allow us to configure it.
	- Then we use the `switchport mode access` command to set the ports as static access ports for a single end device.
	- The `switchport access vlan [id]` command is used to then assign said access port to a specific VLAN.
```cisco
IND-ED-TEST(config)#
IND-ED-TEST(config)#interface FastEthernet1/1
IND-ED-TEST(config-if)#switchport mode access
IND-ED-TEST(config-if)#switchport access vlan 1
IND-ED-TEST(config-if)#exit
IND-ED-TEST(config)#interface FastEthernet1/2
IND-ED-TEST(config-if)#switchport mode access
IND-ED-TEST(config-if)#switchport access vlan 10
IND-ED-TEST(config-if)#exit
IND-ED-TEST(config)#interface FastEthernet1/3
IND-ED-TEST(config-if)#switchport mode access
IND-ED-TEST(config-if)#switchport access vlan 20
IND-ED-TEST(config-if)#exit
IND-ED-TEST(config)#interface FastEthernet1/4
IND-ED-TEST(config-if)#switchport mode access
IND-ED-TEST(config-if)#switchport access vlan 30
IND-ED-TEST(config-if)#exit
IND-ED-TEST(config)#interface GigabitEthernet1/1
IND-ED-TEST(config-if)#switchport mode access
IND-ED-TEST(config-if)#switchport access vlan 40
IND-ED-TEST(config-if)#exit
IND-ED-TEST(config)#interface GigabitEthernet1/2
IND-ED-TEST(config-if)#switchport mode access
IND-ED-TEST(config-if)#switchport access vlan 50
IND-ED-TEST(config-if)#exit
```

**Did the ports get assigned to the correct VLAN?
Scroll up and check the prior configuration.**
```cisco
IND-ED-TEST(config)#do show vlan brief
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/1
10   USERS                            active    Fa1/2
20   VOICE                            active    Fa1/3
30   MGMT                             active    Fa1/4
40   IOT                              active    Gi1/1
50   GUEST                            active    Gi1/2
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
IND-ED-TEST(config)#
```

4. ***Give VLAN MGMT an IP Address - `192.168.10.2`***
	- To configure the VLAN we use the `interface vlan [id]` command.
	- To give a VLAN an IP address, we have to access the VLAN configuration like we did in step 2 above then we use the `ip addresss [ip_address] [subnet_mask]` command.
	- Something important to note is the `no shutdown` command, you didn't configure it for nothing, right? We use that command to make sure the interface is up and congruently we use `shutdown` make the interface be down
	- The `ip default-gateway` command is not necessary for the switch to forward regular user traffic, as it is a Layer 2 switch. However, it **is required** if you need to remotely manage the switch (via SSH, Telnet, or HTTP) from outside its local network, so the switch knows how to send its reply packets back to you through the router, BUT in case this we don't have a router, we have a LAN cable, which is what establishes our network and how we connect to the switch via SSH (which we'll do right below in step 5).
```cisco
IND-ED-TEST#
IND-ED-TEST#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
IND-ED-TEST(config)#interface vlan 30
IND-ED-TEST(config-if)#
*Mar  1 17:21:20.070: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan30, changed state to down
IND-ED-TEST(config-if)#ip address 192.168.10.2 255.255.255.0
IND-ED-TEST(config-if)#no shutdown
IND-ED-TEST(config-if)#exit
IND-ED-TEST(config)#ip default-gateway 192.168.10.1
IND-ED-TEST(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
Vlan30                 192.168.10.2    YES manual up                    down
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
IND-ED-TEST(config)#
```

> [!NOTE] NOTE - In addition to setting the IP address of the switch, you should give it a logical hostname and domain name in order to enable SSH. SSH requires a unique device hostname and an active domain name to generate encryption keys. You also need to configure a local administrator username/password and a privileged enable secret
> ```cisco
> IND-ED-TEST(config)#crypto key generate rsa modulus 2048
> % Please define a domain-name first.
> IND-ED-TEST(config)#
> ```

5. ***Enable SSH and Telnet***
> [!NOTE] NOTE - Telnet requires a privileged EXEC (enable) password or secret on older IOS versions before permitting login access:
```cisco
IND-ED-TEST(config)#username Ind-it secret [insert password]
IND-ED-TEST(config)#enable secret [insert enable password]
IND-ED-TEST(config)#ip domain name hulamin.co.za
IND-ED-TEST(config)#crypto key generate rsa modulus 2048
The name for the keys will be: IND-ED-TEST.hulamin.co.za

% The key modulus size is 2048 bits
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 26 seconds)

IND-ED-TEST(config)#
*Mar  1 17:38:05.864: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-ED-TEST(config)#ip ssh version 2
IND-ED-TEST(config)# ip ssh time-out 60
IND-ED-TEST(config)#line vty 0 15
IND-ED-TEST(config-line)#transport input ssh telnet
IND-ED-TEST(config-line)#login local
IND-ED-TEST(config-line)#exit
IND-ED-TEST(config)#exit
IND-ED-TEST#
IND-ED-TEST#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
IND-ED-TEST#
```

# Test SSH/Telnet Connectivity
I'm sure you noticed at the very beginning when I listed everything you need for this task, from that list we didn't include a router but the very first thing we did include was **a LAN cable**. In order to wirelessly connect to a Switch via SSH/Telnet we need to establish a connection (a network). 

> [!NOTE] NOTE - Some cisco routers do have built-in Wi-Fi, but most enterprise and industrial routers rely on separate access points. 

You may assume you've already created a network by connecting the PC to the Switch via Serial-to-USB but a PC connected to a network switch using a serial-to-USB console cable is **NOT a network connection**.==You cannot assign an IP address to a physical console port because it is a serial or asynchronous management port, not a network interface==. Instead, you use the console port via a physical cable to log into the device and assign an IP address to a network interface (like an Ethernet port or Switch Virtual Interface/VLAN).

To connect your personal PC directly to the switch without an external network or router, you need to create a simple direct subnet between your personal PC's Ethernet port and an switch Ethernet port. To create a simple basic network, ==we connect a PC to a Switch via LAN cable using the port we assigned an IP address to on the switch==. Do the following:

1. You should have set up the Switch Management IP above, so all we need to do is change IP settings on you personal PC/laptop (PC). Because there is no network or DHCP server to assign an IP address to your personal PC, you must set one manually:
	- **Windows:** Go to **Settings** > **Network & Internet** > **Ethernet** > Edit **IP assignment** to **Manual (IPv4)**.  
	- **IP Address:** `192.168.1.2`  
	- **Subnet Mask:** `255.255.255.0`  
	- **Gateway / DNS:** Leave blank.  
2. Run an Ethernet cable directly from your personal PC's network port into `FastEthernet1/4`(**VLAN 30**) on the switch. You should see this on you terminal:
```cisco
IND-ED-TEST>
*Mar  1 19:04:05.663: %LINK-3-UPDOWN: Interface FastEthernet1/4, changed state to up
*Mar  1 19:04:06.670: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/4, changed state to up
*Mar  1 19:04:33.681: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan30, changed state to up
IND-ED-TEST>
```
3. Ping your Switch from you computer and vice versa on your switch
```cisco
IND-ED-TEST>ping 192.168.10.3
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.10.3, timeout is 2 seconds
-----------------------------------------------------------------------!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/5/9 ms
```

> [!NOTE] NOTE - If you try and ping the PC you are connected via Serial-to-USB with, you will be fail because these two aren't connected on a network.
> ```cisco
> IND-ED-TEST>ping 10.10.22.63
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 10.10.22.63, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
IND-ED-TEST>
> ```

For a complete step-by-step walkthrough of SSH commands and key generation on Cisco switches, watch [SSH Configuration on Cisco Routers and Switches](https://www.youtube.com/watch?v=YUUj1a-gFOo). This video provides a clear visual demonstration of setting up RSA keys, user accounts, and testing SSH connections using terminal software.

---
![[MIB-Neuralyzer-Meme.jpg|250]]
# What do you remember?
Nothing? Cool okay, so let's start over buddy!!!

Since you don't remember anything let's reload the switch so we can start from the beginning with a fresh unconfigured switch.

1. ***First we have to delete the VLAN Database (vlan.dat)***
```cisco
IND-ED-TEST>
IND-ED-TEST>enable
Password:
IND-ED-TEST#show flash:

Directory of flash:/

    2  -rwx        1581   Mar 1 1993 02:33:09 +00:00  starup-config
    3  drwx        1024   Mar 1 1993 00:00:22 +00:00  ies-lanbasek9-mz.152-4.EA5
  648  -rwx       38588   Mar 1 1993 00:01:04 +00:00  pnap.dat
  649  -rwx         856   Mar 1 1993 17:00:13 +00:00  vlan.dat
  650  -rwx        1314   Mar 1 1993 00:27:49 +00:00  start-config
  652  -rwx        1541   Mar 1 1993 17:53:12 +00:00  config.text
  653  -rwx        3576   Mar 1 1993 17:53:12 +00:00  private-config.text
  654  -rwx        6168   Mar 1 1993 17:53:12 +00:00  multiple-fs

64094208 bytes total (39586816 bytes free)
IND-ED-TEST#delete flash:vlan.dat
Delete filename [vlan.dat]?
Delete flash:/vlan.dat? [confirm]
IND-ED-TEST#
```

2. ***Now delete(erase) the startup-config***
```cisco
IND-ED-TEST#
IND-ED-TEST#erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
[OK]
Erase of nvram: complete
IND-ED-TEST#
*Mar  1 22:33:43.516: %SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram
IND-ED-TEST#
```

3. ***Now let's reload the switch***
```cisco
IND-ED-TEST#reload
Proceed with reload? [confirm]

*Mar  1 22:37:12.292: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload command.
```

4. When it's done reloading the switch will ask you to `press RETURN to get started!`, press Enter and in the System Configuration Dialog enter `no`, aaaaaaand you're done, you now have a naked switch!
```cisco

Press RETURN to get started!


*Mar  1 00:00:18.975: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down
*Mar  1 00:00:20.501: %SPANTREE-5-EXTENDED_SYSID: Extended SysId enabled for type vlan
*Mar  1 00:00:46.238: %PHY-5-TRANSCEIVERINSERTED: Slot=1 Port=1: Transceiver has been inserted
*Mar  1 00:00:47.563: %SYS-5-RESTART: System restarted --
Cisco IOS Software, IES Software (IES-LANBASEK9-M), Version 15.2(4)EA5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2016 by Cisco Systems, Inc.
Compiled Tue 20-Dec-16 14:59 by prod_rel_team
*Mar  1 00:00:48.268: %SYS-5-CONFIG_I: Configured from console by console


         --- System Configuration Dialog ---

Enable secret warning
----------------------------------
In order to access the device manager, an enable secret is required
If you enter the initial configuration dialog, you will be prompted for the enable secret
If you choose not to enter the intial configuration dialog, or if you exit setup without setting the enable secret,
please set an enable secret using the following CLI in configuration mode-
enable secret 0 <cleartext password>
----------------------------------
Would you like to enter the initial configuration dialog? [yes/no]: no
Switch>

```

Now go back to the tippity-top and **DO IT AGAIN!** Practice makes perfect, good luck!