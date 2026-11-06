# Worksheet 7: DHCP & NAT

**Scenario:** `EDGE-RTR-03` hands out addresses to an internal LAN via its own DHCP server, and translates that internal LAN out to the internet using PAT (NAT overload) on its single public IP, plus one static NAT mapping for an internal web server.

## 📝 Practice Worksheet

### Section 1: DHCP Server Pool

1. **Exclude addresses `192.168.30.1` through `192.168.30.10` from the DHCP pool (reserved for static devices):**
   ```text
   EDGE-RTR-03(config)# [ ??? ]
   ```

2. **Create a DHCP pool named `LAN-POOL` and enter its configuration:**
   ```text
   EDGE-RTR-03(config)# [ ??? ]
   ```

3. **Set the network/subnet the pool will lease from, the default router, and a DNS server:**
   ```text
   EDGE-RTR-03(dhcp-config)# [ ??? ]
   EDGE-RTR-03(dhcp-config)# [ ??? ]
   EDGE-RTR-03(dhcp-config)# [ ??? ]
   ```

### Section 2: NAT — Static Mapping for the Web Server

4. **Statically map internal web server `192.168.30.20` to public IP `203.0.113.10`:**
   ```text
   EDGE-RTR-03(config)# [ ??? ]
   ```

### Section 3: NAT — PAT (Overload) for the Rest of the LAN

5. **Create standard ACL `1` matching the internal LAN `192.168.30.0/24` (for use as the NAT source list):**
   ```text
   EDGE-RTR-03(config)# [ ??? ]
   ```

6. **Configure PAT, overloading ACL 1's traffic onto the address of interface `GigabitEthernet0/0`:**
   ```text
   EDGE-RTR-03(config)# [ ??? ]
   ```

### Section 4: Marking Inside/Outside Interfaces

7. **Mark `GigabitEthernet0/1` (LAN-facing) as the NAT inside interface, and `GigabitEthernet0/0` (internet-facing) as the NAT outside interface:**
   ```text
   EDGE-RTR-03(config)# [ ??? ]
   EDGE-RTR-03(config-if)# [ ??? ]
   EDGE-RTR-03(config)# [ ??? ]
   EDGE-RTR-03(config-if)# [ ??? ]
   ```

### Section 5: Verification

8. **View active NAT translations:**
   ```text
   EDGE-RTR-03# [ ??? ]
   ```

9. **View current DHCP address bindings:**
   ```text
   EDGE-RTR-03# [ ??? ]
   ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Exclude address range | `ip dhcp excluded-address 192.168.30.1 192.168.30.10` |
| **2** | Create DHCP pool | `ip dhcp pool LAN-POOL` |
| **3a** | Set network/subnet | `network 192.168.30.0 255.255.255.0` |
| **3b** | Set default router | `default-router 192.168.30.1` |
| **3c** | Set DNS server | `dns-server 8.8.8.8` |
| **4** | Static NAT mapping | `ip nat inside source static 192.168.30.20 203.0.113.10` |
| **5** | ACL for LAN source | `access-list 1 permit 192.168.30.0 0.0.0.255` |
| **6** | PAT/overload | `ip nat inside source list 1 interface gigabitEthernet0/0 overload` |
| **7a-b** | Mark inside interface | `interface gigabitEthernet0/1` / `ip nat inside` |
| **7c-d** | Mark outside interface | `interface gigabitEthernet0/0` / `ip nat outside` |
| **8** | Show NAT translations | `show ip nat translations` |
| **9** | Show DHCP bindings | `show ip dhcp binding` |

## 📜 Full Terminal Script Reference

```text
EDGE-RTR-03(config)#ip dhcp excluded-address 192.168.30.1 192.168.30.10
EDGE-RTR-03(config)#ip dhcp pool LAN-POOL
EDGE-RTR-03(dhcp-config)#network 192.168.30.0 255.255.255.0
EDGE-RTR-03(dhcp-config)#default-router 192.168.30.1
EDGE-RTR-03(dhcp-config)#dns-server 8.8.8.8
EDGE-RTR-03(dhcp-config)#exit

EDGE-RTR-03(config)#ip nat inside source static 192.168.30.20 203.0.113.10

EDGE-RTR-03(config)#access-list 1 permit 192.168.30.0 0.0.0.255
EDGE-RTR-03(config)#ip nat inside source list 1 interface gigabitEthernet0/0 overload

EDGE-RTR-03(config)#interface gigabitEthernet0/1
EDGE-RTR-03(config-if)#ip nat inside
EDGE-RTR-03(config-if)#exit

EDGE-RTR-03(config)#interface gigabitEthernet0/0
EDGE-RTR-03(config-if)#ip nat outside
EDGE-RTR-03(config-if)#exit
EDGE-RTR-03(config)#exit

EDGE-RTR-03#show ip nat translations
EDGE-RTR-03#show ip dhcp binding
```

**Note:** The static NAT entry for the web server always wins over the PAT pool for that one host — static and dynamic/PAT translations can coexist on the same router.

