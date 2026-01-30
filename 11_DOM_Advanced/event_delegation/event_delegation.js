// ==================================
// EVENT DELEGATION IN JAVASCRIPT
// ==================================

// Event delegation means:
// Attaching ONE event listener to a parent
// instead of multiple listeners to child elements

// ----------------------------------
// Select parent element
const list = document.getElementById("list");

// ----------------------------------
// Event delegation example
if (list) {
  list.addEventListener("click", (event) => {
    // Check if clicked element is an <li>
    if (event.target.tagName === "LI") {
      console.log("Clicked item:", event.target.textContent);

      // Highlight clicked item
      event.target.style.backgroundColor = "lightblue";
    }
  });
}
