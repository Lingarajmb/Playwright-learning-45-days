We’ll cover: Videos in Playwright.
- What is video recording?
- Why video is useful in QA
- Enabling video in playwright.config.js
- video: 'on'
- video: 'off'
- video: 'retain-on-failure'
- video: 'on-first-retry'
- Where Playwright stores videos
- Video + screenshot + trace
- Real-time QA examples
- Common mistakes
- Interview questions
- Quick revision + memory trick




# Concept 27 — Videos in Playwright

## 1. What is Video Recording?

Video recording in Playwright captures the browser test execution as a video.

It records what happened on the screen while the test was running.

For example:

```text
Test starts
    ↓
Browser opens
    ↓
User actions happen
    ↓
Application changes
    ↓
Test finishes
    ↓
Video is saved
```

A recorded video can help us understand what happened during a test.

---

# 2. Why is Video Recording Important in QA?

Suppose a test fails in CI/CD.

We may see:

```text
Test Failed
```

But the error alone may not clearly show what happened.

A video can show:

```text
Browser opened
      ↓
Login page loaded
      ↓
Username entered
      ↓
Password entered
      ↓
Login clicked
      ↓
Unexpected error appeared
      ↓
Test failed
```

This makes debugging easier.

---

# 3. Where is Video Recording Useful?

Video recording is especially useful for:

- Failed tests
- CI/CD execution
- Regression testing
- Debugging
- Complex user flows
- Dynamic applications
- Investigating unexpected UI behavior
- Sharing evidence with developers
- Understanding intermittent failures

---

# 4. How Does Playwright Record Video?

Video recording is normally configured through:

```js
playwright.config.js
```

Example:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: 'retain-on-failure'
  }
});
```

This tells Playwright to retain the video when a test fails.

---

# 5. Main Video Options

The important video settings are:

```text
video
  |
  +-- 'off'
  |
  +-- 'on'
  |
  +-- 'retain-on-failure'
  |
  +-- 'on-first-retry'
```

Let's understand each one.

---

# 6. `video: 'off'`

Example:

```js
use: {
  video: 'off'
}
```

This disables video recording.

Flow:

```text
Test runs
   ↓
No video recording
```

Use this when video recording is not required.

---

# 7. `video: 'on'`

Example:

```js
use: {
  video: 'on'
}
```

This records video for the test.

Flow:

```text
Test starts
    ↓
Video recording starts
    ↓
Test finishes
    ↓
Video available as test artifact
```

This is useful when we want video evidence for every test.

---

# 8. `video: 'retain-on-failure'`

Example:

```js
use: {
  video: 'retain-on-failure'
}
```

This is very useful in QA automation.

Concept:

```text
Test runs
   |
   +-- PASS
   |     ↓
   |   Video not retained
   |
   +-- FAIL
         ↓
       Video retained
```

This gives us failure evidence without keeping videos for every successful test.

---

# 9. Why is `retain-on-failure` Useful?

Imagine we have:

```text
100 automated tests
```

If every test generates a video:

```text
100 tests
   ↓
100 videos
   ↓
Large amount of artifacts
```

But if we use:

```js
video: 'retain-on-failure'
```

and only 3 tests fail:

```text
100 tests
   ↓
3 failures
   ↓
3 videos retained
```

This can reduce unnecessary test artifacts.

---

# 10. `video: 'on-first-retry'`

Example:

```js
use: {
  video: 'on-first-retry'
}
```

This records video when a test is being retried for the first time.

This can be useful when the project uses retries.

For example:

```text
Test attempt 1
      ↓
FAIL
      ↓
Retry
      ↓
Video recorded
      ↓
Test attempt 2
```

---

# 11. Video Options Comparison

| Setting | Behavior |
|---|---|
| `off` | No video |
| `on` | Record video |
| `retain-on-failure` | Retain video for failed tests |
| `on-first-retry` | Record video on first retry |

Easy memory:

```text
off
→ Nothing

on
→ Record

retain-on-failure
→ Keep failed-test video

on-first-retry
→ Record first retry
```

---

# 12. Basic Configuration Example

A simple configuration:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: 'retain-on-failure'
  }
});
```

Now Playwright can retain videos for failed tests.

---

# 13. Complete Configuration Example

