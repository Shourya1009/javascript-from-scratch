/*
💡 Conditionals in JavaScript
----------------------------
Conditionals help your program make decisions.
They control *what happens next* — depending on whether something is true or false.
*/

console.clear();
console.log("========= 🚦 CONDITIONALS IN JAVASCRIPT =========\n");

/* ======================================================
1️⃣ IF STATEMENT
---------------------------------------------------------
Executes a block of code only if a condition is TRUE.
====================================================== */
let age = 18;

console.log("👉 Example 1: if statement");
console.log(`Your age: ${age}`);

if (age >= 18) {
  console.log("✅ You are an adult.");
}

console.log("--------------------------------------------\n");

/* ======================================================
2️⃣ IF...ELSE STATEMENT
---------------------------------------------------------
Provides an alternative when the condition is FALSE.
====================================================== */
let age_1 = 16;

console.log("👉 Example 2: if...else statement");
console.log(`Your age: ${age_1}`);

if (age_1 >= 18) {
  console.log("✅ You are an adult.");
} else {
  console.log("🚸 You are a minor.");
}

console.log("--------------------------------------------\n");

/* ======================================================
3️⃣ IF...ELSE IF...ELSE CHAIN
---------------------------------------------------------
Used to test multiple conditions in sequence.
====================================================== */
let score = 75;

console.log("👉 Example 3: if...else if...else chain");
console.log(`Your score: ${score}`);

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

/* ======================================================
4️⃣ NESTED IF STATEMENT
---------------------------------------------------------
An 'if' inside another 'if' — used for layered logic.
====================================================== */
let isLoggedIn = true;
let isAdmin = false;

console.log("👉 Example 4: Nested if statement");
if (isLoggedIn) {
  console.log("🔓 Logged in successfully.");

  if (isAdmin) {
    console.log("🛠️ Welcome, Admin! You have full access.");
  } else {
    console.log("👋 Welcome, User! Limited access granted.");
  }
} else {
  console.log("🔐 Please log in to continue.");
}

console.log("--------------------------------------------\n");

/* ======================================================
5️⃣ SWITCH STATEMENT
---------------------------------------------------------
Used when comparing a variable against many fixed values.
====================================================== */
let day = 3;

console.log("👉 Example 5: switch statement");
console.log(`Day number: ${day}`);

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
    console.log("⚠️ Invalid day! Please enter 1–7.");
}

console.log("--------------------------------------------\n");

/* ======================================================
6️⃣ TERNARY OPERATOR (? :)
---------------------------------------------------------
Compact one-line version of an if...else statement.
====================================================== */
let age_2 = 20;

console.log("👉 Example 6: Ternary Operator");
console.log(`Your age: ${age_2}`);

let message = age_2 >= 18 ? "✅ Adult" : "🚸 Minor";
console.log(message);

console.log("--------------------------------------------\n");

/* ======================================================
🧠 BONUS EXAMPLE — Real-world Decision
---------------------------------------------------------
Let's simulate checking online purchase eligibility.
====================================================== */
let hasAccount = true;
let balance = 450;
let itemPrice = 500;

console.log("👉 Example 7: Real-world Condition");
if (hasAccount) {
  if (balance >= itemPrice) {
    console.log("🛒 Purchase successful!");
  } else {
    console.log("💸 Insufficient balance. Please add funds.");
  }
} else {
  console.log("🔑 Please create an account to continue shopping.");
}

console.log("--------------------------------------------\n");

/* ======================================================
✨ SUMMARY
---------------------------------------------------------
✅ if — one condition  
✅ if...else — two outcomes  
✅ if...else if...else — multiple outcomes  
✅ nested if — layered logic  
✅ switch — clean handling of fixed cases  
✅ ternary — short one-line condition
====================================================== */

console.log("========= ✅ END OF CONDITIONALS DEMO =========");
