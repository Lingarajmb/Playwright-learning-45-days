// Yes macha 🔥 Let's move to Concept 2 — async / await.

// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 11 - Async - JavaScript/
//         └── 02 - Async and Await.js
// Concept 2 — async / await

// You already understand that a Promise represents an asynchronous operation.

// Now we need a cleaner way to work with those Promises.

// 1. What is async?

// async is used before a function to make that function return a Promise.

// Example
// async function login() {
//     return "Login successful";
// }

// Even though we returned a normal string:

// "Login successful"

// the async function actually returns a Promise.

// Conceptually:

// async function
//       ↓
//    Promise
//       ↓
// "Login successful"

// You can verify it:

// async function login() {
//     return "Login successful";
// }

// console.log(login());

// You will see a Promise rather than directly seeing:

// Login successful
// 2. What is await?

// await is used to wait for a Promise to settle and get its result.

// Example:

// function login() {
//     return new Promise((resolve) => {
//         resolve("Login successful");
//     });
// }

// Without await:

// const result = login();

// console.log(result);

// result is a Promise.

// With await:

// async function test() {

//     const result = await login();

//     console.log(result);
// }

// Now:

// result
//    ↓
// "Login successful"
// 3. Important rule 🔥

// await is normally used inside an async function.

// async function test() {

//     const result = await login();

// }

// Think:

// async
//   ↓
// allows the function to work with await
//   ↓
// await
//   ↓
// waits for Promise result
// 4. Simple Real Example
// function getUser() {
//     return new Promise((resolve) => {
//         resolve("Lingaraj");
//     });
// }

// async function test() {

//     const user = await getUser();

//     console.log(user);
// }

// test();

// Output:

// Lingaraj

// The flow is:

// test()
//   ↓
// getUser()
//   ↓
// Promise
//   ↓
// await
//   ↓
// "Lingaraj"
//   ↓
// console.log()
// 5. Why this is VERY important in Playwright 🔥

// You will see this pattern constantly in Playwright:

// test("Login test", async ({ page }) => {

//     await page.goto("https://example.com");

//     await page.locator("#username").fill("Lingaraj");

//     await page.locator("#password").fill("password");

//     await page.locator("#login").click();

// });

// Notice:

// async ({ page }) => {

// and:

// await page.goto(...)
// await page.locator(...).fill(...)
// await page.locator(...).click()

// Playwright operations are asynchronous, so async/await is fundamental to writing readable automation code.

// 6. One important clarification

// await does not mean:

// Stop the entire JavaScript program.

// It means the current async function waits for that Promise, while JavaScript can continue handling other work.

// For now, remember the practical automation meaning:

// await waits for the Promise result before the next statement in that async function continues.

// 🧠 Easy interview definition
// What is async?

// async is a keyword used to define an asynchronous function. An async function always returns a Promise.

// What is await?

// await is used inside an async function to wait for a Promise to settle and retrieve its result.

// 🔥 Practice — Concept 2

// Answer Q1–Q7 in your file and send them together.

// Q1 — Concept
// What does the async keyword do when used before a function?
//Q1 answer : An async function always returns a Promise.

// Q2 — Concept
// What does await do?
//Q2 Answer : await waits for the Promise result before the next statement in that async function continues.

// Q3 — Output
// What will this return?
// async function getName() {
//     return "Lingaraj";
// }
// console.log(getName());
// Will console.log() directly print "Lingaraj" or a Promise?
// Explain why.

//Q3 Answer : It prints a Promise (e.g. Promise { 'Lingaraj' }), not the raw string — because async functions always wrap their return value in a Promise; you'd need await or .then() to get "Lingaraj" out.


// Q4 — Write Code
// Create:
// async function login()
// that returns:
// "Login successful"

//Q4 Answer :
// async function login() {
//     return "Login successful";
// }
// console.log(login());


// Q5 — Use await
// Given:
// function getMessage() {
//     return new Promise((resolve) => {
//         resolve("Hello Lingaraj");
//     });
// }
// Write an async function that uses await to get the message and prints it.

//Q5 answer :

// function getMessage() {
//     return new Promise((resolve) => {
//         resolve("Hello Lingaraj");
//     });
// }

// async function test() {

//     const user = await getMessage();
//     console.log(user);

// }
// test();

