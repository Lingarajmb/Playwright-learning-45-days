// //Chalooo macha 🔥

// 📅 Next Concept: Date Formatting & Comparison

// File path:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         └── 05 - Date Formatting and Comparison.js

// This continues the Strings + Dates section from the roadmap, which covers Date basics, formatting, and comparison.

// 1. Why do we need Date Formatting?

// A JavaScript Date object can display a long format:

// const date = new Date("2026-09-24T10:30:45");

// console.log(date);

// But in automation, we often need a simpler format such as:

// 2026-09-24

// or:

// 24-09-2026

// or:

// 2026-09-24 10:30:45

// For example, an API might return:

// 2026-09-24T10:30:45

// while the UI displays:

// 24/09/2026

// We may need to convert or compare these values during testing.

// 2. toISOString()

// One of the most useful built-in formatting methods is:

// toISOString()

// Example:

// const date = new Date("2026-09-24T10:30:45");

// console.log(date.toISOString());

// It produces an ISO-format date/time string, typically like:

// 2026-09-24T10:30:45.000Z
// Important

// The Z means the value is represented in UTC.

// So don't expect the output to always have your local timezone's clock value.

// 3. Getting only YYYY-MM-DD

// A simple way is:

// const date = new Date("2026-09-24T10:30:45");

// const formattedDate = date.toISOString().split("T")[0];

// console.log(formattedDate);

// Output:

// 2026-09-24

// Let's understand it:

// Step 1
// date.toISOString()

// gives something like:

// 2026-09-24T10:30:45.000Z
// Step 2
// .split("T")

// splits the string around T:

// [
//   "2026-09-24",
//   "10:30:45.000Z"
// ]
// Step 3
// [0]

// takes the first part:

// 2026-09-24
// 4. Manual Formatting

// We can also build our own format using Date methods.

// const date = new Date("2026-09-24");

// const year = date.getFullYear();
// const month = String(date.getMonth() + 1).padStart(2, "0");
// const day = String(date.getDate()).padStart(2, "0");

// const formattedDate = `${year}-${month}-${day}`;

// console.log(formattedDate);

// Output:

// 2026-09-24
// ⚠️ Why + 1?

// Remember:

// January → 0
// February → 1
// ...
// September → 8

// But humans expect September to be 09.

// Therefore:

// date.getMonth() + 1

// converts:

// 8 → 9
// 5. Why padStart()?

// Suppose the month is January.

// date.getMonth() + 1

// would give:

// 1

// But we want:

// 01

// So:

// String(1).padStart(2, "0")

// produces:

// 01

// Similarly:

// 9  → 09
// 24 → 24

// This helps create consistent date formats.

// 6. Date Comparison

// Now the important part. 🔥

// Suppose we have:

// const date1 = new Date("2026-09-24");
// const date2 = new Date("2026-09-30");

// We can compare them.

// console.log(date1 < date2);

// Output:

// true

// Because September 24 comes before September 30.

// 7. Greater Than
// console.log(date2 > date1);

// Output:

// true

// Because:

// September 30 > September 24
// 8. Equal Dates

// Be careful here. ⚠️

// This:

// const date1 = new Date("2026-09-24");
// const date2 = new Date("2026-09-24");

// console.log(date1 === date2);

// returns:

// false

// Why?

// Because date1 and date2 are two different Date objects.

// They contain the same date, but they are different objects in memory.

// 9. Correct Way to Compare Exact Date/Time

// Use:

// getTime()

// Example:

// const date1 = new Date("2026-09-24");
// const date2 = new Date("2026-09-24");

// console.log(date1.getTime() === date2.getTime());

// Output:

// true

// getTime() gives the number of milliseconds since the Unix epoch.

// You don't need to memorize the epoch details yet. For now remember:

// Same date/time → same timestamp

// So:

// date1.getTime() === date2.getTime()

// is useful for exact comparison.

// 10. Automation Example 🔥

// Imagine an API returns:

// 2026-09-24

// and the UI shows another date.

// You could create Date objects and compare them:

// const apiDate = new Date("2026-09-24");
// const uiDate = new Date("2026-09-24");

// console.log(apiDate.getTime() === uiDate.getTime());

// Output:

// true

// This type of comparison can be useful when validating API data against UI data.

// 🧠 Important Summary
// toISOString()
//     ↓
// Convert Date to ISO string

// getFullYear()
//     ↓
// Get year

// getMonth() + 1
//     ↓
// Get human-readable month number

// getDate()
//     ↓
// Get day of month

