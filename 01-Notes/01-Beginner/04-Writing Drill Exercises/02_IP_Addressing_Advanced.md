# Definitions Drill Sheet — Batch 03: IP Addressing (Advanced)

---

### 1. IPv4 vs IPv6
IPv4 uses 32-bit addresses (about 4.3 billion possible), written as four decimal octets (e.g. 192.168.1.1). IPv6 uses 128-bit addresses (a vastly larger space), written as eight groups of hexadecimal digits separated by colons (e.g. 2001:0db8::1), created to solve IPv4 address exhaustion.

---

### 2. Private vs Public IP Addresses
Private IP addresses (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are reserved for use inside local networks and are not routable on the public internet. Public IP addresses are globally unique and routable on the internet, assigned by ISPs/regional registries.

---

### 3. NAT (Network Address Translation)
NAT is the process of translating private IP addresses to a public IP address (and back) as traffic crosses the boundary between a local network and the internet, allowing many internal devices to share one public address. It exists primarily to conserve public IPv4 addresses and add a layer of separation between internal and external addressing.

---

### 4. PAT (Port Address Translation)
PAT is a form of NAT (also called NAT overload) where many internal private addresses are translated to a single public IP address, distinguished from each other using different port numbers. This is what most home and small office routers use to let multiple devices share one internet connection.

---

### 5. Classful vs Classless Addressing
Classful addressing divides IP space into fixed classes (A, B, C) with fixed network/host boundaries based on the leading bits of the address. Classless addressing (CIDR) discards those fixed boundaries, allowing the network/host split to happen at any bit position, which uses IP space far more efficiently.

---

### 6. VLSM (Variable Length Subnet Masking)
VLSM is the practice of subnetting a network into subnets of different sizes, rather than one fixed size for all of them, so that each subnet is sized to match how many hosts it actually needs — minimizing wasted IP addresses.

---

### 7. Network Address
The network address is the first address in a subnet, used to identify the subnet itself rather than any specific device — it cannot be assigned to a host. Example: for 192.168.1.0/24, the network address is 192.168.1.0.

---

### 8. Broadcast Address
The broadcast address is the last address in a subnet, used to send traffic to every device on that subnet at once — it cannot be assigned to a host either. Example: for 192.168.1.0/24, the broadcast address is 192.168.1.255.

---

### 9. Loopback Address
The loopback address (127.0.0.1 in IPv4, ::1 in IPv6) always refers back to the local device itself, used to test that a device's own network stack is functioning without sending traffic onto the actual network.

---

### 10. APIPA (Automatic Private IP Addressing)
APIPA is a fallback address a device assigns itself (in the 169.254.0.0/16 range) when it's configured for DHCP but can't reach a DHCP server. Seeing a 169.254.x.x address is a strong sign of a DHCP connectivity problem.

---

### 11. IPv6 Address Types
IPv6 has three main address types instead of a broadcast type: Unicast (one-to-one, identifies a single interface), Multicast (one-to-many, delivered to a defined group of interfaces), and Anycast (one-to-nearest, delivered to the closest interface in a group). IPv6 has no broadcast — multicast replaces that function.

---

### 12. Link-Local Address (IPv6)
A link-local address (fe80::/10 range) is an IPv6 address automatically assigned to every interface, usable only for communication on the local link/subnet — it's never routed beyond it, similar in spirit to APIPA but present by design, not as a fallback.

