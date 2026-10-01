// 📁 File

// Create:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 03 - Spread Operator.js
// 1️⃣ What is Spread Operator?

// The Spread Operator (...) is used to expand/unpack the values of an array or object.

// Think:

// Spread = open/unpack the contents

// Simple Array Example
// const tools = ["Playwright", "Postman", "Jenkins"];

// const allTools = [...tools];

// console.log(allTools);

// Output:

// ["Playwright", "Postman", "Jenkins"]

// Here:

// [...tools]

// takes the values inside tools and puts them into a new array.

// 2️⃣ Why is this useful?

// One common use is creating a copy of an array.

// const browsers = ["Chrome", "Firefox"];

// const copiedBrowsers = [...browsers];

// console.log(copiedBrowsers);

// Now copiedBrowsers contains the same values.

// Compare this:
// const copiedBrowsers = browsers;

// This does not create a separate array; both variables refer to the same array.

// With:

// const copiedBrowsers = [...browsers];

// we create a new array containing the values.

// 3️⃣ Combining Arrays

// Spread is also useful for combining arrays.

// const uiTools = ["Playwright", "Selenium"];

// const apiTools = ["Postman", "RestAssured"];

// const allTools = [...uiTools, ...apiTools];

// console.log(allTools);

// Output:

// ["Playwright", "Selenium", "Postman", "RestAssured"]

// Instead of manually adding every element:

// const allTools = [
//     "Playwright",
//     "Selenium",
//     "Postman",
//     "RestAssured"
// ];

// Spread lets us expand both arrays.

// 4️⃣ Adding New Values While Spreading

// You can also add values before or after the spread:

// const browsers = ["Chrome", "Firefox"];

// const allBrowsers = ["Edge", ...browsers, "Safari"];

// console.log(allBrowsers);

// Output:

// ["Edge", "Chrome", "Firefox", "Safari"]

// So:

// ["Edge", ...browsers, "Safari"]

// means:

// Edge
// +
// everything inside browsers
// +
// Safari
// 🧠 Very Important: Rest vs Spread

// This is an important interview question.

// Rest
// const [first, ...remaining] = tools;

// Rest collects remaining values.

// Spread
// const allTools = [...tools];

// Spread expands/unpacks values.

// Easy memory trick 🧠

// Rest = Collect 📥
// Spread = Expand 📤

// Same ... syntax, but the context determines what it does.

// 🎯 QA Automation Connection

// Suppose you have common browsers:

// const commonBrowsers = ["Chrome", "Firefox"];

// and another test suite needs to add Edge:

// const regressionBrowsers = [...commonBrowsers, "Edge"];

// Now:

// commonBrowsers
// → Chrome, Firefox

// regressionBrowsers
// → Chrome, Firefox, Edge

// This lets you create modified test-data arrays without changing the original array.

// 📝 Practice — Spread Operator
// Q1 — Basic Spread
// Given:
// const tools = ["Playwright", "Postman", "Jenkins"];
// Create a new array called copiedTools using the Spread Operator.

//Q1 Answer :
// const tools = ["Playwright", "Postman", "Jenkins"];
// const copiedTools = [...tools];
// console.log(copiedTools)

// Q2 — Output Prediction
// const browsers = ["Chrome", "Firefox"];
// const allBrowsers = [...browsers];
// console.log(allBrowsers);
// What is the output?

//Q2 Answer : ["Chrome", "Firefox"]

// Q3 — Combine Arrays
// Given:
// const uiTools = ["Playwright", "Selenium"];
// const apiTools = ["Postman", "RestAssured"];
// Create:
// allTools
// containing all four values using Spread.

//Q3 Answer :
// const uiTools = ["Playwright", "Selenium"];
// const apiTools = ["Postman", "RestAssured"];
// const allTools = [...uiTools, ...apiTools];
// console.log(allTools);

// Q4 — Add Values
// Given:
// const browsers = ["Chrome", "Firefox"];
// Create a new array:
// ["Edge", "Chrome", "Firefox", "Safari"]
// using Spread.

//Q4 Answer :
// const browsers = ["Chrome", "Firefox"];
// const addBrowers = ['Edge', ...browsers, 'Safari'];
// console.log(addBrowers);

