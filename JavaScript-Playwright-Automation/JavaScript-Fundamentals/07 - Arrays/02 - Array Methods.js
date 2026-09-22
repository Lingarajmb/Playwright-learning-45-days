//-----------------------------------------

// Challoooo 🎉😎 Let's go!

//*************************************
// 📘 Higher-Order Functions — forEach()
//*************************************

// Now we're moving into a very practical HOF.

// forEach() is used when we want to perform an action on every item in an array.

// Simple example
// const numbers = [10, 20, 30];
// numbers.forEach((number) => {
//     console.log(number);
// });

// Output:
// 10
// 20
// 30

// 🧠 What is happening?
// forEach() takes a callback function:
// (number) => {
//     console.log(number);
// }
// Then forEach() calls that callback once for every array item.

// Flow:
// numbers array
//      ↓
//    forEach()
//      ↓
// 10 → callback(10)
// 20 → callback(20)
// 30 → callback(30)

// So:
// forEach() → Higher-Order Function
// (number) => {...} → Callback function
// number → Callback parameter
// 10, 20, 30 → Values passed to the callback


// 🧪 QA Example
// Suppose we have test cases:
// const testCases = ["Login", "Logout", "Search"];
// testCases.forEach((testCase) => {
//     console.log("Executing: " + testCase);
// });
// Output:
// Executing: Login
// Executing: Logout
// Executing: Search

// This is useful in automation when we want to perform the same action for multiple test-data values.

// 🎯 Your Turn
// Q1
// What is the output?
// const numbers = [1, 2, 3];
// numbers.forEach((number) => {
//     console.log(number);
// });

//Output :
//1
//2
//3


// Q2
// How many times will the callback execute?
// const browsers = ["Chrome", "Firefox", "Edge", "Safari"];
// browsers.forEach((browser) => {
//     console.log(browser);
// });

//answer : 4 times


// Q3
// Identify:
// const testCases = ["Login", "Logout"];
// testCases.forEach((testCase) => {
//     console.log(testCase);
// });
// Higher-Order Function =
// Callback Function =
// Callback Parameter =

//answer :
// Higher-Order Function = forEach
// Callback Function = Arrow funcation
// Callback Parameter = testCase
//

// Q4 — Coding 💻
// Create an array:
// const statuses = [200, 201, 404, 500];
// Use forEach() to print each status code.
// Expected output:
// 200
// 201
// 404
// 500
// Challoooo 😎🔥 Send Q1–Q4.

// Program 
const statuses = [200, 201, 404, 500];
statuses.forEach((status) => console.log(status));

// 🔥 Challoooo! Q1–Q4 are all correct!

// ✅ Q1 — 1/1

// Output:
// 1
// 2
// 3

// Correct. 👍
// ✅ Q2 — 1/1
// There are 4 elements, so the callback executes 4 times.
// Chrome
// Firefox
// Edge
// Safari

// Correct. 💯

// ✅ Q3 — 1/1

// Exactly:

// Higher-Order Function = forEach()
// Callback Function     = (testCase) => { ... }
// Callback Parameter    = testCase

// Small terminology point: forEach is a method that accepts a callback, and therefore it demonstrates the Higher-Order Function concept.

// ✅ Q4 — 1/1

// Your code is perfect:

// const statuses = [200, 201, 404, 500];

// statuses.forEach((status) => console.log(status));

// Output:

// 200
// 201
// 404
// 500
// 🏆 Score: 4/4 — 100%

// And notice what you just did:

// statuses.forEach((status) => console.log(status));

// You passed an arrow function as a callback to forEach().

// That's connecting everything we've learned:

// Arrow Function
//      ↓
// Callback
//      ↓
// Passed to forEach()
//      ↓
// forEach() executes it for every item
// 🚀 Next small step: forEach() with index

// forEach() can give us two useful values:

// numbers.forEach((number, index) => {
//     console.log(number, index);
// });

// For:

// const numbers = [10, 20, 30];

// the output is:

// 10 0
// 20 1
// 30 2
// Notice JavaScript array indexes start from 0.
// We'll practice this next. 😎


// Challoooo 😎🔥 Let's continue with forEach() + index.

//********************************* */
// 📘 forEach() — Item + Index
//********************************* */

// So far:
// const numbers = [10, 20, 30];
// numbers.forEach((number) => {
//     console.log(number);
// });
// We can also get the index:
// const numbers = [10, 20, 30];
// numbers.forEach((number, index) => {
//     console.log(number, index);
// });
// Output:
// 10 0
// 20 1
// 30 2


// 🧠 What are these?
// (number, index)
// number → current array value
// index → position of that value
// Remember:
// Array:   [10, 20, 30]
// Index:     0   1   2
// JavaScript starts array indexes from 0.

// 🧪 QA Example
// const testCases = ["Login", "Search", "Logout"];
// testCases.forEach((testCase, index) => {
//     console.log(index + ": " + testCase);
// });
// Output:
// 0: Login
// 1: Search
// 2: Logout

// This can be useful when working with multiple test cases or test data.

// 🎯 Your Turn
// Q5
// What is the output?
// const fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach((fruit, index) => {
//     console.log(index, fruit);
// });

//Output :
//0 Apple
//1 Banana
//2 Mango


// Q6
// What does index represent here?
// const browsers = ["Chrome", "Firefox", "Edge"];
// browsers.forEach((browser, index) => {
//     console.log(browser, index);
// });

// Answer :  array values position.

// Q7
// What will be the index of "Edge"?
// const browsers = ["Chrome", "Firefox", "Edge", "Safari"];

