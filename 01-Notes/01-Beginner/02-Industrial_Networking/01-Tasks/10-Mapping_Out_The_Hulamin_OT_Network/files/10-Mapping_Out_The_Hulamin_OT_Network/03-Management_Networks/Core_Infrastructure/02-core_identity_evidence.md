# Core identity evidence

[Core infrastructure](00-index.md)

## Is `192.168.160.110` the switch other switches call `ind-Core1-MSR`?

**Probably yes.** 29 neighbour switches list `ind-Core1-MSR` (IP 192.168.1.1) and give the core port they are cabled to. 29 of 29 of those ports match the local port in `192.168.160.110`'s own CDP table for the same switch.

Why this is still labelled "probable": the name `ind-Core1-MSR` is never read from 192.168.160.110 itself, and the advertised IP (192.168.1.1) differs from the SSH address (192.168.160.110).

| Neighbour switch | Neighbour port | Core port per neighbour | Core port per 110 CDP | Core port per 110 LLDP | CDP check |
|---|---|---|---|---|---|
| [[IND-SW-CCL1DevRoom]] | `Gi1/0/27` | `Twe2/0/14` | `Twe2/0/14` | `Twe1/0/11` | match |
| [[IND-SW-Dept34_Distr (SwitchScribe)]] | `Te1/0/27` | `Twe1/0/21` | `Twe1/0/21` | `Twe1/0/5` | match |
| [[IND-SW-EDNL_AdminMCC]] | `Gi1/1` | `Twe1/0/1` | `Twe1/0/1` | `Twe1/0/43` | match |
| [[IND-SW-EDNL_EffluentPlant]] | `Fa1/2` | `Twe1/0/6` | `Twe1/0/6` | `Twe1/0/7` | match |
| [[IND-SW-EDNL_EffluentPlant]] | `Gi1/1` | `Twe1/0/6` | `Twe1/0/6` | `Twe1/0/7` | match |
| [[IND-SW-EDNL_ElectrciansWorkShop]] | `Gi1/2` | `Twe1/0/10` | `Twe1/0/10` | — | match |
| [[IND-SW-EDNL_FoilColingTowers]] | `Gi1/2` | `Twe1/0/2` | `Twe1/0/2` | `Twe2/0/20` | match |
| [[IND-SW-EDNL_GeneratorSub]] | `Gi1/2` | `Twe1/0/5` | `Twe1/0/5` | `Twe2/0/32` | match |
| [[IND-SW-EDNL_MainServerRoom]] | `Gi1/0/28` | `Twe1/0/9` | `Twe1/0/9` | `Twe2/0/19` | match |
| [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Gi1/0/25` | `Twe2/0/3` | `Twe2/0/3` | `Twe1/0/20` | match |
| [[IND-SW-EDNL_S6MCCRoom]] | `Gi1/2` | `Twe2/0/5` | `Twe2/0/5` | `Twe1/0/1` | match |
| [[IND-SW-EDNL_S6MCCRoom]] | `Gi1/1` | `Twe2/0/5` | `Twe2/0/5` | `Twe1/0/1` | match |
| [[IND-SW-EDNL_SubStation1]] | `Gi1/1` | `Twe1/0/4` | `Twe1/0/4` | `Twe1/0/27` | match |
| [[IND-SW-EDNL_SubStationA]] | `Gi1/1` | `Twe2/0/1` | `Twe2/0/1` | `Twe2/0/20` | match |
| [[IND-SW-ENDL-INDServerRoom_Bottom]] | `Gi1/0/28` | `Twe2/0/8` | `Twe2/0/8` | — | match |
| [[IND-SW-ENDL_SUBNMcc]] | `Fa1/3` | `Twe1/0/3` | `Twe1/0/3` | `Twe2/0/2` | match |
| [[IND-SW-ENDL_SUBNMcc]] | `Gi1/2` | `Twe1/0/3` | `Twe1/0/3` | `Twe2/0/2` | match |
| [[IND-SW_CCL2_CompRoom]] | `Gi1/0/49` | `Twe2/0/10` | `Twe2/0/10` | `Twe1/0/30` | match |
| [[IND-SW_CCL2_OS1]] | `Gi1/0/25` | `Twe2/0/12` | `Twe2/0/12` | `Twe2/0/19` | match |
| [[IND-SW_FS14MCC]] | `Gi1/0/9` | `Twe2/0/2` | `Twe2/0/2` | `Twe2/0/1` | match |
| [[IND-SW_FS14MCC]] | `Te1/1/1` | `Twe2/0/2` | `Twe2/0/2` | `Twe2/0/1` | match |
| [[IND-SW_FS15MCC]] | `Gi1/0/5` | `Twe2/0/6` | `Twe2/0/6` | `Twe2/0/10` | match |
| [[IND-SW_FS15MCC]] | `Gi1/0/25` | `Twe2/0/6` | `Twe2/0/6` | `Twe2/0/10` | match |
| [[Unclassified-192.168.160.105]] | `Gi0/11` | `Twe1/0/7` | `Twe1/0/7` | `Twe2/0/48` | match |
| [[Unclassified-192.168.160.115]] | `Gi0/2` | `Twe1/0/8` | `Twe1/0/8` | — | match |
| [[Unclassified-192.168.160.121]] | `Gi1/6` | `Twe1/0/27` | `Twe1/0/27` | `Twe2/0/5` | match |
| [[Unclassified-192.168.160.121]] | `Gi1/1` | `Twe1/0/27` | `Twe1/0/27` | `Twe2/0/5` | match |
| [[Unclassified-192.168.160.122]] | `Gi1/1/1` | `Twe2/0/13` | `Twe2/0/13` | — | match |
| [[Unclassified-192.168.160.127]] | `Gi1/0/25` | `Twe1/0/11` | `Twe1/0/11` | `Twe1/0/3` | match |

## Is `192.168.160.107` the switch called `IND-SW-CD-CORE`?

Yes, on the evidence available: every neighbour that reports a device with IP 192.168.160.107 gives the hostname `IND-SW-CD-CORE.hulamin.co.za`, including `192.168.160.110`'s own CDP table.

## SwitchScribe model field

SwitchScribe reports `N5K-C5672UP` for 192.168.160.110, which has Twe/Hu interface names and is described as a C9500-48Y4C by its neighbours. 44 switches in the inventory have a SwitchScribe model that differs from what their neighbours advertise (16 of them show `C9500-48Y4C`, the core's model). The model field appears to take a neighbour's platform in some cases. Neighbour-advertised models are used in these notes and the disagreement is stated every time.
