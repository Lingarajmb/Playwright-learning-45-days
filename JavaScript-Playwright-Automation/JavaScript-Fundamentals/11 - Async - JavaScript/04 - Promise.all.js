// Chalooo macha 🔥 Day 10 — Concept 4: Promise.all()

// This is our final Async JavaScript concept for Day 10.

// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 11 - Async - JavaScript/
//         └── 04 - Promise.all.js
// Concept 4 — Promise.all()

// You already know how to handle one Promise:

// const result = await login();

// But what if we have multiple independent asynchronous operations?

// For example:

// Get user data
// Get account data
// Get portfolio data

// Instead of waiting for each one separately, we can use:

// Promise.all()
// 1. What does Promise.all() do?

// Promise.all() takes multiple Promises and waits for all of them to fulfill.

// Example:

// const promise1 = Promise.resolve("User data");
// const promise2 = Promise.resolve("Account data");
// const promise3 = Promise.resolve("Portfolio data");

// const results = await Promise.all([
//     promise1,
//     promise2,
//     promise3
// ]);

// The result will be:

// [
//     "User data",
//     "Account data",
//     "Portfolio data"
// ]
// 2. Simple Example
// async function getData() {

//     const result = await Promise.all([
//         Promise.resolve("A"),
//         Promise.resolve("B"),
//         Promise.resolve("C")
//     ]);

//     console.log(result);
// }

// getData();

// Output:

// ["A", "B", "C"]
// Important 🔥

// The results are returned in the same order as the Promises were supplied.

// Promise.all([
//     promise1, // result → position 0
//     promise2, // result → position 1
//     promise3  // result → position 2
// ]);
// 3. Why use Promise.all()?

// Suppose you have:

// const user = await getUser();
// const orders = await getOrders();
// const products = await getProducts();

// These operations are performed one after another.

// Conceptually:

// getUser
//    ↓
// getOrders
//    ↓
// getProducts

// But if they are independent, you can use:

// const [user, orders, products] = await Promise.all([
//     getUser(),
//     getOrders(),
//     getProducts()
// ]);

// Conceptually:

//        ┌── getUser ──────┐
//        │                 │
// Start ─┼── getOrders ────┼──→ Continue
//        │                 │
//        └── getProducts ──┘

// This allows the independent asynchronous operations to proceed concurrently rather than deliberately waiting for each previous one before starting the next.

// 4. QA / Automation Example 🔥

// Imagine you need independent API data:

// async function getTestData() {

//     const [users, products, orders] = await Promise.all([
//         getUsers(),
//         getProducts(),
//         getOrders()
//     ]);

//     console.log(users);
//     console.log(products);
//     console.log(orders);
// }

// This can be useful when your automation needs multiple independent pieces of data before continuing.

// 5. Very Important — What happens if ONE Promise rejects?

// This is a key interview point.

// Suppose:

// const result = await Promise.all([
//     Promise.resolve("User"),
//     Promise.reject("API failed"),
//     Promise.resolve("Orders")
// ]);

// Because one Promise rejects, Promise.all() rejects.

// So you normally handle it with try/catch:

// async function test() {

//     try {

//         const result = await Promise.all([
//             Promise.resolve("User"),
//             Promise.reject("API failed"),
//             Promise.resolve("Orders")
//         ]);

//         console.log(result);

//     } catch (error) {

//         console.log("Error:", error);

//     }
// }

// test();

// Output:

// Error: API failed
// 🧠 Interview definition
// What is Promise.all()?

// Promise.all() is used to wait for multiple Promises to fulfill and returns their results as an array.

// Important rule:

// If any Promise in Promise.all() rejects, the combined Promise rejects.

// ⚠️ One important distinction

// Don't use Promise.all() just because you have multiple operations.

// Use it when the operations are independent.

// For example:

// Get users ─────┐
// Get products ──┼── independent → Promise.all()
// Get orders ────┘

// But if:

// Login
//   ↓
// Get account using login token
//   ↓
// Get transactions using account

