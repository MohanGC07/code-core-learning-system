# 📘 Lesson 03: Operators & Expressions in Python

> **Track:** Python Programming  
> **Module:** 01 — Foundations of Python  
> **Duration:** ~60 minutes  
> **Difficulty:** 🟢 Beginner  

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- [ ] Use all Python arithmetic operators to perform calculations
- [ ] Apply comparison operators to evaluate relationships between values
- [ ] Combine conditions using logical operators (`and`, `or`, `not`)
- [ ] Use assignment operators as shortcuts to update variable values
- [ ] Understand operator precedence and predict the order of operations
- [ ] Build Python expressions that combine multiple operators

> **Why does this matter?**  
> Operators are the verbs of programming — they make things *happen*. Every calculation, every decision, every filter in software is built from the same set of operators you'll master in this lesson. Without them, a program can only store data but never do anything useful with it.

---

## 🧠 Concept Explanation

### What is an Operator?

An **operator** is a special symbol that tells Python to perform a specific action on one or more values. The values an operator acts on are called **operands**.

```python
result = 10 + 5
#        ^^   ^
#   operand operator operand
```

### What is an Expression?

An **expression** is any combination of values, variables, and operators that Python can evaluate to produce a result.

```python
3 + 4           # Expression → evaluates to 7
age * 2         # Expression → evaluates to double the age
(x + y) / 2    # Expression → evaluates to the average of x and y
```

### 🌍 Real-World Analogy

> Think of operators like the **buttons on a calculator**.
>
> Just like pressing `+`, `-`, `×`, or `÷` tells the calculator what to *do* with the numbers, Python's operators tell the computer what to do with your data.
>
> *But Python's "calculator" can do much more than math — it can compare, decide, and combine logic all at once.*

---

## 📖 Core Content

### Arithmetic Operators

These perform mathematical calculations, just like a calculator.

| Operator | Name | Description | Example | Result |
|---|---|---|---|---|
| `+` | Addition | Adds two values | `7 + 3` | `10` |
| `-` | Subtraction | Subtracts right from left | `7 - 3` | `4` |
| `*` | Multiplication | Multiplies two values | `7 * 3` | `21` |
| `/` | Division | Divides (always returns float) | `7 / 2` | `3.5` |
| `//` | Floor Division | Divides, rounds down to integer | `7 // 2` | `3` |
| `%` | Modulus | Returns the remainder | `7 % 2` | `1` |
| `**` | Exponentiation | Raises to a power | `2 ** 8` | `256` |

```python
a = 17
b = 5

print(a + b)    # Output: 22   — addition
print(a - b)    # Output: 12   — subtraction
print(a * b)    # Output: 85   — multiplication
print(a / b)    # Output: 3.4  — division (always float)
print(a // b)   # Output: 3    — floor division (integer part only)
print(a % b)    # Output: 2    — remainder (17 = 3×5 + 2)
print(a ** b)   # Output: 1419857  — 17 to the power of 5
```

**🔍 Understanding Floor Division and Modulus:**

