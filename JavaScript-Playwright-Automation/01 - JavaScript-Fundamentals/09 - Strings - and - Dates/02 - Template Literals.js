// Chalooo macha 😎🔥

// 🟢 Strings & Dates — Concept 2: Template Literals

// We completed String Basics successfully. Now we'll take only the next concept.

// According to your roadmap, Strings + Dates includes template literals and common string methods before moving into Date basics.

// 📁 Create this file
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         ├── 01 - String Basics.js
//         └── 02 - Template Literals.js


//------------------------------------------------------------------------------------------------------------------

//****************************************************** */
// 1️⃣ What are Template Literals?
//****************************************************** */
// Template literals are a way to create strings using backticks:

// `Hello`
// Instead of:
// "Hello"
// or:
// 'Hello'
// The important feature is that template literals allow us to easily insert variables inside a string.

// 2️⃣ Basic Example
// const name = "Lingaraj";
// const message = `Hello ${name}`;
// console.log(message);

// Output:
// Hello Lingaraj

// The important syntax is:
// ${variable}
// This is called string interpolation.

// 3️⃣ Why Not Just Use +?
// We can also write:
// const name = "Lingaraj";
// const message = "Hello " + name;
// console.log(message);
// This works.
// But with template literals:
// const message = `Hello ${name}`;
// it becomes easier to read, especially when we have multiple variables.

// Example:
// const name = "Lingaraj";
// const role = "QA Engineer";
// const tool = "Playwright";
// const message = `My name is ${name}. I am a ${role}. I use ${tool}.`;
// console.log(message);

// Output:
// My name is Lingaraj. I am a QA Engineer. I use Playwright.


// 4️⃣ Multiple Variables
// We can put multiple expressions inside a template literal.
// const firstName = "Lingaraj";
// const experience = 4;
// const technology = "Playwright";
// const profile = `My name is ${firstName}. I have ${experience} years of experience and I am learning ${technology}.`;
// console.log(profile);

// Output:
// My name is Lingaraj. I have 4 years of experience and I am learning Playwright.

// 5️⃣ Expressions Inside ${}
// It's not limited to variables.
// We can put an expression inside ${}.
// const a = 10;
// const b = 20;
// const result = `The total is ${a + b}`;
// console.log(result);

// Output:
// The total is 30

// Another example:

// const price = 100;
// const quantity = 3;
// console.log(`Total price: ${price * quantity}`);

// Output:
// Total price: 300

// Important
// Inside:
// ${ }
// JavaScript evaluates the expression first and then puts the result into the string.

// 6️⃣ Template Literals with Test Data
// This is where it becomes useful for QA automation.
// Suppose we have:
// const username = "testuser";
// const environment = "QA";
// We can create:
// const message = `Login test for ${username} in ${environment} environment`;
// console.log(message);

// Output:
// Login test for testuser in QA environment

// Later, this same idea is useful when constructing:
// test data
// expected messages
// URLs
// API payload values
// dynamic test descriptions


// 7️⃣ Playwright Connection
// Suppose we have a user ID:
// const userId = 101;
// And we need a URL containing that ID.

// Template literal:
// const url = `/users/${userId}`;
// console.log(url);

// Output:
// /users/101

// Later in Playwright/API automation, you'll see patterns like:
// const userId = 101;
// await request.get(`/users/${userId}`);
// The exact API usage will come later in your roadmap. For now, understand the JavaScript string construction.

// 8️⃣ Multi-line Strings
// Another useful feature is that template literals can span multiple lines.
// Normal strings:
// const message = "Hello\nWelcome to Playwright";

// With template literals:
// const message = `Hello
// Welcome to Playwright`;

// console.log(message);

// Output:

// Hello
// Welcome to Playwright

// Notice that we didn't need \n.

// ⚠️ Important Rules
// Rule 1 — Use backticks
// Template literal: `Hello`
// Not: "Hello"

// Rule 2 — Variables go inside ${}
// const name = "Lingaraj";
// console.log(`Hello ${name}`);


// Rule 3 — Don't forget the $
// ❌ Incorrect:
// `Hello {name}`
// ❌ Incorrect:
// `Hello (name)`
// ✅ Correct:
// `Hello ${name}`

// Rule 4 — ${} can contain expressions
// `${10 + 20}`
// produces:
// 30

// 🧠 Quick Comparison
// Concatenation
// const name = "Lingaraj";
// const tool = "Playwright";
// const message = "I am " + name + " and I use " + tool;
// Template literal
// const message = `I am ${name} and I use ${tool}`;

// Both work.
// Template literals are generally much easier to read when constructing dynamic strings.

// 📝 Practice Set — Template Literals
// Now your turn macha. Don't write the answers yet in your code comments. Answer all of them.

// Q1 — Basic
// What is the output?
// const name = "Lingaraj";
// console.log(`Hello ${name}`);


// Q2 — Multiple Variables
// What is the output?
// const name = "Lingaraj";
// const tool = "Playwright";
// console.log(`My name is ${name} and I use ${tool}`);


// Q3 — Expression
// What is the output?
// const a = 10;
// const b = 20;
// console.log(`Result: ${a + b}`);


// Q4 — Multiplication
// What is the output?
// const price = 50;
// const quantity = 4;
// console.log(`Total: ${price * quantity}`);


// Q5 — Find the Mistake
// What's wrong with this?
// const name = "Lingaraj";
// console.log("Hello ${name}");
// Explain why the variable isn't substituted.



