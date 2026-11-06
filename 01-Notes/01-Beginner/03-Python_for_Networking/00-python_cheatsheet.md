# Python Cheat Sheet

Python is one of the most widely-used and popular programming languages. It was developed by Guido van Rossum and first released in 1991. Python is free and open-source, with simple, clean syntax that makes it easy to learn. It supports object-oriented programming and is used for general-purpose programming across many domains.

### Why Python?

- **Easy to Learn** – Clean, readable syntax that feels like plain English.
- **Free & Open-Source** – No cost, no restrictions.
- **Object-Oriented & Versatile** – Supports multiple programming paradigms.
- **Massive Community Support** – Tons of libraries, frameworks, and active contributors.

---

## Python Basics

### Printing Output

The `print()` function is used to print Python objects to standard output. The `end` keyword argument can be used to avoid the newline after output, or to end the output with a different string.

```python
print("Hello, world!")
print("No newline here", end=" - ")
print("continues on the same line")
```

**Python `sep` parameter in `print()`**

The separator between multiple values passed to `print()` is a space by default, but it can be changed to any character or string using the `sep` argument.

```python
print("2026", "08", "27", sep="-")
# Output: 2026-08-27
```

### Python Input

The `input()` function is used to accept user input. It always returns the input as a string, even if the user types a number.

```python
name = input("Enter your name: ")
print(name)
```

```
Enter your name: Thulani
Thulani
```

### Python Comments

Comments are lines in the code that are ignored by the interpreter. There are three types:

- Single line comments
- Multiline comments
- Docstring comments

```python
# This is a single line comment

"""
This is a
multiline comment
"""

def greet():
    """This is a docstring comment describing the function."""
    pass
```

### Variables and Data Types

Variables store values, and Python supports multiple data types.

```python
name = "Alex"          # str
age = 30                # int
height = 1.75            # float
is_developer = True      # bool
```

### Type Checking and Conversion

We can check the data type of a variable using `type()` and convert between types as needed.

```python
value = "42"
print(type(value))       # <class 'str'>

converted = int(value)
print(type(converted))   # <class 'int'>
```

---

## Operators in Python

Operators are used to perform operations on values and variables. These are standard symbols used in logical and mathematical processes.

```python
a, b = 10, 3

print(a + b)   # Addition -> 13
print(a - b)   # Subtraction -> 7
print(a * b)   # Multiplication -> 30
print(a / b)   # Division -> 3.333...
print(a // b)  # Floor division -> 3
print(a % b)   # Modulus -> 1
print(a ** b)  # Exponent -> 1000
print(a > b)   # Comparison -> True
print(a == b)  # Equality -> False
```

---

## Control Flow

### Conditional Statements

Used to execute different blocks of code based on conditions.

```python
temperature = 28

if temperature > 30:
    print("It's hot outside")
elif temperature > 20:
    print("It's a pleasant day")
else:
    print("It's cold outside")
```

### Loops

Loops help iterate over sequences or repeat actions.

**For Loop:**

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

**While Loop:**

```python
count = 0

while count < 3:
    print(count)
    count += 1
```

### Loop Control Statements

`break` exits the loop entirely, while `continue` skips the current iteration.

```python
for number in range(5):
    if number == 2:
        continue   # skip 2
    if number == 4:
        break      # stop at 4
    print(number)
```

**Interesting fact — using `enumerate()` to get index and value in a loop:**

Wrap an iterable with `enumerate()` and it will yield each item along with its index.

```python
vowels = ["a", "e", "i", "o", "u"]

for index, letter in enumerate(vowels):
    print(index, letter)
```

```
0 a
1 e
2 i
3 o
4 u
```

---

## Python Functions

Functions are a collection of statements that serve a specific purpose. They let us bundle up repeated logic and reuse it, instead of writing the same code for different inputs over and over.

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alex")
```

### Function Arguments

Arguments are the values passed between a function's parentheses. A function can take as many parameters as needed, separated by commas.

```python
def add(a, b):
    return a + b

print(add(2, 3))
```

### Return Statement

The `return` statement terminates a function and sends a value back to the caller.

```python
def add(a, b):
    return a + b

def is_positive(n):
    return n > 0

