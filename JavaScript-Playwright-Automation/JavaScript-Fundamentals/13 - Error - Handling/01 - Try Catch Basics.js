// Perfect, macha 🔥

// Error Handling — Concept 1: try...catch
// 📁 Create this file
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 13 - Error - Handling/
//         └── 01 - Try Catch Basics.js


// 1. Why do we need error handling?
// Sometimes our JavaScript code encounters an error while running.

// For example:
// console.log(user.name);
// If user doesn't exist, JavaScript can throw an error and stop the normal execution.
// try...catch allows us to handle that error instead of allowing it to crash the remaining flow.

// 2. Basic syntax
// try {
//     // Code that may cause an error
// } catch (error) {
//     // Code that handles the error
// }

// Example:
// try {
//     console.log(user.name);
// } catch (error) {
//     console.log("Something went wrong");
// }
// If user is not defined, the code inside try throws an error.
// Instead of the program immediately stopping, the catch block executes:
// Something went wrong


// 3. The error parameter
// This:
// catch (error)
// gives us information about the error.
// For example:
// try {
//     console.log(user.name);
// } catch (error) {
//     console.log(error.message);
// }
// error.message gives the error message.
// You can also do:
// console.log(error);
// to inspect the complete error object.

// 🔑 Important rule
// Only errors that occur inside the try block are caught by its catch.

// Example:
// try {
//     const data = JSON.parse('invalid json');
// } catch (error) {
//     console.log("Invalid JSON");
// }
// This is especially useful in API automation when parsing or processing response data can fail.

// Think of it like this:
// try
//  ↓
// Run risky code
//  ↓
//  ┌───────────────┐
//  │ Error occurs? │
//  └───────────────┘
//       ↓ Yes
//     catch
//       ↓
// Handle error


// 🧠 Practice — try...catch
// Send your answers for Q1–Q5. Don't look for answers first. 😎

// Q1 — Concept
// In one sentence, what is the purpose of try...catch?

////Q1 Answer : try...catch allows us to handle that error instead of allowing it to crash the remaining flow.

// Q2 — Output prediction
// What will this print?
// try {
//     console.log("Start");
//     console.log(user.name);
//     console.log("End");
// } catch (error) {
//     console.log("Error occurred");
// }
//Q2 Answer : Start and Error occurred ( beacuse user.name is not assigned or difined anywhere)


// Q3 — Identify the block
// Which block is used to handle the error?
// try {
//     // risky code
// } catch (error) {
//     // ?
// }

//Q3 Answer :catch

// Q4 — Coding
// Write a try...catch that attempts to parse this invalid JSON:
// const data = '{"name":"John"';
// If parsing fails, print:
// Invalid JSON

//Q4 Answer :
// const data = '{"name":"John"';

// try {
//     const parsed = JSON.parse(data);
//     console.log(parsed);
// } catch (error) {
//     console.log("Invalid JSON");
// }

// Q5 — Automation scenario
// You receive this API response:
// const response = '{"status":"success","users":5}';
// Write code that:
// Uses try...catch.
// Parses the response using JSON.parse().
// Prints the status.
// If parsing fails, prints "Invalid API response".
// Send Q1–Q5, and I'll evaluate each one and give you the score. 💪

// const response = '{"status":"success","users":5}';

// try {
//     const data = JSON.parse(response);
//     console.log(data.status);
// }
// catch (error) {
//     console.log("Invalid API response");
// }


/////-------Validations---------------//////


// Excellent, macha 🔥 Let's evaluate Q1–Q5.

// ✅ Q1 — Concept

// Your answer:

// try...catch allows us to handle that error instead of allowing it to crash the remaining flow.

// ✅ Correct. Clear and interview-friendly.

// A slightly polished version:

// try...catch allows us to handle runtime errors so the application can respond to them instead of abruptly stopping the flow.

// Score: 2/2

// ✅ Q2 — Output Prediction

// Your answer:

// Start and Error occurred

// ✅ Correct.

// Execution:

// Start
// ↓
// user.name → ReferenceError
// ↓
// catch executes
// ↓
// Error occurred

