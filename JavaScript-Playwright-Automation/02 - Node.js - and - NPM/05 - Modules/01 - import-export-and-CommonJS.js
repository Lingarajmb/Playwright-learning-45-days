// 🟢 Concept 7: JavaScript Modules — import/export and CommonJS
// Module: 2 — NodeJS and NPM
// Chapter: 5 — JavaScript Modules
// Topic: import/export and CommonJS
// Priority: P0 — CRITICAL
// Status: Not Started Playwright_Automation_with_Java…
// 📁 Exact file
// Playwright - learning - 45 - days/
// └── 02 - NodeJS - and - NPM/
//     └── 05 - Modules/
//         └── 01 - import-export-and-CommonJS.js

// 1. What is a JavaScript Module?
// A module is a JavaScript file that can contain code that can be exported and imported by another JavaScript file.
// Instead of putting everything into one huge file:
// test.js
//  ├── login logic
//  ├── user logic
//  ├── API logic
//  ├── utility logic
//  └── validation logic

// we can separate the code:
// login.js
// user.js
// api.js
// utils.js

// and share functionality between them.
// This is especially important in Playwright because later you'll use modules for:
// - Page Objects
// - Utilities
// - Test data
// - API helpers
// - Configuration
// - Reusable functions
// 2. Two module systems you need to know
// In Node.js, you'll commonly encounter:
// ES Modules (ESM)
// Uses:
// import
// export

// CommonJS (CJS)
// Uses:
// require()
// module.exports

// Think:
// JavaScript Modules
//        │
//        ├── ES Modules
//        │      ├── export
//        │      └── import
//        │
//        └── CommonJS
//               ├── module.exports
//               └── require

// 3. ES Modules — export
// Suppose we have:
// // math.js

// export function add(a, b) {
//     return a + b;
// }

// We're exporting the add function.
// Another file can import it:
// // app.js

// import { add } from "./math.js";

// console.log(add(10, 20));

// Output:
// 30

// So:
// math.js
//    │
//    │ export
//    ↓
//   add()
//    │
//    │ import
//    ↓
// app.js

// 4. Named exports
// You can export multiple things:
// // math.js

// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }

// Then:
// // app.js

// import { add, subtract } from "./math.js";

// console.log(add(10, 5));
// console.log(subtract(10, 5));

// Output:
// 15
// 5

// The names inside { } must correspond to the exported names.
// 5. Default export
// A module can also have a default export.
// Example:
// // user.js

// export default function getUser() {
//     return "Lingaraj";
// }

// Import:
// // app.js

// import getUser from "./user.js";

// console.log(getUser());

// Notice the difference:
// Named export
// export function add() {}

// Import:
// import { add } from "./math.js";

// Default export
// export default function getUser() {}

// Import:
// import getUser from "./user.js";

// For now, remember the syntax difference. We can practice it later.
// 6. CommonJS — module.exports
// CommonJS uses:
// module.exports

// Example:
// // math.js

// function add(a, b) {
//     return a + b;
// }

// module.exports = { add };

// Then another file can use:
// // app.js

// const { add } = require("./math");

// console.log(add(10, 20));

// Output:
// 30

// The relationship is:
// CommonJS

// module.exports
//       ↓
// exports functionality
//       ↓
// require()
//       ↓
// imports functionality

// 7. ES Modules vs CommonJS
// This is the important comparison:
// ES Modules	CommonJS
// export	module.exports
// import	require()
// Modern JavaScript module system	Traditional Node.js module system


// Example:
// ES Modules
// export function login() {
//     // ...
// }

// import { login } from "./login.js";

// CommonJS
// function login() {
//     // ...
// }

// module.exports = { login };

// const { login } = require("./login");

// 8. Why is this important for Playwright?
// You will frequently see imports like:
// import { test, expect } from "@playwright/test";

// Here:
// import
//   ↓
// imports functionality
//   ↓
// from @playwright/test

// You'll also create reusable modules yourself.
// For example:
// // loginData.js

// export const username = "admin";
// export const password = "password123";

// Then:
// // login.spec.js

// import { username, password } from "./loginData.js";

// This keeps your automation framework organized and reusable.
// 🧠 Interview-ready answer
// If an interviewer asks:
// "What is the difference between ES Modules and CommonJS?"
// You can say:
// ES Modules use import and export to share functionality between modules, while CommonJS uses require() and module.exports. ES Modules are the modern JavaScript module system, while CommonJS is the traditional module system commonly associated with Node.js.

// ⚠️ One important point
// Don't mix the syntax accidentally.
// ❌ Don't write:
// export function add() {}

// and then:
// const { add } = require("./math");

// without configuring/using an appropriate module system.
// For now, learn the two patterns separately:
// ESM
// export → import

// CommonJS
// module.exports → require

// Later, when we work with actual Node.js projects and Playwright configuration, we'll see how the module system is configured and used in practice.
// 📝 Practice — JavaScript Modules
// Don't Google, macha 😄
// Q1.
// What is a JavaScript module?
// A JavaScript module is a file that contains code that can be exported and imported by another JavaScript file, allowing for better organization and reusability of code.

