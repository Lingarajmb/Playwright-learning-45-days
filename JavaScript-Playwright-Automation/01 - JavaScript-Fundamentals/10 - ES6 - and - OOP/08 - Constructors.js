// Absolutely, macha 🔥

// Next Concept: Constructors
// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 08 - Constructors.js

// We're following Day 9 of the roadmap: after Classes comes Constructors, followed later by inheritance and encapsulation.

// 1. What is a Constructor?

// A constructor is a special method inside a class that runs automatically when an object is created.

// Example:

// class User {

//     constructor() {
//         console.log("User object created");
//     }
// }

// const user1 = new User();

// Output:

// User object created

// Notice:

// const user1 = new User();

// automatically calls:

// constructor()
// 2. Why do we use Constructors?

// The main purpose is to initialize object data when creating an object.

// For example:

// class User {

//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }
// }

// Now:

// const user1 = new User("Lingaraj", "Tester");

// The constructor receives:

// name = "Lingaraj"
// role = "Tester"

// and stores them in the object.

// 3. What does this mean?

// For now, understand this simply as:

// the current object

// Example:

// class User {

//     constructor(name) {
//         this.name = name;
//     }
// }

// When we do:

// const user1 = new User("Lingaraj");

// the object becomes conceptually:

// user1
//  └── name: "Lingaraj"

// So:

// this.name

// means:

// the name property belonging to the current object.

// 4. Constructor + Methods

// A constructor can initialize data, while methods can use that data.

// class User {

//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }

//     displayUser() {
//         console.log(this.name);
//         console.log(this.role);
//     }
// }

// Create an object:

// const user1 = new User("Lingaraj", "Backend Java Developer");

// user1.displayUser();

// Output:

// Lingaraj
// Backend Java Developer
// 5. Why this matters for Automation

// This becomes very useful when we start working with Page Object Model.

// For example, later you may see something like:

// class LoginPage {

//     constructor(page) {
//         this.page = page;
//     }
// }

// The constructor receives something and stores it on the object.

// You don't need to learn the Playwright-specific version yet. The important JavaScript concept right now is:

// constructor()
//       ↓
// receives data
//       ↓
// stores/initializes object properties
// ⚠️ Important Rules
// Rule 1

// The constructor is written as:

// constructor() {
// }
// Rule 2

// It runs automatically when using:

// new ClassName();
// Rule 3

// A class can have one constructor.

// Rule 4

// this refers to the current object.

// 🧪 Practice — Constructors
// Q1 — Concept
// What is the main purpose of a constructor?
// A. To import a module
// B. To initialize an object when it is created
// C. To destroy an object
// D. To create an array

//Q1 Answer : B. To initialize an object when it is created

// Q2 — Output
// What is the output?
// class User {
//     constructor() {
//         console.log("User created");
//     }
// }
// const user1 = new User();

//Q2 Answer : User created


// Q3 — Constructor Parameters
// Create a class called Employee.
// Its constructor should accept:
// name
// role
// and store them using this.

//Q3 Answer :

// class Employee {
//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }
// }

// Q4 — Create Object
// Using your Employee class, create:
// name = "Lingaraj"
// role = "Automation Engineer"

//Q4 Answer :
//const emp1 = new Employee("Lingaraj", "Automation Engineer");


// Q5 — Method + Constructor
// Create:
// class TestData
// The constructor should accept:
// browser
// environment
// Store both values.
// Then create an object with:
// browser = "Chrome"
// environment = "QA"
// Create a method called:
// displayConfig()
// that prints:
// Chrome
// QA

//Q5 Answer :
// class TestData {
//     constructor(browser, enviroment) {
//         this.browser = browser;
//         this.enviroment = enviroment;
//     }
//     displayConfig() {
//         console.log(this.browser);
//         console.log(this.enviroment);
//     }

// }
// const data1 = new TestData("Chrome", "QA");
// data1.displayConfig();


// Excellent, macha 🔥 Let's evaluate your constructor practice.

// Q1 — Concept ✅

// Your answer:

// B. To initialize an object when it is created

// Correct. 💯

// Score: 1/1

// Q2 — Output ✅

// Your answer:

// User created

// Correct.

// When:

// const user1 = new User();

// runs, the constructor executes automatically.

// Score: 1/1

// Q3 — Constructor Parameters ✅

// Your code:

// class Employee {
//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }
// }

// Perfect. 💯

// You correctly connected the constructor parameters to the object's properties using this.

// Score: 1/1

// Q4 — Create Object ✅

// Your answer:

// const emp1 = new Employee("Lingaraj", "Automation Engineer");

// Perfect.

// The constructor receives:

// name → "Lingaraj"
// role → "Automation Engineer"

// and stores them as:

// this.name
// this.role

// Score: 1/1

// Q5 — Method + Constructor ✅

// Your code:

// class TestData {
//     constructor(browser, enviroment) {
//         this.browser = browser;
//         this.enviroment = enviroment;
//     }

//     displayConfig() {
//         console.log(this.browser);
//         console.log(this.enviroment);
//     }
// }

// const data1 = new TestData("Chrome", "QA");

// data1.displayConfig();

// Conceptually, this is correct. 💯

// Output:

// Chrome
// QA

// You correctly used:

// constructor()
// Constructor parameters
// this
// Object creation with new
// Method
// Method invocation
// One small issue

// You wrote:

// enviroment

// The standard spelling is:

// environment

// So I'd write:

// class TestData {
//     constructor(browser, environment) {
//         this.browser = browser;
//         this.environment = environment;
//     }

//     displayConfig() {
//         console.log(this.browser);
//         console.log(this.environment);
//     }
// }

// This is a spelling issue, not a conceptual mistake.

// Score: 1/1

// 🏆 Final Score: 10/10
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Total	5/5 — 10/10 🎯
// 🔥 Constructor concept = COMPLETE

// You now understand the important relationship:

// class
//   ↓
// constructor()
//   ↓
// new ClassName(arguments)
//   ↓
// object properties initialized

// And especially:

// this.browser = browser;

// means:

// Store the constructor's browser value in the current object's browser property.

// Day 9 progress
// ✅ Arrow Functions
// ✅ Destructuring
// ✅ Spread / Rest
// ✅ Modules Preview
// ✅ Classes
// ✅ Constructors
// ⏭️ Inheritance
// ⏭️ Encapsulation
// ⏭️ Page-like class + reusable data model practice

// Next concept: Inheritance.