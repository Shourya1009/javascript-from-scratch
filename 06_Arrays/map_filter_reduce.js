// ==================================
// MAP, FILTER & REDUCE IN JAVASCRIPT
// ==================================

// These are higher-order array methods
// They DO NOT modify the original array

// ----------------------------------
// map() → transforms each element
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map((num) => num * num);
console.log("Map (Squared):", squared);

// ----------------------------------
// filter() → selects elements based on condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Filter (Even):", evenNumbers);

// ----------------------------------
// reduce() → reduces array to a single value
const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("Reduce (Sum):", sum);

// ----------------------------------
// Chaining map + filter
const result = numbers.map((num) => num * 2).filter((num) => num > 5);

console.log("Chaining:", result);

// ----------------------------------
// reduce() for finding max value
const maxValue = numbers.reduce((max, num) => {
  return num > max ? num : max;
}, numbers[0]);

console.log("Max value:", maxValue);

// ----------------------------------
// reduce() with objects
const cart = [
  { item: "Pen", price: 10 },
  { item: "Book", price: 50 },
  { item: "Bag", price: 200 },
];

const totalPrice = cart.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Total price:", totalPrice);
