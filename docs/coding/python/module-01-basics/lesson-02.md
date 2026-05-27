# 📘 Lesson 02: Variables, Data Types & Input/Output in Python

> **Track:** Python Programming  
> **Module:** 01 — Foundations of Python  
> **Duration:** ~60 minutes  
> **Difficulty:** 🟢 Beginner  

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- [ ] Define what data and variables are and explain why they are needed
- [ ] Identify Python's core data types: `int`, `float`, `str`, `bool`
- [ ] Write variables using correct naming rules and conventions
- [ ] Use `input()` to collect data from a user
- [ ] Use `print()` for both formatted and unformatted output
- [ ] Write comments and apply correct indentation in Python
- [ ] Perform implicit and explicit type casting
- [ ] Perform basic string operations including concatenation and slicing

> **Why does this matter?**  
> Every program ever written — from a simple calculator to a social media platform — stores and processes data. Variables are the fundamental building blocks that make that possible. Master this lesson and you understand the core mechanism of all programming.

---

## 🧠 Concept Explanation

### What is Data?

**Data** is any piece of information that a computer can store and process. It can be a number, a piece of text, a true/false value, a date, an image — anything that carries meaning.

In programming, data flows through your program. You collect it (from users, files, or sensors), process it (calculate, compare, transform), and display or store the result. Data is the *raw material* of every program.

### What is a Variable?

A **variable** is a named storage location in your computer's memory where you can hold a piece of data. You give it a name, assign it a value, and then use that name whenever you need that value.

### 🌍 Real-World Analogy

> Think of a variable like a **labeled storage box on a shelf**.
>
> Just like a box labeled "Pencils" can hold pencils — and you can take them out, put new ones in, or check what's inside by reading the label — a variable holds data that you can read, update, or replace at any time.
>
> *Example: A variable called `score` might hold the number `0` at the start of a game, and `150` after you complete a level. The label stays the same; the contents change.*

---

## 📖 Core Content

### Creating Variables in Python

In Python, you create a variable simply by writing its name, an equals sign, and a value. There is no special keyword needed.

```python
# Creating variables — name = value
name = "Priya"          # Stores a piece of text (string)
age = 15                # Stores a whole number (integer)
height = 5.4            # Stores a decimal number (float)
is_student = True       # Stores a true/false value (boolean)

print(name)             # Output: Priya
print(age)              # Output: 15
```

**🔍 What's happening here?**
- Line 2: Python creates a box called `name` and puts the text `"Priya"` inside it
- Line 3: Python creates a box called `age` and puts the number `15` inside it
- Line 7: `print(name)` looks up the box labeled `name` and displays its contents

---

### Data Types in Python

Every value in Python has a **type** — which describes what kind of data it is and what operations are allowed on it.

#### The Four Core Data Types

**1. `int` — Integer (whole numbers)**

```python
age = 17
score = -5
population = 1000000

print(type(age))        # Output: <class 'int'>
```

Use `int` for counting, indexing, and any value that will never have a decimal part.

---

**2. `float` — Floating Point (decimal numbers)**

```python
temperature = 36.6
pi = 3.14159
price = 199.99

print(type(temperature))   # Output: <class 'float'>
```

Use `float` for measurements, prices, scientific values, or anything needing precision.

---

**3. `str` — String (text)**

```python
first_name = "Aarav"
greeting = 'Hello, World!'     # Single or double quotes both work
sentence = "I am learning Python."

print(type(first_name))        # Output: <class 'str'>
```

A string is any sequence of characters wrapped in quotes. Numbers inside quotes are also strings: `"42"` is a string, not an integer.

---

**4. `bool` — Boolean (True or False)**

```python
is_logged_in = True
has_passed_exam = False

print(type(is_logged_in))      # Output: <class 'bool'>
```

Booleans represent binary states. They're used heavily in conditions and decision-making (coming in a later lesson).

> 💬 **Try this:** Type `type(3.14)` and `type("hello")` in your Python environment. What does Python tell you about each?

---

### Rules for Naming a Variable

Python has strict rules and strong conventions for naming variables. Breaking the rules causes errors; breaking conventions makes your code hard to read.

#### ✅ Hard Rules (Breaking these = Error)

| Rule | Example — Correct | Example — Wrong |
|---|---|---|
| Must start with a letter or underscore `_` | `name`, `_score` | `1name`, `@value` |
| Can only contain letters, numbers, underscores | `user_name`, `score2` | `user-name`, `score#2` |
| Cannot be a Python keyword | `value`, `total` | `if`, `for`, `class` |
| Case-sensitive | `age` and `Age` are different variables | — |