// "End" is not printed because the error occurs before that line.

// Your explanation is also correct: user was never defined.

// Score: 2/2

// ✅ Q3 — Identify the block

// Your answer:

// catch

// ✅ Correct.

// The catch block handles the error thrown from the try block.

// Score: 1/1

// ✅ Q4 — Coding

// Your code:

// const data = '{"name":"John"';

// try {
//     const parsed = JSON.parse(data);
//     console.log(parsed);
// } catch (error) {
//     console.log("Invalid JSON");
// }

// 🔥 Perfect.

// The JSON is invalid because the JSON object isn't properly closed.

// JSON.parse() throws an error → catch handles it.

// Output:

// Invalid JSON

// Score: 2/2

// ✅ Q5 — Automation Scenario

// Your code:

// const response = '{"status":"success","users":5}';

// try {
//     const data = JSON.parse(response);
//     console.log(data.status);
// }
// catch (error) {
//     console.log("Invalid API response");
// }

// 🔥 Correct.

// You successfully:

// Used try...catch ✅
// Parsed the response ✅
// Printed status ✅
// Added error handling ✅

// Output:

// success

// If the API returned invalid JSON, the catch block would print:

// Invalid API response

// Score: 3/3

// 🏆 Concept 1 Result
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	1/1
// Q4	2/2
// Q5	3/3
// Total	10/10 🎯
// 🔥 try...catch = COMPLETE ✅

// You've connected it nicely with the previous JSON topic too:

// API response
//      ↓
// JSON.parse()
//      ↓
//    Error?
//    ↙   ↘
//  Yes    No
//  ↓       ↓
// catch   continue

// Next concept: finally — what it does, when it executes, and why it is useful.


///-------------------------------------------------------------------------------------------------------------------------------


//****************************************** */
// Error Handling — Concept 2: finally
//****************************************** */

// 📁 Same file

// Continue in:

// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 13 - Error - Handling/
//         └── 01 - Try Catch Basics.js

// We're keeping finally with the try...catch basics for now.

// 1. What is finally?
// The finally block contains code that executes after the try/catch flow, whether an error occurs or not.

// Syntax:

// try {
//     // risky code
// } catch (error) {
//     // handle error
// } finally {
//     // code that should execute afterward
// }
// Example — No error
// try {
//     console.log("Try block");
// } catch (error) {
//     console.log("Catch block");
// } finally {
//     console.log("Finally block");
// }

// Output:

// Try block
// Finally block

// There is no error, so catch doesn't execute.

// Example — Error occurs
// try {
//     console.log(user.name);
// } catch (error) {
//     console.log("Error handled");
// } finally {
//     console.log("Finally block");
// }

// Output:

// Error handled
// Finally block

// So:

// try
//  ↓
// Error?
//  ↙       ↘
// No       Yes
//  ↓        ↓
// continue catch
//     ↘    ↙
//     finally
// 🔑 Important point

// finally executes whether the error occurs or not.

// try {
//     // success
// } catch (error) {
//     // failure
// } finally {
//     // always runs
// }

// A common use case is cleanup—for example, closing a resource or performing an action that should happen after an operation regardless of success/failure.

// For now, remember:

// finally is used for code that should execute after try/catch, regardless of whether an error occurred.

// 🧠 Practice — finally
// Q1 — Concept
// In one sentence, what is the purpose of the finally block?
// Q1 Answer : The finally block contains code that executes after the try/catch flow, whether an error occurs or not.


// Q2 — Output prediction
//What will this print?
// try {
//     console.log("A");
// } catch (error) {
//     console.log("B");
// } finally {
//     console.log("C");
// }

//Q2 Answer : A and C

// Q3 — Output prediction
// What will this print?
// try {
//     console.log("Start");
//     console.log(user.name);
// } catch (error) {
//     console.log("Error");
// } finally {
//     console.log("Cleanup");
// }

//Q3 Answer : Start and Error and Cleanup

// Q4 — Coding
// Write a try...catch...finally that:
// Tries to parse this JSON:
// const data = '{"name":"John"}';
// Prints the parsed user's name.
// If parsing fails, prints "Invalid JSON".
// Always prints "Process completed" from the finally block.

