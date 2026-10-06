# Concept 7 — Playwright Configuration

## 1. What is Playwright Configuration?

Playwright configuration is used to define the **common settings and execution behavior** of a Playwright test project.

The configuration is normally maintained in:

```text
playwright.config.js
```

Instead of writing the same settings in every test, we define them centrally in the configuration file.

For example:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 2,

  workers: 3,

});
```

Simple definition:

> `playwright.config.js` is the central configuration file used to control how Playwright tests are executed.

---

## 2. Why do we use `playwright.config.js`?

A real automation framework can contain hundreds or thousands of tests.

We don't want to configure every test individually.

Instead, we define common settings in one place.

For example:

```text
playwright.config.js
        ↓
 ┌──────────────────┐
 │ Test directory   │
 │ Timeout          │
 │ Retries          │
 │ Workers          │
 │ Projects         │
 │ Reporter         │
 │ Base URL         │
 └──────────────────┘
        ↓
All tests use configuration
```

Benefits:

- Centralized configuration
- Less duplicate code
- Easy maintenance
- Consistent test execution
- Browser/project management
- Timeout management
- Retry configuration
- Parallel execution configuration
- Reporting configuration

---

## 3. Where is the Configuration File?

A typical Playwright project looks like:

```text
JavaScript-Playwright-Automation/
│
├── tests/
│   ├── login.spec.js
│   ├── search.spec.js
│   └── checkout.spec.js
│
├── playwright.config.js
│
├── package.json
└── node_modules/
```

The configuration file is normally placed at the project root.

---

## 4. Basic Configuration Structure

A common configuration structure is:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

});
```

Here:

```text
defineConfig()
      ↓
Playwright configuration
      ↓
Configuration options
```

---

## 5. What is `defineConfig()`?

`defineConfig()` is provided by Playwright Test and is used to define the Playwright configuration.

Example:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',

});
```

It makes the configuration structure clear and provides configuration-related support.

---

## 6. `testDir`

`testDir` specifies where Playwright should look for test files.

Example:

```js
export default defineConfig({

  testDir: './tests',

});
```

This means:

```text
Look for tests inside:
./tests
```

Example project:

```text
project/
│
├── tests/
│   ├── login.spec.js
│   └── search.spec.js
│
└── playwright.config.js
```

---

## 7. Test Directory Example

Configuration:

```js
testDir: './tests'
```

Project:

```text
project/
├── tests/
│   ├── login.spec.js
│   ├── search.spec.js
│   └── cart.spec.js
│
└── playwright.config.js
```

When we execute:

```bash
npx playwright test
```

Playwright uses the configured test directory to discover tests.

---

## 8. Test Timeout

Timeout specifies how long Playwright should wait for a test to complete before considering it timed out.

Example:

```js
timeout: 30000
```

This means:

```text
30,000 milliseconds
        =
30 seconds
```

Example:

```js
export default defineConfig({

  timeout: 30000,

});
```

---

## 9. Why do we need Timeouts?

Web applications are not always instantaneous.

For example:

```text
Click Login
    ↓
Server processes request
    ↓
Dashboard loads
```

The application may need some time.

Timeouts provide a maximum waiting period for test execution.

However, timeouts should be chosen carefully.

Very small timeouts can cause unnecessary failures.

Very large timeouts can make failures take too long to report.

---

## 10. Retries

Retries define how many times Playwright should retry a failed test.

Example:

```js
retries: 2
```

This means a failed test can be retried according to the configured retry behavior.

Example:

```js
export default defineConfig({

  retries: 2,

});
```

Conceptually:

```text
Test
 ↓
FAIL
 ↓
Retry available?
 ↓
YES
 ↓
Run again
```

Retries can be particularly useful in CI environments for temporary environmental failures.

But retries should not be used to hide flaky tests or genuine application defects.

---

## 11. Workers

Workers control how many worker processes Playwright can use for test execution.

Example:

```js
workers: 3
```

Conceptually:

```text
Worker 1 → Test A
Worker 2 → Test B
Worker 3 → Test C
```

This can allow independent tests to run in parallel.

---

## 12. Why Use Workers?

Suppose we have:

```text
100 tests
```

Running everything sequentially may take a long time.

Parallel execution can distribute independent tests across workers.

Example:

```text
             Test Runner
                  ↓
       ┌──────────┼──────────┐
       ↓          ↓          ↓
   Worker 1   Worker 2   Worker 3
       ↓          ↓          ↓
    Tests       Tests       Tests
