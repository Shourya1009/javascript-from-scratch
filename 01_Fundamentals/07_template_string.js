/*
✨ TEMPLATE STRINGS (Template Literals) IN JAVASCRIPT
-----------------------------------------------------
Template strings are a modern way to work with text in JavaScript.

They use **backticks (`)** instead of single (') or double (") quotes, and provide:
  ⭐ Cleaner Syntax
  ⭐ Easier Variable Insertion
  ⭐ Multiline Text Support
  ⭐ Inline Expression Evaluation
*/

/* =====================================================
1️⃣ STRING INTERPOLATION
---------------------------------------------------------
Insert variables directly using ${ } — No need for + operator.
===================================================== */
let name = "Shourya";
console.log(`Hello, ${name}!`);
// Output: Hello, Shourya!

/* =====================================================
2️⃣ EXPRESSIONS INSIDE TEMPLATE STRINGS
---------------------------------------------------------
You can run calculations, logic, or operations inside ${ }.
===================================================== */
let a = 5,
  b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// Output: The sum of 5 and 10 is 15.vvvvvvvv

/* =====================================================
3️⃣ MULTILINE STRINGS
---------------------------------------------------------
Template literals allow writing text on multiple lines 
without using \n.
===================================================== */
let msg = `This is line one
This is line two
This is line three.`;

console.log(msg);
// Output:
// This is line one
// This is line two
// This is line three.

/* =====================================================
4️⃣ CALLING FUNCTIONS INSIDE TEMPLATE STRINGS
---------------------------------------------------------
Functions can be executed inside ${ } to transform values.
===================================================== */
function greet(name) {
  return `Hello, ${name.toUpperCase()}!`;
}

console.log(greet("shourya"));
// Output: Hello, SHOURYA!

/* =====================================================
5️⃣ USING OBJECT PROPERTIES
---------------------------------------------------------
Insert values from objects directly inside the template.
===================================================== */
let user = { firstName: "Shourya", city: "Dehradun" };

console.log(`User ${user.firstName} lives in ${user.city}.`);
// Output: User Shourya lives in Dehradun.

/* =====================================================
💡 WHY USE TEMPLATE STRINGS?
---------------------------------------------------------
✔ Cleaner and more readable than traditional strings  
✔ Supports multiline formatting  
✔ Allows variables and expressions inline  
✔ Makes formatting dynamic text extremely easy  

🧠 Reminder:
Use backticks (`) — NOT single ('') or double ("") quotes.
===================================================== */