print(f"Result of add function is {add(2, 3)}")
print(f"Result of is_positive function is {is_positive(5)}")
```

```
Result of add function is 5
Result of is_positive function is True
```

### The `range()` Function

`range()` returns a sequence of numbers within a given range.

```python
for i in range(1, 6):
    print(i)   # prints 1 through 5
```

### `*args` and `**kwargs`

`*args` and `**kwargs` let functions take a variable number of arguments. `*args` collects extra positional arguments into a tuple. `**kwargs` collects extra keyword arguments into a dictionary.

```python
def show_args(*args, **kwargs):
    for a in args:
        print("arg:", a)
    for key, value in kwargs.items():
        print(f"{key}: {value}")

show_args("red", "green", "blue", primary="red", secondary="blue")
```

```
arg: red
arg: green
arg: blue
primary: red
secondary: blue
```

**Interesting fact — returning multiple values:**

Python lets a function return multiple values separated by commas. These are implicitly packed into a tuple.

```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([4, 7, 1, 9])
print(low, high)   # 1 9
```

---

## Data Structures in Python

### Lists

A list is a sequence data type used to store a collection of data. Tuples and strings are other sequence types.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits)
```

```
['apple', 'banana', 'cherry']
```

**List Comprehension**

A list comprehension is made up of brackets containing an expression, followed by a `for` clause, used to build a new list from an iterable.

```python
squares = [n ** 2 for n in range(1, 6)]
print(squares)   # [1, 4, 9, 16, 25]
```

**Interesting facts about lists:**

- Lists have been part of Python since the very first release (Python 1.0, 1991). Unlike languages such as C or Java, Python lists don't require a fixed size or type.
- Python was influenced by the ABC programming language, but improved on it by making lists mutable — one of the biggest reasons for their popularity.

### Dictionaries

A dictionary is a collection of key-value pairs, used to store data like a map.

```python
person = {1: "Alex", 2: "Jordan", 3: "Sam"}
print(person)
```

```
{1: 'Alex', 2: 'Jordan', 3: 'Sam'}
```

**Dictionary Comprehension**

Like list comprehensions, Python supports dictionary comprehensions using the form `{key: value for (key, value) in iterable}`.

```python
squares = {n: n ** 2 for n in range(1, 6)}
print(squares)
```

```
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

**Interesting facts about dictionaries:**

- Before Python 3.7, dictionaries did not preserve insertion order. From Python 3.7 onward, dictionaries maintain the order in which keys were inserted — previously a feature exclusive to `OrderedDict`.
- Dictionary keys must be immutable — strings, numbers, or tuples work, but lists do not. This keeps keys hashable, which is essential for fast lookups.

### Tuples

A tuple is a list-like collection of Python objects, indexed by integers, but immutable once created.

```python
colors = ("red", "green", "blue")
print(colors)
```

```
('red', 'green', 'blue')
```

### Sets

A set is an unordered collection of unique elements — no duplicates allowed.

```python
unique_numbers = {1, 2, 2, 3, 3, 3}
print(unique_numbers)   # {1, 2, 3}
```

### Strings

A string is an immutable sequence of characters — once created, it cannot be changed in place.

**Creating and Accessing Strings**

Strings can be created with single, double, or triple quotes. Individual characters are accessed by indexing; negative indices count from the end of the string.

```python
text = "Hello there"
print("Initial string:", text)
print("First character:", text[0])
print("Last character:", text[-1])
```

```
Initial string: Hello there
First character: H
Last character: e
```

**String Slicing**

A slicing operator (colon) is used to extract a range of characters from a string.

```python
text = "Hello there"
print("Characters 2 to 6:", text[2:7])
print("Between 3rd and 2nd-to-last:", text[3:-1])
```

```
Characters 2 to 6: llo t
Between 3rd and 2nd-to-last: lo ther
```

**Interesting facts about strings:**

- Strings are immutable — once defined, they can't be changed in place.
- Strings can be concatenated with the `+` operator, making it easy to build longer strings from smaller pieces.

---

## Python Built-In Functions

Python ships with numerous built-in functions that make everyday coding easier — things like `len()`, `sum()`, `sorted()`, `max()`, `min()`, `zip()`, and many more.

```python
numbers = [4, 2, 9, 1]

