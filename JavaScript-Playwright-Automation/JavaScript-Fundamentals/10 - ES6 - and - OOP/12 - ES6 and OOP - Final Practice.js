// 🧪 Day 9 — ES6+ & OOP Final Test
// Don't refer back to the previous examples while answering.
// Write your own answers/code.

// Part A — Concepts

// Q1 — Arrow Functions
// What is the difference between:
// const add = (a, b) => a + b;
// and:
// const add = (a, b) => {
//     return a + b;
// };

//Q1 Answer : Both do the same thing and both work correctly. The difference is in how the return happens: const add = (a, b) => a + b; — this is an implicit return. No {} braces and no return keyword needed — when an arrow function body is a single expression, JS automatically returns its value.
//const add = (a, b) => { return a + b; }; — this is an explicit return. Because {} braces are used, JS treats it as a full function body, so you must write return yourself, or it returns undefined.

// Q2 — Destructuring
// What will this output?
// const tools = ["Playwright", "Postman", "Jira"];
// const [first, second, ...remaining] = tools;
// console.log(first);
// console.log(second);
// console.log(remaining);

//Q2 Answer : Playwright and Postman and ["Jira"]

// Q3 — Spread vs Rest
// Explain the difference between Spread and Rest in your own words and give one example of each.

//Q3 Answer : Spread expands values out of a collection, while rest gathers values into a collection — same ... syntax, opposite direction.

// Q4 — Modules
// What is the difference between:
// export function add() {}
// and:
// export default function add() {}

//Q4 Answer :
// Named export → { } during import
// // Default export → no { }
// export function add() {} is a named export — you must import it with curly braces and the exact name: import { add } from "./file.js". A file can have many named exports.
// export default function add() {} is a default export — you import it without braces and can rename it freely: import myAdd from "./file.js". A file can have only one default export.

// Part B — Classes & OOP

// Q5 — Class
// Create a class called:
// Employee
// with a method:
// displayRole()
// that prints:
// Automation Engineer
// Create an object and call the method.

//Q5 Answer :
// class Employee {

//     displayRole() {
//         console.log("Automation Engineer");
//     }
// }
// const emp1 = new Employee();
// emp1.displayRole();

// Q6 — Constructor
// Create a class:
// Employee
// whose constructor accepts:
// name
// experience
// Store both using this.
// Create an object:
// name = "Lingaraj"
// experience = 4


//Q6 Answer :
// class Employee {
//     constructor(name, experience) {
//         this.name = name;
//         this.experience = experience;
//     }
// }

// const emp1 = new Employee("Lingaraj", 4);

// console.log(emp1.name);
// console.log(emp1.experience);



// Q7 — Inheritance
// Create:
// Employee
// with:
// work()
// printing:
// Employee is working
// Then create:
// AutomationEngineer extends Employee
// with its own method:
// automate()
// printing:
// Writing automation tests
// Create an object and call both methods.

// //Q7 Answer :
// class Employee {
//     work() {
//         console.log("Employee is working");
//     }
// }

// class AutomationEngineer extends Employee {

//     automate() {
//         console.log("Writing automation tests");
//     }
// }

// const automationEngineer = new AutomationEngineer();

// automationEngineer.automate();
// automationEngineer.work();

// Q8 — Encapsulation
// Create a class:
// Credentials
// with a private field:
// #password
// The constructor should accept the password.
// Create:
// getPassword()
// to return the private password.
// Then create an object and retrieve the password through the method.

//Q8 Answer :

// class Credentials {
//     #password;

//     constructor(password) {
//         this.#password = password;
//     }

//     getPassword() {
//         return this.#password;
//     }
// }

// const credentials = new Credentials("Abc@123");
// console.log(credentials.getPassword());




// Part C — Automation Scenario 🔥

// Q9 — Page-like Class + Data Model
// Create these two classes.
// LoginData

// Constructor accepts:
// username
// password

// LoginPage

// Methods:
// open()
// login(username, password)

// Expected output:
// Opening Login Page
// Logging in as testuser
// Password provided

// Create:
// username = "testuser"
// password = "Test@123"
// Then use the LoginData object when calling the LoginPage method.

// //Q9 Answer :

// class LoginData {

//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
// }

// const loginData = new LoginData("testuser", "Test@123");

// class LoginPage {
//     open() {
//         console.log("Opening Login Page");
//     }
//     login(username, password) {
//         console.log(`Logging in as ${username}`);
//         console.log(`Password provided`);
//     }
// }

// const loginPage = new LoginPage();

// loginPage.open();
// loginPage.login(loginData.username, loginData.password);



// Part D — Interview Questions

// Q10
// In your own words:
// What is a class, and why would classes be useful in Playwright automation?

