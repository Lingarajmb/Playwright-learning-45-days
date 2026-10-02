// 🟢 Concept 8: Environment Variables and process.env
// Module: 2 — NodeJS and NPM
// Chapter: 7 — Environment Variables
// Topic: Environment variables and process.env
// Priority: P0 — CRITICAL
// Status: Not Started Playwright_Automation_with_Java…
// 📁 Exact file
// Playwright - learning - 45 - days/
// └── 02 - NodeJS - and - NPM/
//     └── 07 - Environment - Variables/
//         └── 01 - Environment Variables and process.env.js

// 1. What is an Environment Variable?
// An environment variable is a value stored outside your application's source code that can be accessed by the application at runtime.
// For example:
// USERNAME=admin
// BASE_URL=https://example.com
// ENVIRONMENT=qa

// Instead of hardcoding these values directly into your code:
// const baseUrl = "https://example.com";

// you can keep them outside the source code.
// This is particularly useful in automation because the same test code may run against:
// Development
// QA
// Staging
// Production

// with different configuration values.
// 2. Why do we use Environment Variables?
// Suppose your Playwright test needs a URL.
// ❌ Hardcoded:
// const baseUrl = "https://qa.example.com";

// Now imagine you need to run the same tests against staging:
// https://staging.example.com

// You would have to modify your code.
// Instead, you can use an environment variable:
// BASE_URL=https://qa.example.com

// and access it from Node.js.
// This allows the same test code to work with different environments.
// 3. What is process.env?
// In Node.js, environment variables can be accessed through:
// process.env

// For example, if the environment contains:
// BASE_URL=https://qa.example.com

// you can read it using:
// console.log(process.env.BASE_URL);

// Output:
// https://qa.example.com

// So the basic relationship is:
// Environment
//      ↓
// Environment variable
//      ↓
// process.env
//      ↓
// Your JavaScript code

// 4. Simple Example
// Suppose you have:
// NAME=Lingaraj

// Then:
// console.log(process.env.NAME);

// Output:
// Lingaraj

// You can also assign it to a variable:
// const name = process.env.NAME;

// console.log(name);

// 5. Setting an Environment Variable
// Environment variables can be provided to a process when it starts.
// For example, conceptually:
// BASE_URL=https://qa.example.com

// Then your Node.js program can access:
// console.log(process.env.BASE_URL);

// On Windows, Linux, macOS, CI systems, containers, and other environments, the exact way you set environment variables can differ. For now, focus on the important concept:
// The application reads environment-specific values through process.env.

// 6. Playwright Example
// This is where it becomes very useful for you.
// Suppose you have:
// QA:
// https://qa.example.com

// Staging:
// https://staging.example.com

// Instead of:
// await page.goto("https://qa.example.com");

// you can use:
// await page.goto(process.env.BASE_URL);

// Then the environment determines the actual URL.
// For example:
// QA environment
//     ↓
// BASE_URL=https://qa.example.com
//     ↓
// process.env.BASE_URL
//     ↓
// Playwright
//     ↓
// QA application

// And:
// Staging environment
//     ↓
// BASE_URL=https://staging.example.com
//     ↓
// process.env.BASE_URL
//     ↓
// Playwright
//     ↓
// Staging application
// The test code remains the same.


// 7. Environment Variables and Sensitive Information
// Environment variables are also commonly used for configuration values that should not be hardcoded into source code, such as:
// API_URL
// USERNAME
// PASSWORD
// API_TOKEN
// CLIENT_ID

// For example, instead of:
// const password = "MyRealPassword123";

// you could access:
// const password = process.env.PASSWORD;

// ⚠️ Important
// Environment variables are not automatically a secure secret-management system.
// Their security depends on how they are stored and provided.
// For example, in CI/CD, secrets should be stored using the CI/CD platform's secret-management facilities rather than committed into Git.
// For your Playwright framework, this distinction becomes important later when we learn CI/CD and Secrets.


// 8. A common mistake
// Suppose:
// console.log(process.env.BASE_URL);

// prints:
// undefined

// That usually means the BASE_URL environment variable isn't available to that Node.js process.
// Remember:
// process.env.BASE_URL
//        ↓
// Looks for BASE_URL
//        ↓
// Environment variable must exist

// If it doesn't exist:
// console.log(process.env.BASE_URL);

// may return:
// undefined

// 🧠 Interview-ready answer
// If an interviewer asks:
// "What are environment variables?"
// You can say:
// Environment variables are external configuration values provided to an application at runtime. In Node.js, they can be accessed using process.env. They are useful for environment-specific configuration such as URLs, credentials, API endpoints, and other settings without hardcoding those values into the source code.

// For Playwright:
// We can use environment variables to run the same automation tests against different environments by changing values such as BASE_URL without modifying the test code.

// 🔑 Remember this
// Environment Variable
//         ↓
//    process.env
//         ↓
//  JavaScript / Node.js
//         ↓
//     Playwright

// Example:
// const baseUrl = process.env.BASE_URL;

