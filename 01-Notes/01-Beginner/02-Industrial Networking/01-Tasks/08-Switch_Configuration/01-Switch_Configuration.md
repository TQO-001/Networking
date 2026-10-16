# Cisco IOS Switch Configuration Task
This is not a configuration task (entirely) for learning purposes, this is a task delegation I volunteered for, this will probably be the hardest configuration I will encounter and every idea explored here is an concept worth exploring further.

This documentation is not written in a learning style rather in a sequence of processes taken.

![[cisco-catalyst-9200l-24-port-poe-4x1g-uplink-switch-network-advantage-c9200l-24p-4g-a-refurbished-889728170284-29952923238470.jpg]]

## Concepts Explored
- **System & Base Switch Setup:**
    - Navigating EXEC and Configuration modes
    - Setting device hostname
    - Setting system timestamps and tcp keepalives
    - Disabling domain lookups, setting a domain name and a login banner
- **Global Layer 2 Settings:**
    - VTP transparent mode, UDLD, IGMP snooping per VLAN
    - IPv6 RA guard policy
    - Errdisable auto-recovery causes and interval
- **VLAN Configuration & Layer 2 Access:**
    - Creating and naming VLANs
    - Assigning access switchports to VLANs
    - Enabling Spanning-Tree PortFast on access and trunk ports
    - Configuring switchports as trunks
- **IP Addressing & SVI Setup:**
    - Assigning IP addresses to VLAN interfaces (SVIs)
    - Configuring VRF on out-of-band management interface
- **Security & Remote Access:**
    - Configuring encrypted enable secret and local user accounts
    - Understanding the auto-generated PKI trustpoints
    - Setting SSH, SCP, and HTTP/HTTPS parameters
    - Setting line console and VTY access parameters
- **Quality of Service (QoS) & Control Plane Policing:**
    - Defining class maps based on DSCP values
    - Creating policy maps with priority queues, bandwidth allocation and per-DSCP queue limits
    - Applying service policies to the control plane
- **Traffic Monitoring & Time Sync:**
    - Setting up SPAN mirroring sessions
    - Configuring an NTP server
- **Verification & Maintenance:**
    - Checking VLAN and interface status
    - Saving running configuration to startup configuration

## Cisco IOS Switch Commands

- `enable`
- `configure terminal`
- `hostname [switch_name]`
- `service tcp-keepalives-in`
- `service tcp-keepalives-out`
- `service timestamps debug datetime msec localtime`
- `service timestamps log datetime msec localtime`
- `platform punt-keepalive disable-kernel-core`
- `no ip domain lookup`
- `ip domain name [domain]`
- `banner login [delimiter] [message] [delimiter]`

- `vtp mode transparent`
- `vtp version [version]`
- `udld enable`
- `no ip igmp snooping vlan [vlan_id]`
- `ipv6 nd raguard policy [policy_name]`
- `errdisable recovery cause [cause]`
- `errdisable recovery interval [seconds]`

- `vlan [vlan_id]`
- `name [vlan_name]`
- `exit`

- `interface range [type] [start_number] - [end_number]`
- `switchport mode access`
- `switchport access vlan [vlan_id]`
- `spanning-tree portfast`
- `switchport mode trunk`
- `spanning-tree portfast trunk`

- `interface [type] [number]`
- `vrf forwarding [vrf_name]`
- `no ip address`
- `shutdown`

- `ip address [ip_address] [subnet_mask]`

- `enable secret [level] [encrypted-secret]`
- `username [username] privilege [level] secret [level] [encrypted-secret]`
- `login on-success log`

- `ip http server`
- `ip http authentication local`
- `ip http secure-server`
- `ip ssh bulk-mode [bytes]`
- `ip ssh time-out [seconds]`
- `ip scp server enable`

- `line con 0`
- `exec-timeout [minutes] [seconds]`
- `stopbits [number]`
- `line vty [remote_session_line_start] [remote_session_line_end]`
- `login local`
- `length [lines]`
- `transport input [protocol(s)]`
- `transport output [protocol(s)]`
- `login`

- `class-map match-any [class_map_name]`
- `match dscp [dscp_value(s)]`
- `policy-map [policy_map_name]`
- `class [class_map_name]`
- `priority level [level_number]`
- `police rate percent [value]`
- `bandwidth remaining percent [value]`
- `queue-buffers ratio [value]`
- `queue-limit dscp [dscp_value] percent [value]`

- `control-plane`
- `service-policy input [policy_name]`

- `monitor session [session_id] source vlan [vlan_ids]`
- `monitor session [session_id] destination interface [port] encapsulation replicate`
- `ntp server [ip_address]`

