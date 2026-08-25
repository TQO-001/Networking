# A recommended basic initial device configuration 

You might find convenient to execute the following sequence of commands before doing any other configuration or troubleshooting tasks on your Cisco device, in order to improve your workflow on the terminal.

### Step 1: Connect to the console
_If you’re labbing with a simulator/emulator or accessing the CLI via SSH, you can skip this step._

You need to start with a connection to the console port. That means configuring your terminal emulator software and connecting your rollover cable between your switch’s console port and your PC.

Many Cisco switches use these serial settings:

- **Baud rate:** 9600
- **Data bits:** 8
- **Stop bits:** 1
- **Parity:** None

![[Pasted image 20260824091742.png]]

Assuming your PC’s serial port is COM1, if you use Putty and Windows, you can set the session up like this (under the “Serial” options in the menu):  
  
Once your cable is connected and the session is set up, click open. Then press enter to get a response at the terminal window.

### Step 2: Set a management IP and default gateway

The management IP address is where you can log in to the switch for future administrative tasks. Once your management IP is set up, you can use it to SSH into the switch and configure it over the network.

First, we access Privileged EXEC mode with the “enable” switch configuration command:
```cisco
Switch>enable
Switch#
```
From there, we enter Global Configuration mode with “config t” (or “configure terminal”):
```cisco
Switch#config t
[Enter configuration commands, one per line. End with “CNTL/Z”.]
Switch(config)#
```
Next, we access the VLAN interface:
```cisco
Switch(config)#interface vlan 1
Switch(config-if)#
```
Now, we can assign the management IP and subnet. In this example, I’ll assign 10.10.22.110 with a 255.255.255.0 subnet. **Be sure to replace that with the correct values for your switch!**
```cisco
Switch(config-if)#ip address 10.10.22.110 255.255.255.0
Switch(config-if)#
```
We can exit interface configuration mode and assign a default gateway for the switch from global configuration mode.
```cisco
Switch(config-if)#exit
Switch(config)#ip default-gateway 10.10.22.1
Switch(config)#
```
### Step 3: Set hostname and domain name

In addition to setting the IP address of the switch, you should give it a logical hostname. To do that, we enter global configuration mode and use the hostname command:
```cisco
Switch(config)#hostname IND-SW-CD-PP
IND-SW-CD-PP(config)#
```
Similarly, we can also add a domain name with the domain command:
```cisco
IND-SW-CD-PP(config)#ip domain-name hulamin.co.za
IND-SW-CD-PP(config)#
```
### Step 4: Set logins on VTY lines and console port

Strong passwords are an important part of hardening a managed switch, so next we’ll add a password to all virtual terminal (VTY) lines. Our switch has 16 VTY lines which are used for remote access, so we’ll configure the entire range from 0-15:
```cisco
IND-SW-CD-PP(config)#line vty 0 15
IND-SW-CD-PP(config-line)#password BigSecretDon'tT3ll@ny1
IND-SW-CD-PP(config-line)#
```
Next, we’ll exit the VTY configuration, access console line 0, and assign it a separate password:
```cisco
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#line console 0
IND-SW-CD-PP(config-line)#password BigSecretForConsoleDon'tT3ll@ny1
IND-SW-CD-PP(config-line)#
```
### Step 5: Set Privileged EXEC password

In addition to password protecting the VTY and console lines, we can and should protect Privileged EXEC mode with a password.

