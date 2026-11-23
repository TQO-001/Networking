# Mapping Out the Hulamin OT Network

How the plant network is documented, from method to captures to notes. Start here.

## 1. Folder map

| Where | What it is |
|---|---|
| [[00-Holly-Bibley]] | Theory: how to draw VLANs, devices, ports, IPs and connections |
| [[01-Documentation_Guide]] | The command checklist to capture a switch |
| `02-Dept_34/` | Department 34 (SL7), hand-documented, 18 switches. Start at [[00-sl7_index]] |
| `03-Management_Networks/` | The remaining management switches, split into provisional networks. Start at [[00-management_networks_index]] |
| `04-Holly_Bibley_Exports/` | Project exports from the Holly Bibley tool (JSON) |
| `_Archive/` | Your files as uploaded, unchanged |
| `_Tools/` | `split_switchscribe.py` |

### Inside 03-Management_Networks

| Where | What it is |
|---|---|
| [[01-network_overview]] | The cores, the proposed network-boundary table, how networks attach |
| [[02-network_boundary_method]] | How boundaries were decided, with the evidence |
| [[03-open_questions_and_verification]] | Every unresolved question and verification task |
| `Core_Infrastructure/` | `ind-Core1-MSR` (probable) and `IND-SW-CD-CORE`, with identity evidence |
| `Network_01_...` to `Network_34_...` | One folder per provisional network: `00-index`, `01-topology_and_connections`, `02-switch_inventory`, `03-connected_devices`, `04-open_issues_and_questions`, `Switches/` |
| `Unplaced_Switches/` | Switches that failed collection and have no neighbour data |
| `_Source/` | The SwitchScribe report split into notes, unchanged as evidence |

## 2. Progress

### Method

- [x] Holly Bibley theory written
- [x] Documentation guide written

### Department 34

- [x] 18 of 18 switches captured and documented ([[00-sl7_index]])
- [x] Raw CLI kept for all 18 ([[10-switch_reference_and_raw_cli]])
- [ ] Open issues resolved ([[09-open_issues_and_questions]])

### Management networks

- [x] SwitchScribe run: 102 of 116 switches collected
- [x] Core layer identified and boundaries drawn ([[01-network_overview]])
- [x] 34 provisional networks documented
- [ ] Departments confirmed (0 of 34)
- [ ] 14 switches captured by hand ([[03-open_questions_and_verification]])
- [ ] 11 unplaced switches placed in a network

### Holly Bibley diagrams

- [x] MCC_Room exported (`04-Holly_Bibley_Exports/01-mcc_room.holly-bibley.json`)
- [ ] Other areas drawn

## 3. Worth a look

- **T0247 and the VMware host** conflict between the room notes and the Holly Bibley export. Both observations are recorded, neither chosen: see the end of [[09-open_issues_and_questions]].
- **`ind-Core1-MSR` is probably `192.168.160.110`.** The evidence is in `03-Management_Networks/Core_Infrastructure/02-core_identity_evidence.md`.

## 4. Naming

- Files at the chapter root are `NN-Title`. Folders are `NN-Name`.
- A leading underscore marks support material: this index, `_Archive`, `_Tools`, `_Source`.
- Network folders are named `Network_NN_<head switch>_Provisional`. The head switch name is a fact from the data; it is **not** a department. Rename the folder when the department is confirmed.
- Switch notes are named exactly as the switch was collected, so `[[IND-SW-CCL1PLCC]]` links work from anywhere.

## 5. What changed in this reorganisation

| Before | After |
|---|---|
| `03-Management_Switches/` (flat, 116 switch notes) | `03-Management_Networks/` with networks, core, unplaced switches and `_Source/` |
| The old SwitchScribe notes | `03-Management_Networks/_Source/Source_Notes/<switch> (SwitchScribe).md`, content unchanged |
| Large groups of switches from the first pass | Rebuilt per network with the core layer as the boundary (see [[02-network_boundary_method]]) |
| `02-Dept_34/` | Unchanged, plus a clearly marked section at the end of `09-open_issues_and_questions` |
| Everything else | As in the previous reorganisation; originals are in `_Archive/` |
