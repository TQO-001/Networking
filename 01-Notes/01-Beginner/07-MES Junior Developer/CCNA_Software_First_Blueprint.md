# CCNA 200-301 — Software-First Blueprint

> Goal: pass the CCNA while building real Python, Git and automation skills by automating a virtual lab from Day 1.
> Format rule for this whole file: every task is a checkbox `- [ ]`. Tick it when done. Nothing is "done" until its **Done when** line is true.

---

## 0. How to use this file

**The 3 rules**

1. **CLI first, script second.** Type every config by hand once. Only then automate it. If you can't explain a command, you can't automate it safely.
2. **One small thing per session.** Each daily block below has 3 tasks and a commit. Finish those, stop. More is optional.
3. **Everything goes in Git.** If it isn't committed, it didn't happen.

**Daily time budget (default ~2 hrs, adjust to your life)**

| Block | Time | What |
|---|---|---|
| Concept | 45–60 min | Watch/read one CCNA topic, write 5 lines of notes in your own words |
| CLI | 30 min | Configure it by hand in the lab |
| Python | 30–45 min | Write/extend a script for that topic |
| Commit | 5 min | `git add -A && git commit -m "day N: ..."` |

**Legend**

- `- [ ]` = not done, `- [x]` = done
- **Done when** = the objective test that a task is finished
- **Stuck rule:** if blocked for 20 minutes, write the exact error in `notes/stuck.md`, move to the next task, come back tomorrow

---

## 1. Software-First CCNA Roadmap

### 1.1 The six exam domains (CCNA 200-301 v1.1)

| # | Domain | Weight | Python / automation skill you build alongside |
|---|---|---|---|
| 1 | Network Fundamentals | 20% | Python basics, `ipaddress` module, venv, Git |
| 2 | Network Access (VLANs, trunks, STP, EtherChannel, WLAN) | 20% | Netmiko, JSON files, loops, functions, error handling |
| 3 | IP Connectivity (static routing, OSPF) | 25% | Regex, parsing `show` output, TextFSM, dicts |
| 4 | IP Services (NAT, DHCP, NTP, SNMP, syslog, QoS) | 10% | Templates (Jinja2), config generation, logging module |
| 5 | Security Fundamentals (ACLs, port security, AAA, VPN concepts) | 15% | Verification scripts, assertions, exit codes |
| 6 | Automation & Programmability | 10% | `requests`, REST, JSON, YANG/NETCONF/RESTCONF concepts, Ansible/Terraform concepts |

> Domain 6 is only 10% of the exam, but it is the one you are already practicing every day. Treat it as free marks.
> Check Cisco's official CCNA exam topics page for the current version and retirement dates before you book.

### 1.2 Topic → Python mapping (the actual sequence)

| Order | CCNA topic | Hand-typed CLI skill | Python concept | Script / artifact | Git milestone |
|---|---|---|---|---|---|
| 1 | OSI/TCP-IP, cables, switch vs router | Console/SSH in, `show version` | Variables, f-strings, `print`, venv | `hello_net.py` | repo init |
| 2 | IPv4 addressing, subnetting | `ip address`, `show ip int brief` | `ipaddress` module, lists, loops | `subnet_calc.py` | commit per script |
| 3 | Device management (SSH, hostnames, banners) | SSH setup, `show run` | Netmiko `ConnectHandler`, env vars | `connect_test.py` | `.gitignore` for secrets |
| 4 | Switching basics, MAC table | `show mac address-table` | Functions, `try/except` | `inventory.py` | **Lab 1 done** |
| 5 | VLANs & trunking | VLAN create, access/trunk ports | JSON load, dicts, config generation | `deploy_vlans.py` | **Lab 2 done** |
| 6 | STP, EtherChannel | `show spanning-tree`, `channel-group` | Parsing text with regex | `stp_check.py` | branch per feature |
| 7 | Static routing, IPv6 | `ip route`, `show ip route` | Regex groups, `re.findall` | `route_check.py` | PR-style merge to `main` |
| 8 | OSPF | `router ospf 1`, neighbors | Netmiko + TextFSM parsing | `ospf_check.py` | tag `v0.1` |
| 9 | IP services (DHCP, NAT, NTP, syslog) | Configure each once | Jinja2 templates, `logging` | `render_config.py` | templates/ folder |
| 10 | Security (ACLs, port security, AAA) | ACL create/apply, `show access-lists` | Assertions, JSON reports, exit codes | `health_check.py` | **Lab 3 done** |
| 11 | Wireless, QoS, WAN concepts | Concept only (no lab needed) | Reading docs, `requests` | `api_hello.py` | notes committed |
| 12 | Automation & programmability | REST API call to your lab server | `requests`, JSON, auth tokens | `lab_api_list.py` | README polished |

### 1.3 Python skill ladder (what you actually need, nothing more)

- [ ] Variables, strings, f-strings
- [ ] Lists, dicts, nested dicts (device inventories are dicts)
- [ ] `for` loops and `if/else`
- [ ] Functions with arguments and `return`
- [ ] Reading/writing files with `pathlib`
- [ ] `json.load` / `json.dump`
- [ ] `try/except` (networks fail; scripts must not crash silently)
- [ ] `import` + virtual environments + `pip`
- [ ] `argparse` (give scripts flags like `--dry-run`)
- [ ] `re` (regex) for parsing CLI output
- [ ] `requests` for REST APIs
- [ ] Git: `init`, `add`, `commit`, `branch`, `merge`, `push`

**Done when:** you can write a 40-line script that reads a JSON file, loops over devices, and prints a result without looking up syntax for the basics.

---

## 2. Virtual Router Lab Setup Guide

### 2.1 How the pieces fit

