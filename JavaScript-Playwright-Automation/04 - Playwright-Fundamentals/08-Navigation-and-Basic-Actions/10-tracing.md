This is the next concept after Videos.

We’ll cover: Tracing in Playwright.
- What is Playwright Trace?
- Why tracing is important in QA
- What information Trace captures
- trace: 'on'
- trace: 'off'
- trace: 'retain-on-failure'
- trace: 'on-first-retry'
- Trace Viewer
- How to open a trace
- Trace vs Screenshot vs Video
- Real-time QA debugging example
- CI/CD usage
- Common mistakes
- Interview questions



# Concept 28 — Tracing in Playwright

## 1. What is Playwright Trace?

Playwright Trace is a detailed record of a test execution that helps us understand what happened during the test.

A trace can contain useful debugging information such as:

- Actions performed
- Screenshots
- DOM snapshots
- Network activity
- Timing information
- Test steps
- Errors
- Before/after action information

In simple words:

> **Trace gives us a detailed timeline of what happened during a Playwright test.**

---

# 2. Why is Tracing Important in QA?

Suppose a Playwright test fails in CI/CD.

We may only see:

```text
Test Failed
```

A screenshot can show:

```text
What the page looked like
```

A video can show:

```text
What happened on the screen
```

But a trace gives much more detailed information about the test execution.

Conceptually:

```text
Test Failure
     |
     +-- Screenshot
     |      ↓
     |   Visual state
     |
     +-- Video
     |      ↓
     |   Execution sequence
     |
     +-- Trace
            ↓
       Detailed investigation
```

---

# 3. What Information Can Trace Provide?

A Playwright trace can help us investigate:

```text
Trace
  |
  +-- Test actions
  |
  +-- Action timing
  |
  +-- Screenshots
  |
  +-- DOM snapshots
  |
  +-- Network information
  |
  +-- Errors
  |
  +-- Before/after action state
```

This makes Trace very useful for debugging.

---

# 4. Real QA Problem

Imagine this test:

```js
await page.getByLabel('Username')
  .fill('Lingaraj');

await page.getByLabel('Password')
  .fill('Password123');

await page.getByRole('button', { name: 'Login' })
  .click();

await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

The test fails.

Possible reason:

```text
Login button clicked
       ↓
API failed
       ↓
Dashboard did not load
```

Or:

```text
Login button clicked
       ↓
Unexpected error
       ↓
Dashboard not displayed
```

Trace helps us investigate the execution step by step.

---

# 5. Trace Configuration

Tracing can be configured in:

```text
playwright.config.js
```

Example:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    trace: 'retain-on-failure'
  }
});
```

This tells Playwright to retain the trace for failed tests.

---

# 6. Main Trace Options

Common options are:

```text
trace
  |
  +-- 'off'
  |
  +-- 'on'
  |
  +-- 'retain-on-failure'
  |
  +-- 'on-first-retry'
```

---

# 7. `trace: 'off'`

Example:

```js
use: {
  trace: 'off'
}
```

This disables tracing.

Flow:

```text
Test runs
   ↓
No trace recorded
```

Use this when tracing is not required.

---

# 8. `trace: 'on'`

Example:

```js
use: {
  trace: 'on'
}
```

This records a trace for the test execution.

Concept:

```text
Test starts
    ↓
Trace recording
    ↓
Test executes
    ↓
Trace artifact
```

This can be useful when we want trace information for all tests.

---

# 9. `trace: 'retain-on-failure'`

Example:

```js
use: {
  trace: 'retain-on-failure'
}
```

This is useful for large automation suites.

Conceptually:

```text
Test
 |
 +-- PASS
 |    ↓
 |  Trace not retained
 |
 +-- FAIL
      ↓
    Trace retained
```

This allows us to focus debugging artifacts on failed tests.

---

# 10. Why is `retain-on-failure` Useful?

Suppose we have:

```text
500 tests
```

If every test produces a trace:

```text
500 tests
   ↓
500 trace artifacts
   ↓
More storage and artifact management
```

With:

```js
trace: 'retain-on-failure'
```

if only 5 tests fail:

```text
500 tests
   ↓
5 failed tests
   ↓
5 useful traces retained
```

This can make debugging artifacts easier to manage.

---

# 11. `trace: 'on-first-retry'`

Example:

```js
use: {
  trace: 'on-first-retry'
}
```

This records tracing information when a test is retried for the first time.

For example:

```text
Attempt 1
   ↓
FAIL
   ↓
Retry
   ↓
Trace recorded
```

This can be useful when investigating flaky tests.

---

# 12. Trace Options Comparison

| Setting | Meaning |
|---|---|
| `off` | Disable tracing |
| `on` | Record trace |
| `retain-on-failure` | Retain trace for failed tests |
| `on-first-retry` | Record trace on first retry |

