import React, { useCallback, useMemo, useState } from "react";
import {
  ReactFlow, Background, Controls, MiniMap, addEdge, useNodesState, useEdgesState, MarkerType
} from "@xyflow/react";
import { Activity, Boxes, Code2, Download, FileUp, Network, Play, RotateCcw, Save, Settings2, ShieldCheck, Sparkles, Upload, X } from "lucide-react";
import "@xyflow/react/dist/style.css";
import NetworkNode from "./components/NetworkNode";
import Inspector from "./components/Inspector";
import TracePanel from "./components/TracePanel";
import ConfigPanel from "./components/ConfigPanel";
import { DEVICE_TYPES, TRAFFIC_TYPES, makeDemoTopology } from "./data/demo";
import { tracePacket } from "./engine/network";

const nodeTypes = { network: NetworkNode };

function newNode(type, index) {
  const defaults = {
    endpoint: { name: `PC ${index}`, interfaces: [{ name: "eth0", mode: "access", vlan: 1, ip: "", subnet: "255.255.255.0", gateway: "" }], os: "Windows", osFirewallAllowsIcmp: true },
    l2_switch: { name: `Switch ${index}`, interfaces: [{ name: "Fa0/1", mode: "access", vlan: 1 }, { name: "Gi0/1", mode: "trunk", allowedVlans: [1], nativeVlan: 1 }] },
    l3_switch: { name: `L3 Switch ${index}`, interfaces: [{ name: "Gi0/1", mode: "routed", ip: "", subnet: "255.255.255.0" }] },
    router: { name: `Router ${index}`, interfaces: [{ name: "Gi0/0", mode: "routed", ip: "", subnet: "255.255.255.0" }] },
    firewall: { name: `Firewall ${index}`, isVirtual: false, interfaces: [{ name: "em0", mode: "routed", role: "LAN", ip: "", subnet: "255.255.255.0" }], firewallRules: [{ action: "PASS", protocol: "ICMP", source: "ANY", destination: "ANY", port: "" }] },
    hypervisor: { name: `Hypervisor ${index}`, isVirtual: true, platform: "ESXi", interfaces: [{ name: "vmnic0", mode: "trunk", allowedVlans: [1], nativeVlan: 1 }] }
  };
  return {
    id: `${type}_${Date.now()}_${index}`,
    type: "network",
    position: { x: 160 + (index % 3) * 280, y: 140 + Math.floor(index / 3) * 180 },
    data: { deviceType: type, ...defaults[type] }
  };
}

