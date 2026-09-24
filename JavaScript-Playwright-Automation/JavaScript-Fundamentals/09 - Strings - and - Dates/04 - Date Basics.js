// Chalooo macha 🔥

// 📅 Next Concept: Date Basics

// File path:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         └── 04 - Date Basics.js

// This stays within Day 8 — Strings + Dates, where the roadmap covers Date basics, formatting, and comparison.

// 1. What is Date in JavaScript?

// JavaScript provides the built-in Date object to work with:

// Current date
// Current time
// Specific dates
// Date components like year, month, day
// Comparing dates
// Timestamps

// For automation, dates are useful for things like:

// Test execution time
// Transaction date
// Report date
// Expiry date
// Created date
// Updated date
// API timestamps
// 2. Getting the Current Date and Time

// Use:

// const currentDate = new Date();

// console.log(currentDate);

// The exact output depends on when the code runs.

// For example, it may look like:

// Thu Sep 24 2026 17:30:00 GMT+0530 (India Standard Time)

// ⚠️ Don't memorize the exact output.

// The important part is:

// new Date()

// It creates a Date object representing the current date and time.

// 3. typeof with Date

// Try:

// const currentDate = new Date();

// console.log(typeof currentDate);

// Output:

// object

// Important:

// Date → object

// because Date is a JavaScript object.

// 4. Creating a Specific Date

// You can provide a date to Date.

// const date = new Date("2026-09-24");

// console.log(date);

// This creates a Date object representing that date.

// You can also provide date and time:

// const date = new Date("2026-09-24T10:30:00");

// console.log(date);
// 5. Getting the Year

// Use:

// getFullYear()

// Example:

// const date = new Date("2026-09-24");

// console.log(date.getFullYear());

// Output:

// 2026
// 6. Getting the Month ⚠️ Important

// Use:

// getMonth()

// But JavaScript months are zero-indexed.

// That means:

// January  → 0
// February → 1
// March    → 2
// April    → 3
// ...
// September → 8
// ...
// December → 11

// Example:

// const date = new Date("2026-09-24");

// console.log(date.getMonth());

// Output:

// 8

// Why 8?

// Because September is month number 8 in JavaScript.

// Remember this 🔥
// JavaScript Date month:
// January = 0
// December = 11
// 7. Getting the Day of the Month

// Use:

// getDate()

// Example:

// const date = new Date("2026-09-24");

// console.log(date.getDate());

// Output:

// 24

// ⚠️ Don't confuse:

// getDate()

// with:

// getDay()

// We'll see getDay() shortly.

// 8. Getting the Day of the Week

// Use:

// getDay()

// It returns:

// Sunday    → 0
// Monday    → 1
// Tuesday   → 2
// Wednesday → 3
// Thursday  → 4
// Friday    → 5
// Saturday  → 6

// For example:

// const date = new Date("2026-09-24");

// console.log(date.getDay());

// September 24, 2026 is Thursday, so:

// 4
// Very important distinction
// getDate() → day of month
// getDay()  → day of week

// For example:

// September 24

// getDate() → 24

// Thursday:

// getDay() → 4

// 9. Getting Hours, Minutes and Seconds
// Hour
// date.getHours()
// Minutes
// date.getMinutes()
// Seconds
// date.getSeconds()

// Example:

// const date = new Date("2026-09-24T10:30:45");

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// Output:

// 10
// 30
// 45
// 🧠 Important Methods So Far
// Method	Returns
// getFullYear()	Year
// getMonth()	Month 0–11
// getDate()	Day of month 1–31
// getDay()	Day of week 0–6
// getHours()	Hour
// getMinutes()	Minutes
// getSeconds()	Seconds
// 10. Automation Example

// Suppose an API response contains:

// const createdDate = new Date("2026-09-24T10:30:00");

// console.log(createdDate.getFullYear());

// You could validate:

// if (createdDate.getFullYear() === 2026) {
//     console.log("Year validation passed");
// }

// This is the kind of basic date handling that becomes useful when validating API response timestamps, transaction dates, report dates, etc.

// 🎯 Practice Time — Date Basics

// Don't run these first. Try to answer from your understanding.

// Q1

// What is the output type?

// const date = new Date();

// console.log(typeof date);
// Q2

// What does this create?

// const date = new Date("2026-09-24");

// Explain in one sentence.

// Q3

// What is the output?

// const date = new Date("2026-09-24");

// console.log(date.getFullYear());
// Q4

// What does getMonth() return for September?

// A) 9
// B) 8
// C) 10
// D) 7
// Q5

// What is the difference between:

// getDate()
// getDay()
// Q6

// What is the output?

// const date = new Date("2026-09-24");

// console.log(date.getDate());
// console.log(date.getDay());
// Q7

// For this date:

// const date = new Date("2026-09-24T10:30:45");

// What will these return?

// date.getHours()
// date.getMinutes()
// date.getSeconds()
// Q8 — Coding

// Write code to create:

// September 24, 2026

// and print the year.

// Q9 — Coding

// Write code to create:

// 2026-09-24T10:30:45

// and print:

// Year:
// Month:
// Date:
// Hour:
// Minute:
// Second:
// Q10 — Interview 🔥

// Explain this:

// Why does JavaScript return 8 for September when using getMonth()?

// Send Q1–Q10 together, macha. I'll evaluate each one and score you like before. 💪🔥