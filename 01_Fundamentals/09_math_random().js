/*
🔢 Math.random() in JavaScript
--------------------------------
Math.random() generates a pseudo-random floating-point number in the range:

    0 (inclusive)  →  1 (exclusive)

So the output will always be:
    0 <= number < 1
*/

console.log(Math.random());
// Example output: 0.2837462819

console.log(Math.random());
// Example output: 0.9182736451

console.log("----------------------------------");

/*
🎲 Generate a random integer from 0 to 9
-----------------------------------------
Math.random() * 10  → gives range 0 to 9.999...
Math.floor()        → converts it to an integer 0–9
*/

let num = Math.floor(Math.random() * 10);
console.log("Random (0–9):", num);

console.log("----------------------------------");

/*
🎯 Generate a random integer from 1 to 10
------------------------------------------
Math.random() * 10  → 0 to <10
Math.floor(...) + 1 → 1 to 10
*/

let num_1 = Math.floor(Math.random() * 10) + 1;
console.log("Random (1–10):", num_1);

console.log("----------------------------------");

/*
✨ PRO TIP:
To generate a random integer between min and max (inclusive):
---------------------------------------
Math.floor(Math.random() * (max - min + 1)) + min
*/

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random (50–100):", randomInRange(50, 100));
