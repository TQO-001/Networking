""" Give data a name
device_name = "PLC-SIM-01"
ip_address = "192.168.10.20"
vlan_id = 20
is_lab_device = True

print(device_name)
print(ip_address)
print(vlan_id)
print(is_lab_device)

print(type(ip_address))
print(type(vlan_id))
"""


""" Combine values with f-strings
device_name = "SW-LAB-01"
ip_address = "192.168.10.2"
status = "reachable"

print(f"{device_name} ({ip_address}) is {status}.")
print()
"""


""" Ask for input """
device_name = input("Enter a lab device name: ")
print(f"\tYou entered: {device_name}")

vlan_text = input("Enter a VLAN ID: ")
vlan_id = int(vlan_text)
print(f"\tVLAN {vlan_id} recorded")


