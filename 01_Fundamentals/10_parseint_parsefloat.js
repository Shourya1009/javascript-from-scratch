/*
parseInt() in JavaScript

Converts a string into an integer (whole number).

Stops reading the string when it finds a non-numeric character.

Can also take a radix (base) as a second argument.
*/
console.log(parseInt("42")); // 42   (number)
console.log(parseInt("42px")); // 42   (stops at "p")
console.log(parseInt("3.14")); // 3    (removes decimal part)
console.log(parseInt("hello")); // NaN  (not a number)

// With radix (base)
console.log(parseInt("101", 2)); // 5  (binary to decimal)
console.log(parseInt("FF", 16)); // 255 (hex to decimal)

/*
parseFloat() in JavaScript

Converts a string into a floating-point (decimal) number.

Similar to parseInt(), but keeps the decimal part.
*/
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("42")); // 42
console.log(parseFloat("42.99px")); // 42.99 (stops at "p")
console.log(parseFloat("hello")); // NaN
