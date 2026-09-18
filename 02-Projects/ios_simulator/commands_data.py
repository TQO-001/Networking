"""
commands_data.py — the command knowledge base.

This is the file you edit as you learn new commands. Each entry is a
plain dict, no special syntax required:

    {
        "id": "unique_name",
        "modes": ["global_config"],       # which mode(s) it's valid in
        "device": "both",                 # "both" | "switch" | "router"
        "pattern": ["hostname", "<name>"],# literal tokens + <capture> tokens
        "action": "set_hostname",         # matches a function in engine.py's ACTIONS
        "explain": "One-line why this matters, shown when explain mode is on.",
    }

Pattern tokens:
  - a plain word ("hostname", "ip", "address")  -> must match literally
  - "<name>" style                              -> captures exactly one token
  - "<text>" as the LAST token                  -> captures the rest of the line
                                                    (use for things with spaces,
                                                    like descriptions)

Add new commands by copying an existing entry and changing the pattern/id/action —
then add a matching function to ACTIONS in engine.py.
"""

COMMANDS = [
    # --- mode movement -----------------------------------------------------
    {
        "id": "enable",
        "modes": ["user_exec"],
        "device": "both",
        "pattern": ["enable"],
        "action": "enable",
        "explain": "Moves from user EXEC to privileged EXEC — this is where you can see full 'show' output and enter configuration mode.",
    },
    {
        "id": "disable",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["disable"],
        "action": "disable",
        "explain": "Drops back from privileged EXEC to user EXEC (limited view).",
    },
    {
        "id": "configure_terminal",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["configure", "terminal"],
        "action": "configure_terminal",
        "explain": "Enters global configuration mode — where you change the device's actual config, as opposed to just viewing it.",
    },
    {
        "id": "exit",
        "modes": ["user_exec", "priv_exec", "global_config", "interface_config", "vlan_config"],
        "device": "both",
        "pattern": ["exit"],
        "action": "exit",
        "explain": "Backs out one level (e.g. interface config -> global config). From user EXEC, it logs you out.",
    },
    {
        "id": "end",
        "modes": ["global_config", "interface_config", "vlan_config"],
        "device": "both",
        "pattern": ["end"],
        "action": "end",
        "explain": "Jumps straight back to privileged EXEC from anywhere inside configuration mode (like Ctrl+Z on a real device).",
    },
    # --- global config -------------------------------------------------
    {
        "id": "hostname",
        "modes": ["global_config"],
        "device": "both",
        "pattern": ["hostname", "<name>"],
        "action": "set_hostname",
        "explain": "Sets the device's hostname — it immediately shows up in every prompt after this.",
    },
    {
        "id": "no_ip_domain_lookup",
        "modes": ["global_config"],
        "device": "both",
        "pattern": ["no", "ip", "domain-lookup"],
        "action": "disable_domain_lookup",
        "explain": "Stops the device from trying to DNS-resolve a mistyped command. Without this, a typo can hang the CLI for ~10 seconds waiting on a lookup timeout.",
    },
    {
        "id": "interface",
        "modes": ["global_config"],
        "device": "both",
        "pattern": ["interface", "<if>"],
        "action": "enter_interface",
        "explain": "Selects an interface to configure. Physical interfaces must already exist on the device; Vlan interfaces are created on the fly (this is how you'd configure an SVI).",
    },
    {
        "id": "vlan",
        "modes": ["global_config"],
        "device": "switch",
        "pattern": ["vlan", "<vlan>"],
        "action": "enter_vlan",
        "explain": "Creates the VLAN if it doesn't exist yet, and drops you into VLAN config mode to name it.",
    },
    {
        "id": "ip_route",
        "modes": ["global_config"],
        "device": "router",
        "pattern": ["ip", "route", "<network>", "<mask>", "<nexthop>"],
        "action": "add_static_route",
        "explain": "Adds a static route: traffic for <network> gets sent to <nexthop> instead of relying on a routing protocol.",
    },
    # --- interface config ----------------------------------------------
    {
        "id": "description",
        "modes": ["interface_config"],
        "device": "both",
        "pattern": ["description", "<text>"],
        "action": "set_description",
        "explain": "Purely cosmetic label for the interface. Shows up in 'show interfaces' / 'show running-config' — huge help for whoever troubleshoots this later.",
    },
    {
        "id": "ip_address",
        "modes": ["interface_config"],
        "device": "both",
        "pattern": ["ip", "address", "<ip>", "<mask>"],
        "action": "set_ip_address",
        "explain": "Assigns a Layer 3 address directly to this interface (or to an SVI, if you're on a Vlan interface).",
    },
    {
        "id": "shutdown",
        "modes": ["interface_config"],
        "device": "both",
        "pattern": ["shutdown"],
        "action": "shutdown_if",
        "explain": "Administratively disables the interface. Link stays down no matter what's plugged in, until 'no shutdown'.",
    },
    {
        "id": "no_shutdown",
        "modes": ["interface_config"],
        "device": "both",
        "pattern": ["no", "shutdown"],
        "action": "no_shutdown_if",
        "explain": "Administratively enables the interface. Almost every physical interface ships shut down by default — this is the #1 'why isn't this working' gotcha.",
    },
    {
        "id": "switchport_mode",
        "modes": ["interface_config"],
        "device": "switch",
        "pattern": ["switchport", "mode", "<swmode>"],
        "action": "set_switchport_mode",
        "explain": "'access' = carries one VLAN, untagged, for end devices. 'trunk' = carries multiple VLANs, tagged, for links between switches.",
    },
    {
        "id": "switchport_access_vlan",
        "modes": ["interface_config"],
        "device": "switch",
        "pattern": ["switchport", "access", "vlan", "<vlan>"],
        "action": "set_access_vlan",
        "explain": "Assigns this access port to a VLAN. If the VLAN doesn't exist yet, IOS auto-creates it with a default name — same as this simulator does.",
    },
    # --- vlan config -----------------------------------------------------
    {
        "id": "vlan_name",
        "modes": ["vlan_config"],
        "device": "switch",
        "pattern": ["name", "<name>"],
        "action": "set_vlan_name",
        "explain": "Sets the human-readable name for the VLAN you're currently editing.",
    },
    # --- show commands -----------------------------------------------------
    {
        "id": "show_running_config",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["show", "running-config"],
        "action": "show_running_config",
        "explain": None,
    },
    {
        "id": "show_ip_interface_brief",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["show", "ip", "interface", "brief"],
        "action": "show_ip_interface_brief",
        "explain": None,
    },
    {
        "id": "show_interfaces",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["show", "interfaces"],
        "action": "show_interfaces",
        "explain": None,
    },
    {
        "id": "show_version",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["show", "version"],
        "action": "show_version",
        "explain": None,
    },
    {
        "id": "show_vlan_brief",
        "modes": ["priv_exec"],
        "device": "switch",
        "pattern": ["show", "vlan", "brief"],
        "action": "show_vlan_brief",
        "explain": None,
    },
    {
        "id": "show_ip_route",
        "modes": ["priv_exec"],
        "device": "router",
        "pattern": ["show", "ip", "route"],
        "action": "show_ip_route",
        "explain": None,
    },
    # --- save config -------------------------------------------------------
    {
        "id": "copy_run_start",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["copy", "running-config", "startup-config"],
        "action": "save_config",
        "explain": "Saves the running config to NVRAM so it survives a reload. 'write memory' does the exact same thing, just older syntax.",
    },
    {
        "id": "write_memory",
        "modes": ["priv_exec"],
        "device": "both",
        "pattern": ["write", "memory"],
        "action": "save_config",
        "explain": "Same as 'copy running-config startup-config' — saves the running config to NVRAM.",
    },
]

# Token substitutions applied ONLY to the first two words of a line, so real
# Cisco abbreviations work without touching captured values (hostnames,
# descriptions, IPs, etc). This is the main place to extend abbreviation
# support if you find yourself typing something that "should" work.
KEYWORD_ALIASES = {
    "conf": "configure",
    "config": "configure",
    "int": "interface",
    "sh": "show",
    "wr": "write",
    "en": "enable",
    "dis": "disable",
    "t": "terminal",
    "term": "terminal",
    "run": "running-config",
    "running": "running-config",
    "mem": "memory",
}
