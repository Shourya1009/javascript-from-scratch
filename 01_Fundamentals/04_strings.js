// Full Name using Template Literals
let firstName = "Shourya";
let lastName = "Joshi";

let fullName = `${firstName} ${lastName}`;
console.log("Full Name:", fullName);

console.log("---------------------------------------------------------");

// Indexing in String
let str = "Hello";

console.log("Length of str is:", str.length);
console.log("Last character of str:", str[str.length - 1]);

// Accessing each character using index
console.log("Characters of str:");
for (let i = 0; i < str.length; i++) {
  console.log(`Index ${i}:`, str[i]);
}

console.log("---------------------------------------------------------");

// Another example with 'Shourya'
let name = "Shourya";

console.log("Characters of 'Shourya':");
for (let i = 0; i < name.length; i++) {
  console.log(`Index ${i}:`, name[i]);
}

console.log("---------------------------------------------------------");

// Length of String
console.log("Length of 'Shourya':", name.length);

// Last character using length - 1
console.log("Last character:", name[name.length - 1]);

console.log("---------------------------------------------------------");

// Strings are Immutable
console.log("Original name:", name);
name[0] = "A"; // ❌ This will not change the string
console.log("After trying to modify name[0] = 'A':", name);

// Correct way to change a string → create a new one
let newName = "A" + name.slice(1);
console.log("New modified name:", newName);

console.log("---------------------------------------------------------");
