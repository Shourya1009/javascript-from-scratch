// ==================================
// OBJECT BASICS IN JAVASCRIPT
// ==================================

// Objects store data in key-value pairs

// ----------------------------------
// Creating an object (object literal)
const user = {
  name: "Aman",
  age: 24,
  isStudent: true,
};

console.log(user);

// ----------------------------------
// Accessing object properties
console.log(user.name); // dot notation
console.log(user["age"]); // bracket notation

// ----------------------------------
// Adding new properties
user.city = "Delhi";
console.log(user);

// ----------------------------------
// Updating properties
user.age = 25;
console.log(user);

// ----------------------------------
// Deleting properties
delete user.isStudent;
console.log(user);

// ----------------------------------
// Checking if property exists
console.log("name" in user); // true
console.log("salary" in user); // false

// ----------------------------------
// Looping through object properties (for...in)
for (let key in user) {
  console.log(key, ":", user[key]);
}

// ----------------------------------
// Object with method
const person = {
  firstName: "Rahul",
  lastName: "Sharma",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName());

// ----------------------------------
// Object keys, values, entries
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
