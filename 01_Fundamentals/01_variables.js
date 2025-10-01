/*
VARIABLES IN JAVASCRIPT
-----------------------
A variable is like a named container where you can store data and then use or update it in your program.
JavaScript gives us three keywords to declare variables: var, let and const.
They differ in scope, re-declaration rules, and mutability.
*/

// 1️⃣ var  — legacy way (avoid in modern JS)
/*
- Introduced before ES6 (EcmaScript 2015).
- Function-scoped (NOT block-scoped):
    > Visible throughout an entire function regardless of {} blocks.

This means:

When you declare a variable with var inside a function, you can use it anywhere inside that function — even in different blocks like if or for.

The {} braces don’t restrict its scope unless they define a function itself.

Example :-

function test() {
  if (true) {
    var x = 10; // declared inside an if-block
  }
  console.log(x); // ✅ 10 (still accessible here)
}
test();
// console.log(x); // ❌ ReferenceError (x not visible outside the function)


- Can be redeclared and reassigned in the same scope.
- Hoisted (moved to the top of its scope) and initialized as undefined.
*/

function demo() {
  var y = 5;
  console.log(y); // 5
}
// console.log(y); // ❌ ReferenceError: y is not defined

var name = "Shourya";
var name = "Alex"; // ✅ Redeclaration allowed
console.log(name); // Alex

// 2️⃣ let — modern and preferred for variables that change
/*
- Introduced in ES6  (EcmaScript 2015).
- Block-scoped: visible only inside the { } block where defined.
- Can be reassigned (updated), but cannot be redeclared in the same scope.
- Hoisted but not initialized (Temporal Dead Zone until declaration).
*/

let age = 20;
age = 25; // ✅ Allowed (reassigned)
console.log(age); // 25

if (true) {
  let temp = "inside";
  console.log(temp); // inside
}
// console.log(temp); // ❌ ReferenceError (block-scoped)

// let age = 30; // ❌ Error: Cannot redeclare 'age' in the same scope

// 3️⃣ const — modern and preferred way to declare a variable that remains constant throughout an entire program.
/*
- Introduced in ES6  (EcmaScript 2015).
- Block-scoped (like let).
- Must be assigned at declaration time.
- Cannot be reassigned or redeclared.
- For objects & arrays: the binding (reference) is constant, 
  but the contents can still be mutated.
*/

const pi = 3.14159;
// pi = 3; // ❌ Error: Assignment to constant variable
console.log(pi); // 3.14159

// ✅ Allowed: modifying properties of a const object
const user = { name: "Shourya", age: 20 };
user.age = 21; // ✅ Allowed
console.log(user); // { name: 'Shourya', age: 21 }

// ✅ Allowed: modifying elements of a const array
const colors = ["red", "green"];
colors.push("blue");
console.log(colors); // ["red", "green", "blue"]

// 📜 Variable Naming Rules
/*
1. Must begin with a letter, underscore (_), or dollar sign ($).
   ✅ let name;
   ✅ let _value;
   ✅ let $amount;
   ❌ let 1abc; // Not allowed

2. Case-sensitive:
   `Age`, `age`, and `AGE` are three different variables.

3. Cannot use reserved keywords (like let, class, return, etc.).

4. Use camelCase for multi-word names (best practice in JS):
   let firstName = "Shourya";
*/

// 📝 Quick Reference Table:

/*
+---------+---------------+----------------------------+--------------------------+
| Keyword | Scope         | Redeclare / Reassign?      | Hoisting                 |
+---------+---------------+----------------------------+--------------------------+
| var     | Function scope| ✅ Redeclare, ✅ Reassign    | Hoisted (initialized as undefined) |
| let     | Block scope   | ❌ Redeclare, ✅ Reassign    | Hoisted (TDZ until init) |
| const   | Block scope   | ❌ Redeclare, ❌ Reassign    | Hoisted (TDZ until init) |
+---------+---------------+----------------------------+--------------------------+
*/

/*
Function Scope vs Block Scope

function demoScope() {
  if (true) {
    var x = "I am var";   // function-scoped
    let y = "I am let";   // block-scoped
    const z = "I am const"; // block-scoped

    console.log("Inside block:");
    console.log(x); // ✅ "I am var"
    console.log(y); // ✅ "I am let"
    console.log(z); // ✅ "I am const"
  }

  console.log("\nOutside block:");
  console.log(x); // ✅ still accessible (function-scoped)

  // console.log(y); // ❌ ReferenceError: y is not defined 
  // console.log(z); // ❌ ReferenceError: z is not defined
}

demoScope();
*/
