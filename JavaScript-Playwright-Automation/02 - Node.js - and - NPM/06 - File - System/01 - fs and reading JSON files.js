// Perfect, macha. 💪
// Next Topic — Module 2 → Chapter 6
// Following the tracker, we now move to:
// 📁 Exact folder
// Playwright - learning - 45 - days/
// └── 02 - NodeJS - and - NPM/
//     └── 06 - File - System/

// 📌 Topic: fs and reading JSON files
// Priority: P1 — HIGH Playwright_Automation_with_Java…
// Suggested file for your repository
// 01 - fs and reading JSON files.js

// This filename is a practical file name I’m suggesting; the tracker specifies the topic, not the filename.
// Concept 1 — Node.js File System (fs)
// 1. What is the File System?
// Node.js provides a built-in File System module, commonly called fs, that allows JavaScript code running in Node.js to interact with files and directories.
// For example, you can use it to:
// - Read a file
// - Write a file
// - Create a file
// - Update a file
// - Delete a file
// - Read directory contents
// For our Playwright automation journey, the important use case is reading test data/configuration from files.
// 2. Importing fs
// With CommonJS:
// const fs = require("fs");

// With ES Modules:
// import fs from "fs";

// Since you've already learned JavaScript Modules, you should recognize both styles.
// 3. Reading a text file
// Suppose we have:
// test-data.txt

// containing:
// Hello Playwright

// We can read it using:
// const fs = require("fs");

// const data = fs.readFileSync("test-data.txt", "utf-8");

// console.log(data);

// Output:
// Hello Playwright

// Important
// fs.readFileSync()

// means the file is read synchronously.
// And:
// "utf-8"

// tells Node.js to return the file contents as text rather than a raw Buffer.
// 4. Reading JSON — important for automation
// This is where fs becomes particularly useful.
// Suppose you have:
// testData.json
// {
//   "username": "testuser",
//   "role": "admin"
// }

// We can read it:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");

// console.log(data);

// The result is still a string:
// {"username":"testuser","role":"admin"}

// To convert that JSON string into a JavaScript object:
// const testData = JSON.parse(data);

// console.log(testData.username);
// console.log(testData.role);

// Output:
// testuser
// admin

// So remember this flow:
// JSON file
//    ↓
// fs.readFileSync()
//    ↓
// JSON string
//    ↓
// JSON.parse()
//    ↓
// JavaScript object

// Automation example
// You could keep test data in:
// testData.json

// and use it in your automation code:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// console.log(`Username: ${testData.username}`);

// This separates test data from test logic, which is useful in automation frameworks.
// One important distinction
// Don't confuse:
// fs.readFileSync()

// with:
// JSON.parse()

// They do different jobs.
// fs.readFileSync() → reads the file.
// JSON.parse() → converts JSON text into a JavaScript object.
// 🎯 Your first practice
// Don't answer everything at once. We're following one concept at a time.
// Answer these Q1–Q4:
// Q1. What is the purpose of Node.js's fs module?
//-> The purpose of Node.js's fs module is to provide a built-in interface for interacting with the file system. It allows JavaScript code running in Node.js to perform various file operations such as reading, writing, creating, updating, and deleting files, as well as reading directory contents. This is particularly useful for tasks like reading test data or configuration files in automation frameworks.


// Q2. What does this code do?
// const data = fs.readFileSync("test.txt", "utf-8");
//-> This code reads the contents of the file named "test.txt" synchronously using the fs.readFileSync() method. The "utf-8" argument specifies that the file contents should be returned as a string rather than a raw Buffer. The result is stored in the variable 'data', which will contain the text content of "test.txt".

// Q3. After reading a JSON file using fs.readFileSync(), why do we use JSON.parse()?
//-> We use JSON.parse() to convert the JSON string returned by fs.readFileSync() into a JavaScript object. This allows us to access the data in a structured way within our code.

// Q4. What is the difference between these two?
// fs.readFileSync()
// and
// JSON.parse()
//-> The difference between fs.readFileSync() and JSON.parse() is that fs.readFileSync() is a method used to read the contents of a file from the file system, returning the data as a string (or Buffer). On the other hand, JSON.parse() is a method used to convert a JSON-formatted string into a JavaScript object, allowing for structured access to the data. In summary, fs.readFileSync() reads the file, while JSON.parse() processes the string into an object.

