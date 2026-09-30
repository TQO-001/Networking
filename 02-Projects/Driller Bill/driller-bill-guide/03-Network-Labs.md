# 03 — Network Labs

The **NETWORK LAB** section of the sidebar holds seven hands-on tools. They are not separate toys: they share **one live network**. A change you make in the CLI Lab (say, removing VLAN 20 from a trunk) shows up as a broken path in the Packet Lab and Flow Lab, and in the Topology workbench link health.

> **All labs are training simulations, not real Cisco IOS.** Output is generated from simulated device state. Some commands you know from real devices are not implemented; type `?` or use the command list in each lab.

## Which lab should I use?

| I want to… | Use | Time per session |
|---|---|---|
| Practise typing IOS config and fix a single fault | **CLI Lab** | 5–15 min |
| Draw my own network and see if two devices can reach each other | **Topology workbench** | 10–20 min |
| Fix one protocol (DHCP, NAT, STP, LACP, OSPF) with hints | **Protocol Lab** | 15–20 min |
| Understand *how* a protocol exchange works step by step | **Flow Lab** | 5–10 min |
| See exactly where a packet is dropped | **Packet Lab** | 5–10 min |
| Break the network on purpose and watch the effect | **Packet Workshop** | 10–15 min |
| Practise several faults at once, exam style | **Advanced PBQs** | 18–25 min |

Suggested order for a beginner: **Flow Lab → CLI Lab → Protocol Lab → Packet Lab → Advanced PBQs.**

---

## 1. CLI Lab

Sidebar → **CLI Lab**. A simulated campus with routers **R1** and **R2**, switches **SW1** and **SW2**, and hosts **PC1**, **PC2** and **SRV1**.

### Layout
- **Network state:** live topology with a "links healthy" counter.
- **Terminal:** one tab per device (R1, R2, SW1, SW2). Each device keeps its own history.
- **Repair the case:** the current task, with **Verify objective**, **Reset current case**, and hints.
- **Inspect before changing:** a snapshot of the target device.
- **Lab progression:** completed cases; **Reset lab** wipes the network back to healthy.

### The five cases

| Case | Device | Objective | Goal |
|---|---|---|---|
| `vlan20-trunk` | SW2 | 2.2 / 2.3 | Make VLAN 20 cross the inter-switch trunk (Gi0/24) |
| `mgmt-native` | SW2 | 2.2 / 2.3 | Keep management VLAN 99 explicitly carried on the trunk |
| `server-access` | SW2 | 2.1 / 2.3 | Put the server port (Gi0/5) in VLAN 20 |
| `recover-trunk` | SW2 | 2.2 | Bring back an administratively disabled inter-switch link |
| `static-route` | R1 | 3.2 | Add a route to 10.20.20.0/24 via 10.0.12.2 |

### Walkthrough: fix `recover-trunk`
- [ ] Select the case in the task list
- [ ] Open the **SW2** tab
- [ ] Type `show interfaces status` and find the disabled port
- [ ] Type `configure terminal` (or `conf t`)
- [ ] Type `interface GigabitEthernet0/24`
- [ ] Type `no shutdown`
- [ ] Type `end`, then `show interfaces trunk` to confirm
- [ ] Click **Verify objective**

The rule of the lab is **inspect, change, verify**. Always run a `show` command before and after.

### Terminal controls

| Key | Action |
|---|---|
| `Enter` | Run the command |
| `↑` / `↓` | Command history |
| `Tab` | Auto-complete |
| `?` | Context help |
| `Ctrl+C` | Clear the current input |
| `clear` | Clear the screen for that device |

Clicking a **command pill** runs it for you. Prompts change with mode (`SW2>`, `SW2#`, `SW2(config)#`, `SW2(config-if)#`).

### Supported commands (summary)