- `show vlan brief`
- `show ip interface brief`
- `show running-config`
- `copy running-config startup-config`

# Documentation Guide: Cisco Catalyst 9200L (CM-S6-H001)

### Step 1: System Identification and Base Configuration
- Use `enable` to enter Privileged EXEC mode.
- Enter Global Configuration mode via `configure terminal`.
- Configure device identity, time-stamping, and logging parameters.

```cisco
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname CM-S6-H001
CM-S6-H001(config)#service tcp-keepalives-in
CM-S6-H001(config)#service tcp-keepalives-out
CM-S6-H001(config)#service timestamps debug datetime msec localtime
CM-S6-H001(config)#service timestamps log datetime msec localtime
CM-S6-H001(config)#platform punt-keepalive disable-kernel-core
CM-S6-H001(config)#no ip domain lookup
CM-S6-H001(config)#ip domain name iitcoldmill.local
CM-S6-H001(config)#banner login ^CCS6 Primary network^C

```

---

### Step 2: Global Layer 2 Settings, VLANs, Access/Trunk Ports
1. **Global Layer 2 Settings**
These are carried in the running config. IGMP snooping is turned off per VLAN, VTP is transparent (VLANs stay local to this switch), and errdisable auto-recovery is enabled for the listed causes.
```cisco
CM-S6-H001(config)#vtp mode transparent
CM-S6-H001(config)#vtp version 1
CM-S6-H001(config)#udld enable
CM-S6-H001(config)#no ip igmp snooping vlan 10
CM-S6-H001(config)#no ip igmp snooping vlan 11
CM-S6-H001(config)#no ip igmp snooping vlan 20
CM-S6-H001(config)#no ip igmp snooping vlan 21
CM-S6-H001(config)#no ip igmp snooping vlan 30
CM-S6-H001(config)#no ip igmp snooping vlan 40
CM-S6-H001(config)#ipv6 nd raguard policy HOST_POLICY

! Errdisable auto-recovery (interval 60 seconds)
CM-S6-H001(config)#errdisable recovery cause udld
CM-S6-H001(config)#errdisable recovery cause bpduguard
CM-S6-H001(config)#errdisable recovery cause security-violation
CM-S6-H001(config)#errdisable recovery cause channel-misconfig
CM-S6-H001(config)#errdisable recovery cause pagp-flap
CM-S6-H001(config)#errdisable recovery cause dtp-flap
CM-S6-H001(config)#errdisable recovery cause link-flap
CM-S6-H001(config)#errdisable recovery cause sfp-config-mismatch
CM-S6-H001(config)#errdisable recovery cause gbic-invalid
CM-S6-H001(config)#errdisable recovery cause l2ptguard
CM-S6-H001(config)#errdisable recovery cause psecure-violation
CM-S6-H001(config)#errdisable recovery cause port-mode-failure
CM-S6-H001(config)#errdisable recovery cause dhcp-rate-limit
CM-S6-H001(config)#errdisable recovery cause pppoe-ia-rate-limit
CM-S6-H001(config)#errdisable recovery cause mac-limit
CM-S6-H001(config)#errdisable recovery cause storm-control
CM-S6-H001(config)#errdisable recovery cause inline-power
CM-S6-H001(config)#errdisable recovery cause arp-inspection
CM-S6-H001(config)#errdisable recovery cause loopback
CM-S6-H001(config)#errdisable recovery cause psp
CM-S6-H001(config)#errdisable recovery cause mrp-miscabling
CM-S6-H001(config)#errdisable recovery cause loopdetect
CM-S6-H001(config)#errdisable recovery interval 60

```

> [!note] ### Defaults that show up in the running config
> These appear in `show running-config` without being configured by hand: `vrf definition Mgmt-vrf`, `no aaa new-model`, `switch 1 provision c9200l-24t-4x`, `spanning-tree mode rapid-pvst`, `spanning-tree extend system-id`, `port-channel load-balance src-dst-ip`, `redundancy mode sso`, `license boot level`, `diagnostic bootup level minimal`, `transceiver type all monitoring`.

2. **Create and Name VLANs**
Create required VLANs and assign their corresponding functional names.
```cisco
CM-S6-H001(config)#vlan 10
CM-S6-H001(config-vlan)#name ClientServer
CM-S6-H001(config-vlan)#vlan 11
CM-S6-H001(config-vlan)#vlan 20
CM-S6-H001(config-vlan)#name control
CM-S6-H001(config-vlan)#vlan 30
CM-S6-H001(config-vlan)#name Thin_Client
CM-S6-H001(config-vlan)#vlan 40
CM-S6-H001(config-vlan)#name MNGT
CM-S6-H001(config-vlan)#exit

```