#### 🎨 Conventions (Breaking these = bad style, not error)

- Use **snake_case** for variable names: `first_name`, `total_score`, `is_active`
- Use **ALL_CAPS** for constants: `MAX_SPEED = 300`, `PI = 3.14159`
- Keep names **descriptive**: `user_age` is better than `ua` or `x`
- Avoid single letters except in loops (`i`, `j`, `n`)

```python
# ✅ Good variable names
student_name = "Riya"
total_marks = 95
is_present = True

# ❌ Bad variable names (will cause errors)
# 2nd_student = "Riya"    # starts with a number
# first-name = "Riya"     # hyphens not allowed
# class = "Grade 10"      # 'class' is a Python keyword
```

---

### Python Keywords to Avoid as Variable Names

These words are reserved by Python and cannot be used as variable names:

```
False    None     True     and      as       assert
async    await    break    class    continue def
del      elif     else     except   finally  for
from     global   if       import   in       is
lambda   nonlocal not      or       pass     raise
return   try      while    with     yield
```

---

### Input in Python — `input()`

The `input()` function pauses your program and waits for the user to type something and press Enter. Whatever they type is returned as a **string**.

```python
# Basic input — always returns a string
name = input("What is your name? ")    # The text inside is the prompt shown to the user
print("Hello,", name)
```

**Output:**
```
What is your name? Aarav
Hello, Aarav
```

**🔍 What's happening here?**
- `input("What is your name? ")` displays the prompt and waits
- The user types `Aarav` and presses Enter
- Python stores `"Aarav"` (as a string) in the variable `name`
- `print()` displays the result

> ⚠️ **Important:** `input()` *always* returns a string — even if the user types a number. `age = input("Enter age: ")` gives you `"15"` (string), not `15` (integer). You must convert it. We'll cover this in the Type Casting section.

---

### Output in Python — `print()`

`print()` is your tool for displaying data. It supports two styles: **unformatted** and **formatted**.

#### Unformatted Output

The simplest form — just pass values separated by commas.

```python
name = "Sita"
age = 16
city = "Pokhara"

# Comma-separated — Python adds a space between items automatically
print("Name:", name)
print("Age:", age)
print(name, "is", age, "years old and lives in", city)
```

**Output:**
```
Name: Sita
Age: 16
Sita is 16 years old and lives in Pokhara
```

#### Formatted Output — f-strings (Recommended)

**f-strings** (formatted string literals) let you embed variables directly inside strings using `{}`. They're the modern, preferred way to format output.

```python
name = "Sita"
age = 16
score = 95.5

# f-string: put f before the quote, variables go inside {}
print(f"Name: {name}")
print(f"{name} is {age} years old.")
print(f"Score: {score:.1f}")     # .1f means 1 decimal place
```

**Output:**
```
Name: Sita
Sita is 16 years old.
Score: 95.5
```

#### Formatted Output — `.format()` Method

An older but still widely used formatting style:

```python
name = "Ram"
age = 18

print("Hello, {}. You are {} years old.".format(name, age))
print("Pi is approximately {:.2f}".format(3.14159))   # 2 decimal places
```

**Output:**
```
Hello, Ram. You are 18 years old.
Pi is approximately 3.14
```

#### Useful `print()` Parameters

```python
# sep — changes what goes between items (default is a space)
print("A", "B", "C", sep="-")          # Output: A-B-C
print("2024", "01", "15", sep="/")     # Output: 2024/01/15

# end — changes what comes after the last item (default is a new line)
print("Hello", end=" ")
print("World")                          # Output: Hello World (on one line)

# Printing an empty line
print()                                 # Prints nothing, creates a blank line
```

> 💬 **Try this:** Change the `sep` and `end` values and observe how the output changes.

---

### Comments in Python

**Comments** are notes you write in your code for yourself and other programmers. Python completely ignores them when running your program.

#### Single-Line Comments

Use `#` — everything after it on that line is a comment.

```python
# This is a full-line comment
name = "Anjali"   # This is an inline comment — explains what this line does

# The line below is "commented out" — Python won't run it
# print("This will not appear")

print(name)       # Output: Anjali
```

#### Multi-Line Comments (Docstrings)

