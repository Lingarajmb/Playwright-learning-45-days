// Chalooo macha 😎🔥 Arrow Functions complete → next roadmap concept is Destructuring.

// 📁 Exact file path
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 02 - Destructuring.js
// 🎯 Topic 2: Destructuring

// We’ll cover only Destructuring now, in this order:

// What is Destructuring?
// Why do we use it?
// Array Destructuring
// Object Destructuring
// Default values
// Renaming variables in Object Destructuring
// QA/Playwright automation examples
// Important rules
// Complete practice set
// Evaluation + score

// We won't jump to Spread Operator until Destructuring is completed. 💯

// 1️⃣ What is Destructuring?

// Destructuring is an ES6 feature that allows us to extract values from arrays or objects and store them directly into variables.

// Without Destructuring
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };

// const name = user.name;
// const role = user.role;
// const experience = user.experience;

// console.log(name);
// console.log(role);
// console.log(experience);

// We access each property separately.

// With Destructuring
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };

// const { name, role, experience } = user;

// console.log(name);
// console.log(role);
// console.log(experience);

// Much cleaner. 👍

// 2️⃣ Array Destructuring

// For arrays, destructuring happens based on position/index.

// const tools = ["Playwright", "Postman", "Jenkins"];

// const [tool1, tool2, tool3] = tools;

// console.log(tool1);
// console.log(tool2);
// console.log(tool3);

// Output:

// Playwright
// Postman
// Jenkins

// The mapping is:

// Index 0 → tool1
// Index 1 → tool2
// Index 2 → tool3
// Important ⚠️

// Array destructuring depends on position, not variable name.

// const tools = ["Playwright", "Postman"];

// const [first, second] = tools;

// console.log(first);   // Playwright
// console.log(second);  // Postman

// You could even write:

// const [abc, xyz] = tools;

// console.log(abc); // Playwright
// console.log(xyz); // Postman

// The variable names don't matter. The positions do.

// 3️⃣ Skipping Array Values

// You can skip values using an empty comma.

// const tools = ["Playwright", "Postman", "Jenkins"];

// const [first, , third] = tools;

// console.log(first);
// console.log(third);

// Output:

// Playwright
// Jenkins

// Here:

// [first, , third]

// means:

// first → index 0
// skip  → index 1
// third → index 2
// 4️⃣ Object Destructuring

// Object destructuring works using property names.

// const employee = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };

// const { name, role, experience } = employee;

// console.log(name);
// console.log(role);
// console.log(experience);

// Output:

// Lingaraj
// QA Engineer
// 4
// Important difference

// Array:

// const [a, b] = array;

// ➡️ Based on position

// Object:

// const { name, role } = employee;

// ➡️ Based on property name

// 5️⃣ Object Destructuring with Different Variable Name

// Suppose:

// const employee = {
//     name: "Lingaraj",
//     experience: 4
// };

// We can rename the variables:

// const { name: employeeName, experience: years } = employee;

// console.log(employeeName);
// console.log(years);

// Output:

// Lingaraj
// 4

// Here:

// name: employeeName

// means:

// Take the name property and store its value in employeeName.

// 6️⃣ QA / Playwright Example

// This becomes useful when working with test data.

// const testUser = {
//     username: "testuser",
//     password: "Test@123",
//     role: "admin"
// };

// const { username, password, role } = testUser;

// console.log(username);
// console.log(password);
// console.log(role);

// Instead of repeatedly writing:

// testUser.username
// testUser.password
// testUser.role

// we can directly use:

// username
// password
// role

// This is especially useful when handling test-data objects, API responses, configuration objects, etc.

// 🧠 Remember this
// Type	Destructuring	Based on
// Array	[a, b]	Position
// Object	{name, role}	Property name
// One-line memory trick:

// Array → Position 📦
// Object → Property Name 🔑

// 📝 Your practice — don't look for answers yet 😎

// Create:
// 02 - Destructuring.js

// Q1 — Array Destructuring
//const browsers = ["Chrome", "Firefox", "Edge"];
// Extract all three values using array destructuring and print them.

