// ===============================
// DO WHILE LOOP IN JAVASCRIPT
// ===============================

// Basic do-while loop
let i = 1;

do {
  console.log("Count:", i);
  i++;
} while (i <= 5);

// --------------------------------

// do-while runs at least once
let num = 10;

do {
  console.log("This will run once even if condition is false");
} while (num < 5);

// --------------------------------

// Loop through an array
const colors = ["Red", "Green", "Blue"];
let index = 0;

do {
  console.log("Color:", colors[index]);
  index++;
} while (index < colors.length);

// --------------------------------

// break example
let x = 1;

do {
  if (x === 4) break;
  console.log("Break example:", x);
  x++;
} while (x <= 5);

// --------------------------------

// continue example
let y = 0;

do {
  y++;
  if (y === 3) continue;
  console.log("Continue example:", y);
} while (y <= 5);