Think of `//` and `%` together like doing long division:
- `17 // 5` = `3` (how many times does 5 go into 17? Three times)
- `17 % 5` = `2` (what's left over? 17 − 15 = 2)

```python
# Practical use of modulus: checking if a number is even or odd
number = 28
remainder = number % 2
print(remainder)      # Output: 0 — even (no remainder when divided by 2)

number2 = 15
print(number2 % 2)    # Output: 1 — odd (remainder of 1)
```

> 💬 **Try this:** What is `100 // 7`? What is `100 % 7`? Verify with Python and confirm that `(100 // 7) * 7 + (100 % 7) == 100`.

---

### Comparison Operators

Comparison operators **compare two values** and always return either `True` or `False` — a boolean.

| Operator | Name | Example | Result |
|---|---|---|---|
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `5 != 3` | `True` |
| `>` | Greater than | `7 > 3` | `True` |
| `<` | Less than | `3 < 7` | `True` |
| `>=` | Greater than or equal to | `5 >= 5` | `True` |
| `<=` | Less than or equal to | `4 <= 3` | `False` |

```python
age = 16
voting_age = 18

print(age == voting_age)    # Output: False  (16 is not equal to 18)
print(age != voting_age)    # Output: True   (16 is different from 18)
print(age < voting_age)     # Output: True   (16 is less than 18)
print(age >= 16)            # Output: True   (16 is equal to 16)
print(age > 20)             # Output: False  (16 is not greater than 20)
```

> ⚠️ **Common Mistake:** Don't confuse `=` (assignment — gives a value to a variable) with `==` (comparison — checks if two values are equal). `age = 16` stores 16; `age == 16` checks if it equals 16.

```python
# ❌ Wrong — this assigns, not compares
# if age = 18:   ← SyntaxError

# ✅ Right — this compares
# if age == 18:  ← Correct
```

---

### Logical Operators

Logical operators combine multiple boolean expressions into one. They're the foundation of decision-making in code.

| Operator | Description | Returns `True` when... |
|---|---|---|
| `and` | Both conditions must be true | Both left AND right are `True` |
| `or` | At least one condition must be true | Left OR right (or both) are `True` |
| `not` | Reverses a boolean value | The condition is `False` |

```python
age = 16
has_id = True
is_member = False

# and — BOTH must be True
print(age >= 16 and has_id)          # Output: True  (16 ≥ 16 AND has ID)
print(age >= 18 and has_id)          # Output: False (age fails the check)

# or — AT LEAST ONE must be True
print(age >= 18 or is_member)        # Output: False (neither is True)
print(age >= 16 or is_member)        # Output: True  (first condition is True)

# not — REVERSES the boolean
print(not is_member)                 # Output: True  (not False = True)
print(not has_id)                    # Output: False (not True = False)
```

**Truth Tables — Understanding `and` / `or`**

```
AND          |  OR
True  and True  = True    |  True  or True  = True
True  and False = False   |  True  or False = True
False and True  = False   |  False or True  = True
False and False = False   |  False or False = False
```

```python
# Real-world example: checking login conditions
username_correct = True
password_correct = False

can_login = username_correct and password_correct
print(can_login)       # Output: False — both must be correct to log in

# Guest access — either admin OR registered user is allowed
is_admin = False
is_registered = True
can_enter = is_admin or is_registered
print(can_enter)       # Output: True
```

---

### Assignment Operators

Assignment operators are **shortcuts** that update a variable's value based on itself. Instead of writing `x = x + 5`, you write `x += 5`.

| Operator | Equivalent to | Example | Result (if x = 10) |
|---|---|---|---|
| `=` | — | `x = 10` | `x` is `10` |
| `+=` | `x = x + n` | `x += 5` | `x` becomes `15` |
| `-=` | `x = x - n` | `x -= 3` | `x` becomes `7` |
| `*=` | `x = x * n` | `x *= 2` | `x` becomes `20` |
| `/=` | `x = x / n` | `x /= 4` | `x` becomes `2.5` |
| `//=` | `x = x // n` | `x //= 3` | `x` becomes `3` |
| `%=` | `x = x % n` | `x %= 3` | `x` becomes `1` |
| `**=` | `x = x ** n` | `x **= 2` | `x` becomes `100` |

```python
score = 0          # Player starts with score 0

score += 10        # Player collects a coin
print(score)       # Output: 10

score += 25        # Player completes a level
print(score)       # Output: 35

score -= 5         # Player hit an obstacle — penalty
print(score)       # Output: 30

score *= 2         # Double score bonus activated!
print(score)       # Output: 60

# Building strings with +=
message = "Hello"
message += ", World"
message += "!"
print(message)     # Output: Hello, World!
```

> 💬 **Try this:** Create a variable `counter = 0` and use `+=` in five steps to reach the value 100 using only `+=`.

---

### Operator Precedence — Order of Operations

When an expression has multiple operators, Python follows a specific order — just like BODMAS/PEMDAS in mathematics.

**Python's order (highest to lowest precedence):**

| Priority | Operator | Name |
|---|---|---|
| 1 (highest) | `()` | Parentheses |
| 2 | `**` | Exponentiation |
| 3 | `+x`, `-x` | Unary plus/minus |
| 4 | `*`, `/`, `//`, `%` | Multiplication, division, modulus |
| 5 | `+`, `-` | Addition, subtraction |
| 6 | `==`, `!=`, `<`, `>`, `<=`, `>=` | Comparison |
| 7 | `not` | Logical NOT |
| 8 | `and` | Logical AND |
| 9 (lowest) | `or` | Logical OR |

```python
# Without parentheses — follows precedence
result = 2 + 3 * 4
print(result)         # Output: 14  (3 * 4 = 12 first, then 2 + 12)

# With parentheses — overrides precedence
result = (2 + 3) * 4
print(result)         # Output: 20  (2 + 3 = 5 first, then 5 * 4)

# Complex expression
x = 10
y = 3
z = 2
answer = x + y ** z - 4 // 3
#        10 + (3**2) - (4//3)
#        10 + 9 - 1
#        18
print(answer)         # Output: 18
```

> 📌 **Best Practice:** When in doubt, use parentheses `()` to make your intention clear — even if Python would calculate the same answer without them. `(a + b) * c` is clearer than `a + b * c` when you mean to add first.

---

### Combining Operators — Building Real Expressions

In real programs, you'll combine multiple operators in meaningful ways.

```python
# Calculate a student's grade
marks_obtained = 82
total_marks = 100
percentage = (marks_obtained / total_marks) * 100

print(f"Percentage: {percentage:.1f}%")     # Output: Percentage: 82.0%
print(f"Passed: {percentage >= 40}")         # Output: Passed: True

# Calculate discounted price
original_price = 1500
discount_percent = 20
discount_amount = original_price * (discount_percent / 100)
final_price = original_price - discount_amount

print(f"Original: Rs. {original_price}")
print(f"Discount: Rs. {discount_amount:.0f}")
print(f"Final: Rs. {final_price:.0f}")

# Check if a year is a leap year
year = 2024
is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
print(f"{year} is a leap year: {is_leap}")   # Output: 2024 is a leap year: True
```

---

## 🛠️ Step-by-Step Activity

> Follow these steps carefully. We're building a smart bill calculator.

**What we're building:** A restaurant bill calculator that takes item prices, calculates tax and tip, and displays a formatted receipt.

**What you need:**
- [ ] VS Code with `lesson_03.py` open, OR a new Replit project

---

**Step 1 — Get Item Prices from User**

```python
# Step 1: Get item prices
print("=" * 40)
print("     RESTAURANT BILL CALCULATOR")
print("=" * 40)

item1_name = input("Enter item 1 name: ")
item1_price = float(input(f"Price of {item1_name}: Rs. "))

item2_name = input("Enter item 2 name: ")
item2_price = float(input(f"Price of {item2_name}: Rs. "))

item3_name = input("Enter item 3 name: ")
item3_price = float(input(f"Price of {item3_name}: Rs. "))
```

---

**Step 2 — Perform Calculations**

```python
# Step 2: Calculate totals
subtotal = item1_price + item2_price + item3_price

tax_rate = 0.13            # 13% VAT
tip_rate = 0.10            # 10% service charge

tax_amount = subtotal * tax_rate
tip_amount = subtotal * tip_rate
grand_total = subtotal + tax_amount + tip_amount

split_two = grand_total / 2    # Split between 2 people
```

---

**Step 3 — Display the Receipt**

```python
# Step 3: Print the formatted receipt
print()
print("=" * 40)
print("             RECEIPT")
print("=" * 40)
print(f"  {item1_name:<20} Rs. {item1_price:>7.2f}")
print(f"  {item2_name:<20} Rs. {item2_price:>7.2f}")
print(f"  {item3_name:<20} Rs. {item3_price:>7.2f}")
print("-" * 40)
print(f"  {'Subtotal':<20} Rs. {subtotal:>7.2f}")
print(f"  {'Tax (13%)':<20} Rs. {tax_amount:>7.2f}")
print(f"  {'Service (10%)':<20} Rs. {tip_amount:>7.2f}")
print("=" * 40)
print(f"  {'GRAND TOTAL':<20} Rs. {grand_total:>7.2f}")
print("=" * 40)
print(f"\n  Split between 2: Rs. {split_two:.2f} each")
```

---

**Step 4 — Run & Test**

Run your program and enter some items. Expected output (example):

```
========================================
     RESTAURANT BILL CALCULATOR
========================================
Enter item 1 name: Momo
Price of Momo: Rs. 200
Enter item 2 name: Thukpa
Price of Thukpa: Rs. 280
Enter item 3 name: Lassi
Price of Lassi: Rs. 120

========================================
             RECEIPT
========================================
  Momo                 Rs.  200.00
  Thukpa               Rs.  280.00
  Lassi                Rs.  120.00
----------------------------------------
  Subtotal             Rs.  600.00
  Tax (13%)            Rs.   78.00
  Service (10%)        Rs.   60.00
========================================
  GRAND TOTAL          Rs.  738.00
========================================

  Split between 2: Rs. 369.00 each
```

❓ **If you see an error:** If you get `ValueError`, make sure you type only numbers (with decimals if needed) when asked for prices. If the columns don't align, check the `:<20` and `:>7.2f` formatting codes inside the f-strings.

---

## 🏋️ Hands-On Exercise

> **Do this on your own.** It's okay to look back at the examples above.

**Exercise: Body Mass Index (BMI) Calculator**

Build a program that calculates a user's BMI.

**Requirements:**
- Ask the user for their name, weight (in kg), and height (in meters)
- Use the formula: `bmi = weight / (height ** 2)`
- Display the BMI rounded to 2 decimal places
- Display whether the result is `>= 18.5` (i.e., not underweight) using a comparison operator in the output
- Use at least one assignment operator shortcut (`+=`, `*=`, etc.) somewhere in your code

**Expected output:**
```
Enter your name: Priya
Enter weight (kg): 55
Enter height (meters): 1.62

--- BMI Report for Priya ---
Weight : 55.0 kg
Height : 1.62 m
BMI    : 20.95
Not underweight (BMI ≥ 18.5): True
```

<details>
<summary>💡 Hint (click only if stuck)</summary>

Use `float()` for both weight and height since they can have decimals. The BMI formula is `weight / (height ** 2)` — note that `height ** 2` needs parentheses to be calculated first. For the comparison, write `bmi >= 18.5` inside your f-string or print statement.

</details>

---

## 🔥 Challenge Task

> This is harder. It's okay if it takes longer — that means you're really thinking.

**Challenge: Number Analysis Tool**

Build a program that takes any whole number from the user and performs a complete mathematical analysis on it.

**It should display:**
- Whether the number is even or odd (use `%`)
- The square and cube of the number (use `**`)
- The result of dividing it by 7 using both `/` and `//`
- The remainder when divided by 7 (use `%`)
- Whether the number is greater than 100 AND divisible by 5 (combine `>` with `%` and `and`)
- Whether the number is a multiple of 3 OR a multiple of 5 (use `or`)

**Example output (for input 105):**
```
Enter a whole number: 105

--- Number Analysis: 105 ---
Even?           : False
Odd?            : True
Square          : 11025
Cube            : 1157625
105 ÷ 7 (exact): 15.0
105 ÷ 7 (floor) : 15
105 mod 7       : 0
> 100 and ÷5?   : True
Multiple of 3 or 5?: True
```

**Extension ideas (if you finish early):**
- Add a check for whether the number is a perfect square (hint: `int(num**0.5)**2 == num`)
- Display the number in binary using Python's `bin()` function

---

## 🧪 Quick Quiz

> Test yourself! No peeking at the lesson.

**1.** What is the result of `15 % 4`?

   - a) `3`
   - b) `3.75`
   - c) `4`
   - d) `1`

