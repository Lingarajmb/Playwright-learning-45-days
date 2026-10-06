# Concept 6 — Playwright Test Runner

## 1. What is Playwright Test Runner?

Playwright Test Runner is the component of Playwright Test that **discovers, manages, and executes automated test cases**.

In simple words:

> Playwright Test Runner is responsible for running our Playwright tests and managing their execution.

When we run:

```bash
npx playwright test
```

the Playwright Test Runner starts executing the tests in the project.

---

## 2. Why do we need the Test Runner?

In a real QA automation project, we may have hundreds or thousands of test cases.

We need something to:

- Discover test files
- Execute test cases
- Manage test fixtures
- Run tests in parallel
- Manage workers
- Handle retries
- Apply configuration
- Capture test results
- Generate reports
- Collect screenshots, videos, and traces when configured
- Identify passed and failed tests

The Playwright Test Runner provides these capabilities.

---

## 3. Basic Flow

The overall flow is:

```text
Playwright Test Runner
          ↓
Discover Test Files
          ↓
Load Configuration
          ↓
Create Workers
          ↓
Execute Tests
          ↓
Create Fixtures
          ↓
Perform Actions
          ↓
Run Assertions
          ↓
Collect Results
          ↓
Generate Report
```

---

## 4. Test Runner vs `test()`

These two concepts are different.

### `test()`

`test()` is used to **define an individual test case**.

Example:

```js
test('Verify Login', async ({ page }) => {

});
```

### Test Runner

The Test Runner is responsible for **executing that test**.

Flow:

```text
test()
  ↓
Defines test

Playwright Test Runner
  ↓
Executes test
```

Easy memory:

```text
test()          → CREATE
Test Runner     → RUN
```

---

## 5. How Does the Test Runner Discover Tests?

When we execute:

```bash
npx playwright test
```

Playwright looks for test files based on the project's test configuration.

Common Playwright test files use names such as:

```text
login.spec.js
search.spec.js
checkout.spec.js
```

Example project:

```text
project/
│
├── tests/
│   ├── login.spec.js
│   ├── search.spec.js
│   └── checkout.spec.js
│
├── playwright.config.js
└── package.json
```

The Test Runner discovers the test files and executes the tests inside them.

---

## 6. Test Runner and Test Files

Suppose we have:

```text
tests/
├── login.spec.js
├── search.spec.js
└── cart.spec.js
```

When we run:

```bash
npx playwright test
```

the Test Runner identifies the tests from these files and executes them according to the configured execution strategy.

Conceptually:

```text
tests/
   │
   ├── login.spec.js
   │       ↓
   │    Tests
   │
   ├── search.spec.js
   │       ↓
   │    Tests
   │
   └── cart.spec.js
           ↓
         Tests
           ↓
    Playwright Test Runner
```

---

## 7. Test Runner and Fixtures

The Test Runner manages Playwright fixtures used by tests.

Example:

```js
test('Verify Login', async ({ page }) => {

  await page.goto('https://example.com/login');

});
```

Here:

```js
page
```

is a built-in Playwright fixture.

The Test Runner provides the required fixture to the test.

Conceptually:

```text
Test Runner
     ↓
Creates required fixture
     ↓
Provides page
     ↓
Test uses page
```

---

## 8. Test Isolation

Playwright Test is designed to provide isolation between tests.

For example:

```js
test('Test A', async ({ page }) => {
  // Test A
});

test('Test B', async ({ page }) => {
  // Test B
});
```

Each test receives its own test environment and fixtures according to Playwright's fixture model.

This helps prevent one test from unintentionally affecting another.

For example:

```text
Test A
  ↓
Own test state

Test B
  ↓
Own test state
```

Test isolation is especially important when tests are executed in parallel.

---

## 9. Test Runner and Workers

Playwright Test uses workers to execute tests.

For example:

```bash
npx playwright test --workers 3
```

This allows Playwright to use up to three workers for test execution.

Conceptually:

```text
Test Runner
     │
     ├── Worker 1 → Test A
     │
     ├── Worker 2 → Test B
     │
     └── Worker 3 → Test C
```

Parallel execution can reduce overall test execution time when tests can safely run independently.

---

## 10. Test Runner and Parallel Execution