```
┌──────────────────────── YOUR PC / LAPTOP ────────────────────────┐
│                                                                  │
│  VS Code + Python scripts (Netmiko)                              │
│        │  SSH (TCP 22)                                           │
│        ▼                                                         │
│  Virtual NIC / bridge (e.g. VMnet8, virbr0, "NAT" network)       │
│        │                                                         │
│  ┌─────┴──────────── HYPERVISOR / LAB SERVER ─────────────────┐  │
│  │  CML / EVE-NG / GNS3 server (VM or native)                 │  │
│  │    uses KVM/QEMU to run each network OS image as a VM      │  │
│  │                                                            │  │
│  │   [R1 IOSv]──[R2 IOSv]──[R3 IOSv]     data links           │  │
│  │      │Gi0/0     │Gi0/0     │Gi0/0                          │  │
│  │      └──────────┴──────────┴── unmanaged switch ── EXT     │  │
│  │                (management network)               CONNECTOR│  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Plain-English version**

- A **hypervisor** (KVM/QEMU, VMware, VirtualBox) runs virtual machines. A lab platform (CML, EVE-NG, GNS3) is a layer on top that starts each router/switch image as its own VM and wires virtual cables between them.
- **IOSv** is a virtual Cisco IOS router. **IOSvL2** is a virtual IOS switch. They behave like the real CLI, which is exactly what CCNA tests.
- Your Python script does **not** talk to the hypervisor. It talks to each virtual device **over the network via SSH**, exactly like a real device.
- To make that possible, every device gets a **management interface** (usually `Gi0/0`) connected to a **management network** that your PC can reach. That's the whole trick.

### 2.2 Platform comparison

| Platform | Cost | Cisco images | Best for | Watch out for |
|---|---|---|---|---|
| **Cisco CML** (Free / Personal tiers) | Free tier is node-limited; Personal is paid per year | Reference images (IOSv, IOSvL2, etc.) are bundled | Easiest legit path, built-in REST API (good for Domain 6) | Check Cisco's current node limits and pricing before you commit |
| **EVE-NG Community** | Free | You must supply your own images (licensing is on you) | Flexible, browser UI, many vendors | Image sourcing, setup time |
| **GNS3** | Free | You supply images | Local-first, large community | Same image/licensing issue |
| **Containerlab** | Free | Native: Linux-based NOSes (FRR, Nokia SR Linux, Arista cEOS). Cisco images need extra wrapping | Learning Docker + infrastructure-as-code | Linux only, not a CCNA-syntax trainer. Use **after** CCNA basics |
| **Packet Tracer** | Free | Built in | CCNA drills, topology practice | Not a good target for real Netmiko-style automation. Keep it for exam practice only |

**Recommendation for you**

- [ ] **Primary automation lab:** CML (if your hardware and budget allow) or EVE-NG/GNS3 with images you have legitimate access to.
- [ ] **Keep Packet Tracer** for fast exam-style topology drills.
- [ ] **Containerlab:** park it until Week 4+ (optional stretch).

**Hardware sanity check (approximate, verify for your platform)**

- 16 GB RAM is comfortable; 8 GB is tight.
- CPU with virtualization enabled in BIOS (Intel VT-x / AMD-V). If you run the lab server inside VMware/VirtualBox, you also need **nested virtualization** enabled.
- IOSv/IOSvL2 nodes are light (roughly half a GB RAM each), so a 3-node lab is fine.

### 2.3 Step-by-step: get a lab that Python can reach

- [ ] **Step 1 — Install the platform** (follow the vendor's install guide for your OS).
- [ ] **Step 2 — Create a new lab** with this shape:
  - 3× IOSv or IOSvL2 nodes (R1/R2/R3 or SW1/SW2/SW3)
  - 1× unmanaged switch (management segment)
  - 1× External Connector in **NAT** mode (gives your PC a path in). Bridge mode also works but depends on your network.
- [ ] **Step 3 — Cable it:** every device's `Gi0/0` → the unmanaged switch → External Connector.
- [ ] **Step 4 — Paste a bootstrap config** into each node (CML has a Configuration tab per node; do the same in your platform) so you don't retype it:

```
hostname R1
ip domain-name lab.local
!
username admin privilege 15 secret LabPass123!
!
crypto key generate rsa modulus 2048
ip ssh version 2
!
interface GigabitEthernet0/0
 description MGMT
 ip address 192.168.255.11 255.255.255.0
 no shutdown
!
line vty 0 4
 login local
 transport input ssh
!
end
write memory
```

> **Lab only.** The password is a throwaway. Never reuse real passwords in configs you commit.
> The `192.168.255.0/24` management subnet is a placeholder. Use the subnet your platform's NAT network actually uses, and pick addresses outside its DHCP range (check your platform's docs). Give each device a different host number (R1 `.11`, R2 `.12`, R3 `.13`, SW1 `.21` ...).

- [ ] **Step 5 — Start the lab. From your PC, test reachability:**

```bash
ping 192.168.255.11
ssh admin@192.168.255.11
```

**Done when:** `ssh admin@<device-ip>` gives you the router prompt `R1#`.

### 2.4 Python environment (one time)

**Linux / macOS**
```bash
mkdir ccna-automation && cd ccna-automation
python3 -m venv .venv
source .venv/bin/activate
pip install netmiko
git init
```

**Windows (PowerShell)**
```powershell
mkdir ccna-automation; cd ccna-automation
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install netmiko
git init
```

Create `requirements.txt` with `pip freeze > requirements.txt` after installing.

**Project layout**

```
ccna-automation/
├── .venv/                 # never committed
├── .gitignore
├── README.md
├── requirements.txt
├── data/
│   ├── devices.json       # inventory
│   ├── vlans.json         # Lab 2 desired state
│   └── checks.json        # Lab 3 expectations
├── lab1_backup/
│   └── backup_inventory.py
├── lab2_vlans/
│   └── deploy_vlans.py
├── lab3_health/
│   └── health_check.py
├── backups/               # generated configs (gitignored or committed, your choice)
├── reports/               # generated JSON reports
└── notes/
    ├── stuck.md
    └── daily.md
```

**`.gitignore`**
```
.venv/
__pycache__/
.env
*.pyc
reports/
```

**Credentials: environment variables, never hard-coded**

Linux/macOS: `export LAB_USER=admin LAB_PASS='LabPass123!'`
PowerShell: `$env:LAB_USER="admin"; $env:LAB_PASS="LabPass123!"`

### 2.5 Shared inventory: `data/devices.json`

```json
{
  "routers": [
    {"name": "R1", "host": "192.168.255.11"},
    {"name": "R2", "host": "192.168.255.12"},
    {"name": "R3", "host": "192.168.255.13"}
  ],
  "switches": [
    {"name": "SW1", "host": "192.168.255.21"},
    {"name": "SW2", "host": "192.168.255.22"},
    {"name": "SW3", "host": "192.168.255.23"}
  ]
}
```

### 2.6 Connection troubleshooting table

