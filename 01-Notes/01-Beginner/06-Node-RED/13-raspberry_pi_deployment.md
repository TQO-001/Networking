# 13 - Raspberry Pi Deployment

**Time:** 90 to 120 minutes | **Difficulty:** Medium | **Needs:** files 02 to 08 and 12
**Mirrors:** the Raspberry Pi 4 Model B you use at work (Node-RED host and/or Home Assistant host)

---

## PROGRESS
- [ ] Know which setup the work Pi uses (Pi OS + Node-RED, or Home Assistant OS + add-on)
- [ ] Linux basics practised (WSL2 on the laptop)
- [ ] Node-RED autostart, logs and restart understood
- [ ] Backups made and restore tested
- [ ] Security basics reviewed (admin login, credential secret)
- [ ] Pi health checks done (temperature, throttling, SD card)
- [ ] Real Pi data on a dashboard (CPU temperature)
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Building flows is half the job. The other half is keeping them running on a small computer for months. A flow that works on your laptop but dies after a reboot or fills the SD card is not finished.

---

## 2. CONCEPTS

### Two possible setups at work (find out which one you have)
| | A. Raspberry Pi OS + standalone Node-RED | B. Home Assistant OS on the Pi + Node-RED add-on |
|---|---|---|
| Access | SSH or terminal on the Pi | HA web UI; the Node-RED add-on opens inside HA |
| Start/stop | `systemctl` / `node-red-start` | Add-ons page → Node-RED → Start/Stop |
| Logs | `node-red-log` or `journalctl -u nodered` | Add-on **Log** tab |
| Backup | Copy `~/.node-red` | HA **Backups** (includes add-ons) |
| HA connection | URL + token | Add-on mode, no token (your work flows use this) |

Your flows have the HA server node set to **add-on** mode, which suggests setup B (or at least a Node-RED add-on). Confirm before assuming.

### Pi-specific concerns
| Concern | Detail |
|---|---|
| SD card wear | Heavy logging (debug, CSV, databases) wears SD cards out. Prefer SSD or limit writes |
| Power | Under-voltage causes random crashes. Use the proper supply |
| Temperature | A Pi 4 throttles above about 80 °C; add a heatsink/fan in hot rooms |
| Time | Schedules depend on correct time; make sure NTP/time zone are right |
| Memory | Limit Node-RED memory on small boards (`--max-old-space-size`) |

---

## 3. LAPTOP (Windows) - STEP BY STEP

You can't copy a Pi, but you can practise the Linux commands in WSL2.

### Part A: Linux practice with WSL2
- [ ] PowerShell (Administrator): `wsl --install -d Ubuntu`, restart, create a username and password.
- [ ] Practise:
```
pwd; ls -la; cd ~; mkdir -p nr-practice && cd nr-practice
nano notes.txt            # edit, Ctrl+O to save, Ctrl+X to exit
cat notes.txt; tail -f notes.txt   # Ctrl+C to stop
sudo apt update           # (asks for your password)
systemctl --version
```
- [ ] Understand: `sudo` = run as administrator, `|` pipes output, `>` writes to a file, `~` is your home folder.

### Part B: Node-RED as a service (Linux style)
Inside WSL2 (this mirrors Pi OS):
- [ ] Install Node-RED with the official installer script from the Node-RED docs (page: nodered.org/docs/getting-started/raspberrypi). The same script is what you'd use on a Pi.
- [ ] Commands to learn (names match the Pi installation):
```
node-red-start      # start and show logs
node-red-stop
node-red-restart
node-red-log        # follow the log
sudo systemctl enable nodered.service    # start at boot
sudo systemctl status nodered
```
- [ ] Break a flow on purpose, then find the error in the log.

### Part C: Backup and restore
Files to back up (inside `~/.node-red`):

| File | What it holds |
|---|---|
| `flows.json` | Your flows |
| `flows_cred.json` | Encrypted credentials (tokens, passwords) |
| `settings.js` | Node-RED settings |
| `package.json` | List of installed palette nodes |

- [ ] Make a backup script `backup.sh`:
```bash
#!/bin/bash
STAMP=$(date +%Y-%m-%d_%H%M)
mkdir -p ~/backups
tar -czf ~/backups/nodered_$STAMP.tar.gz -C ~ .node-red/flows.json .node-red/flows_cred.json .node-red/settings.js .node-red/package.json
ls -lh ~/backups | tail -5
```
- [ ] `chmod +x backup.sh && ./backup.sh`
- [ ] **Restore test:** delete `flows.json`, extract the backup, restart Node-RED, confirm your flows are back. A backup you never restored is not a backup.
- [ ] Schedule it daily: `crontab -e` and add `0 2 * * * /home/<you>/backup.sh`.