//answer : 2

// Q8 — Coding 💻
// Create:
// const testCases = ["Login", "Search", "Logout"];
// Use forEach() to print:
// Test 0: Login
// Test 1: Search
// Test 2: Logout
// Challoooo 😎🔥 Send Q5–Q8.

//program 

const testCases = ["Login", "Search", "Logout"];

testCases.forEach((testcase, index) => {
    console.log("Test " + index + ": " + testcase)
});

// 🔥 Challoooo! Q5–Q8 are all correct! 💯

// ✅ Q5 — 1/1
// 0 Apple
// 1 Banana
// 2 Mango

// Exactly right. 👍

// ✅ Q6 — 1/1

// Your answer:

// Array values position.

// Correct. More precisely:

// index represents the position of the current element in the array.

// And remember, the first position is 0.

// ✅ Q7 — 1/1

// "Edge" is at:

// Index = 2

// Correct. 🎯

// ✅ Q8 — 1/1

// Your code is perfect:

// const testCases = ["Login", "Search", "Logout"];

// testCases.forEach((testcase, index) => {
//     console.log("Test " + index + ": " + testcase);
// });

// Output:

// Test 0: Login
// Test 1: Search
// Test 2: Logout
// 🏆 Score: 4/4 — 100%

// You now understand:

// array.forEach((item, index) => {
//     // code
// });
// item → current value
// index → current position
// Callback runs once for every item
// 🔥 QA connection

// This is very useful when you have test data:

// const testCases = ["Login", "Search", "Logout"];

// testCases.forEach((testCase, index) => {
//     console.log("Executing Test " + index + ": " + testCase);
// });

// You can use the same pattern later when working with multiple test cases, test data, locators, or API responses in Playwright.

// 🚀 Next small step

// Now that you understand forEach() with item + index, we'll learn another very important array method:

// map()

// The key difference is:

// forEach() → performs an action for each item
// map() → creates a new array from the items

// We'll take it slowly, just like we did with forEach(). 😎🔥

//--------------------------------------------------------------------------------------------------------------------------------------

// Challoooo 😎🔥 Let's start map(), slowly.

//**************************************************** */
// 📘 Array Method — map()
//**************************************************** */

// You already know:
// const numbers = [1, 2, 3];

// numbers.forEach((number) => {
//     console.log(number);
// });

// forEach() performs an action on each item.
// But map() is different.
// map() takes each item, transforms it, and creates a new array.

// Simple example
// const numbers = [1, 2, 3];
// const doubled = numbers.map((number) => {
//     return number * 2;
// });
// console.log(doubled);

// Output:
// [2, 4, 6]

// 🧠 What happened?
// 1 → 1 × 2 → 2
// 2 → 2 × 2 → 4
// 3 → 3 × 2 → 6

// The original array:
// [1, 2, 3]

// The new array:
// [2, 4, 6]

// So:
// const doubled = numbers.map(...)
// means map() returns a new array, which we store in doubled.

// 🔥 forEach() vs map()
// forEach()
// const numbers = [1, 2, 3];
// numbers.forEach((number) => {
//     console.log(number * 2);
// });
// It prints:
// 2
// 4
// 6
// But it doesn't create a new transformed array for you.

// map()
// const numbers = [1, 2, 3];
// const doubled = numbers.map((number) => {
//     return number * 2;
// });
// Now:
// doubled = [2, 4, 6]

// 🧠 Easy way to remember
// forEach() → do something
// map() → transform and create a new array

// 🎯 Your Turn
// Q1
// What is the output?
// const numbers = [2, 4, 6];
// const result = numbers.map((number) => {
//     return number * 2;
// });
// console.log(result);

//output : [4 , 8, 12]

// Q2
// What will be stored in result?
// const numbers = [10, 20, 30];
// const result = numbers.map((number) => {
//     return number + 5;
// });

//result = [15, 25, 35]

// Q3
// What is the main difference between forEach() and map()?
//Answer : forEach() just give value which are in array, map() will create the array

// Q4 — Coding 💻
// Given:
// const prices = [100, 200, 300];
// Use map() to create a new array where every price is increased by 10.
// Expected result:
// [110, 210, 310]
// // Send Q1–Q4. 😎🔥

//program 

// const prices = [100, 200, 300];
// const incPrices = prices.map((number) => {
//     console.log(number + 10)
// })
// i have doubt here this piace of code also give the same result but, i think this not create the array, even though we map() HOF

//correct one
const prices = [100, 200, 300];

const incPrices = prices.map((number) => {
    return number + 10;
})
console.log(incPrices);

// Challoooo! This is a very good doubt. And yes — your understanding is correct. Let's break it down carefully.

// ✅ Q1 — 1/1
// [4, 8, 12]

// Correct. 2×2, 4×2, 6×2.

// ✅ Q2 — 1/1
// result = [15, 25, 35]

// Correct.

// ⚠️ Q3 — 0.5/1

// Your idea is close, but let's make it precise.

// You said:

// forEach() just gives values which are in array, map() will create the array.

// Better:

// forEach() executes a callback for each item, but map() executes a callback for each item and creates a new array from the returned values.

// The important word is return.

// 🔥 Your doubt in Q4 is VERY important

// You wrote:

// const prices = [100, 200, 300];

// const incPrices = prices.map((number) => {
//     console.log(number + 10);
// });

// You asked:

// "This also gives the same result, but I think this doesn't create the array, even though we use map()."

// YES! 🎯 Exactly!

// It prints:

// 110
// 210
// 310

