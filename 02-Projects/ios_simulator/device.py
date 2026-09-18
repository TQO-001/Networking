"""
device.py — the fake device's state.

This holds everything that would "persist" on a real switch or router:
hostname, interfaces, VLANs, static routes, saved/unsaved config, etc.
Nothing here knows about command syntax — that's engine.py's job.
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional


# ---------------------------------------------------------------------------
# Interface inventories per device type.
# Real IOS refuses commands against interfaces that don't physically exist,
# so we mirror that instead of letting you type any string.
# ---------------------------------------------------------------------------

SWITCH_INTERFACES = [f"GigabitEthernet0/{n}" for n in range(1, 9)]  # Gi0/1 - Gi0/8
ROUTER_INTERFACES = ["GigabitEthernet0/0", "GigabitEthernet0/1", "Serial0/0/0"]

# Abbreviation -> canonical prefix, longest-match-first order matters.
INTERFACE_PREFIX_ALIASES = [
    ("gigabitethernet", "GigabitEthernet"),
    ("gigabiteth", "GigabitEthernet"),
    ("gige", "GigabitEthernet"),
    ("gig", "GigabitEthernet"),
    ("gi", "GigabitEthernet"),
    ("fastethernet", "FastEthernet"),
    ("fasteth", "FastEthernet"),
    ("fa", "FastEthernet"),
    ("serial", "Serial"),
    ("se", "Serial"),
    ("vlan", "Vlan"),
    ("loopback", "Loopback"),
    ("lo", "Loopback"),
]


def resolve_interface_name(token: str) -> Optional[str]:
    """
    Turn something like 'gi0/1', 'Gig0/1', 'GigabitEthernet0/1' into the
    canonical form 'GigabitEthernet0/1'. Returns None if it doesn't look
    like an interface name at all.
    """
    t = token.strip()
    lower = t.lower()
    for alias, canonical in INTERFACE_PREFIX_ALIASES:
        if lower.startswith(alias):
            rest = t[len(alias):]
            if rest and (rest[0].isdigit() or canonical == "Vlan"):
                return f"{canonical}{rest}"
    return None


@dataclass
class Interface:
    name: str
    description: str = ""
    ip: Optional[str] = None
    mask: Optional[str] = None
    admin_down: bool = True          # shutdown by default, like real IOS
    switchport_mode: str = "access"  # switch only
    access_vlan: int = 1             # switch only
    trunk_native_vlan: int = 1       # switch only

    @property
    def status(self) -> str:
        if self.admin_down:
            return "administratively down"
        return "up"

    @property
    def protocol(self) -> str:
        if self.admin_down:
            return "down"
        return "up"


@dataclass
class Vlan:
    vlan_id: int
    name: str


@dataclass
class StaticRoute:
    network: str
    mask: str
    next_hop: str


@dataclass
class DeviceState:
    device_type: str  # "switch" or "router"
    hostname: str
    mode: str = "user_exec"
    current_interface: Optional[str] = None
    current_vlan: Optional[int] = None
    interfaces: Dict[str, Interface] = field(default_factory=dict)
    vlans: Dict[int, Vlan] = field(default_factory=dict)
    static_routes: List[StaticRoute] = field(default_factory=list)
    no_ip_domain_lookup: bool = False
    saved: bool = True

    @staticmethod
    def new(device_type: str) -> "DeviceState":
        hostname = "Switch" if device_type == "switch" else "Router"
        state = DeviceState(device_type=device_type, hostname=hostname)
        inv = SWITCH_INTERFACES if device_type == "switch" else ROUTER_INTERFACES
        for name in inv:
            state.interfaces[name] = Interface(name=name)
        if device_type == "switch":
            state.vlans[1] = Vlan(vlan_id=1, name="default")
        return state

    def prompt(self) -> str:
        suffix = {
            "user_exec": ">",
            "priv_exec": "#",
            "global_config": "(config)#",
            "interface_config": "(config-if)#",
            "vlan_config": "(config-vlan)#",
        }[self.mode]
        return f"{self.hostname}{suffix}"
