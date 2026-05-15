console.log("=== ARRAYS AND OBJECTS LAB ===");

// =====================
// STEP 2: ARRAYS
// =====================

// Create arrays
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30];
let mixed = ["Hello", 25, true];

console.log("Original fruits:", fruits);

// Array methods
fruits.push("Orange");       // add to end
console.log("After push:", fruits);

fruits.pop();                // remove last
console.log("After pop:", fruits);

fruits.shift();              // remove first
console.log("After shift:", fruits);

fruits.unshift("Grapes");    // add to beginning
console.log("After unshift:", fruits);

console.log("Array length:", fruits.length);

// =====================
// STEP 3: OBJECTS
// =====================

// Create object
let student = {
    name: "This is a name",
    age: 20,
    course: "BSIT"
};

console.log("Student object:", student);

// Access properties
console.log("Name (dot):", student.name);
console.log("Age (bracket):", student["age"]);

// Modify properties
student.age = 21;
student["course"] = "Information Technology";

console.log("Updated student:", student);

// =====================
// STEP 4: BUILT-IN METHODS
// =====================

// map()
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// filter()
let filteredNumbers = numbers.filter(num => num > 15);
console.log("Filtered numbers (>15):", filteredNumbers);

// forEach()
console.log("Using forEach:");
fruits.forEach(fruit => {
    console.log(fruit);
});

// =====================
// STEP 4.2: ARRAY OF OBJECTS
// =====================

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 }
];

console.log("Products:", products);

// Manipulate array of objects
products.push({ name: "Monitor", price: 10000 });

let expensiveProducts = products.filter(item => item.price > 15000);

console.log("Updated products:", products);
console.log("Expensive products:", expensiveProducts);

// =====================
// STEP 5: FINAL TEST
// =====================

console.log("All array and object operations executed successfully!");