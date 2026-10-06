# Concept 4 — Playwright Test Structure

## 1. What is Playwright Test Structure?

Playwright test structure means understanding how a Playwright test file is organized and how the main building blocks work together.

A typical Playwright test contains:

```text
Import
  ↓
test.describe()       → Optional grouping
  ↓
test()                → Test case
  ↓
Fixtures              → page, browser, context, etc.
  ↓
Actions                → goto, click, fill, etc.
  ↓
Assertions             → expect()
```

Example:

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

});
```

---

## 2. Main Parts of a Playwright Test

A Playwright test commonly contains these parts:

```text
1. Import
      ↓
2. Test Group
      ↓
3. Test Case
      ↓
4. Fixture
      ↓
5. Actions
      ↓
6. Assertions
```

Not every test must contain every part.

For example, `test.describe()` is optional.

---

## 3. Import Statement

The first step is importing Playwright Test functionality.

```js
const { test, expect } = require('@playwright/test');
```

Here:

```text
test
 ↓
Used to create test cases

expect
 ↓
Used to perform assertions
```

Without importing the required functions, we cannot directly use them in the test file.

---

## 4. Test Group

We can use `test.describe()` to group related tests.

Example:

```js
test.describe('Login Tests', () => {

});
```

The group name is:

```text
Login Tests
```

It helps organize tests based on features or modules.

Remember:

```text
test.describe() → Group
test()          → Individual test
```

---

## 5. Test Case

The actual test case is created using `test()`.

Example:

```js
test('Verify successful login', async ({ page }) => {

});
```

Here:

```text
test()
 ↓
Verify successful login
 ↓
Test steps
```

The test name should clearly explain what the test verifies.

---

## 6. Fixture

A fixture provides the test with the required objects or setup.

One of the most commonly used Playwright fixtures is:

```js
page
```

Example:

```js
test('Verify Login page', async ({ page }) => {

  await page.goto('https://example.com/login');

});
```

Here:

```js
({ page })
```

gets the Playwright `page` fixture.

The `page` represents a browser page/tab that we can interact with.

---

## 7. Actions

Actions are operations performed on the application.

Common examples:

```js
await page.goto(url);

await page.locator('#username').fill('testuser');

await page.locator('#password').fill('password123');