Memory:

```text
OFF
→ No trace

ON
→ Trace

RETAIN-ON-FAILURE
→ Keep failed-test trace

ON-FIRST-RETRY
→ Trace first retry
```

---

# 13. Trace Viewer

The Trace Viewer is used to inspect a Playwright trace.

A trace can be opened using:

```bash
npx playwright show-trace path/to/trace.zip
```

Example:

```bash
npx playwright show-trace trace.zip
```

The Trace Viewer provides a visual interface for investigating the test execution.

---

# 14. Why is Trace Viewer Useful?

Instead of reading only an error message:

```text
Expected element to be visible
```

we can inspect the execution in Trace Viewer.

We can investigate:

```text
Test
 ↓
Action 1
 ↓
Action 2
 ↓
Action 3
 ↓
Failed action
```

This gives us more context.

---

# 15. Trace Viewer Concept

Think of Trace Viewer as a timeline:

```text
Test Start
    |
    +-- goto()
    |
    +-- fill Username
    |
    +-- fill Password
    |
    +-- click Login
    |
    +-- wait/navigation
    |
    +-- assertion
    |
    +-- FAIL
```

We can inspect the individual steps.

---

# 16. Example Trace Flow

Suppose the test contains:

```js
await page.goto('/login');

await page.getByLabel('Username')
  .fill('Lingaraj');

await page.getByLabel('Password')
  .fill('Password123');

await page.getByRole('button', { name: 'Login' })
  .click();

await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Trace can help us inspect:

```text
1. goto('/login')
2. fill Username
3. fill Password
4. click Login
5. Dashboard assertion
6. Failure
```

This makes it easier to identify where the problem occurred.

---

# 17. Trace and Screenshots

Trace can include visual information such as screenshots associated with actions.

This means we can inspect what the page looked like around a particular step.

Concept:

```text
Action
  ↓
Trace
  ↓
Visual state
  +
Action details
```

This is more useful than having only one final screenshot.

---

# 18. Trace and DOM Snapshots

Trace information can also help inspect the DOM state associated with test actions.

For example:

```text
Before click
     ↓
DOM state

After click
     ↓
DOM state
```

This can help us understand why a locator or action behaved unexpectedly.

---

# 19. Trace and Network Information

Trace debugging can provide information related to network activity.

For example:

```text
Click Login
     ↓
API request
     ↓
Response
     ↓
UI update
```

If the UI does not behave as expected, network information can help during investigation.

---

# 20. Trace and Timing

Trace helps us understand timing.

Example:

```text
00:00.000 → Open page
00:01.200 → Enter username
00:01.500 → Enter password
00:02.000 → Click Login
00:02.100 → Request starts
00:05.000 → Assertion fails
```

This can help identify synchronization or performance-related problems.

---

# 21. Real QA Example — Login Failure

Consider:

```js
test('Login Test', async ({ page }) => {

  await page.goto('/login');

  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('Password123');

  await page.getByRole('button', { name: 'Login' })
    .click();

  await expect(page.getByText('Dashboard'))
    .toBeVisible();
});
```

Suppose the test fails.

Possible causes:

```text
Wrong credentials
      OR
API failure
      OR
Server error
      OR
Dashboard locator issue
      OR
Navigation problem
```

Instead of guessing, inspect the trace.

---

# 22. Trace-Based Debugging Flow

```text
Test Failed
     ↓
Open Trace
     ↓
Inspect test actions
     ↓
Find failed action
     ↓
Inspect screenshot / DOM / network / timing
     ↓
Identify root cause
     ↓
Fix issue
```

This is an important QA debugging workflow.

---

# 23. Real-Time QA Example — Checkout

Consider:

```text
Login
 ↓
Search Product
 ↓
Add to Cart
 ↓
Checkout
 ↓
Enter Address
 ↓
Payment
 ↓
Order Confirmation
```

If the test fails at:

```text
Payment
```

Trace can help investigate the execution around the failure.

For example:

```text
Add to Cart → PASS
Checkout → PASS
Address → PASS
Payment → FAIL
```

We can inspect the relevant step instead of manually reproducing the entire flow.

---

# 24. Trace in CI/CD

Tracing is especially useful in CI/CD.

Typical flow:

```text
Developer pushes code
        ↓
CI pipeline starts
        ↓
Playwright tests run
        ↓
Test fails
        ↓
Trace retained
        ↓
QA / Developer opens trace
        ↓
Root cause investigation
```

This is one of the most important practical uses of Playwright tracing.

---

# 25. Practical CI Configuration

A common debugging-oriented configuration is:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  retries: process.env.CI ? 2 : 0,

  use: {

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }

});
```

This gives us:

