// Perfect macha 🔥 Let's continue.

// 🟢 Concept 2: Node.js vs Browser

// Tracker: Module 2 → Chapter 1 → Node.js Introduction
// Priority: P0 — CRITICAL
// Status: Not Started

// 📁 Exact file
// Playwright - learning - 45 - days/
// └── 02 - NodeJS - and - NPM/
//     └── 01 - NodeJS/
//         └── 02 - NodeJS vs Browser.js
// 1. JavaScript in the Browser

// When JavaScript runs in a browser such as Chrome or Edge, it runs inside the browser environment.

// For example:

// console.log(window);
// console.log(document);

// The browser provides APIs such as:

// window
// document
// DOM
// localStorage
// cookies
// fetch

// These APIs allow JavaScript to interact with the webpage and browser.

// For example:

// document.querySelector("#login").click();

// Here JavaScript is interacting with the DOM of the webpage.

// 2. JavaScript in Node.js

// Node.js runs JavaScript outside the browser.

// Instead of browser-specific APIs like:

// window
// document

// Node.js provides APIs for working with the system.

// Examples:

// fs          → File system
// path        → File paths
// process     → Process/environment information
// http        → HTTP functionality

// Example:

// const fs = require("fs");

// const data = fs.readFileSync("data.txt", "utf-8");

// console.log(data);

// This is something you normally wouldn't do directly with browser JavaScript because fs is a Node.js API.

// 3. Main Difference

// Think about it this way:

//               JavaScript
//                   │
//         ┌─────────┴─────────┐
//         ↓                   ↓
//      Browser             Node.js
//         │                   │
//         ↓                   ↓
//    Web APIs             Node APIs
//         │                   │
//         ↓                   ↓
//  DOM / Window          File System
//  Cookies               Process
//  localStorage          Path
//  Fetch                 HTTP

// The JavaScript language is the same, but the runtime environment and available APIs are different.

// 4. Important Example
// Browser
// console.log(window.location.href);

// window is provided by the browser.

// Node.js
// console.log(process.version);

// process is provided by Node.js.

// So:

// Browser → window / document
// Node.js → process / fs / path
// 5. Why does this matter for Playwright?

// This is important for your automation career.

// A Playwright test uses Node.js as the runtime, but Playwright also controls a real browser.

// So there are effectively two environments involved:

//         Node.js
//            │
//            │ runs test code
//            ↓
//       Playwright
//            │
//            │ controls
//            ↓
//         Browser
//            │
//            ↓
//        Web Page

// For example:

// test("Login test", async ({ page }) => {
//     await page.goto("https://example.com");

//     await page.locator("#username").fill("admin");
// });

// The test code is executed in the Node.js environment.

// But:

// page.locator("#username")

// is interacting with an element inside the browser page.

// This distinction becomes very important later when we learn about Playwright fixtures, browser contexts, pages, API requests, environment variables, and test configuration.

// ⭐ Interview Point

// If an interviewer asks:

// "What is the difference between JavaScript running in a browser and JavaScript running in Node.js?"

// A good answer is:

// JavaScript running in a browser has access to browser APIs such as window and document, while JavaScript running in Node.js has access to Node.js APIs such as fs, path, and process. Node.js allows JavaScript to run outside the browser.

// 🧠 Your turn — Practice
// Don't Google 😄

// Q1.
// // What is the main difference between JavaScript running in a browser and JavaScript running in Node.js?
//-> The main difference is that JavaScript in the browser has access to browser-specific APIs like `window` and `document`, while JavaScript in Node.js has access to Node.js-specific APIs like `fs`, `path`, and `process`.


// Q2.
// Why can we use document.querySelector() in browser JavaScript but not directly in normal Node.js code?
//-> We can use `document.querySelector()` in browser JavaScript because it is part of the browser's Document Object Model (DOM) API, which allows interaction with the webpage. In Node.js, there is no DOM or `document` object, so this method is not available.


// Q3.
// What is the purpose of fs in Node.js?
//-> The `fs` module in Node.js provides an API for interacting with the file system. It allows reading, writing, and manipulating files and directories on the server or local machine.

// Q4.
// In a Playwright test, where does the test JavaScript code run, and where does the webpage interaction happen?
//-> In a Playwright test, the test JavaScript code runs in the Node.js environment, while the webpage interaction happens in the browser controlled by Playwright. The test code uses Playwright's API to interact with elements on the webpage.

// Q5. Interview scenario
// An interviewer asks:
// "If Playwright automates a Chrome browser, does that mean the Playwright test itself is running inside Chrome?"
// Explain your answer.
//-> No, the Playwright test itself is not running inside Chrome. The test code runs in the Node.js environment, which controls the Chrome browser through Playwright's API. The browser is automated by Playwright, but the test execution occurs in Node.js, allowing for interaction with the browser and webpage without being confined to the browser's runtime.

// Send Q1–Q5. I'll evaluate them individually and score you. 💪


///--- validation-----////

// 🔥 Great work, macha. Let's evaluate Q1–Q5 individually.

// Q1 — Browser JavaScript vs Node.js

// Your answer:

// Browser JavaScript has browser-specific APIs like window and document, while Node.js has APIs like fs, path, and process.

// Score: 2/2 ✅

// Exactly correct.

// Key point: The JavaScript language is the same, but the runtime environment and available APIs are different.

// Q2 — Why document.querySelector() doesn't work in normal Node.js

// Your answer:

// document.querySelector() is part of the browser's DOM API. Node.js doesn't have a DOM or document object.

// Score: 2/2 ✅

// Excellent. 💯

// You correctly explained why, rather than simply saying "Node.js doesn't support it."

// Q3 — Purpose of fs

// Your answer:

// The fs module provides an API for interacting with the file system and allows reading, writing, and manipulating files and directories.

// Score: 2/2 ✅

// Correct.

// Small wording improvement for interviews:

// Instead of:

// "on the server or local machine"

// You can simply say:

// "fs is Node.js's file-system API used to read, write, update, delete, and manage files and directories."

// Q4 — Playwright: Node.js vs Browser

// Your answer:

// The test JavaScript code runs in Node.js, while webpage interaction happens in the browser controlled by Playwright.

// Score: 2/2 ✅

// Very good. 🔥

// This is one of the most important concepts for understanding Playwright architecture.

// Your mental model should be:

// Test Code
//    ↓
// Node.js
//    ↓
// Playwright
//    ↓
// Browser
//    ↓
// Web Page
// Q5 — Is the Playwright test running inside Chrome?

// Your answer:

// No. The test runs in Node.js, which controls Chrome through Playwright's API.

// Score: 2/2 ✅

// Excellent interview answer.

// You clearly separated:

// Test execution → Node.js
// Browser automation → Playwright
// Webpage → Browser
// 🏆 Final Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Total	10/10 — 100% 🎯
// ✅ Concept 2: Node.js vs Browser — COMPLETE

// You have now completed:

// Module 2
// └── Chapter 1 — Node.js Introduction
//     ├── Node.js and V8       ✅ 8/8
//     └── Node.js vs Browser   ✅ 10/10

// The tracker identifies both as P0 — Critical, and both were initially Not Started.

// 🧠 One sentence to remember

// Node.js runs the Playwright test code, while Playwright controls the browser where the web application runs.

// That distinction will help you a lot when we get into Playwright architecture and fixtures.

// ➡️ Next topic

// According to the tracker, we now move to:

// Module 2 → Chapter 2 — NPM Basics → npm basics
// Priority: P0 — CRITICAL

// We'll learn only npm basics first, then practice it before moving to package.json.