// Perfect macha 🔥 Let's move to the next tracker topic.

// 🟢 Concept 3: npm Basics

// Module: 2 — NodeJS and NPM
// Chapter: 2 — NPM Basics
// Topic: npm basics
// Priority: P0 — CRITICAL
// Status: Not Started

// 📁 Exact file

// Create:

// Playwright - learning - 45 - days/
// └── 02 - NodeJS - and - NPM/
//     └── 02 - NPM/
//         └── 01 - npm Basics.js
// 1. What is npm?

// npm stands for Node Package Manager.

// npm is used to:

// install JavaScript packages
// manage project dependencies
// update packages
// remove packages
// run project scripts
// share/publish JavaScript packages

// For your Playwright journey, npm is especially important because Playwright itself is installed and managed as an npm package.

// 2. Why do we need npm?

// Imagine you want to use Playwright.

// You could manually download all the required Playwright files and manage them yourself.

// That would be difficult.

// Instead, npm allows you to install Playwright with a command:

// npm install -D @playwright/test

// npm takes care of downloading the package and its required package information into your project.

// So you can think of it as:

// Your Project
//      ↓
//     npm
//      ↓
// Install packages
//      ↓
// Playwright
// 3. npm and Node.js relationship

// Don't confuse these two:

// Node.js

// Runtime environment that executes JavaScript.

// npm

// Package manager used to install and manage JavaScript packages.

// Think:

// Node.js
//    │
//    ├── Executes JavaScript
//    │
//    └── Comes with npm
//             │
//             ├── Install packages
//             ├── Manage packages
//             └── Run scripts
// Simple example

// If you have:

// console.log("Hello");

// Node.js can execute it:

// node app.js

// If you want to install a package:

// npm install package-name

// Here, Node.js executes the JavaScript, while npm manages the package.

// 4. Important npm commands

// You don't need to memorize every npm command right now. Focus on the important ones.

// Check npm version
// npm --version

// or:

// npm -v

// Example output:

// 11.x.x

// This tells you that npm is installed and shows its version.

// Initialize a project
// npm init

// This creates a package.json file through an interactive process.

// There is also:

// npm init -y

// The -y automatically accepts the default answers.

// This is very common when creating a JavaScript project.

// Install a package
// npm install package-name

// Short form:

// npm i package-name

// Example:

// npm install lodash
// Install a development dependency
// npm install -D package-name

// or:

// npm install --save-dev package-name

// For example:

// npm install -D @playwright/test

// We'll discuss dependencies vs devDependencies as a separate tracker topic later. Don't jump ahead yet. 😉

// Remove a package
// npm uninstall package-name

// Short form:

// npm un package-name
// 5. What happens when you install a package?

// Suppose you execute:

// npm install lodash

// npm will manage the package for your project.

// You'll commonly see:

// project/
// │
// ├── node_modules/
// ├── package.json
// └── package-lock.json
// node_modules

// Contains installed packages and their dependencies.

// package.json

// Contains project information and dependency declarations.

// package-lock.json

// Records the resolved dependency versions and dependency tree so installations can be reproduced more consistently.

// We'll study package.json and dependency types in detail in the upcoming tracker topics.

// 6. npm in your Playwright project

// Eventually your project will look something like:

// Playwright - learning - 45 - days/
// │
// ├── package.json
// ├── package-lock.json
// ├── node_modules/
// │
// ├── 01 - JavaScript - Fundamentals/
// ├── 02 - NodeJS - and - NPM/
// │
// └── ...

// And Playwright can be installed using:

// npm install -D @playwright/test

// Then you can run Playwright commands through your project.

// This is why npm is a P0 / critical skill for your Playwright automation journey.

// 🧠 Remember this
// Term	Meaning
// Node.js	Runs JavaScript outside the browser
// npm	Manages JavaScript packages
// node_modules	Stores installed packages
// package.json	Defines project/dependency information
// package-lock.json	Locks resolved dependency information
// One important interview sentence:

// npm is the package manager for the Node.js ecosystem, used to install, manage, update, and remove JavaScript packages and to run project scripts.

// 📝 Practice — npm Basics

// Don't Google, macha 😄. Answer in your own words.

// Q1.
// What is npm, and why do we use it?
//-> npm (Node Package Manager) is the default package manager for the Node.js runtime environment. We use it to install, manage, update, and remove JavaScript packages and to run project scripts.