// But incPrices will actually contain:

// [undefined, undefined, undefined]

// Why?

// Because your callback does:

// console.log(number + 10);

// but it doesn't return anything.

// Look at what map() does internally

// Conceptually:

// 100 → callback → undefined
// 200 → callback → undefined
// 300 → callback → undefined

// So:

// const incPrices = prices.map(...);

// becomes:

// incPrices = [undefined, undefined, undefined]

// Even though you see:

// 110
// 210
// 310

// on the console.

// ✅ Your second version is correct
// const prices = [100, 200, 300];

// const incPrices = prices.map((number) => {
//     return number + 10;
// });

// console.log(incPrices);

// Output:

// [110, 210, 310]

// Because now:

// 100 → return 110
// 200 → return 210
// 300 → return 310

// So map() collects those returned values into a new array.

// 🧠 This is the key difference
// map((number) => {
//     console.log(number + 10);
// });

// ➡️ prints values
// ➡️ callback returns undefined
// ➡️ new array = [undefined, undefined, undefined]

// Whereas:

// map((number) => {
//     return number + 10;
// });

// ➡️ returns values
// ➡️ map() collects them
// ➡️ new array = [110, 210, 310]

// ⭐ Very important rule

// When using map():

// Whatever you return from the callback becomes an element in the new array.

// For example:

// const result = [1, 2, 3].map(number => {
//     return number * 10;
// });

// Result:

// [10, 20, 30]

// This is a very important JavaScript concept, and you caught the exact issue yourself. 🔥

// 🏆 Score: 3.5/4

// Q4 deserves full credit because you identified the issue and corrected your code yourself. 😎


//-----------------------------------------------------------------------------------------------------------------------------

// Challoooo 😎🔥 Next!

//****************************************************** */
// 📘 map() — Short Arrow Syntax
//****************************************************** */
// We already wrote:
// const numbers = [1, 2, 3];
// const result = numbers.map((number) => {
//     return number * 2;
// });
// console.log(result);
// Because there is only one expression, we can shorten it:
// const numbers = [1, 2, 3];
// const result = numbers.map(number => number * 2);
// console.log(result);

// Output:
// [2, 4, 6]

// 🧠 Remember
// This:
// number => number * 2
// automatically returns:
// number * 2
// So we don't write:
// return


// 🧪 QA Example
// Suppose we have API status codes:
// const statuses = [200, 201, 404];
// const messages = statuses.map(status =>
//     status === 200 ? "Success" : "Other"
// );
// console.log(messages);
// Output:
// ["Success", "Other", "Other"]
// Here map() transforms each status into a message.

// 🎯 Your Turn
// Q5
// What is the output?
// const numbers = [5, 10, 15];
// const result = numbers.map(number => number + 5);
// console.log(result);

//output : [10, 15, 20]

// Q6
// Convert this to short syntax:
// const result = numbers.map((number) => {
//     return number * 3;
// });

//answer : const result = numbers.map(number => number * 3);

// Q7
// What will be stored in result?
// const names = ["Lingaraj", "Rahul", "John"];
// const result = names.map(name => "Hello " + name);

//answer : ["Hello Lingaraj", "Hello Rahul", "Hello John"];

// Q8 — QA Coding 🧪
// Given:
// const statusCodes = [200, 404, 500, 201];
// Use map() to create a new array where:
// 200 → "PASS"
// Any other status → "FAIL"
// Expected:
// ["PASS", "FAIL", "FAIL", "FAIL"]
// Challoooo 😎🔥 Send Q5–Q8.

//program 
// const statusCodes = [200, 404, 500, 201];
// const apiStatus = statusCodes.map(status => status === 200 ? "PASS" : "FAIL");
// console.log(apiStatus);

// 🔥 Challoooo! Q5–Q8 are all correct! 💯

// ✅ Q5 — 1/1
// [10, 15, 20]

// Correct.

// ✅ Q6 — 1/1

// Perfect short syntax:

// const result = numbers.map(number => number * 3);

// Exactly right. 👍

// ✅ Q7 — 1/1

// Correct:

// ["Hello Lingaraj", "Hello Rahul", "Hello John"]

// map() transforms every name and creates a new array.

// ✅ Q8 — 1/1

// Excellent QA-style solution:

// const statusCodes = [200, 404, 500, 201];

// const apiStatus = statusCodes.map(
//     status => status === 200 ? "PASS" : "FAIL"
// );

// console.log(apiStatus);

// Output:

// ["PASS", "FAIL", "FAIL", "FAIL"]

// You combined map() + arrow function + ternary perfectly. 🔥

// 🏆 Score: 4/4 — 100%

// You now understand:

// forEach() → perform an action
// map()     → transform → return → create a new array

// And you've understood one of the most important map() rules:

// The value returned by the callback becomes an element in the new array.

// 🚀 Next: filter()

// Now we'll learn:

// filter() → selects items that satisfy a condition and creates a new array.

// For example:

// const numbers = [10, 15, 20, 25];

// const result = numbers.filter(number => number >= 20);

// console.log(result);

// Output:

// [20, 25]

// We'll do it slowly, just like map(). 😎🔥

//-----------------------------------------------------------------------------------------------------------------------------

// Challoooo 😎🔥 Next!

//****************************************************** */
// 📘 Array Method — filter()
//****************************************************** */

// You already know:

// forEach() → perform an action for each item
// map() → transform each item and create a new array

// Now:
// filter() → selects items that satisfy a condition and creates a new array.

// Simple example
// const numbers = [10, 15, 20, 25, 30];
// const result = numbers.filter(number => number >= 20);
// console.log(result);

