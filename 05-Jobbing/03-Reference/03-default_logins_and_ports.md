---
tags: [jobbing, reference]
---
# Default logins and common ports

↩ Back to the index: [[00-index|Jobbing index]]

> ◇ = **not from your notes**. Defaults get changed on installed units, so these are starting points only. Change defaults on every new device and never store real passwords in notes.

## Factory defaults from your notes
| Device | Address / user | Notes |
|---|---|---|
| Moxa AWK-3131A access point | `https://192.168.127.253`, `admin` / `moxa` | Change the password first thing |
| HP ThinPro admin mode | password is often `root` | Unless your fleet changed it |
| HPE iLO 4 | URL, `Administrator` and an 8-character password on the pull-out **tag** on the front-right of the server | Unique per server |
| ESXi | `root` + the password you set during install | |
| pfSense | `admin` + the password set at install | |

## Ports you will meet
| Port | Service | Seen in |
|---|---|---|
| 22 | SSH | Switch, Pi, pfSense admin |
| 23 | Telnet (turn it off) | Switch vty |
| 80 / 443 | HTTP / HTTPS | pfSense, ESXi, iLO, Moxa web |
| 69 (UDP) | TFTP | Config backup, IOS upgrade |
| 139 / 445 | SMB file sharing | pfSense rules |
| 1880 | Node-RED editor | Raspberry Pi |
| 3389 | RDP | pfSense rules |
| 5900 | VNC | Thin client, Raspberry Pi, pfSense rules |
| 8088 | Ignition gateway (HTTP) | `192.168.193.2:8088` |

Source notes: [[03-access_point_setup|03-access_point_setup]], [[02-ignition_perspective_workstation_master_guide|02-ignition_perspective_workstation_master_guide]], [[03-server_setup_documentation|03-server_setup_documentation]], [[05-firewall_configuration|05-firewall_configuration]], [[01-thin_client_setup|01-thin_client_setup]]
