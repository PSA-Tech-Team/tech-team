// Variables
// Variables are containers for storing data values.
// Variables can be strings (text), numbers, or booleans (true/false).
let name = "John";
let age = 25;
let isAdult = true;

// Can print things out using node file and console.log
console.log(name);
console.log(age);
console.log(isAdult);

// Numbers can be added, subtracted, multiplied, and divided.
let x = 5;
let y = 10;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

// Conditionals
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}


// Comparison Operators

// < means less than
if (x < y) {
    console.log("x is less than y.");
}

// > means greater than
if (x > y) {
    console.log("x is greater than y.");
}

// == means equal to
if (x == y) {
    console.log("x is equal to y.");
}

// != means not equal to
if (x != y) {
    console.log("x is not equal to y.");
}

// Logical Operators
// || means or
if (age == 18 || isAdult) {
    console.log("You are an adult.");
}


// && means and
if (age == 25 && name == "John") {
    console.log("You are John.");
}



// Loops
// while loop
// while (condition) { code block }

while (age < 30) {
    console.log(age);
    age++;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Functions
// function functionName() { code block }
function sayHello() {
    console.log("Hello!");
}



// Arrays