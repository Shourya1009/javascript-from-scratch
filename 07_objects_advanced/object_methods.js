// ==================================
// OBJECT METHODS IN JAVASCRIPT
// ==================================

// Object methods are functions stored as object properties

// ----------------------------------
// 1. Basic object method
const user = {
  name: "Aman",
  greet: function () {
    console.log("Hello,", this.name);
  },
};

user.greet();

// ----------------------------------
// 2. Method shorthand (ES6)
const student = {
  name: "Rahul",
  course: "MCA",
  getDetails() {
    return `${this.name} is enrolled in ${this.course}`;
  },
};

console.log(student.getDetails());

// ----------------------------------
// 3. Method using parameters
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log("Add:", calculator.add(10, 5));
console.log("Subtract:", calculator.subtract(10, 5));

// ----------------------------------
// 4. this keyword inside object method
const car = {
  brand: "Toyota",
  model: "Innova",
  getCarInfo() {
    return `${this.brand} ${this.model}`;
  },
};

console.log(car.getCarInfo());

// ----------------------------------
// 5. Object methods with arrow functions (NOT recommended)
const person = {
  name: "Neha",
  sayHello: () => {
    console.log("Hello,", this.name);
  },
};

person.sayHello(); // undefined

// ----------------------------------
// 6. Object.freeze() (prevents changes)
const settings = {
  theme: "dark",
};

Object.freeze(settings);
settings.theme = "light"; // ignored
console.log(settings);

// ----------------------------------
// 7. Object.seal() (allows update, prevents add/delete)
const profile = {
  username: "user123",
};

Object.seal(profile);
profile.username = "user456"; // allowed
profile.age = 25; // not allowed
delete profile.username; // not allowed
console.log(profile);
