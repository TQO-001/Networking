## Section 6: Switches vs. Routers — Why a Switch Can't Cross VLANs

### 6.1 A Quick, Practical Layer 2 / Layer 3 Primer

Networking gets taught through the **OSI model**, a 7-layer framework — you don't need all seven for this, just two:

- **Layer 2 (Data Link):** devices are identified by **MAC addresses** (a physical address burned into a network interface). Switches operate here. A switch's entire job is deciding, based on MAC address, which physical port to send a frame out of.
- **Layer 3 (Network):** devices are identified by **IP addresses**. Routers operate here. A router's job is deciding, based on IP address, which *network* to forward a packet toward — potentially crossing between completely different physical networks to do it.

### 6.2 Why This Means a Switch Literally Cannot Route Between VLANs

VLANs are a Layer 2 concept — they exist to control which devices see which frames, based on switch port/tag membership. A switch, operating purely at Layer 2, makes every forwarding decision based on MAC addresses and VLAN membership. It has no concept of "let me hand this frame off to a different IP network" — that decision doesn't exist at the layer a switch operates at, regardless of how you configure it. You cannot configure your way around this with switch commands; it's a structural limitation of what a switch *is*.

A router, by contrast, operates at Layer 3, making forwarding decisions based on IP addresses — which is exactly the layer where "is this destination on my own network, or does it need to go somewhere else" gets decided (recall Section 3.4's gateway explanation — this is the device on the other end of that gateway lookup).

This is the actual, structural reason two switches with VLAN 10 and VLAN 11 both correctly defined can never make VM1 and VM3 talk to each other on their own, no matter how you configure them: the switches don't operate at the layer where that decision even exists. You need something doing Layer 3 routing sitting between the VLANs. That's pfSense's job here — it has one leg in `192.168.10.0/24` (VLAN 10) and one leg in `192.168.11.0/24` (VLAN 11), and it performs **inter-VLAN routing**, forwarding packets between the two networks at Layer 3.

### 6.3 SVIs Are Layer 3 Identity, Not Layer 3 Routing Capability

Section 4.5 introduced SVIs (`interface vlan 10` on SW1, `interface vlan 11` on SW2) — each one gives the switch itself an IP address, purely for management (so you can `ping` or SSH into the switch). It's worth being explicit about why this doesn't contradict Section 6.2: an SVI gives the *switch* a Layer 3 identity so *it* can participate as an endpoint on one specific VLAN. It does **not** turn the switch into a router capable of forwarding traffic *between* VLANs — that would require a completely different feature (**inter-VLAN routing on the switch itself**, sometimes called a "Layer 3 switch" or "multilayer switch," which needs `ip routing` enabled and specific hardware/software support). Your IE-3300s in this build are being used purely as Layer 2 switches with a management SVI bolted on — all actual routing between VLAN 10 and VLAN 11 happens on pfSense, not on either switch.

### 6.4 Putting a Number on "Can't Talk"

Concretely, before pfSense existed in this build at all: VM1 (`192.168.10.10`) sending a packet toward VM3 (`192.168.11.10`) would compute that `192.168.11.10` isn't on its own local network, hand the packet to its configured gateway (`192.168.10.1`)... and if nothing is listening at `192.168.10.1` with the ability to route it onward, the packet simply goes nowhere. Not blocked, not rejected with an error — just undeliverable, because nothing exists yet that's capable of making the Layer 3 forwarding decision required to get it from one network to the other. This is a genuinely useful mental model for troubleshooting: "no route to host" and "firewall is blocking it" are two completely different failure states, and confusing them wastes a lot of debugging time (this is effectively what happened when your mentor's firewall-rule theory got tested against the actual symptoms in your build — see Section 8/the Firewall notes for that specific story).

---

**Practice:**
1. In one sentence each: what does a switch use to make forwarding decisions, and what does a router use?
2. Why can't you fix "VM1 can't reach VM3" by adding more VLAN or trunk configuration to the switches alone, no matter how carefully you configure it?
3. What's the actual difference between what an SVI gives a switch, and what "inter-VLAN routing" / a "Layer 3 switch" would give it? Are they the same feature?
4. A friend says "I don't need a separate firewall/router VM, I'll just give my switch an SVI on every VLAN and that'll route between them." Is that correct? Why or why not?