// Q5 — Output Prediction
// const first = [1, 2];
// const second = [3, 4];
// const result = [0, ...first, ...second, 5];
// console.log(result);
// What is the output?

//Q5 Answer : [0,1,2,3,4,5]

// Q6 — Concept
// Explain the difference between:
// const copy = [...tools];
// and:
// const [first, ...remaining] = tools;

//Q6 Answer ; [...tools] (spread) copies every element into a new array — it's used to build/expand an array. [first, ...remaining] (rest) pulls out named element(s) and collects whatever's left into a new array — it's used to unpack/destructure an array.

// Q7 — Automation Scenario
// const smokeBrowsers = ["Chrome", "Firefox"];
// Create a new array called regressionBrowsers containing:
// Chrome
// Firefox
// Edge
// WebKit
// without modifying smokeBrowsers.

//Q7 answer :
// const smokeBrowsers = ["Chrome", "Firefox"];
// const regressionBrowsers = [...smokeBrowsers, "Edge", "WebKit"];
// console.log(regressionBrowsers);


// Excellent work. 🔥 Your understanding of Spread vs Rest is very clear.

// 🏆 Spread Operator — Practice Evaluation
// Q1 — Basic Spread ✅
// const copiedTools = [...tools];

// Correct. This creates a new array containing the elements of tools.

// Score: 1/1

// Q2 — Output Prediction ✅

// Your answer:

// ["Chrome", "Firefox"]

// Correct.

// Score: 1/1

// Q3 — Combine Arrays ✅
// const allTools = [...uiTools, ...apiTools];

// Perfect.

// Result:

// ["Playwright", "Selenium", "Postman", "RestAssured"]

// Score: 1/1

// Q4 — Add Values ✅
// const addBrowers = ['Edge', ...browsers, 'Safari'];

// Correct. 👍

// Result:

// ["Edge", "Chrome", "Firefox", "Safari"]

// addBrowers is just a variable-name spelling issue; the logic is completely correct.

// Score: 1/1

// Q5 — Output Prediction ✅

// Your answer:

// [0, 1, 2, 3, 4, 5]

// Correct. 🎯

// Score: 1/1

// Q6 — Concept ✅🔥

// Your explanation is very good:

// ...tools copies/expands the elements into a new array.

// and:

// [first, ...remaining] extracts the first element and collects the remaining elements.

// Exactly the distinction I wanted you to understand.

// A slightly cleaner interview explanation would be:

// Spread expands or copies values, while Rest collects remaining values during destructuring or parameter handling.

// Score: 1/1

// Q7 — Automation Scenario ✅
// const regressionBrowsers = [...smokeBrowsers, "Edge", "WebKit"];

// Perfect.

// You created a new array and did not modify smokeBrowsers.

// Result:

// ["Chrome", "Firefox", "Edge", "WebKit"]

// Score: 1/1

// 🎯 Final Score
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Q6	1/1
// Q7	1/1
// Total	7/7
// ⭐ 10/10 — 100%

// No conceptual or logical mistakes. 💯🔥

// Your key distinction now
// const copy = [...tools];

// ➡️ Spread → expands/copies

// const [first, ...remaining] = tools;

// ➡️ Rest → collects remaining values

// You have now completed the basic Array Spread section.

// Next, we'll move to Spread with Objects, including copying and merging test-data objects.


//--------------------------------------------------------------------------------------------------------------------------------------

// Perfect. 🔥
//********************************************** */
// Next concept: Spread with Objects
//********************************************** */

// We’ll continue in the same file:

// Playwright - learning - 45 - days /
// └── 01 - JavaScript - Fundamentals /
//     └── 10 - ES6 - and - OOP /
//         └── 03 - Spread Operator.js
// 1️⃣ Copying an Object

// Suppose we have:

// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer"
// };

// We can create a new object using spread:

//     const copiedUser = { ...user };

// console.log(copiedUser);

// Result:

// {
//     name: "Lingaraj",
//         role: "QA Engineer"
// }

// Here:

// { ...user }

// means:

// Take all properties from user and put them into a new object.

// 2️⃣ Combining Objects

// Suppose:

// const userDetails = {
//     name: "Lingaraj",
//     role: "QA Engineer"
// };

// const experienceDetails = {
//     experience: 4,
//     location: "Bangalore"
// };

