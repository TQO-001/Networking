import React, { useState, useRef, useCallback, useMemo } from "react";

/* ============================================================
   SPINNING JENNY — Network Path Visualizer & Config Generator
   ============================================================
   A deterministic (no-LLM) network topology builder. Build a
   diagram, configure each device's interfaces/rules, then trace
   a packet hop-by-hop across Layer 2 / Layer 3, and generate the
   device configs + hypervisor setup steps for the path.
   ============================================================ */

// ---------- id + numbering helpers ----------
let idCounter = 1;
const uid = (prefix) => `${prefix}_${idCounter++}`;

const DEVICE_DEFS = {
  endpoint: { label: "PC / VM / Server", short: "End Device" },
  switch: { label: "Layer 2 Switch", short: "Switch" },
  firewall: { label: "Firewall / Router", short: "Firewall" },
  hypervisor: { label: "Hypervisor vSwitch", short: "vSwitch" },
};

// ---------- IP / subnet math ----------
function ipToInt(ip) {
  if (!ip) return 0;
  const parts = ip.split(".").map((n) => Number(n) || 0);
  return ((parts[0] * 256 + parts[1]) * 256 + parts[2]) * 256 + parts[3];
}
function netAddr(ip, mask) {
  return ipToInt(ip) & ipToInt(mask);
}
function sameSubnet(ipA, ipB, mask) {
  try {
    return netAddr(ipA, mask) === netAddr(ipB, mask);
  } catch (e) {
    return false;
  }
}
function cidrToMaskInt(bits) {
  if (bits <= 0) return 0;
  return (0xffffffff << (32 - bits)) >>> 0;
}
function cidrContains(ip, cidr) {
  if (!cidr) return true;
  const c = cidr.trim().toLowerCase();
  if (c === "any" || c === "") return true;
  try {
    const [net, bitsStr] = cidr.split("/");
    const bits = bitsStr ? parseInt(bitsStr, 10) : 32;
    const maskInt = cidrToMaskInt(bits);
    return ((ipToInt(ip) & maskInt) >>> 0) === ((ipToInt(net) & maskInt) >>> 0);
  } catch (e) {
    return true;
  }
}

// ---------- node factory ----------
function makeNode(type, x, y) {
  const id = uid("n");
  const base = { id, type, x, y };
  if (type === "endpoint") {
    return {
      ...base,
      name: "New Device",
      ip: "192.168.10.10",
      subnet: "255.255.255.0",
      gateway: "192.168.10.1",
      vlan: 10,
      os: "Windows",
      icmpAllowed: true,
    };
  }
  if (type === "switch") {
    return {
      ...base,
      name: "New Switch",
      interfaces: [
        { id: uid("if"), name: "Fa1/1", mode: "access", vlan: 10, allowedVlans: "", nativeVlan: 1 },
      ],
    };
  }
  if (type === "firewall") {
    return {
      ...base,
      name: "New Firewall",
      isVirtual: false,
      hypervisorHost: "",
      hypervisorType: "ESXi",
      interfaces: [
        { id: uid("if"), name: "em0", role: "LAN", ip: "192.168.10.1", subnet: "255.255.255.0", vlan: 10, portGroup: "" },
      ],
      rules: [{ id: uid("r"), action: "PASS", protocol: "Any", source: "any", destination: "any" }],
    };
  }
  if (type === "hypervisor") {
    return {
      ...base,
      name: "New vSwitch",
      hostType: "ESXi",
      interfaces: [{ id: uid("if"), name: "PG_VLAN10", vlan: 10 }],
    };
  }
  return base;
}

function getInterfaces(node) {
  if (!node) return [];
  if (node.type === "endpoint") return [{ id: "nic0", name: "eth0" }];
  return node.interfaces || [];
}

// ---------- default demo topology (mirrors the uploaded design doc) ----------
function buildDefaultTopology() {
  const laptop = { ...makeNode("endpoint", 40, 260), name: "Laptop", ip: "192.168.10.50", subnet: "255.255.255.0", gateway: "192.168.10.1", vlan: 10, os: "Windows", icmpAllowed: true };
  const sw2 = {
    ...makeNode("switch", 300, 260), name: "Switch 2",
    interfaces: [
      { id: uid("if"), name: "Fa1/1", mode: "access", vlan: 10, allowedVlans: "", nativeVlan: 1 },
      { id: uid("if"), name: "Gi1/1", mode: "trunk", vlan: null, allowedVlans: "10,11", nativeVlan: 1 },
    ],
  };
  const sw1 = {
    ...makeNode("switch", 560, 260), name: "Switch 1",
    interfaces: [
      { id: uid("if"), name: "Gi1/10", mode: "trunk", vlan: null, allowedVlans: "10,11", nativeVlan: 1 },
      { id: uid("if"), name: "Gi1/4", mode: "trunk", vlan: null, allowedVlans: "10,11", nativeVlan: 1 },
    ],
  };
  const hv = {
    ...makeNode("hypervisor", 820, 120), name: "ESXi vSwitch1", hostType: "ESXi",
    interfaces: [
      { id: uid("if"), name: "PG_VLAN10", vlan: 10 },
      { id: uid("if"), name: "PG_VLAN11", vlan: 11 },
    ],
  };
  const fw = {
    ...makeNode("firewall", 820, 400), name: "pfSense", isVirtual: true, hypervisorHost: "ESXi Host 1", hypervisorType: "ESXi",
    interfaces: [
      { id: uid("if"), name: "em1", role: "LAN", ip: "192.168.10.1", subnet: "255.255.255.0", vlan: 10, portGroup: "PG_VLAN10" },
      { id: uid("if"), name: "em0", role: "WAN", ip: "192.168.11.1", subnet: "255.255.255.0", vlan: 11, portGroup: "PG_VLAN11" },
    ],
    rules: [{ id: uid("r"), action: "PASS", protocol: "Any", source: "192.168.10.0/24", destination: "192.168.11.0/24" }],
  };
  const vm3 = { ...makeNode("endpoint", 1080, 260), name: "VM3", ip: "192.168.11.10", subnet: "255.255.255.0", gateway: "192.168.11.1", vlan: 11, os: "Linux", icmpAllowed: true };

  const nodes = [laptop, sw2, sw1, hv, fw, vm3];
  const edges = [
    { id: uid("e"), fromNode: laptop.id, fromIf: "nic0", toNode: sw2.id, toIf: sw2.interfaces[0].id },
    { id: uid("e"), fromNode: sw2.id, fromIf: sw2.interfaces[1].id, toNode: sw1.id, toIf: sw1.interfaces[0].id },
    { id: uid("e"), fromNode: sw1.id, fromIf: sw1.interfaces[1].id, toNode: hv.id, toIf: hv.interfaces[0].id },
    { id: uid("e"), fromNode: hv.id, fromIf: hv.interfaces[0].id, toNode: fw.id, toIf: fw.interfaces[0].id },
    { id: uid("e"), fromNode: fw.id, fromIf: fw.interfaces[1].id, toNode: hv.id, toIf: hv.interfaces[1].id },
    { id: uid("e"), fromNode: hv.id, fromIf: hv.interfaces[1].id, toNode: vm3.id, toIf: "nic0" },
  ];
  return { nodes, edges };
}

