/*
🔹 parseInt() in JavaScript

➡️ Converts a string into an integer (whole number).
➡️ Stops reading when it finds a non-numeric character.
➡️ Can take a radix (base) as a second argument.

Syntax:
parseInt(string, radix);
*/

console.log(parseInt("42")); // ✅ 42 — plain number
console.log(parseInt("42px")); // ✅ 42 — stops parsing at "p"
console.log(parseInt("3.14")); // ✅ 3  — removes decimal part
console.log(parseInt("007")); // ✅ 7  — ignores leading zeros
console.log(parseInt("hello")); // ❌ NaN — not a number

// With radix (base)
console.log(parseInt("101", 2)); // ✅ 5   — binary (base 2) → decimal
console.log(parseInt("FF", 16)); // ✅ 255 — hexadecimal (base 16) → decimal
console.log(parseInt("77", 8)); // ✅ 63  — octal (base 8) → decimal
console.log(parseInt("101", 10)); // ✅ 101 — base 10 (decimal)

/*
⚠️ Note:
If radix is not given, parseInt() tries to detect the base.
Always specify radix to avoid unexpected results.
*/

/*
🔹 parseFloat() in JavaScript

➡️ Converts a string into a floating-point (decimal) number.
➡️ Similar to parseInt(), but **keeps the decimal part**.
➡️ Ignores extra characters after a valid number.
*/

console.log(parseFloat("3.14")); // ✅ 3.14 — keeps decimal
console.log(parseFloat("42")); // ✅ 42   — still works for integers
console.log(parseFloat("42.99px")); // ✅ 42.99 — stops at "p"
console.log(parseFloat("  10.5  ")); // ✅ 10.5 — trims whitespace
console.log(parseFloat("hello")); // ❌ NaN — cannot parse number

/*
🔸 Difference Summary:
------------------------------------------
| Function       | Keeps Decimal? | Supports Base (Radix)? |
|----------------|----------------|-------------------------|
| parseInt()     | ❌ No           | ✅ Yes (binary, hex...) |
| parseFloat()   | ✅ Yes          | ❌ No                  |
------------------------------------------
*/
