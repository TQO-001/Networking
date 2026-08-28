Learn at least a general amount of how everything you're working with works

==You do not need deep electrical engineering knowledge to work in Operational Technology (OT)==, but you do need a foundational understanding of how software, networks, and controllers interact with physical equipment.

Operational Technology (OT) networking involves connecting physical industrial systems—like factory machines, valves, and power grids—using network cables and protocols

# 2. Theory
This section starts from zero on purpose. If you already know Ohm's Law backwards, skim it — but everything from here through the DIN rail section assumes you're walking in cold, because that's exactly where most interns start (they just through me in fire and said survive).

---
## 2.1 Electricity Fundamentals
Before any of the wiring in Section 3 will make sense, you need four words to actually mean something: **voltage, current, resistance, power.**
![[2021-01-young-fig2.gif|344]]
### The water-pipe analogy
The easiest mental model, and the one almost every electrician and engineer reaches for first:

- **Voltage (V, measured in volts)** is like water pressure — how hard the electricity is being "pushed." It's the difference in electrical potential between two points.
- **Current (I, measured in amps)** is like the rate of water flow through the pipe — how much charge is actually moving past a point per second.
- **Resistance (R, measured in ohms, Ω)** is like the pipe's narrowness — how much the material fights the flow. A thin pipe (or thin wire) resists flow more than a wide one.
- **Power (P, measured in watts)** is the actual work being done — pressure times flow, i.e. how much energy is being delivered per second.

### Ohm's Law
This is the one equation you'll use constantly:

```
V = I × R        (Voltage = Current × Resistance)
```

Rearranged, that also gives you `I = V / R` and `R = V / I`. If you know any two of the three, you can always find the third. A simple memory trick is the "Ohm's triangle": put V on top, I and R on the bottom — cover the one you want to find, and whatever's left tells you whether to multiply or divide.

Power ties in as:

```
P = V × I        (Power = Voltage × Current)
```

This is why the PWR-IE**240W**-PCAC-L is rated 54V DC at 4.5A — multiply those and you get roughly **240W**, which is the number in its part name.

