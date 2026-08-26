# SSH Hardening & Password Recovery Practice Worksheet & Answer Key

**Scenario:** `ACCESS-SW-10` needs SSH-only remote management with hardened timeouts, encrypted local credential storage, and you're documenting the password recovery procedure for when (not if) someone loses the enable password.

---

## 📝 Practice Worksheet

### Section 1: Preparing for SSH

1. **Set the domain name to `laughtale.local` (required before RSA key generation):**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

2. **Generate RSA keys (2048-bit):**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

3. **Restrict to SSH version 2:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 2: SSH Timeouts & Retries

4. **Set the SSH negotiation timeout to 60 seconds:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

5. **Limit authentication attempts per SSH session to 3:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 3: Local Users & VTY Restriction

6. **Create local user `netadmin`, privilege 15, secret `L0calAdm1nPW!`:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

7. **Enter VTY lines 0-15, restrict to SSH-only transport, and require local login:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ACCESS-SW-10(config-line)# [ ??? ]
   ACCESS-SW-10(config-line)# [ ??? ]
   ```

### Section 4: Encrypting Stored Passwords

8. **Enable service-level encryption of locally stored passwords:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

### Section 5: Password Recovery (ROMMON)

9. **From ROMMON, after interrupting boot, initialize flash and rename the startup config out of the way so the switch boots clean:**
   ```text
   switch: [ ??? ]
   switch: [ ??? ]
   ```

10. **Boot the switch:**
    ```text
    switch: [ ??? ]
    ```

11. **Once booted with no config, rename the config file back and load it into the running config:**
    ```text
    Switch# [ ??? ]
    Switch# [ ??? ]
    ```

12. **Reset the enable secret to `NewSecurePassword123`, save, and reload:**
    ```text
    Switch(config)# [ ??? ]
    Switch# [ ??? ]
    Switch# [ ??? ]
    ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Set domain name | `ip domain-name laughtale.local` |
| **2** | Generate RSA keys | `crypto key generate rsa` |
| **3** | Restrict to SSHv2 | `ip ssh version 2` |
| **4** | SSH negotiation timeout | `ip ssh time-out 60` |
| **5** | Auth retry limit | `ip ssh authentication-retries 3` |
| **6** | Create local user | `username netadmin privilege 15 secret L0calAdm1nPW!` |
| **7a** | Enter VTY lines | `line vty 0 15` |
| **7b** | SSH-only transport | `transport input ssh` |
| **7c** | Local login | `login local` |
| **8** | Encrypt stored passwords | `service password-encryption` |
| **9a** | Initialize flash | `flash_init` |
| **9b** | Rename config out of the way | `rename flash:config.text flash:config.text.old` |
| **10** | Boot the switch | `boot` |
| **11a** | Rename config back | `rename flash:config.text.old flash:config.text` |
| **11b** | Load into running config | `copy flash:config.text running-config` |
| **12a** | Reset enable secret | `enable secret NewSecurePassword123` |
| **12b** | Save config | `copy running-config startup-config` |
| **12c** | Reload | `reload` |

---

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-10(config)#ip domain-name laughtale.local
ACCESS-SW-10(config)#crypto key generate rsa
ACCESS-SW-10(config)#ip ssh version 2
ACCESS-SW-10(config)#ip ssh time-out 60
ACCESS-SW-10(config)#ip ssh authentication-retries 3

ACCESS-SW-10(config)#username netadmin privilege 15 secret L0calAdm1nPW!
ACCESS-SW-10(config)#line vty 0 15
ACCESS-SW-10(config-line)#transport input ssh
ACCESS-SW-10(config-line)#login local
ACCESS-SW-10(config-line)#exit

ACCESS-SW-10(config)#service password-encryption
ACCESS-SW-10(config)#end
ACCESS-SW-10#copy running-config startup-config
```

**Password recovery (ROMMON, separate physical procedure):**
```text
switch: flash_init
switch: load_helper
switch: dir flash:
switch: rename flash:config.text flash:config.text.old
switch: boot

Switch#rename flash:config.text.old flash:config.text
Switch#copy flash:config.text running-config
Switch(config)#enable secret NewSecurePassword123
Switch(config)#username netadmin secret NewLocalPassword123
Switch#copy running-config startup-config
Switch#reload
```

**Note:** Exact key combinations to interrupt boot and enter ROMMON vary by switch model — always confirm against that model's documentation before attempting recovery on production hardware.
