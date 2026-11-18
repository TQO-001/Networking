def is_switch(role):
    return role.lower() == "switch"

devices = [
    {"hostname": "SW-LAB-01", "role": "switch"},
    {"hostname": "HMI-SIM-01", "role": "HMI"},
    {"hostname": "PLC-SIM-01", "role": "PLC-Simulator"}
]

for device in devices:
    print(f"{device["hostname"]}")
    print(f"Is it a switch? \n\t{is_switch(device["role"])}\n")