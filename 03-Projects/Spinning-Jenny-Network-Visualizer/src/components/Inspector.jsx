import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { DEVICE_TYPES } from "../data/demo";

const clone = (x) => JSON.parse(JSON.stringify(x));

export default function Inspector({ node, onChange }) {
  if (!node) {
    return <aside className="inspector empty"><div className="empty-icon">⌁</div><h3>Select a device</h3><p>Choose a node on the canvas to configure its identity, interfaces, VLANs, IP addressing, or firewall policy.</p></aside>;
  }

  const d = node.data;
  const update = (patch) => onChange(node.id, { ...d, ...patch });
  const updateInterface = (index, patch) => {
    const interfaces = clone(d.interfaces || []);
    interfaces[index] = { ...interfaces[index], ...patch };
    update({ interfaces });
  };
  const addInterface = () => update({ interfaces: [...(d.interfaces || []), { name: `eth${d.interfaces?.length || 0}`, mode: "access", vlan: 1, ip: "", subnet: "255.255.255.0", gateway: "" }] });
  const removeInterface = (index) => update({ interfaces: d.interfaces.filter((_, i) => i !== index) });
  const addRule = () => update({ firewallRules: [...(d.firewallRules || []), { action: "PASS", protocol: "ICMP", source: "ANY", destination: "ANY", port: "" }] });
  const updateRule = (index, patch) => {
    const rules = clone(d.firewallRules || []);
    rules[index] = { ...rules[index], ...patch };
    update({ firewallRules: rules });
  };

  return (
    <aside className="inspector">
      <div className="panel-title">
        <div><span className="eyebrow">INSPECTOR</span><h2>{d.name}</h2></div>
        <span className="type-badge">{DEVICE_TYPES[d.deviceType]?.label}</span>
      </div>

      <section>
        <label>Device name<input value={d.name || ""} onChange={(e) => update({ name: e.target.value })} /></label>
        <div className="two-col">
          <label>Device type<select value={d.deviceType} onChange={(e) => update({ deviceType: e.target.value })}>{Object.entries(DEVICE_TYPES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}</select></label>
          <label className="checkbox-label"><input type="checkbox" checked={!!d.isVirtual} onChange={(e) => update({ isVirtual: e.target.checked })} /> Virtual</label>
        </div>
        {d.isVirtual && <label>Platform / host<input value={d.hypervisorHost || d.platform || ""} onChange={(e) => update({ hypervisorHost: e.target.value, platform: e.target.value })} placeholder="ESXi Host 1" /></label>}
      </section>

      <section>
        <div className="section-heading"><div><span className="eyebrow">INTERFACES</span><h3>Ports & addressing</h3></div><button className="icon-btn" onClick={addInterface} title="Add interface"><Plus size={16}/></button></div>
        {(d.interfaces || []).map((iface, index) => (
          <div className="interface-card" key={`${iface.name}-${index}`}>
            <div className="interface-head"><input value={iface.name || ""} onChange={(e) => updateInterface(index, { name: e.target.value })} /><button className="icon-btn danger" onClick={() => removeInterface(index)}><Trash2 size={14}/></button></div>
            <div className="two-col">
              <label>Mode<select value={iface.mode || "access"} onChange={(e) => updateInterface(index, { mode: e.target.value })}><option value="access">Access</option><option value="trunk">Trunk</option><option value="routed">Routed</option><option value="tagged">Tagged</option></select></label>
              <label>VLAN<input type="number" min="1" max="4094" value={iface.vlan ?? ""} onChange={(e) => updateInterface(index, { vlan: Number(e.target.value) || "" })} /></label>
            </div>
            <div className="two-col">
              <label>IP<input value={iface.ip || ""} onChange={(e) => updateInterface(index, { ip: e.target.value })} placeholder="192.168.1.10" /></label>
              <label>Subnet<input value={iface.subnet || ""} onChange={(e) => updateInterface(index, { subnet: e.target.value })} placeholder="255.255.255.0" /></label>
            </div>
            {iface.mode === "trunk" && <div className="two-col"><label>Allowed VLANs<input value={(iface.allowedVlans || []).join(",")} onChange={(e) => updateInterface(index, { allowedVlans: e.target.value.split(",").map(Number).filter(Boolean) })} placeholder="10,11" /></label><label>Native VLAN<input type="number" value={iface.nativeVlan ?? 1} onChange={(e) => updateInterface(index, { nativeVlan: Number(e.target.value) })} /></label></div>}
            {(d.deviceType === "endpoint") && <label>Default gateway<input value={iface.gateway || ""} onChange={(e) => updateInterface(index, { gateway: e.target.value })} /></label>}
            {d.deviceType === "firewall" && <label>Role<input value={iface.role || ""} onChange={(e) => updateInterface(index, { role: e.target.value })} placeholder="LAN / WAN / DMZ" /></label>}
            {d.deviceType === "firewall" && <label>Port group<input value={iface.portGroup || ""} onChange={(e) => updateInterface(index, { portGroup: e.target.value })} /></label>}
          </div>
        ))}
      </section>

      {d.deviceType === "endpoint" && <section>
        <div className="section-heading"><div><span className="eyebrow">HOST FIREWALL</span><h3>ICMP policy</h3></div></div>
        <label className="checkbox-label"><input type="checkbox" checked={d.osFirewallAllowsIcmp !== false} onChange={(e) => update({ osFirewallAllowsIcmp: e.target.checked })} /> Allow ICMP Echo</label>
      </section>}

      {d.deviceType === "firewall" && <section>
        <div className="section-heading"><div><span className="eyebrow">FIREWALL / ACL</span><h3>Rules</h3></div><button className="icon-btn" onClick={addRule}><Plus size={16}/></button></div>
        {(d.firewallRules || []).map((rule, index) => <div className="rule-card" key={index}>
          <div className="two-col"><label>Action<select value={rule.action} onChange={(e) => updateRule(index, { action: e.target.value })}><option>PASS</option><option>BLOCK</option></select></label><label>Protocol<select value={rule.protocol} onChange={(e) => updateRule(index, { protocol: e.target.value })}><option>ICMP</option><option>TCP</option><option>UDP</option><option>ANY</option></select></label></div>
          <label>Source<input value={rule.source} onChange={(e) => updateRule(index, { source: e.target.value })} /></label>
          <label>Destination<input value={rule.destination} onChange={(e) => updateRule(index, { destination: e.target.value })} /></label>
          <label>Port<input value={rule.port || ""} onChange={(e) => updateRule(index, { port: e.target.value })} placeholder="80 / 443 / 53 / blank" /></label>
        </div>)}
      </section>}
    </aside>
  );
}