## Section 1: Server Virtualization and Virtual Machines

A physical server is one machine — one CPU pool, one chunk of RAM, one set of disks. **Virtualization** is software that carves that one physical machine into several independent, isolated "computers," each with its own CPU allocation, RAM, disk, and network interface, even though they're all sharing the same physical hardware underneath.

### 1.1 The Hypervisor

The piece of software that makes virtualization possible is called a **hypervisor**. There are two kinds:

- **Type 1 (bare-metal):** installs directly onto the server's hardware, with no host operating system underneath it. **VMware ESXi** — what your server runs — is a Type 1 hypervisor. This is what real datacenters and server rooms use.
- **Type 2 (hosted):** installs on top of an existing OS, like VirtualBox or VMware Workstation running on your own Windows/macOS laptop. There's a whole extra OS layer between the hypervisor and the hardware, which costs performance and adds another thing that can go wrong.

The difference matters practically: when you install ESXi, it *replaces* the operating system on that machine entirely. There's no "Windows underneath ESXi" — ESXi boots straight from the server's firmware and IS the OS, purpose-built to run VMs and nothing else.

> [!note] **NOTE** - The software that runs directly on the hardware to initialize the server before any operating system boots is called the **Firmware** (specifically the **UEFI** or **Legacy BIOS** system firmware).
> ![[Pasted image 20260911091358.png]]
> 
> Like on an HPE ProLiant Gen8 server for example, this core low-level system consists of two main components:
> ### 1.1.1. System Firmware (UEFI / Legacy BIOS)
> This is the fundamental System ROM stored on a chip on the motherboard. When you power on the server, it performs the **POST (Power-On Self-Test)**, checks hardware integrity (RAM, CPUs, PCIe cards), initializes the Smart Array RAID controller, and manages system boot targets.
> 
> ### 1.1.2. HPE iLO 4 (Integrated Lights-Out)
> HPE ProLiant servers also feature a dedicated onboard management processor running **HPE iLO 4** firmware. iLO operates on a completely independent hardware controller embedded on the motherboard. It runs as long as the server is plugged into power—even if the server itself is powered off—providing out-of-band remote management, system health monitoring, and virtual media access.

### 1.2 What a VM Actually Is

A **Virtual Machine (VM)** is a software-defined computer that the hypervisor presents to a guest operating system as if it were real hardware. Let's say you created VM1, VM2, and VM3, ESXi carved out for each one:

- A slice of CPU (2 vCPU each) — vCPU stands for "virtual CPU." ESXi schedules these onto the server's real physical CPU cores as needed; it isn't a permanent 1-to-1 dedicated core.
- A slice of RAM (8 GB each)
- A **virtual disk** (100 GB each) — this is actually just a big file (a `.vmdk`) sitting on the server's real physical storage. From inside the VM it looks and behaves exactly like a real hard drive.
- A **virtual network adapter (vNIC)** — a software network card. This is the piece that Section 2 goes deep on.

Windows 10, installed inside each VM, has no idea it's not running on real, dedicated hardware. As far as the guest OS is concerned, it has its own CPU, its own RAM, its own disk, and its own network card. That illusion is the entire point: instead of buying three separate physical PCs for VM1, VM2, and VM3, one server hosts all three, and each behaves exactly like an independent machine.

### 1.3 Why Companies Actually Do This

This isn't just a home-lab trick — it's most of how real datacenters work:

- **Cost:** one server with enough RAM/CPU can replace a dozen physical boxes. Buying, powering, cooling, and racking twelve machines costs vastly more than one bigger one.
- **Isolation:** if VM3 crashes or gets compromised, VM1 and VM2 are unaffected — they're logically separate machines even though they share hardware.
- **Flexibility:** spinning up, deleting, resizing, or cloning a VM takes minutes. Doing the equivalent with physical hardware means literally purchasing and racking a new machine.
- **Snapshots:** most hypervisors (ESXi included) let you save a VM's exact state and roll back to it later — extremely useful when you're about to make a risky change (this would have saved you some pain during the pfSense back-and-forth, worth using going forward).

### 1.4 pfSense Is Just Another VM

This is worth stating plainly because it's easy to mentally file "the firewall" as a different category of thing from "the VMs." It isn't. Your firewall isn't a separate physical box sitting in a rack — it's a VM, created the exact same way VM1/2/3 were, with vCPU/vRAM/vDisk/vNICs allocated by ESXi. The only difference is its *job*: instead of running an application for a user, its job is to route and filter network traffic. Everything in Section 1 about VMs — isolation, its own "hardware," snapshots — applies to pfSense too.

---

**Practice:**
1. In your own words, what's the actual difference between a hypervisor and a VM? (One sentence for each is enough — the point is not to conflate them.)
2. Why is ESXi called "bare-metal" — what does that term specifically refer to?
3. Your server has 12 physical CPU cores and you assigned 2 vCPU to each of VM1, VM2, VM3, and pfSense (8 vCPU total allocated). Does that mean 8 of the 12 physical cores are now permanently reserved and unusable by anything else? Why or why not?
4. Name two concrete downsides you'd expect from a Type 2 (hosted) hypervisor compared to ESXi's Type 1 approach.
