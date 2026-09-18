# Spinning Jenny

Spinning Jenny is a browser-based network topology builder and deterministic packet-trace visualizer.

The first implementation follows the supplied design brief: users build a topology, configure interfaces/VLANs/firewall rules, trace traffic without an LLM, inspect each hop, generate device configurations, and view virtual-firewall setup guidance.

## Stack

- React + Vite
- JavaScript (no TypeScript)
- `@xyflow/react` for the topology canvas
- `lucide-react` for interface icons
- Pure deterministic JavaScript for the simulation/configuration engines
- No backend required for this MVP

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## What is implemented

- Drag/drop device palette
- Connectable topology canvas
- Device inspector
- Interface editor
- VLAN/access/trunk/routed-port fields
- Firewall rules
- Endpoint IP/subnet/gateway configuration
- ICMP / HTTP / HTTPS / DNS / custom traffic selection
- Deterministic path tracing
- Interactive hop timeline
- Per-hop explanation cards
- Device configuration generator for Cisco IOS, Linux endpoints, and pfSense
- Virtual firewall guides for ESXi and Proxmox
- Save/load topology JSON
- Import/export JSON
- Demo topology based on the supplied Laptop → Switches → ESXi → pfSense → VM3 scenario

## Design basis

The project is based on the supplied `Spinning Jenny Network Visualizer Design.pdf`. The brief calls for a drag-and-drop topology editor, deterministic graph traversal, Layer 2/Layer 3/VLAN/firewall reasoning, structured packet traces, generated configurations, and virtual-firewall setup guides.