// Output:
// [20, 25, 30]

// 🧠 What happened?
// filter() checks every item:
// 10 >= 20 ❌ → don't include
// 15 >= 20 ❌ → don't include
// 20 >= 20 ✅ → include
// 25 >= 20 ✅ → include
// 30 >= 20 ✅ → include

// So the new array becomes:
// [20, 25, 30]

// 🔑 Important difference
// With map():
// const result = numbers.map(number => number * 2);
// You transform every item.

// With filter():
// const result = numbers.filter(number => number >= 20);
// You select/keep items based on a condition.

// 🧪 QA Example
// Suppose we have API status codes:
// const statusCodes = [200, 201, 400, 404, 500];
// const successful = statusCodes.filter(status => status >= 200 && status < 300);
// console.log(successful);

// Output:
// [200, 201]
// We filtered only the successful HTTP status codes.

// 🎯 Your Turn
// Q1
// What is the output?
// const numbers = [5, 10, 15, 20];
// const result = numbers.filter(number => number > 10);
// console.log(result);

// output : [15, 20]

// Q2
// What will be stored in result?
const numbers = [2, 4, 5, 8, 9, 10];
const result = numbers.filter(number => number % 2 === 0);

// [ 2, 4, 8, 10 ] will be stored in result.

// Q3
// What is the main difference between map() and filter()?

//Answer : filter() → selects items that satisfy a condition and creates a new array. And map() → transform each item and create a new array

// Q4 — Coding 💻
// Given:
// const ages = [15, 18, 21, 16, 25, 17];
// Use filter() to create a new array containing only ages 18 or above.
// Expected result:
// [18, 21, 25]
// Challoooo 😎🔥 Send Q1–Q4.

//Program 
const ages = [15, 18, 21, 16, 25, 17];
const eligibleAge = ages.filter(age => age >= 18);
console.log(eligibleAge);


// 🔥 Challoooo! Q1–Q4 are all correct!

// ✅ Q1 — 1/1
// [15, 20]

// Correct.

// ✅ Q2 — 1/1
// [2, 4, 8, 10]

// Correct. filter() keeps only numbers where number % 2 === 0.

// ✅ Q3 — 1/1

// Your explanation is correct:

// map() transforms every item and creates a new array.
// filter() selects items that satisfy a condition and creates a new array.

// Perfect. 💯

// ✅ Q4 — 1/1

// Your code is exactly right:

// const ages = [15, 18, 21, 16, 25, 17];

// const eligibleAge = ages.filter(age => age >= 18);

// console.log(eligibleAge);

// Output:

// [18, 21, 25]
// 🏆 Score: 4/4 — 100%
// 🔑 Remember
// forEach() → Do something
// map()     → Transform
// filter()  → Select / Keep

// For example:

// const numbers = [1, 2, 3, 4, 5];

// forEach:

// numbers.forEach(n => console.log(n));

// map:

// const result = numbers.map(n => n * 2);
// // [2, 4, 6, 8, 10]

// filter:

// const result = numbers.filter(n => n > 3);
// // [4, 5]

// 🔥 You're picking these up very quickly.

// 🚀 Next: find()

// find() is similar to filter(), but there's an important difference:

// filter() → returns ALL matching items
// find()   → returns the FIRST matching item

// We'll learn that next. 😎

//-----------------------------------------------------------------------------------------------------------------------------

// Challoooo 😎🔥 Next!

//****************************************************** */
// 📘 Array Method — find()
//****************************************************** */

// You already know:

// filter() → returns ALL matching items
// find()   → returns the FIRST matching item
// Simple example
// const numbers = [10, 15, 20, 25, 30];

// const result = numbers.find(number => number >= 20);
// console.log(result);
// Output:
// 20

// Why ?
//     find() checks from left to right:
// 10 >= 20 ❌
// 15 >= 20 ❌
// 20 >= 20 ✅  ← STOP
// It returns 20 and stops searching.

// Compare with filter()
// const numbers = [10, 15, 20, 25, 30];
// const result = numbers.filter(number => number >= 20);
// console.log(result);

// Output:
// [20, 25, 30]

// But:
// const result = numbers.find(number => number >= 20);

// Output:
// 20

// 🧠 Easy memory trick

// filter() → "Give me ALL that match."
// find() → "Give me the FIRST one that matches."

// 🧪 QA Example
// Imagine API responses:
// const responses = [
//     { status: 200, message: "Success" },
//     { status: 404, message: "Not Found" },
//     { status: 500, message: "Server Error" }
// ];
// const result = responses.find(response => response.status === 404);
// console.log(result);

// Output:
// { status: 404, message: "Not Found" }
// We'll learn objects properly later; for now, just understand that find() can search through data.

// 🎯 Your Turn
// Q1
// What is the output ?
// const numbers = [5, 10, 15, 20, 25];
// const result = numbers.find(number => number > 12);
// console.log(result);

//output : 20

// Q2
// What will be stored in result ?
// const numbers = [2, 4, 6, 8, 10];
// const result = numbers.find(number => number % 2 === 0);

//2 will be stored

// Q3
// What is the difference between filter() and find() ?

//answer : filter() "Give me ALL that match." and find() → "Give me the FIRST one that matches."

//     Q4 — Coding 💻
// Given:
// const statusCodes = [400, 404, 200, 201, 500];
// Use find() to get the first status code that is 200 or above.
// Expected result:
// 200
// Challoooo 😎🔥 Send Q1–Q4.

