

# Playwright Test Runner

## 1. What is Playwright Test?

Playwright Test is the official test runner and testing framework provided by Playwright.

It gives us the structure and features required to:

- Create tests
- Organize tests
- Execute tests
- Validate expected results
- Run tests in parallel
- Retry failed tests when configured
- Generate test reports
- Capture test artifacts
- Manage test setup and cleanup

In simple words:

Playwright
    ↓
Provides browser automation

Playwright Test
    ↓
Provides the testing framework to organize and run that automation

---

## 2. Why do we need a Test Runner?

When we automate an application, we may have hundreds or thousands of test cases.

We need something to manage those tests.

A test runner helps us:

- Define individual test cases
- Execute tests
- Identify passed and failed tests
- Run multiple tests
- Run tests in parallel
- Retry failed tests when configured
- Generate reports
- Manage test setup and cleanup
- Capture screenshots, videos and traces

Without a test runner, we would need to build much of this test execution and reporting infrastructure ourselves.

---

## 3. Playwright Test provides

Important features include:

Playwright Test
    │
    ├── Test definition
    ├── Assertions
    ├── Fixtures
    ├── Hooks
    ├── Parallel execution
    ├── Retries
    ├── Reporting
    ├── Screenshots
    ├── Videos
    └── Tracing

We will learn these features separately throughout the Playwright course.

---

## 4. Basic Playwright Test Structure

A basic Playwright test looks like this:

const { test, expect } = require('@playwright/test');

test('Verify application title', async ({ page }) => {

    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example/);

});

The main parts are:

- `test()` → Defines the test
- `page` → Represents the browser page
- `page.goto()` → Navigates to a URL
- `expect()` → Validates the expected result

---

## 5. What is test()?

`test()` is used to define an individual automated test case.

Syntax:

test('test name', async ({ page }) => {

    // test steps

});

Example:

test('Verify login page', async ({ page }) => {

    await page.goto('https://example.com');

});

The test name describes what the test is validating.

---

## 6. Writing a Good Test Name

A test name should clearly describe the expected behavior.

Good example:

test('Verify user can login with valid credentials', async ({ page }) => {

});

Poor example:

test('Test 1', async ({ page }) => {

});

A meaningful test name makes the test report easier to understand.

---

## 7. What is async?

Playwright browser operations are asynchronous.

The `async` keyword is used when defining the test function so that we can use `await` with asynchronous Playwright operations.

Example:

test('Open application', async ({ page }) => {

    await page.goto('https://example.com');

});

We use:

`async` → Defines an asynchronous function

`await` → Waits for an asynchronous operation to complete

---

## 8. What is page?

`page` is a built-in fixture provided by Playwright Test.

It represents a browser Page, which is similar to a browser tab.

We use the `page` object to interact with the web application.

For example:

await page.goto('https://example.com');

await page.click('#login');

await page.fill('#username', 'testuser');

The Page can be used for:

- Navigation
- Clicking
- Entering text
- Keyboard actions
- Mouse actions
- Reading page information
- Interacting with web elements

---

## 9. What is a Fixture?

A fixture provides the test with the resources or setup it needs.

For example:

test('Verify title', async ({ page }) => {

});

Here, `page` is a Playwright Test fixture.

Playwright Test automatically provides the `page` fixture to the test.

We do not need to manually launch a browser and create a page for every basic test.

Conceptually:

Test
    ↓
Playwright Test
    ↓
Creates required test resources
    ↓
Provides `page`
    ↓
Test interacts with application

Fixtures will be covered in detail later.

---

## 10. What is expect()?

`expect()` is used to create assertions.

An assertion verifies whether the actual result matches the expected result.

Example:

await expect(page).toHaveTitle(/Example/);

This means:

Expected:
Page title should contain "Example"

If the condition is satisfied:

PASS

If the condition is not satisfied:

FAIL

---

## 11. Why are Assertions Important?

Automation should not only perform actions.

