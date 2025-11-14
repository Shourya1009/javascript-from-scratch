function generateColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");
}

function generatePalette() {
  const container = document.getElementById("palette-container");
  container.innerHTML = ""; // Clear previous colors

  for (let i = 0; i < 5; i++) {
    const color = generateColor();
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.background = color;
    box.textContent = color;

    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`Copied: ${color}`);
    });

    container.appendChild(box);
  }
}

document
  .getElementById("generate-btn")
  .addEventListener("click", generatePalette);

// Generate palette on page load
generatePalette();
