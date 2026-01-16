// ==================================
// CLOSURES IN JAVASCRIPT
// ==================================

// Closure means: a function remembers the variables
// from its outer (lexical) scope even after the outer function finishes.

// ----------------------------------
// 1. Basic closure example
function outerFunction() {
  let outerValue = "I am from outer scope";

  function innerFunction() {
    console.log(outerValue);
  }

  return innerFunction;
}

const myFunc = outerFunction();
myFunc(); // still has access to outerValue

// ----------------------------------
// 2. Closure with private variable (data hiding)
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// ----------------------------------
// 3. Closure with parameters
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// ----------------------------------
// 4. Common closure example in setTimeout
function timerExample() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log("After", i, "seconds");
    }, i * 1000);
  }
}

timerExample();

// ----------------------------------
// 5. Closure in real life (factory function)
function createUser(name) {
  return {
    getName() {
      return name;
    },
  };
}

const user1 = createUser("Aman");
console.log(user1.getName());
