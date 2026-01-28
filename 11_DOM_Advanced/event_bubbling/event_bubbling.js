// ==================================
// EVENT BUBBLING IN DOM
// ==================================

// Event bubbling means:
// Event starts from the target element
// and bubbles UP to its parent elements

// Order: child → parent → grandparent → document

// NOTE: Run this in browser with HTML.

// ----------------------------------
// Selecting elements
const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// ----------------------------------
// Event listeners
if (grandParent) {
  grandParent.addEventListener("click", () => {
    console.log("Grandparent clicked");
  });
}

if (parent) {
  parent.addEventListener("click", () => {
    console.log("Parent clicked");
  });
}

if (child) {
  child.addEventListener("click", () => {
    console.log("Child clicked");
  });
}
