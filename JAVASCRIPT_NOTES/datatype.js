/* Primitive Data type :-
Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable. 
Eg :- number,string,undefined,object,null
*/

/* Non-Primitive Data Type :-
Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities. The two key non-primitive data types in JavaScript are:
1] Object
2] Array
*/

// Number Data Type -. includes both integer and floating point number
let n1 = 2;
console.log(n1);

let n2 = 1.3;
console.log(n2);

let n3 = Infinity;
console.log(n3);

let n4 = "something here too" / 2;
console.log(n4);

/* String Data Type - series of characters thatis surrounded by quotes.
We have 3 types of quotes in JS :- 
*/
let s1 = "Hello There";
console.log(s1);

let s2 = "Single quotes work fine";
console.log(s2);

// Backtick (`)
let s3 = `can embed ${s1}`;
console.log(s3);

// Boolean Data Type -> has only two values i.e true or flase;
let b1 = true;
console.log(b1);

let b2 = false;
console.log(b2);

/*Undefined -> A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.
 */

let u;
console.log(u);

let ud = undefined;
console.log(ud);

/* Object Data Type -> In JS object are key-value pairs to store data , created with {} or new keyword.
They are fundamentals as everything in js are objects .
*/

let gfg = {
  type: "company",
  location: "Noida",
};
console.log(gfg.type);

let user1 = {
  name: "Shourya",
  age: 23,
  education: {
    graduation: "BCA",
    post_graduation: "MCA",
  },
  location: "Dehradun",
};
console.log(
  user1.name,
  user1.age,
  user1.education.post_graduation,
  user1.location
);