//Q4 Answer :
// try {
//     const data = '{"name":"John"}';
//     const data1 = JSON.parse(data);
//     console.log(data1.name);
// }
// catch (error) {

//     console.log("Invalid JSON");
// }
// finally {
//     console.log("Process completed");
// }


// Q5 — Automation scenario
// Imagine an API response:
// const response = '{"status":"success","users":5}';
// Write code using try...catch...finally that:
// Parses the response.
// Prints the status.
// If parsing fails, prints "Invalid API response".
// Always prints "API processing completed".
//Send Q1–Q5, macha.I'll evaluate them individually and score you. 💪

// //Q5 Answer :
// try {
//     const response = '{"status":"success","users":5}';
//     const data = JSON.parse(response);
//     console.log(data.status);

// } catch (error) {
//     console.log("Invalid API response");
// }
// finally {
//     console.log("API processing completed");
// }

///----------------validation------------------/////

// Excellent, macha 🔥 Let's evaluate carefully.

// ✅ Q1 — Concept

// Your answer:

// The finally block contains code that executes after the try/catch flow, whether an error occurs or not.

// ✅ Correct and clearly explained.

// Score: 2/2

// ✅ Q2 — Output Prediction

// Your answer:

// A and C

// Correct.

// Actual output:

// A
// C

// There is no error, so catch doesn't execute. finally still executes.

// Score: 2/2

// ✅ Q3 — Output Prediction

// Your answer:

// Start and Error and Cleanup

// ✅ Correct.

// Execution:

// Start
// ↓
// user.name → error
// ↓
// catch → Error
// ↓
// finally → Cleanup

// Actual output:

// Start
// Error
// Cleanup

// Score: 2/2

// ✅ Q4 — Coding

// Your code:

// try {
//     const data = '{"name":"John"}';
//     const data1 = JSON.parse(data);
//     console.log(data1.name);
// }
// catch (error) {
//     console.log("Invalid JSON");
// }
// finally {
//     console.log("Process completed");
// }

// 🔥 Perfect.

// You correctly implemented all four requirements:

// Parse JSON ✅
// Print name ✅
// Handle parsing error ✅
// Always execute finally ✅

// Expected output:

// John
// Process completed

// Score: 2/2

// ✅ Q5 — Automation Scenario

// Your code:

// try {
//     const response = '{"status":"success","users":5}';
//     const data = JSON.parse(response);
//     console.log(data.status);
// } catch (error) {
//     console.log("Invalid API response");
// }
// finally {
//     console.log("API processing completed");
// }

// 🔥 Perfect again.

// All requirements are covered:

// try → API response processing ✅
// JSON.parse() → parse response ✅
// console.log(data.status) → print status ✅
// catch → handle invalid response ✅
// finally → always print completion message ✅

// Expected output:

// success
// API processing completed

// Score: 2/2

// 🏆 Concept 2 Result
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Total	10/10 🎯
// 🔥 finally = COMPLETE ✅

// Your understanding is now:

// try
//  ↓
// Run code
//  ↓
// Error?
//  ↙       ↘
// No       Yes
//  ↓        ↓
// continue catch
//     ↘    ↙
//     finally
//        ↓
// Always executes
// Next concept

// throw — manually creating/throwing an error

// This is important because in automation/API testing, sometimes the code technically runs without a JavaScript error, but you want to treat a condition as an error yourself.


//--------------------------------------------------------------------------------------------------------------------------------------------------



// Perfect, macha 🔥

// Error Handling — Concept 3: throw
// 📁 Continue in the same file
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 13 - Error - Handling/
//         └── 01 - Try Catch Basics.js
// 1. What does throw do?

// throw allows us to manually create an error when a condition isn't acceptable.

// Normally, JavaScript throws an error automatically when something goes wrong:

// const user = undefined;

// console.log(user.name);

// But sometimes your code is technically valid, yet the result is not what you expect.

// For example:

// const status = "failed";

// if (status !== "success") {
//     throw new Error("API request failed");
// }