| Symptom | Likely cause | Fix |
|---|---|---|
| `ping` fails from PC | Wrong subnet, External Connector not in NAT, device `Gi0/0` shut | `show ip int brief` on device; confirm subnet matches your platform's NAT network |
| `ssh` refused | SSH not enabled / no RSA key | Re-run `crypto key generate rsa modulus 2048`, `ip ssh version 2`, `transport input ssh` |
| `no matching key exchange method` / `no matching host key type` | Old IOS image offers old algorithms; modern OpenSSH disables them | For the plain `ssh` command: `ssh -o KexAlgorithms=+diffie-hellman-group14-sha1 -o HostKeyAlgorithms=+ssh-rsa admin@IP`. Netmiko's Paramiko usually negotiates fine; if not, upgrade/downgrade Paramiko and note the version |
| `NetmikoAuthenticationException` | Wrong user/pass, env vars not set in this shell | `echo $LAB_USER` (or `$env:LAB_USER`); re-export |
| `NetmikoTimeoutException` | Device still booting, wrong IP, firewall | Wait 2–3 min after node start; ping first |
| Prompt not found / hangs | Banner or odd prompt | Add `global_delay_factor=2` to the device dict |

---

## 3. Automation Starter Labs

Build them in order. Each lab has: **Topology → Prereq → Manual CLI first → Script → Expected output → Done when → Stretch.**

---

### Lab 1 — Automated Config Backup & Inventory Pull

**Skills:** Netmiko, env vars, `try/except`, files, regex, `difflib`
**CCNA link:** device management, `show version`, `show running-config`, `show ip interface brief`

**Topology:** the 3 routers (or switches) from §2.3, all reachable on management.

**Step A — Manual first (30 min)**

- [ ] SSH into R1 by hand and run: `show version`, `show ip interface brief`, `show running-config`
- [ ] Find by eye: hostname, IOS version, uptime, serial number

**Step B — Script: `lab1_backup/backup_inventory.py`**

```python
#!/usr/bin/env python3
"""Lab 1: back up running-configs and pull a device inventory."""
import csv
import difflib
import json
import os
import re
import sys
from datetime import datetime
from pathlib import Path

from netmiko import ConnectHandler
from netmiko.exceptions import (
    NetmikoAuthenticationException,
    NetmikoTimeoutException,
)

ROOT = Path(__file__).resolve().parent.parent
DEVICES_FILE = ROOT / "data" / "devices.json"
BACKUP_DIR = ROOT / "backups"
INVENTORY_CSV = ROOT / "reports" / "inventory.csv"


def load_devices():
    data = json.loads(DEVICES_FILE.read_text())
    # Lab 1 works on every device in the file
    return data["routers"] + data["switches"]


def build_connection(device):
    return {
        "device_type": "cisco_ios",
        "host": device["host"],
        "username": os.environ["LAB_USER"],
        "password": os.environ["LAB_PASS"],
        "conn_timeout": 20,
    }


def parse_version(show_version: str) -> dict:
    """Pull facts out of 'show version' with regex."""
    def grab(pattern, default="unknown"):
        m = re.search(pattern, show_version)
        return m.group(1) if m else default

    return {
        "version": grab(r"Version ([^,\s]+)"),
        "uptime": grab(r"uptime is (.+)"),
        "serial": grab(r"Processor board ID (\S+)"),
    }


def latest_backup(name: str):
    folder = BACKUP_DIR / name
    files = sorted(folder.glob("*.cfg")) if folder.exists() else []
    return files[-1] if files else None


def backup_config(name: str, config: str) -> str:
    """Save config. Return 'new', 'changed' or 'unchanged'."""
    folder = BACKUP_DIR / name
    folder.mkdir(parents=True, exist_ok=True)

    previous = latest_backup(name)
    status = "new"
    if previous:
        old = previous.read_text().splitlines()
        new = config.splitlines()
        # ignore the timestamp comment lines IOS adds
        diff = [
            line for line in difflib.unified_diff(old, new, lineterm="")
            if line.startswith(("+", "-")) and not line.startswith(("+++", "---"))
            and "Last configuration change" not in line
            and "NVRAM config last updated" not in line
        ]
        status = "changed" if diff else "unchanged"

    if status != "unchanged":
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        (folder / f"{name}_{stamp}.cfg").write_text(config)
    return status


def process_device(device: dict) -> dict:
    row = {"name": device["name"], "host": device["host"], "status": "ok",
           "backup": "", "version": "", "uptime": "", "serial": "", "error": ""}
    try:
        with ConnectHandler(**build_connection(device)) as conn:
            row.update(parse_version(conn.send_command("show version")))
            config = conn.send_command("show running-config")
            row["backup"] = backup_config(device["name"], config)
    except NetmikoAuthenticationException:
        row.update(status="FAIL", error="authentication failed")
    except NetmikoTimeoutException:
        row.update(status="FAIL", error="timeout / unreachable")
    except Exception as exc:  # last-resort catch so one bad device never kills the run
        row.update(status="FAIL", error=f"{type(exc).__name__}: {exc}")
    return row


def main() -> int:
    for var in ("LAB_USER", "LAB_PASS"):
        if var not in os.environ:
            print(f"Missing environment variable: {var}")
            return 2

    rows = [process_device(d) for d in load_devices()]

    INVENTORY_CSV.parent.mkdir(exist_ok=True)
    with INVENTORY_CSV.open("w", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)

    print(f"{'NAME':<6}{'HOST':<17}{'STATUS':<8}{'BACKUP':<11}{'VERSION':<14}SERIAL")
    for r in rows:
        print(f"{r['name']:<6}{r['host']:<17}{r['status']:<8}{r['backup']:<11}"
              f"{r['version']:<14}{r['serial']}  {r['error']}")

    return 1 if any(r["status"] != "ok" for r in rows) else 0


if __name__ == "__main__":
    sys.exit(main())
```

**Step C — Run it**

```bash
python lab1_backup/backup_inventory.py
```

**Expected output (shape, values will differ)**

```
NAME  HOST             STATUS  BACKUP     VERSION       SERIAL
R1    192.168.255.11   ok      new        15.9(3)M6     9ABCDEF0123
R2    192.168.255.12   ok      new        15.9(3)M6     9ABCDEF0456
R3    192.168.255.13   ok      new        15.9(3)M6     9ABCDEF0789
```

**Checklist**

- [ ] Script runs with no traceback
- [ ] `backups/R1/R1_<timestamp>.cfg` exists for every device
- [ ] `reports/inventory.csv` opens in a spreadsheet
- [ ] Change something on R1 by hand (e.g. add a banner), re-run: R1 shows `changed`
- [ ] Re-run without changes: everything shows `unchanged`
- [ ] Shut down one node, re-run: that device shows `FAIL` and the rest still succeed
- [ ] Commit: `git commit -m "lab1: backup + inventory"`

**Done when:** the script backs up all devices, detects changes between runs, and survives a dead device.

**Stretch**

- [ ] Run devices in parallel with `concurrent.futures.ThreadPoolExecutor`
- [ ] Use `send_command("show version", use_textfsm=True)` and compare parsed fields to your regex (`pprint` the result first to see the key names)
- [ ] Add `show cdp neighbors` to build a simple topology report

