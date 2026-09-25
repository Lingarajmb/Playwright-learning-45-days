// Chalooo macha 😎🔥 Arrow Functions complete → next roadmap concept is Destructuring.

// 📁 Exact file path
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 02 - Destructuring.js
// 🎯 Topic 2: Destructuring

// We’ll cover only Destructuring now, in this order:

// What is Destructuring?
// Why do we use it?
// Array Destructuring
// Object Destructuring
// Default values
// Renaming variables in Object Destructuring
// QA/Playwright automation examples
// Important rules
// Complete practice set
// Evaluation + score

// We won't jump to Spread Operator until Destructuring is completed. 💯

// 1️⃣ What is Destructuring?

// Destructuring is an ES6 feature that allows us to extract values from arrays or objects and store them directly into variables.

// Without Destructuring
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };

// const name = user.name;
// const role = user.role;
// const experience = user.experience;

// console.log(name);
// console.log(role);
// console.log(experience);

// We access each property separately.

// With Destructuring
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };

// const { name, role, experience } = user;

// console.log(name);
// console.log(role);
// console.log(experience);

// Much cleaner. 👍

// 2️⃣ Array Destructuring

// For arrays, destructuring happens based on position/index.

// const tools = ["Playwright", "Postman", "Jenkins"];

// const [tool1, tool2, tool3] = tools;

// console.log(tool1);
// console.log(tool2);
// console.log(tool3);

// Output:

// Playwright
// Postman
// Jenkins

// The mapping is:

// Index 0 → tool1
// Index 1 → tool2
// Index 2 → tool3
// Important ⚠️

// Array destructuring depends on position, not variable name.

// const tools = ["Playwright", "Postman"];

// const [first, second] = tools;

// console.log(first);   // Playwright
// console.log(second);  // Postman

// You could even write:

// const [abc, xyz] = tools;

// console.log(abc); // Playwright
// console.log(xyz); // Postman

// The variable names don't matter. The positions do.

// 3️⃣ Skipping Array Values

// You can skip values using an empty comma.

// const tools = ["Playwright", "Postman", "Jenkins"];

// const [first, , third] = tools;

// console.log(first);
// console.log(third);

// Output:

// Playwright
// Jenkins

// Here:

// [first, , third]

// means:

// first → index 0
// skip  → index 1
// third → index 2
// 4️⃣ Object Destructuring

// Object destructuring works using property names.

// const employee = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };

// const { name, role, experience } = employee;

// console.log(name);
// console.log(role);
// console.log(experience);

// Output:

// Lingaraj
// QA Engineer
// 4
// Important difference

// Array:

// const [a, b] = array;

// ➡️ Based on position

// Object:

// const { name, role } = employee;

// ➡️ Based on property name

// 5️⃣ Object Destructuring with Different Variable Name

// Suppose:

// const employee = {
//     name: "Lingaraj",
//     experience: 4
// };

// We can rename the variables:

// const { name: employeeName, experience: years } = employee;

// console.log(employeeName);
// console.log(years);

// Output:

// Lingaraj
// 4

// Here:

// name: employeeName

// means:

// Take the name property and store its value in employeeName.

// 6️⃣ QA / Playwright Example

// This becomes useful when working with test data.

// const testUser = {
//     username: "testuser",
//     password: "Test@123",
//     role: "admin"
// };

// const { username, password, role } = testUser;

// console.log(username);
// console.log(password);
// console.log(role);

// Instead of repeatedly writing:

// testUser.username
// testUser.password
// testUser.role

// we can directly use:

// username
// password
// role

// This is especially useful when handling test-data objects, API responses, configuration objects, etc.

// 🧠 Remember this
// Type	Destructuring	Based on
// Array	[a, b]	Position
// Object	{name, role}	Property name
// One-line memory trick:

// Array → Position 📦
// Object → Property Name 🔑

// 📝 Your practice — don't look for answers yet 😎

// Create:
// 02 - Destructuring.js

// Q1 — Array Destructuring
//const browsers = ["Chrome", "Firefox", "Edge"];
// Extract all three values using array destructuring and print them.

// // Q1 answer :
// const browsers = ["Chrome", "Firefox", "Edge"];
// const [first, Sec, third] = browsers;
// console.log(first);
// console.log(Sec);
console.log(third);

// Q2 — Array Output Prediction
// const tools = ["Playwright", "Postman", "Jenkins"];
// const [first, , third] = tools;
// console.log(first);
// console.log(third);
// What is the output?

// Q2 answer : Playwright and Jenkins

