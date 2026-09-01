# Driller-Bill Twin — Basic Management Setup (Real SSH)

> First-person session record generated locally by Twin. Sensitive values are redacted before Documentation is created.


## Session summary

- Started: 2026/09/01, 09:50:40
- Duration: 21m 56s
- Commands: 84
- Successful commands: 69
- Errors: 15
- Suspected typos: 2
- Mode transitions: 31
- Final mode: privileged EXEC

## Objectives

- [x] Set a non-default hostname
- [x] Configure the IP domain name
- [x] Set the enable secret
- [x] Create a local user account
- [x] Generate the RSA key pair
- [x] Force SSH version 2
- [x] Secure the console line
- [x] Secure the VTY lines for SSH only
- [x] Configure a legal warning banner
- [x] Create and name the management VLAN
- [x] Configure and enable the management SVI
- [x] Set the default gateway
- [x] Enable password encryption
- [x] Save the configuration
## First-person walkthrough

At 0m 05s, I was at the `Switch>` prompt and entered `enable`. The device returned no output. I moved from user mode to privileged EXEC.

At 0m 17s, I was at the `Switch#` prompt and entered `configure terminal`. The device returned: Enter configuration commands, one per line.  End with CNTL/Z.. I moved from privileged EXEC to global configuration.

At 0m 28s, I was at the `Switch(config)#` prompt and entered `enable secret [enable_secret_password]`. The device returned no output. I moved from global configuration to global configuration.

At 0m 40s, I was at the `Switch(config)#` prompt and entered `hostname SW1`. The device returned no output. I moved from global configuration to global configuration.

At 0m 56s, I was at the `SW1(config)#` prompt and entered `ip domain namme hulamin.co.za`. The device returned no output. I moved from global configuration to global configuration.

At 1m 05s, I was at the `SW1(config)#` prompt and entered `vlan 10`. The device returned no output. I moved from global configuration to vlanConfig mode.

At 1m 12s, I was at the `SW1(config-vlan)#` prompt and entered `name USERS`. The device returned no output. I moved from vlanConfig mode to vlanConfig mode.

At 1m 15s, I was at the `SW1(config-vlan)#` prompt and entered `exit`. The device returned no output. I moved from vlanConfig mode to global configuration.

At 1m 42s, I was at the `SW1(config)#` prompt and entered `do show ip interface brief`. The device returned: Interface              IP-Address      OK? Method Status                Protocol | Vlan99                 unassigned     YES manual administratively down down | Fa0/1                  unassigned      YES unset  down                 down | Fa0/2                  unassigned      YES unset  down                 down | Fa0/3                  unassigned      YES unset  down                 down | Fa0/4                  unassigned      YES unset  down                 down | Fa0/5                  unassigned      YES unset  down                 down | Fa0/6                  unassigned      YES unset  down                 down | Fa0/7                  unassigned      YES unset  down                 down | Fa0/8                  unassigned      YES unset  down                 down | Fa0/9                  unassigned      YES unset  down                 down | Fa0/10                 unassigned      YES unset  down                 down | Fa0/11                 unassigned      YES unset  down                 down | Fa0/12                 unassigned      YES unset  down                 down | Fa0/13                 unassigned      YES unset  down                 down | Fa0/14                 unassigned      YES unset  down                 down | Fa0/15                 unassigned      YES unset  down                 down | Fa0/16                 unassigned      YES unset  down                 down | Fa0/17                 unassigned      YES unset  down                 down | Fa0/18                 unassigned      YES unset  down                 down | Fa0/19                 unassigned      YES unset  down                 down | Fa0/20                 unassigned      YES unset  down                 down | Fa0/21                 unassigned      YES unset  down                 down | Fa0/22                 unassigned      YES unset  down                 down | Fa0/23                 unassigned      YES unset  down                 down | Fa0/24                 unassigned      YES unset  down                 down. I moved from global configuration to global configuration.

At 2m 03s, I was at the `SW1(config)#` prompt and entered `interface range fa 0/1-5`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 2m 12s, I was at the `SW1(config)#` prompt and entered `interface range fa 0/1-5`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 2m 17s, I was at the `SW1(config)#` prompt and entered `interface range Fa 0/1-5`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 2m 21s, I was at the `SW1(config)#` prompt and entered `interface range Fa0/1-5`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 2m 59s, I was at the `SW1(config)#` prompt and entered `interface fa 0/1`. The device returned no output. I moved from global configuration to interface mode.

