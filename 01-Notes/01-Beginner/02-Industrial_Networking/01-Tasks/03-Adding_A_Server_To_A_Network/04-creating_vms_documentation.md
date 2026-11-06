## 3. Creating VMs
We're gonna create 3 VMs on the server to add to our network
![[creating_vms_documentati-01-creating_vms.png]]

### Create Your First Virtual Machine (Example: Windows)
1. Navigate to **Virtual Machines** and then go to the **Create / Register VM**.
2. Choose **Create a new virtual machine**.
3. Enter a name (e.g., VM0).
4. Guest OS: **Windows → Microsoft Windows 10 (64-bit)**.
5. Select your datastore.
6. Assign resources: 2 vCPU, 8 GB RAM, 100 GB disk.
7. Attach your VM to the correct port group on `vSwitch1` (see Step 0E in `03-Server_Setup_Documentation.md` if you haven't set that up yet, which would be weird because this entire documentation is sequential) — **not** the default "VM Network" port group, that one isn't tagged into any VLAN.
8. Mount the Windows ISO from the datastore by uploading it from your PC to your server via the established network, just drag and drop into the datastore.
9. Finish and power on the VM.
10. Install Windows following the prompts.

Make sure you check the post-installation checklist:
- Set **NTP** for accurate time.
- Backup host configuration.
- Apply the latest ESXi patches.
- Monitor hardware health status in **Monitor → Hardware**.

> You don't have to do the checklist above for this task but its good practice for a real production environment.

---
- After you've done this process 3 times to create our VMs for the Sun Daddy network, you should have 3 working VMs.
![[creating_vms_documentati-02-create_your_first_virtual.png]]

- Port groups per VM — **this changed** from an earlier version of this doc where VM1/VM2 were on `VLAN10`. They moved to `VLAN12` once VLAN 10 became the dedicated management network (see `01_Sun_Daddy_Network_Task.md` for why):
  - **VM1 → `VLAN_12`**
  - **VM2 → `VLAN_12`**
  - **VM3 → `VLAN_11`**

  Edit each VM's settings → Network Adapter → change the port group to match the table above.
![[creating_vms_documentati-03-create_your_first_virtual.png]]

- Inside each VM, set a static IP matching the addressing plan in `01_Sun_Daddy_Network_Task.md`:
  - **VM1:** `192.168.12.10 /24`, gateway `192.168.12.1`
  - **VM2:** `192.168.12.11 /24`, gateway `192.168.12.1`
  - **VM3:** `192.168.11.10 /24`, gateway `192.168.11.1`

  These gateways won't actually respond to pings until the firewall (`05-FireWall_Configuration.md`) is configured — that's expected at this stage, don't panic if `ping 192.168.12.1` fails right after you set this.
![[creating_vms_documentati-04-create_your_first_virtual.png|607]]
> VM1

- Also: VM3 needs its own Windows Firewall opened up for inbound ping, or none of this matters no matter how perfect your VLANs/trunks/firewall rules are. Covered properly in `05-FireWall_Configuration.md` — don't skip it just because it looks like a networking-doc afterthought, it genuinely cost me a debugging session.