// Q6 — Coding
// Create:
// name = Lingaraj
// role = QA Engineer
// Using a template literal, print:
// My name is Lingaraj and I am a QA Engineer.


// Q7 — Coding
// Create:
// tool = Playwright
// experience = 4
// Using a template literal, print:
// I have 4 years of experience with Playwright.


// Q8 — Playwright-style Scenario
// Given:
// const userId = 101;
// Create a variable called url that produces:
// /users/101
// Use a template literal.



// Q9 — Output Prediction
// What will this print?
// const firstName = "Lingaraj";
// const lastName = "Belagali";
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);


// Q10 — Interview Question 🎯
// What are template literals in JavaScript, and what is the advantage of using them over string concatenation with +?
// Answer in your own words.

//
///---------answers------------////

// Q1 Answer :  Hello Lingaraj

// Q2 Answer : My name is Lingaraj  and I use Playwright

// Q3 Answer :  Result: 30

// Q4 Answer :  Total: 200

// Q5 Answer : here is the mistake "Hello ${name}", variable should be in the Backtick (`Hello ${name}`), and imp point is in this case that will prient the Hello ${name} itself not hello lingaraj that means name value not taking here

// Q6 Answer : Pragram
// const name = "Lingaraj";
// const role = "QA Engineer";
// console.log(`My name is ${name} and I am a ${role}.`);

// Q7 Answer : Coding
// const tool = "Playwright";
// const experience = 4;
// console.log(`I have ${experience} years of experience with ${tool}.`);

// Q8 answer :  Playwright-style Scenario
// const userId = 101;
// const url = `/users/${userId}`;
// console.log(url);

// Q9 Answer : Lingaraj Belagali

// Q10 answer : Template literals are a way to create strings using backticks in JavaScript, and advantage are in template literals allow us to easily insert variables inside a string of using them over string concatenation with +.


// Chalooo macha 😎🔥 I checked Q1–Q10 individually.

// You’ve understood template literals well. There’s only one small wording/precision point in Q10.

// 📝 Template Literals — Evaluation
// Q1 — Basic

// Your answer:

// Hello Lingaraj

// ✅ Correct — 1/1

// `Hello ${name}`

// → Hello Lingaraj

// Q2 — Multiple Variables

// Your answer:

// My name is Lingaraj and I use Playwright

// ✅ Correct — 1/1

// The extra spacing you typed doesn't matter; the expected output is:

// My name is Lingaraj and I use Playwright
// Q3 — Expression

// Your answer:

// Result: 30

// ✅ Correct — 1/1

// `${a + b}`

// First evaluates:

// 10 + 20 = 30

// Then inserts 30 into the string.

// Q4 — Multiplication

// Your answer:

// Total: 200

// ✅ Correct — 1/1

// 50 × 4 = 200
// Q5 — Find the Mistake

// Your answer is correct. ✅ 1/1

// You correctly identified that:

// "Hello ${name}"

// uses double quotes, so ${name} is treated as ordinary text.

// Correct:

// `Hello ${name}`

// Output:

// Hello Lingaraj

// Your explanation that it would print the literal ${name} is exactly right.

// Q6 — Coding

// Your answer:

// const name = "Lingaraj";
// const role = "QA Engineer";

// console.log(`My name is ${name} and I am a ${role}.`);

// ✅ Correct — 1/1

// Perfect use of:

// variables
// template literal
// ${}
// backticks
// Q7 — Coding

// Your answer:

// const tool = "Playwright";
// const experience = 4;

// console.log(`I have ${experience} years of experience with ${tool}.`);

// ✅ Correct — 1/1

// Exactly what was required.

// Q8 — Playwright-style Scenario

// Your answer:

// const userId = 101;
// const url = `/users/${userId}`;

// console.log(url);

// ✅ Correct — 1/1

// Output:

// /users/101

// This is the correct dynamic URL pattern.

// Q9 — Output Prediction

// Your answer:

// Lingaraj Belagali

// ✅ Correct — 1/1

// `${firstName} ${lastName}`

// produces:

// Lingaraj Belagali
// Q10 — Interview Question 🎯

// Your answer:

// Template literals are a way to create strings using backticks in JavaScript, and advantage are in template literals allow us to easily insert variables inside a string of using them over string concatenation with +.

// 🟢 Correct — 1/1

// Your concept is correct.

// For an interview, I'd make the answer slightly cleaner:

// Template literals are a way of creating strings using backticks. They allow us to embed variables and expressions directly inside a string using ${}. They are easier to read and maintain than string concatenation using the + operator.

// Example:

// const name = "Lingaraj";
// const tool = "Playwright";

// const message = `My name is ${name} and I use ${tool}`;
// 🏆 Final Score
// Question	Result
// Q1	✅
// Q2	✅
// Q3	✅
// Q4	✅
// Q5	✅
// Q6	✅
// Q7	✅
// Q8	✅
// Q9	✅
// Q10	✅
// 🎯 10/10 — 100%

// Excellent macha. 🔥

// What you demonstrated

// You can now correctly:

// create template literals
// use backticks
// use ${variable}
// use expressions inside ${}
// construct dynamic strings
// construct dynamic URLs
// distinguish template literals from normal quoted strings
// explain the interview-level advantage over +
// 🟢 Concept Status

// Strings → Template Literals → COMPLETE ✅

// We can now move to the next String concept.