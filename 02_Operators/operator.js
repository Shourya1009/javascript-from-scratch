// ============================================================
// 🧠 JavaScript Operators — Complete & Easy Guide
// Operators perform actions on values and variables.
// ============================================================

/* ============================================================
1️⃣ ARITHMETIC OPERATORS
============================================================ */
let a = 10;
let b = 3;

console.log(a + b); // 13  → Addition
console.log(a - b); // 7   → Subtraction
console.log(a * b); // 30  → Multiplication
console.log(a / b); // 3.33 → Division
console.log(a % b); // 1   → Remainder
console.log(a ** b); // 1000 → Exponentiation (10³)

/* ============================================================
2️⃣ ASSIGNMENT OPERATORS
============================================================ */
let x = 5;

x += 3; // 8
x -= 2; // 6
x *= 2; // 12
x /= 3; // 4
x %= 3; // 1
x **= 2; // 1

/* ============================================================
3️⃣ COMPARISON OPERATORS — Return true/false
============================================================ */
let y = 5;
let z = "5";

console.log(y == z); // true  → compares value only
console.log(y === z); // false → compares value + type
console.log(y != z); // false
console.log(y !== z); // true
console.log(y > 3); // true
console.log(y < 3); // false
console.log(y >= 5); // true
console.log(y <= 4); // false

/* ============================================================
4️⃣ LOGICAL OPERATORS
============================================================ */
let c = true;
let d = false;

console.log(c && d); // false → AND (both must be true)
console.log(c || d); // true  → OR (any one true)
console.log(!c); // false → NOT (reverse value)

/* ============================================================
5️⃣ UNARY OPERATORS
============================================================ */
let k = 5;

console.log(++k); // 6 → pre-increment
console.log(k++); // 6 → post-increment (then becomes 7)
console.log(--k); // 6 → pre-decrement
console.log(k--); // 6 → post-decrement (then becomes 5)

/* ============================================================
6️⃣ TERNARY OPERATOR — Short if/else
============================================================ */
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // "Yes"

/* ============================================================
7️⃣ TYPE CHECKING — typeof
============================================================ */
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ← JS bug
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {});
// "function"

/* ============================================================
8️⃣ INSTANCEOF — Object constructor check
============================================================ */
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log([] instanceof Object); // true (Array inherits Object)
console.log(null instanceof Object); // false

/* ============================================================
9️⃣ BITWISE OPERATORS — Work at binary level
============================================================ */
let p = 5; // 0101
let q = 3; // 0011

console.log(p & q); // 1  → AND
console.log(p | q); // 7  → OR
console.log(p ^ q); // 6  → XOR
console.log(~p); // -6 → NOT
console.log(p << 1); // 10 → Left shift (×2)
console.log(p >> 1); // 2  → Right shift (/2)
console.log(p >>> 1); // 2  → Unsigned right shift

/* ============================================================
🔟 STRING OPERATORS
============================================================ */
let firstName = "Code";
let lastName = "Master";

console.log(firstName + " " + lastName); // "Code Master"
console.log("JS" + 101); // "JS101"

let str = "Hello";
str += " World!";
console.log(str); // "Hello World!"

/* ============================================================
✅ SUMMARY (Easy to Memorize)
============================================================ */

// Arithmetic:       +  -  *  /  %  **
// Assignment:       =  +=  -=  *=  /=  %=  **=
// Comparison:       ==  ===  !=  !==  >  <  >=  <=
// Logical:          &&  ||  !
// Unary:            ++  --
// Ternary:          condition ? trueValue : falseValue
// typeof:           returns primitive/object type
// instanceof:       checks constructor
// Bitwise:          & | ^ ~ << >> >>>
// String:           +  +=

// ============================================================
// ✨ Practice daily with small examples to understand operators!
// ============================================================
