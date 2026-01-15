// ==================================
// SCOPE IN JAVASCRIPT
// ==================================

// Scope determines where variables are accessible

// Types of Scope:
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// ----------------------------------
// 1. Global Scope
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();

// ----------------------------------
// 2. Function Scope
function functionScope() {
  var functionVar = "I am function scoped";
  console.log(functionVar);
}

// console.log(functionVar); // ❌ Error
functionScope();

// ----------------------------------
// 3. Block Scope (let & const)
if (true) {
  let blockLet = "Block scoped let";
  const blockConst = "Block scoped const";
  console.log(blockLet);
  console.log(blockConst);
}

// console.log(blockLet);   // ❌ Error
// console.log(blockConst); // ❌ Error

// ----------------------------------
// 4. var is NOT block scoped
if (true) {
  var testVar = "I escape the block";
}

console.log(testVar);

// ----------------------------------
// 5. Scope chain
let outer = "Outer value";

function outerFunction() {
  let inner = "Inner value";

  function innerFunction() {
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
}

outerFunction();

// ----------------------------------
// 6. Shadowing
let value = "Global value";

function shadowExample() {
  let value = "Local value";
  console.log(value);
}

shadowExample();
console.log(value);
