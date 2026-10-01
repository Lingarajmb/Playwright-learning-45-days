// Next topic: JSON

// 📁 Exact file path
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 12 - JSON/
//         └── 01 - JSON Parse and Stringify.js

// We’ll follow the same pattern: one concept at a time.

// Concept 1: JSON.parse()

// JSON.parse() is used to convert a JSON string into a JavaScript object.

// Example:

// const jsonData = '{"name":"Lingaraj","role":"Backend Developer"}';

// const user = JSON.parse(jsonData);

// console.log(user.name);
// console.log(user.role);

// Output:

// Lingaraj
// Backend Developer

// Simple rule to remember:

// JSON.parse() → JSON string ➜ JavaScript object

// Next, I’ll explain why JSON.parse() is needed and then give you a small practice set.


// JSON — Concept 1: Why do we use JSON.parse()?

// In real applications, data is often received as JSON text/string, especially from APIs.

// For example:

// const response = '{"name":"Lingaraj","age":28}';

// At this point, response is a string, not a JavaScript object.

// If you want to access the data like this:

// console.log(response.name);

// it won't work as expected because response is still a string.

// So we use:

// const user = JSON.parse(response);

// Now user becomes a JavaScript object:

// console.log(user.name);
// console.log(user.age);
// 🔑 Remember
// JSON string
//     ↓
// JSON.parse()
//     ↓
// JavaScript object
// Automation relevance

// In API testing with Playwright/Postman, you frequently receive response data in JSON format. Parsing allows you to work with individual properties and validate them.

// 🧠 Important rule

// JSON.parse() expects valid JSON.

// For example:

// const data = '{"name":"Lingaraj"}';

// const user = JSON.parse(data);

// console.log(user.name);

// ✅ Valid.

// But:

// const data = "{name:'Lingaraj'}";

// ❌ Not valid JSON because JSON requires double quotes around property names and string values.

// 📝 Practice — JSON.parse()

// Don't look for answers yet. Write your answers/code and send them to me. I'll evaluate each one.

// Q1 — Concept
// In one sentence, what does JSON.parse() do?

//Q1 answer : JSON.parse() converts the JSON string to javascript object.


// Q2 — Identify the type
// const data = '{"name":"John","age":25}';
// What is the type of data?

//Q2 Answer :JSON string


// Q3 — Convert JSON
// Convert this JSON string into a JavaScript object:
// const data = '{"name":"John","age":25,"city":"Bangalore"}';
// Then print:
// John
// 25
// Bangalore

// Q3 Answer :
// const data = '{"name":"John","age":25,"city":"Bangalore"}';
// const data1 = JSON.parse(data);

// console.log(data1.name);
// console.log(data1.age);
// console.log(data1.city);

// Q4 — Output prediction
// What will this print?
// const data = '{"name":"Alex","role":"Tester"}';
// const user = JSON.parse(data);
// console.log(user.role);

//Q4 answer : Tester


// Q5 — Automation scenario
// An API returns:
// const response = '{"status":"success","count":5}';
// Write code to print:
// success
// 5
// Send Q1–Q5 together. Then I'll check them one by one and give you the score. 💪

//Q5 answer :
// const response = '{"status":"success","count":5}';
// const user = JSON.parse(response);
// console.log(user.status);
// console.log(user.count);


// //--validation---///

// Excellent, macha 🔥 You got all 5 correct.

// ✅ Q1 — Concept

// Your answer:

// JSON.parse() converts the JSON string to javascript object.

// Evaluation: ✅ Correct
// A slightly cleaner version:

// JSON.parse() converts a JSON string into a JavaScript object.

// Score: 2/2

// ✅ Q2 — Identify the type

// Your answer:

// JSON string

// Correct. More technically:

// typeof data

// returns:

// string

// The content happens to be JSON, but the JavaScript data type is string.

// Score: 2/2

// ✅ Q3 — Convert JSON

// Your code:

// const data = '{"name":"John","age":25,"city":"Bangalore"}';

// const data1 = JSON.parse(data);

// console.log(data1.name);
// console.log(data1.age);
// console.log(data1.city);

// ✅ Correct parsing
// ✅ Correct property access
// ✅ Correct output
// ✅ No unnecessary code

// Expected output:

// John
// 25
// Bangalore

// Score: 2/2

// ✅ Q4 — Output Prediction

// Your answer:

// Tester

// Correct.

// console.log(user.role);

// prints:

// Tester

// Score: 2/2

// ✅ Q5 — Automation Scenario

// Your code:

// const response = '{"status":"success","count":5}';

// const user = JSON.parse(response);

