// Day 5 — Functions
// Topic 2: Multiple Parameters
// A function can accept more than one parameter.
// Example
// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 20);
// Here:
// a → parameter
// b → parameter
// 10 → argument for a
// 20 → argument for b

// Output:
// 30

// QA Example 🧪
// function validateUser(username, role) {
//     console.log("User: " + username);
//     console.log("Role: " + role);
// }
// validateUser("Lingaraj", "QA");
// Output:
// User: Lingaraj
// Role: QA

// So the basic pattern is:
// function functionName(parameter1, parameter2) {
//     // code
// }
// functionName(argument1, argument2);
// 🎯 Your Turn — Don't look for answers yet 😄


// Q1
// What is the output?
// function multiply(a, b) {
//     console.log(a * b);
// }
// multiply(5, 4);

//output : 20

// Q2
// Identify parameters and arguments:
// function login(username, password) {
//     console.log(username);
// }
// login("admin", "12345");

//Answer : parameters are username, password & arguments are "admin", "12345"

// Q3
// What is the output?
// function checkStatus(statusCode, message) {
//     console.log(statusCode + " " + message);
// }
// checkStatus(200, "Success");

//output :200 Success

// Q4 — Write code 💻
// Create a function:
// calculateTotal(price, quantity)
// It should print:
// Total = price × quantity
// Call it with:
// price = 100
// quantity = 3

function calculateTotal(price, quantity) {
    console.log("Total = " + price * quantity)
}
calculateTotal(100, 3);



// Send me Q1–Q4. I'll check them, then we'll learn the return statement. 🚀