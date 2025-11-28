// ============================================================
// 🧠 JavaScript Operators — Complete & Easy Guide
// Operators are symbols/keywords used to perform operations on values.
// ============================================================

/* ============================================================
1️⃣ Arithmetic Operators (Work with numbers)
============================================================ */
let a = 10;
let b = 3;

console.log(a + b); // 13 → Addition
console.log(a - b); // 7  → Subtraction
console.log(a * b); // 30 → Multiplication
console.log(a / b); // 3.333... → Division
console.log(a % b); // 1 → Modulus (remainder)
console.log(a ** b); // 1000 → Exponentiation (10³)

/* ============================================================
2️⃣ Assignment Operators
============================================================ */
let x = 5;

x += 3; // 8  → x = x + 3
x -= 2; // 6  → x = x - 2
x *= 2; // 12 → x = x * 2
x /= 3; // 4  → x = x / 3
x %= 3; // 1  → x = x % 3
x **= 2; // 1 → x = x ** 2

/* ============================================================
3️⃣ Comparison Operators (Return true/false)
============================================================ */
let y = 5;
let z = "5";

console.log(y == z); // true  → compares value only
console.log(y === z); // false → compares value + type
console.log(y != z); // false → compares value only
console.log(y !== z); // true  → compares value + type
console.log(y > 3); // true
console.log(y < 3); // false
console.log(y >= 5); // true
console.log(y <= 4); // false

/* ============================================================
4️⃣ Logical Operators (Work with booleans)
============================================================ */
let c = true;
let d = false;

console.log(c && d); // false → AND (both must be true)
console.log(c || d); // true  → OR (any one true)
console.log(!c); // false → NOT (reverses value)

/* ============================================================
5️⃣ Unary Operators (Work on a single operand)
============================================================ */
let k = 5;

console.log(++k); // 6 → Pre-increment (increments first)
console.log(k++); // 6 → Post-increment (prints first, then 7)
console.log(--k); // 6 → Pre-decrement
console.log(k--); // 6 → Post-decrement (then becomes 5)

/* ============================================================
6️⃣ Ternary Operator (Short-form if/else)
============================================================ */
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // "Yes"

/* ============================================================
7️⃣ Type Checking Operators — typeof
============================================================ */
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"  ← JS bug
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"

/* ============================================================
8️⃣ instanceof Operator (Object type checking)
============================================================ */
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log([] instanceof Object); // true (Array inherits Object)
console.log(null instanceof Object); // false

/* ============================================================
9️⃣ Bitwise Operators (Operate at binary level)
============================================================ */
let p = 5; // 0101
let q = 3; // 0011

console.log(p & q); // 1 → AND
console.log(p | q); // 7 → OR
console.log(p ^ q); // 6 → XOR
console.log(~p); // -6 → NOT
console.log(p << 1); // 10 → Left shift (×2)
console.log(p >> 1); // 2  → Right shift (/2)
console.log(p >>> 1); // 2  → Unsigned right shift

/* ============================================================
🔟 String Operators
============================================================ */
let firstName = "Code";
let lastName = "Master";

console.log(firstName + " " + lastName); // "Code Master"
console.log("JS" + 101); // "JS101"
let str = "Hello";
str += " World!";
console.log(str); // "Hello World!"

/* ============================================================
✅ QUICK SUMMARY
============================================================ */

// Arithmetic:       +  -  *  /  %  **
// Assignment:       =  +=  -=  *=  /=  %=  **=
// Comparison:       ==  ===  !=  !==  >  <  >=  <=
// Logical:          &&  ||  !
// Unary:            ++  --
// Ternary:          condition ? value1 : value2
// typeof:           checks primitive/object types
// instanceof:       checks constructor relationship
// Bitwise:          &, |, ^, ~, <<, >>, >>>
// String:           +, +=

/* ============================================================
✨ Tip: Operators are the building blocks of logic in JS.
Practice them using small examples and print results.
============================================================ */
