# Documentation Guide: Capturing a Switch

Run these in this order on each switch. The first six are what was used for SL7. The last five fill the gaps found there.

Tick each box as you go. Paste-ready command blocks are at the bottom.

## 1. Setup

- [ ] `terminal length 0` (stops the `--More--` pauses)
- [ ] `enable` (needed for LLDP and for some of the extra commands)

## 2. Core set (the same as SL7)

- [ ] `show ip interface brief` gives port count, which ports are up, and the IP
- [ ] `show vlan brief` gives the VLAN on each port
- [ ] `show cdp neighbors`
- [ ] `show cdp neighbors detail` gives the neighbour model, IP and port
- [ ] `show lldp neighbors`
- [ ] `show lldp neighbors detail` gives end devices (PLCs, PCs) and the UTP/fiber media type

> [!warning] LLDP may be off
> LLDP was off on the cooling tower switch. If you see `% LLDP is not enabled`, run `configure terminal`, then `lldp run`, then `end`. That is a config change, so only do it if you're allowed to.

## 3. Extras that close the gaps

- [ ] `show interfaces status` shows speed, duplex and media type per port (copper vs SFP), so it's the most direct answer for UTP/fiber
- [ ] `show inventory` gives the exact model, serial number and any SFP modules
- [ ] `show version` gives the IOS version, uptime and model
- [ ] `show interfaces trunk` confirms which ports are trunks (the "no VLAN" ports in the tables)
- [ ] `show etherchannel summary` lists port-channel members (this was missing for Dept34_PTTL)

## 4. Only when a port is "Unknown"

- [ ] `show mac address-table interface <port>` shows what is behind a port that CDP/LLDP didn't name

## 5. Two tips

- Turn on session logging in your terminal program (PuTTY has "Session > Logging") so the output saves to a file you can paste straight into the doc.
- Capture each switch in one go, so the neighbour tables line up across switches.

## 6. Paste-ready command blocks

Each block is separate so you can copy and paste them one at a time.

### Step 1: Disable output pagination (run first)

```
terminal length 0
```

### Step 2: Privilege mode (run if needed for LLDP/extra commands)

```
enable
```

### Step 3: Core set commands

```
show ip interface brief
show vlan brief
show cdp neighbors
show cdp neighbors detail
show lldp neighbors
show lldp neighbors detail
```

### Step 4: LLDP conditional command (run only if LLDP is disabled)

```
configure terminal
lldp run
end
```

### Step 5: Gap-closing commands

```
show interfaces status
show inventory
show version
show interfaces trunk
show etherchannel summary
```

### Step 6: Conditional port check (run only if a port's connected device is "Unknown")

```
show mac address-table interface [port-id]
```