### AC vs. DC
- **AC (Alternating Current)** is what comes out of a wall socket — the current constantly reverses direction, oscillating back and forth (50 or 60 times a second, depending on your country's grid). It's efficient to generate and transmit over long power-line distances, which is why mains power is AC.
- **DC (Direct Current)** flows in one constant direction — think batteries, or the inside of almost every electronic device. It's what chips, LEDs, and switch electronics actually need to operate.
![[Pasted image 20260828121835.png|347]]

That mismatch is exactly why the PWR-IE240W-PCAC-L exists: it's an **AC-to-DC power supply**. It takes the 100–240V AC coming out of the wall, converts (rectifies) it down to a clean, stable 54V DC, and that's what actually feeds the switch. ==Every "power brick" or "power supply" you've ever plugged something into is doing this same AC→DC job internally==, just usually hidden inside a plastic case instead of exposed on a DIN rail.

---
## 2.2 Electrical Wiring
>[Check this out](https://www.victronenergy.com/media/pg/The_Wiring_Unlimited_book/en/dc-wiring.html)

This is the part where getting something wrong is actually dangerous — so it's worth slowing down on or it's six feet under for you my boy.

### Wire gauge (AWG) — why wire thickness matters
Wire is sized using the **American Wire Gauge (AWG)** system. Counter-intuitively, a _smaller_ gauge number means a _thicker_ wire — 12 AWG is thicker than 18 AWG.
![[Pasted image 20260828121921.jpg|363]]![[Pasted image 20260828124214.jpg|272]]

Thicker wire matters because of resistance: current flowing through a wire generates heat (this is the same "resistance" from Ohm's Law), and a wire that's too thin for the current it's carrying will heat up, degrade its insulation, and become a fire risk. The maximum current a wire can safely carry is called its **ampacity**. A rough sense of scale:

- 22–18 AWG: low-current signal/control wiring, electronics
- 14–12 AWG: general power distribution, the kind of wiring in your walls at home
- 6 AWG and thicker: high-current industrial and feeder applications

Ampacity isn't just about the gauge number, though — it also depends on the insulation's temperature rating, how many wires are bundled together (more wires bundled together trap more heat), and the ambient temperature around the cable. That's why the spec sheet for a given wire type gives you a whole table, not one number.

There's a second, separate reason to upsize a wire beyond ampacity: **voltage drop**. On long DC runs especially, resistance in the wire itself "eats" some of the voltage before it reaches the far end. This is why 12–16 AWG is recommended for the PSU-to-switch DC run in Section 3.3, even though the switch's 4.5A draw wouldn't strictly need wire that thick just to avoid overheating.

### Terminal blocks and torque
The AC and DC connections on both the switch and the PSU use **pluggable screw terminal blocks** — you strip a short length of insulation off the wire end, insert the bare copper into the terminal, and tighten a small screw to clamp it in place.
![[F7638129-01.webp|360]]

Two failure modes to watch for:

- **Under-tightened:** a loose connection has higher resistance at that single point, which concentrates heat right there. Under load, this can arc, melt the terminal, or just intermittently drop the connection.
- **Over-tightened:** you can shear a strand of wire, crack the terminal block's plastic housing, or strip the screw threads.

That's why manufacturers publish a specific **torque spec** (in inch-pounds or newton-metres) for each terminal — "snug" isn't good enough on anything carrying real current. A torque screwdriver takes the guesswork out of it.

### Grounding and bonding (these are two different things)
People use "grounding" and "bonding" almost interchangeably, but they solve two different problems:

- **Grounding (earthing):** a physical connection between the electrical system and the earth itself, giving fault current — or static, or a lightning surge — a safe path to dissipate into instead of through a person or piece of equipment.
- **Bonding:** connecting metal parts that don't normally carry current (like the switch's chassis, or a cabinet door) together so they all sit at the same electrical potential. If a live wire ever touches one of those parts, bonding gives the fault current a low-resistance path back to trip a breaker fast, rather than leaving the metal "live" and waiting for someone to touch it.

In practice on the IE-3300/PSU setup, this is why Section 3.5 has you connect the chassis ground lug on _both_ the switch and the PSU to a common ground/PE busbar, and why that step happens **before** any power wiring goes in — **you want the fault path to already exist before there's anything to fault.**

### SELV — why the 54V DC side is treated differently from the AC side
**SELV (Safety Extra-Low Voltage)** is a safety classification for circuits where the voltage is low enough, and isolated enough from higher-voltage circuits, that it's considered safe to touch under both normal and single-fault conditions — generally at or below 60V DC. This is a large part of why PoE and PoE+ (44–57V DC) were designed to sit under that ~60V ceiling: it lets installers run and terminate those cables without the same electrician-level precautions the 100–240V AC input side genuinely requires.

That doesn't mean the DC side is "safe to be careless with" — you can still short it, still generate arcs at high current, still damage equipment — but it does explain why the AC input terminal block on the PSU has a dedicated safety cover and the DC output side doesn't need the same isolation.

### Circuit protection
Any AC branch circuit feeding the PSU should be protected by an appropriately sized **circuit breaker** upstream — this is what trips and cuts power if something downstream draws too much current (a short circuit, a fault, an overloaded run) instead of letting the wiring overheat. This protection is meant to be provided by the building's electrical installation, not the PSU itself — it's one of the reasons hardwiring into a panel is a job for someone qualified to size and install that breaker correctly.

### The practical safety sequence
Pulling all of the above into one habit worth building for life: **ground first, verify, then power.** Concretely — confirm the circuit is de-energized and locked out before you touch a terminal, land the ground/bonding connections first, double-check torque on every screw before power goes anywhere near the assembly, and only then apply AC power and add DC wiring downstream from it.

---
## 2.3 Power Supplies & Power over Ethernet (PoE)
### What the PSU is actually doing
The PWR-IE240W-PCAC-L is an **AC-DC switch-mode power supply**. Internally it rectifies the incoming AC to DC, then uses high-frequency switching circuitry to regulate that down to a stable, clean 54V DC output — "switch-mode" just means it's doing this efficiently by rapidly switching a transistor on and off, rather than the older, bulkier, and less efficient method of using a big linear transformer.

### PoE and PoE+ — power riding on the data cable
Power over Ethernet lets a switch deliver both data and DC power to a downstream device (a camera, an access point, a phone) over the same Ethernet cable, so you don't need a separate power run to every device. There are three widely used IEEE standards:

|Standard|Common name|Power at the switch (PSE)|Power guaranteed at the device (PD)|Voltage range|
|---|---|---|---|---|
|802.3af|PoE|~15.4W|12.95W|44–57V DC|
|802.3at|PoE+|~30W|25.5W|50–57V DC|
|802.3bt (Type 3/4)|PoE++|60–90W|51–71W|~50–57V DC|

The gap between "power at the switch" and "power at the device" is line loss — some power is lost as heat in the Ethernet cable itself, which is the same resistance-and-heat idea from the wire gauge section above, just happening inside a much thinner Cat5/6 conductor.

This is also the direct answer to the voltage question from Section 1.2: the IE-3300 needs 48V DC input to support PoE and 54V DC input to support PoE+ on its downstream ports. The PWR-IE240W-PCAC-L's 54V DC output isn't an odd coincidence — it's specifically sized to unlock full PoE+ capability on the switch.

---
## 2.4 Rugged Industrial Networking
### Why Rugged Industrial Networking Matters
Rugged networks ensure reliable, 24/7 connectivity in harsh industrial environments — where heat, vibration, EMI, and mission-critical operations leave no room for failure.

- **Goal:** Ensure reliable, 24/7 connectivity in harsh industrial environments where failure is not an option
- **Target Environments:** Factories, energy facilities, transportation networks, and mission-critical IIoT settings
- **Key Challenge:** Standard enterprise hardware fails under industrial stress; ruggedized hardware is required for stability

### Environmental Challenges Addressed
- **Extreme Conditions:** Resists heat, dust, moisture, and vibration that damage standard switches
- **Electromagnetic Interference (EMI):** Shielded cabling and industrial-grade optics counteract interference from heavy machinery and motors
- **Real-Time Demands:** Supports low latency and fast redundancy for always-on operations

### Network Architecture (3-Tier Design)
1. **Access & Edge:** Connects field devices (sensors, PLCs, cameras) directly in harsh conditions
2. **Aggregation & Backbone:** Combines multiple edge networks for high-capacity links across plants or zones
3. **High-Performance Core:** Supports SCADA systems, control centers, and critical workloads with high bandwidth

### Industrial vs. Enterprise Switches
- **Industrial Switches:** Built for ruggedness, extreme temperature tolerance, and 24/7 uptime
- **Enterprise Switches:** Generally not suited for harsh physical environments or high EMI

### Recommended Brands & Products
- **Vendors:** Cisco, Extreme Networks, HPE Aruba, Huawei, Mellanox, Juniper
- **Key Products:**
    - Ruggedized switches
    - Industrial-grade optical modules and transceivers
    - 400G/800G Ethernet switches for AI-ready data centers

### Key Deployment Scenarios
- Manufacturing Sites
- Power & Utilities
- Transportation Networks
- Oil & Gas Facilities

### Frequently Asked Questions Covered
- Differences between industrial and enterprise switches
- Brand recommendations for rugged products
- Selection criteria for switches and optical modules
- Warranty, technical support, and module interchangeability

---
## 2.5 DIN Rail
A DIN rail is ==a standardized metal strip used to mount electrical and industrial control equipment inside enclosures and racks==.
![[Pasted image 20260828113426.png|301]]![[Pasted image 20260828113556.jpg]]

### What is a DIN Rail?
- It is a universal mounting track named after the German standards organization (_Deutsches Institut für Normung_)
- Most rails are made from cold-rolled carbon steel with a zinc-plated or galvanized finish to resist rust
- It provides strong mechanical support, but it does not normally carry electrical current

### Common Types of DIN Rails
- **TS35 (Top Hat Rail):** The most common industry standard, measuring 35 mm wide. Comes in depths of 7.5 mm (standard) and 15 mm (deep)
- **TS15 (Mini Rail):** A smaller 15 mm wide rail used for compact spaces
- **TS32 (G-Section Rail):** An older asymmetrical profile shaped like the letter G

### Why Use a DIN Rail?
- **Saves Time:** You snap components onto the track instead of drilling and tapping custom screw holes for every single device
- **Universal Fit:** Parts from different manufacturers fit the same standard track
- **Easy Maintenance:** You can slide, remove, or upgrade individual circuit breakers and terminal blocks without tearing down the whole panel

---
