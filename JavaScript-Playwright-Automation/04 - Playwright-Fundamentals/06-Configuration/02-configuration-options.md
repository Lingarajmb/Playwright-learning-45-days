# Concept 8 — Playwright Configuration Options

## 1. What is this concept?

In the previous concept, we learned about `playwright.config.js`.

Now we will understand the important configuration options used inside that file:

```text
baseURL
timeouts
retries
workers
projects
```

These options control **how Playwright tests execute**.

Simple idea:

```text
playwright.config.js
        ↓
Configuration Options
        ↓
┌─────────────────────────┐
│ baseURL                 │
│ timeout                │
│ retries                │
│ workers                │
│ projects               │
└─────────────────────────┘
        ↓
Test Execution
```

---

# 2. `baseURL`

## What is `baseURL`?

`baseURL` defines the common base URL of the application under test.

Example:

```js
use: {
  baseURL: 'https://example.com',
}
```

After configuring it, we can use relative URLs in our tests.

Instead of:

```js
await page.goto('https://example.com/login');
```

we can write:

```js
await page.goto('/login');
```

Playwright uses the configured `baseURL` together with the relative path.

---

## Why do we use `baseURL`?

Without `baseURL`, we may repeat the complete application URL in many tests.

Example:

```js
await page.goto('https://example.com/login');

await page.goto('https://example.com/products');

await page.goto('https://example.com/cart');
```

With `baseURL`:

```js
await page.goto('/login');

await page.goto('/products');

await page.goto('/cart');
```

Benefits:

- Less repeated code
- Cleaner test cases
- Easier maintenance
- Easier environment changes

---

## Real-Time QA Example

Suppose our QA environment is:

```text
https://qa.example.com
```

Configuration:

```js
use: {
  baseURL: 'https://qa.example.com',
}
```

Test:

```js
await page.goto('/login');
```

The effective URL becomes:

```text
https://qa.example.com/login
```

If the environment changes, the base URL can be changed centrally rather than changing every test.

---

# 3. `timeout`

## What is `timeout`?

`timeout` defines how long Playwright allows a test to run before timing it out.

Example:

```js
timeout: 30000
```

This means:

```text
30000 milliseconds
=
30 seconds
```

---

## Why do we need a timeout?

Web applications may take time to respond.

For example:

```text
Click Login
     ↓
Server processes request
     ↓
Dashboard loads
     ↓
Test continues
```

A timeout prevents a test from waiting indefinitely.

---

## Example

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 30000,

});
```

The test timeout is configured as:

```text
30 seconds
```

---

## Important Point

Do not confuse:

```text
Test timeout
```

with:

```text
Assertion timeout
```

They control different things.

For example, a test can have an overall test timeout, while an assertion can have its own waiting behavior.

Detailed timeout configuration can be handled separately when required.

---

# 4. `retries`

## What is `retries`?

`retries` specifies how many times Playwright should retry a failed test according to the configured retry policy.

Example:

```js
retries: 2
```

Conceptually:

```text
Test Run
   ↓
FAIL
   ↓
Retry
   ↓
FAIL
   ↓
Retry
   ↓
Final Result
```

---

## Why do we use retries?

Retries can be useful for temporary failures caused by:

- Temporary environment problems
- Network instability
- Infrastructure issues
- Occasional transient failures

However:

> Retries should not be used to hide flaky tests or genuine application defects.

---

## Example

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  retries: 2,

});
```

This configures Playwright to retry failed tests according to the retry setting.

---

## Real-Time QA Example

Suppose a test fails because the test environment temporarily becomes unavailable.

With retries configured:

```text
First attempt
     ↓
Environment issue
     ↓
Test fails
     ↓
Retry
     ↓
Test passes
```

But if a test repeatedly fails because the application has a genuine defect:

```text
Test fails
   ↓
Retry
   ↓
Fails
   ↓
Retry
   ↓
Fails
```

The defect still needs investigation.

---

# 5. `workers`

## What are workers?

Workers are processes used by Playwright Test to execute tests.

Example:

```js
workers: 3
```

Conceptually:

```text
Test Runner
     │
     ├── Worker 1
     ├── Worker 2
     └── Worker 3
```

Tests can be distributed across available workers.

