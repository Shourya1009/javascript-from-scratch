// ==================================
// VAR vs LET vs CONST (ES6)
// ==================================

// ----------------------------------
// 1. Scope difference

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ✅ works (function scoped)
// console.log(b); // ❌ Error (block scoped)
// console.log(c); // ❌ Error (block scoped)

// ----------------------------------
// 2. Re-declaration

var x = 5;
var x = 10; // ✅ allowed

// let y = 5;
// let y = 10; // ❌ Error

// const z = 5;
// const z = 10; // ❌ Error

// ----------------------------------
// 3. Re-assignment

var p = 1;
p = 2; // ✅

let q = 3;
q = 4; // ✅

const r = 5;
// r = 6; // ❌ Error

// ----------------------------------
// 4. const with objects & arrays
const user = {
  name: "Aman",
};

user.name = "Rahul"; // ✅ allowed
// user = {}; // ❌ not allowed

const numbers = [1, 2, 3];
numbers.push(4); // ✅ allowed
console.log(numbers);

// ----------------------------------
// 5. Hoisting behavior
console.log(varHoisted); // undefined
var varHoisted = "I am var";

// console.log(letHoisted); // ❌ ReferenceError
let letHoisted = "I am let";

// ----------------------------------
// 6. Best practices
// ✔ use const by default
// ✔ use let when value changes
// ❌ avoid var
