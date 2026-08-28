"""
engine.py — turns typed input into (state changes + fake IOS output).

Engine.feed(line) is the only method main.py needs to call. It returns
the text to print (which may be multiple lines, or an IOS-style error).
"""

from typing import List, Optional, Tuple, Dict

from device import DeviceState, Interface, Vlan, StaticRoute, resolve_interface_name
from commands_data import COMMANDS, KEYWORD_ALIASES
import progress


MODE_AFTER_EXIT = {
    "priv_exec": "user_exec",
    "global_config": "priv_exec",
    "interface_config": "global_config",
    "vlan_config": "global_config",
}


class Engine:
    def __init__(self, device_type: str, progress_path: str = "progress.json"):
        self.state = DeviceState.new(device_type)
        self.explain_mode = True
        self.progress_path = progress_path
        self.mastered = progress.load(progress_path, device_type)
        self.quit_requested = False

    # ------------------------------------------------------------------ #
    # public entry point
    # ------------------------------------------------------------------ #
    def feed(self, line: str) -> str:
        raw = line.rstrip("\n")
        if raw.strip() == "":
            return ""

        meta = self._handle_meta(raw.strip())
        if meta is not None:
            return meta

        raw_tokens = raw.split()
        lower_tokens = [t.lower() for t in raw_tokens]
        self._apply_aliases(lower_tokens)

        candidates = [
            c
            for c in COMMANDS
            if self.state.mode in c["modes"]
            and c["device"] in ("both", self.state.device_type)
        ]

        best_fail_idx = 0
        saw_incomplete = False

        for cmd in candidates:
            status, values, idx = self._try_match(cmd["pattern"], lower_tokens, raw_tokens)
            if status == "match":
                output = self._dispatch(cmd, values)
                first_time = cmd["id"] not in self.mastered
                if first_time:
                    self.mastered.add(cmd["id"])
                    progress.save(self.progress_path, self.state.device_type, self.mastered)
                pieces = []
                if output:
                    pieces.append(output)
                if self.explain_mode and cmd.get("explain"):
                    marker = "NEW" if first_time else "why"
                    pieces.append(f"    [{marker}] {cmd['explain']}")
                return "\n".join(pieces)
            if status == "incomplete":
                saw_incomplete = True
            best_fail_idx = max(best_fail_idx, idx)

        if saw_incomplete:
            return "% Incomplete command."
        return self._caret_error(raw, raw_tokens, best_fail_idx)

    # ------------------------------------------------------------------ #
    # meta / trainer commands (not real IOS, but useful while learning)
    # ------------------------------------------------------------------ #
    def _handle_meta(self, stripped: str) -> Optional[str]:
        lowered = stripped.lower()
        if stripped == "?":
            return self._help_text()
        if lowered == "explain on":
            self.explain_mode = True
            return "Explain mode ON — successful commands will show a one-line 'why'."
        if lowered == "explain off":
            self.explain_mode = False
            return "Explain mode OFF."
        if lowered == "progress":
            return self._progress_text()
        if lowered == "reset":
            self.state = DeviceState.new(self.state.device_type)
            return "Device state reset to factory defaults."
        return None

    def _help_text(self) -> str:
        candidates = [
            c
            for c in COMMANDS
            if self.state.mode in c["modes"]
            and c["device"] in ("both", self.state.device_type)
        ]
        lines = [f"Commands available in {self.state.mode}:"]
        for c in candidates:
            lines.append("  " + " ".join(c["pattern"]))
        lines.append("(trainer-only: ?, explain on/off, progress, reset)")
        return "\n".join(lines)

    def _progress_text(self) -> str:
        total = len({c["id"] for c in COMMANDS if c["device"] in ("both", self.state.device_type)})
        done = len(self.mastered)
        lines = [f"Commands mastered: {done}/{total} ({self.state.device_type})"]
        for c in COMMANDS:
            if c["device"] not in ("both", self.state.device_type):
                continue
            box = "[x]" if c["id"] in self.mastered else "[ ]"
            lines.append(f"  {box} {' '.join(c['pattern'])}")
        return "\n".join(lines)

    # ------------------------------------------------------------------ #
    # matching
    # ------------------------------------------------------------------ #
    @staticmethod
    def _apply_aliases(lower_tokens: List[str]) -> None:
        for i in (0, 1):
            if i < len(lower_tokens) and lower_tokens[i] in KEYWORD_ALIASES:
                lower_tokens[i] = KEYWORD_ALIASES[lower_tokens[i]]

    @staticmethod
    def _try_match(
        pattern: List[str], lower_tokens: List[str], raw_tokens: List[str]
    ) -> Tuple[str, Optional[Dict[str, str]], int]:
        values: Dict[str, str] = {}
        i = 0
        for idx, ptok in enumerate(pattern):
            is_last = idx == len(pattern) - 1
            if ptok == "<text>" and is_last:
                if i >= len(lower_tokens):
                    return ("incomplete", None, i)
                values["text"] = " ".join(raw_tokens[i:])
                i = len(lower_tokens)
                continue
            if i >= len(lower_tokens):
                return ("incomplete", None, i)
            if ptok.startswith("<"):
                values[ptok[1:-1]] = raw_tokens[i]
            elif lower_tokens[i] != ptok:
                return ("no_match", None, i)
            i += 1
        if i < len(lower_tokens):
            return ("no_match", None, i)
        return ("match", values, i)

    @staticmethod
    def _caret_error(raw: str, raw_tokens: List[str], fail_idx: int) -> str:
        fail_idx = min(fail_idx, len(raw_tokens) - 1) if raw_tokens else 0
        prefix = " ".join(raw_tokens[:fail_idx])
        offset = len(prefix) + (1 if prefix else 0)
        pointer = " " * offset + "^"
        return f"{pointer}\n% Invalid input detected at '^' marker."

    # ------------------------------------------------------------------ #
    # dispatch
    # ------------------------------------------------------------------ #
    def _dispatch(self, cmd: dict, values: Dict[str, str]) -> str:
        fn = ACTIONS[cmd["action"]]
        return fn(self, values) or ""

    def _cur_if(self) -> Interface:
        return self.state.interfaces[self.state.current_interface]


