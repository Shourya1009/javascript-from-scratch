// ==================================
// DESTRUCTURING IN JAVASCRIPT
// ==================================

// Destructuring allows unpacking values
// from arrays or properties from objects

// ----------------------------------
// 1. Array destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log(a, b, c);

// ----------------------------------
// 2. Skipping elements
const [first, , third] = numbers;
console.log(first, third);

// ----------------------------------
// 3. Default values
const [x = 1, y = 2] = [10];
console.log(x, y);

// ----------------------------------
// 4. Swapping variables
let p = 5;
let q = 10;

[p, q] = [q, p];
console.log(p, q);

// ----------------------------------
// 5. Object destructuring
const user = {
  name: "Aman",
  age: 24,
  city: "Delhi",
};

const { name, age } = user;
console.log(name, age);

// ----------------------------------
// 6. Renaming variables
const { name: userName, city: userCity } = user;
console.log(userName, userCity);

// ----------------------------------
// 7. Default values in objects
const { country = "India" } = user;
console.log(country);

// ----------------------------------
// 8. Nested destructuring
const student = {
  info: {
    roll: 101,
    course: "MCA",
  },
};

const {
  info: { roll, course },
} = student;

console.log(roll, course);

// ----------------------------------
// 9. Destructuring in function parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

printUser(user);
