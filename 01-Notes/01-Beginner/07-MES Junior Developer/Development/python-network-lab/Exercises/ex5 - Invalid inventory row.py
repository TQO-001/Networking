""" My original method
import csv
from pathlib import Path

dash = lambda num=8, char="=": print(char * 4 * num)

inventory_path = Path("python-network-lab/04-devices.csv")

with inventory_path.open(newline="", encoding="utf-8") as file:
    reader = csv.DictReader(file)

    row_num = 1
    problem_rows = []

    dash(24)

    print("hostname\t\t| ip_address\t\t| role\t\t| vlan\t\t| problems")
    for row in reader:
        if row["problems"]:
            print(f"{row["hostname"]}\t\t| {row["ip_address"]}\t\t| {row["role"]}\t\t| {row["vlan"]}\t\t| {row["problems"]}")

            problem_rows.append(row_num)
        row_num += 1 
    dash(24)
    
    print()
    file.seek(0)
    reader = csv.DictReader(file)

    print("The following rows have problems:")
    for row in reader:
        if row["problems"]:
            print(f"Row {row_num} has a {row["problems"]}")
"""

# AI solution
import csv
from pathlib import Path

dash = lambda num=8, char="=": print(char * 4 * num)

inventory_path = Path("python-network-lab/04-devices.csv")

with inventory_path.open(newline="", encoding="utf-8") as file:
    # Convert reader to a list so we can iterate over it multiple times
    rows = list(csv.DictReader(file))

dash(24)
print("hostname\t\t| ip_address\t\t| role\t\t| vlan\t\t| problems")

problem_rows = []

# Use enumerate to track row numbers accurately (start=1 accounts for header row)
for row_num, row in enumerate(rows, start=1):
    if row["problems"]:
        print(f"{row['hostname']}\t\t| {row['ip_address']}\t\t| {row['role']}\t\t| {row['vlan']}\t\t| {row['problems']}")
        problem_rows.append((row_num, row["problems"]))

dash(24)
print()

print("The following rows have problems:")
for row_num, problem in problem_rows:
    print(f"Row {row_num} has a {problem}")