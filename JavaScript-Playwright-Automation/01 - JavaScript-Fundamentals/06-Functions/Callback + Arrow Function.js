
// Great 😎 Let's take the next step.

//*************************************
// 📘 Callback + Arrow Function
//*************************************


// We already know we can pass a normal function as a callback:
// function greet() {
//     console.log("Hello");
// }
// function run(callback) {
//     callback();
// }
// run(greet);
// But we can also directly pass an arrow function as the callback.

// Example
// function run(callback) {
//     callback();
// }
// run(() => {
//     console.log("Hello QA");
// });
// Output:
// Hello QA

// 🧠 What's happening?

// Look at this:
// run(() => {
//     console.log("Hello QA");
// });
// The arrow function:
// () => {
//     console.log("Hello QA");
// }
// is being passed directly to run().

// Then:
// function run(callback) {
//     callback();
// }
// callback() executes that arrow function.

// Flow:
// arrow function
//      ↓
// passed to run()
//      ↓
// stored in callback
//      ↓
// callback()
//      ↓
// arrow function executes
//      ↓
// Hello QA


// 🎯 Your Turn
// Q1
// What is the output?
// function execute(callback) {
//     callback();
// }
// execute(() => {
//     console.log("Test executed");
// });

//output : Test executed

// Q2
// What is being passed to execute() here?
// execute(() => {
//     console.log("Login test");
// });
// Choose/explain:
// A function call
// An arrow function
// A variable

//An arrow function

// Q3
// What does callback() do?
// function run(callback) {
//     callback();
// }
// run(() => {
//     console.log("API test");
// });

// executing the callback funcation

// Q4 — Your own code 💻
// Create:
// function runTest(callback)
// Inside it, execute the callback.
// Then pass this arrow function:
// () => {
//     console.log("Login test passed");
// }
// Send Q1–Q4. 🚀

//program
function runTest(callback) {
    callback();
}
runTest(() => { console.log("Login test passed") });

// Excellent! Q1–Q4 are all correct.

// ✅ Q1 — 1/1

// Output:

// Test executed

// Correct.

// ✅ Q2 — 1/1

// An arrow function ✅

// You're passing the arrow function directly to execute().

// ✅ Q3 — 1/1

// Your answer:

// executing the callback function

// Exactly right. 👍

// ✅ Q4 — 1/1

// Your code:

// function runTest(callback) {
//     callback();
// }

// runTest(() => {
//     console.log("Login test passed");
// });

// Perfect. 💯

// Output:

// Login test passed
// 🏆 Score: 4/4 — 100%

// You now understand the complete basic flow:

// Arrow function
//      ↓
// passed as callback
//      ↓
// callback parameter receives it
//      ↓
// callback()
//      ↓
// arrow function executes
// 🔥 QA/Playwright connection

// You'll see this kind of pattern frequently:

// someFunction(() => {
//     // test logic
// });

// So this callback concept is very important for Playwright.

// Next, we'll learn callbacks with parameters, where the function passing the callback can send data into it. That's the next important step. 🚀

//--------------------------------------------------------------------------------------------------------------------------------------

//*************************************
// 📘Callback with Parameters
//*************************************

// We know this:

// function runTest(callback) {
//     callback();
// }

// runTest(() => {
//     console.log("Login test passed");
// });

// Now let's make it more useful.

// The function can send a value to the callback.

//     Example
// function runTest(callback) {
//     callback("Login test passed");
// }
// runTest((message) => {
//     console.log(message);
// });
// Output:
// Login test passed

// 🧠 What happened ?
//     Look at this:
// callback("Login test passed");
// We're calling the callback and passing "Login test passed" as an argument.
// The arrow function receives it here:
// (message) => {
//     console.log(message);
// }

// So:
// "Login test passed"
//         ↓
// callback("Login test passed")
//         ↓
// message
//         ↓
// console.log(message)
// Another example
// function calculate(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }
// calculate(10, 20, (result) => {
//     console.log(result);
// });

