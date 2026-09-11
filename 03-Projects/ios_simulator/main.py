#!/usr/bin/env python3
"""
IOS Simulator — a fake Cisco IOS CLI for practicing real syntax.

Run it, pick a device, and start typing commands like you're on the
real thing. Type '?' at any prompt to see what's valid there.
"""

from engine import Engine

BANNER = r"""
 _____ ____   _____   _____ _                 _       _
|_   _/ __ \ / ____| / ____(_)               | |     | |
  | || |  | | (___  | (___  _ _ __ ___  _   _| | __ _| |_ ___  _ __
  | || |  | |\___ \  \___ \| | '_ ` _ \| | | | |/ _` | __/ _ \| '__|
 _| || |__| |____) | ____) | | | | | | | |_| | | (_| | || (_) | |
|_____\____/|_____/ |_____/|_|_| |_| |_|\__,_|_|\__,_|\__\___/|_|

Practice real Cisco IOS syntax against a fake device.
Type '?' any time to see valid commands. 'explain off' to quiet the hints.
"""


def choose_device_type() -> str:
    while True:
        print("Choose a device to practice on:")
        print("  [1] Switch")
        print("  [2] Router")
        choice = input("> ").strip()
        if choice in ("1", "switch", "s"):
            return "switch"
        if choice in ("2", "router", "r"):
            return "router"
        print("Type 1 or 2.\n")


def main():
    print(BANNER)
    device_type = choose_device_type()
    progress_path = f"progress_{device_type}.json"
    engine = Engine(device_type, progress_path=progress_path)
    print(f"\n{device_type.title()} ready. Type '?' to see available commands.\n")

    while True:
        prompt = engine.state.prompt() + " "
        try:
            line = input(prompt)
        except (EOFError, KeyboardInterrupt):
            print()
            break

        if line.strip().lower() in ("quit", "exit()"):
            break

        output = engine.feed(line)
        if output:
            print(output)

        if engine.quit_requested:
            print("\nConnection closed.")
            break


if __name__ == "__main__":
    main()
