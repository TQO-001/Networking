# Worksheet 3: Dynamic Routing — OSPF

**Scenario:** `DC-RTR-01` joins a single-area OSPF domain (Area 0) with three networks, a manually set router ID, and passive interfaces everywhere except the one link facing another router.

## 📝 Practice Worksheet

### Section 1: Starting OSPF & Router ID

1. **Start OSPF process ID `1`:**
   ```text
   DC-RTR-01(config)# [ ??? ]
   ```

2. **Manually set the OSPF router ID to `1.1.1.1`:**
   ```text
   DC-RTR-01(config-router)# [ ??? ]
   ```

### Section 2: Advertising Networks into Area 0

3. **Advertise `10.10.10.0/24`, `10.10.20.0/24`, and `10.10.30.0/30` into Area 0 (using wildcard masks):**
   ```text
   DC-RTR-01(config-router)# [ ??? ]
   DC-RTR-01(config-router)# [ ??? ]
   DC-RTR-01(config-router)# [ ??? ]
   ```

### Section 3: Passive Interfaces

4. **Make all interfaces passive by default:**
   ```text
   DC-RTR-01(config-router)# [ ??? ]
   ```

5. **Then re-enable OSPF hellos on the router-facing link `GigabitEthernet0/2` (the interface tied to the `10.10.30.0/30` network):**
   ```text
   DC-RTR-01(config-router)# [ ??? ]
   ```

### Section 4: Verification

6. **View OSPF neighbor adjacencies:**
   ```text
   DC-RTR-01# [ ??? ]
   ```

7. **View OSPF interface state and costs:**
   ```text
   DC-RTR-01# [ ??? ]
   ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Start OSPF process 1 | `router ospf 1` |
| **2** | Set router ID | `router-id 1.1.1.1` |
| **3a-c** | Advertise networks (wildcard) | `network 10.10.10.0 0.0.0.255 area 0` / `network 10.10.20.0 0.0.0.255 area 0` / `network 10.10.30.0 0.0.0.3 area 0` |
| **4** | Passive by default | `passive-interface default` |
| **5** | Un-passive the router link | `no passive-interface gigabitEthernet0/2` |
| **6** | Show OSPF neighbors | `show ip ospf neighbor` |
| **7** | Show OSPF interfaces | `show ip ospf interface brief` |

## 📜 Full Terminal Script Reference

```text
DC-RTR-01(config)#router ospf 1
DC-RTR-01(config-router)#router-id 1.1.1.1
DC-RTR-01(config-router)#network 10.10.10.0 0.0.0.255 area 0
DC-RTR-01(config-router)#network 10.10.20.0 0.0.0.255 area 0
DC-RTR-01(config-router)#network 10.10.30.0 0.0.0.3 area 0
DC-RTR-01(config-router)#passive-interface default
DC-RTR-01(config-router)#no passive-interface gigabitEthernet0/2
DC-RTR-01(config-router)#exit

DC-RTR-01#show ip ospf neighbor
DC-RTR-01#show ip ospf interface brief
```

**Note:** `router-id` changes only take effect after `clear ip ospf process` or a reload — worth remembering for troubleshooting.