print(len(numbers))      # 4
print(sum(numbers))      # 16
print(sorted(numbers))   # [1, 2, 4, 9]
print(max(numbers))      # 9
```

---

## Python OOP Concepts

Object-oriented programming (OOP) is a paradigm built around objects and classes, modeling real-world entities through inheritance, polymorphism, and encapsulation. The core idea is to bundle data and the functions that operate on it into a single unit.

In the example below, `Car` has attributes for make, model, and year. `_make` is marked protected with a single underscore. `__model` is marked private with a double underscore. `year` is fully public.

```python
class Car:
    def __init__(self, make, model, year):
        self._make = make        # protected
        self.__model = model     # private
        self.year = year         # public

    def get_make(self):
        return self._make

    def get_model(self):
        return self.__model

    def set_model(self, new_model):
        self.__model = new_model


my_car = Car("Toyota", "Corolla", 2022)
print(my_car.get_make())     # Toyota
print(my_car.get_model())    # Corolla

my_car.set_model("Camry")
print(my_car.get_model())    # Camry
print(my_car.year)           # 2022
```

We use the getter `get_make()` to read the protected `_make` attribute, and the setter `set_model()` to change the private `__model` attribute. The public `year` attribute has no restrictions on access. This is encapsulation — controlling visibility and access to class members.

**Interesting facts about OOP in Python:**

- Python supports multiple paradigms: object-oriented, functional, and procedural programming.
- Everything in Python is an object — including integers, strings, and even functions — which is what makes OOP principles apply consistently across the whole language.

```python
print(type(5))          # <class 'int'>
print(type(greet))       # <class 'function'>
```

---

## Python RegEx

Regular expressions let us define a pattern to search for in text. The pattern below is a common one for matching email addresses.

```python
import re

pattern = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"
text = "Contact us at support@example.com for help."

match = re.search(pattern, text)
if match:
    print("Found email:", match.group())
else:
    print("No email found")
```

```
Found email: support@example.com
```

**Common RegEx metacharacters:**

- `\` — drops the special meaning of the character that follows it
- `[]` — represents a character class
- `^` — matches the beginning of a string
- `$` — matches the end of a string
- `.` — matches any character except a newline
- `|` — means OR (matches any of the characters separated by it)
- `?` — matches zero or one occurrence
- `*` — matches zero or more occurrences
- `+` — matches one or more occurrences
- `{}` — indicates the number of occurrences to match
- `()` — encloses a group

---

## Exception Handling in Python

`try` and `except` are used to catch and manage exceptions. Code that might raise an exception goes in the `try` block; the code that handles the exception goes in the `except` block.

```python
values = [1, 2, 3]

try:
    print("Second element =", values[1])
    print(values[5])
except IndexError:
    print("An error occurred")
```

```
Second element = 2
An error occurred
```

---

## Debugging in Python

Debugging is the process of finding and fixing bugs in code. Python provides several tools to help.

### 1. Using Print Statements

```python
x = 10
y = 20
result = x + y
print(f"x: {x}")
print(f"y: {y}")
print(f"result: {result}")
```

```
x: 10
y: 20
result: 30
```

### 2. Using `pdb` (Python Debugger)

The `pdb` module provides an interactive debugging environment — set breakpoints, step through code, and inspect variables. Insert `pdb.set_trace()` where you want the debugger to start.

```python
import pdb

x = 5
y = 10
pdb.set_trace()   # Debugger starts here
result = x + y
print(result)
```

```
> /home/user/project/main.py(6)<module>()
-> result = x + y
(Pdb)
```

Once execution reaches `pdb.set_trace()`, common commands include:

- **n (next):** Execute the next line of code.
- **s (step):** Step into a function.
- **c (continue):** Continue execution until the next breakpoint.
- **q (quit):** Exit the debugger.

### 3. Using the `logging` Module

`logging` is more advanced than `print()` statements and is useful for debugging in production environments. It supports multiple severity levels: DEBUG, INFO, WARNING, ERROR, CRITICAL.

```python
import logging

logging.basicConfig(level=logging.DEBUG)

