# IOS File Management Practice Worksheet & Answer Key

**Scenario:** You're upgrading `ACCESS-SW-10` to a new IOS image. Before doing anything, you back up the running config; after the upgrade, you verify the new image, point boot at it, and clean up the old one once it's confirmed stable.

---

## 📝 Practice Worksheet

### Section 1: Inspecting Flash & Version

1. **List the contents of flash memory:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

2. **View the currently running IOS version and config register:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

### Section 2: Backing Up the Config

3. **Copy the running config to a TFTP server:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

### Section 3: Copying a New IOS Image to Flash

4. **Copy a new IOS image from a TFTP server into flash:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

### Section 4: Verifying the Image

5. **Verify the MD5 checksum of the copied image `c2960x-universalk9-mz.152-7.E5.bin`:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

### Section 5: Setting Boot Image & Reloading

6. **From global config, set the switch to boot from the new image on next reload:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ```

7. **Save the config and reload:**
   ```text
   ACCESS-SW-10(config)# [ ??? ]
   ACCESS-SW-10# [ ??? ]
   ACCESS-SW-10# [ ??? ]
   ```

### Section 6: Cleaning Up the Old Image

8. **Delete the old image `c2960x-universalk9-mz.152-6.E3.bin` from flash (after confirming the upgrade is stable):**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

### Section 7: Restoring a Config from Backup

9. **Restore a saved config `ACCESS-SW-10-backup.cfg` from TFTP into the running config:**
   ```text
   ACCESS-SW-10# [ ??? ]
   ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | List flash contents | `dir flash:` (or `show flash`) |
| **2** | Show version/config register | `show version` |
| **3** | Backup running config | `copy running-config tftp` |
| **4** | Copy image to flash | `copy tftp flash` |
| **5** | Verify image MD5 | `verify /md5 flash:c2960x-universalk9-mz.152-7.E5.bin` |
| **6** | Set boot image | `boot system flash:c2960x-universalk9-mz.152-7.E5.bin` |
| **7a** | Exit to EXEC | `end` |
| **7b** | Save config | `copy running-config startup-config` |
| **7c** | Reload | `reload` |
| **8** | Delete old image | `delete flash:c2960x-universalk9-mz.152-6.E3.bin` |
| **9** | Restore config from TFTP | `copy tftp running-config` |

---

## 📜 Full Terminal Script Reference

```text
ACCESS-SW-10#dir flash:
ACCESS-SW-10#show version

ACCESS-SW-10#copy running-config tftp
Address or name of remote host []? 10.10.1.20
Destination filename [ACCESS-SW-10-confg]? ACCESS-SW-10-backup.cfg

ACCESS-SW-10#copy tftp flash
Address or name of remote host []? 10.10.1.20
Source filename []? c2960x-universalk9-mz.152-7.E5.bin

ACCESS-SW-10#verify /md5 flash:c2960x-universalk9-mz.152-7.E5.bin

ACCESS-SW-10#configure terminal
ACCESS-SW-10(config)#boot system flash:c2960x-universalk9-mz.152-7.E5.bin
ACCESS-SW-10(config)#end
ACCESS-SW-10#copy running-config startup-config
ACCESS-SW-10#reload

ACCESS-SW-10#delete flash:c2960x-universalk9-mz.152-6.E3.bin

ACCESS-SW-10#copy tftp running-config
Address or name of remote host []? 10.10.1.20
Source filename []? ACCESS-SW-10-backup.cfg
```

**Note:** `copy tftp running-config` merges onto whatever's already running rather than replacing it — for a clean, from-scratch restore, copy into `startup-config` instead and reload, rather than into `running-config`.