---

## Why do we use workers?

Workers can help reduce total execution time by allowing independent tests to execute in parallel.

Example:

```text
100 Tests
   ↓
Multiple Workers
   ↓
Parallel Execution
   ↓
Reduced Execution Time
```

---

## Example

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  workers: 3,

});
```

This configures three workers.

---

## Important Point

More workers does not always mean better performance.

Too many workers can increase:

- CPU usage
- Memory usage
- Application load
- Database load
- Test-data conflicts

The correct number depends on:

```text
Machine resources
+
Application environment
+
Test design
+
CI/CD resources
```

---

# 6. `projects`

## What is a Project?

A Playwright project is a named configuration that allows the same tests to run with different settings.

Projects are commonly used for:

- Different browsers
- Different devices
- Different environments
- Different execution configurations

For example:

```text
Chromium
Firefox
WebKit
```

can be represented as different projects.

---

## Basic Project Example

```js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});
```

Here we have three projects:

```text
chromium
firefox
webkit
```

---

# 7. Why do we use Projects?

Suppose we have one test:

```js
test('Verify Login', async ({ page }) => {

  // Login test

});
```

We may want to run the same test against:

```text
Chromium
Firefox
WebKit
```

Instead of creating three separate tests, projects allow us to configure different execution environments.

Conceptually:

```text
Same Test
    │
    ├── Chromium Project
    │
    ├── Firefox Project
    │
    └── WebKit Project
```

---

# 8. Running a Specific Project

If the configuration contains:

```js
name: 'chromium'
```

we can run:

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

The project name must match the configured project name.

---

# 9. Projects for Different Environments

Projects are not limited to browsers.

They can also represent different configurations.

For example:

```text
QA
UAT
Production
```

A project can contain its own configuration such as:

```text
Base URL
Browser
Headers
Authentication
Device
```

The exact configuration depends on the framework design.

---

# 10. Complete Configuration Example

```js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 2,

  workers: 3,

  use: {
    baseURL: 'https://example.com',
    headless: true,
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});
```

This configuration contains:

```text
testDir
   ↓
Where tests are located

timeout
   ↓
Maximum test execution time

retries
   ↓
Retry failed tests

workers
   ↓
Parallel execution

baseURL
   ↓
Application base URL

projects
   ↓
Different execution configurations
```

---

# 11. How These Options Work Together

Imagine a QA project.

Configuration:

```js
testDir: './tests'

timeout: 30000

retries: 2

workers: 3

baseURL: 'https://qa.example.com'
```

Execution:

```text
npx playwright test
        ↓
Find tests in ./tests
        ↓
Create workers
        ↓
Run tests
        ↓
Use QA base URL
        ↓
Apply timeout
        ↓
Retry failed tests if configured
        ↓
Generate results
```

---

# 12. Real-Time QA Example

Suppose an e-commerce application has:

```text
500 automated tests
```

We want:

```text
QA Environment
Chromium + Firefox + WebKit
3 Workers
30-second test timeout
2 retries
```

Our configuration can centralize these settings.

Conceptually:

```text
             Playwright Config
                    ↓
       ┌────────────┼────────────┐
       ↓            ↓            ↓
    baseURL       workers      timeout
       ↓            ↓            ↓
      QA          Parallel      30 sec
                    ↓
               Test Execution
                    ↓
                Projects
          ┌─────────┼─────────┐
          ↓         ↓         ↓
      Chromium   Firefox   WebKit
