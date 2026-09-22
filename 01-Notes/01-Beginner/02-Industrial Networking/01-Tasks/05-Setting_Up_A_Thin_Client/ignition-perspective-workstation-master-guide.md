# Ignition Perspective Workstation on HP ThinPro — Master Deployment Guide

This is the complete, start-to-finish procedure for installing Ignition Perspective
Workstation on an HP ThinPro thin client, fixing the "Unable to create browser instances"
error, and configuring it to start automatically with no terminal interaction. It
supersedes earlier draft attempts, which are summarized in Part 8 for reference.

**Background — why standard Linux autostart does not apply here:** system diagnostics
confirm this is genuine HP ThinPro (the `hptc-*` services, `adaemon`, and
`hptc-network-mgr-systray` processes visible in the system journal). HP ThinPro runs its
own session/app management layer (`adaemon`, the "Application Daemon") instead of the
standard freedesktop.org autostart spec. A `~/.config/autostart/*.desktop` file is read by
GNOME, XFCE, KDE, and similar desktops — ThinPro's shell does not read that location at
all. This procedure uses ThinPro's own mechanism instead: the built-in **Connection
Manager**. This also satisfies the requirement that the application be findable and
launchable without a terminal, since Connections appear as normal clickable/searchable
entries in the ThinPro interface.

**Placeholders used throughout** — substitute real values as each step is performed:

| Placeholder | Meaning |
|---|---|
| `<GATEWAY_URL>` | Ignition Gateway address, e.g. `https://10.10.2.10:8043` |
| `<PROJECT_NAME>` | The Perspective project/session name to open |
| `<PERSISTENT_PATH>` | Confirmed persistent install root: `/persistent/ignition/perspectiveworkstation` |
| `<NON_ROOT_USER>` | Confirmed local session user: `user` |

---

## Part 0 — Target end state

```
Machine powers on
      │
ThinPro boots, logs the session user into the local desktop
      │
ThinPro Connection Manager starts the Perspective Workstation connection
      │
Perspective Workstation opens (as the session user, not root — browser instances work)
      │
Configured project loads automatically
      │
   connection lost? ──yes──▶ Perspective retries on its own ──▶ reconnected
      │no
   running normally, exactly one instance, no respawn loop
```

No terminal. No manual clicks after boot. Repeatable across multiple machines.

---

## Part 1 — Fresh install

- [ ] **1.1 — Confirm the hardware/OS profile.**
  ```bash
  uname -m
  cat /etc/os-release
  ```
  Expected: `x86_64`, Ubuntu/ThinPro base matching the reference machine. If a target
  machine differs, do not assume the rest of this procedure applies unmodified — note the
  difference before continuing.

- [ ] **1.2 — Confirm persistent storage exists and is writable.**
  ```bash
  mkdir -p /persistent/ignition
  touch /persistent/ignition/write_test && rm /persistent/ignition/write_test
  ```
  If this fails, the persistent-storage mount point may have a different name on that
  machine — check with `mount | grep -v tmpfs` and `lsblk` and substitute accordingly.

- [ ] **1.3 — Transfer the installer archive onto the machine.**
  ```bash
  lsblk
  cp /tmp/tmpfs/media/STORE_N_GO_sda1/perspectiveworkstation.tar.gz /tmp/
  ```

- [ ] **1.4 — Extract directly into the persistent location** (extracting into `/tmp`
      alone is volatile and is wiped on reboot — always extract into persistent
      storage):
  ```bash
  mkdir -p /persistent/ignition
  tar -xzvf /tmp/perspectiveworkstation.tar.gz -C /persistent/ignition
  ls -la /persistent/ignition/perspectiveworkstation/perspectiveworkstation.sh
  ```

- [ ] **1.5 — Set permissions for the non-root user.**
  ```bash
  chmod -R a+rX /persistent/ignition
  ```

- [ ] **1.6 — Remove the temporary copy of the archive.**
  ```bash
  rm /tmp/perspectiveworkstation.tar.gz
  ```

---

## Part 2 — Fix the browser-instance error

**Root cause:** Chromium — which Perspective Workstation's embedded JxBrowser component
runs internally — refuses to initialize its sandbox when the process is owned by the
`root` user. This is a Chromium platform rule, not a ThinPro or Ignition bug. Launching
the same executable as an ordinary (non-root) user resolves it.

- [ ] **2.1 — Launch as the session user, not root.**
  ```bash
  su - <NON_ROOT_USER> -c "cd <PERSISTENT_PATH> && DISPLAY=:0 ./perspectiveworkstation.sh"
  ```
