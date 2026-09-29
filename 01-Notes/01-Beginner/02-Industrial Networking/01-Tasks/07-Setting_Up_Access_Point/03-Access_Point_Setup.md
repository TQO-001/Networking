# 3. Setup your Access Point
## 3.1 Hardware Connections & Powering Up
* **Power Supply:** Connect **12 to 48 VDC** redundant power to the removable 10-pin terminal block (`V1+`/`V1-` or `V2+`/`V2-`), or connect an Ethernet cable from an **IEEE 802.3af PoE** switch/injector to the LAN port.
* **Antennas:** Fasten external Wi-Fi antennas securely to the RP-SMA antenna connectors.
* **Network Connection:** Connect a straight-through RJ45 Ethernet patch cable from your PC to the AWK-3131A LAN port.

---

## 3.2 Configure Your PC Network Adapter
The factory default settings for Moxa AWK access points are:
* **Default IP Address:** `192.168.127.253`
* **Subnet Mask:** `255.255.255.0`
* **Default Username:** `admin`
* **Default Password:** `moxa`

1. Open your computer’s IPv4 network adapter settings.
2. Assign a static IP address on the same subnet (e.g., IP: `192.168.127.100`, Subnet Mask: `255.255.255.0`).

![[Pasted image 20260928160509.png|268]]
---

## 3.3 Access the Web Console
1. Open a browser and enter `https://192.168.127.253`.
2. Log in using `admin` for the username and `moxa` for the password.
3. Update the default password under **System Management > Change Password**.

> **Note:** If the IP was changed previously, use **Moxa Wireless Search Utility** or **MXconfig** to discover the device on your subnet.

---

## 3.4 Configure Operation Mode & Wireless Settings
1. Navigate to **Wireless LAN Setup** > **WLAN** > **Basic Wireless**.
2. Set **Operation Mode** to **AP (Access Point)**.
3. Set your desired **SSID** (Network Name).
4. Select the **RF Band** (2.4 GHz 802.11b/g/n or 5 GHz 802.11a/n) and set an operating channel.
5. Click **Apply**.

---

## 3.5 Configure Wireless Security
1. Navigate to **Wireless LAN Setup** > **Security Settings**.
2. Select **WPA2-Personal (PSK)** or **WPA2-Enterprise**.
3. Set **Encryption** to **AES**.
4. Enter your **Pre-Shared Key** (passphrase) and save changes.

---

## 3.6 Update Network IP Configuration
1. Navigate to **Basic Setup** > **Network Setup**.
2. Change the IP assignment to **Static** and enter your target network IP address, subnet mask, and gateway.
3. Save changes.

---

## 3.7 Save & Restart
1. Navigate to **System Management** > **Save Configuration** and click **Save**.
2. Navigate to **System Management** > **Restart** and reboot the access point.