# Storm Control & Err-Disable Recovery Practice Worksheet & Answer Key

**Scenario:** Access port `FastEthernet0/10` on `ACCESS-SW-10` needs broadcast/multicast storm protection that shuts the port down on a violation, with automatic recovery after 5 minutes specifically for storm-control-caused shutdowns.

---

## 📝 Practice Worksheet

### Section 1: Storm Control Thresholds

1. **Select the interface:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

2. **Set broadcast storm control level to 70%:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

3. **Set multicast storm control level to 70%:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 2: Storm Control Action

4. **Set the action to shut the port down on violation:**
   ```text
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 3: Err-Disable Recovery

5. **Enable automatic err-disable recovery specifically for the storm-control cause:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

6. **Set the recovery interval to 300 seconds:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 4: Manual Recovery (No Auto-Recovery Configured)

7. **For a cause without auto-recovery enabled, manually recover an err-disabled port by cycling it:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ACCESS-SW-10(config-if)# [ ??? ]
   ACCESS-SW-10(config-if)# [ ??? ]
   ```

### Section 5: Verification

8. **View which err-disable causes have auto-recovery enabled, and the configured interval:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

9. **View which interfaces are currently err-disabled:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Select interface | `interface fastEthernet0/10` |
| **2** | Broadcast storm control | `storm-control broadcast level 70.00` |
| **3** | Multicast storm control | `storm-control multicast level 70.00` |
| **4** | Shutdown action | `storm-control action shutdown` |
| **5** | Auto-recovery for storm-control | `errdisable recovery cause storm-control` |
| **6** | Recovery interval | `errdisable recovery interval 300` |
| **7a-c** | Manual recovery | `interface fastEthernet0/10` / `shutdown` / `no shutdown` |
| **8** | Show recovery config | `show errdisable recovery` |
| **9** | Show err-disabled interfaces | `show interfaces status err-disabled` |

---

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-10(config)#interface fastEthernet0/10
ACCESS-SW-10(config-if)#storm-control broadcast level 70.00
ACCESS-SW-10(config-if)#storm-control multicast level 70.00
ACCESS-SW-10(config-if)#storm-control action shutdown
ACCESS-SW-10(config-if)#exit

ACCESS-SW-10(config)#errdisable recovery cause storm-control
ACCESS-SW-10(config)#errdisable recovery interval 300
ACCESS-SW-10(config)#exit

ACCESS-SW-10#show errdisable recovery
ACCESS-SW-10#show interfaces status err-disabled

ACCESS-SW-10#configure terminal
ACCESS-SW-10(config)#interface fastEthernet0/10
ACCESS-SW-10(config-if)#shutdown
ACCESS-SW-10(config-if)#no shutdown
```

**Note:** Err-disable recovery is configured per-cause, not globally — enabling it for `storm-control` doesn't affect how the switch handles a port shut down by `bpduguard` or a port-security violation. Decide auto-recovery on a cause-by-cause basis.
