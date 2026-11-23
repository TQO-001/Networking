# Open issues and questions - Network_21_CD-Effluent_6A_Provisional

[Network index](00-index.md)

## Verification tasks

- [ ] Confirm which department / area this network serves.
- [ ] Confirm the physical location of every switch (see each switch note).
- [ ] Resolve: IND-SW-CD-Effluent_6A uplink seen from one side only.
- [ ] Resolve: IND-SW-CD_CoolingTower uplink seen from one side only.
- [ ] Resolve: multiple heads (lateral link below the core).
- [ ] Resolve: 22 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data).
- [ ] Resolve: SwitchScribe model field disagrees with neighbour-advertised model on some members.
- [ ] Identify 22 unidentified device(s): MAC/GUID-only neighbours and active ports with no CDP/LLDP data.
- [ ] Confirm the cable type (UTP / fibre) on each link; SwitchScribe media text is shown in the link table where reported.

## Evidence limits

- CDP and LLDP were collected through SwitchScribe on 2026-11-19. A switch that failed collection is described only from its neighbours' reports.
- Link media (UTP/fibre) is the speed/media text LLDP advertised; it is not a measured cable type.