// Here, JavaScript doesn't have a syntax/runtime problem. We intentionally throw an error because the business condition failed.

// 2. Basic syntax
// throw new Error("Something went wrong");

// Example:

// const age = 15;

// if (age < 18) {
//     throw new Error("User must be 18 or older");
// }

// The throw statement stops the current execution flow unless the error is handled.

// 3. throw with try...catch

// This is where it becomes especially useful:

// try {
//     const age = 15;

//     if (age < 18) {
//         throw new Error("User must be 18 or older");
//     }

//     console.log("User is eligible");
// } catch (error) {
//     console.log(error.message);
// }

// Output:

// User must be 18 or older

// Flow:

// try
//  ↓
// Check condition
//  ↓
// Condition failed
//  ↓
// throw Error
//  ↓
// catch
//  ↓
// Handle error
// 4. Automation/API example

// Imagine your API returns:

// const response = '{"status":"failed"}';

// Parsing the JSON succeeds, so JSON.parse() doesn't throw an error.

// But your test expects the API status to be success.

// You can manually throw an error:

// try {
//     const data = JSON.parse(response);

//     if (data.status !== "success") {
//         throw new Error("API request failed");
//     }

//     console.log("API test passed");
// } catch (error) {
//     console.log(error.message);
// }

// This is an important distinction:

// JSON.parse() can succeed, while your validation can still fail.

// 🔑 Remember
// JavaScript automatically detects an error:
// JSON.parse("invalid");
// You manually create an error:
// throw new Error("Invalid API response");

// And catch can handle either one:

// try {
//     // automatic or manually thrown error
// } catch (error) {
//     // handle it
// }
// 🧠 Practice — throw
// Q1 — Concept
// In one sentence, what is the purpose of the throw statement?

// Q1 Answer :throw allows us to manually create an error when a condition isn't acceptable.


// Q2 — Output prediction
// What will this print?
// try {
//     const age = 15;
//     if (age < 18) {
//         throw new Error("Not eligible");
//     }
//     console.log("Eligible");
// } catch (error) {
//     console.log(error.message);
// }

//Q2 Answer : Not eligible


// Q3 — Understand the flow
// Will "Success" be printed?
// try {
//     throw new Error("Something went wrong");
//     console.log("Success");
// } catch (error) {
//     console.log(error.message);
// }
// Explain why.

//Q3 Answer : No,  "Something went wrong"


// Q4 — Coding
// Write code that:
// Creates:
// const username = "";
// Uses try...catch.
// If username is empty, manually throw:
// Username is required
// Otherwise print:
// Valid username
// Print the error message inside catch.

//Q4 Answer :
// try {
//     const username = "";
//     if (username === "") {
//         throw new Error("Username is required");
//     }
//     console.log("Valid username");

// } catch (error) {
//     console.log(error.message);
// }


// Q5 — Automation/API scenario
// Given:
// const response = '{"status":"failed","message":"Invalid credentials"}';
// Write code that:
// Parses the response.
// Checks whether status is "success".
// If it is not "success", use throw new Error(...).
// Handle the error using catch.
// Print the error message.
// Send Q1–Q5 together. Then I'll evaluate each one and give you the score. 💪

// const response = '{"status":"failed","message":"Invalid credentials"}';

// const data = JSON.parse(response);

// try {
//     if (data.status !== "success") {
//         throw new Error(data.message);
//     }
//     console.log("Request successful");

// }
// catch (error) {
//     console.log(error.message)
// }


//////------validation-------/////////////


// Macha 🔥 let's evaluate all 5.

// ✅ Q1 — Concept

// Your answer:

// throw allows us to manually create an error when a condition isn't acceptable.

// ✅ Correct and clear.

// Score: 2/2

// ✅ Q2 — Output Prediction

// Your answer:

// Not eligible

// ✅ Correct.

// age is 15, so:

// age < 18

// is true.

// Therefore:

// throw new Error("Not eligible");

// runs, and catch prints:

// Not eligible

// Score: 2/2

// ⚠️ Q3 — Understand the Flow

// Your answer:

// No, "Something went wrong"

// You got the main point correct: Success is NOT printed. ✅

