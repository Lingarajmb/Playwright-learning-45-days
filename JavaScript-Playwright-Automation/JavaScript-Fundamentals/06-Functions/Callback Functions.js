// Absolutely 😎🔥 Let's start Callbacks, but slowly.

//*************************************
// 📘 Functions — Callback Functions
//*************************************

// First, remember what we already know:
// function greet() {
//     console.log("Hello");
// }
// greet();
// Here, we call greet() ourselves.

// A callback is different.
// A callback is a function that we pass to another function, so the other function can call it.
// Simple example
// function greet() {
//     console.log("Hello QA");
// }
// function executeFunction(callback) {
//     callback();
// }
// executeFunction(greet);
// Output:  Hello QA

// Let's understand what happened:
// greet
//   ↓
// passed into
//   ↓
// executeFunction
//   ↓
// callback()
//   ↓
// greet() executes
//   ↓
// Hello QA


// 🧠 Very important
// Notice this:
// executeFunction(greet);
// We wrote:
// greet
// NOT
// greet()
// Why?
// Because we're passing the function itself.
// When we write:
// greet()
// we are calling/executing it immediately.

// QA-style example 🧪
// function loginTest() {
//     console.log("Login test executed");
// }
// function runTest(test) {
//     test();
// }
// runTest(loginTest);

// Here:
// loginTest → callback function
// runTest → function receiving the callback
// test() → executes the callback

// Output:
// Login test executed
// This concept is very important because you'll see patterns like this frequently in JavaScript and Playwright.

// 🎯 Your Turn — Q1 & Q2

// Q1
// What is the output?
// function sayHello() {
//     console.log("Hello");
// }
// function execute(callback) {
//     callback();
// }
// execute(sayHello);

//output : Hello

// Q2
// In this code:
// function test() {
//     console.log("Testing");
// }
// function run(callback) {
//     callback();
// }
// run(test);

// Tell me:
// Callback function = test()
// Function receiving callback = run(callback)

// Don't worry about the harder callback examples yet. 😄
// Send Q1 and Q2, and we'll build from there. 🚀

// Good job! Q1 is perfect. Q2 is almost correct — just one small distinction.

// ✅ Q1 — 1/1

// Output:

// Hello

// Correct. 👍

// ⚠️ Q2 — 0.5/1

// You said:

// Callback function = test()

// Almost! The callback function is test, not test().

// Why?

// run(test);

// Here test is passed as a function.
// test()
// means call/execute the function.

// So:
// Callback function = test
// Function receiving callback = run

// And inside:
// function run(callback) {
//     callback();
// }
// callback() executes the function that was passed in—in this case, test().

// 🧠 Very important distinction
// test     → function itself / reference
// test()   → execute the function

// Same idea as:

// const add = (a, b) => a + b;

// let result = add(10, 20);

// add = function
// add(10, 20) = calling the function

// 🎯 Tiny check before we continue
// Look at this:
// function greet() {
//     console.log("Hello");
// }
// function run(callback) {
//     callback();
// }
// run(greet);

// Tell me:
// 1. What is the callback function?
// 2. What does callback() do inside run()?

// Just answer these two. 😎

// 1. What is the callback function?
//Answer : A callback is a function that we pass to another function, so the other function can call it.

// 2. What does callback() do inside run()?
//answer : callback() executes the function that was passed in—in this case, greet().

// 🔥 Perfect! Both answers are correct. 2/2.

// ✅ 1. Callback function

// Your definition is exactly right:

// A callback is a function that we pass to another function, so the other function can call it.

// In our example:

// run(greet);

// 👉 greet is the callback function.

// ✅ 2. callback()

// Correct:

// function run(callback) {
//     callback();
// }

// callback() executes the function that was passed in.

// So the flow is:

// greet
//   ↓
// passed to run()
//   ↓
// callback receives greet
//   ↓
// callback()
//   ↓
// greet() executes
//   ↓
// Hello
// 🧠 One thing to remember
// run(greet);     // pass the function

// vs.

// run(greet());   // execute greet first, then pass its result

// For callbacks, you'll very commonly see:

// someFunction(callbackFunction);

// rather than:

// someFunction(callbackFunction());

// You've got the basic callback concept. 💯

// 🚀 Next step

// Now let's see why callbacks are useful by passing an arrow function as a callback. This is where the concept starts looking much more like modern JavaScript and Playwright code.