We can do that from global configuration mode:
```cisco
IND-SW-CD-PP(config-line)#exit
IND-SW-CD-PP(config)#enable secret Top$ecretPrivEXECpassWORD
IND-SW-CD-PP(config)#
```
_Note: Because switch security is a complex topic, and we’re focused on the basics, we won’t go into [user management](https://www.auvik.com/franklyit/reports/it-pro-switch-ebook/) here. However, be sure to properly configure users or remote authentication servers before a production deployment._

### Step 6: Enable SSH

At some point, you’ll find yourself in need of access to your network devices, and you’re not physically in the same room as them. To access a switch’s CLI over the network, you’ll need to use Telnet or SSH. From a security perspective, Telnet is usually a non-starter because data is transmitted in plaincisco. That leaves us with SSH.

The first step to enabling SSH is generating the RSA keys:
```cisco
IND-SW-CD-PP(config)#crypto key generate rsa
The name for the keys will be: IND-SW-CD-PP.GijimaJohnny
Choose the size of the key modulus in the range of 360 to 2048 for your General Purpose Keys. 
Choosing a key modulus greater than 512 may take a few minutes.

How many bits in the modulus [2048]:
% Generating 2048-bit RSA keys, keys will be non-exportable...[OK]

IND-SW-CD-PP(config)#
```
Next, we’ll set the SSH version to 2:
```cisco
IND-SW-CD-PP(config)#ip ssh version 2
*Mar 4 7:4:9.374: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-SW-CD-PP(config)#
```
Now, we can set SSH up on specific VTY lines. I’ll use the first 6 lines here:
```cisco
IND-SW-CD-PP(config)#line vty 0 5
IND-SW-CD-PP(config-line)#transport input ssh
```
Finally, we’ll tell the switch to check the local users’ database to authenticate users:
```cisco
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#
```
### Step 7: Create VLANs

One of the most obvious reasons to use a managed switch is the ability to create VLANs to separate network segments. We can do that by using the _vlan_ command, and then assigning our VLAN a name. For example, to create VLAN 2 and name it “Gijima”:
```cisco
IND-SW-CD-PP(config-line)#vlan 2
IND-SW-CD-PP(config-vlan)#name Gijima
IND-SW-CD-PP(config-vlan)#
```
You can now exit, and repeat these steps for as many VLANs as you need.

### Step 8: Add access ports to a VLAN

After we create our VLANs, we can add ports to them. For example, to add ports 5, 6, and 7 as access ports in VLAN 2, we can use these switch configuration commands:

> [!NOTE] NOTE: Check how you ports are numbered `do show ip interface brief`

```cisco
IND-SW-CD-PP(config-vlan)#exit
IND-SW-CD-PP(config)#interface range fast
IND-SW-CD-PP(config)#interface range fastEthernet 0/5-7
IND-SW-CD-PP(config-if-range)#switchport mode access
IND-SW-CD-PP(config-if-range)#switchport access vlan 2
IND-SW-CD-PP(config-if-range)#
```
### Step 9: Configure trunk ports

If you need one port to transmit traffic from multiple VLANs, you’ll need to designate it a “trunk port”. To make a port a trunk port, we simply access its configuration and set the mode to trunk. For example, to make port 2 on our switch a trunk port:
```cisco
IND-SW-CD-PP(config-if-range)#exit
IND-SW-CD-PP(config)#interface fastEthernet 0/2
IND-SW-CD-PP(config-if)#switchport mode trunk
IND-SW-CD-PP(config-if)#
```
### Step 10: Save configuration

When our configuration is complete, we can save our changes to the startup configuration. Don’t forget this step, or all your work will be gone come the next switch reboot!
```cisco
IND-SW-CD-PP(config-if)#exit
IND-SW-CD-PP(config)#exit
IND-SW-CD-PP#
%SYS-5-CONFIG_I: Configured from console by console

IND-SW-CD-PP#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
IND-SW-CD-PP#
```
## What does an effective switch look like?

After you complete a network switch configuration, how do you know if it will be effective? Frankly, there is no one-size-fits-all answer. Generally, an effective switch is one that is both secure and well performing given the requirements of its specific environment. Understanding if your switch configuration is effective begins with [establishing those baseline requirements and monitoring performance](https://www.auvik.com/franklyit/blog/network-optimization/).

## Simple Bare Booty Basic Config

You will find a command-and-explanation table right below, and a cisco box with the same command sequence **you can copy and paste on your device's terminal** after that.

> [!NOTE] **Note:** These commands work on both Cisco routers and switches.

Command|Additional Notes
---|---
``CDevice>enable``|
``CDevice#configure terminal``|
``CDevice(config)#no ip domain-lookup``|disable DNS lookup
``CDevice(config)#cdp run``|ensure CDP is running :bulb:(although it is running on Cisco devices by default)
``CDevice(config)#line console 0``|
``CDevice(config-line)#logging synchronous``|
``CDevice(config-line)#history size [lines]``|specify the size (number of lines) for the history of executed commands (you can view your history with ``R1#show history``)
``CDevice(config-line)#exec-timeout [minutes] [seconds]``|
``CDevice(config-line)#end``|exit to EXEC privileged mode, where the next command will be executed
``CDevice#copy running-config startup-config``|Saves the running configuration to the NVRAM

You can copy the same sequence, contained in the cisco box below, and paste it in your Cisco device, whether it is a real-world physical Cisco device, or a simulated device in an environment like Packet Tracer.  
:bulb: Note that the commands below are abbreviated. Still. They should work just fine.  
:bulb: Be sure to select and copy up to the blank line below the last command. That way, such last command will be executed without you having to manually press enter. 

```
ena
conf t
no ip domain-lookup
cdp run
line con 0
logging syn
his size 50
exec-timeout 25 0
end
copy run start

<< select and copy up to the line above this "marker" with your cursor
```

## Other tips and hints for your initial configurations
:bulb:If there are non-Cisco devices on your network, you might also want to enable LLDP (Link-Layer Discovery Protocol), use:  
````CDevice(config)#lldp run````