// But the question asked why.

// The reason is:

// throw new Error("Something went wrong");

// immediately transfers execution to the catch block. Therefore this line:

// console.log("Success");

// is never executed.

// A complete answer would be:

// No. throw immediately stops execution of the remaining statements inside the try block and transfers control to catch.

// Score: 1.5/2

// ✅ Q4 — Coding

// Your code:

// try {
//     const username = "";

//     if (username === "") {
//         throw new Error("Username is required");
//     }

//     console.log("Valid username");
// } catch (error) {
//     console.log(error.message);
// }

// 🔥 Perfect.

// You correctly:

// Created an empty username ✅
// Used try...catch ✅
// Checked the condition ✅
// Manually threw an error ✅
// Handled it using catch ✅
// Printed error.message ✅

// Output:

// Username is required

// Score: 2/2

// ✅ Q5 — Automation/API Scenario

// Your code:

// const response = '{"status":"failed","message":"Invalid credentials"}';

// const data = JSON.parse(response);

// try {
//     if (data.status !== "success") {
//         throw new Error(data.message);
//     }

//     console.log("Request successful");
// }
// catch (error) {
//     console.log(error.message);
// }

// 🔥 Logic is correct.

// You successfully:

// Parsed the response ✅
// Checked status ✅
// Used throw new Error() when the status wasn't successful ✅
// Handled the error with catch ✅
// Printed the API error message ✅

// Output:

// Invalid credentials
// One small improvement

// For complete error handling, you could put the JSON.parse() inside the try block as well:

// try {
//     const data = JSON.parse(response);

//     if (data.status !== "success") {
//         throw new Error(data.message);
//     }

//     console.log("Request successful");
// } catch (error) {
//     console.log(error.message);
// }

// That way, both JSON parsing errors and your manually thrown validation errors are handled.

// Your original answer is still correct for the given response.

// Score: 2/2

// 🏆 throw Result
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	1.5/2
// Q4	2/2
// Q5	2/2
// Total	9.5/10 🔥
// 🎯 Only mistake

// Q3 wasn't a coding mistake. You gave the correct result but didn't fully explain why.

// Remember:

// throw
//   ↓
// Stops remaining code in try
//   ↓
// Transfers control to catch
// 🔥 throw = COMPLETE ✅

// You now understand the core Error Handling concepts:

// try
//  ↓
// Run risky code
//  ↓
// Error?
//  ├── Automatic error → catch
//  └── Manual throw → catch
//  ↓
// finally → executes afterward

// Next: Error Handling mixed practice — we'll combine try, catch, finally, throw, and JSON parsing before declaring the chapter complete.



/////-------------------------


// Absolutely, macha 🔥

// 🧪 Error Handling — Final Mixed Practice

// This is the final practice before we mark Chapter 13 — Error Handling complete.

// You'll need to combine:

// try
// catch
// finally
// throw
// JSON.parse()
// API-style validation

// Don't look for answers. Write everything yourself. 💪

// Q1 — Concept
// Explain the difference between:
// try...catch
// and:
// throw
//Q1 Answer: try...catch is the structure that catches errors when they happen; throw is what creates/triggers an error manually.

// Q2 — Output Prediction
// What will this print?
// try {
//     console.log("Start");
//     throw new Error("Something failed");
//     console.log("After error");
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("Completed");
// }
// Give the exact output order.

// Q2 Answer:
// Start
// Something failed
// Completed

// Q3 — Output Prediction
// What will this print?
// try {
//     const data = JSON.parse('{"name":"John"}');
//     console.log(data.name);
// } catch (error) {
//     console.log("Invalid JSON");
// } finally {
//     console.log("Processing completed");
// }

// Q3 Answer:
// John
// Processing completed

// Q4 — Debugging
// What is wrong with this code?
// const response = '{"status":"failed"}';
// try {
//     const data = JSON.parse(response);
//     if (data.status !== "success") {
//         throw new Error("API failed");
//     }
// } catch (error) {
//     console.log(error.message);
// }
// console.log("API processing completed");
// Is there actually a problem with the code?
// If yes, explain it. If no, explain why it is valid.

