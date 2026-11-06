# Worksheet 5: VLANs, Trunking & Inter-VLAN Routing

**Scenario:** `DIST-SW-01` is a Layer 3 distribution switch. You need to build three VLANs, trunk to an access switch with a locked-down native VLAN, and route between VLANs using SVIs.

## 📝 Practice Worksheet

### Section 1: Creating VLANs

1. **Create VLAN 10 named `Sales`, VLAN 20 named `Engineering`, and VLAN 99 named `Native-Unused`:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   DIST-SW-01(config-vlan)# [ ??? ]
   DIST-SW-01(config-vlan)# [ ??? ]
   DIST-SW-01(config-vlan)# [ ??? ]
   DIST-SW-01(config-vlan)# [ ??? ]
   DIST-SW-01(config-vlan)# [ ??? ]
   ```

### Section 2: Trunk Configuration

2. **Configure interface `GigabitEthernet0/24` as a trunk, statically (no DTP negotiation), and set its native VLAN to 99:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   DIST-SW-01(config-if)# [ ??? ]
   DIST-SW-01(config-if)# [ ??? ]
   DIST-SW-01(config-if)# [ ??? ]
   ```

3. **Restrict the trunk to only carry VLANs 10, 20, and 99:**
   ```text
   DIST-SW-01(config-if)# [ ??? ]
   ```

### Section 3: Inter-VLAN Routing via SVIs

4. **Enable IP routing on this Layer 3 switch:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   ```

5. **Create SVI (switched virtual interface) for VLAN 10 with IP `10.10.10.1/24` and bring it up:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   DIST-SW-01(config-if)# [ ??? ]
   DIST-SW-01(config-if)# [ ??? ]
   ```

6. **Create SVI for VLAN 20 with IP `10.10.20.1/24` and bring it up:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   DIST-SW-01(config-if)# [ ??? ]
   DIST-SW-01(config-if)# [ ??? ]
   ```

### Section 4: Verification

7. **View VLAN-to-port assignments:**
   ```text
   DIST-SW-01# [ ??? ]
   ```

8. **View trunk status on all trunking interfaces:**
   ```text
   DIST-SW-01# [ ??? ]
   ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1a-b** | Create/name VLAN 10 | `vlan 10` / `name Sales` |
| **1c-d** | Create/name VLAN 20 | `vlan 20` / `name Engineering` |
| **1e-f** | Create/name VLAN 99 | `vlan 99` / `name Native-Unused` |
| **2a** | Select interface | `interface gigabitEthernet0/24` |
| **2b** | Set trunk mode | `switchport mode trunk` |
| **2c** | Disable DTP negotiation | `switchport nonegotiate` |
| **2d** | Set native VLAN | `switchport trunk native vlan 99` |
| **3** | Restrict allowed VLANs | `switchport trunk allowed vlan 10,20,99` |
| **4** | Enable L3 routing | `ip routing` |
| **5a** | Select SVI | `interface vlan 10` |
| **5b** | Assign IP | `ip address 10.10.10.1 255.255.255.0` |
| **5c** | Enable SVI | `no shutdown` |
| **6a** | Select SVI | `interface vlan 20` |
| **6b** | Assign IP | `ip address 10.10.20.1 255.255.255.0` |
| **6c** | Enable SVI | `no shutdown` |
| **7** | Show VLAN table | `show vlan brief` |
| **8** | Show trunk status | `show interfaces trunk` |

## 📜 Full Terminal Script Reference

```text
DIST-SW-01(config)#vlan 10
DIST-SW-01(config-vlan)#name Sales
DIST-SW-01(config-vlan)#exit
DIST-SW-01(config)#vlan 20
DIST-SW-01(config-vlan)#name Engineering
DIST-SW-01(config-vlan)#exit
DIST-SW-01(config)#vlan 99
DIST-SW-01(config-vlan)#name Native-Unused
DIST-SW-01(config-vlan)#exit

DIST-SW-01(config)#interface gigabitEthernet0/24
DIST-SW-01(config-if)#switchport mode trunk
DIST-SW-01(config-if)#switchport nonegotiate
DIST-SW-01(config-if)#switchport trunk native vlan 99
DIST-SW-01(config-if)#switchport trunk allowed vlan 10,20,99
DIST-SW-01(config-if)#exit

DIST-SW-01(config)#ip routing

DIST-SW-01(config)#interface vlan 10
DIST-SW-01(config-if)#ip address 10.10.10.1 255.255.255.0
DIST-SW-01(config-if)#no shutdown
DIST-SW-01(config-if)#exit

DIST-SW-01(config)#interface vlan 20
DIST-SW-01(config-if)#ip address 10.10.20.1 255.255.255.0
DIST-SW-01(config-if)#no shutdown
DIST-SW-01(config-if)#exit

DIST-SW-01(config)#exit
DIST-SW-01#show vlan brief
DIST-SW-01#show interfaces trunk
```

**Note:** Parking unused ports (and the trunk's native VLAN) in a dedicated, unrouted "black hole" VLAN like 99 is a common hardening practice against VLAN hopping attacks.

