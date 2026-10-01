// Chalooo macha 🔥 Let's continue Day 10 — Concept 3.

// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 11 - Async - JavaScript/
//         └── 03 - Try Catch with Async Await.js
// Concept 3 — try/catch with async/await

// You already know:

// Promise → represents an asynchronous operation.
// async → makes a function return a Promise.
// await → waits for the Promise result.

// Now we need to handle situations where the Promise fails/rejects.
// 1. Why do we need try/catch?
// Suppose an API request fails:

// const apiPromise = new Promise((resolve, reject) => {
//     reject("API request failed");
// });

// If we use:
// async function test() {
//     const result = await apiPromise;
//     console.log(result);
// }
// test();

// The Promise is rejected, so the awaited operation produces an error.
// We can handle that using:
// try {
//     // code that may fail
// } catch (error) {
//     // handle the error
// }

// 2. Basic try/catch
// try {
//     console.log("Starting test");
//     throw new Error("Something went wrong");
// } catch (error) {
//     console.log("Error:", error.message);
// }

// Output:
// Starting test
// Error: Something went wrong

// Important
// try contains the code that may cause an error.
// catch handles the error.

// 3. try/catch with async/await
// This is the important part for automation.
// function login() {
//     return new Promise((resolve, reject) => {
//         reject("Login failed");
//     });
// }
// async function testLogin() {
//     try {
//         const result = await login();
//         console.log(result);
//     } catch (error) {
//         console.log("Login error:", error);
//     }
// }
// testLogin();

// The flow is:
// login()
//    ↓
// Promise rejected
//    ↓
// await
//    ↓
// try detects failure
//    ↓
// catch
//    ↓
// handle error


//------------
// 4. finally
//------------
// There is another block:

// finally
// It runs whether the operation succeeds or fails.

// Example:
// async function test() {
//     try {
//         console.log("Test started");

//     } catch (error) {
//         console.log("Error:", error);

//     } finally {
//         console.log("Test completed");
//     }
// }

// test();

// Think of it as:

// try
//  ↓
// Success ───────→ finally
//  ↓
// Failure → catch → finally
// 5. QA Automation Example 🔥

// Imagine a Playwright test:

// test("Login Test", async ({ page }) => {

//     try {

//         await page.goto("https://example.com");

//         await page.locator("#username").fill("Lingaraj");

//         await page.locator("#login").click();

//         console.log("Login successful");

//     } catch (error) {

//         console.log("Login test failed:", error);

//     } finally {

//         console.log("Login test execution completed");

//     }
// });

// Here:

// try

// Contains the automation steps that could fail.

// catch

// Handles the error if something goes wrong.

// finally

// Runs after the operation, regardless of success or failure.

// 6. throw

// You can also deliberately create an error using throw.

// async function testLogin() {

//     try {

//         const loginSuccessful = false;

//         if (!loginSuccessful) {
//             throw new Error("Login failed");
//         }

//         console.log("Login successful");

//     } catch (error) {

//         console.log(error.message);

//     }
// }

// testLogin();

// Output:

// Login failed

// The flow:

// if condition
//      ↓
// throw new Error()
//      ↓
// catch
//      ↓
// handle error
// 🧠 Interview definitions
// What is try?

// try contains code that may throw an error.

// What is catch?

// catch handles an error thrown from the try block.

// What is finally?

// finally executes after the try/catch processing, whether an error occurs or not.

// What is throw?

// throw is used to explicitly generate an error.

// 🔥 Important automation point

// Don't think:

// try/catch is used to make every failed test pass.

// That's not the purpose.

// It is used to handle errors appropriately.

// For example, you might use error handling to:

// log useful information
// perform cleanup
// handle an expected failure
// add custom error messages
// perform recovery actions
// 📝 Practice — Concept 3

// Answer Q1–Q7 in your file.

// Q1 — Concept
// What is the purpose of the try block?
// Q1 Answer :try runs code that might throw an error, so you can attempt it safely without crashing the program.

// Q2 — Concept
// What is the purpose of the catch block?

//Q2 Answer : catch handles the error if one occurs in the try block, letting you respond to it instead of the program crashing.

// Q3 — Concept
// When does the finally block execute?

//Q3 Answer : finally always executes, whether an error was thrown or not — used for cleanup code (like closing a browser or file) that must run no matter what.

// Q4 — Output
// What will this code print?
// try {
//     console.log("Step 1");
//     throw new Error("Test failed");
//     console.log("Step 2");
// } catch (error) {
//     console.log("Error handled");
// }
// Write the output and explain why "Step 2" is not printed.
//Q4 Answer ; throw immediately exits the try block the moment it runs, skipping every line after it (including "Step 2") and jumping straight to catch.

// Q5 — Write Code
// Create:
// async function loginTest()
// Inside it:
// Use try.
// Create a Promise that rejects with "Invalid credentials".
// Use await.
// Handle the error using catch.
// Print the error.