logging.debug("This is a debug message")
logging.info("This is an info message")
logging.warning("This is a warning message")
logging.error("This is an error message")
logging.critical("This is a critical message")
```

```
DEBUG:root:This is a debug message
INFO:root:This is an info message
WARNING:root:This is a warning message
ERROR:root:This is an error message
CRITICAL:root:This is a critical message
```

---

## File Handling in Python

Python supports file handling — reading, writing, appending, and more.

### Reading and Writing Files

The `open()` function opens a file and returns a file object.

```python
file = open("filename.txt", "mode")
```

- **'r':** Read (default mode) — opens the file for reading.
- **'w':** Write — creates a new file or overwrites an existing one.
- **'a':** Append — opens the file for appending data.
- **'rb', 'wb':** Read/write in binary mode.

**1. Reading a File**

There are several ways to read a file's contents:

```python
with open("example.txt", "r") as file:
    # Using read()
    content = file.read()
    print(content)

    # Reset the pointer to the beginning
    file.seek(0)

    # Using readline()
    first_line = file.readline()
    print(first_line)

    # Reset the pointer again
    file.seek(0)

    # Using readlines()
    lines = file.readlines()
    print(lines)
```

**2. Writing to a File**

Use `write()` to write a string, or `writelines()` to write a list of strings.

```python
with open("filename.txt", "w") as file:
    file.write("Hello, World!")
```

```python
with open("filename.txt", "w") as file:
    file.writelines(["Hello\n", "World\n"])
```

**3. Closing a File**

It's good practice to close a file after use with `file.close()`, but using a `with` statement is recommended since it closes the file automatically.

```
File example.txt created successfully.
Hello, world!

Text appended to file example.txt successfully.
Hello, world!
This is some additional text.

File example.txt renamed to new_example.txt successfully.
```

---

## Memory Management in Python

Memory management is handled automatically by the Python memory manager, which uses reference counting and garbage collection.

**Key Concepts:**

1. **Reference Counting** — every object has a reference count; when it reaches zero, the object is deleted automatically.
2. **Garbage Collection** — Python's garbage collector cleans up circular references (objects that reference each other in a cycle).

```python
import sys

x = 28
y = "a fairly long string example"

print("Memory size of x:", sys.getsizeof(x))
print("Memory size of y:", sys.getsizeof(y))
```

```
Memory size of x: 28
Memory size of y: 88
```

---

## Decorators in Python

Decorators modify the behavior of a function or class, and are declared just above the definition they decorate.

### 1. `property` Decorator (getter)

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name
```

### 2. Setter Decorator

Used to set the property.

```python
    @name.setter
    def name(self, new_name):
        self._name = new_name
```

### 3. Deleter Decorator

Used to delete the property.

```python
    @name.deleter
    def name(self):
        del self._name
```

---

## Libraries in Python

Libraries are collections of pre-written code that let us perform common tasks without writing everything from scratch. Python has a vast ecosystem of both built-in and third-party libraries.

### Basic Libraries

Part of Python's standard library, bundled with every installation:

1. **math** — mathematical functions such as trigonometric, logarithmic, and basic arithmetic operations.
2. **datetime** — works with dates and times; formatting and manipulation of date/time data.
3. **os** — interact with the operating system, such as files and directories.
4. **sys** — access system-specific parameters and functions, like the interpreter version or command-line arguments.

### Data Science and Analysis Libraries

Essential for data manipulation, analysis, and visualization:

1. **numpy** — a fundamental package for scientific computing, with support for large multidimensional arrays and matrices.
2. **pandas** — data manipulation and analysis, built around the DataFrame structure.
3. **matplotlib** — a 2D plotting library for static, animated, and interactive visualizations.

### Web Development Libraries

Help build and interact with web applications and services:

1. **flask** — a lightweight web framework for building web applications.
2. **requests** — a simple HTTP library for sending requests and handling responses.

### Machine Learning and AI Libraries

Help build ML models and work with AI algorithms:

1. **scikit-learn** — simple, efficient tools for data mining and data analysis.
2. **tensorflow** — a deep learning framework developed by Google, for building and training neural networks.

---

## Python Modules

A library is a group of modules that collectively address a certain set of requirements. A module is a `.py` file containing functions, classes, and variables related to a particular activity. Modules that ship with Python itself are called standard library modules.

**Interesting facts about modules:**

**1. `import this`** — Typing `import this` in the interpreter reveals "The Zen of Python," a short set of guiding principles for writing Python code, written by Tim Peters.

```python
import this
```

```
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
...
```

**2. The `antigravity` Easter egg** — Running `import antigravity` opens a web browser to a well-known programming webcomic referencing Python's name.

```python
import antigravity
```