---

### Lab 2 — Automated VLAN & Trunking Deployment from JSON

**Skills:** JSON as "desired state", config generation, `send_config_set`, error detection, dry-run mode
**CCNA link:** VLANs, 802.1Q trunks, access ports, native VLAN

**Topology**

```
          PC1 (VLAN 10)                         PC2 (VLAN 20)
              │ Gi0/2                               │ Gi0/2
            [SW2] ───Gi0/1───── Gi0/1 [SW1] Gi0/2 ───── Gi0/1 [SW3]
                      trunk                      trunk
```

All three switches also keep `Gi0/0` for management (access port in your mgmt VLAN, already configured in the bootstrap). **Do not let the script touch `Gi0/0`.**

> Interface names differ between images. Run `show ip interface brief` on your switch and edit the JSON to match. Treat the JSON as the single source of truth.

**Prereq: management on a switch (IOSvL2 bootstrap, adapt IPs)**

```
hostname SW1
ip domain-name lab.local
username admin privilege 15 secret LabPass123!
crypto key generate rsa modulus 2048
ip ssh version 2
interface vlan 1
 ip address 192.168.255.21 255.255.255.0
 no shutdown
line vty 0 4
 login local
 transport input ssh
end
write memory
```

(Using VLAN 1 as the management SVI keeps this lab simple. Moving management to a dedicated VLAN is a good later exercise.)

**Step A — Manual first (30 min)**

- [ ] On SW1 by hand: create VLAN 10 `USERS`, VLAN 20 `SERVERS`
- [ ] Configure `Gi0/1` and `Gi0/2` as trunks allowing VLANs 10,20
- [ ] On SW2: `Gi0/2` as access VLAN 10. On SW3: `Gi0/2` as access VLAN 20
- [ ] Verify with `show vlan brief` and `show interfaces trunk`
- [ ] Wipe it again (`no vlan 10`, etc.) so the script has real work to do

**Step B — Desired state: `data/vlans.json`**

```json
{
  "settings": {
    "needs_dot1q_encap": true,
    "native_vlan": 99
  },
  "vlans": [
    {"id": 10, "name": "USERS"},
    {"id": 20, "name": "SERVERS"},
    {"id": 99, "name": "NATIVE_UNUSED"}
  ],
  "switches": {
    "SW1": {
      "host": "192.168.255.21",
      "trunks": ["GigabitEthernet0/1", "GigabitEthernet0/2"],
      "access": {}
    },
    "SW2": {
      "host": "192.168.255.22",
      "trunks": ["GigabitEthernet0/1"],
      "access": {"GigabitEthernet0/2": 10}
    },
    "SW3": {
      "host": "192.168.255.23",
      "trunks": ["GigabitEthernet0/1"],
      "access": {"GigabitEthernet0/2": 20}
    }
  }
}
```

**Step C — Script: `lab2_vlans/deploy_vlans.py`**

```python
#!/usr/bin/env python3
"""Lab 2: deploy VLANs, trunks and access ports from data/vlans.json."""
import argparse
import json
import os
import sys
from pathlib import Path

from netmiko import ConnectHandler

ROOT = Path(__file__).resolve().parent.parent
VLAN_FILE = ROOT / "data" / "vlans.json"


def build_commands(switch: dict, vlans: list, settings: dict) -> list[str]:
    """Turn desired state into an ordered list of IOS commands."""
    cmds = []

    for v in vlans:
        cmds += [f"vlan {v['id']}", f" name {v['name']}"]

    vlan_ids = ",".join(str(v["id"]) for v in vlans if v["id"] != settings["native_vlan"])

    for intf in switch["trunks"]:
        cmds.append(f"interface {intf}")
        if settings["needs_dot1q_encap"]:
            cmds.append(" switchport trunk encapsulation dot1q")
        cmds += [
            " switchport mode trunk",
            f" switchport trunk native vlan {settings['native_vlan']}",
            f" switchport trunk allowed vlan {vlan_ids}",
            " no shutdown",
        ]

    for intf, vlan in switch["access"].items():
        cmds += [
            f"interface {intf}",
            " switchport mode access",
            f" switchport access vlan {vlan}",
            " spanning-tree portfast",
            " no shutdown",
        ]
    return cmds


def has_errors(output: str) -> list[str]:
    """IOS prints '% ...' lines when a command is rejected."""
    return [line for line in output.splitlines() if line.strip().startswith("%")]


def verify(conn, switch: dict, vlans: list) -> list[str]:
    problems = []
    vlan_out = conn.send_command("show vlan brief")
    for v in vlans:
        if v["name"] not in vlan_out:
            problems.append(f"VLAN {v['id']} ({v['name']}) missing")

    trunk_out = conn.send_command("show interfaces trunk")
    for intf in switch["trunks"]:
        short = intf.replace("GigabitEthernet", "Gi")
        if short not in trunk_out:
            problems.append(f"{intf} not listed as a trunk")
    return problems


def deploy(name: str, switch: dict, cfg: dict, dry_run: bool) -> bool:
    cmds = build_commands(switch, cfg["vlans"], cfg["settings"])

    if dry_run:
        print(f"\n--- {name} ({switch['host']}) DRY RUN ---")
        print("\n".join(cmds))
        return True

    device = {
        "device_type": "cisco_ios",
        "host": switch["host"],
        "username": os.environ["LAB_USER"],
        "password": os.environ["LAB_PASS"],
    }
    try:
        with ConnectHandler(**device) as conn:
            output = conn.send_config_set(cmds)
            errors = has_errors(output)
            if errors:
                print(f"[{name}] IOS rejected commands:")
                for e in errors:
                    print(f"    {e}")
                return False

            conn.save_config()
            problems = verify(conn, switch, cfg["vlans"])
            if problems:
                print(f"[{name}] verification FAILED:")
                for p in problems:
                    print(f"    - {p}")
                return False
            print(f"[{name}] OK")
            return True
    except Exception as exc:
        print(f"[{name}] ERROR {type(exc).__name__}: {exc}")
        return False


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true",
                        help="print commands, change nothing")
    args = parser.parse_args()

    if not args.dry_run:
        for var in ("LAB_USER", "LAB_PASS"):
            if var not in os.environ:
                print(f"Missing environment variable: {var}")
                return 2

    cfg = json.loads(VLAN_FILE.read_text())
    results = [deploy(n, s, cfg, args.dry_run) for n, s in cfg["switches"].items()]
    return 0 if all(results) else 1


if __name__ == "__main__":
    sys.exit(main())
```

**Step D — Run it**

