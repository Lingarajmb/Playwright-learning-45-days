// halooo macha 😎🔥 Chapter 10 starts now!

// 🚀 Next Topic: Arrow Functions

// The roadmap places Arrow Functions first under Day 9 — ES6+ + Classes/OOP.

// 📁 Create this file
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 01 - Arrow Functions.js

// We'll keep the same pattern:

// Explain → Examples → Automation relevance → Practice Q1–Q10 → You answer → Evaluation + Score → Next concept

// 1. What is an Arrow Function?

// An arrow function is a shorter way of writing a JavaScript function.

// You already know the traditional function:

// function add(a, b) {
//     return a + b;
// }

// The arrow-function version is:

// const add = (a, b) => {
//     return a + b;
// };

// Both perform the same operation.

// 2. Basic Syntax

// General syntax:

// const functionName = (parameters) => {
//     // code
// };

// Example:

// const greet = (name) => {
//     return `Hello ${name}`;
// };

// console.log(greet("Lingaraj"));

// Output:

// Hello Lingaraj
// 3. Arrow Function with One Parameter

// If there is only one parameter, parentheses can be omitted:

// const greet = name => {
//     return `Hello ${name}`;
// };

// This is also valid:

// const greet = (name) => {
//     return `Hello ${name}`;
// };

// Both work.

// For learning and readability, using parentheses is often easier when you're starting.

// 4. Arrow Function with No Parameters

// If there are zero parameters, parentheses are required:

// const sayHello = () => {
//     return "Hello";
// };

// console.log(sayHello());

// Output:

// Hello

// So:

// 0 parameters → ()
// 1 parameter  → name OR (name)
// 2+ parameters → (a, b)
// 5. Multiple Parameters
// const multiply = (a, b) => {
//     return a * b;
// };

// console.log(multiply(5, 4));

// Output:

// 20

// Same idea as a normal function:

// function multiply(a, b) {
//     return a * b;
// }
// 6. Implicit Return 🔥

// This is one of the most important arrow-function features.

// If the function contains only one expression, we can remove {} and return.

// Instead of:

// const add = (a, b) => {
//     return a + b;
// };

// we can write:

// const add = (a, b) => a + b;

// This is called an implicit return.

// Example:

// const square = number => number * number;

// console.log(square(5));

// Output:

// 25
// 7. Explicit vs Implicit Return
// Explicit return
// const add = (a, b) => {
//     return a + b;
// };
// Implicit return
// const add = (a, b) => a + b;

// Both return the same result.

// Important rule 🧠

// If you use {}:

// const add = (a, b) => {
//     return a + b;
// };

// you normally need an explicit return.

// If you write:

// const add = (a, b) => a + b;

// the expression is returned automatically.

// 8. Arrow Functions and Variables

// Arrow functions are commonly assigned to const:

// const login = () => {
//     console.log("Login test started");
// };

// login();

// This is very common in modern JavaScript.

// 9. QA Automation Connection 🔥

// Arrow functions become extremely important in automation because you'll frequently see them with:

// Array methods
// Callbacks
// Playwright code
// Test utilities
// Configuration
// Event/callback patterns

// For example, later you'll see code like:

// users.map(user => user.name);

// Don't worry about map() yet—we'll properly use it when the roadmap reaches the relevant topic.

// For now, understand that:

// user => user.name

// is an arrow function.

// 10. Important Comparison
// Traditional function
// function add(a, b) {
//     return a + b;
// }
// Arrow function
// const add = (a, b) => {
//     return a + b;
// };
// Arrow function with implicit return
// const add = (a, b) => a + b;

// All three can produce:

// 30

// when called with:

// add(10, 20);
// 🧠 Quick Cheat Sheet
// No parameters:
// () => {}

// One parameter:
// name => {}

// Multiple parameters:
// (a, b) => {}

// Explicit return:
// (a, b) => {
//     return a + b;
// }

// Implicit return:
// (a, b) => a + b







// 🎯 Practice Set — Arrow Functions
// Don't run the answers first. 😎

// Q1
// Convert this normal function into an arrow function:
// function greet(name) {
//     return `Hello ${name}`;
// }

//Q1 Answer :
//const greet = name => console.log(`Hello ${name}`);

// Q2
// What is the output?
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(10, 20));

//Q2 Answer : 30

// Q3
// Convert this into an arrow function using implicit return:
// function multiply(a, b) {
//     return a * b;
// }

//Q3 Answer : (a, b) => a * b;


// Q4
// What is the output?
// const square = number => number * number;
// console.log(square(6));

//Q4 Answer : 36

