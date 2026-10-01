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
// Q2.
// What happens when you run:
// npm install lodash

// Where will lodash normally be added in package.json?
// Q3.
// What happens when you run:
// npm install -D @playwright/test

// Where will Playwright Test normally be added?
// Q4.
// Why is @playwright/test normally placed under devDependencies?
// Q5.
// What is the difference between these two commands?
// npm install package-name

// and
// npm install -D package-name

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
// Send Q1–Q6, macha. 💪