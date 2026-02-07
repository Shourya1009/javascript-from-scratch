// ==================================
// SPREAD & REST – REVIEW (ES6)
// ==================================

// Same syntax (...) but different meanings
// Spread → expands values
// Rest → collects values

// ----------------------------------
// 1. Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log("Merged:", merged);

// ----------------------------------
// 2. Copy array (shallow copy)
const original = [10, 20, 30];
const copy = [...original];

copy.push(40);
console.log("Original:", original);
console.log("Copy:", copy);

// ----------------------------------
// 3. Spread with objects
const user = {
  name: "Aman",
  age: 24,
};

const updatedUser = {
  ...user,
  city: "Delhi",
};

console.log(updatedUser);

// ----------------------------------
// 4. Override property using spread
const userUpdated = {
  ...user,
  age: 25,
};

console.log(userUpdated);

// ----------------------------------
// 5. Rest parameters in function
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4));

// ----------------------------------
// 6. Rest with destructuring
const student = {
  name: "Rahul",
  roll: 101,
  course: "MCA",
  year: 2,
};

const { name, ...details } = student;

console.log("Name:", name);
console.log("Details:", details);

// ----------------------------------
// 7. Spread with function arguments
function multiply(a, b, c) {
  return a * b * c;
}

const nums = [2, 3, 4];
console.log("Multiply:", multiply(...nums));
