# Concept 2 — `expect()` Function in Playwright

## 1. What is `expect()`?

`expect()` is the assertion function provided by Playwright Test.

It is used to verify whether the actual result of the application matches the expected result.

In simple words:

> `expect()` checks whether something in the application is behaving as expected.

Example:

```js
await expect(page).toHaveTitle(/Login/);
```

If the expected condition is satisfied:

```text
Test PASS
```

If the expected condition is not satisfied:

```text
Test FAIL
```

---

## 2. Why do we use `expect()`?

Performing an action is not enough in automation testing.

For example:

```js
await page.click('#login');
```

This performs the login action.

But we also need to verify whether login was successful.

```js
await expect(page).toHaveURL(/dashboard/);
```

Now we are validating the result.

Flow:

```text
Action
  ↓
Application processes action
  ↓
Expected result
  ↓
expect() validates result
```

---

## 3. What is an Assertion?

An assertion is a validation or check performed during a test.

It compares:

```text
Actual Result
     ↓
Expected Result
```

Example:

```js
await expect(page).toHaveTitle(/Dashboard/);
```

Here:

- Actual result → Current page title
- Expected result → Title should contain `Dashboard`
- `expect()` → Performs the validation

---

## 4. How does `expect()` work?

```text
Test starts
    ↓
Perform action
    ↓
Application changes
    ↓
expect() checks result
    ↓
Condition satisfied?
   ↙       ↘
 YES       NO
  ↓         ↓
PASS      FAIL
```

Playwright assertions can automatically wait and retry for the expected condition.

This helps when UI elements take some time to appear or change.

---

## 5. Basic Syntax

General syntax:

```js
await expect(actual).matcher(expected);
```

Example:

```js
await expect(page).toHaveTitle(/Login/);
```

Here:

- `expect()` → Assertion function
- `page` → Object being validated
- `toHaveTitle()` → Matcher/assertion
- `/Login/` → Expected value
- `await` → Waits for the assertion to complete

---

## 6. Simple Example

```js
const { test, expect } = require('@playwright/test');

test('Verify Login page title', async ({ page }) => {

  await page.goto('https://example.com/login');

  await expect(page).toHaveTitle(/Login/);

});
```

The test:

1. Opens the Login page.
2. Checks the page title.
3. Verifies that the title contains `Login`.
4. Passes if the condition is satisfied.
5. Fails if the condition is not satisfied.

---

## 7. Line-by-Line Explanation

### Line 1

```js
const { test, expect } = require('@playwright/test');
```

Imports Playwright Test functions.

- `test` → Creates a test case.
- `expect` → Performs assertions.

### Line 2

```js
test('Verify Login page title', async ({ page }) => {
```

Creates a Playwright test.

- `test()` → Defines the test case.
- `'Verify Login page title'` → Test name.
- `async` → Allows asynchronous operations.
- `page` → Playwright page fixture.

### Line 3

```js
await page.goto('https://example.com/login');
```

Navigates to the Login page.

### Line 4

```js
await expect(page).toHaveTitle(/Login/);
```

Validates the page title.

Playwright checks whether the title contains:

```text
Login
```

If yes:

```text
Assertion PASSED
```

If no:

```text
Assertion FAILED
```

---

## 8. Commonly Used Assertions

### `toHaveTitle()`

Checks the page title.

```js
await expect(page).toHaveTitle(/Login/);
```

### `toHaveURL()`

Checks the current URL.

```js
await expect(page).toHaveURL(/dashboard/);
```

### `toBeVisible()`

Checks whether an element is visible.

```js
await expect(page.locator('#dashboard')).toBeVisible();
```

### `toBeHidden()`

Checks whether an element is hidden.

```js
await expect(page.locator('#loader')).toBeHidden();
```

### `toBeEnabled()`

Checks whether an element is enabled.

```js
await expect(page.locator('#submit')).toBeEnabled();
```

### `toBeDisabled()`

Checks whether an element is disabled.

```js
await expect(page.locator('#submit')).toBeDisabled();
```

### `toHaveText()`

Checks the text of an element.

```js
await expect(page.locator('h1')).toHaveText('Dashboard');
```

### `toHaveValue()`

Checks the value of an input field.

```js
await expect(page.locator('#username')).toHaveValue('Lingaraj');
```

---

## 9. `expect()` and Auto-Waiting

