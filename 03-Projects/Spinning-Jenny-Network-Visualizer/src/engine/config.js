function interfaceCommands(iface) {
  const lines = [`interface ${iface.name}`];
  if (iface.description) lines.push(` description ${iface.description}`);
  if (iface.mode === "access") {
    lines.push(" switchport mode access", ` switchport access vlan ${iface.vlan || 1}`);
  } else if (iface.mode === "trunk") {
    lines.push(" switchport mode trunk", ` switchport trunk native vlan ${iface.nativeVlan || 1}`);
    if (iface.allowedVlans?.length) lines.push(` switchport trunk allowed vlan ${iface.allowedVlans.join(",")}`);
  } else if (iface.mode === "routed") {
    lines.push(" no switchport");
    if (iface.ip) lines.push(` ip address ${iface.ip} ${iface.subnet || "255.255.255.0"}`);
  }
  lines.push(" no shutdown", "!");
  return lines;
}

export function generateCisco(node) {
  const d = node.data;
  const lines = [`! Spinning Jenny configuration — ${d.name}`, "enable", "configure terminal"];
  const vlans = [...new Set((d.interfaces || []).flatMap((i) => i.vlan ? [Number(i.vlan)] : []))].filter(Boolean);
  vlans.forEach((v) => lines.push(`vlan ${v}`, ` name VLAN_${v}`, " exit"));
  (d.interfaces || []).forEach((iface) => lines.push(...interfaceCommands(iface)));
  lines.push("end", "write memory");
  return lines.join("\n");
}

export function generateLinux(node) {
  const d = node.data;
  const iface = d.interfaces?.find((i) => i.ip) || d.interfaces?.[0];
  if (!iface) return "# No configured interface.";
  return `# Spinning Jenny — ${d.name}
sudo ip addr flush dev ${iface.name}
sudo ip addr add ${iface.ip}/${prefixFromMask(iface.subnet)} dev ${iface.name}
sudo ip link set ${iface.name} up
${iface.gateway ? `sudo ip route replace default via ${iface.gateway}` : "# No default gateway configured."}`;
}

function prefixFromMask(mask = "255.255.255.0") {
  return mask.split(".").reduce((n, oct) => n + (Number(oct).toString(2).padStart(8, "0").replaceAll("0", "").length), 0);
}

export function generatePfSense(node) {
  const d = node.data;
  const lines = [
    `# Spinning Jenny — ${d.name}`,
    "# pfSense is configured primarily through the GUI.",
    "# Map the virtual NICs to the interfaces below, then assign VLANs/IPs.",
    ""
  ];
  (d.interfaces || []).forEach((i) => {
    lines.push(`# ${i.name} — ${i.role || "Interface"}`);
    lines.push(`# IP: ${i.ip || "unassigned"}  Mask: ${i.subnet || "unassigned"}  VLAN: ${i.vlan || "untagged"}`);
    if (i.portGroup) lines.push(`# ESXi/Proxmox network: ${i.portGroup}`);
  });
  lines.push("", "# Firewall rules");
  (d.firewallRules || []).forEach((r) => {
    lines.push(`# ${r.action} ${r.protocol} ${r.source} -> ${r.destination}${r.port ? ` port ${r.port}` : ""}`);
  });
  return lines.join("\n");
}

export function generateConfig(node) {
  const type = node.data.deviceType;
  if (type === "l2_switch" || type === "l3_switch") return { language: "cisco", code: generateCisco(node) };
  if (type === "endpoint") return { language: "bash", code: generateLinux(node) };
  if (type === "firewall") return { language: "text", code: generatePfSense(node) };
  return { language: "text", code: `# ${node.data.name}\n# No device-specific configuration generator is required for this device type yet.` };
}