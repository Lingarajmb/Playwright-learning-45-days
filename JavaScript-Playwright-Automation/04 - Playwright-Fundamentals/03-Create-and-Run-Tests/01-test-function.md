

# Concept 1 — `test()` Function in Playwright

## 1. What is `test()`?

`test()` is a function provided by Playwright Test that is used to define an individual test case.

It tells Playwright:

> "This is one test that I want to execute."

Example:

```js
const { test } = require('@playwright/test');

test('Verify Login page', async ({ page }) => {

  await page.goto('https://example.com/login');

});
```

Here:

```js
test()
```

defines the test case.

---

## 2. Why do we use `test()`?

We use `test()` to:

- Create individual test cases
- Give a meaningful name to each test
- Define the test steps
- Perform browser actions
- Validate application behavior
- Execute tests independently
- Generate test reports

Example:

```js
test('Verify successful login', async ({ page }) => {
  // Test steps
});
```

This creates one test case called:

```text
Verify successful login
```

---

## 3. Basic Syntax

```js
test('Test Name', async ({ page }) => {

  // Test steps

});
```

The main parts are:

```text
test()
 ├── Test Name
 └── Test Function
       └── Test Steps
```

---

## 4. Understanding the Syntax

Example:

```js
test('Verify Login page', async ({ page }) => {

  await page.goto('https://example.com/login');

});
```

### `test`

Playwright Test function used to define a test case.

### `'Verify Login page'`

The name/title of the test.

### `async`

Allows asynchronous operations inside the test.

### `({ page })`

Destructures the Playwright `page` fixture.

### `=>`

Arrow function syntax.

### `{ }`

Contains the actual test steps.

---

## 5. What is the Test Name?

The first argument of `test()` is the test name.

Example:

```js
test('Verify Login page', async ({ page }) => {
});
```

The test name is:

```text
Verify Login page
```

Use meaningful test names.

Good:

```js
test('Verify user can login with valid credentials', async ({ page }) => {
});
```

Bad:

```js
test('Test 1', async ({ page }) => {
});
```

A meaningful name makes reports and failures easier to understand.

---

## 6. What is `async`?

Browser automation involves many operations that take time.

For example:

```js
await page.goto(url);
await page.click('#login');
await page.locator('#username').fill('Lingaraj');
```

These operations are asynchronous.

Therefore, the test function is generally written using:

```js
async
```

Example:

```js
test('Login Test', async ({ page }) => {
});
```

---

## 7. What is `await`?

`await` tells JavaScript to wait for an asynchronous operation to complete before moving to the next statement.

Example:

```js
await page.goto('https://example.com');
```

Meaning:

> Wait until the navigation operation is completed before continuing.

Another example:

```js
await page.locator('#login').click();
```

Meaning:

> Wait for the click operation to complete.

---

## 8. What is the `page` Fixture?

`page` is a built-in Playwright Test fixture.

It represents a browser page/tab that the test can interact with.

Example:

```js
test('Verify page', async ({ page }) => {

  await page.goto('https://example.com');

});
```

The `page` object provides methods such as:

```js
page.goto()
page.click()
page.fill()
page.locator()
page.reload()
```

---

## 9. Simple Example

```js
const { test } = require('@playwright/test');

test('Verify Example page', async ({ page }) => {

  await page.goto('https://example.com');

});
```

This test:

1. Creates a test case.
2. Opens the Example website.
3. Uses the Playwright `page` fixture.
4. Navigates to the given URL.

---

## 10. Real-Time QA Example

Suppose we have a login application.

Requirement:

> Verify that the user can open the login page.

Test:

```js
const { test } = require('@playwright/test');

test('Verify Login page opens successfully', async ({ page }) => {

  await page.goto('https://example.com/login');

});
```

The test name clearly explains what is being tested.

---

## 11. Test with Multiple Steps

A test can contain multiple actions.

```js
const { test } = require('@playwright/test');

test('Verify login flow', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.locator('#username').fill('testuser');

  await page.locator('#password').fill('password123');

  await page.locator('#login').click();

});
```

Flow:

```text
Open Login page
      ↓
Enter username
      ↓
Enter password
      ↓
Click Login
```

Assertions can then be added using `expect()`.

---

## 12. `test()` + `expect()`

A real Playwright test normally contains both actions and assertions.

```js
const { test, expect } = require('@playwright/test');

test('Verify successful login', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.locator('#username').fill('testuser');

  await page.locator('#password').fill('password123');

  await page.locator('#login').click();

  await expect(page).toHaveURL(/dashboard/);

});
```

Here:

