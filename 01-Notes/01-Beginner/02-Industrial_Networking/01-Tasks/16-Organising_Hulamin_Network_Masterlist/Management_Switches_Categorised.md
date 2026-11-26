# Management Switches - Categorised Review

> [!info] How this list was organised
> - **Name mismatch** is based on a direct comparison of the PDF's `Hostname` and `Actual Name` columns.
> - Devices are included under every heading that applies. For example, a device can have a name mismatch and also be listed as Telnet or Unclassified.
> - The PDF records Telnet for the devices below, but it does **not** contain a separate SSH-status column. The Telnet entries are reproduced as recorded; SSH availability should be verified on the devices.
> - `—` means the PDF does not provide a value for that field.

## PDF colour legend

<table style="width:100%; border-collapse:collapse;">
  <thead>
    <tr style="background-color:#1F497D; color:#FFFFFF;">
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Row colour</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Meaning in PDF</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#00B050; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">Green</td><td style="padding:6px; border:1px solid #B7C9D6;">Good</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">Yellow</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#00B0F0; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">Blue</td><td style="padding:6px; border:1px solid #B7C9D6;">Good and mapped</td></tr>
    <tr style="background-color:#D995D5; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">Pink</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic and mapped</td></tr>
    <tr style="background-color:#C00000; color:#FFFFFF;"><td style="padding:6px; border:1px solid #B7C9D6;">Red</td><td style="padding:6px; border:1px solid #B7C9D6;">Not in use</td></tr>
  </tbody>
</table>

---

## Name mismatch

These are devices where the `Hostname` and `Actual Name` values in the PDF do not match.

<table style="width:100%; border-collapse:collapse;">
  <thead>
    <tr style="background-color:#1F497D; color:#FFFFFF;">
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">IP address</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Type</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Hostname</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Actual name</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">PDF status</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.5</td><td style="padding:6px; border:1px solid #B7C9D6;">Moxa Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-Comphouse0</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-Comphouse1</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.116</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_CompH5</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_CompH6</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.120</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CDR-SVRM1</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CDR-SVRM2</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.122</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-S5</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-S6</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.123</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-CD-SW-Sub6</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-CD-SW-Sub7</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#D995D5; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.124</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_PTTL_PLC1</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_PTTL_PLC2</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic and mapped</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.127</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-Lab0</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-Lab1</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
  </tbody>
</table>

## Telnet only (no SSH)

The PDF marks these devices as `Telnet`. The source does not separately show whether SSH is disabled, so confirm SSH availability before treating the access method as definitively Telnet-only.

<table style="width:100%; border-collapse:collapse;">
  <thead>
    <tr style="background-color:#1F497D; color:#FFFFFF;">
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">IP address</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Hostname</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Actual name</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">PDF note</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">PDF status</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.33</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_S4PulPit</td><td style="padding:6px; border:1px solid #B7C9D6;">—</td><td style="padding:6px; border:1px solid #B7C9D6;">Telnet</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.123</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-CD-SW-Sub6</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-CD-SW-Sub7</td><td style="padding:6px; border:1px solid #B7C9D6;">Telnet / Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#D995D5; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.124</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_PTTL_PLC1</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_PTTL_PLC2</td><td style="padding:6px; border:1px solid #B7C9D6;">Telnet</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic and mapped</td></tr>
  </tbody>
</table>

## Investigate

These devices are explicitly marked for investigation or attention in the PDF.

<table style="width:100%; border-collapse:collapse;">
  <thead>
    <tr style="background-color:#1F497D; color:#FFFFFF;">
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">IP address</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Type</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Hostname</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Actual name</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">PDF note</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">PDF status</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#C00000; color:#FFFFFF;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.83</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CD_A19PLC</td><td style="padding:6px; border:1px solid #B7C9D6;">—</td><td style="padding:6px; border:1px solid #B7C9D6;">Investigate</td><td style="padding:6px; border:1px solid #B7C9D6;">Not in use (red row)</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.118</td><td style="padding:6px; border:1px solid #B7C9D6;">—</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CCL2_Distr</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CCL2_Distr</td><td style="padding:6px; border:1px solid #B7C9D6;">Needs Attention</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
  </tbody>
