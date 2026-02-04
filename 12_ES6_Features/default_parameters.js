// ==================================
// DEFAULT PARAMETERS IN JAVASCRIPT (ES6)
// ==================================

// Default parameters allow functions
// to have default values if arguments are missing

// ----------------------------------
// 1. Function without default parameters
function greet(name) {
  console.log("Hello", name);
}

greet(); // undefined
greet("Aman");

// ----------------------------------
// 2. Function with default parameters
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greetUser(); // Guest
greetUser("Rahul"); // Rahul

// ----------------------------------
// 3. Multiple default parameters
function calculatePrice(price, tax = 5, discount = 0) {
  return price + (price * tax) / 100 - discount;
}

console.log(calculatePrice(100)); // default tax & discount
console.log(calculatePrice(100, 10)); // custom tax
console.log(calculatePrice(100, 10, 20)); // custom tax & discount

// ----------------------------------
// 4. Default parameter using expression
function getFinalPrice(price, tax = price * 0.05) {
  return price + tax;
}

console.log(getFinalPrice(200));

// ----------------------------------
// 5. Default parameters with undefined
function showMessage(msg = "No message") {
  console.log(msg);
}

showMessage(undefined); // uses default
showMessage(null); // null (does NOT use default)
