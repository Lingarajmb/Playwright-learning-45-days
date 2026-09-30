// Chalooo macha 🔥 Day 10 Final Mixed Test starts now.

// No hints this time. Answer in your own words/code. I'll evaluate the complete test after you send all answers.

// 📁 Final Test File
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 11 - Async - JavaScript/
//         └── 05 - Async JavaScript - Final Practice.js


// 🧪 Day 10 — Async JavaScript Final Test
// Q1 — Promise States
// What are the three states of a Promise?
//Q1 Answer : pending , fullfiled, rejected

// Q2 — Output Prediction
// What will this print?
// const promise = new Promise((resolve, reject) => {
//     resolve("Success");
// });
// console.log(promise);
// Will it be:
// Pending
// Fulfilled
// Rejected
// Explain why.

//Q2 Answer : because resolve("Success") runs immediately, so it prints Promise { 'Success' }, showing the settled state and value.

// Q3 — resolve() / reject()
// Create a Promise called apiRequest.
// If apiAvailable is true, resolve with "API successful".
// Otherwise reject with "API failed".
// Use:
// const apiAvailable = true;

//Q3 answer :
// const apiAvailable = true;
// const apiRequest = new Promise((resolve, reject) => {

//     if (apiAvailable) {
//         resolve("API successful");
//     } else {
//         reject("API failed");
//     }
// });
// console.log(apiRequest);


// Q4 — async / await
// What is the difference between async and await?
// Give a short interview-style answer.

//Q4 Answer : async marks a function as asynchronous and makes it always return a Promise. await is used inside an async function to pause execution until a Promise settles, then returns its resolved value. In short: async declares the function; await pauses and unwraps a Promise within it — they always work together.

// Q5 — Output Prediction 🔥
// What will this print?
// async function getUser() {
//     return "Lingaraj";
// }
// const result = getUser();
// console.log(result);
// Explain why.

//Q5 Answer :Promise { 'Lingaraj' } — because async functions always wrap their return value in a Promise, regardless of what's returned.


// Q6 — Write Code
// Create:
// async function loginTest()
// Inside it:
// Create a Promise that resolves with "Login successful".
// Use await.
// Store the result in message.
// Print message.

//Q6 answer :
// async function loginTest() {

//     const message = await new Promise((resolve, reject) => {
//         resolve("Login successful");
//     });

//     console.log(message);
// }

// loginTest();

// Q7 — try/catch
// What will this print?
// try {
//     console.log("Start");
//     throw new Error("Something failed");
//     console.log("End");
// } catch (error) {
//     console.log("Error handled");
// }
// Give the exact output and explain why "End" doesn't execute.

//Q7 Answer : Start then Error handled — throw immediately exits the try block, skipping "End," and jumps to catch, which prints its own fixed message (not the error text, since it's console.log("Error handled"), not error.message).


// Q8 — finally
// Explain when the finally block executes.
// Give a small example from test automation where finally could be useful.

//Q8 answer : finally always executes, whether the try succeeded or the catch caught an error. In test automation, it's useful for cleanup that must happen regardless of test outcome —
//  e.g.:
// async function runTest() {
//     try {
//         // run test steps
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         console.log("Closing browser");
//         await browser.close();
//     }
// }
// Even if the test fails, finally ensures the browser closes — preventing leftover processes/resources from piling up.



// Q9 — throw 🔥
// Write an async function:
// async function validateLogin()
// Inside it:
// const loginSuccessful = false;
// If login is unsuccessful, deliberately throw:
// "Login validation failed"
// Handle the error using catch.

// //Q9 answer :
// async function validateLogin() {
//     try {
//         const loginSuccessful = false;

//         if (!loginSuccessful) {
//             throw new Error("Login validation failed");
//         }

//         console.log("Login successful");

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// validateLogin();

// Q10 — Promise.all()
// What will this contain?
// const results = await Promise.all([
//     Promise.resolve("User"),
//     Promise.resolve("Orders"),
//     Promise.resolve("Products")
// ]);
// Write the resulting array.

//Q10 answer :[ 'User', 'Orders', 'Products' ]

// Q11 — Promise.all() Rejection
// What happens here?
// const results = await Promise.all([
//     Promise.resolve("User"),
//     Promise.reject("Orders API failed"),
//     Promise.resolve("Products")
// ]);
// Explain what happens to results.

//Q11 Answer : Promise.all() immediately rejects as a whole — results never gets assigned, and the rejection ("Orders API failed") must be caught with try/catch, otherwise it's an unhandled rejection.



// Q12 — Coding 🔥
// Create three independent Promises:
// "Login successful"
// "Profile loaded"
// "Dashboard loaded"
// Use Promise.all() and array destructuring:
// const [login, profile, dashboard]
// Then print all three values.