//Q6 answer :
// async function loginTest() {
//     try {
//         const result = await new Promise((resolve, reject) => {
//             reject("Invalid credentials");
//         });

//         console.log(result);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// loginTest();

// Q6 — QA Scenario 🔥
// Create:
// async function runTest()
// Inside it:
// try → simulate a test execution.
// If testPassed is false, throw:
// "Test case failed"
// catch → print the error.
// finally → print:
// "Test execution completed"


//Q6 Answer :

// async function runTest() {

//     try {

//         const testPassed = false;

//         if (!testPassed) {
//             throw new Error("Test case failed");
//         }

//         //    console.log("Login successful");

//     } catch (error) {

//         console.log(error.message);

//     }

//     finally {
//         console.log("Test execution completed");
//     }
// }

// runTest();


// Q7 — Playwright Interview Question 🔥
// Why might a tester use try/catch/finally around asynchronous Playwright operations?
// Explain in your own words.
// Send Q1–Q7 together. I'll evaluate them and give you the score before we move to Concept 4 — Promise.all(). 💪

// Q7 answer ; Because Playwright operations (clicks, navigation, waits) can fail unpredictably — try attempts the action, catch handles the failure gracefully (logging it, marking the test as failed) instead of crashing the whole test run, and finally ensures cleanup (like closing the browser or page) always happens, whether the test passed or failed.




////------- validations --------------//


// Macha 🔥 I checked your answers carefully. Overall, your understanding is strong, but there is one important issue: Q4 didn't include the actual output, and your question numbering says Q5 but you labeled the answer as Q6.

// 📊 Evaluation — try/catch/finally
// Q1 — Purpose of try

// try runs code that might throw an error...

// ✅ Correct — 10/10

// Good explanation.

// A clean interview version:

// try contains code that may throw an error.

// Q2 — Purpose of catch

// catch handles the error if one occurs in the try block...

// ✅ Correct — 10/10

// Exactly right.

// Q3 — finally

// finally always executes, whether an error was thrown or not...

// ✅ Correct — 10/10

// Excellent. Your cleanup example is also relevant.

// Q4 — Output

// You answered:

// throw immediately exits the try block... skipping "Step 2" and jumping straight to catch.

// ✅ Explanation correct — 9/10

// But you didn't explicitly write the output.

// The output is:

// Step 1
// Error handled

// Why?

// console.log("Step 1");

// runs first.

// Then:

// throw new Error("Test failed");

// immediately stops the remaining statements in try.

// Therefore:

// console.log("Step 2");

// is never executed.

// Then control goes to catch.

// Q5 — loginTest()

// You labeled this as Q6, but the code itself is correct:

// async function loginTest() {

//     try {

//         const result = await new Promise((resolve, reject) => {
//             reject("Invalid credentials");
//         });

//         console.log(result);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// loginTest();

// ✅ Correct — 10/10

// Excellent use of:

// try
//  ↓
// await
//  ↓
// rejected Promise
//  ↓
// catch
// Q6 — QA Scenario

// Your code:

// async function runTest() {

//     try {

//         const testPassed = false;

//         if (!testPassed) {
//             throw new Error("Test case failed");
//         }

//     } catch (error) {

//         console.log(error.message);

//     }
//     finally {

//         console.log("Test execution completed");

//     }

// }

// runTest();

// ✅ Correct — 10/10

// You correctly demonstrated all three:

// try → test execution
// throw → deliberately generate an error
// catch → handle the error
// finally → always execute
// Q7 — Playwright Interview

// Your answer:

// Because Playwright operations can fail unpredictably — try attempts the action, catch handles the failure gracefully... and finally ensures cleanup...

// 🔥 Very good — 10/10

// You correctly connected:

// Playwright → asynchronous operations → errors → catch → cleanup

// One small refinement for interviews:

// Instead of saying "catch handles the failure gracefully", you can say:

// "catch allows us to handle the error, for example by logging useful information or performing recovery/cleanup actions."

// Also, try/catch does not automatically mean the test is marked as failed. That depends on how the test framework and your code handle the error.

// 🏆 Final Score
// Question	Score
// Q1	10/10
// Q2	10/10
// Q3	10/10
// Q4	9/10
// Q5	10/10
// Q6	10/10
// Q7	10/10
// Total	69/70 = 98.6% 🎯
// One thing to remember 🔥
// try
//  ↓
// Run risky code
//  ↓
//  ┌───────────────┐
//  │               │
// Success         Error
//  │               │
//  ↓               ↓
// continue        catch
//  │               │
//  └───────┬───────┘
//          ↓
//       finally

// And:

// throw new Error("Something went wrong");

// means:

// Deliberately create an error and transfer control to catch.

// ✅ Concept 3 — try/catch with async/await: COMPLETE

// You've now completed 3 of 4 Day 10 concepts.

// Next → Concept 4: Promise.all()

// This is the final Async JavaScript concept for Day 10. After that, we'll do your Day 10 final mixed test. 💪🔥