// Q3 — Object Destructuring
// const employee = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };
// Extract name and role using object destructuring.

// Q3 answer : 
// const employee = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };
// const { name, role } = employee;
// console.log(name);
// console.log(role);

// Q4 — Object Output Prediction
// const user = {
//     username: "lingaraj",
//     role: "admin"
// };
// const { username, role } = user;
// console.log(username);
// console.log(role);
// What is the output?

// Q4 answer : lingaraj and  admin

// Q5 — Rename
// Given:
// const employee = {
//     name: "Lingaraj",
//     experience: 4
// };
// Using destructuring, store:
// name → employeeName
// experience → years

// Q5 answer :
// const employee = {
//     name: "Lingaraj",
//     experience: 4
// };
// const { name: employeeName, experience: years } = employee;
// console.log(employeeName);
// console.log(years);

// Q6 — Concept
// What is the main difference between Array Destructuring and Object Destructuring?

// Q6 answer :
// Array: const [a, b] = array; --> Based on position
//Object: const { name, role } = employee; --> Based on property name

// Q7 — Practical
// You have:
// const testData = {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// };
// Use destructuring to extract all three values and print them.

// Q7 answer :
// const testData = {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// };

// const { username, password, browser } = testData;

// console.log(username);
// console.log(password);
// console.log(browser);


// Q8 — Identify the problem
// What is wrong here?
// const user = {
//     name: "Lingaraj",
//     role: "QA"
// };
// const [name, role] = user;
// Explain why.

// yes this incorrect, beacause we have object we should use the Object Destructuring, but Array Destructuring use that is the reson this is incorrect


// Macha 🔥 excellent work. You got the core Destructuring concept clearly. Let's evaluate each one.

// ✅ Destructuring Practice Evaluation
// Q1 — Array Destructuring ✅

// Your code:

// const browsers = ["Chrome", "Firefox", "Edge"];

// const [first, Sec, third] = browsers;

// console.log(first);
// console.log(Sec);
// console.log(third);

// Correct. 🎯

// Output:

// Chrome
// Firefox
// Edge

// Sec is a valid variable name. Usually I'd recommend second for readability, but this is not an error.

// Score: 1/1

// Q2 — Array Output Prediction ✅

// Your answer:

// Playwright and Jenkins

// Correct. 🎯

// Actual output:

// Playwright
// Jenkins

// Because:

// const [first, , third] = tools;

// The second value, "Postman", is skipped.

// Score: 1/1

// Q3 — Object Destructuring ✅

// Your code:

// const { name, role } = employee;

// console.log(name);
// console.log(role);

// Perfect. 🎯

// Output:

// Lingaraj
// QA Engineer

// Score: 1/1

// Q4 — Object Output Prediction ✅

// Your answer:

// lingaraj and admin

// Correct. 🎯

// Actual output:

// lingaraj
// admin

// Your answer format is different from the console format, but the values are completely correct.

// Score: 1/1

// Q5 — Rename ✅

// Your code:

// const { name: employeeName, experience: years } = employee;

// console.log(employeeName);
// console.log(years);

// Excellent. 💯

// This correctly means:

// name       → employeeName
// experience → years

// Output:

// Lingaraj
// 4

// Score: 1/1

// Q6 — Concept ✅

// Your answer:

// Array → Based on position
// Object → Based on property name

// Exactly right. 🔥

// Your examples are also correct:

// const [a, b] = array;

// → position/index

// const { name, role } = employee;

// → property names

// Score: 1/1

// Q7 — Practical ✅

// Your code:

// const { username, password, browser } = testData;

// console.log(username);
// console.log(password);
// console.log(browser);

// Perfect. 🎯

// Output:

// testuser
// Test@123
// Chrome

// This is exactly the kind of destructuring you'll use with test data objects in automation.

// Score: 1/1

// Q8 — Identify the Problem ✅

// Your explanation:

// We have an object, so we should use Object Destructuring. Array Destructuring is the reason this is incorrect.

// Correct. 👍

// This:

// const [name, role] = user;

// is Array Destructuring syntax.

// But user is an object:

// const user = {
//     name: "Lingaraj",
//     role: "QA"
// };

// Therefore:

// const { name, role } = user;

// is the correct syntax.

// One important detail

// It's not just that "object → object destructuring" by convention.

// The syntax itself tells JavaScript what kind of destructuring you're requesting:

// [a, b]       // Array destructuring
// {name, role}  // Object destructuring

// So:

// const [name, role] = user;

