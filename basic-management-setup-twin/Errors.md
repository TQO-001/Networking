# Twin — Errors

## Summary

- Total errors: **15**
- Suspected typos: **2**
- Wrong-mode transitions/errors are preserved as learning signals.

## Error log

1. **syntax** at 09:52:43 — `interface range fa 0/1-5`  
   - Mode: global configuration  
   - Typo suspected: No  
   - Expected an interface such as fa0/1, gi0/1, or vlan99.
2. **syntax** at 09:52:52 — `interface range fa 0/1-5`  
   - Mode: global configuration  
   - Typo suspected: No  
   - Expected an interface such as fa0/1, gi0/1, or vlan99.
3. **syntax** at 09:52:57 — `interface range Fa 0/1-5`  
   - Mode: global configuration  
   - Typo suspected: No  
   - Expected an interface such as fa0/1, gi0/1, or vlan99.
4. **syntax** at 09:53:01 — `interface range Fa0/1-5`  
   - Mode: global configuration  
   - Typo suspected: No  
   - Expected an interface such as fa0/1, gi0/1, or vlan99.
5. **syntax** at 09:55:55 — `ip address 192.168.10.2`  
   - Mode: interface mode  
   - Typo suspected: No  
   - Supported interface commands: description, switchport mode access, switchport access vlan <id>, no shutdown, shutdown.
6. **syntax** at 09:56:16 — `ip address 192.168.10.2 255.255.255.0`  
   - Mode: interface mode  
   - Typo suspected: Yes  
   - Supported interface commands: description, switchport mode access, switchport access vlan <id>, no shutdown, shutdown.
7. **syntax** at 09:59:26 — `20488`  
   - Mode: global configuration  
   - Typo suspected: No  
   - The RSA modulus prompt expects a number between 360 and 4096.
8. **incomplete** at 10:01:29 — `username Ind-it secret [user_password]`  
   - Mode: global configuration  
   - Typo suspected: No  
   - Expected: username <name> privilege 15 secret <password>
9. **syntax** at 10:02:45 — `ip ssh exec-timeout 60`  
   - Mode: global configuration  
   - Typo suspected: No  
   - Unrecognized "ip ssh" option.
10. **syntax** at 10:02:51 — `ip exec-timeout 60`  
   - Mode: global configuration  
   - Typo suspected: No  
   - Unrecognized "ip" command in this trainer. Try ip domain-name, ip default-gateway, or ip ssh.
11. **syntax** at 10:04:47 — `line console 0`  
   - Mode: lineVty mode  
   - Typo suspected: No  
   - "line" isn’t part of this drill’s line-config command set.
12. **incomplete** at 10:05:44 — `banner motd`  
   - Mode: global configuration  
   - Typo suspected: Yes  
   - banner motd needs a delimiter character, e.g. "banner motd #".
13. **syntax** at 10:09:59 — `copy running-config startup-config`  
   - Mode: global configuration  
   - Typo suspected: No  
   - "copy" isn’t part of this drill’s command set in global configuration mode.
14. **syntax** at 10:11:31 — `copy running-config startup-config`  
   - Mode: global configuration  
   - Typo suspected: No  
   - "copy" isn’t part of this drill’s command set in global configuration mode.
15. **syntax** at 10:11:51 — `copy running-config startup-config`  
   - Mode: global configuration  
   - Typo suspected: No  
   - "copy" isn’t part of this drill’s command set in global configuration mode.
