# 00-Switch Ops
## 14 - CDP & LLDP Neighbor Discovery

**What It Is:** Protocols that let switches (and routers, phones, APs) automatically discover directly-connected neighbor devices and share basic info about them — device type, capabilities, IP address, port ID — without any manual documentation.

**Why It's Important:** This is your fastest real-world tool for answering "what's actually plugged into this port" and "what am I actually connected to" without physically tracing cables — genuinely one of the most-used diagnostic commands day to day, especially in an undocumented or poorly-documented environment (which is most real environments).

## Overview & Mechanics

- **CDP (Cisco Discovery Protocol)** — Cisco-proprietary, Layer 2, enabled by default on all interfaces on Cisco devices. Advertises device ID, platform/model, software version, IP address, local and remote port ID, and capabilities (switch, router, host, etc.) to directly connected Cisco neighbors every 60 seconds by default.
- **LLDP (Link Layer Discovery Protocol)** — the vendor-neutral IEEE standard (802.1AB) equivalent, needed for discovery when the neighbor isn't a Cisco device (many IP phones, APs, and third-party switches/servers support LLDP but not CDP). Not enabled by default on most Cisco platforms — needs `lldp run` globally.
- Both are **Layer 2** protocols advertised on every active port by default (once enabled) — meaning a device several Layer 3 hops away will never show up; CDP/LLDP only ever tells you about *directly* connected neighbors, one hop.
- **Security consideration**: CDP/LLDP advertisements leak useful reconnaissance information (device model, IOS version, hostname) to anything connected to that port — this is why CDP is typically disabled on ports facing untrusted networks or the public internet, while being left enabled on internal switch-to-switch and switch-to-phone links where the convenience outweighs the risk.

## Step-by-Step Drill: Using CDP for Discovery

```text
enable

! --- Step 1: See a summary of every directly connected CDP neighbor ---
show cdp neighbors

! --- Step 2: Get full detail on those neighbors (IP, IOS version, platform) ---
show cdp neighbors detail

! --- Step 3: Check CDP info for one specific interface only ---
show cdp interface fastethernet0/1

! --- Step 4 (if you need to disable CDP on a specific untrusted port): ---
configure terminal
interface fastethernet0/24
 no cdp enable
exit
end
copy running-config startup-config
```

## Step-by-Step Drill: Enabling and Using LLDP

```text
enable
configure terminal

! --- Step 1: Enable LLDP globally (off by default) ---
lldp run

! --- Step 2 (optional): tune advertisement timers ---
lldp timer 30
lldp holdtime 120

end

! --- Step 3: View discovered LLDP neighbors ---
show lldp neighbors
show lldp neighbors detail
```

**Verification commands:**
```text
show cdp neighbors
show cdp neighbors detail
show lldp neighbors
show cdp run
show lldp run
```

## Common failure points

- **Assuming CDP shows the whole network** — it only ever shows directly connected, one-hop neighbors on active links; to map a larger topology you have to walk from switch to switch, checking neighbors at each hop.
- **A neighbor showing up in `show cdp neighbors` but with truncated info** — the summary view truncates device IDs and platform strings; always use `show cdp neighbors detail` when you actually need the IP address or full platform/version info, not just the summary table.
- **Non-Cisco gear not appearing at all** — if a connected device is a third-party switch, server, or AP that only speaks LLDP, it will never show up in `show cdp neighbors` no matter how correctly it's cabled; check `show lldp neighbors` (after enabling LLDP) before concluding a link isn't working.
- **Leaving CDP enabled on internet-facing or otherwise untrusted ports** — advertises internal device details to anything plugged into that specific port; disable per-interface (`no cdp enable`) on any port that shouldn't be trusted with that information.

---
*Tip: `show cdp neighbors detail` before touching any unfamiliar switch — it's usually the fastest way to confirm what device is on the other end of a given port and what IP to try reaching it on, before you go hunting for physical labels or outdated documentation.*
