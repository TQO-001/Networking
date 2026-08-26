# Voice VLAN and advanced access port configuration

Most access ports connect one device to one VLAN. But desk phones with a PC plugged into their back-side switchport are a common exception: the phone and the PC behind it need to be on two different VLANs over the same physical cable. Voice VLAN is the feature that makes that work.

### Step 1: Understand the topology

```text
[Switch Port] --- [IP Phone] --- [PC]
```
The phone has a built-in 3-port switch: one port to the wall (your switchport), one to the PC, and one internal to the phone itself. The switchport needs to treat the port as an access port for the PC's data VLAN, while tagging voice traffic from the phone with a separate voice VLAN ID — so the two streams stay logically separated even though they share one cable and one physical switchport.

### Step 2: Assign the access (data) VLAN

This is the VLAN the PC behind the phone will use — configured exactly like a normal access port:
```text
ACCESS-SW-10(config)#interface fastEthernet0/10
ACCESS-SW-10(config-if)#switchport mode access
ACCESS-SW-10(config-if)#switchport access vlan 10
```

### Step 3: Assign the voice VLAN

```text
ACCESS-SW-10(config-if)#switchport voice vlan 110
```
This tells the switch to send a special CDP (Cisco Discovery Protocol) message to the phone instructing it to tag its own traffic with VLAN 110. The PC's traffic stays untagged on VLAN 10; the phone's traffic gets 802.1Q-tagged with VLAN 110 — both riding the same cable, kept separate by the switch and the phone cooperating over CDP.

### Step 4: Trust QoS markings from the phone

Voice traffic is latency-sensitive, so once you know a Cisco phone is on the port, you generally want to trust its QoS markings (CoS/DSCP) rather than have the switch re-classify them:
```text
ACCESS-SW-10(config-if)#mls qos trust device cisco-phone
ACCESS-SW-10(config-if)#mls qos trust cos
```
`trust device cisco-phone` makes the switch verify (via CDP) that there's actually a Cisco phone there before trusting its markings — a safeguard against a rogue device downstream falsely marking its own traffic as high-priority voice.

### Step 5: Enable PortFast

Since this is still an end-device access port (not a switch-to-switch link), PortFast still applies — it skips the STP listening/learning delay so the phone and PC come up on the network immediately instead of waiting ~30 seconds for STP convergence:
```text
ACCESS-SW-10(config-if)#spanning-tree portfast
```

### Step 6: Verify

```text
ACCESS-SW-10#show interfaces fastEthernet0/10 switchport
```
Look for both **Access Mode VLAN** and **Voice VLAN** populated in the output — that confirms the port is correctly carrying both.

## What "good" looks like

A voice+data port with the data VLAN set via normal access-port commands, a separate voice VLAN configured with `switchport voice vlan`, QoS trust scoped specifically to verified Cisco phones (not blindly trusted), and PortFast enabled since it's still an edge port despite carrying two logical VLANs.