```text
test()
  ↓
Defines the test

page
  ↓
Performs actions

expect()
  ↓
Validates the result
```

---

## 13. Why Meaningful Test Names Matter

Good:

```js
test('Verify user can login with valid credentials', async ({ page }) => {
});
```

Bad:

```js
test('Login Test', async ({ page }) => {
});
```

Better test names help with:

- Test reports
- Debugging
- Identifying failures
- Test maintenance
- Understanding business scenarios

---

## 14. Common Mistakes

### Mistake 1 — Forgetting `async`

Incorrect:

```js
test('Login Test', ({ page }) => {
});
```

For normal Playwright asynchronous test steps, use:

```js
test('Login Test', async ({ page }) => {
});
```

---

### Mistake 2 — Forgetting `await`

Incorrect:

```js
page.goto('https://example.com');
```

Correct:

```js
await page.goto('https://example.com');
```

---

### Mistake 3 — Poor test name

Avoid:

```js
test('Test1', async ({ page }) => {
});
```

Prefer:

```js
test('Verify user can login with valid credentials', async ({ page }) => {
});
```

---

### Mistake 4 — Mixing too many unrelated scenarios

A test should normally represent one logical scenario.

Avoid creating one test that validates:

```text
Login
Search
Add product
Checkout
Logout
```

unless that complete flow is intentionally the scenario being tested.

---

## 15. Interview Questions

### Q1. What is `test()` in Playwright?

`test()` is a Playwright Test function used to define an individual test case.

### Q2. What are the main parts of a Playwright test?

A typical test contains:

- Test name
- Async callback
- Playwright fixtures
- Test actions
- Assertions

### Q3. Why do we use `async` and `await`?

Playwright browser operations are asynchronous. `async` allows asynchronous code inside the test, while `await` waits for each asynchronous operation to complete.

### Q4. What is the `page` fixture?

`page` is a built-in Playwright Test fixture representing a browser page/tab that can be used to interact with the application.

### Q5. Why should test names be meaningful?

Meaningful test names make reports, failures, debugging, and maintenance easier.

---

## 16. Quick Revision

```text
test()
  ↓
Defines a test case
  ↓
Test Name
  ↓
async callback
  ↓
page fixture
  ↓
Actions
  ↓
Assertions
```

Basic structure:

```js
test('Test Name', async ({ page }) => {

  // Test steps

});
```

---

## 17. Easy Memory Trick

Remember:

```text
test() = CREATE A TEST
```

Think:

> `test()` tells Playwright what test case to execute.

---

## 18. Final Definition

> `test()` is a Playwright Test function used to define an individual test case. It contains a test name and callback function where we perform browser actions and validations using Playwright fixtures such as `page`.

---

## 19. Concept Status

Concept: `test()`

Status: COMPLETED

Practice Score: 50 / 50

Next Concept:

`expect()` — Assertions in Playwright

//////-----Q&A---------///


Q1. What is test() in Playwright?
test() is a function provided by Playwright Test used to define an individual test case. It takes a descriptive title explaining what the test checks, and a callback function containing the actual steps — like navigating pages, performing actions, and making assertions.

Q2. What are the main parts of this syntax?

javascript
test('Verify login page', async ({ page }) => {
});
test(...) — the function used to declare a test
'Verify login page' — the test title/description, explaining what this test verifies
async ({ page }) => {} — the callback function containing the test logic; it's async because it performs asynchronous browser operations, and { page } is a fixture (destructured parameter) automatically provided by Playwright, giving access to a browser tab/page
{} (the function body) — where we write the actual test steps, like navigation, actions, and assertions

Q3. Why do we use async and await in a Playwright test?
Browser actions — like navigating to a page, clicking an element, or waiting for something to load — take time and don't happen instantly, so they return Promises. async marks the function as one that can handle these asynchronous operations and return a Promise itself, while await pauses execution until a Promise resolves, ensuring each step (like page.goto()) actually completes before moving to the next one. Without await, the test might try to perform the next action before the previous one finished, causing unreliable results.

Q4. What is the purpose of giving a meaningful test name?
A meaningful test name makes it immediately clear what the test is checking, without needing to read through the code. This is especially helpful when reviewing test reports or logs — if a test fails, a clear name like 'Verify login page' tells us right away what functionality broke, instead of a vague name that requires digging into the code to understand.

Q5. In this code, what is page?

javascript
test('Verify title', async ({ page }) => {
    await page.goto('https://example.com');
});

page is a fixture automatically provided by Playwright Test, representing a single browser tab. It's what we use to interact with the web application — here, it's used to navigate to https://example.com via page.goto().


-----------

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

