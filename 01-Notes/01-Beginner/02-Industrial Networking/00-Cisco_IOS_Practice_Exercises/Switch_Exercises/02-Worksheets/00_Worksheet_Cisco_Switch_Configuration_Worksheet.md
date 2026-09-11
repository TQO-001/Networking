# Cisco IOS Switch Configuration Practice Worksheet & Answer Key

This study guide and fill-in-the-blank practice sheet is designed to help you practice and memorize essential Cisco IOS switch initial setup commands.

---

## 📝 Practice Worksheet
*Fill in the missing commands (indicated by `[ ??? ]`) to complete each step of the switch configuration.*

### Section 1: Initial Setup & Management IP

1. **Enter Privileged EXEC mode:**
   ```cisco
   Switch> [ ??? ]
   ```

2. **Enter Global Configuration mode:**
   ```cisco
   Switch# [ ??? ]
   ```

3. **Access interface VLAN 1 to assign management IP `10.10.22.110` with subnet `255.255.255.0`:**
   ```cisco
   Switch(config)# [ ??? ]
   Switch(config-if)# [ ??? ]
   ```

4. **Return to global config mode and configure the default gateway `10.10.22.1`:**
   ```cisco
   Switch(config-if)# [ ??? ]
   Switch(config)# [ ??? ]
   ```

---

### Section 2: Device Naming & Line Security

5. **Set the hostname to `IND-SW-CD-PP` and domain name to `hulamin.co.za`:**
   ```cisco
   Switch(config)# [ ??? ]
   IND-SW-CD-PP(config)# [ ??? ]
   ```

6. **Secure VTY lines `0` to `15` with password `BigSecretDon'tT3ll@ny1`:**
   ```cisco
   IND-SW-CD-PP(config)# [ ??? ]
   IND-SW-CD-PP(config-line)# [ ??? ]
   ```

7. **Secure `console 0` with password `BigSecretForConsoleDon'tT3ll@ny1`:**
   ```cisco
   IND-SW-CD-PP(config-line)# exit
   IND-SW-CD-PP(config)# [ ??? ]
   IND-SW-CD-PP(config-line)# [ ??? ]
   ```

8. **Set the Privileged EXEC encrypted password to `Top$ecretPrivEXECpassWORD`:**
   ```cisco
   IND-SW-CD-PP(config-line)# exit
   IND-SW-CD-PP(config)# [ ??? ]
   ```

---

### Section 3: SSH Hardening

9. **Generate RSA keys (using default 2048-bit size) and enforce SSH Version 2:**
   ```cisco
   IND-SW-CD-PP(config)# [ ??? ]
   IND-SW-CD-PP(config)# [ ??? ]
   ```

10. **Restrict VTY lines `0 5` to SSH only and require local database authentication:**
    ```cisco
    IND-SW-CD-PP(config)# [ ??? ]
    IND-SW-CD-PP(config-line)# [ ??? ]
    IND-SW-CD-PP(config-line)# [ ??? ]
    ```

---

### Section 4: VLAN Creation & Port Configuration

11. **Create VLAN 2 and name it `Gijima`:**
    ```cisco
    IND-SW-CD-PP(config)# [ ??? ]
    IND-SW-CD-PP(config-vlan)# [ ??? ]
    ```

12. **Assign FastEthernet ports `1/2` through `1/4` as access ports on VLAN 2:**
    ```cisco
    IND-SW-CD-PP(config)# [ ??? ]
    IND-SW-CD-PP(config-if-range)# [ ??? ]
    IND-SW-CD-PP(config-if-range)# [ ??? ]
    ```

13. **Configure GigabitEthernet port `1/2` as a trunk port:**
    ```cisco
    IND-SW-CD-PP(config)# [ ??? ]
    IND-SW-CD-PP(config-if)# [ ??? ]
    ```

---

### Section 5: Saving Configuration

14. **Save the active configuration from RAM to NVRAM:**
    ```cisco
    IND-SW-CD-PP# [ ??? ]
    ```

---

## 🔑 Answer Key

Below are the exact commands required for each question.

