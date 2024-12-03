# Chapter 22. Control Flow: if-else and conditional Operators
print("Welcome to Conditional Operators")
height = int(input("Enter your Height (in cm): "))

if height > 120:
    print("Your height is acceptable")
else:
    print("Mummy ko bolo Complain pilaye");

''' 
    Comparison Operators    >, <, >=, <=, ==
    Modulo Operator         % Gives remainder e.g 10 % 3 = 1 
'''

# Chapter 23. Modulo Operator
num_check = int(input("What is the number you want to check? "))

if num_check % 2 == 0:
    print("Even")
else:
    print("Odd")

# Chapter 24. Nested if-else condition
if height > 120:
    print("Your height is acceptable")
    age = int(input("What is your age? "))
    if age < 18:
        print("Go and Study")
    elif age > 18 and age < 40:
        print("You can ride")
    else:
        print("You can rest now..")
else:
    print("Mummy ko bolo Complain pilaye");

# Coding Practice
weight = 85
height = 1.85

bmi = weight / (height ** 2)

# 🚨 Do not modify the values above
# Write your code below 👇

if bmi < 18.5:
    print("underweight")
elif bmi >= 18.5 and bmi < 25:
    print("normal weight")
else:
    print("overweight")

# Chapter 25. Multiple If Statements in Succession

# Chapter 27. Logical Operators
a = 12

print("\n")
print(a > 15)
print(a < 15)
print(a < 15 and a > 10)
print(a > 15 and a < 10)
print(a > 15 or a > 10)

a = 5
b = 7
print("\n")
if a >= b and a != b:
    print("A")
elif not a >= b and a != b:
    print("B")
else:
    print("C")