Suppose we have:

```text
Test A
Test B
Test C
Test D
```

With multiple workers, tests may be distributed across workers.

Example:

```text
Worker 1 → Test A
Worker 2 → Test B
Worker 3 → Test C

Then:

Worker 1 → Test D
```

The exact scheduling depends on Playwright's execution strategy and configuration.

---

## 11. Test Runner and Retries

Sometimes a test can fail because of a temporary issue.

Playwright Test supports retries.

For example, retries can be configured in `playwright.config.js`.

Conceptually:

```text
Test
 ↓
FAIL
 ↓
Retry configured?
 ↓
YES
 ↓
Run test again
```

Example configuration:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 2,
});
```

This means a failed test can be retried according to the configured retry policy.

Retries should not be used to hide genuine application defects or unstable tests.

---

## 12. Test Runner and Configuration

The Test Runner uses Playwright configuration to determine how tests should execute.

A configuration file commonly contains:

```text
playwright.config.js
```

Configuration can control things such as:

- Test directory
- Timeout
- Retries
- Workers
- Projects
- Reporter
- Browser settings
- Base URL

Example:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 2,
  workers: 3,
});
```

The detailed configuration topic will be covered separately.

---

## 13. Test Runner and Assertions

The Test Runner executes the test steps and handles the test result.

Example:

```js
const { test, expect } = require('@playwright/test');

test('Verify Login', async ({ page }) => {

  await page.goto('https://example.com/login');

  await expect(page).toHaveTitle(/Login/);

});
```

Flow:

```text
Test Runner
     ↓
Run test
     ↓
Navigate
     ↓
Run assertion
     ↓
Assertion result
     ↓
PASS / FAIL
```

---

## 14. Test Runner and Reports

After test execution, Playwright can generate reports.

For example, the HTML reporter can show:

```text
Total Tests
Passed
Failed
Skipped
Duration
Failure details
```

Command:

```bash
npx playwright show-report
```

The report helps QA engineers understand test execution results.

---

## 15. Test Runner and Test Artifacts

Depending on configuration, Playwright can collect artifacts such as:

```text
Screenshots
Videos
Traces
Test reports
```

These artifacts are useful when investigating failures.

For example:

```text
Test Failed
     ↓
Open Report
     ↓
Inspect Failure
     ↓
Check Screenshot / Trace
     ↓
Identify Problem
```

---

## 16. Test Runner and Hooks

The Test Runner also works with Playwright hooks.

Examples:

```js
test.beforeEach(async ({ page }) => {

  // Setup

});

test.afterEach(async ({ page }) => {

  // Cleanup

});
```

These hooks allow setup or cleanup operations around tests.

Detailed hooks will be covered later in the dedicated Hooks topic.

---

## 17. Test Runner and `test.describe()`

`test.describe()` groups tests.

Example:

```js
test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
  });

  test('Invalid Login', async ({ page }) => {
  });

});
```

The Test Runner executes the individual tests inside the group.

Remember:

```text
test.describe()
       ↓
     GROUP

test()
       ↓
   TEST CASE

Test Runner
       ↓
EXECUTES TEST CASES
```

---

## 18. Complete Example

```js
const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

  test('Verify successful login', async ({ page }) => {

    await page.goto('https://example.com/login');

    await page.locator('#username').fill('testuser');

    await page.locator('#password').fill('password123');

    await page.locator('#login').click();

    await expect(page).toHaveURL(/dashboard/);

  });

  test('Verify invalid login', async ({ page }) => {

    await page.goto('https://example.com/login');

    await page.locator('#username').fill('wronguser');

    await page.locator('#password').fill('wrongpassword');

    await page.locator('#login').click();

    await expect(page.locator('#error')).toBeVisible();

  });

});
```

When we run:

```bash
npx playwright test
```

the Test Runner:

```text
1. Discovers the test file
       ↓
2. Finds Login Tests group
       ↓
3. Finds individual tests
       ↓
4. Creates required fixtures
       ↓
5. Executes test steps
       ↓
6. Performs assertions
       ↓
7. Records results
       ↓
8. Generates the configured report
```

---

## 19. Real-Time QA Example

Imagine a banking application with:

