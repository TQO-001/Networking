# 00-Switch Ops — Sources

Master source list for the notes in `00-Switch-Ops/`. Organized to match each file's section number. Mix of official Cisco documentation (config guides, command references, TechNotes) and trusted third-party CCNA/networking resources (Cisco Press, NetworkLessons, Study-CCNA, etc.) used to verify or supplement the content.

Note: the notes themselves were written from general networking/IOS knowledge, then checked against these sources afterward — treat this as a verification/further-reading list, not a "these were open in tabs while writing" list.

---

## 01 — Boot Process & Password Recovery

- Cisco — *Recover Password for Catalyst Fixed Configuration Switches* (covers 2900XL/3500XL, 2940, 2950/2955, 2960, 2970, 3550, 3560, 3750): https://www.cisco.com/c/en/us/support/docs/switches/catalyst-2950-series-switches/12040-pswdrec-2900xl.html
- Cisco — Catalyst 2960/2960-S/2960-C/2960-Plus *Software Configuration Guide* — Troubleshooting chapter (password recovery procedure, config-register behavior): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/15-0_2_se/configuration/guide/scg2960/swtrbl.html
- Cisco — *Password Recovery Procedure for the Catalyst 6500 with Supervisor 720* (confreg 0x2142 mechanics, general ROMMON behavior applicable across platforms): https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/45681-720bug-passwd-45681.html
- Layer23-Switch — *Cisco Switch Password Recovery Guide* (modern unified guide across legacy IOS, IOS-XE, Nexus): https://www.layer23-switch.com/blog/cisco-switch-password-recovery.html

## 02 — Factory Reset & Flash Cleanup

- Cisco — *Configure VTP on Catalyst Switches* (confirms VTP revision number persists in vlan.dat independent of startup-config): https://www.cisco.com/c/en/us/support/docs/lan-switching/vtp/98154-conf-vlan.html
- Cisco Community — *Clearing the VLAN Database* (original Cisco engineer confirmation that `delete flash:vlan.dat` + reload is required beyond `write erase`): https://community.cisco.com/t5/other-network-architecture-subjects/clearing-the-vlan-database/td-p/13796
- NetworksTraining — *How to Delete the VLAN Database (vlan.dat) on a Cisco Switch* (walkthrough with `show flash` output): https://www.networkstraining.com/deleting-the-vlan-database-from-a-cisco-switch/
- ITSkillBuilding — *How To Reset a Cisco Switch to Factory Defaults W/Wo CLI* (step-by-step including mode-button method): https://itskillbuilding.com/cisco/device-management/reset-cisco-switch-factory-defaults/

## 03 — IOS Image & Flash Management

- NetworkLessons — *How to Upgrade Cisco IOS Image* (copy tftp: flash:, verify /md5, boot system, best-practice ordering): https://networklessons.com/system-management/upgrade-cisco-ios-image
- Cisco — *Upgrade Software Images on Catalyst 4500/4000 Series Switch* (official TFTP copy procedure and ROMMON recovery cross-reference): https://www.cisco.com/c/en/us/support/docs/switches/catalyst-4000-series-switches/27848-179.html
- Cisco — *Installing or Upgrading Cisco IOS Software* (general IOS upgrade steps, TFTP reachability verification, `show flash`): https://www.cisco.com/c/en/us/td/docs/ios/cable/configuration/guide/ios_sw_inst_upgr.html
- Study-CCNA — *How to Upgrade Cisco IOS* (Catalyst 2960-specific worked TFTP example): https://study-ccna.com/how-to-upgrade-cisco-ios/

## 04 — Backup, Restore & Config Rollback

- Cisco — *Configuration Replace and Configuration Rollback* (Cisco IOS XE System Management Configuration Guide — `archive`, `configure replace`, `configure confirm`/`configure revert timer`): https://www.cisco.com/c/en/us/td/docs/routers/ios/config/17-x/syst-mgmt/b-system-management/m_cm-config-rollback-0.html
- Cisco — *Managing Configuration Files Configuration Guide, Cisco IOS Release 15S* — Configuration Replace and Rollback (archive path setup, `show archive` example output): https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/config-mgmt/configuration/15-s/config-mgmt-15-s-book/cm-config-rollback.html
- Cisco Catalyst 3850 *System Management Configuration Guide* — Configuration Replace and Rollback (Catalyst-specific, includes `configure revert timer`): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3850/software/release/3se/system_management/configuration_guide/b_sm_3se_3850_cg/b_sm_3se_3850_cg_chapter_010010.html

