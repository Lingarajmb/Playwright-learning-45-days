// 1️⃣ Function Declaration
// What is a function?
// A function is a reusable block of code designed to perform a specific task.
// For example, imagine we repeatedly need to print:
// console.log("Login successful");
// Instead of writing it again and again, we can create a function:
//     function loginMessage() {
//     console.log("Login successful");
// }
// This is called a function declaration.

// But there's an important point 👇
// Creating the function doesn't execute it.
// We need to call the function:
//     loginMessage();
// So the complete code is:
// function loginMessage() {
//     console.log("Login successful");
// }
// loginMessage();
// Output:
// Login successful

// 🧠 Think of it like this
// CREATE
//    ↓
// function loginMessage() {
//     ...
// }
// CALL
//    ↓
// loginMessage()
//    ↓
// EXECUTE
// You can call it multiple times:
// function loginMessage() {
//     console.log("Login successful");
// }
// loginMessage();
// loginMessage();
// loginMessage();

// Output:
// Login successful
// Login successful
// Login successful

// That's the main benefit:
// Write the logic once → reuse it whenever needed.
// And this concept becomes very important in Playwright, because we'll create reusable functions and eventually methods inside Page Objects.

// 🎯 First Practice
// Don't write any code yet.

// Q1
// What will this output ?
//     function sayHello() {
//         console.log("Hello QA");
//     }
// sayHello();
// sayHello();

//output :  Hello QA , Hello QA

// Q2
// What will this output ?
//     function testLogin() {
//         console.log("Testing Login");
//     }
// console.log("Start");
// testLogin();
// console.log("End");

//Output : Start , Testing Login , End

// Q3 🤔
// What will happen here ?
//     function testLogin() {
//         console.log("Testing Login");
//     }
// Will "Testing Login" be printed ?
// Why or why not ?

//Output : yes this will prints the "Testing Login" when we give the  testLogin(); untill its not. why means we are not calling the fuction ryt thats why this will not print anything



//         Q4
// In your own words:
// What is the difference between creating / declaring a function and calling a function?
// creating / declaring a function is what value need to be inserted in funcation key word, And calling a function is what need to to be printed from declared funtion and where that those things will freaching and printing.


// Q1 — ✅ Correct

// Output:

// Hello QA
// Hello QA

// Because you called:

// sayHello();
// sayHello();

// twice.

// Q2 — ✅ Correct

// Output:

// Start
// Testing Login
// End

// Execution happens from top to bottom, and when JavaScript reaches:

// testLogin();

// it executes the function.

// Q3 — ⚠️ Your explanation is correct, but your first word should be No

// You said:

// yes this will print...

// Then you correctly explained:

// until we give testLogin(); it will not print anything because we are not calling the function.

// So the correct answer is:

// No, "Testing Login" will NOT be printed. ✅

// Because:

// function testLogin() {
//     console.log("Testing Login");
// }

// only declares/creates the function.

// There is no:

// testLogin();

// to call it.

// Q4 — 🟡 Concept is close; let's make it crystal clear

// Your explanation is a little mixed up.

// Think of it this way:

// Function declaration = CREATE the reusable code
// function login() {
//     console.log("Login successful");
// }

// You're saying:

// "Here is a function called login. This is what it should do."

// Function call = EXECUTE that code
// login();

// You're saying:

// "Now run the login function."

// Easy memory trick 🧠
// DECLARE → Create the recipe 📋
// CALL    → Cook the recipe 🍳

// Or:

// function login() { ... }  → CREATE
// login();                   → RUN
// 🏆 Score: 3.5/4

// Your actual understanding is good. The only issue was wording in Q3/Q4.

// One important terminology

// Don't say:

// "what value needs to be inserted in function keyword"

// Instead say:

// "A function declaration defines a reusable block of code, while a function call executes that code."

// That's a good interview-ready answer. 👍

// Next: Function Parameters & Arguments

// This is where functions become much more useful.

// For example:

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Lingaraj");

// Here name and "Lingaraj" have different roles.

// We'll learn exactly what parameter vs argument means, with QA examples.

// 2️⃣ Parameters & Arguments
// This is very important because functions become reusable when we can give them different values.
// First: Parameter
// Look at this:
// function greet(name) {
//     console.log("Hello " + name);
// }

// Here:
// name is called a parameter.
// Think: A parameter is a placeholder that receives a value.

// Second: Argument
// Now we call the function:

// greet("Lingaraj");
// Here:
// "Lingaraj" is called an argument.

// Think:
// An argument is the actual value we pass to the function.

// Easy way to remember 🧠
// Parameter → placeholder
// Argument  → actual value

// Example:
// function greet(name) {       // name = parameter
//     console.log("Hello " + name);
// }
// greet("Lingaraj");            // "Lingaraj" = argument

// Output:
// Hello Lingaraj

// 🔄 Why do we need them?
// Without parameters:
// function greetLingaraj() {
//     console.log("Hello Lingaraj");
// }
// function greetRahul() {
//     console.log("Hello Rahul");
// }
// We're creating separate functions unnecessarily.

// With a parameter:
// function greet(name) {
//     console.log("Hello " + name);
// }
// Now we can reuse it:
// greet("Lingaraj");
// greet("Rahul");
// greet("Priya");

// Output:
// Hello Lingaraj
// Hello Rahul
// Hello Priya
// One function → many values. 🔥

// 🧪 QA-style example
// Imagine we want to validate different HTTP status codes.

// function checkStatus(statusCode) {
//     if (statusCode === 200) {
//         console.log("Test passed");
//     } else {
//         console.log("Test failed");
//     }
// }

// checkStatus(200);
// checkStatus(404);
// checkStatus(500);

// Here:
// statusCode is the parameter.

// And:
// 200
// 404
// 500
// // are the arguments.
// This is exactly the kind of reusable thinking we'll use in your validateStatus utility later.

// 🎯 Your turn
// Q1
// Identify the parameter and argument:
// function greet(name) {
//     console.log("Hello " + name);
// }
// greet("Lingaraj");

// Tell me:
// Parameter =
// Argument =

//Answer :
// Parameter = name
// Argument = "Lingaraj"


// Q2
// What is the output?
// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 20);

//output : 30

// Q3
// What are the parameters and arguments?
// function login(username, password) {
//     console.log(username + " " + password);
// }
// login("admin", "12345");

//Answer : parameters are username, password And arguments are "admin", "12345"

// Q4 — Write code
// Create a function called:
// checkAge
// It should accept age as a parameter.
// If age is 18 or above:
// Eligible
// Otherwise:
// Not Eligible
// Then call it with:
// 16
// Send Q1–Q4. I'll check them before we move to multiple parameters and return. 🚀

function checkAge(age) {
    if (age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}
checkAge(16);