// Send Q1–Q4, macha. I'll evaluate them individually before we move to the next concept. 💪

///////--------validation --------///////

// Macha, excellent. 🔥 All four answers are technically correct and well explained.
// Evaluation — File System Q1–Q4
// Q1 — Purpose of fs
// Score: 2/2 ✅
// You correctly explained that fs is a built-in Node.js module for interacting with the file system.
// You also covered:
// - Reading files
// - Writing files
// - Creating/updating/deleting files
// - Reading directories
// - Automation use cases
// Excellent.
// Q2 — fs.readFileSync()
// Score: 2/2 ✅
// Correct explanation:
// const data = fs.readFileSync("test.txt", "utf-8");

// You correctly identified:
// - readFileSync() reads the file
// - It does so synchronously
// - "utf-8" returns the contents as text
// - The result is stored in data
// Correct.
// Q3 — Why JSON.parse()?
// Score: 2/2 ✅
// Exactly right.
// JSON file
//    ↓
// fs.readFileSync()
//    ↓
// JSON string
//    ↓
// JSON.parse()
//    ↓
// JavaScript object

// Your explanation that JSON.parse() allows structured access to the data is correct.
// Q4 — fs.readFileSync() vs JSON.parse()
// Score: 2/2 ✅
// Very good distinction:
// fs.readFileSync() reads the file.

// JSON.parse() processes the JSON string into a JavaScript object.

// That's the key concept I wanted you to understand.
// 🏆 Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Total	8/8 — 100% 🎯


// Concept 1 — COMPLETE ✅
// You've successfully understood the foundation of the fs module and reading JSON.
// We still have the remaining sub-concepts inside the single tracker topic fs and reading JSON files. The next one should be synchronous vs asynchronous file reading, before we move toward the automation use case.
// Keep going like this, macha. 💪



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Absolutely, dude. 😎 Let's do one sub-concept at a time.
//************************************************ */
// Concept 2 — Synchronous vs Asynchronous File Reading
//************************************************ */


// We are still inside:
// 06 - File - System
// └── fs and reading JSON files

// 1. Synchronous — readFileSync()
// const fs = require("fs");

// const data = fs.readFileSync("test.txt", "utf-8");

// console.log(data);
// console.log("File reading completed");

// Here, Node.js waits for the file-reading operation to finish before moving to the next statement.
// So the flow is:
// Start
//   ↓
// Read file
//   ↓
// Wait until reading finishes
//   ↓
// console.log(data)
//   ↓
// console.log("File reading completed")

// 2. Asynchronous — readFile()
// Node.js also provides:
// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });

// console.log("File reading started");

// Here, Node.js doesn't wait for the file-reading operation to finish before continuing.
// The callback runs when the file has been read.
// Conceptually:
// Start
//   ↓
// Start reading file
//   ↓
// Continue executing other code
//   ↓
// "File reading started"
//   ↓
// File finishes reading
//   ↓
// Callback executes

// The key difference
// readFileSync()	readFile()
// Synchronous	Asynchronous
// Waits for operation to finish	Doesn't block while waiting
// Simpler for small scripts/config reading	Useful when you don't want to block execution
// Returns the file data directly	Uses a callback to receive the result


// For our automation context
// You'll often see:
// const data = fs.readFileSync("testData.json", "utf-8");

// when a script needs to load some test data before continuing.
// The important thing for now is simply:
// Sync = wait. Async = don't wait.

// 🎯 Practice — Q1 to Q4
// Q1. What does "synchronous" mean when using fs.readFileSync()?
//-> "Synchronous" means that when using fs.readFileSync(), the execution of the code is blocked until the file reading operation is completed. The program waits for the file to be read and the data to be returned before moving on to the next line of code. This can lead to a simpler flow for small scripts or configuration reading, but it can also cause delays if the file reading takes a long time, as it prevents other code from executing during that time.

// Q2. What does "asynchronous" mean when using fs.readFile()?
//-> "Asynchronous" means that when using fs.readFile(), the file reading operation is initiated, but the program does not wait for it to complete. Instead, it continues executing subsequent code while the file is being read in the background. Once the file reading is finished, a callback function is invoked with the result (either the data or an error). This allows for non-blocking execution, making it suitable for scenarios where you don't want to halt other operations while waiting for file I/O to complete.