3. **Assign Access Ports and Enable PortFast**
Configure switchports as access mode, assign VLAN memberships, and enable Spanning-Tree PortFast for edge ports.
```cisco
! Access interface with no VLAN (stays in VLAN 1), she alone
CM-S6-H001(config)#interface range GigabitEthernet1/0/1
CM-S6-H001(config-if-range)#switchport mode access
CM-S6-H001(config-if-range)#spanning-tree portfast

! Management VLAN Access Interfaces
CM-S6-H001(config)#interface range GigabitEthernet1/0/2 - 4
CM-S6-H001(config-if-range)#switchport access vlan 40
CM-S6-H001(config-if-range)#spanning-tree portfast

! ClientServer VLAN Access Interfaces
CM-S6-H001(config)#interface range GigabitEthernet1/0/5 - 12
CM-S6-H001(config-if-range)#switchport access vlan 10
CM-S6-H001(config-if-range)#spanning-tree portfast

! Control VLAN Access Interfaces
CM-S6-H001(config)#interface range GigabitEthernet1/0/13 - 20
CM-S6-H001(config-if-range)#switchport access vlan 20
CM-S6-H001(config-if-range)#spanning-tree portfast

! Thin Client VLAN Access Interfaces
CM-S6-H001(config)#interface range GigabitEthernet1/0/21 - 24
CM-S6-H001(config-if-range)#switchport mode access
CM-S6-H001(config-if-range)#switchport access vlan 30
CM-S6-H001(config-if-range)#spanning-tree portfast

```

4. **Configure Trunk Uplinks**
Set designated high-speed uplink ports to trunking mode.
```cisco
CM-S6-H001(config)#interface range TenGigabitEthernet1/1/1 - 4
CM-S6-H001(config-if-range)#switchport mode trunk
CM-S6-H001(config-if-range)#spanning-tree portfast trunk
CM-S6-H001(config-if-range)#exit

```

---

### Step 3: SVI IP Addressing and Out-of-Band Management
Configure Switch Virtual Interfaces (SVIs) for L3 management and interface routing across active VLANs.

The first set of commands are optional as the initial `GigabitEthernet0/0` matches the reference aside from the `negotiation auto` (which we'll skip for now, cause I don't know how to do it).

All SVIs use a `/24` mask (`255.255.255.0`) in the running config.

```cisco
! (OPTIONAL)Out-of-Band Management Port
CM-S6-H001(config)#interface GigabitEthernet0/0
CM-S6-H001(config-if)#vrf forwarding Mgmt-vrf
CM-S6-H001(config-if)#no ip address
CM-S6-H001(config-if)#shutdown

! Default Management SVI
CM-S6-H001(config)#interface Vlan1
CM-S6-H001(config-if)#ip address 172.16.8.250 255.255.255.0

! ClientServer SVI
CM-S6-H001(config)#interface Vlan10
CM-S6-H001(config-if)#ip address 172.16.12.204 255.255.255.0

! Unassigned Secondary SVI
CM-S6-H001(config)#interface Vlan11
CM-S6-H001(config-if)#no ip address

! Out-of-Band Secondary Management SVI
CM-S6-H001(config)#interface Vlan40
CM-S6-H001(config-if)#ip address 192.16.8.204 255.255.255.0
CM-S6-H001(config-if)#exit

```

---

### Step 4: Security Credentials and SSH/VTY Remote Access
Configure user authentication, secret keys, and remote VTY sessions.

```cisco
! Credentials
CM-S6-H001(config)#enable secret [insert-password]
CM-S6-H001(config)#username ind-it privilege 15 secret [insert-password]
CM-S6-H001(config)#login on-success log

! SSH, SCP, and Line Access Parameters
	! OPTIONAL PART
CM-S6-H001(config)#ip http server
CM-S6-H001(config)#ip http authentication local
CM-S6-H001(config)#ip http secure-server
CM-S6-H001(config)#ip ssh bulk-mode 131072
	! Mandatory
CM-S6-H001(config)#ip ssh time-out 60
CM-S6-H001(config)#ip scp server enable

! Console & VTY Line Setup
CM-S6-H001(config)#line con 0
CM-S6-H001(config-line)#exec-timeout 0 0
CM-S6-H001(config-line)#stopbits 1
CM-S6-H001(config-line)#exit

CM-S6-H001(config)#line vty 0 15
CM-S6-H001(config-line)#length 0
CM-S6-H001(config-line)#login local
CM-S6-H001(config-line)#transport input ssh
CM-S6-H001(config-line)#transport output ssh
CM-S6-H001(config-line)#exit

CM-S6-H001(config)#line vty 16 31
CM-S6-H001(config-line)#transport input ssh
CM-S6-H001(config-line)#exit

```

