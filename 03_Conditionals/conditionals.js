/*
=========================================================
🚦 CONDITIONALS IN JAVASCRIPT — CLEAN & IMPROVED VERSION
---------------------------------------------------------
Conditionals allow programs to *make decisions*.
They run different code based on TRUE or FALSE.
=========================================================
*/

console.clear();
console.log("========= 🚦 CONDITIONALS IN JAVASCRIPT =========\n");

/* ======================================================
1️⃣ IF STATEMENT
---------------------------------------------------------
✓ Runs code only when condition is TRUE.
====================================================== */
let age = 18;

console.log("👉 Example 1: IF Statement");
console.log(`Your age: ${age}`);

if (age >= 18) {
  console.log("✅ You are an adult.");
}

console.log("--------------------------------------------------\n");

/* ======================================================
2️⃣ IF...ELSE STATEMENT
---------------------------------------------------------
✓ Provides alternative output when condition is FALSE.
====================================================== */
let age_1 = 16;

console.log("👉 Example 2: IF...ELSE Statement");
console.log(`Your age: ${age_1}`);

if (age_1 >= 18) {
  console.log("✅ You are an adult.");
} else {
  console.log("🚸 You are a minor.");
}

console.log("--------------------------------------------------\n");

/* ======================================================
3️⃣ IF...ELSE IF...ELSE CHAIN
---------------------------------------------------------
✓ Multiple conditions checked in order.
✓ First TRUE condition executes.
====================================================== */
let score = 75;

console.log("👉 Example 3: IF...ELSE IF...ELSE Chain");
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

console.log("--------------------------------------------------\n");

/* ======================================================
4️⃣ NESTED IF STATEMENT
---------------------------------------------------------
✓ An IF inside another IF.
✓ Useful for layered decision-making.
====================================================== */
let isLoggedIn = true;
let isAdmin = false;

console.log("👉 Example 4: Nested IF");

if (isLoggedIn) {
  console.log("🔓 Logged in successfully.");

  if (isAdmin) {
    console.log("🛠️ Welcome Admin! Full access granted.");
  } else {
    console.log("👋 Welcome User! Limited access granted.");
  }
} else {
  console.log("🔐 Please log in to continue.");
}

console.log("--------------------------------------------------\n");

/* ======================================================
5️⃣ SWITCH STATEMENT
---------------------------------------------------------
✓ Cleaner alternative to multiple IF...ELSE IF…
✓ Best for fixed, known values.
====================================================== */
let day = 3;

console.log("👉 Example 5: SWITCH Statement");
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
    console.log("⚠️ Invalid day! Enter 1–7.");
}

console.log("--------------------------------------------------\n");

/* ======================================================
6️⃣ TERNARY OPERATOR (? :)
---------------------------------------------------------
✓ Shortest form of IF...ELSE.
✓ Perfect for small decisions.
====================================================== */
let age_2 = 20;

console.log("👉 Example 6: Ternary Operator");
console.log(`Your age: ${age_2}`);

let message = age_2 >= 18 ? "✅ Adult" : "🚸 Minor";
console.log(message);

console.log("--------------------------------------------------\n");

/* ======================================================
🧠 BONUS: Real-World Example  
---------------------------------------------------------
Buying an item online.
Shows nested logic and multi-condition thinking.
====================================================== */
let hasAccount = true;
let balance = 450;
let itemPrice = 500;

console.log("👉 Example 7: Real-World Condition");

if (hasAccount) {
  if (balance >= itemPrice) {
    console.log("🛒 Purchase Successful!");
  } else {
    console.log("💸 Insufficient Balance! Please add funds.");
  }
} else {
  console.log("🔑 Please create an account to continue shopping.");
}

console.log("--------------------------------------------------\n");

/* ======================================================
✨ SUMMARY — WHEN TO USE WHAT?
---------------------------------------------------------
✔ IF → single condition  
✔ IF...ELSE → two outcomes  
✔ IF...ELSE IF → multiple conditions  
✔ Nested IF → layered checks  
✔ Switch → cleaner multiple fixed cases  
✔ Ternary → short & simple decisions  
====================================================== */
