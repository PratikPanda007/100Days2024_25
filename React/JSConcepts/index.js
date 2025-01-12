const id = 1;
const productName = "Apple Watch 4";
const rating = 5;

const product1 = {
    id: id,
    productName: productName,
    rating: rating
}

console.log(product1);

// Short hand Property
const product1_new = {
    id,
    productName,
    rating
}
console.log(product1_new);

const product2 = {
    description: "This is desc for new Product",
    id,
    productName,
    rating
}
console.log(product2);

// Destructuring
const {description} = product2      // ctrl + space to get all the properties of the object
console.log(description)

const arr_1 = [1, 2, 3, 4, 5]
const [arr1, arr2, arr3, arr4] = arr_1
console.log(arr1, arr2, arr3, arr4)

// ================================ [ Default Parameters, spread and ret operators ]
// Default parameters
function mulOf2nums(num1 = 1, num2 = 2){    // If parameter not passed, it will take this default value
    return num1 * num2;
}

console.log(mulOf2nums(5, 10));
console.log(mulOf2nums());
console.log(mulOf2nums(10));

// Spread Operators
const arr_2 = [10, 20, 30, 40, 50]
const arr_3 = [60, 70, 80]

console.log(arr_2);
console.log([...arr_2]);
console.log([...arr_2, ...arr_3, 90, 100]);

// Rest Operator
// function getInfo(a, b, c, d, e){        // Can't accept 100s of arguments so we need to use spread operators
//     console.log(a, b, c, d, e);
    
//     return "Pratik Panda"
// }

function getInfo(a, b, ...c){        // ...c will keep all other arguments, it will be in form of array for easy access if required
    console.log(a, b, c);
    
    return "Pratik Panda"
}


console.log(getInfo(1, 2, 3, 4, 5));
