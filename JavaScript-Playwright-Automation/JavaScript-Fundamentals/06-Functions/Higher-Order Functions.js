

//*************************************
// 📘 Higher-Order Functions
//*************************************

// Don't let the name scare you. 😄
// A Higher-Order Function (HOF) is simply a function that does at least one of these:
// Accepts another function as an argument
// Returns a function

// For now, we'll focus on accepting a function as an argument, because you already understand callbacks.

// Example
// function runTest(callback) {
//     callback();
// }
// runTest(() => {
//     console.log("Test executed");
// });

// Here:
// runTest() → Higher-Order Function
// callback → parameter that receives a function
// () => { console.log("Test executed"); } → callback function

// Why is runTest a Higher-Order Function?
// Because it accepts a function as an argument.

// 🧠 Connection with what you already learned

// You learned:
// A callback is a function passed to another function.

// Now add this:
// A function that receives that callback is called a Higher-Order Function.

// So:
// Callback
//    ↓
// A function passed into another function
// and
// Higher-Order Function
//    ↓
// The function that receives/works with that function

// QA Example 🧪
// function executeTest(testFunction) {
//     testFunction();
// }
// executeTest(() => {
//     console.log("Login test executed");
// });
// Here:
// executeTest → Higher-Order Function
// testFunction → parameter
// arrow function → Callback


// 🎯 Your Turn
// Q1
// Is runTest a Higher-Order Function? Why?
// function runTest(callback) {
//     callback();
// }
// runTest(() => {
//     console.log("API test");
// });

//yes, A runTest function that receives that callback that's reson this is Higher Order Funcation.

// Q2
// Identify:
// function execute(task) {
//     task();
// }
// Higher-Order Function =
// Parameter =

//Answer
// Higher-Order Function = execute
// Parameter = task

// Q3
// Which one is the callback function?
// function run(test) {
//     test();
// }
// run(() => {
//     console.log("Login test");
// });

// answer : arrow funcation

// Q4 — QA Coding 🧪
// Create a Higher-Order Function:
// runTest(testFunction)
// It should execute the function passed to it.
// Then pass this callback:
// () => {
//     console.log("Regression test passed");
// }
// Send Q1–Q4. 🚀

//program 
function runTest(testFunction) {
    testFunction();
}
runTest(() => {
    console.log("Regression test passed");
})


// 🔥 Challooo! Excellent — Q1 to Q4 are all correct.

// ✅ Q1 — 1/1

// Your explanation is correct:

// runTest receives a callback, so runTest is a Higher-Order Function.

// Exactly. 👍

// ✅ Q2 — 1/1
// Higher-Order Function = execute
// Parameter = task

// Correct.

// ✅ Q3 — 1/1

// The arrow function is the callback:

// () => {
//     console.log("Login test");
// }

// Correct. 👍

// ✅ Q4 — 1/1

// Your code is correct:

// function runTest(testFunction) {
//     testFunction();
// }

// runTest(() => {
//     console.log("Regression test passed");
// });

// Output:

// Regression test passed

// Perfect. 💯

// 🏆 Score: 4/4 — 100%

// And you've now understood the relationship:

// Higher-Order Function
//         ↓
// receives a function
//         ↓
// Callback Function
//         ↓
// gets executed
// 🔑 Interview-ready definition

// A Higher-Order Function is a function that accepts another function as an argument or returns a function.

// You've already learned the first case: accepting a function.

// Next, we'll learn the second case: a function returning another function. That's the last important HOF concept before we move into practical HOF patterns like forEach, map, filter, etc. 🚀


//-----------------

// Challooo 😎🔥 Let's learn the second type of Higher-Order Function.

//*************************************
// 📘 HOF — Returning a Function
//*************************************

// We already know:
// Type 1 — Function receives another function
// function runTest(callback) {
//     callback();
// }

// Now:
// Type 2 — Function returns another function

//     Example:
//     function createGreeting() {
//     return function () {
//         console.log("Hello QA");
//     };
// }
// let greet = createGreeting();
// greet();

// Output:
// Hello QA


// 🧠 Let's trace it slowly
// When we do:
//     let greet = createGreeting();
// createGreeting() returns this function:
//     function() {
//     console.log("Hello QA");
// }
// So now greet contains a function.
// Then:
// greet();

// executes that returned function.

// Flow
// createGreeting()
//       ↓
// returns a function
//       ↓
// greet stores that function
//       ↓
// greet()
//       ↓
// Hello QA

// Another simple example
// function createTest() {
//     return function () {
//         console.log("Test executed");
//     };
// }
// const test = createTest();
// test();

// Here:
// createTest → returns a function
//     test       → stores the returned function
//     test()     → executes it

// So createTest is a Higher - Order Function because it returns a function.

// 🎯 Your Turn
// Q1
// What is the output ?
//     function createMessage() {
//         return function () {
//             console.log("Hello");
//         };
//     }
// let message = createMessage();
// message();

// output : Hello

// Q2
// What is stored in test ?
//     function createTest() {
//         return function () {
//             console.log("Test Passed");
//         };
//     }
// let test = createTest();

// Is test:
// A string ?
// A number ?
// A function?

//Answer : A function.

// Q3
// Why is createTest() a Higher - Order Function ?
//     function createTest() {
//         return function () {
//             console.log("Test Passed");
//         };
//     }

// yes createtest() is the HighOrder Funcation beacuse,  createtest () is providing the return function.

// Q4 — Coding 💻
// Create a function:
//     createLoginTest()
// It should return a function that prints:
// Login test executed
// Then:
// Store the returned function in loginTest
// Call loginTest()
// Send Q1–Q4. 🚀

function createLoginTest() {
    return function () {
        console.log("Login test executed");
    }
}

let loginTest = createLoginTest();
loginTest();

// 🔥 Excellent! Q1–Q4 are all correct.

// ✅ Q1 — 1/1

// Output:

// Hello

// Correct. The returned function is stored in message, and then message() executes it.

// ✅ Q2 — 1/1

// test stores a:

// Function ✅

// Exactly.

// ✅ Q3 — 1/1

// Your explanation is correct. 👍

// More interview-friendly wording:

// createTest() is a Higher-Order Function because it returns another function.

// ✅ Q4 — 1/1

// Perfect code:

// function createLoginTest() {
//     return function () {
//         console.log("Login test executed");
//     };
// }

// let loginTest = createLoginTest();

// loginTest();

// Output:

// Login test executed

// Exactly right. 💯

// 🏆 Score: 4/4 — 100%

// You now understand both types of Higher-Order Functions:

// 1️⃣ Receives a function
// function runTest(callback) {
//     callback();
// }
// 2️⃣ Returns a function
// function createTest() {
//     return function () {
//         console.log("Test Passed");
//     };
// }
// 🔑 Interview answer

// If asked:

// What is a Higher-Order Function?

// You can say:

// A Higher-Order Function is a function that either accepts another function as an argument or returns another function.

// 🔥 That's a solid answer.
// Next, we'll move into practical Higher-Order Functions, starting with forEach(). This is where you'll start seeing HOFs used heavily with arrays and test data.

