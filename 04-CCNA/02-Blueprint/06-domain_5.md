### EXAM DOMAIN
#### Domain 5.0 - Security Fundamentals (15%)
Mostly conceptual, with three sharp exceptions: ACLs (5.6) and Layer 2 security (5.7) are heavily simulated, and 5.10 is the one remaining GUI configure task.

#### 5.1 Define key security concepts (threats, vulnerabilities, exploits, mitigation)
* The four definitions and how they relate: a vulnerability is the weakness, a threat is the potential danger, an exploit is the mechanism used against the vulnerability, and mitigation is the countermeasure. Getting these four straight answers most questions here.
* CIA triad: confidentiality, integrity, availability — and which one a given attack breaks.
* Attack vocabulary: DoS/DDoS, reflection/amplification, spoofing (MAC, IP, DHCP, ARP), on-path/MITM, reconnaissance, social engineering (phishing, spear phishing, whaling, vishing, smishing), tailgating, password attacks (brute force, dictionary, credential stuffing), malware types.

> **STOP · DEPTH LIMIT**
> No threat-intelligence frameworks, no MITRE ATT&CK, no incident-response process models.

---

#### 5.2 Describe security program elements (user awareness, training, physical access control)
* User awareness (broad, passive — posters, simulated phishing) vs training (formal, structured, role-specific) vs physical access control (locks, badges, mantraps, cameras, secured racks).
* Distinguish these three cleanly. The questions here are almost always "which category does this example belong to."

> **STOP · DEPTH LIMIT**
> One Anki pass. No compliance framework study (ISO 27001, NIST CSF).

---

#### 5.3 Configure and verify device access control using local passwords
* Console line password, VTY line password, `enable secret` vs `enable password`, local username/secret pairs with privilege levels.
* `service password-encryption` (type 7, reversible, cosmetic) vs `secret` (type 5 MD5 / type 8/9 scrypt hashed, not reversible). Know which is actually secure.
* `login` vs `login local` and what each implies about where credentials come from.
* `exec-timeout` and `logging synchronous` on lines.
* Verify with `show running-config | section line`, and `show privilege` / `show users`.

> **STOP · DEPTH LIMIT**
> No AAA configuration (`aaa new-model` and TACACS+/RADIUS setup is beyond the configure scope — 2.8 and 5.8 only require describing/comparing them).

---

#### 5.4 Describe security password policy elements
* Complexity, length, expiration/rotation, reuse history, lockout thresholds, secure storage.
* Multifactor authentication as the headline alternative — the three factors: something you know, something you have, something you are. Be able to identify whether a given pair is genuinely multifactor (two passwords is not).
* Certificates and biometrics as password alternatives, and the trade-offs of each (biometrics can't be changed once compromised).
* Password managers and passphrases.

> **STOP · DEPTH LIMIT**
> No PKI hierarchy depth, no certificate enrolment process, no biometric FAR/FRR maths.

---

#### 5.5 Describe IPsec remote access and site-to-site VPNs
* Site-to-site: gateway-to-gateway tunnel, always on, transparent to hosts, connects two whole networks. Remote-access: client-to-gateway, on-demand, per-user, typically SSL/TLS-based in modern deployments.
* What IPsec provides: confidentiality (encryption), integrity (hashing), authentication (pre-shared key or certificates), anti-replay.
* The two protocols: AH (authentication and integrity, no encryption) and ESP (encryption and integrity). ESP is what's actually used. That AH doesn't encrypt is the classic question.
* Tunnel mode (encrypts the whole original packet and adds a new IP header — used site-to-site) vs transport mode (encrypts payload only).
* IKE's role in negotiating the security association, at a one-paragraph level. GRE over IPsec: why GRE is added (it carries multicast/routing protocols, which plain IPsec can't).

> **STOP · DEPTH LIMIT**
> Describe verb only. No crypto map or IKEv2 proposal configuration. No DMVPN, no FlexVPN, no cipher-suite tables.

---

