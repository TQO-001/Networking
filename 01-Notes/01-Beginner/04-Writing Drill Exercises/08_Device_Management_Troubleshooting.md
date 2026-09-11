# Definitions Drill Sheet — Batch 09: Device Management & Troubleshooting

---

### 1. Cisco IOS CLI Modes
Cisco IOS has a hierarchy of CLI modes: User EXEC mode (basic, limited commands, `>` prompt), Privileged EXEC mode (full visibility into device status, `#` prompt, reached via `enable`), and Global Configuration mode (where actual device settings are changed, `(config)#` prompt, reached via `configure terminal`). Sub-modes exist within global config for specific interfaces, VLANs, routing protocols, etc.

---

### 2. Console vs SSH vs Telnet
Console access is a direct physical/serial connection to a device, used for initial setup or when the device is otherwise unreachable over the network. SSH (Secure Shell) is an encrypted remote management protocol used over the network. Telnet is an older, unencrypted remote management protocol — largely deprecated in favor of SSH because credentials and data are sent in plaintext.

---

### 3. Running-config vs Startup-config
The running-config is the device's currently active configuration, held in RAM — any changes made take effect immediately but are lost on reboot unless saved. The startup-config is the configuration stored in NVRAM that the device loads on boot. `copy running-config startup-config` (or `write memory`) saves the active config so it persists across reboots.

---

### 4. Ping
Ping sends ICMP echo request packets to a destination and listens for echo replies, used to test basic Layer 3 reachability and round-trip latency between two devices.

---

### 5. Traceroute
Traceroute maps the path a packet takes to reach a destination by showing each router (hop) along the way, typically by sending packets with incrementing TTL values and recording which device responds at each hop — useful for identifying exactly where a connectivity problem occurs.

---

### 6. show running-config
`show running-config` displays the device's currently active configuration in full, which is the primary command used to verify what's actually configured on a router or switch at any given moment.

---

### 7. show ip interface brief
`show ip interface brief` displays a summary of every interface on a device — its assigned IP address, and its Layer 1/Layer 2 status (up/down) — commonly the first command run when troubleshooting connectivity on a device.

---

### 8. Configuration Backup
Configuration backup is the practice of saving a copy of a device's running or startup configuration to external storage (a TFTP server, flash drive, etc.) so it can be restored quickly if the device fails or a bad change needs to be rolled back.