- [ ] **2.2 — Open a Perspective application/project** and confirm the browser instance
      opens and content renders (not a blank window). Repeat once to confirm
      consistency.
- [ ] **2.3 — Configure the Gateway connection inside Workstation** (first run only):
      Gateway Address `<GATEWAY_URL>`, Project URL for `<PROJECT_NAME>`.
- [ ] **2.4 — Set it as the Default Application** inside the Workstation launcher, so it
      opens directly into the configured project rather than a picker screen.

If a machine still shows "Unable to create browser instances" after switching to a
non-root user, treat that as a separate issue: check
`/home/<NON_ROOT_USER>/.ignition/clientlauncher-data/workstation.log` for the actual
error text rather than re-applying this fix blindly.

---

## Part 3 — Autostart via ThinPro Connection Manager

### 3.1 — Remove any prior XDG autostart entry

Not read by this platform; leaving it in place has no effect but should be cleaned up:

```bash
rm -f /home/<NON_ROOT_USER>/.config/autostart/ignition-perspective-workstation.desktop
```

### 3.2 — Fix process hand-off in the launch script (prevents a restart loop)

**Why this step exists:** `perspectiveworkstation.sh` is a shell wrapper that launches
the Java/Chromium process as a background child and then exits. When ThinPro's
Connection Manager is set to autostart the raw script, `adaemon` tracks the wrapper's
process ID. As soon as the wrapper script exits (immediately, since the real
application was only backgrounded), `adaemon` interprets this as the application having
crashed, and relaunches it — producing a loop of repeatedly opening new instances.

- [ ] Open the script for editing:
  ```bash
  nano <PERSISTENT_PATH>/perspectiveworkstation.sh
  ```
- [ ] Locate the `# Launch` section near the end of the file. It will resemble:
  ```bash
  # Launch
  APP_DIR="$real_dir" "$real_dir/runtime/bin/java" \
   --add-exports=java.desktop/sun.awt=ALL-UNNAMED \
   --add-opens=java.desktop/java.awt=ALL-UNNAMED \
   -Dsun.java2d.uiScale="$gdk_scale" \
   -jar "$real_dir/app/$jar_name" "$@" /dev/null 2>&1 &
  ```
- [ ] Modify it to add `exec` before the Java invocation and remove the trailing `&`
      (and the `/dev/null 2>&1` redirection, since it is no longer meaningful once the
      process is exec'd in the foreground):
  ```bash
  # Launch
  APP_DIR="$real_dir" exec "$real_dir/runtime/bin/java" \
   --add-exports=java.desktop/sun.awt=ALL-UNNAMED \
   --add-opens=java.desktop/java.awt=ALL-UNNAMED \
   -Dsun.java2d.uiScale="$gdk_scale" \
   -jar "$real_dir/app/$jar_name" "$@"
  ```
- [ ] Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).

**Effect:** `exec` replaces the shell process with the Java process in place, rather than
forking a child and exiting. `adaemon` then tracks the actual application window process
directly, so it no longer sees a false exit and no longer triggers a respawn loop.

- [ ] Test manually before proceeding:
  ```bash
  su - <NON_ROOT_USER> -c "DISPLAY=:0 <PERSISTENT_PATH>/perspectiveworkstation.sh"
  ps aux | grep java
  ```
  Confirm exactly one Java process is running.

### 3.3 — Optional safety net: single-instance lock

Recommended in addition to the `exec` fix, as a second layer of protection against
duplicate launches:

- [ ] The command line used in the Connection Manager entry (Part 3.5) can wrap the
      script with `flock`:
  ```bash
  flock -n /tmp/perspective.lock <PERSISTENT_PATH>/perspectiveworkstation.sh
  ```
  `flock -n` attempts to acquire an exclusive lock on `/tmp/perspective.lock`. If an
  instance is already running or launching, any additional launch attempt exits
  immediately instead of opening a second window.

### 3.4 — Open ThinPro's Connection Manager

- [ ] Log in locally as `<NON_ROOT_USER>`, or switch to Administrator Mode if required
      (right-click the desktop background, or `Ctrl+Alt+Shift+S`, then select the
      Administrator/User Mode switch; default admin password is often `root` unless
      changed on the fleet).
- [ ] Open **Connections** from the ThinPro control center / taskbar.

If no **Connections** icon is visible and the desktop appears unusually bare, the image
may be running in **Smart Zero** mode (a stripped-down kiosk variant with no general
connection list). In that case, run:
```bash
hptc-connection-admin --help 2>/dev/null
which hptc-connection-admin hptc-config-wizard 2>/dev/null
```
and use the output to determine the correct configuration path for that variant before
continuing.

