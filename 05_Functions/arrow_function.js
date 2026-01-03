// ==================================
// ARROW FUNCTIONS IN JAVASCRIPT
// ==================================

// Arrow functions are a shorter syntax
// Introduced in ES6

// ----------------------------------
// Basic arrow function
const greet = () => {
  console.log("Hello from arrow function!");
};

greet();

// ----------------------------------
// Arrow function with parameters
const add = (a, b) => {
  return a + b;
};

console.log("Sum:", add(5, 7));

// ----------------------------------
// Implicit return (single expression)
const multiply = (a, b) => a * b;

console.log("Multiply:", multiply(4, 3));

// ----------------------------------
// Single parameter (parentheses optional)
const square = (x) => x * x;

console.log("Square:", square(6));

// ----------------------------------
// Arrow function with default parameter
const greetUser = (name = "Guest") => {
  return `Hello, ${name}`;
};

console.log(greetUser());
console.log(greetUser("Rahul"));

// ----------------------------------
// Arrow function inside array method
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// ----------------------------------
// Arrow function DOES NOT have its own this
const user = {
  name: "Aman",
  regularFunction: function () {
    console.log("Regular function this:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow function this:", this.name);
  },
};

user.regularFunction(); // Aman
user.arrowFunction(); // undefined