```

The correct number of workers depends on:

- CPU
- Memory
- Application environment
- Test independence
- Test data
- CI/CD resources

---

## 13. `baseURL`

`baseURL` allows us to define the application's common base URL.

Example:

```js
use: {
  baseURL: 'https://example.com',
}
```

Then instead of:

```js
await page.goto('https://example.com/login');
```

we can use:

```js
await page.goto('/login');
```

Playwright combines:

```text
baseURL
+
relative URL
```

to create the complete URL.

---

## 14. Why is `baseURL` Useful?

Suppose our application URL is:

```text
https://example.com
```

Many tests may navigate to:

```text
/login
/dashboard
/products
/cart
```

Without `baseURL`:

```js
await page.goto('https://example.com/login');

await page.goto('https://example.com/dashboard');

await page.goto('https://example.com/products');
```

With `baseURL`:

```js
await page.goto('/login');

await page.goto('/dashboard');

await page.goto('/products');
```

This makes tests cleaner and easier to maintain.

---

## 15. Complete Basic Configuration

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 2,

  workers: 3,

  use: {
    baseURL: 'https://example.com',
  },

});
```

This configuration defines:

```text
testDir  → Where tests are located
timeout  → Test timeout
retries  → Retry behavior
workers  → Parallel execution
baseURL  → Application base URL
```

---

## 16. Configuration and Tests

Configuration:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  use: {
    baseURL: 'https://example.com',
  },

});
```

Test:

```js
const { test, expect } = require('@playwright/test');

test('Verify Login page', async ({ page }) => {

  await page.goto('/login');

  await expect(page).toHaveTitle(/Login/);

});
```

The test doesn't need to repeat:

```text
https://example.com
```

because it is already defined in the configuration.

---

## 17. Configuration vs Test Code

### Configuration

Controls **how tests should run**.

Example:

```js
timeout: 30000
retries: 2
workers: 3
baseURL: 'https://example.com'
```

### Test Code

Defines **what the test should do**.

Example:

```js
await page.goto('/login');

await page.locator('#username').fill('testuser');

await page.locator('#login').click();

await expect(page).toHaveURL(/dashboard/);
```

Remember:

```text
Configuration → HOW tests run

Test Code     → WHAT tests do
```

---

## 18. Real-Time QA Example

Suppose a company has:

```text
QA Environment:
https://qa.example.com

UAT Environment:
https://uat.example.com

Production:
https://example.com
```

Instead of hardcoding URLs throughout every test, the framework can centralize environment-related configuration.

For example:

```js
use: {
  baseURL: 'https://qa.example.com',
}
```

Then tests can use:

```js
await page.goto('/login');
```

This reduces hardcoded URLs inside test cases.

---

## 19. Configuration with Multiple Projects

Playwright can define multiple projects.

A project can represent a different browser or execution configuration.

Example:

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

This allows the same tests to be executed against different browser projects.

The detailed Projects topic will be covered separately.

---

## 20. Running a Specific Project

If the configuration contains:

```text
chromium
firefox
webkit
```

we can run:

```bash
npx playwright test --project=chromium
```

or:

```bash
npx playwright test --project=firefox
```

or:

```bash
npx playwright test --project=webkit
```

The project name comes from the configuration.

---

## 21. Configuration and Reporter

A reporter controls how test results are presented.

Example:

```js
reporter: 'html'
```

Then after execution:

```bash
npx playwright show-report
```

can be used to open the HTML report.

Other reporter options exist, but reporter configuration will be covered in more detail in the dedicated Reporter topic.

---

## 22. Configuration and Headless / Headed Mode

Browser execution behavior can be controlled through the configuration.

For example:

```js
use: {
  headless: true,
}
```

This means the browser runs without displaying the UI.

For headed execution:

```js
use: {
  headless: false,
}
```

Command-line options can also override execution behavior when appropriate.

---

## 23. Complete Example

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 2,

  workers: 3,

  reporter: 'html',

  use: {
    baseURL: 'https://example.com',
    headless: true,
  },

});
```

Meaning:

```text
testDir
  ↓
Find tests in ./tests

timeout
  ↓
Maximum test execution time

retries
  ↓
Retry failed tests

workers
  ↓
Parallel execution

reporter
  ↓
HTML reporting

baseURL
  ↓
Application base URL

headless
  ↓
Run browser without visible UI
```

