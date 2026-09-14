## 1. Configuration of the Switches ##
### Network Topology & Configuration Summary
#### 1. Network Devices & Connections
##### **SW1 — Cisco Catalyst IE-3300-8T2X**
* **Management IP:** `192.168.10.200` (SVI `Vlan10`)
* **Physical Connections:**
  * `Gi1/3-1/5` ↔ Server, `vmnic1-3` (trunk — carries VLAN 10, 11 **and** 12)
  * `Gi1/10` ↔ **SW2** (`Gi1/1`) — trunk
* **Port Breakdown:**
  * `Gi1/3-1/5`: **Trunk Port** | Allowed VLANs: `10, 11, 12` — this is the server port, it has to be a trunk because my server pushes VLAN 11 (VM1/VM2) and VLAN 12 (VM3) traffic down these cables.
  * `Gi1/10`: **Trunk Port** | Allowed VLANs: `10, 11, 12` (connects to SW2 `Gi1/1`)
  * `Gi1/6-1/9`, `Te1/1–1/2`, `Gi1/5–1/9`, `Ap1/1`: **Unused / Default Ports** | `VLAN 1`

---
##### **SW2 — Cisco Catalyst IE-3000-4TC**
* **Management IP:** `192.168.10.201` (SVI `Vlan11`)
* **Physical Connections:**
  * `Fa1/1` ↔ Laptop (`192.168.10.50`)
  * `Fa1/2` ↔ Laptop (`192.168.11.3`)
  * `Gi1/1` ↔ **SW1** (`Gi1/10`) — trunk
* **Port Breakdown:**
  * `Fa1/1`: **Access Port** | `VLAN 10` — this took me a while to get right. My laptop's IP (`192.168.10.50`) is on VLAN 10, so this port has to be VLAN 10 too, even though SW2's own management SVI lives on VLAN 11. Those are two different things — don't mix them up like I did.
  * `Fa1/2` – `Fa1/4`: **Unused Access Ports** | `VLAN 1`
  * `Gi1/1`: **Trunk Port** | Allowed VLANs: `10, 11`

