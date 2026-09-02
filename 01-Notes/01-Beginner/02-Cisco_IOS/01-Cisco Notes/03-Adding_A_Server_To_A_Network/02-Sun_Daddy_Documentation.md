# Documentation
## 1. Configuration
### Switch 1 : **Cisco Catalyst IE-3300 Rugged Switch IE-3300-8T2S-E**

```cisco
Switch>enable
Password:
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname SW1
SW1(config)#vlan 10
SW1(config-vlan)#name VLAN_10
SW1(config-vlan)#exit
SW1(config)#interface range GigabitEthernet 1/3-4
SW1(config-if-range)#switchport mode access
SW1(config-if-range)#switchport access vlan 10
SW1(config-if-range)#exit
SW1(config)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Te1/1, Te1/2, Gi1/5, Gi1/6
                                                Gi1/7, Gi1/8, Gi1/9, Gi1/10
                                                Ap1/1
10   VLAN_10                          active    Gi1/3, Gi1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
SW1(config)#interface vlan 10
SW1(config-if)#ip addre
*Apr 24 04:22:41.961: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan10, changed sta
SW1(config-if)#
SW1(config-if)#ip address 192.168.10.254 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit
SW1(config)#ip default-gateway 192.168.10.1
SW1(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  192.168.1.1     YES TFTP   up                    up
Vlan10                 192.168.10.254  YES manual down                  down
TenGigabitEthernet1/1  unassigned      YES unset  down                  down
TenGigabitEthernet1/2  unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  down                  down
GigabitEthernet1/4     unassigned      YES unset  down                  down
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  down                  down
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
SW1(config)#
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#description Trunk_to_SW2
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11
SW1(config-if)#exit
SW1(config)#

```

### Switch 2: **Cisco Catalyst IE-3300-8T2S-A** feat. **Cisco PWR-IE240W-PCAC-L**

```cisco
Switch>
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname SW2
SW2(config)#vlan 11
SW2(config-vlan)#name VLAN_11
SW2(config-vlan)#exit
SW2(config)#interface range FastEthernet 1/1-4
SW2(config-if-range)#switchport mode access
SW2(config-if-range)#switchport access vlan 11
SW2(config-if-range)#exit
SW2(config)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1, Gi1/2
11   VLAN_11                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
SW2(config)#
SW2(config)#interface vlan 11
SW2(config-if)#ip address 192.168.11.254 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#ip default-gateway 192.168.11.1
SW2(config)#
SW2(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    down
Vlan11                 192.168.11.254  YES manual up                    down
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2(config)#
SW2(config)#interface GigabitEthernet 1/1
SW2(config-if)#description Trunk_to_SW1
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport trunk allowed vlan 10,11
SW2(config-if)#exit
SW2(config)#

```

### Server 1: **HPE ProLiant DL360p Gen8 Server**

```cisco

```

### Laptop: **My Personal Laptop**

```cisco

```