```text
Failure
   |
   +-- Screenshot
   |
   +-- Video
   |
   +-- Trace
```

---

# 26. Screenshot vs Video vs Trace

This is very important.

### Screenshot

```text
One visual moment
```

Example:

```text
What did the page look like after Login?
```

### Video

```text
Sequence of visual events
```

Example:

```text
What happened during the Login flow?
```

### Trace

```text
Detailed test execution investigation
```

Example:

```text
Which action failed?
What was the page state?
What happened around the action?
What timing/network information is available?
```

Memory:

```text
Screenshot → Moment
Video      → Story
Trace      → Investigation
```

---

# 27. Trace Does Not Replace Assertions

Trace is a debugging tool.

It does not replace assertions.

Example:

```js
await page.getByRole('button', { name: 'Login' })
  .click();

await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

The assertion determines whether the expected behavior occurred.

Trace helps us understand what happened when investigating the test.

Remember:

```text
Action
  ↓
Assertion
  ↓
Pass / Fail

Trace
  ↓
Investigate
```

---

# 28. Trace Does Not Replace Video

Trace and video have different purposes.

```text
Video
→ Shows the visual sequence

Trace
→ Provides detailed debugging information
```

They can complement each other.

---

# 29. Trace Does Not Fix the Test

Trace helps us find the problem.

It does not automatically fix:

- Bad locators
- Application defects
- Timing problems
- Test-data problems
- Environment issues
- API failures

The QA engineer still needs to identify and fix the root cause.

---

# 30. Manual Tracing with `page` / Context

Playwright also provides lower-level tracing APIs through the browser context.

For example:

```js
await context.tracing.start({
  screenshots: true,
  snapshots: true
});
```

After the test:

```js
await context.tracing.stop({
  path: 'trace.zip'
});
```

This is lower-level tracing control.

For normal Playwright Test projects, configuring tracing in `playwright.config.js` is generally the simpler approach.

---

# 31. Understanding Manual Tracing

Example:

```js
await context.tracing.start({
  screenshots: true,
  snapshots: true
});
```

This starts tracing for the browser context.

Then:

```js
await page.goto('https://example.com');
```

The test executes.

Finally:

```js
await context.tracing.stop({
  path: 'trace.zip'
});
```

This stops tracing and saves the trace.

Flow:

```text
Start Trace
    ↓
Run test actions
    ↓
Stop Trace
    ↓
trace.zip
```

---

# 32. Why Use Manual Tracing?

Manual tracing can be useful when we need more direct control over when tracing starts and stops.

For example:

```text
Start tracing
    ↓
Important workflow
    ↓
Stop tracing
```

However, for standard Playwright Test automation, project-level configuration is usually easier to maintain.

---

# 33. Complete Manual Trace Example

```js
const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch();

  const context = await browser.newContext();

  await context.tracing.start({
    screenshots: true,
    snapshots: true
  });

  const page = await context.newPage();

  await page.goto('https://example.com');

  await page.getByText('More information').click();

  await context.tracing.stop({
    path: 'trace.zip'
  });

  await browser.close();

})();
```

Flow:

```text
Launch Browser
      ↓
Create Context
      ↓
Start Trace
      ↓
Create Page
      ↓
Perform Actions
      ↓
Stop Trace
      ↓
Save trace.zip
      ↓
Close Browser
```

---

# 34. Important Trace Commands

Run Playwright tests:

```bash
npx playwright test
```

Open a trace:

```bash
npx playwright show-trace trace.zip
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Show Playwright help:

```bash
npx playwright --help
```

---

# 35. Common Mistakes

## Mistake 1 — Using tracing everywhere without considering artifact size

Large test suites can generate many artifacts.

Instead of always keeping traces, consider:

```js
trace: 'retain-on-failure'
```

for failure-focused debugging.

---

# 36. Mistake 2 — Thinking trace means the test passed

A trace only records execution information.

It does not determine business correctness.

Always use assertions.

---

# 37. Mistake 3 — Confusing trace with screenshot

A screenshot is:

```text
One image
```

Trace is:

```text
Detailed execution information
```

---

# 38. Mistake 4 — Confusing trace with video

Video:

```text
Visual recording
```

Trace:

```text
Detailed test investigation
```

---

# 39. Mistake 5 — Using manual tracing unnecessarily

For a normal Playwright Test project, this:

```js
use: {
  trace: 'retain-on-failure'
}
```

is often simpler than manually starting and stopping traces for every test.

Use manual tracing when you specifically need lower-level control.

---

# 40. Best Practices

### 1. Use failure-focused tracing

```js
trace: 'retain-on-failure'
```

This is useful for large suites.

### 2. Use tracing with retries

```js
trace: 'on-first-retry'
```

can help investigate intermittent failures.

