/*
🧩 TEMPLATE STRINGS IN JAVASCRIPT
---------------------------------
Template strings (also known as template literals) are enclosed by backticks (`) 
instead of single (') or double (") quotes.

They make working with strings more powerful and readable.

✅ Features:
1️⃣ String Interpolation — Embed variables or expressions directly inside a string.
2️⃣ Multiline Strings — Write strings over multiple lines without using '\n'.
3️⃣ Expression Evaluation — Perform inline calculations or function calls.
4️⃣ Cleaner Syntax — No messy concatenation with '+'.
*/

// Example 1: Basic interpolation
let name = "Shourya";
console.log(`Hello, ${name}!`);
// Output: Hello, Shourya!

// Example 2: Using expressions inside placeholders
let a = 5,
  b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// Output: The sum of 5 and 10 is 15.

// Example 3: Multiline strings
let msg = `This is line one
This is line two
This is line three.`;
console.log(msg);
/*
Output:
This is line one
This is line two
This is line three.
*/

// Example 4: Using functions inside template literals
function greet(name) {
  return `Hello, ${name.toUpperCase()}!`;
}
console.log(greet("shourya"));
// Output: Hello, SHOURYA!

// Example 5: Embedding object properties
let user = { firstName: "Shourya", city: "Dehradun" };
console.log(`User ${user.firstName} lives in ${user.city}.`);
// Output: User Shourya lives in Dehradun.

/*
💡 WHY USE TEMPLATE STRINGS?

✔ Easier string concatenation — no need for '+'.
✔ Supports multiline text naturally.
✔ Allows dynamic value insertion.
✔ Improves readability and maintainability.

🧠 Remember:
Always use backticks (`) for template literals.
*/
