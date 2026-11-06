# VTP modes and pruning on switches

VLAN Trunking Protocol (VTP) lets one switch push VLAN database changes to others over trunk links, so you don't have to manually create the same VLAN on every switch in a domain. It's convenient — and also a well-known way to accidentally wipe every VLAN in your network if misconfigured, so understanding the modes matters as much as the commands.

### Step 1: Understand the three VTP modes before touching a live network

- **Server** (the default mode): can create/modify/delete VLANs, and advertises those changes to the rest of the domain. Changes here propagate everywhere.
- **Client**: receives and applies VLAN changes from servers, but cannot create/modify/delete VLANs locally.
- **Transparent**: does not participate in the VTP domain's VLAN database at all — it forwards VTP advertisements through itself without acting on them, and manages its own local VLANs independently. This is often the safest default on access switches unless you specifically want centralized VLAN management.

The dangerous part: a VTP server with a *higher revision number* than the rest of the domain will overwrite everyone else's VLAN database — even if it has fewer VLANs configured. This is how a misconfigured lab switch, plugged into a production trunk, has wiped VLANs across entire campus networks in real incidents.

### Step 2: Set the VTP domain name

All switches that should share a VLAN database need the same domain name:
```text
DIST-SW-01(config)#vtp domain LaughTaleCorp
```

### Step 3: Set the VTP mode

```text
DIST-SW-01(config)#vtp mode server
```
On a switch you want to protect from accidentally overwriting the domain (e.g. one you're just testing on), set transparent mode instead:
```text
ACCESS-SW-10(config)#vtp mode transparent
```

### Step 4: Set a VTP password

This isn't optional in any environment where VTP is actually in use — an unauthenticated VTP domain means any switch cabled into a trunk port can join and start pushing VLAN changes:
```text
DIST-SW-01(config)#vtp password Str0ngVTPpass!
```
The password must match exactly on every switch in the domain, or they won't accept each other's advertisements.

### Step 5: Enable VTP pruning (optional, saves trunk bandwidth)

By default, a trunk carries broadcast/multicast/unknown-unicast traffic for *every* VLAN allowed on it, even to switches with no ports actually assigned to that VLAN. VTP pruning stops that — it dynamically restricts trunks from flooding VLAN traffic toward switches that don't need it:
```text
DIST-SW-01(config)#vtp pruning
```
This only needs to be enabled on one VTP server; it propagates domain-wide.

### Step 6: Verify

```text
DIST-SW-01#show vtp status
```
Check the **VTP Operating Mode**, **VTP Domain Name**, and **Configuration Revision** fields especially — the revision number is the one to watch when troubleshooting an unexpected VLAN wipe.

## What "good" looks like

A deliberately chosen mode per switch (not just "whatever the default was"), a matching domain name and password across the whole domain, and — for anyone doing lab work — the habit of checking `show vtp status` and resetting the revision number (by temporarily changing the domain name and changing it back, or setting transparent mode) before plugging a lab switch into anything resembling production.
