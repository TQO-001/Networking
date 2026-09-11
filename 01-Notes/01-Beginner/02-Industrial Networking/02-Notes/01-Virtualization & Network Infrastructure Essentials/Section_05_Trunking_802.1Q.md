## Section 5: Trunking and 802.1Q Tagging

### 5.1 What 802.1Q Actually Does

**802.1Q** is the IEEE standard that defines how VLAN tagging works over Ethernet. When a trunk port sends a frame belonging to VLAN 11, it inserts a small tag into the Ethernet frame header identifying it as VLAN 11 before sending it out. The switch (or ESXi vSwitch) on the receiving end reads that tag, knows which VLAN the frame belongs to, and either forwards it out another trunk port (keeping the tag intact) or strips the tag off entirely before delivering it to an access port in that VLAN — because a device plugged into an access port has no idea VLANs exist, and expects a completely ordinary, untagged frame.

```text
VM3 (VLAN 11)                                          Switch 2 (Fa1/1, VLAN 11)
    |                                                          |
    | plain, untagged frame                                    | plain, untagged frame
    v                                                           ^
[ESXi port group tags it VLAN 11]                    [switch strips VLAN 11 tag]
    |                                                          |
    v                                                          |
 [vmnic1] ---- 802.1Q-tagged frame (VLAN 11) ----> [Gi1/4 trunk] --(SW1 trunk)--(SW2 trunk)--> [Fa1/1 access]
```

The tag only ever exists **between trunk ports**. The instant a frame lands on an access port, it's plain Ethernet again. This is exactly why your laptop and your VMs' guest operating systems never had to configure anything VLAN-related themselves — tagging and untagging happens entirely at the switch/vSwitch layer, invisibly, on their behalf.

### 5.2 Why the "Allowed VLAN" List Matters

A trunk port doesn't automatically forward every VLAN that exists — you have to explicitly tell it which tagged VLANs it's permitted to carry:

```cisco
SW1(config-if)#switchport trunk allowed vlan 10,11
```

Without this line, a trunk port's behavior depends on the switch and its defaults, but the safe assumption is: don't expect a VLAN to cross a trunk unless you've explicitly allowed it there. This is the exact same gotcha as Section 4.4's VLAN-database point, just at the trunk-port level instead of the switch-wide level — "does this VLAN exist on the switch" and "is this specific trunk port allowed to carry it" are two separate checks, and both have to pass.

### 5.3 The Native VLAN (Worth Knowing, Even Though You Didn't Hit This One)

Every trunk port has a concept of a **native VLAN** (VLAN 1 by default on Cisco gear) — traffic for the native VLAN is sent *untagged* across the trunk, rather than tagged like every other VLAN. This exists mostly for compatibility with older equipment. It's a common real-world misconfiguration source: if the two ends of a trunk link disagree on what the native VLAN is, traffic can leak between VLANs in ways that are genuinely confusing to debug. You didn't run into this because your task never used VLAN 1 for anything meaningful, but it's worth knowing it exists before you inevitably run into it on a more complex network later.

### 5.4 Encapsulation

On many Cisco platforms, you configure a trunk's tagging standard explicitly with `switchport trunk encapsulation dot1q` before setting `switchport mode trunk`. On your IE-3300 switches specifically, that command threw `% Invalid input` when you tried it — because these particular switches only support 802.1Q in the first place, so there's nothing to choose between and the command doesn't exist as a separate step. `switchport mode trunk` alone was enough. Worth remembering as a general lesson: not every Cisco command line you find in a tutorial exists on every platform — check what your specific hardware actually supports rather than assuming every IOS-like CLI is identical.

### 5.5 Following One Frame Through the Whole Trunk Path

Concretely, for VM3 (VLAN 11) to reach Switch 2's `Fa1/1` port (VLAN 10, but let's trace the reverse direction as an example — a frame *from* an access port *into* the trunk system):

1. Laptop (plugged into `Fa1/1`, access, VLAN 10) sends a plain, untagged frame.
2. Switch 2 receives it on an access port already known to be VLAN 10 — no tag needed yet, the switch already knows which VLAN this frame belongs to just from which port it arrived on.
3. Switch 2 needs to forward it toward Switch 1 over the trunk (`Gi1/1`) — it adds an 802.1Q tag marking it VLAN 10 before sending it out that trunk port.
4. Switch 1 receives the tagged frame on its trunk port (`Gi1/10`), reads the tag, knows it's VLAN 10.
5. If the destination is on VLAN 10 and reachable via another access port, Switch 1 strips the tag and delivers it plain. If it needs to go further (say, to the server's trunk on `Gi1/4`), Switch 1 re-tags it VLAN 10 and forwards it there instead.

Every hop across a trunk carries the tag; every hop onto an access port strips it. That's the entire mechanism.

---

**Practice:**
1. Explain, without looking back up, why a device plugged into an access port never needs to know or configure anything about VLANs.
2. You set `switchport trunk allowed vlan 10` on a trunk port (forgetting VLAN 11), even though VLAN 11 already exists in the switch's VLAN database. What happens to VLAN 11 traffic hitting that specific trunk port?
3. What's the practical, real-world risk of two ends of a trunk link disagreeing on the native VLAN? (You don't need to have hit this yourself — reason it out from what "untagged" means for native VLAN traffic.)
4. Why did `switchport trunk encapsulation dot1q` fail on your switches specifically, and what does that tell you about trusting command syntax you find in a general Cisco tutorial versus your actual hardware?
