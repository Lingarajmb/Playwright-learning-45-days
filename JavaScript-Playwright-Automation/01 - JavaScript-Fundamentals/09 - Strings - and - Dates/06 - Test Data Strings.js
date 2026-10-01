// Chalooo macha 😎🔥

// Next Topic: Test-Data Strings

// Create this file:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         └── 06 - Test Data Strings.js

// The roadmap places test-data strings after the core Strings + Dates concepts and before timestamps/date validation.

// 1. What are Test-Data Strings?

// In automation testing, we frequently need strings that represent test input or expected test data.

// For example:

// const username = "testuser";
// const password = "Test@123";
// const expectedMessage = "Login successful";

// These are test-data strings because we're using them as data for our test.

// Instead of directly writing values everywhere:

// console.log("Lingaraj");
// console.log("Lingaraj");
// console.log("Lingaraj");

// we can store them:

// const userName = "Lingaraj";

// console.log(userName);
// console.log(userName);
// console.log(userName);

// This makes the test data easier to manage and reuse.

// 2. Test Data + Template Literals

// You already learned template literals, so now we connect the concepts.

// const userId = 101;
// const userName = "Lingaraj";

// const userMessage = `User ${userName} with ID ${userId} created successfully`;

// console.log(userMessage);

// Output:

// User Lingaraj with ID 101 created successfully

// This is especially useful when test data needs to be dynamic.

// 3. Dynamic Test Data

// Suppose our test needs different users.

// const firstName = "Lingaraj";
// const role = "Admin";

// const expectedMessage = `${firstName} is logged in as ${role}`;

// console.log(expectedMessage);

// Output:

// Lingaraj is logged in as Admin

// We can change the values without changing the actual message structure.

// 4. Test Data for URLs

// This is another important automation example.

// const userId = 101;

// const userUrl = `/users/${userId}`;

// console.log(userUrl);

// Output:

// /users/101

// Change:

// const userId = 205;

// and the same code produces:

// /users/205

// 🔥 This is why template literals are useful for automation test data.

// 5. Test Data for API Payloads

// For example:

// const userName = "Lingaraj";
// const role = "Admin";

// const expectedMessage = `User ${userName} created with role ${role}`;

// console.log(expectedMessage);

// In API automation, you'll frequently work with dynamic values such as:

// userId
// username
// email
// role
// orderId
// transactionId
// date
// status

// The important idea at this stage is:

// Store test data in variables and construct dynamic strings instead of repeatedly hardcoding values.

// 6. Combining String Methods with Test Data

// You already learned:

// trim()
// toLowerCase()
// toUpperCase()
// includes()
// startsWith()
// endsWith()

// Now we can use them with test data.

// Example:

// const userName = "  Lingaraj  ";

// const cleanName = userName.trim();

// console.log(cleanName);

// Output:

// Lingaraj

// Another example:

// const actualStatus = "SUCCESS";

// console.log(actualStatus.toLowerCase() === "success");

// Output:

// true

// This is useful when the application might return values in different cases.

// 7. QA Automation Example 🔥

// Imagine an application displays:

// User created successfully

// We can store the expected text:

// const expectedMessage = "User created successfully";

// And suppose the application gives:

// const actualMessage = "User created successfully";

// We can validate:

// console.log(actualMessage === expectedMessage);

// Output:

// true

// Or if we only care whether the important phrase exists:

// console.log(actualMessage.includes("created successfully"));

// Output:

// true
// 🧠 Key Idea

// Don't think:

// "Test-data strings are a completely new JavaScript feature."

// They're not.

// It's mainly about using the string concepts you've already learned in an automation/testing context.

// You already know:

// Strings
//    ↓
// Template Literals
//    ↓
// String Methods
//    ↓
// Dynamic Test Data

// That's the connection we want.

// 🎯 Practice Set

// Answer Q1–Q10 as usual. Don't worry about making mistakes.

// Q1

// What is the value of:

// const userName = "Lingaraj";

// Is userName considered test data? Explain why.

// Q2

// What is the output?

// const userName = "Lingaraj";
// const role = "Admin";

