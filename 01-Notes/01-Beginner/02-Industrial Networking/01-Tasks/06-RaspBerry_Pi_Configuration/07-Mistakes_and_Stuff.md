# I'm tired
> [!warning] ### Disclaimer
> ***This specific file was entirely made with AI, after compiling all the mistakes I made and research I've done.***

Troubleshooting history and lessons learned from getting the Grove AM2302 (DHT22) working on a Raspberry Pi 4 B with Node-RED.

The point of this file is **not** to look good. It is to keep the real failures so they can be recognized faster next time. Everything below actually happened during this project and experiencing it wasn't fun.

---

## 1. Python GPIO reader timeout

### What went wrong
Running a Python script using `adafruit-circuitpython-dht` first gave:
```
{"error": "DHT sensor not found, check wiring"}
```
and after adding a retry loop:
```
{"error": "Read timeout: GPIO timing pulse missed"}
```

### Why it happens
The DHT22 sends data as pulses lasting tens of microseconds. A Python program has to watch the pin and measure those pulses while Linux is also scheduling other work. If Linux pauses the script for even a moment, a pulse is missed and the whole read fails. Retrying helps only sometimes, because the underlying problem is timing, not wiring.

### How we fixed it
We stopped asking Python to do the timing. The **kernel driver** (device tree overlay) does it inside the kernel, with much better timing control, and exposes the result as files.

### Lesson learned
> When a protocol is timing-critical, let the layer closest to the hardware handle it. A higher-level program that "polls" a microsecond protocol will always be fragile.

---

## 2. GPIO ownership conflict

### What went wrong
After the kernel overlay was working, running the Python script gave:
```
Unable to set line 4 to input
```

### Why it happens
Only one owner can control a GPIO line at a time. The kernel overlay claimed GPIO 4 at boot. When Python (through `gpiod`) tried to take the same line, the kernel refused.

### How we fixed it
It was not a fault, it was proof the overlay was working. We stopped using Python GPIO and read the IIO files instead.

### Lesson learned
> An error is information. "Line already in use" told us the kernel driver was alive and owned the pin. Do not try to force two programs onto one pin.

---

## 3. IIO device not initially existing

### What went wrong
```
cat: '/sys/bus/iio/devices/iio:device0/in_temp_input': No such file or directory
```
and the same for `in_humidityrelative_input`.

### Why it happens
The files only exist **after** the kernel has loaded a driver for the sensor. At that point the overlay was not active, so the IIO device had not been created yet.

### How we fixed it
Fixed the overlay (see problem 4) and rebooted. Then:
```bash
ls /sys/bus/iio/devices/
ls /sys/bus/iio/devices/iio:device0/
cat /sys/bus/iio/devices/iio:device0/name
```
confirmed the device and its files.

### Why checking `ls /sys/bus/iio/devices/` is useful
It tells you what the system **actually** has, instead of what a tutorial assumes. Never `cat` a path before you have listed the directory.

### Portability note
Hard-coding `iio:device0` is convenient and fine for this single-sensor project, but it is **not maximally portable**. The number is assigned by the kernel and could become `iio:device1` if other IIO hardware appears. A more robust way is to find the device whose `name` file says `dht11`. A wildcard like `iio:device*` was used in some tests, but it only works safely when exactly one device matches.

### Lesson learned
> Look before you read. Confirm the path exists, then read it.

---

## 4. Overlay configuration in the wrong hardware section

### What went wrong
The line
```
dtoverlay=dht11,gpiopin=4,dht22=1
```
was added at the bottom of `/boot/firmware/config.txt`, **underneath a `[pi5]` heading**. The hardware is a **Raspberry Pi 4 Model B**.

### Why it happens
`config.txt` is split into conditional sections. Everything under `[pi5]` applies only to a Pi 5, and everything under `[all]` applies to every Pi. Lines under a section that does not match your board are **silently ignored**. No error appears. The sensor simply never shows up, which is what produced problem 3.

### How we fixed it
Moved the line into the general section (or placed `[all]` above it), then rebooted.

### Why conditional configuration matters
The same file is shared by many Pi models. The section headers decide which settings apply to which board. Where you put a line is part of what the line means.

### Lesson learned
> A config line is only as correct as the section it sits in. When a setting "does nothing", check which section it is under before assuming the setting is wrong.

---

## 5. Old Node-RED DHT node approach

