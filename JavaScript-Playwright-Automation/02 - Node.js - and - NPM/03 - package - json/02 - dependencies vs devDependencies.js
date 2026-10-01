// Perfect macha 🔥 Let's continue with the next tracker topic.
// 🟢 Concept 5: dependencies vs devDependencies
// Module: 2 — NodeJS and NPM
// Chapter: 3 — package.json
// Topic: dependencies vs devDependencies
// Priority: P0 — CRITICAL
// Status: Not Started Playwright_Automation_with_Java…
// 📁 Exact file
// Playwright - learning - 45 - days/
// └── 02 - NodeJS - and - NPM/
//     └── 03 - package - json/
//         └── 02 - dependencies vs devDependencies.js

// 1. What are dependencies?
// Dependencies are packages that your project needs as part of its normal/runtime functionality.
// They are stored in package.json under:
// {
//   "dependencies": {
//     "package-name": "^1.0.0"
//   }
// }

// You install one with:
// npm install package-name

// Example:
// npm install express

// This adds the package under dependencies.
// 2. What are devDependencies?
// devDependencies are packages needed during development, testing, building, or other development activities.
// They are stored under:
// {
//   "devDependencies": {
//     "package-name": "^1.0.0"
//   }
// }

// You install one with:
// npm install -D package-name

// or:
// npm install --save-dev package-name

// For your Playwright project:
// npm install -D @playwright/test

// This places Playwright Test under devDependencies.
// 3. The main difference
// Think about it like this:
// dependencies
//       ↓
// Packages required by the application/project

// devDependencies
//       ↓
// Packages required for development/testing/building

// Example:
// {
//   "dependencies": {
//     "express": "^5.0.0"
//   },
//   "devDependencies": {
//     "@playwright/test": "^1.56.0"
//   }
// }

// Here:
// - express → application dependency
// - @playwright/test → development/testing dependency
// 4. Why is Playwright normally a devDependency?
// Your Playwright tests are used to develop and test the application.
// For example:
// import { test, expect } from '@playwright/test';

// test('login test', async ({ page }) => {
//     await page.goto('https://example.com');
// });

// Playwright is providing your testing framework, not the application's runtime functionality.
// Therefore:
// {
//   "devDependencies": {
//     "@playwright/test": "^1.56.0"
//   }
// }

// is the typical setup.
// 5. Commands you should remember
// Install as dependency
// npm install package-name

// Equivalent:
// npm i package-name

// Install as devDependency
// npm install -D package-name

// Equivalent:
// npm install --save-dev package-name

// 6. How does it appear in package.json?
// Suppose we run:
// npm install express

// We might get:
// {
//   "dependencies": {
//     "express": "^5.0.0"
//   }
// }

// If we then run:
// npm install -D @playwright/test

// we might have:
// {
//   "dependencies": {
//     "express": "^5.0.0"
//   },
//   "devDependencies": {
//     "@playwright/test": "^1.56.0"
//   }
// }

// 🧠 Easy way to remember
// Ask yourself:
// "Does the application need this package to perform its normal functionality, or do I need it to develop/test/build the application?"

// Application functionality
// → dependencies

// Development/testing/building
// → devDependencies

// For your Playwright learning:
// @playwright/test
//        ↓
// Testing tool
//        ↓
// devDependencies

// ⚠️ Important interview point
// Don't say:
// "devDependencies are packages that are never needed when the application runs."

// That's too absolute.
// The practical distinction is based on what the package is needed for—runtime application functionality versus development/testing/build tooling. Installation behavior can also depend on how the environment is configured.
// For your interview, the clean answer is:
// Dependencies are packages required by the application at runtime, while devDependencies are packages required for development, testing, or build-related tasks.

// 📝 Practice — Dependencies vs devDependencies
// Don't Google, macha 😄
// Q1.
// What is the difference between dependencies and devDependencies?
//-> Dependencies are packages required by the application at runtime, while devDependencies are packages required for development, testing, or build-related tasks.


// Q2.
// What happens when you run:
// npm install lodash
// Where will lodash normally be added in package.json?
//-> It will be added under "dependencies" in package.json, as lodash is a package that can be used in the application at runtime.