At 5m 15s, I was at the `SW1(config-if)#` prompt and entered `ip address 192.168.10.2`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 5m 37s, I was at the `SW1(config-if)#` prompt and entered `ip address 192.168.10.2 255.255.255.0`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 6m 33s, I was at the `SW1(config-if)#` prompt and entered `exit`. The device returned no output. I moved from interface mode to global configuration.

At 6m 44s, I was at the `SW1(config)#` prompt and entered `interface vlan 10`. The device returned no output. I moved from global configuration to interface mode.

At 6m 57s, I was at the `SW1(config-if)#` prompt and entered `ip address 192.168.10.2 255.255.255.0`. The device returned no output. I moved from interface mode to interface mode.

At 7m 09s, I was at the `SW1(config-if)#` prompt and entered `no shutdown`. The device returned no output. I moved from interface mode to interface mode.

At 7m 14s, I was at the `SW1(config-if)#` prompt and entered `exit`. The device returned no output. I moved from interface mode to global configuration.

At 7m 21s, I was at the `SW1(config)#` prompt and entered `do show vlan brief`. The device returned: VLAN Name                             Status    Ports | ---- -------------------------------- --------- ------------------------------- | 1    default                          active     | 10   USERS                            active    . I moved from global configuration to global configuration.

At 7m 31s, I was at the `SW1(config)#` prompt and entered `do show ip interface brief`. The device returned: Interface              IP-Address      OK? Method Status                Protocol | Vlan10                 192.168.10.2   YES manual up                    up | Vlan99                 unassigned     YES manual administratively down down | Fa0/1                  unassigned      YES unset  down                 down | Fa0/2                  unassigned      YES unset  down                 down | Fa0/3                  unassigned      YES unset  down                 down | Fa0/4                  unassigned      YES unset  down                 down | Fa0/5                  unassigned      YES unset  down                 down | Fa0/6                  unassigned      YES unset  down                 down | Fa0/7                  unassigned      YES unset  down                 down | Fa0/8                  unassigned      YES unset  down                 down | Fa0/9                  unassigned      YES unset  down                 down | Fa0/10                 unassigned      YES unset  down                 down | Fa0/11                 unassigned      YES unset  down                 down | Fa0/12                 unassigned      YES unset  down                 down | Fa0/13                 unassigned      YES unset  down                 down | Fa0/14                 unassigned      YES unset  down                 down | Fa0/15                 unassigned      YES unset  down                 down | Fa0/16                 unassigned      YES unset  down                 down | Fa0/17                 unassigned      YES unset  down                 down | Fa0/18                 unassigned      YES unset  down                 down | Fa0/19                 unassigned      YES unset  down                 down | Fa0/20                 unassigned      YES unset  down                 down | Fa0/21                 unassigned      YES unset  down                 down | Fa0/22                 unassigned      YES unset  down                 down | Fa0/23                 unassigned      YES unset  down                 down | Fa0/24                 unassigned      YES unset  down                 down. I moved from global configuration to global configuration.

At 7m 52s, I was at the `SW1(config)#` prompt and entered `ip default-gateway 192.168.10.1`. The device returned no output. I moved from global configuration to global configuration.

At 8m 17s, I was at the `SW1(config)#` prompt and entered `interface vlan 10`. The device returned no output. I moved from global configuration to interface mode.

At 8m 26s, I was at the `SW1(config-if)#` prompt and entered `exit`. The device returned no output. I moved from interface mode to global configuration.

At 8m 44s, I was at the `SW1(config)#` prompt and entered `crypto key generate rsa`. The device returned: The name for the keys will be: SW1.namme | How many bits in the modulus [512]:. I moved from global configuration to global configuration.

At 8m 46s, I was at the `` prompt and entered `20488`. The device returned: % Invalid modulus size. Enter a value between 360 and 4096.. The attempt was recorded as a syntax error.

