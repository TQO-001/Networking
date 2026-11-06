## Section 2: ESXi Virtual Networking

This is the section that explains what actually will cause most of your lost-access headaches, so it's worth being precise about every piece of vocabulary here, to avoid such headaches.

### 2.1 Physical NICs (`vmnic0`, `vmnic1`, ...)

Your server has several real, physical Ethernet ports on the back. ESXi names each one a `vmnic` (`vmnic0`, `vmnic1`, `vmnic2`, ...). These are actual hardware ports — you plug real cables into them, and they're the only place where "virtual" networking actually touches the physical world.

In your build: `vmnic0` has a direct cable to your laptop. `vmnic1` has a cable to Switch 1's `Gi1/4` port.

### 2.2 Virtual Switches (vSwitch)

A **vSwitch** is software running inside ESXi that behaves like a physical switch, except it only exists in memory — no rack space, no physical ports you can see. It has "ports" that VMs plug their vNICs into internally, and it can have one or more physical NICs (`vmnic`s) as **uplinks**: the vSwitch's own connection out to the real, physical network.

This is a direct parallel to Section 1: just like a VM is a software-defined *computer*, a vSwitch is a software-defined *switch*, and pfSense's vNICs plug into one the exact same way VM1/2/3's do.

```text
        vSwitch1  (lives entirely inside ESXi's software)
   ┌─────────────────────────────────────┐
   │  [VM1 vNIC]  [VM2 vNIC]  [VM3 vNIC]  │
   │        \         |          /       │
   │          \       |        /         │
   │            (virtual switching)      │
   └──────────────────┬───────────────────┘
                       │  uplink
                    [vmnic1]  ← real physical port
                       │
                cable to Switch 1, Gi1/4
```

### 2.3 Port Groups

A **port group** is a named "socket" on a vSwitch that you assign VMs to — and it's where VLAN tagging actually happens (VLANs get their own full section later, but the mechanism lives here). When you set a port group's VLAN ID to `10`, every VM plugged into that port group has its outgoing traffic tagged as VLAN 10 automatically, and incoming VLAN 10 traffic gets its tag stripped before the VM ever sees it. The VM itself never configures or even knows about a VLAN tag — the port group does that work invisibly on its behalf. This mode (ESXi tags on the VM's behalf) is called **Virtual Switch Tagging (VST)**, and it's the mode you used.

The alternative — **Virtual Guest Tagging (VGT)** — sets a port group's VLAN ID to `4095` ("all VLANs"), and hands *every* tag through untouched to whatever's plugged into it, meaning the guest OS itself has to understand and manage VLAN tags. You'd only want this for something like a router that specifically needs to see multiple VLANs on one interface — not for an ordinary VM like VM1/2/3.

### 2.4 The VMkernel and `vmk0`

Separate from VM traffic entirely, ESXi itself needs a network identity so you can manage it (the web interface you log into). This lives on a special interface called `vmk0` (a VMkernel port), which also plugs into a port group, just like a VM's vNIC would. In your build, `vmk0` sits on its own isolated vSwitch (`vSwitch0`), connected only to `vmnic0` — a private, direct line to your laptop, deliberately never touching the VLAN/switch/firewall setup at all, so you always have a way in even if you break everything else.

### 2.5 The Loop Problem You Actually Hit

You originally had **both** `vmnic0` and `vmnic1` as uplinks on the *same* vSwitch (`vSwitch0`) — one your direct laptop cable, the other your cable to the physical Switch 1. With no separation between them, ESXi tried to bridge/load-balance traffic across both physical links at once. That created a loop: traffic could enter via `vmnic1` and get echoed back out `vmnic0` (and vice versa), which is exactly the kind of thing that causes connections to drop unpredictably. It's the same failure mode a physical network gets into if you plug two switch ports into each other without spanning-tree protection — except this one was entirely inside ESXi's software.

The fix — one vSwitch per physical uplink, with `vmnic0` (management) and `vmnic1` (production trunk) never sharing a vSwitch — applies the exact same principle you'd use on a physical network to avoid a switching loop. It just happens to be virtual here.

### 2.6 Full Picture of Your Build

```text
┌─────────────────────────── ESXi Host ─────────────────────────────┐
│                                                                   │
│   vSwitch0                          vSwitch1                      │
│   ┌───────────────┐                 ┌───────────────────────────┐ │
│   │ Management Net │                │ PG_VLAN10 │ PG_VLAN11     │ │
│   │   (vmk0)        │               │ VM1,VM2,  │  VM3,         │ │
│   │                 │               │ pfSense-LAN│ pfSense-WAN  │ │
│   └────────┬────────┘               └─────┬───────────────┬─────┘ │
│            │                                │          │          │
│         vmnic0                           vmnic1 (shared uplink)   │
└────────────┼───────────────────────────────┼──────────┼───────────┘
             │                                └──────────┘
        direct cable                          one physical cable,
        to laptop                             carries both VLANs
        (only when plugged in)                tagged, to SW1 Gi1/4
```

Notice VM1, VM2, VM3, and pfSense's two vNICs all share `vSwitch1` and the single physical uplink `vmnic1` — that's fine and normal, because the port groups keep their traffic tagged and logically separate even while physically sharing the same cable. `vSwitch0` never touches any of that; it's an intentionally isolated island.

---

**Practice:**
1. What's the actual difference between a vSwitch and a port group — if a vSwitch is like a physical switch, what's the port group the equivalent of?
2. Why does `vmk0` need its own dedicated vSwitch instead of just sharing `vSwitch1` with everything else, given that would also technically work once VLANs are set up correctly?
3. Explain in your own words why putting `vmnic0` and `vmnic1` on the same vSwitch caused your laptop connection to drop specifically when the switch-side cable came up.
4. When would you actually want VGT (VLAN ID `4095`) instead of VST on a port group? Give a concrete example.