//Program
const statusCodes = [400, 404, 200, 201, 500];
const api = statusCodes.find(a => a >= 200 && a < 300);
console.log(api);

// 🔥 Challoooo! Q1–Q4 are all correct! 💯

// ✅ Q1 — 1/1
// numbers.find(number => number > 12);

// The first matching value is:

// 20

// Correct. 👍

// ✅ Q2 — 1/1
// numbers.find(number => number % 2 === 0);

// The first even number is:

// 2

// Correct.

// ✅ Q3 — 1/1

// Perfect explanation:

// filter() → Give me ALL that match.
// find() → Give me the FIRST one that matches.

// Exactly. 💯

// ✅ Q4 — 1/1

// Your code works:

// const statusCodes = [400, 404, 200, 201, 500];

// const api = statusCodes.find(a => a >= 200 && a < 300);

// console.log(api);

// Output:

// 200

// And your condition is actually a little more specific than the requirement—it finds the first 2xx status code. 👍

// 🏆 Score: 4/4 — 100%

// So far:

// forEach() → perform an action
// map()     → transform
// filter()  → all matching items
// find()    → first matching item
// 🚀 Next: some()

// some() answers a yes/no question:

// "Does at least ONE item satisfy this condition?"

// Example:

// const numbers = [10, 15, 20];

// const result = numbers.some(number => number > 18);

// console.log(result);

// Output:

// true

// Because 20 > 18 is true.

// We'll practice some() next. 😎🔥

//----------------------------------------------------------------------------------------------------------------------

// Chalooo 😎🔥 some() practice start madona!

// 🧠 Quick reminder
//********************************** */
// some() checks:
//********************************** */

// At least ONE item condition satisfy madutta?
// It always returns true or false.

// 🎯 Q1 — Predict the output
// const numbers = [5, 10, 15, 20];
// const result = numbers.some(number => number > 18);
// console.log(result);
// What is the output? 👇
// A) true
// B) false
// Your answer helu 😎

//answer : true

// 🎯 Q2
// const numbers = [2, 4, 6, 8];
// const result = numbers.some(number => number % 2 !== 0);
// console.log(result);
// What is the output?
// A) true
// B) false

// answer : false

// 🔥 Correct! 2/2
// Array:
// [2, 4, 6, 8]
// Condition:
// number % 2 !== 0
// We are checking for an odd number.
// There is no odd number in the array, so no item satisfies the condition.
// Therefore:
// false


// 🎯 Q3 — Important interview question
// What is the main difference between find() and some()?
// A) find() returns the first matching value, while some() returns true or false.
// B) find() returns true/false, while some() returns the first matching value.
// Which one? 😎

//answer : a

// 🔥 Correct! 3/3

// Exactly:
// find() → returns the first matching value
// some() → returns true or false



// 🎯 Q4 — QA Example
const statusCodesa = [404, 500, 200];
const hasSuccess = statusCodesa.some(status => status === 200);
console.log(hasSuccess);
// What is the output?
// A) 200
// B) true
// C) false
//Your answer ? 😎

// answer : true

// 🔥 Correct! 4/4 — Perfect! 🎯

// There is a 200 in the array, so:
// status === 200
// is true for at least one item.

// Therefore:
// hasSuccess
// // true

// 🧠 Remember this
// Method	Returns
// find()	First matching value
// some()	true / false
// filter()	All matching values
// map()	New transformed array
// forEach()	Performs an action

// 🔥 some() COMPLETE — 4/4

// Next in our sequence is every().

// 🔥 some() — Question Set //******************************************* */ still this some() question set
// Q1. Predict the output
// const numbersf = [10, 15, 20, 25];
// const resultf = numbersf.some(number => number > 22);
// console.log(resultf);
// // What is the output?

//output : ture

// Q2. Predict the output
// const numbers = [2, 4, 6, 8];
// const result = numbers.some(number => number % 2 !== 0);
// console.log(result);
// What is the output?

// output :false

// Q3. What will some() return?
// const names = ["Ravi", "Kiran", "Anil"];
// const result = names.some(name => name === "Kiran");
// console.log(result);
// A) "Kiran"
// B) true
// C) false
// D) undefined

//option :true

// Q4. QA-based question
// const statusCodes = [404, 500, 201, 400];
// const hasSuccess = statusCodes.some(status => status >= 200 && status < 300);
// console.log(hasSuccess);
// What is the output?
// A) 201
// B) true
// C) false
// D) [201]
// Send your answers like:

//option : true

// Q1:
// Q2:
// Q3:
// Q4:

// Then I'll check your score. 🔥

// 🔥🔥 Excellent! 4/4 — Perfect!

// Let's check each one:

// Question	Your Answer	Correct Answer	Result
// Q1	true	true	✅
// Q2	false	false	✅
// Q3	true	true	✅
// Q4	true	true	✅
// 🧠 Why Q4 is true
// const statusCodes = [404, 500, 201, 400];

// status >= 200 && status < 300

// 201 satisfies the condition:

// 201 >= 200  → true
// 201 < 300   → true

// So some() finds at least one matching item → true.

// 🏆 some() COMPLETE — 4/4

// You now know:

// forEach() → perform action
// map()     → transform values
// filter()  → get all matching values
// find()    → get first matching value
// some()    → check if at least one matches

// Next: every() 🚀


//-----------------------------------------------------------------------------------------------------------
//******************************************* */
// Chalooo 😎🔥 Next topic: every()
//******************************************* */

// 🧠 What is every()?
// every() checks:
// Do ALL items satisfy the condition?
// It returns only true or false.

