# Definitions Drill Sheet — Batch 01
**Scope:** IP addressing/subnetting, default gateway, Layer 2 vs Layer 3
**Fully offline — no internet needed.** Print this or keep it open in a text editor next to a notebook.

**How to drill each definition:**
1. Read it, then write it out in full **5 times**, looking at it each time.
2. Cover it up. Write it out **5-10 more times from memory**, no looking.
3. Uncover it, check what you wrote against the original. Fix anything wrong, write the corrected version once more.
4. Move to the next term. Come back to any you got wrong tomorrow before starting new ones.

---

### 1. IP Address
An IP address is a unique numerical identifier assigned to a device on a network, made up of a network portion (identifies which network the device belongs to) and a host portion (identifies the specific device within that network). An IPv4 address is 32 bits, written as four decimal octets separated by dots.

---

### 2. Subnet Mask
A subnet mask is a 32-bit value that defines where the split is between the network portion and the host portion of an IP address. Bits set to 1 mark the network portion; bits set to 0 mark the host portion.

---

### 3. CIDR Notation
CIDR notation is a shorthand for expressing a subnet mask as a slash followed by a number (e.g. /24), where the number represents how many bits, counting from the left, are used for the network portion of the address.

---

### 4. Default Gateway
A default gateway is the IP address of a router interface that a device sends traffic to whenever the destination address is outside the device's own subnet. It only gets used when the destination is off-subnet — same-subnet traffic never touches it.

---

### 5. Same Subnet vs. Different Subnet (the rule)
A device decides how to send a packet by checking whether the destination IP falls inside its own subnet. If it does, the device sends the frame directly using ARP and the destination's MAC address, no router involved. If it doesn't, the device sends the packet to its default gateway, which is responsible for routing it toward the correct network.

---

### 6. ARP (Address Resolution Protocol)
ARP is the protocol used to find the MAC address that corresponds to a known IP address on the local network. It exists because Ethernet frames are delivered using MAC addresses, not IP addresses, so a device must resolve an IP to a MAC before it can actually send a frame to it.

---

### 7. Switch (Layer 2)
A switch is a network device that operates at Layer 2 and forwards traffic in the form of frames, using MAC addresses. It builds a MAC address table by observing which MAC addresses are reachable on which physical ports, and uses that table to forward frames only out the correct port instead of flooding every port.

---

### 8. Router (Layer 3)
A router is a network device that operates at Layer 3 and forwards traffic in the form of packets, using IP addresses. It connects separate networks/subnets together and uses a routing table to decide where to send a packet based on its destination IP address.

---

### 9. Why Subnets Can't Reach Each Other Without a Router
Switches have no concept of separate networks — they only forward based on MAC addresses within the same broadcast domain. Two devices on different subnets, even if connected only by switches, cannot communicate unless a Layer 3 device (a router, or a router-on-a-stick / Layer 3 switch) sits between them to route traffic from one subnet to the other.

---

### 10. `ip default-gateway` on a Switch
On a switch itself, the `ip default-gateway` command sets the address the switch uses to send its own management traffic (e.g. remote SSH, SNMP) to a subnet outside its own — it only matters when the switch is being managed from off-subnet, through a router. It has no effect on local, same-subnet management access.

---

**Next batch candidates (once these feel solid):** VLANs and broadcast domains, subnetting math (borrowing bits, usable host counts), MAC address table aging/lifecycle, NAT basics.
