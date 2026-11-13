### EXAM DOMAIN
#### Domain 1.0 - Network Fundamentals (20%)
Thirteen objectives. Two of them (1.6, 1.8) carry more weight than the other eleven combined, because subnetting math bleeds into every other domain on the exam.

#### 1.1 Explain the role and function of network components
* Which OSI layer each device makes its forwarding decision at: router (L3/IP), L2 switch (L2/MAC), L3 switch (both, in hardware), NGFW (up to L7), IPS (inline, L7 inspection, blocks in real time), AP (802.11 to 802.3 conversion), WLC (centralised control of lightweight APs via CAPWAP), endpoint, server.
* PoE standards and budgets: 802.3af (15.4 W), 802.3at / PoE+ (30 W), 802.3bt / UPoE and UPoE+ (60 W/90 W). Know power is delivered over the same twisted pair as data, and typical draws (IP phone, AP, camera).
* IDS vs IPS: IDS is out-of-band and alerts; IPS is inline and drops.

> **STOP · DEPTH LIMIT**
> Do not learn specific Cisco model numbers, Firepower policy configuration, or IPS signature tuning. Do not configure PoE — there is no configure verb here.

---

#### 1.2 Describe characteristics of network topology architectures
* Two-tier (collapsed core): access + collapsed distribution/core. When it's the right answer: small to medium campus, cost-constrained.
* Three-tier: access (endpoint connectivity, PoE, port security), distribution (routing, VLAN boundary, policy, L2/L3 demarcation), core (high-speed transport, no policy, no filtering).
* Spine-leaf: every leaf connects to every spine, never leaf-to-leaf or spine-to-spine. Two hops maximum between any endpoints — predictable latency. Solves east-west traffic and removes STP-blocked-link waste. Data centre answer.
* WAN: leased line, MPLS L2VPN/L3VPN, Metro Ethernet, internet VPN, SD-WAN. Know what each is at a one-paragraph level.
* SOHO: single integrated box — router + switch + AP + firewall + NAT.
* On-premises vs cloud: IaaS / PaaS / SaaS responsibility boundaries, and the trade-offs (CapEx vs OpEx, control vs elasticity).

> **STOP · DEPTH LIMIT**
> No ACI, no VXLAN encapsulation detail, no MPLS label mechanics, no SD-WAN vEdge/vSmart component naming, no AWS/Azure service names.

---

#### 1.3 Compare physical interface and cabling types
* Single-mode fibre: small core (~9 µm), laser source, long distance (km range), more expensive. Multimode: larger core (50/62.5 µm), LED/VCSEL, shorter distance, cheaper.
* Copper twisted pair: Cat5e (1 Gbps), Cat6 (10 Gbps to 55 m), Cat6a (10 Gbps to 100 m). 100 m limit for all.
* Straight-through vs crossover and which device pairs need which (then know that MDIX auto makes it mostly moot on modern gear).
* Shared media (hub, half-duplex, one collision domain) vs point-to-point (switch, full-duplex, no collisions).

> **STOP · DEPTH LIMIT**
> Do not memorise every IEEE standard name (1000BASE-LX10 vs -EX vs -ZX distance tables). Know the categories and the reasoning, not the catalogue.

---

#### 1.4 Identify interface and cable issues (collisions, errors, duplex/speed mismatch)
* Read `show interfaces` output and name the fault from the counters. This is the actual exam skill.
* CRC errors → damaged cable, EMI, bad transceiver. CRC with no collisions often means duplex mismatch on the receiving side.
* Runts (<64 bytes) → collisions or duplex mismatch. Giants (>1518) → MTU/oversized frame issue.
* Late collisions → duplex mismatch (classic) or cable run exceeding spec.
* Input errors vs output errors vs drops — which direction is broken.
* Speed mismatch = link does not come up at all. Duplex mismatch = link comes up and performs terribly. Know this distinction cold; it's a favourite question.
* `show interfaces status` for a fast up/down/err-disabled and speed/duplex sweep.

> **STOP · DEPTH LIMIT**
> No optical power budget calculations, no TDR cable testing output, no SFP diagnostics.