Example:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30 * 1000,

  use: {
    baseURL: 'https://example.com',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }

});
```

Here:

```text
screenshot
    ↓
Capture failure screenshot

video
    ↓
Retain failure video

trace
    ↓
Retain failure trace
```

This provides useful debugging artifacts.

---

# 14. Video with Screenshot and Trace

In a real Playwright project, we may configure:

```js
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure'
}
```

Concept:

```text
                  Test
                   |
        +----------+----------+
        |          |          |
   Screenshot    Video      Trace
        |          |          |
        +----------+----------+
                   |
             Debug Failure
```

Each artifact provides different information.

---

# 15. Screenshot vs Video vs Trace

### Screenshot

Shows one visual state.

```text
Single moment
     ↓
Image
```

### Video

Shows the sequence of actions.

```text
Multiple moments
       ↓
Recorded execution
```

### Trace

Provides detailed Playwright execution information.

```text
Actions
Network
DOM
Screenshots
Timing
Other debugging information
```

Memory:

```text
Screenshot → What did it look like?

Video → What happened?

Trace → What happened internally during execution?
```

---

# 16. Real QA Example — Login Failure

Suppose we have:

```js
test('Login Test', async ({ page }) => {

  await page.goto('/login');

  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('WrongPassword');

  await page.getByRole('button', { name: 'Login' })
    .click();

  await expect(page.getByText('Dashboard'))
    .toBeVisible();

});
```

Suppose the test fails because Dashboard does not appear.

With:

```js
use: {
  video: 'retain-on-failure'
}
```

the failed test can have a video artifact.

We can inspect the execution:

```text
Open login
    ↓
Enter username
    ↓
Enter password
    ↓
Click Login
    ↓
Error appears
    ↓
Dashboard not displayed
    ↓
Assertion fails
```

---

# 17. Real-Time QA Scenario — Checkout

Consider an e-commerce application:

```text
Login
  ↓
Search product
  ↓
Add to cart
  ↓
Open cart
  ↓
Enter address
  ↓
Payment
  ↓
Order confirmation
```

This is a long flow.

If the test fails at the payment step, a video can help us understand the sequence.

Example:

```js
test('Checkout Flow', async ({ page }) => {

  await page.goto('/login');

  // Login
  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('Password123');

  await page.getByRole('button', { name: 'Login' })
    .click();

  // Product
  await page.getByPlaceholder('Search products')
    .fill('Laptop');

  await page.getByText('Laptop')
    .click();

  // Add to cart
  await page.getByRole('button', { name: 'Add to Cart' })
    .click();

  // Checkout
  await page.getByRole('button', { name: 'Checkout' })
    .click();

  // Continue flow...
});
```

If the test fails, the video can show where the flow went wrong.

---

# 18. Video and CI/CD

Video recording is especially useful in CI/CD.

For example:

```text
Developer pushes code
       ↓
CI pipeline starts
       ↓
Playwright tests run
       ↓
Test fails
       ↓
Test artifacts generated
       ↓
Video available
       ↓
QA/Developer investigates
```

This is useful because CI/CD tests usually run on remote machines where we cannot directly watch the browser.

---

# 19. Local Execution vs CI Execution

### Local

You can run:

```bash
npx playwright test
```

and observe the test depending on the execution mode.

### CI

The tests may run remotely or in headless mode.

A video can provide evidence of what happened during the test.

Concept:

```text
Local
→ We can debug directly

CI
→ Video/trace/screenshots help investigate remotely
```

---

# 20. Headless Mode and Video

Playwright tests commonly run headless in automation environments.

For example:

```bash
npx playwright test
```

Even though the browser is not visibly displayed to the user, Playwright can still record a video when video recording is enabled.

Concept:

```text
Headless browser
      ↓
Test execution
      ↓
Video artifact
```

---

# 21. Where are Videos Stored?

Playwright test artifacts are generally associated with the test result output.

The exact generated location depends on the Playwright configuration and test execution.

A common project artifact directory is:

```text
test-results/
```

For example:

```text
test-results/
└── login-test/
    └── video.webm
