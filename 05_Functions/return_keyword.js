// ==================================
// RETURN KEYWORD IN JAVASCRIPT
// ==================================

// return sends a value back from a function
// It also stops the function execution

// ----------------------------------
// Basic return
function add(a, b) {
  return a + b;
}

const result = add(4, 6);
console.log("Result:", result);

// ----------------------------------
// Code after return will not run
function demoReturn() {
  console.log("Before return");
  return "Done";
  console.log("After return"); // never executed
}

console.log(demoReturn());

// ----------------------------------
// Returning conditionally
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  }
  return "Non-positive";
}

console.log(checkNumber(5));
console.log(checkNumber(-2));

// ----------------------------------
// Returning objects
function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

console.log(createUser("Aman", 24));

// ----------------------------------
// Returning arrays
function getEvenNumbers(arr) {
  const evens = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }

  return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// ----------------------------------
// Function without return (returns undefined)
function noReturn() {
  console.log("No return here");
}

console.log(noReturn()); // undefined
