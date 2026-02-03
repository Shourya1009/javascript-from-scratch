// ==================================
// TEMPLATE LITERALS IN JAVASCRIPT (ES6)
// ==================================

// Template literals use backticks (` `)
// They allow:
// 1. String interpolation
// 2. Multi-line strings
// 3. Embedded expressions

// ----------------------------------
// 1. String interpolation
const name = "Aman";
const age = 24;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// ----------------------------------
// 2. Expression inside template literal
const a = 10;
const b = 20;

console.log(`Sum of a and b is ${a + b}`);

// ----------------------------------
// 3. Multi-line strings
const multiLine = `
This is line one
This is line two
This is line three
`;

console.log(multiLine);

// ----------------------------------
// 4. Function call inside template literal
function greet(user) {
  return `Hello, ${user}!`;
}

console.log(`${greet("Rahul")} Welcome to ES6.`);

// ----------------------------------
// 5. Template literals with HTML (DOM usage)
const title = "JavaScript";
const description = "Template literals make HTML easy!";

const htmlTemplate = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
`;

console.log(htmlTemplate);

// ----------------------------------
// 6. Tagged template literals (basic idea)
function highlight(strings, value) {
  return `${strings[0]}**${value}**${strings[1]}`;
}

const language = "JavaScript";
const result = highlight`I love ${language}!`;

console.log(result);