```

The exact folder and generated names can vary.

Do not hard-code assumptions about generated artifact names.

---

# 22. Video Format

Playwright commonly produces video artifacts in:

```text
.webm
```

Example:

```text
video.webm
```

The generated artifact is managed by Playwright.

---

# 23. Can We Set a Custom Video Path?

For normal Playwright Test usage, video artifacts are managed by the test runner.

Instead of manually controlling every video file path, configure:

```js
use: {
  video: 'retain-on-failure'
}
```

and let Playwright manage the test artifacts.

This is generally easier for CI/CD.

---

# 24. Video Recording and Test Retries

Suppose configuration contains:

```js
retries: 2
```

and:

```js
video: 'on-first-retry'
```

The flow can be:

```text
Attempt 1
    ↓
FAIL
    ↓
Retry
    ↓
Video recorded
    ↓
Attempt 2
```

This is useful for investigating tests that fail intermittently.

---

# 25. What is a Flaky Test?

A flaky test is a test that:

```text
Sometimes passes
Sometimes fails
```

without a relevant application-code change.

Example:

```text
Run 1 → PASS
Run 2 → FAIL
Run 3 → PASS
Run 4 → PASS
Run 5 → FAIL
```

Video can help us investigate what happened during the failing execution.

However:

> Video does not fix flaky tests. It helps us investigate them.

---

# 26. Video Does Not Replace Assertions

Consider:

```js
await page.getByRole('button', { name: 'Login' })
  .click();
```

and video recording.

The video shows what happened visually.

But we still need an assertion:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Remember:

```text
Actions
   ↓
Perform behavior

Assertions
   ↓
Verify behavior

Video
   ↓
Capture execution evidence
```

---

# 27. Video Does Not Replace Logs

Video shows the visual execution.

Logs can provide:

```text
Errors
API information
Debug messages
Application logs
Test output
```

Therefore:

```text
Video ≠ Logs
```

They complement each other.

---

# 28. Complete QA Configuration

A practical configuration can look like:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30 * 1000,

  retries: process.env.CI ? 2 : 0,

  use: {

    baseURL: 'https://example.com',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }

});
```

This gives us:

```text
CI
 |
 +-- Retry failed tests
 |
 +-- Screenshot on failure
 |
 +-- Video on failure
 |
 +-- Trace on failure
```

---

# 29. Real QA Failure Investigation

Suppose a test fails:

```text
Test: Create Employee
Status: FAILED
```

We can investigate using:

```text
Screenshot
    ↓
What was visible?

Video
    ↓
What sequence occurred?

Trace
    ↓
What actions, timing, DOM, and network activity occurred?
```

This makes debugging much easier.

---

# 30. Common Mistakes

## Mistake 1 — Recording every test unnecessarily

Configuration:

```js
video: 'on'
```

may generate videos for every test.

For a large suite, this can create many artifacts.

If you mainly need failure evidence, consider:

```js
video: 'retain-on-failure'
```

---

# 31. Mistake 2 — Thinking video proves test success

A video only shows execution.

It does not determine whether the business requirement passed.

Always use assertions:

```js
await expect(page.getByText('Success'))
  .toBeVisible();
```

---

# 32. Mistake 3 — Depending only on video

Do not investigate every issue only through video.

Use:

```text
Assertion error
Screenshot
Video
Trace
Logs
```

depending on the problem.

---

# 33. Mistake 4 — Confusing video with screenshot

Remember:

```text
Screenshot
→ One captured image

Video
→ Sequence of recorded execution
```

---

# 34. Mistake 5 — Using video to hide poor test design

Video is a debugging aid.

It should not replace:

- Good locators
- Proper assertions
- Good synchronization
- Clean test structure
- Stable test data

---

# 35. Best Practices

### 1. Use failure-focused recording for large suites

```js
video: 'retain-on-failure'
```

### 2. Use video for complex flows

Examples:

```text
Checkout
Payment
Multi-step registration
File upload
Complex UI workflow
```

### 3. Combine video with screenshots and traces

```js
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure'
}
```

### 4. Use retries carefully

Retries can help investigate intermittent failures, but they should not hide real defects.

### 5. Keep artifacts manageable

Recording every test may increase storage requirements.

---

# 36. Important Video Settings

