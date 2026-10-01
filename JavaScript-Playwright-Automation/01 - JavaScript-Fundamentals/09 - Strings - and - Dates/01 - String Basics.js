// Chalooo macha 😎🔥
//------------------------------------------------------------------------------------------------------------------

//****************************************************** */
// 🟢 Strings & Dates — Concept 1: String Basics
//****************************************************** */

// File: 01 - String Basics.js

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         └── 01 - String Basics.js

// Today we are doing only String Basics. No advanced string methods yet.

// 1️⃣ What is a String?
// A string is a sequence of characters used to represent text.

// Examples:
// "Hello"
// 'JavaScript'
// "Playwright"
// "Login successful"
// "QA Engineer"

// In automation, we work with strings constantly:
// const username = "lingaraj";
// const password = "Test@123";
// const expectedMessage = "Login successful";

// Here, all three values are strings.


// 2️⃣ Creating a String
// JavaScript allows us to create strings mainly using:

// Single quotes
// const name = 'Lingaraj';
// Double quotes
// const name = "Lingaraj";

// Both create a string.
// We can check the data type:
// const name = "Lingaraj";
// console.log(typeof name);

// Output:
// string


// 3️⃣ String with Numbers
// Be careful here macha 👇
// const age = 25;
// age is a number.

// But:
// const age = "25";
// age is a string.

// Even though "25" looks like a number, JavaScript treats it as text.

// console.log(typeof 25);
// console.log(typeof "25");

// Output:
// number
// string

// This distinction becomes important when validating API responses and test data.

// 4️⃣ String Can Contain Spaces
// Spaces are also characters inside a string.
// const message = "Hello World";
// The space between Hello and World is part of the string.

// Similarly:
// const name = "Lingaraj Belagali";
// This is one complete string.

// 5️⃣ Accessing Characters
// A string is made up of individual characters.
// Example:
// const language = "JavaScript";
// We can access characters using their index.

// Remember:
// JavaScript indexing starts from 0.

// So:
// J a v a S c r i p t
// 0 1 2 3 4 5 6 7 8 9

// Therefore:
// const language = "JavaScript";
// console.log(language[0]);
// console.log(language[1]);
// console.log(language[4]);

// Output:
// J
// a
// S

// Important
// First character:
// language[0]

// Second character:
// language[1]

// Fifth character:
// language[4]


// 6️⃣ String .length
// A string has a length property.

// Example:
// const language = "JavaScript";
// console.log(language.length);

// Output:
// 10

// Why?
// J a v a S c r i p t
// 1 2 3 4 5 6 7 8 9 10

// Notice the difference:
// Index starts at 0.

// Length counts the total number of characters.

// So:
// const name = "Lingaraj";
// console.log(name.length); //8
// console.log(name[0]);        // L

// Output:
// 8
// L


// 7️⃣ Important Difference: Index vs Length
// This is a common interview question.
// Suppose:
// const word = "Hello";

// Characters:
// H e l l o
// 0 1 2 3 4   ← indexes

// Therefore:
// word.length
// returns:
// 5

// But the last character is:
// word[4]
// Not:
// word[5]

// Because the last index is always:
// length - 1

// So:
// word[word.length - 1]

// returns:
// o

// This is an important pattern for automation.

// 8️⃣ Playwright / QA Connection
// Strings are everywhere in Playwright.
// For example, suppose we have an expected page title:
// const expectedTitle = "Login Page";

// Or expected URL:
// const expectedUrl = "https://example.com/login";

// Or expected API message:
// const expectedMessage = "User created successfully";

// Later, we might write:
// await expect(page).toHaveTitle(expectedTitle);

// Or validate API response text.
// So understanding strings properly is important before we start working with string methods.

// 🧠 Important Rules to Remember
// Rule 1
// Quotes create strings:
// "Hello"
// 'Hello'

// Rule 2
// Numbers without quotes are numbers:
// 25
// Numbers inside quotes are strings:
// "25"

// Rule 3
// Index starts from 0.
// "Hello"[0] // H

// Rule 4
// .length gives the total number of characters.
// "Hello".length // 5

// Rule 5
// Last character:
// word[word.length - 1]


