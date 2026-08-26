# VTP Modes & Pruning Practice Worksheet & Answer Key

**Scenario:** `DIST-SW-01` will act as the VTP server for the `LaughTaleCorp` domain; downstream access switches will be VTP clients. You're also enabling pruning to cut down unnecessary trunk flooding.

---

## 📝 Practice Worksheet

### Section 1: Domain & Mode (Server)

1. **On `DIST-SW-01`, set the VTP domain name to `LaughTaleCorp`:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   ```

2. **Explicitly set VTP mode to server:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   ```

3. **Set a VTP password of `Str0ngVTPpass!`:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   ```

### Section 2: Client Switch Configuration

4. **On downstream switch `ACCESS-SW-11`, join the same domain and set VTP mode to client:**
   ```text
   ACCESS-SW-11(config)# [ ??? ]
   ACCESS-SW-11(config)# [ ??? ]
   ```

5. **Set the matching VTP password:**
   ```text
   ACCESS-SW-11(config)# [ ??? ]
   ```

### Section 3: Protecting a Standalone/Lab Switch

6. **On a lab switch `LAB-SW-01` that should never accept or push VLAN changes to the domain, set it to transparent mode:**
   ```text
   LAB-SW-01(config)# [ ??? ]
   ```

### Section 4: Pruning

7. **On `DIST-SW-01`, enable VTP pruning for the domain:**
   ```text
   DIST-SW-01(config)# [ ??? ]
   ```

### Section 5: Verification

8. **View VTP mode, domain, and configuration revision on `DIST-SW-01`:**
   ```text
   DIST-SW-01# [ ??? ]
   ```

---

## 🔑 Answer Key

| # | Prompt | Command |
|---|---|---|
| **1** | Set VTP domain | `vtp domain LaughTaleCorp` |
| **2** | Set mode server | `vtp mode server` |
| **3** | Set VTP password | `vtp password Str0ngVTPpass!` |
| **4a** | Join domain (client) | `vtp domain LaughTaleCorp` |
| **4b** | Set mode client | `vtp mode client` |
| **5** | Set matching password | `vtp password Str0ngVTPpass!` |
| **6** | Set mode transparent | `vtp mode transparent` |
| **7** | Enable pruning | `vtp pruning` |
| **8** | Show VTP status | `show vtp status` |

---

## 📜 Full Terminal Script Reference

```text
DIST-SW-01(config)#vtp domain LaughTaleCorp
DIST-SW-01(config)#vtp mode server
DIST-SW-01(config)#vtp password Str0ngVTPpass!
DIST-SW-01(config)#vtp pruning
DIST-SW-01(config)#exit
DIST-SW-01#show vtp status

ACCESS-SW-11(config)#vtp domain LaughTaleCorp
ACCESS-SW-11(config)#vtp mode client
ACCESS-SW-11(config)#vtp password Str0ngVTPpass!

LAB-SW-01(config)#vtp mode transparent
```

**Note:** A VTP server advertising a *higher* configuration revision number can silently overwrite the VLAN database on every other switch in the domain — regardless of which one has more VLANs configured. Before connecting an unfamiliar switch to a live trunk, check `show vtp status` first, or set it to transparent mode as a safety default.