Python doesn't have a true multi-line comment syntax, but triple quotes `"""` or `'''` are commonly used for longer explanations.

```python
"""
This program calculates the average of three scores.
Author: Aarav Sharma
Date: January 2024
"""

score1 = 85
score2 = 90
score3 = 78
average = (score1 + score2 + score3) / 3
print(f"Average score: {average:.1f}")
```

> 📌 **Best Practice:** Write comments that explain *why* you're doing something, not just *what* you're doing. `# add 1 to count` is obvious; `# add 1 because array index starts at 0` is useful.

---

### Indentation in Python

Indentation is not just style in Python — **it is part of the syntax**. Python uses indentation (spaces or tabs) to define blocks of code (like the body of a function, loop, or condition). Getting it wrong causes an `IndentationError`.

```python
# Correct indentation — the print inside if is indented
age = 18
if age >= 18:
    print("You are an adult.")    # 4 spaces indent
    print("You can vote.")        # Same block = same indent

print("This line is outside the if block.")   # No indent
```

**Output:**
```
You are an adult.
You can vote.
This line is outside the if block.
```

**Rules:**
- Use **4 spaces** per indentation level (the Python community standard)
- Be consistent — don't mix tabs and spaces
- VS Code automatically handles indentation for you

```python
# ❌ IndentationError — inconsistent indentation
if True:
  print("Two spaces")    # 2 spaces
    print("Four spaces") # 4 spaces — ERROR: unexpected indent
```

---

### Type Casting in Python

**Type casting** means converting a value from one data type to another. This is essential because `input()` always returns strings, but you often need numbers.

#### Implicit Type Casting (Automatic)

Python automatically converts types when it's safe to do so — typically from `int` to `float`.

```python
x = 5       # int
y = 2.0     # float

result = x + y          # Python automatically converts x to float
print(result)           # Output: 7.0
print(type(result))     # Output: <class 'float'>
```

Python widened `int` to `float` without any instruction because no data is lost.

---

#### Explicit Type Casting (Manual)

You force the conversion using built-in functions.

| Function | Converts to | Example |
|---|---|---|
| `int()` | Integer | `int("15")` → `15` |
| `float()` | Float | `float("3.14")` → `3.14` |
| `str()` | String | `str(42)` → `"42"` |
| `bool()` | Boolean | `bool(0)` → `False` |

```python
# int() — converting string input to integer for math
age_str = input("Enter your age: ")    # Returns "17" (string)
age = int(age_str)                     # Convert to integer
print(f"In 5 years, you will be {age + 5} years old.")

# float() — converting string to decimal
price_str = "99.99"
price = float(price_str)
discounted = price * 0.9              # 10% off
print(f"Discounted price: {discounted:.2f}")

# str() — converting number to string for display
score = 95
message = "Your score is " + str(score) + " out of 100."
print(message)
```

**Output:**
```
Enter your age: 17
In 5 years, you will be 22 years old.
Discounted price: 89.99
Your score is 95 out of 100.
```

> ⚠️ **Watch out:** `int("hello")` will cause a `ValueError` — you can only convert strings that actually look like numbers. Always validate user input in real programs.

---

### String Operations in Python

Strings are one of the most powerful data types in Python, with many built-in operations.

#### Concatenation — Joining Strings

Use `+` to join two or more strings together.

```python
first = "Guido"
last = "van Rossum"
full_name = first + " " + last    # Must manually add the space
print(full_name)                   # Output: Guido van Rossum
```

#### Repetition — Repeating Strings

Use `*` to repeat a string a number of times.

```python
print("Ha" * 3)       # Output: HaHaHa
print("-" * 30)       # Output: ------------------------------ (30 dashes, great for separators)
```

#### String Length — `len()`

```python
name = "Kathmandu"
print(len(name))      # Output: 9
```

#### Indexing — Accessing Individual Characters

Strings are indexed starting from `0`. Use negative indices to count from the end.

```python
word = "Python"
#        P y t h o n
# Index: 0 1 2 3 4 5
# Neg:  -6-5-4-3-2-1

print(word[0])    # Output: P   (first character)
print(word[3])    # Output: h
print(word[-1])   # Output: n   (last character)
print(word[-2])   # Output: o
```

#### Slicing — Extracting a Portion of a String

Syntax: `string[start:stop:step]`
- `start` — index to begin (inclusive)
- `stop` — index to end (exclusive — the character at this index is NOT included)
- `step` — how many characters to skip (default is 1)