// ---------- graph / trace engine ----------
function buildAdjacency(nodes, edges) {
  const adj = new Map();
  nodes.forEach((n) => adj.set(n.id, []));
  edges.forEach((e) => {
    if (!adj.has(e.fromNode) || !adj.has(e.toNode)) return;
    adj.get(e.fromNode).push({ edge: e, neighbor: e.toNode, localIf: e.fromIf, remoteIf: e.toIf });
    adj.get(e.toNode).push({ edge: e, neighbor: e.fromNode, localIf: e.toIf, remoteIf: e.fromIf });
  });
  return adj;
}

// BFS returning ordered steps [{toNode, toIf, fromNode, fromIf, edge}], optionally
// constrained so the FIRST hop must leave startNode via startIf.
function bfsPath(adj, startId, endId, startIf) {
  if (startId === endId) return [];
  const visited = new Set([startId]);
  const queue = [];
  const firstHops = adj.get(startId) || [];
  firstHops.forEach((h) => {
    if (startIf && h.localIf !== startIf) return;
    if (visited.has(h.neighbor)) return;
    visited.add(h.neighbor);
    queue.push({ node: h.neighbor, steps: [{ fromNode: startId, fromIf: h.localIf, toNode: h.neighbor, toIf: h.remoteIf, edge: h.edge }] });
  });
  while (queue.length) {
    const cur = queue.shift();
    if (cur.node === endId) return cur.steps;
    const hops = adj.get(cur.node) || [];
    for (const h of hops) {
      if (visited.has(h.neighbor)) continue;
      visited.add(h.neighbor);
      queue.push({ node: h.neighbor, steps: [...cur.steps, { fromNode: cur.node, fromIf: h.localIf, toNode: h.neighbor, toIf: h.remoteIf, edge: h.edge }] });
    }
  }
  return null;
}

function ifaceById(node, ifId) {
  if (node.type === "endpoint") return { id: "nic0", name: "eth0" };
  return (node.interfaces || []).find((i) => i.id === ifId) || null;
}

function describeL2Hop(node, iface) {
  if (node.type === "switch") {
    if (!iface) return { action: "Frame received", detail: `${node.name} receives the frame.` };
    if (iface.mode === "trunk") {
      return {
        action: `802.1Q Trunk`,
        detail: `Arrives on ${iface.name} configured as a trunk (allowed VLANs: ${iface.allowedVlans || "all"}, native VLAN ${iface.nativeVlan ?? 1}). VLAN tag is preserved across the link.`,
      };
    }
    return {
      action: `Access (VLAN ${iface.vlan})`,
      detail: `Arrives on ${iface.name}, an access port fixed to VLAN ${iface.vlan}. The switch tags/untags the frame to this VLAN and forwards based on its MAC table.`,
    };
  }
  if (node.type === "hypervisor") {
    return {
      action: `Port Group ${iface ? iface.name : ""}`,
      detail: `Virtual switch "${node.name}" maps the tagged frame to port group ${iface ? `${iface.name} (VLAN ${iface.vlan})` : ""} and delivers it to the connected virtual NIC.`,
    };
  }
  return { action: "Forwarded", detail: `${node.name} forwards the frame.` };
}

function findGatewayNode(nodes, gatewayIp) {
  for (const n of nodes) {
    if (n.type !== "firewall") continue;
    const iface = (n.interfaces || []).find((i) => i.ip === gatewayIp);
    if (iface) return { node: n, iface };
  }
  return null;
}

function ruleMatches(rule, trafficType, srcIp, dstIp) {
  const proto = (rule.protocol || "Any").toUpperCase();
  const protoOK =
    proto === "ANY" ||
    proto === trafficType.toUpperCase() ||
    (proto === "HTTP/HTTPS" && (trafficType === "HTTP" || trafficType === "HTTPS"));
  return protoOK && cidrContains(srcIp, rule.source) && cidrContains(dstIp, rule.destination);
}

function mkHop(step, device, iface, layer, action, detail) {
  return { step, device, iface, layer, action, detail };
}

