"""
progress.py — tiny persistence layer for "which commands have I successfully
run at least once". Stored per device type so switch/router progress don't
overwrite each other.
"""

import json
import os
from typing import Set


def _load_all(path: str) -> dict:
    if not os.path.exists(path):
        return {}
    try:
        with open(path, "r") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError):
        return {}


def load(path: str, device_type: str) -> Set[str]:
    data = _load_all(path)
    return set(data.get(device_type, []))


def save(path: str, device_type: str, mastered: Set[str]) -> None:
    data = _load_all(path)
    data[device_type] = sorted(mastered)
    with open(path, "w") as f:
        json.dump(data, f, indent=2)