At 8m 50s, I was at the `` prompt and entered `2048`. The device returned: The name for the keys will be: SW1.namme | % The key modulus size is 2048 bits | % Generating 2048 bit RSA keys, keys will be non-exportable...[OK]. I moved from global configuration to global configuration.

At 8m 54s, I was at the `SW1(config)#` prompt and entered ``. The device returned no output. I moved from global configuration to global configuration.

At 8m 55s, I was at the `SW1(config)#` prompt and entered ``. The device returned no output. I moved from global configuration to global configuration.

At 9m 01s, I was at the `SW1(config)#` prompt and entered `ip ssh version 2`. The device returned no output. I moved from global configuration to global configuration.

At 9m 16s, I was at the `SW1(config)#` prompt and entered `interface vlan 10`. The device returned no output. I moved from global configuration to interface mode.

At 9m 56s, I was at the `SW1(config-if)#` prompt and entered `exit`. The device returned no output. I moved from interface mode to global configuration.

At 10m 01s, I was at the `SW1(config)#` prompt and entered `line vty 0 15`. The device returned no output. I moved from global configuration to lineVty mode.

At 10m 08s, I was at the `SW1(config-line)#` prompt and entered `transport input ssh`. The device returned no output. I moved from lineVty mode to lineVty mode.

At 10m 13s, I was at the `SW1(config-line)#` prompt and entered `login local`. The device returned no output. I moved from lineVty mode to lineVty mode.

At 10m 18s, I was at the `SW1(config-line)#` prompt and entered `exit`. The device returned no output. I moved from lineVty mode to global configuration.

At 10m 49s, I was at the `SW1(config)#` prompt and entered `username Ind-it secret [user_password]`. The device returned: % Incomplete command.. The attempt was recorded as a incomplete error.

At 11m 23s, I was at the `SW1(config)#` prompt and entered `username Ind-it privilege 15 secret [user_password] Gijim@Pr0`. The device returned no output. I moved from global configuration to global configuration.

At 12m 06s, I was at the `SW1(config)#` prompt and entered `ip ssh exec-timeout 60`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 12m 11s, I was at the `SW1(config)#` prompt and entered `ip exec-timeout 60`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 12m 23s, I was at the `SW1(config)#` prompt and entered `line console 0`. The device returned no output. I moved from global configuration to lineConsole mode.

At 12m 28s, I was at the `SW1(config-line)#` prompt and entered `login local`. The device returned no output. I moved from lineConsole mode to lineConsole mode.

At 12m 48s, I was at the `SW1(config-line)#` prompt and entered `exec-timeout 60`. The device returned no output. I moved from lineConsole mode to lineConsole mode.

At 13m 08s, I was at the `SW1(config-line)#` prompt and entered `exit`. The device returned no output. I moved from lineConsole mode to global configuration.

At 13m 18s, I was at the `SW1(config)#` prompt and entered `line vty 0 15`. The device returned no output. I moved from global configuration to lineVty mode.

At 13m 27s, I was at the `SW1(config-line)#` prompt and entered `exec-timeout 60`. The device returned no output. I moved from lineVty mode to lineVty mode.

At 14m 07s, I was at the `SW1(config-line)#` prompt and entered `line console 0`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 14m 12s, I was at the `SW1(config-line)#` prompt and entered `exit`. The device returned no output. I moved from lineVty mode to global configuration.

At 14m 17s, I was at the `SW1(config)#` prompt and entered `line console 0`. The device returned no output. I moved from global configuration to lineConsole mode.

At 14m 27s, I was at the `SW1(config-line)#` prompt and entered `logging synchronous`. The device returned no output. I moved from lineConsole mode to lineConsole mode.

At 14m 29s, I was at the `SW1(config-line)#` prompt and entered `exit`. The device returned no output. I moved from lineConsole mode to global configuration.

At 14m 46s, I was at the `SW1(config)#` prompt and entered `vlan 99`. The device returned no output. I moved from global configuration to vlanConfig mode.

At 14m 53s, I was at the `SW1(config-vlan)#` prompt and entered `name JAMES_DEAN`. The device returned no output. I moved from vlanConfig mode to vlanConfig mode.

At 14m 56s, I was at the `SW1(config-vlan)#` prompt and entered `exit`. The device returned no output. I moved from vlanConfig mode to global configuration.

