# Cisco IOS Switch Configuration Task

![[cisco-catalyst-9200l-24-port-poe-4x1g-uplink-switch-network-advantage-c9200l-24p-4g-a-refurbished-889728170284-29952923238470.jpg]]
## Concepts Explored
- **System & Base Switch Setup:**
    - Navigating EXEC and Configuration modes   
    - Setting device hostname   
    - Setting system timestamps and tcp keepalives   
    - Disabling domain lookups and setting a login banner   
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
    - Configuring PKI trustpoints   
    - Setting SSH, SCP, and HTTP/HTTPS parameters   
    - Setting line console and VTY access parameters   
- **Quality of Service (QoS) & Control Plane Policing:**
    - Defining class maps based on DSCP values   
    - Creating policy maps with priority queues and bandwidth allocation   
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
- `hostname [switch_name]
- `
- `service tcp-keepalives-in`
- `service tcp-keepalives-out`
- `service timestamps debug datetime msec localtime`
- `service timestamps log datetime msec localtime`
- 
- `platform punt-keepalive disable-kernel-core`
- `no ip domain lookup`
- `banner login [delimiter] [message] [delimiter]`

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
- `username [username] privilege [level] secret [level] [encrypted-secret]

- `login on-success log`
- `crypto pki trustpoint [name]`
- `enrollment [type]`
- `revocation-check [type]`
- `hash [algorithm]`

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

- `control-plane`
- `service-policy input [policy_name]`

- `monitor session [session_id] source vlan [vlan_ids]`
- `monitor session [session_id] destination interface [port] encapsulation replicate`
- `ntp server [ip_address]

- `show vlan brief`
- `show ip interface brief`
- `copy running-config startup-config`

# Documentation Guide: Cisco Catalyst 9300L (CM-S6-H001)

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
CM-S6-H001(config)#banner login ^CS6 Primary network^C

```

---

### Step 2: Configure VLANs and Assign Access/Trunk Ports
1. **Create and Name VLANs**
Create required VLANs and assign their corresponding functional names.
```cisco
CM-S6-H001(config)#vlan 10
CM-S6-H001(config-vlan)#name ClientServer
CM-S6-H001(config-vlan)#vlan 11
CM-S6-H001(config-vlan)#vlan 20
CM-S6-H001(config-vlan)#name Control
CM-S6-H001(config-vlan)#vlan 30
CM-S6-H001(config-vlan)#name Thin_Client
CM-S6-H001(config-vlan)#vlan 40
CM-S6-H001(config-vlan)#name MNGT
CM-S6-H001(config-vlan)#exit

```

2. **Assign Access Ports and Enable PortFast**
Configure switchports as access mode, assign VLAN memberships, and enable Spanning-Tree PortFast for edge ports.
```cisco
! Access interface with no VLAN, she alone
CM-S6-H001(config)#interface range GigabitEthernet1/0/1
CM-S6-H001(config-if-range)#switchport access vlan 40
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

3. **Configure Trunk Uplinks**
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

```cisco
! (OPTIONAL)Out-of-Band Management Port
CM-S6-H001(config)#interface GigabitEthernet0/0
CM-S6-H001(config-if)#vrf forwarding Mgmt-vrf
CM-S6-H001(config-if)#no ip address
CM-S6-H001(config-if)#shutdown

! Default Management SVI
CM-S6-H001(config)#interface Vlan1
CM-S6-H001(config-if)#ip address 172.16.8.250 255.255.252.0

! ClientServer SVI
CM-S6-H001(config)#interface Vlan10
CM-S6-H001(config-if)#ip address 172.16.12.204 255.255.252.0

! Unassigned Secondary SVI
CM-S6-H001(config)#interface Vlan11
CM-S6-H001(config-if)#no ip address

! Out-of-Band Secondary Management SVI
CM-S6-H001(config)#interface Vlan40
CM-S6-H001(config-if)#ip address 192.16.8.204 255.255.252.0
CM-S6-H001(config-if)#exit

```

---

### Step 4: Security Credentials and SSH/VTY Remote Access
Configure user authentication, secret keys, crypto key generation, and remote VTY sessions.

```cisco
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
CM-S6-H001(config-line)#login local
CM-S6-H001(config-line)#length 0
CM-S6-H001(config-line)#transport input ssh
CM-S6-H001(config-line)#transport output ssh
CM-S6-H001(config-line)#exit

CM-S6-H001(config)#line vty 16 31
CM-S6-H001(config-line)#login
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
CM-S6-H001(config-pmap-c)#class MULTIMEDIA-STREAMING-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 10
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#class TRANSACTIONAL-DATA-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 10
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#class BULK-SCAVENGER-DATA-QUEUE
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 5
CM-S6-H001(config-pmap-c)#queue-buffers ratio 10
CM-S6-H001(config-pmap-c)#class class-default
CM-S6-H001(config-pmap-c)#bandwidth remaining percent 25
CM-S6-H001(config-pmap-c)#queue-buffers ratio 25
CM-S6-H001(config-pmap-c)#exit

! Apply Policy-Map to Control-Plane
CM-S6-H001(config)#control-plane
CM-S6-H001(config-cp)#service-policy input system-cpp-policy
CM-S6-H001(config-cp)#exit

```

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
> Interface `TenGigabitEthernet 1/1/4` 
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