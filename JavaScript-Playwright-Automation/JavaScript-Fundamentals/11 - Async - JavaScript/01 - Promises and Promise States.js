// Yes macha 🔥 Day 9 is officially complete, so we move to Day 10.

//-----------------------------------------------------------------------------------------------------------//

// 🎯 Day 10 learning flow

// We'll do them one at a time:

// Concept 1 → Promise & Promise States

// Promise
// pending
// fulfilled
// rejected
// resolve()
// reject()
// QA/automation examples
// Practice + interview questions

// Concept 2 → Async / Await

// async
// await
// Why await is important in Playwright
// Async automation examples

// Concept 3 → try/catch with async/await

// Handling failures
// try
// catch
// finally
// throw
// Automation error-handling scenarios

// Concept 4 → Promise.all

// Running multiple promises
// Parallel execution
// Promise.all()
// Automation/API scenarios
// 🔥 Important

// After these four concepts, we'll do a Day 10 Final Practice/Test, just like we did for Day 9, and then update the tracker.

///---------------------------------------------------------------------------------------------------------------------------------------------------//



// The roadmap says Day 10 covers Promises, async/await, try/catch/finally, throw, and JSON parse/stringify, with async mock-call practice.

// Your tracker also has Promise and Promise states as the first Day 10 topic, so we’ll start there—not jump ahead.

// 🚀 Day 10 — Async JavaScript
// Concept 1: Promises & Promise States
// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 11 - Async - JavaScript/
//         └── 01 - Promises and Promise States.js
// 1. What is a Promise?

// A Promise represents a value that may be available:

// now
// later
// or never because something failed

// Think about a real automation example:

// Test starts
//    ↓
// Send API request
//    ↓
// Waiting for response...
//    ↓
// Response received

// JavaScript can use a Promise to represent that waiting operation.

// 2. Basic Promise
// const result = new Promise((resolve, reject) => {

//     resolve("Success");

// });

// Here:

// resolve("Success");

// means the operation succeeded.

// 3. Promise States

// A Promise has three states:

// 1️⃣ Pending

// The operation is still running.

// Waiting...
// 2️⃣ Fulfilled

// The operation completed successfully.

// Success
// 3️⃣ Rejected

// The operation failed.

// Error

// Think:

//              Promise
//                 |
//        -------------------
//        |        |        |
//     Pending  Fulfilled  Rejected

// A Promise starts as pending.

// It eventually becomes either:

// Fulfilled

// or:

// Rejected

// It doesn't go back to pending after that.

// 4. resolve() and reject()

// Example:

// const loginPromise = new Promise((resolve, reject) => {

//     const loginSuccessful = true;

//     if (loginSuccessful) {
//         resolve("Login successful");
//     } else {
//         reject("Login failed");
//     }

// });

// Here:

// resolve()

// means:

// The operation succeeded.

// And:

// reject()

// means:

// The operation failed.

// 5. Why Promises Matter in Playwright

// This is important for your automation journey.

// Many Playwright operations are asynchronous.

// For example:

// await page.goto("https://example.com");

// The browser needs time to navigate.

// Conceptually:

// Playwright operation
//        ↓
// Promise
//        ↓
// waiting for operation
//        ↓
// completed / failed

// You will soon learn async/await, which makes working with these Promises much easier.

// Don't worry about await yet. We will learn it as a separate concept.

// 🧪 Practice — Promises & Promise States

// Create the file:

// 01 - Promises and Promise States.js

// Then answer all of these.

// Q1 — Concept
// What are the three states of a Promise?
//Q1 ANSWER : Pending  Fulfilled  Rejected


// Q2 — Identify the State
// What state is this Promise in?
// const promise = new Promise((resolve, reject) => {
// });

//Q2 ANSWER :Pending

// Q3 — Resolve
// Create a Promise called:
// loginPromise
// that resolves with:
// "Login successful"

//Q3 ANSWER :
// const loginPromise = new Promise((resolve, reject) => {
//     resolve("Login successful");
// });

// Q4 — Reject
// Create a Promise called:
// apiPromise
// that rejects with:
// "API request failed"

//Q4 ANSWER :
// const apiPromise = new Promise((resolve, reject) => {
//     reject("API request failed");
// });

// Q5 — Concept
// What is the difference between:
// resolve()
// and:
// reject()

//Q5 ANSWER : resolve() marks the Promise as fulfilled (success) with a value, while reject() marks it as rejected (failure) with an error/reason.


