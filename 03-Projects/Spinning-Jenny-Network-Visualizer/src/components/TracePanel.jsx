import React, { useState } from "react";
import { ChevronDown, CheckCircle2, XCircle, CircleDot } from "lucide-react";

export default function TracePanel({ trace }) {
  const [open, setOpen] = useState(null);
  if (!trace) return <div className="trace-empty"><CircleDot size={20}/><span>Run a trace to see packet traversal.</span></div>;
  if (!trace.ok && !trace.hops?.length) return <div className="trace-error"><XCircle size={20}/><div><strong>Trace failed</strong><p>{trace.error}</p></div></div>;

  return <div className="trace-panel">
    <div className="trace-summary">
      <div><span className="eyebrow">PACKET TRACE</span><h2>{trace.source?.name} <span>→</span> {trace.target?.name}</h2><p>{trace.source?.ip} → {trace.target?.ip} · {trace.traffic}</p></div>
      <div className={trace.ok ? "result-pass" : "result-fail"}>{trace.ok ? <CheckCircle2 size={16}/> : <XCircle size={16}/>} {trace.ok ? "Delivered" : "Blocked"}</div>
    </div>
    {!trace.ok && <div className="trace-error inline"><XCircle size={16}/><span>{trace.error}</span></div>}
    <div className="timeline">
      {trace.hops.map((hop, i) => <React.Fragment key={hop.id}>
        <button className={`hop-row ${open === hop.id ? "active" : ""} ${hop.status === "fail" ? "failed" : ""}`} onClick={() => setOpen(open === hop.id ? null : hop.id)}>
          <span className="hop-num">{String(hop.id).padStart(2, "0")}</span>
          <span className="hop-device"><strong>{hop.device}</strong><small>{hop.interface}</small></span>
          <span className="hop-layer">{hop.layer}</span>
          <span className="hop-tag">{hop.tagging}</span>
          <span className="hop-action">{hop.action}</span>
          <ChevronDown className={open === hop.id ? "rotated" : ""} size={16}/>
        </button>
        {open === hop.id && <div className="hop-detail"><div><span className="eyebrow">WHAT IS HAPPENING</span><p>{hop.details}</p></div><div className="detail-meta"><span>Layer</span><strong>{hop.layer}</strong><span>Tagging / action</span><strong>{hop.tagging}</strong></div></div>}
        {i < trace.hops.length - 1 && <div className="timeline-line" />}
      </React.Fragment>)}
    </div>
  </div>;
}