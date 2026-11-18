"""
# Read the error from the bottom up
vlan_id = int("twenty")
"""

"""
# Catch an expected input error
while True:
    vlan_text = input("Enter a VLAN ID: ")

    try:
        vlan_id = int(vlan_text)
    except ValueError:
        print("Please enter a whole number, for example 20.")
    else:
        print(f"You entered VLAN {vlan_id}.")
        break

print("=" * 4 * 8)
"""

# Validate data before using it
import csv
from pathlib import Path

def has_hostname(hostname: str) -> bool:
    return bool(hostname.strip())

device_path = Path("python-network-lab/04-devices.csv")

with device_path.open(newline="", encoding="utf-8") as file:
    reader = csv.DictReader(file)

    for row in reader:
        hostname = row["hostname"]
        status = "has a hostname name" if has_hostname(hostname) else "has no hostname name"
        print(f"The device with the IP Address \"{row['ip_address']}\" {status}: {hostname}")

