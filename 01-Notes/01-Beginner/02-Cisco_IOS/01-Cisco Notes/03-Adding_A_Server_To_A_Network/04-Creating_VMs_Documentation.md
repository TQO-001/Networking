## 3. Creating VMs
We're gonna create 3 VMs on the server to add to our network
![[3f1557c4-fd9d-483e-a9ce-cdd6a1c8b5f3.png]]

### Create Your First Virtual Machine (Example: Windows)
1. Navigate to **Virtual Machines** and then go to the **Create / Register VM**.
2. Choose **Create a new virtual machine**.
3. Enter a name (e.g., VM0).
4. Guest OS: **Windows → Microsoft Windows 10 (64-bit)**.
5. Select your datastore.
6. Assign resources: 2 vCPU, 8 GB RAM, 100 GB disk.
7. Attach your VM to the VM-Network port group or create one beforehand.
8. Mount the Windows ISO from the datastore by uploading it from your PC to your server via the established network, just drag and drop into the datastore.
9. Finish and power on the VM.
10. Install Windows following the prompts.

Make sure you should check the post-installation checklist:
- Set **NTP** for accurate time.
- Backup host configuration.
- Apply the latest ESXi patches.
- Monitor hardware health status in **Monitor → Hardware**.

---
- After you've done this process 3 times to create our VMs for the Sun Daddy network, you should have 3 working VMs.
![[a991301a-6a59-4ac7-9bae-c1d5fea46e9e 2.png]]

- Now let's ensure **VM1** and **VM2** are on **VLAN 10** and **VM3** is on **VLAN 11**, ensure you have created these port groups and have assigned them to the same **vSwitch (Virtual Switch)**.![[e93b0a4a-b37b-4dcb-ba75-41a84f3d4648.png]]

- The vSwitch should look like this
![[87248ec0-581a-4792-98e5-afc423380634.png|433]]

- What you need to do next is ensure the VMs have an IP address within the same network(s) we created in the Sun Daddy network layout.
![[108418e5-dfab-4641-bfdb-e0dc9a267e36.png|607]]
> VM1