### What went wrong
The first version of the setup guide used:
```
node-red-contrib-dht-sensor
```
with an `rpi-dht22` node. The node returned values that were clearly fake (see problem 12), and later returned `0.00` / `isValid: false`. It kept doing so **even with the sensor wires removed**.

### Why we moved away
A node that gives the same output with the sensor unplugged is not reading the sensor. It was also depending on low-level GPIO access that did not work on this OS and kernel combination. Fixing the node would have meant debugging someone else's driver code for a problem the kernel had already solved.

### How we fixed it
```
Linux IIO -> Exec -> Node-RED
```
The kernel does the hardware work, Node-RED just reads text.

### Lesson learned
> If a component behaves identically with and without its input connected, it is not measuring anything. Test by removing the input.

---

## 6. Raw value scaling

### What went wrong (potential)
The IIO files return numbers like `25400` and `48000`. Used as-is, the dashboard would show a temperature of 25,400.

### Why it happens
Linux IIO reports temperature in **milli-degrees Celsius** and humidity in **milli-percent**. Using whole numbers avoids floating-point maths inside the kernel.

| Raw value | Divide by | Result           |
| --------- | --------- | ---------------- |
| `25400`   | 1000      | **25.4 C**       |
| `48000`   | 1000      | **48.0 % RH**    |

### How we handled it
The Parse node does `Number(value) / 1000`. We did not just trust the number 1000: the conversion was checked against a reading that made physical sense (room temperature about 25 C, and humidity moving when we breathed on the sensor).

### Lesson learned
> Never bake in a conversion factor without checking it against a value you can sanity-check in the real world.

---

## 7. Property-name mismatch

### What went wrong
The Parse node produced:
```javascript
{ Temperature: 25.4, Humidity: 48 }
```
(capital letters), but the validation code read:
```javascript
msg.payload.temperature
msg.payload.humidity
```
(lowercase).

### Why it happens
JavaScript property names are **case-sensitive**. `Temperature` and `temperature` are two different properties. Reading `msg.payload.temperature` on an object that only has `Temperature` gives `undefined`, not an error. The validation then rejected every reading as invalid.

### How we fixed it
Standardised on lowercase `temperature` and `humidity` in the parser and everywhere downstream.

### Lesson learned
> `undefined` is JavaScript's quiet way of saying "that property does not exist". When validation rejects everything, first check the property names match exactly. Choose one naming convention and use it in every node.

---

## 8. Validation Function output mistake

### What went wrong
The **Validate Sensor Reading** Function node was set to `Outputs: 1`, but the code did:
```javascript
return [msg, null];    // valid
return [null, msg];    // invalid
```

### Why it happens
A Function node returns an **array**, one slot per output:

| Return                 | Meaning                                  |
| ---------------------- | ---------------------------------------- |
| `return [msg, null];`  | Send `msg` out of **output 1** only      |
| `return [null, msg];`  | Send `msg` out of **output 2** only      |

With only one output configured there is no output 2, so invalid readings had nowhere to go. The node's visible outputs must match the number of slots the code uses.

### How we fixed it
Set `Outputs: 2` in the node and wired output 1 to VALID and output 2 to INVALID. In the JSON this is `"outputs": 2` and a `wires` array with two entries.

### Lesson learned
> Count the slots in the `return` array and count the outputs on the node. They must match.

---

## 9. Debug node wiring mistake

### What went wrong
Both Debug nodes (VALID and INVALID) were connected to the **same** output:
```
Validate
   |
   |-- Debug VALID
   '-- Debug INVALID
```

### Why it is wrong
Every message leaving that output goes to **both** debug nodes. So the one named INVALID also received valid readings. The names promised something the wiring did not deliver, which makes debugging misleading.

### How we fixed it
```
Validate
   |
   |-- Output 1 -> Debug: VALID
   |
   '-- Output 2 -> Debug: INVALID
```

### Lesson learned
> A label is not a filter. The wiring decides what a node receives, not its name.

---

## 10. Testing only the happy path

### What went wrong (avoided)
It is tempting to check "does it work?" when the sensor gives normal numbers and stop there. Then the error path is untested until the day something really breaks.

