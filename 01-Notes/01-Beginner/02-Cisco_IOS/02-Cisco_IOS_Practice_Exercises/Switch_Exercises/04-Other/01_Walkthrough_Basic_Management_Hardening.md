# A recommended basic management & console hardening configuration for switches

Before you touch VLANs, trunks, or security features, every switch you sit down at should get the same baseline management setup. This gets you a switch that's easy to work on, logs what happens to it, and keeps accurate time — which matters more than it sounds, since mismatched clocks make troubleshooting logs across multiple devices painful.

### Step 1: Set the hostname and turn off DNS lookups

Give the switch a real hostname so your prompt actually tells you what you're connected to:
```text
Switch>enable
Switch#configure terminal
Switch(config)#hostname ACCESS-SW-10
```
By default, if you mistype a command, IOS tries to resolve it as a hostname over DNS and hangs for a few seconds before giving up. Turn that off so typos fail instantly instead of stalling your terminal:
```text
ACCESS-SW-10(config)#no ip domain-lookup
```

### Step 2: Configure banners

A Message-of-the-Day (MOTD) banner displays before login; a login banner displays right at the login prompt. Use `#` (or another delimiter character that doesn't appear in your message) to mark the start and end of the banner text:
```text
ACCESS-SW-10(config)#banner motd #
Enter TEXT message.  End with the character '#'.
AUTHORIZED ACCESS ONLY. All activity is logged and monitored.
#
```
Legal/compliance teams often require a banner like this — it's part of establishing that access was unauthorized if someone breaks in, since the system explicitly told them the rules.

### Step 3: Harden the console line

The console line is your fallback path in if you ever lose remote access, so it's worth tuning even though it's rarely your day-to-day connection:
```text
ACCESS-SW-10(config)#line console 0
ACCESS-SW-10(config-line)#logging synchronous
```
`logging synchronous` stops unsolicited log messages from interrupting a command you're halfway through typing — the switch will redraw your input line after the message instead of leaving it mixed in with log output.
```text
ACCESS-SW-10(config-line)#exec-timeout 10 0
```
This logs an idle console session out after 10 minutes (10 min, 0 sec) — useful so a session left open on a workbench doesn't sit there authenticated forever.
```text
ACCESS-SW-10(config-line)#history size 50
```
This keeps the last 50 commands in that session's history (viewable with `show history`) instead of the IOS default of 10 — handy when you're repeating similar commands across many interfaces.

### Step 4: Timestamp your logs

By default, log messages are timestamped with uptime (`*Mar 4 7:4:9.374`-style), not real time. Switch to real-world timestamps so logs are actually useful when cross-referencing with other systems:
```text
ACCESS-SW-10(config)#service timestamps log datetime msec
```

### Step 5: Point the switch at an NTP server

Accurate time matters even more once you're timestamping logs — without a synced clock, "real time" timestamps are still wrong. Point the switch at your organization's NTP server:
```text
ACCESS-SW-10(config)#ntp server 10.10.1.5
```
You can confirm sync status afterward with `show ntp status` — look for `Clock is synchronized` in the output. It can take a few minutes after configuring before the clock actually syncs.

### Step 6: Send logs to a central syslog server

Local logging (`show logging`) only holds so much history and disappears on reload unless you've configured logging to buffer to flash. For anything you want to keep and correlate across devices, send logs to a syslog server:
```text
ACCESS-SW-10(config)#logging host 10.10.1.6
ACCESS-SW-10(config)#logging trap informational
```
`logging trap informational` sets the severity threshold — this sends everything from "informational" up to the syslog server (severities 0-6), filtering out the lowest-priority debugging chatter (severity 7) unless you specifically need it.

### Step 7: Save your work

As always, none of this survives a reload until you save it:
```text
ACCESS-SW-10(config)#end
ACCESS-SW-10#copy running-config startup-config
```

## What "good" looks like

A well-hardened baseline switch has: a real hostname, DNS lookup disabled, a legal banner, a console line that won't hang open indefinitely or get its output garbled, real-time log timestamps, synced NTP, and logs shipped somewhere durable. None of this is glamorous, but it's the difference between troubleshooting an incident cleanly and fighting your own tools while you do it.