// getTime()
//     ↓
// Get timestamp for comparison

// And remember:

// date1 < date2

// ➡️ date1 is earlier

// date1 > date2

// ➡️ date1 is later

// date1.getTime() === date2.getTime()

// ➡️ exact date/time is equal

// 🎯 Complete Practice Set

// Answer Q1–Q10 together like before. Don't worry if some are challenging.

// Q1
// What does this method do?
// date.toISOString()

//Q1 Answer :  Converts a Date object to an ISO 8601 UTC string in the format YYYY-MM-DDTHH:mm:ss.sssZ.

// Q2
// What is the output?
const date = new Date("2026-09-24T10:30:45");
console.log(date.toISOString().split("T")[0]);

//Q2 answer : 2026-09-24

// Q3
// Why do we use:
// date.getMonth() + 1
// instead of just:
// date.getMonth()
// when creating a normal human-readable month number?

//Q3 answer : getMonth() is zero-indexed (0–11), so adding 1 converts it to the human-readable 1–12 month numbering.

// Q4
// What does this return?
// const date1 = new Date("2026-09-24");
// const date2 = new Date("2026-09-30");
// console.log(date1 < date2);

//Q4 answer : true

// Q5
// What does this return?
const date1 = new Date("2026-09-30");
const date2 = new Date("2026-09-24");
console.log(date1 > date2);

//Q5 answer : true

// Q6 🔥
// What will this return?
// const date1 = new Date("2026-09-24");
// const date2 = new Date("2026-09-24");
// console.log(date1 === date2);
// And explain why.

//Q6 answer : false, because Date objects are compared by reference, not value, even if they represent the same timestamp.


// Q7
// How would you correctly check whether the two dates in Q6 represent the exact same date/time?
//Q7 answer : date1.getTime() === date2.getTime() (or equivalently +date1 === +date2).


// Q8 — Coding
// Write JavaScript code to convert:
// 2026-09-24T10:30:45
// into:
// 2026-09-24
// using toISOString().

//Q8 answer : 
const jsdate = new Date("2026-09-24T10:30:45");
console.log(jsdate.toISOString().split("T")[0]);


// Q9 — Coding 🔥
// Create:
// 2026-09-24
// 2026-09-30
// as Date objects and write code to check whether the first date is earlier than the second date.
// Expected result:
// true

//Q9 answer : 

const jsdate1 = new Date("2026-09-24");
const jsdate2 = new Date("2026-09-30");
console.log(jsdate1 < jsdate2);

// Q10 — Interview Question
// Explain the difference between:
// date1 === date2
// and:
// date1.getTime() === date2.getTime()
// This one is important for interviews, so explain it in your own words. 💪
//Q10 Answer :  === compares object references (always false for distinct Date objects), while getTime() compares the underlying numeric timestamps, giving true value equality.



// Macha 🔥 this is a very strong answer set.

// 🏆 Score: 10/10 — 100%

// You got all 10 correct.

// Q	Result	Notes
// Q1	✅	Correct ISO/UTC explanation
// Q2	✅	Correct
// Q3	✅	Correct zero-based month explanation
// Q4	✅	Correct
// Q5	✅	Correct
// Q6	✅	Correct reference comparison
// Q7	✅	Correct getTime() comparison
// Q8	✅	Correct code
// Q9	✅	Correct code
// Q10	✅	Excellent interview explanation
// A few highlights 🔥

// Q1 — Excellent:

// Converts a Date object to an ISO 8601 UTC string...

// That's already interview-ready.

// Q6/Q10 — Especially good. You correctly identified that:

// date1 === date2

// compares the Date objects themselves, whereas:

// date1.getTime() === date2.getTime()

// compares their underlying timestamps.

// Q7 was also correct:

// date1.getTime() === date2.getTime()

// Your alternative:

// +date1 === +date2

// is also valid, although for interviews I'd recommend sticking with getTime() because it's much clearer to the interviewer.

// 📚 Strings & Dates progress
// String Basics                  ✅
// Template Literals              ✅
// Common String Methods          ✅
// Date Basics                     ✅
// Date Formatting & Comparison   ✅  10/10
// Remaining in this chapter

// According to the roadmap, the remaining Day 8 practical items are:

// Test-data strings ⏳
// Timestamps ⏳
// Date validation ⏳

// The roadmap specifically lists these under the Strings + Dates work.

// So Date Formatting & Comparison is COMPLETE. ✅

// When you're ready, we'll take Test-data Strings next — one concept at a time. 🔥