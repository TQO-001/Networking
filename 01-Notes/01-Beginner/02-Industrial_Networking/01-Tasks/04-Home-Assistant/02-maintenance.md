# 1. Issues To Resolve
## Overview Tab
### Power Monitoring
1. **ADMTRM_1** (Card 13) --> **Error**: Entity is currently unavailable
	- ENERGY Power 
	- ENERGY Current
	- ENERGY Voltage
![[maintenance-01-power_monitoring.png]]
2. **Engineering Office** (Card 8) --> **Unavailable**
	- ENGPMVoltageAvg
	- ENGPMCurrentAvg
	- ENGPMActivePower
### Power Meter
1. **Engineering Office** (Card 3) --> **Error**: Entity is currently unavailable
	- ENGPMVoltageAvg
	- ENGPMCurrentAvg
	- ENGPMActivePower
2. **Engineering Office** (Card 4) --> **Error**: Entity is currently unavailable
	- ENGPMCurrentA
	- ENGPMCurrentB
	- ENGPMCurrentC
![[maintenance-02-power_meter.png]]

### Power Control
1. Card 6 --> **Error**: Entity not found
	- switch.masonaircon
![[maintenance-03-power_control.png|298]]

> [!TIP] ### ***Semi-Resolved***
I used the search bar and looked up **switch.masonaircon** and selected the first option
![[maintenance-04-power_control.png|298]]

> [!NOTE] **NOTE** - I cannot turn it on 

### Devices
1. **IT Office REC Fan** (Card 7) --> **Error**: Entity not found
	 - sensor.time.date
 ![[maintenance-05-devices.png|519]]

### Temperature
1. **Engineering Office - TH01** (Card 1-2)  --> **Error**: Entity is currently unavailable
	- sensor.eng_office_th01_temperature
	- sensor.eng_office_th01_humidity
2. **Outside** (Card 3-4)  --> **Error**: Entity is currently unavailable
	- sensor.eng_office_th01_temperature_2
	- sensor.eng_office_th01_humidity_2
3. ** Battery** (Card 5) --> **Unavailable**
	- Outside TH01
	- Eng Office TH01

## Admin Building Tab
### Water Geysers
1. K007 Water Geyser --> Unavailable

## Planning Tab
### Planning Power Monitoring
1. **Planning Office Aircon3** (Card 5) --> **Error**: Entity is currently unavailable
	- ENERGY Power 
	- ENERGY Current
	- ENERGY Voltage
### Planning Power Control
1. **Shane_Office_Aircon** (Card 12) --> Unavailable

## Grafana Tab - Dashboards
### Admin Block
1. Admin Tea Room1 Boiler --> All: No Data
### Admin Block - Under Counter Water Geyser
1. Admin Tea Under Counter Water Geyser - All: No Data
### Admin Block Hydroboil Monitoring
1. K006 Exec Hydroboil Status - No Data
2. K007 Hydroboil Status
### Coronavirus update
1. Corona Covid-19 - No Data
_Is this still necessary?_
### Power
1. Engineering building/Office - All: No Data
### Power Monitoring
1. Creche Energy Saving Aircon Test - No Data
2. Planning Office Aircon3
3. Shane Aircon
### Temp and humidity
1. Outside temperature/humidity - All: No data
2. Engineering temperature/humidity - All: No data

## HACS (Home Assistant Community Store) Tab
>**Not loaded in Lovelace**
>You have 3 Lovelace elements that are not loaded properly in Lovelace.

![[maintenance-06-hacs_home_assistant_community.png]]

![[maintenance-07-hacs_home_assistant_community.png]]

> [!TIP] ### ***Resolved***
I Just redownloaded them...

![[maintenance-08-hacs_home_assistant_community.png]]

## Node-RED Tab
### Office Power Meter
![[maintenance-09-office_power_meter.png]]

## Zigbee2mqtt
- 502: Bad Gateway
![[maintenance-10-zigbee2mqtt.png]]


