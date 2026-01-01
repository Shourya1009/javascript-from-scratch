// ==================================
// FUNCTION DECLARATIONS IN JAVASCRIPT
// ==================================

// Function declaration (basic)
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

greet(); // function call

// ----------------------------------

// Function with parameters
function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log("Sum:", result);

// ----------------------------------

// Function with default parameters
function multiply(a, b = 1) {
  return a * b;
}

console.log("Multiply:", multiply(5)); // 5
console.log("Multiply:", multiply(5, 2)); // 10

// ----------------------------------

// Function with conditional logic
function checkAge(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

console.log(checkAge(20));
console.log(checkAge(15));

// ----------------------------------

// Function calling another function
function square(num) {
  return num * num;
}

function printSquare(value) {
  console.log("Square:", square(value));
}

printSquare(4);

// ----------------------------------

// Function hoisting example
sayHello();

function sayHello() {
  console.log("This function is hoisted!");
}
