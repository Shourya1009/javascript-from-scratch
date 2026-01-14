// ==================================
// OPTIONAL CHAINING IN JAVASCRIPT
// ==================================

// Optional chaining (?.) prevents runtime errors
// when accessing properties that may not exist

// ----------------------------------
// 1. Without optional chaining (error-prone)
const user = {
  name: "Aman",
  address: {
    city: "Delhi",
  },
};

// console.log(user.profile.age); // ❌ Error

// ----------------------------------
// 2. With optional chaining
console.log(user.profile?.age); // undefined

// ----------------------------------
// 3. Optional chaining with nested objects
console.log(user.address?.city); // Delhi
console.log(user.address?.pincode); // undefined

// ----------------------------------
// 4. Optional chaining with functions
const admin = {
  login() {
    return "Logged in";
  },
};

console.log(admin.login?.()); // Logged in
console.log(admin.logout?.()); // undefined

// ----------------------------------
// 5. Optional chaining with arrays
const users = [{ name: "Rahul" }, { name: "Neha", skills: ["JS", "React"] }];

console.log(users[1]?.skills?.[0]); // JS
console.log(users[0]?.skills?.[0]); // undefined

// ----------------------------------
// 6. Optional chaining with null values
const data = null;

console.log(data?.value); // undefined

// ----------------------------------
// 7. Optional chaining with default values
const city = user.address?.city ?? "Unknown";
console.log(city);