// Output:
// 30
// Here:
// a → parameter
// b → parameter
// callback → parameter
// 10, 20 → arguments
//     (result) → callback parameter
// result → receives 30

// 🎯 Your Turn
// Q1
// What is the output ?
//     function execute(callback) {
//         callback("Test Passed");
//     }
// execute((message) => {
//         console.log(message);
//     });

// Test Passed // here i have small doubt Test Passed will store in 'message' then that will prints correct.

// Q2
// What value does message receive ?
//     function run(callback) {
//         callback(200);
//     }
// run((statusCode) => {
//         console.log(statusCode);
//     });

//200

// Q3
// Identify the callback and its parameter:
// function execute(callback) {
//     callback("Login Successful");
// }
// execute((message) => {
//     console.log(message);
// });
// Tell me:
// Callback =execute
// Callback parameter = message


//  Q4 — Coding 💻
// Create:
// function runTest(callback)
// Inside the function, pass:
// "API Test Passed"
// to the callback.
// Then use an arrow function as the callback and print the received message.
//     Challooo 😎 Send Q1–Q4! 🚀


//program 
function runTest(callback) {
    callback("API Test Passed");
}
runTest((message) => {
    console.log(message);
});


// 🔥 Challooo! Excellent work. Q1, Q2 and Q4 are fully correct. Q3 has one small correction.

// ✅ Q1 — 1/1

// Output:

// Test Passed

// And yes! Your doubt is exactly right. 👏

// This:

// callback("Test Passed");

// passes "Test Passed" into the callback.

// The callback is:

// (message) => {
//     console.log(message);
// }

// So conceptually:

// "Test Passed"
//       ↓
//    message
//       ↓
// console.log(message)
//       ↓
// Test Passed

// So yes:

// "Test Passed" is received/stored in the callback parameter message, and then console.log(message) prints it. ✅

// ✅ Q2 — 1/1

// message—well, in this example the parameter is actually called statusCode—receives:

// 200

// Correct. 👍

// callback(200);
//        ↓
// statusCode = 200
// ⚠️ Q3 — 0.5/1

// You answered:

// Callback = execute

// Small correction.

// execute is the function receiving the callback.

// The actual callback is the arrow function:

// (message) => {
//     console.log(message);
// }

// So:

// Callback = (message) => { console.log(message); }

// Callback parameter = message

// And:

// function execute(callback) {

// Here callback is the parameter that receives the arrow function.

// Think of the flow:
// execute(
//     (message) => {
//         console.log(message);
//     }
// )
//         ↓
// arrow function is passed
//         ↓
// callback receives it
//         ↓
// callback("Login Successful")
//         ↓
// message = "Login Successful"

// This distinction is important. 👍

// ✅ Q4 — 1/1

// Perfect! 💯

// function runTest(callback) {
//     callback("API Test Passed");
// }

// runTest((message) => {
//     console.log(message);
// });

// Output:

// API Test Passed

// Exactly right.

// 🏆 Score: 3.5/4

// But your callback-with-parameter concept is clear. The only thing to tighten is the terminology:

// Remember this 🔑
// function run(callback) {
//     callback(200);
// }

// run((statusCode) => {
//     console.log(statusCode);
// });
// run → function
// callback → parameter that receives the callback
// (statusCode) => {...} → callback function
// statusCode → callback's parameter
// 200 → argument passed to the callback

// You're progressing nicely. 🚀

// Next, we'll connect this with real QA-style callback usage, where we pass test data/results through callbacks.





// Challooo 😎🔥 Let's connect callbacks to a real QA-style example.

//*************************************
// 🧪 Callback with Test Result
//*************************************


// Imagine we have a function that checks an API status code.
// function checkAPI(statusCode, callback) {
//     if (statusCode === 200) {
//         callback("API Test Passed");
//     } else {
//         callback("API Test Failed");
//     }
// }
// checkAPI(200, (message) => {
//     console.log(message);
// });

// What happens ?
//     We call:
// checkAPI(200, callback);

