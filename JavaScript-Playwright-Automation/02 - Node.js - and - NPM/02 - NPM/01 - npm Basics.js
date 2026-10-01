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

// Q2.

// What is the difference between Node.js and npm?

// Q3.

// What is the difference between:

// npm install package-name

// and

// npm uninstall package-name
// Q4.

// What does this command do?

// npm init -y
// Q5.

// What is the purpose of the node_modules folder?

// Q6.

// What is the purpose of package-lock.json?

// Q7. Playwright scenario

// You want to add Playwright to a new JavaScript automation project.

// Which npm command would you use to install Playwright Test?

// Send Q1–Q7. I'll evaluate each answer individually and score you. 💪