</table>

## Unclassified

These devices are explicitly marked `Unclassified`, `Mapped but Unclassified`, or `Telnet/Unclassified` in the PDF.

<table style="width:100%; border-collapse:collapse;">
  <thead>
    <tr style="background-color:#1F497D; color:#FFFFFF;">
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">IP address</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Type</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Hostname</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">Actual name</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">PDF note</th>
      <th style="padding:7px; border:1px solid #B7C9D6; text-align:left;">PDF status</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.105</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-FM_CMPM</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-FM_CMPM</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.106</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">CDR_Water_Recovery-SW</td><td style="padding:6px; border:1px solid #B7C9D6;">CDR_Water_Recovery-SW</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.107</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CD-CORE</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CD-CORE</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.110</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">ind-Core1-MSR</td><td style="padding:6px; border:1px solid #B7C9D6;">ind-Core1-MSR</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#D995D5; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.112</td><td style="padding:6px; border:1px solid #B7C9D6;">—</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-SL7Mcc</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-SL7Mcc</td><td style="padding:6px; border:1px solid #B7C9D6;">Mapped but Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic and mapped</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.114</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND_SW_CD_DieselDispenser</td><td style="padding:6px; border:1px solid #B7C9D6;">IND_SW_CD_DieselDispenser</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.115</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-Creche</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-Creche</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.116</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_CompH5</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL_CompH6</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified; name mismatch</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#D995D5; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.117</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-Dept34_Distr</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-Dept34_Distr</td><td style="padding:6px; border:1px solid #B7C9D6;">Mapped but Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic and mapped</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.120</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CDR-SVRM1</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CDR-SVRM2</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified; name mismatch</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.121</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-Lab</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-Lab</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.122</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-S5</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-S6</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified; name mismatch</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.123</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-CD-SW-Sub6</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-CD-SW-Sub7</td><td style="padding:6px; border:1px solid #B7C9D6;">Telnet/Unclassified; name mismatch</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.125</td><td style="padding:6px; border:1px solid #B7C9D6;">VM</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SWD01.plant.hulamin.co.za</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SWD01.plant.hulamin.co.za</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#D995D5; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.126</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-CM-Crane</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-CM-Crane</td><td style="padding:6px; border:1px solid #B7C9D6;">Mapped but Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic and mapped</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.127</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-Lab0</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-EDNL-Lab1</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified; name mismatch</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.128</td><td style="padding:6px; border:1px solid #B7C9D6;">Switch</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CDHL-HRM-MARAS</td><td style="padding:6px; border:1px solid #B7C9D6;">IND-SW-CDHL-HRM-MARAS</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
    <tr style="background-color:#FFC000; color:#111111;"><td style="padding:6px; border:1px solid #B7C9D6;">192.168.160.250</td><td style="padding:6px; border:1px solid #B7C9D6;">VM</td><td style="padding:6px; border:1px solid #B7C9D6;">—</td><td style="padding:6px; border:1px solid #B7C9D6;">ind-fweng1</td><td style="padding:6px; border:1px solid #B7C9D6;">Unclassified</td><td style="padding:6px; border:1px solid #B7C9D6;">Problematic</td></tr>
  </tbody>
</table>

---

> [!note] Items that overlap
> - `192.168.160.116`, `.120`, `.122`, `.123`, and `.127` are both **Name mismatch** and **Unclassified**.
> - `192.168.160.123` is also marked **Telnet**.
> - `192.168.160.124` is both **Name mismatch** and **Telnet**.
> - `192.168.160.118` is included under **Investigate** because the PDF says `Needs Attention`.
