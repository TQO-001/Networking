# Definitions Drill Sheet — Batch 02: OSI & TCP/IP Models

---

### 1. OSI Model
The OSI Model is a 7-layer conceptual framework describing how network communication happens, from physical transmission up to the application a user interacts with: Physical, Data Link, Network, Transport, Session, Presentation, Application. Each layer has a distinct job and only communicates directly with the layers immediately above and below it.

---

### 2. TCP/IP Model
The TCP/IP Model is the practical 4-layer model that real-world networking (including the internet) is actually built on: Network Access (combines OSI Physical + Data Link), Internet (maps to OSI Network), Transport (maps to OSI Transport), and Application (combines OSI Session + Presentation + Application).

---

### 3. Encapsulation
Encapsulation is the process of wrapping data with header (and sometimes trailer) information as it moves down through the layers on the sending device — each layer adds its own header before passing the data to the layer below. The reverse process on the receiving device, stripping headers off as data moves up the layers, is called de-encapsulation.

---

### 4. Layer 1 — Physical
The Physical layer deals with the actual transmission of raw bits over a physical medium — cables, connectors, voltage levels, radio frequencies. It has no concept of addressing or data structure, only signals.

---

### 5. Layer 2 — Data Link
The Data Link layer is responsible for node-to-node delivery on the same local network, using MAC addresses. It organizes bits into frames and is the layer switches operate at.

---

### 6. Layer 3 — Network
The Network layer is responsible for logical addressing and routing data between different networks, using IP addresses. It organizes data into packets and is the layer routers operate at.

---

### 7. Layer 4 — Transport
The Transport layer manages end-to-end communication between applications on source and destination devices, including reliability, ordering, and flow control. TCP and UDP both operate at this layer, and this is where port numbers come in.

---

### 8. TCP (Transmission Control Protocol)
TCP is a connection-oriented Transport layer protocol that guarantees reliable, ordered delivery of data through a three-way handshake, acknowledgments, and retransmission of lost segments. It trades speed for reliability — used where data integrity matters (e.g. web browsing, file transfer).

---

### 9. UDP (User Datagram Protocol)
UDP is a connectionless Transport layer protocol that sends data without establishing a session, acknowledging receipt, or guaranteeing order — it just sends. It trades reliability for speed — used where low latency matters more than perfect delivery (e.g. video streaming, VoIP, DNS lookups).

---

### 10. Port Numbers
Port numbers are values used at the Transport layer to identify which specific application or service on a device a piece of traffic belongs to, allowing a single IP address to run many services at once. Well-known ports (0-1023) are reserved for standard services — e.g. 80 for HTTP, 443 for HTTPS, 53 for DNS, 22 for SSH.