| # | Prompt | Command |
|---|---|---|
| **1** | Enter Privileged EXEC mode | `enable` |
| **2** | Enter Global Configuration mode | `config t` *(or `configure terminal`)* |
| **3a** | Access VLAN 1 Interface | `interface vlan 1` |
| **3b** | Assign IP address & Subnet | `ip address 10.10.22.110 255.255.255.0` |
| **4a** | Exit interface mode | `exit` |
| **4b** | Set Default Gateway | `ip default-gateway 10.10.22.1` |
| **5a** | Set Hostname | `hostname IND-SW-CD-PP` |
| **5b** | Set Domain Name | `ip domain-name hulamin.co.za` |
| **6a** | Enter VTY Lines 0-15 | `line vty 0 15` |
| **6b** | Set VTY Password | `password BigSecretDon'tT3ll@ny1` |
| **7a** | Enter Console Line 0 | `line console 0` |
| **7b** | Set Console Password | `password BigSecretForConsoleDon'tT3ll@ny1` |
| **8** | Set Privileged EXEC Password | `enable secret Top$ecretPrivEXECpassWORD` |
| **9a** | Generate RSA Keys | `crypto key generate rsa` |
| **9b** | Enforce SSH Version 2 | `ip ssh version 2` |
| **10a** | Select VTY Lines 0-5 | `line vty 0 5` |
| **10b** | Restrict input to SSH | `transport input ssh` |
| **10c** | Require local database login | `login local` |
| **11a** | Create VLAN 2 | `vlan 2` |
| **11b** | Name VLAN | `name Gijima` |
| **12a** | Select Interface Range | `interface range fastEthernet 0/5-7` |
| **12b** | Set Mode to Access | `switchport mode access` |
| **12c** | Assign to VLAN 2 | `switchport access vlan 2` |
| **13a** | Select Interface | `interface fastEthernet 0/2` |
| **13b** | Set Mode to Trunk | `switchport mode trunk` |
| **14** | Save Configuration to NVRAM | `copy running-config startup-config` *(or `write memory` / `wr`)* |

---

## 📜 Full Terminal Script Reference

```cisco
Switch>enable
Switch#config t
Switch(config)#interface vlan 1
Switch(config-if)#ip address 10.10.22.110 255.255.255.0
Switch(config-if)#exit
Switch(config)#ip default-gateway 10.10.22.1

Switch(config)#hostname IND-SW-CD-PP
IND-SW-CD-PP(config)#ip domain-name hulamin.co.za

IND-SW-CD-PP(config)#line vty 0 15
IND-SW-CD-PP(config-line)#password BigSecretDon'tT3ll@ny1
IND-SW-CD-PP(config-line)#exit

IND-SW-CD-PP(config)#line console 0
IND-SW-CD-PP(config-line)#password BigSecretForConsoleDon'tT3ll@ny1
IND-SW-CD-PP(config-line)#exit

IND-SW-CD-PP(config)#enable secret Top$ecretPrivEXECpassWORD

IND-SW-CD-PP(config)#crypto key generate rsa
IND-SW-CD-PP(config)#ip ssh version 2

IND-SW-CD-PP(config)#line vty 0 5
IND-SW-CD-PP(config-line)#transport input ssh
IND-SW-CD-PP(config-line)#login local
IND-SW-CD-PP(config-line)#exit

IND-SW-CD-PP(config)#vlan 2
IND-SW-CD-PP(config-vlan)#name Gijima
IND-SW-CD-PP(config-vlan)#exit

IND-SW-CD-PP(config)#interface range fastEthernet 0/5-7
IND-SW-CD-PP(config-if-range)#switchport mode access
IND-SW-CD-PP(config-if-range)#switchport access vlan 2
IND-SW-CD-PP(config-if-range)#exit

IND-SW-CD-PP(config)#interface fastEthernet 0/2
IND-SW-CD-PP(config-if)#switchport mode trunk
IND-SW-CD-PP(config-if)#exit
IND-SW-CD-PP(config)#exit

IND-SW-CD-PP#copy running-config startup-config
```
