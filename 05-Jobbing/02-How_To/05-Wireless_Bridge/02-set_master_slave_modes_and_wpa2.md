---
tags: [jobbing, how-to, wireless]
---
# Set master/slave modes and WPA2

↩ Back to the guide: [[04-moxa_wireless_bridge_setup|Moxa AWK access points: wireless bridge between two sites]]

> **Use this when:** You are building the wireless link between two APs.

## What you need
- [ ] Logged into each AP ([[01-first_login_to_a_moxa_ap|guide]])

## Steps
- [ ] **Wireless LAN Setup, WLAN, Basic Wireless**:
  - Operation mode: **Master** on one AP, **Slave** on the other
  - Same **SSID** on both
  - RF type **B/G/N Mixed**, pick an operating channel, **Apply**
- [ ] **Wireless LAN Setup, Security Settings**: **WPA2-Personal (PSK)** (or WPA2-Enterprise), encryption **AES**, enter the pre-shared key, save.
- [ ] You can save and restart now to test, or after the IP change.

## Check it worked
- [ ] After both are restarted the slave associates with the master (check the AP status pages and ping).

## Gotchas
- Your note admits they might not have been able to communicate yet at this stage, because they still had the same IP. Change the IPs ([[03-change_the_ap_ip_and_save|next guide]]) before testing the link.
- Same SSID, same security settings and same channel on both ends.

## Source notes
- [[03-access_point_setup|03-access_point_setup]]
