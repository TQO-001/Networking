## 1. Configuration of the Switches##
### Network Topology & Configuration Summary
#### 1. Network Devices & Connections
##### **SW1 — Cisco Catalyst IE-3300-8T2S-A**
* **Management IP:** `192.168.110.254` (SVI `Vlan10`)
* **Physical Connections:**
  * `Gi1/4` ↔ Server (`192.168.10.2`)
  * `Gi1/10` ↔ **SW2** (`Gi1/1`)
* **Port Breakdown:**
  * `Gi1/3` – `Gi1/4`: **Access Ports** | `VLAN 10` (`192.168.10.0/24`)
  * `Gi1/10`: **Trunk Port** | Allowed VLANs: `10, 11` (connects to SW2 `Gi1/1`)
  * `Te1/1–1/2`, `Gi1/5–1/9`, `Ap1/1`: **Unused / Default Ports** | `VLAN 1`

---
##### **SW2 — Cisco Catalyst IE-3300-8T2S-E**
* **Management IP:** `192.168.110.254` (SVI `Vlan11`)
* **Physical Connections:**
  * `Fa1/1` ↔ Laptop (`192.168.10.50`)
  * `Gi1/1` ↔ **SW1** (`Gi1/10`)
* **Port Breakdown:**
  * `Fa1/1` – `Fa1/4`: **Access Ports** | `VLAN 11` (`192.168.11.0/24`)
  * `Gi1/1`: **Trunk Port** | Allowed VLANs: `10, 11` (connects to SW1 `Gi1/10`)
  * `Gi1/2`: **Unused Port** | `VLAN 1`

---
##### **Endpoints & Host Assignments**
* **Virtual Firewall (vFW):**
  * `192.168.10.1` (VLAN 10 Gateway)
  * `192.168.11.1` (VLAN 11 Gateway)
* **Server Host (SVR):**
  * **Host IP:** `192.168.10.2` | Connected to **SW1** `Gi1/4`
  * **Hosted Virtual Machines:**
    * **VM1 (VLAN 10):** `192.168.10.10`
    * **VM2 (VLAN 10):** `192.168.10.11`
    * **VM3 (VLAN 11):** `192.168.11.10`
* **Management Laptop:**
  * **IP Address:** `192.168.10.50` | Connected to **SW2** `Fa1/1` *(Note: Assigned to VLAN 11 port segment)*

---
#### 2. Communication Flow
* **Intra-VLAN (Layer 2 Switching):**
  * Local traffic within the same VLAN stays on the local switch untagged.
  * Inter-switch traffic for the same VLAN traverses the trunk link (`Gi1/10` ↔ `Gi1/1`) using **802.1Q encapsulation tagging**.
* **Inter-VLAN (Layer 3 Routing):**
  * Traffic moving between `VLAN 10` (`192.168.10.0/24`) and `VLAN 11` (`192.168.11.0/24`) must route through the Virtual Firewall (**vFW**) at `192.168.10.1` / `192.168.11.1`.

---
> [!tip] #### 3. Configuration Issues & Fixes Needed
1. **Missing VLAN Definitions:**
   * **SW1:** Run `vlan 11` to create VLAN 11 in the local database.
   * **SW2:** Run `vlan 10` to create VLAN 10 in the local database.
   * *Required so 802.1Q trunk traffic for both VLANs is actively forwarded across `Gi1/10` and `Gi1/1`.*
2. **Interface Down/Down State:**
   * Interfaces show `down/down`. Verify physical cabling and issue `no shutdown` on required interfaces.
3. **Subnet/VLAN Mismatch on Laptop:**
   * **Laptop** has IP `192.168.10.50` (VLAN 10 subnet) but is connected to **SW2** `Fa1/1` (assigned to VLAN 11).
   * **Fix:** Reassign `Fa1/1` to `VLAN 10` or reconfigure the Laptop IP to `192.168.11.x`.

---
---
### Step-by-Step Switch Configuration
**1.Configure Management VLAN 110 and Trunking on Switch 1:** Switch 1 Setup.

Create VLAN 10, 11, and 110. Assign the management SVI and set the trunk link to allow all three VLANs.
```cisco
SW1# configure terminal
SW1(config)# vlan 10,11,110
SW1(config-vlan)# exit

SW1(config)# interface Vlan110
SW1(config-if)# description Management_Interface
SW1(config-if)# ip address 192.168.110.254 255.255.255.0
SW1(config-if)# no shutdown
SW1(config-if)# exit

SW1(config)# ip default-gateway 192.168.110.1

SW1(config)# interface GigabitEthernet 1/10
SW1(config-if)# description Trunk_to_SW2
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 10,11,110
SW1(config-if)# no shutdown
SW1(config-if)# exit
```

To verify: Run `do show ip interface brief` and verify `Vlan110` displays `192.168.110.254` with Status **up / up**.

**2.Configure Management VLAN 110, Trunking, and Access Port on Switch 2:** Switch 2 Setup.