function traceEngine(nodes, edges, sourceId, destId, trafficType) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const src = nodeMap.get(sourceId);
  const dst = nodeMap.get(destId);
  if (!src || !dst) return { error: "Pick a source and destination device." };
  if (src.type !== "endpoint" || dst.type !== "endpoint") return { error: "Source and destination must both be end devices (PC/VM/Server)." };
  if (src.id === dst.id) return { error: "Source and destination must be different devices." };

  const adj = buildAdjacency(nodes, edges);
  const hops = [];
  let step = 1;
  const devicesInPath = new Set([src.id]);

  const local = sameSubnet(src.ip, dst.ip, src.subnet);

  if (local) {
    hops.push(mkHop(step++, src.name, "eth0", "L2", "Untagged frame", `Target ${dst.ip} is in the same subnet as ${src.name} (${src.subnet}). ${src.name} ARPs for ${dst.ip} directly — no routing needed.`));
    const path = bfsPath(adj, src.id, dst.id);
    if (!path) return { error: `No physical path found between ${src.name} and ${dst.name}. Connect them with cables on the canvas first.` };
    path.forEach((s) => {
      const node = nodeMap.get(s.toNode);
      if (node.id === dst.id) return; // handled below
      devicesInPath.add(node.id);
      const iface = ifaceById(node, s.toIf);
      const d = describeL2Hop(node, iface);
      hops.push(mkHop(step++, node.name, iface ? iface.name : "-", "L2", d.action, d.detail));
    });
    devicesInPath.add(dst.id);
    hops.push(
      mkHop(
        step++,
        dst.name,
        "eth0",
        "L2",
        "Frame received",
        `${dst.name} receives the frame on the local segment. ${dst.icmpAllowed ? `Host firewall permits ${trafficType.toUpperCase()}.` : `⚠ Host firewall on ${dst.name} may need to be configured to allow ${trafficType.toUpperCase()} — currently marked as not permitting it.`}`
      )
    );
    return { hops, blocked: false, verdict: "DELIVERED — same VLAN/subnet", source: src, dest: dst, devicesInPath: [...devicesInPath] };
  }

  // routed path
  const gw = findGatewayNode(nodes, src.gateway);
  if (!gw) return { error: `No device has an interface with IP ${src.gateway} to act as ${src.name}'s default gateway. Add that IP to a firewall/router interface, or fix ${src.name}'s gateway field.` };

  hops.push(mkHop(step++, src.name, "eth0", "L3 → L2", "Untagged, to gateway MAC", `Target ${dst.ip} is outside ${src.name}'s subnet (${src.subnet}). Frame is addressed to the default gateway ${src.gateway}.`));

  const pathToGw = bfsPath(adj, src.id, gw.node.id);
  if (!pathToGw) return { error: `No physical path from ${src.name} to its gateway ${gw.node.name} (${src.gateway}). Check your cabling.` };
  pathToGw.forEach((s) => {
    const node = nodeMap.get(s.toNode);
    if (node.id === gw.node.id) return; // handled below with the routing hop
    devicesInPath.add(node.id);
    const iface = ifaceById(node, s.toIf);
    const d = describeL2Hop(node, iface);
    hops.push(mkHop(step++, node.name, iface ? iface.name : "-", "L2", d.action, d.detail));
  });

  devicesInPath.add(gw.node.id);
  hops.push(
    mkHop(
      step++,
      gw.node.name,
      gw.iface.name,
      "L3",
      "Routing boundary",
      `${gw.node.name} receives the frame on ${gw.iface.name} (${gw.iface.ip}). Switches can't move traffic between VLANs — this device has a leg in both the source and destination networks, so routing happens here.`
    )
  );

  const rules = gw.node.rules || [];
  const matched = rules.find((r) => ruleMatches(r, trafficType, src.ip, dst.ip));
  if (!matched || matched.action !== "PASS") {
    hops.push(
      mkHop(
        step++,
        gw.node.name,
        "Rule Engine",
        "L3/L4",
        matched ? "DENY (explicit rule)" : "DENY (default-deny)",
        matched
          ? `Rule "${matched.protocol} ${matched.source} → ${matched.destination}" explicitly denies this traffic.`
          : `No rule permits ${trafficType.toUpperCase()} from ${src.ip} to ${dst.ip}. With no matching PASS rule, the default-deny stance blocks the packet here.`
      )
    );
    return { hops, blocked: true, verdict: "BLOCKED at firewall", source: src, dest: dst, devicesInPath: [...devicesInPath] };
  }

  hops.push(
    mkHop(
      step++,
      gw.node.name,
      "Rule Engine",
      "L3/L4",
      "PASS — state created",
      `Rule "${matched.protocol} ${matched.source} → ${matched.destination}" permits this traffic. The stateful engine logs the connection, so the reply needs no separate rule.`
    )
  );

  const egress = (gw.node.interfaces || []).find((i) => i.id !== gw.iface.id && i.subnet && sameSubnet(dst.ip, i.ip, i.subnet));
  if (!egress) return { error: `${gw.node.name} has no interface whose subnet reaches ${dst.ip}. Add an interface for that VLAN/subnet on ${gw.node.name}.` };

  hops.push(
    mkHop(
      step++,
      gw.node.name,
      egress.name,
      "L3 → L2",
      `Re-tagged VLAN ${egress.vlan}`,
      `Packet is re-encapsulated and routed out ${egress.name} (${egress.ip}) toward ${dst.ip}'s network.`
    )
  );

  const pathToDst = bfsPath(adj, gw.node.id, dst.id, egress.id);
  if (!pathToDst) return { error: `${gw.node.name}'s ${egress.name} has no physical path to ${dst.name}. Check your cabling on the destination side.` };
  pathToDst.forEach((s) => {
    const node = nodeMap.get(s.toNode);
    if (node.id === dst.id) return;
    devicesInPath.add(node.id);
    const iface = ifaceById(node, s.toIf);
    const d = describeL2Hop(node, iface);
    hops.push(mkHop(step++, node.name, iface ? iface.name : "-", "L2", d.action, d.detail));
  });

  devicesInPath.add(dst.id);
  hops.push(
    mkHop(
      step++,
      dst.name,
      "eth0",
      "L3",
      "Packet received",
      `${dst.name} receives the packet. ${dst.icmpAllowed ? `Host firewall permits ${trafficType.toUpperCase()}.` : `⚠ Host firewall on ${dst.name} may need to be configured to allow ${trafficType.toUpperCase()}.`} Reply now travels this entire path in reverse.`
    )
  );
  hops.push(
    mkHop(
      step++,
      gw.node.name,
      "Rule Engine",
      "L3/L4",
      "Stateful return",
      `${gw.node.name}'s state table already recognizes the reply as belonging to the connection it allowed — no second rule is evaluated.`
    )
  );

  return { hops, blocked: false, verdict: "DELIVERED — routed via " + gw.node.name, source: src, dest: dst, devicesInPath: [...devicesInPath] };
}

// ---------- config generators ----------
function genEndpointConfig(node) {
  const lines = [];
  if (node.os === "Windows") {
    lines.push(`# ${node.name} — Windows static IP (run as Administrator)`);
    lines.push(`netsh interface ip set address name="Ethernet" static ${node.ip} ${node.subnet} ${node.gateway}`);
    if (!node.icmpAllowed) lines.push(`netsh advfirewall firewall add rule name="Allow ICMPv4" protocol=icmpv4:8,any dir=in action=allow`);
  } else if (node.os === "macOS") {
    lines.push(`# ${node.name} — macOS static IP`);
    lines.push(`sudo networksetup -setmanual "Ethernet" ${node.ip} ${node.subnet} ${node.gateway}`);
  } else {
    lines.push(`# ${node.name} — Linux static IP (Netplan-style)`);
    lines.push(`network:`);
    lines.push(`  version: 2`);
    lines.push(`  ethernets:`);
    lines.push(`    eth0:`);
    lines.push(`      addresses: [${node.ip}/${maskToCidrBits(node.subnet)}]`);
    lines.push(`      routes:`);
    lines.push(`        - to: default`);
    lines.push(`          via: ${node.gateway}`);
    if (!node.icmpAllowed) lines.push(`# sudo ufw allow proto icmp   # if a host firewall is blocking ICMP`);
  }
  return lines.join("\n");
}

function maskToCidrBits(mask) {
  try {
    return mask.split(".").reduce((acc, o) => acc + Number(o).toString(2).split("1").length - 1, 0);
  } catch (e) {
    return 24;
  }
}

function genSwitchConfig(node) {
  const lines = [`! ${node.name} — Cisco IOS`, `hostname ${node.name.replace(/\s+/g, "_")}`, `!`];
  const vlansSeen = new Set();
  (node.interfaces || []).forEach((i) => {
    if (i.mode === "access" && i.vlan) vlansSeen.add(i.vlan);
    if (i.mode === "trunk" && i.allowedVlans) i.allowedVlans.split(",").forEach((v) => v.trim() && vlansSeen.add(v.trim()));
  });
  [...vlansSeen].forEach((v) => {
    lines.push(`vlan ${v}`);
    lines.push(` name VLAN_${v}`);
  });
  lines.push(`!`);
  (node.interfaces || []).forEach((i) => {
    lines.push(`interface ${i.name}`);
    lines.push(` description Link to next-hop device`);
    if (i.mode === "access") {
      lines.push(` switchport mode access`);
      lines.push(` switchport access vlan ${i.vlan}`);
    } else {
      lines.push(` switchport trunk encapsulation dot1q`);
      lines.push(` switchport mode trunk`);
      if (i.allowedVlans) lines.push(` switchport trunk allowed vlan ${i.allowedVlans}`);
      lines.push(` switchport trunk native vlan ${i.nativeVlan ?? 1}`);
    }
    lines.push(` no shutdown`);
    lines.push(`!`);
  });
  return lines.join("\n");
}

