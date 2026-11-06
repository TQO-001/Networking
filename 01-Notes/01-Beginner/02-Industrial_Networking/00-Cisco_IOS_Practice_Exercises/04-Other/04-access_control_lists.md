# Worksheet 4: Access Control Lists (Standard & Extended)

**Scenario:** On `FW-RTR-EDGE`, you need to block one specific host from reaching a server subnet (standard ACL) and, separately, allow only web and DNS traffic from an internal LAN out to the internet while denying everything else (extended ACL).

## 📝 Practice Worksheet

### Section 1: Numbered Standard ACL

1. **Create numbered standard ACL `10` that denies host `192.168.5.50` and permits all other traffic:**
   ```text
   FW-RTR-EDGE(config)# [ ??? ]
   FW-RTR-EDGE(config)# [ ??? ]
   ```

2. **Apply ACL 10 inbound on interface `GigabitEthernet0/1` (the interface facing the server subnet):**
   ```text
   FW-RTR-EDGE(config)# [ ??? ]
   FW-RTR-EDGE(config-if)# [ ??? ]
   ```

### Section 2: Named Extended ACL

3. **Create a named extended ACL called `LAN-OUT` that permits TCP port 80 (HTTP) and 443 (HTTPS) from network `172.16.1.0/24` to any destination:**
   ```text
   FW-RTR-EDGE(config)# [ ??? ]
   FW-RTR-EDGE(config-ext-nacl)# [ ??? ]
   FW-RTR-EDGE(config-ext-nacl)# [ ??? ]
   ```

4. **Add a rule permitting UDP port 53 (DNS) from the same network to any destination:**
   ```text
   FW-RTR-EDGE(config-ext-nacl)# [ ??? ]
   ```

5. **Explicitly deny everything else from that network (for clarity, even though it's implicit) and log matches:**
   ```text
   FW-RTR-EDGE(config-ext-nacl)# [ ??? ]
   ```

6. **Apply `LAN-OUT` outbound on `GigabitEthernet0/0` (the internet-facing interface):**
   ```text
   FW-RTR-EDGE(config)# [ ??? ]
   FW-RTR-EDGE(config-if)# [ ??? ]
   ```

### Section 3: Verification

7. **View all configured ACLs with match counters:**
   ```text
   FW-RTR-EDGE# [ ??? ]
   ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1a** | Deny the host | `access-list 10 deny host 192.168.5.50` |
| **1b** | Permit everything else | `access-list 10 permit any` |
| **2a** | Select interface | `interface gigabitEthernet0/1` |
| **2b** | Apply inbound | `ip access-group 10 in` |
| **3a** | Create named extended ACL | `ip access-list extended LAN-OUT` |
| **3b** | Permit HTTP | `permit tcp 172.16.1.0 0.0.0.255 any eq 80` |
| **3c** | Permit HTTPS | `permit tcp 172.16.1.0 0.0.0.255 any eq 443` |
| **4** | Permit DNS | `permit udp 172.16.1.0 0.0.0.255 any eq 53` |
| **5** | Explicit deny + log | `deny ip 172.16.1.0 0.0.0.255 any log` |
| **6a** | Select interface | `interface gigabitEthernet0/0` |
| **6b** | Apply outbound | `ip access-group LAN-OUT out` |
| **7** | Show ACLs & counters | `show access-lists` |

## 📜 Full Terminal Script Reference

```text
FW-RTR-EDGE(config)#access-list 10 deny host 192.168.5.50
FW-RTR-EDGE(config)#access-list 10 permit any

FW-RTR-EDGE(config)#interface gigabitEthernet0/1
FW-RTR-EDGE(config-if)#ip access-group 10 in
FW-RTR-EDGE(config-if)#exit

FW-RTR-EDGE(config)#ip access-list extended LAN-OUT
FW-RTR-EDGE(config-ext-nacl)#permit tcp 172.16.1.0 0.0.0.255 any eq 80
FW-RTR-EDGE(config-ext-nacl)#permit tcp 172.16.1.0 0.0.0.255 any eq 443
FW-RTR-EDGE(config-ext-nacl)#permit udp 172.16.1.0 0.0.0.255 any eq 53
FW-RTR-EDGE(config-ext-nacl)#deny ip 172.16.1.0 0.0.0.255 any log
FW-RTR-EDGE(config-ext-nacl)#exit

FW-RTR-EDGE(config)#interface gigabitEthernet0/0
FW-RTR-EDGE(config-if)#ip access-group LAN-OUT out
FW-RTR-EDGE(config-if)#exit

FW-RTR-EDGE#show access-lists
```

**Note:** Standard ACLs should be applied as close to the *destination* as possible; extended ACLs as close to the *source* as possible — that's why the standard ACL here sits on the server-facing interface and the extended one sits near the LAN's exit point.

