const btn = document.getElementById("color-btn");
const container = document.getElementById("container");
const codeDisplay = document.getElementById("color-code");

function changeColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // CHANGE CONTAINER BACKGROUND, NOT BODY
  container.style.background = `rgb(${red}, ${green}, ${blue})`;

  codeDisplay.innerText = `rgb(${red}, ${green}, ${blue})`;
}

btn.addEventListener("click", changeColor);