// Q2.
// What are the two module systems we discussed?
// The two module systems discussed are ES Modules (ESM) and CommonJS (CJS). ES Modules use the keywords `import` and `export`, while CommonJS uses `require()` and `module.exports`.


// Q3.
// What keywords are used for importing and exporting in ES Modules?
// In ES Modules, the keywords used for importing and exporting are `import` and `export`, respectively.



// Q4.
// What are the CommonJS equivalents of export and import?
// In CommonJS, the equivalent of `export` is `module.exports`, and the equivalent of `import` is `require()`.


// Q5.
// What is the difference between a named export and a default export?
// A named export allows you to export multiple functions or variables from a module, and they must be imported using their exact names. A default export allows you to export a single function or variable from a module, and it can be imported with any name of your choice.


// Q6. Code question
// Given:
// // math.js

// export function add(a, b) {
//     return a + b;
// }

// Write the code needed in app.js to import add and print:
// 30

// app.js
// import { add } from "./math.js";

// Q7. CommonJS
// Convert this ES Module into CommonJS:
// // math.js

// export function add(a, b) {
//     return a + b;
// }

// CommonJS version:
// // math.js
// function add(a, b) {
//     return a + b;
// }
// module.exports = { add };


// Q8. Playwright interview scenario
// You see this in a Playwright test:
// import { test, expect } from "@playwright/test";
// Explain what import is doing here.
// The `import` statement is bringing in the `test` and `expect` functionalities from the `@playwright/test` module, allowing you to use them in your Playwright test file for writing and asserting tests.


// Send Q1–Q8, macha. I'll evaluate each answer individually. 💪


///-------validation of answers-------///

// 🔥 Great work, macha.Let's evaluate Q1–Q8 individually.
// Q1 — What is a JavaScript module ?
//     Your answer correctly explains that a module is a file whose code can be exported / imported for organization and reuse.
//         Score: 2 / 2 ✅
// Q2 — Two module systems
// You identified:
// - ES Modules(ESM) → import / export
//     - CommonJS(CJS) → require() / module.exports
// Score: 2 / 2 ✅
// Exactly right.
//     Q3 — ES Module keywords
// Your answer:
// import and export

// Score: 2 / 2 ✅
// Correct.
//     Q4 — CommonJS equivalents
// Your answer:
// module.exports → export
// require() → import

// Score: 2 / 2 ✅
// Correct.
//     Q5 — Named vs default export
// Your answer:
// Named exports can export multiple functions / variables and are imported using their names.A default export can export a single function/variable and can be imported with any name.

// Score: 2 / 2 ✅
// Good understanding.
// One small terminology refinement:
// A module can have one default export, but it can also have multiple named exports.The important syntax difference is:
// // Named
// export function add() { }
// import { add } from "./math.js";

// // Default
// export default function add() { }
// import anything from "./math.js";

// Q6 — Import add
// You wrote:
// import { add } from "./math.js";

// Score: 1.5 / 2 ⚠️
// The import itself is 100 % correct, but the question asked you to import add and print 30.
// You needed:
// import { add } from "./math.js";

// console.log(add(10, 20));

// So your understanding is correct; you simply missed the final console.log().
// This is a completion issue, not a concept issue.
//     Q7 — Convert to CommonJS
// Your answer:
// function add(a, b) {
//     return a + b;
// }

// module.exports = { add };

// Score: 2 / 2 ✅
// Correct.
// The corresponding import would be:
// const { add } = require("./math");

// Q8 — Playwright import
// Your answer:
// The import statement brings test and expect functionality from @playwright/test, allowing them to be used for writing and asserting tests.

// Score: 2 / 2 ✅
// Excellent Playwright - specific explanation. 🔥
// 🏆 Final Score
// Question	Score
// Q1	2 / 2
// Q2	2 / 2
// Q3	2 / 2
// Q4	2 / 2
// Q5	2 / 2
// Q6	1.5 / 2
// Q7	2 / 2
// Q8	2 / 2
// TOTAL	15.5 / 16 — 96.9 % 🎯


// 📌 Your only mistake
// Q6 wasn't a conceptual mistake.
// You correctly wrote:
// import { add } from "./math.js";

// You just didn't complete the requested output:
// console.log(add(10, 20));

// So your module concept is understood. ✅
// ✅ JavaScript Modules — COMPLETE
// Module 2 — NodeJS and NPM
// │
// ├── Chapter 1 — Node.js Introduction
// │   ├── Node.js and V8                  ✅
// │   └── Node.js vs Browser              ✅
// │
// ├── Chapter 2 — NPM Basics
// │   └── npm basics                       ✅
// │
// ├── Chapter 3 — package.json
// │   ├── package.json                     ✅
// │   └── dependencies vs devDependencies  ✅
// │
// ├── Chapter 4 — NPM Scripts
// │   └── NPM Scripts                      ✅
// │
// └── Chapter 5 — JavaScript Modules
//     └── import/export and CommonJS       ✅

// According to the tracker, the next topic is:
// ➡️ Environment Variables and process.env
// Priority: P0 — CRITICAL Playwright_Automation_with_Java…
// We'll learn only Environment Variables and process.env next. 💪