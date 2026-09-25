// Chalooo macha 😎🔥
// Next Topic: Timestamps
// Create this file:
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         └── 07 - Timestamps.js

// This is the next remaining item in our Strings + Dates sequence. The roadmap specifically includes timestamps as part of the practical work for this chapter.
// 1. What is a Timestamp?
// A timestamp is a numeric representation of a specific point in time.
// In JavaScript, we commonly work with timestamps as milliseconds.

// Example:
// const date = new Date("2026-09-24T10:30:45");
// console.log(date.getTime());
// The result will be a large number, representing that date/time as milliseconds from the JavaScript time reference point.
// You don't need to memorize the exact number.
// The important concept is:
// Date/Time
//    ↓
// getTime()
//    ↓
// Numeric timestamp

// 2. getTime()
// You already saw this while learning Date comparison.
// const date = new Date("2026-09-24");
// console.log(date.getTime());
// getTime() returns the timestamp in milliseconds.
// This is useful because numbers are easy to compare.

// For example:
// const date1 = new Date("2026-09-24");
// const date2 = new Date("2026-09-30");
// console.log(date1.getTime() < date2.getTime());
// Output: true

// 3. Current Timestamp
// You can get the current timestamp with:
// const timestamp = Date.now();
// console.log(timestamp);
// Date.now() returns the current time as a timestamp in milliseconds.

// So:
// Date.now()
// is essentially useful when you want:
// "Give me the current time as a number."

// 4. Date.now() vs getTime()
// These are closely related, but they're used slightly differently.
// Date.now()
// Gets the timestamp for right now:
// const currentTimestamp = Date.now();
// console.log(currentTimestamp);
// getTime()
// Gets the timestamp from a Date object:
// const date = new Date("2026-09-24");
// console.log(date.getTime());

// Think:
// Date.now()
//     ↓
// Current timestamp

// date.getTime()
//     ↓
// Timestamp of that Date object

// 5. Why Are Timestamps Useful in Automation?
// This is where it becomes relevant to your QA automation work. 🔥
// Unique test data
// You may need a unique value:
// const timestamp = Date.now();
// const userName = `testuser_${timestamp}`;
// console.log(userName);
// Example output:
// testuser_1790XXXXXXXXX
// The exact number changes every time.

// So instead of:
// testuser1
// testuser2
// testuser3

// you can dynamically generate:
// testuser_<timestamp>

// 6. API Testing Example
// Suppose an API returns:

// createdAt
// with a date/time.
// You can convert it into a Date object:
// const createdAt = new Date("2026-09-24T10:30:45");
// console.log(createdAt.getTime());
// Now you have a numeric timestamp that can be compared with another timestamp.

// For example:
// const createdAt = new Date("2026-09-24T10:30:45");
// const updatedAt = new Date("2026-09-24T11:30:45");
// console.log(updatedAt.getTime() > createdAt.getTime());

// Output:
// true
// This tells us that the update happened after creation.

// 7. Timestamp Difference
// Because timestamps are numbers, we can subtract them.
// const start = new Date("2026-09-24T10:00:00");
// const end = new Date("2026-09-24T10:05:00");
// const difference = end.getTime() - start.getTime();
// console.log(difference);
// The result is:
// 300000
// because the difference is 5 minutes = 300,000 milliseconds.
// Useful conversions:
// 1 second  = 1,000 ms
// 1 minute  = 60,000 ms
// 1 hour    = 3,600,000 ms
// You don't need to memorize all of these right now; understand the idea that timestamps are measured in milliseconds.

// 8. Converting Milliseconds to Seconds
// Suppose:
// const difference = 300000;
// To convert milliseconds to seconds:
// const seconds = difference / 1000;
// console.log(seconds);

// Output:
// 300

// So:
// 300000 ms
//    ↓
// 300 seconds

// 9. Practical QA Example 🔥
// Suppose a process starts at:
// const startTime = Date.now();
// and later finishes:
// const endTime = Date.now();
// We can calculate how long it took:
// const duration = endTime - startTime;
// console.log(`Execution time: ${duration} ms`);
// This is a simple example of how timestamps can help measure elapsed time.

// 🧠 Remember This
// Date.now()
//     → current timestamp

// date.getTime()
//     → timestamp of a Date object

// timestamp
//     → numeric value in milliseconds

// endTime - startTime
//     → elapsed time

// And one important distinction:

// Date.now()
// is a static method of Date.
// You don't do:
// new Date().now()
// ❌ Incorrect.
// Use:
// Date.now()

// ✅
// 🎯 Practice Set — Timestamps
// Answer Q1–Q10 together like before.

// Q1
// What does this return?
// Date.now()
// Explain in your own words.

// Q1 Answer : This gives the current timestamp