// Q2.
// What is the difference between Node.js and npm?
//-> Node.js is a runtime environment that allows JavaScript to run outside of a web browser, while npm is a package manager that comes with Node.js and is used to install and manage JavaScript packages and dependencies.


// Q3.
// What is the difference between:
// npm install package-name
// and
// npm uninstall package-name
//-> The command `npm install package-name` is used to install a specified package and its dependencies into the project, while `npm uninstall package-name` is used to remove a specified package from the project along with its dependencies.


// Q4.
// What does this command do?
// npm init -y
//-> The command `npm init -y` initializes a new Node.js project by creating a `package.json` file with default settings, automatically accepting all default options without prompting the user for input.


// Q5.
// What is the purpose of the node_modules folder?
//-> The `node_modules` folder is used to store all the installed packages and their dependencies for a Node.js project.

// Q6.
// What is the purpose of package-lock.json?
//-> The `package-lock.json` file is used to lock the versions of all dependencies and sub-dependencies in a Node.js project, ensuring consistent installations across different environments.

// Q7. Playwright scenario
// You want to add Playwright to a new JavaScript automation project.
// Which npm command would you use to install Playwright Test?
//-> The npm command `npm install -D @playwright/test` would be used to install Playwright Test as a development dependency.
// Send Q1–Q7. I'll evaluate each answer individually and score you. 💪


////-------validation------////

// 🔥 Nice work, macha! Let's evaluate Q1–Q7 individually.

// Q1 — What is npm?

// npm is the default package manager for the Node.js runtime environment. We use it to install, manage, update, remove packages, and run project scripts.

// Score: 2/2 ✅

// Excellent. You covered the main responsibilities of npm.

// Q2 — Node.js vs npm

// Node.js is a runtime environment, while npm is a package manager that comes with Node.js.

// Score: 2/2 ✅

// Perfect distinction.

// Remember:

// Node.js → Executes JavaScript
// npm     → Manages packages
// Q3 — npm install vs npm uninstall

// npm install package-name installs the package and dependencies, while npm uninstall package-name removes it.

// Score: 2/2 ✅

// Correct. 👍

// One small technical nuance: uninstalling a package removes that package from the project and updates the relevant dependency metadata; its transitive dependencies may remain if other installed packages still require them.

// Your understanding is correct.

// Q4 — npm init -y

// Initializes a new Node.js project and creates package.json with default settings without prompting.

// Score: 2/2 ✅

// Exactly right. 💯

// npm init -y

// → Creates package.json using default values.

// Q5 — node_modules

// Stores all installed packages and their dependencies.

// Score: 2/2 ✅

// Correct.

// For example:

// project/
// ├── node_modules/
// ├── package.json
// └── package-lock.json

// node_modules contains the actual installed package files.

// Q6 — package-lock.json

// Locks dependency versions and sub-dependencies to ensure consistent installations.

// Score: 2/2 ✅

// Excellent.

// This is an important interview concept.

// A useful distinction:

// package.json
//       ↓
// What dependencies does my project need?

// package-lock.json
//       ↓
// What exact dependency tree was resolved?
// Q7 — Installing Playwright Test

// Your answer:

// npm install -D @playwright/test

// Score: 2/2 ✅

// Correct. 🔥

// -D means:

// --save-dev

// So Playwright Test is added as a development dependency.

// We'll study dependencies vs devDependencies separately, so no need to go deeper into that yet.

// 🏆 Final Score
// Question	Score
// Q1	2/2
// Q2	2/2
// Q3	2/2
// Q4	2/2
// Q5	2/2
// Q6	2/2
// Q7	2/2
// TOTAL	14/14 — 100% 🎯
// ✅ npm Basics — COMPLETE

// Your current progress:

// Module 2 — NodeJS and NPM
// │
// └── Chapter 1 — Node.js Introduction
//     ├── Node.js and V8        ✅
//     └── Node.js vs Browser    ✅
    
// └── Chapter 2 — NPM Basics
//     └── npm basics             ✅

// The tracker has the next P0 topic as:

// ➡️ package.json

// Module 2 → Chapter 3 → package.json → package.json

// We'll start only package.json next. Then, after you complete it, we'll separately cover dependencies vs devDependencies. 💪