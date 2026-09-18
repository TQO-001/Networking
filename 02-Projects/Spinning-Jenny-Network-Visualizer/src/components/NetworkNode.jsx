import React from "react";
import { Handle, Position } from "@xyflow/react";
import { Monitor, Router, Server, Shield, Network } from "lucide-react";
import { DEVICE_TYPES } from "../data/demo";

const icons = { monitor: Monitor, router: Router, server: Server, shield: Shield, switch: Network };

export default function NetworkNode({ data, selected }) {
  const meta = DEVICE_TYPES[data.deviceType] || DEVICE_TYPES.endpoint;
  const Icon = icons[meta.icon] || Network;
  const ip = data.interfaces?.find((i) => i.ip)?.ip;
  return (
    <div className={`network-node ${selected ? "selected" : ""}`}>
      <Handle type="target" position={Position.Left} className="handle" />
      <div className="node-icon"><Icon size={18} /></div>
      <div className="node-copy">
        <strong>{data.name}</strong>
        <span>{meta.label}</span>
        {ip && <code>{ip}</code>}
      </div>
      <Handle type="source" position={Position.Right} className="handle" />
    </div>
  );
}