| Mode | Commands |
|---|---|
| **EXEC** | `show ip interface brief`, `show interfaces [status | trunk | switchport]`, `show ip route`, `show ip protocols`, `show ip ospf neighbor`, `show vlan brief`, `show etherchannel summary`, `show spanning-tree`, `show mac address-table`, `show cdp neighbors`, `show lldp neighbors`, `show ip dhcp binding`, `show ip nat translations`, `show access-lists`, `show running-config`, `show startup-config`, `show version`, `ping`, `terminal length` |
| **Privileged** | `enable`, `disable`, `configure terminal`, `copy running-config startup-config`, `write memory`, `erase startup-config` |
| **Global config** | `hostname`, `username … secret`, `ip default-gateway`, `ip route`, `vlan`, `interface`, `router ospf`, `ip dhcp pool`, `ip nat inside source list … overload`, `access-list` |
| **Interface** | `description`, `ip address`, `ip helper-address`, `ip nat inside/outside`, `switchport mode/access vlan/trunk native/trunk allowed vlan [add|remove]`, `switchport port-security [maximum]`, `spanning-tree portfast`, `spanning-tree bpduguard enable`, `channel-group … mode active|passive|on`, `shutdown`, `no shutdown` |
| **Sub-modes** | VLAN (`name`), OSPF (`router-id`, `network … area`, `passive-interface`), DHCP pool (`network`, `default-router`, `dns-server`, `lease`) |
| **Any config mode** | `do <show command>` |

---

## 2. Topology workbench

Sidebar → **Topology workbench**. Draw a network, then ask if two devices can talk.

### Walkthrough: build and trace
- [ ] Open the workbench; a demo topology is loaded
- [ ] Add devices from the palette: **Router**, **Switch**, **Host**, **Server**, **Wireless AP**
- [ ] Drag devices on the canvas to arrange them
- [ ] Turn on connect mode, click one device, then another, to create a link
- [ ] Click a link to change its type (for example to a **trunk**, which is labelled on the canvas)
- [ ] Choose a **source** and **target**, then click **Trace**; the path is shown by device name
- [ ] Use **Export JSON** to save (`.pftopology.json`) or **Import** to load one
- [ ] **Reset** restores the demo topology; **Delete** removes the selected device or link

Because topology and live network are linked, a link you add becomes a live interface link, and a fault created in the CLI Lab is reflected in link health here. Deleting things here changes what the other labs see.

---

## 3. Protocol Lab

Sidebar → **Protocol Lab**. Five guided repair cases, each with a brief, numbered steps, an objective and a hint.

| Code | Case | Protocol | Level | Time |
|---|---|---|---|---|
| PRO-01 | Restore DHCP service | DHCP | Application | 15 min |
| PRO-02 | Restore the NAT edge | NAT | Analysis | 18 min |
| PRO-03 | Re-establish the STP root | RSTP | Analysis | 15 min |
| PRO-04 | Repair the LACP bundle | EtherChannel | Application | 18 min |
| PRO-05 | Normalize OSPF timers | OSPF | Analysis | 20 min |

Each case has a **Configure, then verify** terminal and a **Watch the control plane** panel that updates as your commands change protocol state. **Recent submissions** lists your previous attempts.

### Walkthrough: PRO-01
- [ ] Read the brief: PC1 should get an address from the USERS pool but the gateway option is wrong
- [ ] Run `show ip dhcp pool`
- [ ] Enter `ip dhcp pool USERS`, then `default-router 10.10.10.1`
- [ ] Renew the client lease
- [ ] Run `show ip dhcp binding` to verify

Useful `show` commands across cases: `show ip dhcp pool`, `show ip dhcp binding`, `show ip nat statistics`, `show ip nat translations`, `show spanning-tree`, `show etherchannel summary`, `show ip ospf interface`, `show ip ospf neighbor`.

---

## 4. Flow Lab

Sidebar → **Flow Lab**. A read-and-learn tool: pick an event and see the **evidence chain** of steps a protocol needs.

Scenarios: **DHCP DORA**, **VLAN 20 delivery**, **OSPF adjacency**, **LACP bundle**, **RSTP root election**, **NAT overload flow**, **Inter-router packet path**.

- [ ] Pick a scenario under **Select an event**
- [ ] Read the evidence chain; the header says **Flow complete** or **Flow blocked**
- [ ] If blocked, note which prerequisite failed
- [ ] Click **Repair prerequisites** to fix the live network, then re-read the chain