At 15m 04s, I was at the `SW1(config)#` prompt and entered `banner motd`. The device returned: % Incomplete command.. The attempt was recorded as a incomplete error.

At 15m 22s, I was at the `SW1(config)#` prompt and entered `banner motd #`. The device returned: Enter TEXT message. End with the character '#'.. I moved from global configuration to special mode.

At 15m 59s, I was at the `` prompt and entered `I'm trying to see if you can handle this ass, probably give his ass a panic attack`. The device returned no output. I moved from special mode to special mode.

At 16m 42s, I was at the `` prompt and entered `trying to if I gave him a random erection, he prolly thinking I'm a telekinetic`. The device returned no output. I moved from special mode to special mode.

At 16m 47s, I was at the `` prompt and entered `#`. The device returned no output. I moved from special mode to global configuration.

At 17m 21s, I was at the `SW1(config)#` prompt and entered `interface vlan 99`. The device returned no output. I moved from global configuration to interface mode.

At 17m 46s, I was at the `SW1(config-if)#` prompt and entered `ip address 192.168.10.120 255.255.255.0`. The device returned no output. I moved from interface mode to interface mode.

At 17m 49s, I was at the `SW1(config-if)#` prompt and entered `no shutdown`. The device returned no output. I moved from interface mode to interface mode.

At 17m 51s, I was at the `SW1(config-if)#` prompt and entered `exit`. The device returned no output. I moved from interface mode to global configuration.

At 18m 11s, I was at the `SW1(config)#` prompt and entered `enable secret [enable_secret_password]`. The device returned no output. I moved from global configuration to global configuration.

At 19m 20s, I was at the `SW1(config)#` prompt and entered `copy running-config startup-config`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 20m 35s, I was at the `SW1(config)#` prompt and entered `service password [password]`. The device returned no output. I moved from global configuration to global configuration.

At 20m 51s, I was at the `SW1(config)#` prompt and entered `copy running-config startup-config`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 21m 11s, I was at the `SW1(config)#` prompt and entered `copy running-config startup-config`. The device returned: % Invalid input detected at '^' marker.. The attempt was recorded as a syntax error.

At 21m 20s, I was at the `SW1(config)#` prompt and entered `do copy running-config startup-config`. The device returned: Building configuration... | [OK]. I moved from global configuration to global configuration.

At 21m 23s, I was at the `SW1(config)#` prompt and entered ``. The device returned no output. I moved from global configuration to global configuration.

At 21m 23s, I was at the `SW1(config)#` prompt and entered ``. The device returned no output. I moved from global configuration to global configuration.

At 21m 28s, I was at the `SW1(config)#` prompt and entered `exit`. The device returned no output. I moved from global configuration to privileged EXEC.

At 21m 28s, I was at the `SW1#` prompt and entered ``. The device returned no output. I moved from privileged EXEC to privileged EXEC.

At 21m 30s, I was at the `SW1#` prompt and entered `exit`. The device returned no output. I moved from privileged EXEC to user mode.

At 21m 31s, I was at the `SW1>` prompt and entered ``. The device returned no output. I moved from user mode to user mode.

At 21m 33s, I was at the `SW1>` prompt and entered `exit`. The device returned no output. I moved from user mode to user mode.

At 21m 34s, I was at the `SW1>` prompt and entered ``. The device returned no output. I moved from user mode to user mode.

At 21m 42s, I was at the `SW1>` prompt and entered `enable`. The device returned no output. I moved from user mode to privileged EXEC.

At 21m 48s, I was at the `SW1#` prompt and entered `end`. The device returned no output. I moved from privileged EXEC to privileged EXEC.

At 21m 52s, I was at the `SW1#` prompt and entered `exit`. The device returned no output. I moved from privileged EXEC to user mode.

At 21m 54s, I was at the `SW1>` prompt and entered `end`. The device returned no output. I moved from user mode to privileged EXEC.

At 21m 56s, I was at the `SW1#` prompt and entered `?`. The device returned: configure terminal, copy, show, exit. I moved from privileged EXEC to privileged EXEC.
## Command-by-command record

### 0m 05s — Switch>
```text
enable
```
> *(no output)*

