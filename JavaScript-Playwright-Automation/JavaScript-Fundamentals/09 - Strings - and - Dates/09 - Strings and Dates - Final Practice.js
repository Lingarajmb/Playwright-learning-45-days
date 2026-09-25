// Chalooo macha 🔥😎

// 🧪 Strings + Dates — Final Mixed Chapter Test

// This is the final chapter test before we mark Strings + Dates = COMPLETE and move to the next roadmap chapter.

// Rules
// Q1–Q15
// Don't look back at previous answers if possible.
// Mix of concept, output, coding, and QA automation.
// For coding questions, write actual JavaScript.
// I'll evaluate each answer and give a final percentage + chapter status.


// Part A — Concepts
// Q1
// What is the difference between:
// const name = "Lingaraj";
// and:
// const name = `Lingaraj`;

//Q1 Answer : No functional difference here — both hold the same string, but backticks (template literals) additionally support ${} interpolation and multi-line text, which regular quotes don't.

// Q2
// Explain the difference between:
// includes()
// startsWith()
// endsWith()
// Give one example for each.

//Q2 Answer :
// includes() — checks if a substring exists anywhere in the string.
// "Lingaraj".includes("gar"); // true
// startsWith() — checks if the string begins with a specific substring.
// "Lingaraj".startsWith("Lin"); // true
// endsWith() — checks if the string ends with a specific substring.
// "Lingaraj".endsWith("raj"); // true
// All three return a boolean and are case-sensitive.

// Q3
// What is the difference between:
// getDate()
// getDay()
// getMonth()

//Q3 Answer : getDate() returns the day of the month (1–31), getDay() returns the day of the week (0–6, Sun–Sat), and getMonth() returns the zero-indexed month (0–11, Jan–Dec).

// Q4
// Why does this return 8 for September?
// new Date("2026-09-24").getMonth()
//Q4 Answer : Because getMonth() is zero-indexed — January is 0, so counting up, September (the 9th month) lands at index 8.

// Part B — Output Prediction
// Q5
// What is the output?
const message = "  Playwright Automation  ";
console.log(message.trim().toUpperCase());

//Q5 Answer : PLAYWRIGHT AUTOMATION

// Q6
// What is the output?
// const name = "Lingaraj";
// const experience = 4;
// console.log(`${name} has ${experience} years of experience`);

//Q6 Answer : Lingaraj has 4  years of experience

// Q7
// What is the output?
const text = "Playwright";
console.log(text.slice(0, 5));
console.log(text.indexOf("wright"));
console.log(text.includes("Play"));

//Q7 Answer : Playw And 4 And true


// Q8
// What is the output?
const date = new Date("2026-09-24T10:30:45");
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());

//Q8 Answer : 2026 and 8 And  24 And 10

// Part C — Coding

// Q9
// Write code that takes:
// const userName = "  Lingaraj  ";
// and produces:
// lingaraj
// using string methods.

//Q9 Answer : 
const userName = "  Lingaraj  ";
const a = userName.trim();
console.log(a.toLowerCase());

// Q10
// Create this dynamic URL:
// /users/101/profile
// using:
// const userId = 101;
// Use a template literal.

//Q10 Answer :

const userId = 101;
console.log(`/users/${userId}/profile`);


// Q11 🔥
// Write code to check whether:
// const actualMessage = "User created successfully";
// contains:
// created successfully
// Expected:
// true

//Q11 Answer ;
const actualMessage = "User created successfully";
console.log(actualMessage.includes("created successfully"));


// Q12
// Create these two Date objects:
// 2026-09-24
// 2026-09-30
// Then check whether the first date is earlier than the second date.
// Expected:
// true

//Q12 Answer:
const date1 = new Date("2026-09-24");
const date2 = new Date("2026-09-30");

console.log(date1 < date2); // true


// Part D — Timestamps & Validation

// Q13
// Write code to generate:
// testuser_<current timestamp>
// using Date.now().

//Q13 Answer:
const testUser = `testuser_${Date.now()}`;
console.log(testUser);

// Q14 🔥
// Write a reusable function:
// function isValidDate(date) {
//     // your code
// }
// It must return:
// true
// for:
// new Date("2026-09-24")
// and:
// false
// for:
// new Date("invalid-date")

//Q14 Answer :
function isValidDate(date) {
    return !Number.isNaN(date.getTime());
}

console.log(isValidDate(new Date("2026-09-24")));   // true
console.log(isValidDate(new Date("invalid-date")));  // false


// Part E — QA Automation / Interview

// Q15 🔥🔥
// Imagine an API returns:
// const createdAt = "2026-09-24T10:00:00";
// and another field returns:
// const updatedAt = "2026-09-24T10:05:00";
// Write JavaScript that:
// Converts both to Date objects.
// Compares their timestamps.
// Verifies that updatedAt happened after createdAt.
// Prints:
// Update happened after creation
// if the condition is true.

//Q15 Answer :
const createdAt = new Date("2026-09-24T10:00:00");
const updatedAt = new Date("2026-09-24T10:05:00");

if (updatedAt.getTime() > createdAt.getTime()) {
    console.log("Update happened after creation");
}




///---------------validation and score-------------------------////

// Macha 🔥 Final Mixed Chapter Test evaluation is done.

// 🏆 Final Score: 9.8/10 — 98%

// You did extremely well. Only one minor output-format mistake.

// Q	Result	Evaluation
// Q1	✅	Excellent
// Q2	✅	Excellent
// Q3	✅	Excellent
// Q4	✅	Correct
// Q5	✅	Correct
// Q6	⚠️	Extra space in stated output
// Q7	✅	Correct
// Q8	✅	Correct
// Q9	✅	Correct
// Q10	✅	Correct
// Q11	✅	Correct
// Q12	✅	Correct
// Q13	✅	Correct
// Q14	✅	Correct
// Q15	✅	Excellent
// Q6 — only correction

// You wrote:

// Lingaraj has 4 years of experience

// There is an extra space between 4 and years.

// The actual output is:

// Lingaraj has 4 years of experience

// Your concept and code were correct, so this is only an output-format issue, not a conceptual mistake.

// Q15 🔥

// Perfect QA-oriented solution:

// const createdAt = new Date("2026-09-24T10:00:00");
// const updatedAt = new Date("2026-09-24T10:05:00");

// if (updatedAt.getTime() > createdAt.getTime()) {
//     console.log("Update happened after creation");
// }

// Exactly what the scenario asked for.

// 🎉 STRINGS + DATES — COMPLETE
// String Basics                  ✅
// Template Literals              ✅
// Common String Methods          ✅
// Date Basics                     ✅
// Date Formatting & Comparison   ✅
// Test-Data Strings               ✅
// Timestamps                     ✅
// Date Validation                 ✅
// Final Mixed Test                ✅ 98%
// Chapter Status: COMPLETE ✅

// I also updated your Daily Study Tracker to mark Chapter 9 — Strings and Dates as Done, including the final 100% chapter-test result from the individual topic practices and the 98% final mixed test.

// Download the updated tracker

// 🚀 Next roadmap chapter

// Chapter 10 — ES6+ Features