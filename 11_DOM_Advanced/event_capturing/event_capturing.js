// ==================================
// EVENT CAPTURING IN JAVASCRIPT
// ==================================

// Event capturing (also called trickling) means:
// An event starts from the outermost element
// and goes down to the target element

// ----------------------------------
// Select elements
const container = document.getElementById("container");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// ----------------------------------
// Event capturing example
if (container && parent && child) {
  container.addEventListener(
    "click",
    () => {
      console.log("Container clicked (capturing)");
    },
    true, // 👈 capturing phase
  );

  parent.addEventListener(
    "click",
    () => {
      console.log("Parent clicked (capturing)");
    },
    true,
  );

  child.addEventListener(
    "click",
    () => {
      console.log("Child clicked (capturing)");
    },
    true,
  );
}