### 0m 17s — Switch#
```text
configure terminal
```
> Enter configuration commands, one per line.  End with CNTL/Z.

### 0m 28s — Switch(config)#
```text
enable secret [enable_secret_password]
```
> *(no output)*

### 0m 40s — Switch(config)#
```text
hostname SW1
```
> *(no output)*

### 0m 56s — SW1(config)#
```text
ip domain namme hulamin.co.za
```
> *(no output)*

### 1m 05s — SW1(config)#
```text
vlan 10
```
> *(no output)*

### 1m 12s — SW1(config-vlan)#
```text
name USERS
```
> *(no output)*

### 1m 15s — SW1(config-vlan)#
```text
exit
```
> *(no output)*

### 1m 42s — SW1(config)#
```text
do show ip interface brief
```
> Interface              IP-Address      OK? Method Status                Protocol
> Vlan99                 unassigned     YES manual administratively down down
> Fa0/1                  unassigned      YES unset  down                 down
> Fa0/2                  unassigned      YES unset  down                 down
> Fa0/3                  unassigned      YES unset  down                 down
> Fa0/4                  unassigned      YES unset  down                 down
> Fa0/5                  unassigned      YES unset  down                 down
> Fa0/6                  unassigned      YES unset  down                 down
> Fa0/7                  unassigned      YES unset  down                 down
> Fa0/8                  unassigned      YES unset  down                 down
> Fa0/9                  unassigned      YES unset  down                 down
> Fa0/10                 unassigned      YES unset  down                 down
> Fa0/11                 unassigned      YES unset  down                 down
> Fa0/12                 unassigned      YES unset  down                 down
> Fa0/13                 unassigned      YES unset  down                 down
> Fa0/14                 unassigned      YES unset  down                 down
> Fa0/15                 unassigned      YES unset  down                 down
> Fa0/16                 unassigned      YES unset  down                 down
> Fa0/17                 unassigned      YES unset  down                 down
> Fa0/18                 unassigned      YES unset  down                 down
> Fa0/19                 unassigned      YES unset  down                 down
> Fa0/20                 unassigned      YES unset  down                 down
> Fa0/21                 unassigned      YES unset  down                 down
> Fa0/22                 unassigned      YES unset  down                 down
> Fa0/23                 unassigned      YES unset  down                 down
> Fa0/24                 unassigned      YES unset  down                 down

### 2m 03s — SW1(config)#
```text
interface range fa 0/1-5
```
> % Invalid input detected at '^' marker.

### 2m 12s — SW1(config)#
```text
interface range fa 0/1-5
```
> % Invalid input detected at '^' marker.

### 2m 17s — SW1(config)#
```text
interface range Fa 0/1-5
```
> % Invalid input detected at '^' marker.

### 2m 21s — SW1(config)#
```text
interface range Fa0/1-5
```
> % Invalid input detected at '^' marker.

### 2m 59s — SW1(config)#
```text
interface fa 0/1
```
> *(no output)*

### 5m 15s — SW1(config-if)#
```text
ip address 192.168.10.2
```
> % Invalid input detected at '^' marker.

### 5m 37s — SW1(config-if)#
```text
ip address 192.168.10.2 255.255.255.0
```
> % Invalid input detected at '^' marker.

### 6m 33s — SW1(config-if)#
```text
exit
```
> *(no output)*

### 6m 44s — SW1(config)#
```text
interface vlan 10
```
> *(no output)*

### 6m 57s — SW1(config-if)#
```text
ip address 192.168.10.2 255.255.255.0
```
> *(no output)*

### 7m 09s — SW1(config-if)#
```text
no shutdown
```
> *(no output)*

### 7m 14s — SW1(config-if)#
```text
exit
```
> *(no output)*

### 7m 21s — SW1(config)#
```text
do show vlan brief
```
> VLAN Name                             Status    Ports
> ---- -------------------------------- --------- -------------------------------
> 1    default                          active    
> 10   USERS                            active    

