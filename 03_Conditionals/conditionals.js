/*
Conditionals are used to make decisions in your code.
They allow your program to execute different blocks of code depending on whether a condition is true or false.
*/

console.log("--------------------------------------------");

/*
Types of Conditionals in JS

1. if statement :-
Executes a block of code if a condition is true.
*/
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

/*
2. if...else statement :-
Provides an alternative block if the condition is false.
*/
let age_1 = 16;

if (age_1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

/*
3. if...else if...else (multiple conditions) :-
Checks multiple conditions in order.
*/
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

/*
4. Nested if :-
An if inside another if.
*/
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome Admin!");
  } else {
    console.log("Welcome User!");
  }
} else {
  console.log("Please log in.");
}

/*
5. switch statement :-
Useful when checking against multiple fixed values.
*/
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

/*
6. Ternary Operator (? :)     :-
Shorthand for simple if...else.
*/
let age_2 = 20;
let message = age_2 >= 18 ? "Adult" : "Minor";
console.log(message);