export default function App() {
  const demo = useMemo(() => makeDemoTopology(), []);
  const [nodes, setNodes, onNodesChange] = useNodesState(demo.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(demo.edges);
  const [selectedId, setSelectedId] = useState(null);
  const [tab, setTab] = useState("topology");
  const [trace, setTrace] = useState(null);
  const [sourceId, setSourceId] = useState("laptop_1");
  const [targetId, setTargetId] = useState("vm3");
  const [traffic, setTraffic] = useState("ICMP");
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  const selectedNode = nodes.find((n) => n.id === selectedId) || null;
  const endpoints = nodes.filter((n) => n.data.deviceType === "endpoint");
  const filteredPalette = Object.entries(DEVICE_TYPES).filter(([_, v]) => v.label.toLowerCase().includes(search.toLowerCase()));

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge({ ...params, type: "smoothstep", markerEnd: { type: MarkerType.ArrowClosed } }, eds));
  }, [setEdges]);

  const updateNode = (id, data) => setNodes((nds) => nds.map((n) => n.id === id ? { ...n, data } : n));

  const addDevice = (type) => {
    const n = newNode(type, nodes.length + 1);
    setNodes((nds) => [...nds, n]);
    setSelectedId(n.id);
    setNotice(`${DEVICE_TYPES[type].label} added`);
    setTimeout(() => setNotice(""), 1400);
  };

  const runTrace = () => {
    setTrace(tracePacket({ nodes, edges }, sourceId, targetId, traffic));
    setTab("trace");
  };

  const loadDemo = () => {
    const d = makeDemoTopology();
    setNodes(d.nodes); setEdges(d.edges); setSourceId("laptop_1"); setTargetId("vm3"); setTrace(null); setSelectedId(null);
    setNotice("Demo topology loaded");
    setTimeout(() => setNotice(""), 1400);
  };

  const exportTopology = () => {
    const blob = new Blob([JSON.stringify({ canvas: { zoom: 1, pan: [0,0] }, nodes, edges }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "spinning-jenny-topology.json"; a.click(); URL.revokeObjectURL(url);
  };

  const importTopology = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const d = JSON.parse(reader.result);
        if (!Array.isArray(d.nodes) || !Array.isArray(d.edges)) throw new Error("Invalid topology");
        setNodes(d.nodes); setEdges(d.edges); setSelectedId(null); setTrace(null); setNotice("Topology imported");
      } catch {
        setNotice("Invalid topology JSON");
      }
      setTimeout(() => setNotice(""), 1600);
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/spinning-jenny");
    if (!type) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const n = newNode(type, nodes.length + 1);
    n.position = { x: event.clientX - bounds.left - 100, y: event.clientY - bounds.top - 40 };
    setNodes((nds) => [...nds, n]);
    setSelectedId(n.id);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><div className="brand-mark">SJ</div><div><strong>Spinning Jenny</strong><span>Network Visualizer</span></div></div>
        <div className="top-actions">
          <button className="ghost-btn" onClick={loadDemo}><RotateCcw size={15}/> Reset demo</button>
          <label className="ghost-btn"><Upload size={15}/> Import<input hidden type="file" accept=".json,application/json" onChange={importTopology}/></label>
          <button className="ghost-btn" onClick={exportTopology}><Download size={15}/> Export</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="palette">
          <div className="palette-head"><span className="eyebrow">BUILD</span><h2>Devices</h2><p>Drag a device onto the canvas or click to add it.</p></div>
          <div className="search"><Network size={15}/><input placeholder="Search devices..." value={search} onChange={(e) => setSearch(e.target.value)}/></div>
          <div className="palette-list">
            {filteredPalette.map(([type, meta]) => <button key={type} className="device-btn" draggable onDragStart={(e) => e.dataTransfer.setData("application/spinning-jenny", type)} onClick={() => addDevice(type)}>
              <span className="device-btn-icon"><Boxes size={17}/></span><span><strong>{meta.label}</strong><small>{meta.category}</small></span>
            </button>)}
          </div>
          <div className="palette-tip"><Sparkles size={15}/><p>Start with the demo topology, then change one variable at a time and trace the result.</p></div>
        </aside>

        <main className="main">
          <nav className="tabs">
            <button className={tab === "topology" ? "active" : ""} onClick={() => setTab("topology")}><Network size={15}/> Topology</button>
            <button className={tab === "trace" ? "active" : ""} onClick={() => setTab("trace")}><Activity size={15}/> Packet trace</button>
            <button className={tab === "config" ? "active" : ""} onClick={() => setTab("config")}><Code2 size={15}/> Configuration</button>
          </nav>

          {tab === "topology" && <div className="canvas-wrap" onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              onNodeClick={(_, n) => setSelectedId(n.id)}
              onPaneClick={() => setSelectedId(null)}
              fitView
              fitViewOptions={{ padding: 0.25 }}
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={24} size={1} />
              <Controls />
              <MiniMap pannable zoomable />
            </ReactFlow>
            <div className="canvas-overlay"><span>{nodes.length} devices</span><span>{edges.length} links</span></div>
          </div>}

          {tab === "trace" && <div className="trace-page"><TracePanel trace={trace}/></div>}

          {tab === "config" && <div className="config-page"><ConfigPanel node={selectedNode}/></div>}

          <section className="trace-dock">
            <div className="trace-dock-head"><div><span className="eyebrow">SIMULATE</span><h2>Traffic trace</h2></div><button className="run-btn" onClick={runTrace}><Play size={15}/> Run trace</button></div>
            <div className="trace-controls">
              <label>Source<select value={sourceId} onChange={(e) => setSourceId(e.target.value)}>{endpoints.map((n) => <option key={n.id} value={n.id}>{n.data.name} — {n.data.interfaces?.[0]?.ip || "no IP"}</option>)}</select></label>
              <span className="arrow">→</span>
              <label>Destination<select value={targetId} onChange={(e) => setTargetId(e.target.value)}>{endpoints.map((n) => <option key={n.id} value={n.id}>{n.data.name} — {n.data.interfaces?.[0]?.ip || "no IP"}</option>)}</select></label>
              <label>Traffic<select value={traffic} onChange={(e) => setTraffic(e.target.value)}>{TRAFFIC_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}</select></label>
            </div>
            <p className="deterministic"><ShieldCheck size={14}/> Deterministic engine · predefined networking rules · no LLM required</p>
          </section>
        </main>

        {tab === "topology" && <Inspector node={selectedNode} onChange={updateNode}/>}
        {tab !== "topology" && <div className="right-panel"><Inspector node={selectedNode} onChange={updateNode}/></div>}
      </div>

      {notice && <div className="toast">{notice}</div>}
    </div>
  );
}