---
##### **Endpoints & Host Assignments**
* **Virtual Firewall (vFW):**
  * `192.168.10.1` (VLAN 10 gateway, on pfSense's LAN NIC — `em1`)
  * `192.168.11.1` (VLAN 11 gateway, on pfSense's WAN NIC — `em0`, repurposed, see `05-FireWall_Configuration.md`)
* **Server Host (SVR):**
  * ESXi management IP: `192.168.10.2`, but this only lives on a **private direct cable** to my laptop, it never touches these switches at all — don't go looking for it on VLAN 10 here.
  * **Hosted Virtual Machines:**
    * **VM1 (VLAN 10):** `192.168.10.10`
    * **VM2 (VLAN 10):** `192.168.10.11`
    * **VM3 (VLAN 11):** `192.168.11.10`
* **Laptop:**
  * When plugged into **SW2 `Fa1/1`**: `192.168.10.50`
  * When plugged directly into the server's `vmnic0` port instead (for ESXi management): `192.168.10.3` — I only have one Ethernet port so I physically swap which cable is plugged in and change my IP each time. See the Fix-It Guide for the exact swap steps.

---
#### 2. Communication Flow
* **Intra-VLAN (Layer 2 Switching):**
  * Local traffic within the same VLAN stays on the local switch, untagged.
  * Inter-switch traffic for the same VLAN crosses the trunk link (`Gi1/10` ↔ `Gi1/1`) using **802.1Q encapsulation tagging**.
* **Inter-VLAN (Layer 3 Routing):**
  * Traffic moving between `VLAN 10` (`192.168.10.0/24`) and `VLAN 11` (`192.168.11.0/24`) has to route through the Virtual Firewall (**vFW**) at `192.168.10.1` / `192.168.11.1`. The switches themselves never route between VLANs — that's the firewall's job dummy.

---
### Step-by-Step Switch Configuration
This is the config I actually ended up running on each switch, cleaned up. A couple of gotchas I hit along the way, noted inline.

**Gotcha #1:** `switchport trunk encapsulation dot1q` throws `% Invalid input` as its own line on these IE-3300s. Turns out you don't need it — dot1q is the only encapsulation these switches support, so `switchport mode trunk` alone is enough. I skipped that line below. but I still included it in the configuration because this is what you'd do on a switches that requires that command.

**Gotcha #2:** trunk interfaces sat at `down/down` for a while — that was just the physical cable not being plugged in yet on both ends, not a config problem. Don't panic if you see that before you've actually connected the cable.

**Gotcha #3:** Okay this one isn't really a gotcha but it was a pain in my butt and it's only valid if you are setting up a Ether Channel. Once you've configured the Ether Channel on the switch, 

#### Switch 1: **Cisco Catalyst IE-3300-8T2X** feat. **Cisco PWR-IE240W-PCAC-L**
```cisco
Switch>enable
Password:
Switch#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Switch(config)#enable secret [insert-password]
Switch(config)#hostname SW1

SW1(config)#vlan 10,11,12
SW1(config-vlan)#exit

SW1(config)#interface vlan 10
SW1(config-if)#ip address 192.168.10.200 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit

SW1(config)#ip default-gateway 192.168.10.1

! Gi1/4 = server port = TRUNK, not access, because ESXi sends both VLAN 10 and 11 down it
SW1(config)#interface Port-channel 1
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11,12
SW1(config-if)#exit
SW1(config)#
*May  6 02:59:28.626: %ETC-5-L3DONTBNDL2: Gi1/3 suspended: LACP currently not enabled on the remote port.
*May  6 02:59:29.130: %ETC-5-L3DONTBNDL2: Gi1/4 suspended: LACP currently not enabled on the remote port.
*May  6 02:59:29.186: %ETC-5-L3DONTBNDL2: Gi1/5 suspended: LACP currently not enabled on the remote port.
SW1(config)#interface range GigabitEthernet 1/3-5
SW1(config-if-range)#switchport mode trunk
SW1(config-if-range)#switchport trunk allowed vlan 10,11,12
SW1(config-if-range)#shutdown
SW1(config-if-range)#
*May  6 03:00:50.967: %LINK-5-CHANGED: Interface GigabitEthernet1/3, changed state to administratively down
*May  6 03:00:50.983: %LINK-5-CHANGED: Interface GigabitEthernet1/4, changed state to administratively down
*May  6 03:00:50.994: %LINK-5-CHANGED: Interface GigabitEthernet1/5, changed state to administratively down
SW1(config-if-range)#no shutdown
SW1(config-if-range)#
*May  6 03:01:10.390: %LINK-5-UPDOWN: Interface GigabitEthernet1/3, changed state to down
*May  6 03:01:10.418: %LINK-5-UPDOWN: Interface GigabitEthernet1/4, changed state to down
*May  6 03:01:10.446: %LINK-5-UPDOWN: Interface GigabitEthernet1/5, changed state to down
*May  6 03:01:18.028: %LINK-5-UPDOWN: Interface GigabitEthernet1/3, changed state to up
*May  6 03:01:18.278: %LINK-5-UPDOWN: Interface GigabitEthernet1/5, changed state to up
*May  6 03:01:18.288: %LINK-5-UPDOWN: Interface GigabitEthernet1/4, changed state to up
*May  6 03:01:27.075: %ETC-5-L3DONTBNDL2: Gi1/4 suspended: LACP currently not enabled on the remote port.
*May  6 03:01:27.639: %ETC-5-L3DONTBNDL2: Gi1/5 suspended: LACP currently not enabled on the remote port.
*May  6 03:01:27.699: %ETC-5-L3DONTBNDL2: Gi1/3 suspended: LACP currently not enabled on the remote port.
SW1(config-if-range)#
SW1#

! Change Cisco to Static EtherChannel
SW1(config)#interface range GigabitEthernet 1/3-5
SW1(config-if-range)#no channel-group 1 mode active
SW1(config-if-range)#c
*May  6 03:18:29.087: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/3, changed state to up
*May  6 03:18:29.102: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/4, changed state to up
*May  6 03:18:29.114: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/5, changed state to u
SW1(config-if-range)#channel-group 1 mode on
SW1(config-if-range)#
*May  6 03:18:58.242: %LINK-5-UPDOWN: Interface Port-channel1, changed state to up
*May  6 03:18:59.243: %LINEPROTO-5-UPDOWN: Line protocol on Interface Port-channel1, changed state to up
SW1(config-if-range)#end
SW1#


! Gi1/10 = trunk to SW2
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#description Trunk_to_SW2
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11,12
SW1(config-if)#no shutdown
SW1(config-if)#exit

SW1(config)#end
SW1#copy running-config startup-config
```

##### Verify: `show vlan brief`
Should show VLAN 10, VLAN 11, and VLAN 12 all **active**.
```cisco
SW1#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Te1/1, Te1/2, Gi1/6, Gi1/7
                                                Gi1/8, Gi1/9, Ap1/1
10   VLAN0010                         active
11   VLAN0011                         active
12   VLAN0012                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
SW1#
```
##### Verify: `show interfaces trunk`
Should show you if the port is trunking and which VLANs are allowed.
```cisco
SW1#show interfaces trunk

Port           Mode             Encapsulation  Status        Native vlan
Gi1/10         auto             802.1q         trunking      1
Po1            on               802.1q         trunking      1

Port           Vlans allowed on trunk
Gi1/10         1-4094
Po1            10-12

Port           Vlans allowed and active in management domain
Gi1/10         1,10-12
Po1            10-12

Port           Vlans in spanning tree forwarding state and not pruned
Gi1/10         1,10-12
Po1            10-12
SW1#
```
##### Verify: `show ip interface brief`
`Vlan10` should show `192.168.10.200`, status `up / up`.
You should also see the EtherChannel we setup.
```cisco
SW1#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
Vlan10                 192.168.10.200  YES manual up                    up
TenGigabitEthernet1/1  unassigned      YES unset  down                  down
TenGigabitEthernet1/2  unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  up                    up
GigabitEthernet1/4     unassigned      YES unset  up                    up
GigabitEthernet1/5     unassigned      YES unset  up                    up
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  up                    up
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
Port-channel1          unassigned      YES unset  up                    up
SW1#
```

##### Verify: `show running-config` (useful info only: I removed useless info)
```cisco
SW1#show running-config
Building configuration...

Current configuration : 6546 bytes
hostname SW1
!
enable secret 9 $9$VToF.FGn3CyCP.$k4VhyRFzCNUs3juNos569ayXnjpcI9XoLOOA75.Nnw2
!
spanning-tree mode rapid-pvst
!
lldp run
!
interface Port-channel1
 description EtherChannel_to_HPE_Server
 switchport trunk allowed vlan 10-12
 switchport mode trunk
!
interface GigabitEthernet1/3
 description Trunk_to_ESXi_Server_vmnic
 switchport trunk allowed vlan 10-12
 switchport mode trunk
 channel-group 1 mode on
!
interface GigabitEthernet1/4
 description Trunk_to_ESXi_Server_vmnic
 switchport trunk allowed vlan 10-12
 switchport mode trunk
 channel-group 1 mode on
!
interface GigabitEthernet1/5
 description Trunk_to_ESXi_Server_vmnic
 switchport trunk allowed vlan 10-12
 switchport mode trunk
 channel-group 1 mode on
!
interface GigabitEthernet1/10
 description Trunk_to_SW2
 switchport trunk allowed vlan 10-12
 switchport mode trunk
!
interface Vlan10
 ip address 192.168.10.200 255.255.255.0
!
ip default-gateway 192.168.10.1
ip http server
ip http authentication local
ip http secure-server
!
line con 0
 stopbits 1
line vty 0 15
 login
 transport input ssh
!
end
SW1#
```

---
#### Switch 2: **Cisco Catalyst IE-3000 Rugged Switch IE-3000-4TC**
```cisco
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Switch(config)#enable secret [insert-password]
Switch(config)#hostname SW2

SW2(config)#vlan 10,11,12
SW2(config-vlan)#exit

SW2(config)#interface vlan 10
SW2(config-if)#ip address 192.168.10.201 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit

SW2(config)#ip default-gateway 192.168.10.1

! Gi1/1 = trunk to SW1
SW2(config)#interface GigabitEthernet 1/1
SW2(config-if)#description Trunk_to_SW1
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport trunk allowed vlan 10,11,12
SW2(config-if)#no shutdown
SW2(config-if)#exit

! Fa1/1 = Client laptop port 
SW2(config)#interface FastEthernet 1/1
SW2(config-if)#description Connection_to_Laptop_VLAN11
SW2(config-if)#switchport mode access
SW2(config-if)#switchport access vlan 11
SW2(config-if)#no shutdown
SW2(config-if)#exit

! Fa1/2 = MGMT laptop port 
SW2(config)#interface FastEthernet 1/2
SW2(config-if)#description Connection_to_Laptop_VLAN10
SW2(config-if)#switchport mode access
SW2(config-if)#switchport access vlan 10
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#end

SW2#copy running-config startup-config
```

##### Verify: `show vlan brief`
`Fa1/1` should be **active** under `VLAN 10` (not 11 — that mismatch was my original bug).
```cisco
SW2#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/3, Fa1/4, Gi1/2
10   VLAN0010                         active    Fa1/2
11   VLAN0011                         active    Fa1/1
12   VLAN0012                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
SW2#
```
##### Verify: `show interfaces trunk`
Should show you if the port is trunking and which VLANs are allowed.
```cisco
SW2#show interfaces trunk

Port        Mode             Encapsulation  Status        Native vlan
Gi1/1       on               802.1q         trunking      1

Port        Vlans allowed on trunk
Gi1/1       10-12

Port        Vlans allowed and active in management domain
Gi1/1       10-12

Port        Vlans in spanning tree forwarding state and not pruned
Gi1/1       10-12
SW2#
```
##### Verify: `show ip interface brief`
`Vlan11` should show `192.168.10.201`, status `up / up`.
```cisco
SW2#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
Vlan10                 192.168.10.201  YES manual up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2#
```

##### Verify: `show running-config` (useful info only: I removed useless info)
```cisco
hostname SW2
!
enable secret 5 $1$1SY1$i30SNPu7BCINSNFfWOsVU.
!
spanning-tree mode rapid-pvst
!
lldp run
!
interface FastEthernet1/1
 description Connection_to_Laptop_VLAN11
 switchport access vlan 11
 switchport mode access
!
interface FastEthernet1/2
 description Connection_to_Laptop_VLAN10
 switchport access vlan 10
 switchport mode access
!
interface GigabitEthernet1/1
 description Trunk_to_SW1
 switchport trunk allowed vlan 10-12
 switchport mode trunk
!
interface Vlan10
 ip address 192.168.10.201 255.255.255.0
!
ip default-gateway 192.168.10.1
ip http server
ip http secure-server
!
line con 0
line vty 5 15
!
end
```

---
### 3. Verify the Switches Can Talk to Each Other
```cisco
SW1#ping 192.168.10.201
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.11.254, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/4/9 ms
SW1#

```