---

## 24. Important Commands

### Run all tests

```bash
npx playwright test
```

### Run headed

```bash
npx playwright test --headed
```

### Run specific browser/project

```bash
npx playwright test --project=chromium
```

### Run with specific workers

```bash
npx playwright test --workers 3
```

### Debug

```bash
npx playwright test --debug
```

### Open HTML report

```bash
npx playwright show-report
```

---

## 25. Common Mistakes

### Mistake 1 — Wrong `testDir`

If tests are inside:

```text
tests/
```

but configuration says:

```js
testDir: './test'
```

Playwright may not discover the intended tests.

Make sure the configured directory matches the project structure.

---

### Mistake 2 — Incorrect `baseURL`

If:

```js
baseURL: 'https://qa.example.com'
```

is configured but the intended environment is different, tests may execute against the wrong application.

Always verify the environment before execution.

---

### Mistake 3 — Very small timeout

Example:

```js
timeout: 1000
```

A slow application or CI environment may cause unnecessary failures.

Choose timeouts based on application behavior.

---

### Mistake 4 — Too many workers

Using a very high worker count can overload:

- Local machine
- CI agent
- Application server
- Test database

Use an appropriate worker count.

---

### Mistake 5 — Using retries to hide flaky tests

If a test fails frequently and passes only after retries, investigate the root cause.

Retries are not a replacement for fixing flaky automation.

---

### Mistake 6 — Hardcoding environment URLs everywhere

Avoid:

```js
await page.goto('https://qa.example.com/login');
```

in every test when a common environment URL can be configured centrally.

Prefer:

```js
use: {
  baseURL: 'https://qa.example.com',
}
```

and:

```js
await page.goto('/login');
```

---

## 26. Interview Questions

### Q1. What is `playwright.config.js`?

`playwright.config.js` is the central configuration file used to control Playwright test execution and common project settings.

---

### Q2. Why do we use Playwright configuration?

It provides centralized control over settings such as:

- Test directory
- Timeout
- Retries
- Workers
- Base URL
- Projects
- Reporter
- Browser execution settings

---

### Q3. What is `testDir`?

`testDir` specifies the directory where Playwright should look for test files.

Example:

```js
testDir: './tests'
```

---

### Q4. What is `baseURL`?

`baseURL` defines the common application URL so tests can use relative paths.

Example:

```js
use: {
  baseURL: 'https://example.com',
}
```

Then:

```js
await page.goto('/login');
```

---

### Q5. What is `workers`?

`workers` controls the number of worker processes available for test execution and can enable parallel execution of independent tests.

---

### Q6. What is `retries`?

`retries` specifies how many times Playwright should retry failed tests according to the configured retry policy.

Example:

```js
retries: 2
```

---

### Q7. What is the difference between configuration and test code?

```text
Configuration → Controls HOW tests run

Test Code     → Defines WHAT tests do
```

---

### Q8. Where is Playwright configuration normally stored?

In:

```text
playwright.config.js
```

at the project root.

---

## 27. Quick Revision

```text
playwright.config.js
        ↓
Central Configuration
        ↓
 ┌──────────────────┐
 │ testDir          │
 │ timeout          │
 │ retries          │
 │ workers          │
 │ baseURL          │
 │ projects         │
 │ reporter         │
 │ browser settings │
 └──────────────────┘
```

Important concepts:

```text
testDir  → Test location
timeout  → Maximum test time
retries  → Retry failed tests
workers  → Parallel execution
baseURL  → Application URL
projects → Different execution configurations
reporter → Test result format
```

---

## 28. Easy Memory Trick

Remember:

```text
WHERE → testDir
HOW LONG → timeout
RETRY → retries
HOW MANY → workers
WHERE APP → baseURL
WHICH SETUP → projects
HOW REPORT → reporter
```

Think:

> `playwright.config.js` = Control Center of the Playwright framework.

---

## 29. Final Definition

> `playwright.config.js` is the central configuration file of a Playwright project. It allows QA engineers to centrally control test execution settings such as test location, timeout, retries, workers, base URL, projects, reporters, and browser behavior instead of repeating these settings inside individual tests.

---

## 30. Concept Status

Concept: Playwright Configuration

Status: COMPLETED

Next Concept:

Configuration Options — `baseURL`, `timeouts`, `retries`, `workers`, and Projects in detail.