It should also verify the result.

For example:

Action:

await page.getByRole('button', { name: 'Login' }).click();

Expected result:

Dashboard should be displayed.

Assertion:

await expect(page).toHaveURL(/dashboard/);

So a complete automated test follows:

Action
    ↓
Application response
    ↓
Assertion
    ↓
Pass / Fail

---

## 12. test() vs expect()

Remember the difference:

`test()`

→ Defines what we are testing.

`expect()`

→ Defines what result we expect.

Example:

test('Verify login', async ({ page }) => {

    // Action
    await page.getByRole('button', { name: 'Login' }).click();

    // Verification
    await expect(page).toHaveURL(/dashboard/);

});

Easy memory:

test() → Define

page → Interact

expect() → Verify

---

## 13. Complete Example

const { test, expect } = require('@playwright/test');

test('Verify application title', async ({ page }) => {

    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example/);

});

### Execution flow

test()
    ↓
Test starts
    ↓
Playwright provides page fixture
    ↓
page.goto()
    ↓
Application opens
    ↓
expect()
    ↓
Expected result is checked
    ↓
PASS / FAIL

---

## 14. Real QA Example

Suppose we have an e-commerce application.

Requirement:

"User should be able to login with valid credentials and should be redirected to the Dashboard."

Automation:

test('Verify user can login with valid credentials', async ({ page }) => {

    await page.goto('https://myshop.example');

    await page.getByLabel('Username').fill('testuser');

    await page.getByLabel('Password').fill('Password123');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

});

Flow:

Open application
    ↓
Enter username
    ↓
Enter password
    ↓
Click Login
    ↓
Verify Dashboard
    ↓
PASS / FAIL

---

## 15. Playwright vs Playwright Test

### Playwright

Playwright provides the browser automation APIs.

It allows us to:

- Launch browsers
- Create contexts
- Create pages
- Navigate
- Click
- Fill forms
- Interact with elements

### Playwright Test

Playwright Test provides the testing framework around those automation capabilities.

It provides:

- `test()`
- `expect()`
- Fixtures
- Hooks
- Parallel execution
- Retries
- Reporting
- Test organization

Simple difference:

Playwright
    ↓
Browser automation

Playwright Test
    ↓
Testing framework / test runner

---

## 16. Why is Playwright Test useful?

Playwright Test helps us build a proper automation framework instead of writing isolated browser-control scripts.

It gives us a standard structure for:

- Writing tests
- Organizing tests
- Executing tests
- Validating results
- Managing test data and setup
- Running tests in parallel
- Debugging failures
- Generating reports

This makes the automation framework easier to maintain as the number of tests grows.

---

## 17. Common Mistakes

### Mistake 1 — Confusing test() and expect()

Wrong understanding:

test() → Assertion

Correct:

test() → Defines test

expect() → Assertion

---

### Mistake 2 — Thinking page is the browser

`page` represents a Page/tab.

Architecture:

Browser
    ↓
Browser Context
    ↓
Page

---

### Mistake 3 — Forgetting await

Example:

await page.goto('https://example.com');

Playwright actions are asynchronous, so we normally use `await` with them.

---

### Mistake 4 — Using meaningless test names

Avoid:

test('Test 1', ...)

Prefer:

test('Verify user can login with valid credentials', ...)

---

### Mistake 5 — Only performing actions without validation

Bad:

await page.getByRole('button', { name: 'Login' }).click();

A proper test should also verify the expected result.

Better:

await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL(/dashboard/);

---

## 18. Interview Question

### What is Playwright Test?

Answer:

Playwright Test is the official test runner and testing framework provided by Playwright. It allows us to create, organize and execute automated tests and provides features such as fixtures, assertions, hooks, parallel execution, retries and reporting.

---

## 19. Interview Question

### Why do we need a Test Runner?

Answer:

A test runner provides the structure and infrastructure needed to define, execute and manage automated tests. It handles things such as test execution, pass/fail results, parallel execution, retries, reporting and test setup, so we do not have to build these capabilities ourselves.

