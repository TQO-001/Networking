# 09 - Modbus Power Meter

**Time:** 90 to 120 minutes | **Difficulty:** Medium to Hard | **Needs:** files 02, 03, 04; Python
**Mirrors:** tabs "Office Power Meter" and "Power Meter", plus the subflow "Power Meter Schneider PowerLogic PM5110"

---

## PROGRESS
- [ ] Modbus concepts understood (registers, function code 3, float32)
- [ ] Python Modbus simulator running
- [ ] Node-RED reads one value correctly
- [ ] Six values read and shown on gauges
- [ ] Table-driven version built
- [ ] Safe-polling rules understood
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Your office power meter speaks Modbus TCP. Modbus is the most common industrial protocol in the world, so being able to read it with Node-RED is a real, marketable skill. This is the strongest CV item in the whole set.

---

## 2. CONCEPTS

| Term | Meaning |
|---|---|
| Modbus TCP | A simple request/response protocol over the network, port 502 |
| Register | A 16-bit slot of data in the device |
| Holding register | A readable (and sometimes writable) register. Read with **function code 3** |
| Unit ID (slave ID) | Which device on the gateway you are talking to (your flows use 255 for the meter) |
| Address | The register number to start at (for example 3059) |
| Quantity | How many registers to read |
| Float32 | A decimal number stored across **two** registers (32 bits) |
| Big-endian | The high-order word comes first |
| Polling | Asking the device on a timer |

### How your workplace flow works
```
inject (Pulse Source)
  -> function: { fc: 3, unitid: 255, address: 3059, quantity: 2 }
  -> modbus-flex-getter (host/port come from the modbus-client config)
  -> modbus-response
  -> function: take the 4 bytes, readFloatBE(), toFixed(2)
  -> gauge + mqtt out
```
Registers read at work (from the node names): 3001 Current A, 3003 Current B, 3005 Current C, 3009 Current Avg, 3027 Voltage L-L Avg, 3059 Active Power, 2705 Active Energy. The exact register map is in the meter manual; always check it when in doubt.

The subflow for the PM5110 reads a whole block (for example 120 registers starting at 2999) and converts many values at once using a table of names and offsets. That is the efficient, table-driven approach.

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Step 1: Python Modbus simulator (`C:\node-red-lab\fake_pm.py`)
```python
import asyncio
import math
import random
import struct
import time

from pymodbus.server import StartAsyncTcpServer
from pymodbus.datastore import (
    ModbusSequentialDataBlock,
    ModbusSlaveContext,
    ModbusServerContext,
)

def f32_regs(x):
    """Pack a float into two 16-bit registers, big-endian (high word first)."""
    hi, lo = struct.unpack(">HH", struct.pack(">f", x))
    return [hi, lo]

async def updater(store):
    energy = 1000.0
    t0 = time.time()
    while True:
        t = time.time() - t0
        base = 15 + 5 * math.sin(t / 30)               # slow swing in amps
        a = base + random.uniform(-0.3, 0.3)
        b = base + random.uniform(-0.3, 0.3)
        c = base + random.uniform(-0.3, 0.3)
        avg = (a + b + c) / 3
        volts = 400 + random.uniform(-2, 2)
        kw = (1.732 * volts * avg * 0.95) / 1000
        energy += kw / 3600                            # kWh per second
        for addr, val in {
            3001: a, 3003: b, 3005: c, 3009: avg,
            3027: volts, 3059: kw, 2705: energy,
        }.items():
            store.setValues(3, addr, f32_regs(val))
        await asyncio.sleep(1)

async def main():
    block = ModbusSequentialDataBlock(0, [0] * 4000)
    store = ModbusSlaveContext(hr=block, zero_mode=True)
    context = ModbusServerContext(slaves=store, single=True)   # answers any unit id
    asyncio.create_task(updater(store))
    print("Fake power meter on 127.0.0.1:5020")
    await StartAsyncTcpServer(context=context, address=("127.0.0.1", 5020))

asyncio.run(main())
```
- [ ] Run: `python C:\node-red-lab\fake_pm.py` and leave it running.

(This requires `pymodbus==3.6.9`. Newer versions renamed some classes.)

### Step 2: install and configure the Modbus nodes
- [ ] Palette → install `node-red-contrib-modbus`.
- [ ] Add a **modbus-flex-getter** node. Create a new **client** config: Type **TCP**, host `127.0.0.1`, port `5020`, unit id `255`, "reconnect on timeout" on, command delay about 100 ms, timeout 2000 ms.

### Step 3: read one value (Active Power, address 3059)
- [ ] inject (repeat every 5 seconds) → function:
```javascript
msg.payload = { fc: 3, unitid: 255, address: 3059, quantity: 2 };
return msg;
```
- [ ] → modbus-flex-getter → **debug**. Deploy.
- [ ] Open the output in the debug sidebar. Look at the message: the register values may be in `msg.payload` as an array (for example `[16268, 43691]`) and/or in `msg.responseBuffer.buffer` as raw bytes. Your workplace function reads `.buffer`, so the node there behaves slightly differently. **Always inspect the real message first.**

