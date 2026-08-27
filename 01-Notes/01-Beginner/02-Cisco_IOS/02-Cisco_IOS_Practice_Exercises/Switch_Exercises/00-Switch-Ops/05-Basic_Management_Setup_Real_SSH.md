# 00-Switch Ops
## 05 - Basic Management Setup, Done Properly (Real SSH)

**What It Is:** The full, correct sequence to take a blank switch to secure, SSH-reachable, remotely manageable status — including the steps that are easy to skip (RSA key generation, local authentication, restricting vty to SSH-only) which your earlier notes didn't fully cover.

**Why It's Important:** A switch with just a password on `line vty` and `login` will accept Telnet as well as SSH by default, sending your password in cleartext over the wire if anyone connects via Telnet. True SSH access requires the switch to actually generate its own RSA key pair and be told to *only* accept SSH — miss that and you've configured a switch that merely *can* be reached over SSH, not one that's actually secured.

## Overview & Mechanics

- **Why plain `login` + `password` isn't full SSH security**: `transport input` on the vty lines defaults to allowing both Telnet and SSH unless you restrict it. Setting only a line password with `login` secures *access* but does nothing about *which protocol* is used to get there.
- **SSH requires three things the switch doesn't have by default:**
  1. A **hostname** that isn't the default (`Switch`) — SSH key generation is tied to the device identity.
  2. An **`ip domain-name`** — combined with the hostname, this forms the identity used to generate the RSA key pair.
  3. A **generated RSA key pair** (`crypto key generate rsa`) — this is what SSH actually uses for the encrypted session; without it, `transport input ssh` will simply refuse to let the SSH server start.
- **Local username/password vs. line password**: `line vty ... login` (with a bare password) is *line-level* authentication — one shared password for anyone with it, no per-user accounting. `login local` (with `username <name> secret <pass>`) checks against a local user database instead — every login is tied to an identifiable username, which matters both for accountability and because most SSH clients (like PuTTY) expect a username/password pair, not just a bare password prompt.
- **SSH version**: `ip ssh version 2` explicitly disables the older, weaker SSHv1 — always set this explicitly rather than relying on default negotiation.

## Step-by-Step Drill

```text
enable
configure terminal

! --- Step 1: Set hostname and domain name (required before key generation) ---
hostname SW-01
ip domain-name laughtale.local

! --- Step 2: Set enable secret (hashed, not plaintext) ---
enable secret Class123!

! --- Step 3: Create a local user for SSH login (not a bare line password) ---
username techadmin privilege 15 secret Tech@Admin123!

! --- Step 4: Generate the RSA key pair (this is what actually enables SSH) ---
crypto key generate rsa
! How many bits in the modulus [512]: 2048
! (2048-bit minimum for modern SSH; this can take a few seconds)

! --- Step 5: Explicitly set SSH version 2 and reasonable timeouts ---
ip ssh version 2
ip ssh time-out 60
ip ssh authentication-retries 3

! --- Step 6: Secure the console line ---
line console 0
 login local
 logging synchronous
 exec-timeout 5 0
exit

! --- Step 7: Restrict vty lines to SSH ONLY, using local authentication ---
line vty 0 15
 login local
 transport input ssh
 exec-timeout 5 0
exit

! --- Step 8: Set a legal warning banner ---
banner motd #
UNAUTHORIZED ACCESS TO THIS DEVICE IS PROHIBITED.
All activity is logged and monitored.
#

! --- Step 9: Create management VLAN and SVI ---
vlan 99
 name MGMT
exit

interface vlan 99
 description Management-SVI
 ip address 192.168.99.2 255.255.255.0
 no shutdown
exit

! --- Step 10: Set default gateway for switch's own management traffic ---
ip default-gateway 192.168.99.1

! --- Step 11: Encrypt any remaining plaintext secrets in the config ---
service password-encryption

! --- Step 12: Save ---
end
copy running-config startup-config
```

**Verification commands:**
```text
show ip ssh
show crypto key mypubkey rsa
show running-config | section line vty
show ip interface brief
show interfaces vlan 99
```
*Then actually test it: open PuTTY, set Connection Type to SSH, port 22, target the SVI IP, and log in with the `techadmin` username/password — confirm Telnet (port 23) is refused.*

## Common failure points

- **`transport input ssh` fails silently with "no matching cipher" or SSH just won't start**: almost always means Step 4 (RSA key generation) never happened, or the hostname/domain-name weren't set before it — the key generation needs both to already be configured.
- **Using `login` instead of `login local`**: this checks against a single shared line password, not the `username` database — if you set up `username techadmin` in Step 3 but leave `login` (not `login local`) on the vty lines, PuTTY's username field is effectively ignored and it just becomes a shared-password login again.
- **Skipping `ip domain-name`**: `crypto key generate rsa` will refuse to run (or generate a key that isn't tied to the intended identity) if there's no domain name set — this is the single most common reason people can't get past this step.
- **Losing the default gateway line**: `ip default-gateway` only matters on a pure L2 switch (no `ip routing`). If this switch is a multilayer switch with routing enabled, you need `ip route 0.0.0.0 0.0.0.0 <next-hop>` instead — check with `show ip route` / whether `ip routing` is in the running-config before assuming which one applies.

---
*Tip: after this drill, immediately disconnect your console cable and reconnect purely over SSH before doing anything else — confirming remote access works while you still have the console as a fallback is much less stressful than discovering an SSH problem after you've already walked away from the switch.*
