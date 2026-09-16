# HP Elite t655 Thin Client
The [HP Elite t655 Thin Client](https://www.hp.com/za-en/products/thin-clients/product-details/2101492876) is a secure, commercial-grade desktop device built for efficient cloud or on-premise virtualization tasks
![[Pasted image 20260903114456.jpg|232]]

## Why HP Thin Clients?
HP is making work from anywhere easier for cloud computing, with secure solutions and real-time device management optimized for desktop virtualization and remote collaboration.

## Task to do
- Decide on it's name and label it with the name and IP address
- Once booted up, Switch to Administrator
- Give them Static IP addresses on the `192.168.193.0` network.
- Give them names following the naming convention.
- Setup VNC
- Ping the Gateway `192.168.193.1`
- Go to the Ignition server `192.168.193.2:8088`
- Go to **Perspective** -> **Launch** -> Then on **CCL2 SCADA Project (the first one)**, Launch it.
- Once it's loaded, You'll see the **Process** section on the right side, choose the corresponding process to the device name you are configuring.
- Once you enter that process, copy the link and set the browser to do the following:
	- When the user clicks on the browser it should lead to the copied link from the process
	- Rename the browser to `CCL2-[Process Name]`
	- Enable Kiosk, and disable all the sub-options
	- Remove Features:
		- Tabbing
		- Home Button
		- Back/Forward Button
	- Set the browser to Auto-connect so it starts up immediately when it's closed, or when the PC boots up.



Research
Cisco Catalyst 2960-c
