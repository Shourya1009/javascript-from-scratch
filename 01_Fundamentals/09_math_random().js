/* 
🔢 MATH.RANDOM() IN JAVASCRIPT
------------------------------
Math.random() returns a pseudo-random floating-point number in the range:

    0 (inclusive) → 1 (exclusive)

So the value will ALWAYS be:
    0 <= number < 1
*/

console.log("Random float:", Math.random());
// Example: 0.2837462819

console.log("Random float:", Math.random());
// Example: 0.9182736451

console.log("--------------------------------------------------");

/* 
🎲 GENERATE A RANDOM INTEGER (0–9)
----------------------------------
Math.random() * 10  → gives 0 to <10
Math.floor()         → converts to an integer (0–9)
*/

let num = Math.floor(Math.random() * 10);
console.log("Random (0–9):", num);

console.log("--------------------------------------------------");

/* 
🎯 GENERATE A RANDOM INTEGER (1–10)
-----------------------------------
Math.random() * 10  → 0 to <10
Math.floor(...) + 1 → 1 to 10
*/

let num1 = Math.floor(Math.random() * 10) + 1;
console.log("Random (1–10):", num1);

console.log("--------------------------------------------------");

/* 
✨ PRO TIP: RANDOM NUMBER IN ANY RANGE (min–max)
------------------------------------------------
Formula:
    Math.floor(Math.random() * (max - min + 1)) + min

Works for *any* integer range.
*/

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random (50–100):", randomInRange(50, 100));

/*
💡 EXTRA: RANDOM BOOLEAN (true/false)
-------------------------------------
Math.random() < 0.5 → 50% chance for each value.
*/

let randomBool = Math.random() < 0.5;
console.log("Random Boolean:", randomBool);

/*
💡 EXTRA: RANDOM ELEMENT FROM AN ARRAY
--------------------------------------
Useful for games, quizzes, etc.
*/

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log("Random fruit:", randomFromArray(["🍎", "🍌", "🍇", "🍒"]));