### 3. Combine artifacts

```js
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure'
}
```

### 4. Use Trace Viewer for investigation

Do not rely only on the terminal error message.

### 5. Focus on root cause

Use the trace to answer:

```text
What failed?
Why did it fail?
What was the application state?
What happened immediately before the failure?
```

---

# 41. Important Trace Settings

| Setting | Purpose |
|---|---|
| `trace: 'off'` | Disable tracing |
| `trace: 'on'` | Record trace |
| `trace: 'retain-on-failure'` | Retain failed-test trace |
| `trace: 'on-first-retry'` | Record trace on first retry |

---

# 42. Interview Questions

## Q1. What is Playwright Trace?

Answer:

> Playwright Trace is a detailed record of test execution that helps us investigate actions, timing, screenshots, DOM state, network information, and failures.

---

## Q2. Why is tracing useful?

Answer:

> Tracing provides detailed execution information that helps QA engineers and developers debug failed or flaky tests, especially when tests run in CI/CD.

---

## Q3. How do you enable tracing?

Answer:

I can configure it in `playwright.config.js`.

```js
use: {
  trace: 'retain-on-failure'
}
```

---

## Q4. What are the common trace options?

Answer:

```text
off
on
retain-on-failure
on-first-retry
```

---

## Q5. What is `retain-on-failure`?

Answer:

> It retains trace information for failed tests, making it useful for failure-focused debugging while avoiding unnecessary retained artifacts from successful tests.

---

## Q6. What is Trace Viewer?

Answer:

> Trace Viewer is the interface used to inspect a Playwright trace and investigate the test execution step by step.

---

## Q7. How do you open a Playwright trace?

Answer:

```bash
npx playwright show-trace trace.zip
```

---

## Q8. What is the difference between screenshot, video, and trace?

Answer:

> A screenshot captures one visual state, a video records the sequence of visual events, and a trace provides detailed test execution information for debugging.

---

## Q9. Can trace replace assertions?

Answer:

> No. Assertions verify expected application behavior. Trace is a debugging artifact used to investigate test execution.

---

## Q10. How is tracing useful in CI/CD?

Answer:

> When tests run remotely in CI/CD, tracing provides detailed execution evidence that helps developers and QA engineers investigate failures without manually reproducing the test immediately.

---

# 43. Quick Revision

```text
                    PLAYWRIGHT TRACE
                           |
             +-------------+-------------+
             |             |             |
          Actions      Screenshots     DOM
             |             |             |
             +-------------+-------------+
                           |
                      Network / Timing
                           |
                       Test Failure
                           |
                     Trace Viewer
                           |
                       Debugging
```

---

# 44. Easy Memory Trick

Remember:

```text
TRACE
T → Test execution
R → Runtime/action information
A → Actions
C → Context/state
E → Evidence for debugging
```

Main options:

```text
OFF
→ No trace

ON
→ Record trace

RETAIN-ON-FAILURE
→ Keep failed-test trace

ON-FIRST-RETRY
→ Trace first retry
```

Easy sentence:

> **Trace records the test so we can investigate the failure.**

---

# 45. Final Definition

> **Playwright Trace is a detailed test-execution record used for debugging and investigation. It can provide information about actions, timing, screenshots, DOM state, network activity, and failures, and can be inspected using Trace Viewer.**

---

# 46. One-Line Interview Summary

> **I use Playwright Trace to investigate failed or flaky tests by reviewing the test actions, timing, screenshots, DOM state, and other execution information, commonly using `trace: 'retain-on-failure'` in CI/CD.**

---

# 47. Final Example to Remember

### Configuration

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  retries: process.env.CI ? 2 : 0,

  use: {

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }

});
```

### Test

```js
const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

  await page.goto('/login');

  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('Password123');

  await page.getByRole('button', { name: 'Login' })
    .click();

  await expect(page.getByText('Dashboard'))
    .toBeVisible();

});
```

If the test fails:

```text
                  TEST FAILURE
                       |
          +------------+------------+
          |            |            |
      Screenshot     Video        Trace
          |            |            |
          ↓            ↓            ↓
      One state     Sequence    Detailed
                                investigation
          |            |            |
          +------------+------------+
                       |
                   Root Cause
```

Open the trace:

```bash
npx playwright show-trace trace.zip
```

---

# 48. Final Mental Model

```text
PLAYWRIGHT DEBUGGING
        |
        +-- Screenshot
        |      ↓
        |   "What did it look like?"
        |
        +-- Video
        |      ↓
        |   "What happened on screen?"
        |
        +-- Trace
               ↓
            "What happened
             during execution?"
                    |
                    ↓
              Trace Viewer
                    |
                    ↓
               Root Cause
```

> **Screenshot = Moment | Video = Story | Trace = Investigation**