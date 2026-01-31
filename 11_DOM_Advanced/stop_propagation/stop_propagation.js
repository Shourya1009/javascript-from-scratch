// ==================================
// STOP PROPAGATION IN JAVASCRIPT
// ==================================

// stopPropagation() prevents the event
// from moving further in the DOM tree

// ----------------------------------
// Select elements
const container = document.getElementById("container");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// ----------------------------------
// stopPropagation example
if (container && parent && child) {
  container.addEventListener("click", () => {
    console.log("Container clicked");
  });

  parent.addEventListener("click", () => {
    console.log("Parent clicked");
  });

  child.addEventListener("click", (event) => {
    event.stopPropagation(); // ⛔ stops bubbling
    console.log("Child clicked (propagation stopped)");
  });
}