// console.log(user.status);
// console.log(user.count);

// ✅ Correct
// ✅ Exactly what we'd do when working with API response JSON.

// Output:

// success
// 5

// Score: 2/2

// 🏆 Concept 1 Result
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Total	10/10 🎯
// 🔥 JSON.parse() = COMPLETE ✅

// One important thing to lock into your memory:

// JSON string
//      ↓
// JSON.parse()
//      ↓
// JavaScript object
//      ↓
// object.property
// Next concept

// JSON.stringify()

// It is the opposite direction:

// JavaScript object
//        ↓
// JSON.stringify()
//        ↓
// JSON string

// We'll learn that one concept at a time next.

///--------------------------------------------------------------------------------------------------------------------------///

// Chalooo macha 🔥

//*****************************************8 */

// JSON — Concept 2: JSON.stringify()

//*****************************************8 */
// We learned: ///////////Important//////////////
// JSON string
//      ↓
// JSON.parse()
//      ↓
// JavaScript object

// Now we're going in the opposite direction.
// JavaScript object
//        ↓
// JSON.stringify()
//        ↓
// JSON string


// 1. What is JSON.stringify()?
// JSON.stringify() converts a JavaScript object into a JSON string.

// Example
// const user = {
//     name: "Lingaraj",
//     age: 28
// };
// const jsonData = JSON.stringify(user);
// console.log(jsonData);
// Output:
// {"name":"Lingaraj","age":28}
// Notice that jsonData is now a string.
// You can verify:
// console.log(typeof jsonData);
// Output:
// string

// 2. Why do we use it?
// This is very common when working with APIs.
// For example, suppose you have JavaScript data:
// const user = {
//     name: "Lingaraj",
//     role: "Tester"
// };

// Before sending this data as JSON to an API, you may convert it:
// const requestBody = JSON.stringify(user);

// Now:
// JavaScript object
//        ↓
// JSON.stringify()
//        ↓
// JSON string
//        ↓
// API request


// 🔑 Important difference
// JSON.parse()
// JSON.parse(jsonString);

// JSON string → JavaScript object

// JSON.stringify()
// JSON.stringify(object);

// JavaScript object → JSON string

// Think of them as opposite operations:

//         JSON.parse()
// JSON string ───────────→ JS object
//                          │
//                          │
//                   JSON.stringify()
//                          │
//                          ↓
//                     JSON string

// 📝 Practice — JSON.stringify()
// Don't check for answers elsewhere. Write them yourself and send Q1–Q5.
// Q1 — Concept
// In one sentence, what does JSON.stringify() do?
//Q1 Answer : JSON.stringify() converts a JavaScript object into a JSON string.


// Q2 — Identify the type
// What is the JavaScript data type of jsonData?
// const user = {
//     name: "John",
//     age: 25
// };
// const jsonData = JSON.stringify(user);
//Q2 Answer : {"name":"John", "age":25}


// Q3 — Output prediction
// What will this print?
// const user = {
//     name: "Alex",
//     role: "Tester"
// };
// const data = JSON.stringify(user);
// console.log(data);
//Q3 Answer :{ "name": "Alex", "role": "Tester" }


// Q4 — Coding
// Convert this JavaScript object into a JSON string and print it:
// const product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "Dell"
// };

//Q4 Answer :
// const user = JSON.stringify(product);
// console.log(user);



// Q5 — Automation/API scenario
// You need to send this data as an API request body:
// const loginData = {
//     username: "lingaraj",
//     password: "test123"
// };
// Write code to:
// Convert loginData into a JSON string.
// Store it in a variable called requestBody.
// Print requestBody.
// Print its type.
// Send your answers, macha. I'll evaluate Q1–Q5 individually and score them. 💪

//Q5 Answer :
// const loginData = {
//     username: "lingaraj",
//     password: "test123"
// };

// const requestBody = JSON.stringify(loginData);
// console.log(requestBody);
// console.log(typeof requestBody);

/////----------validation----------///////

// Excellent, macha 🔥 Let's evaluate carefully.

// ✅ Q1 — Concept

// Your answer:

// JSON.stringify() converts a JavaScript object into a JSON string.

// ✅ Perfect.

// Score: 2/2

// ❌ Q2 — Identify the type

// Question:

// const user = {
//     name: "John",
//     age: 25
// };

// const jsonData = JSON.stringify(user);

// You answered:

// {"name":"John", "age":25}

// That is the value/content of jsonData, not its JavaScript type.

// The question asked for the type.

// Correct answer:

// string

// You could verify it with:

// console.log(typeof jsonData);