// then there is a dependency between the operations, so they should be handled sequentially.

// 📝 Practice — Concept 4

// Answer Q1–Q7 in your file.

// Q1 — Concept
// What is the purpose of Promise.all()?

//Q1 answer : Promise.all() is used to wait for multiple Promises to fulfill and returns their results as an array.



// Q2 — Output
// What will this code print?
// async function test() {
//     const result = await Promise.all([
//         Promise.resolve("A"),
//         Promise.resolve("B"),
//         Promise.resolve("C")
//     ]);
//     console.log(result);
// }
// test();

//Q2 Answer : ["A","B","C"]

// Q3 — Result Order
// If:
// const result = await Promise.all([
//     Promise.resolve("User"),
//     Promise.resolve("Orders"),
//     Promise.resolve("Products")
// ]);
// What will result contain?
//Q3 Answer :  [ 'User', 'Orders', 'Products' ]

// Q4 — Write Code
// Create three Promises:
// "Login successful"
// "User data received"
// "Dashboard loaded"
// Use Promise.all() to wait for all three and print the resulting array.
//Q4 Answer :
// const result = await Promise.all([
//     Promise.resolve("Login successful"),
//     Promise.resolve("User data received"),
//     Promise.resolve("Dashboard loaded")
// ]);
// console.log(result);

// Q5 — Destructuring + Promise.all() 🔥
// Write code that uses:
// const [user, orders, products]
// with Promise.all() to receive the results of three Promises.
//Q5 Answer :
// const ecommarce = ["user", "orders", "products"];

// async function test() {
//     try {
//         const [user, orders, products] = await Promise.all([
//             Promise.resolve(ecommarce[0]),
//             Promise.resolve(ecommarce[1]),
//             Promise.resolve(ecommarce[2])
//         ]);

//         console.log(user);     // user
//         console.log(orders);   // orders
//         console.log(products); // products

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// test();


// Q6 — Rejection Scenario
// What happens if one Promise rejects inside Promise.all()?
// Explain in your own words.
//Q6 Answer : If even one Promise rejects, Promise.all() immediately rejects as a whole — with that Promise's rejection reason — even if the other Promises would have succeeded. It's all-or-nothing.

// Q7 — Playwright / Automation Interview 🔥
// When would Promise.all() be useful in test automation?
// Give one practical example involving independent asynchronous operations.
// Send Q1–Q7 together.
// After I evaluate them, all four Day 10 Async JavaScript concepts will be complete, and we'll move to the Day 10 Final Mixed Test. 🚀


// //Q7 Answer :

// Promise.all() is useful when you have multiple independent async operations that don't depend on each other's results — running them in parallel instead of one-by-one saves significant test time.

// Practical example: fetching data from multiple independent API endpoints before a test starts (e.g. user info, order history, product list) — none of these calls need to wait for each other, so running them sequentially with separate awaits would waste time unnecessarily.

// javascript
// async function setupTestData() {
//     const [user, orders, products] = await Promise.all([
//         fetchUser(),
//         fetchOrders(),
//         fetchProducts()
//     ]);

//     console.log(user, orders, products);
// }

// If done sequentially instead:

// javascript
// const user = await fetchUser();       // wait
// const orders = await fetchOrders();   // wait
// const products = await fetchProducts(); // wait
// // Total time = sum of all three

// With Promise.all(), all three fire at the same time, and you only wait for the slowest one — total time = the longest single call, not the sum of all three. In real Playwright suites, this pattern is common for things like checking multiple independent page elements, verifying several API responses, or loading test data from different sources before running assertions.



///---- validation ------///

// Macha 🔥 I checked all Q1–Q7 carefully.This is a very strong attempt.

// 📊 Evaluation — Promise.all()
// Q1 — Purpose

// Promise.all() is used to wait for multiple Promises to fulfill and returns their results as an array.

// ✅ Correct — 10 / 10

// Perfect.

//     Q2 — Output

// Your answer:

// ["A", "B", "C"]

// ✅ Correct — 10 / 10

