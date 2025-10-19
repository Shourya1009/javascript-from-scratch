/*
💡 JavaScript Math Object — Quick Reference
-------------------------------------------
The Math object provides built-in constants & methods for mathematical operations.
✅ No need to create it using `new Math()`.
✅ Use directly → `Math.property` or `Math.method()`.

🚀 Includes:
1️⃣ Basic Math constants & rounding
2️⃣ Min/Max, Power, Square root, Absolute
3️⃣ Random number generation tricks
*/

// 🎨 Helper for colorful console output
const logTitle = (title) =>
  console.log(
    `\n%c⚡ ${title} ---------------------`,
    "color:#00bfff; font-weight:bold;"
  );
const logSub = (title) =>
  console.log(`%c👉 ${title}`, "color:#ff9800; font-weight:bold;");

logTitle("BASIC MATH METHODS");

console.log("PI:", Math.PI); // π constant

console.log("Round (7.8):", Math.round(7.8)); // → 8 (nearest integer)
console.log("Floor (7.8):", Math.floor(7.8)); // → 7 (round down)
console.log("Ceil (7.2):", Math.ceil(7.2)); // → 8 (round up)
console.log("Trunc (7.9):", Math.trunc(7.9)); // → 7 (remove decimal part)
console.log("Abs (-7):", Math.abs(-7)); // → 7 (absolute value)
console.log("Power (2^4):", Math.pow(2, 4)); // → 16
console.log("Square Root (25):", Math.sqrt(25)); // → 5
console.log("Max (1, 9, 3):", Math.max(1, 9, 3)); // → 9
console.log("Min (1, 9, 3):", Math.min(1, 9, 3)); // → 1

logTitle("MORE EXAMPLES");

console.log("Round (7.5):", Math.round(7.5)); // → 8
console.log("Round (2.5):", Math.round(2.5)); // → 3
console.log("Floor (6.9):", Math.floor(6.9)); // → 6
console.log("Ceil (5.4):", Math.ceil(5.4)); // → 6
console.log("Square Root (49):", Math.sqrt(49)); // → 7

logTitle("BONUS: RANDOM NUMBER TRICKS");

// Random float between 0–1
console.log("Random (0–1):", Math.random());

// Random integer between 0–9
console.log("Random (0–9):", Math.floor(Math.random() * 10));

// Random integer between 1–100
console.log("Random (1–100):", Math.floor(Math.random() * 100) + 1);

// Random float between 5–10
console.log("Random (5–10):", Math.random() * 5 + 5);

// Random integer between two values (inclusive)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random (50–60):", randomInt(50, 60));

// Random boolean (true/false)
console.log("Random Boolean:", Math.random() < 0.5);

// Random choice from an array
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log("Random Color:", colors[randomInt(0, colors.length - 1)]);

logTitle("END OF DEMO ✨");
