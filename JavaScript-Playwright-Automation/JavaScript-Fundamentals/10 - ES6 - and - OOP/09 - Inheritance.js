// Chalooo macha 🔥

// Next Concept: Inheritance
// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 09 - Inheritance.js

// Inheritance is the next Day 9 concept in your roadmap after Classes and Constructors.

// 1. What is Inheritance?

// Inheritance allows one class to reuse properties and methods from another class.

// Think of:

// Parent Class
//      ↓
// Child Class

// The child can use functionality defined by the parent.

// 2. Basic Example
// Parent class
// class Employee {

//     work() {
//         console.log("Employee is working");
//     }
// }
// Child class
// class Developer extends Employee {

// }

// Here:

// extends

// means:

// Developer inherits from Employee.

// Now:

// const developer = new Developer();

// developer.work();

// Output:

// Employee is working

// Even though work() was defined inside Employee, the Developer object can use it.

// 3. Why extends?

// This:

// class Developer extends Employee {
// }

// means:

// Employee
//    ↓
// Developer

// Developer gets access to the methods available from Employee.

// 4. Child Can Have Its Own Methods
// class Employee {

//     work() {
//         console.log("Employee is working");
//     }
// }

// class Developer extends Employee {

//     writeCode() {
//         console.log("Developer is writing code");
//     }
// }

// Now:

// const developer = new Developer();

// developer.work();
// developer.writeCode();

// Output:

// Employee is working
// Developer is writing code

// So the child can use:

// Parent method:

// developer.work();

// Its own method:

// developer.writeCode();
// 5. Inheritance with Constructors

// This is important because you just learned constructors.

// Suppose:

// class Employee {

//     constructor(name) {
//         this.name = name;
//     }
// }

// Child class:

// class Developer extends Employee {

// }

// Then:

// const developer = new Developer("Lingaraj");

// console.log(developer.name);

// Output:

// Lingaraj

// The child class can use the parent's constructor when the child doesn't define its own constructor.

// 6. QA / Automation Example

// Imagine a common base page:

// class BasePage {

//     openPage() {
//         console.log("Opening page");
//     }
// }

// Then a Login Page can extend it:

// class LoginPage extends BasePage {

//     login() {
//         console.log("Logging in");
//     }
// }

// Now:

// const loginPage = new LoginPage();

// loginPage.openPage();
// loginPage.login();

// Output:

// Opening page
// Logging in

// This is the basic idea behind creating reusable structures in automation frameworks.

// 🧠 Remember
// extends

// Used to establish inheritance:

// class Child extends Parent {
// }
// Parent

// Provides reusable functionality:

// class Parent {
//     method() {
//     }
// }
// Child

// Can use inherited functionality:

// const child = new Child();

// child.method();
// 🧪 Practice — Inheritance
// Q1 — Concept

// What does extends do?
// A. Creates an array
// B. Imports a module
// C. Allows one class to inherit from another class
// D. Creates a constructor

// Q1 answer  : C. Allows one class to inherit from another class

// Q2 — Output
// What is the output?
// class Animal {
//     speak() {
//         console.log("Animal speaks");
//     }
// }
// class Dog extends Animal {
// }
// const dog = new Dog();
// dog.speak();

// Q2 Answer : Animal speaks


// Q3 — Create Inheritance
// Create:
// Employee
// with a method:
// work()
// that prints:
// Employee is working
// Then create:
// Developer
// that extends Employee.
// Create a Developer object and call work().

// Q3 Answer :
// class Employee {

//     work() {
//         console.log("Employee is working ");
//     }
// }
// class Developer extends Employee {

// }
// const dev1 = new Developer();
// dev1.work();


// Q4 — Parent + Child Method
// Create:
// Employee
// with:
// work()
// Then create:
// Tester extends Employee
// with its own method:
// testApplication()
// which prints:
// Tester is testing application
// Create a Tester object and call both methods.

//Q4 Answer :
// class Employee {
//     work() {
//         console.log("Employee is working ");
//     }
// }

// class Tester extends Employee {
//     testApplication() {
//         console.log("Tester is testing application");
//     }
// }

// const test1 = new Tester();

// test1.testApplication();
// test1.work();



// Q5 — QA Scenario
// Create:
// class BasePage
// with:
// openPage()
// printing:
// Opening page
// Then create:
// class LoginPage extends BasePage
// with:
// login()
// printing:
// User logged in
// Create a LoginPage object and call both methods.

// Send Q1–Q5 together. Then I'll evaluate them before we move to Encapsulation. 💪

// //Q5 Answer :
// class BasePage {
//     openPage() {
//         console.log("Opening page");
//     }
// }
// class LoginPage extends BasePage {
//     login() {

//         console.log("User logged in");
//     }
// }

// const login = new LoginPage();
// login.openPage();
// login.login();


// Excellent, macha 🔥 Let's evaluate all 5.

// Q1 — Concept ✅

// Your answer:

// C. Allows one class to inherit from another class

// Correct. 💯

// extends establishes the parent → child relationship.

// Score: 1/1

// Q2 — Output ✅

// Your answer:

// Animal speaks

// Correct. 💯

// Dog extends Animal, so the Dog object can use the inherited speak() method.

// Score: 1/1

// Q3 — Create Inheritance ✅

// Your code:

// class Employee {

//     work() {
//         console.log("Employee is working ");
//     }
// }

// class Developer extends Employee {

// }

// const dev1 = new Developer();

// dev1.work();

// Perfect. 💯

// You correctly demonstrated:

// Employee
//    ↓ extends
// Developer
//    ↓
// dev1.work()

// The extra space inside the string doesn't affect the concept.

// Score: 1/1

// Q4 — Parent + Child Method ✅

// Your code:

// class Employee {
//     work() {
//         console.log("Employee is working ");
//     }
// }

// class Tester extends Employee {
//     testApplication() {
//         console.log("Tester is testing application");
//     }
// }

// const test1 = new Tester();

// test1.testApplication();
// test1.work();

// Correct. 💯

// Your Tester object can access:

// test1.testApplication();

// ➡️ Its own method

// and:

// test1.work();

// ➡️ The inherited parent method

// Excellent understanding.

// Score: 1/1

// Q5 — QA Scenario ✅

// Your code:

// class BasePage {
//     openPage() {
//         console.log("Opening page");
//     }
// }

// class LoginPage extends BasePage {
//     login() {
//         console.log("User logged in");
//     }
// }
// const login = new LoginPage();
// login.openPage();
// login.login();

// Perfect. 💯

// Expected output:

// Opening page
// User logged in

// And this is a good automation-style example because:

// BasePage
//    ↓
// LoginPage

// LoginPage can reuse functionality from BasePage.

// Score: 1/1

// 🏆 Final Score: 10/10
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Total	5/5 — 10/10 🔥
// Inheritance = COMPLETE ✅

// You clearly understand:

// extends
//    ↓
// Child inherits Parent
//    ↓
// Child object can use inherited methods

// And you've already applied it to a Page Object-style automation example, which is exactly the kind of connection we want.

// Day 9 progress
// ✅ Arrow Functions
// ✅ Destructuring
// ✅ Spread / Rest
// ✅ Modules Preview
// ✅ Classes
// ✅ Constructors
// ✅ Inheritance
// ⏭️ Encapsulation
// ⏭️ Page-like class + reusable data model practice

// Next concept: Encapsulation. 💪