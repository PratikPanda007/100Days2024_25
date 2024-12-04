# Randomization of Python List

# Chapter 31. Random Module
import random

import my_module
print(my_module.val_pi)

# RandomInteger
random_integer = random.randint(1, 5)
print(random_integer)


# Random Floating Number
random_floating = random.random() * 10
print(random_floating)
print(int(random_floating))

# Random Head/Tails
random_HT = random.randint(0,1)
if random_HT == 0:
    print("Heads")
else:
    print("Tails")

# Chapter 32. Lists
print("\n")
states_of_India = ["Odisha", "West Bengal", "Maharashtra", "Tamil Nadu", "Karnataka"]
print(states_of_India[0])
print(states_of_India[4])
print(states_of_India[3])
print(states_of_India[1])