### 7m 31s — SW1(config)#
```text
do show ip interface brief
```
> Interface              IP-Address      OK? Method Status                Protocol
> Vlan10                 192.168.10.2   YES manual up                    up
> Vlan99                 unassigned     YES manual administratively down down
> Fa0/1                  unassigned      YES unset  down                 down
> Fa0/2                  unassigned      YES unset  down                 down
> Fa0/3                  unassigned      YES unset  down                 down
> Fa0/4                  unassigned      YES unset  down                 down
> Fa0/5                  unassigned      YES unset  down                 down
> Fa0/6                  unassigned      YES unset  down                 down
> Fa0/7                  unassigned      YES unset  down                 down
> Fa0/8                  unassigned      YES unset  down                 down
> Fa0/9                  unassigned      YES unset  down                 down
> Fa0/10                 unassigned      YES unset  down                 down
> Fa0/11                 unassigned      YES unset  down                 down
> Fa0/12                 unassigned      YES unset  down                 down
> Fa0/13                 unassigned      YES unset  down                 down
> Fa0/14                 unassigned      YES unset  down                 down
> Fa0/15                 unassigned      YES unset  down                 down
> Fa0/16                 unassigned      YES unset  down                 down
> Fa0/17                 unassigned      YES unset  down                 down
> Fa0/18                 unassigned      YES unset  down                 down
> Fa0/19                 unassigned      YES unset  down                 down
> Fa0/20                 unassigned      YES unset  down                 down
> Fa0/21                 unassigned      YES unset  down                 down
> Fa0/22                 unassigned      YES unset  down                 down
> Fa0/23                 unassigned      YES unset  down                 down
> Fa0/24                 unassigned      YES unset  down                 down

### 7m 52s — SW1(config)#
```text
ip default-gateway 192.168.10.1
```
> *(no output)*

### 8m 17s — SW1(config)#
```text
interface vlan 10
```
> *(no output)*

### 8m 26s — SW1(config-if)#
```text
exit
```
> *(no output)*

### 8m 44s — SW1(config)#
```text
crypto key generate rsa
```
> The name for the keys will be: SW1.namme
> How many bits in the modulus [512]:

### 8m 46s — 
```text
20488
```
> % Invalid modulus size. Enter a value between 360 and 4096.

### 8m 50s — 
```text
2048
```
> The name for the keys will be: SW1.namme
> % The key modulus size is 2048 bits
> % Generating 2048 bit RSA keys, keys will be non-exportable...[OK]

### 8m 54s — SW1(config)#
```text

```
> *(no output)*

### 8m 55s — SW1(config)#
```text

```
> *(no output)*

### 9m 01s — SW1(config)#
```text
ip ssh version 2
```
> *(no output)*

### 9m 16s — SW1(config)#
```text
interface vlan 10
```
> *(no output)*

### 9m 56s — SW1(config-if)#
```text
exit
```
> *(no output)*

### 10m 01s — SW1(config)#
```text
line vty 0 15
```
> *(no output)*

### 10m 08s — SW1(config-line)#
```text
transport input ssh
```
> *(no output)*

### 10m 13s — SW1(config-line)#
```text
login local
```
> *(no output)*

### 10m 18s — SW1(config-line)#
```text
exit
```
> *(no output)*

### 10m 49s — SW1(config)#
```text
username Ind-it secret [user_password]
```
> % Incomplete command.

### 11m 23s — SW1(config)#
```text
username Ind-it privilege 15 secret [user_password] Gijim@Pr0
```
> *(no output)*

### 12m 06s — SW1(config)#
```text
ip ssh exec-timeout 60
```
> % Invalid input detected at '^' marker.

### 12m 11s — SW1(config)#
```text
ip exec-timeout 60
```
> % Invalid input detected at '^' marker.

### 12m 23s — SW1(config)#
```text
line console 0
```
> *(no output)*

### 12m 28s — SW1(config-line)#
```text
login local
```
> *(no output)*

### 12m 48s — SW1(config-line)#
```text
exec-timeout 60
```
> *(no output)*

### 13m 08s — SW1(config-line)#
```text
exit
```
> *(no output)*

### 13m 18s — SW1(config)#
```text
line vty 0 15
```
> *(no output)*

### 13m 27s — SW1(config-line)#
```text
exec-timeout 60
```
> *(no output)*

### 14m 07s — SW1(config-line)#
```text
line console 0
```
> % Invalid input detected at '^' marker.

### 14m 12s — SW1(config-line)#
```text
exit
```
> *(no output)*

