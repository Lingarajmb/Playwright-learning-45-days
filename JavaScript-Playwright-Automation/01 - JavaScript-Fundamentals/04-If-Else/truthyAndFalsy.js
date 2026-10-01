// <!--
// Truthy and Falsy

// This is very important in JavaScript and you'll see it frequently in automation code.

// Normally we write:

// if (isLoggedIn === true) {
//     console.log("User logged in");
// }

// But JavaScript can directly check a value:

// let isLoggedIn = true;

// if (isLoggedIn) {
//     console.log("User logged in");
// }

// Here true is truthy.

// Some values behave like false when used in a condition. These are called falsy.

// The main falsy values you need to remember:
// false
// 0
// ""
// null
// undefined
// NaN

// Almost everything else is truthy.

// For example:

// let username = "Lingaraj";

// if (username) {
//     console.log("Username exists");
// }

// Because "Lingaraj" is a non-empty string → truthy.

// But:

// let username = "";

// if (username) {
//     console.log("Username exists");
// } else {
//     console.log("Username is empty");
// }

// "" → falsy, so output:

// Username is empty
// 🧠 Easy way to remember

// Empty / zero / false / missing → usually falsy.

// Your turn 🎯

// Tell me the output of each:

// Q1

let username = "Lingaraj";

if (username) {
    console.log("User exists");
} else {
    console.log("No user");
}

// Q2

let username = "";

if (username) {
    console.log("User exists");
} else {
    console.log("No user");
}

// Q3

let count = 0;

if (count) {
    console.log("Count available");
} else {
    console.log("No count");
}

// Q4

let value = 10;

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Send just Q1–Q4 answers. Don't worry about explanations yet.

// Today 2:45 PM
// q1. Lingaraj (truthy  ) q2. "No user"  (falsy  ) q3. "No count"   (falsy  ) q4. Truthy     -->

// Excellent! 🔥 4/4 — all correct.

// Question	Your answer	Result
// Q1	Lingaraj → Truthy	✅
// Q2	"No user" → Falsy	✅
// Q3	"No count" → Falsy	✅
// Q4	Truthy	✅

// You understood the key idea:

// if (value) {
//     // value is truthy
// } else {
//     // value is falsy
// }
// One important Playwright example

// You'll often have something like:

// let username = "";

// if (username) {
//     console.log("Enter username");
// } else {
//     console.log("Username is missing");
// }

// This is useful for test-data validation.