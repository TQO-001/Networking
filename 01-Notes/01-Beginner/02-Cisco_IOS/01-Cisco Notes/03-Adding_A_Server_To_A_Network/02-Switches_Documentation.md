## 1. Configuration of the Switches ##
### Network Topology & Configuration Summary
#### 1. Network Devices & Connections
##### **SW1 — Cisco Catalyst IE-3300-8T2X**
* **Management IP:** `192.168.10.254` (SVI `Vlan10`)
* **Physical Connections:**
  * `Gi1/4` ↔ Server, `vmnic1` (trunk — carries VLAN 10 **and** 11)
  * `Gi1/10` ↔ **SW2** (`Gi1/1`) — trunk
* **Port Breakdown:**
  * `Gi1/4`: **Trunk Port** | Allowed VLANs: `10, 11` — this is the server port, it has to be a trunk because my server pushes both VLAN 10 (VM1/VM2) and VLAN 11 (VM3) traffic down this one cable.
  * `Gi1/10`: **Trunk Port** | Allowed VLANs: `10, 11` (connects to SW2 `Gi1/1`)
  * `Gi1/3`, `Te1/1–1/2`, `Gi1/5–1/9`, `Ap1/1`: **Unused / Default Ports** | `VLAN 1`

---
##### **SW2 — Cisco Catalyst IE-3000-4TC**
* **Management IP:** `192.168.11.254` (SVI `Vlan11`)
* **Physical Connections:**
  * `Fa1/1` ↔ Laptop (`192.168.10.50`)
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
  * Traffic moving between `VLAN 10` (`192.168.10.0/24`) and `VLAN 11` (`192.168.11.0/24`) has to route through the Virtual Firewall (**vFW**) at `192.168.10.1` / `192.168.11.1`. The switches themselves never route between VLANs — that's the firewall's job.

---
### Step-by-Step Switch Configuration
This is the config I actually ended up running on each switch, cleaned up. A couple of gotchas I hit along the way, noted inline.

**Gotcha #1:** `switchport trunk encapsulation dot1q` throws `% Invalid input` as its own line on these IE-3300s. Turns out you don't need it — dot1q is the only encapsulation these switches support, so `switchport mode trunk` alone is enough. I skipped that line below. but I still included it in the configuration because this is what you'd do on a switches that requires that command.

**Gotcha #2:** trunk interfaces sat at `down/down` for a while — that was just the physical cable not being plugged in yet on both ends, not a config problem. Don't panic if you see that before you've actually connected the cable.

#### Switch 1: **Cisco Catalyst IE-3300-8T2X** feat. **Cisco PWR-IE240W-PCAC-L**
```cisco
Switch>enable
Password:
Switch#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Switch(config)#enable secret [insert-password]
Switch(config)#hostname SW1

SW1(config)#vlan 10,11
SW1(config-vlan)#exit

SW1(config)#interface vlan 10
SW1(config-if)#ip address 192.168.10.254 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit

SW1(config)#ip default-gateway 192.168.10.1

! Gi1/4 = server port = TRUNK, not access, because ESXi sends both VLAN 10 and 11 down it
SW1(config)#interface GigabitEthernet 1/4
SW1(config-if)#description Trunk_to_ESXi_Server_vmnic1
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11
SW1(config-if)#no shutdown
SW1(config-if)#exit

! Gi1/10 = trunk to SW2
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#description Trunk_to_SW2
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11
SW1(config-if)#no shutdown
SW1(config-if)#exit

SW1(config)#exit
SW1#copy running-config startup-config
```

##### Verify: `show vlan brief`
Should show VLAN 10 and VLAN 11 both **active**.
```cisco
SW1#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Te1/1, Te1/2, Gi1/3, Gi1/4
                                                Gi1/5, Gi1/6, Gi1/7, Gi1/8
                                                Gi1/9, Ap1/1
10   VLAN0010                         active
11   VLAN0011                         active
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
Gi1/10         on               802.1q         trunking      1

Port           Vlans allowed on trunk
Gi1/10         10-11

Port           Vlans allowed and active in management domain
Gi1/10         10-11

Port           Vlans in spanning tree forwarding state and not pruned
Gi1/10         10-11
SW1#
```
##### Verify: `show ip interface brief`
`Vlan10` should show `192.168.10.254`, status `up / up`.
```cisco
SW1#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  192.168.1.1     YES TFTP   up                    up
Vlan10                 192.168.10.254  YES manual up                    up
TenGigabitEthernet1/1  unassigned      YES unset  down                  down
TenGigabitEthernet1/2  unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  down                  down
GigabitEthernet1/4     unassigned      YES unset  down                  down
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  up                    up
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
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

SW2(config)#vlan 10,11
SW2(config-vlan)#exit

SW2(config)#interface vlan 11
SW2(config-if)#ip address 192.168.11.254 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit

SW2(config)#ip default-gateway 192.168.11.1

! Fa1/1 = laptop port = VLAN 10 (matches my laptop's 192.168.110.50 IP)
SW2(config)#interface FastEthernet 1/1
SW2(config-if)#description Connection_to_Laptop
SW2(config-if)#switchport mode access
SW2(config-if)#switchport access vlan 10
SW2(config-if)#no shutdown
SW2(config-if)#exit

! Gi1/1 = trunk to SW1
SW2(config)#interface GigabitEthernet 1/1
SW2(config-if)#description Trunk_to_SW1
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport trunk allowed vlan 10,11
SW2(config-if)#no shutdown
SW2(config-if)#exit

SW2(config)#exit
SW2#copy running-config startup-config
```