// // Q1 answer :
// const browsers = ["Chrome", "Firefox", "Edge"];
// const [first, Sec, third] = browsers;
// console.log(first);
// console.log(Sec);
//console.log(third);

// Q2 — Array Output Prediction
// const tools = ["Playwright", "Postman", "Jenkins"];
// const [first, , third] = tools;
// console.log(first);
// console.log(third);
// What is the output?

// Q2 answer : Playwright and Jenkins

// Q3 — Object Destructuring
// const employee = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };
// Extract name and role using object destructuring.

// Q3 answer :
// const employee = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };
// const { name, role } = employee;
// console.log(name);
// console.log(role);

// Q4 — Object Output Prediction
// const user = {
//     username: "lingaraj",
//     role: "admin"
// };
// const { username, role } = user;
// console.log(username);
// console.log(role);
// What is the output?

// Q4 answer : lingaraj and  admin

// Q5 — Rename
// Given:
// const employee = {
//     name: "Lingaraj",
//     experience: 4
// };
// Using destructuring, store:
// name → employeeName
// experience → years

// Q5 answer :
// const employee = {
//     name: "Lingaraj",
//     experience: 4
// };
// const { name: employeeName, experience: years } = employee;
// console.log(employeeName);
// console.log(years);

// Q6 — Concept
// What is the main difference between Array Destructuring and Object Destructuring?

// Q6 answer :
// Array: const [a, b] = array; --> Based on position
//Object: const { name, role } = employee; --> Based on property name

// Q7 — Practical
// You have:
// const testData = {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// };
// Use destructuring to extract all three values and print them.

// Q7 answer :
// const testData = {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// };

// const { username, password, browser } = testData;

// console.log(username);
// console.log(password);
// console.log(browser);


// Q8 — Identify the problem
// What is wrong here?
// const user = {
//     name: "Lingaraj",
//     role: "QA"
// };
// const [name, role] = user;
// Explain why.

// yes this incorrect, beacause we have object we should use the Object Destructuring, but Array Destructuring use that is the reson this is incorrect


// Macha 🔥 excellent work. You got the core Destructuring concept clearly. Let's evaluate each one.

// ✅ Destructuring Practice Evaluation
// Q1 — Array Destructuring ✅

// Your code:

// const browsers = ["Chrome", "Firefox", "Edge"];

// const [first, Sec, third] = browsers;

// console.log(first);
// console.log(Sec);
// console.log(third);

// Correct. 🎯

// Output:

// Chrome
// Firefox
// Edge

// Sec is a valid variable name. Usually I'd recommend second for readability, but this is not an error.

// Score: 1/1

// Q2 — Array Output Prediction ✅

// Your answer:

// Playwright and Jenkins

// Correct. 🎯

// Actual output:

// Playwright
// Jenkins

// Because:

// const [first, , third] = tools;

// The second value, "Postman", is skipped.

// Score: 1/1

// Q3 — Object Destructuring ✅

// Your code:

// const { name, role } = employee;

// console.log(name);
// console.log(role);

// Perfect. 🎯

// Output:

// Lingaraj
// QA Engineer

// Score: 1/1

// Q4 — Object Output Prediction ✅

// Your answer:

// lingaraj and admin

// Correct. 🎯

// Actual output:

// lingaraj
// admin

// Your answer format is different from the console format, but the values are completely correct.

// Score: 1/1

// Q5 — Rename ✅

// Your code:

// const { name: employeeName, experience: years } = employee;

// console.log(employeeName);
// console.log(years);

// Excellent. 💯

// This correctly means:

// name       → employeeName
// experience → years

// Output:

// Lingaraj
// 4

// Score: 1/1

// Q6 — Concept ✅

// Your answer:

// Array → Based on position
// Object → Based on property name

// Exactly right. 🔥

// Your examples are also correct:

// const [a, b] = array;

// → position/index

// const { name, role } = employee;

// → property names

// Score: 1/1

// Q7 — Practical ✅

// Your code:

// const { username, password, browser } = testData;

// console.log(username);
// console.log(password);
// console.log(browser);

// Perfect. 🎯

// Output:

// testuser
// Test@123
// Chrome

