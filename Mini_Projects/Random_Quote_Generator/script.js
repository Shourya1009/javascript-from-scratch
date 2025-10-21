const quotes = [
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson",
  },
  { text: "Push your limits and never give up.", author: "Anonymous" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  { text: "Your limitation—it’s only your imagination.", author: "Anonymous" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  {
    text: "Wake up with determination. Go to bed with satisfaction.",
    author: "Anonymous",
  },
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", generateQuote);

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  // Add fade animation
  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = `"${quote.text}"`;
    authorText.textContent = `— ${quote.author}`;
    quoteText.style.opacity = 1;
    authorText.style.opacity = 1;
  }, 300);
}

// Load a random quote on start
window.onload = generateQuote;
