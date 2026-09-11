## Section 3: IP Addressing and Subnetting Basics

Everything in the later sections — VLANs, trunking, routing, firewall rules — is built on top of this. It's worth being precise about what the numbers actually mean before stacking more concepts on top.

### 3.1 What an IPv4 Address Is

An IPv4 address is four numbers (each 0–255) separated by dots — `192.168.10.10`. Each of those numbers is called an **octet**, because it represents 8 bits. Four octets × 8 bits = 32 bits total, which is the entire address space an IPv4 address can represent.

### 3.2 Subnet Masks and CIDR Notation

An IP address alone doesn't tell you which part identifies the *network* and which part identifies the specific *device* on that network. That's what the **subnet mask** is for. `255.255.255.0` is the mask used everywhere in your build, and it's commonly written in shorthand as `/24` (**CIDR notation** — the `24` means "the first 24 bits, i.e. the first three octets, are the network portion").

Applied to `192.168.10.10 /24`:
- **Network portion:** `192.168.10` (first three octets — fixed for every device on this network)
- **Host portion:** `.10` (last octet — unique per device)

Two devices can only talk to each other directly, at Layer 2, with no router involved, if they share the same network portion. `192.168.10.10` (VM1) and `192.168.10.11` (VM2) can — same `192.168.10.x` network. `192.168.10.10` (VM1) and `192.168.11.10` (VM3) **cannot** — different network portions (`.10.x` vs `.11.x`) — even though only one digit differs. This is the single most important fact underlying the entire rest of the project: reaching across networks always requires a **gateway**, a device with a foot in both networks that's willing to forward traffic between them.

### 3.3 Why `/24` Gives You 254 Usable Addresses

With a `/24` mask, the host portion is one full octet — 8 bits — which can represent 256 different values (0 through 255). But two of those are reserved and can't be assigned to a device:

- **`.0`** — the **network address** itself (`192.168.10.0` identifies the network as a whole, not any device on it).
- **`.255`** — the **broadcast address** (a packet sent here is meant to reach every device on the network simultaneously).

That leaves `192.168.10.1` through `192.168.10.254` — **254 usable host addresses** — which is exactly why pfSense's LAN interface sits at `.1` (the conventional first usable address for a gateway) and your switches/VMs are spread across the rest of that range.

### 3.4 Gateways

A **default gateway** is the address a device sends traffic to whenever the destination isn't on its own local network. VM1 (`192.168.10.10 /24`) is configured with gateway `192.168.10.1`. That means: any time VM1 wants to reach an address outside `192.168.10.0/24` (like VM3 at `192.168.11.10`), it doesn't even try to find VM3 directly — it just hands the packet to `192.168.10.1` and trusts that device to know what to do with it from there. That's pfSense's LAN interface, and "knowing what to do with it" is the routing job covered in a later section.

If a device's gateway is set wrong (or missing), everything on its *own* local network still works fine — VM1 could still ping VM2 with a broken gateway — but anything requiring a hop across networks fails immediately, because the device has no idea where to send traffic it can't deliver directly. This is a genuinely common troubleshooting dead-end: local pings succeeding can trick you into thinking IP config is fine, when actually just the gateway line is wrong or missing.

### 3.5 Your Addressing Plan, Read as a Table

| Network | Devices on it | Gateway |
|---|---|---|
| `192.168.10.0/24` | VM1 (`.10`), VM2 (`.11`), Laptop via Switch 2 (`.50`), pfSense LAN (`.1`), SW1 mgmt (`.254`) | `192.168.10.1` |
| `192.168.11.0/24` | VM3 (`.10`), pfSense WAN (`.1`), SW2 mgmt (`.254`) | `192.168.11.1` |

Every device in the left-hand group can reach every other device in that same group directly — no router needed. Reaching across from one group to the other always goes through pfSense.

---

**Practice:**
1. Is `192.168.10.0` a valid IP address to assign to a device? Why or why not?
2. VM2 is `192.168.10.11 /24`. Without doing any math beyond what's in this section, is `192.168.10.200` on the same network as VM2? Is `192.168.11.5`?
3. If you set VM3's IP correctly (`192.168.11.10 /24`) but left its default gateway completely blank, what specifically would work, and what specifically would fail?
4. Why does pfSense's LAN interface conventionally sit at `.1` rather than some other number in the range? (Hint: it's convention, not a technical requirement — what's the practical reason for the convention?)