// Inside:
// if (statusCode === 200)
// Since 200 === 200 ✅:
// callback("API Test Passed");

// The callback receives the message:
// (message) => {
//     console.log(message);
// }
// So:
// "API Test Passed"
//        ↓
// message
//        ↓
// console.log(message)
//        ↓
// API Test Passed

// If we change it to:
// checkAPI(404, (message) => {
//     console.log(message);
// });
// Output:
// API Test Failed


// 🎯 Your Turn
// Q1
// What is the output ?
// function checkAPI(statusCode, callback) {
//     if (statusCode === 200) {
//         callback("PASS");
//     } else {
//         callback("FAIL");
//     }
// }
// checkAPI(200, (result) => {
//     console.log(result);
// });

// output : PASS

// Q2
// What is the output ?
// function checkAPI(statusCode, callback) {
//     if (statusCode === 200) {
//         callback("PASS");
//     } else {
//         callback("FAIL");
//     }
// }
// checkAPI(404, (result) => {
//     console.log(result);
// });

// output : FAIL

// Q3
// In this code:
// checkAPI(200, (result) => {
//     console.log(result);
// });

// Identify:
// Callback function =
// Callback parameter =
// Argument passed to checkAPI =

//answer :
// Callback function = Arrow funcation
// Callback parameter = result
// Argument passed to checkAPI = 200

//Q4 — Coding Challenge 🧪
// Create a function:
//     validateStatus(statusCode, callback)
// Requirements:
// If statusCode === 200, pass "Test Passed" to the callback.
//     Otherwise, pass "Test Failed" to the callback.
// Then call it with:
// validateStatus(500, (message) => {
//     console.log(message);
// });
// Don't rush this one. 😄 Trace the value from 500 → condition → callback → message → output.
// Send Q1–Q4. 🚀

//Program 
function validateStatus(statusCode, callback) {
    if (statusCode === 200) {
        callback("Test Passed");
    } else {
        callback("Test Failed");
    };
};

validateStatus(500, (message) => {
    console.log(message);
});

//

// 🔥 Excellent! Q1–Q4 are all correct.

// ✅ Q1 — 1/1
// statusCode = 200
// PASS
// Correct. 👍

// ✅ Q2 — 1/1
// statusCode = 404
// Condition:
// 404 === 200 // false
// So the else executes:
// FAIL
// Correct. 💯

// ✅ Q3 — 1/1
// Your answers:
// Callback function = Arrow function
// Callback parameter = result
// Argument passed to checkAPI = 200
// Correct. 👍

// More precisely, the callback function is:
// (result) => {
//     console.log(result);
// }
// And 200 is the first argument passed to checkAPI.

// ✅ Q4 — 1/1
// Your code is correct:
// function validateStatus(statusCode, callback) {
//     if (statusCode === 200) {
//         callback("Test Passed");
//     } else {
//         callback("Test Failed");
//     }
// }
// validateStatus(500, (message) => {
//     console.log(message);
// });
// Let's trace it:
// 500
//  ↓
// statusCode = 500
//  ↓
// 500 === 200 ❌
//  ↓
// callback("Test Failed")
//  ↓
// message = "Test Failed"
//  ↓
// console.log(message)
//  ↓
// Test Failed
// Output:
// Test Failed
// Perfect. 🔥
// 🏆 Score: 4/4 — 100%

// You now understand a very important callback pattern:
// function check(data, callback) {
//     // process data
//     callback(result);
// }
// check(data, (result) => {
//     // use result
// });
// And you've correctly understood the difference between:
// Callback function → (message) => {...}
// Callback parameter → message
// Argument passed to callback → "Test Failed"
// 🚀 Next step
// We've covered the basic callback concept + parameters + QA example.
// Next we'll learn Higher-Order Functions — and you'll see that callbacks and higher-order functions are closely connected. This is an important JavaScript concept before moving deeper into Playwright.


// Challooo 😎🔥 Next topic: Higher-Order Functions.