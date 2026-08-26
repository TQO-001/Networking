# Voice VLAN & Advanced Port Configuration Practice Worksheet & Answer Key

**Scenario:** Port `FastEthernet0/10` on `ACCESS-SW-10` connects to a desk phone with a PC daisy-chained behind it. The PC needs data VLAN 10; the phone needs voice VLAN 110, with its QoS markings trusted.

---

## 📝 Practice Worksheet

### Section 1: Data VLAN (for the PC)

1. **Select the interface and set it to access mode:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

2. **Assign the access (data) VLAN 10:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 2: Voice VLAN (for the phone)

3. **Assign voice VLAN 110 on the same interface:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 3: QoS Trust

4. **Trust QoS markings only from a verified Cisco IP phone:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

5. **Trust CoS markings on the port:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 4: PortFast

6. **Enable PortFast on this edge port:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 5: Verification

7. **View the switchport's access/voice VLAN assignment:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1a** | Select interface | `interface fastEthernet0/10` |
| **1b** | Set access mode | `switchport mode access` |
| **2** | Assign data VLAN | `switchport access vlan 10` |
| **3** | Assign voice VLAN | `switchport voice vlan 110` |
| **4** | Trust verified Cisco phone | `mls qos trust device cisco-phone` |
| **5** | Trust CoS | `mls qos trust cos` |
| **6** | Enable PortFast | `spanning-tree portfast` |
| **7** | Show switchport detail | `show interfaces fastEthernet0/10 switchport` |

---

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-10(config)#interface fastEthernet0/10
ACCESS-SW-10(config-if)#switchport mode access
ACCESS-SW-10(config-if)#switchport access vlan 10
ACCESS-SW-10(config-if)#switchport voice vlan 110
ACCESS-SW-10(config-if)#mls qos trust device cisco-phone
ACCESS-SW-10(config-if)#mls qos trust cos
ACCESS-SW-10(config-if)#spanning-tree portfast
ACCESS-SW-10(config-if)#exit

ACCESS-SW-10#show interfaces fastEthernet0/10 switchport
```

**Note:** The phone and PC share one physical cable and switchport, but stay logically separated — the PC's traffic rides untagged on the access VLAN, the phone's traffic gets 802.1Q-tagged onto the voice VLAN, and the phone itself learns to do this tagging via a CDP message from the switch.
