// ==================================
// ARRAY BASICS IN JAVASCRIPT
// ==================================

// Array is a collection of elements
// Arrays are zero-indexed

// ----------------------------------
// Creating arrays
const numbers = [10, 20, 30, 40];
const fruits = ["Apple", "Banana", "Mango"];
const mixed = [1, "Hello", true, null];

console.log(numbers);
console.log(fruits);
console.log(mixed);

// ----------------------------------
// Accessing array elements
console.log(numbers[0]); // first element
console.log(fruits[2]); // Mango

// ----------------------------------
// Updating array elements
numbers[1] = 25;
console.log(numbers);

// ----------------------------------
// Array length
console.log("Length:", fruits.length);

// ----------------------------------
// Looping through array (for loop)
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// ----------------------------------
// Looping through array (for...of)
for (let fruit of fruits) {
  console.log("for...of:", fruit);
}

// ----------------------------------
// Adding elements
fruits.push("Orange"); // add at end
fruits.unshift("Grapes"); // add at start
console.log(fruits);

// ----------------------------------
// Removing elements
fruits.pop(); // remove from end
fruits.shift(); // remove from start
console.log(fruits);

// ----------------------------------
// Check if value is an array
console.log(Array.isArray(fruits)); // true

// ----------------------------------
// Index of element
console.log(fruits.indexOf("Banana")); // index or -1