// Output:

// string

// ⚠️ Remember this distinction:

// Value:
// {"name":"John","age":25}

// Type:
// string

// Score: 0/2

// ⚠️ Q3 — Output prediction

// Your answer:

// { "name": "Alex", "role": "Tester" }

// Conceptually ✅ correct.

// The actual console.log() output is:

// {"name":"Alex","role":"Tester"}

// JSON.stringify() doesn't add spaces between the properties.

// Your answer has extra spaces, but the JSON content is correct.

// I'll treat this as a harmless output-format issue.

// Score: 2/2

// ✅ Q4 — Coding

// Your code:

// const user = JSON.stringify(product);

// console.log(user);

// ✅ Correct.

// You converted product into a JSON string and printed it.

// The variable name user isn't ideal because the data is a product, so this would be clearer:

// const jsonData = JSON.stringify(product);

// console.log(jsonData);

// But that's only a naming improvement, not a logic error.

// Score: 2/2

// ✅ Q5 — Automation/API scenario

// Your code:

// const loginData = {
//     username: "lingaraj",
//     password: "test123"
// };

// const requestBody = JSON.stringify(loginData);

// console.log(requestBody);

// console.log(typeof requestBody);

// 🔥 Perfect.

// You correctly:

// Created the object ✅
// Converted it using JSON.stringify() ✅
// Stored it in requestBody ✅
// Printed the request body ✅
// Printed its type ✅

// Output:

// {"username":"lingaraj","password":"test123"}
// string

// Score: 2/2

// 🏆 Result
// Question	Score
// Q1	2/2
// Q2	0/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Total	8/10
// 🎯 Main mistake to remember

// You made the same kind of distinction we discussed earlier:

// JSON content ≠ JavaScript type

// For example:

// const data = '{"name":"John"}';

// console.log(typeof data);

// ➡️ string

// And:

// const data = JSON.parse('{"name":"John"}');

// console.log(typeof data);

// ➡️ object

// And:

// const data = JSON.stringify({ name: "John" });

// console.log(typeof data);

// ➡️ string

// 🔥 JSON.stringify() concept = COMPLETE ✅

// You understand the concept well; Q2 was just a type vs value mistake.

// Next, we should do a small mixed JSON.parse() + JSON.stringify() practice test before moving to Error


//-----------------------------------------------------------------------------------------------------------------------------


// Perfect, macha 🔥 Before Error Handling, let's do the mixed JSON test.

///************************************************** */
// 🧪 JSON Mixed Practice — parse() + stringify()
///************************************************** */

// Don't look for answers. Write your answers and code yourself.

// Q1 — Concept
// In one or two sentences, explain the difference between:
// JSON.parse()
// and
// JSON.stringify()

//Q1 Answer : // JSON.parse() -> JSON.parse() converts a JSON string into a JavaScript object. // and // JSON.stringify() -> JSON.stringify() converts a JavaScript object into a JSON string.

// Q2 — Identify the type
// What is the type of data?
// const data = '{"name":"John","age":25}';
// console.log(typeof data);

//Q2 Answer :string

// Q3 — Identify the type after parsing
// What is the type of data?
// const data = JSON.parse('{"name":"John","age":25}');
// console.log(typeof data);

//Q3 Answer :object

// Q4 — Output prediction
// What will this print?
// const jsonData = '{"name":"Alex","role":"Tester"}';
// const user = JSON.parse(jsonData);
// console.log(user.name);
// console.log(user.role);

//Q4 Answer :Alex and Tester

// Q5 — Parse + modify + stringify
// Complete this:
// const response = '{"name":"John","role":"Tester"}';
// Convert JSON string to JavaScript object
// Change role to "Automation Tester"
// Convert the object back to JSON string
// Print the final JSON string

//Q5 Answer :
// const response = '{"name":"John","role":"Tester"}';

// const data = JSON.parse(response);

// const updatedData = {
//     ...data,
//     role: "Automation Tester"
// };

// console.log(updatedData);

// const converetedData = JSON.stringify(updatedData);
// console.log(converetedData);

// Q6 — API scenario
// An API gives you this response:
// const response = '{"status":"success","users":3}';
// Write code to:
// Parse the response.
// Print the status.
// Print the number of users.
// Change users from 3 to 5.
// Convert the modified object back to a JSON string.
// Print the final JSON string.

//Q6 Answer :
// const response = '{"status":"success","users":3}';
// const data = JSON.parse(response);
// console.log(data.status);
// console.log(data.users);

// const updateUser = {
//     ...data,
//     "users": 5
// }
// console.log(updateUser);
// const changedUser = JSON.stringify(updateUser)
// console.log(changedUser);


