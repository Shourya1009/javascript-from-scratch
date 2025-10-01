/*
The Math object in JavaScript is a built-in object that provides mathematical constants and functions.

⚡ Important points:

1] You don’t create it using new Math().

2] You use it directly → Math.method() or Math.property.
*/

console.log(Math.PI); // 3.141592653589793
console.log(Math.round(7.8)); // 8
console.log(Math.floor(7.8)); // 7 // "Floor" means it always goes to the lower whole number, regardless of decimal value.
console.log(Math.ceil(7.2)); // 8 // "Ceil" = "ceiling" → always pushes the number upward to the next whole number, no matter the decimal value.
console.log(Math.random()); // e.g. 0.34523
console.log(Math.max(1, 9, 3)); // 9
console.log(Math.sqrt(25)); // 5
console.log(Math.abs(-7)); // 7
console.log(Math.pow(2, 4)); //16

console.log("---------------------");

console.log(Math.PI);
console.log(Math.round(7.5));
console.log(Math.round(2.5));
console.log(Math.floor(6.9));
console.log(Math.ceil(5.4));
console.log(Math.random()); // range -> 0 to 1(exclusive)
console.log(Math.max(8, 10, 2));
console.log(Math.sqrt(49));
