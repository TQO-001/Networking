## 4. Creating a Virtual FireWall
> Honestly just follow [this tutorial](https://glmdev.medium.com/how-to-set-up-virtualized-pfsense-on-vmware-esxi-6-x-2c2861b25931), it's much more concise yet still more descriptive than what I wrote below. Basically it's a more efficient tutorial. But you're gonna have to change how you do it to suit our current network.

We'll create a **vFW (virtual Firewall)** to add to our network. For the Sun Daddy network, the vFW's job is to route between VLAN 11 and VLAN 12 — the switches can't do that themselves, so this is what makes `ping VM3 from Laptop` (Task step 5) actually work.

### Installing pfSense
I used **pfSense** for this (any firewall/router software works — IPFire/OPNsense/routerOS/etc, I just went with what I was told to use).

Create a new virtual machine, and, for pfSense, select OS family: Other and set the OS to "FreeBSD (64-bit)."

Tab through the wizard until you land on the VM's configuration page. Here we need to modify a few things.
![[b5d09939-3c49-4d9d-909a-726210947610.png|476]]

Then, in the CD/DVD drive, select the pfSense installer ISO from the datastore. Now you can click create and start the VM. Upload the ISO the same way you did for the Windows 10 ISO.

### Give it two network adapters
pfSense needs to see VLAN 11 and VLAN 12 separately so it can route between them. I gave it two virtual NICs — one per VLAN — instead of one NIC with VLAN tags, because it's a lot easier to reason about (and to recover if I mess something up): each NIC just plugs into a differently-tagged ESXi port group, and pfSense itself never has to know VLANs exist at all.

- **Network Adapter 1:** attach to `VLAN_12` (on `vSwitch1` — see `03-Server_Setup_Documentation.md`, Step 0E).
- **Network Adapter 2:** attach to `VLAN_11`.

> **Heads up about naming:** pfSense's setup wizard insists on a "WAN" and a "LAN" interface and won't let you skip WAN. I didn't fight it (lies) — my first NIC became **LAN** (VLAN 12), my second became **WAN** (VLAN 11), even though it's not actually a WAN/internet connection. I just treat "WAN" as my VLAN 11 interface and configured it accordingly below. You *can* reassign/rename it later if it bugs you, but it works fine as-is, don't create problems where there are none.

### Step 1: Assign Interfaces (pfSense console)
Open the pfSense VM console in ESXi:
1. At the console menu, type **1** for **Assign Interfaces**.
2. Type **n** when asked to configure VLANs now — we're not using VLAN tags inside pfSense.
3. Enter `em0` for WAN.
4. Enter `em1` for LAN.
5. Enter `em2` for VLAN12 (opt1).
6. Confirm.

The console banner should now show:
```
WAN (wan) -> em0 -> v4: (not yet set)
LAN (lan) -> em1 -> v4: (not yet set)
VLAN (opt1) -> em2 -> v4: (not yet set)
```

### Step 2: Set IP Addresses (pfSense console)
From the same console menu, type **2** (Set interface(s) IP address):
- **VLAN:** `192.168.12.1`, mask `24`, no upstream gateway, decline DHCP server (or enable it if you want — I left it off since all my devices are static).
- **LAN:** `192.168.11.1`, mask `24`, no upstream gateway.
- **WAN:** `192.168.10.1`, mask `24`, no upstream gateway.

Console banner should now show:
```
WAN (wan) -> em0 -> v4: 192.168.10.1/24
LAN (lan) -> em1 -> v4: 192.168.11.1/24
VLAN (opt1) -> em2 -> v4: 192.168.12.1/24
```

### Step 3: Log into the WebGUI
From VM1's console (or once VM1 can reach `192.168.11.1`), browse to `https://192.168.12.1` and log in (default `admin` / whatever you set during install).

### Step 4: Unblock private networks on WAN
Since my "WAN" is actually carrying internal VLAN 10 traffic, not a real internet connection, pfSense's default WAN protections will block it:
1. **Interfaces → WAN**
2. Scroll to **Reserved Networks**.
3. Uncheck **Block private networks and loopback addresses**.
4. Uncheck **Block bogon networks**.
5. **Save**, then **Apply Changes**.

### Step 5: Add firewall pass rules
pfSense denies all traffic by default on every interface — you have to explicitly allow it.
ew
> ##### Previously on Gijima: The Intern Chronicles
> This is how we used to define the rules:
> For the VLAN12 tab, LAN tab and the WAN tab (**Firall → Rules → [tab]**):
> 1. Click **Add** (top rule).
> 2. Action: **Pass**, Address Family: **IPv4**, Protocol: **Any**, Source: **Any**, Destination: **Any**. (This will cause problems later teehee, but just do it)
> 3. **Save**.
> 
> Then click **Apply Changes** once all are added.

> **Bidirectional Communication**
> Bidirectional communication is ==a two-way exchange where both parties or systems can send and receive data, signals, or messages==.

> The following steps is very important, it genuinely almost made me crashout, just because you have now configured the vFW to communicate and allow traffic any traffic from any destination/source to flow (change this later once you understand firewalls), doesn't mean you done. No, **you must also configure the firewalls on the VMs too!**

#### Host Firewalls on the VMs
By default, **Windows Firewall** and **Linux `iptables`/`ufw`** block incoming ICMP (ping) echo requests coming from outside their local subnet.

- **Why it breaks:** The VMs receive the ping from a different subnet (`192.168.12.x` trying to reach `192.168.11.x`), treat it as untrusted traffic, and drop the response — preventing bi-directional communication.
- **How to fix:**
    - Open _Windows Defender Firewall with Advanced Security_ → **Inbound Rules** → Enable **Core Networking Diagnostics - ICMP Echo Request (ICMPv4-In)**.

### Step 6: EtherChannel — Why It Broke Routing, and the Fix
This isn't strictly a firewall topic, but the EtherChannel I built between the server and Switch 1 lives on the exact same physical link pfSense's traffic has to cross to route anything at all, so a bad EtherChannel makes pfSense *look* broken even when every single firewall rule and VLAN setting is perfect. Worth understanding properly instead of just copying commands.

#### 6.1 What an EtherChannel Actually Is
An **EtherChannel** (Cisco's term — the generic/IEEE name is **link aggregation**) bundles multiple physical links between two devices into one logical link. Instead of Switch 1 seeing three separate connections to the server (`Gi1/3`, `Gi1/4`, `Gi1/5`), it sees one: `Port-channel1`. The point is bandwidth and redundancy — more total throughput than one cable could carry, and if one physical link dies, the bundle keeps working on the remaining ones instead of the whole connection dropping.

Both ends have to agree the bundle exists and agree on how traffic gets spread across it, or you get exactly the mess I hit: frames for one conversation arriving on a different physical port than the switch expected, which it reads as impossible (the same MAC address can't legitimately show up on two different ports at once) and handles by suspending links, dropping frames, or flapping — none of which look like an obvious "EtherChannel problem" from the outside. It just looks like "the network is flaky."

#### 6.2 LACP vs. Static — the Actual Bug
There are two ways to build an EtherChannel:

- **LACP (Link Aggregation Control Protocol, IEEE 802.3ad):** the two ends actively negotiate the bundle over a control protocol, continuously confirming both sides agree it's up and configured the same way. Cisco's `channel-group X mode active` (or `passive`) commands set this up.
- **Static (a.k.a. "mode on"):** no negotiation at all — you're telling the switch "just treat these ports as one bundle, unconditionally, and trust that whatever's on the other end is doing the same thing." Cisco's `channel-group X mode on`.

I started with `mode active` (LACP), and immediately got:
```
%ETC-5-L3DONTBNDL2: Gi1/3 suspended: LACP currently not enabled on the remote port.
```
on all three links. The reason: **ESXi's free Standard vSwitch doesn't speak LACP at all.** Real LACP support in vSphere requires a **Distributed Switch**, which is a vCenter Server feature — and I'm running standalone ESXi with no vCenter. So no matter how correctly I configured the Cisco side for LACP, the server side was structurally incapable of holding up its end of that negotiation. Switching the Cisco side to `channel-group 1 mode on` (static, no negotiation) fixed the actual bundling — `Port-channel1` came up immediately once both ends stopped trying to negotiate something one side couldn't do.

#### 6.3 The Second Half of the Fix — ESXi's Teaming Policy Has to Match
Getting `Port-channel1` to show `up/up` on the switch wasn't the whole fix. A static EtherChannel still needs both ends to agree on **how** traffic gets distributed across the bundled links, or you get asymmetric routing — a request going out one physical NIC and its reply expected back on a different one, which the switch's static bundle doesn't tolerate.

On the ESXi side, this is controlled by `vSwitch1`'s **teaming and failover** policy. The default, "Route based on originating port ID," picks a NIC per *virtual port* (i.e., roughly per-VM), completely independent of anything the Cisco side is doing — it was never designed to coordinate with a static EtherChannel at all. The setting that actually matches a static EtherChannel is **"Route based on IP hash"** — it computes a hash from source and destination IP address to consistently pick the same physical uplink for a given flow, which is exactly the deterministic behavior a static bundle on the switch side expects.

**The fix, in full:**
1. Cisco side: `channel-group 1 mode on` (static, not LACP) on all three member interfaces — see `02-Switches_Documentation.md` for the exact commands and the full CLI transcript of me getting this wrong first.
2. ESXi side: `vSwitch1` → Edit settings → Teaming and failover → **Load balancing: Route based on IP hash**, all three `vmnic`s (`vmnic1`/`vmnic2`/`vmnic3`) set to **Active** (not Standby).

Both changes are required together — doing only the Cisco-side fix still leaves ESXi picking uplinks in a way the switch's static bundle doesn't expect, and doing only the ESXi-side fix does nothing if the switch is still stuck trying to negotiate LACP with a partner that can't respond.

#### 6.4 Verification
```cisco
SW1#show etherchannel summary
```
Look for `Po1` with a flag of `SU` (Layer 2, in use) and all three member ports showing `P` (bundled in port-channel) — not `I` (individual, meaning it failed to bundle and is running standalone) or `s` (suspended).

Then confirm actual traffic works across it, same as any other link:
```cisco
SW1#ping 192.168.10.201
```
And, more importantly for this whole project, confirm pfSense can still route across it properly — see the Verification Checklist below. If the EtherChannel itself is fine but routing still fails, the problem is somewhere else (firewall rules, VLAN assignment) — Section 6 here only explains the specific failure mode where *everything else is configured correctly* and it still doesn't work, which is a genuinely confusing place to end up if you don't know EtherChannel teaming has to match on both ends.

### Step 7: Physical switch port to the server
Since ESXi carries VLAN 10, 11, and 12 out through the `vmnic1-3` EtherChannel, the switch side (**Switch 1, `Port-channel1` / `Gi1/3-1/5`**) has to be an 802.1Q **trunk**, not access. This is already covered in `02-Switches_Documentation.md` — just flagging it here again because it's easy to forget and pfSense will look "broken" from the outside if this ever gets reset to access.

### Verification Checklist
1. From VM1 (`192.168.12.10`), `ping 192.168.12.1` — tests VM1 can reach its own gateway.
2. From VM1, `ping 192.168.11.1` — tests pfSense's WAN/VLAN 11 side is reachable across the internal routing.
3. From VM1, `ping 192.168.11.10` (VM3) — tests actual inter-VLAN routing through pfSense.
4. From the Laptop's **VLAN 12 identity** (`Fa1/3` on Switch 2, `192.168.12.50`) — **this is the one that matters for Task step 5** — `ping 192.168.12.1`, then `ping 192.168.11.10`. This is the only laptop identity that actually crosses pfSense to reach VM3; the VLAN 10 identity has nowhere to route to, and the VLAN 11 identity is already on VM3's own VLAN.

Once you can ping everything, you're done, the Sun Daddy network should work now.

### Crash out Time
Go ahead, you've earned it.
![[Pasted image 20260910160835.jpg|192]]![[Pasted image 20260910160855.jpg|160]]