# ---------------------------------------------------------------------- #
# actions — one function per "action" name referenced in commands_data.py
# ---------------------------------------------------------------------- #

def _act_enable(eng: Engine, v):
    eng.state.mode = "priv_exec"


def _act_disable(eng: Engine, v):
    eng.state.mode = "user_exec"


def _act_configure_terminal(eng: Engine, v):
    eng.state.mode = "global_config"
    return "Enter configuration commands, one per line.  End with CNTL/Z."


def _act_exit(eng: Engine, v):
    mode = eng.state.mode
    if mode == "user_exec":
        eng.quit_requested = True
        return ""
    eng.state.mode = MODE_AFTER_EXIT[mode]
    if mode in ("interface_config", "vlan_config"):
        eng.state.current_interface = None
        eng.state.current_vlan = None


def _act_end(eng: Engine, v):
    eng.state.mode = "priv_exec"
    eng.state.current_interface = None
    eng.state.current_vlan = None


def _act_set_hostname(eng: Engine, v):
    eng.state.hostname = v["name"]
    eng.state.saved = False


def _act_disable_domain_lookup(eng: Engine, v):
    eng.state.no_ip_domain_lookup = True
    eng.state.saved = False


def _act_enter_interface(eng: Engine, v):
    resolved = resolve_interface_name(v["if"])
    if resolved is None:
        return f"% Invalid interface: {v['if']}"
    if resolved not in eng.state.interfaces:
        if resolved.startswith("Vlan") or resolved.startswith("Loopback"):
            eng.state.interfaces[resolved] = Interface(name=resolved, admin_down=False)
        else:
            return f"% Invalid interface: {resolved} (does not exist on this device)"
    eng.state.mode = "interface_config"
    eng.state.current_interface = resolved


def _act_enter_vlan(eng: Engine, v):
    try:
        vid = int(v["vlan"])
    except ValueError:
        return "% Invalid VLAN ID"
    if vid not in eng.state.vlans:
        eng.state.vlans[vid] = Vlan(vlan_id=vid, name=f"VLAN{vid:04d}")
    eng.state.mode = "vlan_config"
    eng.state.current_vlan = vid
    eng.state.saved = False


def _act_set_vlan_name(eng: Engine, v):
    eng.state.vlans[eng.state.current_vlan].name = v["name"]
    eng.state.saved = False


def _act_add_static_route(eng: Engine, v):
    eng.state.static_routes.append(
        StaticRoute(network=v["network"], mask=v["mask"], next_hop=v["nexthop"])
    )
    eng.state.saved = False


def _act_set_description(eng: Engine, v):
    eng._cur_if().description = v["text"]
    eng.state.saved = False


def _act_set_ip_address(eng: Engine, v):
    iface = eng._cur_if()
    iface.ip = v["ip"]
    iface.mask = v["mask"]
    eng.state.saved = False


def _act_shutdown_if(eng: Engine, v):
    eng._cur_if().admin_down = True
    eng.state.saved = False


def _act_no_shutdown_if(eng: Engine, v):
    eng._cur_if().admin_down = False
    eng.state.saved = False


def _act_set_switchport_mode(eng: Engine, v):
    mode = v["swmode"].lower()
    if mode not in ("access", "trunk"):
        return f"% Invalid switchport mode: {v['swmode']}"
    eng._cur_if().switchport_mode = mode
    eng.state.saved = False


def _act_set_access_vlan(eng: Engine, v):
    try:
        vid = int(v["vlan"])
    except ValueError:
        return "% Invalid VLAN ID"
    out = ""
    if vid not in eng.state.vlans:
        eng.state.vlans[vid] = Vlan(vlan_id=vid, name=f"VLAN{vid:04d}")
        out = f"% Access VLAN does not exist. Creating vlan {vid}"
    eng._cur_if().access_vlan = vid
    eng.state.saved = False
    return out