// //Q12 answer :
// async function runFlow() {
//     try {
//         const [login, profile, dashboard] = await Promise.all([
//             Promise.resolve("Login successful"),
//             Promise.resolve("Profile loaded"),
//             Promise.resolve("Dashboard loaded")
//         ]);

//         console.log(login);
//         console.log(profile);
//         console.log(dashboard);

//     } catch (error) {
//         console.log(error);
//     }
// }

// runFlow();


// Q13 — QA Scenario
// Imagine you have these independent API calls:
// getUser()
// getOrders()
// getProducts()
// Would you use:
// const user = await getUser();
// const orders = await getOrders();
// const products = await getProducts();
// or:
// const [user, orders, products] = await Promise.all([
//     getUser(),
//     getOrders(),
//     getProducts()
// ]);
// Explain why.

//Q13 ansswer ; Promise.all() — since the calls are independent, running them in parallel is faster (total time = slowest call) than sequential awaits (total time = sum of all calls).



// Q14 — Playwright Interview 🔥
// Explain this:
// test("Login", async ({ page }) => {
//     await page.goto("https://example.com");
//     await page.locator("#username").fill("Lingaraj");
//     await page.locator("#login").click();
// });
// Specifically explain:
// Why async?
// Why await?
// What role does the Promise play?

//Q14 ansswer :async lets the function use await; await pauses on each action's returned Promise until it completes, ensuring steps run in the correct order instead of racing ahead before the page/element is ready.

// Q15 — Final Scenario 🔥🔥
// Write an async function:
// async function runLoginTest()
// It should:
// Start a try block.
// Create a Promise representing a login operation.
// If login succeeds, resolve "Login successful".
// If login fails, reject "Login failed".
// Use await.
// Print the result.
// Handle the failure using catch.
// Use finally to print:
// Test execution completed

//Q15 Answer :
// async function runLoginTest() {
//     const loginSuccess = true; // change to false to test the failure path

//     try {
//         const result = await new Promise((resolve, reject) => {
//             if (loginSuccess) {
//                 resolve("Login successful");
//             } else {
//                 reject("Login failed");
//             }
//         });

//         console.log(result);

//     } catch (error) {
//         console.log(error);

//     } finally {
//         console.log("Test execution completed");
//     }
// }

// runLoginTest();




// 🎯 Final Test Rules

// 15 questions.

// This time I'll evaluate:

// 🧠 Concept understanding
// 💻 JavaScript syntax
// 🔄 Async flow
// 🎯 Output prediction
// 🧪 QA/automation application
// 🎤 Interview communication
// 🧩 Ability to combine concepts

// Send Q1–Q15 together.

// After evaluation, I'll give you:

// Score + question-wise feedback + mistakes + final Day 10 status + what comes next in the roadmap. 🚀



////--------validation-----------------///////


// Macha 🔥 I evaluated the complete Day 10 Final Mixed Test — all 15 questions.

// You did very well. There are only a couple of technical refinements.

// 🏆 Day 10 Final Evaluation
// Q1 — Promise States

// Your answer: Pending, fulfilled, rejected.

// ✅ 10/10

// Correct.

// Q2 — Promise State / Output

// You said:

// Promise { 'Success' }, showing the settled state and value.

// ✅ 10/10

// Correct. resolve("Success") is called immediately, so the Promise is fulfilled with "Success".

// Q3 — resolve() / reject()

// Your code:

// const apiAvailable = true;

// const apiRequest = new Promise((resolve, reject) => {
//     if (apiAvailable) {
//         resolve("API successful");
//     } else {
//         reject("API failed");
//     }
// });

// ✅ 10/10

// Exactly what was requested.

// Q4 — async vs await

// Your answer:

// async marks a function as asynchronous and makes it always return a Promise. await is used inside an async function to pause execution until a Promise settles, then returns its resolved value.

// ✅ 10/10

// Very good interview answer.

// Q5 — Async Function Output

// Your answer:

// Promise { 'Lingaraj' } — because async functions always wrap their return value in a Promise.

// ✅ 10/10

// Correct.

// Q6 — async + await

// Your code:

// async function loginTest() {

//     const message = await new Promise((resolve, reject) => {
//         resolve("Login successful");
//     });

//     console.log(message);
// }

// loginTest();

// ✅ 10/10

// Perfect.

// Q7 — try/catch

// Your answer:

// Start then Error handled — throw immediately exits the try block, skipping "End," and jumps to catch...

// ✅ 10/10

// Correct exact output:

// Start
// Error handled

// Your explanation is also correct.

// Q8 — finally