// Q6 — QA Scenario 🔥
// Create a Promise called:
// testExecution
// If:
// const testPassed = true;
// then resolve with:
// "Test Passed"
// Otherwise reject with:
// "Test Failed"

//Q6 ANSWER :
// const testExecution = new Promise((reslove, reject) => {
//     const testPassed = true;

//     if (testPassed) {
//         reslove("Test Passed");
//     }
//     else {
//         reject("Test Failed")
//     }
// })

// Q7 — Interview Question
// Why are Promises important in JavaScript automation?
// Explain in your own words.
// Send Q1–Q7 together. I'll evaluate them before we move to the next concept: then() / catch() and consuming a Promise. 💪

//Q7 ANSWER :Promises let automation code wait for async actions (like page loads, clicks, API calls) to finish before moving to the next step — which is why Playwright uses async/await everywhere, since every browser action takes unpredictable time and Promises prevent flaky, out-of-order execution.


// Chalooo macha 🔥 Let's evaluate Q1–Q7 properly.

// ✅ Promise & Promise States — Practice Evaluation
// Q1 — Three Promise States

// Your answer:

// Pending, Fulfilled, Rejected

// ✅ Correct — 10/10

// Exactly right.

// Q2 — Identify the State
// const promise = new Promise((resolve, reject) => {
// });

// Your answer: Pending

// ✅ Correct — 10/10

// Because neither resolve() nor reject() has been called, the Promise remains pending.

// Q3 — Resolve
// const loginPromise = new Promise((resolve, reject) => {
//     resolve("Login successful");
// });

// ✅ Correct — 10/10

// Perfect use of resolve().

// Q4 — Reject
// const apiPromise = new Promise((resolve, reject) => {
//     reject("API request failed");
// });

// ✅ Correct — 10/10

// Perfect use of reject().

// Q5 — resolve() vs reject()

// Your answer:

// resolve() marks the Promise as fulfilled (success) with a value, while reject() marks it as rejected (failure) with an error/reason.

// ✅ Excellent — 10/10

// Clear and technically correct.

// Q6 — QA Scenario 🔥

// Your code:

// const testExecution = new Promise((reslove, reject) => {

//     const testPassed = true;

//     if (testPassed) {
//         reslove("Test Passed");
//     }
//     else {
//         reject("Test Failed")
//     }

// })
// ⚠️ One issue

// You wrote:

// reslove("Test Passed");

// But the parameter is:

// reslove

// Actually, this is internally consistent, so JavaScript will execute it correctly.

// However, the conventional and expected name is:

// resolve

// So I would write:

// const testExecution = new Promise((resolve, reject) => {

//     const testPassed = true;

//     if (testPassed) {
//         resolve("Test Passed");
//     } else {
//         reject("Test Failed");
//     }

// });

// Your logic is completely correct. This is just a parameter naming/typo issue.

// ✅ 9.5/10

// Q7 — Why are Promises important in JavaScript automation?

// Your answer:

// Promises let automation code wait for async actions (like page loads, clicks, API calls) to finish before moving to the next step — which is why Playwright uses async/await everywhere, since every browser action takes unpredictable time and Promises prevent flaky, out-of-order execution.

// 🔥 Excellent answer — 10/10

// You connected:

// Promises → asynchronous actions → waiting → Playwright → async/await

// That's exactly the connection you need for interviews.

// One small refinement:

// Instead of saying:

// Promises prevent flaky execution

// I'd say:

// Properly handling asynchronous operations with Promises and await helps prevent timing-related and out-of-order execution issues.

// That's more precise.

// 🏆 Final Score
// Question	Score
// Q1	10/10
// Q2	10/10
// Q3	10/10
// Q4	10/10
// Q5	10/10
// Q6	9.5/10
// Q7	10/10
// Final	9.9/10 — 99% 🎯
// What you have understood

// You now understand the foundation:

// Promise
//   ↓
// Pending
//   ↓
//  ┌───────────────┐
//  ↓               ↓
// Fulfilled      Rejected
// (resolve)       (reject)

// And the important automation connection:

// Playwright action
//       ↓
//    Promise
//       ↓
//     await
//       ↓
// Next automation step

// 🔥 Concept 1 — Promise & Promise States: COMPLETE

// Next in our planned sequence is:

// 👉 Concept 2 — async / await

// We'll learn async first, then await, and then connect them directly to Playwright automation.