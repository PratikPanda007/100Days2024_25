# Chapter 14. Python Primitive Data Type

print(len("Hello"))     # 5
# print(len(12345))     # TypeError

print("Hello"[0])       # Character Printing
print("Hello"[len("Hello") - 1])       # Last Character = Length of the string -1 (Because it starts from 0 not 1)
print("Hello"[-1])      # Last Character

# Data Type
# 1. Integer = Whole Number
print(123 + 345)

# 2. Large Integers
print(123_456_789)      # Only used for Visual Representation.

# 3. Floating Number
print(3.14159)

# 4. Boolean
print(True)

# Chapter 15. Type Error, Type Checking and Type Conversion
# print(len(12345))  # TypeError as it is a numeric value and they don't have any length

# CHeck Data Type
print(type("Hello"))
print(type(123))
print(type(3.14156))
print(type(False))

# Type Conversion
# print("123" + "456")
print(int("123") + int("456"))

'''
    str()
    int()
    float()
    bool()
'''

print("Number of letter in your name: " + str(len(input("Enter your Name: "))))

# Chapter 16. Mathematical Operations in Python

print("My Age is: " + str(12))

print(50 / 5)
print(50 // 5)      # Floor division
print(24 * 5)
print(123 + 456)
print(12 - 5)
print(2 ** 4)       # Raised to the Power i.e. 2 ^ 4
print(13 % 5)       # Modulus i.e. Remainder

# Priority
# PEMDAS - Parenthesis Exponent Multiplication Division Addition Subtraction
print(3 * 3 + 3 / 3 - 3)

# Chapter 17. Number Manipulation and F String in Python
bmi = 84 / 1.65 ** 2
print(bmi)
print(int(bmi))
print(round(bmi))
print(round(bmi, 2))
print(round(bmi, 3))

score = 0

score += 1
print(score)
print("Your Score is: " + str(score))

# f string
score += 5
print(f"Your new Score is: {score}")