| Setting | Purpose |
|---|---|
| `video: 'off'` | Disable recording |
| `video: 'on'` | Record video |
| `video: 'retain-on-failure'` | Retain failed-test videos |
| `video: 'on-first-retry'` | Record on first retry |

---

# 37. Screenshot vs Video vs Trace

| Artifact | Main Purpose |
|---|---|
| Screenshot | Capture one visual state |
| Video | Show the sequence of execution |
| Trace | Detailed debugging information |
| Logs | Textual execution/application information |

Easy memory:

```text
Screenshot → Snapshot
Video      → Story
Trace      → Detailed investigation
Logs       → Text information
```

---

# 38. Interview Questions

## Q1. How do you enable video recording in Playwright?

Answer:

I configure the `video` option in `playwright.config.js`.

Example:

```js
use: {
  video: 'retain-on-failure'
}
```

---

## Q2. What are the common video options?

Answer:

The common options are:

```text
off
on
retain-on-failure
on-first-retry
```

---

## Q3. What is the difference between `on` and `retain-on-failure`?

Answer:

> `on` records video for tests, while `retain-on-failure` is useful when we want to retain video artifacts for failed tests rather than keeping them for every successful test.

---

## Q4. Why is `retain-on-failure` useful?

Answer:

> It provides video evidence for failed tests while reducing unnecessary artifacts from successful tests.

---

## Q5. What is `on-first-retry`?

Answer:

> `on-first-retry` records video when a test is retried for the first time. It is useful for investigating failures that may be intermittent.

---

## Q6. Why is video useful in CI/CD?

Answer:

> CI/CD tests often execute remotely and may run headlessly. A video provides visual evidence of the test execution and helps QA engineers and developers investigate failures.

---

## Q7. Does video replace assertions?

Answer:

> No. Video is evidence for debugging. Assertions are still required to verify whether the expected application behavior occurred.

---

## Q8. What is the difference between screenshot and video?

Answer:

> A screenshot captures a single visual state, while a video records a sequence of events during test execution.

---

## Q9. Can video help debug flaky tests?

Answer:

> Yes. Video can help us understand what happened during a failing or retried execution. However, video helps investigate flaky tests; it does not fix them.

---

# 39. Quick Revision

```text
PLAYWRIGHT VIDEO
       |
       +-- off
       |     → No recording
       |
       +-- on
       |     → Record video
       |
       +-- retain-on-failure
       |     → Keep failed-test video
       |
       +-- on-first-retry
             → Record first retry
```

Real QA flow:

```text
Test
 ↓
Action
 ↓
Assertion
 ↓
PASS / FAIL
 ↓
If failure
 ↓
Video
 ↓
Debug
```

---

# 40. Easy Memory Trick

Remember:

```text
OFF
→ No video

ON
→ Record

RETAIN-ON-FAILURE
→ Keep failure video

ON-FIRST-RETRY
→ Record first retry
```

Easy sentence:

> **Record → Fail → Retain → Debug**

---

# 41. Final Definition

> **Video recording in Playwright captures the browser test execution as a video artifact. It is useful for debugging failed or intermittent tests, especially in CI/CD environments. Playwright provides options such as `off`, `on`, `retain-on-failure`, and `on-first-retry` to control video recording behavior.**

---

# 42. One-Line Interview Summary

> **I use Playwright's video configuration to capture test execution, commonly using `video: 'retain-on-failure'` so that failed tests retain video evidence for debugging, especially in CI/CD environments.**

---

# 43. Final Example to Remember

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30 * 1000,

  retries: process.env.CI ? 2 : 0,

  use: {

    baseURL: 'https://example.com',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }

});
```

Test:

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

If the test fails and video retention is configured:

```text
Test fails
    ↓
Screenshot
    +
Video
    +
Trace
    ↓
Test artifacts
    ↓
Debug the failure
```

---

# 44. Final Mental Model

```text
                 PLAYWRIGHT TEST
                       |
                 Perform Actions
                       |
                 Run Assertions
                       |
                 +-----+-----+
                 |           |
               PASS         FAIL
                 |           |
                 |      +----+----+
                 |      |    |    |
                 | Screenshot Video Trace
                 |      |    |    |
                 +------+----+----+
                        |
                     Debugging
```

> **Screenshot shows a moment. Video shows the execution. Trace provides detailed debugging information.**