// Q6 — QA Scenario 🔥
// Write a function: async function runTest()
// Inside it: Create a Promise that resolves with "Test Passed".
// Use await.
// Store the result in a variable.
// Print the result.

//Q6 answer :
// async function runTest() {
//     const result = await new Promise((resolve) => {
//         resolve("Test Passed");
//     });
//     console.log(result);
// }

// runTest();


// Q7 — Playwright Interview Question
// Why do we use:
// async ({ page }) => {
// and:
// await page.goto(...)
// in Playwright tests?
// Explain in your own words.
// Send Q1–Q7 together, and I'll evaluate them like we did for Promises. 💪

//Q7 answer : async ({ page }) => { is needed because the function will use await inside it — page is Playwright's object for controlling the browser tab.
//await page.goto(...) pauses the test until the page actually finishes navigating, since navigation takes unpredictable time — without await, the next test step (like clicking a button) could run before the page even loads, causing flaky failures.



// Macha 🔥 Q1–Q7 evaluated. Your understanding of async/await is very strong.

// 📊 Evaluation
// Q1 — What does async do?

// Your answer:

// An async function always returns a Promise.

// ✅ Correct — 10/10

// Perfect interview-level answer.

// Q2 — What does await do?

// Your answer:

// await waits for the Promise result before the next statement in that async function continues.

// ✅ Correct — 10/10

// Clear and accurate.

// Q3 — Output

// Your answer:

// It prints a Promise (e.g. Promise { 'Lingaraj' }), not the raw string...

// ✅ Correct — 10/10

// Excellent explanation.

// The important concept is:

// async function getName() {
//     return "Lingaraj";
// }

// The return value is automatically wrapped in a Promise.

// So:

// console.log(getName());

// prints a Promise-like result, not the raw string.

// Q4 — Create async function login()

// Your code:

// async function login() {
//     return "Login successful";
// }

// console.log(login());

// ✅ Correct — 10/10

// The function is correctly declared as async and returns the required value.

// The console.log(login()) demonstrates that calling an async function gives you a Promise.

// Q5 — Use await

// Your code:

// function getMessage() {
//     return new Promise((resolve) => {
//         resolve("Hello Lingaraj");
//     });
// }

// async function test() {
//     const user = await getMessage();
//     console.log(user);
// }

// test();

// ✅ Correct — 10/10

// Excellent.

// You correctly demonstrated:

// getMessage()
//     ↓
// Promise
//     ↓
// await
//     ↓
// "Hello Lingaraj"
//     ↓
// console.log()
// Q6 — QA Scenario 🔥

// Your code:

// async function runTest() {

//     const result = await new Promise((resolve) => {
//         resolve("Test Passed");
//     });

//     console.log(result);
// }

// runTest();

// ✅ Correct — 10/10

// Everything requested is present:

// async function ✅
// Promise created ✅
// resolve("Test Passed") ✅
// await used ✅
// Result stored in variable ✅
// Result printed ✅
// Q7 — Playwright Interview Question

// Your answer:

// async ({ page }) => { is needed because the function will use await inside it — page is Playwright's object for controlling the browser tab.

// await page.goto(...) pauses the test until the page actually finishes navigating...

// 🔥 Excellent — 10/10

// You made the important connection between JavaScript async behavior and Playwright.

// One small interview refinement:

// Instead of saying:

// "async ({ page }) => is needed because..."

// I'd say:

// The Playwright test callback is declared as async so we can use await for asynchronous Playwright operations. page is the Playwright Page object used to interact with the browser page. await page.goto() waits for the navigation Promise before the next statement continues.

// That sounds a little more professional in an interview.

// 🏆 Final Score: 100%
// Question	Score
// Q1	10/10
// Q2	10/10
// Q3	10/10
// Q4	10/10
// Q5	10/10
// Q6	10/10
// Q7	10/10
// Total	10/10 — 100% 🎯
// 🧠 What you now understand
// Promise
//    ↓
// async function
//    ↓
// returns Promise
//    ↓
// await
//    ↓
// wait for Promise result
//    ↓
// continue to next statement

// And the Playwright connection:

// Playwright action
//       ↓
//     Promise
//       ↓
//     await
//       ↓
// next automation step
// ✅ Concept 2 — async / await: COMPLETE

// Next concept in your Day 10 tracker:

// 👉 Concept 3 — try/catch with async/await

// We'll learn how to handle rejected Promises and runtime errors in automation without letting the test flow fail unexpectedly.