// Example:
// const numbers = [2, 4, 6, 8];
// const result = numbers.every(number => number % 2 === 0);
// console.log(result);
// All numbers are even → true.
// But:
// const numbers = [2, 4, 5, 8];
// const result = numbers.every(number => number % 2 === 0);
// console.log(result);
// 5 is not even → false.

// 🔑 Easy difference
// some()  → At least ONE matches?
// every() → ALL match?

// Now let's do your Q1–Q4 set. Don't look for answers yet 😎

// Q1. Predict the output
// const numbers = [10, 20, 30, 40];
// const result = numbers.every(number => number >= 10);
// console.log(result);

//Output : true

// Q2. Predict the output
// const numbers = [2, 4, 6, 7];
// const result = numbers.every(number => number % 2 === 0);
// console.log(result);

//output : false

// Q3. What will every() return?
// const ages = [20, 25, 30];
// const result = ages.every(age => age >= 18);
// console.log(result);
// A) 20
// B) true
// C) false
// D) [20, 25, 30]

// answer : true

// Q4. QA-based question
// const statusCodes = [200, 201, 204];
// const allSuccessful = statusCodes.every(
//     status => status >= 200 && status < 300
// );
// console.log(allSuccessful);
// A) 200
// B) true
// C) false
// D) [200, 201, 204]

//answer : true

// 🔥🔥 Perfect! 4/4 — Excellent!

// Let's check:

// Question	Your Answer	Correct	Result
// Q1	true	true	✅
// Q2	false	false	✅
// Q3	true	true	✅
// Q4	true	true	✅
// 🧠 Key point

// For Q2:

// [2, 4, 6, 7]

// The condition is:

// number % 2 === 0

// 7 is not even, so not every item satisfies the condition → false.

// 🔥 Remember
// some()  → At least ONE matches? → true/false
// every() → ALL match?            → true/false

// every() COMPLETE — 4/4 🎯

// Next in our sequence: reduce() — this one is a little more important for interviews, so we'll learn it slowly

//-----------------------------------------------------------------------------------------------------------
//******************************************* */
// Chalooo 😎🔥 Next topic: reduce()
//******************************************* */

// reduce() is a little different from the methods we've learned, so we'll take it step by step.

// 🧠 What does reduce() do?
// reduce() takes all the elements of an array and combines them into one final value.
// For example, adding all numbers:
// const numbers = [10, 20, 30, 40];
// const total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);
// console.log(total);

// Output:
// 100

// 🔍 How does it work?
// Think of sum as a running total:
// Initial sum = 0
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100

// So finally:
// total = 100

// ⭐ Important terms
// numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);
// sum → accumulator — stores the running result
// number → current array element
// 0 → initial value
// return sum + number → updates the accumulator

// 🔑 Easy way to remember
// map()     → transforms each item
// filter()  → selects items
// find()    → finds first matching item
// some()    → checks at least one
// every()   → checks all
// reduce()  → combines items into one result

// Let's first make sure you understand this basic example before moving to the Q1–Q4 set.

// Question: What will this code print?
// const numbers = [5, 10, 15];
// const total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);
// console.log(total);
// Your answer? 😎

// answer : 30

// 🔥 Correct! 30 ✅

// Let's trace it once like a senior QA engineer (this is often asked in interviews).

// Step-by-step execution
// const numbers = [5, 10, 15];

// const total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// Iteration  // sum     // number      // Returned value
// Start      // 0      // —            // 0
// 1          // 0      // 5            // 5
// 2          // 5      // 10           // 15
// 3          // 15     // 15           // 30

// Final result:
// 30


// 🧠 Remember this formula
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

// Accumulator (sum) → Running total/result
// Current Value (number) → Current array item
// Initial Value (0) → Starting point

// 🎯 reduce() Question Set (Q1–Q4)
// Q1. Predict the output
// const numbers = [1, 2, 3, 4];
// const result = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);
// console.log(result);

//Output : 10

// Q2. Predict the output
// const numbers = [2, 3, 4];
// const result = numbers.reduce((total, number) => {
//     return total * number;
// }, 1);
// console.log(result);

//output : 24

// Q3. Fill in the blanks
const pricess = [100, 200, 300];
const total = pricess.reduce((a, price) => {
    return a + price;
}, 0);
// What should replace the blanks?

// answer : a (anythings we can give here)

// Q4. QA Coding 💻
// Given:
// const responseTimes = [120, 150, 180, 100];
// Use reduce() to calculate the total response time.
// Expected output:
// 550
// Challoooo 😎🔥 Send Q1–Q4.

//program 
const responseTimes = [120, 150, 180, 100];
const totalResponseTimes = responseTimes.reduce((r, t) => {
    return r + t;
}, 0);
console.log(totalResponseTimes);


// 🔥🔥 Excellent! 4/4 — Perfect!

// Let's check your answers.

// Q1 → 10 ✅
// 1 + 2 + 3 + 4 = 10
// Q2 → 24 ✅
// 1 × 2 × 3 × 4 = 24

// More precisely, with your initial value:

// 1 × 2 = 2
// 2 × 3 = 6
// 6 × 4 = 24
// Q3 → Correct ✅

// You used:

// const total = pricess.reduce((a, price) => {
//     return a + price;
// }, 0);

// Yes, a can be any valid variable name.

// For example, all of these work:

// (accumulator, price)
// (sum, price)
// (total, price)
// (a, price)

// The important thing is that the first parameter represents the accumulator.

// Q4 → Correct ✅

// Your code:

