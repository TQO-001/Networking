# 📡 Networking

### OT Technician Notes
Working as an Operational Technology (OT) intern is a massive advantage. I am working at the critical intersection of Industrial Control Systems (ICS/SCADA) and traditional IT networking. This field—often called Industrial Network Engineering or Industrial Cybersecurity—is exploding with high-paying opportunities because very few IT professionals understand factory/plant environments, and very few traditional automation techs understand advanced networking.

Because I am in OT, your roadmap should look slightly different than a standard IT network engineer. You need to bridge the gap between Ethernet cables, IP routing, and industrial protocols (like Modbus, Profinet, and EtherNet/IP).

Here is a comprehensive, structured roadmap tailored specifically to your background, current internship, and future goals.

---

## The OT-to-DevNet Career Roadmap
### Phase 1: Foundations
 - CCNA
 - Industrial Protocols
 - Hands-On Labbing
### Phase 2: Automation
- DevNet Associate
- Linux & Git
- Python + Netmiko
### Phase 3: Security
- Advanced OT/Cyber
- Cisco IMINS (or equivalent)
- Ansible/Infrastructure as Code

---

## Phase 1: Core Networking & OT Foundations (Next 6–12 Months)
> [!TIP] **Goal**: Solidify your infrastructure knowledge. You cannot automate a network until you deeply understand how packets move and how industrial machinery communicates.

## 🛠️ Skills to Add
- Industrial Protocols: Learn how devices actually talk on a plant floor. Focus on Modbus TCP/RTU, Profinet, EtherNet/IP, and OPC UA.
- The Purdue Model: Memorize this framework. It dictates how industrial networks are segmented into layers (from physical sensors up to corporate IT) to prevent cyberattacks.
- Basic Linux Navigation: You must know how to navigate a terminal, change directories, and edit configuration files. Python and automation tools run natively in Linux.

## 📚 Certificates & Cert Roadmap
- CCNA 200-301 (Your Immediate Target): Do not change this. It is the best foundational certificate in the world for understanding routing, switching, subnets, and VLANs.
- Alternative OT Certification Note: Historically, the Cisco IMINS (Managing Industrial Networks with Cisco Networking Technologies) cert was the gold standard for OT. Since Cisco retired it, look into the ISA/IEC 62443 Cybersecurity Certificates or the GIAC Global Industrial Cyber Security Professional (GICSP) later in your career.

## 🧪 Practical Lab Strategy
- Build an OT Lab in GNS3 or EVE-NG: Use these free network emulators instead of Packet Tracer. Download virtual Cisco IOS images and try to connect them to free open-source PLC simulators (like an open-source Modbus master/slave simulator). Practice setting up Access Control Lists (ACLs) to isolate industrial traffic.

---

## Phase 2: The Infrastructure as Code Era (Months 12–24)
> [!TIP] **Goal**: Earn your DevNet Associate and pivot from a technician who configures switches one by one to an engineer who deploys code to configure 50 switches simultaneously.

## 🛠️ Skills to Add
- Version Control (Git & GitHub): You must treat your Python scripts like software. Learn how to `git clone`, `commit`, and `push` your code.
- Structured Data Formats: Learn how to read and write JSON, YAML, and XML. Network devices use these formats to send data to your Python scripts.
- API Interacting: Learn how to use Postman to send REST API requests to modern network controllers or industrial gateways.

## 📚 Certificates & Cert Roadmap
- Cisco Certified DevNet Associate (200-901 DEVASC): This is exactly the right next step. It ties your CCNA knowledge together with Python, software development methodologies, and Cisco API platforms.

## 🧪 Practical Lab Strategy
- Write a Python script using the Netmiko library that logs into a virtual switch, pulls the running configuration, and saves it as a text backup.
- Graduate from Netmiko to Ansible. Write an Ansible playbook that automatically changes the VLAN configuration on three virtual switches at the same time.

---

## Phase 3: The Future – Advanced Industrial Network/Cyber Engineer (Years 2+)
> [!TIP] **Goal**: Maximize your earning potential by becoming an expert in securing and automating high-availability critical infrastructure (power plants, manufacturing, water treatment).

## 🛠️ Skills to Add
- Network Monitoring & Telemetry: Learn how to use tools like Wireshark to deep-dive into proprietary industrial packets, and use Grafana or Prometheus to monitor network health metrics.
- Industrial Network Security: Learn how to configure industrial firewalls (like Cisco Secure Firewall ISA3000 series) and implement strict network segmentation to protect PLCs from the corporate internet.

## 📚 Certificates to Consider Later
- CCNP Enterprise (with Automation Concentration): If you stay heavily in Cisco environments.
- GICSP (GIAC Global Industrial Cyber Security Professional): The premier, highly respected certification for securing OT environments.

---

## 📋 Your Updated Roadmap Summary

|Phase|Est. Timeline|Focus Skills|Target Certifications|
|---|---|---|---|
|1. Foundations|0 – 12 Mos|Subnetting, VLANs, Purdue Model, Industrial Protocols (Modbus/Profinet)|CCNA (200-301)|
|2. Automation|12 – 24 Mos|Python, Netmiko, Git, Linux, JSON/YAML, REST APIs|DevNet Associate (200-901)|
|3. Advanced OT|24+ Mos|Industrial Firewalls, Network Telemetry, Infrastructure as Code (Ansible)|CCNP Automation or GICSP|
