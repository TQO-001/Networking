# Spinning Jenny — v1

A working build of the tool from your design doc: a canvas-based network diagram builder with a **deterministic** (no LLM) packet-trace engine, plus config and hypervisor-setup generation for whatever's on the traced path.

Open `spinning-jenny.jsx` as the artifact — it loads pre-populated with the exact Laptop→VM3 example from your design doc, already wired up and ready to trace.

## What it actually does

**Canvas** — drag devices from the palette (End Device, L2 Switch, Firewall, vSwitch), drag them around, and cable them together with "Connect devices" (click device → pick interface → click other device → pick interface). Click any device to open its property panel on the right.

**Device configuration** — matches the dropdowns from your spec:
- End devices: IP, subnet, gateway, VLAN, OS, whether the host firewall allows the traffic
- Switches: per-interface Access (VLAN) or Trunk (allowed VLANs, native VLAN)
- Firewalls: virtual-or-physical, per-interface IP/subnet/VLAN/role (+ port group if virtual), and a rule list (Action / Protocol / Source / Destination, evaluated top-down, default-deny)
- vSwitches: named port groups with VLAN IDs

**Trace engine** — pick a source device, destination device, and traffic type, and it walks the graph deterministically:
1. Same subnet → direct L2 delivery, BFS across switches/vSwitches, tag/untag logic per port mode.
2. Different subnet → finds the device whose interface IP matches the source's gateway, routes to it, evaluates its rule list top-down (first match wins, default-deny if nothing matches), and if it passes, finds the egress interface whose subnet reaches the destination and continues the L2 walk from there.
3. Every hop is logged with device, interface, OSI layer, action, and a plain-English explanation — same shape as the hop cards in your doc.

**Configs & Setup tab** — after a trace, generates:
- Cisco IOS config per switch on the path (VLANs, access/trunk, allowed VLANs, native VLAN)
- Static IP config per end device (Windows `netsh`, Linux netplan, macOS `networksetup`)
- pfSense-style interface + rule listing per firewall
- If a firewall is flagged virtual: a numbered hypervisor setup walkthrough (uplink → vSwitch → port groups w/ VLAN IDs → map the firewall's vNICs to those port groups)

## Deliberate scope cuts for v1

- **Single-path topologies.** The BFS engine finds *a* valid path, not "all possible paths" or loop-aware spanning-tree behavior. Keep diagrams loop-free (tree/chain shaped, like the example) for predictable traces. Redundant links / STP simulation would be a real v2 feature, not a small add.
- **One gateway hop.** The routing logic assumes one Layer-3 boundary between source and destination (matches your example). Multi-hop routing (router → router → router) isn't modeled yet.
- **In-memory only.** Nothing persists between reloads — no accounts, no saved topologies. Given the storage APIs available to artifacts, adding save/load (personal or shareable) is a straightforward next step whenever you want it.
- **No drag from a literal Visio-style shape library** — devices are added via the left palette rather than dragged in from a floating shape tray. Functionally equivalent, just a simpler interaction than true Visio drag-and-drop.

## Natural next steps, roughly in order of effort

1. Persist topologies with the artifact storage API (save/load named diagrams).
2. Multi-hop routing (chain of routers) and basic loop/STP awareness.
3. Export the trace + configs as a shareable PDF/Markdown report (you already have a `pdf` and `md` workflow pattern from other projects — this would reuse it).
4. Router device type distinct from Firewall (same L3 engine, different config template — Cisco IOS routing instead of pfSense).
5. The LLM layer you deliberately deferred — once the deterministic core is solid, a thin LLM pass over the generated trace/config could translate it into a guided "why this failed" tutor for troubleshooting scenarios you inject on purpose (a device misconfigured on purpose, then the user has to find it).

## Why it's built this way, not a "cliché AI tool" look

The visual language leans into the name — warm workshop charcoal instead of default dark-hacker-green, brass/thread accents instead of neon, active trace path rendered as a taut highlighted thread across the canvas. Fraunces for the brand mark, JetBrains Mono for anything that's actually config/data (which also matches LaughTale's existing brand typography), Inter for UI chrome.