//Q10 Answer :
//A class is a blueprint for creating objects that bundle related data and behavior together. In Playwright automation, it's useful because it lets you build Page Object Model structures — each page (Login, Dashboard, etc.) becomes its own class with its own methods, making test code reusable, organized, and easy to maintain (fix a locator once in the class instead of in every test file).


// Q11
// What is the purpose of:
// constructor()
// and:
// this
// ?

//Q11 Answer : constructor() runs automatically when you create an object (new ClassName()) and sets up its initial data. this refers to the current object, letting you attach and access that data on it.

// Q12
// What does this mean?
// class LoginPage extends BasePage
// Explain it in simple words.

//Q12 Answer : It means LoginPage inherits everything from BasePage — all its methods and properties become available on LoginPage too, without rewriting them.


// Q13
// What is encapsulation, and why might we want to keep some data private?

//Q13 Answer :Encapsulation = bundling data with the methods that use it, and hiding internal details from outside code. We keep data private (#field) so it can't be directly changed or accessed from outside — access only happens through controlled methods you define (like getPassword()).


// Q14 — Practical
// Suppose you have:
// const commonData = {
//     browser: "Chrome",
//     environment: "QA"
// };
// Create a new object called firefoxData using spread so that:
// console.log(firefoxData.browser);
// prints:
// Firefox

//Q14 Answer :
// const commonData = {
//     browser: "Chrome",
//     environment: "QA"
// };

// const firefoxData = {
//     ...commonData,
//     browser: "Firefox"
// }
// console.log(firefoxData.browser);
// console.log(firefoxData);


// Q15 — Final Challenge 💪
// Without looking at previous examples, write a small reusable automation-style structure containing:
// A data class
// A page-like class
// A constructor
// At least one method
// An object created using new
// Data passed from the data object into the page-like class
// Use any sensible names and values.
// 🎯 Scoring
// I'll evaluate:
// Concept understanding
// Syntax
// Logic
// Output prediction
// Automation relevance
// Interview explanation
// Then I'll give you:
// Day 9 Final Score / 100 + individual mistakes + corrected concepts + Day 9 completion status.
// Take your time and send Q1–Q15 together. 💪🔥


// //Q15 Answer :
// class LoginData {

//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
// }

// const loginData = new LoginData("Lingaraj102", "ABCd1234@");

// class LoginPage {

//     kelasa() {
//         console.log("Evath kelasake bandiniriiieeee");
//     }
//     credentials(username) {
//         console.log(`Nandh name ${username}`);
//     }
//     password(password) {
//         console.log("Password : Ning yak bek adu");
//     }
//     kelasaDone() {
//         console.log("Ayth paaa nan kelasa, Manige honteya naa");
//     }
// }

// const login = new LoginPage();

// login.kelasa();
// login.credentials(loginData.username);
// login.password(loginData.password);
// login.kelasaDone();



///---------Validation---------//

// Macha 🔥 this is a strong final test. You clearly retained the concepts rather than just copying patterns.

// 🏆 Day 9 Final Evaluation
// Part A — Concepts
// Q1 — Arrow Functions ✅

// Your explanation is excellent.

// You correctly identified:

// => expression → implicit return
// {} body → explicit return required
// Without return inside a block body → undefined

// Score: 1/1

// Q2 — Destructuring ⚠️

// You answered:

// Playwright and Postman and ["Jira"]

// Conceptually correct, but the question asked for the three separate outputs.

// Actual output:

// Playwright
// Postman
// ["Jira"]

// Your understanding is correct.

// Score: 0.9/1

// Q3 — Spread vs Rest ⚠️

// Your answer:

// Spread expands values out of a collection, while rest gathers values into a collection — same ... syntax, opposite direction.

// Excellent definition. 👍

// But the question specifically asked for one example of each, and you didn't provide examples.

// Score: 0.8/1

// A complete answer would be:

// const copy = [...tools];       // Spread
// const [first, ...remaining] = tools; // Rest
// Q4 — Modules ✅

// Excellent.

// You correctly explained:

// export function add() {}

// → named export

// and:

// export default function add() {}

// → default export.

// You also correctly explained the import syntax and that a module can have multiple named exports but only one default export.

// Score: 1/1

// Part B — Classes & OOP
// Q5 — Class ✅

// Perfect:

// class Employee {

//     displayRole() {
//         console.log("Automation Engineer");
//     }
// }

// const emp1 = new Employee();
// emp1.displayRole();

// Score: 1/1

// Q6 — Constructor ✅

// Perfect.

// constructor(name, experience) {
//     this.name = name;
//     this.experience = experience;
// }

// And:

// const emp1 = new Employee("Lingaraj", 4);

// Correct.

// Score: 1/1