// const responseTimes = [120, 150, 180, 100];

// const totalResponseTimes = responseTimes.reduce((r, t) => {
//     return r + t;
// }, 0);

// console.log(totalResponseTimes);

// Output:

// 550

// Perfect. 🎯

// 🧠 One important interview point

// The parameter names don't matter:

// reduce((a, price) => ...)

// and

// reduce((sum, price) => ...)

// work exactly the same.

// But the position matters:

// reduce((accumulator, currentValue) => ...)

// First parameter → accumulator
// Second parameter → current array value

// 🔥 reduce() Q1–Q4 = 4/4

// Next we can do a slightly tricky reduce() set before moving on, so you become comfortable with it.

// Chalooo 😎🔥 Let's do a slightly tricky reduce() Q1–Q4 set.

// Q1. Predict the output
const numberss = [5, 10, 15];
const resultt = numberss.reduce((sum, number) => {
    return sum + number;
}, 10);
console.log(resultt);

// 40 (explanation : 10 + 5 = 15, -> 15 + 10 = 25, 25 + 15 = 40)// initially (sum = 10 , number(Array 1st value) = 5)


// Q2. Predict the output
// const numbers = [2, 4, 6];
// const result = numbers.reduce((total, number) => {
//     return total + number * 2;
// }, 0);
// console.log(result);

//output : 24

// Q3. Find the mistake 🔍
// What is wrong with this code?

const numbersssL = [10, 20, 30];
const resultsL = numbersssL.reduce((sum, number) => {
    console.log("MAMA : " + sum + number);
}, 0);
console.log(resultsL);
// What will result contain?
// A) 60
// B) [60]
// C) undefined
// D) 0

//return not there, C) undefined (i dont have clear idea give me reson)

// Q4. QA-based coding 💻

// Given:
// const responseTimes = [100, 200, 150, 250];
// Use reduce() to calculate the average response time.
// Expected output:
// 175
// Write the code yourself. 😎

//program 
const responseTimesss = [100, 200, 150, 250];
const averageResponseTime = responseTimesss.reduce((a, b) => {
    return a % b + 25;
});
console.log(averageResponseTime);

// Chalooo 😎🔥 Let's check carefully. You did well on the first 3, and Q4 needs correction.

// Q1 → 40 ✅

// Your explanation is exactly right:

// Initial sum = 10

// 10 + 5  = 15
// 15 + 10 = 25
// 25 + 15 = 40

// 1/1 🎯

// Q2 → 24 ✅
// 0 + (2 × 2) = 4
// 4 + (4 × 2) = 12
// 12 + (6 × 2) = 24

// 1/1 🎯

// Q3 → undefined ✅

// Your answer is correct. Let's make the reason very clear because this is an important reduce() concept.

// Your callback is:

// (sum, number) => {
//     console.log(sum + number);
// }

// Notice there is no return.

// console.log() only prints the value. It does not return that value to reduce().

// So the first iteration does:

// sum = 0
// number = 10

// console.log(0 + 10)
// → prints 10

// But because there is no return, the callback returns:

// undefined

// Then reduce() gets undefined as the next accumulator.

// So your resultsL ultimately becomes undefined.

// 🔑 Remember
// console.log(sum + number);

// ➡️ Displays the value.

// return sum + number;

// ➡️ Sends the value back to reduce().

// Q3 = 1/1 ✅

// Q4 → ❌ Let's fix this one together

// You wrote:

// const averageResponseTime = responseTimesss.reduce((a, b) => {
//     return a % b + 25;
// });

// The issue is the logic. % means remainder, not average.

// To calculate an average:

// Average = total of all values ÷ number of values

// Here:

// 100 + 200 + 150 + 250 = 700
// 700 ÷ 4 = 175

// First use reduce() to get the total:

// const responseTimes = [100, 200, 150, 250];

// const total = responseTimes.reduce((sum, time) => {
//     return sum + time;
// }, 0);

// const average = total / responseTimes.length;

// console.log(average);

// Output:

// 175
// 🧠 Important

// You do not need to force everything into one reduce().

// For this problem, the clean approach is:

// reduce() → calculate total
// length   → count values
// /        → calculate average
// Score: 3/4 🔥

// And honestly, your Q3 doubt was a good one. Understanding why console.log() doesn't replace return is very important for reduce(), callbacks, and later Playwright code.

// hey that is your mistake, you didn't thought me about .length
// Compare with other AI
// Liner
// Gemini
// Claude

// 😂 You're absolutely right, man. That's my mistake.

// I introduced .length in Q4 without teaching you what .length is first. You shouldn't have been expected to know it.

// And your reduce() understanding in Q4 was not the problem—you simply hadn't learned .length yet.

// 🧠 Let's fix the learning order

// We should not jump to .length yet.

// Before using it, I'll teach you:

// array.length

// It tells us how many elements are inside an array.

// const numbers = [10, 20, 30, 40];

// console.log(numbers.length);

// Output:

// 4

// Because there are 4 elements:

// 10 → 1
// 20 → 2
// 30 → 3
// 40 → 4

// So:

// numbers.length

// means:
// "Give me the number of elements in this array."
// One important distinction
// numbers.length
// does not mean the last element.

// For example:
// const numbers = [10, 20, 30, 40];
// console.log(numbers.length); // 4
// The last value is:
// numbers[3] // 40
// We'll properly cover array properties/indexing when we reach Arrays in your roadmap.
// So for now, let's not use .length in our reduce() exercises.
// And yes 😎 — I won't test you on something I haven't taught you yet.



//----------------------------------------------------------


