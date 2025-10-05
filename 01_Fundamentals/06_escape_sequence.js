// 🔹 Escape Sequences in JavaScript 🔹
// Escape sequences are special character combinations that start with a backslash (\).
// They let you include characters in strings that are otherwise difficult or impossible to type directly.

console.log("Hello\nWorld"); // \n → New line
console.log("Path: C:\\Users\\Shourya"); // \\ → Backslash
console.log('She said, "JavaScript is fun!"'); // \" → Double quotes inside single quotes
console.log("She said, 'JavaScript is fun!'"); // \' → Single quotes inside double quotes
console.log("Tab Space:\tJavaScript"); // \t → Tab space
console.log("\u2764"); // \uXXXX → Unicode character (❤)

// 💡 When do you need escape sequences?
// 1️⃣ When you want to include special characters like \n, \t, or Unicode symbols.
// 2️⃣ When you need to use the same type of quotes inside a string defined by them.
//     Example: "He said, \"Hello!\""  or  'It\'s a sunny day!'