// Q3. What is the main difference between:
// fs.readFileSync()
// and
// fs.readFile()
//-> The main difference between fs.readFileSync() and fs.readFile() is that fs.readFileSync() is synchronous, meaning it blocks the execution of code until the file reading operation is complete, while fs.readFile() is asynchronous, allowing the program to continue executing other code while the file is being read. fs.readFileSync() returns the file data directly, whereas fs.readFile() uses a callback function to handle the result once the reading is finished.


// Q4. In this code, which statement executes first?
// const fs = require("fs");
// fs.readFile("test.txt", "utf-8", (err, data) => {
//     console.log(data);
// });
// console.log("Done");
// And why?

//-> In this code, the statement console.log("Done"); executes first. This is because fs.readFile() is asynchronous, meaning that it initiates the file reading operation and immediately continues to the next line of code without waiting for the file reading to complete. The callback function provided to fs.readFile() will be executed later, once the file has been read, allowing "Done" to be logged before the file's contents are printed.

// Send Q1–Q4, dude. I'll evaluate them individually. 💪

/////-------validation --------///////

// Macha, excellent work again. 🔥 You clearly understand the difference between synchronous and asynchronous file reading.
// Evaluation — Q1 to Q4
// Q1 — Synchronous
// Score: 2/2 ✅
// You correctly explained that:
// fs.readFileSync() blocks execution until the file-reading operation completes.

// You also correctly connected this to the simpler execution flow.
// Technically correct.
// Q2 — Asynchronous
// Score: 2/2 ✅
// Perfect.
// You correctly explained:
// - File reading starts.
// - The program doesn't wait.
// - Subsequent code can execute.
// - Callback runs after the operation completes.
// - Callback receives either data or an error.
// Excellent understanding.
// Q3 — Main difference
// Score: 2/2 ✅
// Exactly right:
// readFileSync()
// → synchronous
// → blocks execution
// → returns data directly

// readFile()
// → asynchronous
// → doesn't block execution
// → callback handles result

// Correct.
// Q4 — Which executes first?
// Score: 2/2 ✅
// Correct answer:
// console.log("Done");

// executes before:
// console.log(data);

// because fs.readFile() is asynchronous.
// Expected order:
// Done
// <contents of test.txt>

// Your explanation is correct.
// 🏆 Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Total	8/8 — 100% 🎯


// Concept 2 — COMPLETE ✅
// So far:
// - Concept 1: fs module + reading JSON → ✅ 100%
// - Concept 2: Synchronous vs Asynchronous file reading → ✅ 100%
// Next we'll take one sub-concept only: reading a JSON file with fs.readFileSync() + JSON.parse(), including the actual data flow. 💪


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Perfect, dude. 😎

//************************************************ */
// Concept 3 — Reading a JSON File with fs.readFileSync() + JSON.parse()
//************************************************ */
// We are still inside the same tracker topic:
// 06 - File - System
// └── fs and reading JSON files

// Step 1 — Create a JSON file
// Suppose we have:
// testData.json

// with:
// {
//   "username": "testuser",
//   "role": "admin",
//   "environment": "QA"
// }

// Step 2 — Read the file
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");

// console.log(data);

// At this point, data is a string, not a JavaScript object.
// Conceptually:
// testData.json
//       ↓
// fs.readFileSync()
//       ↓
// JSON text/string

// Step 3 — Convert the JSON string into an object
// Now:
// const testData = JSON.parse(data);

// The flow becomes:
// JSON file
//    ↓
// fs.readFileSync()
//    ↓
// JSON string
//    ↓
// JSON.parse()
//    ↓
// JavaScript object

// Now we can access individual properties:
// console.log(testData.username);
// console.log(testData.role);
// console.log(testData.environment);

// Output:
// testuser
// admin
// QA

// Why is this useful in automation?
// Imagine you have test data:
// {
//   "username": "testuser",
//   "password": "password123"
// }

// Instead of putting the data directly inside your test logic, you can load it from a JSON file.
// For example:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// console.log(testData.username);

