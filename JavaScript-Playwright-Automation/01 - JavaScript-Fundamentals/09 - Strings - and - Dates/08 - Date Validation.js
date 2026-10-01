// Chalooo macha 😎🔥

// Next Topic: Date Validation

// Create this file:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         └── 08 - Date Validation.js

// This is the last remaining topic in our Strings + Dates practical sequence. The roadmap includes date validation alongside test-data strings and timestamps.

// 1. What is Date Validation?

// Date validation means checking whether a date value is valid or invalid.

// For example:

// 2026-09-24

// is a valid date.

// But input such as:

// invalid-date

// is not a valid date.

// This is useful in automation when validating:

// API response dates
// UI date fields
// user-entered dates
// report dates
// transaction dates
// test data
// 2. Creating an Invalid Date

// JavaScript can create an invalid Date object:

// const date = new Date("invalid-date");

// console.log(date);

// The result represents an invalid date.

// To check it properly, we can use:

// date.getTime()
// 3. Checking with Number.isNaN()

// An invalid Date produces NaN when we call getTime().

// const date = new Date("invalid-date");

// console.log(Number.isNaN(date.getTime()));

// Output:

// true

// For a valid date:

// const date = new Date("2026-09-24");

// console.log(Number.isNaN(date.getTime()));

// Output:

// false

// So we can build a validation condition:

// const date = new Date("2026-09-24");

// if (Number.isNaN(date.getTime())) {
//     console.log("Invalid date");
// } else {
//     console.log("Valid date");
// }

// Output:

// Valid date
// 4. Why Number.isNaN()?

// NaN means:

// Not a Number

// An invalid Date's timestamp is NaN.

// So:

// Number.isNaN(date.getTime())

// means:

// "Is the timestamp of this Date invalid?"

// If true → invalid date.

// If false → valid Date object.

// Easy memory trick 🧠
// Valid Date
//     ↓
// getTime()
//     ↓
// number
//     ↓
// Number.isNaN() → false
// Invalid Date
//     ↓
// getTime()
//     ↓
// NaN
//     ↓
// Number.isNaN() → true
// 5. A Reusable Validation Function

// Since you already learned Functions, we can combine that knowledge.

// function isValidDate(date) {
//     return !Number.isNaN(date.getTime());
// }

// Then:

// const date = new Date("2026-09-24");

// console.log(isValidDate(date));

// Output:

// true

// For an invalid date:

// const date = new Date("invalid-date");

// console.log(isValidDate(date));

// Output:

// false
// Why the !?

// Remember:

// Number.isNaN(date.getTime())

// returns:

// true → invalid
// false → valid

// But our function is named:

// isValidDate()

// So we reverse it:

// !Number.isNaN(date.getTime())

// Therefore:

// Invalid → false
// Valid   → true
// 6. QA Automation Example 🔥

// Suppose an API gives us:

// const apiDate = "2026-09-24";

// const date = new Date(apiDate);

// if (Number.isNaN(date.getTime())) {
//     console.log("API returned invalid date");
// } else {
//     console.log("API date is valid");
// }

// This is useful when validating API response data.

// 7. Important: Valid Date vs Expected Format

// There's an important distinction.

// Consider:

// 2026-09-24

// We can check whether JavaScript can parse it as a valid date.

// But date validation can also mean checking whether the input follows the expected format.

// For example, if your application requires:

// YYYY-MM-DD

// you may want to validate both:

// Is it a valid date?
// Does it follow the expected format?

// For now, we're focusing on the first concept: valid vs invalid Date values.

// Don't mix this with advanced regex/date-format validation yet.

// 🧠 Key Summary
// new Date("2026-09-24")
//         ↓
// Valid Date
// new Date("invalid-date")
//         ↓
// Invalid Date

// Validation:

// Number.isNaN(date.getTime())

// means:

// true  → invalid
// false → valid

// Reusable version:

// function isValidDate(date) {
//     return !Number.isNaN(date.getTime());
// }
// 🎯 Complete Practice Set

// Answer Q1–Q10 together, macha. 🔥

// Q1
// What does this return?
// const date = new Date("2026-09-24");
// console.log(Number.isNaN(date.getTime()));

//Q1 Answer  : false

// Q2
// What does this return?
const date = new Date("invalid-date");
console.log(Number.isNaN(date.getTime()));

//Q2 Answer  : True

// Q3
// Explain what NaN means in JavaScript.