**2.** What does this code print?
```python
x = 10
x += 5
x *= 2
print(x)
```

   - a) `20`
   - b) `25`
   - c) `30`
   - d) `15`

**3.** Which expression evaluates to `True`?

   - a) `5 > 10 and 3 < 7`
   - b) `5 > 10 or 3 < 7`
   - c) `not True and True`
   - d) `5 == 4 or 2 > 9`

**4.** What is the output of:
```python
print(2 + 3 * 4 - 1)
```

   - a) `19`
   - b) `13`
   - c) `20`
   - d) `21`

**5.** Write an expression that checks if a variable `score` is between 50 and 100 (inclusive on both ends). Use `and` in your answer.

<details>
<summary>✅ Answer Key</summary>

1. **a) `3`** — `15 = 3 × 4 + 3`, so the remainder is `3`. Use long division: 4 goes into 15 three times (12), with 3 left over.
2. **c) `30`** — `x` starts at `10`. After `x += 5`, `x = 15`. After `x *= 2`, `x = 30`.
3. **b) `5 > 10 or 3 < 7`** — `5 > 10` is `False`, but `3 < 7` is `True`. `False or True = True`.
4. **b) `13`** — Precedence: `3 * 4 = 12` first, then `2 + 12 - 1 = 13`.
5. `score >= 50 and score <= 100`

