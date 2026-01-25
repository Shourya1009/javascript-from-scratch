// ==================================
// CREATE & UPDATE ELEMENTS IN DOM
// ==================================

// This file shows how to:
// 1. Create new elements
// 2. Add text/content
// 3. Add classes/attributes
// 4. Append elements to DOM
// 5. Update and remove elements

// NOTE: Run this in browser with an HTML file.

// ----------------------------------
// Select a container where we will add elements
const container = document.getElementById("container");

// Safety check
if (!container) {
  console.log("Container not found! Add <div id='container'></div> in HTML.");
} else {
  // ----------------------------------
  // 1. Create a new element
  const heading = document.createElement("h2");
  heading.textContent = "This heading was created using JavaScript!";
  container.appendChild(heading);

  // ----------------------------------
  // 2. Create a paragraph and add class
  const para = document.createElement("p");
  para.textContent = "This is a paragraph created dynamically.";
  para.classList.add("my-para");
  container.appendChild(para);

  // ----------------------------------
  // 3. Create a button and add attributes
  const button = document.createElement("button");
  button.textContent = "Click Me";
  button.setAttribute("id", "myBtn");
  button.style.padding = "10px";
  button.style.cursor = "pointer";
  container.appendChild(button);

  // ----------------------------------
  // 4. Update element content on button click
  button.addEventListener("click", () => {
    para.textContent = "Paragraph updated after clicking the button!";
    para.style.fontWeight = "bold";
  });

  // ----------------------------------
  // 5. Insert element before another element
  const info = document.createElement("p");
  info.textContent = "This text is inserted before the button.";
  container.insertBefore(info, button);

  // ----------------------------------
  // 6. Remove element after 5 seconds (demo)
  setTimeout(() => {
    info.remove();
    console.log("Inserted info paragraph removed!");
  }, 5000);
}