// tries to use the object as an iterable, which a normal object isn't.

// Score: 1/1

// 🏆 Final Score
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Q6	1/1
// Q7	1/1
// Q8	1/1
// Total	8/8
// 🎯 Score: 10/10 — 100%

// No conceptual mistakes. 🔥

// The only tiny style suggestion is:

// const [first, second, third] = browsers;

// instead of:

// const [first, Sec, third] = browsers;

// But Sec is completely valid JavaScript, so I'm not deducting anything.

// ✅ What you've learned so far

// You now understand:

// // Array
// const [a, b, c] = array;
// Position-based extraction
// Skipping values
// Array destructuring

// And:

// // Object
// const { name, role } = object;
// Property-based extraction
// Renaming properties
// const { name: employeeName } = employee;
// Next Destructuring concept

// Default Values in Destructuring

// We'll continue with one concept only, then practice it before moving forward. 🔥

///--------------------------------------------------------------------------------------------------------------------------------------------


// Perfect macha 😎🔥

//*********************************************************** */
// Next concept: Default Values in Destructuring
//*********************************************************** */

// We’ll continue in:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 02 - Destructuring.js
// 1️⃣ What are Default Values?

// A default value is used when the value you're trying to destructure is undefined.

// Array example
// const browsers = ["Chrome"];

// const [first, second = "Firefox"] = browsers;

// console.log(first);
// console.log(second);

// Output:

// Chrome
// Firefox

// Why?

// first  → "Chrome"
// second → undefined → default "Firefox"
// Another example
// const tools = ["Playwright", "Postman"];

// const [first, second, third = "Jenkins"] = tools;

// console.log(first);
// console.log(second);
// console.log(third);

// Output:

// Playwright
// Postman
// Jenkins

// Because there is no third value, the default value is used.

// 2️⃣ Object Destructuring Default Value
// const user = {
//     name: "Lingaraj"
// };

// const { name, role = "QA Engineer" } = user;

// console.log(name);
// console.log(role);

// Output:

// Lingaraj
// QA Engineer

// Because role doesn't exist in the object, JavaScript uses:

// role = "QA Engineer"
// ⚠️ Important Rule

// The default value is used when the value is undefined.

// For example:

// const user = {
//     name: "Lingaraj",
//     role: undefined
// };

// const { role = "QA Engineer" } = user;

// console.log(role);

// Output:

// QA Engineer

// But:

// const user = {
//     role: null
// };

// const { role = "QA Engineer" } = user;

// console.log(role);

// Output:

// null

// The default does not replace null.

// 🧠 Remember
// undefined → default value is used
// null      → default value is NOT used

// This is useful in automation when some test-data fields may be missing.

// 📝 Practice — Default Values
// Q1
// What is the output?
// const browsers = ["Chrome"];
// const [first, second = "Firefox"] = browsers;
// console.log(first);
// console.log(second);

//Q1 Answer : Chrome and Firefox

// Q2
// Write destructuring code for:
// const tools = ["Playwright", "Postman"];
// Extract:
// first  → Playwright
// second → Postman
// third  → Jenkins
// Use a default value for third.

//Q2 Answer :

// const tools = ["Playwright", "Postman"];
// const [first, second, third = "Jenkins"] = tools;

// console.log(first);
// console.log(second);
// console.log(third);

const tools = ["Playwright", "Postman"];
const [first, second, third = Jenkins] = tools;

console.log(first);
console.log(second);
console.log(third);


// Q3

// What is the output?

// const user = {
//     name: "Lingaraj"
// };

// const { name, role = "QA Engineer" } = user;
// What is the output?

// const user = {
//     name: "Lingaraj"
// };

// const { name, role = "QA Engineer" } = user;

// console.log(name);
// console.log(role);
// Q4

// What is the output?

// const user = {
//     name: "Lingaraj",
//     role: undefined
// };

// const { role = "Tester" } = user;

// console.log(role);
// Q5

// What is the output?

// const user = {
//     role: null
// };

// const { role = "Tester" } = user;

// console.log(role);
// Q6 — Concept

// Why is the default value used when the value is undefined, but not when it is null?

// Q7 — Automation Scenario

// You receive this test data:

// const testData = {
//     username: "testuser",
//     password: "Test@123"
// };

// Destructure:

// username
// password
// browser

// If browser is missing, the default should be:

// "Chrome"

// Write the code.

// Send Q1–Q7, macha. I'll evaluate each one like before. 💪🔥

// Send Q1–Q7, macha. I'll evaluate each one like before. 💪🔥