# Playwright Installation and Setup

## 1. What is Playwright Installation and Setup?

Playwright installation and setup is the process of preparing our project so that we can create, execute, debug, and manage Playwright tests.

It includes:

- Installing Node.js and npm
- Installing VS Code or another code editor
- Creating a Playwright project
- Installing Playwright
- Installing required browser binaries
- Creating the Playwright project structure
- Creating test files
- Creating the Playwright configuration file
- Setting up Git-related files
- Running Playwright tests
- Running tests in headed or headless mode
- Running tests on specific browsers
- Debugging tests
- Viewing test reports

In simple words:

```text
Install Prerequisites
        ↓
Create Project
        ↓
Install / Setup Playwright
        ↓
Install Browsers
        ↓
Create Test
        ↓
Run Test
        ↓
Debug / Analyze Result
```

---

## 2. What do we need before installing Playwright?

Before installing Playwright, we need:

- Node.js
- npm
- VS Code or another code editor
- Basic JavaScript knowledge

We can verify Node.js and npm using:

```bash
node --version
npm --version
```

If these commands return version numbers, Node.js and npm are installed.

Node.js provides the runtime required to execute JavaScript outside the browser.

npm is used to install and manage Node.js packages such as Playwright.

---

## 3. Why do we use VS Code?

VS Code is a code editor where we can:

- Create Playwright projects
- Write test cases
- Manage project files
- Run commands through the terminal
- Debug tests
- Install and use the Playwright extension

For our Playwright automation project, we can create the project folder and open that folder directly in VS Code.

---

## 4. How do we create a Playwright project?

First, create a new project folder.

For example:

```text
JavaScript-Playwright-Automation
```

Open the folder in VS Code.

Then open the terminal.

Run:

```bash
npm init playwright@latest
```

This starts the Playwright project setup.

The basic flow is:

```text
Create Folder
      ↓
Open Folder in VS Code
      ↓
Open Terminal
      ↓
npm init playwright@latest
      ↓
Playwright Project Setup
```

---

## 5. What does `npm init playwright@latest` do?

This command initializes a new Playwright project.

It creates the basic structure and configuration required for Playwright testing.

During setup, Playwright may ask questions such as:

- Where should the tests be placed?
- Do you want to use JavaScript or TypeScript?
- Do you want to add a GitHub Actions workflow?
- Do you want to install browsers?

For our JavaScript learning project, we use JavaScript.

The important point is:

```text
npm init playwright@latest
        ↓
Initialize Playwright Project
```

---

## 6. What files and folders are created during setup?

After Playwright project initialization, the project can contain files and folders such as:

```text
JavaScript-Playwright-Automation/
│
├── node_modules/
│
├── tests/
│   └── example.spec.js
│
├── package.json
│
├── playwright.config.js
│
├── .gitignore
│
└── .github/
    └── playwright.yml
```

The exact files can vary depending on the Playwright setup options and project version.

The important files are explained below.

---

## 7. What is `package.json`?

`package.json` is the main configuration file for a Node.js project.

It contains information such as:

- Project name
- Project version
- Dependencies
- Development dependencies
- Scripts
- Other project details

Playwright Test is added as a project dependency.

Example:

```json
{
  "name": "playwright-project",
  "version": "1.0.0",
  "devDependencies": {
    "@playwright/test": "..."
  }
}
```

The exact Playwright version can change depending on when the project is created.

---

## 8. What is `playwright.config.js`?

`playwright.config.js` is the main Playwright configuration file.

It controls how Playwright tests should run.

We can configure things such as:

- Test directory
- Browsers / projects
- Timeout
- Retries
- Reporter
- Base URL
- Screenshots
- Videos
- Trace
- Parallel execution
- Other test execution settings

Example:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests'
});
```

In a real project, this configuration file can contain many more settings.

---

## 9. What is the `tests` folder?

The `tests` folder normally contains our Playwright test files.

Example:

```text
tests/
    login.spec.js
    dashboard.spec.js
    search.spec.js