---

### Step 5: Quality of Service (QoS) & Control Plane Policing
Define application classification queues and attach the global policy-map to control-plane traffic.

```cisco
! Class-Map Declarations
CM-S6-H001(config)#class-map match-any PRIORITY-QUEUE
CM-S6-H001(config-cmap)#match dscp ef
CM-S6-H001(config-cmap)#class-map match-any VIDEO-PRIORITY-QUEUE
CM-S6-H001(config-cmap)#match dscp cs5
CM-S6-H001(config-cmap)#match dscp cs4
CM-S6-H001(config-cmap)#class-map match-any CONTROL-MGMT-QUEUE
CM-S6-H001(config-cmap)#match dscp cs7 cs6 cs3 cs2
CM-S6-H001(config-cmap)#class-map match-any MULTIMEDIA-CONFERENCING-QUEUE
CM-S6-H001(config-cmap)#match dscp af41 af42 af43
CM-S6-H001(config-cmap)#class-map match-any MULTIMEDIA-STREAMING-QUEUE
CM-S6-H001(config-cmap)#match dscp af31 af32 af33
CM-S6-H001(config-cmap)#class-map match-any TRANSACTIONAL-DATA-QUEUE
CM-S6-H001(config-cmap)#match dscp af21 af22 af23
CM-S6-H001(config-cmap)#class-map match-any BULK-SCAVENGER-DATA-QUEUE
CM-S6-H001(config-cmap)#match dscp af11 af12 af13 cs1
CM-S6-H001(config-cmap)#exit

! Policy-Map Queuing Structure
CM-S6-H001(config)#policy-map 2P6Q3T
CM-S6-H001(config-pmap)#class PRIORITY-QUEUE
CM-S6-H001(config-pmap-c)#priority level 1
CM-S6-H001(config-pmap-c)#police rate percent 10
CM-S6-H001(config-pmap-c-police)#class VIDEO-PRIORITY-QUEUE
CM-S6-H001(config-pmap-c)#priority level 2
CM-S6-H001(config-pmap-c)#police rate percent 20
CM-S6-H001(config-pmap-c-police)#class CONTROL-MGMT-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 10
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#class MULTIMEDIA-CONFERENCING-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 10
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#queue-limit dscp af43 percent 80
CM-S6-H001(config-pmap-c)#queue-limit dscp af42 percent 90
CM-S6-H001(config-pmap-c)#queue-limit dscp af41 percent 100
CM-S6-H001(config-pmap-c)#class MULTIMEDIA-STREAMING-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 10
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#queue-limit dscp af33 percent 80
CM-S6-H001(config-pmap-c)#queue-limit dscp af32 percent 90
CM-S6-H001(config-pmap-c)#queue-limit dscp af31 percent 100
CM-S6-H001(config-pmap-c)#class TRANSACTIONAL-DATA-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 10
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#queue-limit dscp af23 percent 80
CM-S6-H001(config-pmap-c)#queue-limit dscp af22 percent 90
CM-S6-H001(config-pmap-c)#queue-limit dscp af21 percent 100
CM-S6-H001(config-pmap-c)#class BULK-SCAVENGER-DATA-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 5
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#queue-limit dscp values cs1 af13 percent 80
CM-S6-H001(config-pmap-c)#queue-limit dscp values af12 percent 90
CM-S6-H001(config-pmap-c)#queue-limit dscp values af11 percent 100
CM-S6-H001(config-pmap-c)#class class-default
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 25
CM-S6-H001(config-pmap-c)#queue-buffers ratio 25
CM-S6-H001(config-pmap-c)#exit

! Apply Policy-Map to Control-Plane
CM-S6-H001(config)#control-plane
CM-S6-H001(config-cp)#service-policy input system-cpp-policy
CM-S6-H001(config-cp)#exit

```

> [!note] ### 2P6Q3T is defined but not attached
> `2P6Q3T` is not applied to any interface in the startup config. Only `system-cpp-policy` is attached (to the control plane). The `system-cpp-*` class-maps in the running config are platform defaults.

---

### Step 6: Traffic Monitoring (SPAN Session) & NTP
Configure a SPAN session to mirror monitored VLAN traffic to a target interface and set system clock sync.

