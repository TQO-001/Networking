dash = lambda num=8, char="-": print(char * 4 * num)

"""
This is a docstring
It can span multiple lines
It is used to document classes, functions, amd modules.
"""

def cast_spell(spell_name):
    """
    Casts a spell by name
    Returns a formatted string describing the action.
    """
    return f"Casting {spell_name}!"

print(cast_spell("James Dean"))

dash(16)
# Variables and Functions
player_health = 150
max_mana_pool = 200

def calculate_damage(base_attack, multiplier):
    return base_attack * multiplier

# Constants
MAX_PARTY_SIZE = 4
DEFAULT_SPAWN_RATE = 0.75
PI = 3.14159

# Classes
class PlayerCharacter:
    pass

class BossEnemy:
    pass

# Private variables
_internal_counter = 0

# Name-mangled (hard private)
__secret_vault_code = 9999

# Assignment
player_name = "Arthur"
player_level = 1
player_health = 98.5
is_alive = True

# Multiple assignment in one line
x, y, z = 10, 20, 30

# swap to variables
a, b = 5, 10
a, b = b, a

print(a, b)

# Check the type of any variable
print(type(player_name))
print(type(player_level))
print(type(is_alive))

dash(16)

# Basic print
print("Welcome to the Realm!")

# print() with multiple values
print("Player:", "Arthur", "Level:", 5)

# f-strings
player_name = "Arthur"
player_level = 5
print(f"Welcome, {player_name}! You are level {player_level}.")

# Expressions inside f-strings
base_attack = 20
multiplier = 1.5
print(f"Critical Hit! Damage: {base_attack * multiplier:.1f}")

# input()
name = input("Enter you character name: ")
print(f"Greetings, {name}!")

# Convert input to a number
age_str = input("Enter your age: ")
age = int(age_str)

dash(16)