// This is exactly the kind of destructuring you'll use with test data objects in automation.

// Score: 1/1

// Q8 — Identify the Problem ✅

// Your explanation:

// We have an object, so we should use Object Destructuring. Array Destructuring is the reason this is incorrect.

// Correct. 👍

// This:

// const [name, role] = user;

// is Array Destructuring syntax.

// But user is an object:

// const user = {
//     name: "Lingaraj",
//     role: "QA"
// };

// Therefore:

// const { name, role } = user;

// is the correct syntax.

// One important detail

// It's not just that "object → object destructuring" by convention.

// The syntax itself tells JavaScript what kind of destructuring you're requesting:

// [a, b]       // Array destructuring
// {name, role}  // Object destructuring

// So:

// const [name, role] = user;

// tries to use the object as an iterable, which a normal object isn't.

// Score: 1/1

// 🏆 Final Score
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Q6	1/1
// Q7	1/1
// Q8	1/1
// Total	8/8
// 🎯 Score: 10/10 — 100%

// No conceptual mistakes. 🔥

// The only tiny style suggestion is:

// const [first, second, third] = browsers;

// instead of:

// const [first, Sec, third] = browsers;

// But Sec is completely valid JavaScript, so I'm not deducting anything.

// ✅ What you've learned so far

// You now understand:

// // Array
// const [a, b, c] = array;
// Position-based extraction
// Skipping values
// Array destructuring

// And:

// // Object
// const { name, role } = object;
// Property-based extraction
// Renaming properties
// const { name: employeeName } = employee;
// Next Destructuring concept

// Default Values in Destructuring

// We'll continue with one concept only, then practice it before moving forward. 🔥

///--------------------------------------------------------------------------------------------------------------------------------------------


// Perfect macha 😎🔥

//*********************************************************** */
// Next concept: Default Values in Destructuring
//*********************************************************** */

// We’ll continue in:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 02 - Destructuring.js
// 1️⃣ What are Default Values?

// A default value is used when the value you're trying to destructure is undefined.

// Array example
// const browsers = ["Chrome"];

// const [first, second = "Firefox"] = browsers;

// console.log(first);
// console.log(second);

// Output:

// Chrome
// Firefox

// Why?

// first  → "Chrome"
// second → undefined → default "Firefox"
// Another example
// const tools = ["Playwright", "Postman"];

// const [first, second, third = "Jenkins"] = tools;

// console.log(first);
// console.log(second);
// console.log(third);

// Output:

// Playwright
// Postman
// Jenkins

// Because there is no third value, the default value is used.

// 2️⃣ Object Destructuring Default Value
// const user = {
//     name: "Lingaraj"
// };

// const { name, role = "QA Engineer" } = user;

// console.log(name);
// console.log(role);

// Output:

// Lingaraj
// QA Engineer

// Because role doesn't exist in the object, JavaScript uses:

// role = "QA Engineer"
// ⚠️ Important Rule

// The default value is used when the value is undefined.

// For example:

// const user = {
//     name: "Lingaraj",
//     role: undefined
// };

// const { role = "QA Engineer" } = user;

// console.log(role);

// Output:

// QA Engineer

// But:

// const user = {
//     role: null
// };

// const { role = "QA Engineer" } = user;

// console.log(role);

// Output:

// null

// The default does not replace null.

// 🧠 Remember
// undefined → default value is used
// null      → default value is NOT used

// This is useful in automation when some test-data fields may be missing.

// 📝 Practice — Default Values
// Q1
// What is the output?
// const browsers = ["Chrome"];
// const [first, second = "Firefox"] = browsers;
// console.log(first);
// console.log(second);

//Q1 Answer : Chrome and Firefox

// Q2
// Write destructuring code for:
// const tools = ["Playwright", "Postman"];
// Extract:
// first  → Playwright
// second → Postman
// third  → Jenkins
// Use a default value for third.

//Q2 Answer :
// const tools = ["Playwright", "Postman"];
// const [first, second, third = "Jenkins"] = tools;
// console.log(first);
// console.log(second);
// console.log(third);


