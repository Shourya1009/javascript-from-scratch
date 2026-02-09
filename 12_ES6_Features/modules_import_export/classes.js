// ==================================
// CLASSES IN JAVASCRIPT (ES6)
// ==================================

// Classes are syntactic sugar over constructor functions
// They help create objects in a clean, structured way

// ----------------------------------
// 1. Basic class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const p1 = new Person("Aman", 24);
console.log(p1.greet());

// ----------------------------------
// 2. Class inheritance
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // call parent constructor
    this.course = course;
  }

  getDetails() {
    return `${this.name} is studying ${this.course}`;
  }
}

const s1 = new Student("Rahul", 22, "MCA");
console.log(s1.getDetails());

// ----------------------------------
// 3. Method overriding
class Teacher extends Person {
  greet() {
    return `Hello, I am Professor ${this.name}`;
  }
}

const t1 = new Teacher("Sharma", 45);
console.log(t1.greet());

// ----------------------------------
// 4. Getters and Setters
class User {
  constructor(username) {
    this._username = username;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    if (value.length < 3) {
      console.log("Username too short!");
      return;
    }
    this._username = value;
  }
}

const u1 = new User("aman");
console.log(u1.username);
u1.username = "ra";
u1.username = "rahul";
console.log(u1.username);

// ----------------------------------
// 5. Static methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 7));