// This separates:
// Test data
// from
// Test logic
// which is useful when building automation frameworks.
// ⚠️ Important distinction
// Don't think:
// fs.readFileSync()

// automatically gives you a JavaScript object.
// It doesn't.
// For JSON:
// fs.readFileSync()
// → reads the file

// JSON.parse()
// → converts the JSON text into a JavaScript object

// That's the key concept.
// 🎯 Practice — Q1 to Q4
// Q1.
// Consider this testData.json:
// {
//   "username": "admin",
//   "role": "tester"
// }
// What will data contain after this?
// const data = fs.readFileSync("testData.json", "utf-8");
// Is data a string or a JavaScript object?

//-> After executing const data = fs.readFileSync("testData.json", "utf-8");, the variable 'data' will contain a string. Specifically, it will be the JSON-formatted text from the testData.json file, which is: '{"username":"admin","role":"tester"}'. It is not yet a JavaScript object; it is still a string representation of the JSON data. To convert it into a JavaScript object, you would need to use JSON.parse(data).
// Q2.
// Why do we need this?
// const testData = JSON.parse(data);
//-> We need the line const testData = JSON.parse(data); to convert the JSON-formatted string stored in 'data' into a JavaScript object. This allows us to access the properties of the JSON data (like 'username' and 'role') using standard JavaScript object notation (e.g., testData.username). Without parsing the string, we would not be able to work with the data in a structured way, as it would remain a plain string rather than an object with accessible properties.


// Q3.
// After:
// const testData = JSON.parse(data);
// how would you access the username value?
//-> You would access the username value using testData.username.


// Q4. Automation scenario
// You have:
// {
//   "username": "admin",
//   "password": "Pass123",
//   "role": "tester"
// }
// Write JavaScript code that:
// 1. Imports fs
// 2. Reads testData.json
// 3. Converts the JSON string into an object
// 4. Prints the username and role
//-> Here's the JavaScript code that accomplishes the specified tasks:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// console.log(testData.username);
// console.log(testData.role);

// Send Q1–Q4, dude. 💪

///////-------validation --------///////

// Excellent, dude. 🔥 You got all four exactly right.
// Evaluation — Q1 to Q4
// Q1 — What does data contain?
// Score: 2/2 ✅
// Correct:
// const data = fs.readFileSync("testData.json", "utf-8");

// data contains the JSON text as a string, not an object.
// You correctly explained that JSON.parse(data) is required to convert it into an object.
// Q2 — Why JSON.parse()?
// Score: 2/2 ✅
// Exactly right.
// const testData = JSON.parse(data);

// converts:
// JSON string → JavaScript object

// This allows:
// testData.username
// testData.role

// Excellent.
// Q3 — Access username
// Score: 2/2 ✅
// Correct:
// testData.username

// Q4 — Automation scenario
// Score: 2/2 ✅
// Your code is correct:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// console.log(testData.username);
// console.log(testData.role);

// Expected output:
// admin
// tester

// You completed all four requirements correctly.
// 🏆 Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Total	8/8 — 100% 🎯


// Concept 3 — COMPLETE ✅
// Your understanding now is:
// testData.json
//      ↓
// fs.readFileSync()
//      ↓
// JSON string
//      ↓
// JSON.parse()
//      ↓
// JavaScript object
//      ↓
// testData.username
// testData.role

// So far:
// - Concept 1 — fs module → ✅
// - Concept 2 — Sync vs Async → ✅
// - Concept 3 — Reading JSON + JSON.parse() → ✅
// We have one important sub-concept left: using this pattern in a real Playwright automation scenario. 💪



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//************************************************ */
// Concept 4 — Using JSON Test Data in Playwright
//************************************************ */

// This is the automation-relevant sub-concept of our current tracker topic:
// fs and reading JSON files
// The idea is simple: instead of hardcoding test data inside the test, we can read it from a JSON file.
// Example JSON test data
// {
//   "username": "admin",
//   "password": "Pass123"
// }

// Then in JavaScript:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// Now:
// testData.username

// gives:
// admin

// and:
// testData.password

// gives:
// Pass123

// Playwright-style example
// Conceptually, you could use that data in a test:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// await page.getByLabel("Username").fill(testData.username);
// await page.getByLabel("Password").fill(testData.password);

