# Unplaced switches

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]]

11 switches in the inventory could not be placed in any network. All 11 failed collection, so they contributed no neighbour data, and no other switch reported them as a neighbour.

**Their names are not evidence of where they belong.** For example, `Dept34` is not placed in Department 34 because nothing in the topology connects it to `IND-SW-Dept34_Distr`.

| Switch | IP | Collection | Failure | Neighbour reports |
|---|---|---|---|---|
| [[CAMPS DRIFT REMELT BAILER (Ref Henri)]] | 192.168.160.50 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[Dept34]] | 192.168.160.72 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[IND-SW-CD_A19PLC]] | 192.168.160.83 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[IND-SW-CD_CNGGas]] | 192.168.160.85 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[IND-SW-CD_PlatePlantStrecher]] | 192.168.160.46 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[IND-SW-EDIIT_Foiloffice]] | 192.168.160.88 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[IND-SW-EDNL_CompHouse1]] | 192.168.160.5 | failed | NetmikoAuthenticationException: Login failed: 192.168.160.5 | 0 |
| [[IND-SW-EDNL_FoilSepratorsSubN]] | 192.168.160.66 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[IND-SW-EDNL_S4MCCRoomTop]] | 192.168.160.34 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[Unnamed Switch 192.168.160.17]] | 192.168.160.17 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |
| [[Unnamed Switch 192.168.160.68]] | 192.168.160.68 | failed | NetmikoTimeoutException: TCP connection to device failed.  Common causes of this problem a | 0 |

## To do

- [ ] Capture [[CAMPS DRIFT REMELT BAILER (Ref Henri)]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[Dept34]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[IND-SW-CD_A19PLC]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[IND-SW-CD_CNGGas]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[IND-SW-CD_PlatePlantStrecher]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[IND-SW-EDIIT_Foiloffice]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[IND-SW-EDNL_CompHouse1]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[IND-SW-EDNL_FoilSepratorsSubN]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[IND-SW-EDNL_S4MCCRoomTop]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[Unnamed Switch 192.168.160.17]] by hand ([[01-Documentation_Guide]]) and place it in a network.
- [ ] Capture [[Unnamed Switch 192.168.160.68]] by hand ([[01-Documentation_Guide]]) and place it in a network.
