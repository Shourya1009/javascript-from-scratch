/*
💡 The Math Object in JavaScript
--------------------------------
The Math object provides built-in mathematical constants and methods.
✅ You don’t need to create it using `new Math()`.
✅ You can directly access properties or methods → `Math.property` or `Math.method()`.
*/

console.log("⚡ BASIC MATH METHODS ---------------------");

console.log("PI:", Math.PI); // π constant → 3.141592653589793

console.log("Round (7.8):", Math.round(7.8)); // 8 → rounds to nearest integer
console.log("Floor (7.8):", Math.floor(7.8)); // 7 → always rounds *down*
console.log("Ceil (7.2):", Math.ceil(7.2)); // 8 → always rounds *up*
console.log("Random (0 to 1):", Math.random()); // Random number → [0, 1)
console.log("Max of (1, 9, 3):", Math.max(1, 9, 3)); // 9
console.log("Square root (25):", Math.sqrt(25)); // 5
console.log("Absolute (-7):", Math.abs(-7)); // 7
console.log("Power (2^4):", Math.pow(2, 4)); // 16

console.log("\n⚡ MORE EXAMPLES ---------------------");

console.log("PI:", Math.PI);
console.log("Round (7.5):", Math.round(7.5)); // 8
console.log("Round (2.5):", Math.round(2.5)); // 3
console.log("Floor (6.9):", Math.floor(6.9)); // 6
console.log("Ceil (5.4):", Math.ceil(5.4)); // 6
console.log("Max (8, 10, 2):", Math.max(8, 10, 2)); // 10
console.log("Square root (49):", Math.sqrt(49)); // 7

console.log("\n⚡ BONUS: RANDOM NUMBER EXAMPLES ---------------------");

// Random integer between 0–9
console.log("Random (0–9):", Math.floor(Math.random() * 10));

// Random integer between 1–100
console.log("Random (1–100):", Math.floor(Math.random() * 100) + 1);

// Random float between 5–10
console.log("Random (5–10):", Math.random() * 5 + 5);
