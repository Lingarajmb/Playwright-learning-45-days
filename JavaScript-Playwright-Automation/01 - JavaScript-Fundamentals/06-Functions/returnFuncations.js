// return Statement
// This is very important for automation.

// Compare:
// function add(a, b) {
//     console.log(a + b);
// }
// versus:
// function add(a, b) {
//     return a + b;
// }

// With return, the function sends the result back, so we can store it:
// let result = add(10, 20);
// console.log(result);
// Output:
// 30
// Think of it like:
// Function → does work → returns result → we can use that result somewhere else.
// We'll practice this next. 💪


// 📘 Functions — return
// 1️⃣ Without return
// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 20);
// The function prints 30, but it doesn't give the value back to us.

// 2️⃣ With return
// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);
// Output:
// 30
// Here:
// return a + b;
// means:
// "Calculate the value and send it back to whoever called the function."
// So:
// let result = add(10, 20);

// means the returned 30 gets stored in result.

// 🧠 Important difference
// console.log()	return
// Displays something	Sends a value back
// Mainly for output/debugging	Used to reuse the result
// Doesn't give the value to the caller	Gives the value to the caller

// For automation, return is extremely useful because functions often calculate or retrieve something and then another part of the test uses that result.
// 🎯 Your Turn

// Q1
// What is the output?
// function add(a, b) {
//     return a + b;
// }
// let result = add(5, 10);
// console.log(result);

//output : 15

// Q2
// What value is stored in result?
// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(4, 5);

// 20 value is stored in result

// Q3
// What is the difference between these two?
// function test1() {
//     console.log("Hello");
// }
// and
// function test2() {
//     return "Hello";
// }


// function test1() {
//     console.log("Hello");
// } // this will print the output as Hello, and we can't use this funcation else where
// and
// function test2() {
//     return "Hello";
// }// this will return the value hello but prints as of this bit of code. and we can use the return value by storing in the new varible. we can use the elsewhere

// Q4 — Write code 💻
// Create:
// calculateTotal(price, quantity)
// It should return the total instead of printing it.
// Then:
// let total = calculateTotal(100, 3);
// console.log(total);

//Program

// function calculateTotal(price, quantity) {
//     return price * quantity;
// }
// let total = calculateTotal(100, 3);
// console.log(total);

// Send me Q1–Q4. 🚀

// Excellent work! Q1–Q4 are correct. You're getting the key idea of return.

// ✅ Q1 — 1/1
// return a + b;

// 5 + 10 = 15

// Output = 15 ✅

// ✅ Q2 — 1/1
// let result = multiply(4, 5);

// The function returns:

// 20

// So:

// result = 20 ✅

// ⚠️ Q3 — 1/1, with one small clarification

// Your main understanding is correct.

// console.log()
// function test1() {
//     console.log("Hello");
// }

// This prints "Hello" to the console.

// But your statement:

// "we can't use this function elsewhere"

// is slightly incorrect.

// We can call the function elsewhere, but it doesn't return the value for us to store/use.

// For example:

// function test1() {
//     console.log("Hello");
// }

// let result = test1();

// console.log(result);

// Output:

// Hello
// undefined

// Because test1() doesn't return anything.

// return
// function test2() {
//     return "Hello";
// }

// let result = test2();

// console.log(result);

// Output:

// Hello

// Here "Hello" is returned and can be stored in result.

// 🧠 Remember this

// console.log() = show the value
// return = give the value back

// That's the important difference. 👍

// ✅ Q4 — 1/1

// Perfect:

// function calculateTotal(price, quantity) {
//     return price * quantity;
// }

// let total = calculateTotal(100, 3);

// console.log(total);

// Output:

// 300

// Exactly what we wanted. 💯

// 🏆 Score: 4/4

// You now understand:

// Function declaration ✅
// Function call ✅
// Parameters ✅
// Arguments ✅
// Multiple parameters ✅
// return ✅
// Difference between console.log() and return ✅
// One important interview sentence

// If an interviewer asks "What is return in JavaScript?", you can say:

// return sends a value from a function back to the caller, and that value can be stored or used elsewhere.

// That's a good interview-ready answer. 🚀

// Next small topic: Function Scope + return behavior

// We'll understand what happens when code comes after return, and why it doesn't execute.

//-----------------------------------------------------------------------------------------

// Perfect 👍 Let's continue.

// 📘 Functions — return behavior
// There is one very important rule:
// Once JavaScript reaches return, the function immediately stops.
// Example:
// function test() {
//     console.log("Step 1");

//     return "Done";

//     console.log("Step 2");
// }
// let result = test();
// console.log(result);

// Output:
// Step 1
// Done

// Step 2 never executes because the function already returned.

// Think of it like this:
// Function starts
//       ↓
// Do some work
//       ↓
// return
//       ↓
// Function STOPS ❌


