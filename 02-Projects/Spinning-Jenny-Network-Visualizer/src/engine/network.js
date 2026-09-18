const ipToInt = (ip) => {
  const p = String(ip || "").split(".").map(Number);
  if (p.length !== 4 || p.some((x) => !Number.isInteger(x) || x < 0 || x > 255)) return null;
  return (((p[0] << 24) >>> 0) + (p[1] << 16) + (p[2] << 8) + p[3]) >>> 0;
};

const maskToInt = (mask) => {
  if (/^\d{1,2}$/.test(String(mask))) {
    const prefix = Number(mask);
    if (prefix < 0 || prefix > 32) return null;
    return prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  }
  return ipToInt(mask);
};

export function sameSubnet(ipA, ipB, mask) {
  const a = ipToInt(ipA), b = ipToInt(ipB), m = maskToInt(mask);
  return a !== null && b !== null && m !== null && ((a & m) >>> 0) === ((b & m) >>> 0);
}

export function cidrContains(cidr, ip) {
  const [network, prefixText] = String(cidr || "").split("/");
  const n = ipToInt(network), target = ipToInt(ip), prefix = Number(prefixText);
  if (n === null || target === null || !Number.isInteger(prefix) || prefix < 0 || prefix > 32) return false;
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  return ((n & mask) >>> 0) === ((target & mask) >>> 0);
}

function getInterface(node, name) {
  return node?.data?.interfaces?.find((i) => i.name === name) || null;
}

function edgeBetween(edges, a, b) {
  return edges.find((e) =>
    (e.source === a && e.target === b) || (e.source === b && e.target === a)
  );
}

function otherEnd(edge, nodeId) {
  return edge.source === nodeId ? edge.target : edge.source;
}

function connectedEdges(nodeId, edges) {
  return edges.filter((e) => e.source === nodeId || e.target === nodeId);
}

function interfaceOnEdge(edge, nodeId) {
  if (!edge) return null;
  return edge.source === nodeId ? edge.data?.fromInterface : edge.data?.toInterface;
}

function endpointIp(node) {
  return node?.data?.interfaces?.find((i) => i.ip)?.ip || "";
}

function endpointSubnet(node) {
  return node?.data?.interfaces?.find((i) => i.ip)?.subnet || "255.255.255.0";
}

function nodeCanRoute(node) {
  const type = node?.data?.deviceType;
  return type === "router" || type === "l3_switch" || type === "firewall";
}

function firewallAllows(node, protocol, sourceIp, destinationIp, port) {
  const rules = node?.data?.firewallRules || [];
  for (const rule of rules) {
    const protocolMatch = rule.protocol === "ANY" || rule.protocol === protocol;
    const sourceMatch = rule.source === "ANY" || cidrContains(rule.source, sourceIp);
    const destMatch = rule.destination === "ANY" || cidrContains(rule.destination, destinationIp);
    const portMatch = !rule.port || rule.port === String(port || "");
    if (protocolMatch && sourceMatch && destMatch && portMatch) return rule.action === "PASS";
  }
  return false;
}

function describeInterface(iface) {
  if (!iface) return "No interface metadata";
  if (iface.mode === "access") return `Access port, VLAN ${iface.vlan ?? "?"}`;
  if (iface.mode === "trunk") return `802.1Q trunk, allowed VLANs ${(iface.allowedVlans || []).join(", ") || "none"}`;
  if (iface.mode === "routed") return `Routed interface${iface.ip ? ` (${iface.ip})` : ""}`;
  if (iface.mode === "tagged") return `Tagged virtual network, VLAN ${iface.vlan ?? "?"}`;
  return iface.mode || "Unspecified";
}

function shortestNodePath(nodes, edges, sourceId, targetId) {
  // Topology discovery is intentionally separate from VLAN validation.
  // A routed hop is allowed to change VLAN context, so filtering the whole
  // graph by the source VLAN would incorrectly make valid L3 paths impossible.
  const queue = [[sourceId]];
  const visited = new Set([sourceId]);

  while (queue.length) {
    const path = queue.shift();
    const current = path[path.length - 1];
    if (current === targetId) return path;

    for (const edge of connectedEdges(current, edges)) {
      const next = otherEnd(edge, current);
      if (visited.has(next)) continue;
      visited.add(next);
      queue.push([...path, next]);
    }
  }
  return null;
}