### 3.5 — Create the connection

- [ ] Click **Add**, and select the **Custom** connection type (labeled "Custom" or
      "X Windows" depending on ThinPro version — select whichever allows specifying a
      raw command line rather than a protocol-specific connection such as RDP/Citrix).
- [ ] **Name:** `Perspective Workstation`
- [ ] **Command line** (with the single-instance lock from 3.3):
  ```
  flock -n /tmp/perspective.lock <PERSISTENT_PATH>/perspectiveworkstation.sh
  ```
  Or, without the lock:
  ```
  <PERSISTENT_PATH>/perspectiveworkstation.sh
  ```
- [ ] Save the connection, select it, and click **Connect** once manually to confirm it
      launches correctly from Connection Manager itself.

### 3.6 — Configure Autostart without triggering a respawn loop

- [ ] Select the connection, click **Edit**.
- [ ] Under **Advanced**, set **Autostart** to `1` (enabled).
- [ ] In the same Advanced/Automatic Action settings, confirm that **Keep Alive**,
      **Restart on Exit**, and **Automatic Reconnect** (or equivalently named process
      re-launch options) are **disabled**. These options force `adaemon` to relaunch the
      process whenever it appears to exit, which combined with the pre-`exec` script
      behavior was the direct cause of the loop. With the `exec` fix from 3.2 applied,
      these are not needed for the application to stay running, and leaving them enabled
      risks reintroducing the loop under other conditions.
- [ ] Click **Apply**, then **OK**.

### 3.7 — Reboot and verify

- [ ] Perform a full cold reboot (power cycle, not just closing the application).
- [ ] Confirm exactly one instance of Perspective Workstation opens automatically, with
      no terminal interaction.
- [ ] Confirm the configured project loads automatically.
- [ ] Confirm closing the application returns cleanly to the desktop without triggering
      another automatic launch.
- [ ] Confirm with `ps aux | grep java` that only one Java process is active.

---

## Part 4 — Locating the application without a terminal

This follows directly from Part 3.5 — no additional configuration is required. Once
registered as a Connection, the entry appears as a named, clickable item in the ThinPro
interface, alongside any other configured connections.

- [ ] Confirm the "Perspective Workstation" connection is visible in the standard
      (non-admin) Connection Manager view used by `<NON_ROOT_USER>`, not only in
      Administrator Mode.
- [ ] If visibility is restricted to administrators by default, adjust the connection's
      user-visibility/assignment setting so `<NON_ROOT_USER>` can see and launch it.

---

## Part 5 — Reconnect behavior

No additional configuration is required — reconnect is handled natively by Perspective
Sessions.

- [ ] With the application open and the project loaded, disconnect the network briefly
      (unplug the cable, or block the Gateway address), wait 10–15 seconds, then restore
      it.
- [ ] Confirm the session reconnects automatically with no manual interaction.

---

## Part 6 — Verification checklist (per machine)

- [ ] Installed fresh into `<PERSISTENT_PATH>` (Part 1)
- [ ] Runs as `<NON_ROOT_USER>`, not root (Part 2)
- [ ] Browser instances open correctly, project renders (Part 2.2)
- [ ] Default Application set inside Workstation (Part 2.4)
- [ ] Prior XDG autostart entry removed (Part 3.1)
- [ ] `exec` fix applied to the launch script (Part 3.2)
- [ ] Single-instance lock applied, if used (Part 3.3)
- [ ] Custom Connection created in ThinPro Connection Manager (Part 3.5)
- [ ] Autostart = 1 set, Keep Alive/Restart on Exit/Auto-Reconnect disabled (Part 3.6)
- [ ] Cold-reboot verified: single instance, no loop, no terminal interaction (Part 3.7)
- [ ] Connection visible/launchable by the non-admin session user (Part 4)
- [ ] Reconnect tested — survives a network drop unattended (Part 5)

---

## Part 7 — Deployment across additional machines

Repeat this block per machine.

### Machine: ___________

- [ ] Hardware/OS profile confirmed matching (Part 1.1)
- [ ] Persistent storage confirmed writable (Part 1.2) — note if the mount point differs
- [ ] Installed into `<PERSISTENT_PATH>` (Part 1.3–1.6)
- [ ] Confirmed launches as non-root user, browser instances work (Part 2)
- [ ] `exec` fix applied to launch script (Part 3.2)
- [ ] Custom Connection + Autostart configured correctly, loop-triggering options
      disabled (Part 3.5–3.6)
- [ ] Cold-reboot verified (Part 3.7)
- [ ] Connection visible to the non-admin user (Part 4)
- [ ] Reconnect tested (Part 5)