One important advantage of Playwright assertions is automatic waiting.

Example:

```js
await expect(page.locator('#dashboard')).toBeVisible();
```

If the dashboard takes some time to appear, Playwright waits and checks the condition until the assertion succeeds or the timeout is reached.

This helps reduce flaky tests.

---

## 10. Why do we use `await` with `expect()`?

Playwright assertions are asynchronous.

Therefore, we normally write:

```js
await expect(page.locator('#dashboard')).toBeVisible();
```

`await` tells JavaScript:

> Wait for this asynchronous assertion to complete before continuing.

---

## 11. Positive Assertion

A positive assertion verifies that something should happen or should exist.

Example:

```js
await expect(page.locator('#success-message')).toBeVisible();
```

Meaning:

> The success message should be visible.

---

## 12. Negative Assertion

A negative assertion verifies that a condition should not be true.

Example:

```js
await expect(page.locator('#error-message')).not.toBeVisible();
```

Meaning:

> The error message should not be visible.

Another example:

```js
await expect(page.locator('#submit')).not.toBeDisabled();
```

Meaning:

> The submit button should not be disabled.

---

## 13. Real-Time QA Example

Requirement:

> After successful login, the user should be redirected to the Dashboard.

```js
const { test, expect } = require('@playwright/test');

test('Verify successful login', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.locator('#username').fill('testuser');

  await page.locator('#password').fill('password123');

  await page.locator('#login').click();

  await expect(page).toHaveURL(/dashboard/);

  await expect(page.locator('h1')).toHaveText('Dashboard');

});
```

### Actions

```js
await page.goto(...);
await page.locator('#username').fill(...);
await page.locator('#password').fill(...);
await page.locator('#login').click();
```

These perform actions.

### Assertions

```js
await expect(page).toHaveURL(/dashboard/);

await expect(page.locator('h1')).toHaveText('Dashboard');
```

These validate the expected results.

---

## 14. Action vs Assertion

Very important for interviews.

### Action

An action tells the application to do something.

Examples:

```js
await page.goto(url);

await page.locator('#username').fill('Lingaraj');

await page.locator('#login').click();
```

### Assertion

An assertion checks whether the expected result happened.

Examples:

```js
await expect(page).toHaveURL(/dashboard/);

await expect(page.locator('h1')).toHaveText('Dashboard');

await expect(page.locator('#logout')).toBeVisible();
```

Remember:

```text
Action     → DO something
Assertion  → CHECK something
```

---

## 15. Multiple Assertions

A single test can contain multiple assertions.

Example:

```js
await expect(page).toHaveURL(/dashboard/);

await expect(page.locator('h1')).toHaveText('Dashboard');

await expect(page.locator('#logout')).toBeVisible();
```

This verifies multiple expected conditions.

---

## 16. What Happens When an Assertion Fails?

Example:

```js
await expect(page).toHaveTitle(/Dashboard/);
```

Suppose the actual title is:

```text
Login Page
```

The expected result is not satisfied.

Flow:

```text
Assertion
   ↓
Expected: Dashboard
Actual: Login Page
   ↓
Mismatch
   ↓
Test FAIL
```

Playwright reports the failed assertion so we can investigate the issue.

---

## 17. Common Mistakes

### Mistake 1 — Forgetting `await`

Incorrect:

```js
expect(page).toHaveTitle(/Login/);
```

Correct:

```js
await expect(page).toHaveTitle(/Login/);
```

### Mistake 2 — Using an action instead of an assertion

This:

```js
await page.click('#login');
```

does not verify successful login.

Add an assertion:

```js
await page.click('#login');

await expect(page).toHaveURL(/dashboard/);
```

### Mistake 3 — Using incorrect expected text

Example:

```js
await expect(page.locator('h1')).toHaveText('Home');
```

If the application displays:

```text
Dashboard
```

the assertion fails.

### Mistake 4 — Using unnecessary hard waits

Avoid:

```js
await page.waitForTimeout(5000);
await expect(page.locator('#dashboard')).toBeVisible();
```

Prefer Playwright's assertion auto-waiting:

```js
await expect(page.locator('#dashboard')).toBeVisible();
```

---

## 18. Interview Questions

### Q1. What is `expect()` in Playwright?

`expect()` is the assertion function provided by Playwright Test. It verifies that the actual application result matches the expected result.

