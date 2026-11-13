# Exercise: Label three devices
device_name = "IND-SW-YABB-SL20"
ip_address = "192.168.10.20"
is_lab_device = True

print(f"{device_name} is a {type(device_name)} because it only contains string values")
print(f"{ip_address} is a {type(ip_address)} and while it contains number, it also has multiple decimal points we need to preserve")
print(f"{is_lab_device} is a {type(is_lab_device)} because it is a boolean value to determine whether something is True or False, in this case it's \"{is_lab_device}\"")