def _act_save_config(eng: Engine, v):
    eng.state.saved = True
    return "Building configuration...\n[OK]"


# --- show commands ---------------------------------------------------------

def _act_show_version(eng: Engine, v):
    s = eng.state
    platform = "WS-C2960-24TT-L" if s.device_type == "switch" else "CISCO2911/K9"
    return (
        "Cisco IOS Software, Simulated Trainer Image\n"
        f"{s.hostname} uptime is 0 minutes\n"
        f"System image file is \"flash:ios-simulator.bin\"\n\n"
        f"cisco {platform} processor\n"
        "Configuration register is 0x2102"
    )


def _act_show_running_config(eng: Engine, v):
    s = eng.state
    lines = [
        "Building configuration...\n",
        "!",
        f"hostname {s.hostname}",
        "!",
    ]
    if s.no_ip_domain_lookup:
        lines.append("no ip domain-lookup")
        lines.append("!")
    if s.device_type == "switch":
        for vid, vlan in sorted(s.vlans.items()):
            if vid == 1:
                continue
            lines.append(f"vlan {vid}")
            lines.append(f" name {vlan.name}")
        lines.append("!")
    for name, iface in s.interfaces.items():
        lines.append(f"interface {name}")
        if iface.description:
            lines.append(f" description {iface.description}")
        if s.device_type == "switch":
            lines.append(f" switchport mode {iface.switchport_mode}")
            if iface.switchport_mode == "access":
                lines.append(f" switchport access vlan {iface.access_vlan}")
        if iface.ip:
            lines.append(f" ip address {iface.ip} {iface.mask}")
        if iface.admin_down:
            lines.append(" shutdown")
        lines.append("!")
    if s.device_type == "router":
        for r in s.static_routes:
            lines.append(f"ip route {r.network} {r.mask} {r.next_hop}")
        if s.static_routes:
            lines.append("!")
    lines.append("end")
    return "\n".join(lines)


def _act_show_ip_interface_brief(eng: Engine, v):
    s = eng.state
    header = f"{'Interface':<22}{'IP-Address':<16}{'Status':<24}{'Protocol'}"
    rows = [header]
    for name, iface in s.interfaces.items():
        ip = iface.ip if iface.ip else "unassigned"
        rows.append(f"{name:<22}{ip:<16}{iface.status:<24}{iface.protocol}")
    return "\n".join(rows)


def _act_show_interfaces(eng: Engine, v):
    s = eng.state
    blocks = []
    for name, iface in s.interfaces.items():
        blocks.append(
            f"{name} is {iface.status}, line protocol is {iface.protocol}\n"
            f"  Description: {iface.description or '(none)'}\n"
            f"  Internet address is {iface.ip + '/' + iface.mask if iface.ip else 'unassigned'}"
        )
    return "\n".join(blocks)


def _act_show_vlan_brief(eng: Engine, v):
    s = eng.state
    header = f"{'VLAN':<6}{'Name':<20}{'Status':<10}Ports"
    rows = [header]
    for vid, vlan in sorted(s.vlans.items()):
        ports = ", ".join(
            n for n, i in s.interfaces.items()
            if i.switchport_mode == "access" and i.access_vlan == vid
        )
        rows.append(f"{vid:<6}{vlan.name:<20}{'active':<10}{ports}")
    return "\n".join(rows)


def _act_show_ip_route(eng: Engine, v):
    s = eng.state
    lines = ["Codes: C - connected, S - static", ""]
    for name, iface in s.interfaces.items():
        if iface.ip and not iface.admin_down:
            lines.append(f"C    {iface.ip}/{iface.mask} is directly connected, {name}")
    for r in s.static_routes:
        lines.append(f"S    {r.network}/{r.mask} [1/0] via {r.next_hop}")
    return "\n".join(lines)


ACTIONS = {
    "enable": _act_enable,
    "disable": _act_disable,
    "configure_terminal": _act_configure_terminal,
    "exit": _act_exit,
    "end": _act_end,
    "set_hostname": _act_set_hostname,
    "disable_domain_lookup": _act_disable_domain_lookup,
    "enter_interface": _act_enter_interface,
    "enter_vlan": _act_enter_vlan,
    "set_vlan_name": _act_set_vlan_name,
    "add_static_route": _act_add_static_route,
    "set_description": _act_set_description,
    "set_ip_address": _act_set_ip_address,
    "shutdown_if": _act_shutdown_if,
    "no_shutdown_if": _act_no_shutdown_if,
    "set_switchport_mode": _act_set_switchport_mode,
    "set_access_vlan": _act_set_access_vlan,
    "save_config": _act_save_config,
    "show_version": _act_show_version,
    "show_running_config": _act_show_running_config,
    "show_ip_interface_brief": _act_show_ip_interface_brief,
    "show_interfaces": _act_show_interfaces,
    "show_vlan_brief": _act_show_vlan_brief,
    "show_ip_route": _act_show_ip_route,
}
