// ===============================
// FOR LOOP IN JAVASCRIPT
// ===============================

// Basic for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// --------------------------------

// Loop through an array
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// --------------------------------

// Sum of numbers using for loop
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum from 1 to 10:", sum);

// --------------------------------

// break example
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  console.log("Break example:", i);
}

// --------------------------------

// continue example
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("Continue example:", i);
}

// --------------------------------

// Nested for loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
