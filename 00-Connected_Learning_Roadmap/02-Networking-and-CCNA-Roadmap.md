# 02 — Networking and CCNA Roadmap

> Part of the **Connected Learning Roadmap**  
> Working format: sequential sessions, not calendar dates.  
> Last reorganised: 16 November 2026.

## How to use this roadmap

This is the primary learning track. The sequence moves from core network behaviour to addressing, switching, routing, services, security, wireless, and programmability. You may test out of a topic you already understand, but do so by explaining it and completing a practical task—not by assuming it is familiar.

**Status:** `[ ]` queued · `[x]` completed to a usable standard · `[~]` parked · `[!]` needs revision.

The roadmap develops durable networking skills. For exam preparation, map the topics to the official Cisco exam blueprint for the version you will sit. See [07 — Tools and Resources](07-Tools-and-Resources.md).

## Module 1 — Network foundations

**Outcome:** Understand what networks are, how devices communicate, and how to inspect basic connectivity.

### Networking and CCNA

- [ ] **NET-01 — Network components and roles**  
  Understand endpoints, servers, switches, routers, firewalls, access points, controllers, and common network appliances. Explain what each device does and where it fits.

- [ ] **NET-02 — Network topologies and architectures**  
  Compare star, mesh, two-tier, three-tier, spine-leaf, WAN, SOHO, on-premises, and cloud-connected designs. Be able to read a simple topology diagram.

- [ ] **NET-03 — OSI and TCP/IP models**  
  Learn the purpose of each layer, encapsulation, PDUs, and how to use the models to reason about a connectivity problem. Focus on understanding, not blindly memorising layer names.

- [ ] **NET-04 — Ethernet, frames, and MAC addresses**  
  Understand Ethernet frames, source and destination MAC addresses, unicast/broadcast/multicast, and how a switch learns MAC addresses.

- [ ] **NET-05 — ARP and local delivery**  
  Explain how a host discovers the MAC address associated with a local IPv4 destination and how this differs from sending traffic through a router.

- [ ] **NET-06 — TCP, UDP, ports, and common services**  
  Compare connection-oriented and connectionless transport. Understand ports and common services such as DNS, DHCP, HTTP/HTTPS, SSH, NTP, and SNMP.

- [ ] **NET-07 — Basic network troubleshooting tools**  
  Practise reading the output of `ping`, `tracert`/`traceroute`, `ipconfig`/`ip`, `arp`, `route`, and `nslookup`. Learn what each tool can and cannot prove.

**Module check:** Can you explain how a frame, packet, and segment differ? Can you describe the path from one computer to another on the same LAN and to a remote network?

---

## Module 2 — IPv4, subnetting, and IPv6

**Outcome:** Understand addressing and calculate network boundaries confidently. This is a major foundation for the rest of the CCNA.

### Networking and CCNA

- [ ] **NET-08 — Binary and decimal**  
  Practise converting between binary and decimal. Understand why binary place values matter for IPv4 addresses and subnet masks.

- [ ] **NET-09 — IPv4 addressing**  
  Understand the 32-bit address, octets, network and host portions, private and public ranges, loopback, link-local, and the role of the default gateway.

- [ ] **NET-10 — Subnet masks and CIDR**  
  Understand dotted-decimal masks, prefix lengths such as `/24`, and how a mask identifies the network portion of an address.

- [ ] **NET-11 — Basic subnetting**  
  Calculate network address, broadcast address, usable host range, and number of addresses for common prefix lengths. Show the working rather than relying only on a calculator.

- [ ] **NET-12 — Subnetting practice and VLSM**  
  Solve varied subnetting problems and allocate appropriately sized subnets for a small network. Check for overlaps and wasted address space.

- [ ] **NET-13 — IPv6 fundamentals**  
  Understand 128-bit addressing, hexadecimal notation, compression rules, prefix length, global unicast, link-local, unique local, multicast, and loopback addresses.

- [ ] **NET-14 — Verify and troubleshoot host addressing**  
  Inspect a host's address, mask/prefix, gateway, and DNS settings. Identify common causes of incorrect addressing and connectivity failure.

**Module check:** Given an address and prefix, can you work out the network and broadcast addresses by hand? Can you explain what changes when the prefix becomes longer?

---

## Module 3 — Switching and network access

**Outcome:** Understand how switches forward traffic and how VLANs divide a Layer 2 network.

### Networking and CCNA

- [ ] **NET-15 — Layer 2 switching behaviour**  
  Learn how a switch learns, records, and forwards based on MAC addresses. Understand flooding, filtering, and aging at a conceptual level.

- [ ] **NET-16 — VLANs and access ports**  
  Understand why VLANs exist, how they create separate Layer 2 broadcast domains, and how to assign access ports. Know the purpose of voice VLANs and PoE.

- [ ] **NET-17 — Trunking and 802.1Q**  
  Understand why trunks carry multiple VLANs, how 802.1Q tagging works, what a native VLAN is, and why both ends of a trunk must be configured consistently.

- [ ] **NET-18 — Inter-VLAN routing**  
  Compare router-on-a-stick and Layer 3 switch SVIs. Configure a small lab and verify that hosts in different VLANs can communicate through a routing device.