// We can combine them:

// const employee = {
//     ...userDetails,
//     ...experienceDetails
// };

// console.log(employee);

// Result:

// {
//     name: "Lingaraj",
//         role: "QA Engineer",
//             experience: 4,
//                 location: "Bangalore"
// }
// 3️⃣ Adding or Overriding Properties

// This is very important for test data.

// const testUser = {
//         username: "testuser",
//         browser: "Chrome"
//     };

// const updatedUser = {
//     ...testUser,
//     browser: "Firefox"
// };

// console.log(updatedUser);

// Result:

// {
//     username: "testuser",
//         browser: "Firefox"
// }

// Why ?

//     The later property:

// browser: "Firefox"

// overrides the earlier:

// browser: "Chrome"
// Important rule 🔑

// When duplicate properties exist:

// The later value wins.

// For example:

// const result = {
//     browser: "Chrome",
//     browser: "Firefox"
// };

// Result:

// browser: "Firefox"
// 4️⃣ Automation Example

// Imagine common test data:

// const commonTestData = {
//     username: "testuser",
//     password: "Test@123"
// };

// For one test, you need a different browser:

// const firefoxTestData = {
//     ...commonTestData,
//     browser: "Firefox"
// };

// console.log(firefoxTestData);

// Result:

// {
//     username: "testuser",
//         password: "Test@123",
//             browser: "Firefox"
// }

// The original object remains unchanged:

// console.log(commonTestData);

// still contains only:

// username
// password

// This is useful when creating variations of test data without modifying the original data.

// 🧠 Array vs Object Spread
// Array
// const copy = [...array];

// ➡️ Creates a new array with the values.

//     Object
// const copy = { ...object };

// ➡️ Creates a new object with the properties.

// 📝 Practice — Object Spread
// Q1 — Copy Object
// Given:
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer"
// };
// Create a new object called copiedUser using Object Spread.

//Q1 Answer : const copiedUser = { ...user };

//     Q2 — Combine Objects
// const personalDetails = {
//     name: "Lingaraj",
//     location: "Bangalore"
// };
// const jobDetails = {
//     role: "QA Engineer",
//     experience: 4
// };
// Create employee containing all four properties using Spread.

//Q2 Answer :
// const employee = { ...personalDetails, ...jobDetails };
// console.log(employee);

//     Q3 — Output Prediction
// const user = {
//     name: "Lingaraj",
//     browser: "Chrome"
// };
// const updatedUser = {
//     ...user,
//     browser: "Firefox"
// };
// console.log(updatedUser);
// What is the output ?

//Q3 Answer :
//{
//     name: "Lingaraj",
//     browser: "Firefox"
// }


//     Q4 — Add a Property
// Given:
// const testData = {
//     username: "testuser",
//     password: "Test@123"
// };
// Create a new object called testConfig that contains:
// username
// password
// browser: "Chrome"
// Use Spread.

//Q4 Answer :
// const testConfig = { ...testData, browser: "Chrome" };
// console.log(testConfig);

//     Q5 — Output Prediction
// const first = {
//     name: "Lingaraj",
//     role: "QA"
// };
// const second = {
//     role: "Automation Engineer",
//     experience: 4
// };
// const result = {
//     ...first,
//     ...second
// };
// console.log(result);
// What will result contain ?


//Q5 Answer :
//{
//     name: "Lingaraj",
//     role: "QA",
//     role: "Automation Engineer",
//     experience: 4
// }


// Q6 — Automation Scenario
// Given:
// const commonTestData = {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// };
// Create a new object called firefoxTestData that contains the same data but uses:
// browser: "Firefox"
// Do not modify commonTestData.
//Q6 Answer :

// const commonTestData = {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// };

// const firefoxTestData = { ...commonTestData, browser: "Firefox" };
// console.log(firefoxTestData);


// Excellent work, macha. 🔥 Let's evaluate all 6 carefully.

// 🏆 Object Spread — Evaluation
// Q1 — Copy Object ✅

// Your answer:

// const copiedUser = { ...user };

// Correct. This creates a new object containing the properties from user.

// Score: 1/1

// Q2 — Combine Objects ✅
// const employee = { ...personalDetails, ...jobDetails };

// Perfect. 🎯

