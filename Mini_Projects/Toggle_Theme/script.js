const btn = document.getElementById("toggle-btn");
const body = document.body;

let isDark = false;

function toggltTheme() {
  isDark = !isDark;

  if (isDark) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    btn.textContent = "Light-Mode";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    btn.textContent = "Dark-Mode";
  }
}
btn.addEventListener("click", toggltTheme);