// Q7 — Important interview question
// Why can't we directly do this?
// const response = '{"name":"John","age":25}';
// console.log(response.name);
// Explain what response actually is and why response.name doesn't give us the expected value.
// Send Q1–Q7 together. I'll check each answer and give you the final JSON score. 💪

//Q7 Answer : response is just a plain string, not an object — even though it's formatted like JSON. Since strings don't have a .name property, response.name returns undefined. You need JSON.parse(response) first to convert it into a real JS object before accessing .name.



///--------------valiadation-------------------/////


// Macha 🔥 excellent work. This is a very strong JSON test. Let's evaluate carefully.

// Q1 — parse() vs stringify()

// Your answer:

// JSON.parse() converts a JSON string into a JavaScript object.
// JSON.stringify() converts a JavaScript object into a JSON string.

// ✅ Exactly correct.

// Score: 2/2

// Q2 — Type

// Your answer:

// string

// ✅ Correct.

// const data = '{"name":"John","age":25}';

// typeof data; // "string"

// Score: 1/1

// Q3 — Type after parsing

// Your answer:

// object

// ✅ Correct.

// const data = JSON.parse('{"name":"John","age":25}');

// typeof data; // "object"

// Score: 1/1

// Q4 — Output prediction

// Your answer:

// Alex and Tester

// ✅ Correct.

// Actual output:

// Alex
// Tester

// You identified both values correctly.

// Score: 1/1

// Q5 — Parse + Modify + Stringify

// Your code:

// const response = '{"name":"John","role":"Tester"}';

// const data = JSON.parse(response);

// const updatedData = {
//     ...data,
//     role: "Automation Tester"
// };

// console.log(updatedData);

// const converetedData = JSON.stringify(updatedData);

// console.log(converetedData);
// Evaluation

// ✅ JSON.parse() — correct
// ✅ Spread — correct
// ✅ Role modification — correct
// ✅ JSON.stringify() — correct
// ✅ Final JSON string — correct

// One small naming issue:

// converetedData

// A better spelling would be:

// convertedData

// That's only a naming/spelling issue, not a logic problem.

// Also, the requirement was to print the final JSON string. Your first:

// console.log(updatedData);

// prints the JavaScript object too, which is extra but harmless.

// Score: 2/2

// Q6 — API Scenario

// Your code:

// const response = '{"status":"success","users":3}';

// const data = JSON.parse(response);

// console.log(data.status);

// console.log(data.users);

// const updateUser = {
//     ...data,
//     "users": 5
// }

// console.log(updateUser);

// const changedUser = JSON.stringify(updateUser)

// console.log(changedUser);

// 🔥 Logic is correct.

// You successfully:

// Parsed the API response ✅
// Printed status ✅
// Printed users ✅
// Changed users to 5 ✅
// Converted the object back to JSON ✅
// Printed the final JSON string ✅

// Again, this:

// console.log(updateUser);

// is extra because the question didn't require printing the intermediate object.

// Also, "users" doesn't need quotes here:

// users: 5

// But your version is completely valid JavaScript.

// Score: 2/2

// Q7 — Interview Question

// Your answer is excellent:

// response is just a plain string, not an object — even though it's formatted like JSON. Since strings don't have a .name property, response.name returns undefined. You need JSON.parse(response) first to convert it into a real JS object before accessing .name.

// ✅ Correct concept
// ✅ Correct reason
// ✅ Correct result: undefined
// ✅ Correct solution: JSON.parse()

// This is exactly the kind of explanation you should be comfortable giving in an interview.

// Score: 1/1

// 🏆 Final JSON Mixed Test
// Question	Score
// Q1	2/2
// Q2	1/1
// Q3	1/1
// Q4	1/1
// Q5	2/2
// Q6	2/2
// Q7	1/1
// TOTAL	10/10 🎯
// 🔥 JSON = COMPLETE ✅

// You now have both directions clear:

//              JSON.parse()
// JSON string ───────────────→ JavaScript object
//                                   │
//                                   │
//                            JSON.stringify()
//                                   │
//                                   ↓
//                             JSON string

// And you also understand the important API-testing use case:

// API Response
//      ↓
// JSON.parse()
//      ↓
// JavaScript object
//      ↓
// Read / validate / modify data
//      ↓
// JSON.stringify()
//      ↓
// JSON request body
// Next chapter: Error Handling 🚀

// Exact file path:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 13 - Error - Handling/
//         └── 01 - Try Catch Basics.js

// We'll start with try...catch, one concept at a time.