# Switch Stacking Practice Worksheet & Answer Key

**Scenario:** You've physically stacked four Catalyst switches into `ACCESS-SW-10`. You want switch 1 to consistently win active-role elections, switch 3 renumbered to 4, and the stack's MAC address to stay stable across any future failover.

---

## 📝 Practice Worksheet

### Section 1: Viewing Stack Membership

1. **View all switch members, their roles, and priorities:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

### Section 2: Setting Priority

2. **From global config, set switch 1's priority to 15 (highest) so it's preferred as active:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 3: Renumbering

3. **Renumber switch 3 to switch number 4:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 4: Stable Stack MAC

4. **Make the stack's MAC address persist permanently across failovers:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 5: Verifying Stack Cabling

5. **View the status of the physical stack interconnect cables:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Show stack membership | `show switch` |
| **2** | Set priority | `switch 1 priority 15` |
| **3** | Renumber switch | `switch 3 renumber 4` |
| **4** | Persistent stack MAC | `stack-mac persistent timer 0` |
| **5** | Show stack cabling | `show switch stack-ports` |

---

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-10#show switch

ACCESS-SW-10#configure terminal
ACCESS-SW-10(config)#switch 1 priority 15
ACCESS-SW-10(config)#switch 3 renumber 4
ACCESS-SW-10(config)#stack-mac persistent timer 0
ACCESS-SW-10(config)#end

ACCESS-SW-10#show switch stack-ports
```

**Note:** A priority change doesn't trigger an immediate re-election while the current active switch is healthy — it only takes effect at the next election event (typically a reload). A renumber typically requires reloading that specific member to fully apply.
