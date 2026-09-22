### EXAM DOMAIN
#### Domain 3.0 - IP Connectivity (25%)
The largest single domain. Only five objectives, but three of them (3.1, 3.3, 3.4) are dense and heavily simulated. OSPFv2 is the highest-value single technology on the exam.

#### 3.1 Interpret the components of routing table ★ HIGH YIELD
* Read any line of `show ip route` and name every field. Given `O 192.168.10.0/24 [110/65] via 10.0.0.2, 00:04:11, GigabitEthernet0/1`, you must instantly identify: source code, prefix, mask, administrative distance (110), metric (65), next hop, uptime, exit interface.
* Routing protocol codes: C connected, L local, S static, S* static default, O OSPF, O IA OSPF inter-area, D EIGRP, R RIP, B BGP.
* Default administrative distances, memorised: connected 0, static 1, eBGP 20, EIGRP 90, OSPF 110, RIP 120, external EIGRP 170, IBGP 200, unreachable 255.
* Gateway of last resort: what sets it, how it displays, and what happens when it isn't set.
* The difference between a C connected route and its paired L local /32 host route.
* `show ip route <prefix>` for the detailed single-route view.

> **STOP · DEPTH LIMIT**
> No BGP path-attribute detail, no EIGRP metric formula (K-values), no route redistribution.

---

#### 3.2 Determine how a router makes a forwarding decision by default ★ HIGH YIELD
* The decision order, in this exact sequence:
  1. Longest prefix match (most specific route wins, full stop — AD and metric never override a longer match).
  2. Administrative distance (used only to choose between routes to the same prefix learned from different sources).
  3. Metric (used only to choose between routes to the same prefix from the same protocol).
* Given a routing table and a destination IP, state the exact chosen route. This appears in some form on almost every attempt.
* Equal-cost multi-path: same prefix, same AD, same metric = both installed, load balanced.
* Life of a packet end to end: ARP, MAC rewrite at every hop, TTL decrement, source/destination IP never changing (absent NAT). Being able to narrate this is worth a surprising number of points.

> **STOP · DEPTH LIMIT**
> No CEF/FIB/adjacency-table internals, no per-packet vs per-destination load-balancing platform behaviour.

---

#### 3.3 Configure and verify IPv4 and IPv6 static routing ★ HIGH YIELD
* Network route (a subnet), host route (/32 or /128), default route (0.0.0.0/0 and ::/0).
* Three ways to specify a static route: next-hop IP only, exit interface only, or both. Know the recursive-lookup cost of next-hop-only, and why exit-interface-only on a multi-access (Ethernet) segment causes ARP problems. Fully-specified is safest on Ethernet.
* Floating static: raise the AD above the dynamic protocol's so it only installs when the primary route dies. This is the standard backup-link question.
* IPv6 equivalents including a static route via a link-local next hop (which requires the exit interface to be specified).
* Verify: `show ip route static`, `show ipv6 route static`, and prove it by shutting the primary link and watching the floating static install.

> **STOP · DEPTH LIMIT**
> No policy-based routing, no VRF-aware static routes, no track/IP SLA object tracking.

---

#### 3.4 Configure and verify single area OSPFv2 ★ HIGH YIELD
* Enable OSPF, set a process ID (locally significant — know that), and advertise networks with a wildcard mask. Also know the per-interface method (`ip ospf <pid> area <area>`) as an alternative.
* Router ID selection order: manually configured RID → highest loopback IP → highest active physical interface IP. Know that changing it requires a process clear/reload to take effect.
* Neighbour states in order: Down → Init → 2-Way → ExStart → Exchange → Loading → Full. Know what happens at each and where a stuck adjacency points (stuck in 2-Way on a broadcast segment is normal between two DROTHERs; stuck in ExStart usually means MTU mismatch).
* Requirements for adjacency, all of which must match: area ID, hello and dead intervals, subnet/mask on the segment, authentication, MTU, and the interfaces must not be passive. Given a broken lab, checking these five in order is the whole troubleshooting method.
* Network types: broadcast (Ethernet — elects DR/BDR, hello 10 / dead 40) vs point-to-point (no DR/BDR, hello 10 / dead 40). Know how to change the interface network type and why you'd force point-to-point on an Ethernet link between exactly two routers.
* DR/BDR election: highest OSPF interface priority wins; tie broken by highest router ID. Priority 0 means never DR/BDR. The election is non-preemptive — a new higher-priority router does not take over until the current DR fails. This non-preemption point is a guaranteed question.
* Passive interfaces: stop hellos on a LAN with no OSPF neighbours while still advertising the subnet. Know passive-interface default and the per-interface exception form.
* Cost/metric: cost = reference bandwidth (100 Mbps default) / interface bandwidth. Know why the default reference bandwidth is a problem on gigabit links and how to change it. Also know how to set cost manually per interface.
* Default route injection with `default-information originate`.
* Verify: `show ip ospf neighbor` (states, DR/BDR roles), `show ip ospf interface brief`, `show ip ospf interface <int>` (network type, cost, timers, priority), `show ip protocols`, `show ip route ospf`.

> **STOP · DEPTH LIMIT**
> Hard stop at single area. Do not study: multi-area design, ABR/ASBR behaviour, LSA types 1–7, virtual links, stub/NSSA/totally-stubby areas, OSPFv3, OSPF authentication configuration, or route summarisation between areas. Jeremy covers some of this for completeness — watch, don't lab. Also: RIP and EIGRP (Jeremy Day 25) are not on the v1.1 blueprint at all. Watch once for AD context, then move on.

---

#### 3.5 Describe the purpose, functions, and concepts of first hop redundancy protocols
* The problem FHRPs solve: an endpoint has one default gateway, so a redundant router is useless without a shared virtual IP.
* Virtual IP and virtual MAC concept — the hosts point at the VIP and never know a failover happened.
* HSRP (Cisco proprietary, active/standby, virtual MAC 0000.0C07.ACxx for v1, priority 100 default, preemption off by default), VRRP (open standard, master/backup, 0000.5E00.01xx), GLBP (Cisco, provides actual load balancing across multiple forwarders, not just redundancy).
* Load-balancing across FHRP groups by making different routers active for different VLANs.
* Note: v1.1 makes this a describe objective, but Lab 4 in this plan still has you configure HSRP — because building it is the fastest way to actually understand it, and it's a real-job skill.

> **STOP · DEPTH LIMIT**
> Describe verb only. No HSRP authentication, no interface tracking decrement tuning depth, no GLBP configuration.

---
