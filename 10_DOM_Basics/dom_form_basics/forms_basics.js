// ==================================
// FORMS BASICS IN DOM (JavaScript)
// ==================================

// This file covers:
// - Form submit event
// - Reading input values
// - preventDefault()
// - Basic validation
// - Better email check
// - Cleaner UI updates

// NOTE: Run this in browser with an HTML file.

// ----------------------------------
// Selecting form and elements
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

// ----------------------------------
// Function to display messages
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

// ----------------------------------
// Form submit event
if (form) {
  form.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();

    // Get trimmed values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // ----------------------------------
    // Basic validation
    if (!name || !email) {
      showMessage("❌ Please fill in all fields.", "red");
      return;
    }

    // Email validation using regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      showMessage("❌ Please enter a valid email address.", "red");
      return;
    }

    // ----------------------------------
    // Success message
    showMessage(`✅ Form submitted successfully! Welcome, ${name}`, "green");

    // Reset form after successful submission
    form.reset();
  });

  // ----------------------------------
  // Optional: Clear message when user starts typing
  nameInput.addEventListener("input", () => {
    message.textContent = "";
  });

  emailInput.addEventListener("input", () => {
    message.textContent = "";
  });
}
