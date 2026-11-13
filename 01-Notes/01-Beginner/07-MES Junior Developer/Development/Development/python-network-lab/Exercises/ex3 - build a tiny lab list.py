devices = [
    {"hostname": "SW-LAB-01", "role": "Switch"},
    {"hostname": "HMI-SIM-01", "role": "HMI"},
    {"hostname": "PLC-SIM-01", "role": "PLC-Simulator"}
]

# Print device details
for device in devices:
    print(f"Host Name: {device["hostname"]}")
    print(f"Role: {device["role"]}")

print("=" * 4 * 8)

# Filtered for loop: print switches only
for device in devices:
    if device["role"] == "Switch":
        print(f"Host Name: {device["hostname"]}")
        print(f"Role: {device["role"]}")