### How we tested instead
Temporarily changed the humidity limit in the validation node from
```javascript
if (humidity < 0 || humidity > 100) {
```
to
```javascript
if (humidity < 0 || humidity > 40) {
```
Real humidity (about 48 %) is above 40, so readings were forced into the **INVALID** path. We confirmed the rejected message appeared in **Debug: INVALID** with the correct error text, then changed the limit back.

### Why testing failure paths is important
Error handling code normally runs rarely, so bugs in it stay hidden. Triggering it on purpose proves it works while you are watching.

### Lesson learned
> Don't only ask "does it work?" Ask "does it **fail correctly**?" And always remember to put the test change back.

---

## 11. Dashboard too early

### What went wrong
Early attempts went from sensor straight to gauges and charts. When the dashboard displayed `0`, `100` or `110`, there was no way to tell which layer was wrong: the sensor, the driver, the parser or the dashboard.

### Why the layered approach is better
Build and prove one layer at a time:

```
Hardware
   v
Linux
   v
IIO
   v
Exec
   v
Parser
   v
Timestamp
   v
Validation
   v
Dashboard
```

Each layer has a simple test: `cat` the file, check the Exec output in Debug, check the parsed object, and so on. When something breaks, you walk **backwards** from the dashboard until you find the first layer that is wrong.

### Lesson learned
> A dashboard is a display, not a test. Prove the data first, then display it.

---

## 12. Wrong pin numbering mode in the old node

### What went wrong
The `rpi-dht22` node returned:
```json
{"payload":"100.00","humidity":"110.00","topic":"dht22","sensorid":"dhtundefined"}
```
Humidity cannot exceed 100 %, so this was impossible. The node's pin setting was **Physical pins** with pin number **4**.

### Why it happens
There are two different numbering systems:

| System        | "4" means                    |
| ------------- | ---------------------------- |
| Physical pins | Header pin 4 = **5V power**  |
| BCM / GPIO    | GPIO 4 = **physical pin 7**  |

With physical numbering, the node was looking at a power pin, not the data wire.

### How we fixed it (partly)
Switching to BCM GPIO 4 stopped the 100/110 values, but then the node returned `0.00` and `isValid: false`, which showed the deeper problem (see problem 5). The permanent fix was the kernel driver route.

### Lesson learned
> Always state which numbering system a pin number belongs to. "Pin 4" without a system is ambiguous. In this project: **physical pin 7 = GPIO 4**.

---

## 13. Chasing hardware that was not broken

### What went wrong
A lot of advice focused on hardware: pull-up resistors, trying 5V instead of 3.3V, replacing wires. The new sensor and tested jumper wires made no difference.

### What actually happened
The hardware was fine from the start. The deciding evidence was:
- The old node produced the same output with the sensor **unplugged**.
- Once the kernel overlay was in the correct section, readings (25.4 C, 48 % RH) appeared with the **same wiring** as before.

### Lesson learned
> If you have tested the wires and a replacement sensor, believe your own testing. Disconnect the input and see whether the output changes: if it does not, the problem is software. Also note the Grove module has its own onboard circuitry, so advice written for a bare DHT22 does not automatically apply.

---

## 14. Wrong system clock broke `apt update`

### What went wrong
```
Verifying signature: Not live until 2026-10-05T01:42:26Z
```
and `The repository ... is not signed`, for several repositories.

### Why it happens
Package repositories are signed with timestamps. If the Pi's clock is **behind**, the signatures look like they come from the future and are rejected. The Pi has no battery-backed clock, so a wrong time after being off is common.

### How we fixed it
```bash
sudo systemctl restart systemd-timesyncd
```
and, only if network time did not update, setting the date manually with `sudo date -s "YYYY-MM-DD HH:MM:SS"`, then running `sudo apt update` again.

### Why it matters for this project
The flow stamps every reading with the Pi's clock. A wrong clock means wrong timestamps in every future chart or database.

### Lesson learned
> A strange security or signature error on a Pi: check `date` first. The Pi does not know the time unless the network tells it.

---

## 15. `file in` nodes failing on the sysfs files

### What went wrong
A pure Node-RED attempt used two `file in` nodes to read the IIO files directly. The debug panel showed errors like `EIO: i/o error, read` and `ETIMEDOUT`.

### What we know
- The same files read fine from the terminal with `cat`.
- Replacing the `file in` nodes with an **Exec** node running `cat` worked.

### What we do not know
Why exactly `file in` failed was not proven. One explanation offered was that Node-RED reads these special files differently from `cat`, but that was not tested, so treat it as unconfirmed.

