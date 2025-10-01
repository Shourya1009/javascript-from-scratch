function updateClock() {
  const clockDisplay = document.getElementById("clock");
  const dateDiv = document.getElementById("date-display");

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";

  // Converting it to 12 hours format
  hours = hours % 12;
  hours = hours ? hours : 12;

  //Adding leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockDisplay.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Fetching Date :-

  let day = now.getDate();
  let month = now.toLocaleDateString("default", { month: "long" });
  let year = now.getFullYear();

  dateDiv.innerText = `${day} ${month} ${year}`;
}
setInterval(updateClock, 1000);
updateClock();