// Yesss 😎🔥 Let's work on the Q1–Q4 reduce() set in your current file:

// 📁 06 - Functions/Higher-Order Functions.js

// Q1
// const numbers = [10, 20, 30];
// const result = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);
// console.log(result);

//output : 60

// Q2
// const numbers = [5, 10, 15];
// const result = numbers.reduce((total, number) => {
//     return total + number * 2;
// }, 0);
// console.log(result);

// output : 60

// Q3
const anumbers = [10, 20, 30];
const aresult = anumbers.reduce((sum, number) => {
    console.log(sum + number);
}, 0);
console.log("Final:", aresult);
// What will result contain?
// A) 60
// B) undefined
// C) 0
// D) [60]
// Also explain why.

//answer :  Final: undefined beacause we doest have return here that becomes 0 + 10 that is 10 we dont have return that for that reson that will give the undefined.


// Q4 — Coding 💻
// const responseTimes = [100, 200, 150, 250];
// Use reduce() to calculate the total response time.
// Expected output:
// 700
// Send your Q1, Q2, Q3, Q4 answers/code. 🔥

const sresponseTimes = [100, 200, 150, 250];
const totalResponseTime = sresponseTimes.reduce((sum, time) => {
    return sum + time;
});
console.log(totalResponseTime);

// 🔥🔥 Excellent! 4/4 — Perfect!

// Let's check each one carefully.

// Q1 → 60 ✅
// 10 + 20 + 30 = 60

// 1/1

// Q2 → 60 ✅

// Step-by-step:

// 0 + (5 × 2)  = 10
// 10 + (10 × 2) = 30
// 30 + (15 × 2) = 60

// 1/1

// Q3 → undefined ✅

// Your explanation is correct. 👍

// The important point is:

// console.log(sum + number);

// prints the calculated value, but there is no return.

// So the callback returns undefined.

// You would see:

// 10
// 30
// 60
// Final: undefined

// Notice something important:

// 10, 30, 60 → printed by console.log()
// undefined → final result of reduce()

// That's the distinction I want you to remember.

// 1/1 🎯

// Q4 → 700 ✅

// Your code:

// const sresponseTimes = [100, 200, 150, 250];

// const totalResponseTime = sresponseTimes.reduce((sum, time) => {
//     return sum + time;
// });

// console.log(totalResponseTime);

// Output:

// 700
// One small learning point

// You didn't provide an initial value:

// .reduce((sum, time) => ...)

// That's valid here.

// JavaScript uses the first array element (100) as the initial accumulator.

// So:

// sum = 100
// 100 + 200 = 300
// 300 + 150 = 450
// 450 + 250 = 700

// Earlier we usually wrote:

// .reduce((sum, time) => {
//     return sum + time;
// }, 0);

// Both work for this example.

// For now, I recommend you continue using 0 as the initial value because it's clearer while you're learning:

// const totalResponseTime = sresponseTimes.reduce((sum, time) => {
//     return sum + time;
// }, 0);
// 🏆 Final Score: 4/4

// reduce() is now properly understood. 🔥

// And importantly, we have not used .length in this exercise.

// Next step

// We can now finish the remaining Functions topic(s), then move to:

// 📁 07 - Arrays/

// When we move there, I'll explicitly tell you:

// Create this file → ...

// before we start.

//-------------------------------------

// 📌 One final Functions interview check

// Answer this in your own words:

// Q1. What is a Higher-Order Function?
//A Higher-Order Function (HOF) is simply a function that does at least one of these: 1. Accepts another function as an argument 2.Returns a function

// Q2. What is a callback function?
//A callback is a function that we pass to another function, so the other function can call it.

// Q3. What is the difference between map() and forEach()?
// forEach() → performs an action for each item and  map() → creates a new array from the items.

// Q4. What is the difference between find(), some(), and every()?
// find()   → returns the FIRST matching item,
//some()  →  At least ONE item condition satisfy and It always returns true or false.
//every()  →   Do ALL items satisfy the condition? and It returns only true or false.

//Send your answers.I'll correct them and then we'll officially mark:


// 🔥 Excellent! 4/4 — Functions chapter completed! 🎯

// Your answers are interview-ready.

// Q1 — Higher-Order Function ✅

// Correct:

// A HOF is a function that accepts another function as an argument or returns a function.

// Q2 — Callback ✅

// Correct:

// A callback is a function passed to another function so that the other function can call it.

// Q3 — map() vs forEach() ✅

// Your answer is correct:

// forEach() → performs an action for each item
// map()     → creates a new array by transforming items
// Q4 — find() vs some() vs every() ✅

// Exactly:

// find()  → first matching item
// some()  → at least one matches → true/false
// every() → all items match → true/false
// 🏆 06 - Functions → COMPLETE ✅

// Your roadmap is now:

// 01 - Introduction                  ✅
// 02 - Variables and Data Types      ✅
// 03 - Operators                     ✅
// 04 - Conditional Statements        ✅
// 05 - Loops                         ✅
// 06 - Functions                     ✅
// 07 - Arrays                        ⬅️ NEXT
// 08 - Objects
// 09 - Strings and Dates
// 10 - ES6 and OOP
// 11 - Async JavaScript
// 12 - JSON
// 13 - Error Handling
// 🚀 Next: 07 - Arrays

// Do not create or move anything yet.

// When we start Arrays, I'll first tell you:

// 📁 Folder: 07 - Arrays
// 📄 File to create: exact filename
// 📝 What to paste: exact content

// And this time we'll learn .length before I use it in any question. 😎🔥