```text
100 Login tests
200 Account tests
150 Payment tests
100 Fund Transfer tests
```

Total:

```text
550 automated tests
```

Manually managing each test execution would be difficult.

The Playwright Test Runner helps automate this process.

It can:

```text
Discover tests
      ↓
Execute tests
      ↓
Run tests in parallel
      ↓
Retry according to configuration
      ↓
Collect results
      ↓
Generate reports
```

This is one reason Playwright Test is useful for large automation frameworks.

---

## 20. Important Commands

### Run all tests

```bash
npx playwright test
```

### Run a specific file

```bash
npx playwright test tests/login.spec.js
```

### Run headed

```bash
npx playwright test --headed
```

### Run in debug mode

```bash
npx playwright test --debug
```

### Run with workers

```bash
npx playwright test --workers 3
```

### Run a specific browser project

```bash
npx playwright test --project=chromium
```

### Open HTML report

```bash
npx playwright show-report
```

---

## 21. Common Mistakes

### Mistake 1 — Confusing Test Runner with `test()`

Remember:

```text
test()      → Defines the test
Test Runner → Executes the test
```

---

### Mistake 2 — Thinking `test.describe()` executes tests

`test.describe()` only groups tests.

```js
test.describe('Login Tests', () => {

});
```

The actual test is:

```js
test('Valid Login', async ({ page }) => {

});
```

---

### Mistake 3 — Using retries to hide failures

If a test passes only after multiple retries, investigate why it is unstable.

Do not assume:

```text
Retry passed = Application is correct
```

A flaky test can indicate:

- Synchronization issues
- Test-data problems
- Environment instability
- Application defects
- Poor test design

---

### Mistake 4 — Assuming more workers are always better

Increasing workers can improve speed, but it can also increase:

- CPU usage
- Memory usage
- Application load
- Test-data conflicts

Choose workers according to the environment and test design.

---

## 22. Interview Questions

### Q1. What is Playwright Test Runner?

Playwright Test Runner is the component of Playwright Test responsible for discovering, executing, and managing Playwright test cases and their results.

---

### Q2. What is the difference between `test()` and the Test Runner?

`test()` defines an individual test case, while the Test Runner executes and manages that test.

---

### Q3. What does the Test Runner do?

It can:

- Discover tests
- Execute tests
- Manage fixtures
- Manage workers
- Run tests in parallel
- Handle retries
- Apply configuration
- Collect results
- Generate reports

---

### Q4. What are workers in Playwright?

Workers are processes used by Playwright Test to execute tests. Multiple workers allow independent tests to execute in parallel.

---

### Q5. What is test isolation?

Test isolation means tests are provided isolated test environments and fixtures so that one test does not unintentionally affect another.

---

### Q6. How can you configure retries?

Retries can be configured in `playwright.config.js`.

Example:

```js
export default defineConfig({
  retries: 2,
});
```

---

### Q7. How do you run all Playwright tests?

```bash
npx playwright test
```

---

## 23. Quick Revision

```text
PLAYWRIGHT TEST RUNNER
          ↓
   Discover Tests
          ↓
 Load Configuration
          ↓
      Workers
          ↓
   Execute Tests
          ↓
 Manage Fixtures
          ↓
 Actions + Assertions
          ↓
   Collect Results
          ↓
      Reports
```

Remember:

```text
test()          → Defines test
describe()      → Groups tests
Fixture         → Provides test resources
Worker          → Executes tests
Retry           → Re-runs failed tests when configured
Reporter        → Presents test results
Test Runner     → Manages execution
```

---

## 24. Easy Memory Trick

Remember:

```text
D → E → M → R
```

### D — Discover

Find the tests.

### E — Execute

Run the tests.

### M — Manage

Manage workers, fixtures, retries, and execution.

### R — Report

Collect and present the results.

So:

```text
Test Runner = Discover + Execute + Manage + Report
```

---

## 25. Final Definition

> Playwright Test Runner is the execution engine of Playwright Test that discovers test cases, loads configuration, manages fixtures and workers, executes tests, handles retries and isolation, collects results, and generates test reports.

---

## 26. Concept Status

Concept: Playwright Test Runner

Status: COMPLETED

Next Concept:

Playwright Test Configuration — `playwright.config.js`