```bash
python lab2_vlans/deploy_vlans.py --dry-run     # read the commands first
python lab2_vlans/deploy_vlans.py               # then push for real
```

**Checklist**

- [ ] Dry run prints a sensible command list per switch
- [ ] Real run prints `[SW1] OK`, `[SW2] OK`, `[SW3] OK`
- [ ] `show vlan brief` on each switch shows VLANs 10, 20, 99
- [ ] `show interfaces trunk` shows the right trunk ports and native VLAN 99
- [ ] PC1 and PC2 (or two test nodes) in the **same** VLAN can ping; different VLANs cannot (no router yet, that's correct)
- [ ] Re-run the script: still OK (it is **idempotent**, running twice causes no harm)
- [ ] Break something on purpose (typo an interface name in the JSON): the script reports the IOS `%` error instead of pretending success
- [ ] Commit: `git commit -m "lab2: vlan/trunk deploy from json"`

**Done when:** you can change only `vlans.json` (add VLAN 30, move a port) and the script makes the network match it.

**Stretch**

- [ ] Add an `--only SW2` flag
- [ ] Add a "drift report" mode: compare live VLANs against JSON and print differences without changing anything
- [ ] Add EtherChannel between two switches as a new JSON section (ties to the CCNA topic)

---

### Lab 3 — Route/ACL Verification & Health Monitoring

**Skills:** reading "expected state" from JSON, parsing, assertions, reports, exit codes, loop mode
**CCNA link:** OSPF neighbors/routes, ACL verification, interface status, ping tests

**Topology**

```
 R1 ─────────── R2 ─────────── R3
    10.0.12.0/30   10.0.23.0/30
 Lo0 1.1.1.1    Lo0 2.2.2.2     Lo0 3.3.3.3
```

**Step A — Build the network by hand (this is CCNA OSPF + ACL practice)**

```
! R1
interface Lo0
 ip address 1.1.1.1 255.255.255.255
interface Gi0/1
 ip address 10.0.12.1 255.255.255.252
 no shutdown
router ospf 1
 router-id 1.1.1.1
 network 1.1.1.1 0.0.0.0 area 0
 network 10.0.12.0 0.0.0.3 area 0

! R2
interface Lo0
 ip address 2.2.2.2 255.255.255.255
interface Gi0/1
 ip address 10.0.12.2 255.255.255.252
 no shutdown
interface Gi0/2
 ip address 10.0.23.1 255.255.255.252
 no shutdown
router ospf 1
 router-id 2.2.2.2
 network 2.2.2.2 0.0.0.0 area 0
 network 10.0.12.0 0.0.0.3 area 0
 network 10.0.23.0 0.0.0.3 area 0

! R3
interface Lo0
 ip address 3.3.3.3 255.255.255.255
interface Gi0/1
 ip address 10.0.23.2 255.255.255.252
 no shutdown
router ospf 1
 router-id 3.3.3.3
 network 3.3.3.3 0.0.0.0 area 0
 network 10.0.23.0 0.0.0.3 area 0
ip access-list extended EDGE-IN
 10 permit ospf any any
 20 deny tcp any any eq telnet
 30 permit ip any any
interface Gi0/1
 ip access-group EDGE-IN in
```

- [ ] Verify by hand: `show ip ospf neighbor` (FULL), `show ip route ospf`, `ping 3.3.3.3 source 1.1.1.1` from R1
- [ ] `show access-lists EDGE-IN` on R3 shows 3 entries
- [ ] `write memory` on all three

**Step B — Expectations: `data/checks.json`**

```json
{
  "R1": {
    "host": "192.168.255.11",
    "ospf_full_neighbors": 1,
    "routes": ["2.2.2.2/32", "3.3.3.3/32", "10.0.23.0/30"],
    "pings": [{"target": "3.3.3.3", "source": "1.1.1.1", "min_success": 100}],
    "interfaces_up": ["GigabitEthernet0/0", "GigabitEthernet0/1", "Loopback0"]
  },
  "R2": {
    "host": "192.168.255.12",
    "ospf_full_neighbors": 2,
    "routes": ["1.1.1.1/32", "3.3.3.3/32"],
    "pings": [],
    "interfaces_up": ["GigabitEthernet0/1", "GigabitEthernet0/2"]
  },
  "R3": {
    "host": "192.168.255.13",
    "ospf_full_neighbors": 1,
    "routes": ["1.1.1.1/32", "2.2.2.2/32", "10.0.12.0/30"],
    "pings": [],
    "interfaces_up": ["GigabitEthernet0/1", "Loopback0"],
    "acl": {
      "name": "EDGE-IN",
      "entries": 3,
      "applied_on": "GigabitEthernet0/1",
      "direction": "in"
    }
  }
}
```

**Step C — Script: `lab3_health/health_check.py`**

```python
#!/usr/bin/env python3
"""Lab 3: verify OSPF, routes, ACLs, interfaces and reachability."""
import argparse
import json
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path

from netmiko import ConnectHandler

ROOT = Path(__file__).resolve().parent.parent
CHECKS_FILE = ROOT / "data" / "checks.json"
REPORT_DIR = ROOT / "reports"


def result(name: str, passed: bool, detail: str = "") -> dict:
    return {"check": name, "passed": passed, "detail": detail}


def check_ospf(conn, expected: int) -> dict:
    out = conn.send_command("show ip ospf neighbor")
    full = len(re.findall(r"\bFULL/", out))
    return result("ospf_neighbors", full == expected,
                  f"expected {expected} FULL, found {full}")


def check_routes(conn, prefixes: list) -> list[dict]:
    results = []
    for prefix in prefixes:
        out = conn.send_command(f"show ip route {prefix.split('/')[0]}")
        found = "Routing entry for" in out and prefix in out
        results.append(result(f"route {prefix}", found,
                              "present" if found else "missing"))
    return results


def check_pings(conn, pings: list) -> list[dict]:
    results = []
    for p in pings:
        cmd = f"ping {p['target']} source {p['source']} repeat 5"
        out = conn.send_command(cmd, read_timeout=30)
        m = re.search(r"Success rate is (\d+) percent", out)
        rate = int(m.group(1)) if m else 0
        results.append(result(f"ping {p['target']}", rate >= p["min_success"],
                              f"success {rate}% (need {p['min_success']}%)"))
    return results


def check_interfaces(conn, names: list) -> list[dict]:
    out = conn.send_command("show ip interface brief")
    results = []
    for name in names:
        line = next((l for l in out.splitlines() if l.startswith(name)), "")
        up = bool(re.search(r"\bup\s+up\b", line))
        results.append(result(f"interface {name}", up,
                              "up/up" if up else (line.strip() or "not found")))
    return results


def check_acl(conn, acl: dict) -> list[dict]:
    results = []
    out = conn.send_command(f"show access-lists {acl['name']}")
    # entries look like: "    10 permit ospf any any"
    entries = len(re.findall(r"^\s+\d+\s+(permit|deny)", out, re.MULTILINE))
    results.append(result(f"acl {acl['name']} entries", entries == acl["entries"],
                          f"expected {acl['entries']}, found {entries}"))

    intf_out = conn.send_command(f"show ip interface {acl['applied_on']}")
    label = "Inbound" if acl["direction"] == "in" else "Outgoing"
    applied = re.search(rf"{label}\s+access list is {re.escape(acl['name'])}", intf_out)
    results.append(result(f"acl {acl['name']} applied", bool(applied),
                          f"{acl['applied_on']} {acl['direction']}"))
    return results


def check_device(name: str, spec: dict) -> dict:
    report = {"device": name, "host": spec["host"], "reachable": True, "results": []}
    device = {
        "device_type": "cisco_ios",
        "host": spec["host"],
        "username": os.environ["LAB_USER"],
        "password": os.environ["LAB_PASS"],
        "conn_timeout": 20,
    }
    try:
        with ConnectHandler(**device) as conn:
            r = report["results"]
            if "ospf_full_neighbors" in spec:
                r.append(check_ospf(conn, spec["ospf_full_neighbors"]))
            r += check_routes(conn, spec.get("routes", []))
            r += check_pings(conn, spec.get("pings", []))
            r += check_interfaces(conn, spec.get("interfaces_up", []))
            if "acl" in spec:
                r += check_acl(conn, spec["acl"])
    except Exception as exc:
        report["reachable"] = False
        report["results"].append(result("connect", False,
                                        f"{type(exc).__name__}: {exc}"))
    return report


def run_once(checks: dict) -> bool:
    reports = [check_device(n, s) for n, s in checks.items()]
    all_ok = True

    stamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"\n=== Health check {stamp} ===")
    for rep in reports:
        failed = [x for x in rep["results"] if not x["passed"]]
        status = "PASS" if not failed else "FAIL"
        print(f"{rep['device']:<4} {status}  ({len(rep['results']) - len(failed)}/"
              f"{len(rep['results'])} checks)")
        for f in failed:
            print(f"      x {f['check']}: {f['detail']}")
        all_ok &= not failed

    REPORT_DIR.mkdir(exist_ok=True)
    fname = REPORT_DIR / f"health_{datetime.now():%Y%m%d-%H%M%S}.json"
    fname.write_text(json.dumps({"time": stamp, "reports": reports}, indent=2))
    return all_ok


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--watch", type=int, metavar="SECONDS",
                        help="repeat every N seconds until Ctrl+C")
    args = parser.parse_args()

    for var in ("LAB_USER", "LAB_PASS"):
        if var not in os.environ:
            print(f"Missing environment variable: {var}")
            return 2

    checks = json.loads(CHECKS_FILE.read_text())

    if not args.watch:
        return 0 if run_once(checks) else 1

    try:
        while True:
            run_once(checks)
            time.sleep(args.watch)
    except KeyboardInterrupt:
        print("\nStopped.")
        return 0


if __name__ == "__main__":
    sys.exit(main())
```

**Step D — Run it**

```bash
python lab3_health/health_check.py
python lab3_health/health_check.py --watch 30
echo $?        # 0 = all healthy, 1 = something failed   (PowerShell: $LASTEXITCODE)
```

**Expected output (healthy)**

```
=== Health check 2026-11-10 19:30:02 ===
R1   PASS  (9/9 checks)
R2   PASS  (7/7 checks)
R3   PASS  (9/9 checks)
```

**Break-it tests (this is where the learning happens)**

- [ ] On R2: `interface Gi0/2` → `shutdown`. Re-run: R2 and R3 report failures, R1 reports missing routes and a failed ping
- [ ] Bring it back: `no shutdown`. Wait for OSPF to reconverge, re-run: all PASS
- [ ] On R3: `no ip access-group EDGE-IN in` on `Gi0/1`. Re-run: the "applied" check fails
- [ ] Remove ACL line 20. Re-run: entry count check fails
- [ ] Open `reports/health_*.json` and read the structure
- [ ] Commit: `git commit -m "lab3: health check + reports"` and tag: `git tag v0.1`

**Done when:** you can break the network 4 different ways and the script correctly names each break.

> If a regex doesn't match your image's output, don't guess: run the `show` command by hand, copy the exact line, and adjust the pattern. Parsing output is a core skill, and formats differ slightly between IOS versions.

**Stretch**

- [ ] Replace regex parsing with TextFSM (`use_textfsm=True`) for `show ip ospf neighbor` and compare
- [ ] Add a timestamped CSV "uptime log" so you can chart failures
- [ ] Add a Slack/Telegram/email alert on failure (read the API docs and use `requests`)

---

## 4. Immediate 30-Day Action Plan

**Rhythm:** weekdays ≈ 2 hrs (60 concept / 30 CLI / 30 Python), weekends ≈ 3–4 hrs (build + review). Take one full rest day per week. If you miss a day, **skip it, don't pile it on**. Move to today's block.

**Resources (pick one primary, stay with it)**

- Primary video course: Jeremy's IT Lab CCNA series (free) with its Anki decks
- Exam blueprint: Cisco's official 200-301 exam topics page (your "scope document": only study verbs like *configure, verify, describe, compare*)
- Python: the official Python tutorial, plus Netmiko's docs for device examples
- Cisco DevNet: free learning labs for Domain 6

**Week-end gate rule:** at the end of each week, do the **Gate** checklist. Don't start the next week's labs until the gate is ticked, or consciously decide which item to carry forward.

---

### Week 1 — Foundations: network basics, SSH, first connection

**Theme:** Domain 1 (Network Fundamentals) + Python basics + lab online
**Weekly outcome:** lab running, SSH works, Lab 1 started

**Day 1 — Lab + tools**
- [ ] Concept (45m): OSI vs TCP/IP model, 5 lines of notes
- [ ] CLI (45m): Install CML/EVE-NG/GNS3, boot first IOSv node, get to `Router>` prompt
- [ ] Python (30m): Install Python, VS Code, create venv, run `print("hello net")`
- [ ] Commit: `git init`, first commit with README

**Day 2 — Devices and cables**
- [ ] Concept: routers vs switches vs firewalls, access/distribution/core, cable types
- [ ] CLI: IOS modes (`>`, `#`, `(config)#`), `?` help, `show version`
- [ ] Python: variables, strings, f-strings, lists. Build a list of device names and print them
- [ ] Commit: `day2: basics`

**Day 3 — IPv4 addressing**
- [ ] Concept: IPv4 structure, classes, private ranges, subnet mask basics
- [ ] CLI: set an IP on `Gi0/0`, `show ip interface brief`, `ping`
- [ ] Python: `ipaddress` module: print network/broadcast/host count for a CIDR
- [ ] Commit: `subnet_calc.py v1`

**Day 4 — Subnetting (the big skill)**
- [ ] Concept: subnetting by hand, 10 practice problems on paper
- [ ] CLI: configure two interfaces on different subnets, confirm they don't talk without routing
- [ ] Python: extend `subnet_calc.py` to split a /24 into /26s with `.subnets(new_prefix=26)`
- [ ] Commit

**Day 5 — Management access**
- [ ] Concept: SSH vs Telnet, console vs VTY, local users
- [ ] CLI: apply the bootstrap config from §2.3 by hand on one node, SSH in from your PC
- [ ] Python: dicts and loops: model `devices.json` as a Python dict
- [ ] Commit: add `data/devices.json`

**Day 6 — First Netmiko (weekend, longer)**
- [ ] Concept (30m): review the week's notes, 10 Anki cards
- [ ] CLI: bootstrap all 3 nodes (use the node config tab so it's repeatable)
- [ ] Python (90m): `connect_test.py`: connect to R1 with Netmiko, print `show ip interface brief`
- [ ] Commit

**Day 7 — Rest + light review**
- [ ] 20 min Anki only. Nothing else.

**Week 1 Gate**
- [ ] I can SSH to all lab devices from my PC
- [ ] I can subnet a /24 into smaller subnets on paper, then verify with Python
- [ ] `connect_test.py` runs against at least one device
- [ ] Git repo has ≥ 5 commits

---

### Week 2 — Switching, VLANs, trunking → Lab 1 + Lab 2

**Theme:** Domain 2 (Network Access)
**Weekly outcome:** Lab 1 finished, Lab 2 finished

**Day 8 — Switching fundamentals**
- [ ] Concept: how a switch learns MACs, collision vs broadcast domains
- [ ] CLI: `show mac address-table`, generate traffic with ping, watch the table fill
- [ ] Python: functions + `try/except`: wrap your connect code in a function that handles failures
- [ ] Commit

**Day 9 — Lab 1 build**
- [ ] Concept (30m): running-config vs startup-config, `write memory`, why backups matter
- [ ] CLI: `show running-config`, `show version`, make a change, save it
- [ ] Python (60m): start Lab 1 script: connect, run `show version`, parse with regex
- [ ] Commit

**Day 10 — Lab 1 finish**
- [ ] Concept (30m): VLAN concept (why VLANs exist, broadcast domains)
- [ ] CLI: create VLANs on SW1 by hand
- [ ] Python (60m): finish Lab 1: backups, diff detection, CSV inventory
- [ ] Tick Lab 1 checklist, commit: `lab1 done`

**Day 11 — VLANs by hand**
- [ ] Concept: access ports, voice VLAN idea, `show vlan brief`
- [ ] CLI: SW2 `Gi0/2` access VLAN 10, SW3 `Gi0/2` access VLAN 20
- [ ] Python: `json.load`: read `vlans.json`, print what would be configured
- [ ] Commit

**Day 12 — Trunking**
- [ ] Concept: 802.1Q tagging, native VLAN, allowed VLAN list
- [ ] CLI: trunk between switches, `show interfaces trunk`
- [ ] Python: write `build_commands()` that returns a command list (print only, no sending)
- [ ] Commit

**Day 13 — Lab 2 build (weekend, longer)**
- [ ] Concept (30m): review VLAN/trunk notes, 10 Anki cards
- [ ] CLI: wipe VLANs/trunks so the script has work to do
- [ ] Python (2h): finish `deploy_vlans.py` with `--dry-run`, error detection, verify
- [ ] Commit: `lab2 done`

**Day 14 — Rest + light review**
- [ ] 20 min Anki only.

**Week 2 Gate**
- [ ] Lab 1 checklist fully ticked
- [ ] Lab 2 checklist fully ticked
- [ ] I can explain access vs trunk port and native VLAN out loud in 60 seconds
- [ ] Repo has tags or clear commit messages for each lab

---

### Week 3 — STP, EtherChannel, routing, OSPF → start Lab 3

**Theme:** Domain 2 (rest) + Domain 3 (IP Connectivity, biggest exam weight)
**Weekly outcome:** OSPF working by hand, Lab 3 network built, parsing skills growing

**Day 15 — Spanning Tree**
- [ ] Concept: why loops are dangerous, root bridge election, port roles
- [ ] CLI: `show spanning-tree`, find the root bridge in your 3-switch lab
- [ ] Python: regex practice: extract the root bridge ID from `show spanning-tree` output
- [ ] Commit

**Day 16 — EtherChannel**
- [ ] Concept: LACP vs PAgP vs static, why bundle links
- [ ] CLI: add a second link between two switches, configure LACP, `show etherchannel summary`
- [ ] Python: add an `etherchannel` section to `vlans.json` (design it on paper first)
- [ ] Commit

**Day 17 — Routing basics**
- [ ] Concept: routing table, administrative distance, longest-prefix match
- [ ] CLI: configure R1–R2–R3 interfaces, add static routes, `show ip route`
- [ ] Python: parse `show ip route` for prefixes with `re.findall`
- [ ] Commit

**Day 18 — Static vs dynamic, default routes**
- [ ] Concept: static, default, floating static
- [ ] CLI: remove static routes, create a default route, test ping
- [ ] Python: write `route_check.py`: assert that a given prefix appears in the table
- [ ] Commit

**Day 19 — OSPF theory + config**
- [ ] Concept: neighbors, adjacencies, DR/BDR concept, areas, router-ID
- [ ] CLI: configure OSPF on R1–R3 exactly as in Lab 3, Step A
- [ ] Python: parse `show ip ospf neighbor`, count `FULL` states
- [ ] Commit

**Day 20 — Lab 3 build (weekend, longer)**
- [ ] Concept (30m): review OSPF; 10 Anki cards; do 10 subnetting problems
- [ ] CLI: complete the ACL part of Lab 3 by hand, verify everything
- [ ] Python (2h): write `checks.json` and the first half of `health_check.py` (OSPF, routes, interfaces)
- [ ] Commit

**Day 21 — Rest + light review**
- [ ] 20 min Anki only.

**Week 3 Gate**
- [ ] OSPF adjacency FULL on all links, built from memory (look at notes only if stuck)
- [ ] I can read `show ip route` and explain each line (code, prefix, AD/metric, next hop)
- [ ] `health_check.py` passes OSPF/route/interface checks
- [ ] 10 subnetting problems in under 20 minutes

---

### Week 4 — IP services, security, automation concepts, finish, consolidate

**Theme:** Domains 4, 5, 6 + Lab 3 completion + first practice test
**Weekly outcome:** Lab 3 finished, REST API called, gap list for the next 30 days

**Day 22 — DHCP, NTP, syslog**
- [ ] Concept: DHCP (DORA), NTP purpose, syslog severity levels
- [ ] CLI: configure R1 as DHCP server for a test subnet, set NTP source, `logging host`
- [ ] Python: Jinja2 (`pip install jinja2`): render a DHCP config from a template and print it
- [ ] Commit: `templates/dhcp.j2`

**Day 23 — NAT**
- [ ] Concept: static NAT, dynamic NAT, PAT, inside/outside
- [ ] CLI: configure PAT on R1 (inside = loopback/LAN, outside = `Gi0/0`), `show ip nat translations`
- [ ] Python: extend template to render NAT config from JSON variables
- [ ] Commit

**Day 24 — ACLs**
- [ ] Concept: standard vs extended, wildcard masks, implicit deny, placement
- [ ] CLI: build `EDGE-IN` from scratch, test with telnet/ping, view hit counts
- [ ] Python: finish ACL check functions in `health_check.py`
- [ ] Commit

**Day 25 — Port security, AAA, concepts**
- [ ] Concept: port security, DHCP snooping, DAI (describe), AAA basics, VPN types (concept only)
- [ ] CLI: configure port security on `SW2 Gi0/2`, trigger a violation, `show port-security`
- [ ] Python: add a `port_security` check to your scripts (read the status from `show port-security interface`)
- [ ] Commit

**Day 26 — Lab 3 finish**
- [ ] Concept (30m): wireless architectures and QoS overview (concept only)
- [ ] CLI: break-it tests from Lab 3
- [ ] Python (60m): finish `health_check.py`: reports, `--watch`, exit codes
- [ ] Commit: `lab3 done`, `git tag v0.1`

**Day 27 — Automation & programmability (weekend, longer)**
- [ ] Concept (60m): REST (GET/POST/PUT/DELETE), JSON structure, YANG/NETCONF/RESTCONF at overview level, Ansible/Terraform vs scripts, controller-based vs traditional networking
- [ ] CLI/API (30m): open your lab server's built-in API docs page and find an authentication endpoint
- [ ] Python (90m): `pip install requests`; write `api_hello.py`: authenticate to the lab server API (or a DevNet Sandbox, whichever you have access to), list labs/devices, print JSON keys
- [ ] Commit

**Day 28 — Rest + light review**
- [ ] 20 min Anki only.

**Day 29 — Practice test + gap list**
- [ ] Take a full timed practice test (or at least 60 questions) from a reputable bank
- [ ] Write `notes/gaps.md`: every missed question → topic → one fix action
- [ ] Rebuild OSPF + VLAN lab from scratch with **no notes**

**Day 30 — Retrospective + next 30 days**
- [ ] Polish `README.md`: what each script does, how to run it, sample output
- [ ] Push repo to GitHub (check no secrets are committed)
- [ ] Write `notes/next30.md`: top 5 weak topics, next 3 automation upgrades, exam booking decision

**Week 4 Gate (= 30-day finish line)**
- [ ] All 3 labs run and are committed
- [ ] Repo is on GitHub with a README
- [ ] I can configure VLANs, trunks, OSPF, and an ACL from a blank config without notes
- [ ] First practice-test score recorded
- [ ] Gap list written

---

## 5. Appendices

### A. Command cheat sheet (verify everything by hand)

| Task | Command |
|---|---|
| Interface summary | `show ip interface brief` |
| Full config | `show running-config` |
| Save config | `write memory` (or `copy running-config startup-config`) |
| VLANs | `show vlan brief` |
| Trunks | `show interfaces trunk` |
| MAC table | `show mac address-table` |
| STP | `show spanning-tree` |
| Routing table | `show ip route` |
| OSPF neighbors | `show ip ospf neighbor` |
| ACLs | `show access-lists` |
| ACL on interface | `show ip interface <intf>` |
| Port security | `show port-security` |
| NAT | `show ip nat translations` |
| Neighbors (L2) | `show cdp neighbors` |

### B. Netmiko patterns you will reuse

```python
# one command
out = conn.send_command("show version")

# many config lines
out = conn.send_config_set(["interface Gi0/1", "description UPLINK"])

# save
conn.save_config()

# TextFSM parsed output (list of dicts). pprint it first to see the keys
rows = conn.send_command("show ip interface brief", use_textfsm=True)

# slow device / long command
out = conn.send_command("ping 3.3.3.3 repeat 100", read_timeout=60)
```

### C. Git habits (minimum viable)

```bash
git status
git add -A
git commit -m "labN: what changed"
git branch feature/ospf-check
git switch feature/ospf-check
git switch main && git merge feature/ospf-check
git tag v0.1
```

- Commit small, commit often.
- **Never commit** passwords, tokens, or real device configs from work. Lab only.

### D. Safety rules for automation (habits that employers value)

- [ ] Always have a `--dry-run` for anything that changes config
- [ ] Verify after you push (read the state back, don't assume)
- [ ] Make scripts idempotent (safe to run twice)
- [ ] Save configs before changing them (Lab 1 first, always)
- [ ] Test on the lab, never on production gear from work
- [ ] Use environment variables or a secrets manager, never hard-coded credentials

### E. Master progress tracker

**Setup**
- [ ] Lab platform installed and booting
- [ ] 3 virtual devices reachable by SSH
- [ ] Python venv + Netmiko working
- [ ] Git repo created

**Labs**
- [ ] Lab 1 complete
- [ ] Lab 2 complete
- [ ] Lab 3 complete

**Weekly gates**
- [ ] Week 1 gate
- [ ] Week 2 gate
- [ ] Week 3 gate
- [ ] Week 4 gate

**Exam readiness**
- [ ] First full practice test taken
- [ ] Gap list written
- [ ] Exam date decided
- [ ] Exam booked

### F. When you're stuck (in this order)

1. Re-read the exact error message, top to bottom.
2. Run the same command by hand on the device.
3. `print()` the variable right before the line that fails.
4. Check IP, user, password, and that the node is fully booted.
5. Write it in `notes/stuck.md` and move on. Come back tomorrow.
