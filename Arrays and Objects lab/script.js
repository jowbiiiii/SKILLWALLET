// ===============================
// STEP 2: IMPLEMENT ARRAYS
// ===============================

// Create arrays
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];

console.log("=== ARRAYS ===");
console.log("Fruits:", fruits);
console.log("Numbers:", numbers);

// Array methods
fruits.push("Mango"); // add to end
console.log("After push:", fruits);

fruits.pop(); // remove last
console.log("After pop:", fruits);

fruits.unshift("Grapes"); // add to beginning
console.log("After unshift:", fruits);

fruits.shift(); // remove first
console.log("After shift:", fruits);

console.log("Length of fruits:", fruits.length);


// ===============================
// STEP 3: IMPLEMENT OBJECTS
// ===============================

console.log("\n=== OBJECTS ===");

// Create object
let student = {
  name: "This is me",
  age: 20,
  course: "BSIT"
};

console.log("Student:", student);

// Access properties
console.log("Name (dot):", student.name);
console.log("Age (bracket):", student["age"]);

// Modify properties
student.age = 19;
student["course"] = "BSIT";

console.log("Updated Student:", student);


// ===============================
// STEP 4: BUILT-IN METHODS
// ===============================

console.log("\n=== ARRAY PROCESSING METHODS ===");

// map
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// forEach
console.log("All Numbers:");
numbers.forEach(num => {
  console.log(num);
});


// ===============================
// STEP 4.2: COMBINE ARRAYS + OBJECTS
// ===============================

console.log("\n=== ARRAY OF OBJECTS ===");

let students = [
  { name: "This is me", grade: 90 },
  { name: "Anna", grade: 85 },
  { name: "Mark", grade: 95 }
];

// Display students
students.forEach(s => {
  console.log(s.name + " - " + s.grade);
});

// Filter top students
let topStudents = students.filter(s => s.grade >= 90);
console.log("Top Students:", topStudents);


// ===============================
// STEP 5: TESTING
// ===============================

console.log("\n=== TESTING COMPLETE ===");
console.log("All operations executed successfully!");