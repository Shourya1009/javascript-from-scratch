// ==================================
// MODULES: IMPORT & EXPORT (ES6)
// ==================================

// ES6 modules let you split code into files
// and reuse logic cleanly

// NOTE:
// - Works in browsers with <script type="module">
// - Works in Node.js with "type": "module" in package.json

// ----------------------------------
// This file shows HOW imports look.
// The actual exports are in mathUtils.js and userUtils.js

import { add, subtract } from "./mathUtils.js";
import multiply from "./mathUtils.js";
import { createUser as makeUser } from "./userUtils.js";

console.log("Add:", add(5, 3));
console.log("Subtract:", subtract(10, 4));
console.log("Multiply:", multiply(4, 5));

const user = makeUser("Aman", 24);
console.log(user);