```

A Playwright test file commonly uses the `.spec.js` extension.

For example:

```text
login.spec.js
```

can contain test cases related to login functionality.

---

## 10. What is `.gitignore`?

`.gitignore` tells Git which files and folders should not be tracked.

In a Playwright project, generated or local files may be ignored.

For example:

```text
node_modules/
playwright-report/
test-results/
```

This helps keep unnecessary generated files out of the Git repository.

It is useful when we commit and push our automation project to Git.

---

## 11. What is `.github/playwright.yml`?

A Playwright project can contain a GitHub Actions workflow file such as:

```text
.github/
    playwright.yml
```

This file can be used for CI/CD execution of Playwright tests through GitHub Actions.

The basic idea is:

```text
Developer Pushes Code
        ↓
GitHub Repository
        ↓
GitHub Actions
        ↓
Playwright Tests
        ↓
Test Result
```

This becomes especially useful when automation tests are executed automatically as part of CI/CD.

---

## 12. What are Playwright browser binaries?

Playwright needs browser binaries to execute browser automation tests.

Playwright supports browsers such as:

- Chromium
- Firefox
- WebKit

The browser binaries are separate from the Playwright package.

We can install them using:

```bash
npx playwright install
```

In simple words:

```text
Playwright Package
        ↓
Provides Playwright functionality

Browser Binaries
        ↓
Provide the browsers required to execute tests
```

---

## 13. What is `npx playwright install`?

This command installs the required Playwright browser binaries.

```bash
npx playwright install
```

It is important to understand the difference between the main commands:

```text
npm init playwright@latest
        ↓
Initialize Playwright Project


npx playwright install
        ↓
Install Browser Binaries


npx playwright test
        ↓
Run Playwright Tests
```

These commands perform different tasks.

---

## 14. How do we check whether Playwright is installed?

We can check the Playwright version using:

```bash
npx playwright --version
```

This helps us confirm that Playwright is installed and available through the project.

The setup notes also use the following style of command:

```bash
npm playwright -v
```

The purpose is to check the installed Playwright version.

---

## 15. How do we see Playwright command options?

We can use:

```bash
npx playwright --help
```

This displays available Playwright commands and options.

The setup notes also use:

```bash
npm playwright -h
```

Both are used to get help about Playwright CLI commands.

---

## 16. What is the Playwright VS Code extension?

The Playwright VS Code extension provides a graphical interface for working with Playwright tests directly inside VS Code.

It helps with:

- Running tests
- Debugging tests
- Managing tests
- Selecting browsers
- Viewing test execution
- Discovering test cases
- Debugging using breakpoints
- Step-by-step execution

This makes Playwright test development easier compared with using only terminal commands.

---

## 17. Benefits of the Playwright VS Code extension

Important advantages include:

### 1. User-friendly interface

Provides a graphical interface instead of using only command-line execution.

### 2. Browser selection

Allows us to run tests on a specific browser.

For example:

```text
Chromium
Firefox
WebKit
```

### 3. Real-time monitoring

Allows us to observe test execution.

### 4. Execution timing

Helps us see the time taken during test execution.

### 5. Debugging support

Allows us to debug tests directly from VS Code.

### 6. Test management

Automatically discovers and organizes Playwright tests.

---

## 18. How do we create a basic Playwright test?

A basic Playwright test looks like this:

```js
const { test, expect } = require('@playwright/test');