##### Verify: `show vlan brief`
`Fa1/1` should be **active** under `VLAN 10` (not 11 — that mismatch was my original bug).
```cisco
SW2#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa1/2, Fa1/3, Fa1/4, Gi1/2
10   VLAN0010                         active    Fa1/1
11   VLAN0011                         active
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
Gi1/1       10-11

Port        Vlans allowed and active in management domain
Gi1/1       10-11

Port        Vlans in spanning tree forwarding state and not pruned
Gi1/1       10-11
SW2#
```
##### Verify: `show ip interface brief`
`Vlan11` should show `192.168.11.254`, status `up / up`.
```cisco
SW2#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    down
Vlan11                 192.168.11.254  YES manual up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2#
```

---
### 3. Verify the Switches Can Talk to Each Other
```cisco
SW1#ping 192.168.11.254
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.11.254, timeout is 2 seconds:
.....
Success rate is 0 percent (0/5)
SW1#

```

Did fail? Congratulations, you've been played. Nah I'm kidding,Your pings are failing because SW1 and SW2 are trying to talk across different subnets without a router to bridge them. If you intentionally want the switch management environments isolated on separate subnets, they will not be able to ping each other until your pfSense firewall is up, and we haven't set that up yet plus we have no router in our network so there's nothing to route network traffic **yet**.

Once you've configured the pfSense firewall, come back here and check if you can ping the switches: 
```cisco
SW1#ping 192.168.11.254
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.11.254, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5)
```

If this still comes back at 0%, it's almost always the physical cable between `Gi1/10` and `Gi1/1` not fully seated, or one of those ports still showing `administratively down` — run `no shutdown` again on whichever one is down, or you know what? Maybe it's you, maybe you're the problem, shame on you. No but seriously I can't stress enough how important it is to run `no shutdown` again, I had the exact same problem because I did the steps correctly but still couldn't communicate the switches.

#### Double checking
In case you doubt yourself and maybe you think you made a mistake somewhere along this task, we can do to things.

Because these are two entirely different networks (`192.168.10.0/24` and `192.168.11.0/24`), they cannot talk directly at Layer 2. They need a firewall or router to move the traffic between the VLANs. Since your virtual firewall is hosted on the server, and the server port (`Gi1/4`) currently shows **notconnect**, there is nothing online to route your ping packets.

---

##### Option 1: The Quick Fix (Put both switches on the same Management VLAN)
If you want the switches to be able to ping each other directly right now without needing the firewall online, you should put both of their management interfaces onto the **same VLAN**.

Let's move **SW2 over to VLAN 10** so it matches SW1:

```cisco
SW2# configure terminal
SW2(config)# interface vlan 11
SW2(config-if)# shutdown
SW2(config-if)# no ip address
SW2(config-if)# exit
SW2(config)# interface vlan 10
SW2(config-if)# ip address 192.168.10.253 255.255.255.0
SW2(config-if)# no shutdown
SW2(config-if)# exit
SW2(config)# ip default-gateway 192.168.10.1
SW2(config)# exit
```

> [!note] **NOTE**: Make sure to change your laptop's IP address if you swap between them later, as both switches will now be managed via VLAN 10.

---

##### Option 2: Keep the Topology (Bring the Firewall / Server Online) like we intended
Since we intentionally want the switch management environments isolated on separate subnets, they will not be able to ping each other until your pfSense firewall is up. So you should just carry on with the rest of the configuration and ignore this part but if you have configured the firewall and you're coming back to see if you made any mistakes because there's still no communication then you can do the following:

1. **Check the Server Cable:** Physically check the cable between SW1 `Gi1/4` and the server's `vmnic1`.
2. **Boot the vFW:** Once the link status changes to `connected`, ensure your pfSense virtual machine is turned on and running.
3. **Route Traffic:** Once the firewall interfaces (`192.168.10.1` and `192.168.11.1`) are active, SW1 will send its cross-VLAN pings to the firewall, which will successfully route them to SW2.

---