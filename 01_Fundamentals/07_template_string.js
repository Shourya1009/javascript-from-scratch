/*
A template string is a way to work with strings using backticks (`) instead of single (') or double (") quotes.
It allows:

1] String interpolation (embedding variables or expressions inside a string).
2] Multiline strings without using \n.
*/

let name = "Shourya";
console.log(`Hello, ${name}!`);
// Output: Hello, Shourya!

let a = 5,
  b = 10;
console.log(`The sum is ${a + b}`);
// Output: The sum is 15

let msg = `This is line one
This is line two
This is line three`;
console.log(msg);
/*
Output:
This is line one
This is line two
This is line three
*/

function greet(name) {
  return `Hello, ${name.toUpperCase()}!`;
}
console.log(greet("shourya"));
// Output: Hello, SHOURYA!

/*
Why use Template Strings?

Easier string concatenation

Cleaner syntax

Supports multiline text

Dynamically insert values or expressions
*/
