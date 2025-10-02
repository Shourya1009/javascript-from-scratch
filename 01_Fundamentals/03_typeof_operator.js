/*
The typeof operator returns the data type of a given value or variable as a string.

⚡ Notes:
- Arrays, objects, and null all return "object".
- To check arrays → use Array.isArray()
- To check null → strict equality check (value === null)
- Functions are callable objects but typeof distinguishes them as "function".
*/

console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ❌ (JavaScript legacy bug)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"

// Object
let person = { name: "Alex" };
console.log(typeof person); // "object"

// Array (special object)
let fruits = ["apple", "banana"];
console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // ✅ true

// Function
function greet() {}
console.log(typeof greet); // "function"

// Extra examples
console.log(typeof NaN); // "number" (NaN is still a number!)
console.log(typeof new Date()); // "object" (use instanceof Date to check)
console.log(typeof /regex/); // "object" (regex is also an object)
console.log(typeof class MyClass {}); // "function" (classes are functions internally)

// Better checks
console.log(person instanceof Object); // true
console.log(fruits instanceof Array); // true
console.log(null === null); // true (best way to check null)
