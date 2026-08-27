# Worksheet 1: Static Routing & Basic Router Setup

**Scenario:** You're bringing up a new branch router, `BR-RTR-01`, with two directly connected networks and a default route out to HQ.

## 📝 Practice Worksheet

### Section 1: Basic Interface Configuration

1. **Enter Privileged EXEC mode, then Global Configuration mode:**
   ```text
   Router> [ ??? ]
   Router# [ ??? ]
   ```

2. **Set the hostname to `BR-RTR-01`:**
   ```text
   Router(config)# [ ??? ]
   ```

3. **Configure `GigabitEthernet0/0` with IP `192.168.10.1`, subnet `255.255.255.0`, and bring it up:**
   ```text
   BR-RTR-01(config)# [ ??? ]
   BR-RTR-01(config-if)# [ ??? ]
   BR-RTR-01(config-if)# [ ??? ]
   ```

4. **Configure `GigabitEthernet0/1` with IP `192.168.20.1`, subnet `255.255.255.0`, and bring it up:**
   ```text
   BR-RTR-01(config)# [ ??? ]
   BR-RTR-01(config-if)# [ ??? ]
   BR-RTR-01(config-if)# [ ??? ]
   ```

### Section 2: Static & Default Routes

5. **Add a static route to remote network `172.16.30.0/24` via next-hop `192.168.20.2`:**
   ```text
   BR-RTR-01(config)# [ ??? ]
   ```

6. **Add a default route (gateway of last resort) pointing to `192.168.10.254`:**
   ```text
   BR-RTR-01(config)# [ ??? ]
   ```

7. **View the routing table:**
   ```text
   BR-RTR-01# [ ??? ]
   ```

8. **Save the configuration:**
   ```text
   BR-RTR-01# [ ??? ]
   ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1a** | Enter Privileged EXEC mode | `enable` |
| **1b** | Enter Global Config mode | `configure terminal` |
| **2** | Set hostname | `hostname BR-RTR-01` |
| **3a** | Select interface | `interface gigabitEthernet 0/0` |
| **3b** | Assign IP | `ip address 192.168.10.1 255.255.255.0` |
| **3c** | Enable interface | `no shutdown` |
| **4a** | Select interface | `interface gigabitEthernet 0/1` |
| **4b** | Assign IP | `ip address 192.168.20.1 255.255.255.0` |
| **4c** | Enable interface | `no shutdown` |
| **5** | Static route | `ip route 172.16.30.0 255.255.255.0 192.168.20.2` |
| **6** | Default route | `ip route 0.0.0.0 0.0.0.0 192.168.10.254` |
| **7** | View routing table | `show ip route` |
| **8** | Save config | `copy running-config startup-config` |

## 📜 Full Terminal Script Reference

```text
Router>enable
Router#configure terminal
Router(config)#hostname BR-RTR-01

BR-RTR-01(config)#interface gigabitEthernet 0/0
BR-RTR-01(config-if)#ip address 192.168.10.1 255.255.255.0
BR-RTR-01(config-if)#no shutdown
BR-RTR-01(config-if)#exit

BR-RTR-01(config)#interface gigabitEthernet 0/1
BR-RTR-01(config-if)#ip address 192.168.20.1 255.255.255.0
BR-RTR-01(config-if)#no shutdown
BR-RTR-01(config-if)#exit

BR-RTR-01(config)#ip route 172.16.30.0 255.255.255.0 192.168.20.2
BR-RTR-01(config)#ip route 0.0.0.0 0.0.0.0 192.168.10.254
BR-RTR-01(config)#exit

BR-RTR-01#show ip route
BR-RTR-01#copy running-config startup-config
```