If a machine diverges from this procedure at any step (different mount point,
Connection Manager unavailable, different error on launch), stop at that step and record
the divergence rather than restarting the full diagnostic process.

---

## Part 8 — Summary of corrected issues

Retained for reference so the same detours are not repeated.

| Earlier approach | Problem | Correction |
|---|---|---|
| Installing into `/tmp` | Wiped on every reboot, requiring manual reinstall | Extract directly into `/persistent/ignition` (Part 1.4) |
| Running installation and testing from a root session | Chromium refuses its sandbox as root, producing "Unable to create browser instances" | Run and configure as the actual local session user (Part 2) |
| `~/.config/autostart/*.desktop` (freedesktop XDG autostart) | Not read by ThinPro's shell at all — confirmed via journal logs showing no autostart processing across a full boot | ThinPro's own Connection Manager, Custom connection, Autostart = 1 (Part 3) |
| Autostart enabled on the raw wrapper script without `exec` | `adaemon` tracked the wrapper process, saw it exit immediately after backgrounding the real application, and relaunched it repeatedly | `exec` added to the final launch command in the script, removing the fork/backgrounding behavior (Part 3.2), plus an optional `flock` single-instance lock (Part 3.3) |

---

## Appendix — Command reference

```bash
# Confirm hardware/OS
uname -m && cat /etc/os-release

# Confirm persistent storage
mkdir -p /persistent/ignition && touch /persistent/ignition/write_test && rm /persistent/ignition/write_test

# Install
lsblk
cp /tmp/tmpfs/media/STORE_N_GO_sda1/perspectiveworkstation.tar.gz /tmp/
tar -xzvf /tmp/perspectiveworkstation.tar.gz -C /persistent/ignition
chmod -R a+rX /persistent/ignition
rm /tmp/perspectiveworkstation.tar.gz

# Test as non-root user
su - <NON_ROOT_USER> -c "cd /persistent/ignition/perspectiveworkstation && DISPLAY=:0 ./perspectiveworkstation.sh"

# Check logs
cat /home/<NON_ROOT_USER>/.ignition/clientlauncher-data/workstation.log

# Remove prior (non-working) autostart attempt
rm -f /home/<NON_ROOT_USER>/.config/autostart/ignition-perspective-workstation.desktop

# Edit launch script to add exec (prevents restart loop)
nano /persistent/ignition/perspectiveworkstation/perspectiveworkstation.sh

# Confirm single Java process after launch
ps aux | grep java

# Check for Smart Zero / Connection Manager tooling if the GUI is not visible
which hptc-connection-admin hptc-config-wizard 2>/dev/null
```

---

## Part 9 — Full uninstall / rollback

Use this to remove the installation completely and return the thin client to its
pre-deployment state. Steps are ordered so the running application is stopped before its
supporting configuration is removed.

- [ ] **9.1 — Stop the running application.**
  ```bash
  pkill -f perspectiveworkstation
  pkill -f java
  ```
  Confirm nothing remains:
  ```bash
  ps aux | grep -E 'perspective|java'
  ```

- [ ] **9.2 — Remove the Connection Manager entry.**
  - Open **Connections** in the ThinPro control center (switch to Administrator Mode
    first if required).
  - Select the **Perspective Workstation** connection and choose **Delete**.
  - Confirm it no longer appears in either the admin or non-admin connection list.

- [ ] **9.3 — Remove the lock file, if the `flock` safety net was used.**
  ```bash
  rm -f /tmp/perspective.lock
  ```

- [ ] **9.4 — Remove any leftover XDG autostart entry** (only relevant if this was
      created at any point and not already cleaned up):
  ```bash
  rm -f /home/<NON_ROOT_USER>/.config/autostart/ignition-perspective-workstation.desktop
  ```

- [ ] **9.5 — Remove the application's local data for the session user.**
  ```bash
  rm -rf /home/<NON_ROOT_USER>/.ignition
  ```

- [ ] **9.6 — Remove the installed application files from persistent storage.**
  ```bash
  rm -rf /persistent/ignition
  ```

- [ ] **9.7 — Reboot and confirm.**
  - Cold reboot the machine.
  - Confirm no Perspective Workstation window opens automatically.
  - Confirm the Connections list no longer includes the entry.
  - Confirm `/persistent/ignition` no longer exists:
    ```bash
    ls /persistent/ignition 2>&1
    ```
    (Expected: "No such file or directory")

**Note:** this removes the application and its configuration only. It does not modify
ThinPro system settings, network configuration, or any other connections on the machine.
