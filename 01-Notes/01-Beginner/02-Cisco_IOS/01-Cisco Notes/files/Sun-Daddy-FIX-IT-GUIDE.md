# Sun Daddy Network — Fix-It & Finish Guide
This is a separate guide, not documentation — check boxes as you go. Read it alongside the fixed 00–05 docs, which are the reference for *why* each step is correct.

**Your laptop has one Ethernet port.** Every step below that needs the laptop plugged in somewhere tells you exactly which cable/IP combo to use. You will swap between "plugged into the server directly" and "plugged into Switch 2" several times — that's expected, not a sign something's wrong.

---

## Part A — Where you actually are right now
Based on your screenshots, here's your real starting point (confirm each one, don't assume):
- [x] ESXi is installed and reachable — currently at `192.168.10.2` (confirm by browsing there with your laptop plugged directly into the server's `vmnic0` port, laptop IP set to `192.168.10.3/24`, no gateway).
- [x] `vSwitch0` currently has **both** `vmnic0` and `vmnic1` as uplinks — check **Networking → Virtual switches → vSwitch0**. This is what's causing your laptop to drop when the switch-side cable is live.
- [x] Port groups that exist right now: `VM Network` (unused), `VLAN_11`, `VLAN_10`, `Management Network`. No VLAN 110 group — good, we're not adding one.
- [x] VM1, VM2, VM3, and a pfSense VM (`vFW`) already exist.
- [x] pfSense currently shows (check its console): `WAN (wan) -> em0 -> v4: 192.168.11.1/24` and `LAN (lan) -> em1 -> v4: 192.168.10.1/24`. If yours shows something different, note it down — the steps below assume this starting point.
- [x] On the switches: confirm what's actually configured right now by connecting to each one and running `show vlan brief` and `show ip interface brief`. Compare against `02-Switches_Documentation.md` — don't assume they match yet.

---

## Part B — Fix ESXi networking (do this first, before touching switches)
This is the change that stops your laptop from dropping connection whenever the switch-side cable is live.

- [x] Browse to ESXi (laptop plugged into server `vmnic0`, laptop set to `192.168.10.3/24`).
- [x] **Networking → Virtual switches → vSwitch0 → Edit settings.** Under Uplinks, remove `vmnic1` (keep `vmnic0`). Save.
- [x] **Networking → Virtual switches → Add standard virtual switch.** Name: `vSwitch1`. Uplink: `vmnic1`. Add.
- [x] Select `vSwitch1` → Edit settings → **Security** tab → set Promiscuous Mode, MAC Address Changes, Forged Transmits all to **Accept**. Save.
- [x] Your existing `VLAN_10` and `VLAN_11` port groups — check which vSwitch they're on. If they're on `vSwitch0`, edit each one and move it to `vSwitch1` (Edit settings → Virtual switch dropdown). If they don't exist yet, create them on `vSwitch1` with VLAN IDs 10 and 11 respectively.
- [x] Leave `Management Network` exactly where it is, on `vSwitch0`. Don't touch its VLAN ID.
- [x] Unplug the cable between your laptop and the server. Plug a cable from the server's `vmnic1` port into **Switch 1, Gi1/4** — you can leave this one connected permanently, it's server-to-switch, not server-to-laptop.

---

## Part C — Reassign VM and pfSense port groups
- [x] VM1 → Edit Settings → Network Adapter → `VLAN_10` (on `vSwitch1` now). Save.
- [x] VM2 → Edit Settings → Network Adapter → `VLAN_10`. Save.
- [x] VM3 → Edit Settings → Network Adapter → `VLAN_11`. Save.
- [x] pfSense (`vFW`) → Edit Settings → check **both** network adapters: whichever one is LAN (`em1`) should point to `VLAN_10`, whichever is WAN (`em0`) should point to `VLAN_11`. Save.
- [x] Power on all 4 VMs if they aren't already.

---

## Part D — Configure Switch 1
Plug your laptop into Switch 1's console port (or however you've been accessing it — this doesn't need your laptop's production IP at all, console access is separate).

