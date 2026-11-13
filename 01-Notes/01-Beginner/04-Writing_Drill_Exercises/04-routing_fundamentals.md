# Definitions Drill Sheet — Batch 05: Routing Fundamentals

---

### 1. Routing Table
A routing table is the list a router maintains of known destination networks and the path (next-hop and/or exit interface) to reach each one. Every routing decision a router makes comes down to consulting this table for the best match to a packet's destination.

---

### 2. Static Route
A static route is a route manually configured by an administrator, telling the router exactly how to reach a specific network. It doesn't adapt automatically if the network topology changes — someone has to update it.

---

### 3. Dynamic Routing
Dynamic routing is when routers use a routing protocol (like OSPF or RIP) to automatically learn about networks from neighboring routers and adapt to topology changes, without an administrator manually updating routes.

---

### 4. Default Route
A default route (0.0.0.0/0) is the route a router uses as a catch-all for any destination that doesn't match a more specific entry in the routing table — commonly used to point all unmatched traffic toward the internet-facing gateway.

---

### 5. Administrative Distance
Administrative distance is a value used to rank the trustworthiness of a route when a router learns about the same destination from more than one source (e.g. a static route vs. OSPF vs. RIP) — the lower the administrative distance, the more preferred the route.

---

### 6. Metric
A metric is the value a routing protocol uses to determine the "best" path to a destination when multiple paths exist through the same protocol — different protocols use different metrics (e.g. RIP uses hop count, OSPF uses cost based on bandwidth).

---

### 7. Longest Prefix Match
Longest prefix match is the rule a router follows when multiple routing table entries could match a destination address: it always chooses the entry with the most specific (longest) subnet mask, since that's the most precise match available.

---

### 8. RIP (Routing Information Protocol)
RIP is a simple distance-vector dynamic routing protocol that uses hop count as its metric, with a maximum of 15 hops. It's easy to configure but converges slowly and scales poorly, making it mostly a learning/legacy protocol in modern networks.

---

### 9. OSPF (Open Shortest Path First)
OSPF is a link-state dynamic routing protocol that builds a full map of the network topology (via link-state advertisements) and calculates the shortest path to each destination using cost, based primarily on interface bandwidth. It converges faster and scales better than RIP.

---

### 10. OSPF Areas
OSPF Areas are a way of dividing a large OSPF network into smaller logical sections to reduce the size of the topology database each router must maintain and limit how far topology changes propagate. Area 0 (the backbone area) is required, and all other areas must connect to it.

---

### 11. Convergence
Convergence is the state where all routers in a network have consistent, up-to-date routing information after a topology change. Faster convergence means less time spent with incomplete or incorrect routing information after a link goes down.

