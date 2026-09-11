# Storm control and err-disable recovery on switches

Broadcast storms, multicast floods, and security violations can all take a switchport (or a whole switch) down. Storm control limits the first; err-disable recovery decides how the switch behaves once a port gets shut down automatically — by storm control, port security, or several other triggers.

### Step 1: Understand what storm control actually measures

Storm control watches the percentage of a port's total bandwidth consumed by broadcast, multicast, or unknown-unicast traffic, sampled over a short rolling interval. If that percentage crosses a threshold you set, it takes action — before the flood has a chance to saturate the port and impact everything else on the switch.

### Step 2: Configure storm control thresholds

```text
ACCESS-SW-10(config)#interface fastEthernet0/10
ACCESS-SW-10(config-if)#storm-control broadcast level 70.00
ACCESS-SW-10(config-if)#storm-control multicast level 70.00
```
These values are percentages of available bandwidth. `70.00` means: once broadcast (or multicast) traffic hits 70% of the port's bandwidth, storm control acts. You can also specify a falling threshold (`storm-control broadcast level 70.00 50.00`) so the action clears once traffic drops back under 50%.

### Step 3: Set the storm control action

```text
ACCESS-SW-10(config-if)#storm-control action shutdown
```
`shutdown` err-disables the port entirely when the threshold is exceeded — the safest option for access ports, since it stops the storm from propagating further. The alternative, `storm-control action trap`, just sends an SNMP trap/log message without touching the port — useful for monitoring-only deployments where you don't want ports going down automatically.

### Step 4: Understand err-disable — and why default recovery is manual

By default, once *anything* err-disables a port (storm control, port security violations, BPDU Guard, UDLD, etc.), that port stays down until an admin manually does `shutdown` then `no shutdown` on it. That's deliberate — automatic recovery from every trigger would defeat the point of some of them (you don't want a port security violation to just quietly heal itself).

### Step 5: Enable automatic err-disable recovery for specific, lower-risk causes

For causes where a self-healing retry actually makes sense — like storm control, since a temporary broadcast storm may well have cleared on its own — you can opt into automatic recovery:
```text
ACCESS-SW-10(config)#errdisable recovery cause storm-control
ACCESS-SW-10(config)#errdisable recovery interval 300
```
This tells the switch to automatically bring the port back up 300 seconds (5 minutes) after it was err-disabled for a storm-control violation. Other causes (like `errdisable recovery cause bpduguard` or `errdisable recovery cause psecure-violation`) can be added the same way if you decide those should also auto-recover — but think carefully before enabling auto-recovery on security-related causes, since it can mask a real ongoing attack.

### Step 6: Verify

```text
ACCESS-SW-10#show errdisable recovery
ACCESS-SW-10#show interfaces status err-disabled
```

## What "good" looks like

Storm control thresholds set on access ports facing end-user or unpredictable devices, an action appropriate to the risk (`shutdown` for most access ports, `trap` where you specifically want visibility without disruption), and a deliberate, cause-by-cause decision about which err-disable triggers should auto-recover versus which should always require a human to look at them first.
