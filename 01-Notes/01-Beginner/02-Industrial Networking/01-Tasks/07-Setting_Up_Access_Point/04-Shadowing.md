# Shadow Report: Moxa Wireless Bridge Installation at Foil Mill

| Field        | Detail                                              |
| ------------ | --------------------------------------------------- |
| **Shadowed** | Mr Brown                                            |
| **Task**     | Installing Moxa Access Points at Foil Mill          |
| **My role**  | Tasked with the setup, with Mr Brown guiding        |
| **Location** | Foil Mill (Slave in server rack, Master at the HMI) |
| **Date**     | 13 Oct 2026                                         |
| **Status**   | In progress, awaiting commissioning support         |

---

## 1. Progress Tracker
- [x] Issue identified (Data Eagle cannot carry multiple VLANs)
- [x] Alternative solution proposed (Moxa industrial wireless)
- [x] Slave installed in server rack
- [x] Test access port created (Gi 1/6)
- [x] Master installed at HMI
- [x] Master and Slave swapped to fit power constraints
- [x] Initial link test (devices could ping each other)
- [ ] Resolve intermittent connection drops
- [ ] Resolve network address range issue
- [ ] Confirm support date with Morris
- [ ] Complete installation and commissioning
- [ ] Move HMI back onto the OT network

---

## 2. Background: The Initial Issue
The existing **Data Eagle** industrial radio system cannot support the required VLANs simultaneously across the wireless bridge.

**Impact:** The HMI had to be connected to the **commercial network** instead of the **OT network**. This does not align with OT network segmentation requirements.

**Action taken:** Mr Brown contacted **Moxa** about an alternative industrial wireless solution.

**Proposed equipment:** Industrial Wi-Fi 4 (802.11n) Wireless AP / Bridge / Client, EU.

---

## 3. What I Did On Site
1. Arrived at Foil Mill with Mr Brown.
2. Installed the **Slave** at the bottom, in the server rack.
3. Created an additional access port (**Gi 1/6**) on the switch for testing purposes.
4. Went up to the HMI to connect the **Master**.
5. Tested the link with both units set up.

### Hardware note: Master and Slave swap
The Master was installed in a **patch panel**, so it did not need a power supply. The Slave, however, **required** a power supply. Because of this, the two units had to be **swapped** so each sat where its power requirement could be met.

_(This was not in my earlier documentation.)_

---

## 4. Issues Encountered
### Issue 1: Network address range
Theaddress range we were using was said to belong **only to routers and firewalls**, so it was not appropriate for these devices.

### Issue 2: Intermittent connectivity
Onc both units were set up, they could **initially ping each other**. After a while the devices **stopped communicating** (pings failed), then **reconnected on their own** without intervention.

---

## 5. Current Outcome
The proposed Moxa industrial wireless bridge has been tested and is **meeting the requirement** to restore the HMI connection to the correctly segmented OT network.