## 05 — Basic Management Setup (Real SSH)

- Cisco — *Configure SSH on Routers* (official TechNote: hostname/domain-name requirement before `crypto key generate rsa`, error message explanations, `crypto key zeroize rsa`): https://www.cisco.com/c/en/us/support/docs/security-vpn/secure-shell-ssh/4145-ssh.html
- Cisco Catalyst 9200 *Configuring Secure Shell* section of the Security Configuration Guide (official RSA key + local auth sequence): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9200/software/release/17-9/configuration_guide/sec/b_179_sec_9200_cg/configuring_secure_shell__ssh_.pdf
- Cisco Catalyst 2960S Software Configuration Guide — *Setting Up the Switch to Run SSH* (manual page, matches the platform used in this guide's drills): https://www.manualowl.com/m/Cisco/WS-C2960S-48LPD-L/Manual/290393?page=171
- NetworkLessons — *How to configure SSH on Cisco IOS* (worked example including `login local` + `transport input ssh`, final running-config check): https://networklessons.com/system-management/configure-ssh-cisco-ios
- CCNA training notes (ii.pwr.edu.pl, Cisco Networking Academy-derived) — *Configuring SSH* (explicit ordering: hostname → domain → RSA keys → transport input ssh → login local): https://www.ii.pwr.edu.pl/~kano/course/module2/2.2.1.2/2.2.1.2.html

## 06 — Interface Troubleshooting & Err-Disabled Recovery

- Cisco — *Recover Errdisable Port State on Cisco IOS Platforms* (official TechNote: link-flap threshold, duplex mismatch as a common cause, syslog message formats): https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/69980-errdisable-recovery.html
- Cisco Catalyst 9600 *Command Reference* — `errdisable recovery cause` (full list of valid cause keywords including `psecure-violation`, `bpduguard`, `link-flap`): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9600/software/release/16-12/command_reference/b_1612_9600_cr/interface_and_hardware_commands.html
- Cisco Community Knowledge Base — *Recovering from ErrDisabled port due to misconfiguration* (walkthrough distinguishing manual shutdown vs err-disabled, `show interfaces status err-disabled`): https://community.cisco.com/t5/networking-knowledge-base/recovering-from-errdisabled-port-due-to-misconfiguration/ta-p/3122272
- Firewall.cx — *Cisco Catalyst Err-disabled Port State, Enable & Disable Autorecovery Feature* (worked `errdisable recovery cause psecure-violation` example with syslog output): https://www.firewall.cx/cisco/cisco-switches/cisco-switches-errdisable-autorecovery.html

## 07 — VLANs & Access Ports

- Cisco Catalyst 9000 *VLAN Configuration Guide* (VLAN creation, naming, ID ranges): https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html
- Cisco Networking Academy (CCNA course material, mirrored) — *3.2.1.5 Deleting VLANs* (confirms vlan.dat behavior referenced across files 02 and 07): http://cisnet.mywccc.org/CCNA2%20-%20Routing%20and%20Switching%20Essentials/course/module3/3.2.1.5/3.2.1.5.html
- Courseiva — *VLAN and Trunking on Cisco IOS* (CCNA-focused summary of access port config and common exam-relevant gotchas): https://courseiva.com/blog/vlan-trunking-ccna-guide

## 08 — Trunking & Native VLANs

- Cisco Catalyst 9000 *VLAN Configuration Guide — Configure VLAN Trunks* (native VLAN mismatch warning, official best-practice language, DTP behavior): https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vlan-trunks.html
- Cisco Catalyst 2960-X *Configuring VLAN Trunks* chapter (802.1Q tagging behavior, allowed VLAN list defaults): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-2_5_e/configuration_guide/b_1525e_consolidated_2960x_cg/b_1525e_consolidated_2960x_cg_chapter_01001001.pdf
- NetworkLessons — *802.1Q Native VLAN on Cisco IOS Switch* (worked `show interfaces trunk` output on both ends of a link): https://networklessons.com/switching/802-1q-native-vlan-cisco-ios-switch
- PracticalNetworking.net — *Configuring VLANs on Cisco Switches* (detailed breakdown of `show interfaces trunk` fields): https://www.practicalnetworking.net/stand-alone/configuring-vlans/

## 09 — EtherChannel & LACP

- Cisco Catalyst 9000 *EtherChannel Configuration Guide* (official LACP mechanics, 8-active/8-hot-standby link limit, MAC address allocation): https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/etherchannel/etherchannel-configuration-guide/m_ethernetchannel.html
- Cisco Catalyst 3750-X/3560-X *Configuring EtherChannels* (official active/passive mode-matching rules, "on" mode explanation, port compatibility/suspension behavior): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swethchl.html
- Cisco Catalyst 2960-X *Layer 2 Command Reference* (channel-group mode options, PAgP/LACP incompatibility note): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-2_2_e/layer2/command_reference/b_Layer2_3_1522e_2960x_cr/b_Layer2_3_1522e_2960xr_cr_chapter_010.html
- NetworkDirection.net — *EtherChannel Configuration: LACP, PAgP, and Static on Cisco IOS* (clean worked example with `interface range` bundling): https://networkdirection.net/articles/routingandswitching/etherchannelsandlags/etherchannelconfiguration/

## 10 — Port Security Fundamentals

- Cisco Catalyst 9300 *Security Configuration Guide — Port Security* (official definitions of protect/restrict/shutdown violation modes, sticky/static/dynamic MAC types): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/17-6/configuration_guide/sec/b_176_sec_9300_cg/port_security.html
- Cisco Catalyst 1000 *Security Configuration Guide — Port Security* (same official definitions, smaller fixed-config platform — closer analog to the IE 3000): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst1000/software/releases/15_2_7_e/configuration_guides/sec/b_1527e_security_c1000_cg/port_security.html
- NetworkJourney — *How to Lock Down Cisco Switch Ports with Port Security* (worked drill matching this note's structure, including violation mode comparison table): https://networkjourney.com/how-to-lock-down-cisco-switch-ports-with-port-security-2025-guide-ccnp-enterprise/

## 11 — Spanning Tree (PortFast & BPDU Guard)

- Cisco — *Understand Spanning Tree PortFast and BPDU Guard Features* (official TechNote — real-world rogue-bridging-application example, global vs per-interface config, `errdisable recovery cause bpduguard`): https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10586-65.html
- Cisco Press — *Additional STP Protection Mechanisms > Advanced STP Tuning* (BPDU Guard err-disable syslog example, `show spanning-tree interface ... detail` output): https://www.ciscopress.com/articles/article.asp?p=2995351&seqNum=3
- Study-CCNA — *STP Portfast, BPDU Guard, Root Guard Configuration* (worked config for root primary election alongside PortFast/BPDU Guard): https://study-ccna.com/spanning-tree-portfast-bpdu-guard-root-guard/
- FlackBox — *Cisco Portfast, BPDU Guard, and Root Guard* (plain-language explanation of why PortFast is dangerous without BPDU Guard): https://www.flackbox.com/portfast-bpdu-guard-and-root-guard

## 12 — VTP & the Revision Number Trap

- Cisco Catalyst 9000 *VLAN Configuration Guide — Configure VTP* (official mode behaviors — server/client/transparent, revision number persistence rules): https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/vlan/vlan-configuration-guide/configure-vtp.html
- Cisco — *Configure VTP on Catalyst Switches* (official TechNote explicitly warning about higher-revision switches overwriting a domain's VLAN database — the core of the "revision trap"): https://www.cisco.com/c/en/us/support/docs/lan-switching/vtp/98154-conf-vlan.html
- Cisco — *Migrate a Transparent VTP Domain to Server-Client VTP Domain* (official TechNote showing `show vtp status` output and revision-number verification workflow): https://www.cisco.com/c/en/us/support/docs/lan-switching/vtp/81682-vtp-migration.html
- Cisco Catalyst 4500 *Understanding and Configuring VTP* (explains how a switch inherits domain name/revision number from received advertisements): https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4500/12-2/31sg/configuration/guide/vtp.html

## 13 — Inter-VLAN Routing (SVI & Router-on-a-Stick)

- Cisco Press (CCNAv7 Companion Guide excerpt) — *Inter-VLAN Routing Operation*, *Router-on-a-Stick*, and *Inter-VLAN Routing using Layer 3 Switches* chapters (official Cisco Networking Academy curriculum — `ip routing`, SVI creation, subinterface `encapsulation dot1q` syntax): https://www.ciscopress.com/articles/article.asp?p=3089357&seqNum=4 (and seqNum=5, seqNum=6 for the following two sections)
- IPCisco — *Switch Virtual Interface (SVI): Inter VLAN Routing Explained* (SVI vs router-on-a-stick comparison table, `ip routing` requirement): https://ipcisco.com/lesson/switch-virtual-interfaces-ccnp/
- PingLabz — *Inter-VLAN Routing: SVI vs Router-on-a-Stick on Cisco IOS XE* (performance/scaling comparison — relevant to why SVI routing isn't available on L2-only platforms like the IE 3000): https://www.pinglabz.com/inter-vlan-routing/

## 14 — CDP & LLDP Neighbor Discovery

- PivIT Global — *Here's How to Benefit From Using CDP and LLDP on Cisco Devices* (protocol overview, security considerations, why CDP is Cisco-only): https://info.pivitglobal.com/resources/cdp-and-lldp-on-cisco-devices
- PeteNetLive — *Cisco IOS - Enabling LLDP* (official-style worked example: `lldp run`, `show cdp neighbors` vs `show lldp neighbors` side by side): https://www.petenetlive.com/KB/Article/0001289
- Study-CCNA — *Cisco LLDP (Link Layer Discovery Protocol)* (LLDP disabled-by-default confirmation, `show lldp neighbors detail` full output walkthrough): https://study-ccna.com/link-layer-discovery-protocol-lldp/
- NetsTuts — *LLDP & show lldp neighbors Explained* (security note on passive reconnaissance via LLDP/CDP — informed this file's security consideration paragraph): https://www.netstuts.com/show-lldp-neighbors

## 15 — DHCP Snooping & Dynamic ARP Inspection

- Cisco — *Troubleshoot Dynamic ARP Inspection (DAI) and IP Source Guard (IPSG) in Catalyst Switches* (official TechNote — confirms DHCP snooping is a prerequisite for DAI, explains the binding database relationship): https://www.cisco.com/c/en/us/support/docs/switches/lan-switch-software/222274-troubleshoot-dynamic-arp-inspection-dai.html
- Cisco Business 350 Series *CLI Guide — DHCP Snooping Commands* (official command syntax for `ip dhcp snooping`, `ip dhcp snooping vlan`, `ip arp inspection`): https://www.cisco.com/c/en/us/td/docs/switches/lan/csbms/CBS_250_350/CLI/cbs-350-cli-/dhcp-snooping-commands.html
- Cisco Community — *Why and when to use ip arp inspect trust/ip dhcp snoop trust* (Cisco VIP Alumni explanation of the trust-port design pattern used in this file's drill): https://community.cisco.com/t5/switching/why-and-when-to-use-ip-arp-inspect-trust-ip-dhcp-snoop-trust/m-p/2303055/highlight/true
- integratingIT — *CCNP SWITCH: DHCP Snooping and Dynamic ARP Inspection* (worked drill including rate-limiting configuration, matches this file's structure): https://integratingit.wordpress.com/2013/09/08/ccnp-switch-dhcp-snooping-and-dynamic-arp-inspection/

---

## How to use this list

- Cisco.com links (cisco.com/c/en/us/... and cisco.com/c/en/us/td/...) are the official documentation — treat these as ground truth when something in the notes and a third-party source disagree.
- Third-party sources (NetworkLessons, Study-CCNA, Cisco Press, community posts) are included because they show worked, runnable examples that the dense official docs sometimes bury — good for cross-checking your own lab output against a known-good example.
- Cisco TechNotes (URLs containing `/support/docs/`) are official but often written for a specific older platform (e.g. Catalyst 6500, 4500) — the underlying mechanism (config-register behavior, VTP revision logic, err-disable causes) still applies to the 2960/IE 3000 platform even when the exact prompt text differs slightly.
