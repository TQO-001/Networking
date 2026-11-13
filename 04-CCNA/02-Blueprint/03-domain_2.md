### EXAM DOMAIN
#### Domain 2.0 - Network Access (20%)
The heaviest simulation domain. VLANs, trunking, EtherChannel, and STP interpretation are where performance-based items concentrate. Note that in v1.1, objective 2.9 was softened from configure to interpret — the wireless GUI is now a reading exercise, not a building one.

#### 2.1 Configure and verify VLANs (normal range) spanning multiple switches ★ HIGH YIELD
* Create a VLAN, name it, assign an access port, verify with `show vlan brief`.
* Data vs voice access ports on the same physical interface: a voice VLAN carries tagged voice traffic while the data VLAN stays untagged on the same port.
* Default VLAN 1 behaviour, why it's poor practice to use it, and normal range (1-1005) vs extended range (1006-4094 — awareness only).
* VLANs spanning multiple switches: the same VLAN ID must exist on every switch in the path and be allowed on the trunks between them. A missing VLAN on a transit switch is the single most common lab failure — expect to troubleshoot exactly this.
* InterVLAN connectivity: router-on-a-stick (subinterfaces with `encapsulation dot1q`) and L3 switch SVIs (`ip routing` + SVI per VLAN). Know when each is appropriate.
* Verify with `show vlan brief`, `show interfaces switchport`, `show interfaces trunk`, `show ip route`.

> **STOP · DEPTH LIMIT**
> No VTP configuration (Jeremy covers it in Day 19 for context — watch once, do not lab it; it is not on the v1.1 blueprint). No private VLANs. No extended-range VLAN configuration.

---