// const message = `${userName} is logged in as ${role}`;

// console.log(message);
// Q3

// What is the output?

// const userId = 101;

// const url = `/users/${userId}`;

// console.log(url);
// Q4

// If:

// const userId = 205;

// what will this produce?

// const url = `/users/${userId}`;
// Q5

// Write code to create this dynamic message:

// User Lingaraj created successfully

// using:

// const userName = "Lingaraj";
// Q6

// Write code that creates this message dynamically:

// Lingaraj has 4 years of experience

// using:

// const name = "Lingaraj";
// const experience = 4;
// Q7 🔥

// Given:

// const actualMessage = "  User created successfully  ";

// Write code to remove the extra spaces and check whether the cleaned message contains:

// created successfully

// Expected result:

// true
// Q8

// What is the output?

// const status = "SUCCESS";

// console.log(status.toLowerCase() === "success");

// Explain why.

// Q9 — Automation Scenario

// You have:

// const userId = 101;
// const expectedStatus = "ACTIVE";

// Write code to create:
// /users/101

// and separately check whether:
// "ACTIVE"
// is equal to expectedStatus.

// Q10 — Interview Question 🔥
// Why is it better to store test data in variables instead of repeatedly hardcoding the same values throughout an automation script?
// Answer in your own words.
// Send Q1–Q10 together, macha. Then I'll evaluate each answer and give you the score. 💪🔥



////---------------Answer-------------------/////

//Q1 answer : yes, because this is reusable
//Q2 answer : Lingaraj is logged in as Admin
//Q3 answer : /users/101
//Q4 answer : /users/205
//Q5 answer : program
const userName = "Lingaraj";
console.log(`User ${userName} created successfully`);
//Q6 answer :program
const name = "Lingaraj";
const experience = 4;
console.log(`${name} has ${experience} years of experience`);
//Q7 answer :program
const actualMessage = "  User created successfully  ";
const msg = actualMessage.trim();
console.log(msg.includes("created successfully"));
//Q8 answer : true, Because we are coverting the upercase to lowercase and we are comparing thatis the reson true.
//Q9 answer : Program
const userId = 101;
const expectedStatus = "ACTIVE";
console.log(`/users/${userId}`);
const status = "ACTIVE";
const isMatch = status === expectedStatus;
console.log(isMatch);
//Q10 answer : Hardcoded values scattered across a script are error-prone and hard to maintain, while variables give a single source of truth that updates everywhere at once.

// Macha 🔥 excellent! Let's evaluate properly.

// 🏆 Score: 10/10 — 100%

// You got the concepts and coding correct.

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
// Q1 ✅

// Your answer:

// yes, because this is reusable

// Correct. I'd make it slightly stronger:

// Yes. It can be used as test data and reused in different parts of the test.

// Q5 & Q6 ✅

// Your template-literal usage is exactly right:

// console.log(`User ${userName} created successfully`);

// and:

// console.log(`${name} has ${experience} years of experience`);

// 🔥 Good.

// Q7 ✅

// You correctly combined two concepts:

// const msg = actualMessage.trim();

// console.log(msg.includes("created successfully"));

// That's exactly the kind of combination we want for automation.

// Q8 ✅

// Correct:

// status.toLowerCase() === "success"

// "SUCCESS" becomes "success", so the comparison is true.

// Q9 ✅

// Both parts are correct:

// console.log(`/users/${userId}`);

// → /users/101

// and:

// const isMatch = status === expectedStatus;

// → true

// Q10 🔥

// Your answer is very good:

// Hardcoded values scattered across a script are error-prone and hard to maintain, while variables give a single source of truth that updates everywhere at once.

// That's interview-ready.

// 📚 Strings & Dates Progress
// String Basics                  ✅
// Template Literals              ✅
// Common String Methods          ✅
// Date Basics                    ✅
// Date Formatting & Comparison   ✅
// Test-Data Strings              ✅  10/10
// Remaining
// Timestamps        ⏳
// Date Validation   ⏳

// So 2 roadmap items remain in Strings & Dates. 🔥

// Next topic will be Timestamps.