### EXAM DOMAIN
#### Domain 4.0 - IP Services (10%)
Nine objectives for 10% of the exam so each one is shallow. Resist depth here. Only 4.1, 4.2, 4.6, and 4.8 carry a configure verb.

#### 4.1 Configure and verify inside source NAT using static and pools
* The four address types and what each means: inside local, inside global, outside local, outside global. Fill in a NAT translation table from a scenario — this is the classic question.
* Mark inside and outside interfaces correctly (`ip nat inside` / `ip nat outside`). Forgetting this is the number one reason NAT "doesn't work" in a lab.
* Static NAT: a permanent one-to-one mapping.
* Dynamic NAT with a pool: define the pool, define an ACL matching the inside source addresses, bind them.
* PAT: overload a pool or overload the outside interface address; understand that port numbers distinguish the sessions.
* Verify with `show ip nat translations` and `show ip nat statistics`; `clear ip nat translation *` to reset.

> **STOP · DEPTH LIMIT**
> No NAT64, no CGNAT, no NAT virtual interfaces, no port forwarding beyond basic static NAT with port.

---

#### 4.2 Configure and verify NTP operating in client and server mode
* Point a device at an NTP server; configure a device as an NTP master with a stratum.
* Stratum concept: stratum 0 reference clock, each hop adds one, stratum 16 unsynchronised.
* Why it matters operationally: log correlation, certificate validity, Kerberos.
* Verify with `show ntp status` (synchronised/unsynchronised, stratum) and `show ntp associations` (the `*` marks the chosen peer).
* Set the timezone and know `clock set` for manual time.

> **STOP · DEPTH LIMIT**
> No NTP authentication, no symmetric active/passive or broadcast modes in depth.

---

#### 4.3 Explain the role of DHCP and DNS within the network
* DHCP DORA sequence: Discover (broadcast), Offer, Request (broadcast), Acknowledge. Know which are broadcast and which are unicast, and the ports (67 server / 68 client).
* What a DHCP scope hands out: address, mask, default gateway, DNS servers, lease time, domain name.
* DNS: resolving a name to an address, recursive vs authoritative at a conceptual level, A vs AAAA vs CNAME vs MX vs PTR records, UDP 53 (TCP 53 for zone transfers/large responses).
* The troubleshooting logic: "can ping by IP but not by name" → DNS. "Client has 169.254.x.x" → DHCP unreachable.

> **STOP · DEPTH LIMIT**
> No DNSSEC, no zone file syntax, no BIND administration.

---

#### 4.4 Explain the function of SNMP in network operations
* Manager / agent / MIB / OID relationship.
* Get, GetNext, GetBulk, Set, Trap, Inform. Know that a trap is unacknowledged and an inform is acknowledged — that single distinction is the most-asked SNMP fact.
* Versions: v1 and v2c use cleartext community strings; v3 adds authentication, integrity, and encryption. v3 is the answer to any security-flavoured SNMP question.
* Ports 161 (polling) and 162 (traps/informs).

> **STOP · DEPTH LIMIT**
> No SNMP configuration (no configure verb), no MIB tree walking, no OID memorisation.

---

#### 4.5 Describe the use of syslog features, including facilities and severity levels
* Severity levels 0-7, memorised with a mnemonic:
  * 0 Emergency
  * 1 Alert
  * 2 Critical
  * 3 Error
  * 4 Warning
  * 5 Notification
  * 6 Informational
  * 7 Debugging
  * *("Every Awesome Cisco Engineer Will Need Ice cream Daily.")*
* Lower number = more severe. Configuring a logging level of 4 captures levels 0 through 4 — this inclusive behaviour is the exam trap.
* Message anatomy: `%FACILITY-SEVERITY-MNEMONIC: description`. Be able to read `%LINK-3-UPDOWN` and state the severity.
* Logging destinations: console, monitor (VTY), buffered, and a remote syslog server (UDP 514).
* Facility concept at a naming level only.

> **STOP · DEPTH LIMIT**
> No syslog server software administration, no RFC 5424 structured-data format.

---

#### 4.6 Configure and verify DHCP client and relay
* Configure a router interface as a DHCP client (obtain its address via DHCP).
* Configure a DHCP relay agent (`ip helper-address`) on the SVI/subinterface facing the clients, pointing at the server.
* Understand precisely why it's needed: DHCP Discover is a broadcast and routers don't forward broadcasts. The relay converts it to a unicast and inserts the client subnet so the server picks the right scope.
* Configure a Cisco router as a DHCP server: pool, network, default-router, dns-server, and excluded addresses. Know that you exclude before defining the pool in practice.
* Verify with `show ip dhcp binding`, `show ip dhcp pool`, `show ip dhcp conflict`, and confirm from the client side.

> **STOP · DEPTH LIMIT**
> No DHCP option 82 configuration depth (it belongs to 5.7 DHCP snooping awareness), no DHCPv6.

---

#### 4.7 Explain the forwarding per-hop behavior (PHB) for QoS
* Classification (identify the traffic) and marking (set a value so downstream devices don't have to re-classify). CoS is the Layer 2 marking in the 802.1Q tag (3 bits, 0–7); DSCP is the Layer 3 marking in the IP ToS byte (6 bits).
* Key DSCP values: EF (Expedited Forwarding, DSCP 46) for voice; AF classes; CS classes; default 0.
* Queuing and congestion management: what a scheduler does, priority/LLQ for voice.
* Congestion avoidance: tail drop vs WRED.
* Policing vs shaping — policing drops or re-marks excess traffic immediately, shaping buffers it and sends it later. Policing is bursty, shaping is smooth. This comparison is the most likely QoS question.
* Trust boundary: why you trust an IP phone's markings but not a PC's.

> **STOP · DEPTH LIMIT**
> Explain verb only. No MQC configuration (class-map/policy-map/service-policy), no queue-depth tuning, no bandwidth-reservation maths.

---

#### 4.8 Configure network devices for remote access using SSH ★ HIGH YIELD
* The full, ordered sequence — you will be asked to produce it and a missing step breaks it: set a hostname, set a domain name, generate an RSA key pair (1024 bits or more for SSHv2), create a local user with a privilege level and secret, configure the VTY lines for local login and to accept SSH transport only, and force version 2.
* Why the hostname and domain name must be set first (they seed the key's fully qualified name).
* VTY line hardening: `exec-timeout`, `login local`, `transport input ssh`, and optionally an ACL applied with `access-class`.
* `enable secret` vs `enable password`, and `service password-encryption` (weak, type 7, reversible — know that it is not real security).
* Verify with `show ip ssh`, `show ssh`, `show users`, and by actually SSHing in from another device.

> **STOP · DEPTH LIMIT**
> No SSH public-key authentication, no certificate-based auth, no AAA server integration configuration.

---

#### 4.9 Describe the capabilities and functions of TFTP/FTP in the network
* TFTP: UDP 69, no authentication, no directory listing, tiny and simple. Used for IOS image transfer, config backup, and PXE boot.
* FTP: TCP 20 (data) and 21 (control), authenticated, supports directory operations, active vs passive mode at a conceptual level.
* The network-engineering use case: backing up and restoring running/startup configs and IOS images to/from a server.

> **STOP · DEPTH LIMIT**
> Lowest-yield objective in the blueprint. One Anki pass, then leave it. No SFTP/FTPS/SCP depth, no copy command drilling beyond basic awareness.

---