#### 2.2 Configure and verify interswitch connectivity ★ HIGH YIELD
* Statically configure a trunk port (`switchport mode trunk`, and where required set the encapsulation first on older platforms).
* 802.1Q tag structure: 4 bytes inserted after the source MAC, 12-bit VLAN ID field, TPID 0x8100. Native VLAN frames leave untagged.
* Native VLAN: change it, and understand the security reason (VLAN hopping/double-tagging) and the operational reason (a native VLAN mismatch generates errors and merges two VLANs' traffic).
* Prune the allowed VLAN list on a trunk, and add/remove from it correctly without wiping the list.
* Troubleshoot a trunk that won't form: mode mismatch, native VLAN mismatch, VLAN not allowed, VLAN not defined.
* Verify with `show interfaces trunk` (the single most useful switching command on the exam) and `show interfaces switchport`.

> **STOP · DEPTH LIMIT**
> DTP exists and you should know what dynamic auto/dynamic desirable do and why hardcoding is better practice — but do not build a lab around DTP negotiation states. No ISL (dead).

---

#### 2.3 Configure and verify Layer 2 discovery protocols (CDP and LLDP)
* Enable/disable CDP globally and per-interface. Same for LLDP — and note LLDP is disabled by default on Cisco while CDP is enabled by default.
* LLDP's transmit and receive are configured separately per interface. This is a favourite exam detail.
* Default timers: CDP 60 s hello / 180 s hold. LLDP 30 s / 120 s.
* Read `show cdp neighbors` and `show cdp neighbors detail` (the detail version gives the neighbour's IP address — that's why it matters). Same for `show lldp neighbors` / `detail`.
* Use the output to reconstruct a topology diagram. That is the exam task: "given this CDP output, which device is connected to which port."
* Security angle: CDP leaks device model and IOS version, so disable it on untrusted-facing ports.

> **STOP · DEPTH LIMIT**
> No CDP/LLDP TLV field enumeration.

---

#### 2.4 Configure and verify (Layer 2/Layer 3) EtherChannel (LACP) ★ HIGH YIELD
* LACP modes: active and passive. Active/active and active/passive form a channel; passive/passive does not. PAgP (desirable/auto) and static `on` exist — know the mode-combination matrix.
* Layer 2 EtherChannel: bundle physical ports into a port-channel, then configure trunking/VLAN settings on the port-channel interface, not the members.
* Layer 3 EtherChannel: `no switchport` on members, create the port-channel, apply the IP address to the port-channel interface.
* The consistency requirement: every member port must match on speed, duplex, mode (access/trunk), native VLAN, and allowed VLAN list. Mismatch = port excluded from the bundle. This is the standard troubleshooting scenario.
* Load-balancing methods (src-mac, dst-mac, src-dst-ip etc.) — know that the hash determines which physical link a flow uses, and that a single flow never spans links.
* Verify with `show etherchannel summary` (read the flags — P bundled, D down, s suspended, I stand-alone), `show etherchannel port-channel`, `show interfaces port-channel`.

> **STOP · DEPTH LIMIT**
> No advanced hashing algorithm internals, no cross-stack/MLAG/vPC.

---

#### 2.5 Interpret basic operations of Rapid PVST+ Spanning Tree Protocol ★ HIGH YIELD
* Root bridge election: lowest bridge ID wins = priority (default 32768) + extended system ID (the VLAN number) + MAC address. Compute this by hand from a diagram. Priority must be set in increments of 4096.
* Root port selection order: lowest root path cost → lowest sender bridge ID → lowest sender port ID → lowest local port ID. Know the tie-break order in sequence.
* Port cost defaults for RSTP/short mode: 10 Mbps = 100, 100 Mbps = 19, 1 Gbps = 4, 10 Gbps = 2.
* Port roles: root, designated, alternate, backup, disabled. Port states in RSTP: discarding, learning, forwarding (RSTP collapses blocking/listening into discarding — be able to map the legacy STP states to the RSTP ones).
* Link types: point-to-point (full duplex), shared (half duplex), edge (PortFast).
* PortFast: skip straight to forwarding on an access port with an endpoint. Never on a switch-to-switch link.
* Protection features and what each stops: BPDU guard (err-disables a PortFast port that receives a BPDU), BPDU filter (suppresses BPDUs), root guard (blocks a superior BPDU from taking over as root, puts port in root-inconsistent), loop guard (protects against unidirectional link failure causing a blocked port to wrongly go forwarding).
* Set primary and secondary root for a VLAN and know what that command actually does to the priority value.
* Verify with `show spanning-tree`, `show spanning-tree vlan <id>`, `show spanning-tree root`, `show spanning-tree interface <int> detail`.
* The exam skill: given a diagram with bridge priorities and MACs, mark every port's role and state. Do this by hand, repeatedly.

> **STOP · DEPTH LIMIT**
> The verb is interpret, not configure. You still need the root-priority and PortFast/BPDU-guard commands, but do not study MST, do not study PVST+ legacy timer tuning (hello/forward delay/max age maths), and do not study STP convergence timer optimisation.

---

#### 2.6 Describe Cisco Wireless Architectures and AP modes
* Autonomous AP (standalone, self-configured) vs lightweight AP + WLC (split-MAC, centralised).
* Split-MAC: which functions stay on the AP (real-time — beacons, ACKs, encryption, buffering) and which move to the WLC (management — association, authentication, RRM, security policy).
* CAPWAP: two tunnels, control (UDP 5246) and data (UDP 5247). Tunnels the traffic from AP to WLC.
* WLC deployment models: unified/on-prem appliance, embedded, cloud-based, Mobility Express, and the concept of a centralised vs FlexConnect data path.
* AP modes: local (default), FlexConnect, monitor, sniffer, rogue detector, SE-Connect, bridge/mesh. Know which one you'd pick for a given requirement (e.g. a branch site with a slow WAN link → FlexConnect).

> **STOP · DEPTH LIMIT**
> No WLC HA/SSO configuration, no RRM algorithm internals, no mesh RAP/MAP design.

---

#### 2.7 Describe physical infrastructure connections of WLAN components
* AP switchport: access port if one SSID/VLAN and traffic is tunnelled to the WLC in local mode; trunk port when the AP is autonomous or in FlexConnect with local switching of multiple VLANs. Be able to justify which and why.
* WLC ports: distribution system port, service port, redundancy port, console. WLC interfaces: management, virtual, dynamic (per-WLAN), AP-manager.
* LAG on the WLC: bundles distribution ports into one logical link; know that it's typically all-or-nothing and requires a matching EtherChannel on the switch side.
* PoE feeding the AP from the access switch, and the power-budget consequence.

> **STOP · DEPTH LIMIT**
> No WLC port-by-port cabling specifications per hardware model.

---

#### 2.8 Describe network device management access
* Console (out-of-band, physical, works with no network), Telnet (TCP 23, cleartext — never use), SSH (TCP 22, encrypted — always use), HTTP (80) vs HTTPS (443) for GUI access.
* TACACS+ vs RADIUS: TACACS+ is Cisco-originated, TCP 49, encrypts the entire payload, and separates authentication/authorisation/accounting — so it's the device-administration choice. RADIUS is UDP 1812/1813, encrypts only the password, and combines authentication and authorisation — so it's the network-access/802.1X choice.
* Cloud-managed (Meraki-style): device phones home to a cloud controller; separation of management plane from data plane.
* In-band vs out-of-band management, and why OOB matters when the network is broken.

> **STOP · DEPTH LIMIT**
> No ISE policy configuration, no TACACS+ packet format.

---

#### 2.9 Interpret the wireless LAN GUI configuration for client connectivity
* Walk the WLC GUI WLAN creation flow and be able to read a screenshot and say what it will do: WLAN ID/SSID/profile name, the interface (which maps the WLAN to a VLAN), status enable/disable, broadcast SSID on/off.
* Security tab: Layer 2 security choice (WPA2/WPA3, PSK vs 802.1X), AKM, encryption cipher, the PSK field, and where a RADIUS server gets attached for Enterprise.
* QoS tab: Platinum (voice) / Gold (video) / Silver (best effort, default) / Bronze (background). Know the ordering.
* Advanced tab: session timeout, client exclusion, DHCP required, FlexConnect local switching, band select, client load balancing.

> **STOP · DEPTH LIMIT**
> The v1.1 verb is interpret, not configure. You are expected to read and reason about GUI screens, not build them from memory. Do not memorise menu paths for every WLC firmware version. Objective 5.10 is the one place a GUI configure verb still applies (WPA2 PSK).

---
