# 2.2 Cisco IOS Switch Trunk Troubleshooting & Configuration Guide
## 2.2.1 Configuration Steps
### 1. Configure the Local Switch (`IND-SW-EDNL-CM-Crane`)
Run these commands to add VLANs 560, 561 and 593 to the allowed list:

```cisco
configure terminal
interface GigabitEthernet1/1
 switchport mode trunk
 switchport trunk allowed vlan add 560,561,593
 end
copy running-config startup-config
```

For the access port to connect the **Moxa AP** to the switch, we already configured `GigabitEthernet1/10` which already sits on the Ignition VLAN. Connect `GigabitEthernet1/10` of the **switch** to the **Moxa AP LAN port**.

### 2. Configure the Remote Switch
Ensure the `IND-SW-CRECHE` switch connected via the fiber link has matching trunk parameters and allowed VLANs:
```cisco
configure terminal
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan add 560,561,593
 end
copy running-config startup-config
```

## Verification Commands
```cisco
show ip interface brief 
show vlan brief
show startup-config
```

Verify the active allowed VLANs on the trunk interface:
```cisco
show interface GigabitEthernet0/1 switchport
```

## Quick Reference: Cisco Trunk Allowed VLAN Syntax

|**Desired Action**|**Command Syntax**|
|---|---|
|**Add VLANs to current list**|`switchport trunk allowed vlan add <vlan-ids>`|
|**Remove specific VLANs**|`switchport trunk allowed vlan remove <vlan-ids>`|
|**Replace entire list (Caution)**|`switchport trunk allowed vlan <vlan-ids>`|
|**Reset to allow ALL VLANs**|`no switchport trunk allowed vlan`|