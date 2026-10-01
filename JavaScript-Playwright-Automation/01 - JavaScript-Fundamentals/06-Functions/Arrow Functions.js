// We've completed:
// ✅ Function Declaration
// ✅ Function Call
// ✅ Parameters & Arguments
// ✅ Multiple Parameters
// ✅ return
// ✅ Function Expression

//******************************************** */
// Next Topic: Arrow Functions =>
//******************************************** */

// Arrow functions are very common in modern JavaScript and you'll see them a lot in Playwright automation.

// We'll start with the simplest possible example:
// const greet = () => {
//     console.log("Hello QA");
// };
// greet();
// This is basically another way of writing:
// function greet() {
//     console.log("Hello QA");
// }

// Don't worry about the => yet. 😄
// We'll break it down slowly.

// 🧠 First thing to understand
// () => {}

// Think:
// ()     → parameters
// =>     → arrow
// {}     → function body

// For example:
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(10, 20));
// Output:
// 30
// Here:
// a, b → parameters
// 10, 20 → arguments
// => → arrow-function syntax
// return a + b → returns the result
// 🎯 Your Turn — Q1 & Q2 only

// Let's not overload you. 😄

// Q1
// What is the output?
// const greet = () => {
//     console.log("Hello QA");
// };
// greet();

//output : Hello QA

// Q2
// Is this a normal Function Expression or an Arrow Function?
// const add = (a, b) => {
//     return a + b;
// };
// Send Q1 and Q2. I'll check them, then we'll go to the next small step. 🚀

//Arrow Function, beause we have  => this arrow-function syntax

// 🏆 Score: 2/2

// Now let's make Arrow Functions a little more interesting.

// Normal function:

// function add(a, b) {
//     return a + b;
// }

// Arrow function:

// const add = (a, b) => {
//     return a + b;
// };
// They both return the same result:
// console.log(add(10, 20));

// Output:
// 30

// 🎯 Q3
// What is the output?
// const multiply = (a, b) => {
//     return a * b;
// };
// let result = multiply(5, 4);
// console.log(result);

//output : 20

// 🎯 Q4
// Identify the parameters and arguments:
// const greet = (name, role) => {
//     return "Hello " + name + ", Role: " + role;
// };
// let message = greet("Lingaraj", "QA");

// Tell me:
// Parameters =  name, role
// Arguments = "Lingaraj", "QA"

// Send Q3 and Q4. 😎

// 🚀 Next Small Step: Arrow Function Short Syntax

// There's a shorter way to write an arrow function when it has only one expression to return.

// Normal arrow function:
// const add = (a, b) => {
//     return a + b;
// };

// We can shorten it to:
// const add = (a, b) => a + b;
// Notice:
// { }       → removed
// return    → removed
// The value is automatically returned.

// So:
// const result = add(10, 20);
// console.log(result);
// Output:
// 30

// 🧠 Important
// This:
// const add = (a, b) => a + b;
// means the same as:
// const add = (a, b) => {
//     return a + b;
// };
// Don't worry about memorizing it yet—we'll practice it. 😄

// 🎯 Your Turn
// Q5
// What is the output?
// const add = (a, b) => a + b;
// console.log(add(10, 5));

// output : 15

// Q6
// Is this valid JavaScript?
// const multiply = (a, b) => a * b;
// If yes, explain why there is no return keyword.

//Yes, this is valid Javascript, and this is in the Arrow Function Short Syntax, in Arrow Function Short Syntax {} and return function will not be manualy return those are in built.

// Q7
// Convert this into the short arrow-function syntax:
// const subtract = (a, b) => {
//     return a - b;
// };
// Send Q5–Q7. 🚀

//program 
const subtract = (a, b) => a - b;

// 🏆 Score: 3/3 — 100%


// You now understand the two arrow-function styles:
// Normal:
// const add = (a, b) => {
//     return a + b;
// };
// Short:
// const add = (a, b) => a + b;
// 🚀 One more important arrow-function case

// When there is only one parameter, parentheses are optional:
// const square = number => number * number;
// Same as:
// const square = (number) => number * number;
// But with zero or multiple parameters, parentheses are required:
// const hello = () => "Hello";
// const add = (a, b) => a + b;
// Let's practice this next. 😎

// Perfect 😎 Let's continue with one small point.

// 📘 Arrow Functions — One Parameter
// When an arrow function has only one parameter, we can remove the parentheses.

// With parentheses
// const square = (number) => number * number;
// Without parentheses
// const square = number => number * number;
// Both are exactly the same.

// For example:

// const square = number => number * number;
// console.log(square(5));
// Output: 25

// Because:
// 5 × 5 = 25

// 🧠 Remember
// 0 parameters:
// const greet = () => "Hello";
// 1 parameter:
// const greet = name => "Hello " + name;
// Parentheses are optional for one parameter.
// 2 or more parameters:
// const add = (a, b) => a + b;
// Parentheses are required.

// 🎯 Your Turn
// Q8
// What is the output?
// const double = number => number * 2;
// console.log(double(10));

//output : 20

// Q9
// Is this valid?
// const greet = name => "Hello " + name;
// If yes, why are there no parentheses around name?

// Yes valid, because for 1 parameter Parentheses is optional.

// Q10
// Convert this to the shorter syntax:
// const square = (number) => {
//     return number * number;
// };

//const square = number => number * number;

// Q11 — QA example 🧪
// Create an arrow function:
// isSuccessful(statusCode)
// It should return:
// true → if statusCode is 200
// false → otherwise
// Call it with:
// isSuccessful(200)
// Store the result in a variable and print it.
// Send Q8–Q11. 🚀

const isSuccessful = statusCode => {
    if (statusCode === 200) {
        return true;
    } else {
        return false;
    }
}
let result = isSuccessful(200);
console.log(result);

// Excellent! Q8–Q11 are all correct.

// ✅ Q8 — 1/1
// 20

// Correct: 10 × 2 = 20.

// ✅ Q9 — 1/1

// Correct. 👍

// When an arrow function has one parameter, parentheses are optional.

// ✅ Q10 — 1/1

// Perfect:

// const square = number => number * number;
// ✅ Q11 — 1/1

// Your code is completely correct:

// const isSuccessful = statusCode => {
//     if (statusCode === 200) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let result = isSuccessful(200);

// console.log(result);

// Output:

// true
// 🏆 Score: 4/4 — 100%

// And there's actually a shorter way to write your Q11:

// const isSuccessful = statusCode => statusCode === 200;

// let result = isSuccessful(200);

// console.log(result);

// Why?

// Because:

// statusCode === 200

// already produces either:

// true

// or

// false

// So we don't need:

// if (...) {
//     return true;
// } else {
//     return false;
// }

// This style will become very useful when you start writing Playwright conditions and callbacks. 🚀

// 🎯 Arrow Functions: COMPLETE ✅

// You now understand:

// => syntax
// Parameters and arguments
// Multiple parameters
// return
// Implicit return
// One-parameter syntax
// Arrow functions with conditions

// Next topic: Callback Functions — this is an important concept before we move deeper into Playwright. 💪