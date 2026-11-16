---
tags: [jobbing, how-to, wireless]
---
# First login to a Moxa AP

↩ Back to the guide: [[04-moxa_wireless_bridge_setup|Moxa AWK access points: wireless bridge between two sites]]

> **Use this when:** A factory-default AWK access point needs its first configuration.

## What you need
- [ ] Power connected (12-48 VDC or PoE) and antennas fitted
- [ ] Laptop with a patch cable to the AP's LAN port

## Steps
- [ ] Factory defaults: IP `192.168.127.253`, mask `255.255.255.0`, user `admin`, password `moxa`.
- [ ] Give your laptop a static IP in that subnet, e.g. `192.168.127.100/255.255.255.0`.
- [ ] Browse to `https://192.168.127.253` and log in.
- [ ] **System Management, Change Password** and set a new admin password.

## Check it worked
- [ ] You can log in with the new password.

## Gotchas
- If the AP's IP was already changed, find it with the **Moxa Wireless Search Utility** or **MXconfig** on your subnet.
- Do one AP at a time. Two factory-default APs share `192.168.127.253`.

## Source notes
- [[03-access_point_setup|03-access_point_setup]]