// Result:

// {
//     name: "Lingaraj",
//     location: "Bangalore",
//     role: "QA Engineer",
//     experience: 4
// }

// Score: 1/1

// Q3 — Output Prediction ✅

// Your answer:

// {
//     name: "Lingaraj",
//     browser: "Firefox"
// }

// Correct.

// Because:

// ...user,
// browser: "Firefox"

// The later browser property overrides "Chrome".

// Score: 1/1

// Q4 — Add a Property ✅
// const testConfig = { ...testData, browser: "Chrome" };

// Exactly right. 💯

// Result:

// {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// }

// Score: 1/1

// Q5 — Duplicate Property ⚠️

// Your answer:

// {
//     name: "Lingaraj",
//     role: "QA",
//     role: "Automation Engineer",
//     experience: 4
// }

// There is one conceptual mistake here.

// You correctly identified both role values, but the final object cannot contain two separate role properties in this situation.

// The second spread:

// ...second

// comes after:

// ...first

// Therefore, the second role overwrites the first one.

// Correct result:

// {
//     name: "Lingaraj",
//     role: "Automation Engineer",
//     experience: 4
// }
// Remember:

// When the same property appears multiple times, the later value wins.

// Score: 0.5/1

// Q6 — Automation Scenario ✅🔥

// Your answer:

// const firefoxTestData = {
//     ...commonTestData,
//     browser: "Firefox"
// };

// Perfect.

// And importantly, you did not modify commonTestData.

// Result:

// {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Firefox"
// }

// Score: 1/1

// 🎯 Final Score
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	0.5/1
// Q6	1/1
// Total	5.5/6
// ⭐ 9.2/10 — 92%

// Only Q5 needs correction.

// 🔑 Important rule to remember
// const result = {
//     ...first,
//     ...second
// };

// If both objects contain:

// role

// then:

// first.role  → overwritten
// second.role → final value

// So:

// {
//     role: "Automation Engineer"
// }

// is the final value.

// ✅ Spread Operator progress
// ✅ Array Spread
// ✅ Copying Arrays
// ✅ Combining Arrays
// ✅ Adding values with Spread
// ✅ Object Spread
// ✅ Copying Objects
// ✅ Combining Objects
// ✅ Adding/overriding Object Properties
// 🟢 Spread Operator fundamentals are now understood

// Next, we'll cover the Spread vs Rest interview/practical distinction, then we can move forward according to the roadmap.




// Yes macha 👍

// I checked the actual roadmap. Day 9 covers Arrow Functions, Destructuring, Spread/Rest, Modules Preview, Classes, Constructors, Inheritance, and Encapsulation, followed by a small Page-like class and reusable data model practice.

// Since we're currently on Spread/Rest, let's finish the distinction properly as part of this roadmap section.

// 🔥 Spread vs Rest — Final Consolidation

// Spread (...) → expands/unpacks values

// const browsers = ["Chrome", "Firefox"];

// const allBrowsers = [...browsers, "Edge"];

// console.log(allBrowsers);

// Output:

// ["Chrome", "Firefox", "Edge"]

// Rest (...) → collects remaining values

// const [first, ...remaining] = ["Chrome", "Firefox", "Edge"];

// console.log(first);
// console.log(remaining);

// Output:

// Chrome
// ["Firefox", "Edge"]
// Remember this interview rule

// Spread = expand
// Rest = collect

// The syntax is the same ...; the context determines whether it is Spread or Rest.

// 🧪 Final Spread/Rest Practice
// Don't look for answers online. Write your answers/code.

// Q1 — Spread
// What is the output?
// const tools = ["Playwright", "Postman"];
// const allTools = [...tools, "Jira"];
// console.log(allTools);

//Q1 answer :  ["Playwright", "Postman", "Jira"]

// Q2 — Rest
// What is the output?
// const [first, ...others] = ["Chrome", "Firefox", "Edge", "Safari"];
// console.log(first);
// console.log(others);

//Q2 Answer :Chrome and  [ "Firefox", "Edge", "Safari"]

// Q3 — Function Rest
// Write a function called sum that accepts any number of numbers using the rest parameter and returns their total.
// Example:
// sum(10, 20, 30);
// Expected:
// 60

//Q3 Answer :
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// };
// console.log(sum(10, 11, 12, 13));

