

///****************************************** */
//THIS IS IMPOTANT TO KNOW WHAT IS ES6+
///****************************************** */
// Ahh yes macha 😄 — ES6+ is a term I should have explained first. You don't need to know it already.

// What does ES6+ mean?

// ES = ECMAScript
// ECMAScript is the standard/specification behind JavaScript.

// ES6 = ECMAScript 2015

// It was a major update to JavaScript that introduced many features we use today.

// The + in ES6+ means:

// ES6 and the newer JavaScript features that came after ES6.

// Some examples you already learned

// You have actually already been using ES6+ features without necessarily calling them that:

// Feature	Example
// let / const	const name = "Lingaraj";
// Arrow functions	const add = (a, b) => a + b;
// Template literals	`Hello ${name}`
// Destructuring	const [first, second] = arr;
// Spread operator	const copy = [...arr];
// Rest parameter	function sum(...numbers) {}
// Modules	export / import
// Classes	class User {}

// So when the roadmap says:

// Day 9 · ES6+ + Classes/OOP

// it basically means:

// Modern JavaScript features + Object-Oriented Programming concepts.

// One important thing

// Don't think "ES6+" is another huge topic that you need to study separately.

// It's more like a category/label for modern JavaScript features.

// For our roadmap, we're learning the specific features listed under Day 9:

// Arrow Functions → Destructuring → Spread/Rest → Modules Preview → Classes → Constructors → Inheritance → Encapsulation

// And you've already completed the first three. 👍

// So now that ES6+ is clear, we can continue with Modules Preview.


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
///****************************************** */
// Next Topic: Modules Preview
///****************************************** */



// Chalooo macha 🔥

// Next Topic: Modules Preview
// 📁 Exact file path

// Create this file:
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 04 - Modules Preview.js

// The roadmap places Modules Preview in Day 9 along with the ES6+ topics before moving into Classes/OOP.

// 1. What are Modules?
// A module is a JavaScript file that contains code which can be exported and reused in another JavaScript file.
// Instead of putting everything into one large file, we can split our code into smaller, reusable files.

// For example:
// utils.js
// testData.js
// login.js
// test.js

// Then one file can use functionality from another file.
// Why is this useful in automation?
// In Playwright projects, we commonly have reusable things such as:
// Test data
// Utility functions
// Configuration
// Page objects
// API helpers
// Modules allow us to keep these pieces organized and reusable.

// 2. Export
// Suppose we have:
// utils.js
// export function add(a, b) {
//     return a + b;
// }
// Here:

// export
// makes add() available to another module.

// 3. Import
// Another file can use it:
// test.js
// import { add } from "./utils.js";
// console.log(add(10, 20));
// Output:
// 30

// So the basic relationship is:
// utils.js
//    ↓
// export
//    ↓
// test.js
//    ↓
// import
// 4. Export Multiple Functions

// You can export multiple functions from the same file.

// utils.js
// export function add(a, b) {
//     return a + b;
// }

// export function multiply(a, b) {
//     return a * b;
// }

// Then:

// test.js
// import { add, multiply } from "./utils.js";

// console.log(add(10, 20));
// console.log(multiply(5, 4));

// Output:

// 30
// 20
// 5. Why { } with Import?

// This is important.

// import { add } from "./utils.js";

// The { add } means:

// Import the specifically named export called add.

// If we exported:

// export function add() {}
// export function multiply() {}

// we can choose:

// import { add } from "./utils.js";

// or:

// import { multiply } from "./utils.js";

// or both:

// import { add, multiply } from "./utils.js";
// 6. Default Export — Preview

// JavaScript also supports a default export.

// Example:

// export default function login() {
//     console.log("Login");
// }

// Then import:

// import login from "./login.js";

// Notice something important:

// Named export
// export function login() {}

// Import:

// import { login } from "./login.js";
// Default export
// export default function login() {}

// Import:

// import login from "./login.js";

// For now, remember:

// Named export → { } during import
// Default export → no { }

