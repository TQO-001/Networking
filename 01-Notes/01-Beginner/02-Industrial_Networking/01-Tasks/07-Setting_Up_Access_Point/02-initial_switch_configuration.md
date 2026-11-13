# 2.1 Initial-Switch_Configuration
> I didn't configure the switch but in the case that you are starting from scratch I have made a step by step guide on how to configure it to match the switch given to me for this task.

## 2.1.1 What the configured switch looks like
### show startup-config
```Cisco
version 17.12
service password-encryption
hostname IND-SW-EDNL-CM-Crane

aaa new-model
aaa session-id common

rep bpduleak
rep ztp
rep autodisc
ptp mode e2etransparent
vtp version 1
lldp run

spanning-tree mode rapid-pvst
spanning-tree extend system-id

enable secret 9 $9$8Dzkb5.ty7vhNE$tTEsffu6cGogf778FQQINMMmy8YSXdHS980gAExGdnk
username ind-it privilege 15 secret 9 $9$NQDtLD5u5QkNCE$vSZCKMFzXphzjm886oA3U7GuAU00LWreEupvzZk9qJ.

interface GigabitEthernet1/7
 switchport access vlan 561
 switchport mode access

interface GigabitEthernet1/8
 switchport access vlan 561
 switchport mode access

interface GigabitEthernet1/9
 switchport access vlan 561
 switchport mode access

interface GigabitEthernet1/10
 switchport access vlan 593
 switchport mode access

interface Vlan560
 ip address 192.168.160.126 255.255.255.0

interface Vlan561
 description CESMS
 ip address 192.168.192.99 255.255.255.0

ip default-gateway 192.168.160.1

line con 0
 stopbits 1
line vty 0 15
 password 6 KcHCiM^Q_eJ\\J\^N`QJG^BFgQZMaDWBhAAB
 transport input telnet ssh
```

### show vlan brief
```Cisco
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1, Gi1/2, Gi1/3, Gi1/4, Gi1/5, Gi1/6, Ap1/1
560  Management                       active
561  IND-CESMS                        active    Gi1/7, Gi1/8, Gi1/9
590  powermeters                      active
593  ignition                         active    Gi1/10
```

### show cdp neighbors
```Cisco
Device ID                    Local Intrfce  Holdtme  Capability  Platform   Port ID
IND-SW-Creche.hulamin.co.za  Gig 1/2        136      S I         WS-C2960C  Gig 0/1
```

---
## 2.1.2 Step-by-Step Configuration Guide
Follow these steps to build the switch configuration from scratch.

> [!note] ### **NOTE**
> ***For my task the switch was already configured, there is no need to follow this step-by-step guide, only use it if you starting from scratch***

### Step 1: Set Hostname and User Authentication
Configure the switch identity, local administrator account, enable password, and turn on global password encryption.
```cisco
configure terminal
hostname IND-SW-EDNL-CM-Crane
service password-encryption
enable secret 9 [enable-password]
username ind-it privilege 15 secret 9 [user-password]
aaa new-model
aaa session-id common
```

### Step 2: Configure Global Protocols
Enable LLDP, set Rapid PVST+ spanning tree, configure VTP version 1, and set up local industrial/timing protocols.
```cisco
vtp version 1
lldp run
rep bpduleak
rep ztp
rep autodisc
ptp mode e2etransparent
spanning-tree mode rapid-pvst
spanning-tree extend system-id
```

### Step 3: Create VLANs
Define the custom active VLANs on the switch so traffic can be segregated properly.
```cisco
vlan 560
 name Management
!
vlan 561
 name IND-CESMS
!
vlan 590
 name powermeters
!
vlan 593
 name ignition
exit
```

### Step 4: Assign Access Interfaces
Assign the physical Gigabit Ethernet ports to their respective VLANs in access mode.
```cisco
interface range GigabitEthernet1/7 - 9
 switchport mode access
 switchport access vlan 561
 exit

interface GigabitEthernet1/10
 switchport mode access
 switchport access vlan 593
 exit
```

### Step 5: Configure Management SVIs and Default Gateway
Assign IP addresses to Vlan560 and Vlan561 for layer 3 connectivity and set the default gateway.
```cisco
interface Vlan560
 ip address 192.168.160.126 255.255.255.0
 no shutdown
 exit

interface Vlan561
 description CESMS
 ip address 192.168.192.99 255.255.255.0
 no shutdown
 exit

ip default-gateway 192.168.160.1
```

### Step 6: Secure Console and VTY Terminal Lines
Set access parameters, passwords, and allowed protocols for local console and remote management lines.
```cisco
line con 0
 stopbits 1
 exit

line vty 0 15
 password 6 [ssh-password]
 transport input telnet ssh
 exit

end
```

### Step 7: Save Configuration to NVRAM
Write the running configuration to startup memory so it persists across reboots.
```cisco
write memory
```

### All-in-One Configuration Script
Use this copy-pasteable script to deploy the full configuration in one 
```cisco
configure terminal

! 1. Hostname and Management Basics
hostname IND-SW-EDNL-CM-Crane
enable secret 9 [enable-word]
username ind-it privilege 15 secret 9 [user-password]
service password-encryption

! 2. Global Protocols & Features
aaa new-model
aaa session-id common
vtp version 1
lldp run
rep bpduleak
rep ztp
rep autodisc
ptp mode e2etransparent
spanning-tree mode rapid-pvst
spanning-tree extend system-id

! 3. VLAN Creation
vlan 560
 name Management
!
vlan 561
 name IND-CESMS
!
vlan 590
 name powermeters
!
vlan 593
 name ignition
exit

! 4. Access Interfaces Configuration
interface range GigabitEthernet1/7 - 9
 switchport mode access
 switchport access vlan 561
 exit

interface GigabitEthernet1/10
 switchport mode access
 switchport access vlan 593
 exit

! 5. Management SVI & Routing Setup
interface Vlan560
 ip address 192.168.160.126 255.255.255.0
 no shutdown
 exit

interface Vlan561
 description CESMS
 ip address 192.168.192.99 255.255.255.0
 no shutdown
 exit

ip default-gateway 192.168.160.1

! 6. Line Access Security
line con 0
 stopbits 1
 exit

line vty 0 15
 password 6 [ssh-password]
 transport input telnet ssh
 exit

end

! Save Configuration
write memory
```

donesies!
