# 2.1 Issues
## Username and Password
- User has not been set as per request.

> [!TIP] ### ***Resolved***

---

## The `errdisable recovery cause <sub-command>` command 
- **Issue**
	- `errdisable recovery cause link-monitor-failure`
	- ``errdisable recovery cause oam-remote-failure`
- **Reason**
	- This specific switch model or Cisco IOS version does not support those two specific recovery causes (`link-monitor-failure` and `oam-remote-failure`).
	- On the **Cisco Catalyst 9200L**, running modern Cisco IOS XE, provider-specific features like `link-monitor-failure` and `oam-remote-failure` are completely removed from the operating system because it is purely an enterprise campus access switch.
	- These two features are typically found on Metro Ethernet, Carrier, or high-end service provider switches (like the ME series or certain IE industrial switches) and are omitted from standard enterprise Catalyst switches.
```Cisco
CM-S6-H001(config)#errdisable recovery cause ?
  all                  Enable timer to recover from all error causes
  arp-inspection       Enable timer to recover from arp inspection error
                       disable state
  bpduguard            Enable timer to recover from BPDU Guard error
  channel-misconfig    Enable timer to recover from channel misconfig error
                       (STP)
  dhcp-rate-limit      Enable timer to recover from dhcp-rate-limit error
  dtp-flap             Enable timer to recover from dtp-flap error
  gbic-invalid         Enable timer to recover from invalid GBIC error
  inline-power         Enable timer to recover from inline-power error
  l2ptguard            Enable timer to recover from l2protocol-tunnel error
  link-flap            Enable timer to recover from link-flap error
  loopback             Enable timer to recover from loopback error
  loopdetect           Enable timer to recover from loopdetect error
  mac-limit            Enable timer to recover from mac limit disable state
  mrp-miscabling       Enable timer to recover from mrp miscabling error
  pagp-flap            Enable timer to recover from pagp-flap error
  port-mode-failure    Enable timer to recover from port mode change failure
  pppoe-ia-rate-limit  Enable timer to recover from PPPoE IA rate-limit error
  psecure-violation    Enable timer to recover from psecure violation error
  psp                  Enable timer to recover from psp
  security-violation   Enable timer to recover from 802.1x violation error
  sfp-config-mismatch  Enable timer to recover from SFP config mismatch error
  storm-control        Enable timer to recover from storm-control error
  udld                 Enable timer to recover from udld error

CM-S6-H001(config)#errdisable recovery cause
```

## The `negotiation auto` command
- On Cisco Catalyst 9200L switches, auto-negotiation for speed and duplex is enabled by default, and the ==interface command to explicitly enable or re-enable it is== **`negotiation auto`**.

# 2.2 Changes

---
---

# 2.3 Worth Noting
## The `no aaa new-model` command
- I don't why and how but in the initial configuration, it was already set to `no aaa new-model`. 
```Cisco
CM-S6-H001(config)#no aaa new-model
Changing configuration back to no aaa new-model is not supported.
Continue?[confirm]
CM-S6-H001(config)#end
```

## The `ip domain name iitcoldmill.local` command
- Given by Manager
- It's worth noting because it's an addition to the running-config I was copying from.

## The `monitor session 1 destination interface Te1/1/4 encapsulation replicate` command
- The reference configuration has the monitor session interface on the `Te1/0/20`, but the current switch on has 4 10-GigabitEthernet ports.