test('Verify page title', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);
});
```

This test:

- Creates a test case
- Opens a page
- Navigates to a website
- Checks the page title
- Passes or fails based on the expected result

---

## 19. Line-by-Line Explanation

```js
const { test, expect } = require('@playwright/test');
```

This imports `test` and `expect` from Playwright Test.

`test` is used to define a test case.

`expect` is used to validate the expected result.

---

```js
test('Verify page title', async ({ page }) => {
```

This creates a Playwright test.

`Verify page title` is the test name.

`async` allows us to use asynchronous Playwright operations.

`page` is the Playwright Page fixture.

---

```js
await page.goto('https://example.com');
```

This navigates the browser page to the given URL.

`await` waits for the asynchronous operation to complete.

---

```js
await expect(page).toHaveTitle(/Example/);
```

This verifies that the page title contains `Example`.

If the expected title is correct, the test passes.

If it is not correct, the test fails.

---

## 20. How do we run all Playwright tests?

The basic command is:

```bash
npx playwright test
```

This runs the Playwright test suite.

The general flow is:

```text
Test File
   ↓
Playwright Test Runner
   ↓
Browser
   ↓
Test Execution
   ↓
Pass / Fail
```

---

## 21. How do we run tests in parallel?

Playwright can execute tests using multiple workers.

Example:

```bash
npx playwright test --workers 3
```

This runs tests using 3 workers.

Parallel execution can reduce the total test execution time.

In simple words:

```text
Without Parallel Execution

Test 1 → Test 2 → Test 3 → Test 4


With Parallel Execution

Worker 1 → Test 1
Worker 2 → Test 2
Worker 3 → Test 3
Worker 1 → Test 4
```

The number of workers can be configured based on the project requirements.

---

## 22. How do we run a specific test file?

We can run a particular test file instead of the complete test suite.

Example:

```bash
npx playwright test tests/login.spec.js
```

This is useful when we are working on a specific feature or module.

For example:

```text
tests/
    login.spec.js
    dashboard.spec.js
    search.spec.js
```

If we want to run only login tests:

```bash
npx playwright test tests/login.spec.js
```

---

## 23. How do we run multiple specific test files?

We can specify more than one test file.

Example:

```bash
npx playwright test tests/login.spec.js tests/dashboard.spec.js
```

This runs the specified test files.

---

## 24. How do we run tests matching a file pattern?

We can provide a pattern to run matching test files.

Example:

```bash
npx playwright test example
```

If the project contains:

```text
example.spec.js
example_login.spec.js
example2.spec.js
```

matching files can be selected for execution.

---

## 25. How do we run a specific test case?

We can use the `-g` option to run a test by its title.

Example:

```bash
npx playwright test -g "Login Test"
```

If the test is:

```js
test('Login Test', async ({ page }) => {
  // test steps
});
```

then:

```bash
npx playwright test -g "Login Test"
```

runs the test matching that title.

This is useful when a test file contains many test cases but we want to execute only one.

---

## 26. How do we run tests on a specific browser?

Playwright can run tests on a specific configured browser/project.

For Chromium:

```bash
npx playwright test --project=chromium
```

For Firefox:

```bash
npx playwright test --project=firefox
```

For WebKit:

```bash
npx playwright test --project=webkit
```

This is useful for cross-browser testing.

The flow is:

```text
Same Test
    ↓
Chromium
Firefox
WebKit
    ↓
Compare Results
```

---

## 27. What is Headless Mode?

In headless mode, the browser runs without displaying the browser window.

The normal Playwright test command runs tests in headless mode:

```bash
npx playwright test
```

Important characteristics:

- Browser UI is not visible
- Faster execution
- Uses fewer resources
- Useful for automated execution
- Commonly used in CI/CD

In simple words:

```text
Test
 ↓
Browser runs in background
 ↓
Test Result
```

---

## 28. What is Headed Mode?

In headed mode, the browser window is visible while the test is running.

Run:

```bash
npx playwright test --headed
```

We can also combine it with a specific browser:

```bash
npx playwright test --project=chromium --headed
```

Headed mode is useful for:

- Watching test execution
- Troubleshooting
- Learning Playwright
- Debugging failures

Example:

```text
Test
 ↓
Browser Window Opens
 ↓
Actions Are Visible
 ↓
Test Result
```

---

## 29. Headless vs Headed Mode

| Headless | Headed |
|---|---|
| Browser window is not visible | Browser window is visible |
| Faster execution | Useful for watching execution |
| Uses fewer resources | Useful for troubleshooting |
| Common in CI/CD | Common during development |
| Runs in the background | Actions are visible |

Easy way to remember:

```text
Headless = Browser is running but not visible

Headed = Browser is running and visible
```

---

## 30. How do we debug Playwright tests?

Playwright provides a debug mode.

Run:

```bash
npx playwright test --debug
```

This opens the Playwright Inspector and allows us to debug the test.

Debug mode can help with:

- Pausing execution
- Step-by-step execution
- Inspecting locators
- Debugging failures
- Understanding test flow

The flow is:

```text
Test
 ↓
--debug
 ↓
Playwright Inspector
 ↓
Pause / Step Through
 ↓
Analyze Test
```

---

## 31. How do we debug a specific test file?

We can debug only a specific test file.

Example:

```bash
npx playwright test tests/login.spec.js --debug
```

This is useful when we are working on a particular test file and do not want to debug the entire test suite.

---

## 32. How do we start debugging from a specific line?

We can specify a line number.

Example:

```bash
npx playwright test tests/example.spec.js:23 --debug
```

This means:

```text
Open example.spec.js
        ↓
Start debugging around Line 23
```

This is useful when a test file contains multiple tests and we want to focus on a particular location.

---

## 33. How do we open the Playwright HTML report?

After test execution, Playwright can generate an HTML report.

We can open the report using:

```bash
npx playwright show-report
```

The report can contain information such as:

- Passed tests
- Failed tests
- Execution time
- Error details
- Screenshots
- Test execution details

The basic flow is:

```text
Run Tests
    ↓
Test Results
    ↓
HTML Report
    ↓
Analyze Results
```

---

## 34. What does the basic Playwright project structure look like?

A basic JavaScript Playwright project can look like this:

```text
JavaScript-Playwright-Automation/
│
├── node_modules/
│
├── tests/
│   └── example.spec.js
│
├── package.json
│
├── playwright.config.js
│
├── .gitignore
│
└── .github/
    └── playwright.yml
```

Each part has a purpose:

```text
node_modules/
        ↓
Installed project dependencies

tests/
        ↓
Playwright test files

package.json
        ↓
Project and dependency information

playwright.config.js
        ↓
Playwright configuration

.gitignore
        ↓
Files Git should ignore

.github/playwright.yml
        ↓
GitHub Actions / CI workflow
```

---

## 35. Complete Playwright Installation and Setup Flow

The complete setup can be remembered like this:

```text
Step 1
Install Node.js and npm
        ↓
Step 2
Install / Open VS Code
        ↓
Step 3
Create a new project folder
        ↓
Step 4
Open the folder in VS Code
        ↓
Step 5
Open Terminal
        ↓
Step 6
Run npm init playwright@latest
        ↓
Step 7
Choose JavaScript and required setup options
        ↓
Step 8
Playwright project files are created
        ↓
Step 9
Install Browser Binaries
npx playwright install
        ↓
Step 10
Create / Update Test Files
        ↓
Step 11
Write Playwright Tests
        ↓
Step 12
Run Tests
npx playwright test
        ↓
Step 13
Run Headed if Required
npx playwright test --headed
        ↓
Step 14
Debug if Required
npx playwright test --debug
        ↓
Step 15
View Test Report
npx playwright show-report
```

---

## 36. Important Playwright Commands

### Check Node.js

```bash
node --version
```

### Check npm

```bash
npm --version
```

### Initialize Playwright

```bash
npm init playwright@latest
```

### Install Playwright browsers

```bash
npx playwright install
```

### Check Playwright version

```bash
npx playwright --version
```

### Show Playwright help

```bash
npx playwright --help
```

### Run all tests

```bash
npx playwright test
```

### Show HTML report

```bash
npx playwright show-report
```

### Run tests in parallel

```bash
npx playwright test --workers 3
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

### Run a specific test case

```bash
npx playwright test -g "Login Test"
```

### Run Chromium

```bash
npx playwright test --project=chromium
```

### Run Firefox

```bash
npx playwright test --project=firefox
```

### Run WebKit

```bash
npx playwright test --project=webkit
```

### Run headed

```bash
npx playwright test --headed
```

### Run in debug mode

```bash
npx playwright test --debug
```

### Debug a specific file

```bash
npx playwright test tests/login.spec.js --debug
```

### Debug from a specific line

```bash
npx playwright test tests/example.spec.js:23 --debug
```

---

## 37. Real-Time QA Example

Imagine we are testing an e-commerce application.

We create a Playwright project and write a login test.

```js
const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  await page.goto('https://example.com/login');

  await expect(page).toHaveTitle(/Login/);
});
```

We can run the complete test suite using:

```bash
npx playwright test
```

If we want to see the browser:

```bash
npx playwright test --headed
```

If we want to debug:

```bash
npx playwright test --debug
```

If we want to run only the login test:

```bash
npx playwright test -g "Login Test"
```

If we want to run only the login test file:

```bash
npx playwright test tests/login.spec.js
```

If we want to execute on Chromium:

```bash
npx playwright test --project=chromium
```

If we want to view the report:

```bash
npx playwright show-report
```

The overall QA flow is:

```text
Write Test
    ↓
Run Test
    ↓
Browser Executes Test
    ↓
Pass / Fail
    ↓
Debug if Failed
    ↓
Generate / View Report
```

---

## 38. Common Mistakes

### Mistake 1 — Forgetting to install browser binaries

Playwright needs the required browser binaries to execute browser tests.

Use:

```bash
npx playwright install
```

---

### Mistake 2 — Confusing project initialization with browser installation

Remember:

```bash
npm init playwright@latest
```

initializes the Playwright project.

While:

```bash
npx playwright install
```

installs the browser binaries.

---

### Mistake 3 — Running commands from the wrong folder

Make sure the terminal is opened inside the Playwright project.

For example:

```text
JavaScript-Playwright-Automation/
```

Then run:

```bash
npx playwright test
```

---

### Mistake 4 — Forgetting `await`

Playwright actions are asynchronous.

For example:

```js
await page.goto('https://example.com');
```

and:

```js
await expect(page).toHaveTitle(/Example/);
```

Using `await` helps us wait for the asynchronous operation.

---

### Mistake 5 — Confusing headed and headless mode

Remember:

```text
Headless → Browser is not visible

Headed → Browser is visible
```

---

### Mistake 6 — Running the complete test suite when only one test is required

Instead of:

```bash
npx playwright test
```

we can run a specific test:

```bash
npx playwright test -g "Login Test"
```

---

### Mistake 7 — Debugging the entire project unnecessarily

If only one test file has a problem, debug that file:

```bash
npx playwright test tests/login.spec.js --debug
```

---

## 39. Interview Questions

**Question: What are the steps to install and set up Playwright?**

**Answer:**

First, I make sure Node.js, npm, and VS Code are available. Then I create a project folder and open it in VS Code. From the terminal, I run `npm init playwright@latest` to initialize the Playwright project. After that, I install the required browser binaries using `npx playwright install`. Playwright creates the basic project structure including the package file, configuration file, tests folder, `.gitignore`, and optional GitHub Actions workflow. Then I create my test cases and execute them using `npx playwright test`.

---

**Question: What is the difference between `npm init playwright@latest` and `npx playwright install`?**

**Answer:**

`npm init playwright@latest` initializes the Playwright project and creates the basic project structure.

`npx playwright install` installs the browser binaries required to execute Playwright tests.

---

**Question: How do you run Playwright tests in headed mode?**

**Answer:**

I use:

```bash
npx playwright test --headed
```

This opens the browser window so I can watch the test execution.

---

**Question: How do you run a specific test file?**

**Answer:**

I use:

```bash
npx playwright test tests/login.spec.js
```

This runs only the specified test file.

---

**Question: How do you run a specific test case?**

**Answer:**

I use the `-g` option with the test title:

```bash
npx playwright test -g "Login Test"
```

---

**Question: How do you run Playwright tests on a specific browser?**

**Answer:**

I use the `--project` option.

For example:

```bash
npx playwright test --project=chromium
```

Similarly, I can use Firefox or WebKit.

---

**Question: How do you debug a Playwright test?**

**Answer:**

I can use:

```bash
npx playwright test --debug
```

This opens the Playwright Inspector and allows me to pause execution, execute steps one by one, inspect locators, and troubleshoot failures.

---

## 40. Quick Revision

- Node.js and npm are required for Playwright setup.
- VS Code can be used as the development environment.
- `npm init playwright@latest` initializes a Playwright project.
- `npx playwright install` installs browser binaries.
- `package.json` contains project and dependency information.
- `playwright.config.js` contains Playwright configuration.
- `tests/` contains Playwright test files.
- `.gitignore` helps control files tracked by Git.
- `.github/playwright.yml` can be used for GitHub Actions CI/CD.
- The VS Code Playwright extension helps run, manage, and debug tests.
- `npx playwright test` runs tests.
- `--workers` controls parallel workers.
- A specific test file can be executed directly.
- `-g` can be used to run a specific test by title.
- `--project` can be used to run on a specific browser.
- Headless mode runs without visible browser UI.
- Headed mode displays the browser.
- `--debug` starts Playwright debugging.
- `show-report` opens the HTML test report.

---

## 41. Easy Memory Trick

Remember the main setup flow:

```text
PREREQUISITES
↓
Node.js + npm + VS Code

INIT
↓
npm init playwright@latest

BROWSERS
↓
npx playwright install

TEST
↓
npx playwright test

HEADED
↓
npx playwright test --headed

DEBUG
↓
npx playwright test --debug

REPORT
↓
npx playwright show-report
```

Easy shortcut:

```text
SETUP → INSTALL → TEST → DEBUG → REPORT
```

---

## 42. Final Definition

Playwright Installation and Setup is the process of preparing a Playwright automation project by installing the required tools and Playwright package, creating the project structure and configuration, installing browser binaries, creating test cases, and learning the commands required to execute, debug, and analyze Playwright tests.


////////----------Q&A----------------////


Q1. What is Playwright installation and setup? Why do we need it?
Playwright installation and setup is the process of getting Playwright ready to use in a project — installing the package through npm, setting up a config file, creating a test folder structure, and downloading the browser binaries. We need it because without this setup, we can't write or run any automated tests; it's the foundation that lets us start automating browser interactions.

Q2. Command to initialize a new Playwright project and what it does

bash
npm init playwright@latest

This command sets up a complete Playwright project in one step — it installs the Playwright package, asks a few setup questions (like JavaScript or TypeScript, whether to add a GitHub Actions workflow), creates the config file and folder structure, adds a sample test, and downloads the browser binaries needed to run tests.

Q3. Important files/folders created after npm init playwright@latest

playwright.config.js — holds project-level settings like base URL, timeouts, and which browsers to run tests on.
tests/ — the folder where our test files are stored.
package.json — tracks the project's dependencies, including Playwright, and defines npm scripts.
tests-examples/ or a sample test file — a starter test file showing the basic syntax, so we can see how a test is structured right away.
.github/workflows/ (optional) — a CI workflow file if we chose to set up GitHub Actions during initialization.

Q4. Purpose of package.json in a Playwright project
package.json keeps track of the project's dependencies (like Playwright itself), its version, and custom npm scripts (like npm test). It allows anyone who clones the project to install the exact same dependencies using npm install, keeping the setup consistent across different machines.

Q5. What is playwright.config.js? Why do we need it?
playwright.config.js is the main configuration file for a Playwright project. It controls settings like the base URL for tests, timeouts, which browsers to test against, whether to run in headless or headed mode, and reporting options. We need it so we don't have to repeat these settings in every single test file — it centralizes configuration in one place.

Q6. Command to install browser binaries. Why is it required?

bash
npx playwright install

This is required because Playwright itself doesn't come with actual browsers built in — it's just the framework that controls them. This command downloads the real browser engines (Chromium, Firefox, WebKit) so Playwright actually has browsers to launch and automate.

Q7. Difference between npx playwright test and npx playwright test --headed
npx playwright test runs the tests in headless mode by default — meaning the browser runs in the background without a visible UI, which is faster and commonly used in CI pipelines. npx playwright test --headed runs the tests with the browser visibly open, so we can actually watch the automation happen in real time, which is useful for debugging.

Q8. How to check Playwright version and get CLI help

bash
npx playwright --version

checks the installed Playwright version.

bash
npx playwright --help

shows the available CLI commands and options.

Q9. Complete setup flow from creating the project folder to running the first test

Create a new project folder and open a terminal inside it.
Make sure Node.js is installed.
Run npm init playwright@latest to initialize the project — this installs Playwright, sets up config, folder structure, and downloads browser binaries.
Answer the setup prompts (JavaScript/TypeScript, CI workflow, etc.).
Once setup completes, open the generated sample test file to see the basic structure.
Run the test using npx playwright test to execute it and confirm everything works.
Optionally, run npx playwright show-report to view the HTML test report.

Q10 ⭐ Interview Scenario
"If my lead asked me to set up a Playwright automation project from scratch, I'd start by making sure Node.js is installed on the machine, since Playwright depends on it. Then I'd create a new project folder, open a terminal inside it, and run npm init playwright@latest. This command installs Playwright, asks setup questions like JavaScript or TypeScript, sets up the config file and folder structure, and also downloads the necessary browser binaries like Chromium, Firefox, and WebKit.

Once the setup finishes, I'd check the generated sample test file to confirm everything is in place, and then run npx playwright test to execute it. If everything is configured correctly, the test would run successfully, and I could also run npx playwright show-report to view the results in a detailed HTML report. This whole process usually takes just a few minutes and gives a fully working automation environment ready to start writing real test cases."