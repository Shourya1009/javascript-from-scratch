/*
Math.random() in JavaScript :-
The Math.random() method returns a pseudo-random floating-point number in the range:

0 (inclusive) -> 1 (exclusive)

That means the result is always ≥ 0 and < 1.
*/

console.log(Math.random());
// e.g. 0.2837462819
console.log(Math.random());
// e.g. 0.9182736451

console.log("--------------------------");

let num = Math.floor(Math.random() * 10);
console.log(num); // e.g. 3

console.log("--------------------------");
let num_1 = Math.floor(Math.random() * 10) + 1;
console.log(num_1); // e.g. 8
