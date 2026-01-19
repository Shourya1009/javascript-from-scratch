// ==================================
// PROMISES IN JAVASCRIPT
// ==================================

// Promise represents a value that may be available now,
// in the future, or never (success or failure)

// Promise states:
// 1. pending
// 2. fulfilled (resolved)
// 3. rejected

// ----------------------------------
// 1. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

// Consuming a Promise using then & catch
myPromise
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });

// ----------------------------------
// 2. Promise example (simulating API call)
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "Aman" };

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1500);
  });
}

fetchUserData()
  .then((user) => {
    console.log("User Data:", user);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// ----------------------------------
// 3. Promise chaining
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("All steps done using Promise chaining!");
  });

// ----------------------------------
// 4. Promise.all() (runs promises in parallel)
const p1 = Promise.resolve("Promise 1 done");
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 done"), 1000),
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 done"), 2000),
);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((err) => {
    console.log("Promise.all error:", err);
  });