export function tracePacket(topology, sourceId, targetId, traffic = "ICMP") {
  const { nodes, edges } = topology;
  const source = nodes.find((n) => n.id === sourceId);
  const target = nodes.find((n) => n.id === targetId);

  if (!source || !target) return { ok: false, error: "Source and target devices must be selected." };

  const sourceIp = endpointIp(source);
  const targetIp = endpointIp(target);
  if (!sourceIp || !targetIp) return { ok: false, error: "Both endpoints need an IP address." };

  const sourceIface = source.data.interfaces.find((i) => i.ip);
  const targetIface = target.data.interfaces.find((i) => i.ip);
  const same = sameSubnet(sourceIp, targetIp, sourceIface?.subnet || "255.255.255.0");
  const protocol = traffic === "DNS" ? "DNS" : traffic === "CUSTOM" ? "TCP" : traffic;
  const port = traffic === "HTTP" ? 80 : traffic === "HTTPS" ? 443 : traffic === "DNS" ? 53 : "";

  const vlan = same ? sourceIface?.vlan : sourceIface?.vlan;
  const nodePath = shortestNodePath(nodes, edges, sourceId, targetId);

  if (!nodePath) {
    return {
      ok: false,
      error: `No usable path found for VLAN ${vlan ?? "unknown"}. Check links, access ports, trunks, and allowed VLANs.`
    };
  }

  const hops = [];
  const pushHop = (node, ifaceName, layer, action, details, status = "pass") => {
    const iface = getInterface(node, ifaceName);
    hops.push({
      id: hops.length + 1,
      nodeId: node.id,
      device: node.data.name,
      interface: ifaceName || "—",
      layer,
      tagging: iface ? describeInterface(iface) : "—",
      action,
      details,
      status
    });
  };

  pushHop(
    source,
    sourceIface.name,
    "L3 → L2",
    same ? "Local delivery" : "Default gateway lookup",
    same
      ? `Target ${targetIp} is inside the local subnet. The endpoint can resolve the destination on its local broadcast domain.`
      : `Target ${targetIp} is outside ${sourceIp}/${sourceIface.subnet}. The endpoint sends the Ethernet frame toward its configured default gateway ${sourceIface.gateway || "not configured"}.`
  );

  for (let i = 0; i < nodePath.length - 1; i++) {
    const current = nodes.find((n) => n.id === nodePath[i]);
    const next = nodes.find((n) => n.id === nodePath[i + 1]);
    const edge = edgeBetween(edges, current.id, next.id);
    const outName = interfaceOnEdge(edge, current.id);
    const inName = interfaceOnEdge(edge, next.id);
    const out = getInterface(current, outName);
    const incoming = getInterface(next, inName);

    if (current.id !== source.id) {
      if (current.data.deviceType === "firewall") {
        const routeIface = current.data.interfaces?.find((x) => x.vlan !== vlan && x.ip && sameSubnet(x.ip, targetIp, x.subnet));
        if (!routeIface && !sameSubnet(current.data.interfaces?.[0]?.ip, targetIp, current.data.interfaces?.[0]?.subnet || "255.255.255.0")) {
          // Continue; the explicit firewall rule below determines the result.
        }
        const allowed = firewallAllows(current, protocol, sourceIp, targetIp, port);
        pushHop(
          current,
          inName,
          "L3/L4",
          allowed ? "Firewall rule matched — PASS" : "Firewall rule evaluation — DENY",
          allowed
            ? `Stateful firewall permits ${protocol}${port ? `/${port}` : ""} from ${sourceIp} to ${targetIp} and records connection state.`
            : `No matching PASS rule permits ${protocol}${port ? `/${port}` : ""} from ${sourceIp} to ${targetIp}. Default-deny behavior blocks the flow.`,
          allowed ? "pass" : "fail"
        );
        if (!allowed) return { ok: false, error: "Packet blocked by firewall policy.", hops };
      } else if (nodeCanRoute(current) && !same) {
        const routed = current.data.interfaces?.find((x) => x.ip && sameSubnet(x.ip, targetIp, x.subnet));
        pushHop(
          current,
          inName,
          "L3 Routing",
          "Routing boundary",
          routed
            ? `The device has a Layer 3 interface in the destination subnet (${routed.ip}/${routed.subnet}). The Layer 2 context is replaced for the next segment.`
            : `The device is a Layer 3 boundary, but no directly connected interface matching ${targetIp} was found.`
        );
      }
    }

    if (next.data.deviceType === "l2_switch") {
      pushHop(
        next,
        inName,
        "L2",
        incoming?.mode === "access" ? "Access-port VLAN classification" : "Switch forwarding",
        incoming?.mode === "access"
          ? `The untagged frame enters ${inName} and is associated with VLAN ${incoming.vlan}. The switch uses its MAC/CAM table to select the outgoing port.`
          : `The frame is carried through ${inName}. ${describeInterface(incoming)}. The switch forwards the frame without performing Layer 3 routing.`
      );
    } else if (next.data.deviceType === "hypervisor") {
      pushHop(
        next,
        inName,
        "L2",
        "Virtual switch mapping",
        `The hypervisor receives the Ethernet traffic and maps VLAN ${incoming?.vlan ?? vlan ?? "?"} to the configured virtual network/port group.`
      );
    }
  }

  const targetHop = hops.find((h) => h.nodeId === target.id);
  if (!targetHop) {
    pushHop(
      target,
      targetIface.name,
      "L3",
      "Destination delivery",
      `${target.data.name} receives the ${protocol} traffic on ${targetIface.name}. Its host firewall is checked before the application/OS accepts it.`
    );
  }

  if (traffic === "ICMP" && target.data.osFirewallAllowsIcmp === false) {
    const last = hops[hops.length - 1];
    if (last) {
      last.status = "fail";
      last.action = "Host firewall — DENY";
      last.details = `${target.data.name} does not allow ICMP in its OS firewall configuration.`;
    }
    return { ok: false, error: "Destination host firewall blocked ICMP.", hops };
  }

  if (traffic === "ICMP") {
    hops.push({
      id: hops.length + 1,
      nodeId: target.id,
      device: target.data.name,
      interface: targetIface.name,
      layer: "L3",
      tagging: "Reply / reverse path",
      action: "ICMP Echo Reply",
      details: "The destination replies. Stateful devices can associate the return traffic with the existing flow and send it back through the reverse path.",
      status: "pass"
    });
  }

  return {
    ok: true,
    source: { id: source.id, name: source.data.name, ip: sourceIp },
    target: { id: target.id, name: target.data.name, ip: targetIp },
    traffic,
    sameSubnet: same,
    hops
  };
}