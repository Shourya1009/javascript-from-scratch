// ==================================
// FETCH API IN JAVASCRIPT
// ==================================

// fetch() is used to make HTTP requests (GET, POST, PUT, DELETE)
// It returns a Promise

// NOTE: Run this in Browser Console OR use Node.js 18+
// (older Node versions need node-fetch)

// ----------------------------------
// 1. Simple GET request
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // fetch only fails on network error, so we check response.ok
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Posts:", data.slice(0, 5)); // showing only first 5
  } catch (error) {
    console.log("Error fetching posts:", error.message);
  }
}

getPosts();

// ----------------------------------
// 2. GET request for a single item
async function getPostById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Single Post:", data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getPostById(1);

// ----------------------------------
// 3. POST request (sending data)
async function createPost() {
  try {
    const newPost = {
      title: "Hello JS",
      body: "This is a post created using fetch()",
      userId: 1,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Created Post:", data);
  } catch (error) {
    console.log("Error creating post:", error.message);
  }
}

createPost();