### Step 4: convert the two registers to a number
If `msg.payload` is an array of two register values:
```javascript
const [hi, lo] = msg.payload;
const buf = Buffer.alloc(4);
buf.writeUInt16BE(hi, 0);
buf.writeUInt16BE(lo, 2);
msg.payload = Number(buf.readFloatBE(0).toFixed(2));
return msg;
```
If your message gives you a buffer instead (as the workplace flow does):
```javascript
const buf = Buffer.from(msg.responseBuffer.buffer);   // check the exact property in your debug output
msg.payload = Number(buf.readFloatBE(0).toFixed(2));
return msg;
```
- [ ] Wire to a debug node. The value should be a plausible kW (about 6 to 8).

### Step 5: all six values, table-driven
Instead of six near-identical functions, use one:
- [ ] inject (every 5 s) → function with **1 output** that sends several messages:
```javascript
const regs = [
  { topic: "current_a",     address: 3001 },
  { topic: "current_b",     address: 3003 },
  { topic: "current_c",     address: 3005 },
  { topic: "current_avg",   address: 3009 },
  { topic: "voltage_ll",    address: 3027 },
  { topic: "active_power",  address: 3059 },
  { topic: "energy_kwh",    address: 2705 },
];
for (const r of regs) {
    node.send({ topic: r.topic, payload: { fc: 3, unitid: 255, address: r.address, quantity: 2 } });
}
return null;
```
- [ ] → flex-getter. The conversion needs to know which topic the answer belongs to. Check that `msg.topic` survives the flex-getter. If it does not, put the topic in `msg.payload.topic` or in a separate property, and test in the debug sidebar.
- [ ] → conversion function (Step 4 code) → **switch** on `msg.topic` or straight to a **ui-gauge** per topic.
- [ ] Add gauges: current (0 to 40 A), voltage (350 to 450 V), power (0 to 20 kW).

### Step 6: stop hammering the meter
- [ ] Set the client's **command delay** to 100 to 200 ms so requests queue instead of bunching up.
- [ ] Use a poll interval of at least 5 seconds.
- [ ] Log to the debug sidebar how long a full cycle takes.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP (READ-ONLY)
- [ ] Open "Office Power Meter". Click the modbus client config used by the flex-getters. Note host/port/unit id in your private notes only (don't share them).
- [ ] Compare the register addresses in the function nodes with the meter manual (Schneider PM5110 register list) to confirm each one.
- [ ] Open the subflow "Power Meter Schneider PowerLogic PM5110": read the arrays of names and register offsets. Note which values it computes (currents, voltages, power, power factor, frequency, THD).
- [ ] Watch the dashboard gauges for a few minutes. Do they update at the poll rate?
- [ ] Check your notes on safe polling below.

### Safe-polling rules at work
- [ ] Use **read** nodes only. Never use Modbus **write** nodes on a real device.
- [ ] Do not shorten poll intervals or add more readers without asking. A gateway can only serve so many requests.
- [ ] If the meter stops answering, the reconnect settings on the client matter; don't "fix" by restarting live nodes without permission.

---

## 5. CHECKPOINT
- [ ] The gauge for active power moves and the value matches what the Python simulator generates.
- [ ] You can explain why quantity is 2 and what readFloatBE does.
- [ ] One table-driven function replaces six repeated ones.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Timeout / no response | Simulator not running, wrong port (5020 here, 502 in production), or firewall |
| Values are nonsense or huge | Wrong word order or wrong address offset; try swapping `hi`/`lo` or shifting address by 1 |
| `msg.payload.buffer` undefined | The message shape differs; inspect the full message and use the right property |
| Value always 0 | Reading the wrong register, or the simulator has not written yet |
| `Buffer is not defined` | Use `Buffer` in function nodes (it is available); check spelling and capitalisation |
| Queue grows / lag | Poll too fast; add command delay and raise the interval |
| Only one gauge updates | All answers share the same wire; route by `msg.topic` |

---

## 7. STRETCH
- [ ] Add a **Modbus-Read** node (fixed address) instead of flex-getter for one value and compare the two nodes.
- [ ] Compute daily kWh by storing the energy value at midnight in flow context and subtracting.
- [ ] Add alarms: current imbalance when A, B and C differ by more than 10 percent.
- [ ] Read the "block" way: one request for 120 registers and unpack with an array of offsets (like the subflow).

---

## 8. SELF-TEST
1. Why do the work flows request quantity 2 for each value?
2. What is function code 3?
3. What is the difference between big-endian and little-endian?
4. Why is a table-driven function better than six copied functions?
5. Why must you avoid Modbus write nodes on a live meter?

---

## 9. DONE
- [ ] File 09 complete. Next: **10 - Publishing Data into Home Assistant**.
