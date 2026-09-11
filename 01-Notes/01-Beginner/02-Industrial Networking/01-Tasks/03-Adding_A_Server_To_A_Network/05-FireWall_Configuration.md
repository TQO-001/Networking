## 4. Creating a Virtual FireWall
> Honestly just follow [this tutorial](https://glmdev.medium.com/how-to-set-up-virtualized-pfsense-on-vmware-esxi-6-x-2c2861b25931), it's much more concise yet still more descriptive than what I wrote below. Basically it's a more efficient tutorial. But you're gonna have to change how you do it to suit our current network.

We'll create a **vFW (virtual Firewall)** to add to our network. For the Sun Daddy network, the vFW's job is to route between VLAN 10 and VLAN 11 — the switches can't do that themselves, so this is what makes `ping VM3 from Laptop` (Task step 5) actually work.

### Installing pfSense
I used **pfSense** for this (any firewall/router software works — IPFire/OPNsense/routerOS/etc, I just went with what I was told to use).

Create a new virtual machine, and, for pfSense, select OS family: Other and set the OS to "FreeBSD (64-bit)."

Tab through the wizard until you land on the VM's configuration page. Here we need to modify a few things.
![[b5d09939-3c49-4d9d-909a-726210947610.png|476]]

Then, in the CD/DVD drive, select the pfSense installer ISO from the datastore. Now you can click create and start the VM. Upload the ISO the same way you did for the Windows 10 ISO.

### Give it two network adapters
pfSense needs to see VLAN 10 and VLAN 11 separately so it can route between them. I gave it two virtual NICs — one per VLAN — instead of one NIC with VLAN tags, because it's a lot easier to reason about (and to recover if I mess something up): each NIC just plugs into a differently-tagged ESXi port group, and pfSense itself never has to know VLANs exist at all.

- **Network Adapter 1:** attach to `VLAN10` (on `vSwitch1` — see `03-Server_Setup_Documentation.md`, Step 0E).
- **Network Adapter 2:** attach to `VLAN11`.

> **Heads up about naming:** pfSense's setup wizard insists on a "WAN" and a "LAN" interface and won't let you skip WAN. I didn't fight it (lies) — my first NIC became **LAN** (VLAN 10), my second became **WAN** (VLAN 11), even though it's not actually a WAN/internet connection. I just treat "WAN" as my VLAN 11 interface and configured it accordingly below. You *can* reassign/rename it later if it bugs you, but it works fine as-is, don't create problems where there are none.

### Step 1: Assign Interfaces (pfSense console)
Open the pfSense VM console in ESXi:
1. At the console menu, type **1** for **Assign Interfaces**.
2. Type **n** when asked to configure VLANs now — we're not using VLAN tags inside pfSense.
3. Enter `em0` for WAN.
4. Enter `em1` for LAN.
5. Confirm.

The console banner should now show:
```
WAN (wan) -> em0 -> v4: (not yet set)
LAN (lan) -> em1 -> v4: (not yet set)
```

### Step 2: Set IP Addresses (pfSense console)
From the same console menu, type **2** (Set interface(s) IP address):
- **LAN:** `192.168.10.1`, mask `24`, no upstream gateway, decline DHCP server (or enable it if you want — I left it off since all my devices are static).
- **WAN:** `192.168.11.1`, mask `24`, no upstream gateway.

Console banner should now show:
```
WAN (wan) -> em0 -> v4: 192.168.11.1/24
LAN (lan) -> em1 -> v4: 192.168.10.1/24
```

### Step 3: Log into the WebGUI
From VM1's console (or once VM1 can reach `192.168.10.1`), browse to `https://192.168.10.1` and log in (default `admin` / whatever you set during install).

### Step 4: Unblock private networks on WAN
Since my "WAN" is actually carrying internal VLAN 11 traffic, not a real internet connection, pfSense's default WAN protections will block it:
1. **Interfaces → WAN**
2. Scroll to **Reserved Networks**.
3. Uncheck **Block private networks and loopback addresses**.
4. Uncheck **Block bogon networks**.
5. **Save**, then **Apply Changes**.

### Step 5: Add firewall pass rules
pfSense denies all traffic by default on every interface — you have to explicitly allow it.

For **both** the LAN tab and the WAN tab (**Firewall → Rules → [tab]**):
1. Click **Add** (top rule).
2. Action: **Pass**, Address Family: **IPv4**, Protocol: **Any**, Source: **Any**, Destination: **Any**. (This will cause problems later teehee, but just do it)
3. **Save**.

Then click **Apply Changes** once both are added.

> **Bidirectional Communication**
> Bidirectional communication is ==a two-way exchange where both parties or systems can send and receive data, signals, or messages==.

> The following steps is very important, it genuinely almost made me crashout, just because you have now configured the vFW to communicate and allow traffic any traffic from any destination/source to flow (change this later once you understand firewalls), doesn't mean you done. No, **you must also configure the firewalls on the VMs too!**

#### Host Firewalls on the VMs
By default, **Windows Firewall** and **Linux `iptables`/`ufw`** block incoming ICMP (ping) echo requests coming from outside their local subnet.

- **Why it breaks:** The VMs receive the ping from a different subnet (`192.168.10.x` trying to reach `192.168.11.x`), treat it as untrusted traffic, and drop the response—preventing bi-directional communication.
- **How to fix:**
    - Open _Windows Defender Firewall with Advanced Security_ → **Inbound Rules** → Enable **Core Networking Diagnostics - ICMP Echo Request (ICMPv4-In)**.

### Step 6: Physical switch port to the server
Since ESXi carries both VLAN 10 and VLAN 11 out through `vmnic1`, the switch port it lands on (**Switch 1, Gi1/4**) has to be an 802.1Q **trunk**, not an access port. This is already covered in `02-Switches_Documentation.md` — just flagging it here again because it's easy to forget and pfSense will look "broken" from the outside if this port is still set to access.

### Verification Checklist
1. From VM1 (`192.168.10.10`), `ping 192.168.10.1` — tests VM1 can reach its own gateway.
2. From VM1, `ping 192.168.11.1` — tests pfSense's WAN/VLAN 11 side is reachable across the internal routing.
3. From VM1, `ping 192.168.11.10` (VM3) — tests actual inter-VLAN routing through pfSense.
4. From the Laptop (plugged into Switch 2, `192.168.10.50`), `ping 192.168.10.1`, then `ping 192.168.11.10`

Once you can ping everything, you're done, the Sun Daddy network should work now.

### Crash out Time
Go ahead, you've earned it.
![[Pasted image 20260910160835.jpg|192]]![[Pasted image 20260910160855.jpg|160]]