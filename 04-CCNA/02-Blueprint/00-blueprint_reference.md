## REFERENCE
### High-Yield Summary - Where The Points Actually Are
If time collapses, protect these in this order. They span roughly two-thirds of the scoring weight and virtually all of the simulation items.

| RANK | TOPIC | OBJECTIVES | WHY |
| :--- | :--- | :--- | :--- |
| **1** | IPv4 subnetting & VLSM | 1.6 | Underpins ACLs, OSPF wildcards, NAT pools, DHCP scopes, routing tables. A subnetting error cascades into every other domain. |
| **2** | Single-area OSPFv2 | 3.4 | The densest configure-and-verify technology, in the largest domain. |
| **3** | VLANs & 802.1Q trunking | 2.1, 2.2 | The foundation of nearly every switching simulation. |
| **4** | ACLs (standard, extended, named) | 5.6 | Heavily simulated, and unforgiving — wildcard mask or placement errors fail the whole item. |
| **5** | Routing table interpretation & forwarding logic | 3.1, 3.2 | Longest prefix match + AD + metric appears in some form on nearly every attempt. |
| **6** | Rapid PVST+ interpretation | 2.5 | Root election and port roles from a diagram, by hand. |
| **7** | IPv4/IPv6 static & floating static routing | 3.3 | Fast points, easy to lab, easy to get wrong under time pressure. |
| **8** | EtherChannel (LACP) | 2.4 | Mode matrix + consistency troubleshooting. |
| **9** | IPv6 addressing & types | 1.8, 1.9 | Compression and EUI-64 are pure speed skills. |
| **10** | Layer 2 security (port security, DHCP snooping, DAI) | 5.7 | Configure-verb security objectives with clear, testable behaviour. |
| **11** | SSH device hardening | 4.8 | A fixed command sequence that appears constantly. |
| **12** | NAT/PAT | 4.1 | The inside-local/inside-global table question is near-guaranteed. |
| **13** | Domain 6.0 in full | 6.1–6.7 | 10% of the exam for zero lab time. The best points-per-hour on the blueprint. |

---

### MASTER "DO NOT STUDY" LIST
Everything below is out of scope for 200-301 v1.1. Some of it appears in Jeremy's course or the OCG for context. Watch once if you like; never lab it, never flashcard it.

* [ ] RIP and EIGRP configuration (not on the v1.1 blueprint — Jeremy Day 25 is context only)
* [ ] BGP in any form
* [ ] OSPF multi-area, LSA types, ABR/ASBR, stub/NSSA areas, virtual links, OSPF authentication
* [ ] OSPFv3/IPv6 routing protocols
* [ ] VTP configuration (Day 19 is context only)
* [ ] MST, legacy PVST+ timer tuning
* [ ] IPv6 ACLs, time-based ACLs, reflexive ACLs, object groups
* [ ] DHCPv6, SLAAC internals, NAT64, tunnelling mechanisms
* [ ] MQC QoS configuration (class-map/policy-map/service-policy)
* [ ] AAA server configuration (aaa new-model, TACACS+/RADIUS setup)
* [ ] 802.1X configuration, MACsec, storm control
* [ ] IPsec crypto map / IKEv2 configuration, DMVPN
* [ ] Policy-based routing, VRF configuration, IP SLA / object tracking
* [ ] VXLAN, LISP, SD-Access fabric roles, ACI
* [ ] Kubernetes, Docker commands, ESXi administration
* [ ] Python scripting, NETCONF/YANG models, Ansible playbook authoring
* [ ] Any Cisco hardware model numbers or IOS version feature matrices
* [ ] Wireless: 802.11 frame types, RF maths, site surveys, EAP method comparison tables