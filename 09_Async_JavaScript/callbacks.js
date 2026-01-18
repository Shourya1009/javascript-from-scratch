// ==================================
// CALLBACKS IN JAVASCRIPT
// ==================================

// Callback = a function passed as an argument to another function
// It is called (executed) later

// ----------------------------------
// 1. Simple callback example
function greet(name, callback) {
  console.log("Hello,", name);
  callback();
}

function afterGreet() {
  console.log("Welcome to JavaScript callbacks!");
}

greet("Aman", afterGreet);

// ----------------------------------
// 2. Callback with data
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("Add:", calculate(10, 5, add));
console.log("Multiply:", calculate(10, 5, multiply));

// ----------------------------------
// 3. Callback in setTimeout (async example)
console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// ----------------------------------
// 4. Callback in array methods
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("Doubled:", doubled);

// ----------------------------------
// 5. Callback Hell example (nested callbacks)
// This is why Promises and async/await are used
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 done");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 done");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed!");
    });
  });
});
