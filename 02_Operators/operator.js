// In JavaScript, operators are special symbols or keywords used to perform operations on values (operands).

/*
Types of Operators in JavaScript

1. Arithmetic Operators (work with numbers) :-
Used for basic math.
*/
let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1 (Modulus = remainder)
console.log(a ** b); // 1000 (Exponentiation: 10³)

/*
2. Assignment Operators :-
Used to assign values.
*/
let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 2; // x = x * 2 → 12
x /= 3; // x = x / 3 → 4
x %= 3; // x = x % 3 → 1
x **= 2; // x = x**2 -> 25

/*
3. Comparison Operators (returns true or false) :-
Used to compare values.
*/
let y = 5,
  z = "5";

console.log(y == z); // true  (equal, check only value , ignores type)
console.log(y === z); // false (strict equal, checks value and type)
console.log(y != z); // false (not equal, check only value , ignores type)
console.log(y !== z); // true  (strict not equal)
console.log(y > 3); // true
console.log(y < 3); // false
console.log(y >= 5); // true
console.log(y <= 4); // false

/*
4. Logical Operators :-
Used with booleans (true/false).
*/
let c = true,
  d = false;

console.log(c && d); // false (AND → true only if both true)
console.log(c || d); // true  (OR  → true if any one is true)
console.log(!c); // false (NOT → reverses value)

/*
5. Unary Operators :-
Work on a single value.
*/
let k = 5;

console.log(++k); // 6 (Pre-increment)
console.log(k++); // 6 (Post-increment, then becomes 7)
console.log(--k); // 6 (Pre-decrement)
console.log(k--); // 6 (Post-decrement, then becomes 5)

/*
6. Ternary Operator (Conditional) :-
Short form of if...else.
*/
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

/*
7. Typeof Operator :-
*/
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(null instanceof Object); // false
console.log([] instanceof Array); // true
