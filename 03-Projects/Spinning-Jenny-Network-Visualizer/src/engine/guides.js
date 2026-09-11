export function virtualizationGuide(node) {
  const d = node.data;
  if (d.deviceType !== "firewall" || !d.isVirtual) return null;
  const platform = d.hypervisorHost?.toLowerCase().includes("proxmox") ? "Proxmox" : "ESXi";
  const interfaces = d.interfaces || [];
  return {
    title: `${d.name} on ${platform}`,
    steps: platform === "ESXi" ? [
      "Create or verify a virtual switch and the physical uplink used by the firewall VM.",
      `Create port groups for the VLANs used by the firewall: ${interfaces.map((i) => `${i.portGroup || "unnamed"} (VLAN ${i.vlan ?? "—"})`).join(", ")}.`,
      "For a trunk-style uplink, ensure the ESXi/network design allows the VLAN tags required by the virtual firewall. Use VLAN 4095 only when the chosen ESXi design intentionally exposes an 802.1Q trunk to the guest.",
      "Add one virtual NIC per firewall interface and connect each vNIC to the intended port group.",
      "Boot pfSense and map its detected NICs to the intended LAN/WAN roles.",
      "Assign the interface IP addresses and VLAN context shown in the topology.",
      "Create firewall rules from the generated rule list. Keep default-deny behavior unless a specific PASS rule is required.",
      "Test from the source endpoint, then inspect the packet trace and firewall logs if the flow fails."
    ] : [
      "Create the required Linux bridge or VLAN-aware bridge on the Proxmox host.",
      `Create networks for: ${interfaces.map((i) => `${i.portGroup || "unnamed"} (VLAN ${i.vlan ?? "—"})`).join(", ")}.`,
      "Attach one virtual NIC to each intended pfSense interface.",
      "If using a trunk, make the bridge/VLAN configuration consistent with the switch port and allow only the required VLANs.",
      "Boot pfSense, identify the virtual NICs, and map them to LAN/WAN roles.",
      "Assign interface addresses and verify the gateway relationships in the topology.",
      "Create the required firewall rules and leave unrelated traffic blocked.",
      "Run the Spinning Jenny trace and compare the observed result with the expected VLAN and routing transitions."
    ]
  };
}