// Q3
// What is the output?
// const user = {
//     name: "Lingaraj"
// };
// const { name, role = "QA Engineer" } = user;
// console.log(name);
// console.log(role);

//Q3 Answer : Lingaraj and  QA Engineer

// Q4
// What is the output?
// const user = {
//     name: "Lingaraj",
//     role: undefined
// };
// const { role = "Tester" } = user;
// console.log(role);

//Q4 Answer :  Tester

// Q5
// What is the output?
// const user = {
//     role: null
// };
// const { role = "Tester" } = user;
// console.log(role);

//Q5 Answer : null

// Q6 — Concept
// Why is the default value used when the value is undefined, but not when it is null?

//Q6 Answer : Default values only trigger on undefined (meaning "no value given"), not null (which is treated as an intentional, explicit value).


// Q7 — Automation Scenario
// You receive this test data:
// const testData = {
//     username: "testuser",
//     password: "Test@123"
// };
// Destructure:
// username
// password
// browser
// If browser is missing, the default should be:
// "Chrome"
// Write the code.

// //Q7 answer;
// const testData = {
//     username: "testuser",
//     password: "Test@123"
// };
// const { username, password, browser = "Chrome" } = testData;
// console.log(username);
// console.log(password);
// console.log(browser);

// Macha 🔥 excellent! You understood Default Values in Destructuring correctly.
// 🏆 Evaluation
// Q1 — Output ✅
// Your answer:
// Chrome and Firefox
// Correct.
// Chrome
// Firefox
// 1/1


// Q2 — Array Default Value ✅
// const [first, second, third = "Jenkins"] = tools;
// Perfect. 🎯
// 1/1
// Q3 — Object Default Value ✅
// Your answer:
// Lingaraj and QA Engineer
// Correct.
// Lingaraj
// QA Engineer
// 1/1
// Q4 — undefined ✅
// Your answer:
// Tester
// Correct.
// Because:
// role: undefined
// causes the default value to be used.
// 1/1
// Q5 — null ✅
// Your answer:
// null
// Correct. 💯
// null does not trigger the default value.
// 1/1
// Q6 — Concept ✅
// Your explanation is exactly right:
// Default values only trigger on undefined, not null.
// That's the key rule.
// 1/1
// Q7 — Automation Scenario ✅
// Your code:
// const { username, password, browser = "Chrome" } = testData;
// console.log(username);
// console.log(password);
// console.log(browser);
// Perfect. 🔥
// Output:
// testuser
// Test@123
// Chrome
// This is a realistic test-data pattern.
// 1/1
// 🎯 Final Score: 7/7 — 10/10 💯🔥
// Destructuring progress
// ✅ Array Destructuring
// ✅ Object Destructuring
// ✅ Skipping Array Values
// ✅ Object Property Renaming
// ✅ Default Values
// ✅ undefined vs null
// ✅ Automation/Test-data usage
// You're solid on this concept. 💪
// ➡️ Next Destructuring concept
// Nested Destructuring — extracting values from arrays/objects that are inside another object or array.
// We'll keep it one concept at a time as planned.


//--------------------------------------------------------------------------------------------------------------------------------------------


// Chalooo macha 😎🔥
// Next concept: Nested Destructuring
// We're still in:
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 02 - Destructuring.js

//***********************************************8 */
// 1️⃣ What is Nested Destructuring?
//***********************************************8 */

// Sometimes an object contains another object:
// const employee = {
//     name: "Lingaraj",
//     job: {
//         role: "QA Engineer",
//         experience: 4
//     }
// };

// We can extract values from the nested object directly:

// const {
//     name,
//     job: { role, experience }
// } = employee;

// console.log(name);
// console.log(role);
// console.log(experience);

// Output:

// Lingaraj
// QA Engineer
// 4

// Instead of doing:

// const role = employee.job.role;
// const experience = employee.job.experience;
// 2️⃣ Nested Array Destructuring

// Arrays can also contain arrays:

// const browsers = [
//     "Chrome",
//     ["Firefox", "Edge"]
// ];

// const [first, [second, third]] = browsers;

// console.log(first);
// console.log(second);
// console.log(third);