---

## 20. Interview Question

### What is the purpose of test()?

Answer:

`test()` is used to define an individual automated test case. It accepts a test description and a callback function containing the actions and validations that should be executed.

---

## 21. Interview Question

### What is the purpose of expect()?

Answer:

`expect()` is used to create assertions. It verifies that the actual application state matches the expected result and helps determine whether the expected condition has been satisfied.

---

## 22. Interview Question

### What does page represent?

Answer:

`page` is a built-in Playwright Test fixture that represents a browser Page or tab. We use it to interact with the web application, such as navigating, clicking elements and entering data.

---

## 23. Interview Question

### What is the difference between Playwright and Playwright Test?

Answer:

Playwright is the core browser automation library that provides APIs for controlling browsers.

Playwright Test is the testing framework and test runner built around Playwright that provides features such as test definition, assertions, fixtures, hooks, parallel execution, retries and reporting.

Simple:

Playwright → Browser automation

Playwright Test → Test framework and execution

---

## 24. Quick Revision

Remember:

test()
    ↓
Defines the test

page
    ↓
Interacts with the application

expect()
    ↓
Validates the expected result

Playwright
    ↓
Browser automation

Playwright Test
    ↓
Test runner / testing framework

---

## 25. Easy Memory Trick

Think about a manual QA test case:

Test Case
    ↓
Perform Actions
    ↓
Verify Expected Result
    ↓
Pass / Fail

In Playwright:

test()
    ↓
page
    ↓
expect()
    ↓
PASS / FAIL

So remember:

`test()` → What are we testing?

`page` → How do we interact?

`expect()` → What do we expect?

---

## 26. Key Takeaway

Playwright Test is the test runner and testing framework that gives structure to Playwright automation.

The three most important things to remember are:

test() → Defines the test

page → Performs browser interactions

expect() → Verifies expected results

Together they form the basic structure of a Playwright automated test.



////////-------------Q&A---------------


Q1. What is Playwright Test?
Playwright Test is the official test runner built specifically for Playwright. It provides the structure and tools needed to write, organize, run, and report automated tests — things like test functions, fixtures (like page), built-in assertions, parallel execution, and automatic retries for flaky tests.

Q2. Why do we need a test runner?
Without a test runner, we'd have to manually write code to launch browsers, organize test cases, track pass/fail results, generate reports, and handle things like parallel execution or retries ourselves. A test runner like Playwright Test automates all of this — it gives us a structured way to define tests, run them efficiently, and get clear, organized results, instead of building that infrastructure from scratch.

Q3. What is the purpose of test()?
test() is used to define an individual test case. It takes a description of what the test does and a callback function containing the actual steps (like navigating, clicking, or asserting), so Playwright Test knows what to execute and report on.

Q4. What is the purpose of expect()?
expect() is used to make assertions — checking whether the actual outcome of an action matches what we expect. It's what actually determines whether a test passes or fails, by comparing real values (like page title, element visibility, or text) against expected values.

Q5. What does page represent in:

javascript
test('Verify title', async ({ page }) => {

page is a built-in fixture provided by Playwright Test, representing a single browser tab/page, automatically created and ready to use inside the test. It's what we use to interact with the application — navigating to URLs, clicking elements, and so on — without needing to manually launch a browser or create a page ourselves.

Q6 ⭐ Interview: Difference between Playwright and Playwright Test?
"Playwright is the core automation library — it gives us the API to control browsers, like launching them, creating pages, and performing actions such as clicking or typing. Playwright Test, on the other hand, is built on top of that core library and acts as a complete test runner — it adds testing-specific features like the test() function to define test cases, expect() for assertions, built-in fixtures like page, parallel execution, retries, and reporting. So essentially, Playwright handles the browser automation itself, while Playwright Test provides the framework and structure needed to actually organize and run those automations as a proper test suite."