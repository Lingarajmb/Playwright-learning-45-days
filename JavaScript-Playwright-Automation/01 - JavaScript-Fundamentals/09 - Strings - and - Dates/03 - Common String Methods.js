// Next String concept: Common String Methods

// File path:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 09 - Strings - and - Dates/
//         └── 03 - Common String Methods.js

// This is the next logical topic under Day 8 — Strings + Dates, which includes “common string methods” along with template literals and Date basics.
//------------------------------------------------------------------------------------------------------------------

//****************************************************** */
// 1. What are String Methods?
//****************************************************** */
// String methods are built-in JavaScript functions that allow us to work with and manipulate strings.

// For example:
// const message = "Hello Playwright";

// console.log(message.toUpperCase());

// Output:

// HELLO PLAYWRIGHT
// 2. Important String Methods

// For now, we'll learn these one by one:

// Method	Purpose
// toUpperCase()	Converts string to uppercase
// toLowerCase()	Converts string to lowercase
// trim()	Removes spaces from beginning/end
// includes()	Checks whether text exists
// startsWith()	Checks beginning of string
// endsWith()	Checks ending of string
// indexOf()	Finds position of text
// slice()	Extracts part of string
// replace()	Replaces text

// We'll practice all of them.

// 3. toUpperCase()

// Converts all characters to uppercase.

// const name = "lingaraj";

// console.log(name.toUpperCase());

// Output:

// LINGARAJ
// QA example
// const actualMessage = "login successful";

// console.log(actualMessage.toUpperCase());

// Output:

// LOGIN SUCCESSFUL
// 4. toLowerCase()

// Converts all characters to lowercase.

// const browser = "PLAYWRIGHT";

// console.log(browser.toLowerCase());

// Output:

// playwright

// Useful when you want to perform a case-insensitive comparison.

// const actual = "SUCCESS";

// console.log(actual.toLowerCase() === "success");

// Output:

// true
// 5. trim()

// Removes spaces from the beginning and end of a string.

// const username = "   Lingaraj   ";

// console.log(username.trim());

// Output:

// Lingaraj

// ⚠️ Important:

// trim() does not remove spaces between words.

// const name = "Lingaraj Belagali";

// console.log(name.trim());

// Output:

// Lingaraj Belagali
// 6. includes()

// Checks whether a string contains specific text.

// It returns a boolean:

// true
// false

// Example:

// const message = "Login successful";

// console.log(message.includes("successful"));

// Output:

// true
// console.log(message.includes("failed"));

// Output:

// false
// Playwright-style example
// const actualMessage = "User logged in successfully";

// console.log(actualMessage.includes("logged in"));

// Output:

// true

// This type of check is very useful when validating UI/API response text.

// 7. startsWith()

// Checks whether a string starts with specific text.

// const url = "https://example.com/login";

// console.log(url.startsWith("https"));

// Output:

// true
// console.log(url.startsWith("http"));

// Output:

// true
// 8. endsWith()

// Checks whether a string ends with specific text.

// const fileName = "report.pdf";

// console.log(fileName.endsWith(".pdf"));

// Output:

// true

// Another example:

// console.log(fileName.endsWith(".csv"));

// Output:

// false
// 🔥 Important distinction

// Remember this:

// includes()

// ➡️ Checks anywhere

// startsWith()

// ➡️ Checks beginning

// endsWith()

// ➡️ Checks end

// 9. indexOf()

// Returns the position/index of the specified text.

// const text = "Playwright";

// console.log(text.indexOf("P"));

// Output:

// 0
// console.log(text.indexOf("wright"));

// Output:

// 5

// If the text is not found, it returns:

// -1

// Example:

// console.log(text.indexOf("Java"));

// Output:

// -1
// 10. slice()

// Extracts part of a string.

// Syntax:

// string.slice(start, end);

// Example:

// const tool = "Playwright";

// console.log(tool.slice(0, 5));

// Output:

// Playw

// Why?

// Indexes:

// P l a y w r i g h t
// 0 1 2 3 4 5 6 7 8 9

// slice(0, 5) means:

// start = 0
// end = 5

