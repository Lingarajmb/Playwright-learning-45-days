# Concept 5 — Running Playwright Tests

## 1. What is Running a Playwright Test?

After creating a Playwright test, we need to execute it.

Playwright provides the command:

```bash
npx playwright test
```

This command starts the Playwright Test Runner and executes the available tests.

Simple flow:

```text
Write Test
    ↓
Save Test File
    ↓
Run Playwright Command
    ↓
Playwright Test Runner
    ↓
Execute Tests
    ↓
PASS / FAIL
    ↓
Test Report
```

---

## 2. Why do we need to run tests?

Running tests allows us to verify whether the application behaves as expected.

As QA engineers, we run automated tests to:

- Verify application functionality
- Detect defects
- Perform regression testing
- Validate new changes
- Run multiple test cases
- Execute tests repeatedly
- Generate test results and reports

---

## 3. Basic Command

The most basic command is:

```bash
npx playwright test
```

It runs the Playwright tests configured in the project.

Example:

```bash
npx playwright test
```

Typical result:

```text
Running 5 tests using 5 workers

5 passed
```

If a test fails:

```text
4 passed
1 failed
```

---

## 4. Run a Specific Test File

Sometimes we don't want to execute the complete test suite.

We may want to execute only one test file.

Example:

```bash
npx playwright test tests/login.spec.js
```

This runs the tests present in:

```text
tests/login.spec.js
```

Useful when:

- Debugging one feature
- Developing a new test
- Re-running a failed test
- Testing a specific module

---

## 5. Run Multiple Test Files

We can provide multiple test files.

Example:

```bash
npx playwright test tests/login.spec.js tests/search.spec.js
```

This runs:

```text
login.spec.js
       +
search.spec.js
```

---

## 6. Run Tests Using a File Pattern

We can use a pattern to select test files.

Example:

```bash
npx playwright test login
```

This can be useful when selecting tests matching a particular filename pattern.

The exact files selected depend on the project's test directory and file naming conventions.

---

## 7. Run a Specific Test Using `-g`

We can use `-g` to filter tests by their title.

Example:

```bash
npx playwright test -g "Verify successful login"
```

This tells Playwright to run the test whose title matches the provided pattern.

Example test:

```js
test('Verify successful login', async ({ page }) => {

});
```

Command:

```bash
npx playwright test -g "Verify successful login"
```

This is useful when a test file contains many test cases and we want to execute only one.

---

## 8. Run Tests in Headed Mode

By default, Playwright tests generally run in headless mode.

To see the browser while the test runs:

```bash
npx playwright test --headed
```

Example:

```bash
npx playwright test --headed
```

The browser window will open and we can visually observe the test execution.

---

## 9. Headless vs Headed

### Headless

Browser UI is not displayed.

```bash
npx playwright test
```

Flow:

```text
Test
 ↓
Browser runs in background
 ↓
Result
```

Advantages:

- Faster
- Suitable for CI/CD
- Uses fewer resources
- Good for regular automated execution

---

### Headed

Browser UI is displayed.

```bash
npx playwright test --headed
```

Flow:

```text
Test
 ↓
Browser window opens
 ↓
Watch execution
 ↓
Result
```

Useful for:

- Learning
- Debugging
- Troubleshooting
- Understanding test behavior

---

## 10. Run Tests for a Specific Browser

Playwright projects can be configured with different browser projects.

For example:

```text
Chromium
Firefox
WebKit
```

To run tests using Chromium:

```bash
npx playwright test --project=chromium
```

Firefox:

```bash
npx playwright test --project=firefox
```

WebKit:

```bash
npx playwright test --project=webkit
```

The exact project names come from the project's Playwright configuration.

---

## 11. Run Tests with Multiple Workers

Playwright can execute tests in parallel using workers.

Example:

```bash
npx playwright test --workers 3
```

This tells Playwright to use 3 workers.

Conceptually:

```text
Worker 1 → Test A
Worker 2 → Test B
Worker 3 → Test C
```

Parallel execution can reduce total execution time.

The actual parallelism depends on test configuration, test dependencies, and the available system resources.

---

## 12. Run Tests in Debug Mode

Playwright provides a debug mode:

```bash
npx playwright test --debug
```

This is useful when we want to investigate why a test is failing.

Debug mode helps us inspect:

- Test execution
- Browser state
- Locators
- Actions
- Assertions
- Test steps

---

## 13. Debug a Specific Test File

We can debug a specific test file:

```bash
npx playwright test tests/login.spec.js --debug
```

This is useful when only the Login tests need investigation.

---

## 14. Debug a Specific Test Line

We can also target a specific test location.

Example:

```bash
npx playwright test tests/login.spec.js:23 --debug
```

This points Playwright to the test at the specified file and line location.

This can be useful when troubleshooting a particular part of a test.

---

## 15. View the HTML Report

After test execution, Playwright can generate an HTML report.

To open the report:

```bash
npx playwright show-report
```

The report helps us understand:

- Passed tests
- Failed tests
- Skipped tests
- Test duration
- Failure details
- Available test artifacts

---

## 16. Test Execution Flow

A typical execution flow is:

```text
Developer / QA Engineer
          ↓
Write test
          ↓
Save .spec.js file
          ↓
npx playwright test
          ↓
Playwright Test Runner
          ↓
Discover tests
          ↓
Create required fixtures
          ↓
Execute test
          ↓
Perform actions
          ↓
Run assertions
          ↓
Collect result
          ↓
Generate report
```

