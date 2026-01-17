// ==================================
// LEXICAL SCOPE IN JAVASCRIPT
// ==================================

// Lexical scope means:
// A function can access variables from where it is WRITTEN (defined),
// not where it is CALLED (executed).

// ----------------------------------
// 1. Basic lexical scope example
let globalVar = "Global variable";

function outer() {
  let outerVar = "Outer variable";

  function inner() {
    let innerVar = "Inner variable";

    console.log(globalVar); // accessible
    console.log(outerVar); // accessible
    console.log(innerVar); // accessible
  }

  inner();
}

outer();

// ----------------------------------
// 2. Inner function cannot be accessed from outside
function parent() {
  let secret = "I am secret";

  function child() {
    console.log("Accessing secret:", secret);
  }

  return child;
}

const childFunc = parent();
childFunc(); // child remembers secret (closure)

// ----------------------------------
// 3. Lexical scope vs block scope
if (true) {
  let blockVar = "Block scoped variable";

  function showBlockVar() {
    console.log(blockVar);
  }

  showBlockVar();
}

// ----------------------------------
// 4. Important: Scope is based on code structure
function first() {
  let value = "From first()";

  function second() {
    console.log(value);
  }

  return second;
}

const fn = first();
fn(); // still prints "From first()" because of lexical scope
