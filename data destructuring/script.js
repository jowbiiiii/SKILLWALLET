// --- Step 2: Practice Array Destructuring ---
const olympics = ['Gold', 'Silver', 'Bronze', 'None'];

// Skipping 'Silver' using a comma, and assigning the rest
const [firstPlace, , thirdPlace] = olympics;

console.log("--- Step 2: Array Destructuring ---");
console.log(`Winner: ${firstPlace}, Third: ${thirdPlace}`); 


// --- Step 3: Practice Object Destructuring ---
const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010
};

const { title, director } = movie;

console.log("\n--- Step 3: Object Destructuring ---");
console.log(`${title} was directed by ${director}.`);


// --- Step 4: Use Advanced Destructuring ---
const laptop = {
    brand: 'Apple',
    specs: {
        cpu: 'M2',
        ram: '16GB'
    },
    stock: 5
};

// Renaming 'brand' to 'manufacturer'
// Default value for 'color' (since it's missing in the object)
// Nested destructuring for 'cpu'
const { 
    brand: manufacturer, 
    color = 'Space Gray', 
    specs: { cpu } 
} = laptop;

console.log("\n--- Step 4: Advanced Destructuring ---");
console.log(`Manufacturer: ${manufacturer}`);
console.log(`Color (Default): ${color}`);
console.log(`Processor: ${cpu}`);


// --- Step 5: Use Destructuring in Functions ---
const traveler = {
    name: 'Alice',
    destination: 'Tokyo',
    transport: 'Plane'
};

// Destructuring the object directly in the parameter parentheses
function announceTrip({ name, destination }) {
    console.log(`${name} is going to ${destination}!`);
}

console.log("\n--- Step 5: Function Destructuring ---");
announceTrip(traveler);