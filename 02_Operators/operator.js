// 🧠 JavaScript Operators — Complete Guide
// Operators are special symbols or keywords used to perform operations on values (operands).

/* ---------------------------------------------------
1. Arithmetic Operators (work with numbers)
--------------------------------------------------- */
let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1 (Modulus = remainder)
console.log(a ** b); // 1000 (Exponentiation: 10³)

/* ---------------------------------------------------
2. Assignment Operators
--------------------------------------------------- */
let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 2; // x = x * 2 → 12
x /= 3; // x = x / 3 → 4
x %= 3; // x = x % 3 → 1
x **= 2; // x = x ** 2 → 1 (1 squared)

/* ---------------------------------------------------
3. Comparison Operators (return true or false)
--------------------------------------------------- */
let y = 5,
  z = "5";

console.log(y == z); // true  (equal → checks only value)
console.log(y === z); // false (strict equal → checks value & type)
console.log(y != z); // false (not equal → checks only value)
console.log(y !== z); // true  (strict not equal)
console.log(y > 3); // true
console.log(y < 3); // false
console.log(y >= 5); // true
console.log(y <= 4); // false

/* ---------------------------------------------------
4. Logical Operators (used with booleans)
--------------------------------------------------- */
let c = true,
  d = false;

console.log(c && d); // false (AND → true only if both true)
console.log(c || d); // true  (OR  → true if any one is true)
console.log(!c); // false (NOT → reverses value)

/* ---------------------------------------------------
5. Unary Operators (work on a single value)
--------------------------------------------------- */
let k = 5;

console.log(++k); // 6 (Pre-increment)
console.log(k++); // 6 (Post-increment, then becomes 7)
console.log(--k); // 6 (Pre-decrement)
console.log(k--); // 6 (Post-decrement, then becomes 5)

/* ---------------------------------------------------
6. Ternary Operator (Conditional Operator)
--------------------------------------------------- */
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

/* ---------------------------------------------------
7. Type Checking Operators
--------------------------------------------------- */
// typeof → returns a string describing the type of a value
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ❗ (JavaScript quirk)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"

/* ---------------------------------------------------
8. instanceof Operator
--------------------------------------------------- */
// Checks whether an object is an instance of a particular constructor/class
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log([] instanceof Object); // true (Array inherits from Object)
console.log(null instanceof Object); // false

/* ---------------------------------------------------
9. Bitwise Operators (work at binary level)
--------------------------------------------------- */
// Convert operands to 32-bit integers, then perform binary operations
let p = 5; // 0101
let q = 3; // 0011

console.log(p & q); // 1  (AND)
console.log(p | q); // 7  (OR)
console.log(p ^ q); // 6  (XOR)
console.log(~p); // -6 (NOT → inverts bits)
console.log(p << 1); // 10 (Left shift → multiply by 2)
console.log(p >> 1); // 2  (Right shift → divide by 2)
console.log(p >>> 1); // 2 (Unsigned right shift)

/* ---------------------------------------------------
10. String Operators
--------------------------------------------------- */
let firstName = "Code";
let lastName = "Master";

console.log(firstName + " " + lastName); // "Code Master"
console.log("JS" + 101); // "JS101" (number converted to string)
let str = "Hello";
str += " World!";
console.log(str); // "Hello World!"

/* ---------------------------------------------------
✅ Summary:
---------------------------------------------------
Arithmetic → +, -, *, /, %, **  
Assignment → =, +=, -=, *=, /=, %=, **=  
Comparison → ==, ===, !=, !==, >, <, >=, <=  
Logical → &&, ||, !  
Unary → ++, --  
Ternary → condition ? expr1 : expr2  
typeof → returns data type  
instanceof → checks constructor relation  
Bitwise → &, |, ^, ~, <<, >>, >>>  
String → +, +=  
---------------------------------------------------
*/
