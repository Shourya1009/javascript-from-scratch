// ==================================
// THIS KEYWORD IN JAVASCRIPT
// ==================================

// 'this' refers to the object that is executing the current function
// Its value depends on HOW a function is called

// ----------------------------------
// 1. this in global scope
console.log(this);
// In browser → window
// In Node.js → {}

// ----------------------------------
// 2. this inside an object method
const user = {
  name: "Aman",
  greet() {
    console.log("Hello,", this.name);
  },
};

user.greet(); // Aman

// ----------------------------------
// 3. this inside a regular function
function showThis() {
  console.log(this);
}

showThis();
// In non-strict mode → window (browser)
// In strict mode → undefined

// ----------------------------------
// 4. this inside arrow function
const arrowFn = () => {
  console.log(this);
};

arrowFn();
// Arrow functions do NOT have their own this

// ----------------------------------
// 5. this with nested function
const person = {
  name: "Rahul",
  showName() {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

person.showName(); // undefined

// ----------------------------------
// 6. Fixing this using arrow function
const personFixed = {
  name: "Rahul",
  showName() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

personFixed.showName(); // Rahul

// ----------------------------------
// 7. this with call(), apply(), bind()
function greet(city) {
  console.log(this.name, "from", city);
}

const user1 = { name: "Neha" };

greet.call(user1, "Delhi");
greet.apply(user1, ["Mumbai"]);

const boundFn = greet.bind(user1, "Pune");
boundFn();
