const btn = document.getElementById("color-btn");
const body = document.body;
const codeDisplay = document.getElementById("color-code");

function changeColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

  const code = document.body.style.backgroundColor;

  codeDisplay.innerText = `${code}`;
}
btn.addEventListener("click", changeColor);
