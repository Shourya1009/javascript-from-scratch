/*
==================================================
         JavaScript Data Types (In Detail)
==================================================

In JavaScript, data types define the nature of the values we can store 
and manipulate in our programs. They fall into two main categories:

1. Primitive Data Types (immutable, copied by value)
2. Non-Primitive / Reference Data Types (mutable, copied by reference)
--------------------------------------------------
*/

/* 
1. Primitive Data Types
=======================
Primitives are the simplest data types.
They are:
- Immutable → cannot be directly modified , A primitive value cannot be changed once created.
If you “modify” it, you’re not really changing the existing value — you’re creating a new value in memory.
- Compared by value
- Stored directly in the variable’s memory
There are 7 primitive types in JavaScript.
*/

// 1. Number
// ----------------
// Represents both integers and floating-point numbers.
// Special numeric values: Infinity, -Infinity, NaN.
// NaN -In JavaScript, NaN stands for "Not-a-Number". It is a special numeric value that represents something that isn’t a valid number, even though it belongs to the Number type.

let age = 25; // integer
let pi = 3.14; // floating-point
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN; // "Not a Number" but still of type 'number'

// NaN occurs when a numeric operation fails:
console.log(0 / 0); // NaN
console.log("abc" * 3); // NaN
console.log(typeof NaN); // number

/*
🔹 Infinity and -Infinity
--------------------------
- Infinity: Represents a value greater than any other number in JavaScript.
- -Infinity: Represents a value smaller than any other number.
- Both belong to the 'number' type.
*/

// Generating Infinity
console.log(5 / 0); // Infinity
console.log(-5 / 0); // -Infinity
console.log(Number.MAX_VALUE * 2); // Infinity

// Comparisons
console.log(Infinity > 999999999); // true
console.log(-Infinity < -999999999); // true
console.log(Infinity > -Infinity); // true

/*
Infinity Operations Table
--------------------------
Infinity + Infinity   → Infinity
Infinity - Infinity   → NaN
Infinity * Infinity   → Infinity
Infinity * -Infinity  → -Infinity
Infinity * 0          → NaN
Infinity / Infinity   → NaN
1 / Infinity          → 0
-1 / Infinity         → -0
*/

// Example:
console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(0 * Infinity); // NaN
console.log(1 / Infinity); // 0

// 2. String
// ----------------
// Sequence of characters enclosed in '', "", or `` (template literals).
// Strings are immutable (cannot change a single character).

let firstName = "Shourya";
let greeting = "Hello";
let template = `Hi, ${firstName}!`; // Template literals allow interpolation

console.log(typeof firstName); // string
console.log(template); // Hi, Shourya!

// Immutability example:
let str = "JavaScript";
str[0] = "Y";
console.log(str); // "JavaScript" (unchanged)

// 3. BigInt
// ----------------
// Represents very large integers beyond Number.MAX_SAFE_INTEGER (2^53 - 1).
// Created by appending 'n' at the end.

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

// You cannot mix BigInt with Number directly:
let num = 10;
// console.log(bigNumber + num); // ❌ TypeError
console.log(bigNumber + 10n); // ✅ Works (both are BigInt)

// 4. Boolean
// ----------------
// Logical type that can only be true or false.

let isLoggedIn = true;
let isAdult = false;

console.log(typeof isLoggedIn); // boolean

// Useful in conditions:
if (isLoggedIn) {
  console.log("User is logged in");
}

// 5. Undefined
// ----------------
// Default value of a declared but uninitialized variable.

let x;
console.log(x); // undefined
console.log(typeof x); // undefined

// 6. Null
// ----------------
// Represents intentional absence of a value.
// Used when a variable should hold "nothing".
// Historical quirk: typeof null === "object"

let y = null;
console.log(y); // null
console.log(typeof y); // object (bug in JS)

// 7. Symbol
// ----------------
// Unique and immutable value, often used as object property keys
// to avoid naming conflicts.

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // false (always unique)
console.log(typeof sym1); // symbol

let user = {
  [sym1]: "Shourya", // hidden property
};
console.log(user[sym1]); // Shourya

/* 
2. Non-Primitive (Reference) Data Types
=======================================
Reference types store *references* to objects in memory, not the actual value.
They are mutable, meaning you can change their content.
*/

// 1. Object
// ----------------
// Key-value pairs used to group related data.

let person = {
  name: "Shourya",
  age: 22,
};
console.log(person.name); // Shourya
console.log(typeof person); // object

// 2. Array
// ----------------
// Special type of object that stores ordered collections.

let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // banana
console.log(typeof fruits); // object

// Arrays have useful built-in methods:
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "mango", "grape"]

// 3. Function
// ----------------
// A reusable block of code. Functions are objects in JS with callable behavior.

function greet() {
  return "Hello!";
}
console.log(greet()); // Hello!
console.log(typeof greet); // function (special subtype of object)

// Functions can also be stored in variables:
let sayHi = function () {
  return "Hi there!";
};
console.log(sayHi()); // Hi there!

/* 
3. Copy by Value vs Copy by Reference
=====================================
- Primitive types → copied by VALUE
- Reference types → copied by REFERENCE
*/

// Example with primitive (copied by value)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 → unaffected
console.log(b); // 20

// Example with reference (copied by reference)
let obj1 = { lang: "JS" };
let obj2 = obj1; // both point to the same memory reference
obj2.lang = "Python";
console.log(obj1.lang); // Python → changed for both

/* 
4. Summary (Cheat Sheet)
========================
Primitive (immutable, value-based):
  1. Number     → integers, floats, NaN, Infinity, -Infinity
  2. String     → text, immutable
  3. BigInt     → very large integers
  4. Boolean    → true/false
  5. Undefined  → variable declared but not assigned
  6. Null       → intentional absence of value (typeof null === "object")
  7. Symbol     → unique identifiers

Reference (mutable, reference-based):
  - Object → collections of key-value pairs
  - Array  → ordered list (special object)
  - Function → callable object

Key Differences:
  - Primitives → copied by value, immutable
  - References → copied by reference, mutable
*/
