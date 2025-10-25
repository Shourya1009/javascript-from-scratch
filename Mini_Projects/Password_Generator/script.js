const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-{}[]<>?";

function getRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
  const length = +lengthEl.value;
  let chars = "";
  let password = "";

  if (uppercaseEl.checked) chars += upperLetters;
  if (lowercaseEl.checked) chars += lowerLetters;
  if (numbersEl.checked) chars += numbers;
  if (symbolsEl.checked) chars += symbols;

  if (chars === "") {
    alert("Select at least one character type!");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += getRandom(chars);
  }

  passwordEl.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (!passwordEl.value) return;
  navigator.clipboard.writeText(passwordEl.value);
  copyBtn.textContent = "✅ Copied!";
  setTimeout(() => (copyBtn.textContent = "📋 Copy"), 1500);
});
