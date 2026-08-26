# Worksheet 6: Spanning Tree (Rapid PVST+) & EtherChannel

**Scenario:** `ACCESS-SW-02` connects to the distribution layer over two redundant links that you want bundled into one logical EtherChannel, and it also has end-user access ports that should skip the STP listening/learning delay.

## 📝 Practice Worksheet

### Section 1: Spanning Tree Mode & Priority

1. **Set the spanning-tree mode to Rapid PVST+:**
   ```text
   ACCESS-SW-02(config)# [ ??? ]
   ```

2. **Make this switch the root bridge for VLAN 10 by lowering its priority:**
   ```text
   ACCESS-SW-02(config)# [ ??? ]
   ```

### Section 2: PortFast & BPDU Guard on Access Ports

3. **On access port `FastEthernet0/5` (an end-user port, not a switch-to-switch link), enable PortFast:**
   ```text
   ACCESS-SW-02(config)# [ ??? ]
   ACCESS-SW-02(config-if)# [ ??? ]
   ```

4. **Enable BPDU Guard on that same port so it shuts down if it ever receives a BPDU:**
   ```text
   ACCESS-SW-02(config-if)# [ ??? ]
   ```

### Section 3: Building an EtherChannel

5. **Bundle interfaces `GigabitEthernet0/1` and `GigabitEthernet0/2` into Port-Channel 1 using LACP in active mode:**
   ```text
   ACCESS-SW-02(config)# [ ??? ]
   ACCESS-SW-02(config-if-range)# [ ??? ]
   ```

6. **Set the resulting Port-Channel 1 interface to trunk mode:**
   ```text
   ACCESS-SW-02(config)# [ ??? ]
   ACCESS-SW-02(config-if)# [ ??? ]
   ```

### Section 4: Verification

7. **View spanning-tree state and root bridge info for VLAN 10:**
   ```text
   ACCESS-SW-02# [ ??? ]
   ```

8. **View EtherChannel bundle status:**
   ```text
   ACCESS-SW-02# [ ??? ]
   ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Set Rapid PVST+ mode | `spanning-tree mode rapid-pvst` |
| **2** | Lower priority for root | `spanning-tree vlan 10 priority 4096` |
| **3a** | Select interface | `interface fastEthernet0/5` |
| **3b** | Enable PortFast | `spanning-tree portfast` |
| **4** | Enable BPDU Guard | `spanning-tree bpduguard enable` |
| **5a** | Select interface range | `interface range gigabitEthernet0/1-2` |
| **5b** | Bundle with LACP active | `channel-group 1 mode active` |
| **6a** | Select Port-Channel | `interface port-channel 1` |
| **6b** | Set trunk mode | `switchport mode trunk` |
| **7** | Show STP for VLAN 10 | `show spanning-tree vlan 10` |
| **8** | Show EtherChannel status | `show etherchannel summary` |

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-02(config)#spanning-tree mode rapid-pvst
ACCESS-SW-02(config)#spanning-tree vlan 10 priority 4096

ACCESS-SW-02(config)#interface fastEthernet0/5
ACCESS-SW-02(config-if)#spanning-tree portfast
ACCESS-SW-02(config-if)#spanning-tree bpduguard enable
ACCESS-SW-02(config-if)#exit

ACCESS-SW-02(config)#interface range gigabitEthernet0/1-2
ACCESS-SW-02(config-if-range)#channel-group 1 mode active
ACCESS-SW-02(config-if-range)#exit

ACCESS-SW-02(config)#interface port-channel 1
ACCESS-SW-02(config-if)#switchport mode trunk
ACCESS-SW-02(config-if)#exit
ACCESS-SW-02(config)#exit

ACCESS-SW-02#show spanning-tree vlan 10
ACCESS-SW-02#show etherchannel summary
```

**Note:** `mode active` (LACP) and `mode desirable` (PAgP) negotiate the bundle automatically; `mode on` forces it with no negotiation at all — mismatch a negotiating mode against `on` on the other end and the channel won't come up.