---

#### 1.5 Compare TCP to UDP
* TCP: connection-oriented, three-way handshake (SYN, SYN-ACK, ACK), four-way termination (FIN/ACK x2), sequence and acknowledgement numbers, sliding window / flow control, retransmission, 20-byte minimum header.
* UDP: connectionless, no handshake, no ordering, no retransmission, 8-byte header, four fields only (source port, dest port, length, checksum).
* Header fields for both, in order. You will get asked what a specific field does.
* Port numbers you must know by heart: FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, TFTP 69, HTTP 80, POP3 110, NTP 123, SNMP 161/162, HTTPS 443, Syslog 514, RADIUS 1812/1813, TACACS+ 49.
* Which applications pick which and why (VoIP/video/DNS/DHCP/TFTP → UDP; web/mail/file transfer/SSH → TCP).

> **STOP · DEPTH LIMIT**
> No congestion control algorithm detail (Reno, CUBIC, slow start maths). No TCP option fields beyond MSS awareness.

---

#### 1.6 Configure and verify IPv4 addressing and subnetting ★ HIGH YIELD
* Given any address and prefix, produce in ≤45 seconds: network ID, broadcast address, first usable host, last usable host, usable host count, dotted-decimal mask, and the next subnet's network ID.
* The reverse direction: given a host requirement, pick the correct prefix. Given a subnet count requirement, pick the correct prefix.
* VLSM: carve one block into differently-sized subnets in descending size order without overlap.
* Route summarisation: given a set of networks, produce the summary prefix.
* CLI: address a router interface, address an SVI, address a subinterface, `no shutdown`, and verify with `show ip interface brief`, `show ip interface`, `show ip route`, `show running-config interface`.
* Recognise up/up, up/down, administratively down/down and what each implies about layer 1 vs layer 2 vs configuration.

> **STOP · DEPTH LIMIT**
> Nothing. There is no rabbit hole here — this is the one objective where more time is always correct. It also underpins ACLs, OSPF wildcard masks, NAT pools, and DHCP scopes.

---

#### 1.7 Describe private IPv4 addressing
* RFC 1918: 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0–172.31.255.255 — know the /12 boundary, it's a trap), 192.168.0.0/16.
* Not routable on the public internet; requires NAT to reach it.
* Adjacent special ranges you should recognise on sight: 127.0.0.0/8 loopback, 169.254.0.0/16 APIPA/link-local (what it means when a client has one — DHCP failed), 224.0.0.0/4 multicast.

> **STOP · DEPTH LIMIT**
> No RFC 6598 CGNAT (100.64.0.0/10) depth, no full IANA special-purpose registry.

---

#### 1.8 Configure and verify IPv6 addressing and prefix ★ HIGH YIELD
* Address compression and expansion rules, in both directions, flawlessly. Leading-zero removal, single `::` only, and the "longest run of zeros" tie-break.
* IPv6 subnetting on nibble boundaries (/48 → /52 → /56 → /60 → /64). Know why /64 is the standard host prefix.
* CLI: enable IPv6 routing globally, assign a static global unicast address, assign an address using EUI-64, assign a link-local address manually, configure an IPv6 static route and default route.
* Verify with `show ipv6 interface brief`, `show ipv6 interface`, `show ipv6 route`, and IPv6 ping including pinging a link-local address (which requires specifying the exit interface).
* Understand that an interface has multiple IPv6 addresses simultaneously (link-local + one or more global) and which is used as source for what.

> **STOP · DEPTH LIMIT**
> No DHCPv6 server configuration, no SLAAC deep mechanics beyond RA/RS purpose, no OSPFv3, no IPv6 ACLs, no NAT64/DS-Lite/tunnelling.

---

#### 1.9 Describe IPv6 address types
* Identify type from the leading bits on sight: GUA 2000::/3, ULA fc00::/7 (practically fd00::/8), link-local fe80::/10, multicast ff00::/8, unspecified ::, loopback ::1.
* Anycast: same address on multiple nodes, routed to the topologically nearest. Note there is no IPv6 broadcast — multicast replaces it.
* Well-known multicast groups: ff02::1 all nodes, ff02::2 all routers, ff02::5/ff02::6 OSPF, solicited-node ff02::1:ff00:0/104.
* Modified EUI-64, performed by hand: split the 48-bit MAC, insert FFFE in the middle, flip the 7th bit of the first byte (the U/L bit). Be able to do this in both directions.