// 🎯 Your Turn
// Q1
// What is the output?
// function test() {
//     console.log("A");
//     return "B";
//     console.log("C");
// }
// test();

//Output :A, B

// Q2
//What is stored in result?
// function calculate() {
//     return 50;
// }
// let result = calculate();

// 50

// Q3
// Will "Hello" print? Why?
// function test() {
//     return "Done";
//     console.log("Hello");
// }
// test();

//No, when return came the funcation will immediatly stops.


// Q4 — Small coding challenge 💻
// Create a function:
// checkNumber(number)

// Requirements:
// If number is greater than 0, return "Positive"
// Otherwise, return "Not Positive"
// Call it with:
// checkNumber(-5)
// Store the returned value in a variable and print it.
// Don't worry about the previous topics—we're still within Functions. Send Q1–Q4 and I'll check them. 🚀

function checkNumber(number) {
    if (number > 0) {
        console.log("Positive")
    }
    return "Not Positive";
}
let res = checkNumber(-5)
console.log(res); // need small change check below by chatgpt 


// 🔥 Good job! Q1–Q3 are completely correct. Q4 has one important issue.

// ✅ Q1 — 1/1

// Output:

// A
// B

// Correct. return "B" stops the function, so "C" doesn't execute.

// ✅ Q2 — 1/1
// let result = calculate();

// result stores:

// 50

// Correct. 👍

// ✅ Q3 — 1/1

// Correct:

// No, "Hello" will not print because when return executes, the function immediately stops.

// Perfect. 💯

// ⚠️ Q4 — Almost correct

// You wrote:

// function checkNumber(number) {
//     if (number > 0) {
//         console.log("Positive")
//     }

//     return "Not Positive";
// }

// let res = checkNumber(-5)

// console.log(res);

// For -5, this works and prints:

// Not Positive

// But the requirement was:

// If number > 0 → return "Positive"
// Otherwise → return "Not Positive"

// Your code prints "Positive" instead of returning it.

// ❌ Your version
// if (number > 0) {
//     console.log("Positive")
// }

// return "Not Positive";
// ✅ Correct version
// function checkNumber(number) {
//     if (number > 0) {
//         return "Positive";
//     } else {
//         return "Not Positive";
//     }
// }

// let res = checkNumber(-5);

// console.log(res);

// Output:

// Not Positive

// And if we do:

// let res = checkNumber(10);
// console.log(res);

// Output:

// Positive
// 🧠 Key lesson

// When the requirement says "return", don't use console.log() for that result.

// console.log() → displays
// return        → sends value back
// 🏆 Score: 3.5 / 4

// Very good. Your understanding of return is solid. 💪

// Next, we'll learn Function Expressions, then we'll move toward callback basics, which is important for Playwright.


//---------------------------------------------------------------------

// 📘 Functions — Function Expression

// So far, we learned Function Declaration:
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));
// There is another way to create a function: Function Expression.

// 1️⃣ Function Declaration
// function add(a, b) {
//     return a + b;
// }
// Here, add is the function name.

// 2️⃣ Function Expression
// const add = function(a, b) {
//     return a + b;
// };
// console.log(add(10, 20));
// Here:
// const add       → variable
// function(a, b)  → function
// The function is assigned to the variable add.

// Think of it like:
// Function Expression
//        function
//           ↓
//      +----------+
//      | a + b    |
//      +----------+
//           ↓
//        stored in
//           ↓
//         add
// Then we call it:
// add(10, 20);

// 🧪 QA Example
// const validateStatus = function(statusCode) {
//     if (statusCode === 200) {
//         return "PASS";
//     } else {
//         return "FAIL";
//     }
// };
// let result = validateStatus(200);
// console.log(result);
// Output:
// PASS
// This style is common in JavaScript, and understanding it will help when we reach callbacks and Playwright.

// 🎯 Your Turn
// Q1
// What is the output?
// const greet = function () {
//     console.log("Hello QA");
// };
// greet();

//Output : "Hello QA"

// Q2
// Is this a Function Declaration or Function Expression?
// const add = function(a, b) {
//     return a + b;
// };

//Answer : Function Expression

// Q3
// What is stored in result?
// const multiply = function(a, b) {
//     return a * b;
// };
// let result = multiply(5, 6);

//Answer : 30 stored in result

// Q4 — Write code 💻
// Create a Function Expression called checkAge.
// Requirements:
// Accept age
// If age >= 18, return "Eligible"
// Otherwise return "Not Eligible"
// Call it with 20
// Store the result in a variable
// Print the result
// Send Q1–Q4. I'll check them before we continue. 🚀

//program :
const checkAge = function (age) {
    if (age >= 18) {
        return "Eligible"
    } else {
        return "Not Eligible"
    }
}
let result = checkAge(17);
console.log(result);

// Score: 4/4 — 100% 🔥
// yes, your understanding is correct:
