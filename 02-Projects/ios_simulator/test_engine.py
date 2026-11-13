"""
Not a formal test suite — a scripted walkthrough that exercises the main
paths for both device types, so we can eyeball the output before shipping.
Run: python3 test_engine.py
"""

from engine import Engine


def run(device_type, lines):
    print(f"\n{'=' * 70}\n{device_type.upper()} SESSION\n{'=' * 70}")
    eng = Engine(device_type, progress_path=f"/tmp/test_progress_{device_type}.json")
    for line in lines:
        prompt = eng.state.prompt()
        print(f"{prompt} {line}")
        out = eng.feed(line)
        if out:
            print(out)
    return eng


switch_script = [
    "en",
    "conf t",
    "hostname SW1",
    "vlan 10",
    "name SALES",
    "exit",
    "int gi0/1",
    "description Uplink to PC-1",
    "switchport mode access",
    "switchport access vlan 10",
    "no shutdown",
    "end",
    "show vlan brief",
    "show ip interface brief",
    "wr mem",
    "show running-config",
    "int gi0/99",       # should fail — doesn't exist
    "swport mode acess",  # deliberate typo -> should error
    "sh run",           # alias test
    "progress",
]

router_script = [
    "enable",
    "configure terminal",
    "hostname R1",
    "no ip domain-lookup",
    "interface gi0/0",
    "ip address 192.168.1.1 255.255.255.0",
    "description LAN link",
    "no shutdown",
    "exit",
    "ip route 10.0.0.0 255.0.0.0 192.168.1.254",
    "end",
    "show ip route",
    "show ip interface brief",
    "show running-config",
    "vlan 10",          # should fail -- router has no vlan command
]

if __name__ == "__main__":
    run("switch", switch_script)
    run("router", router_script)