// Q7 — Inheritance ✅

// Excellent.

// class AutomationEngineer extends Employee

// correctly establishes inheritance.

// You also called both:

// automationEngineer.automate();
// automationEngineer.work();

// So you demonstrated both the child method and inherited parent method.

// Score: 1/1

// Q8 — Encapsulation ✅

// Perfect implementation:

// #password;

// with:

// getPassword() {
//     return this.#password;
// }

// You correctly demonstrated controlled access to a private field.

// Score: 1/1

// Part C — Automation Scenario
// Q9 — Page-like Class + Data Model ✅

// Very good.

// You created:

// class LoginData

// with a constructor and then:

// const loginData = new LoginData("testuser", "Test@123");

// You also created:

// class LoginPage

// and passed:

// loginData.username
// loginData.password

// into the page method.

// Expected output is correctly achieved:

// Opening Login Page
// Logging in as testuser
// Password provided

// Score: 1/1

// Part D — Interview Questions
// Q10 — Class + Playwright ✅

// This is a strong interview answer.

// You explained:

// Class = blueprint
// Data + behavior
// Page Object Model
// Reusability
// Maintainability

// Especially this point:

// "fix a locator once in the class instead of in every test file"

// That's a practical automation explanation.

// Score: 1/1

// Q11 — Constructor + this ✅

// Correct.

// You explained:

// constructor() runs when an object is created with new
// this refers to the current object
// this allows us to store/access object data

// Score: 1/1

// Q12 — Inheritance ✅

// Correct.

// Your explanation:

// LoginPage inherits everything from BasePage...

// Good understanding of the parent/child relationship.

// Score: 1/1

// Q13 — Encapsulation ✅

// Excellent.

// You correctly described:

// Bundling data and behavior
// Hiding internal details
// Private #field
// Controlled access through methods

// Score: 1/1

// Q14 — Object Spread ✅

// Perfect:

// const firefoxData = {
//     ...commonData,
//     browser: "Firefox"
// };

// Output:

// Firefox

// This demonstrates the important override-after-spread pattern.

// Score: 1/1

// Q15 — Final Challenge 🔥

// And macha 😂 your method names:

// kelasa()
// credentials()
// password()
// kelasaDone()

// are hilarious, but let's evaluate the JavaScript, not the names. 😄

// Your implementation:

// class LoginData {

//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
// }

// ✅ Data class

// const loginData = new LoginData("Lingaraj102", "ABCd1234@");

// ✅ Object created using new

// Then:

// class LoginPage {

// ✅ Page-like class

// You have multiple methods:

// kelasa()
// credentials(username)
// password(password)
// kelasaDone()

// ✅ Methods

// And most importantly:

// login.credentials(loginData.username);
// login.password(loginData.password);

// ✅ Data is passed from the data object into the page-like class.

// So you successfully satisfied every requirement of Q15.

// Score: 1/1

// 🏆 DAY 9 FINAL SCORE

// Let's calculate:

// Question	Score
// Q1	1.0
// Q2	0.9
// Q3	0.8
// Q4	1.0
// Q5	1.0
// Q6	1.0
// Q7	1.0
// Q8	1.0
// Q9	1.0
// Q10	1.0
// Q11	1.0
// Q12	1.0
// Q13	1.0
// Q14	1.0
// Q15	1.0
// TOTAL	14.7 / 15
// 🎯 Final: 98%

// That's an excellent result.

// Your only deductions were because:

// Q2: You gave the correct values but didn't present the three outputs separately.

// Q3: Your Spread/Rest explanation was correct, but you didn't provide the requested examples.

// Neither indicates a conceptual problem.

// ✅ DAY 9 — COMPLETE

// According to the roadmap, Day 9 covers ES6+ and Classes/OOP, including Arrow Functions, Destructuring, Spread/Rest, Modules Preview, Classes, Constructors, Inheritance, Encapsulation, followed by the Page-like class and reusable data-model practice.

// You've completed the full scope:

// ✅ Arrow Functions
// ✅ Destructuring
// ✅ Spread
// ✅ Rest
// ✅ Modules Preview
// ✅ Classes
// ✅ Constructors
// ✅ Inheritance
// ✅ Encapsulation
// ✅ Page-like class
// ✅ Reusable data model
// ✅ Final mixed test — 98%
// One thing to fix before Day 10

// Your final file currently contains all the answers and practice. Keep it as:

// 10 - ES6 - and - OOP/
// └── 12 - ES6 and OOP - Final Practice.js

// Your Day 9 chapter is now learning-complete. 🔥

// The next roadmap section is Day 10 — Async JavaScript + JSON + Error Handling.

// We should update the tracker for Day 9 before starting Day 10, following your tracker workflow.