await page.locator('#login').click();
```

These are actions because they interact with the application.

Common actions include:

```text
goto()
click()
fill()
check()
uncheck()
selectOption()
reload()
```

---

## 8. Assertions

Assertions verify the result of the actions.

Example:

```js
await expect(page).toHaveURL(/dashboard/);
```

Another example:

```js
await expect(page.locator('h1')).toHaveText('Dashboard');
```

Remember:

```text
Action     → DO
Assertion  → CHECK
```

---

## 9. Complete Test Example

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

---

## 10. Line-by-Line Explanation

### Line 1

```js
const { test, expect } = require('@playwright/test');
```

Imports:

```text
test
expect
```

from Playwright Test.

---

### Line 2

```js
test('Verify successful login', async ({ page }) => {
```

Creates a test case.

The test name is:

```text
Verify successful login
```

The test receives the:

```text
page
```

fixture.

---

### Line 3

```js
await page.goto('https://example.com/login');
```

Opens the Login page.

This is an action.

---

### Line 4

```js
await page.locator('#username').fill('testuser');
```

Finds the username field and enters:

```text
testuser
```

This is an action.

---

### Line 5

```js
await page.locator('#password').fill('password123');
```

Finds the password field and enters the password.

This is an action.

---

### Line 6

```js
await page.locator('#login').click();
```

Clicks the Login button.

This is an action.

---

### Line 7

```js
await expect(page).toHaveURL(/dashboard/);
```

Verifies that the user has been redirected to the Dashboard.

This is an assertion.

---

### Line 8

```js
await expect(page.locator('h1')).toHaveText('Dashboard');
```

Verifies that the page heading contains:

```text
Dashboard
```

This is another assertion.

---

## 11. Test Structure with `test.describe()`

For a real QA project, we can organize related tests.

```js
const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

  test('Verify valid login', async ({ page }) => {

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

Structure:

```text
Login Tests
│
├── Verify valid login
│      ├── Open login page
│      ├── Enter credentials
│      ├── Click login
│      └── Verify dashboard
│
└── Verify invalid login
       ├── Open login page
       ├── Enter invalid credentials
       ├── Click login
       └── Verify error
```

---

## 12. Why Good Test Structure Is Important

A clean structure makes automation:

- Easier to read
- Easier to debug
- Easier to maintain
- Easier to execute
- Easier to understand
- Easier to scale

This becomes especially important when the project contains hundreds or thousands of automated tests.

---

## 13. Recommended Basic Structure

For a simple Playwright test:

```js
const { test, expect } = require('@playwright/test');

test('Test Name', async ({ page }) => {

  // Navigation

  // Test actions

  // Assertions

});
```

For multiple related tests:

```js
const { test, expect } = require('@playwright/test');

test.describe('Feature Name', () => {

  test('Scenario 1', async ({ page }) => {

  });

  test('Scenario 2', async ({ page }) => {

  });

});
```

---

## 14. Real-Time QA Example

Suppose we are testing an online banking application.

Feature:

```text
Fund Transfer
```

Scenarios:

```text
1. Verify successful fund transfer
2. Verify insufficient balance
3. Verify invalid beneficiary
4. Verify transfer confirmation
```

We can structure the tests like this:

```js
test.describe('Fund Transfer Tests', () => {

  test('Verify successful fund transfer', async ({ page }) => {

    // Actions

    // Assertions

  });

  test('Verify insufficient balance', async ({ page }) => {

    // Actions

    // Assertions

  });

  test('Verify invalid beneficiary', async ({ page }) => {

    // Actions

    // Assertions

  });

  test('Verify transfer confirmation', async ({ page }) => {

    // Actions

    // Assertions

  });

});
```

This gives the automation framework a clear feature-based structure.

---

## 15. Important Difference

Remember these four concepts:

```text
test.describe()
        ↓
GROUP

test()
        ↓
TEST CASE

page
        ↓
PERFORM ACTIONS

expect()
        ↓
VALIDATE RESULT
```

Example:

```js
test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {

    await page.goto(url);              // Action

    await page.locator('#login').click(); // Action

    await expect(page).toHaveURL(/dashboard/); // Assertion

  });

});
```

---

## 16. Common Mistakes

### Mistake 1 — Confusing `test()` and `test.describe()`

Remember:

```text
test()          → Test case
test.describe() → Test group
```

---

### Mistake 2 — Performing actions without assertions

This test performs actions but does not verify the result:

```js
test('Login', async ({ page }) => {

  await page.goto(url);

  await page.locator('#login').click();

});
```

Better:

```js
test('Login', async ({ page }) => {

  await page.goto(url);

  await page.locator('#login').click();

  await expect(page).toHaveURL(/dashboard/);

});
```

---

### Mistake 3 — Using unclear test names

Avoid:

```js
test('Test 1', async ({ page }) => {
});
```

Prefer:

```js
test('Verify user can login with valid credentials', async ({ page }) => {
});
```

---

### Mistake 4 — Putting unrelated scenarios into one test

Avoid creating one huge test for unrelated features.

Instead of:

```text
Login
Search
Cart
Payment
Logout
```

create separate logical tests unless the complete flow is intentionally one end-to-end scenario.

---

## 17. Interview Questions

### Q1. What is the basic structure of a Playwright test?

A Playwright test generally contains an import, test definition, fixtures, browser actions, and assertions.

---

### Q2. What is the role of `test()`?

`test()` defines an individual test case.

---

### Q3. What is the role of `test.describe()`?

`test.describe()` groups related test cases under a common logical feature or module.

---

### Q4. What is the role of `page`?

`page` is a Playwright Test fixture representing a browser page/tab used to interact with the application.

---

### Q5. What is the difference between an action and an assertion?

An action interacts with the application.

An assertion verifies the expected result.

Example:

```js
await page.click('#login');                // Action

await expect(page).toHaveURL(/dashboard/); // Assertion
```

---

### Q6. Can one test contain multiple actions and assertions?

Yes.

Example:

```js
await page.goto(url);

await page.locator('#username').fill('testuser');

await page.locator('#login').click();

await expect(page).toHaveURL(/dashboard/);

await expect(page.locator('h1')).toHaveText('Dashboard');
```

---

## 18. Quick Revision

```text
Playwright Test Structure
        ↓
Import
        ↓
test.describe() [Optional]
        ↓
test()
        ↓
Fixtures
        ↓
Actions
        ↓
Assertions
```

Remember:

```text
describe() → GROUP
test()     → CREATE TEST
page       → INTERACT
expect()   → VERIFY
```

---

## 19. Easy Memory Trick

Use this sentence:

> **Group → Test → Act → Check**

```text
Group  → test.describe()
Test   → test()
Act    → page
Check  → expect()
```

This is an easy way to remember the basic Playwright test structure.

---

## 20. Final Definition

> Playwright test structure is the organized way of defining and executing automated tests using `test.describe()` for grouping, `test()` for individual test cases, fixtures such as `page` for browser interaction, actions for performing operations, and `expect()` for validating expected results.

---

## 21. Concept Status

Concept: Playwright Test Structure

Status: COMPLETED

Next Concept:

Playwright Test Runner — how Playwright executes and manages tests.