## Section 7: What a Firewall Actually Does

A **firewall** is a device (physical or virtual) that sits at a boundary between networks and decides, packet by packet, whether traffic is allowed to cross that boundary. pfSense, in your build, is doing two genuinely separate jobs at once, and it's worth keeping them mentally distinct because they fail in different ways:

1. **Routing** (Section 6) — moving packets between `192.168.10.0/24` and `192.168.11.0/24` at Layer 3.
2. **Filtering** — deciding, for every packet that wants to cross, whether it's actually *permitted* to.

A router with no filtering would forward everything it's capable of routing, with zero security. A firewall with no routing capability couldn't move traffic between networks at all, no matter how permissive its rules were. pfSense does both, which is why "routing is set up correctly" and "the firewall is letting it through" are two separate things that both have to be true — this exact distinction is what your mentor's diagnosis and the actual VM3 symptom hinged on (see 7.5).

### 7.1 Default-Deny

pfSense — like almost every real firewall — starts from **default-deny**: unless a rule explicitly says "allow this," the traffic gets dropped, silently, with no error message back to the sender. This is why your VMs could get IP addresses and even reach their own gateway fine (that's purely Layer 3 routing/ARP, no firewall rule involved yet), but nothing actually crossed between VLANs until you added explicit **Pass** rules on both the LAN and WAN interfaces. Routing being correctly configured doesn't matter at all if the firewall sitting on top of it is still silently dropping everything trying to use that route.

### 7.2 Stateful Firewalls

pfSense is a **stateful** firewall. When it sees an outbound packet get permitted by a rule (say, VM1's ping request leaving through LAN, heading to VM3), it remembers that connection in a **state table** — essentially a running list of "connections I've already decided to allow." The *reply* coming back (VM3's ping response, arriving on WAN, headed back to VM1) is automatically permitted, **without needing its own explicit rule**, because pfSense recognizes it as the return half of a connection it already allowed.

This is why you don't need a mirrored "allow WAN→LAN" rule for every "allow LAN→WAN" rule you write — the state table handles legitimate replies for you automatically. A **stateless** firewall, by contrast, evaluates every single packet completely independently with no memory of prior traffic at all — every direction of every connection needs its own explicit rule, which is far more rule-writing and far more error-prone. Stateful is standard for this kind of internal, VLAN-to-VLAN routing setup.

### 7.3 Rule Anatomy

Every firewall rule you wrote follows the same basic shape, regardless of which firewall software you're using:

| Field | What it means |
|---|---|
| **Interface** | Which of the firewall's own network legs is this rule evaluated on? (LAN or WAN, here) |
| **Action** | Pass or Block |
| **Protocol** | What kind of traffic — Any, ICMP (ping), TCP, UDP, a specific port? |
| **Source** | Which sending address(es) does this rule apply to? |
| **Destination** | Which receiving address(es) does this rule apply to? |

Your current rules are **Pass / Any / Any / Any** on both interfaces — the loosest possible rule, permitting every protocol, from every source, to every destination. It works, but it provides zero actual protection between VLAN 10 and VLAN 11: literally anything can cross, on any port, for any reason. That's exactly what your mentor flagged as a problem "for later" — a hardened version of the same rule set would specify precisely what's expected to cross (for instance: only ICMP for a connectivity test, or only the specific application ports something genuinely needs) and block everything else by default. Getting basic connectivity proven first with a loose rule, then tightening it once you know exactly what traffic is supposed to exist, is a completely normal and sensible order to do things in — you're not wrong to have started loose.

### 7.4 Why "WAN" Doesn't Mean "Internet" Here

Normally, a firewall's WAN interface faces the public internet, and pfSense applies extra default protections there — specifically, it blocks **private address ranges** (like `192.168.x.x`) and **bogon** (unassigned/reserved) address ranges from ever crossing the WAN interface, on the assumption that a real internet-facing WAN should never legitimately see private IP traffic arriving from "outside." You repurposed your "WAN" interface to actually carry VLAN 11 — a private network, not the internet — which is exactly the kind of traffic pfSense's default WAN protections are designed to catch and drop. That's why you had to explicitly uncheck "Block private networks" and "Block bogon networks" on that interface (Interfaces → WAN → Reserved Networks); without doing that, pfSense would silently discard your VLAN 11 traffic there on the assumption it was spoofed or malicious internet traffic.

### 7.5 Diagnosing Your Actual VM3 Symptom With This Section

This is worth walking through explicitly, because it's a good example of using firewall concepts to actually debug something instead of just guessing.

Symptom: from VM1, `ping 192.168.11.254` (Switch 2's management SVI, on VLAN 11) succeeded. `ping 192.168.11.10` (VM3, also VLAN 11) failed.

Your mentor's theory was a directional rule problem — LAN→WAN allowed, WAN→LAN not. But both of those pings cross the exact same interfaces, in the exact same direction, evaluated against the exact same rules, and rely on the exact same stateful reply behavior from Section 7.2. If WAN→LAN really were blocked, **both** pings would have failed identically — there's nothing in pfSense's rule evaluation that treats "reply from a switch" differently from "reply from a VM." Since one succeeded and the other didn't, the firewall/routing path itself is demonstrably fine, and the problem has to be something specific to VM3 that Switch 2 doesn't have — which points at VM3's own Windows Firewall blocking inbound ICMP by default (a completely standard, unrelated-to-pfSense, out-of-the-box Windows behavior).

The general lesson: when two things that should behave identically at the network layer behave differently, look at what's actually different between the two endpoints, not just at the network path they share.

---

**Practice:**
1. Explain the difference between "routing is misconfigured" and "the firewall is blocking it" as two separate failure states — what symptom would each one produce differently?
2. Why didn't you need a "Pass" rule specifically for ping *replies* coming back from VM3 to VM1?
3. If you moved pfSense's WAN interface to actually face a real internet connection someday, would you want to re-check "Block private networks" back on? Why?
4. Using the Section 7.5 reasoning style: if VM1 could ping VM3, but VM3 could not ping VM1 back on its own initiative (not as a reply — a fresh ping VM3 sends outward), what would that asymmetry tell you about where to look, and why would it point somewhere different than the original symptom did?
