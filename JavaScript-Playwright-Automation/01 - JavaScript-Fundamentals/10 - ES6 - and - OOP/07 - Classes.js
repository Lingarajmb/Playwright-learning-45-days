// Absolutely, macha 🔥

// Next Concept: Classes
// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 07 - Classes.js

// The roadmap specifically includes classes, constructors, inheritance, and encapsulation under Day 9. We'll learn them one at a time, starting with Classes.

// 1. What is a Class?

// A class is a blueprint for creating objects.

// Think about a QA automation application.

// You might have many users:

// User 1
// User 2
// User 3

// They may all have similar properties:

// name
// role
// experience

// Instead of manually creating every object with repeated structure, we can define a class as a blueprint.

// 2. Basic Class Syntax
// class User {

// }

// This creates a class called User.

// We can create an object from it:

// const user1 = new User();

// Here:

// class User
//      ↓
//    blueprint
//      ↓
// new User()
//      ↓
//    object
// 3. Adding a Method

// A class can contain functions called methods.

// class User {

//     greet() {
//         console.log("Hello User");
//     }

// }

// Now:

// const user1 = new User();

// user1.greet();

// Output:

// Hello User

// Notice the method syntax:

// greet() {
//     // code
// }

// We don't write:

// function greet()

// inside a class.

// 4. Another Example
// class Calculator {

//     add(a, b) {
//         return a + b;
//     }

// }

// Create an object:

// const calculator = new Calculator();

// Call the method:

// console.log(calculator.add(10, 20));

// Output:

// 30
// 5. Why Classes Matter for Playwright

// This is where classes become important for your automation career.

// Later, when we learn Page Object Model (POM), you'll see patterns such as:

// class LoginPage {

//     async login() {
//         // login actions
//     }

// }

// And then:

// const loginPage = new LoginPage();

// So the class becomes a reusable blueprint for a page/component.

// The roadmap also specifically mentions that understanding classes and composition makes POM and fixtures easier.

// 6. Important Rule

// A class itself is a blueprint.

// class User {
//     greet() {
//         console.log("Hello");
//     }
// }

// An object is created from that blueprint:

// const user1 = new User();
// const user2 = new User();

// Both are separate objects created from the same class.

// 🧪 Practice — Classes

// Let's do one concept at a time.

// Q1
// What is the purpose of a class?
// A. To create a blueprint for objects
// B. To print output
// C. To import modules
// D. To declare only variables

// Q1 Answer : A. To create a blueprint for objects

// Q2
// Create a class called:
// Employee
// with a method:
// displayRole()
// The method should print:
// Backend Java Developer
//Q2 Answer :
// class Employee {
//     displayRole() {
//         console.log("Backend Java Developer");
//     }
// }
// const emp1 = new Employee();
// console.log(emp1.displayRole());

// Q3
// How would you create an object from this class?
// class Employee {
//     displayRole() {
//         console.log("Backend Java Developer");
//     }
// }
// Write the code.

//Q3 Answer : const emp1 = new Employee();

// Q4
// What is the output?
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
// }
// const calc = new Calculator();
// console.log(calc.add(15, 25));

//Q4 Answer ; 40


// Q5 — QA Scenario
// Create a class called:
// TestData
// with a method:
// getBrowser()
// The method should return:
// Chrome
// Then create an object and print the returned value.

//Q5 Answer :
// class TestData {

//     getBrowser() {
//         return `Chrome`;
//     }
// }

// const data1 = new TestData();

// console.log(data1.getBrowser());


// Excellent, macha 🔥 Let's evaluate all 5.

// Q1 — Purpose of a Class ✅

// Your answer:

// A. To create a blueprint for objects

// Correct. 💯

// Score: 1/1

// Q2 — Create a Class ✅

// Your code:

// class Employee {
//     displayRole() {
//         console.log("Backend Java Developer");
//     }
// }

// const emp1 = new Employee();
// console.log(emp1.displayRole());

// The class and method are completely correct.

// One small issue:

// console.log(emp1.displayRole());

// displayRole() already prints the message using console.log() and doesn't return anything.

// So this produces:

// Backend Java Developer
// undefined

// Because:

// console.log(emp1.displayRole());

// means:

// displayRole() prints "Backend Java Developer"
// The method returns undefined
// Outer console.log() prints undefined

// Better:

// const emp1 = new Employee();

// emp1.displayRole();

// Score: 0.9/1

// This is a method return/output issue, not a class concept issue.

// Q3 — Creating an Object ✅

// Your answer:

// const emp1 = new Employee();

// Perfect. 💯

// You correctly used:

// new + ClassName()

// to create an object.

// Score: 1/1

// Q4 — Output ✅

// Your answer:

// 40

// Correct. 💯

// calc.add(15, 25)

// returns:

// 40

// Score: 1/1

// Q5 — QA Scenario ✅

// Your code:

// class TestData {

//     getBrowser() {
//         return `Chrome`;
//     }
// }

// const data1 = new TestData();

// console.log(data1.getBrowser());

// Perfect. 💯

// You correctly demonstrated:

// Class
// Method
// return
// Object creation
// Method invocation
// Printing the returned value

// Output:

// Chrome

// Small note: backticks work, but since this is a simple string, this is also perfectly fine:

// return "Chrome";

// Score: 1/1

// 🏆 Final Score
// Question	Score
// Q1	1/1
// Q2	0.9/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Total	4.9/5 — 9.8/10
// 🔥 Classes = Strong understanding

// Your only issue was the difference between:

// console.log("something");

// and:

// return "something";

// Remember:

// console.log() → displays a value

// return → sends a value back to the caller

// For example:

// displayRole() {
//     console.log("Backend Java Developer");
// }

// vs.

// getBrowser() {
//     return "Chrome";
// }

// You've got the Class concept clearly. ✅

// Day 9 progress
// ✅ Arrow Functions
// ✅ Destructuring
// ✅ Spread / Rest
// ✅ Modules Preview
// ✅ Classes
// ⏭️ Constructors

// Next, we'll learn Constructors only—then practice before moving to inheritance.