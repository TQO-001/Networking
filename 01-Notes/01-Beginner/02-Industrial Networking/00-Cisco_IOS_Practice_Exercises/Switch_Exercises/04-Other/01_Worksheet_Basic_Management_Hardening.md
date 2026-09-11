# Basic Switch Management & Console Hardening Practice Worksheet & Answer Key

**Scenario:** You're standardizing baseline settings on a freshly racked switch, `ACCESS-SW-10`, before any VLAN or security work begins.

---

## 📝 Practice Worksheet
*Fill in the missing commands (indicated by `[ ??? ]`) to complete each step.*

### Section 1: Hostname & Lookups

1. **Enter Privileged EXEC mode, then Global Configuration mode:**
   ```text
   Switch> [ ??? ]
   Switch# [ ??? ]
   ```

2. **Set the hostname to `ACCESS-SW-10`:**
   ```text
   Switch(config)# [ ??? ]
   ```

3. **Disable DNS lookups so mistyped commands fail instantly:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 2: Banners

4. **Configure a MOTD banner reading `AUTHORIZED ACCESS ONLY.` using `#` as the delimiter:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 3: Console Line Hardening

5. **Enter console line 0 configuration:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

6. **Enable synchronous logging so log messages don't interrupt typed commands:**
   ```text
   ACCESS-SW-10(config-line)# [ ??? ]
   ```

7. **Set the exec timeout to 10 minutes:**
   ```text
   ACCESS-SW-10(config-line)# [ ??? ]
   ```

8. **Set the command history buffer to 50 lines:**
   ```text
   ACCESS-SW-10(config-line)# [ ??? ]
   ```

### Section 4: Timestamps, NTP & Syslog

9. **Enable real-time (datetime) timestamps on log messages, with millisecond precision:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

10. **Point the switch to NTP server `10.10.1.5`:**
    ```text
    ACCESS-SW-10(config)# [ ??? ]
    ```

11. **Send logs to syslog server `10.10.1.6`, at the `informational` severity threshold and above:**
    ```text
    ACCESS-SW-10(config)# [ ??? ]
    ACCESS-SW-10(config)# [ ??? ]
    ```

### Section 5: Saving Configuration

12. **Exit to Privileged EXEC and save the active configuration to NVRAM:**
    ```text
    ACCESS-SW-10(config)# [ ??? ]
    ACCESS-SW-10# [ ??? ]
    ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1a** | Enter Privileged EXEC mode | `enable` |
| **1b** | Enter Global Config mode | `configure terminal` |
| **2** | Set hostname | `hostname ACCESS-SW-10` |
| **3** | Disable DNS lookups | `no ip domain-lookup` |
| **4** | MOTD banner | `banner motd #AUTHORIZED ACCESS ONLY.#` |
| **5** | Enter console line | `line console 0` |
| **6** | Synchronous logging | `logging synchronous` |
| **7** | Exec timeout (10 min) | `exec-timeout 10 0` |
| **8** | History size | `history size 50` |
| **9** | Real-time timestamps | `service timestamps log datetime msec` |
| **10** | NTP server | `ntp server 10.10.1.5` |
| **11a** | Syslog host | `logging host 10.10.1.6` |
| **11b** | Syslog severity threshold | `logging trap informational` |
| **12a** | Exit to EXEC | `end` |
| **12b** | Save config | `copy running-config startup-config` |

---

## 📜 Full Terminal Script Reference

```text
Switch>enable
Switch#configure terminal
Switch(config)#hostname ACCESS-SW-10
ACCESS-SW-10(config)#no ip domain-lookup

ACCESS-SW-10(config)#banner motd #AUTHORIZED ACCESS ONLY.#

ACCESS-SW-10(config)#line console 0
ACCESS-SW-10(config-line)#logging synchronous
ACCESS-SW-10(config-line)#exec-timeout 10 0
ACCESS-SW-10(config-line)#history size 50
ACCESS-SW-10(config-line)#exit

ACCESS-SW-10(config)#service timestamps log datetime msec
ACCESS-SW-10(config)#ntp server 10.10.1.5
ACCESS-SW-10(config)#logging host 10.10.1.6
ACCESS-SW-10(config)#logging trap informational

ACCESS-SW-10(config)#end
ACCESS-SW-10#copy running-config startup-config
```
