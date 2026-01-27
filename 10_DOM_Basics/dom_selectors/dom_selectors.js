// ==================================
// DOM SELECTORS IN JAVASCRIPT
// ==================================

// DOM = Document Object Model
// It allows JavaScript to access and change HTML elements

// NOTE: Run this in a browser (with an HTML file)
// because DOM does not work directly in Node.js.

// ----------------------------------
// 1. Selecting by ID (returns a single element)
const heading = document.getElementById("heading");
console.log("getElementById:", heading);

// ----------------------------------
// 2. Selecting by Class Name (returns HTMLCollection)
const itemsByClass = document.getElementsByClassName("item");
console.log("getElementsByClassName:", itemsByClass);

// ----------------------------------
// 3. Selecting by Tag Name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// ----------------------------------
// 4. querySelector (returns first match)
const firstItem = document.querySelector(".item");
console.log("querySelector (first .item):", firstItem);

// ----------------------------------
// 5. querySelectorAll (returns NodeList)
const allItems = document.querySelectorAll(".item");
console.log("querySelectorAll (.item):", allItems);

// ----------------------------------
// 6. Looping over NodeList (querySelectorAll)
allItems.forEach((item, index) => {
  console.log(`Item ${index + 1}:`, item.textContent);
});

// ----------------------------------
// 7. Changing text content
if (heading) {
  heading.textContent = "DOM Selectors Updated!";
}

// ----------------------------------
// 8. Changing styles
if (firstItem) {
  firstItem.style.color = "blue";
  firstItem.style.fontWeight = "bold";
}

// ----------------------------------
// 9. Changing multiple elements style
allItems.forEach((item) => {
  item.style.border = "1px solid black";
  item.style.padding = "8px";
});

// ----------------------------------
// 10. Difference between HTMLCollection & NodeList
// HTMLCollection → live collection (auto updates)
// NodeList → mostly static (does not auto update)

// Example:
const liveList = document.getElementsByClassName("item"); // live
const staticList = document.querySelectorAll(".item"); // static

console.log("Live HTMLCollection:", liveList);
console.log("Static NodeList:", staticList);
