console.log("String Methods : -------------------------------------------");

/*
In JavaScript, strings come with built-in methods (functions attached to them) that let you manipulate and work with text easily.
*/

// 1. Length (Property, not method)
let str = "Hello";
console.log(str.length); // 5

// 2. Case Conversion
let name = "Shourya Joshi";

console.log(name.toUpperCase()); // "SHOURYA"
console.log(name.toLowerCase()); // "shourya"
console.log(name); // "Shourya"

// 3. trim() :-
let stringTriming = "   Hello World!   ";

console.log(stringTriming.trim()); // "Hello World!"
console.log(stringTriming.trimStart()); // "Hello World!   "
console.log(stringTriming.trimEnd()); // "   Hello World!"

//4. indexof() - The indexOf() method is used to find the first occurrence of a substring (text) inside a string.
//It returns -1 if the substring is not found.

let text = "I love JavaScript";

console.log(text.indexOf("love")); // 2
console.log(text.indexOf("Java")); // 7
console.log(text.indexOf("Python")); // -1
console.log(text.lastIndexOf("a")); // 10 (last occurrence)

console.log("----------------------------------");

let fruit = "banana";

console.log(fruit.indexOf("a")); // 1  (first "a")
console.log(fruit.indexOf("a", 2)); // 3  (search starts at index 2)
console.log(fruit.indexOf("a", 4)); // 5

console.log("-----------------------------------");

//5. Searching Inside Strings:-
console.log(text.indexOf("love")); // 2  (first position)
console.log(text.lastIndexOf("a")); // 13 (last occurrence)
console.log(text.includes("Java")); // true
console.log(text.startsWith("I")); // true
console.log(text.endsWith("Script")); // true

//6. slice() method - The slice() method is used to extract a portion of a string (or array) without changing the original one. It returns a new string (or array).

// Syntax - string.slice(start, end);

/* start → index where extraction begins (inclusive).

end → index where extraction stops (exclusive).

If end is not given → slice goes till the end of the string.
*/

let slicedString = "JavaScript";

console.log(slicedString.slice(0, 4)); // "Java"   (from index 0 to 3)
console.log(slicedString.slice(4, 10)); // "Script" (from index 4 to 9)
console.log(slicedString.slice(4)); // "Script" (from index 4 till end)
console.log(slicedString.slice(-6)); // "Script" (negative = count from end)
console.log(slicedString.slice(-6, -3)); // "Scr"    (from -6 to -4)

console.log("------------------------------------");

let card = "1234-5678-9012-3456";
let hidden = "****-****-****-" + card.slice(-4);
console.log(hidden); // ****-****-****-3456

console.log("Extracting Parts of a String :- ");

console.log(name.slice(0, 7)); // "Shourya"
console.log(name.substring(8)); // "Joshi"

/* 
Rules of substring()

If start < 0 → treated as 0.

If end < 0 → treated as 0.

If start > end → JavaScript swaps them.
Example: str.substring(5, 2) → same as str.substring(2, 5).
*/

/*
✅ Use substring() if you don’t care about negative indexes.
✅ Use slice() if you want to use negative indexes.
*/

//7. replace method() - The replace() method is used to replace part of a string with another string. It does not change the original string (strings are immutable). Instead, it returns a new string.

//Syntax - string.replace(searchValue, newValue)---------------- searchValue → the value (string or RegExp) you want to replace , newValue → the value you want to replace it with.

// replace first occurrence
let result1 = text.replace("JavaScript", "Python");
console.log(result1); // "I love Python"

// case-sensitive (won’t replace if case doesn’t match)
let result2 = text.replace("javascript", "Python");
console.log(result2); // "I love JavaScript"

//replaceAll() -
let str_2 = "JavaScript is awesome. I love JavaScript!";
let res = str_2.replaceAll("JavaScript", "Python");
console.log(res);

// Replace all occurrences (use RegEx with g flag) -
let res_8 = str_2.replace("/JavaScript/g", "Python");
console.log(res_8); // "Python is awesome. I love JavaScript!"

// Case-insensitive replace (use i flag)
let str_17 = "I love JAVASCRIPT!";
let res_17 = str_17.replace(/javascript/i, "Python");
console.log(res_17);
// "I love Python!"
