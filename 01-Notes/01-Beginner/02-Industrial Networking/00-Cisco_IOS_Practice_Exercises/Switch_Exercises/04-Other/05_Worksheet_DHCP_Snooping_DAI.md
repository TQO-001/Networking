# DHCP Snooping & Dynamic ARP Inspection Practice Worksheet & Answer Key

**Scenario:** `ACCESS-SW-10` has end users on VLANs 10 and 20, with a single uplink `GigabitEthernet0/1` toward the real DHCP server/gateway. You're locking down rogue DHCP servers and ARP spoofing on the access ports.

---

## 📝 Practice Worksheet

### Section 1: Enabling DHCP Snooping

1. **Enable DHCP snooping globally:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

2. **Enable DHCP snooping on VLANs 10 and 20:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 2: Trusting the Uplink

3. **Select the uplink interface `GigabitEthernet0/1` and mark it trusted for DHCP snooping:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 3: Rate-Limiting an Access Port

4. **On access port `FastEthernet0/10`, rate-limit DHCP packets to 15 per second:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 4: Dynamic ARP Inspection

5. **Enable DAI on VLANs 10 and 20:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

6. **Mark the same uplink `GigabitEthernet0/1` trusted for ARP inspection:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 5: Verification

7. **View DHCP snooping status and the binding table:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ACCESS-SW-10# [ ??? ]
   ```

8. **View DAI status:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Enable DHCP snooping globally | `ip dhcp snooping` |
| **2** | Enable on VLANs 10,20 | `ip dhcp snooping vlan 10,20` |
| **3a** | Select uplink | `interface gigabitEthernet0/1` |
| **3b** | Trust for DHCP snooping | `ip dhcp snooping trust` |
| **4a** | Select access port | `interface fastEthernet0/10` |
| **4b** | Rate-limit DHCP | `ip dhcp snooping limit rate 15` |
| **5** | Enable DAI on VLANs 10,20 | `ip arp inspection vlan 10,20` |
| **6a** | Select uplink | `interface gigabitEthernet0/1` |
| **6b** | Trust for ARP inspection | `ip arp inspection trust` |
| **7a** | Show snooping status | `show ip dhcp snooping` |
| **7b** | Show binding table | `show ip dhcp snooping binding` |
| **8** | Show DAI status | `show ip arp inspection` |

---

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-10(config)#ip dhcp snooping
ACCESS-SW-10(config)#ip dhcp snooping vlan 10,20

ACCESS-SW-10(config)#interface gigabitEthernet0/1
ACCESS-SW-10(config-if)#ip dhcp snooping trust
ACCESS-SW-10(config-if)#ip arp inspection trust
ACCESS-SW-10(config-if)#exit

ACCESS-SW-10(config)#interface fastEthernet0/10
ACCESS-SW-10(config-if)#ip dhcp snooping limit rate 15
ACCESS-SW-10(config-if)#exit

ACCESS-SW-10(config)#ip arp inspection vlan 10,20
ACCESS-SW-10(config)#exit

ACCESS-SW-10#show ip dhcp snooping
ACCESS-SW-10#show ip dhcp snooping binding
ACCESS-SW-10#show ip arp inspection
```

**Note:** DAI depends entirely on the DHCP snooping binding table to know which IP-to-MAC pairings are legitimate — enabling DAI without DHCP snooping running first (or on statically-addressed hosts with no DHCP lease) will block *all* ARP traffic from those hosts unless you configure ARP ACLs as an exception.