// 📝 Practice Set — String Basics
// Now you answer macha. Don't look for answers online. 😎
// Q1 — Data Type
// What is the output?
// const name = "Lingaraj";
// console.log(typeof name);

//Q1 answer : String

// Q2 — Number vs String
// What will be the output?
// const a = 100;
// const b = "100";
// console.log(typeof a);
// console.log(typeof b);

//Q2 answer : number and String

// Q3 — Character Access
// What is the output?
// const language = "JavaScript";
// console.log(language[0]);
// console.log(language[4]);
// console.log(language[9]);

//Q3 answer : J and S and t

// Q4 — Length
// What is the output?
// const city = "Bangalore";
// console.log(city.length);

//Q4 answer : 9

// Q5 — Index vs Length
// Given:
// const word = "Playwright";
// Answer:
// What is word.length?
// What is the index of the first character?
// What is the index of the last character?

//Q5 answer : // length = 10 // index of the first character = 0 //index of the last character = 9

// Q6 — Last Character
// Write JavaScript code to print the last character of:
// const tool = "Playwright";
// // Don't manually write:
// console.log(tool[9]);
// Use the .length concept.

//Q6 answer : Program
// const tool = "Playwright";
// const lastChar = tool[9];
// console.log(lastChar);
// or
// const tool = "Playwright";
// console.log(tool.length);
// const lastChar = tool[9]
// console.log(lastChar);

// Q7 — Predict the Output
// const text = "Automation";
// console.log(text[0]); //A
// console.log(text[5]); //a
// console.log(text.length); // 10

//Q7 answer : A and a and 10

// Q8 — Coding
// Create these three variables:
// firstName = Lingaraj
// role = QA Engineer
// tool = Playwright
// Then print:
// Lingaraj
// QA Engineer
// Playwright

//Q8 answer :
firstName = "Lingaraj"
role = 'QA Engineer'
tool = "Playwright"
console.log(firstName);
console.log(role);
console.log(tool);

// Q9 — QA Scenario
// Suppose:
// const expectedMessage = "Login successful";
// Write code to print:
// The complete message
// The length of the message
// The first character
// The last character

//Q9 answer :
const expectedMessage = "Login successful";
console.log(expectedMessage);
console.log(expectedMessage.length);
console.log(expectedMessage[0]);
console.log(expectedMessage[15]);


// Q10 — Interview Question 🎯
// Explain in your own words:
// What is the difference between a string's index and its length?
//string's index -> string counts from the 0, and this give the indexing of string basicaliy this says position of char, and lenght-1 is formula.
//  length -> this total lenght of string and this count starts with 1.


// Chalooo macha 😎🔥 I checked all 10 answers individually. Overall, your understanding of the basics is good. Only a couple of corrections are needed.

// 📝 String Basics — Answer Evaluation
// Q1 — Data Type

// Your answer:

// String

// ✅ Correct — 1/1

// const name = "Lingaraj";

// console.log(typeof name);

// Output:

// string

// Small point: JavaScript's actual typeof result is lowercase "string".

// Q2 — Number vs String

// Your answer:

// number and String

// ✅ Correct — 1/1

// Output:

// number
// string

// Because:

// 100

// is a number, while:

// "100"

// is a string.

// Q3 — Character Access

// Your answer:

// J and S and t

// ✅ Correct — 1/1

// const language = "JavaScript";

// Indexes:

// J a v a S c r i p t
// 0 1 2 3 4 5 6 7 8 9

// Therefore:

// language[0] → J
// language[4] → S
// language[9] → t

// Perfect. 👍

// Q4 — Length

// Your answer:

// 9

// ✅ Correct — 1/1

// const city = "Bangalore";
// console.log(city.length);

// There are 9 characters.

// B a n g a l o r e
// 1 2 3 4 5 6 7 8 9
// Q5 — Index vs Length

// Your answer:

// length = 10
// first index = 0
// last index = 9

// ✅ Correct — 1/1

// For:

// const word = "Playwright";
// P l a y w r i g h t
// 0 1 2 3 4 5 6 7 8 9

// Therefore:

// word.length        // 10
// first index        // 0
// last index         // 9

// And the important formula is:

// last index = length - 1

// Excellent.

// Q6 — Last Character

// Your answer:

// const tool = "Playwright";

