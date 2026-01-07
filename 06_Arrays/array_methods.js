// ==================================
// ARRAY METHODS IN JAVASCRIPT
// ==================================

// ----------------------------------
// push() & pop()
const numbers = [1, 2, 3];

numbers.push(4);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

// ----------------------------------
// unshift() & shift()
const fruits = ["Apple", "Banana"];

fruits.unshift("Mango");
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);

// ----------------------------------
// concat()
const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = arr1.concat(arr2);
console.log("Concat:", combined);

// ----------------------------------
// slice() (does NOT modify original array)
const colors = ["Red", "Green", "Blue", "Yellow"];

const sliced = colors.slice(1, 3);
console.log("Slice:", sliced);
console.log("Original:", colors);

// ----------------------------------
// splice() (MODIFIES original array)
const months = ["Jan", "Feb", "Mar", "Apr"];

months.splice(1, 2, "May", "June");
console.log("Splice:", months);

// ----------------------------------
// includes()
const nums = [10, 20, 30];

console.log(nums.includes(20)); // true
console.log(nums.includes(40)); // false

// ----------------------------------
// indexOf()
console.log(nums.indexOf(30)); // 2
console.log(nums.indexOf(50)); // -1

// ----------------------------------
// join()
const letters = ["J", "S"];

console.log(letters.join("")); // JS
console.log(letters.join("-")); // J-S

// ----------------------------------
// reverse()
const rev = [1, 2, 3];
rev.reverse();
console.log("Reverse:", rev);

// ----------------------------------
// sort()
const values = [3, 1, 10, 2];

values.sort((a, b) => a - b);
console.log("Sorted:", values);
