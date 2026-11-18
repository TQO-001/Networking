Run these in this order on each switch. The first six are what I used for SL7. The last five fill the gaps I hit.

**Setup**

- [ ] `terminal length 0` (stops the `--More--` pauses)
- [ ] `enable` (needed for LLDP and for some of the extra commands)

**Core set (the same as SL7)**

- [ ] `show ip interface brief` gives port count, which ports are up, and the IP
- [ ] `show vlan brief` gives the VLAN on each port
- [ ] `show cdp neighbors`
- [ ] `show cdp neighbors detail` gives the neighbour model, IP and port
- [ ] `show lldp neighbors`
- [ ] `show lldp neighbors detail` gives end devices (PLCs, PCs) and the UTP/fiber media type

LLDP was off on the cooling tower switch. If you see `% LLDP is not enabled`, run `configure terminal`, then `lldp run`, then `end`. That is a config change, so only do it if you're allowed to.

**Extras that close the gaps**

- [ ] `show interfaces status` shows speed, duplex and media type per port (copper vs SFP), so it's the most direct answer for UTP/fiber
- [ ] `show inventory` gives the exact model, serial number and any SFP modules
- [ ] `show version` gives the IOS version, uptime and model
- [ ] `show interfaces trunk` confirms which ports are trunks (the "no VLAN" ports in my tables)
- [ ] `show etherchannel summary` lists port-channel members (this was missing for Dept34_PTTL)

**Only when a port is "Unknown"**

- [ ] `show mac address-table interface <port>` shows what is behind a port that CDP/LLDP didn't name

Two tips:

- Turn on session logging in your terminal program (PuTTY has "Session > Logging") so the output saves to a file you can paste straight into the doc.
- Capture each switch in one go, so the neighbour tables line up across switches.

I can put this in a file as a paste-ready command block per switch, or extend the generator so new dumps drop into the same tables and workbook. Which would you prefer?

---

Here are the commands structured with `terminal length 0` placed right at the top, keeping every command block isolated and separate so you can easily copy and paste them individually:

### Step 1: Disable Output Pagination (Run First)
```
terminal length 0
```

### Step 2: Privilege Mode (Run if needed for LLDP/extra commands)
```
enable
```

### Step 3: Core Set Commands
```
show ip interface brief
show vlan brief
show cdp neighbors
show cdp neighbors detail
show lldp neighbors
show lldp neighbors detail
```

### Step 4: LLDP Conditional Command (Run only if LLDP is disabled)
```
configure terminal
lldp run
end
```
### Step 5: Gap-Closing Commands
```
show interfaces status
show inventory
show version
show interfaces trunk
show etherchannel summary
```

### Step 6: Conditional Port Check (Run only if a port's connected device is "Unknown")
```
show mac address-table interface [port-id]
```