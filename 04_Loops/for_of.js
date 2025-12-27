// ===============================
// FOR...OF LOOP IN JAVASCRIPT
// ===============================

// for...of is used to iterate over iterable objects
// like Arrays, Strings, Maps, Sets

// --------------------------------

// 1. Loop over an array
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// --------------------------------

// 2. Loop over a string
const name = "JavaScript";

for (const char of name) {
  console.log("Character:", char);
}

// --------------------------------

// 3. Using for...of with break
for (const fruit of fruits) {
  if (fruit === "Banana") break;
  console.log("Break example:", fruit);
}

// --------------------------------

// 4. Using for...of with continue
for (const fruit of fruits) {
  if (fruit === "Banana") continue;
  console.log("Continue example:", fruit);
}

// --------------------------------

// 5. Loop over array entries (index + value)
for (const [index, value] of fruits.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}
