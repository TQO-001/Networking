# DHCP snooping and Dynamic ARP Inspection on switches

Two related attacks are common on unprotected access-layer switches: a rogue DHCP server handing out bad leases (pointing victims' default gateway at an attacker's machine), and ARP spoofing (an attacker claiming to *be* the default gateway's MAC address to intercept traffic). DHCP snooping and Dynamic ARP Inspection (DAI) are the switch-level defenses against both, and DAI actually depends on DHCP snooping's data to work.

### Step 1: Enable DHCP snooping globally, then per-VLAN

```text
ACCESS-SW-10(config)#ip dhcp snooping
ACCESS-SW-10(config)#ip dhcp snooping vlan 10,20
```
Once enabled, the switch starts tracking DHCP transactions on those VLANs and builds a **binding table**: a record of which MAC address was leased which IP, on which port, for how long. This table is what DAI will check against later.

### Step 2: Trust the uplink port toward the real DHCP server

By default, once DHCP snooping is enabled, *every* port is untrusted — meaning the switch will block DHCP server responses (`DHCPOFFER`, `DHCPACK`) coming in on that port. You need to explicitly trust the port that actually leads toward your legitimate DHCP server (usually an uplink to distribution/core, not an access port facing end users):
```text
ACCESS-SW-10(config)#interface gigabitEthernet0/1
ACCESS-SW-10(config-if)#ip dhcp snooping trust
```
Leave every end-user access port untrusted — that's the entire point. If a user plugs in a personal router or Wi-Fi access point acting as a rogue DHCP server, the switch drops its DHCPOFFER/DHCPACK packets before they can reach anyone.

### Step 3: Rate-limit DHCP traffic on untrusted ports (optional hardening)

```text
ACCESS-SW-10(config-if)#interface fastEthernet0/10
ACCESS-SW-10(config-if)#ip dhcp snooping limit rate 15
```
This caps DHCP packets-per-second on that port, mitigating DHCP-based DoS attacks (flooding DHCPDISCOVER requests to exhaust the address pool).

### Step 4: Enable Dynamic ARP Inspection on the same VLANs

```text
ACCESS-SW-10(config)#ip arp inspection vlan 10,20
```
DAI now checks every ARP packet on those VLANs against the DHCP snooping binding table. If a device sends an ARP claiming an IP-to-MAC mapping that doesn't match what it was actually leased, DAI drops the packet — this is what stops ARP spoofing.

### Step 5: Trust the same uplink port for ARP too

Just like DHCP snooping, DAI needs to know which ports to skip inspection on — typically the same uplink toward distribution/core, since that traffic isn't from an end-user device that could be spoofing:
```text
ACCESS-SW-10(config)#interface gigabitEthernet0/1
ACCESS-SW-10(config-if)#ip arp inspection trust
```

### Step 6: Verify

```text
ACCESS-SW-10#show ip dhcp snooping
ACCESS-SW-10#show ip dhcp snooping binding
ACCESS-SW-10#show ip arp inspection
```

## What "good" looks like

DHCP snooping and DAI enabled together on the VLANs that carry end-user devices, with exactly the uplink port(s) toward your real DHCP server/gateway marked trusted — and everything else, by default, untrusted. Getting the trust boundary right is the whole exercise; trusting the wrong port (or trusting too many) defeats the protection.
