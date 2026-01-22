// ==================================
// ERROR HANDLING IN JAVASCRIPT
// ==================================

// Error handling helps your program avoid crashing
// and lets you handle unexpected situations properly.

// ----------------------------------
// 1. try...catch (basic)
try {
  let result = 10 / 2;
  console.log("Result:", result);
} catch (error) {
  console.log("Something went wrong:", error.message);
}

// ----------------------------------
// 2. Handling runtime error
try {
  console.log(userName); // ❌ userName is not defined
} catch (error) {
  console.log("Runtime Error:", error.message);
}

// ----------------------------------
// 3. throw custom error
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older!");
  }
  return "Access granted!";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.log("Custom Error:", error.message);
}

// ----------------------------------
// 4. finally block (always runs)
try {
  console.log("Inside try block");
} catch (error) {
  console.log("Inside catch block");
} finally {
  console.log("This will always run (finally)");
}

// ----------------------------------
// 5. Error handling in async/await
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Data (first 3):", data.slice(0, 3));
  } catch (error) {
    console.log("Fetch Error:", error.message);
  }
}

fetchData();