</details>

---

## 🌐 Real-World Connection

> **Where is this used in the real world?**

Every time a streaming service decides whether to show you an ad, it evaluates a logical expression: `is_premium_member or has_free_trial_active`. When your bank app calculates interest on your savings, it uses exponentiation (`principal * (1 + rate) ** years`). When a game decides if your character can enter a zone, it checks: `player_level >= zone_minimum and has_required_item`. The modulus operator (`%`) powers everything from scheduling algorithms ("every 7th day") to encryption systems that secure your passwords online. Operators are not abstract math — they are the logic that powers every decision every app makes, millions of times per second.

---

## 📝 Lesson Summary

| Operator Type | Symbols | Purpose |
|---|---|---|
| Arithmetic | `+` `-` `*` `/` `//` `%` `**` | Perform mathematical calculations |
| Comparison | `==` `!=` `>` `<` `>=` `<=` | Compare values, return `True`/`False` |
| Logical | `and` `or` `not` | Combine boolean conditions |
| Assignment | `=` `+=` `-=` `*=` `/=` etc. | Store or update variable values |

**Key takeaways:**
- 📌 `/` always returns a float; `//` returns the integer quotient; `%` returns the remainder
- 📌 Comparison operators always return `True` or `False` — never confuse `=` (assign) with `==` (compare)
- 📌 Python follows BODMAS/PEMDAS — use parentheses `()` to control the order when in doubt
- 📌 `and` requires BOTH conditions to be true; `or` requires only ONE; `not` flips the result

---

## ➡️ What's Next?

In the next module, we'll explore **Conditional Statements (if / elif / else)** — using the comparison and logical operators you just learned to make your programs take different actions based on different situations.

Before you go:
- [ ] I completed the BMI calculator exercise
- [ ] I attempted the number analysis challenge
- [ ] I can explain the difference between `/`, `//`, and `%`
- [ ] I understand operator precedence and when to use parentheses

---

*Lesson 03 of 03 · Module 01: Python Basics · Python Track · CodeCraft Learning Lab*