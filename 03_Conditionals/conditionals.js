/*
💡 Conditionals in JavaScript
----------------------------
Conditionals are used to make decisions in your code.
They allow your program to execute different blocks of code depending on whether a condition is true or false.
*/

console.log("========= 🚦 CONDITIONALS IN JAVASCRIPT =========\n");

/*
1️⃣ if statement
----------------
Executes a block of code if a condition is true.
*/
let age = 18;

console.log("👉 Example 1: if statement");
if (age >= 18) {
  console.log("✅ You are an adult.");
}
console.log("--------------------------------------------\n");

/*
2️⃣ if...else statement
-----------------------
Provides an alternative block if the condition is false.
*/
let age_1 = 16;

console.log("👉 Example 2: if...else statement");
if (age_1 >= 18) {
  console.log("✅ You are an adult.");
} else {
  console.log("🚸 You are a minor.");
}
console.log("--------------------------------------------\n");

/*
3️⃣ if...else if...else
------------------------
Checks multiple conditions in order.
*/
let score = 75;

console.log("👉 Example 3: if...else if...else chain");
if (score >= 90) {
  console.log("🎯 Grade: A");
} else if (score >= 75) {
  console.log("👏 Grade: B");
} else if (score >= 50) {
  console.log("🙂 Grade: C");
} else {
  console.log("❌ Grade: F");
}
console.log("--------------------------------------------\n");

/*
4️⃣ Nested if statement
------------------------
An if inside another if — used for multiple-level decisions.
*/
let isLoggedIn = true;
let isAdmin = true;

console.log("👉 Example 4: Nested if");
if (isLoggedIn) {
  if (isAdmin) {
    console.log("🛠️ Welcome Admin!");
  } else {
    console.log("👋 Welcome User!");
  }
} else {
  console.log("🔐 Please log in first.");
}
console.log("--------------------------------------------\n");

/*
5️⃣ switch statement
---------------------
Useful when checking against multiple fixed values.
*/
let day = 3;

console.log("👉 Example 5: switch statement");
switch (day) {
  case 1:
    console.log("📅 Monday");
    break;
  case 2:
    console.log("📅 Tuesday");
    break;
  case 3:
    console.log("📅 Wednesday");
    break;
  case 4:
    console.log("📅 Thursday");
    break;
  case 5:
    console.log("📅 Friday");
    break;
  case 6:
    console.log("📅 Saturday");
    break;
  case 7:
    console.log("📅 Sunday");
    break;
  default:
    console.log("⚠️ Invalid day");
}
console.log("--------------------------------------------\n");

/*
6️⃣ Ternary Operator (? :)
---------------------------
A shorthand for simple if...else conditions.
*/
let age_2 = 20;
console.log("👉 Example 6: Ternary Operator");
let message = age_2 >= 18 ? "✅ Adult" : "🚸 Minor";
console.log(message);
console.log("--------------------------------------------\n");

/*
✨ Summary
-----------
✅ if — one condition
✅ if...else — two possible outcomes
✅ if...else if — multiple conditions
✅ nested if — layered logic
✅ switch — clean handling for multiple exact values
✅ ternary — compact one-line decision
*/

console.log("========= ✅ END OF CONDITIONALS DEMO =========");
