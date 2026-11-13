# Cisco IOS Switch Configuration Task
This task involved having to configure a replacement switch with the exact same setup as the existing `IND-SW-EDNL-Lab` switch. The replacement switch will be named `IND-SW-EDNL-Lab1`

![[switch_cisco_catalyst_2960x_24portas_gigabit_4_sfp_203_1_0b94aa7dd3beaf75757d0f58ce07cb0a.webp]]

> **Cisco Catalyst 2960x 24portas Gigabit + 4 Sfp**

----
## Concepts Explored

## Documentation
### Step 1: Initial Setup & Hostname
Connect to the new switch via console, enter privileged EXEC mode, and set the hostname and basic system options.
```Cisco
Switch>enable
Switch#configure terminal
Switch(config)#hostname IND-SW-EDNL-Lab1
IND-SW-EDNL-Lab1(config)#vtp version 1
IND-SW-EDNL-Lab1(config)#vlan internal allocation policy ascending
IND-SW-EDNL-Lab1(config)#lldp run
IND-SW-EDNL-Lab1(config)#spanning-tree mode rapid-pvst
IND-SW-EDNL-Lab1(config)#spanning-tree extend system-id
```

### Step 2: Configure VLANs
Recreate the required VLANs and name them as they were on the original switch.
```Cisco
IND-SW-EDNL-Lab1(config)#vlan 250
IND-SW-EDNL-Lab1(config-vlan)#name IND-250
IND-SW-EDNL-Lab1(config-vlan)#exit
IND-SW-EDNL-Lab1(config)#vlan 501
IND-SW-EDNL-Lab1(config-vlan)#name VLAN0501
IND-SW-EDNL-Lab1(config-vlan)#exit
IND-SW-EDNL-Lab1(config)#vlan 560
IND-SW-EDNL-Lab1(config-vlan)#name management
IND-SW-EDNL-Lab1(config-vlan)#exit
IND-SW-EDNL-Lab1(config)#vlan 561
IND-SW-EDNL-Lab1(config-vlan)#name cesms
IND-SW-EDNL-Lab1(config-vlan)#exit
IND-SW-EDNL-Lab1(config)#vlan 590
IND-SW-EDNL-Lab1(config-vlan)#name EDPowermeters
IND-SW-EDNL-Lab1(config-vlan)#exit
IND-SW-EDNL-Lab1(config)#vlan 593
IND-SW-EDNL-Lab1(config-vlan)#name Ignition
IND-SW-EDNL-Lab1(config-vlan)#exit
IND-SW-EDNL-Lab1(config)#vlan 595
IND-SW-EDNL-Lab1(config-vlan)#name LABS
IND-SW-EDNL-Lab1(config-vlan)#exit
```

_Verification:_ Run `IND-SW-EDNL-Lab1#show vlan brief` to confirm all VLANs are present and active.
### Step 3: Configure Switch Interfaces
Apply the trunk and access port configurations for the individual ports.
```Cisco
IND-SW-EDNL-Lab1(config)#interface GigabitEthernet1/1
IND-SW-EDNL-Lab1(config-if)#switchport mode trunk
IND-SW-EDNL-Lab1(config-if)#exit
IND-SW-EDNL-Lab1(config)#interface range GigabitEthernet1/0/2 - 27
IND-SW-EDNL-Lab1(config-if-range)#switchport mode access
IND-SW-EDNL-Lab1(config-if-range)#switchport access vlan 595
IND-SW-EDNL-Lab1(config-if-range)#exit

```

_Verification:_ Run `IND-SW-EDNL-Lab1#show interfaces switchport` on a configured port (e.g., `GigabitEthernet1/0/2`) to confirm it is set to access mode on VLAN 595.
### Step 4: Configure Management IP and Gateway
Set up the management interface and default route.
```Cisco
IND-SW-EDNL-Lab1(config)#interface Vlan560
IND-SW-EDNL-Lab1(config-if)#description Management
IND-SW-EDNL-Lab1(config-if)#ip address 192.168.160.127 255.255.255.0
IND-SW-EDNL-Lab1(config-if)#no shutdown
IND-SW-EDNL-Lab1(config-if)#exit
IND-SW-EDNL-Lab1(config)#interface Vlan1
IND-SW-EDNL-Lab1(config-if)#shutdown
IND-SW-EDNL-Lab1(config-if)#exit
IND-SW-EDNL-Lab1(config)#interface Vlan595
IND-SW-EDNL-Lab1(config-if)#description LABS
IND-SW-EDNL-Lab1(config-if)#no ip address
IND-SW-EDNL-Lab1(config-if)#exit
IND-SW-EDNL-Lab1(config)#ip default-gateway 192.168.160.1
```

_Verification:_ Run `IND-SW-EDNL-Lab1#show ip interface brief` to verify that `Vlan560` is `up/up` with the correct IP address.
### Step 5: Configure SSH and Remote Access
Enable SSH and local authentication for remote management.
```Cisco
IND-SW-EDNL-Lab1(config)#username Ind-it secret [insert password]
IND-SW-EDNL-Lab1(config)#enable secret [insert enable password]
IND-SW-EDNL-Lab1(config)#ip domain name hulamin.co.za
IND-SW-EDNL-Lab1(config)#crypto key generate rsa modulus 2048
The name for the keys will be: IND-SW-EDNL-Lab1.hulamin.co.za

% The key modulus size is 2048 bits
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 26 seconds)

IND-SW-EDNL-Lab1(config)#
*Mar  1 17:38:05.864: %SSH-5-ENABLED: SSH 1.99 has been enabled
IND-SW-EDNL-Lab1(config)#ip ssh version 2
IND-SW-EDNL-Lab1(config)#ip ssh time-out 60
IND-SW-EDNL-Lab1(config)#line vty 0 15
IND-SW-EDNL-Lab1(config-line)#transport input ssh telnet
IND-SW-EDNL-Lab1(config-line)#login local
IND-SW-EDNL-Lab1(config-line)#exit
```

### Step 6: Save the Configuration
Once everything is configured and verified, write the running configuration to NVRAM so it persists across reboots.
```Cisco
IND-SW-EDNL-Lab1(config)#end
IND-SW-EDNL-Lab1#write memory
```

_Verification:_ Run `IND-SW-EDNL-Lab1#show startup-config` to verify that your saved configurations are properly committed.