// Q2
// What does getTime() return?
// const date = new Date("2026-09-24");
// console.log(date.getTime());

//Q2 Answer : 1790208000000

// Q3
// What is the difference between:
// Date.now()
// and:
// date.getTime()

//Q3 Answer : Date.now() gives the current timestamp directly without creating an object, while date.getTime() returns the timestamp of an existing Date instance.

// Q4
// What will this comparison return?
const date1 = new Date("2026-09-24");
const date2 = new Date("2026-09-30");
console.log(date1.getTime() < date2.getTime());

//Q4 Answer : true

// Q5
// Why are timestamps useful for comparing dates?

//Q5 answer : Timestamps reduce dates to plain numbers, making comparisons as simple and reliable as comparing any other numeric value.

// Q6 — Coding
// Write code to get the current timestamp and store it in:
// currentTimestamp

//Q6 answer :
//const currentTimestamp = Date.now();

// Q7 — Coding 🔥
// Create:
// 2026-09-24T10:00:00
// 2026-09-24T10:05:00
// as two Date objects and calculate the difference in milliseconds.
// Expected:
// 300000

//Q7 answer : program
const Adate1 = new Date("2026-09-24T10:00:00");
const Adate2 = new Date("2026-09-24T10:05:00");
const difference = Adate2.getTime() - Adate1.getTime();
console.log(difference);


// Q8 — Coding
// Using the result from Q7, convert the difference from milliseconds into seconds.
// Expected:
// 300

//
//const difference = 300000;
const seconds = difference / 1000;
console.log(seconds);


// Q9 — Automation Scenario 🔥
// You want to create a unique username for a test:
// testuser_<timestamp>
// Write JavaScript code using Date.now().

//Q9 answer :
const timestamp = Date.now();
const userName = `testuser_${timestamp}`;
console.log(userName);

// Q10 — Interview Question
// Explain why timestamps are useful in QA automation/API testing.
// Try to mention at least two practical uses.
// Send your Q1–Q10 answers, macha. Then we'll evaluate them one by one and score you. 💪🔥

//Q10 answer : Timestamps are useful in QA automation/API testing mainly for: (1) generating unique test data (like testuser_<timestamp>) to avoid collisions between test runs, and (2) measuring response times/performance by taking timestamps before and after an API call.



//-----------------------------------

// Macha 🔥 excellent work again. This is a very strong timestamp practice set.

// 🏆 Score: 10/10 — 100%
// Q	Result	Evaluation
// Q1	✅	Correct
// Q2	✅	Correct
// Q3	✅	Excellent distinction
// Q4	✅	Correct
// Q5	✅	Correct
// Q6	✅	Correct
// Q7	✅	Correct
// Q8	✅	Correct
// Q9	✅	Correct
// Q10	✅	Excellent interview answer
// Q1–Q5 ✅

// Your conceptual understanding is solid.

// Especially Q3:

// Date.now() gives the current timestamp directly without creating an object, while date.getTime() returns the timestamp of an existing Date instance.

// 🔥 That's a clean interview explanation.

// Q5 is also good:

// Timestamps reduce dates to plain numbers, making comparisons as simple and reliable as comparing any other numeric value.

// Exactly the key idea.

// Q6 ✅
// const currentTimestamp = Date.now();

// Correct.

// Q7 ✅

// Your code:

// const Adate1 = new Date("2026-09-24T10:00:00");
// const Adate2 = new Date("2026-09-24T10:05:00");

// const difference = Adate2.getTime() - Adate1.getTime();

// console.log(difference);

// Output:

// 300000

// ✅ Correct.

// Q8 ✅
// const seconds = difference / 1000;
// console.log(seconds);

// Output:

// 300

// ✅ Correct.

// Nice that you reused the difference variable from Q7 instead of unnecessarily recreating it.

// Q9 🔥 ✅

// Exactly what we wanted:

// const timestamp = Date.now();
// const userName = `testuser_${timestamp}`;

// console.log(userName);

// Example:

// testuser_<current timestamp>

// This is directly relevant to automation test-data generation.

// Q10 🔥🔥

// Excellent answer.

// You identified two practical uses:

// Generating unique test data

// testuser_<timestamp>

// Measuring response/performance time

// startTime → API call → endTime

// That's interview-ready.

// 📚 Strings & Dates Progress
// String Basics                  ✅
// Template Literals              ✅
// Common String Methods          ✅
// Date Basics                     ✅
// Date Formatting & Comparison   ✅
// Test-Data Strings               ✅
// Timestamps                     ✅  10/10
// Remaining: 1 topic 🎯

// Date Validation ⏳

// After that, we'll do the Strings & Dates final mixed practice/review, because your learning rules require a chapter-level final practice before marking the chapter complete.

// So macha, Timestamps = COMPLETE — 10/10 💯

// Next: Date Validation.