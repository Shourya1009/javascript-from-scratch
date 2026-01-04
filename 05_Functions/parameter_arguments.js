// ==================================
// PARAMETERS vs ARGUMENTS
// ==================================

// Parameters → variables listed in function definition
// Arguments → actual values passed to the function

// ----------------------------------
// Example 1: Basic function
function add(a, b) {
  // a and b are PARAMETERS
  return a + b;
}

add(5, 3); // 5 and 3 are ARGUMENTS

// ----------------------------------
// Example 2: Logging parameters & arguments
function greet(name) {
  console.log("Hello", name);
}

greet("Rahul");

// ----------------------------------
// Example 3: Missing arguments
function multiply(a, b) {
  console.log("a:", a);
  console.log("b:", b);
  return a * b;
}

multiply(5); // b is undefined

// ----------------------------------
// Example 4: Default parameters
function divide(a, b = 1) {
  return a / b;
}

console.log(divide(10)); // 10
console.log(divide(10, 2)); // 5

// ----------------------------------
// Example 5: Rest parameters
function sumAll(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4)); // multiple arguments
