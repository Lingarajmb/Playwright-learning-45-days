

// ractical Example — Login Validation

// Imagine we're testing a login page.

// We have:

// let username = "admin";
// let password = "12345";

// We want to check:

// Username is "admin" AND
// Password is "12345"

// If both are correct → login successful.

// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "12345") {
//     console.log("Login successful");
// } else {
//     console.log("Invalid username or password");
// }

// Output:

// Login successful
// Why &&?

// Because both conditions must be true:

// username correct ✅
//         AND
// password correct ✅
//         ↓
// Login successful

// If even one is wrong:

// let username = "admin";
// let password = "wrong";

// Then:

// Invalid username or password
// 🧪 QA-style example

// Suppose we have an API response:

// let statusCode = 200;
// let isLoggedIn = true;

// if (statusCode === 200 && isLoggedIn) {
//     console.log("Login API passed");
// } else {
//     console.log("Login API failed");
// }

// This is the kind of condition-based validation you'll use when working with automation.

// 🎯 Your turn
// Q1

// What is the output?

// let username = "admin";
// let password = "wrong";

// if (username === "admin" && password === "12345") {
//     console.log("Login successful");
// } else {
//     console.log("Invalid username or password");
// }
// Q2

// Write the code yourself:
// Requirements:

// username = "tester"
// password = "test123"

// If both are correct: "Login successful"
// Otherwise: "Login failed"

let username = "tester";
let password = "test123";

if (username === "tester" && password === "test123") {
    console.log("Login successful");
} else {
    console.log("Login failed");
}



// Q3 — QA style
// let statusCode = 200;
// let isLoggedIn = false;
// Write a condition that prints: "Test passed"
// only when: statusCode is 200 AND isLoggedIn is true
// Otherwise print: "Test failed" 


let statusCode = 200;
let isLoggedIn = false;

if (statusCode === 200 && isLoggedIn === true) {
    console.log("Test passed");
} else {
    console.log("Test failed");
}


/* Excellent! 🔥 3/3 correct.

Q1 — ✅ Correct

Because the password is "wrong":

username correct ✅
password correct ❌
       ↓
Invalid username or password
Q2 — ✅ Perfect

Your code is exactly right:

if (username === "tester" && password === "test123") {
    console.log("Login successful");
} else {
    console.log("Login failed");
}
Q3 — ✅ Perfect

Your condition:

if (statusCode === 200 && isLoggedIn === true)

is correct.

Since:

statusCode === 200   // true
isLoggedIn === true   // false

true && false → false

So:

Test failed

✅ Correct.

Score: 3/3

🌍 Final Day 3 Topic: Environment-Style Branching

This is useful for automation because we often have different environments:

DEV
QA
UAT
PROD

For example:

let environment = "QA";

if (environment === "DEV") {
    console.log("Running tests in Development");
} else if (environment === "QA") {
    console.log("Running tests in QA");
} else if (environment === "UAT") {
    console.log("Running tests in UAT");
} else if (environment === "PROD") {
    console.log("Running tests in Production");
} else {
    console.log("Unknown environment");
}

If:

environment = "QA";

Output:

Running tests in QA
Why this matters in Playwright

Later you may have something like:

let environment = "QA";

let baseURL;

if (environment === "QA") {
    baseURL = "https://qa.example.com";
} else if (environment === "PROD") {
    baseURL = "https://example.com";
}

The idea is simply:

Depending on the environment, choose the appropriate configuration.

🎯 Your final Day 3 challenge

Write a program using if / else if / else.

Given:

let environment = "UAT";

Expected output:

Running tests in UAT

Handle these four environments:

DEV  → Running tests in DEV
QA   → Running tests in QA
UAT  → Running tests in UAT
PROD → Running tests in PROD

Anything else:

Unknown environment

Write the code yourself. Once you get this right, I'll mark Day 3 COMPLETE ✅ and we'll start Day 4 — Loops. 🚀 */

// let environment = "QA";

// let baseURL;

// if (environment === "QA") {
//     baseURL = "https://qa.example.com";
//     console.log(baseURL);
// } else if (environment === "PROD") {
//     baseURL = "https://example.com";
//     console.log(baseURL);
// } else {
//     console.log("Unknown environment");
// }


///Write a program using if / else if / else.

// Given: let environment = "UAT";
// Expected output: Running tests in UAT
// Handle these four environments:

// DEV  → Running tests in DEV
// QA   → Running tests in QA
// UAT  → Running tests in UAT
// PROD → Running tests in PROD

// Anything else: Unknown environment


let environment = "UAT";

if (environment === "DEV") {
    console.log("Running Test in DEV");
} else if (environment === "QA") {
    console.log("Running Test in QA ");
} else if (environment === "UAT") {
    console.log("Running Test in UAT");
} else if (environment === "PROD") {
    console.log("Running Test in PROD");
} else {
    console.log(" Unknown Environment")
};