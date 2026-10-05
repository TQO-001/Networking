## 5.1 Installing and Upgrading Node-RED
> Okay so after suffering with being blocked from the internet on the Raspberry Pi, throughout this entire tutorial, we will now enable internet, yay 😒.

### Getting Internet Access
If not you're doing this (setup) on your own private network and anywhere where you don't have control of the firewall rules, you'll have to gain access. 

For Hulamin/Gijima you have to go to `gateway.hulamin.co.za/connect` and enter your details.

![[Pasted image 20261002085538.png]]

Once you have internet access, we can now install Node-RED.

### Install Node-RED
To install or upgrade Node-RED on a Raspberry Pi, ==the official project provides a single, unified bash script==. This script is highly efficient because it automatically **detects your system**, installs or upgrades **Node.js** (v20+ or v22 LTS), removes older system-packaged versions of Node-RED, and sets up Node-RED via npm. 

---
#### Step 0: Install Node.js
1. Download and install nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
```
2. in lieu of restarting the shell
```bash
\. "$HOME/.nvm/nvm.sh"
```
2. Download and install Node.js:
```bash
nvm install 24
```
2. Verify the Node.js version and npm version:
```bash
node -v # Should print "v24.21.0".
npm -v # Should print "11.19.0".
```

---

#### Step 1: Prep and Execute the Script
- Run a quick system update first.
```bash
sudo apt update && sudo apt upgrade -y
```

- Run the official **Node-RED installation and upgrade script**:
```bash
bash <(curl -sL https://github.com/node-red/linux-installers/releases/latest/download/install-update-nodered-deb)
```
- The installer will ask if you want to proceed and if you wish to install Pi-specific nodes (useful for GPIO control). Type `y` or `yes` when prompted.
- Once you're done, this it's what you should see:
![[Pasted image 20261002092837.png]]

---

#### Step 2: Manage the Node-RED Service
Once the installation finishes, you can control Node-RED in the background using specific shortcut commands: 
- **Start Node-RED:** `node-red-start`
- **Stop Node-RED:** `node-red-stop`
- **Restart Node-RED:** `node-red-restart`
- **View Live Logs:** `node-red-log`

To make sure Node-RED starts up automatically whenever your Raspberry Pi is powered on, enable the system service: 
```bash
sudo systemctl enable nodered.service
```

#### Step 2: Manage the Node-RED Service

> [!important] **Note:** If Node.js was installed via **NVM**, background service commands (`node-red-start`, `systemctl`) will be disabled by default. You can start Node-RED manually using `./node-red` or reinstall Node.js globally to enable systemd shortcuts. Obviously this is tedious and burdensome, and we're lazy so let's use our good old friend, a Process Manager; **PM2**.
> 
> ##### Process Management with PM2 
> PM2 easily handles NVM node paths, auto-restarts Node-RED if it crashes, and sets up boot persistence seamlessly.
> 
> 1. **Install PM2 globally:**
> ```
> npm install -g pm2
> ```
> 
> 2. **Find the full path to your `node-red` executable:**
> ```
> which node-red
> ```
> 
> 3. **Start Node-RED with PM2:**
> ```
> pm2 start $(which node-red) -- --max-old-space-size=128
> ```
>
> ![[Pasted image 20261002144951.png]]
> 
> 4. **Configure PM2 to start on boot:**
> ```
> pm2 startup
> ```
> 
> **CRITICAL STEP: `pm2 startup` does not configure systemd automatically. You MUST execute the generated command string that PM2 prints out (e.g., `sudo env PATH=$PATH:... pm2 startup systemd -u admin --hp /home/admin`).**
> 
> 5. **Save the running state:**
> ```
> pm2 save
> ```
> 
>![[Pasted image 20261002154712.png]]
> 
> 6. **Test whether the PM2 daemon properly resurrects Node-RED across system restarts:**
>```bash
>sudo reboot
>```
>
>7. **After the Pi boots back up, open a terminal and verify:**
>```bash
>pm2 status
>```
>
> **Verification:** Node-RED should automatically show as `online` with an active uptime without needing to manually run `pm2 resurrect` or `pm2 start`.
>
> **Useful PM2 commands:**
> - Check status: `pm2 status`
> - View logs: `pm2 logs node-red`
> - Stop/restart: `pm2 stop node-red` / `pm2 restart node-red`


##### Manual Start (NVM Setup):
When Node.js is managed via **NVM**, background service setup and shortcut commands (`node-red-start`, etc.) are **disabled**.
* **Start Node-RED:** `./node-red`
* **Stop Node-RED:** Press `Ctrl + C`

##### Systemd Shortcut Commands (Standard Installation):
To use background services and shortcut commands, Node.js must be installed system-wide (without NVM).
* **Start Node-RED:** `node-red-start`
* **Stop Node-RED:** `node-red-stop`
* **Restart Node-RED:** `node-red-restart`
* **View Live Logs:** `node-red-log`

##### Enable Auto-Start on Boot:
To make sure Node-RED starts automatically whenever your Raspberry Pi powers on, enable the system service:

```bash
sudo systemctl enable nodered.service
```

---

#### Step 3: Access the Editor

Start the service using `node-red-start`, then open a web browser: 
- **On the Pi itself:** Navigate to `http://localhost:1880`.
- **From another device on the same network:** Navigate to `http://<YOUR_PI_IP_ADDRESS>:1880` (e.g., `http://10.10.22.63:1880`). You can find your Pi's network address by running `hostname -I` in the terminal.

![[Pasted image 20261002093936.png]]