// await page.goto(baseUrl);

// 📝 Practice — Environment Variables
// Don't Google, macha 😄
// Q1.
// What is an environment variable?
//-> An environment variable is a value stored outside of an application's source code that can be accessed by the application at runtime. It allows for configuration settings, such as URLs, credentials, and other parameters, to be defined externally, enabling the same codebase to run in different environments without modification.

// Q2.
// Why are environment variables useful in automation testing?
//-> Environment variables are useful in automation testing because they allow the same test code to run against different environments (e.g., QA, Staging, Production) without hardcoding values like URLs or credentials. This makes tests more flexible, maintainable, and secure, as sensitive information can be kept out of the source code.


// Q3.
// What is process.env in Node.js?
//-> process.env is an object in Node.js that contains the environment variables available to the current Node.js process. It allows you to access these variables in your code.

// Q4.
// If the environment variable is:
// BASE_URL=https://qa.example.com
// How would you access it in Node.js?
//-> You can access it in Node.js using process.env.BASE_URL. For example:
// const baseUrl = process.env.BASE_URL;
// console.log(baseUrl); // Output: https://qa.example.com

// Q5.
// What happens if you execute:
// console.log(process.env.BASE_URL);
// but BASE_URL has not been provided to the Node.js process?
//-> If the environment variable is not set, process.env.BASE_URL will be undefined.

// Q6. Playwright scenario
// You have three environments:
// QA       → https://qa.example.com
// Staging  → https://staging.example.com
// Prod     → https://prod.example.com
// How can environment variables allow you to use one Playwright test codebase for all three environments?
//-> You can define an environment variable, such as BASE_URL, for each environment. In your Playwright test code, you can use process.env.BASE_URL to access the appropriate URL based on the environment. This way, the same test code can run against QA, Staging, or Production by simply changing the value of the BASE_URL environment variable without modifying the test code itself.


// Q7. Interview scenario
// Why is this generally better:
// const password = process.env.PASSWORD;
// than:
// const password = "MyPassword123";
// for an automation project?
//-> Using process.env.PASSWORD is generally better because it keeps sensitive information, such as passwords, out of the source code. This enhances security by preventing hardcoded credentials from being exposed in version control systems or logs. It also allows for easier configuration changes across different environments without modifying the codebase, making the automation project more maintainable and secure.

// Send Q1–Q7, macha. 💪


////------validation------////

// Macha, excellent work. 🔥 Your answers show that you understand Environment Variables + process.env, not just memorized definitions.
// Evaluation — Q1 to Q7
// Q1 — What is an environment variable?
// Score: 2/2 ✅
// Your answer correctly covered:
// - Stored outside source code
// - Available at runtime
// - Configuration values
// - Different environments
// - Same codebase without modification
// Verdict: Correct.
// Q2 — Why useful in automation testing?
// Score: 2/2 ✅
// You correctly explained:
// - QA / Staging / Production
// - Avoiding hardcoded URLs/credentials
// - Flexibility
// - Maintainability
// - Security
// Excellent automation-focused answer.
// Q3 — What is process.env?
// Score: 2/2 ✅
// Correct:
// "process.env is an object in Node.js that contains the environment variables available to the current Node.js process."

// Exactly what you need to know.
// Q4 — Access BASE_URL
// Score: 2/2 ✅
// const baseUrl = process.env.BASE_URL;
// console.log(baseUrl);

// Correct.
// Expected output:
// https://qa.example.com

// Q5 — Variable not provided
// Score: 2/2 ✅
// Correct:
// process.env.BASE_URL

// will return:
// undefined

// Good.
// Q6 — One Playwright codebase for three environments
// Score: 2/2 ✅
// Your explanation is exactly right.
// The key idea is:
// Same test code
//       ↓
// process.env.BASE_URL
//       ↓
// QA / Staging / Production

// Only the environment variable value changes; the test code remains unchanged.
// Excellent automation understanding.
// Q7 — Why process.env.PASSWORD?
// Score: 2/2 ✅
// Very strong interview answer.
// You correctly mentioned:
// - Avoid hardcoded credentials
// - Prevent exposure in source control
// - Easier environment-specific configuration
// - Maintainability
// - Security
// One small nuance: environment variables are not automatically secure just because they are environment variables. They should ideally be supplied through a secure secret-management mechanism in CI/CD.
// But for this question, your answer is fully correct.
// 🏆 Final Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Q6	2/2
// Q7	2/2
// Total	14/14 — 100% 🎯


// Environment Variables — COMPLETE ✅
// Your English was also very clear throughout. I wouldn't make any significant corrections to your answers.
// Tracker status can now be updated to Completed for:
// Module 2 → Chapter 7 → Environment variables and process.env → P0 Critical. Playwright_Automation_with_Java…
// And according to our tracker priority, the next learning topic is:
// 📁 02 - NodeJS - and - NPM/06 - File - System/
// 📌 fs and reading JSON files — P1 HIGH. Playwright_Automation_with_Java…
// If you want, we can now move to that topic. 💪