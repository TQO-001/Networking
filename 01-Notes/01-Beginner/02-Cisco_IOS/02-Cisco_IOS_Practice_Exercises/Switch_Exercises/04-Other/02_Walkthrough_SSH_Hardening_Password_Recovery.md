# SSH hardening and password recovery for switches

Once a switch is racked and in production, you need two things covered: secure remote access (so you're not relying on physically walking to the console), and a way back in if you ever lock yourself out.

### Step 1: Set a domain name (required before generating RSA keys)

RSA keys are named using the switch's hostname and domain name together, so IOS won't let you generate them until a domain name is set:
```text
ACCESS-SW-10(config)#ip domain-name laughtale.local
```

### Step 2: Generate RSA keys and set SSH version

```text
ACCESS-SW-10(config)#crypto key generate rsa
The name for the keys will be: ACCESS-SW-10.laughtale.local
Choose the size of the key modulus in the range of 360 to 2048 for your General Purpose Keys.
How many bits in the modulus [512]: 2048
% Generating 2048-bit RSA keys, keys will be non-exportable...[OK]
```
Then restrict the switch to SSH version 2 only — version 1 has known cryptographic weaknesses:
```text
ACCESS-SW-10(config)#ip ssh version 2
```

### Step 3: Tighten SSH timeouts and retry limits

```text
ACCESS-SW-10(config)#ip ssh time-out 60
ACCESS-SW-10(config)#ip ssh authentication-retries 3
```
`ip ssh time-out` is how long the SSH negotiation phase (before login) is allowed to take — not your session idle timeout, which is still controlled by `exec-timeout` on the VTY lines. `authentication-retries` caps how many password attempts a single SSH session gets before being dropped, which slows down brute-force attempts.

### Step 4: Create local users and restrict VTY lines to SSH

```text
ACCESS-SW-10(config)#username netadmin privilege 15 secret L0calAdm1nPW!
ACCESS-SW-10(config)#line vty 0 15
ACCESS-SW-10(config-line)#transport input ssh
ACCESS-SW-10(config-line)#login local
```
`transport input ssh` blocks Telnet entirely on those lines — only SSH connections are accepted. `login local` tells the line to check the local username database rather than a shared line password.

### Step 5: Encrypt locally-stored passwords

Some older-style passwords (like line passwords set with `password`, as opposed to `secret`) are stored in plaintext in the running config by default. `service password-encryption` applies a weak reversible encryption to all of them so a shoulder-surf of `show running-config` doesn't hand over cleartext credentials:
```text
ACCESS-SW-10(config)#service password-encryption
```
Note this is *not* strong encryption — it just stops casual viewing. `enable secret` and `username ... secret` already use a proper one-way hash (MD5 by default, or stronger with `secret` variants on newer IOS) regardless of this setting.

### Step 6: Password recovery (physical console access required)

If you ever lose all admin credentials, physical/console access lets you recover the switch — this is *why* console line security matters, since anyone with a cable and this procedure can get in. This runs from ROMMON, not from normal IOS prompts:

1. Power-cycle the switch and, within the first few seconds of boot, hold the **Mode** button (on Catalyst switches) or send a break signal (`Ctrl+Break` in most terminal emulators) to interrupt the boot process and drop into ROMMON (`switch:` prompt).
2. At the ROMMON prompt, tell it to boot ignoring the startup config:
   ```text
   switch: flash_init
   switch: load_helper
   switch: dir flash:
   switch: rename flash:config.text flash:config.text.old
   switch: boot
   ```
3. The switch boots with no startup config (since you renamed it out of the way), landing you at the setup wizard — say no to that and drop to the CLI.
4. Rename the config file back and load it into running config, then change the passwords:
   ```text
   Switch#rename flash:config.text.old flash:config.text
   Switch#copy flash:config.text running-config
   Switch(config)#enable secret NewSecurePassword123
   Switch(config)#username netadmin secret NewLocalPassword123
   Switch#copy running-config startup-config
   Switch#reload
   ```

The exact key sequence and ROMMON commands vary slightly by switch model, so always check the specific hardware's documentation before doing this on production gear.

## What "good" looks like

SSH-only remote access, no Telnet, retry-limited logins, a domain name and 2048-bit RSA keys in place, locally stored passwords encrypted at rest in the config, and — critically — physical/console access to the switch treated as a security boundary in its own right, since anyone with console access and enough time can recover from a lost password.
