export const DEVICE_TYPES = {
  endpoint: { label: "End Device", icon: "monitor", category: "Endpoints" },
  l2_switch: { label: "Layer 2 Switch", icon: "switch", category: "Switching" },
  l3_switch: { label: "Layer 3 Switch", icon: "router", category: "Switching" },
  router: { label: "Router", icon: "router", category: "Routing" },
  firewall: { label: "Firewall", icon: "shield", category: "Security" },
  hypervisor: { label: "Hypervisor / vSwitch", icon: "server", category: "Virtualization" }
};

export const TRAFFIC_TYPES = [
  { value: "ICMP", label: "ICMP — Ping", port: "—" },
  { value: "HTTP", label: "HTTP", port: "TCP 80" },
  { value: "HTTPS", label: "HTTPS", port: "TCP 443" },
  { value: "DNS", label: "DNS", port: "UDP 53" },
  { value: "CUSTOM", label: "Custom TCP/UDP", port: "Custom" }
];

const pos = (x, y) => ({ x, y });

export function makeDemoTopology() {
  const nodes = [
    {
      id: "laptop_1",
      type: "network",
      position: pos(50, 260),
      data: {
        name: "Laptop",
        deviceType: "endpoint",
        isVirtual: false,
        os: "Windows",
        interfaces: [
          { name: "eth0", ip: "192.168.10.50", subnet: "255.255.255.0", gateway: "192.168.10.1", vlan: 10, mode: "access" }
        ],
        osFirewallAllowsIcmp: true
      }
    },
    {
      id: "switch_2",
      type: "network",
      position: pos(310, 245),
      data: {
        name: "Switch 2",
        deviceType: "l2_switch",
        model: "Cisco Catalyst",
        interfaces: [
          { name: "Fa1/1", mode: "access", vlan: 10, allowedVlans: [10], nativeVlan: 1 },
          { name: "Gi1/1", mode: "trunk", vlan: 10, allowedVlans: [10, 11], nativeVlan: 1 }
        ]
      }
    },
    {
      id: "switch_1",
      type: "network",
      position: pos(575, 245),
      data: {
        name: "Switch 1",
        deviceType: "l2_switch",
        model: "Cisco Catalyst",
        interfaces: [
          { name: "Gi1/10", mode: "trunk", vlan: 10, allowedVlans: [10, 11], nativeVlan: 1 },
          { name: "Gi1/4", mode: "trunk", vlan: 10, allowedVlans: [10, 11], nativeVlan: 1 }
        ]
      }
    },
    {
      id: "esxi_1",
      type: "network",
      position: pos(840, 245),
      data: {
        name: "ESXi Host 1",
        deviceType: "hypervisor",
        platform: "ESXi",
        interfaces: [
          { name: "vmnic1", mode: "trunk", vlan: 10, allowedVlans: [10, 11], nativeVlan: 1 },
          { name: "PG_VLAN10", mode: "tagged", vlan: 10, allowedVlans: [10] },
          { name: "PG_VLAN11", mode: "tagged", vlan: 11, allowedVlans: [11] }
        ]
      }
    },
    {
      id: "pfsense_1",
      type: "network",
      position: pos(1100, 155),
      data: {
        name: "pfSense Firewall",
        deviceType: "firewall",
        isVirtual: true,
        hypervisorHost: "ESXi Host 1",
        platform: "pfSense",
        interfaces: [
          { name: "em1", role: "LAN", ip: "192.168.10.1", subnet: "255.255.255.0", vlan: 10, portGroup: "PG_VLAN10", mode: "routed" },
          { name: "em0", role: "WAN", ip: "192.168.11.1", subnet: "255.255.255.0", vlan: 11, portGroup: "PG_VLAN11", mode: "routed" }
        ],
        firewallRules: [
          { action: "PASS", protocol: "ICMP", source: "192.168.10.0/24", destination: "192.168.11.0/24", port: "" }
        ]
      }
    },
    {
      id: "vm3",
      type: "network",
      position: pos(1370, 155),
      data: {
        name: "VM3",
        deviceType: "endpoint",
        isVirtual: true,
        os: "Windows",
        interfaces: [
          { name: "eth0", ip: "192.168.11.10", subnet: "255.255.255.0", gateway: "192.168.11.1", vlan: 11, mode: "access" }
        ],
        osFirewallAllowsIcmp: true
      }
    }
  ];

  const edges = [
    { id: "e1", source: "laptop_1", target: "switch_2", sourceHandle: "eth0", targetHandle: "Fa1/1", type: "smoothstep", data: { fromInterface: "eth0", toInterface: "Fa1/1" } },
    { id: "e2", source: "switch_2", target: "switch_1", sourceHandle: "Gi1/1", targetHandle: "Gi1/10", type: "smoothstep", data: { fromInterface: "Gi1/1", toInterface: "Gi1/10" } },
    { id: "e3", source: "switch_1", target: "esxi_1", sourceHandle: "Gi1/4", targetHandle: "vmnic1", type: "smoothstep", data: { fromInterface: "Gi1/4", toInterface: "vmnic1" } },
    { id: "e4", source: "esxi_1", target: "pfsense_1", sourceHandle: "PG_VLAN10", targetHandle: "em1", type: "smoothstep", data: { fromInterface: "PG_VLAN10", toInterface: "em1" } },
    { id: "e5", source: "pfsense_1", target: "esxi_1", sourceHandle: "em0", targetHandle: "PG_VLAN11", type: "smoothstep", data: { fromInterface: "em0", toInterface: "PG_VLAN11" } },
    { id: "e6", source: "esxi_1", target: "vm3", sourceHandle: "PG_VLAN11", targetHandle: "eth0", type: "smoothstep", data: { fromInterface: "PG_VLAN11", toInterface: "eth0" } }
  ];

  return { canvas: { zoom: 1, pan: [0, 0] }, nodes, edges };
}