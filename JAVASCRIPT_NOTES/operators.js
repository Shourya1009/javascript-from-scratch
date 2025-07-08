// Operator -> are used to perform operations on operands.

// Operands -> are the values upon which operators perform operations.

/*
1] Arithmetc Operator :- are used to perform mathematical calucations on numberical values.
*/
let x = 4;
let y = 3;
console.log("x + y : ", x + y);
console.log("x - y : ", x - y);
console.log("x * y : ", x * y);
console.log("x / y : ", x / y);
console.log("x % y : ", x % y);
console.log("x ** y : ", y ** 3);

/*
 2] Assignment Operator :- are used to assign values to variables.
*/
let a = 10;
a += 7;
console.log("Value of a after addition is : ", a);
a %= 3;
console.log("Value of a after storing remainder is : ", a);
a *= 5;
console.log("Value of a after multlplication is : ", a);
a -= 3;
console.log("Value of a after subtracton is : ", a);
a /= 2;
console.log("Value of a after divison is : ", a);
a **= 2;
console.log("Value of a after exponent is : ", a);

/*
 3] Comparison Operator -> use to compare two values and return a boolean value(true or false ) based on comparison.
*/
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator - > return true if  value and type matches otherwse return false.
console.log("Strictly equal to: 2 === '2' is", 2 === "2");

// strictly not equal to operator -> return true if  either the value or the type does not matches otherwise return false.
console.log("Strictly not equal to: 2 !== '2' is", 2 !== "2");

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);

/*
Logical Operator -> use to perform logical operations on boolean expressions.

&& (Logical AND) -> expression1 && expression2 -> true only if both expression1 and expression2 are true

|| (Logical OR)	-> expression1 || expression2 -> true if either expression1 or expression2 is true

! (Logical NOT) -> !expression -> false if expression is true and vice versa
*/

let u = 3;

// logical AND
console.log(u < 5 && u > 0); // true
console.log(u < 5 && u > 6); // false

// logical OR
console.log(u > 2 || u > 5); // true
console.log(u > 3 || u < 0); // false

// logical NOT
console.log(!(u == 3)); // false
console.log(!(u < 2)); // true
