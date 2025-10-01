const input = document.getElementById("timer-input");
const btn = document.getElementById("timer-btn");
const display = document.getElementById("timer-display");

function startTimer() {
  let value = parseInt(input.value);

  if (isNaN(value)) {
    display.innerText = "Please enter a valid number";
    return;
  }
  if (value <= 0) {
    display.innerText = "Please enter a number greater than 0";
    return;
  }

  btn.disabled = true;
  const timer = setInterval(function () {
    value--;
    display.innerText = `Time Remaining : ${value} seconds`;

    if (value <= 0) {
      clearInterval(timer);
      display.innerText = `Time's Up!!!!!!!!!!!!!!!!!!`;
      btn.disabled = false;
    }
  }, 1000);
}
btn.addEventListener("click", startTimer);
