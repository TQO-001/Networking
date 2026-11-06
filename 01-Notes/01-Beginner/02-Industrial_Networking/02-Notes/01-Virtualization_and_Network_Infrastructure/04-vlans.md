## Section 4: VLANs — One Physical Network, Many Logical Ones

### 4.1 The Problem VLANs Solve

Physically, VM1, VM2, and VM3 all live on the same server, going out the same physical cable, through the same switches. Without any extra work, that would put all three VMs on one flat, shared network where every device can see every other device's broadcast traffic and reach it directly — no isolation at all, regardless of whether you *want* VM3 to be separate from VM1 and VM2.

A **VLAN (Virtual LAN)** is a way of telling switches: "even though these devices share the same physical wires, treat them as if they're on completely separate networks." VM1 and VM2 are in VLAN 10; VM3 is in VLAN 11. Even though their traffic might physically cross the exact same cable at some point (Section 5 covers exactly how), the switches keep VLAN 10 and VLAN 11 logically isolated from each other — a broadcast on VLAN 10 never reaches a VLAN 11 device, and a VLAN 10 device can't reach a VLAN 11 device directly, unless something deliberately routes between them (that "something" is pfSense — Section 6).

**Analogy:** picture a single apartment building (the physical wiring) divided into two separate tenancies (VLAN 10 and VLAN 11) with their own locked doors. They share the same building, the same foundation, the same electrical mains — but a resident of one tenancy can't just wander into the other without going through a shared, monitored entrance. That entrance is your firewall.

### 4.2 Why Segment a Network At All

This isn't just an academic exercise — VLANs solve real problems:

- **Security/isolation:** a compromised device on VLAN 11 can't directly attack devices on VLAN 10 without going through (and being filtered by) whatever's routing between them.
- **Broadcast traffic control:** every device on a flat network hears every broadcast (ARP requests, DHCP requests, etc.) from every other device. On a large network, that's a lot of noise every device has to process. Splitting into VLANs keeps each broadcast domain smaller.
- **Logical grouping independent of physical location:** two devices in completely different parts of a building (or, in a virtualized world, completely different VMs on the same server) can be grouped into the same VLAN, and two devices plugged into the same physical switch can be kept on entirely separate VLANs. The VLAN, not the physical wiring, defines the network.

### 4.3 Access Ports vs. Trunk Ports

A switch port is configured one of two ways:

- **Access port:** belongs to exactly one VLAN. Anything plugged in here (a laptop, a PC) sends and receives plain, untagged Ethernet frames, and the switch silently assigns them to that port's VLAN without the device ever knowing VLANs exist. This is Switch 2's `Fa1/1` (your laptop's port) — VLAN 10, and nothing else.
- **Trunk port:** carries **multiple** VLANs over a single physical link by tagging each frame with a VLAN ID (full mechanics in Section 5). This is the SW1↔SW2 link, and Switch 1's `Gi1/4` (server port) — both need to carry VLAN 10 and VLAN 11 traffic simultaneously over one cable.

This is exactly why the server's switch port had to change from access to trunk in your build: an access port can only ever carry one VLAN, but the server needs to push VM1/VM2 (VLAN 10) and VM3 (VLAN 11) traffic down the same physical cable at the same time. Only a trunk can do that — it's not a preference, it's a hard requirement given the physical topology (one cable, two VLANs of traffic).

### 4.4 The VLAN Database

Before a VLAN can be used anywhere on a switch — on an access port, on a trunk's allowed list, on an SVI — it has to exist in that switch's **VLAN database**. This is what `vlan 10,11` does in your configs:

```cisco
SW1(config)#vlan 10,11
SW1(config-vlan)#exit
```

This is a genuinely common gotcha, and one you hit directly: a trunk configured with `switchport trunk allowed vlan 10,11` will still silently drop VLAN 11 frames if VLAN 11 was never actually created in that switch's own VLAN database. "Allowed on this port" and "exists on this switch" are two separate things that both have to be true.

### 4.5 SVIs (Switch Virtual Interfaces)

An **SVI** gives a switch itself an IP address on a specific VLAN, purely so you can manage/ping that switch. SW1 has `interface vlan 10` with IP `192.168.10.254`; SW2 has `interface vlan 11` with IP `192.168.11.254`. This does **not** make the switch capable of routing between VLAN 10 and VLAN 11 (that's still only pfSense's job — Section 6 explains exactly why) — an SVI is just a management address bolted onto one specific VLAN, nothing more.

---

**Practice:**
1. In your own words: what specifically stops a device on VLAN 10 from seeing a broadcast sent by a device on VLAN 11, given they might be plugged into the very same physical switch?
2. You create VLAN 12 and set a port to `switchport access vlan 12`, but you never ran `vlan 12` in the switch's global VLAN database. What actually happens to a device plugged into that port?
3. Why is an SVI's IP address not the same thing as "the switch can now route between VLANs"? What's actually missing?
4. If you wanted to add a fourth VM on a brand-new VLAN 12, list every place across your two switches and ESXi where VLAN 12 would need to be explicitly created or allowed, based on what you now know.
