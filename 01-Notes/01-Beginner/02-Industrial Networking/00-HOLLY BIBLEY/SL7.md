![[Pasted image 20261019135734.png]]

## SL7 LV Room
![[Pasted image 20261019143336.png]]

### IND-SW-EDNL_SL7 Switch
![[49b9324d-d0da-4b51-8941-838609d39314.jpg|357]]  ![[aeb8191a-8e22-49cf-9271-24794a6b0f5c.jpg|324]]

- **IP Address:** 192.168.160.73 (Device has wrong label change to this IP address)
- **EKC Boxes:** 2
	- A17
	- Dept34

#### CDP Neighbors
##### The `show cdp neighbors` command
- Gig1/1 --> Gig1/2 (**TLL**)
- Fa1/4 --> Gig1/3 (**SL7_MCC**)
- Gig1/2 --> Gig1/1 (**A17**)

| **Device ID**                                | **Local Intrfce** | **Port ID** |
| -------------------------------------------- | ----------------- | ----------- |
| **IND-SW-EDNL_TLL.hulamin.co.za**            | Gig 1/1           | Gig 1/2     |
| **IND-SW-SL7Mcc.hulamin.co.za**              | Fas 1/4           | Gig 1/3     |
| **IND-SW-EDNL_A17ControlRoom.hulamin.co.za** | Gig 1/2           | Gig 1/1     |
##### The `show cdp neighbors detail` command
```Cisco
IND-SW-EDNL_SL7#show cdp neighbors detail
-------------------------

Device ID: IND-SW-EDNL_TLL.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.59
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/1,  Port ID (outgoing port): GigabitEthernet1/2
Holdtime : 138 sec

-------------------------

Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: FastEthernet1/4,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 129 sec

-------------------------

Device ID: IND-SW-EDNL_A17ControlRoom.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.65
Platform: cisco IE-3000-8TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/2,  Port ID (outgoing port): GigabitEthernet1/1
Holdtime : 165 sec
```


## SL7 Electric Room
![[Pasted image 20261019151917.png]]

### IND-SW-EDNL-SL7MCC Switch
![[bc556298-6e8d-49a8-b27b-ee3e0a4e51bb.jpg|210]]

- **IP Address:** 192.168.160.112

#### CDP Neighbors
##### The `show cdp neighbors` command
- Gig1/8 --> Gig1/3(**SL7Oper**)
- Gig1/3 --> Fas1/4 (**SL7**)

| **Device ID**                         | **Local Intrfce** | **Port ID** |
| ------------------------------------- | ----------------- | ----------- |
| **IND-SW-EDNL-SL7Oper.hulamin.co.za** | Gig 1/8           | Gig 1/3     |
| **IND-SW-EDNL_SL7.hulamin.co.za**     | Gig 1/3           | Fas 1/4     |
##### The `show cdp neighbors detail` command
```Cisco
IND-SW-SL7Mcc#show cdp neighbors detail
-------------------------

Device ID: IND-SW-EDNL-SL7Oper.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.119
Platform: cisco IE-3300-8P2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/8,  Port ID (outgoing port): GigabitEthernet1/3
Holdtime : 135 sec

-------------------------

Device ID: IND-SW-EDNL_SL7.hulamin.co.za
Entry address(es):
  IP address: 192.168.1.52
Platform: cisco IE-3000-4TC,  Capabilities: Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): FastEthernet1/4
Holdtime : 172 sec
```

### SL7_SCADA_PC
![[5de39a01-75f9-406c-9378-3f542bea932e.jpg]]

### IBA_PC
![[c18f6e7a-8b00-44e4-9634-d33c361475dd 1.jpg]]


## SL7 Operating Desk
![[a8047b26-fde1-406d-95c5-f2a281eed9f4.jpg]]


### IND-SW-EDNL-SL7Oper Switch
![[e80bda32-0b9d-4a8e-8a6e-af425324257a.jpg]]

- **IP Address:** 192.168.160.119

#### CDP Neighbors
##### The `show cdp neighbors` command
- Gig1/3 --> Gig1/8(**SL7MCC**)

|**Device ID**|**Local Intrfce**|**Port ID**|
|---|---|---|
|**IND-SW-SL7Mcc.hulamin.co.za**|Gig 1/3|Gig 1/8|
##### The `show cdp neighbors detail` command
```Cisco
IND-SW-EDNL-SL7Oper#show cdp neighbors detail
-------------------------
Device ID: IND-SW-SL7Mcc.hulamin.co.za
Entry address(es):
  IP address: 192.168.160.112
Platform: cisco IE-3200-8T2S,  Capabilities: Router Switch IGMP
Interface: GigabitEthernet1/3,  Port ID (outgoing port): GigabitEthernet1/8
Holdtime : 155 sec
```