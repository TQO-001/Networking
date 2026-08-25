# Enable Telnet and SSH: SSH Configuration.
Secure Shell or SSH is a secure protocol and the replacement for Telnet and other insecure remote shell protocols. So for secure communication between network devices, I strongly recommend using SSH instead of Telnet._

_Configure SSH on Cisco routers and switches with the below step by step guide to SSH configuration._

### 1. Open the router R1 console line and create domain and user name.
```cisco
R1>enable
R1>configure terminal
R1(config)#ip domain-name renu.ws
R1(config)#username cisco Password cisco
R1(config)#
```

### 2. When done, just follow and generate the encryption keys for securing the ssh session.
```cisco
R1(config)#crypto key generate rsa
How many bits in the modulus [512]: 1024
% Generating 1024 bit RSA keys, keys will be non-exportable…[OK]
R1(config)#
```

### 3. Now enable SSH version 2, set time out duration and login attempt time on the router. Remember this message if you going to use ssh version 2 “Please create RSA keys (of at least 768 bits size) to enable SSH v2.”
```cisco
R1(config)#ip ssh version 2
R1(config)#ip ssh time-out 50
R1(config)#ip ssh authentication-retries 4
```

### 4. Enable vty lines and configure access protocols.
```cisco
R1(config)#line vty 0
R1(config-line)#transport input ssh
R1(config-line)#password cisco
R1(config-line)#logging synchronous
R1(config-line)#motd-banner
R1(config-line)#exit
R1(config)#exit
R1# wr mem
```

### 5.Testing SSH Connectivity
Packet Tracer PC Command Line 1.0  
```cisco
PC>ssh -l cisco yourrouterIP 
```
 
Open  
```cisco
Password:
R1>enable
Password:
R1#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
R1(config)#
```

Here, I have connected successfully and the connection is secured with Secure Shell.