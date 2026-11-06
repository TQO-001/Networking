# Definitions Drill Sheet — Batch 06: IP Services

---

### 1. DHCP (Dynamic Host Configuration Protocol)
DHCP is a protocol that automatically assigns IP addressing information (IP address, subnet mask, default gateway, DNS servers) to devices when they join a network, removing the need to configure each device manually.

---

### 2. DHCP Process (DORA)
DORA describes the four-step process a device goes through to get an address from DHCP: Discover (client broadcasts looking for a DHCP server), Offer (server offers an available address), Request (client requests that specific offered address), Acknowledge (server confirms and leases the address to the client).

---

### 3. DNS (Domain Name System)
DNS is the system that translates human-readable domain names (like example.com) into the IP addresses computers actually use to locate each other, functioning as the internet's naming/lookup service.

---

### 4. DNS Resolution
DNS resolution is the process of a device querying (usually through a series of DNS servers — recursive resolver, root, TLD, authoritative) to convert a domain name into its corresponding IP address before a connection can be made.

---

### 5. NTP (Network Time Protocol)
NTP is a protocol used to synchronize the clocks of devices across a network to a common, accurate time source. Accurate time matters for log correlation, certificate validation, and any process that depends on timestamps lining up across devices.

---

### 6. SNMP (Simple Network Management Protocol)
SNMP is a protocol used to monitor and manage network devices remotely — collecting status/performance data and, in some cases, allowing configuration changes — commonly used by network monitoring systems to track device health at scale.

---

### 7. HTTP vs HTTPS
HTTP (Hypertext Transfer Protocol) is the protocol used to transfer web content, sent in plaintext. HTTPS adds TLS/SSL encryption on top of HTTP, protecting the data in transit from being read or tampered with by anyone intercepting it.

---

### 8. FTP vs TFTP
FTP (File Transfer Protocol) is a protocol for transferring files between devices, supporting authentication and reliable (TCP-based) transfer. TFTP (Trivial File Transfer Protocol) is a simplified, unauthenticated, UDP-based version often used for transferring small files like device configuration backups or firmware images in networking environments.

---

### 9. Syslog
Syslog is a standard protocol for sending log messages from network devices to a centralized logging server, allowing events, errors, and status changes across many devices to be collected and reviewed in one place.