// Exactly right.

//     Q3 — Result Order

// Your answer:

// ['User', 'Orders', 'Products']

// ✅ Correct — 10 / 10

// Important point: Promise.all() preserves the input order in its result array.

//     Q4 — Create three Promises

// Your answer:

// const result = await Promise.all([
//     Promise.resolve("Login successful"),
//     Promise.resolve("User data received"),
//     Promise.resolve("Dashboard loaded")
// ]);

// console.log(result);

// 🟡 Logic is correct — 9 / 10

// The Promise logic is perfect.

// One issue: await normally needs to be inside an async function.

// For example:

// async function test() {
//     const result = await Promise.all([
//         Promise.resolve("Login successful"),
//         Promise.resolve("User data received"),
//         Promise.resolve("Dashboard loaded")
//     ]);

//     console.log(result);
// }

// test();

// So your concept is completely correct; you just needed the surrounding async function.

// Q5 — Destructuring + Promise.all()

// Your code:

// const ecommarce = ["user", "orders", "products"];

// async function test() {

//     try {

//         const [user, orders, products] = await Promise.all([
//             Promise.resolve(ecommarce[0]),
//             Promise.resolve(ecommarce[1]),
//             Promise.resolve(ecommarce[2])
//         ]);

//         console.log(user);
//         console.log(orders);
//         console.log(products);

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// test();

// ✅ Correct — 10 / 10

// You correctly demonstrated:

// Promise.all()
//      ↓
// results array
//      ↓
// array destructuring
//      ↓
// user | orders | products

// The ecommarce variable isn't necessary for this particular exercise, but that's only a simplification—not a conceptual problem.

//     Q6 — Rejection Scenario

// Your answer:

// If even one Promise rejects, Promise.all() immediately rejects as a whole — with that Promise's rejection reason — even if the other Promises would have succeeded. It's all - or - nothing.

// 🔥 Excellent — 10 / 10

// That's exactly the key interview point.

// Q7 — Automation Interview 🔥

// Your answer is excellent.

// You correctly explained:

// Independent operations ✅
// Avoiding unnecessary sequential waiting ✅
// API / test - data example ✅
// Destructuring results ✅
// Sequential vs concurrent comparison ✅
// Time benefit ✅

// Your example:

// const [user, orders, products] = await Promise.all([
//     fetchUser(),
//     fetchOrders(),
//     fetchProducts()
// ]);

// is a very good automation - oriented example.

// One small wording refinement:

// Instead of:

// "all three fire at the same time"

// say:

// "The three asynchronous operations can execute concurrently."

// That's more technically precise.

// ✅ 10 / 10

// 🏆 Final Score
// Question	Score
// Q1	10 / 10
// Q2	10 / 10
// Q3	10 / 10
// Q4	9 / 10
// Q5	10 / 10
// Q6	10 / 10
// Q7	10 / 10
// Total	69 / 70 = 98.6 % 🎯
// ✅ Day 10 Async JavaScript — Concepts COMPLETE

// You have now completed all 4 concepts:

// ✅ Promise & Promise States — 99 %
// ✅ async / await — 100 %
// ✅ try/catch with async/await — 98.6 %
// ✅ Promise.all() — 98.6 %
// 🧠 Your Day 10 Async foundation
// Promise
//    ↓
// async / await
//    ↓
// try / catch / finally
//    ↓
// Promise.all()

// And you've connected all of them to Playwright automation, which is the important part for your goal.

// 🚨 One thing to remember
// await Promise.all([...])

// needs an appropriate async context, for example:

//     async function test() {
//         const results = await Promise.all([...]);
//     }
// 🎯 Next: Day 10 Final Mixed Test

// Now we'll do the complete Day 10 final test, mixing:

// Promise states
// resolve() / reject()
// async
// await
// try/catch/finally
// throw
// Promise.all()
// Output prediction
// Coding
// QA / Playwright scenarios
// Interview questions

// No new teaching before the test.This will measure whether you can actually use the concepts together. 💪