// Q3.
// What happens when you run:
// npm install -D @playwright/test
// Where will Playwright Test normally be added?
//-> It will be added under "devDependencies" in package.json, as @playwright/test is a package that is primarily used for development and testing purposes, not for the application's runtime functionality.


// Q4.
// Why is @playwright/test normally placed under devDependencies?
//-> @playwright/test is placed under devDependencies because it is a testing framework used during the development and testing phases of the application. It is not required for the application to run in production, as it is primarily used for writing and executing tests to ensure the application's functionality and quality.


// Q5.
// What is the difference between these two commands?
// npm install package-name
// and
// npm install -D package-name

//-> The command "npm install package-name" installs the specified package as a regular dependency, which means it will be added to the "dependencies" section of package.json and is required for the application to run at runtime.
// The command "npm install -D package-name" installs the specified package as a development dependency, which means it will be added to the "devDependencies" section of package.json and is primarily used for development, testing, or build-related tasks. It is not required for the application to run in production.


// Q6. Interview scenario
// Your project has:
// {
//   "dependencies": {
//     "express": "^5.0.0"
//   },
//   "devDependencies": {
//     "@playwright/test": "^1.56.0"
//   }
// }
// Explain why these two packages are placed in different sections.

//-> In this project, "express" is placed under "dependencies" because it is a package that is required for the application to run at runtime. It provides essential functionality for building web applications and is needed for the application to function properly in production.
// On the other hand, "@playwright/test" is placed under "devDependencies" because it is a testing framework used during the development and testing phases of the application. It is not required for the application to run in production, as it is primarily used for writing and executing tests to ensure the application's functionality and quality. Therefore, it is categorized as a development dependency.

// Send Q1–Q6, macha. 💪

/////-----validation-----/////

// 🔥 Excellent, macha. Let's evaluate Q1–Q6 individually.
// Q1 — dependencies vs devDependencies
// Your answer is correct:
// Dependencies are required at runtime, while devDependencies are used for development, testing, or build-related tasks.

// Score: 2/2 ✅
// Clear and interview-ready.
// Q2 — npm install lodash
// Your answer:
// It will be added under dependencies because it can be used at runtime.

// Score: 2/2 ✅
// Correct.
// npm install lodash

// normally results in:
// "dependencies": {
//   "lodash": "..."
// }

// Q3 — npm install -D @playwright/test
// Your answer:
// It will be added under devDependencies.

// Score: 2/2 ✅
// Correct.
// npm install -D @playwright/test

// normally results in:
// "devDependencies": {
//   "@playwright/test": "..."
// }

// Q4 — Why Playwright is a devDependency
// Your answer correctly explains that Playwright Test is used for:
// - Development
// - Testing
// - Writing test cases
// - Executing tests
// - Not application runtime functionality
// Score: 2/2 ✅
// Very good explanation. 💯
// Q5 — Difference between the commands
// Your answer correctly distinguishes:
// npm install package-name

// from:
// npm install -D package-name

// Score: 2/2 ✅
// Your explanation is accurate.
// One small refinement: saying a devDependency is “not required for the application to run in production” is appropriate for this Playwright example, but don't treat that as an absolute rule for every package/project setup. The key distinction is runtime application dependency vs development/testing/build dependency.
// Q6 — Express vs Playwright
// Your answer correctly explains:
// express
//    ↓
// Application functionality
//    ↓
// dependencies

// and:
// @playwright/test
//    ↓
// Testing functionality
//    ↓
// devDependencies

// Score: 2/2 ✅
// Excellent interview explanation. 🔥
// 🏆 Final Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Q6	2/2
// TOTAL	12/12 — 100% 🎯


// ✅ dependencies vs devDependencies — COMPLETE
// Your progress now:
// Module 2 — NodeJS and NPM
// │
// ├── Chapter 1 — Node.js Introduction
// │   ├── Node.js and V8             ✅
// │   └── Node.js vs Browser         ✅
// │
// ├── Chapter 2 — NPM Basics
// │   └── npm basics                  ✅
// │
// └── Chapter 3 — package.json
//     ├── package.json                ✅
//     └── dependencies vs devDependencies ✅

// According to the tracker, the next P0 — CRITICAL topic is:
// ➡️ NPM Scripts
// We'll now learn only NPM Scripts, then practice it before moving to the next topic.