//Q4 Answer: No, there isn't a problem — the code is valid. catch handles the thrown error internally, and since it doesn't re-throw or exit the program, execution continues normally after the try/catch/finally block, so console.log("API processing completed") still runs.

// Q5 — Coding
// Write a try...catch...finally that:
// Parses this JSON:
// const response = '{"status":"success","users":5}';
// Checks whether status is "success".
// If it isn't, manually throws:
// API request failed
// Prints
// API request successful
// when successful.
// catch should print the error message.
// finally should always print:
// API processing completed

//Q5 Answer:
// const response = '{"status":"success","users":5}';

// try {
//     const data = JSON.parse(response);
//     if (data.status !== "success") {
//         throw new Error("API request failed");
//     }
//     console.log("API request successful");
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("API processing completed");
// }

// Q6 — Invalid JSON Scenario
// Write code using try...catch...finally for:
// const response = '{"status":"success","users":5';
// The JSON is intentionally invalid.
// Requirements:
// Attempt JSON.parse().
// If parsing fails, print:
// Invalid API response
// finally must print:
// API processing completed

//Q6 Answer:

// const response = '{"status":"success","users":5';

// try {
//     JSON.parse(response);
// } catch (error) {
//     console.log("Invalid API response");
// } finally {
//     console.log("API processing completed");
// }

// Q7 — Full Automation Scenario 🔥
// Imagine your API returns:
// const response = '{"status":"failed","message":"Invalid credentials","users":0}';
// Write a complete try...catch...finally flow that:
// Parses the response.
// Checks whether status is "success".
// If status isn't "success", use throw new Error() with the API's message.
// If successful, print:
// Login successful
// catch prints the error message.
// finally always prints:
// Login API processing completed
// 🎯 Q8 — Interview Question
// In an API automation test, why might you use throw new Error() even though JSON.parse() succeeded?
// Explain in your own words.

//
//Q7 Answer:

// const response = '{"status":"failed","message":"Invalid credentials","users":0}';

// try {
//     const data = JSON.parse(response);
//     if (data.status !== "success") {
//         throw new Error(data.message);
//     }
//     console.log("Login successful");
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("Login API processing completed");
// }


///-----------validation-----------------//////

// Macha 🔥 this is a very strong final practice.Let's evaluate Q1–Q7 first. I noticed Q8 hasn't been answered yet, so I'll leave that one for you.

// Q1 — try...catch vs throw

// Your answer:

// try...catch is the structure that catches errors when they happen; throw is what creates / triggers an error manually.

// ✅ Excellent distinction.

//     Score: 2 / 2

// Q2 — Output Prediction

// Your answer:

// Start
// Something failed
// Completed

// ✅ Exactly correct.

// throw stops execution before "After error".

//     Score: 2 / 2

// Q3 — Output Prediction

// Your answer:

// John
// Processing completed

// ✅ Correct.

// Parsing succeeds → John prints → catch is skipped → finally runs.

//     Score: 2 / 2

// Q4 — Debugging

// Your answer:

// No, there isn't a problem — the code is valid. catch handles the thrown error internally, and since it doesn't re -throw or exit the program, execution continues normally after the try/catch/finally block, so console.log("API processing completed") still runs.

// Your main conclusion: ✅ Correct

// There is no problem with the code.

// The flow is:

// JSON.parse()
//     ↓
// status !== "success"
//     ↓
// throw Error
//     ↓
// catch
//     ↓
// "API failed"
//     ↓
// execution continues
//     ↓
// "API processing completed"
// One wording correction

// The code actually has no finally block:

// try {
//     ...
// } catch (error) {
//     ...
// }

// console.log("API processing completed");

// So instead of saying:

// "after the try/catch/finally block"

// say:

// "after the try/catch block."

// Your understanding of the execution flow is correct.

//     Score: 1.5 / 2

// Q5 — Coding

// Your code:

// const response = '{"status":"success","users":5}';

// try {
//     const data = JSON.parse(response);

//     if (data.status !== "success") {
//         throw new Error("API request failed");
//     }