```python
text = "Python Programming"
#       0123456789...

print(text[0:6])      # Output: Python     (characters 0 to 5)
print(text[7:])       # Output: Programming (from index 7 to end)
print(text[:6])       # Output: Python     (from start to index 5)
print(text[::2])      # Output: Pto rgamn  (every second character)
print(text[::-1])     # Output: gnimmargorP nohtyP (reversed!)
```

#### Common String Methods

```python
message = "  Hello, World!  "

print(message.upper())        # Output:   HELLO, WORLD!  
print(message.lower())        # Output:   hello, world!  
print(message.strip())        # Output: Hello, World!   (removes whitespace)
print(message.replace("World", "Python"))   # Output:   Hello, Python!  
print(message.strip().split(", "))          # Output: ['Hello', 'World!']

sentence = "python is amazing"
print(sentence.capitalize())  # Output: Python is amazing
print(sentence.title())       # Output: Python Is Amazing
print(sentence.count("is"))   # Output: 1
print(sentence.startswith("python"))  # Output: True
```

> 💬 **Try this:** Take the string `"CodeCraft Learning Lab"` and use slicing to extract just the word `"Learning"`.

---

## 🛠️ Step-by-Step Activity

> Follow these steps carefully. We're building a personal profile program from scratch.

**What we're building:** A program that asks for user information and displays a formatted personal profile card.

**What you need:**
- [ ] VS Code with `lesson_02.py` open, OR a new Replit project

---

**Step 1 — Collect User Information with `input()`**

```python
# Step 1: Collect basic user information
print("=" * 35)
print("   Welcome to Profile Creator!")
print("=" * 35)

name = input("Enter your full name: ")
age_str = input("Enter your age: ")
city = input("Enter your city: ")
hobby = input("Enter your favourite hobby: ")
```

---

**Step 2 — Convert and Process the Data**

```python
# Step 2: Convert age from string to integer
age = int(age_str)

# Calculate some additional info
birth_year = 2024 - age
name_length = len(name)
initials = name[0]    # First character of name
```

---

**Step 3 — Display a Formatted Profile Card**

```python
# Step 3: Display the formatted profile
print()
print("=" * 35)
print("        YOUR PROFILE CARD")
print("=" * 35)
print(f"  Name     : {name}")
print(f"  Age      : {age} years old")
print(f"  Born     : {birth_year} (approx.)")
print(f"  City     : {city}")
print(f"  Hobby    : {hobby}")
print(f"  Initials : {initials}")
print(f"  Name has : {name_length} characters")
print("=" * 35)
```

---

**Step 4 — Run & Test**

Save the file and run it. Enter your actual details when prompted.

You should see something like:

```
===================================
   Welcome to Profile Creator!
===================================
Enter your full name: Aarav Sharma
Enter your age: 15
Enter your city: Kathmandu
Enter your favourite hobby: coding

===================================
        YOUR PROFILE CARD
===================================
  Name     : Aarav Sharma
  Age      : 15 years old
  Born     : 2009 (approx.)
  City     : Kathmandu
  Hobby    : coding
  Initials : A
  Name has : 12 characters
===================================
```

❓ **If you see an error:** If Python says `ValueError: invalid literal for int()`, you accidentally typed letters instead of a number for your age. Check that `int(age_str)` is on its own line and that you typed a number when prompted.

---

## 🏋️ Hands-On Exercise

> **Do this on your own.** It's okay to look back at the examples above.

**Exercise: Temperature Converter**

Build a program that asks the user for a temperature in Celsius and converts it to Fahrenheit.

**Requirements:**
- Use `input()` to get a Celsius temperature from the user
- Convert it to a float with `float()`
- Use the formula: `fahrenheit = (celsius * 9/5) + 32`
- Display the result formatted to 1 decimal place using an f-string
- Use at least two comments in your code

**Expected output:**
```
Enter temperature in Celsius: 100
100.0°C is equal to 212.0°F
```

<details>
<summary>💡 Hint (click only if stuck)</summary>

You need `float()` not `int()` for temperature — users might type `36.6`. The formula is: `fahrenheit = (celsius * 9/5) + 32`. Use an f-string with `{celsius:.1f}` and `{fahrenheit:.1f}` to format to one decimal place.

</details>

---

## 🔥 Challenge Task

> This is harder. It's okay if it takes longer — that means you're really thinking.

**Challenge: Word Inspector**

Build a program that takes any word or sentence from the user and performs a full analysis on it.

