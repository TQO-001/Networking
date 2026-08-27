# 00-Switch Ops
## 01 - Switch Boot Process & Password Recovery

**What It Is:** How a Cisco switch boots from power-on to a usable CLI prompt, and the interrupt-and-recover procedure used when you're locked out (lost enable password, unknown config, or you inherited a switch with no documentation).

**Why It's Important:** This is the single most "oh no" moment in switch work — a switch you can't get into is a switch you can't fix. Understanding the boot sequence tells you *where* to interrupt it and *why* the recovery steps work, instead of blindly pasting commands you don't understand. This is also exactly the kind of situation that causes people to "fail to configure it properly" after a reload — if you don't understand config-register behavior, a switch can come up ignoring its saved config and you won't know why.

## Overview & Mechanics

**Boot sequence (normal power-on):**
1. **POST (Power-On Self-Test)** — ROM-based hardware check (CPU, memory, interfaces).
2. **Bootloader (ROMMON)** — a small, separate piece of firmware in ROM. It reads the **config-register** value to decide *how* to boot: which IOS image to load, and whether to load `startup-config` at all.
3. **IOS image loads from flash** — normally the newest/only `.bin` file in `flash:`.
4. **Startup-config loads from NVRAM** — IOS reads `startup-config` and applies it, producing the running-config you see. If config-register tells it to *skip* this step, the switch boots to a blank config even though `startup-config` is still sitting untouched in NVRAM.

**The config-register** is a 4-hex-digit value (`show version` shows it at the bottom, e.g. `Configuration register is 0x2102`). The two values you need to know cold:
- `0x2102` — **normal boot**: load IOS from flash, load startup-config from NVRAM. This is the factory default and what you want 99% of the time.
- `0x2142` — **ignore/bypass startup-config on boot**. This is the password-recovery value — the switch boots with a blank running-config (but startup-config is *not* erased, just skipped), letting you get into privileged EXEC without a password, then manually copy the old startup-config into running-config to recover it.

**ROMMON (rommon>)** is a separate, minimal CLI you drop into when you interrupt the normal boot — this is not IOS, it only understands a handful of ROMMON-specific commands (`confreg`, `boot`, `dir flash:`).

**How you get to ROMMON:** hold the **Mode button** (on fixed-config switches like the 2960/3560/IE3000) while powering on, or send a **Break signal** from the terminal within the first ~60 seconds of boot (on switches without a Mode button, or via console software that supports sending Break — PuTTY needs Ctrl+Break or a configured break key, since plain Ctrl+C does not send a true Break).

## Step-by-Step Drill: Password / Config Recovery

```text
! --- Step 1: Power cycle the switch and interrupt the boot ---
! Unplug power, hold the Mode button (or send Break in your terminal
! within ~60 seconds), then reapply power. Release Mode once the
! switch drops to the rommon> prompt.

rommon 1 > confreg 0x2142
! --- Step 2: Set the register to skip startup-config on next boot ---

rommon 2 > reset
! --- Step 3: Reboot the switch with the new register value ---
! Switch boots to a blank running-config, no password required.

! --- Step 4: You land directly in privileged EXEC (no password asked) ---
Switch> enable
Switch#

! --- Step 5: Copy the OLD startup-config into the running-config ---
! This restores your VLANs, interfaces, hostname, etc. into memory
! WITHOUT restoring the old passwords yet (they come along with it,
! but you're about to overwrite them in the next step anyway).
Switch# copy startup-config running-config

! --- Step 6: Enter global config and set NEW passwords ---
Switch# configure terminal
Switch(config)# enable secret NewSecurePass123!
Switch(config)# line console 0
Switch(config-line)# password NewConsolePass123
Switch(config-line)# login
Switch(config-line)# exit
Switch(config)# line vty 0 15
Switch(config-line)# password NewVtyPass123
Switch(config-line)# login
Switch(config-line)# exit

! --- Step 7: Restore the config-register to NORMAL boot behavior ---
! This is the step people forget. Skip it and the switch will
! ignore startup-config on every future reboot forever.
Switch(config)# config-register 0x2102
Switch(config)# exit

! --- Step 8: Save the recovered + updated config ---
Switch# copy running-config startup-config

! --- Step 9: Verify the register is back to normal ---
Switch# show version
! Confirm the last line reads: Configuration register is 0x2102
! (it will show 0x2102 will be used at next reload, until you reload)

! --- Step 10: Reload to confirm everything comes up clean ---
Switch# reload
```

**Verification commands:**
```text
show version
show running-config | include hostname
show startup-config
```

## Common failure points (read this before you need it)

- **Forgetting Step 7 (`config-register 0x2102`)**: the switch will boot into "ignore startup-config" mode *every single time* from now on — this looks exactly like a switch that "won't keep its configuration," which is a classic real-world symptom people burn hours chasing before realizing the register was never reset.
- **PuTTY and Break signals**: plain PuTTY over a serial console doesn't send a true Break with Ctrl+C. If you can't interrupt the boot with the Mode button, you either need a terminal program that supports a genuine Break signal, or you use the Mode-button method — on the IE 3000 and most fixed-config switches, the Mode button method is the reliable one.
- **`copy startup-config running-config` vs `copy running-config startup-config`**: these are opposite operations and mixing them up during a recovery will overwrite the very config you're trying to save. Read the arrow direction (`copy SOURCE DESTINATION`) every single time, don't rely on muscle memory alone for this one command.
- **This does NOT bypass a switch that requires a login banner acknowledgment or AAA/TACACS+ authentication** — those are separate systems layered on top and need their own recovery considerations.

---
*Real-world note: if you hit this on a production switch, always check with whoever owns the network before power-cycling — an unplanned reboot on a live switch drops every device connected to it, even if only for the ~60-90 seconds it takes to come back up.*
