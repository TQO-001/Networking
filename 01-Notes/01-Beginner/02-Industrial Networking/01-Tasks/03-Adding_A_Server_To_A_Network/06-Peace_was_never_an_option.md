# Corrections
![[Sun-daddy-network (2) 1.png]]

The network is split into **three distinct VLANs** so that administrative access to physical infrastructure is kept separate from standard client/VM traffic:

- **VLAN 10 — Management Network (`192.168.10.0/24`)**: Used solely for managing network hardware and server hypervisors.
    - Switch 1 Management Interface (`192.168.10.200`)
    - Switch 2 Management Interface (`192.168.10.201`)
    - ESXi Hypervisor Host (`192.168.10.2`)
    - Management Laptop (`192.168.10.50`)
    - Virtual Firewall Management Interface / Gateway (`192.168.10.1`)
- **VLAN 11 — Network 1 (`192.168.11.0/24`)**:    
    - VM3 (`192.168.11.10`)        
    - Client Laptop (`192.168.11.3`)        
    - Gateway / pfSense Interface (`192.168.11.1`)
- **VLAN 12 — Network 2 (`192.168.12.0/24`)**:
    - VM1 (`192.168.12.10`)
    - VM2 (`192.168.12.11`)
    - Gateway / pfSense Interface (`192.168.12.1`

### Change the management to VLAN 10, assign new IP address, and add VLAN 12

#### Switch 1: **Cisco Catalyst IE-3300-8T2X** feat. **Cisco PWR-IE240W-PCAC-L**
```cisco
SW1>enable
Password:
SW1#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
SW1(config)#vlan 10,11,12
SW1(config-vlan)#exit
SW1(config)#interface vlan 10
SW1(config-if)#ip address 192.168.10.200 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit
SW1(config)#ip default-gateway 192.168.10.1
SW1(config)#interface GigabitEthernet 1/4
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11,12
SW1(config-if)#no shutdown
SW1(config-if)#exit
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11,12
SW1(config-if)#no shutdown
SW1(config-if)#exit
SW1(config)#end
SW1#
*May  3 06:49:12.405: %SYS-5-CONFIG_I: Configured from console by console
SW1#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
SW1#
*May  3 06:49:34.247: %SYS-6-PRIVCFG_ENCRYPT_SUCCESS: Successfully encrypted private config file
SW1#
*May  3 06:49:36.792: %LINK-5-UPDOWN: Interface Vlan11, changed state to up
*May  3 06:49:37.792: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan11, changed state to up
SW1#
SW1#show interfaces trunk

Port           Mode             Encapsulation  Status        Native vlan
Gi1/10         on               802.1q         trunking      1

Port           Vlans allowed on trunk
Gi1/10         10-12

Port           Vlans allowed and active in management domain
Gi1/10         10-12

Port           Vlans in spanning tree forwarding state and not pruned
Gi1/10         10-12
SW1#


```

#### Switch 2: **Cisco Catalyst IE-3000 Rugged Switch IE-3000-4TC**
```cisco

SW2>enable
Password:
SW2#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
SW2(config)#vlan 10,11,12
SW2(config-vlan)#exit
SW2(config)#interface vlan 11
SW2(config-if)#no ip address
SW2(config-if)#shutdown
SW2(config-if)#exit
SW2(config)#
*Mar  2 01:26:43.470: %LINK-5-CHANGED: Interface Vlan11, changed state to administratively down
SW2(config)#interface vlan 10
SW2(config-if)#ip address 192.168.10.201 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#ip default-gateway 192.168.10.1
SW2(config)#interface GigabitEthernet 1/1
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport trunk allowed vlan 10,11,12
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#interface FastEthernet 1/1
SW2(config-if)#description Connection_to_Laptop_VLAN11
SW2(config-if)#switchport mode access
SW2(config-if)#switchport access vlan 11
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#interface FastEthernet 1/2
SW2(config-if)#description Connection_to_Laptop_VLAN10
SW2(config-if)#switchport mode access
SW2(config-if)#switchport access vlan 10
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#end
SW2#
*Mar  2 01:30:36.976: %SYS-5-CONFIG_I: Configured from console by console
SW2#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
SW2#

```

### Make 2 access ports for the Laptops
I had one access port, for `192.168.11.3` laptop now I'm supposed to have 2 because (apparently) it's bad practice to directly connect to the server every time you need to access the web interface, instead you should connect to the switch which will connect to the server which allow us connect to the web interface.

#### Switch 2: **Cisco Catalyst IE-3000 Rugged Switch IE-3000-4TC**
```cisco
SW2#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
SW2(config)#interface range FastEthernet 1/1-2
SW2(config-if-range)#description Connection_to_Laptop
SW2(config-if-range)#switchport mode access
SW2(config-if-range)#switchport access vlan 10
SW2(config-if-range)#no shutdown
SW2(config-if-range)#exit
SW2(config)#
```

#### How Physical Access Ports Are Wired
- **Switch 2, Port `Fa1/1`**: Assigned as an **Access Port on VLAN 11** for Laptop 1 (`192.168.11.3`).
- **Switch 2, Port `Fa1/2`**: Assigned as an **Access Port on VLAN 10** for Laptop 2 (`192.168.10.50`) to directly access management interfaces without crossing the firewall.

### How the new Inter-VLAN Traffic Flows
1. **Trunk Links**: The physical links between **Switch 1 ↔ Switch 2** and **Switch 1 ↔ ESXi Server** must carry tags for **VLANs 10, 11, and 12**.
2. **The Firewall (pfSense)**: Acts as the central router connecting all three VLANs.
	- If `192.168.10.50` (Laptop on VLAN 10) pings `192.168.11.10` (VM3 on VLAN 11), the request goes to `192.168.10.1` (pfSense), which routes it across to VLAN 11 (`192.168.11.1`) and delivers it to VM3.

### Add network adapter holding VLAN 12 to pfSense
WAN (wan)   -> em0 -> v4: 192.168.10.1/24
LAN (lan)   -> em1 -> v4: 192.168.11.1/24
OPT1 (opt1) -> em2 -> v4: 192.168.12.1/24 (rename this later to VLAN12)


last config
```cisco
SW2>
SW2>enable
Password:
SW2#ping 192.168.10.200
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.10.200, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/203/1007 ms
SW2#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    down
Vlan10                 192.168.10.201  YES manual up                    up
Vlan11                 unassigned      YES manual administratively down down
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
SW2(config)#
SW2(config)#interface vlan 10
SW2(config-if)#ip address 192.168.11.201 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#exit
SW2#show
*Mar  2 02:29:17.599: %SYS-5-CONFIG_I: Configured from console by consoleu
% Ambiguous command:  "show u"
SW2#
SW2#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    down
Vlan10                 192.168.11.201  YES manual up                    up
Vlan11                 unassigned      YES manual administratively down down
FastEthernet1/1        unassigned      YES unset  up                    up
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2#ping 192.168.10.200
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.10.200, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
SW2#

```