// Output:

// Chrome
// Firefox
// Edge

// The structure matters:

// browsers
// │
// ├── Chrome
// │
// └── nested array
//     ├── Firefox
//     └── Edge

// So our destructuring structure matches the data structure:

// const [first, [second, third]] = browsers;
// 3️⃣ QA / Automation Example

// This is useful when test data is nested:

// const testData = {
//     user: {
//         username: "testuser",
//         password: "Test@123"
//     },
//     browser: "Chrome"
// };

// We can extract everything:

// const {
//     user: { username, password },
//     browser
// } = testData;

// console.log(username);
// console.log(password);
// console.log(browser);

// Output:

// testuser
// Test@123
// Chrome

// This pattern can be useful when working with nested test-data objects or API response data.

// ⚠️ Important Rule

// The destructuring pattern should match the structure of the data.

// For:

// const user = {
//     details: {
//         name: "Lingaraj"
//     }
// };

// Correct:

// const {
//     details: { name }
// } = user;

// Not:

// const { name } = user;

// because name is not directly inside user; it is inside details.

// 📝 Practice — Nested Destructuring
// Q1 — Nested Object
// const employee = {
//     name: "Lingaraj",
//     details: {
//         role: "QA Engineer",
//         experience: 4
//     }
// };
// Use nested destructuring to extract:
// name
// role
// experience

//Q1 answer :
// const employee = {
//     name: "Lingaraj",
//     details: {
//         role: "QA Engineer",
//         experience: 4
//     }
// };
// const { name, details: { role, experience } } = employee;
// console.log(name);
// console.log(role);
// console.log(experience);

// Q2 — Output Prediction
// const user = {
//     account: {
//         username: "testuser",
//         password: "Test@123"
//     }
// };
// const {
//     account: { username, password }
// } = user;
// console.log(username);
// console.log(password);
// What is the output?

//Q2 Answer : testuser and Test@123


// Q3 — Nested Array
// const data = [
//     "Playwright",
//     ["Postman", "Jenkins"]
// ];

// Use nested array destructuring to extract:

// tool1 → Playwright
// tool2 → Postman
// tool3 → Jenkins

//Q3 Answer :
// const [tool1, [tool2, tool3]] = data;
// console.log(tool1);
// console.log(tool2);
// console.log(tool3);


// Q4 — Output Prediction
// const browsers = [
//     ["Chrome", "Firefox"],
//     "Edge"
// ];
// const [[first, second], third] = browsers;
// console.log(first);
// console.log(second);
// console.log(third);
// What is the output?

//Q4 Answer : Chrome Firefox Edge

// Q5 — Identify the Problem
// const employee = {
//     details: {
//         name: "Lingaraj",
//         role: "QA"
//     }
// };
// const { name, role } = employee;
// Why won't this extract name and role?

//we have Nested Destructuring is wrong here.


// Q6 — Automation Scenario
// Given:

// const testData = {
//     login: {
//         username: "testuser",
//         password: "Test@123"
//     },
//     environment: {
//         browser: "Chrome",
//         url: "https://example.com"
//     }
// };
// Use nested destructuring to extract:
// username
// password
// browser
// url

//Q6 answer ": progam

// const testData = {
//     login: {
//         username: "testuser",
//         password: "Test@123"
//     },
//     environment: {
//         browser: "Chrome",
//         url: "https://example.com"
//     }
// };

// const {
//     login: { username, password },
//     environment: { browser, url }
// } = testData;

// console.log(username);
// console.log(password);
// console.log(browser);
// // console.log(url);

// Macha 🔥 very good! You clearly understood nested destructuring. Let's evaluate each one.

// 🏆 Nested Destructuring Evaluation
// Q1 — Nested Object ✅

// Your code:

// const { name, details: { role, experience } } = employee;

// console.log(name);
// console.log(role);
// console.log(experience);

// Perfect. 🎯

// You correctly matched:

// employee
// ├── name
// └── details
//     ├── role
//     └── experience

// Score: 1/1

// Q2 — Nested Object Output ✅

// Your answer:

// testuser and Test@123

// Correct.

