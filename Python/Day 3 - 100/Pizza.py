print("Welcome to Python Pizza Deliveries!!")

size = input("What kind of Pizza would you like to have? S ($15),M ($20), L ($25): ")
pep = input("Do you want Pepperoni in your Pizza? Y (+$2) or N (+$0): ")
extra_cheese = input("Would you like to have extra cheese? Y (+$1) or N (+$0): ")

total = 0

if size.lower() == "s":
    total += 15
elif size.lower() == "m":
    total += 20
elif size.lower() == "l":
    total += 25
else:
    print("Invalid size input. Exiting.")
    exit()

if pep.lower() == "y":
    if size == "s":
        total += 2
    else:
        total += 3
else:
    print("Invalid size input. Exiting.")
    exit()

if extra_cheese.lower() == "y":
    total += 1
else:
    print("Invalid size input. Exiting.")
    exit()

print(f"Your total is: {total}")