### Part D: Security basics
- [ ] Generate a password hash: `node-red admin hash-pw`.
- [ ] In `settings.js`, enable `adminAuth` with that hash (the commented example in the file shows the format) so the editor needs a login.
- [ ] Set `credentialSecret` to your own secret string (so the credentials file is encrypted with it, not an auto-generated key).
- [ ] Never expose port 1880 to the internet. Keep it on the internal network.

### Part E: Pi-like monitoring flow (works on any Linux)
- [ ] inject (every 10 s) → **exec** node: command `cat /sys/class/thermal/thermal_zone0/temp` (on a real Pi). In WSL2 this file may not exist; use a fake value and swap later.
- [ ] → function: `msg.payload = Number(msg.payload) / 1000; return msg;`
- [ ] → ui-gauge / ui-chart. Add an alert above 70.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP

**Rules:** ask first. Only run read-only commands unless you are told otherwise. Do not install or update anything without approval.

### Step 1: identify the setup
- [ ] Ask: "Is this Pi running Raspberry Pi OS with Node-RED, or Home Assistant OS?"
- [ ] If HA OS: use the add-on pages for logs and backups instead of the commands in this file.

### Step 2: read-only health checks (Pi OS only, over SSH or terminal)
```
hostname -I                      # IP addresses
uptime                           # how long it's been running
df -h /                          # SD card space (watch the "Use%" column)
free -m                          # memory
vcgencmd measure_temp            # CPU temperature
vcgencmd get_throttled           # 0x0 means no throttling or under-voltage
systemctl status nodered         # is Node-RED running?
journalctl -u nodered --since "1 hour ago" | tail -50
date; timedatectl                # time and time zone
```
- [ ] Record the results in your notes.
- [ ] If `get_throttled` isn't `0x0`, tell your manager (power or heat problem).

### Step 3: reliability review
- [ ] Is Node-RED set to start at boot?
- [ ] Is there a recent backup? Where is it stored (not only on the same SD card)?
- [ ] Is the time zone correct (schedules depend on it)?
- [ ] How much disk space is left, and what is writing to disk (logs, database)?
- [ ] Is there an editor login (adminAuth)?

### Step 4: a safe experiment
- [ ] On a PRACTICE tab, add the CPU temperature flow from Part E. It only reads a file, so it's safe.
- [ ] Optional hardware (only with permission): the `rpi-gpio` nodes read and write pins. Don't connect anything to a work Pi without approval, and double-check BCM vs physical pin numbering.

---

## 5. CHECKPOINT
- [ ] You can start, stop, restart and read logs of Node-RED on Linux.
- [ ] You made a backup and restored it.
- [ ] You can read Pi health numbers and say what they mean.
- [ ] You know which setup the work Pi uses.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Flows gone after reboot | Node-RED not set to start at boot, or the wrong user directory is in use |
| Editor unreachable | Wrong IP, firewall, or Node-RED not running; check `systemctl status nodered` |
| Disk full | Logs/databases/backup files; check `df -h` and clean up old files |
| `Permission denied` | Needs `sudo`, or wrong file ownership |
| Random reboots/freezes | Power supply problem; check `vcgencmd get_throttled` |
| Schedules fire at wrong time | Time zone or NTP issue; check `timedatectl` |
| Lost credentials after restore | `flows_cred.json` or `credentialSecret` missing |

---

## 7. STRETCH
- [ ] Write a small Bash or Python health report that emails/logs temperature, disk and memory daily.
- [ ] Set up an external backup (copy to a USB drive or network share) and test restoring from it.
- [ ] Learn `ssh` keys so you can log in without typing a password.

---

## 8. SELF-TEST
1. What are the four files you must back up for Node-RED?
2. What does `vcgencmd get_throttled` tell you?
3. Why is SD card wear a risk for a logging flow?
4. What is the difference between Node-RED on Pi OS and the Node-RED add-on?
5. Why must schedule-based flows care about NTP and the time zone?

---

## 9. DONE
- [ ] File 13 complete. Next: **14 - Capstone: Smart Office Monitor**.