Use this before the CLI Lab so you know what "working" looks like.

---

## 5. Packet Lab

Sidebar → **Packet Lab**. Follow one packet hop by hop.

Flows: **Resolve an IPv6 neighbor**, **Permit diagnostic ICMP**, **Relay a DHCP broadcast**, **Translate an inside flow**, **Restore the forwarding path**, **Form the redundant uplink**, **Forward a dual-stack packet**.

- [ ] Pick a flow under **Select a flow**
- [ ] Read **Packet walk** (each forwarding decision) and **Protocol checks**
- [ ] Click **Replay** to animate it again
- [ ] If it fails, click **Apply repair** (or fix it yourself in the CLI Lab) and replay

---

## 6. Packet Workshop

Sidebar → **Packet Workshop**. Your own packet, your own faults.

- [ ] In **Packet builder** choose a profile (for example *IPv4 / ICMP* from PC1 to SRV1, or *IPv4 / HTTPS* to the WAN)
- [ ] Read **Forwarding decisions**. The heading says whether the current configuration passes
- [ ] Inject a fault such as *Remove VLAN 20 from trunk*, *Block ICMP with ACL* or *Remove NAT inside role*
- [ ] Watch where the packet is now blocked
- [ ] Fix it in the CLI Lab, come back, and re-run
- [ ] **Reset live network** returns everything to healthy

---

## 7. Advanced PBQs

Sidebar → **Advanced PBQs**. Performance-based questions with **several faults at once** and protocol dependencies, like the exam's simulation tasks.

| Code | Case | Focus | Level | Time |
|---|---|---|---|---|
| PBQ-01 | Branch office blackout | Multi-protocol (9 goals: DHCP, VLAN 20, RSTP, LACP, OSPF, NAT…) | Exam | 25 min |
| PBQ-02 | WAN edge isolation | OSPF, NAT, static routing | Exam | 22 min |
| PBQ-03 | Campus segmentation failure | VLAN, trunk, RSTP | Analysis | 20 min |
| PBQ-04 | Redundant uplink failure | LACP, STP, trunk | Analysis | 20 min |
| PBQ-05 | Branch services recovery | DHCP, NAT, gateway | Application | 18 min |

**Observe the network, not just the terminal:** the page shows protocol dependencies and case performance so you can see which fixes unlock which. Fix things in dependency order (a routed path cannot work while the trunk under it is broken).

### Method for a PBQ
- [ ] Read the incident and list every goal
- [ ] Inspect first (`show` commands on every device involved)
- [ ] Fix the lowest layer first: links, then VLAN/trunk, then STP/LACP, then IP, then routing, then services
- [ ] Verify after every fix
- [ ] Check case performance for goals still open

---

## Troubleshooting

| Problem | Fix |
|---|---|
| A command says invalid or incomplete | Only the listed commands exist. Check spelling, mode (`configure terminal` first) and the interface name. Use `?` and Tab |
| I broke everything | CLI Lab → **Reset current case**, or **Reset lab**. Packet Workshop → **Reset live network**. Topology → **Reset** |
| **Verify objective** fails but it looks right | Run the `show` command for the exact objective (for example `show interfaces trunk`), and check the interface name is the one in the brief |
| Packet Lab shows a failure I did not cause | Another lab left a fault in the shared network. Use **Reset live network** in Packet Workshop |
| Progress in one lab disappeared | Check the Data & recovery page (file 05) for a restore point. Clearing the browser data clears labs |
| Trace says no path | The link type or the devices are not connected; check both ends and the link health on the canvas |
| Terminal output lags on huge history | Type `clear`; only the latest 120 entries per device are kept anyway |

## Tips and shortcuts

- `Tab` and `?` are the fastest way to learn command syntax without leaving the terminal.
- Start every case with `show`; the fault is almost always visible in the output.
- Mistakes are safe: resets are one click. Break things on purpose in Packet Workshop.
- Read the Flow Lab chain for a protocol first, then fix the same protocol in the CLI Lab.
- Use `do show …` inside config modes instead of dropping back to privileged mode.
- Collapse the sidebar (‹) for a wider terminal.