```

This is much easier to maintain than configuring each test separately.

---

# 13. Configuration vs Command Line

Some settings can be configured in:

```text
playwright.config.js
```

and some execution behavior can also be changed using CLI options.

Example configuration:

```js
workers: 3
```

Command line:

```bash
npx playwright test --workers 2
```

The command-line option can be used when we want to change execution behavior for that run.

Similarly:

```bash
npx playwright test --headed
```

can be used when we want to run the browser in headed mode.

---

# 14. Important Commands

### Run all tests

```bash
npx playwright test
```

### Run with specific workers

```bash
npx playwright test --workers 3
```

### Run a specific project

```bash
npx playwright test --project=chromium
```

### Run headed

```bash
npx playwright test --headed
```

### Run debug mode

```bash
npx playwright test --debug
```

### Open HTML report

```bash
npx playwright show-report
```

---

# 15. Common Mistakes

## Mistake 1 — Hardcoding URLs everywhere

Avoid:

```js
await page.goto('https://qa.example.com/login');
```

in every test when a common base URL can be configured.

Prefer:

```js
use: {
  baseURL: 'https://qa.example.com',
}
```

Then:

```js
await page.goto('/login');
```

---

## Mistake 2 — Using too many workers

Avoid blindly setting:

```js
workers: 20
```

The machine and test environment may not support it efficiently.

Choose an appropriate number based on resources and test behavior.

---

## Mistake 3 — Treating retries as a solution for flaky tests

If a test passes only after retries, investigate the root cause.

Possible causes:

```text
Synchronization issue
Test-data issue
Environment issue
Application defect
Poor test design
```

---

## Mistake 4 — Incorrect project name

Configuration:

```js
name: 'chromium'
```

Correct:

```bash
npx playwright test --project=chromium
```

Incorrect:

```bash
npx playwright test --project=chrome
```

unless `chrome` is actually the configured project name.

---

## Mistake 5 — Confusing workers with projects

Workers:

```text
How many processes can execute tests
```

Projects:

```text
Which execution configuration should tests use
```

They are different concepts.

---

# 16. Important Differences

## `baseURL`

```text
Defines the common application URL
```

Example:

```js
baseURL: 'https://example.com'
```

---

## `timeout`

```text
Controls maximum allowed test execution time
```

Example:

```js
timeout: 30000
```

---

## `retries`

```text
Controls retry behavior for failed tests
```

Example:

```js
retries: 2
```

---

## `workers`

```text
Controls available worker processes for execution
```

Example:

```js
workers: 3
```

---

## `projects`

```text
Defines different named execution configurations
```

Example:

```text
chromium
firefox
webkit
```

---

# 17. Interview Questions

## Q1. What is `baseURL`?

`baseURL` defines the common application URL so tests can navigate using relative URLs.

Example:

```js
use: {
  baseURL: 'https://example.com',
}
```

---

## Q2. What is `timeout`?

`timeout` defines the maximum time allowed for a test to complete before it is considered timed out.

---

## Q3. What is `retries`?

`retries` defines how many times a failed test can be retried according to the configured retry policy.

---

## Q4. What are workers?

Workers are processes used by Playwright Test to execute tests. Multiple workers allow independent tests to run in parallel.

---

## Q5. What are Playwright projects?

Projects are named configurations that allow the same tests to execute with different settings, such as different browsers or devices.

---

## Q6. What is the difference between workers and projects?

```text
Workers
→ Control test execution processes.

Projects
→ Define different test execution configurations.
```

---

## Q7. Why is `baseURL` useful?

It avoids repeating the application's complete URL in every test and makes environment changes easier to manage.

---

## Q8. Should we use retries to fix flaky tests?

No.

Retries can help with temporary failures, but persistent flaky behavior should be investigated and fixed.

---

# 18. Quick Revision

```text
baseURL
   ↓
Application URL

timeout
   ↓
Maximum test execution time

retries
   ↓
Retry failed tests

workers
   ↓
Parallel execution processes

projects
   ↓
Different execution configurations
```

---

# 19. Easy Memory Trick

Remember:

```text
URL     → baseURL
TIME    → timeout
RETRY   → retries
WORK    → workers
SETUP   → projects
```

Or simply:

```text
Where?  → baseURL
How long? → timeout
Again?  → retries
How many? → workers
Which setup? → projects
```

---

# 20. Final Definition

> Playwright configuration options control how tests are executed. `baseURL` defines the application URL, `timeout` controls test execution time, `retries` controls retry behavior, `workers` controls parallel test execution processes, and `projects` define different named execution configurations such as browsers or devices.

---

# 21. Concept Status

Concept: Playwright Configuration Options

Status: COMPLETED

Topics Covered:

- `baseURL`
- `timeout`
- `retries`
- `workers`
- `projects`
- Running specific projects
- Configuration vs CLI
- Real-time QA usage
- Common mistakes
- Interview questions

Next Concept:

Playwright Projects — detailed browser/device/environment configuration.