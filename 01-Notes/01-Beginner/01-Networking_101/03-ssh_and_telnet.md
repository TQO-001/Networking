SSH and Telnet are two protocols commonly used to log on remotely and perform configuration and management tasks on devices that are connected via a network.
# SSH
## What is SSH?
SSH (Secure Shell) is a network protocol that establishes encrypted connections between computers for secure remote access. It operates on TCP port 22 and provides authentication, encryption, and integrity to protect data transmitted over unsecured networks.

SSH or Secure SHell is now the only major protocol to access network devices and servers over the internet. It is a program to log into another computer over a network, execute commands in a remote machine, and move files from one machine to another.

# Telnet
## What is Telnet?
Telnet is the joint abbreviation of Telecommunications and Networks and it is a networking protocol best known for UNIX platform. Telnet uses the port 23 and it was designed specifically for local area networks.

SSH and Telnet are both used to manage the devices remotely but there is a huge difference in terms of providing the security to network. SSH is recommended in present day networking since it has relative high encryption and authentication aspects hence enhancing the security of the network. Although Telnet is easier to use and more easy to implement, it is deemed insecure for most of the applications and has not been in use as widely as its replacement protocols.

## Enable Telnet and SSH: SSH Configuration.
Secure Shell or SSH is a secure protocol and the replacement for Telnet and other insecure remote shell protocols. So for secure communication between network devices, I strongly recommend using SSH instead of Telnet.

_Configure SSH on Cisco routers and switches with the below step by step guide to SSH configuration._

### 1. Open the switch SW1 console line and create domain and user name.
```cisco
SW1>enable
SW1>configure terminal
SW1(config)#ip domain-name laughtale.co.za
SW1(config)#username cisco Password cisco
SW1(config)#
```

### 2. When done, just follow and generate the encryption keys for securing the ssh session.
```cisco
SW1(config)#crypto key generate rsa
How many bits in the modulus [512]: 1024
% Generating 1024 bit RSA keys, keys will be non-exportable…[OK]
SW1(config)#
```

### 3. Now enable SSH version 2, set time out duration and login attempt time on the switch. Remember this message if you going to use ssh version 2 “Please create RSA keys (of at least 768 bits size) to enable SSH v2.”
```cisco
SW1(config)#ip ssh version 2
SW1(config)#ip ssh time-out 50
SW1(config)#ip ssh authentication-retries 4
```

### 4. Enable vty lines and configure access protocols.
```cisco
SW1(config)#line vty 0
SW1(config-line)#transport input ssh
SW1(config-line)#password cisco
SW1(config-line)#logging synchronous
SW1(config-line)#motd-banner
SW1(config-line)#exit
SW1(config)#exit
SW1# wr mem
```

### 5.Testing SSH Connectivity
Packet Tracer PC Command Line 1.0  
```cisco
PC>ssh -l cisco yourrouterIP 
```
 
Open  
```cisco
Password:
SW1>enable
Password:
SW1#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
SW1(config)#
```

Here, I have connected successfully and the connection is secured with Secure Shell.