// Your answer was strong:

// finally always executes, whether the try succeeded or the catch caught an error.

// ✅ 10/10

// And your cleanup example is appropriate.

// One small note: in real Playwright tests, browser/page lifecycle is often managed by Playwright fixtures, so manually closing them isn't always necessary. But as a generic cleanup example, your explanation is correct.

// Q9 — throw

// Your code:

// async function validateLogin() {
//     try {
//         const loginSuccessful = false;

//         if (!loginSuccessful) {
//             throw new Error("Login validation failed");
//         }

//         console.log("Login successful");

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// validateLogin();

// ✅ 10/10

// Excellent use of:

// try → condition → throw → catch
// Q10 — Promise.all()

// Your answer:

// ["User", "Orders", "Products"]

// ✅ 10/10

// Correct.

// Q11 — Promise.all() Rejection

// Your answer:

// Promise.all() immediately rejects as a whole — results never gets assigned...

// 🔥 10/10

// Exactly right.

// Because the combined Promise rejects, execution cannot successfully assign a value to results.

// Q12 — Promise.all() + Destructuring

// Your code:

// async function runFlow() {
//     try {
//         const [login, profile, dashboard] = await Promise.all([
//             Promise.resolve("Login successful"),
//             Promise.resolve("Profile loaded"),
//             Promise.resolve("Dashboard loaded")
//         ]);

//         console.log(login);
//         console.log(profile);
//         console.log(dashboard);

//     } catch (error) {
//         console.log(error);
//     }
// }

// runFlow();

// ✅ 10/10

// Perfect combination of:

// async
// await
// Promise.all()
// array destructuring
// try/catch
// Q13 — QA Scenario

// You chose:

// Promise.all() — since the calls are independent, running them in parallel is faster...

// ✅ 10/10

// Correct.

// Your key distinction is exactly what matters:

// Independent operations
//         ↓
// Promise.all()

// while dependent operations may need sequential execution.

// Q14 — Playwright Interview

// Your answer:

// async lets the function use await; await pauses on each action's returned Promise until it completes, ensuring steps run in the correct order...

// ✅ 9.5/10

// Very good.

// You correctly explained the relationship between:

// async
//  ↓
// await
//  ↓
// Promise returned by Playwright operation
//  ↓
// next statement

// The only thing missing was explicitly explaining what the Promise is.

// A stronger interview answer would be:

// Playwright's asynchronous operations return Promises. The test function is async so we can use await, and await waits for each operation's Promise to settle before the next statement continues.

// Q15 — Final Scenario 🔥🔥

// Your code:

// async function runLoginTest() {
//     const loginSuccess = true;

//     try {
//         const result = await new Promise((resolve, reject) => {
//             if (loginSuccess) {
//                 resolve("Login successful");
//             } else {
//                 reject("Login failed");
//             }
//         });

//         console.log(result);

//     } catch (error) {
//         console.log(error);

//     } finally {
//         console.log("Test execution completed");
//     }
// }

// runLoginTest();

// 🔥 10/10

// You successfully combined every major Day 10 concept:

// async
//   ↓
// Promise
//   ↓
// resolve / reject
//   ↓
// await
//   ↓
// try / catch
//   ↓
// finally

// Excellent final scenario.

// 🏆 Final Day 10 Score
// Q	Score
// Q1	10/10
// Q2	10/10
// Q3	10/10
// Q4	10/10
// Q5	10/10
// Q6	10/10
// Q7	10/10
// Q8	10/10
// Q9	10/10
// Q10	10/10
// Q11	10/10
// Q12	10/10
// Q13	10/10
// Q14	9.5/10
// Q15	10/10
// TOTAL	149.5/150
// SCORE	99.7% 🎯
// 🥇 DAY 10 — COMPLETE ✅

// You have completed all four Async JavaScript concepts:

// ✅ Promise & Promise States
// ✅ async / await
// ✅ try/catch/finally + throw
// ✅ Promise.all()
// ✅ Final mixed test — 99.7%
// Your biggest strength today

// You aren't just memorizing definitions anymore. You're combining concepts in code:

// async function runLoginTest() {
//     try {
//         const result = await Promise.all([...]);

//         console.log(result);

//     } catch (error) {
//         console.log(error);

//     } finally {
//         console.log("Test execution completed");
//     }
// }

// That's exactly the kind of combination you'll need when we start applying JavaScript to Playwright.

// ⚠️ One thing to keep improving

// When answering interview questions, always explicitly explain the Promise relationship:

// Playwright asynchronous methods return Promises → await waits for those Promises → the next statement continues after the awaited operation settles.

// That will make your interview explanations stronger.

// Day 10 is officially complete. 🔥