### Q2. Why do we use assertions?

Assertions validate application behavior and determine whether the test result is correct.

### Q3. What is the difference between an action and an assertion?

An action performs an operation on the application, while an assertion verifies the expected result.

Example:

```js
await page.click('#login');                 // Action

await expect(page).toHaveURL(/dashboard/);  // Assertion
```

### Q4. Why do we use `await` with Playwright assertions?

Playwright assertions are asynchronous and can wait/retry for the expected condition, so `await` is used to wait for the assertion to complete.

### Q5. Give examples of Playwright assertions.

```js
toHaveTitle()
toHaveURL()
toBeVisible()
toBeHidden()
toBeEnabled()
toBeDisabled()
toHaveText()
toHaveValue()
```

### Q6. What is a negative assertion?

A negative assertion verifies that a condition should not be true.

Example:

```js
await expect(page.locator('#error')).not.toBeVisible();
```

---

## 19. Quick Revision

```text
expect()
   ↓
Assertion function
   ↓
Validates application behavior
   ↓
Actual result vs Expected result
   ↓
PASS / FAIL
```

Important examples:

```js
await expect(page).toHaveTitle(/Login/);

await expect(page).toHaveURL(/dashboard/);

await expect(locator).toBeVisible();

await expect(locator).toHaveText('Dashboard');

await expect(locator).toHaveValue('Lingaraj');
```

---

## 20. Easy Memory Trick

Remember:

```text
ACTION = DO
ASSERTION = CHECK
```

Example:

```js
await page.click('#login');                 // DO

await expect(page).toHaveURL(/dashboard/);  // CHECK
```

Think:

> `page` performs the action, `expect()` checks the result.

---

## 21. Final Definition

> `expect()` is Playwright Test's assertion function used to verify that the actual application result matches the expected result. It provides readable assertions such as `toHaveTitle()`, `toHaveURL()`, `toBeVisible()`, and `toHaveText()`, with automatic waiting and retry behavior for supported assertions.

---

## 22. Concept Status

Concept: `expect()`

Status: COMPLETED

Practice Score: 59.5 / 60

Next Concept:

`test.describe()` — Grouping related Playwright tests


//----------Q&A--------///


Q1. What is expect() in Playwright?
expect() is Playwright's assertion function, used to check whether an actual condition or value matches what we expect. It's what determines whether a test passes or fails — if the expectation is met, the test continues; if not, the test fails with an error.

Q2. Difference between an action and an assertion?
An action performs a step/interaction on the page, like clicking a button or typing text — it changes the state of the application but doesn't verify anything.
Example: await page.getByRole('button', { name: 'Login' }).click();

An assertion checks whether a condition is true, verifying the actual result against the expected outcome.
Example: await expect(page).toHaveTitle('Dashboard');

In short: actions do something, assertions check something.

Q3. Explain this statement:

javascript
await expect(page).toHaveTitle(/Login/);
expect — the assertion function, starting the check
page — the object being checked, here the current page/tab
toHaveTitle() — the matcher method, checking the page's title
/Login/ — a regular expression, meaning the title should contain the word "Login" somewhere in it, rather than matching an exact full string

Q4. Why do we use await with Playwright assertions?
Playwright assertions are asynchronous — behind the scenes, they may need to wait and retry until the condition becomes true (similar to auto-waiting), especially for things like visibility checks. await ensures the test pauses and waits for that assertion to fully complete and resolve before moving on, rather than immediately continuing without confirming the result.

Q5. Difference between:

javascript
await expect(page.locator('#message')).toBeVisible();

This checks that the element with id message is visible on the page — the assertion passes only if the element can actually be seen.

javascript
await expect(page.locator('#message')).not.toBeVisible();

This checks the opposite — that the element is NOT visible (either hidden, removed, or not rendered) — the assertion passes only if the element is absent or hidden from view.

Q6. Why is this a better validation after login?

javascript
await expect(
    page.getByRole('heading', { name: 'Dashboard' })
).toBeVisible();

This is a better validation because it checks something meaningful and specific to a successful login — confirming that the actual "Dashboard" heading is visible on the page, which proves the user was redirected to the right place after logging in. Just clicking a login button or checking a generic page load doesn't confirm the login actually succeeded; verifying a specific, expected element (like the Dashboard heading) gives real proof that the application behaved correctly.