Set up Switch 2 with its unique management IP (`192.168.110.253`), matching trunk configuration, and place the Laptop port into VLAN 10.
```cisco
SW2# configure terminal
SW2(config)# vlan 10,11,110
SW2(config-vlan)# exit

SW2(config)# interface Vlan110
SW2(config-if)# description Management_Interface
SW2(config-if)# ip address 192.168.110.253 255.255.255.0
SW2(config-if)# no shutdown
SW2(config-if)# exit

SW2(config)# ip default-gateway 192.168.110.1

SW2(config)# interface GigabitEthernet 1/10
SW2(config-if)# description Trunk_to_SW1
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk allowed vlan 10,11,110
SW2(config-if)# no shutdown
SW2(config-if)# exit

SW2(config)# interface GigabitEthernet 1/1
SW2(config-if)# description Connection_to_Laptop
SW2(config-if)# switchport mode access
SW2(config-if)# switchport access vlan 10
SW2(config-if)# no shutdown
SW2(config-if)# exit
```

To verify: Run `do show vlan brief` on SW2 and confirm port `Gi1/1` is active under `VLAN 10`.

**3.Verify Management Inter-Switch Ping:**Connectivity Test.

Ping Switch 2's management IP directly from Switch 1 over the trunk link.

```cisco
SW1# ping 192.168.110.253
```

To verify: Output should report a 100% success rate (`!!!!!`).

> [!note] #### Firewall Gateway Requirement
For management traffic from `192.168.110.0/24` to reach devices in VLAN 10 (`192.168.10.0/24`) or VLAN 11 (`192.168.11.0/24`), the **Virtual Firewall** must have a subinterface/interface created for VLAN 110 with IP `192.168.110.1` to route between these subnets.

---
#### Switch 1: **Cisco Catalyst IE-3300-8T2S-A** feat. **Cisco PWR-IE240W-PCAC-L**
```cisco
Switch>enable
Password:
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#enable secret [insert-password]
Switch(config)#hostname SW1
SW1(config)#vlan 10,11,110
SW1(config-vlan)#exit
SW1(config)#interface vlan 110
SW1(config-if)#
*May  1 04:20:29.730: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan110, changed state to down
SW1(config-if)#description Management_Interface
SW1(config-if)#ip address 192.168.110.254 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit
SW1(config)#
SW1(config)#ip default-gateway 192.168.110.1
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#description Trunk_to_SW2
SW1(config-if)#switchport trunk encapsulation dot1q
                                ^
% Invalid input detected at '^' marker.

SW1(config-if)#
SW1#
*May  1 04:25:17.374: %SYS-5-CONFIG_I: Configured from console by console
SW1#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#switchport mode trunk
SW1(config-if)#swi
*May  1 04:26:47.841: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/10, changed state to down
*May  1 04:26:50.854: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/10, changed state to up
SW1(config-if)#switchport trunk allowed vlan 10,11,110
*May  1 04:27:22.850: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan110, changed state to up
SW1(config-if)#switchport trunk allowed vlan 10,11,110
SW1(config-if)#no shutdown
SW1(config-if)#exit
SW1(config)#exit
SW1#cop
*May  1 04:27:59.721: %SYS-5-CONFIG_I: Configured from console by cons
SW1#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
SW1#
*May  1 04:28:27.308: %SYS-6-PRIVCFG_ENCRYPT_SUCCESS: Successfully encrypted private config file
SW1#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
Vlan110                192.168.110.254 YES manual up                    up
TenGigabitEthernet1/1  unassigned      YES unset  down                  down
TenGigabitEthernet1/2  unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  down                  down
GigabitEthernet1/4     unassigned      YES unset  up                    up
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  up                    up
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
SW1#
```
#### Switch 2 : **Cisco Catalyst IE-3000 Rugged Switch IE-3300-8T2S-E**
```cisco
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#enable secret eni1cam
Switch(config)#hostname SW2
SW2(config)#
SW2(config)#vlan 10,11,110
SW2(config-vlan)#exit
SW2(config)#interface vlan 110
SW2(config-if)#
*Mar  1 00:08:06.883: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan110, changed state to up
SW2(config-if)#description Management_Interface
SW2(config-if)#ip address 192.168.110.253 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#
SW2(config)#ip default-gateway 192.168.110.1
SW2(config)#interface GigabitEthernet 1/1
SW2(config-if)#description Trunk_to_SW2
SW2(config-if)#switchport trunk encapsulation dot1q
                                ^
% Invalid input detected at '^' marker.

SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport trunk allowed vlan 10,11,110
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
Vlan110                192.168.110.253 YES manual up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2(config)#

```

#### Your name is Shun Ling, so do the computer Ping
```cisco
SW1>enable
Password:
SW1#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
Vlan110                192.168.110.254 YES manual up                    up
TenGigabitEthernet1/1  unassigned      YES unset  down                  down
TenGigabitEthernet1/2  unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  down                  down
GigabitEthernet1/4     unassigned      YES unset  up                    up
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  up                    up
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
SW1#ping 192.168.110.253
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.110.253, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms
SW1#
SW2>enable
Password:
SW2#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  administratively down down
Vlan110                192.168.110.253 YES manual up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2#ping 192.168.110.254
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.110.254, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/8 ms
SW2#

```