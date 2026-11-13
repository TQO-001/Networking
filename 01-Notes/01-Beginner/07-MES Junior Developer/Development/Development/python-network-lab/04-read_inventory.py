""" Read the file with csv.dictreader
import csv
from pathlib import Path

inventory_path = Path("04-devices.csv")

with inventory_path.open(newline="", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"{row['hostname']} — {row['ip_address']} ({row['role']})")
"""

""" Count the records """
import csv
from pathlib import Path

with Path("04-devices.csv").open(newline="", encoding="utf-8") as file:
    devices = list(csv.DictReader(file))

print(f"Loaded {len(devices)} records")
print(devices)