- [ ] **NET-19 — Spanning Tree Protocol**  
  Understand the Layer 2 loop problem, root bridge, port roles/states, and how STP helps create a loop-free topology. Learn the purpose of edge-port protections.

- [ ] **NET-20 — EtherChannel and LACP**  
  Understand link aggregation, why it is used, and how LACP negotiates a port channel. Verify member links and operational status in a lab.

- [ ] **NET-21 — CDP, LLDP, and network documentation**  
  Discover directly connected neighbours in a lab and use the information to validate a topology diagram and interface records.

**Module check:** Can you explain what happens when two devices are in different VLANs? Can you identify a trunk, an access port, and a potential Layer 2 loop in a diagram?

---

## Module 4 — Routing and IP connectivity

**Outcome:** Understand how routers select paths and how to troubleshoot traffic moving between networks.

### Networking and CCNA

- [ ] **NET-22 — Routing tables and route selection**  
  Read a routing table. Understand connected, local, static, and dynamically learned routes, next hops, exit interfaces, and longest-prefix match.

- [ ] **NET-23 — Static and default routes**  
  Configure static and default routes in a lab. Verify the routing table and test reachability. Understand what happens when a next hop is unavailable.

- [ ] **NET-24 — Dynamic routing and OSPF fundamentals**  
  Understand why dynamic routing exists, the role of neighbours and routing information, and the basic purpose of OSPF areas and cost. Build a small controlled lab.

- [ ] **NET-25 — IPv6 connectivity and routing**  
  Practise IPv6 addressing on interfaces and understand how IPv6 routes differ from IPv4 routes. Verify end-to-end connectivity in a lab.

- [ ] **NET-26 — End-to-end path troubleshooting**  
  Work through a scenario involving host configuration, VLAN, gateway, route, and DNS checks. Identify the point of failure systematically instead of changing settings at random.

**Module check:** Can you trace a packet's likely path using a topology and routing table? Can you explain longest-prefix match in your own words?

---

## Module 5 — IP services, security, and wireless

**Outcome:** Understand the services networks depend on and the controls used to protect and manage them.

### Networking and CCNA

- [ ] **NET-27 — DHCP**  
  Understand address assignment, leases, scope options, DHCP relay, and the basic client/server exchange. Troubleshoot a host that does not receive a valid address.

- [ ] **NET-28 — DNS and name resolution**  
  Understand records, recursive resolution, caching, and how to distinguish a DNS problem from a basic IP connectivity problem.

- [ ] **NET-29 — NAT and PAT**  
  Understand why address translation is used and the difference between static NAT, dynamic NAT, and PAT. Practise configuration and verification in a lab.

- [ ] **NET-30 — Network time, monitoring, and logging**  
  Understand NTP, SNMP, syslog, and why consistent timestamps and centralised monitoring matter for troubleshooting.

- [ ] **NET-31 — QoS and common file/management services**  
  Understand the purpose of QoS, traffic classification, and common management or file-transfer services that appear in the CCNA syllabus.

- [ ] **NET-32 — ACL fundamentals and traffic filtering**  
  Understand standard and extended access control lists, rule order, implicit deny, and how to verify intended traffic behaviour in a lab.

- [ ] **NET-33 — Security fundamentals and device hardening**  
  Learn least privilege, secure management access, SSH, AAA concepts, port security, common Layer 2 protections, and the purpose of firewalls and IPS. Focus on defensive configuration and verification.

- [ ] **NET-34 — Wireless principles**  
  Understand access points, controllers, SSIDs, bands, channels, interference, roaming, and wireless security concepts. Learn how a wireless client joins a network.

- [ ] **NET-35 — Virtualisation and network overlays: fundamentals**  
  Understand virtual machines, containers, hypervisors, and VRFs at the level expected for networking fundamentals. Explain why virtualised environments still need network design and controls.

**Module check:** Can you explain the jobs of DHCP, DNS, NAT, NTP, SNMP, and syslog? Can you explain how an ACL affects traffic?

---

## Module 6 — Automation and programmability

**Outcome:** Understand how modern networks expose information and how Python can help with repeatable administrative tasks.

### Networking and CCNA

- [ ] **NET-36 — Traditional and controller-based networking**  
  Compare traditional device-by-device management with controller-based approaches. Understand the ideas of control plane, data plane, centralised management, and automation.

- [ ] **NET-37 — APIs, REST, and data formats**  
  Understand what an API is, the purpose of HTTP methods, status codes, endpoints, authentication concepts, and JSON request/response bodies.

- [ ] **NET-38 — Automation use cases and limits**  
  Explore configuration management, inventory, validation, monitoring, and repeatable reporting. Understand why automation needs testing, permissions, logging, and change control.

- [ ] **NET-39 — Network programmability concepts**  
  Become familiar with the roles of tools and approaches such as Ansible, infrastructure as code, and controller APIs. Understand their purpose before learning any one tool in depth.

**Module check:** Can you explain the difference between an API, a library, and a command-line tool? Can you describe how you would test an automation script before using it in a real environment?

## Suggested completion standard

Before moving on from a module, be able to explain the main concepts without reading, interpret or draw a small network diagram, complete a relevant lab, and troubleshoot at least one variation. If a topic is weak, mark it `[!]` and revisit that topic rather than restarting the module.