// Actual output:

// testuser
// Test@123

// Score: 1/1

// Q3 — Nested Array ✅

// Your code:

// const [tool1, [tool2, tool3]] = data;

// console.log(tool1);
// console.log(tool2);
// console.log(tool3);

// Exactly correct. 💯

// The structure:

// data
// ├── Playwright
// └── [Postman, Jenkins]

// matches:

// [tool1, [tool2, tool3]]

// Score: 1/1

// Q4 — Nested Array Output ✅

// Your answer:

// Chrome Firefox Edge

// Correct. 🎯

// Actual output:

// Chrome
// Firefox
// Edge

// Score: 1/1

// Q5 — Identify the Problem ⚠️

// Your answer:

// we have Nested Destructuring is wrong here.

// You identified that nested destructuring is required, but the explanation needs a little more detail.

// The problem is:

// const { name, role } = employee;

// name and role are not directly inside employee.

// The structure is:

// employee
// └── details
//     ├── name
//     └── role

// Therefore, we need:

// const {
//     details: { name, role }
// } = employee;

// So your concept was right, but the explanation was incomplete.

// Score: 0.75/1

// Q6 — Automation Scenario ✅🔥

// Your code:

// const {
//     login: { username, password },
//     environment: { browser, url }
// } = testData;

// console.log(username);
// console.log(password);
// console.log(browser);
// console.log(url);

// Excellent. 💯

// You correctly extracted values from two different nested objects.

// Output:

// testuser
// Test@123
// Chrome
// https://example.com

// This is exactly the kind of structure you can encounter with nested API/test-data objects.

// Score: 1/1

// 🎯 Final Score
// Question	Score
// Q1	1/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	0.75/1
// Q6	1/1
// Total	5.75/6
// ⭐ Score: 9.6/10 — 96%

// Only Q5 needed a more complete explanation. Your actual code understanding is strong.

// 🧠 Key takeaway

// Always look at the data structure first, then make your destructuring pattern match it.

// const employee = {
//     details: {
//         name: "Lingaraj"
//     }
// };

// Therefore:

// const {
//     details: { name }
// } = employee;

// Think:

// Destructuring pattern should mirror the structure of the data. 🔥

// ✅ Nested Destructuring: COMPLETE

// So far in Destructuring:

// ✅ Array Destructuring
// ✅ Object Destructuring
// ✅ Skipping values
// ✅ Renaming
// ✅ Default Values
// ✅ Nested Destructuring

// Next we'll continue with the next Destructuring concept from the learning sequence, one concept at a time.

///-----------------------------------------------------------------------------------------------------------------------

// Chalooo macha 😎🔥 Nested Destructuring complete.

// ➡️ Next concept: Destructuring with Function Parameters

// This is an important one for automation because functions often receive objects as arguments.

// Example

// Without destructuring:

// function loginUser(user) {
//     console.log(user.username);
//     console.log(user.password);
// }

// const testData = {
//     username: "testuser",
//     password: "Test@123"
// };

// loginUser(testData);

// With destructuring directly in the function parameter:

// function loginUser({ username, password }) {
//     console.log(username);
//     console.log(password);
// }

// const testData = {
//     username: "testuser",
//     password: "Test@123"
// };

// loginUser(testData);

// The important part is:

// function loginUser({ username, password }) {

// Instead of receiving the whole object as user, the function directly extracts the required properties.

// Array parameter example
// function printBrowser([first, second]) {
//     console.log(first);
//     console.log(second);
// }

// const browsers = ["Chrome", "Firefox"];

// printBrowser(browsers);

// Output:

// Chrome
// Firefox
// 🧠 Remember
// function test({ name, role }) {

// → Object destructuring in parameter

// function test([first, second]) {

// → Array destructuring in parameter

// 📝 Practice
// Q1

// Convert this function to use object destructuring in the parameter:

// function loginUser(user) {
//     console.log(user.username);
//     console.log(user.password);
// }

// It should directly receive:

// username
// password

//Q1 answer :
// function loginUser(username, password) {
//     console.log(username);
//     console.log(password);
// }


