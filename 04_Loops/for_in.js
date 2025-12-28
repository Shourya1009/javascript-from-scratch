// ===============================
// FOR...IN LOOP IN JAVASCRIPT
// ===============================

// for...in is mainly used to iterate over
// keys (properties) of an object

// --------------------------------

// 1. Loop over an object
const student = {
  name: "Rahul",
  age: 22,
  course: "MCA",
};

for (const key in student) {
  console.log(key + ":", student[key]);
}

// --------------------------------

// 2. for...in with array (NOT recommended)
const colors = ["Red", "Green", "Blue"];

for (const index in colors) {
  console.log("Index:", index, "Value:", colors[index]);
}

// --------------------------------

// 3. Checking own properties (best practice)
const person = Object.create({ country: "India" });
person.name = "Aman";
person.age = 25;

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("Own Property:", key, person[key]);
  }
}
