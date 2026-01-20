// ==================================
// ASYNC / AWAIT IN JAVASCRIPT
// ==================================

// async makes a function return a Promise
// await pauses execution until the Promise is resolved/rejected

// ----------------------------------
// 1. Basic async function
async function greet() {
  return "Hello from async function!";
}

greet().then((msg) => console.log(msg));

// ----------------------------------
// 2. Using await with a Promise
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received successfully!");
    }, 1500);
  });
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();

// ----------------------------------
// 3. Error handling using try...catch
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = null; // change to { name: "Aman" } to test success

      if (user) {
        resolve(user);
      } else {
        reject("User not found!");
      }
    }, 1000);
  });
}

async function fetchUser() {
  try {
    const user = await getUser();
    console.log("User:", user);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUser();

// ----------------------------------
// 4. Multiple awaits (runs one by one)
function task1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 1 done"), 1000),
  );
}

function task2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 2 done"), 1000),
  );
}

async function runTasksSequential() {
  const r1 = await task1();
  console.log(r1);

  const r2 = await task2();
  console.log(r2);

  console.log("Sequential tasks finished!");
}

runTasksSequential();

// ----------------------------------
// 5. Parallel execution using Promise.all()
async function runTasksParallel() {
  const results = await Promise.all([task1(), task2()]);
  console.log("Parallel results:", results);
}

runTasksParallel();
