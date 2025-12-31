// ==================================
// BREAK & CONTINUE IN JAVASCRIPT
// ==================================

// break → exits the loop completely
// continue → skips the current iteration

// ----------------------------------
// break with for loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Break (for loop):", i);
}

// Output: 1 2

// ----------------------------------
// continue with for loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("Continue (for loop):", i);
}

// Output: 1 2 4 5

// ----------------------------------
// break with while loop
let x = 1;

while (x <= 5) {
  if (x === 4) {
    break;
  }
  console.log("Break (while loop):", x);
  x++;
}

// ----------------------------------
// continue with while loop
let y = 0;

while (y < 5) {
  y++;
  if (y === 3) {
    continue;
  }
  console.log("Continue (while loop):", y);
}

// ----------------------------------
// break inside nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break;
    console.log(`Nested loop → i: ${i}, j: ${j}`);
  }
}