- [x] Paste the full Switch 1 config block from `02-Switches_Documentation.md`.
- [x] `show vlan brief` — confirm `10` and `11` both show active.
- [x] `show ip interface brief` — confirm `Vlan10` shows `192.168.10.254`, up/up.
- [x] `show interfaces trunk` — confirm `Gi1/4` and `Gi1/10` are both listed as trunks, allowed VLANs `10,11`.
- [x] `copy running-config startup-config`.
```cisco
SW1#show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Te1/1, Te1/2, Gi1/3, Gi1/5
                                                Gi1/6, Gi1/7, Gi1/8, Gi1/9
                                                Ap1/1
10   VLAN0010                         active
11   VLAN0011                         active
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
SW1#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  192.168.1.1     YES TFTP   up                    up
Vlan10                 192.168.10.254  YES manual up                    up
Vlan11                 unassigned      YES unset  up                    up
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
SW1#show interfaces trunk

Port           Mode             Encapsulation  Status        Native vlan
Gi1/4          on               802.1q         trunking      1
Gi1/10         on               802.1q         trunking      1

Port           Vlans allowed on trunk
Gi1/4          10-11
Gi1/10         10-11

Port           Vlans allowed and active in management domain
Gi1/4          10-11
Gi1/10         10-11

Port           Vlans in spanning tree forwarding state and not pruned
Gi1/4          10-11
Gi1/10         10-11
SW1#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
SW1#
*May  2 06:53:55.717: %SYS-6-PRIVCFG_ENCRYPT_SUCCESS: Successfully encrypted private config file
SW1#
```
## Part E — Configure Switch 2
- [x] Paste the full Switch 2 config block from `02-Switches_Documentation.md`.
- [x] `show vlan brief` — confirm `10` and `11` active, and `Fa1/1` shows under VLAN 10.
- [x] `show ip interface brief` — confirm `Vlan11` shows `192.168.11.254`, up/up.
- [x] `copy running-config startup-config`.
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
SW2#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    down
Vlan10                 unassigned      YES unset  up                    up
Vlan11                 192.168.11.254  YES manual up                    up
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  up                    up
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
SW2#
```
## Part F — Connect the switches and verify
- [x] Cable Switch 1 `Gi1/10` to Switch 2 `Gi1/1`.
- [x] From SW1: `ping 192.168.11.254` — should succeed (100% or close to it).
  - If it fails: check the cable is fully seated both ends, and neither port shows `administratively down` (`no shutdown` again if so).

---

## Part G — Configure pfSense
- [x] Open the pfSense console in ESXi and confirm it still shows the `em0`/`em1` assignment from Part A. If not, use console option **1** (Assign Interfaces) to set WAN=`em0`, LAN=`em1`.
- [x] Console option **2** (Set interface IP address): confirm/set LAN = `192.168.10.1/24`, WAN = `192.168.11.1/24`, no gateway on either, decline DHCP unless you want it.
- [x] From a VM1 console (temporarily use its own console in ESXi if it has no network yet), browse to `https://192.168.10.1` and log in.
- [x] **Interfaces → WAN**: scroll to Reserved Networks, uncheck **Block private networks and loopback addresses** and **Block bogon networks**. Save, Apply Changes.
- [x] **Firewall → Rules → LAN tab → Add**: Pass / IPv4 / Any / Any / Any. Save.
- [x] **Firewall → Rules → WAN tab → Add**: Pass / IPv4 / Any / Any / Any. Save.
- [x] **Apply Changes** once, after both rules are added.

---

## Part H — Your laptop's two roles (never both at once)
You'll use one of these two setups depending on what you're doing. Switching between them is: unplug → change IP settings → plug into the other spot.

**Setup 1 — Direct to server (ESXi host management)**
- Cable: laptop → server's `vmnic0` port.
- Laptop IPv4: static `192.168.10.50`, mask `255.255.255.0`, no gateway.
- Use for: `https://192.168.10.2` (ESXi Host Client).

**Setup 2 — Through the switch (production test client)**
- Cable: laptop → Switch 2, port `Fa1/1`.
- Laptop IPv4: static `192.168.10.50`, mask `255.255.255.0`, gateway `192.168.10.1`.
- Use for: the actual task-5 ping test below.

---

## Part I — Final verification (this finishes the task)
Do these in order.

- [x] From SW1 console: `ping 192.168.11.254` — succeeds
- [x] From a VM1 console: `ping 192.168.10.1` — succeeds
- [x] From VM1: `ping 192.168.11.1` — succeeds
- [ ] From VM1: `ping 192.168.11.10` (VM3, across VLANs through pfSense) — succeeds
- [ ] Switch your laptop to **Setup 2** (Part H). Open a command prompt: `ping 192.168.10.1` — succeeds
- [ ] Same laptop connection: `ping 192.168.11.10` — **succeeds. This is Task step 5 — done.**
- [ ] Switch your laptop back to **Setup 1**, confirm `https://192.168.10.2` still loads — your emergency management path still works independent of everything else.

they can ping across networks aside from that VM3 can ping SW2

If every box is checked, the network is done: both switches trunk VLAN 10/11 correctly, ESXi's two vSwitches keep your management link and production trunk from interfering with each other, pfSense routes between the VLANs, and your laptop can prove it from the switch side.

---

## If something's still broken
- **Laptop can't reach `192.168.10.2` at all (Setup 1):** double check your laptop's IP is actually static `192.168.10.3/24` and the cable is in the server's `vmnic0` port specifically, not `vmnic1`.
- **VM1 can't ping `192.168.10.1` (its own gateway):** check VM1's network adapter is on the `VLAN_10` port group, and that VM1's own static IP/gateway are set correctly inside Windows.
- **VM1 can ping `192.168.10.1` but not `192.168.11.10`:** almost always a missing firewall pass rule on one of pfSense's interfaces, or the WAN "block private networks" checkboxes still checked — recheck Part G.
- **Laptop (Setup 2) can't ping anything:** confirm Switch 2's `Fa1/1` is access mode VLAN 10 (not 11), and the trunk between SW1 and SW2 is actually up (Part F).