//Q3 ANSWEr: NaN ("Not a Number") represents the result of an invalid numeric operation, like a date that failed to parse.

// Q4
// What does this condition mean?
// Number.isNaN(date.getTime())
// Explain it in your own words.
// Q4: It checks whether a date's timestamp is invalid (i.e., the date failed to parse).



// Q5
// What will this print?
// const date = new Date("2026-09-24");
// if (Number.isNaN(date.getTime())) {
//     console.log("Invalid date");
// } else {
//     console.log("Valid date");
// }

// Q5: "Valid date" — the string parses successfully.



// Q6
// What will this print?
// const date = new Date("invalid-date");
// if (Number.isNaN(date.getTime())) {
//     console.log("Invalid date");
// } else {
//     console.log("Valid date");
// }

// Q6: "Invalid date" — the string can't be parsed, so getTime() is NaN.


// Q7 — Coding
// Write code to create:
// 2026-09-24
// and check whether it is a valid date.
// Expected:
// Valid date

// Q7: Number.isNaN(new Date("2026-09-24").getTime()) → false, so it logs "Valid date".



// Q8 — Coding 🔥
// Write code to create:
// invalid-date
// and check whether it is valid.
// Expected:
// Invalid date

const dates = new Date("invalid-date");
console.log(Number.isNaN(dates.getTime()) ? "Invalid date" : "Valid date");
// "Invalid date"

// Q9 — Coding 🔥
// Complete this function:
// function isValidDate(date) {
//     // your code
// }
// It should return:
// true
// for:
// new Date("2026-09-24")
// and:
// false
// for:
// new Date("invalid-date")

function isValidDate(date) {
    return !Number.isNaN(date.getTime());
}

console.log(isValidDate(new Date("2026-09-24")));   // true
console.log(isValidDate(new Date("invalid-date")));  // false

// Q10 — Interview Question
// Explain this code:
// function isValidDate(date) {
//     return !Number.isNaN(date.getTime());
// }
// Why do we use ! here?
// Take your time macha. Once you finish this, Date Validation will be complete, and then we'll do the final Strings + Dates mixed chapter test before marking the chapter complete. 💪🔥

// Q10 Answer : ! flips "is invalid" into "is valid" so the function's result matches its name.

// Macha 🔥 excellent — Date Validation is fully understood.

// 🏆 Score: 10/10 — 100%
// Q	Result	Evaluation
// Q1	✅	Correct
// Q2	✅	Correct
// Q3	✅	Correct
// Q4	✅	Correct
// Q5	✅	Correct
// Q6	✅	Correct
// Q7	✅	Correct
// Q8	✅	Correct
// Q9	✅	Correct
// Q10	✅	Excellent
// Q3 ✅

// Your explanation:

// NaN ("Not a Number") represents the result of an invalid numeric operation, like a date that failed to parse.

// Good. In this Date context, the important point is that an invalid Date produces NaN from getTime().

// Q4–Q6 ✅

// You correctly understand the flow:

// Valid Date
//    ↓
// date.getTime()
//    ↓
// number
//    ↓
// Number.isNaN() → false

// and:

// Invalid Date
//    ↓
// date.getTime()
//    ↓
// NaN
//    ↓
// Number.isNaN() → true
// Q9 🔥

// Your reusable function is exactly right:

// function isValidDate(date) {
//     return !Number.isNaN(date.getTime());
// }

// And your tests correctly produce:

// true
// false
// Q10 🔥

// Your answer:

// ! flips "is invalid" into "is valid" so the function's result matches its name.

// Perfect. That's a concise interview explanation.

// 🎉 STRINGS & DATES — ALL TOPICS COMPLETE
// String Basics                  ✅
// Template Literals              ✅
// Common String Methods          ✅
// Date Basics                     ✅
// Date Formatting & Comparison   ✅
// Test-Data Strings               ✅
// Timestamps                     ✅
// Date Validation                 ✅

// You've now completed the entire Strings + Dates topic set we've been working through. 💯🔥

// Next step

// Per your learning system, we should NOT immediately jump to ES6/OOP.

// We first need to do the:

// Strings + Dates — Final Mixed Chapter Test

// It will include:

// Concept questions
// Output prediction
// Coding
// String methods
// Template literals
// Dates
// Timestamps
// Date validation
// QA automation scenarios
// Interview questions

// Then I'll give you the final chapter score and we'll mark Strings & Dates = COMPLETE before moving to the next roadmap chapter. 🚀