### 14m 17s — SW1(config)#
```text
line console 0
```
> *(no output)*

### 14m 27s — SW1(config-line)#
```text
logging synchronous
```
> *(no output)*

### 14m 29s — SW1(config-line)#
```text
exit
```
> *(no output)*

### 14m 46s — SW1(config)#
```text
vlan 99
```
> *(no output)*

### 14m 53s — SW1(config-vlan)#
```text
name JAMES_DEAN
```
> *(no output)*

### 14m 56s — SW1(config-vlan)#
```text
exit
```
> *(no output)*

### 15m 04s — SW1(config)#
```text
banner motd
```
> % Incomplete command.

### 15m 22s — SW1(config)#
```text
banner motd #
```
> Enter TEXT message. End with the character '#'.

### 15m 59s — 
```text
I'm trying to see if you can handle this ass, probably give his ass a panic attack
```
> *(no output)*

### 16m 42s — 
```text
trying to if I gave him a random erection, he prolly thinking I'm a telekinetic
```
> *(no output)*

### 16m 47s — 
```text
#
```
> *(no output)*

### 17m 21s — SW1(config)#
```text
interface vlan 99
```
> *(no output)*

### 17m 46s — SW1(config-if)#
```text
ip address 192.168.10.120 255.255.255.0
```
> *(no output)*

### 17m 49s — SW1(config-if)#
```text
no shutdown
```
> *(no output)*

### 17m 51s — SW1(config-if)#
```text
exit
```
> *(no output)*

### 18m 11s — SW1(config)#
```text
enable secret [enable_secret_password]
```
> *(no output)*

### 19m 20s — SW1(config)#
```text
copy running-config startup-config
```
> % Invalid input detected at '^' marker.

### 20m 35s — SW1(config)#
```text
service password [password]
```
> *(no output)*

### 20m 51s — SW1(config)#
```text
copy running-config startup-config
```
> % Invalid input detected at '^' marker.

### 21m 11s — SW1(config)#
```text
copy running-config startup-config
```
> % Invalid input detected at '^' marker.

### 21m 20s — SW1(config)#
```text
do copy running-config startup-config
```
> Building configuration...
> [OK]

### 21m 23s — SW1(config)#
```text

```
> *(no output)*

### 21m 23s — SW1(config)#
```text

```
> *(no output)*

### 21m 28s — SW1(config)#
```text
exit
```
> *(no output)*

### 21m 28s — SW1#
```text

```
> *(no output)*

### 21m 30s — SW1#
```text
exit
```
> *(no output)*

### 21m 31s — SW1>
```text

```
> *(no output)*

### 21m 33s — SW1>
```text
exit
```
> *(no output)*

### 21m 34s — SW1>
```text

```
> *(no output)*

### 21m 42s — SW1>
```text
enable
```
> *(no output)*

### 21m 48s — SW1#
```text
end
```
> *(no output)*

### 21m 52s — SW1#
```text
exit
```
> *(no output)*

### 21m 54s — SW1>
```text
end
```
> *(no output)*

### 21m 56s — SW1#
```text
?
```
> configure terminal, copy, show, exit
## Mode transitions

`user mode → privileged EXEC`, `privileged EXEC → global configuration`, `global configuration → vlanConfig mode`, `vlanConfig mode → global configuration`, `global configuration → interface mode`, `interface mode → global configuration`, `global configuration → interface mode`, `interface mode → global configuration`, `global configuration → interface mode`, `interface mode → global configuration`, `global configuration → interface mode`, `interface mode → global configuration`, `global configuration → lineVty mode`, `lineVty mode → global configuration`, `global configuration → lineConsole mode`, `lineConsole mode → global configuration`, `global configuration → lineVty mode`, `lineVty mode → global configuration`, `global configuration → lineConsole mode`, `lineConsole mode → global configuration`, `global configuration → vlanConfig mode`, `vlanConfig mode → global configuration`, `global configuration → special mode`, `special mode → global configuration`, `global configuration → interface mode`, `interface mode → global configuration`, `global configuration → privileged EXEC`, `privileged EXEC → user mode`, `user mode → privileged EXEC`, `privileged EXEC → user mode`, `user mode → privileged EXEC`