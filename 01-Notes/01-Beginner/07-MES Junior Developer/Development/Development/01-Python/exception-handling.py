dash = lambda num=8, char="-": print(char * 4 * num)

def title(name="Title", char="="):
    print()
    dash(char=char, num=16)
    print(" " * 20, name)
    dash(char=char, num=16)

#! 5.1 try / except
title("try / except")

# Basic pattern
try:
    number = int(input("Enter a number: "))
    print(f"You entered: {number}")
except ValueError:
    print("That wasn't a valid number. Please try again.")

dash()

try:
    result = 100/0
except ZeroDivisionError as e:
    print(f"Math error: {e}")

#! 5.2 Catching Multiple Exception Types
title("Catching Multiple Exception Types")

def load_save_file(filepath:str):
    try:
        with open(filepath, "r") as f:
            data = f.read()
        level = int(data.split(",")[0])
        return level
    except FileNotFoundError:
        print(f"Save file '{filepath}' not found. Starting fresh.")
        return 1
    except ValueError:
        print("Save data is corrupted. Could not parse level.")
        return 1
    except (PermissionError, OSError) as e:
        print(f"System error accessing file: {e}")
        return 1
    except Exception as e:
        # Broad catch-all - use sparingly, and only at the top level
        print(f"Unexpected error: {type(e).__name__}: {e}")
        return 1


#! 5.3 Raising Exceptions
title("Raising Exceptions")

def check_positive(value: int | float, name: str = "Value") -> None:
    """Raises ValueError if value is not positive"""
    if value < 0:
        raise ValueError(f"{name} must be a positive number. Got: {value}")

# Normal usage
check_positive(50, "Health")
"""
# This triggers the error
try:
    check_positive(-10, "Damage")
except ValueError as e:
    print(f"Caught: {e}")
"""
# Re-raising an exception (log it, then let it continue propagating)
try:
    result = int("corrupted data")
except ValueError as e:
    print(f"[LOG] Conversion error: {e}")
    # raise

print("!-------The error hasn't been handled if you can see this-------!\n",
      "The program just continued")

#! 5.4 Custom Exceptions
title("Custom Exceptions")

# Define custom exceptions by inheriting from Exception
class GameError(Exception):
    """Base exception for all game-related errors."""
    pass

class InvalidChoiceError(GameError):
    """Raised when a player enters an option outside the valid range."""
    pass

class InsufficientGoldError(GameError):
    """Raised when a player tries to buy something they can't afford."""
    def __init__(self, required: int, available: int):
        self.required = required
        self.available = available
        super().__init__(f"Need {required} gold, but only have {available}.")


# Using custom exceptions
def purchase_item(item_cost: int, player_gold: int) -> None:
    if player_gold