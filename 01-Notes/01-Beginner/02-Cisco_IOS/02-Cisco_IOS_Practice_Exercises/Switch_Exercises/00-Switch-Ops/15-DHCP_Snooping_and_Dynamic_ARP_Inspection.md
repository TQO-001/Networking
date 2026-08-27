# 00-Switch Ops
## 15 - DHCP Snooping & Dynamic ARP Inspection

**What It Is:** Two related Layer 2 security features: DHCP Snooping stops rogue/unauthorized DHCP servers from handing out bad IP configuration, and Dynamic ARP Inspection (DAI) stops ARP spoofing attacks — both build on the same trusted/untrusted port model.

**Why It's Important:** A rogue DHCP server (accidental — someone plugs in a home router with DHCP still enabled — or malicious) can silently hijack every new device's IP configuration on a VLAN, including pointing their default gateway/DNS at an attacker-controlled device. ARP spoofing is a common man-in-the-middle technique on Layer 2 networks. Both are considered baseline hardening on any switch with untrusted or semi-trusted end-user ports.

## Overview & Mechanics

- **DHCP Snooping**: the switch inspects DHCP traffic and classifies each port as either **trusted** (allowed to send DHCP server responses — typically only the port facing your actual, legitimate DHCP server or uplink) or **untrusted** (default for every other port — allowed to send DHCP requests, but DHCP server responses arriving on an untrusted port are dropped). This means a rogue DHCP server plugged into a normal access port simply can't get its offers through.
- The switch builds a **DHCP snooping binding table** — a record of which IP address was leased to which MAC address on which port, learned by watching legitimate DHCP transactions on trusted ports. This binding table is the foundation DAI uses next.
- **Dynamic ARP Inspection (DAI)**: intercepts ARP packets on untrusted ports and checks them against the DHCP snooping binding table — if an ARP packet claims an IP-to-MAC mapping that doesn't match what was actually leased, it's dropped. This stops a classic ARP spoofing attack where a malicious host announces "I am the gateway's IP" with its own MAC to intercept traffic.
- Because DAI depends on the DHCP snooping binding table, **DHCP snooping must be enabled first** — DAI without DHCP snooping either has no binding data to check against (if relying purely on dynamic bindings) or requires manually configured static ARP ACLs instead, which doesn't scale.
- Both features are configured **per-VLAN** (`ip dhcp snooping vlan <id>`, `ip arp inspection vlan <id>`) plus a `trust` designation per interface.

## Step-by-Step Drill: DHCP Snooping

```text
enable
configure terminal

! --- Step 1: Enable DHCP snooping globally ---
ip dhcp snooping

! --- Step 2: Enable it for the specific VLAN(s) you want protected ---
ip dhcp snooping vlan 10,20

! --- Step 3: Trust the uplink/port facing the real DHCP server ---
interface gigabitethernet0/1
 ip dhcp snooping trust
exit

! --- Step 4 (recommended): rate-limit DHCP packets on untrusted ports ---
! to reduce impact of a DHCP-based DoS attempt
interface range fastethernet0/1 - 20
 ip dhcp snooping limit rate 10
exit

! --- Step 5: Save ---
end
copy running-config startup-config
```

## Step-by-Step Drill: Dynamic ARP Inspection (builds on DHCP Snooping)

```text
enable
configure terminal

! --- Step 1: Enable DAI for the same VLAN(s) as DHCP snooping ---
ip arp inspection vlan 10,20

! --- Step 2: Trust the same uplink port (DAI trusts mirror DHCP snooping trusts) ---
interface gigabitethernet0/1
 ip arp inspection trust
exit

! --- Step 3 (recommended): rate-limit ARP packets on untrusted ports ---
interface range fastethernet0/1 - 20
 ip arp inspection limit rate 15
exit

! --- Step 4: Save ---
end
copy running-config startup-config
```

**Verification commands:**
```text
show ip dhcp snooping
show ip dhcp snooping binding
show ip arp inspection
show ip arp inspection vlan 10
show ip dhcp snooping statistics
```

## Common failure points

- **Forgetting to trust the uplink port facing the real DHCP server** — DHCP snooping will drop the legitimate server's own DHCP offers too, since untrusted is the default for every port; this looks exactly like "DHCP stopped working entirely" right after enabling the feature, not just "rogue servers are blocked."
- **Enabling DAI without DHCP snooping already running (and having built up binding entries)** — DAI has nothing to validate ARP packets against and will drop legitimate ARP traffic, breaking normal connectivity, not just attacks. Always enable DHCP snooping first, let it run and build bindings, confirm it's working, then layer DAI on top.
- **Mismatched trust settings between DHCP snooping and DAI on the same port** — trusting a port for DHCP snooping but leaving it untrusted for DAI (or vice versa) on the same uplink is a common oversight; they need to be configured consistently on the same physical ports.
- **Not rate-limiting untrusted ports** — without a rate limit, a compromised or misbehaving end device can flood DHCP or ARP traffic at the switch's CPU, which is exactly the kind of DoS vector these features are meant to help prevent, not just spoofing.

---
*Tip: enable DHCP snooping first in isolation, verify `show ip dhcp snooping binding` is actually populating as real devices renew their leases, and only then layer DAI on top — trying to enable both at once makes it much harder to tell which feature caused a problem if something breaks.*