### How we fixed it
Use one Exec node with `cat` for both files (see `06-Sensor_Setup.md`).

### Lesson learned
> Sysfs files are not ordinary files. If a generic file reader fails on them, use the plain Linux tool that is known to work, and record the observation rather than inventing a reason.

---

## 16. Smoothing filter that hides sensor faults

### What went wrong (avoided)
One suggested fix for jumpy readings was a "smoothing" function that remembered the last good value and, if a new reading jumped too far, **replaced it with the old value** silently.

### Why that is a bad idea
- The dashboard would show a calm, believable line even if the sensor or driver was failing.
- Real fast changes (a door opening, a hot object next to the sensor) would be erased.
- A fault you cannot see is harder to fix than one you can.

### What we did instead
Validate honestly: accept real values, reject impossible ones, and **show** the rejection in the debug panel and the status text.

### Lesson learned
> Don't smooth away bad readings and pretend they were good. Reject them visibly. If smoothing is ever added, add it as a separate, clearly named step that does not hide the raw value.

---

## 17. NVM hides the `node-red-start` commands

### What went wrong
The `node-red-start`, `node-red-stop` and `node-red-log` helper commands were not available.

### Why it happens
When Node.js is installed through **NVM**, global programs live inside a version-specific folder under the user's home directory. The helper scripts and system service that the standard installer creates are not set up.

### How we handle it
Run `node-red` directly in a terminal and stop it with `Ctrl+C`, or manage it with PM2 if you want it to start on boot.

### Lesson learned
> The way Node.js was installed decides which convenience commands exist. When a documented command is "not found", check how the tool was installed.

---

## 18. Non-UTF-8 character in a Python file

### What went wrong
```
SyntaxError: Non-UTF-8 code starting with '\xb0' in file /home/admin/read_dht.py on line 11
```

### Why it happens
A degree symbol (`°`) was in a comment, and the file was saved in a different text encoding. Python 3 expects UTF-8 and stops when it sees a byte it cannot read, even inside a comment.

### How we fixed it
Removed the special character from the comment (and opened files with `encoding='utf-8'`).

### Lesson learned
> Keep special symbols out of code files and comments, especially when pasting through terminals and editors. Write "C" instead of the degree sign.
>
> (This file is now obsolete for the project, since Node-RED reads the sensor directly with Exec `cat`.)

---

## 19. Occasional I/O errors and wild readings

### What went wrong
Even with the kernel driver, the debug panel sometimes showed:
```
[Errno 5] Input/output error
```
and some readings were far off (for example, temperature dropping to 12.3 and humidity at 149 %).

### Why it happens
DHT22 sensors are known for the occasional corrupted or missed read. The kernel driver reports a failed read as an I/O error, and rarely a damaged bitstream decodes to a nonsense number.

### How we handle it
- Occasional I/O errors are normal. The Exec node's error output goes to **Debug: EXEC ERROR**, and the next 5-second poll usually succeeds.
- Impossible values (humidity above 100) are rejected by validation and appear in **Debug: INVALID**.
- We do **not** quietly replace bad values (see problem 16).

### Known limit
Range validation cannot catch a wrong value that is still physically possible. That would need a visible "changed too fast" rule.

### Lesson learned
> "The sensor works" and "the sensor never fails" are different things. A good system expects occasional failures and handles them visibly.

---

## 20. Two generations of Dashboard nodes

### What went wrong
An earlier generated flow used `ui_gauge`, `ui_chart`, `ui_group` and `ui_tab` nodes. Those belong to the **older Dashboard 1** (`node-red-dashboard`). The project is meant to use **FlowFuse Dashboard** (Dashboard 2), whose nodes are `ui-gauge`, `ui-chart`, `ui-group`, `ui-page`, `ui-base` and `ui-theme`.

### Why it matters
The two packages are different. Flows built for one do not work in the other. Dashboard 2 needs `ui-base`, `ui-theme`, `ui-page` and `ui-group` configuration nodes, and its page path format is different.

### How we fixed it
The final flow uses Dashboard 2 nodes only, and the setup guide says to install `@flowfuse/node-red-dashboard`.

### Lesson learned
> Check the node type names in an imported flow. An underscore (`ui_gauge`) usually means the old Dashboard, a hyphen (`ui-gauge`) means Dashboard 2.

---
