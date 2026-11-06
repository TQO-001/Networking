# Worksheet 2: Dynamic Routing — RIPv2

**Scenario:** `HQ-RTR-CORE` needs to share three connected networks with neighboring routers using RIP version 2, without advertising updates out its WAN-facing interface toward the ISP.

## 📝 Practice Worksheet

### Section 1: Entering RIP Configuration

1. **From global config, enter router configuration mode for RIP:**
   ```text
   HQ-RTR-CORE(config)# [ ??? ]
   ```

2. **Force RIP to use version 2 (instead of the default v1):**
   ```text
   HQ-RTR-CORE(config-router)# [ ??? ]
   ```

3. **Disable automatic summarization at classful network boundaries:**
   ```text
   HQ-RTR-CORE(config-router)# [ ??? ]
   ```

### Section 2: Advertising Networks

4. **Advertise the three directly connected classful networks `10.0.0.0`, `192.168.1.0`, and `192.168.2.0`:**
   ```text
   HQ-RTR-CORE(config-router)# [ ??? ]
   HQ-RTR-CORE(config-router)# [ ??? ]
   HQ-RTR-CORE(config-router)# [ ??? ]
   ```

### Section 3: Passive Interface & Verification

5. **Prevent RIP updates from being sent out the WAN interface `Serial0/0/0` (while still allowing that network to be advertised):**
   ```text
   HQ-RTR-CORE(config-router)# [ ??? ]
   ```

6. **View the current RIP configuration, timers, and networks:**
   ```text
   HQ-RTR-CORE# [ ??? ]
   ```

7. **View the routing table filtered to only RIP-learned routes:**
   ```text
   HQ-RTR-CORE# [ ??? ]
   ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Enter RIP router config | `router rip` |
| **2** | Force RIPv2 | `version 2` |
| **3** | Disable auto-summary | `no auto-summary` |
| **4a-c** | Advertise networks | `network 10.0.0.0` / `network 192.168.1.0` / `network 192.168.2.0` |
| **5** | Passive interface | `passive-interface serial0/0/0` |
| **6** | Show RIP config/state | `show ip protocols` |
| **7** | Show only RIP routes | `show ip route rip` |

## 📜 Full Terminal Script Reference

```text
HQ-RTR-CORE(config)#router rip
HQ-RTR-CORE(config-router)#version 2
HQ-RTR-CORE(config-router)#no auto-summary
HQ-RTR-CORE(config-router)#network 10.0.0.0
HQ-RTR-CORE(config-router)#network 192.168.1.0
HQ-RTR-CORE(config-router)#network 192.168.2.0
HQ-RTR-CORE(config-router)#passive-interface serial0/0/0
HQ-RTR-CORE(config-router)#exit

HQ-RTR-CORE#show ip protocols
HQ-RTR-CORE#show ip route rip
```

