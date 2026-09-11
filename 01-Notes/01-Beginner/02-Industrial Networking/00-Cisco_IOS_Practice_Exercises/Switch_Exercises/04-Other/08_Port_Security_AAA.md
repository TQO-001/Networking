# Worksheet 8: Port Security & AAA

**Scenario:** `ACCESS-SW-05` needs each access port locked to a small, learned set of MAC addresses (shutting the port down on violation), and administrative logins should authenticate against a local username database as a fallback for AAA — set up here using the local method list.

## 📝 Practice Worksheet

### Section 1: Port Security

1. **On access port `FastEthernet0/8`, enable port security:**
   ```text
   ACCESS-SW-05(config)# [ ??? ]
   ACCESS-SW-05(config-if)# [ ??? ]
   ```

2. **Set the maximum number of allowed MAC addresses on this port to 2:**
   ```text
   ACCESS-SW-05(config-if)# [ ??? ]
   ```

3. **Have the switch dynamically learn and "stick" the allowed MAC addresses into the running config:**
   ```text
   ACCESS-SW-05(config-if)# [ ??? ]
   ```

4. **Set the violation action to `shutdown` (err-disable the port on a violation):**
   ```text
   ACCESS-SW-05(config-if)# [ ??? ]
   ```

### Section 2: Local Users & AAA

5. **Create a local user `netadmin` with privilege level 15 and an encrypted secret `L0calAdm1nPW!`:**
   ```text
   ACCESS-SW-05(config)# [ ??? ]
   ```

6. **Enable the AAA subsystem:**
   ```text
   ACCESS-SW-05(config)# [ ??? ]
   ```

7. **Configure the default login authentication method list to use the local database:**
   ```text
   ACCESS-SW-05(config)# [ ??? ]
   ```

8. **Apply `login authentication default` on VTY lines `0 4` (so remote logins use that method list):**
   ```text
   ACCESS-SW-05(config)# [ ??? ]
   ACCESS-SW-05(config-line)# [ ??? ]
   ```

### Section 3: Verification

9. **View port security status and violation counts on `FastEthernet0/8`:**
   ```text
   ACCESS-SW-05# [ ??? ]
   ```

10. **If a port has err-disabled due to a security violation, re-enable it:**
    ```text
    ACCESS-SW-05(config)# [ ??? ]
    ACCESS-SW-05(config-if)# [ ??? ]
    ACCESS-SW-05(config-if)# [ ??? ]
    ```

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1a** | Select interface | `interface fastEthernet0/8` |
| **1b** | Enable port security | `switchport port-security` |
| **2** | Set max MACs | `switchport port-security maximum 2` |
| **3** | Sticky learning | `switchport port-security mac-address sticky` |
| **4** | Violation action | `switchport port-security violation shutdown` |
| **5** | Create local user | `username netadmin privilege 15 secret L0calAdm1nPW!` |
| **6** | Enable AAA | `aaa new-model` |
| **7** | Default login method list (local) | `aaa authentication login default local` |
| **8a-b** | Apply on VTY lines | `line vty 0 4` / `login authentication default` |
| **9** | Show port security | `show port-security interface fastEthernet0/8` |
| **10a-c** | Recover err-disabled port | `interface fastEthernet0/8` / `shutdown` / `no shutdown` |

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-05(config)#interface fastEthernet0/8
ACCESS-SW-05(config-if)#switchport port-security
ACCESS-SW-05(config-if)#switchport port-security maximum 2
ACCESS-SW-05(config-if)#switchport port-security mac-address sticky
ACCESS-SW-05(config-if)#switchport port-security violation shutdown
ACCESS-SW-05(config-if)#exit

ACCESS-SW-05(config)#username netadmin privilege 15 secret L0calAdm1nPW!
ACCESS-SW-05(config)#aaa new-model
ACCESS-SW-05(config)#aaa authentication login default local

ACCESS-SW-05(config)#line vty 0 4
ACCESS-SW-05(config-line)#login authentication default
ACCESS-SW-05(config-line)#exit
ACCESS-SW-05(config)#exit

ACCESS-SW-05#show port-security interface fastEthernet0/8

ACCESS-SW-05#configure terminal
ACCESS-SW-05(config)#interface fastEthernet0/8
ACCESS-SW-05(config-if)#shutdown
ACCESS-SW-05(config-if)#no shutdown
```

**Note:** `switchport port-security` requires the port to already be a static access port (`switchport mode access`) — it won't enable on a dynamic/trunk port. In production, a RADIUS or TACACS+ server would normally sit ahead of `local` in the method list (e.g. `aaa authentication login default group radius local`), with `local` as the fallback.