// The ending index 5 is not included.

// So:

// 0 1 2 3 4
// P l a y w
// 11. replace()

// Replaces matching text.

// const message = "Hello Java";

// console.log(message.replace("Java", "Playwright"));

// Output:

// Hello Playwright

// Another example:

// const url = "/users/100";

// console.log(url.replace("100", "200"));

// Output:

// /users/200
// 🧠 Quick memory trick
// UPPERCASE   → toUpperCase()
// lowercase   → toLowerCase()
// remove outer spaces → trim()
// contains?   → includes()
// starts?     → startsWith()
// ends?       → endsWith()
// position?   → indexOf()
// extract?    → slice()
// change?     → replace()
// ⚠️ One important rule

// Most string methods do not change the original string.

// const name = "lingaraj";

// name.toUpperCase();

// console.log(name);

// Output:

// lingaraj

// Because you didn't store the returned value.

// const name = "lingaraj";

// const upperName = name.toUpperCase();

// console.log(upperName);

// Output:

// LINGARAJ
// 🎯 Now your COMPLETE practice set

// Don't look for answers online 😄. Answer these Q1–Q10, and I'll evaluate each one individually.

// Q1. What is the output?

// const name = "Lingaraj";

// console.log(name.toUpperCase());

// Q2. What is the output?

// const tool = "PLAYWRIGHT";

// console.log(tool.toLowerCase());

// Q3. What is the output?

// const username = "   Lingaraj   ";

// console.log(username.trim());

// Q4. What does this return?

// const message = "Login successful";

// console.log(message.includes("success"));

// Q5. What is the output?

// const url = "https://example.com/login";

// console.log(url.startsWith("https"));
// console.log(url.endsWith("login"));

// Q6. What does indexOf() return when the searched text is not present?

// Q7. What is the output?

// const tool = "Playwright";

// console.log(tool.slice(0, 5));

// Q8. Write JavaScript code to check whether:

// "User created successfully"

// contains:

// "successfully"

// Q9. Write code to convert:

// "  PLAYWRIGHT AUTOMATION  "

// into:

// "playwright automation"

// using string methods.

// Q10 — Interview question:
// Explain the difference between:

// includes()
// startsWith()
// endsWith()

// Take your time macha. Send Q1–Q10 answers together, and I'll score them properly. 🔥

/////----------Answer----------------////////

//Q1 answer : LINGARAJ
//Q2 answer : playwright
//Q3 answer : Lingaraj
//Q4 answer : true
//Q5 answer : true and true
//Q6 answer : -1
//Q7 answer : playw
//Q8 answer : program
// const whether = "User created successfully";
// console.log(whether.includes("successfully"));
//Q9 answer : program
// const convertChar = "  PLAYWRIGHT AUTOMATION  ";
// const a = (convertChar.trim(convertChar));
// console.log(a.toLowerCase(a));

//q9- correct code by chatpt
// const convertChar = "  PLAYWRIGHT AUTOMATION  ";
// const a = convertChar.trim();
// console.log(a.toLowerCase());

//Q10 answer :
// includes() -> This is JavaScript Built-in funcation, includes() funcation is to check the anywhere matching value are available in the String? if yes -> true, if No -> false.
// startsWith()  -> This is JavaScript Built-in funcation, startsWith()  funcation is to check the starting matching value are available in the String? if yes -> true, if No -> false.
// endsWith()  -> This is JavaScript Built-in funcation, endsWith()  funcation is to check the Ending matching value are available in the String? if yes -> true, if No -> false.



// Macha 🔥 good attempt. Let's evaluate Q1–Q10 one by one.

// 📊 Score: 8.5 / 10 — 85%

// You understand the string methods well. The main issue is Q9 syntax/usage, not the concept.

// Q	Result	Evaluation
// Q1	✅	Correct
// Q2	✅	Correct
// Q3	✅	Correct
// Q4	✅	Correct
// Q5	✅	Correct
// Q6	✅	Correct
// Q7	✅	Correct
// Q8	✅	Correct
// Q9	❌	Method syntax/usage issue
// Q10	✅	Correct
// Q1 ✅
// const name = "Lingaraj";
// console.log(name.toUpperCase());

