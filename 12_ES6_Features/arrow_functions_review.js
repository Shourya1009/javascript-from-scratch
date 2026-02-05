// ==================================
// ARROW FUNCTIONS – REVIEW & PITFALLS
// ==================================

// Arrow functions were introduced in ES6
// They provide shorter syntax but have important differences

// ----------------------------------
// 1. Syntax comparison
// Function declaration
function add1(a, b) {
  return a + b;
}

// Arrow function
const add2 = (a, b) => a + b;

console.log(add1(2, 3));
console.log(add2(2, 3));

// ----------------------------------
// 2. Implicit return
const square = (x) => x * x;
console.log(square(5));

// ----------------------------------
// 3. Arrow function with single parameter
const greet = (name) => `Hello, ${name}`;
console.log(greet("Aman"));

// ----------------------------------
// 4. Arrow function with object return
const createUser = (name, age) => ({
  name: name,
  age: age,
});

console.log(createUser("Rahul", 25));

// ----------------------------------
// 5. this keyword difference
const user = {
  name: "Aman",
  regularFn() {
    console.log("Regular:", this.name);
  },
  arrowFn: () => {
    console.log("Arrow:", this.name);
  },
};

user.regularFn(); // Aman
user.arrowFn(); // undefined

// ----------------------------------
// 6. Arrow functions cannot be constructors
// const Person = (name) => {
//   this.name = name;
// };
// const p = new Person("Aman"); // ❌ Error

// ----------------------------------
// 7. Arrow functions do not have arguments object
function normalFunction() {
  console.log(arguments);
}

normalFunction(1, 2, 3);

const arrowFunction = () => {
  // console.log(arguments); // ❌ Error
  console.log("No arguments object in arrow function");
};

arrowFunction();

// ----------------------------------
// 8. When NOT to use arrow functions
// ❌ Object methods
// ❌ Constructors
// ❌ When dynamic `this` is required