function genFirewallConfig(node) {
  const lines = [`# ${node.name} — ${node.isVirtual ? "pfSense (virtual)" : "pfSense / router"} interface + rule config`];
  (node.interfaces || []).forEach((i) => {
    lines.push(`## Interface ${i.name} (${i.role})`);
    lines.push(`  IP Address : ${i.ip}`);
    lines.push(`  Subnet     : ${i.subnet}`);
    lines.push(`  VLAN tag   : ${i.vlan}`);
    if (node.isVirtual) lines.push(`  Port group : ${i.portGroup || "(not set)"}`);
    lines.push("");
  });
  lines.push(`## Firewall rules (evaluated top-down, default-deny)`);
  (node.rules || []).forEach((r) => {
    lines.push(`${r.action.padEnd(5)} proto ${r.protocol.padEnd(10)} from ${r.source.padEnd(18)} to ${r.destination}`);
  });
  return lines.join("\n");
}

function genHypervisorGuide(hvNode, connectedFirewall) {
  const steps = [
    {
      title: "Assign the physical uplink (vmnic)",
      body: `On the ${hvNode.hostType || "ESXi"} host, confirm the physical NIC used as the uplink for "${hvNode.name}" is attached under Networking → Virtual Switches. This is the cable coming in from the physical switch trunk port.`,
    },
    {
      title: "Create the virtual switch",
      body: `Create (or confirm) the virtual switch "${hvNode.name}" and bind it to that uplink. Set the security policy (Promiscuous Mode / MAC changes / Forged transmits) to your lab's needs — defaults are fine for a home lab.`,
    },
    {
      title: "Create port groups with VLAN IDs",
      body: `Add a port group for each VLAN this vSwitch carries:\n${(hvNode.interfaces || [])
        .map((pg) => `  • ${pg.name} — VLAN ID ${pg.vlan}`)
        .join("\n")}\nEach port group's VLAN ID must match the 802.1Q tag arriving on the trunk from the physical switch.`,
    },
  ];
  if (connectedFirewall) {
    steps.push({
      title: "Map the firewall's virtual NICs",
      body: `In the ${connectedFirewall.name} VM's settings, assign each virtual NIC to the matching port group:\n${(connectedFirewall.interfaces || [])
        .map((i) => `  • ${i.name} (${i.role}, ${i.ip}) → ${i.portGroup || "(set a port group)"}`)
        .join("\n")}`,
    });
    steps.push({
      title: "Verify trunk mode / VLAN ID 4095",
      body: `If a single vNIC on ${connectedFirewall.name} needs to see multiple VLANs itself (router-on-a-stick inside the VM), set that port group's VLAN ID to 4095 (VST "all VLANs" trunk) instead of a single VLAN number.`,
    });
  }
  return steps;
}

// ============================================================
// UI
// ============================================================

const palette = [
  { type: "endpoint", label: "End Device", glyph: "▭" },
  { type: "switch", label: "L2 Switch", glyph: "▤" },
  { type: "firewall", label: "Firewall", glyph: "◆" },
  { type: "hypervisor", label: "vSwitch", glyph: "▦" },
];

function NodeGlyph({ type }) {
  const g = palette.find((p) => p.type === type);
  return <span className="sj-node-glyph">{g ? g.glyph : "?"}</span>;
}

