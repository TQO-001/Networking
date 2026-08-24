# Switch stacking basics

Stacking lets multiple physical Catalyst switches (with stacking hardware, connected via dedicated stack cables — StackWise, StackWise-480, or StackWise Virtual, depending on model) behave as one logical switch: one management IP, one running config, one CLI session, shared across all members. This walkthrough covers the CLI side; the physical cabling and hardware requirements vary by model, so check your specific switch's documentation for that part.

### Step 1: Understand roles within a stack

- **Active switch**: the one currently running the show — holds the master copy of the running config, and is where you're actually typing when you SSH/console into "the stack."
- **Standby switch**: ready to take over instantly if the active fails.
- **Member switches**: everything else, forwarding traffic but not controlling the stack.

Role is decided by an election, influenced by a configurable priority — higher priority increases a switch's chance of becoming (or staying) active.

### Step 2: View current stack membership and roles

```text
ACCESS-SW-10#show switch
```
This shows every switch number in the stack, its role (Active/Standby/Member), MAC address, priority, and state. This is usually your first command when troubleshooting or documenting an unfamiliar stack.

### Step 3: Set a switch's priority

Higher-priority switches are preferred during active/standby elections. If you have a specific switch you want to consistently win the active role (say, one with more RAM or a specific hardware revision), raise its priority:
```text
ACCESS-SW-10(config)#switch 1 priority 15
```
Valid range is 1-15, with 15 being highest. Note: a priority change doesn't force an *immediate* re-election — it takes effect on the next election (e.g. a reload), not while the current active switch is still healthy.

### Step 4: Renumber a switch

Each member has a switch number (1-8 depending on the model's max stack size) used to reference its interfaces (e.g. `interface gigabitEthernet2/0/1` refers to switch 2's port). If numbers collide or you want a more logical layout:
```text
ACCESS-SW-10(config)#switch 3 renumber 4
```
This changes switch 3 to switch 4. It typically requires a reload of that member to fully apply.

### Step 5: Keep the stack MAC address stable

By default, the stack uses the active switch's MAC address as the stack's overall MAC address — which means if the active switch fails over, the stack's MAC (and therefore its identity on the network, e.g. for DHCP reservations or ARP caches) could change. To avoid that:
```text
ACCESS-SW-10(config)#stack-mac persistent timer 0
```
Setting the timer to `0` makes the original stack MAC persist permanently, even after a failover — the stack keeps behaving as the same logical device on the network no matter which physical switch is currently active.

### Step 6: Verify stack cabling/health

```text
ACCESS-SW-10#show switch stack-ports
```
This shows the status of the physical stack interconnect cables between members — useful for confirming a fully-cabled ring versus a partial daisy-chain, which affects resiliency if a member fails.

## What "good" looks like

A clear understanding of which switch is active before you make changes, a deliberately chosen priority on the switch(es) you want to keep in that role, a persistent stack MAC so failovers don't quietly change the network's view of the device, and a habit of checking `show switch` and `show switch stack-ports` before troubleshooting anything else on a stack.