// The important separation is:
// testData.json
//      ↓
// Test data
//      ↓
// JavaScript reads it
//      ↓
// Playwright uses the values
//      ↓
// Test executes

// Why this is useful
// Instead of:
// await page.getByLabel("Username").fill("admin");

// you can use:
// await page.getByLabel("Username").fill(testData.username);

// Now the test data is separated from the test logic.
// Note: In a real Playwright framework, there are also cleaner ways to load test data, and sensitive passwords should not normally be stored as plain JSON. For this lesson, we're focusing specifically on understanding the fs → JSON.parse → Playwright flow.

// 🎯 Final Practice — Q1 to Q4
// Q1
// Why might an automation framework keep test data in a JSON file instead of directly inside the Playwright test?
//-> An automation framework might keep test data in a JSON file instead of directly inside the Playwright test for several reasons:
// 1. Separation of Concerns: Keeping test data separate from test logic makes the code cleaner and easier to maintain.
// 2. Reusability: Test data can be reused across multiple tests without duplication.

// Q2
// What does this give us?
// testData.username
// if testData.json contains:
// {
//   "username": "admin"
// }
//-> If testData.json contains {"username": "admin"}, then testData.username gives us the value "admin". It allows us to access the username property from the JavaScript object created by parsing the JSON file, enabling us to use this value in our Playwright tests or any other part of our code that requires it.


// Q3
// Complete the missing line:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");

// // Missing line

// console.log(testData.username);

//-> The missing line is:   const testData = JSON.parse(data);


// Q4 — Practical Playwright scenario
// Given:
// {
//   "username": "admin",
//   "password": "Pass123"
// }
// Write the JavaScript code to:
// 1. Read the JSON file.
// 2. Convert it into a JavaScript object.
// 3. Use testData.username and testData.password in these Playwright statements:
// await page.getByLabel("Username").fill(...);
// await page.getByLabel("Password").fill(...);

//-> Here's the JavaScript code that accomplishes the specified tasks:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// await page.getByLabel("Username").fill(testData.username);
// await page.getByLabel("Password").fill(testData.password);

// Send Q1–Q4, dude. After I evaluate these, we'll know whether the entire fs and reading JSON files topic is ready to mark complete. 💪

/////////////////---validation---////////////////


// Macha, excellent! 🔥 This is another full-score round.
// Evaluation — Q1 to Q4
// Q1 — Why keep test data in JSON?
// Score: 2/2 ✅
// Your two points are exactly relevant:
// - Separation of concerns — test data is separated from test logic.
// - Reusability — the same data can be reused across tests.
// You could also mention maintainability, but you already answered the question correctly.
// Q2 — testData.username
// Score: 2/2 ✅
// Correct:
// testData.username

// returns:
// admin

// You correctly understand that testData is the JavaScript object created after JSON.parse().
// Q3 — Missing line
// Score: 2/2 ✅
// Exactly:
// const testData = JSON.parse(data);

// Perfect.
// Q4 — Playwright scenario
// Score: 2/2 ✅
// Your complete code is correct:
// const fs = require("fs");

// const data = fs.readFileSync("testData.json", "utf-8");
// const testData = JSON.parse(data);

// await page.getByLabel("Username").fill(testData.username);
// await page.getByLabel("Password").fill(testData.password);

// You correctly connected the entire flow:
// JSON file
//    ↓
// fs.readFileSync()
//    ↓
// JSON string
//    ↓
// JSON.parse()
//    ↓
// JavaScript object
//    ↓
// Playwright test

// 🏆 Final Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Total	8/8 — 100% 🎯


// 🎉 File System Topic — COMPLETE
// You've now completed all the sub-concepts we covered under the tracker topic:
// 1. fs module and file operations → ✅
// 2. Synchronous vs asynchronous file reading → ✅
// 3. Reading JSON + JSON.parse() → ✅
// 4. Using JSON test data in Playwright → ✅
// The tracker itself defines this as one topic: fs and reading JSON files, Priority P1 – HIGH. Playwright_Automation_with_Java…
// Next topic according to the tracker
// Module 3 → Chapter 1 — Git Basics
// First topic:
// git clone / status / add / commit

// Priority: P0 — CRITICAL. Playwright_Automation_with_Java…
// We should update the tracker for File System = Completed before moving on.