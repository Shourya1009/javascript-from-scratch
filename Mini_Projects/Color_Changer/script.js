// Select elements
const changeColorBtn = document.getElementById("changeColorBtn");
const colorCode = document.getElementById("colorCode");

// Function to generate random hex color
function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

// Function to change background color
function changeBackgroundColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
}

// Event listener
changeColorBtn.addEventListener("click", changeBackgroundColor);
