// Chalooo macha 🔥

// Next Concept: Encapsulation
// 📁 Exact file path

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 10 - Encapsulation.js

// This is the last OOP concept listed for Day 9 before the roadmap's Page-like class + reusable data model practice.

// 1. What is Encapsulation?

// Encapsulation means keeping data and the methods that operate on that data together inside a class, while controlling how that data can be accessed or changed.

// For example:

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     displayName() {
//         console.log(this.name);
//     }
// }

// Here, the user's data and the method that works with that data are kept together inside the User class.

// 2. Private Properties

// Modern JavaScript provides a # syntax for private class fields.

// Example:

// class User {

//     #password;

//     constructor(password) {
//         this.#password = password;
//     }
// }

// Now:

// const user = new User("Test@123");

// The password is stored internally as:

// this.#password

// But this will not work:

// console.log(user.#password);

// because #password is private.

// 3. Why Private Data is Useful

// Imagine test credentials:

// class LoginData {

//     #password;

//     constructor(username, password) {
//         this.username = username;
//         this.#password = password;
//     }
// }

// The password is kept private instead of allowing direct access from outside the class.

// This gives us better control over how sensitive/internal data is accessed.

// 4. Controlled Access Through Methods

// Instead of directly exposing the private value, a class can provide a method.

// class LoginData {

//     #password;

//     constructor(password) {
//         this.#password = password;
//     }

//     getPassword() {
//         return this.#password;
//     }
// }

// Then:

// const login = new LoginData("Test@123");

// console.log(login.getPassword());

// Output:

// Test@123

// The important point is that the outside code doesn't directly access:

// login.#password

// It uses the class's method.

// 5. QA Automation Connection

// You'll see this type of design when building reusable automation components.

// For example:

// class TestConfig {

//     #environment;

//     constructor(environment) {
//         this.#environment = environment;
//     }

//     getEnvironment() {
//         return this.#environment;
//     }
// }

// Then:

// const config = new TestConfig("QA");

// console.log(config.getEnvironment());

// This keeps the internal configuration controlled by the class.

// 🧠 Remember

// Think:

// Encapsulation
//      ↓
// Keep data + behavior together
//      ↓
// Control access to internal data

// And in modern JavaScript:

// #password

// means the field is private to the class.

// 🧪 Practice — Encapsulation
// Q1 — Concept
// What is the main idea of encapsulation?
// A. Creating multiple arrays
// B. Keeping data and related behavior together and controlling access
// C. Importing JavaScript files
// D. Creating child classes

//Q1 Answer : B. Keeping data and related behavior together and controlling access

// Q2 — Private Property
// Create a class called:
// User
// with a private property:
// #password
// The constructor should accept a password and store it in the private property.

//Q2 Answer :

// class User {
//     #password;

//     constructor(password) {
//         this.#password = password;
//     }

//     checkPassword(input) {
//         return this.#password === input;
//     }
// }

// const user = new User("Test@123");

// console.log(user.password);                 // undefined
// console.log(user.checkPassword("Test@123")); // true
// console.log(user.checkPassword("wrong"));    // false


// Q3 — Controlled Access
// Using your User class, create a method:
// getPassword()
// that returns the private password.
// Then create an object and print the password using the method.

//Q3 Answer :

// class User {
//     #password;
//     constructor(password) {
//         this.#password = password;
//     }
//     getPassword() {
//         return this.#password;
//     }

// }
// const pswd = new User("Abc@123");

// console.log(pswd.getPassword());


// Q4 — Direct Access
// // What happens here?
// class User {
//     #password = "Test@123";
// }
// const user = new User();
// console.log(user.#password);
// Will it work? Explain why.

//Q4 answer : No, it won't work — #password is a private field, so it can only be accessed from inside the class itself, not from outside code like user.#password, which causes a SyntaxError.


// Q5 — QA Scenario
// Create:
// class TestConfig
// with a private field:
// #environmen should accept the environment.
// Create:
// QA
// as the environment.
// Add:
// getEnvironment()
// to return the environment.
// Finally, create the object and print:
// QA
// Send Q1–Q5 together. I'll evaluate them one by one. 💪

//Q5 Answer :

// class TestConfig {
//     #environment;

//     constructor(environment) {
//         this.#environment = environment;
//     }

//     getEnvironment() {
//         return this.#environment;
//     }

// }
// const env = new TestConfig("QA");

// console.log(env.getEnvironment());


// Excellent, macha 🔥 Let's evaluate your Encapsulation practice.

// Q1 — Concept ✅

// Your answer:

// B. Keeping data and related behavior together and controlling access

// Correct. 💯

// Score: 1/1

// Q2 — Private Property ✅

// Your code:

// class User {

//     #password;

//     constructor(password) {
//         this.#password = password;
//     }

//     checkPassword(input) {
//         return this.#password === input;
//     }
// }

// const user = new User("Test@123");

// This is correct. You went a little beyond the question by adding checkPassword(), but that's actually a good practical example.

// One correction in your comment:

// console.log(user.password); // undefined

// This is not the same as directly accessing the private field.

// The actual private field is:

// user.#password

// and attempting that outside the class causes a SyntaxError.

// Your conceptual understanding is correct.

// Score: 1/1

// Q3 — Controlled Access ✅

// Your code:

// class User {

//     #password;

//     constructor(password) {
//         this.#password = password;
//     }

//     getPassword() {
//         return this.#password;
//     }
// }

// const pswd = new User("Abc@123");

// console.log(pswd.getPassword());

// Perfect. 💯

// You correctly implemented:

// private field
//      ↓
// #password
//      ↓
// getPassword()
//      ↓
// controlled access

// Output:

// Abc@123

// Score: 1/1

// Q4 — Direct Access ✅

// Your answer:

// No, it won't work — #password is a private field, so it can only be accessed from inside the class itself.

// Correct. 💯

// This:

// console.log(user.#password);

// is invalid outside the class and results in a SyntaxError.

// Score: 1/1

// Q5 — QA Scenario ✅

// Your code:

// class TestConfig {

//     #environment;

//     constructor(environment) {
//         this.#environment = environment;
//     }

//     getEnvironment() {
//         return this.#environment;
//     }
// }

// const env = new TestConfig("QA");

// console.log(env.getEnvironment());

// Perfect. 💯

// Output:

// QA

// You correctly used:

// Private field
// Constructor
// this
// Getter-style method
// Object creation
// Controlled access

// Score: 1/1

// 🏆 Final Score: 10/10
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Total	5/5 — 10/10 🔥
// One important distinction to remember
// user.password

// and

// user.#password

// are different.

// password is an ordinary property name.

// #password is a private class field.

// So:

// user.password

// may simply be undefined if that property doesn't exist, while:

// user.#password

// cannot be accessed from outside the class.

// 🎯 Day 9 OOP Concepts Completed

// You have now completed all the listed learning concepts:

// ✅ Arrow Functions
// ✅ Destructuring
// ✅ Spread / Rest
// ✅ Modules Preview
// ✅ Classes
// ✅ Constructors
// ✅ Inheritance
// ✅ Encapsulation

// According to the roadmap, the remaining Day 9 work is the practice/build portion: a small Page-like class and reusable data model.

// That is our next step before considering the Day 9 chapter fully complete. 💪