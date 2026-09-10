# Sun Daddy Network — Fix-It & Finish Guide
Read this alongside `Sun-Daddy-Network-Documentation-FIXED.md` — that file is the reference; this file is the order you actually do things in, with exact keys/commands. Check each box as you go. Don't skip ahead — several steps only work because of the step before them.

**Golden rule for this whole guide:** you always keep the direct cable between your laptop and the server's `vmnic0` port physically connected and never touch its settings until Part E. That cable is your safety net — as long as it's untouched, you cannot fully lock yourself out again, no matter what you break on the switches or pfSense.

---

## Part A — Confirm where you actually are right now
Your notes show different IPs used at different points (`192.168.10.2`, `192.168.110.2`). Don't assume — check.

- [x] On your laptop, open the browser and try `https://192.168.10.2`
- [x] If that doesn't load, try `https://192.168.110.2`
- [x] Whichever one loads, log in (root + your password). That confirms which IP `vmk0` is currently using — call this **CURRENT_IP** for the rest of this section.
- [x] In the ESXi Host Client: **Networking → Port groups → Management Network → Edit settings**. Note down what **VLAN ID** it currently shows. Call this **CURRENT_VLAN**.
- [x] In **Networking → Virtual switches → vSwitch0**, note which physical NICs (vmnic0, vmnic1, or both) are listed as uplinks.

You now know your real starting point. Keep this written down somewhere — you'll need it for Part E.

---

## Part B — Physical cabling
- [ ] Confirm laptop is connected directly by cable to the server's `vmnic0` NIC port (this should already be true — this is your current management path).
- [ ] Run a second cable from the server's `vmnic1` NIC port into **Switch 1, port Gi1/4**.
- [ ] Run a cable from **Switch 1, port Gi1/10** into **Switch 2, port Gi1/1**.
- [ ] Leave your laptop's second connection (NIC B / USB-Ethernet adapter) unplugged for now — you'll connect it to **Switch 2, port Fa1/1** in Part J.

---

