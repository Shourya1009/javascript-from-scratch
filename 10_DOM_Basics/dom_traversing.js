// ==================================
// DOM TRAVERSING IN JAVASCRIPT
// ==================================

// DOM Traversing means moving around the DOM tree
// (parent, children, siblings)

// NOTE: Run this in browser with an HTML file.

// ----------------------------------
// Example HTML structure (for reference):
// <div id="container">
//   <h1 id="heading">Hello</h1>
//   <ul id="list">
//     <li class="item">Item 1</li>
//     <li class="item">Item 2</li>
//     <li class="item">Item 3</li>
//   </ul>
// </div>

// ----------------------------------
// Selecting main container
const container = document.getElementById("container");
console.log("Container:", container);

// ----------------------------------
// 1. Parent element
const heading = document.getElementById("heading");
console.log("Parent of heading:", heading.parentElement);

// ----------------------------------
// 2. Children of an element
const list = document.getElementById("list");

console.log("Children of list (HTMLCollection):", list.children);
console.log("First child element:", list.firstElementChild);
console.log("Last child element:", list.lastElementChild);

// ----------------------------------
// 3. Child Nodes (includes text nodes like spaces/new lines)
console.log("Child nodes of list:", list.childNodes);

// ----------------------------------
// 4. Next and Previous sibling
const secondItem = list.children[1];

console.log("Second item:", secondItem);
console.log("Previous sibling:", secondItem.previousElementSibling);
console.log("Next sibling:", secondItem.nextElementSibling);

// ----------------------------------
// 5. Traversing from child to parent
console.log("Parent of list:", list.parentElement);
console.log("Grandparent of list:", list.parentElement.parentElement);

// ----------------------------------
// 6. Using closest() (very useful)
const closestUl = secondItem.closest("ul");
console.log("Closest <ul>:", closestUl);

const closestContainer = secondItem.closest("#container");
console.log("Closest #container:", closestContainer);

// ----------------------------------
// 7. Selecting all items and logging text
const allItems = document.querySelectorAll(".item");

allItems.forEach((item, index) => {
  console.log(`Item ${index + 1} text:`, item.textContent);
});
