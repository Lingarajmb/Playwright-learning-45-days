// Ternary Operator

// You already know this:

// if (age >= 18) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }

// For a simple if/else, JavaScript gives us a shorter way called the ternary operator.

// Syntax
// condition ? valueIfTrue : valueIfFalse;

// Think of it as:

// If condition is true → first value, otherwise → second value.

// Example
// let age = 20;

// let result = age >= 18 ? "Eligible" : "Not Eligible";

// console.log(result);

// Output:

// Eligible

// Because:

// age >= 18
// 20 >= 18 → true

// So JavaScript chooses:

// "Eligible"
// Another example
// let browser = "Chrome";

// let message = browser === "Chrome" ? "Supported" : "Not Supported";

// console.log(message);

// Output:

// Supported
// Important for Playwright

// You'll sometimes see ternary used when assigning test configuration or choosing values:

// let environment = "QA";

// let url = environment === "QA"
//     ? "https://qa.example.com"
//     : "https://prod.example.com";

// For simple conditions, ternary is useful.

// For complicated logic, prefer normal if/else because it's easier to read.

let marks = 75;
let result = marks >= 75 ? "Pass" : "Fail";
console.log(result);


let browser = "Firefox";
let URL = browser === "Chrome" ? "Supported" : "Not Supported";
console.log(URL);
