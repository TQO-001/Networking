## Section 8: The Sun Daddy Network, End to End

Every earlier section covered one concept in isolation. This one traces a single, complete ping through the entire build, calling back to exactly where each concept from Sections 1–7 does its work. Read this last, after the others — it assumes you already know what each term means.

### 8.1 The Full Path: Laptop Pings VM3

Laptop is plugged into Switch 2, `Fa1/1` (`192.168.10.50`, VLAN 10). Target is VM3 (`192.168.11.10`, VLAN 11).

```text
Laptop (192.168.10.50)
   │  plain Ethernet frame, destination IP 192.168.11.10
   ▼
Switch 2, Fa1/1 (access port, VLAN 10)                       [Section 4.3 — access port]
   │  switch tags it VLAN 10 to send it across the trunk
   ▼
Switch 2, Gi1/1 → (802.1Q trunk) → Switch 1, Gi1/10          [Section 5 — trunking/tagging]
   │  still VLAN 10; switches recognize the destination isn't local to VLAN 10 at all —
   │  it needs to leave VLAN 10 entirely, which a switch cannot do on its own
   ▼                                                          [Section 6 — switches can't route]
Switch 1, Gi1/4 (trunk to server)
   │  frame tagged VLAN 10, physical cable to vmnic1
   ▼
ESXi vSwitch1 → PG_VLAN10 → pfSense's LAN vNIC (em1, 192.168.10.1)   [Section 2 — vSwitch/port group]
   │  pfSense: this is Layer 3 routing time — I have a leg in VLAN 11 too   [Section 6.2]
   ▼
pfSense checks its LAN firewall rules: Pass/Any/Any → allowed          [Section 7.1 — default-deny,
   │                                                                      this rule is what beats it]
pfSense routes the packet out its WAN vNIC (em0, 192.168.11.1)
toward 192.168.11.10, remembers this in its state table               [Section 7.2 — stateful]
   ▼
ESXi vSwitch1 → PG_VLAN11 → tagged VLAN 11                            [Section 2.3 — VST tagging]
   ▼
Switch 1, Gi1/4 (trunk) — VM3 lives on the same server, so this
never actually needs to leave the server's own trunk again
   ▼
VM3 (192.168.11.10) receives the ping. Windows Firewall permits
ICMP (once configured — Section 7.5's whole debugging story).
VM3 replies.
   │  reply now travels the entire path in reverse
   ▼
pfSense's stateful firewall recognizes the reply as belonging to
the connection it already allowed — no second rule needed —      [Section 7.2 again — this is the
routes it back out LAN toward 192.168.10.50                        payoff of statefulness]
   ▼
... back through Switch 1 trunk → Switch 2 trunk → Fa1/1 → Laptop receives the reply
```

### 8.2 The Shorter Path: VM1 Pings VM2

Worth tracing too, because it's dramatically shorter, and seeing *why* it's shorter reinforces what actually requires all that machinery above.

```text
VM1 (192.168.10.10, VLAN 10)
   │  plain frame, dest 192.168.10.11 — same network portion as VM1's own IP (Section 3.2)
   ▼
ESXi vSwitch1 → PG_VLAN10                                    [same port group VM1 is already on]
   │  VM2 is also plugged into PG_VLAN10 — the vSwitch can deliver this
   │  entirely internally, without ever touching vmnic1, the physical
   │  switches, or pfSense at all
   ▼
VM2 (192.168.10.11) receives it directly, replies directly
```

No trunk, no routing, no firewall rule evaluation — because VM1 and VM2 share a network portion (Section 3.2) and a VLAN (Section 4), this never needs a Layer 3 decision (Section 6) at all. It's the plainest possible case: two devices on the same VLAN talk directly, full stop. Comparing this against 8.1 is the clearest way to see exactly which pieces of the whole build exist *specifically* to make cross-VLAN traffic possible, versus what would have worked with zero configuration at all.

### 8.3 What Each Device's Actual Job Is, In One Line Each

- **Switch 1 / Switch 2:** Layer 2 forwarding within and between VLANs (via trunking), plus a management SVI each. Never make Layer 3 decisions themselves.
- **ESXi (vSwitch0/vSwitch1, port groups):** virtualizes both the machines (Section 1) and the switching layer (Section 2) that connects them, tagging VM traffic per-VLAN transparently.
- **pfSense:** the only device in the entire build with a leg in both `192.168.10.0/24` and `192.168.11.0/24`, so it's the only thing that can legally perform Layer 3 routing between them (Section 6) — and it filters that traffic with stateful rules while it's at it (Section 7).
- **VM1 / VM2 / VM3:** ordinary endpoints. None of them know or care that VLANs, trunks, or a firewall exist — that's the entire point of all the invisible tagging/routing/filtering machinery underneath them.

---

**Practice:**
1. Without looking back up, redraw the VM1→VM3 path (8.1) from memory, labeling which device does the work at each step.
2. If you added a VM4 to `PG_VLAN10`, would pinging it from VM1 need to touch pfSense at all? Justify your answer using Section 8.2's reasoning.
3. Of the four devices listed in 8.3, which one(s) would still be necessary if VM3 didn't exist and you only ever needed VM1 and VM2 to talk to each other? Which could be removed entirely?
4. Explain, using this section's language, exactly why your original bug (Switch 1's server port set to access instead of trunk) would have broken the VM1→VM3 path specifically, while leaving the VM1→VM2 path completely unaffected.
