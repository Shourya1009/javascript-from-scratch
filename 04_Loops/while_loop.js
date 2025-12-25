// ===============================
// WHILE LOOP IN JAVASCRIPT
// ===============================

// Basic while loop
let i = 1;

while (i <= 5) {
  console.log("Count:", i);
  i++;
}

// --------------------------------

// Loop through an array
const numbers = [10, 20, 30, 40, 50];
let index = 0;

while (index < numbers.length) {
  console.log("Number:", numbers[index]);
  index++;
}

// --------------------------------

// Sum of numbers using while loop
let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

console.log("Sum from 1 to 10:", sum);

// --------------------------------

// break example
let x = 1;

while (x <= 10) {
  if (x === 6) break;
  console.log("Break example:", x);
  x++;
}

// --------------------------------

// continue example
let y = 0;

while (y < 5) {
  y++;
  if (y === 3) continue;
  console.log("Continue example:", y);
}