> **STOP · DEPTH LIMIT**
> No multicast routing, no MLD, no Neighbour Discovery packet-by-packet breakdown beyond NS/NA/RS/RA purpose.

---

#### 1.10 Verify IP parameters for Client OS (Windows, macOS, Linux)
* Windows: `ipconfig /all` (IP, mask, gateway, DNS, MAC, DHCP server), `ping`, `tracert`, `nslookup`, `arp -a`.
* Linux: `ip addr`, `ip route`, `ip neigh`, `dig`, legacy `ifconfig`.
* macOS: `ifconfig`, `networksetup -getinfo <service>`.
* The actual exam skill: read client output and spot the misconfiguration — wrong gateway (not in the client's own subnet), wrong mask (breaks local vs remote decisions), missing DNS, or a 169.254.x.x address meaning DHCP never answered.

> **STOP · DEPTH LIMIT**
> No OS-specific network stack tuning, no netsh scripting, no systemd-networkd or NetworkManager config files.

---

#### 1.11 Describe wireless principles
* Non-overlapping channels: 2.4 GHz has only 1, 6, 11 at 20 MHz. 5 GHz has many (24+ depending on DFS/regulatory domain). Be able to explain co-channel interference vs adjacent-channel interference and which is worse.
* SSID vs BSSID vs ESS: SSID is the name, BSSID is the AP radio's MAC, ESS is multiple APs sharing an SSID.
* RF behaviour: attenuation, absorption, reflection, refraction, scattering, multipath; SNR and why it matters more than raw signal strength; the relationship between distance, data rate, and modulation.
* Encryption/authentication: WPA2-Personal (PSK) vs WPA2-Enterprise (802.1X/RADIUS); AES-CCMP; WPA3 with SAE and its improvement over the WPA2 four-way handshake.
* 2.4 GHz vs 5 GHz trade-off: range/penetration vs capacity/interference.

> **STOP · DEPTH LIMIT**
> No 802.11 frame-type breakdown, no antenna gain dBi maths, no RF site-survey methodology, no specific 802.11ax/be feature tables.

---

#### 1.12 Explain virtualization fundamentals (server virtualization, containers, VRFs)
* Type 1 hypervisor (bare metal — ESXi, Hyper-V, KVM) vs Type 2 (hosted — VirtualBox, VMware Workstation). Which is used in a data centre and why.
* Virtual switch role: how VMs reach the physical network, and why the physical uplink is typically a trunk.
* Containers vs VMs: containers share the host kernel, no guest OS, seconds to start, megabytes not gigabytes. VMs give stronger isolation.
* VRF: multiple independent routing tables on one device. The one-line framing that wins questions: "VRFs are to Layer 3 what VLANs are to Layer 2."

> **STOP · DEPTH LIMIT**
> No vSphere/ESXi administration, no Docker commands, no Kubernetes at all, no VRF-lite configuration (there is no configure verb).

---

#### 1.13 Describe switching concepts
* MAC learning: the switch reads the source MAC of an incoming frame and maps it to the ingress port and VLAN. Aging default 300 seconds on Cisco.
* Frame switching: destination MAC found in the CAM table — forward out that one port only.
* Frame flooding: destination is broadcast, unknown unicast, or multicast — out every port in the VLAN except the ingress port.
* MAC address table / CAM table structure: MAC, port, VLAN, type (dynamic/static).
* The exam skill: given a topology and a specific sequence of frames, state the exact contents of each switch's MAC table afterwards, and state for each frame whether it was switched or flooded. Practise this on paper — it is a guaranteed question type.
* `show mac address-table`, and `clear mac address-table dynamic`.

> **STOP · DEPTH LIMIT**
> No store-and-forward vs cut-through vs fragment-free switching detail (removed from current scope), no TCAM/ASIC architecture.

---