// Your answer:

// LINGARAJ

// ✅ Correct.

// Q2 ✅
// const tool = "PLAYWRIGHT";
// console.log(tool.toLowerCase());

// Your answer:

// playwright

// ✅ Correct.

// Q3 ✅
// const username = "   Lingaraj   ";
// console.log(username.trim());

// Your answer:

// Lingaraj

// ✅ Correct.

// Q4 ✅
// message.includes("success")

// "Login successful" contains "success".

// Your answer:

// true

// ✅ Correct.

// Q5 ✅
// url.startsWith("https")
// url.endsWith("login")

// Your answer:

// true and true

// ✅ Correct.

// Actual output:

// true
// true
// Q6 ✅

// If indexOf() cannot find the requested text:

// -1

// ✅ Correct.

// Remember: -1 means not found.

// Q7 ✅
// const tool = "Playwright";

// console.log(tool.slice(0, 5));

// Your answer:

// playw

// ✅ Correct.

// Remember:

// P l a y w r i g h t
// 0 1 2 3 4 5 6 7 8 9

// slice(0, 5) takes indexes 0–4.

// Q8 ✅

// You wrote:

// const whether = "User created successfully";

// console.log(whether.includes("successfully"));

// Output:

// true

// ✅ Correct.

// Small naming point: whether isn't wrong syntactically, but something like message or actualMessage would be clearer.

// Q9 ❌ — Let's fix this carefully

// You wrote:

// const convertChar = "  PLAYWRIGHT AUTOMATION  ";

// const a = convertChar.trim(convertChar);

// console.log(a.toLowerCase(a));

// Your intention is correct:

// Remove spaces
// Convert to lowercase

// But there are two syntax/usage mistakes.

// Mistake 1: trim()

// You wrote:

// convertChar.trim(convertChar)

// trim() doesn't need an argument.

// Correct:

// convertChar.trim()
// Mistake 2: toLowerCase()

// You wrote:

// a.toLowerCase(a)

// Again, toLowerCase() doesn't need an argument.

// Correct:

// a.toLowerCase()
// Correct code:
// const convertChar = "  PLAYWRIGHT AUTOMATION  ";

// const a = convertChar.trim();

// console.log(a.toLowerCase());

// Output:

// playwright automation

// 🔥 Concept understood; method usage needs practice.

// Q10 ✅

// Your explanation is correct.

// You said:

// includes()

// check anywhere matching value

// ✅ Correct.

// Example:

// "Playwright Automation".includes("Automation")

// ➡️ true

// startsWith()

// Checks the beginning.

// ✅ Correct.

// "Playwright".startsWith("Play")

// ➡️ true

// endsWith()

// Checks the ending.

// ✅ Correct.

// "report.pdf".endsWith(".pdf")

// ➡️ true

// Interview-ready version

// You can say:

// includes() checks whether a specified value exists anywhere in a string. startsWith() checks whether a string begins with a specified value, while endsWith() checks whether a string ends with a specified value. All three return a boolean value — true or false.

// That's a strong interview answer. 💯

// 🏆 Final Result

// 8.5/10 — 85%

// Your understanding:

// toUpperCase() ✅
// toLowerCase() ✅
// trim() ✅
// includes() ✅
// startsWith() ✅
// endsWith() ✅
// indexOf() ✅
// slice() ✅
// replace() — learned, but not directly tested yet
// Method syntax/arguments ⚠️ needs a little practice
// One important lesson from Q9

// Don't pass unnecessary arguments to methods that don't accept them:

// trim()
// toLowerCase()
// toUpperCase()

// not:

// trim(value)
// toLowerCase(value)
// toUpperCase(value)
// 📚 Progress

// Strings & Dates

// String Basics        ✅ COMPLETE
// Template Literals    ✅ COMPLETE
// Common String Methods ✅ COMPLETE
// Date Basics           ⏳ NEXT

// You cleared the current String Methods practice. 🔥

// When you're ready, we'll move to Date Basics — one concept at a time.