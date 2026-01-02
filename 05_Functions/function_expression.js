// ==================================
// FUNCTION EXPRESSIONS IN JAVASCRIPT
// ==================================

// Function expression (basic)
const greet = function () {
  console.log("Hello from function expression!");
};

greet();

// ----------------------------------

// Function expression with parameters
const add = function (a, b) {
  return a + b;
};

console.log("Sum:", add(4, 6));

// ----------------------------------

// Function expression with conditional logic
const checkEvenOdd = function (num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

// ----------------------------------

// Function expression assigned to another variable
const multiply = function (a, b) {
  return a * b;
};

const product = multiply;
console.log("Product:", product(3, 4));

// ----------------------------------

// Function expression is NOT hoisted
// Uncommenting the below line will cause an error
// sayHello();

const sayHello = function () {
  console.log("Function expressions are NOT hoisted");
};

sayHello();
