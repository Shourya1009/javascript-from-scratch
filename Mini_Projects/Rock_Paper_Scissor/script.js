function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";
  if (userChoice === computerChoice) {
    result = `Both chose ${userChoice}. It's a draw!`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You chose ${userChoice}, computer chose ${computerChoice}. You win! 🎉`;
  } else {
    result = `You chose ${userChoice}, computer chose ${computerChoice}. You lose 😢`;
  }

  document.getElementById("result").textContent = result;
}
