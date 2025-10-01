let firstName = "Shourya";
let lastName = "Joshi";

let fullName = firstName + " " + lastName;

console.log(fullName);

// Indexing in String

let str = "Hello";

// Accessing last character -> first find out length of string using .length property then use strng index to find last character.

console.log("Length of str is :", str.length);
console.log("Last character : ", str[str.length - 1]);

console.log(str[0]); // "H"  (first character)
console.log(str[1]); // "e"
console.log(str[2]); // "l"
console.log(str[3]); // "l"
console.log(str[4]); // "o"

console.log("---------------------------------------------------------");

let name = "Shourya";

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

console.log("---------------------------------------------------------");

// Length of String :-

/*  
Length of a String

We can use .length to know how many characters are inside:
*/
console.log(name.length);

// To access last character :- last character will always be at index length - 1.
console.log(name[name.length - 1]);

// Strings are immutable in js - That means once a string is created, its individual characters cannot be changed.
// So name[0] = "A"; doesn’t throw an error ❌, but it also does nothing.
name[0] = "A";
console.log(name);