export default function App() {
  const [topology, setTopology] = useState(() => buildDefaultTopology());
  const [selectedId, setSelectedId] = useState(null);
  const [connectMode, setConnectMode] = useState(false);
  const [pending, setPending] = useState(null); // { nodeId, ifaceOptions }
  const [tab, setTab] = useState("canvas"); // canvas | trace | configs
  const [traceSrc, setTraceSrc] = useState("");
  const [traceDst, setTraceDst] = useState("");
  const [trafficType, setTrafficType] = useState("ICMP");
  const [traceResult, setTraceResult] = useState(null);
  const dragRef = useRef(null);
  const canvasRef = useRef(null);

  const nodes = topology.nodes;
  const edges = topology.edges;
  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
  const endpoints = nodes.filter((n) => n.type === "endpoint");
  const selected = selectedId ? nodeMap.get(selectedId) : null;

  const updateNode = useCallback((id, patch) => {
    setTopology((t) => ({ ...t, nodes: t.nodes.map((n) => (n.id === id ? { ...n, ...patch } : n)) }));
  }, []);

  const addNode = (type) => {
    const n = makeNode(type, 120 + Math.random() * 60, 120 + Math.random() * 260);
    setTopology((t) => ({ ...t, nodes: [...t.nodes, n] }));
    setSelectedId(n.id);
  };

  const removeNode = (id) => {
    setTopology((t) => ({
      nodes: t.nodes.filter((n) => n.id !== id),
      edges: t.edges.filter((e) => e.fromNode !== id && e.toNode !== id),
    }));
    if (selectedId === id) setSelectedId(null);
  };

  const removeEdge = (id) => {
    setTopology((t) => ({ ...t, edges: t.edges.filter((e) => e.id !== id) }));
  };

  // ---- drag to move nodes ----
  const onNodeMouseDown = (e, node) => {
    if (connectMode) return;
    e.stopPropagation();
    const rect = canvasRef.current.getBoundingClientRect();
    dragRef.current = { id: node.id, offX: e.clientX - rect.left - node.x, offY: e.clientY - rect.top - node.y };
    window.addEventListener("mousemove", onDragMove);
    window.addEventListener("mouseup", onDragUp);
  };
  const onDragMove = (e) => {
    if (!dragRef.current || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, e.clientX - rect.left - dragRef.current.offX);
    const y = Math.max(0, e.clientY - rect.top - dragRef.current.offY);
    updateNode(dragRef.current.id, { x, y });
  };
  const onDragUp = () => {
    dragRef.current = null;
    window.removeEventListener("mousemove", onDragMove);
    window.removeEventListener("mouseup", onDragUp);
  };

  // ---- connect mode ----
  const startConnect = () => {
    setConnectMode(true);
    setPending(null);
    setSelectedId(null);
  };
  const cancelConnect = () => {
    setConnectMode(false);
    setPending(null);
  };

  const onNodeClickConnect = (node) => {
    if (!pending) {
      setPending({ nodeId: node.id });
      return;
    }
    if (pending.nodeId === node.id) return;
  };

  const pickInterfaceForPending = (ifId) => {
    if (!pending.ifId) {
      setPending({ ...pending, ifId });
    }
  };

  const finishEdge = (toNode, toIf) => {
    const fromNode = pending.nodeId;
    const fromIf = pending.ifId;
    setTopology((t) => ({ ...t, edges: [...t.edges, { id: uid("e"), fromNode, fromIf, toNode, toIf }] }));
    setPending(null);
  };

  const addQuickInterface = (node) => {
    const n = node.type + "_if_count";
    let name = "Eth" + ((node.interfaces || []).length + 1);
    const newIf =
      node.type === "hypervisor"
        ? { id: uid("if"), name: "PG_NEW", vlan: 1 }
        : node.type === "firewall"
        ? { id: uid("if"), name, role: "LAN", ip: "10.0.0.1", subnet: "255.255.255.0", vlan: 1, portGroup: "" }
        : { id: uid("if"), name, mode: "access", vlan: 1, allowedVlans: "", nativeVlan: 1 };
    updateNode(node.id, { interfaces: [...(node.interfaces || []), newIf] });
    return newIf.id;
  };

  const runTrace = () => {
    if (!traceSrc || !traceDst) {
      setTraceResult({ error: "Choose both a source and a destination device." });
      return;
    }
    const res = traceEngine(nodes, edges, traceSrc, traceDst, trafficType);
    setTraceResult(res);
    setTab("trace");
  };

  const pathDevices = useMemo(() => {
    if (!traceResult || traceResult.error) return [];
    return (traceResult.devicesInPath || []).map((id) => nodeMap.get(id)).filter(Boolean);
  }, [traceResult, nodeMap]);

  const copyText = (text) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {
      /* no-op in sandboxed iframes */
    }
  };

  return (
    <div className="sj-root">
      <style>{CSS}</style>

      <header className="sj-header">
        <div className="sj-brand">
          <div className="sj-brand-mark">✦</div>
          <div>
            <div className="sj-brand-name">Spinning Jenny</div>
            <div className="sj-brand-tag">weave a topology, pull a thread, watch the packet travel it</div>
          </div>
        </div>
        <nav className="sj-tabs">
          <button className={tab === "canvas" ? "sj-tab sj-tab-active" : "sj-tab"} onClick={() => setTab("canvas")}>Canvas</button>
          <button className={tab === "trace" ? "sj-tab sj-tab-active" : "sj-tab"} onClick={() => setTab("trace")}>Trace</button>
          <button className={tab === "configs" ? "sj-tab sj-tab-active" : "sj-tab"} onClick={() => setTab("configs")}>Configs &amp; Setup</button>
        </nav>
      </header>

      {tab === "canvas" && (
        <div className="sj-canvas-layout">
          <aside className="sj-palette">
            <div className="sj-panel-title">Add device</div>
            {palette.map((p) => (
              <button key={p.type} className="sj-palette-btn" onClick={() => addNode(p.type)}>
                <span className="sj-node-glyph">{p.glyph}</span> {p.label}
              </button>
            ))}
            <div className="sj-divider" />
            {!connectMode ? (
              <button className="sj-palette-btn sj-btn-thread" onClick={startConnect}>
                ⟿ Connect devices
              </button>
            ) : (
              <button className="sj-palette-btn sj-btn-thread sj-btn-thread-active" onClick={cancelConnect}>
                ✕ Cancel connecting
              </button>
            )}
            {connectMode && (
              <div className="sj-hint">
                {!pending
                  ? "Click the first device."
                  : !pending.ifId
                  ? "Pick which interface on that device this cable uses."
                  : "Now click the second device."}
              </div>
            )}
            <div className="sj-divider" />
            <button
              className="sj-palette-btn"
              onClick={() => {
                setTopology(buildDefaultTopology());
                setSelectedId(null);
                setTraceResult(null);
              }}
            >
              ↺ Load demo topology
            </button>
            <button
              className="sj-palette-btn"
              onClick={() => {
                setTopology({ nodes: [], edges: [] });
                setSelectedId(null);
                setTraceResult(null);
              }}
            >
              ⨯ Clear canvas
            </button>
          </aside>

          <div
            className="sj-canvas"
            ref={canvasRef}
            onClick={() => {
              if (!connectMode) setSelectedId(null);
            }}
          >
            <svg className="sj-edges" width="100%" height="100%">
              {edges.map((e) => {
                const a = nodeMap.get(e.fromNode);
                const b = nodeMap.get(e.toNode);
                if (!a || !b) return null;
                const onPath = traceResult && !traceResult.error && traceResult.devicesInPath &&
                  traceResult.devicesInPath.includes(a.id) && traceResult.devicesInPath.includes(b.id);
                return (
                  <g key={e.id}>
                    <line
                      x1={a.x + 70} y1={a.y + 34} x2={b.x + 70} y2={b.y + 34}
                      className={onPath ? "sj-thread sj-thread-active" : "sj-thread"}
                    />
                    <circle
                      cx={(a.x + b.x) / 2 + 70} cy={(a.y + b.y) / 2 + 34} r="7"
                      className="sj-edge-x"
                      onClick={(ev) => { ev.stopPropagation(); removeEdge(e.id); }}
                    />
                  </g>
                );
              })}
            </svg>

            {nodes.map((n) => (
              <div
                key={n.id}
                className={
                  "sj-node" +
                  (selectedId === n.id ? " sj-node-selected" : "") +
                  (pending && pending.nodeId === n.id ? " sj-node-pending" : "") +
                  (traceResult && !traceResult.error && traceResult.devicesInPath && traceResult.devicesInPath.includes(n.id) ? " sj-node-onpath" : "")
                }
                style={{ left: n.x, top: n.y }}
                onMouseDown={(e) => onNodeMouseDown(e, n)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (connectMode) onNodeClickConnect(n);
                  else setSelectedId(n.id);
                }}
              >
                <div className="sj-node-head">
                  <NodeGlyph type={n.type} />
                  <span className="sj-node-name">{n.name}</span>
                </div>
                <div className="sj-node-sub">{DEVICE_DEFS[n.type].short}{n.type === "endpoint" ? ` · ${n.ip}` : ""}</div>

                {connectMode && pending && pending.nodeId === n.id && !pending.ifId && (
                  <div className="sj-if-picker" onClick={(e) => e.stopPropagation()}>
                    {getInterfaces(n).map((i) => (
                      <button key={i.id} onClick={() => pickInterfaceForPending(i.id)}>{i.name}</button>
                    ))}
                    {n.type !== "endpoint" && (
                      <button className="sj-if-add" onClick={() => pickInterfaceForPending(addQuickInterface(n))}>+ new</button>
                    )}
                  </div>
                )}
                {connectMode && pending && pending.ifId && pending.nodeId !== n.id && (
                  <div className="sj-if-picker" onClick={(e) => e.stopPropagation()}>
                    {getInterfaces(n).map((i) => (
                      <button key={i.id} onClick={() => finishEdge(n.id, i.id)}>{i.name}</button>
                    ))}
                    {n.type !== "endpoint" && (
                      <button className="sj-if-add" onClick={() => finishEdge(n.id, addQuickInterface(n))}>+ new</button>
                    )}
                  </div>
                )}
              </div>
            ))}
            {nodes.length === 0 && <div className="sj-empty">Add a device from the left to start weaving a topology.</div>}
          </div>

          {selected && !connectMode && (
            <Inspector node={selected} onChange={(patch) => updateNode(selected.id, patch)} onRemove={() => removeNode(selected.id)} onClose={() => setSelectedId(null)} />
          )}
        </div>
      )}

      {tab === "trace" && (
        <div className="sj-trace-layout">
          <div className="sj-trace-controls">
            <label>
              Source
              <select value={traceSrc} onChange={(e) => setTraceSrc(e.target.value)}>
                <option value="">— pick device —</option>
                {endpoints.map((n) => <option key={n.id} value={n.id}>{n.name} ({n.ip})</option>)}
              </select>
            </label>
            <label>
              Destination
              <select value={traceDst} onChange={(e) => setTraceDst(e.target.value)}>
                <option value="">— pick device —</option>
                {endpoints.map((n) => <option key={n.id} value={n.id}>{n.name} ({n.ip})</option>)}
              </select>
            </label>
            <label>
              Traffic
              <select value={trafficType} onChange={(e) => setTrafficType(e.target.value)}>
                <option>ICMP</option>
                <option>HTTP</option>
                <option>HTTPS</option>
                <option>DNS</option>
                <option>Custom</option>
              </select>
            </label>
            <button className="sj-btn-thread" onClick={runTrace}>Run trace</button>
          </div>

          {!traceResult && <div className="sj-empty">Pick a source and destination, then run the trace.</div>}

          {traceResult && traceResult.error && <div className="sj-verdict sj-verdict-bad">{traceResult.error}</div>}

          {traceResult && !traceResult.error && (
            <>
              <div className={"sj-verdict " + (traceResult.blocked ? "sj-verdict-bad" : "sj-verdict-good")}>
                {traceResult.blocked ? "✕ " : "✓ "}{traceResult.verdict}
                <span className="sj-verdict-sub">{traceResult.source.name} ({traceResult.source.ip}) → {traceResult.dest.name} ({traceResult.dest.ip}) · {trafficType}</span>
              </div>
              <div className="sj-hops">
                {traceResult.hops.map((h) => (
                  <div key={h.step} className="sj-hop-card">
                    <div className="sj-hop-num">{String(h.step).padStart(2, "0")}</div>
                    <div className="sj-hop-body">
                      <div className="sj-hop-title">
                        <span className="sj-hop-device">{h.device}</span>
                        <span className="sj-hop-iface">{h.iface}</span>
                        <span className="sj-hop-layer">{h.layer}</span>
                      </div>
                      <div className="sj-hop-action">{h.action}</div>
                      <div className="sj-hop-detail">{h.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {tab === "configs" && (
        <div className="sj-configs-layout">
          {!traceResult || traceResult.error ? (
            <div className="sj-empty">Run a trace first — configs are generated for the devices on that path.</div>
          ) : (
            pathDevices.map((n) => {
              let content = "";
              if (n.type === "endpoint") content = genEndpointConfig(n);
              else if (n.type === "switch") content = genSwitchConfig(n);
              else if (n.type === "firewall") content = genFirewallConfig(n);
              const hvGuide =
                n.type === "firewall" && n.isVirtual
                  ? genHypervisorGuide(pathDevices.find((d) => d.type === "hypervisor") || { name: n.hypervisorHost || "hypervisor", interfaces: [] }, n)
                  : null;
              return (
                <div key={n.id} className="sj-config-block">
                  <div className="sj-config-head">
                    <span>{n.name}</span>
                    <button onClick={() => copyText(content)}>copy</button>
                  </div>
                  {n.type !== "hypervisor" && <pre className="sj-config-pre">{content}</pre>}
                  {n.type === "hypervisor" && (
                    <div className="sj-config-pre">Port groups: {(n.interfaces || []).map((i) => `${i.name} (VLAN ${i.vlan})`).join(", ")}</div>
                  )}
                  {hvGuide && (
                    <div className="sj-guide">
                      <div className="sj-guide-title">Virtualization setup — {n.hypervisorHost || "hypervisor host"} ({n.hypervisorType})</div>
                      {hvGuide.map((s, idx) => (
                        <div key={idx} className="sj-guide-step">
                          <div className="sj-guide-step-num">{idx + 1}</div>
                          <div>
                            <div className="sj-guide-step-title">{s.title}</div>
                            <div className="sj-guide-step-body">{s.body}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

// ---------- Inspector panel ----------
function Inspector({ node, onChange, onRemove, onClose }) {
  const setIf = (idx, patch) => {
    const list = [...node.interfaces];
    list[idx] = { ...list[idx], ...patch };
    onChange({ interfaces: list });
  };
  const addIf = (blank) => onChange({ interfaces: [...(node.interfaces || []), { id: uid("if"), ...blank }] });
  const delIf = (idx) => onChange({ interfaces: node.interfaces.filter((_, i) => i !== idx) });

  const setRule = (idx, patch) => {
    const list = [...node.rules];
    list[idx] = { ...list[idx], ...patch };
    onChange({ rules: list });
  };
  const addRule = () => onChange({ rules: [...(node.rules || []), { id: uid("r"), action: "PASS", protocol: "Any", source: "any", destination: "any" }] });
  const delRule = (idx) => onChange({ rules: node.rules.filter((_, i) => i !== idx) });

  return (
    <aside className="sj-inspector">
      <div className="sj-inspector-head">
        <input className="sj-name-input" value={node.name} onChange={(e) => onChange({ name: e.target.value })} />
        <button className="sj-inspector-close" onClick={onClose}>✕</button>
      </div>
      <div className="sj-inspector-type">{DEVICE_DEFS[node.type].label}</div>

      {node.type === "endpoint" && (
        <div className="sj-form">
          <Field label="IP address"><input value={node.ip} onChange={(e) => onChange({ ip: e.target.value })} /></Field>
          <Field label="Subnet mask"><input value={node.subnet} onChange={(e) => onChange({ subnet: e.target.value })} /></Field>
          <Field label="Default gateway"><input value={node.gateway} onChange={(e) => onChange({ gateway: e.target.value })} /></Field>
          <Field label="VLAN"><input value={node.vlan} onChange={(e) => onChange({ vlan: e.target.value })} /></Field>
          <Field label="OS">
            <select value={node.os} onChange={(e) => onChange({ os: e.target.value })}>
              <option>Windows</option><option>Linux</option><option>macOS</option>
            </select>
          </Field>
          <Field label="Host firewall allows target traffic">
            <input type="checkbox" checked={node.icmpAllowed} onChange={(e) => onChange({ icmpAllowed: e.target.checked })} />
          </Field>
        </div>
      )}

      {node.type === "switch" && (
        <div className="sj-form">
          <div className="sj-sub-title">Interfaces</div>
          {node.interfaces.map((i, idx) => (
            <div key={i.id} className="sj-if-row">
              <input className="sj-if-name" value={i.name} onChange={(e) => setIf(idx, { name: e.target.value })} />
              <select value={i.mode} onChange={(e) => setIf(idx, { mode: e.target.value })}>
                <option value="access">Access</option>
                <option value="trunk">Trunk</option>
              </select>
              {i.mode === "access" ? (
                <input placeholder="VLAN" value={i.vlan ?? ""} onChange={(e) => setIf(idx, { vlan: e.target.value })} />
              ) : (
                <>
                  <input placeholder="Allowed VLANs (e.g. 10,11)" value={i.allowedVlans || ""} onChange={(e) => setIf(idx, { allowedVlans: e.target.value })} />
                  <input placeholder="Native" value={i.nativeVlan ?? 1} onChange={(e) => setIf(idx, { nativeVlan: e.target.value })} />
                </>
              )}
              <button className="sj-row-del" onClick={() => delIf(idx)}>✕</button>
            </div>
          ))}
          <button className="sj-add-row" onClick={() => addIf({ name: "Gi1/" + (node.interfaces.length + 1), mode: "access", vlan: 1, allowedVlans: "", nativeVlan: 1 })}>+ interface</button>
        </div>
      )}

      {node.type === "firewall" && (
        <div className="sj-form">
          <Field label="Virtual appliance (runs on a hypervisor)">
            <input type="checkbox" checked={node.isVirtual} onChange={(e) => onChange({ isVirtual: e.target.checked })} />
          </Field>
          {node.isVirtual && (
            <>
              <Field label="Hypervisor host"><input value={node.hypervisorHost} onChange={(e) => onChange({ hypervisorHost: e.target.value })} /></Field>
              <Field label="Hypervisor type">
                <select value={node.hypervisorType} onChange={(e) => onChange({ hypervisorType: e.target.value })}>
                  <option>ESXi</option><option>Proxmox</option><option>Hyper-V</option>
                </select>
              </Field>
            </>
          )}
          <div className="sj-sub-title">Interfaces</div>
          {node.interfaces.map((i, idx) => (
            <div key={i.id} className="sj-if-row sj-if-row-fw">
              <input className="sj-if-name" value={i.name} onChange={(e) => setIf(idx, { name: e.target.value })} />
              <select value={i.role} onChange={(e) => setIf(idx, { role: e.target.value })}>
                <option>LAN</option><option>WAN</option><option>OPT</option>
              </select>
              <input placeholder="IP" value={i.ip} onChange={(e) => setIf(idx, { ip: e.target.value })} />
              <input placeholder="Subnet" value={i.subnet} onChange={(e) => setIf(idx, { subnet: e.target.value })} />
              <input placeholder="VLAN" value={i.vlan ?? ""} onChange={(e) => setIf(idx, { vlan: e.target.value })} />
              {node.isVirtual && <input placeholder="Port group" value={i.portGroup || ""} onChange={(e) => setIf(idx, { portGroup: e.target.value })} />}
              <button className="sj-row-del" onClick={() => delIf(idx)}>✕</button>
            </div>
          ))}
          <button className="sj-add-row" onClick={() => addIf({ name: "em" + node.interfaces.length, role: "LAN", ip: "", subnet: "255.255.255.0", vlan: 1, portGroup: "" })}>+ interface</button>

          <div className="sj-sub-title">Rules (top-down, default-deny)</div>
          {node.rules.map((r, idx) => (
            <div key={r.id} className="sj-rule-row">
              <select value={r.action} onChange={(e) => setRule(idx, { action: e.target.value })}>
                <option>PASS</option><option>DENY</option>
              </select>
              <select value={r.protocol} onChange={(e) => setRule(idx, { protocol: e.target.value })}>
                <option>Any</option><option>ICMP</option><option>HTTP</option><option>HTTPS</option><option>DNS</option><option>Custom</option>
              </select>
              <input placeholder="Source CIDR / any" value={r.source} onChange={(e) => setRule(idx, { source: e.target.value })} />
              <input placeholder="Destination CIDR / any" value={r.destination} onChange={(e) => setRule(idx, { destination: e.target.value })} />
              <button className="sj-row-del" onClick={() => delRule(idx)}>✕</button>
            </div>
          ))}
          <button className="sj-add-row" onClick={addRule}>+ rule</button>
        </div>
      )}

      {node.type === "hypervisor" && (
        <div className="sj-form">
          <Field label="Host type">
            <select value={node.hostType} onChange={(e) => onChange({ hostType: e.target.value })}>
              <option>ESXi</option><option>Proxmox</option><option>Hyper-V</option>
            </select>
          </Field>
          <div className="sj-sub-title">Port groups</div>
          {node.interfaces.map((i, idx) => (
            <div key={i.id} className="sj-if-row">
              <input className="sj-if-name" value={i.name} onChange={(e) => setIf(idx, { name: e.target.value })} />
              <input placeholder="VLAN" value={i.vlan ?? ""} onChange={(e) => setIf(idx, { vlan: e.target.value })} />
              <button className="sj-row-del" onClick={() => delIf(idx)}>✕</button>
            </div>
          ))}
          <button className="sj-add-row" onClick={() => addIf({ name: "PG_NEW", vlan: 1 })}>+ port group</button>
        </div>
      )}

      <button className="sj-remove-node" onClick={onRemove}>Remove this device</button>
    </aside>
  );
}

function Field({ label, children }) {
  return (
    <label className="sj-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

// ---------- styles ----------
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.sj-root{
  --bg:#211d19; --panel:#2a251f; --panel-2:#332c24; --line:#463c30;
  --ink:#efe6d8; --ink-dim:#b8a992; --brass:#c99a4e; --thread:#a8503a;
  --ok:#7c9b6b; --bad:#b1503a;
  font-family:'Inter',sans-serif; color:var(--ink); background:var(--bg);
  min-height:100vh; display:flex; flex-direction:column;
}
.sj-header{ display:flex; align-items:center; justify-content:space-between; padding:18px 28px; border-bottom:1px solid var(--line); }
.sj-brand{ display:flex; align-items:center; gap:12px; }
.sj-brand-mark{ font-size:22px; color:var(--brass); }
.sj-brand-name{ font-family:'Fraunces',serif; font-size:22px; font-weight:600; letter-spacing:.01em; }
.sj-brand-tag{ font-size:12px; color:var(--ink-dim); margin-top:2px; }
.sj-tabs{ display:flex; gap:4px; background:var(--panel); border:1px solid var(--line); border-radius:8px; padding:3px; }
.sj-tab{ background:none; border:none; color:var(--ink-dim); padding:7px 16px; border-radius:6px; font-size:13px; cursor:pointer; font-family:inherit; }
.sj-tab-active{ background:var(--panel-2); color:var(--ink); }

.sj-canvas-layout{ flex:1; display:flex; min-height:0; }
.sj-palette{ width:200px; border-right:1px solid var(--line); padding:16px; display:flex; flex-direction:column; gap:8px; }
.sj-panel-title{ font-size:11px; text-transform:uppercase; letter-spacing:.08em; color:var(--ink-dim); margin-bottom:4px; }
.sj-palette-btn{ text-align:left; background:var(--panel); border:1px solid var(--line); color:var(--ink); padding:9px 10px; border-radius:7px; font-size:13px; cursor:pointer; font-family:inherit; display:flex; align-items:center; gap:8px; }
.sj-palette-btn:hover{ border-color:var(--brass); }
.sj-btn-thread{ background:var(--thread); border-color:var(--thread); color:#f4ede0; }
.sj-btn-thread-active{ background:var(--bad); border-color:var(--bad); }
.sj-divider{ height:1px; background:var(--line); margin:6px 0; }
.sj-hint{ font-size:12px; color:var(--brass); background:var(--panel-2); padding:8px; border-radius:6px; }
.sj-node-glyph{ color:var(--brass); font-size:15px; }

.sj-canvas{ flex:1; position:relative; overflow:auto; background-image:radial-gradient(var(--line) 1px, transparent 1px); background-size:22px 22px; }
.sj-edges{ position:absolute; inset:0; pointer-events:none; overflow:visible; }
.sj-thread{ stroke:var(--line); stroke-width:2; }
.sj-thread-active{ stroke:var(--thread); stroke-width:3; }
.sj-edge-x{ fill:var(--panel-2); stroke:var(--line); stroke-width:1; pointer-events:all; cursor:pointer; opacity:0; }
.sj-canvas svg g:hover .sj-edge-x{ opacity:1; }

.sj-node{ position:absolute; width:140px; background:var(--panel); border:1px solid var(--line); border-radius:9px; padding:9px 10px; cursor:grab; user-select:none; box-shadow:0 2px 6px rgba(0,0,0,.25); }
.sj-node-selected{ border-color:var(--brass); }
.sj-node-pending{ border-color:var(--thread); box-shadow:0 0 0 2px var(--thread); }
.sj-node-onpath{ border-color:var(--thread); }
.sj-node-head{ display:flex; align-items:center; gap:6px; }
.sj-node-name{ font-size:13px; font-weight:500; }
.sj-node-sub{ font-size:11px; color:var(--ink-dim); margin-top:3px; font-family:'JetBrains Mono',monospace; }
.sj-if-picker{ position:absolute; top:100%; left:0; margin-top:6px; background:var(--panel-2); border:1px solid var(--brass); border-radius:7px; padding:6px; display:flex; flex-direction:column; gap:4px; z-index:5; min-width:120px; }
.sj-if-picker button{ background:var(--panel); border:1px solid var(--line); color:var(--ink); font-size:12px; padding:5px 7px; border-radius:5px; cursor:pointer; font-family:'JetBrains Mono',monospace; text-align:left; }
.sj-if-picker button:hover{ border-color:var(--brass); }
.sj-if-add{ color:var(--brass) !important; }

.sj-empty{ padding:40px; color:var(--ink-dim); font-size:13px; }

.sj-inspector{ width:300px; border-left:1px solid var(--line); padding:16px; overflow-y:auto; }
.sj-inspector-head{ display:flex; align-items:center; gap:8px; }
.sj-name-input{ flex:1; background:var(--panel-2); border:1px solid var(--line); color:var(--ink); padding:6px 8px; border-radius:6px; font-size:14px; font-family:inherit; }
.sj-inspector-close{ background:none; border:none; color:var(--ink-dim); cursor:pointer; font-size:14px; }
.sj-inspector-type{ font-size:11px; color:var(--brass); text-transform:uppercase; letter-spacing:.06em; margin:6px 0 14px; }
.sj-form{ display:flex; flex-direction:column; gap:10px; }
.sj-field{ display:flex; flex-direction:column; gap:4px; font-size:12px; color:var(--ink-dim); }
.sj-field input[type=text], .sj-field input:not([type]), .sj-field select{ background:var(--panel-2); border:1px solid var(--line); color:var(--ink); padding:6px 8px; border-radius:6px; font-family:'JetBrains Mono',monospace; font-size:12px; }
.sj-field input[type=checkbox]{ width:16px; height:16px; }
.sj-sub-title{ font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:var(--ink-dim); margin-top:8px; }
.sj-if-row, .sj-rule-row{ display:flex; gap:5px; flex-wrap:wrap; align-items:center; background:var(--panel-2); padding:6px; border-radius:6px; }
.sj-if-row input, .sj-if-row select, .sj-rule-row input, .sj-rule-row select{ background:var(--panel); border:1px solid var(--line); color:var(--ink); padding:5px 6px; border-radius:5px; font-size:11px; font-family:'JetBrains Mono',monospace; flex:1; min-width:52px; }
.sj-if-name{ flex:1.2 !important; }
.sj-row-del{ background:none; border:none; color:var(--bad); cursor:pointer; font-size:13px; }
.sj-add-row{ background:none; border:1px dashed var(--line); color:var(--brass); padding:6px; border-radius:6px; cursor:pointer; font-size:12px; font-family:inherit; }
.sj-remove-node{ margin-top:18px; width:100%; background:none; border:1px solid var(--bad); color:var(--bad); padding:8px; border-radius:6px; cursor:pointer; font-size:12px; font-family:inherit; }

.sj-trace-layout{ flex:1; padding:22px 28px; overflow-y:auto; }
.sj-trace-controls{ display:flex; gap:14px; align-items:flex-end; flex-wrap:wrap; margin-bottom:20px; }
.sj-trace-controls label{ display:flex; flex-direction:column; gap:4px; font-size:11px; color:var(--ink-dim); }
.sj-trace-controls select{ background:var(--panel); border:1px solid var(--line); color:var(--ink); padding:8px 10px; border-radius:7px; font-size:13px; font-family:inherit; min-width:180px; }
.sj-trace-controls button{ padding:9px 18px; border-radius:7px; border:none; cursor:pointer; font-size:13px; font-family:inherit; }

.sj-verdict{ padding:14px 16px; border-radius:8px; font-size:14px; font-weight:500; margin-bottom:18px; display:flex; flex-direction:column; gap:3px; }
.sj-verdict-good{ background:rgba(124,155,107,.15); border:1px solid var(--ok); color:var(--ok); }
.sj-verdict-bad{ background:rgba(177,80,58,.15); border:1px solid var(--bad); color:var(--bad); }
.sj-verdict-sub{ font-size:12px; font-weight:400; color:var(--ink-dim); }

.sj-hops{ display:flex; flex-direction:column; gap:10px; }
.sj-hop-card{ display:flex; gap:14px; background:var(--panel); border:1px solid var(--line); border-radius:9px; padding:14px 16px; }
.sj-hop-num{ font-family:'JetBrains Mono',monospace; color:var(--brass); font-size:13px; min-width:22px; }
.sj-hop-title{ display:flex; gap:10px; align-items:baseline; flex-wrap:wrap; }
.sj-hop-device{ font-weight:600; font-size:14px; }
.sj-hop-iface{ font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--brass); }
.sj-hop-layer{ font-size:10px; color:var(--ink-dim); border:1px solid var(--line); padding:1px 6px; border-radius:10px; }
.sj-hop-action{ font-size:12.5px; color:var(--thread); margin-top:4px; font-weight:500; }
.sj-hop-detail{ font-size:12.5px; color:var(--ink-dim); margin-top:4px; line-height:1.5; }

.sj-configs-layout{ flex:1; padding:22px 28px; overflow-y:auto; display:flex; flex-direction:column; gap:18px; }
.sj-config-block{ background:var(--panel); border:1px solid var(--line); border-radius:9px; overflow:hidden; }
.sj-config-head{ display:flex; justify-content:space-between; align-items:center; padding:10px 14px; border-bottom:1px solid var(--line); font-size:13px; font-weight:500; }
.sj-config-head button{ background:var(--panel-2); border:1px solid var(--line); color:var(--ink-dim); font-size:11px; padding:4px 10px; border-radius:5px; cursor:pointer; font-family:inherit; }
.sj-config-pre{ margin:0; padding:14px 16px; font-family:'JetBrains Mono',monospace; font-size:12px; line-height:1.6; color:var(--ink); white-space:pre-wrap; overflow-x:auto; }
.sj-guide{ padding:14px 16px; border-top:1px solid var(--line); }
.sj-guide-title{ font-size:12px; color:var(--brass); margin-bottom:10px; font-weight:500; }
.sj-guide-step{ display:flex; gap:10px; margin-bottom:10px; }
.sj-guide-step-num{ font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--ink-dim); border:1px solid var(--line); border-radius:50%; width:20px; height:20px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.sj-guide-step-title{ font-size:12.5px; font-weight:500; }
.sj-guide-step-body{ font-size:12px; color:var(--ink-dim); margin-top:2px; line-height:1.55; white-space:pre-wrap; }
`;