---

## 17. Example Test

Test file:

```text
tests/login.spec.js
```

Code:

```js
const { test, expect } = require('@playwright/test');

test('Verify Login page', async ({ page }) => {

  await page.goto('https://example.com/login');

  await expect(page).toHaveTitle(/Login/);

});
```

Run:

```bash
npx playwright test tests/login.spec.js
```

Run with browser visible:

```bash
npx playwright test tests/login.spec.js --headed
```

Debug:

```bash
npx playwright test tests/login.spec.js --debug
```

---

## 18. Real-Time QA Example

Suppose we have 100 automated regression tests.

During development, we modify the Login module.

We don't need to execute all 100 tests every time.

We can first execute the Login test file:

```bash
npx playwright test tests/login.spec.js
```

If one specific test fails, we can run only that test:

```bash
npx playwright test -g "Verify successful login"
```

If we need to watch the browser:

```bash
npx playwright test -g "Verify successful login" --headed
```

If we need detailed debugging:

```bash
npx playwright test -g "Verify successful login" --debug
```

This makes troubleshooting much faster.

---

## 19. Important Commands

### Run all tests

```bash
npx playwright test
```

### Run a specific file

```bash
npx playwright test tests/login.spec.js
```

### Run multiple files

```bash
npx playwright test tests/login.spec.js tests/search.spec.js
```

### Run a specific test by title

```bash
npx playwright test -g "Verify successful login"
```

### Run headed

```bash
npx playwright test --headed
```

### Run a specific browser

```bash
npx playwright test --project=chromium
```

### Run with workers

```bash
npx playwright test --workers 3
```

### Debug

```bash
npx playwright test --debug
```

### Debug a specific file

```bash
npx playwright test tests/login.spec.js --debug
```

### Debug a specific line

```bash
npx playwright test tests/login.spec.js:23 --debug
```

### Open HTML report

```bash
npx playwright show-report
```

---

## 20. Common Mistakes

### Mistake 1 — Running the wrong command

Incorrect:

```bash
playwright test
```

When Playwright is installed locally in the project, use:

```bash
npx playwright test
```

---

### Mistake 2 — Wrong test file path

Example:

```bash
npx playwright test login.spec.js
```

If the file is actually located at:

```text
tests/login.spec.js
```

use:

```bash
npx playwright test tests/login.spec.js
```

---

### Mistake 3 — Expecting headed mode by default

Running:

```bash
npx playwright test
```

does not mean the browser UI will be displayed.

Use:

```bash
npx playwright test --headed
```

when you want to visually observe the browser.

---

### Mistake 4 — Using too many workers unnecessarily

More workers do not always mean better execution.

The suitable worker count depends on:

- Machine resources
- Test independence
- Application environment
- CI/CD environment
- Test data handling

---

### Mistake 5 — Running the entire suite while debugging one test

Instead of repeatedly running:

```bash
npx playwright test
```

filter the required test:

```bash
npx playwright test -g "Verify successful login"
```

This saves time.

---

## 21. Interview Questions

### Q1. How do you run all Playwright tests?

```bash
npx playwright test
```

---

### Q2. How do you run a specific test file?

```bash
npx playwright test tests/login.spec.js
```

---

### Q3. How do you run a specific test by title?

Use the `-g` option:

```bash
npx playwright test -g "Verify successful login"
```

---

### Q4. How do you run Playwright in headed mode?

```bash
npx playwright test --headed
```

---

### Q5. How do you run a test in Chromium?

```bash
npx playwright test --project=chromium
```

---

### Q6. How do you debug a Playwright test?

Use:

```bash
npx playwright test --debug
```

---

### Q7. How do you open the Playwright HTML report?

```bash
npx playwright show-report
```

---

### Q8. What are workers in Playwright?

Workers are processes used by Playwright Test to execute tests. Multiple workers can allow independent tests to run in parallel.

---

## 22. Quick Revision

```text
npx playwright test
        ↓
Run tests
```

Useful filters:

```text
Specific file
      ↓
npx playwright test tests/login.spec.js

Specific test
      ↓
npx playwright test -g "Test Name"

Headed
      ↓
npx playwright test --headed

Debug
      ↓
npx playwright test --debug

Browser
      ↓
npx playwright test --project=chromium

Workers
      ↓
npx playwright test --workers 3

Report
      ↓
npx playwright show-report
```

---

## 23. Easy Memory Trick

Remember:

```text
RUN    → test
FILE   → file path
NAME   → -g
BROWSER→ --project
VISIBLE→ --headed
DEBUG  → --debug
REPORT → show-report
```

Example:

```bash
npx playwright test
```

Think:

> `npx playwright test` = Start Playwright test execution.

---

## 24. Final Definition

> Running Playwright tests means executing automated test cases through the Playwright Test Runner using CLI commands such as `npx playwright test`. Playwright allows us to run all tests, specific files or tests, different browser projects, headed or headless execution, parallel workers, debug mode, and HTML reports.

---

## 25. Concept Status

Concept: Running Playwright Tests

Status: COMPLETED

Next Concept:

Playwright Test Runner — how the test runner discovers, executes, manages, and reports tests.