// Q5
// Is this arrow function valid?
// const greet = name => {
//     return `Hello ${name}`;
// };
// If yes, explain why.

//Q5 Answer : Yes, bevcase explicity we writren ther {} and return.

// Q6
// Is this valid?
// const sayHello = () => {
//     return "Hello";
// };
// Why are () used even though there are no parameters?

//Q6 Answer : Yes correct we need use, because when we have 0 and Multiple parameters we much use that.


// Q7 🔥
// What is the difference between:
// const add = (a, b) => {
//     return a + b;
// };
// and:
// const add = (a, b) => a + b;

//Q7 Answer : 1st one fuction wrote in explicit retern, and 2nd one fucation wrote in the implicit return.

// Q8 — Coding
// Create an arrow function called isEven that accepts a number and returns:
// true
// if the number is even.
// Example:
// isEven(10)
// Expected:
// true

//Q8 Answer :
const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); // true

// Q9 — Coding
// Create an arrow function:
// calculateExperience
// that accepts years and returns:
// years + 1
// Example:
// calculateExperience(4)
// Expected:
// 5

//Q9 Answer :
const calculateExperience = (num) => num + 1;
console.log(calculateExperience(4));


// Q10 — Interview 🔥
// Explain in your own words:
// What is an arrow function, and why is it commonly used in modern JavaScript?

//Q10 Answer :An arrow function (=>) is a shorter syntax for writing functions, and it's popular in modern JS for its concise syntax and because it doesn't bind its own this (it inherits this from the surrounding scope).



// Macha 🔥 very good attempt. You clearly understood the core arrow-function syntax.

// 🏆 Score: 9.5/10 — 95%
// Q	Result	Evaluation
// Q1	⚠️	Logic works, but it changes return into console.log()
// Q2	✅	Correct
// Q3	⚠️	Correct arrow expression, but missing assignment/name
// Q4	✅	Correct
// Q5	✅	Correct
// Q6	⚠️	Partially correct explanation
// Q7	✅	Correct
// Q8	✅	Correct
// Q9	✅	Correct
// Q10	✅	Excellent
// Q1 ⚠️

// You wrote:

// const greet = name => console.log(`Hello ${name}`);

// This works, but the original function returns a value:

// function greet(name) {
//     return `Hello ${name}`;
// }

// So the closest arrow conversion is:

// const greet = name => {
//     return `Hello ${name}`;
// };

// Or with implicit return:

// const greet = name => `Hello ${name}`;

// Your version prints the value instead of returning it. That's a functional difference.

// Q2 ✅
// 30

// Correct.

// Q3 ⚠️

// You wrote:

// (a, b) => a * b;

// The arrow-function syntax and implicit return are correct. 👍

// But the question asked to convert the named function, so the complete answer should be:

// const multiply = (a, b) => a * b;

// Minor omission only.

// Q4 ✅
// 36

// Correct.

// Q5 ✅

// Correct.

// Your explanation:

// because explicitly we written {} and return

// Exactly. 👍

// Q6 ⚠️

// Your answer:

// when we have 0 and Multiple parameters we must use that.

// The zero-parameter part is correct, but the "multiple parameters" part needs correction.

// The rule is:

// 0 parameters    → () required
// 1 parameter     → name OR (name)
// 2+ parameters   → (a, b) required

// So parentheses are required for zero or multiple parameters.

// Q7 ✅

// Correct:

// First → explicit return
// Second → implicit return

// 🔥 Good.

// Q8 ✅

// Excellent:

// const isEven = (num) => num % 2 === 0;

// That's a clean implicit-return arrow function.

// Q9 ✅

// Correct:

// const calculateExperience = (num) => num + 1;
// Q10 🔥 ✅

// Very good interview answer:

// An arrow function is a shorter syntax for writing functions, and it's popular in modern JS for its concise syntax and because it doesn't bind its own this.

// That's actually an important advanced distinction.

// One small point: we haven't studied this yet, so don't worry about memorizing that part now. We'll properly cover it when the relevant concepts come up.

// 📚 Arrow Functions Status

// Arrow Functions → COMPLETE ✅

// Your core understanding is strong. The two things to remember:

// 1. Don't accidentally change return into console.log()
// // Return
// const greet = name => `Hello ${name}`;

// // Print
// const greet = name => console.log(`Hello ${name}`);

// These are not the same behavior.

// 2. Parameter parentheses
// () => {}             // 0
// name => {}           // 1
// (name) => {}         // 1
// (a, b) => {}         // 2+

// Next roadmap concept: Destructuring — starting with the appropriate destructuring concept, one at a time.