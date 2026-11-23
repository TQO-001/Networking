# Open issues and questions - Network_07_EDNL_MainServerRoom_Provisional

[Network index](00-index.md)

## Verification tasks

- [ ] Confirm which department / area this network serves.
- [ ] Confirm the physical location of every switch (see each switch note).
- [ ] Resolve: multiple heads (lateral link below the core).
- [ ] Resolve: 27 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data).
- [ ] Collect the neighbour switches listed in 03-connected_devices.
- [ ] Identify 27 unidentified device(s): MAC/GUID-only neighbours and active ports with no CDP/LLDP data.
- [ ] Confirm the cable type (UTP / fibre) on each link; SwitchScribe media text is shown in the link table where reported.

## Evidence limits

- CDP and LLDP were collected through SwitchScribe on 2026-11-19. A switch that failed collection is described only from its neighbours' reports.
- Link media (UTP/fibre) is the speed/media text LLDP advertised; it is not a measured cable type.