// Q2 — Output
// function printUser({ name, role }) {
//     console.log(name);
//     console.log(role);
// }
// printUser({
//     name: "Lingaraj",
//     role: "QA"
// });
// What is the output?

//Q2 answer : Lingaraj and QA

// Q3
// Write a function:
// printBrowser()
// that receives:
// ["Chrome", "Firefox"]
// using array destructuring in the function parameter, and prints both browsers.

//Q3 answer :

// const browsers = ["Chrome", "Firefox"];
// function printBrowser([browers1, browers2]) {
//     console.log(browers1);
//     console.log(browers2);
// }
// printBrowser(browsers);



// Q4 — Practical Automation
// Given:
// const testData = {
//     username: "testuser",
//     password: "Test@123",
//     browser: "Chrome"
// };
// Create a function:
// runTest()
// that uses object destructuring directly in its parameter and prints all three values.

//Q4 answer :

const testData = {
    username: "testuser",
    password: "Test@123",
    browser: "Chrome"
};

function runTest({ username, password, browser }) {
    console.log(username);
    console.log(password);
    console.log(browser);
}

runTest(testData);


// Q5 — Concept
// What is the advantage of doing this:
// function login({ username, password }) {
// instead of:
// function login(user) {
//     console.log(user.username);
//     console.log(user.password);
// }

// time saving and less and clean codig practice, reduce mess between the code


// Macha 🔥 good attempt. Let's evaluate carefully.

// 🏆 Function Parameter Destructuring — Evaluation
// Q1 — Object Destructuring in Parameter ⚠️

// Your answer:

// function loginUser(username, password) {
//     console.log(username);
//     console.log(password);
// }

// This function does receive username and password directly, but it does not use destructuring.

// The question specifically asked for object destructuring in the parameter.

// Correct:

// function loginUser({ username, password }) {
//     console.log(username);
//     console.log(password);
// }

// Then:

// loginUser({
//     username: "testuser",
//     password: "Test@123"
// });

// Your understanding of function parameters is correct; you just missed the object destructuring syntax.

// Score: 0.5/1

// Q2 — Output ✅

// Your answer:

// Lingaraj and QA

// Correct. 🎯

// Actual output:

// Lingaraj
// QA

// Score: 1/1

// Q3 — Array Destructuring in Parameter ✅

// Your code:

// const browsers = ["Chrome", "Firefox"];

// function printBrowser([browers1, browers2]) {
//     console.log(browers1);
//     console.log(browers2);
// }

// printBrowser(browsers);

// Excellent. 💯

// You correctly used:

// function printBrowser([browers1, browers2])

// That's array destructuring directly in the parameter.

// Only a harmless naming typo:

// browers1
// browers2

// instead of:

// browsers1
// browsers2

// It doesn't affect execution.

// Score: 1/1

// Q4 — Automation Scenario ✅🔥

// Your code:

// function runTest({ username, password, browser }) {
//     console.log(username);
//     console.log(password);
//     console.log(browser);
// }

// runTest(testData);

// Perfect.

// This is exactly what the question asked for.

// Score: 1/1

// Q5 — Concept ✅

// Your answer:

// time saving and less and clean coding practice, reduce mess between the code

// Correct idea. 👍

// More precisely, destructuring:

// makes the function cleaner
// avoids repeatedly writing user.username, user.password
// directly communicates which properties the function needs

// For example:

// function login({ username, password }) {

// is more concise than:

// function login(user) {
//     console.log(user.username);
//     console.log(user.password);
// }

// Score: 1/1

// 🎯 Final Score
// Question	Score
// Q1	0.5/1
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	1/1
// Total	4.5/5
// ⭐ Score: 9/10 — 90%

// Only Q1 needs correction.

// 🔑 Most important thing to remember

// These are not the same:

// function loginUser(username, password) {
// }

// ⬆️ Normal parameters

// vs.

// function loginUser({ username, password }) {
// }

// ⬆️ Object destructuring in the parameter

// And:

// function printBrowser([browser1, browser2]) {
// }

// ⬆️ Array destructuring in the parameter

// You've now covered another important part of Destructuring. 🔥