```cisco
! SPAN Port Configuration
CM-S6-H001(config)#monitor session 1 source vlan 1 , 10 - 11 , 20 - 21 , 30 , 40
CM-S6-H001(config)#monitor session 1 destination interface Te1/1/4 encapsulation replicate

! NTP Server Synchronization
CM-S6-H001(config)#ntp server 172.16.12.21

```

> [!note] ### SPAN Port Config
> Interface `TenGigabitEthernet 1/1/4` is the SPAN destination. It still carries `switchport mode trunk` and `spanning-tree portfast trunk` from Step 2, but as a destination port it does not behave as a normal trunk (it is missing from the VLAN 1 port list in `show vlan brief` while `Te1/1/1-3` are listed).
> VLAN 21 is in the source list but is not created on this switch.

---

### Step 7: Verify Configuration and Save
Validate operational interfaces, VLAN status, and save the active runtime configuration to NVRAM.

```cisco
CM-S6-H001#show vlan brief
CM-S6-H001#show ip interface brief
CM-S6-H001#copy running-config startup-config
Destination filename [startup-config]? 
Building configuration...
[OK]
CM-S6-H001#

```

**Result of `show vlan brief`:**
```cisco
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/1, Te1/1/1, Te1/1/2
                                                Te1/1/3
10   ClientServer                     active    Gi1/0/5, Gi1/0/6, Gi1/0/7
                                                Gi1/0/8, Gi1/0/9, Gi1/0/10
                                                Gi1/0/11, Gi1/0/12
11   VLAN0011                         active
20   control                          active    Gi1/0/13, Gi1/0/14, Gi1/0/15
                                                Gi1/0/16, Gi1/0/17, Gi1/0/18
                                                Gi1/0/19, Gi1/0/20
30   Thin_Client                      active    Gi1/0/21, Gi1/0/22, Gi1/0/23
                                                Gi1/0/24
40   MNGT                             active    Gi1/0/2, Gi1/0/3, Gi1/0/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
```

**Result of `show ip interface brief` (SVIs and management port, all other ports `down/down` with no cable):**
```cisco
CM-S6-H001#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  172.16.8.250    YES manual up                    down
Vlan10                 172.16.12.204   YES manual up                    down
Vlan11                 unassigned      YES unset  up                    down
Vlan40                 192.16.8.204    YES manual up                    down
GigabitEthernet0/0     unassigned      YES unset  administratively down down
GigabitEthernet1/0/1   unassigned      YES unset  down                  down
GigabitEthernet1/0/2   unassigned      YES unset  down                  down
GigabitEthernet1/0/3   unassigned      YES unset  down                  down
GigabitEthernet1/0/4   unassigned      YES unset  down                  down
GigabitEthernet1/0/5   unassigned      YES unset  down                  down
GigabitEthernet1/0/6   unassigned      YES unset  down                  down
GigabitEthernet1/0/7   unassigned      YES unset  down                  down
GigabitEthernet1/0/8   unassigned      YES unset  down                  down
GigabitEthernet1/0/9   unassigned      YES unset  down                  down
GigabitEthernet1/0/10  unassigned      YES unset  down                  down
GigabitEthernet1/0/11  unassigned      YES unset  down                  down
GigabitEthernet1/0/12  unassigned      YES unset  down                  down
GigabitEthernet1/0/13  unassigned      YES unset  down                  down
GigabitEthernet1/0/14  unassigned      YES unset  down                  down
GigabitEthernet1/0/15  unassigned      YES unset  down                  down
GigabitEthernet1/0/16  unassigned      YES unset  down                  down
GigabitEthernet1/0/17  unassigned      YES unset  down                  down
GigabitEthernet1/0/18  unassigned      YES unset  down                  down
GigabitEthernet1/0/19  unassigned      YES unset  down                  down
GigabitEthernet1/0/20  unassigned      YES unset  down                  down
GigabitEthernet1/0/21  unassigned      YES unset  down                  down
GigabitEthernet1/0/22  unassigned      YES unset  down                  down
GigabitEthernet1/0/23  unassigned      YES unset  down                  down
GigabitEthernet1/0/24  unassigned      YES unset  down                  down
Te1/1/1                unassigned      YES unset  down                  down
Te1/1/2                unassigned      YES unset  down                  down
Te1/1/3                unassigned      YES unset  down                  down
Te1/1/4                unassigned      YES unset  down                  down
CM-S6-H001#

```

> [!note] ### SVIs are up/down
> The SVIs show `up` / `down` because no access or trunk port in their VLAN currently has link. That is expected until devices are connected.