// We'll keep this as a preview, because the roadmap later has a dedicated Node.js/NPM/Modules section.

// 🎯 Automation Example

// Imagine we have reusable test data.

// testData.js
// export const username = "testuser";
// export const password = "Test@123";

// Then our test file can use it:

// loginTest.js
// import { username, password } from "./testData.js";

// console.log(username);
// console.log(password);

// This is much cleaner than repeatedly writing the same test data inside every test.

// ⚠️ Important

// Don't worry about Node.js configuration, package.json, CommonJS, require(), or advanced module systems right now.

// For this roadmap section, understand the core idea:

// export → make code available

// import → use exported code

// And:

// Named export    → import { name }
// Default export  → import name
// 🧪 Practice — Modules Preview

// Let's do one concept at a time, so start with these.

// Q1 — Identify
// Which keyword is used to make a function available to another JavaScript module?
// A. include
// B. export
// C. share
// D. public

// Q1 Answer : B. export


// Q2 — Import
// Given:
// export function login() {
//     console.log("Login");
// }
// Write the correct import statement from:
// ./utils.js

// Q2 Answer : import {login} from "./utils.js";


// Q3 — Multiple exports
// Given:
// export function add(a, b) {
//     return a + b;
// }
// export function subtract(a, b) {
//     return a - b;
// }
// Write an import statement that imports both functions.

//Q3 Answer : import {and, subtract} from "./utils.js";


// Q4 — Output
// // utils.js
// export function add(a, b) {
//     return a + b;
// }
// // test.js
// import { add } from "./utils.js";
// console.log(add(10, 5));
// What is the output?

//Q4 Answer : 15


// Q5 — Named vs Default
// Explain the difference between:
// import { login } from "./login.js";
// and:
// import login from "./login.js";

//Q5 Answer : import { login } imports a named export — the name must match exactly what was exported. import login (no braces) imports the default export — you can name it whatever you want.


// Nice work, macha 🔥 Let's evaluate carefully.

// Q1 — Identify ✅

// Your answer: B. export

// Correct.

// 1/1

// Q2 — Import ✅

// Your answer:

// import { login } from "./utils.js";

// Correct. 👍

// Because login is a named export, we use { }.

// 1/1

// Q3 — Multiple exports ❌

// You wrote:

// import {and, subtract} from "./utils.js";

// There is one small mistake:

// and

// should be:

// add

// Correct:

// import { add, subtract } from "./utils.js";

// This is a naming/syntax mistake, not a misunderstanding of modules. You correctly understood that both exported functions need to be listed inside { }.

// 0.5/1

// Q4 — Output ✅

// Your answer:

// 15

// Correct. 💯

// add(10, 5) returns 15.

// 1/1

// Q5 — Named vs Default ✅

// Excellent explanation.

// You correctly identified:

// import { login } from "./login.js";

// → named export

// The imported name must correspond to the exported name.

// And:

// import login from "./login.js";

// → default export

// The importer can choose the local name.

// 1/1

// 🏆 Score
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	0.5/1
// Q4	1/1
// Q5	1/1
// Total	4.5/5 — 9/10
// 🎯 Result: Very good

// Your only mistake was:

// and ❌
// add ✅

// That's a typing/naming mistake, not a conceptual mistake.

// One important takeaway
// export function add() {}
// export function subtract() {}

// must match:

// import { add, subtract } from "./utils.js";

// Think of it like export names = labels, and the named import must use those labels.

// Next: One small practical exercise

// Create two files inside:

// 01 - JavaScript - Fundamentals/
// └── 10 - ES6 - and - OOP/
// 05 - Module Utils.js
// export function add(a, b) {
//     return a + b;
// }

// export function multiply(a, b) {
//     return a * b;
// }
// 06 - Module Test.js

// Import both functions and print:

// 30
// 200

// using:

// add(10, 20)
// multiply(10, 20)

// Don't copy the import from above blindly—write it yourself. This will make sure the concept is actually clear. 💪