//     console.log("API request successful");
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("API processing completed");
// }

// 🔥 Perfect.

// All requirements satisfied:

// Parse JSON ✅
// Validate status ✅
// Manually throw error when needed ✅
// Success message ✅
// Catch error ✅
// Finally always executes ✅

// Score: 2 / 2

// Q6 — Invalid JSON

// Your code:

// const response = '{"status":"success","users":5';

// try {
//     JSON.parse(response);
// } catch (error) {
//     console.log("Invalid API response");
// } finally {
//     console.log("API processing completed");
// }

// ✅ Correct.

//     JSON.parse() throws because the JSON is invalid.

//         Then:

// Invalid API response
// API processing completed

// Excellent use of finally.

// Score: 2 / 2

// Q7 — Full Automation Scenario 🔥

// Your code:

// const response = '{"status":"failed","message":"Invalid credentials","users":0}';

// try {
//     const data = JSON.parse(response);

//     if (data.status !== "success") {
//         throw new Error(data.message);
//     }

//     console.log("Login successful");
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("Login API processing completed");
// }

// 🔥 Excellent.

// You correctly combined everything we've learned:

// JSON.parse()
//       ↓
// Validate status
//       ↓
// throw new Error()
//       ↓
// catch
//       ↓
// finally

// Output:

// Invalid credentials
// Login API processing completed

// Score: 2 / 2

// 🏆 Current Score
// Question	Score
// Q1	2 / 2
// Q2	2 / 2
// Q3	2 / 2
// Q4	1.5 / 2
// Q5	2 / 2
// Q6	2 / 2
// Q7	2 / 2
// Current	13.5 / 14

// That's 96.4% so far 🔥

// One thing left: Q8

// Q8 — Interview Question

// In an API automation test, why might you use throw new Error() even though JSON.parse() succeeded ?

//     Explain it in your own words.

// Send only Q8 now.Then I'll give you the final score out of 100 and we'll determine whether:

// 13 - Error - Handling → COMPLETE ✅


//Q8 — Interview Question

// In an API automation test, why might you use throw new Error() even though JSON.parse() succeeded?

// Explain it in your own words.

// Just send your Q8 answer. Then I'll give you the final Error Handling score and close the chapter. 💪

//Q8 Answer: A successful JSON.parse() only proves the response was valid JSON format — it doesn't mean the API call actually succeeded. The API might still return status: "failed" inside perfectly well-formed JSON. So I use throw new Error() to catch that business-logic failure — checking the actual data (like status or message) and manually failing the test when the API itself reports a problem, even though parsing worked fine.


///-------validation-------////

// 🔥 Excellent answer, macha. This is exactly the distinction an interviewer would want.

// Your answer correctly explains:

// JSON.parse() succeeding → only confirms the response is valid JSON.
// The API can still return a business-level failure such as status: "failed".
// throw new Error() lets us manually treat that condition as an error.
// catch can then handle that failure.

// Q8 Score: 2/2 ✅

// 🏆 Final Error Handling Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	1.5/2
// Q5	2/2
// Q6	2/2
// Q7	2/2
// Q8	2/2
// TOTAL	15.5/16
// 🎯 Final Score: 96.9% 🔥

// The only deduction was Q4's wording: you said “try/catch/finally block”, but that particular code had no finally. Your actual understanding was correct.

// ✅ Chapter 13 — Error Handling: COMPLETE

// You have now covered:

// 01 - try...catch       ✅
// 02 - finally           ✅
// 03 - throw             ✅
// 04 - Mixed Practice    ✅
// 05 - Final Test        ✅

// And you've connected it with JSON/API automation:

// API Response
//      ↓
// JSON.parse()
//      ↓
// Valid JSON?
//   ↓       ↓
//  No      Yes
//  ↓        ↓
// catch   Validate API data
//             ↓
//        Business failure?
//           ↓       ↓
//          Yes      No
//           ↓        ↓
//         throw    Continue
//           ↓
//         catch
//           ↓
//        finally

// 🔥 JSON = 10/10
// 🔥 Error Handling = 96.9%

// Chapter 13 is officially complete.