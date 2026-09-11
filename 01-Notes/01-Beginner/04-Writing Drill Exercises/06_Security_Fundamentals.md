# Definitions Drill Sheet — Batch 07: Security Fundamentals

---

### 1. AAA (Authentication, Authorization, Accounting)
AAA is a framework for controlling access to network devices/resources: Authentication verifies who you are (login credentials), Authorization determines what you're allowed to do once authenticated, and Accounting logs what you actually did for auditing purposes.

---

### 2. ACL (Access Control List)
An ACL is an ordered list of rules configured on a router or switch that permits or denies traffic based on criteria like source/destination IP, protocol, or port. Rules are processed top-down, and the first match wins.

---

### 3. Standard vs Extended ACL
A standard ACL filters traffic based only on source IP address — simple, but coarse. An extended ACL can filter based on source and destination IP, protocol, and port number — much more precise control over exactly what traffic is permitted or denied.

---

### 4. Port Security
Port security is a switch feature that restricts which MAC addresses are allowed to send traffic on a given port, protecting against unauthorized devices being plugged in or MAC flooding attacks. Violations can be configured to shut the port down, drop offending traffic, or just log a warning.

---

### 5. DHCP Snooping
DHCP snooping is a switch security feature that treats switch ports as trusted or untrusted for DHCP traffic, blocking untrusted ports (typically end-user ports) from acting as a DHCP server — preventing rogue DHCP servers from handing out bad addressing information.

---

### 6. Dynamic ARP Inspection (DAI)
Dynamic ARP Inspection validates ARP packets against a trusted binding table (often built from DHCP snooping data) to prevent ARP spoofing attacks, where a malicious device tries to associate its own MAC address with another device's IP address to intercept traffic.

---

### 7. VPN (Virtual Private Network)
A VPN creates an encrypted tunnel across an untrusted network (like the internet), allowing devices or sites to communicate as if they were on the same private network, protecting the confidentiality of the traffic in transit.

---

### 8. Firewall
A firewall is a device or software that controls traffic flow between networks (or between a network and the internet) based on a defined rule set, blocking traffic that doesn't match permitted criteria. It functions as a security boundary/checkpoint.

---

### 9. Zero Trust
Zero Trust is a security model built on the principle of "never trust, always verify" — no device or user is automatically trusted based on network location alone (e.g. being "inside" the network), and every access request is authenticated and authorized regardless of where it originates from.

---

### 10. Storm Control
Storm control is a switch feature that monitors broadcast, multicast, or unknown-unicast traffic on a port and takes action (dropping traffic or shutting the port down) if it exceeds a configured threshold, protecting the network from traffic storms that could overwhelm it.

