// ==================================
// EVENTS BASICS IN DOM (JavaScript)
// ==================================

// Events are actions performed by the user or browser
// Example: click, input, submit, keydown, mouseover

// NOTE: Run this in browser with an HTML file.

// ----------------------------------
// Selecting elements
const btn = document.getElementById("btn");
const inputBox = document.getElementById("nameInput");
const output = document.getElementById("output");

// ----------------------------------
// 1. Click event
if (btn) {
  btn.addEventListener("click", () => {
    output.textContent = "Button clicked!";
  });
}

// ----------------------------------
// 2. Input event (runs when user types)
if (inputBox) {
  inputBox.addEventListener("input", (event) => {
    output.textContent = `You typed: ${event.target.value}`;
  });
}

// ----------------------------------
// 3. Keydown event (detect key presses)
if (inputBox) {
  inputBox.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
  });
}

// ----------------------------------
// 4. Mouseover event
if (btn) {
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "lightgray";
  });
}

// ----------------------------------
// 5. Mouseout event
if (btn) {
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
  });
}