// Q4 — Object Spread
// Create a new object called updatedUser from:
// const user = {
//     name: "Lingaraj",
//     role: "Tester"
// };
// Change the role to:
// Automation Engineer
// without modifying the original user.

//Q4 Answer :
// const updatedUser = {
//     ...user,
//     role: "Automation Engineer"
// };
// console.log(updatedUser);

// Q5 — Concept
// Explain the difference between:
// const newArray = [...oldArray];
// and
// const [first, ...remaining] = oldArray;

//Q5 Answer : [...oldArray] (spread) creates a full copy of the array. [first, ...remaining] = oldArray (rest) splits it into a named first element plus an array of everything after it.

// Q6 — QA Scenario
// You have common test data:
// const commonData = {
//     username: "testuser",
//     browser: "Chrome",
//     environment: "QA"
// };
// Create firefoxData using object spread so that:

// prints:
// Firefox

// const commonData = {
//     username: "testuser",
//     browser: "Chrome",
//     environment: "QA"
// };
// const firefoxData = {
//     ...commonData,
//     browser: "Firefox"
// };
// console.log(firefoxData.browser);


// Excellent work, macha 🔥 Let's evaluate all 6 carefully.

// Q1 — Spread ✅

// Your answer:

// ["Playwright", "Postman", "Jira"]

// Correct. 💯

// Spread expands the elements of tools and adds "Jira".

//     Score: 1 / 1

// Q2 — Rest ✅

// Your answer:

// Chrome
// ["Firefox", "Edge", "Safari"]

// Correct. 💯

// const [first, ...others] = ["Chrome", "Firefox", "Edge", "Safari"];
// first → "Chrome"
// others →["Firefox", "Edge", "Safari"]

// Score: 1 / 1

// Q3 — Function Rest ✅

// Your code:

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(10, 11, 12, 13));

// Correct. 💯

// You correctly used:

// ...numbers

// to collect any number of arguments.

//     And:

// reduce()

// to calculate the total.

// Your particular call outputs:

// 46

// The question's example sum(10, 20, 30) would output 60.

// Score: 1 / 1

// Q4 — Object Spread ✅

// Your code:

// const updatedUser = {
//     ...user,
//     role: "Automation Engineer"
// };

// Correct. 💯

// This is an important pattern:

// ...user

// copies the existing properties, then:

// role: "Automation Engineer"

// overrides the existing role.

// The original user remains unchanged.

//     Score: 1 / 1

// Q5 — Concept ✅

// Your explanation:

// [...] spread creates a full copy of the array. [first, ...remaining] uses rest to split it into a named first element plus an array of everything after it.

//     Excellent. 💯

// One small terminology improvement:

// const newArray = [...oldArray];

// is array spread.

//     const[first, ...remaining] = oldArray;

// uses array destructuring + rest.

// Your understanding is correct.

//     Score: 1 / 1

// Q6 — QA Scenario ✅

// Your code:

// const firefoxData = {
//     ...commonData,
//     browser: "Firefox"
// };

// console.log(firefoxData.browser);

// Output:

// Firefox

// Perfect. 💯

// This is a very common automation pattern for creating variations of test data without modifying the common data.

//     Score: 1 / 1

// 🏆 Final Score
// Question	Score
// Q1	1 / 1
// Q2	1 / 1
// Q3	1 / 1
// Q4	1 / 1
// Q5	1 / 1
// Q6	1 / 1
// Total	6 / 6 — 10 / 10
// 🔥 Spread / Rest = COMPLETE

// You now understand:

// Array Spread
// Object Spread
// Copying arrays / objects
// Combining arrays / objects
// Adding / overriding properties
// Rest in destructuring
// Rest parameters in functions
// Spread vs Rest
// QA test - data usage

// Your Q3 is especially good because you combined Rest + reduce() + arrow function, which is a practical JavaScript pattern.

// Current Day 9 progress

// Completed:

// ✅ Arrow Functions
// ✅ Destructuring
// ✅ Spread
// ✅ Rest

// According to the roadmap, the remaining Day 9 areas are Modules Preview, Classes, Constructors, Inheritance, and Encapsulation, followed by the Page - like class/reusable data-model practice.

// Next: Modules Preview.