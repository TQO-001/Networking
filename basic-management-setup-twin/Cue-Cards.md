# Twin — Cue Cards

## Card 1: Hostname & Domain Name

**Recall:** Set a non-default hostname

**Answer:** The hostname is more than cosmetic: it becomes part of the CLI prompt (so you always know which box you’re on), and it feeds directly into SSH key generation later. The domain name has one real job in this drill: combined with the hostname, it forms the identity IOS uses to name the RSA key pair (e.g. SW-01.laughtale.local). Skip this step and key generation will refuse to run correctly.

**Command reference:** `hostname <name> / ip domain-name <domain>`

## Card 2: Enable Secret

**Recall:** Set the enable secret

**Answer:** Controls privileged EXEC (level 15) access. Stored as a one-way hash in the config, unlike the older enable password which stores plaintext. Always use enable secret, never enable password — and never configure both, since it just leaves a weaker plaintext password sitting in the file for no benefit.

**Command reference:** `enable secret [enable_secret_password]`

## Card 3: Local User Authentication

**Recall:** Create a local user account

**Answer:** A line password (line vty ... login) is one shared secret for anyone who has it — no accountability, no per-user identity. A local username/secret pair, checked via login local, ties every login to an identifiable account and is what most SSH clients (like PuTTY) actually expect when they prompt for a username.

**Command reference:** `username <name> privilege 15 secret [user_password]`

## Card 4: RSA Key Generation

**Recall:** Generate the RSA key pair

**Answer:** SSH cannot function without an RSA key pair — generating one is literally what turns the SSH server on. IOS names the key using hostname.domain-name, which is exactly why hostname and ip domain-name must be configured first. Skip either and this command fails or produces an unusable key. A 2048-bit modulus is the modern minimum for a reasonably secure key.

**Command reference:** `crypto key generate rsa`

## Card 5: SSH Version & Timeouts

**Recall:** Force SSH version 2

**Answer:** SSH version 1 has known vulnerabilities. Explicitly forcing version 2 removes any ambiguity about what a client is allowed to negotiate. Timeout and retry limits reduce the window an attacker has to brute-force or hang open a connection attempt.

**Command reference:** `ip ssh version 2 / ip ssh time-out / ip ssh authentication-retries`

## Card 6: Console & VTY Line Security

**Recall:** Secure the console line

**Answer:** The console line is physical, local access — still worth securing, since anyone with a cable and five minutes alone with the switch otherwise walks straight in. The vty lines are the 16 virtual terminals used for remote Telnet/SSH access. transport input ssh is what actually blocks Telnet — without it, a switch with only a password configured is still reachable over cleartext Telnet. login local (not just login) is what makes the username database in the previous step actually matter for these lines.

**Command reference:** `line console 0 / line vty 0 15`

## Card 7: Legal Warning Banner

**Recall:** Configure a legal warning banner

**Answer:** Not a technical control — a legal one. Courts have repeatedly relied on a login banner to support prosecuting unauthorized access. A friendly "Welcome" banner is a real liability by contrast.

**Command reference:** `banner motd # ... #`

## Card 8: Management VLAN & SVI

**Recall:** Create and name the management VLAN

**Answer:** A Layer 2 switch has no IP address of its own until you give a VLAN interface (SVI) one. Best practice uses a dedicated management VLAN (not VLAN 1) so management traffic is isolated from user data. The SVI is a logical, CPU-owned interface — it does not forward traffic between VLANs by itself; it just gives this VLAN’s broadcast domain an IP presence for management.

**Command reference:** `vlan 99 / interface vlan 99`

## Card 9: Default Gateway

**Recall:** Set the default gateway

**Answer:** On a pure Layer 2 switch, this tells the switch’s own management traffic (not user traffic) where to send anything destined off-subnet — essential for reaching this switch from outside its local subnet. On a multilayer switch with ip routing enabled, this is replaced by a real static or dynamic route instead.

**Command reference:** `ip default-gateway <ip>`

## Card 10: Password Encryption

**Recall:** Enable password encryption

**Answer:** Encrypts (weakly — type 7, reversible) any remaining plaintext passwords sitting in the config, mainly line passwords. It is not a substitute for enable secret’s stronger hashing, just cleanup for what’s left.

**Command reference:** `service password [password]-encryption`

## Card 11: Saving the Configuration

**Recall:** Save the configuration

**Answer:** Everything you type modifies running-config immediately and lives only in RAM. Nothing survives a reload until you copy it into startup-config (NVRAM).

**Command reference:** `copy running-config startup-config`
