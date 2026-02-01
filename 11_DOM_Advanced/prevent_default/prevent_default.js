// ==================================
// PREVENT DEFAULT IN JAVASCRIPT
// ==================================

// preventDefault() stops the browser's
// default behavior for an event

// ----------------------------------
// Select elements
const link = document.getElementById("myLink");
const form = document.getElementById("myForm");
const message = document.getElementById("message");

// ----------------------------------
// 1. Prevent default link behavior
if (link) {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // ⛔ stops navigation
    message.textContent = "Link click prevented!";
  });
}

// ----------------------------------
// 2. Prevent default form submit behavior
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // ⛔ stops page refresh
    message.textContent = "Form submission prevented!";
  });
}
