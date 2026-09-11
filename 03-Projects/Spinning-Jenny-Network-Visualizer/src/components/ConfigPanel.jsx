import React, { useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { generateConfig } from "../engine/config";
import { virtualizationGuide } from "../engine/guides";

export default function ConfigPanel({ node }) {
  const [copied, setCopied] = React.useState(false);
  const config = useMemo(() => node ? generateConfig(node) : null, [node]);
  const guide = useMemo(() => node ? virtualizationGuide(node) : null, [node]);

  if (!node) return <div className="config-empty"><span className="eyebrow">CONFIGURATION</span><h2>Select a device</h2><p>Generated device configuration and virtualization guidance will appear here.</p></div>;

  const copy = async () => {
    await navigator.clipboard.writeText(config.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return <div className="config-panel">
    <div className="config-head"><div><span className="eyebrow">GENERATED CONFIG</span><h2>{node.data.name}</h2></div><button className="secondary-btn" onClick={copy}>{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? "Copied" : "Copy"}</button></div>
    <div className="code-window"><div className="code-top"><span>generated.{config.language}</span><span>deterministic</span></div><pre>{config.code}</pre></div>
    {guide && <div className="guide"><span className="eyebrow">VIRTUAL FIREWALL GUIDE</span><h3>{guide.title}</h3><ol>{guide.steps.map((s, i) => <li key={i}>{s}</li>)}</ol></div>}
  </div>;
}