#### 5.6 Configure and verify access control lists ★ HIGH YIELD
* Wildcard masks, fluently and in both directions. This is subnetting again, inverted. 0 = must match, 1 = don't care. Know the shortcuts: `host` = 0.0.0.0, `any` = 255.255.255.255.
* Standard ACLs (1-99, 1300-1999): match source only. Placement rule: as close to the destination as possible, because they'd otherwise block too much.
* Extended ACLs (100-199, 2000-2699): match source, destination, protocol, and port. Placement rule: as close to the source as possible, to drop unwanted traffic early.
* Named ACLs (standard and extended) and the key operational advantage: sequence numbers let you insert or delete an individual line without rebuilding the list. Know how to do that.
* Implicit deny any at the end of every ACL. Every ACL needs at least one permit or it blocks everything. This causes more lab failures than anything else.
* Top-down first-match processing: order matters, and a more specific rule must come before a broader one.
* Applying an ACL: to an interface with a direction (`in` or `out`), and to VTY lines with `access-class`.
* Verify with `show access-lists` (read the match counters — they prove traffic is hitting the rules), `show ip interface <int>` (shows which ACL is applied where), and `show running-config`.

> **STOP · DEPTH LIMIT**
> No IPv6 ACLs, no time-based ACLs, no reflexive or dynamic (lock-and-key) ACLs, no object groups.

---

#### 5.7 Configure and verify Layer 2 security features (DHCP snooping, DAI, port security) ★ HIGH YIELD
* Port security: enable it (requires the port be statically access or trunk first — it won't apply to a dynamic port), set maximum MAC count, choose the learning method (static, dynamic, or sticky), and set the violation mode.
* The three violation modes and their exact differences: protect (drops offending traffic silently, no log, no counter), restrict (drops, logs, increments the violation counter), shutdown (err-disables the port — this is the default). Know how to recover an err-disabled port (`shut`/`no shut`, or errdisable recovery).
* Aging and sticky MAC persistence (sticky entries go into the running-config, so they're lost on reload unless saved).
* DHCP snooping: the point is to stop a rogue DHCP server. Enable globally and per-VLAN, then designate trusted ports (uplinks toward the legitimate server and other switches); everything else is untrusted by default and has its DHCP server messages dropped. Know about rate limiting and Option 82 insertion, and the binding table it builds (MAC → IP → VLAN → port → lease).
* Dynamic ARP Inspection: stops ARP spoofing/on-path attacks. Enable per-VLAN, set trusted ports, and understand that DAI depends on the DHCP snooping binding table — which is why snooping must be configured first. Static ARP ACLs cover non-DHCP hosts.
* Verify: `show port-security`, `show port-security interface <int>`, `show port-security address`, `show ip dhcp snooping`, `show ip dhcp snooping binding`, `show ip arp inspection`.

> **STOP · DEPTH LIMIT**
> No 802.1X port-based authentication configuration, no MACsec, no storm control.

---

#### 5.8 Compare authentication, authorization, and accounting concepts
* Authentication = who are you. Authorization = what are you allowed to do. Accounting = what did you do (logging, auditing, billing).
* Map each to a scenario. Nearly all questions here are "which of the three is this an example of."
* TACACS+ vs RADIUS comparison again (see 2.8) — the separation of AAA functions in TACACS+ is what makes it right for device administration.

> **STOP · DEPTH LIMIT**
> No ISE, no 802.1X supplicant/authenticator/authentication-server flow in depth.

---

#### 5.9 Describe wireless security protocols (WPA, WPA2, WPA3)
* The progression and the cipher for each: WEP (broken, RC4), WPA (TKIP), WPA2 (AES-CCMP), WPA3 (AES-GCMP with SAE replacing the PSK handshake).
* Personal (PSK — shared secret, everyone uses the same one) vs Enterprise (802.1X + RADIUS — per-user credentials) for each generation.
* What WPA3 actually fixes: SAE (Dragonfly) defeats offline dictionary attacks against a captured handshake, and adds forward secrecy. Also know Enhanced Open (OWE) for open networks.
* The 802.1X roles: supplicant (client), authenticator (AP/WLC), authentication server (RADIUS).

> **STOP · DEPTH LIMIT**
> No four-way-handshake cryptographic breakdown, no EAP method comparison table (PEAP vs EAP-TLS vs EAP-FAST detail).

---

#### 5.10 Configure and verify WLAN within the GUI using WPA2 PSK
* The complete end-to-end flow in a WLC GUI: create the dynamic interface and map it to a VLAN → create the WLAN with SSID and profile name → set the interface on the General tab → on Security → Layer 2, choose WPA2 with AES and PSK → enter the pre-shared key → enable the WLAN → verify a client associates.
* Practise this in Packet Tracer against the WLC device. The GUI there is simplified but the flow matches.
* Verify: client shows connected, receives an address from the correct VLAN's scope, and can ping its gateway.

> **STOP · DEPTH LIMIT**
> No WPA2-Enterprise/RADIUS setup, no per-firmware-version menu-path memorisation. WPA2 PSK only — that's literally what the objective says.

---