## Part C — Configure Switch 1
- [ ] Connect to SW1 (console cable, or however you've been accessing it).
- [ ] Paste the **entire Switch 1 block** from Section 3.2 of the FIXED documentation, one line at a time or as a full paste.
- [ ] If you hit `% Invalid input` on any `switchport trunk encapsulation dot1q` line — **you won't**, because that line has already been removed from the corrected config. If you see that error anywhere else, delete that line and continue; these switches don't need it.
- [ ] Run `do show vlan brief` — confirm VLANs `10`, `11`, and `110` all show **active**.
- [ ] Run `do show ip interface brief` — confirm `Vlan110` shows `192.168.110.254` and status `up / up`.
- [ ] `copy running-config startup-config`, press Enter to accept the default filename.

## Part D — Configure Switch 2
- [ ] Connect to SW2.
- [ ] Paste the **entire Switch 2 block** from Section 3.3 of the FIXED documentation.
- [ ] Run `do show vlan brief` — confirm `10`, `11`, `110` all active, and `Fa1/1` appears under VLAN 10 (not 11).
- [ ] Run `do show ip interface brief` — confirm `Vlan110` shows `192.168.110.253`, status `up / up`.
- [ ] `copy running-config startup-config`.

## Part E — Verify the switches can talk to each other
- [ ] On SW1: `show interfaces trunk` — confirm `Gi1/10` is listed, mode trunk, allowed VLANs include 10, 11, 110.
- [ ] On SW2: `show interfaces trunk` — confirm `Gi1/1` is listed the same way.
- [ ] On SW1: `ping 192.168.110.253`
  - [ ] Success rate shows 80–100% (`!!!!!`) → trunk is working, move to Part F.
  - [ ] 0% success → check the physical cable between Gi1/10 and Gi1/1 is fully seated on both ends, and that neither port shows `administratively down` (`show ip interface brief` — if it does, run `no shutdown` on that interface again).

---

## Part F — Rebuild ESXi networking (the part that kept locking you out)
This is the step where earlier attempts went wrong, because vmnic0 (your laptop link) and vmnic1 (switch link) were both dumped onto the same vSwitch0 with no VLAN separation. We're going to split them cleanly and never let them touch again.

- [ ] In ESXi Host Client (still using your current working URL from Part A): **Networking → Virtual switches → vSwitch0 → Edit settings**.
- [ ] Under **Uplinks**, remove `vmnic1` if it's listed there (leave `vmnic0` — do NOT remove vmnic0). Save.
- [ ] **Networking → Virtual switches → Add standard virtual switch.**
  - Name: `vSwitch1`
  - Uplink 1: `vmnic1`
  - Click **Add**.
- [ ] Select `vSwitch1` → **Edit settings** → under **Security**, set **Promiscuous mode**, **MAC address changes**, and **Forged transmits** all to **Accept**. Save.
- [ ] **Networking → Port groups → Add port group**, repeat three times:
  1. Name `PG_VLAN10`, VLAN ID `10`, Virtual switch `vSwitch1`
  2. Name `PG_VLAN11`, VLAN ID `11`, Virtual switch `vSwitch1`
  3. Name `PG_TRUNK_vFW`, VLAN ID `4095`, Virtual switch `vSwitch1`
- [ ] Leave the existing **Management Network** port group exactly where it is (attached to vSwitch0, vmnic0) — **do not edit its VLAN ID in this part.**
- [ ] If your **CURRENT_IP** from Part A was `192.168.10.2` (not `192.168.110.2` yet): go to **Networking → VMkernel NICs → vmk0 → Edit settings**, change the static IPv4 address to `192.168.110.2 /24`, no gateway. Save.
  - [ ] Your browser session will drop. Reload the page at `https://192.168.110.2` (not the old address). Log back in. This confirms `vmk0` moved correctly.
- [ ] Set your laptop's **NIC A** (the one on the direct cable) to a static IP `192.168.110.3 /24`, no gateway, so it keeps matching the ESXi host's new address. (Network settings on your laptop → the adapter connected to the server → set IPv4 manually.)
- [ ] Confirm you can still reach `https://192.168.110.2` from your laptop after this change. **If yes — you now have a management path that nothing else in this guide can break.**

---

## Part G — Move the VMs and vFW onto the new port groups
- [ ] VM1 → Edit Settings → Network Adapter → change to `PG_VLAN10`. Save. Power on if not already.
- [ ] VM2 → Edit Settings → Network Adapter → change to `PG_VLAN10`. Save.
- [ ] VM3 → Edit Settings → Network Adapter → change to `PG_VLAN11`. Save.
- [ ] If pfSense (vFW) doesn't exist yet, create it now (Section 6.1 of the FIXED doc): new VM, OS family **Other**, version **FreeBSD (64-bit)**, mount the pfSense installer ISO, run the installer.
- [ ] vFW's single Network Adapter → set to `PG_TRUNK_vFW`. Save.
- [ ] Inside VM1/VM2, set static IP `192.168.10.10` / `192.168.10.11`, mask `/24`, gateway `192.168.10.1` (this gateway won't respond yet — that's expected, pfSense isn't configured until Part H).
- [ ] Inside VM3, set static IP `192.168.11.10`, mask `/24`, gateway `192.168.11.1`.

---

## Part H — Configure pfSense
- [ ] Open the pfSense VM console directly in ESXi (not a browser yet — it has no usable IP set up).
- [ ] At the console menu, choose the option to **Assign Interfaces**.
- [ ] When asked "Configure VLANs now?" — type **y**.
- [ ] Parent interface for VLANs: `em1`.
- [ ] Enter VLAN tag `10`, then `11`, then `110` (one at a time, following the prompts) — this creates `em1.10`, `em1.11`, `em1.110`.
- [ ] When asked for the **WAN** interface, you can leave it blank/skip, or assign `em0` — either way you won't be using it.
- [ ] When asked for the **LAN** interface, enter `em1.10` (**not** plain `em1`).
- [ ] Skip/decline any further optional interfaces at the console — you'll add OPT1 and OPT2 from the web GUI next.
- [ ] Console banner should now show `LAN (lan) -> em1.10 -> v4: 192.168.10.1/24` (pfSense assigns this automatically once you picked em1.10 as LAN, or you may need to set the IP manually at the console the same way — follow the prompts).
- [ ] From VM1's console (temporarily use VM1's own console in ESXi if VM1 doesn't have working network yet), or once VM1 can reach `192.168.10.1`, browse to `https://192.168.10.1` and log into the pfSense WebGUI.
- [ ] **Interfaces → Interface Assignments**: add `VLAN 11 on em1` as **OPT1**, and `VLAN 110 on em1` as **OPT2**. Save.
- [ ] **Interfaces → OPT1**: check **Enable interface**, description `VLAN11`, IPv4 type **Static**, address `192.168.11.1/24`. Save, **Apply Changes**.
- [ ] **Interfaces → OPT2**: check **Enable interface**, description `VLAN110_MGMT`, IPv4 type **Static**, address `192.168.110.1/24`. Save, **Apply Changes**.
- [ ] **Interfaces → LAN**: confirm it shows `em1.10` (not plain `em1`) and `192.168.10.1/24`. If it shows plain `em1`, go back to **Interface Assignments** and change LAN's **Network port** dropdown to `VLAN 10 on em1 - lan`, then Save.

## Part I — Firewall rules (nothing passes until you add these)
For each of **LAN**, **OPT1**, **OPT2**:
- [ ] **Firewall → Rules → [tab for that interface] → Add**
- [ ] Action **Pass**, Address Family **IPv4**, Protocol **Any**, Source **Any**, Destination **Any**
- [ ] **Save**
- [ ] After all three are added: **Apply Changes** once.

---

## Part J — Connect and configure the laptop's second link
- [ ] Plug your laptop's second NIC (built-in Ethernet if free, or a USB-Ethernet adapter) into **Switch 2, port Fa1/1**.
- [ ] Set that adapter's IPv4 manually: address `192.168.10.50`, mask `255.255.255.0`, gateway `192.168.10.1`.
- [ ] Leave NIC A (the direct-to-server link, `192.168.110.3`) exactly as it is — both connections stay active at the same time.

---

## Part K — Final verification (this finishes the task)
Do these in order. If one fails, stop and re-check the matching Part above before continuing.

- [ ] From SW1: `ping 192.168.110.253` — succeeds
- [ ] From a VM1 console: `ping 192.168.10.1` (pfSense LAN) — succeeds
- [ ] From VM1: `ping 192.168.11.1` (pfSense OPT1) — succeeds
- [ ] From VM1: `ping 192.168.11.10` (VM3, across VLANs through pfSense) — succeeds
- [ ] From your laptop's **NIC B** (`192.168.10.50`), open a command prompt: `ping 192.168.10.1` — succeeds
- [ ] From the same laptop connection: `ping 192.168.11.10` — **succeeds. This is Task step 5 — you're done.**
- [ ] As a sanity check, from laptop **NIC A**, browse to `https://192.168.110.2` — ESXi still loads, completely independent of everything above.

If every box above is checked, the Sun Daddy network task is complete: switches trunk correctly, ESXi routes VM traffic through a proper VLAN trunk, pfSense performs inter-VLAN routing, and your laptop can both manage the host directly and prove the production network works end to end.
