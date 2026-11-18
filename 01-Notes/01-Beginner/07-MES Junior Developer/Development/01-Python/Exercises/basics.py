import random

print("Welcome traveler!")
name = input("What is your name: ")
age = int(input("how old are you: "))
level = random.randint(0, 10)
is_alive = True

print()
print(f"Hello {name}, you are currently level {level}.")

if age <= 0:
    print("Don't be dumb")
if age >= 18:
    print("At least you get to drink hoe.")
else:
    print("Hmmmm...")

print(f"You're {age}, Go to the Adventurers Guild to get a Quest!",
      "\nLEVEL UP, BIIIITCH!")
