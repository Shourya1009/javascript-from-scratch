/*

We can use the else if keyword to check for multiple conditions.

The syntax of the else if statement is:

if (condition1) {
    // if body
}

else if (condition2){
    // else if body
}

else {
    // else body
}

*/

let rating = 4;

if (rating <= 2) {
  console.log("Bad rating");
} else if (rating >= 4) {
  console.log("Good rating!");
} else {
  console.log("Average rating");
}