**It should display:**
- The original input
- The input in ALL CAPS
- The input in all lowercase
- The number of characters (including spaces)
- The first and last character
- The string reversed (use slicing `[::-1]`)
- Whether the input starts with a vowel (a, e, i, o, u) — True or False

**Example output:**
```
Enter a word or sentence: Python Rocks

--- Word Inspector Results ---
Original  : Python Rocks
Uppercase : PYTHON ROCKS
Lowercase : python rocks
Length    : 12 characters
First char: P
Last char : s
Reversed  : skcoR nohtyP
Starts with vowel: False
```

**Extension ideas (if you finish early):**
- Count how many vowels appear in the input
- Count how many spaces are in the input using `.count(" ")`

---

## 🧪 Quick Quiz

> Test yourself! No peeking at the lesson.

**1.** Which of the following is a valid Python variable name?

   - a) `2score`
   - b) `my-name`
   - c) `first_name`
   - d) `for`

**2.** What does this code print?
```python
x = "5"
y = 3
print(int(x) + y)
```

   - a) `53`
   - b) `8`
   - c) `TypeError — can't add string and int`
   - d) `5y`

**3.** What does `input()` always return?

   - a) An integer
   - b) A float
   - c) A string
   - d) A boolean

**4.** What is the output of:
```python
word = "Learning"
print(word[0:4])
```

   - a) `earn`
   - b) `Lear`
   - c) `Lea`
   - d) `Learning`

**5.** Write a line of code that converts the string `"42"` to an integer and stores it in a variable called `num`.

<details>
<summary>✅ Answer Key</summary>

1. **c) `first_name`** — `2score` starts with a digit, `my-name` uses a hyphen, and `for` is a Python keyword.
2. **b) `8`** — `int("5")` converts the string to integer `5`, then `5 + 3 = 8`.
3. **c) A string** — `input()` always returns a string, even if the user types a number. You must cast it manually.
4. **b) `Lear`** — Slicing `[0:4]` takes characters at index 0, 1, 2, 3 (stop index 4 is excluded). `L(0) e(1) a(2) r(3)` = `"Lear"`.
5. `num = int("42")`

</details>

---

## 🌐 Real-World Connection

> **Where is this used in the real world?**

Every time you create an account on a website, variables store your username, age, email, and preferences. When an online store displays "Hello, Priya! You have 3 items in your cart," that's a string with embedded variables — exactly what you built today with f-strings. When a banking app converts your currency, it's using type casting to ensure the input (always a string from the keyboard) becomes a precise float for accurate financial calculations. The concepts from this lesson are the atomic building blocks of every software application in existence.

---

## 📝 Lesson Summary

| Concept | What it does | Quick example |
|---|---|---|
| Variable | Stores a value with a name | `age = 15` |
| `int` | Whole number data type | `score = 100` |
| `float` | Decimal number data type | `gpa = 3.85` |
| `str` | Text/string data type | `name = "Riya"` |
| `bool` | True or False data type | `is_active = True` |
| `input()` | Gets keyboard input from user | `name = input("Name: ")` |
| `print()` | Displays output on screen | `print(f"Hello, {name}")` |
| `int()` | Converts to integer | `int("15")` → `15` |
| `float()` | Converts to float | `float("3.14")` → `3.14` |
| `str()` | Converts to string | `str(42)` → `"42"` |
| `len()` | Length of a string | `len("Python")` → `6` |
| String slicing | Extracts part of a string | `"Python"[0:3]` → `"Pyt"` |
| `#` comment | Adds human-readable notes | `# This explains the code` |

**Key takeaways:**
- 📌 Variables store data — give them clear, descriptive names using snake_case
- 📌 `input()` always returns a string — use `int()` or `float()` to convert when needed
- 📌 f-strings (`f"Hello, {name}"`) are the cleanest, most readable way to format output
- 📌 Indentation in Python is not optional — it defines the structure of your code

---

## ➡️ What's Next?

In the next lesson, we'll explore **Operators & Expressions** — learning how to perform calculations, make comparisons, and combine logic to build programs that make real decisions.

Before you go:
- [ ] I completed the temperature converter exercise
- [ ] I attempted the word inspector challenge
- [ ] I can explain the difference between `int`, `float`, `str`, and `bool`
- [ ] I know how to use `input()` and format output with f-strings

---

*Lesson 02 of 03 · Module 01: Python Basics · Python Track · CodeCraft Learning Lab*