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

// ================================ [ Default Parameters, spread and rest operators ]
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


// ===================================== [ Array Methods - map, find, filter, some, every, includes, indexOf, findIndex ]
const personsArray = [
    {
        name: "PRATIK",
        age: 28,
        country: "India"
    },
    {
        name: "John Doe",
        age: 45,
        country: "Russia"
    },
    {
        name: "Alester",
        age: 30,
        country: "UK"
    },
    {
        name: "sWARAJ",
        age: 30,
        country: "India"
    },
]


// map -> go through all the elements
console.log("============================= Map");
let getAllNames = personsArray.map((singlePerson, index) => {
    console.log(singlePerson)
    console.log(singlePerson.name)
    return `${singlePerson.name} age is: ${singlePerson.age} and is from country ${singlePerson.country}`
});

console.log(getAllNames);

// find -> Finds the first match
console.log("============================= Find");
let getFirstPersonFromIndia = personsArray.find((singlePerson, index) => {
        // if(singlePerson.country === "India"){
        //     return `${singlePerson.name} is from India`;
        // }

    return singlePerson.country === "India"
});

console.log(getFirstPersonFromIndia);

// filter -> return all the matches based on condition
console.log("============================= Filter");
let getPersonFromIndia = personsArray.filter((singlePerson, index) => {
    return singlePerson.country === "India"
});

console.log(getPersonFromIndia);

// Some -> Return true if there is atleast one match satisfying the condition
console.log("============================= Some");
let checkAllPersonsAdult = personsArray.some((singlePerson, index) => {
    return singlePerson.age >= 20
});

console.log(checkAllPersonsAdult);

// Every -> Return true if all matches satisfying the condition
console.log("============================= Every");
let checkEveryPerson = personsArray.every((singlePerson, index) => {
    return singlePerson.age > 40
});

console.log(checkEveryPerson);

// Includes -> Checks if the element in present in the Array or not
console.log("============================= Includes");
let fruits = ["Apple", "Banana", "Orange", "Guava"];
console.log(fruits.includes("Apple"));

// indexOf -> Returns index of the element if it exists in the Array
console.log("============================= indexOf");
console.log(fruits.indexOf("Orange"));

// findIndex ->
console.log("============================= findIndex");
let getIndexOfRussia = personsArray.findIndex((singlePerson, index) => {
    return singlePerson.country === "Russia"
});

console.log(getIndexOfRussia);


// =============================================== API Consumption
console.log("=================================================== API Consumption");
let listOfProcucts = document.querySelector(".list-of-procucts");

async function fetchListOfProducts(){
    try{
        const apiResp = await fetch("https://dummyjson.com/products", {
            method: "GET"
        })
        //console.log(apiResp);
        const result = await apiResp.json();
        console.log(result);

        if(result?.products?.length > 0) renderProducts(result?.products)
    }catch(e){
        console.log(e);
    }
}

fetchListOfProducts();

function renderProducts(products){
    listOfProcucts.innerHTML = products.map((singleProduct, index) => {
        return `<p>${singleProduct.title} - $ ${singleProduct.price}</p>`;
    }).join(' ');;
}