// Perfect macha 🔥 Let's continue with the next tracker topic.
// 🟢 Concept 6: NPM Scripts
// Module: 2 — NodeJS and NPM
// Chapter: 4 — NPM Scripts
// Topic: NPM Scripts
// Priority: P0 — CRITICAL
// Status: Not Started Playwright_Automation_with_Java…
// 📁 Exact file
// Playwright - learning - 45 - days/
// └── 02 - NodeJS - and - NPM/
//     └── 04 - NPM - Scripts/
//         └── 01 - NPM Scripts.js

// 1. What are NPM Scripts?
// NPM scripts are commands defined inside the "scripts" section of package.json.
// Example:
// {
//   "scripts": {
//     "test": "playwright test"
//   }
// }

// Now instead of typing:
// npx playwright test

// you can run:
// npm test

// So the basic relationship is:
// package.json
//      ↓
// "scripts"
//      ↓
// Custom command
//      ↓
// npm <script-name>

// 2. Why do we use NPM Scripts?
// They provide a simple and consistent way to run project commands.
// Imagine your Playwright project needs several commands:
// Run all tests
// Run headed tests
// Run smoke tests
// Generate reports
// Run linting

// Instead of remembering long commands, we can define them in package.json.
// Example:
// {
//   "scripts": {
//     "test": "playwright test",
//     "test:headed": "playwright test --headed",
//     "report": "playwright show-report"
//   }
// }

// Then:
// npm test

// runs:
// playwright test

// And:
// npm run test:headed

// runs:
// playwright test --headed

// 3. How does an NPM Script work?
// Suppose we have:
// {
//   "scripts": {
//     "hello": "node hello.js"
//   }
// }

// Then execute:
// npm run hello

// NPM finds the "hello" script:
// "hello": "node hello.js"

// and executes:
// node hello.js

// So:
// npm run hello
//        ↓
// package.json
//        ↓
// "hello": "node hello.js"
//        ↓
// node hello.js

// 4. npm test vs npm run
// There is a small special case you should know.
// For most custom scripts:
// npm run script-name

// For example:
// npm run test:headed

// But some lifecycle script names have special shortcuts.
// The most common one is:
// npm test

// which runs the "test" script.
// So if we have:
// {
//   "scripts": {
//     "test": "playwright test"
//   }
// }

// we can use:
// npm test

// instead of:
// npm run test

// Both can execute the test script.
// 5. Playwright example
// This is where NPM Scripts becomes useful for you.
// Imagine your package.json contains:
// {
//   "scripts": {
//     "test": "playwright test",
//     "test:headed": "playwright test --headed",
//     "test:debug": "playwright test --debug",
//     "report": "playwright show-report"
//   }
// }

// Now you can use:
// Run tests
// npm test

// Run headed
// npm run test:headed

// Debug tests
// npm run test:debug

// Open report
// npm run report

// This gives your automation project short, standardized commands.
// 6. Why this is useful in a team
// Imagine you're working with five testers.
// Without scripts, one person might run:
// npx playwright test --project=chromium

// Another might use a different command.
// Instead, your team can define:
// {
//   "scripts": {
//     "test:chrome": "playwright test --project=chromium"
//   }
// }

// Everyone can simply use:
// npm run test:chrome

// This improves consistency and usability.
// 🧠 Interview-ready answer
// If an interviewer asks:
// "What are NPM Scripts?"
// You can say:
// NPM Scripts are commands defined in the scripts section of package.json. They provide a convenient and consistent way to execute project tasks such as running tests, builds, or other automation commands.

// For Playwright:
// We can define Playwright commands as NPM scripts so team members can execute tests using simple standardized commands such as npm test or npm run test:headed.

// ⚠️ Important distinction
// Don't confuse:
// npm install

// with:
// npm run test

// npm install
// Installs project dependencies.
// npm run test
// Executes the "test" script defined in package.json.
// For example:
// npm install
//     ↓
// Install packages

// npm test
//     ↓
// Run test command

// 📝 Practice — NPM Scripts
// Don't Google, macha 😄
// Q1.
// What are NPM Scripts?
//-> NPM Scripts are commands defined in the "scripts" section of package.json. They provide a convenient and consistent way to execute project tasks such as running tests, builds, or other automation commands.


// Q2.
// Where are NPM Scripts defined?
//-> NPM Scripts are defined in the "scripts" section of the package.json file in a Node.js project. This section allows developers to specify custom commands that can be executed using npm run <script-name>.


// Q3.
// Given:
// {
//   "scripts": {
//     "test": "playwright test"
//   }
// }
// What command would you use to execute the script?
//-> You would use the command "npm test" to execute the script defined in the "scripts" section of package.json. This command will run the "playwright test" command as specified in the script.



// Q4.
// Given:
// {
//   "scripts": {
//     "test:headed": "playwright test --headed"
//   }
// }
// What command would you run?
//-> You would run the command "npm run test:headed" to execute the script defined in the "scripts" section of package.json. This command will run the "playwright test --headed" command as specified in the script.



// Q5.
// What is the difference between:
// npm install
// and:
// npm run test

//-> "npm install" is used to install project dependencies specified in the package.json file, while "npm run test" is used to execute a custom script defined in the "scripts" section of package.json. The former is for setting up the project environment, and the latter is for running specific tasks or commands defined by the developer.


// Q6. Playwright scenario
// Your team wants a simple command to run Playwright tests in headed mode.
// You currently have:
// npx playwright test --headed
// How would you configure an NPM Script so the team can run it using:
// npm run test:headed
//-> You would configure an NPM Script in the "scripts" section of package.json as follows:
// {
//   "scripts": {
//     "test:headed": "playwright test --headed"
//   }
// }
// Send Q1–Q6, macha. 💪



//////-----validation-----/////

// 🔥 Excellent, macha. Let's evaluate Q1–Q6 individually.
// Q1 — What are NPM Scripts?
// Your answer correctly explains that they are commands defined in the "scripts" section and used for project tasks.
// Score: 2/2 ✅
// Q2 — Where are NPM Scripts defined?
// Your answer:
// In the "scripts" section of package.json.

// Score: 2/2 ✅
// Exactly right.
// Q3 — Execute the test script
// Given:
// "scripts": {
//   "test": "playwright test"
// }

// Your answer:
// npm test

// Score: 2/2 ✅
// Correct.
// You could also use:
// npm run test

// but npm test is the standard shortcut for the test script.
// Q4 — Execute test:headed
// Your answer:
// npm run test:headed

// Score: 2/2 ✅
// Perfect.
// Q5 — npm install vs npm run test
// Your answer correctly distinguishes:
// npm install
//     ↓
// Install project dependencies

// npm run test
//     ↓
// Execute the "test" script

// Score: 2/2 ✅
// Very clear explanation.
// Q6 — Playwright headed script
// Your configuration:
// {
//   "scripts": {
//     "test:headed": "playwright test --headed"
//   }
// }

// and command:
// npm run test:headed

// Score: 2/2 ✅
// Exactly what was requested. 🔥
// 🏆 Final Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Q6	2/2
// TOTAL	12/12 — 100% 🎯


// ✅ NPM Scripts — COMPLETE
// Your Module 2 progress:
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
// └── Chapter 4 — NPM Scripts
//     └── NPM Scripts                      ✅

// According to the tracker, the next P0 — CRITICAL topic is:
// ➡️ JavaScript Modules — import/export and CommonJS
// We'll learn only that concept next, then practice it before moving forward. Playwright_Automation_with_Java…