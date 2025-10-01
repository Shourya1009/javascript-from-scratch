/*The typeof operator returns the data type of a given value or variable as a string.

It is used to check what kind of data a variable holds.
*/

console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"  ❌ (this is a well-known JavaScript bug)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"

let person = { name: "Alex" };
console.log(typeof person); // "object"

let fruits = ["apple", "banana"];
console.log(typeof fruits); // "object" (arrays are objects in JS)

function greet() {}
console.log(typeof greet); // "function"