// const lastChar = tool[9];

// console.log(lastChar);

// ❌ Not fully correct — 0/1

// The question specifically said:

// Don't manually write tool[9]. Use the .length concept.

// Your code manually uses:

// tool[9]

// The expected approach is:

// const tool = "Playwright";

// const lastChar = tool[tool.length - 1];

// console.log(lastChar);

// Output:

// t
// Why?
// tool.length

// is:

// 10

// Last index:

// 10 - 1

// which is:

// 9

// So JavaScript evaluates:

// tool[tool.length - 1]

// as:

// tool[9]
// 🔑 Remember

// Don't hardcode the index when you don't know the string length.

// ❌ Less reusable:

// tool[9]

// ✅ Reusable:

// tool[tool.length - 1]

// This pattern will be very useful later in automation.

// Q7 — Predict the Output

// Your answer:

// A and a and 10

// ✅ Correct — 1/1

// const text = "Automation";
// A u t o m a t i o n
// 0 1 2 3 4 5 6 7 8 9

// Therefore:

// A
// a
// 10

// Perfect.

// Q8 — Coding

// Your code:

// firstName = "Lingaraj"

// role = 'QA Engineer'

// tool = "Playwright"

// console.log(firstName);
// console.log(role);
// console.log(tool);

// 🟡 Logic/output is correct, but there is a coding issue.

// You should declare the variables:

// const firstName = "Lingaraj";
// const role = "QA Engineer";
// const tool = "Playwright";

// console.log(firstName);
// console.log(role);
// console.log(tool);
// Why?

// You learned variables earlier, so we should follow proper JavaScript practice.

// Your code without const, let, or var can create global variables in non-strict JavaScript and is not good practice.

// So:

// Concept: ✅ Correct
// Output: ✅ Correct
// Coding practice: ⚠️ Needs correction

// I'm not heavily penalizing this, because the actual string concept is correct.

// Q9 — QA Scenario

// Your answer:

// const expectedMessage = "Login successful";

// console.log(expectedMessage);

// console.log(expectedMessage.length);

// console.log(expectedMessage[0]);

// console.log(expectedMessage[15]);

// ✅ Correct — 1/1

// Let's verify:

// L o g i n   s u c c e s s f u l
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

// Therefore:

// expectedMessage[0]

// → L

// And:

// expectedMessage[15]

// → l

// Your answer is correct.

// However, for a reusable approach, you could also write:

// console.log(expectedMessage[expectedMessage.length - 1]);

// That avoids hardcoding 15.

// Q10 — Interview Question

// Your answer:

// string's index -> string counts from the 0, and this give the indexing of string basically this says position of char, and length-1 is formula.

// length -> this total length of string and this count starts with 1.

// 🟢 Conceptually correct — 1/1

// You understand the important distinction.

// I'd improve your interview wording slightly:

// Better interview answer:

// Index represents the position of a character in a string, and JavaScript indexing starts from 0. Length represents the total number of characters in the string, and it starts counting from 1 conceptually. Therefore, the last character's index is always length - 1.

// Example:

// const word = "Hello";
// Index:   0 1 2 3 4
//          H e l l o

// Length:  5

// So:

// word.length        // 5
// word[word.length - 1]  // o
// 🏆 Final Score
// Question	Result
// Q1	✅ Correct
// Q2	✅ Correct
// Q3	✅ Correct
// Q4	✅ Correct
// Q5	✅ Correct
// Q6	❌ Needs correction
// Q7	✅ Correct
// Q8	🟡 Minor coding issue
// Q9	✅ Correct
// Q10	✅ Correct
// Score: 8.5/10 — 85% 🎯

// Correct: 8
// Minor correction: 1
// Needs correction: 1

// What you need to improve

// The main thing is not the string concept itself. Your understanding is good.

// Focus on:

// string[string.length - 1]

// instead of hardcoding the last index.

// And remember proper variable declaration:

// const
// let

// rather than:

// firstName = "Lingaraj";
// 🧠 One-minute memory check

// Before we move on, remember these four:

// const text = "Playwright";

// text[0]                  // first character
// text.length              // total characters
// text[text.length - 1]    // last character
// Status

// String Basics → Understood ✅

// We can now move to the next String concept.