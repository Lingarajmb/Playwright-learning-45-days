# Concept 3 — `test.describe()` in Playwright

## 1. What is `test.describe()`?

`test.describe()` is used to **group related test cases together**.

In a real QA project, we may have many tests related to the same feature.

For example, a Login module may contain:

```text
Login
├── Verify login page
├── Verify valid login
├── Verify invalid login
├── Verify empty username
└── Verify logout
```

Instead of keeping these tests unorganized, we can group them using:

```js
test.describe()
```

Simple definition:

> `test.describe()` is used to organize and group related Playwright tests under one logical feature or module.

---

## 2. Why do we use `test.describe()`?

We use `test.describe()` to:

- Group related tests
- Organize test files
- Improve test readability
- Make test reports easier to understand
- Organize tests feature-wise
- Apply hooks to a group of tests
- Maintain large automation frameworks easily

Example:

```js
test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
  });

  test('Invalid Login', async ({ page }) => {
  });

});
```

Here both tests belong to the:

```text
Login Tests
```

group.

---

## 3. Basic Syntax

```js
test.describe('Group Name', () => {

  test('Test 1', async ({ page }) => {

  });

  test('Test 2', async ({ page }) => {

  });

});
```

Structure:

```text
test.describe()
      ↓
   Group Name
      ↓
 ┌───────────────┐
 │ Test 1        │
 │ Test 2        │
 │ Test 3        │
 └───────────────┘
```

---

## 4. Simple Example

```js
const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

  test('Verify Login page', async ({ page }) => {

    await page.goto('https://example.com/login');

  });

  test('Verify Login button', async ({ page }) => {

    await page.goto('https://example.com/login');

    await expect(page.locator('#login')).toBeVisible();

  });

});
```

Here:

```text
Login Tests
    │
    ├── Verify Login page
    │
    └── Verify Login button
```

Both tests are logically grouped under `Login Tests`.

---

## 5. Line-by-Line Explanation

### Line 1

```js
const { test, expect } = require('@playwright/test');
```

Imports Playwright Test functions.

- `test` → creates tests and test groups.
- `expect` → performs assertions.

---

### Line 2

```js
test.describe('Login Tests', () => {
```

Creates a test group named:

```text
Login Tests
```

All tests inside this block belong to this group.

---

### Line 3

```js
test('Verify Login page', async ({ page }) => {
```

Creates the first test inside the Login Tests group.

---

### Line 4

```js
await page.goto('https://example.com/login');
```

Navigates to the Login page.

---

### Line 5

```js
test('Verify Login button', async ({ page }) => {
```

Creates another test inside the same group.

---

### Line 6

```js
await page.goto('https://example.com/login');
```

Navigates to the Login page.

---

### Line 7

```js
await expect(page.locator('#login')).toBeVisible();
```

Verifies that the Login button is visible.

---

## 6. `test.describe()` vs `test()`

This is very important.

### `test()`

Creates an individual test case.

```js
test('Verify Login', async ({ page }) => {

});
```

Think:

```text
test() = ONE TEST
```

### `test.describe()`

Creates a group of related tests.

```js
test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
  });

  test('Invalid Login', async ({ page }) => {
  });

});
```

Think:

```text
test.describe() = GROUP OF TESTS
```

---

## 7. Real-Time QA Example

Suppose we are testing an e-commerce application.

We have different modules:

```text
E-Commerce Application
│
├── Login
├── Search
├── Product
├── Cart
└── Checkout
```

We can organize our tests like this:

```js
const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

  test('Verify valid login', async ({ page }) => {

    // Login steps

  });

  test('Verify invalid login', async ({ page }) => {

    // Invalid login steps

  });

});

test.describe('Search Tests', () => {

  test('Verify product search', async ({ page }) => {

    // Search steps

  });

  test('Verify empty search', async ({ page }) => {

    // Search validation

  });

});
```

The report can logically represent:

```text
Login Tests
   ├── Verify valid login
   └── Verify invalid login

Search Tests
   ├── Verify product search
   └── Verify empty search
```

This makes the automation suite easier to understand.

---

## 8. Grouping Tests by Feature

One common approach in real QA automation is feature-based grouping.

Example:

```js
test.describe('User Management', () => {

  test('Create user', async ({ page }) => {
  });

  test('Update user', async ({ page }) => {
  });

  test('Delete user', async ({ page }) => {
  });

});
```

Here all user-management scenarios are grouped together.

Another example:

```js
test.describe('Payment Tests', () => {

  test('Verify card payment', async ({ page }) => {
  });

  test('Verify failed payment', async ({ page }) => {
  });

  test('Verify payment confirmation', async ({ page }) => {
  });

});
```

---

## 9. `test.describe()` Can Contain Multiple Tests

A single `test.describe()` block can contain many tests.

```js
test.describe('Login Tests', () => {

  test('Test 1', async ({ page }) => {
  });

  test('Test 2', async ({ page }) => {
  });

  test('Test 3', async ({ page }) => {
  });

  test('Test 4', async ({ page }) => {
  });

});
```

All four tests belong to:

```text
Login Tests
```

---

## 10. `test.describe()` and Hooks

One important use of `test.describe()` is grouping tests together with common setup or cleanup.

For example, if several tests require the same setup, hooks can be placed inside the `describe` block.

Example:

```js
const { test } = require('@playwright/test');

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://example.com/login');

  });

  test('Valid Login', async ({ page }) => {

    // Test steps

  });

  test('Invalid Login', async ({ page }) => {

    // Test steps

  });

});
```

Here the `beforeEach` hook belongs to this test group.

It runs before each test inside the group.

This concept will be covered in more detail later in the **Hooks** topic.

---

## 11. Nested `test.describe()`

`test.describe()` blocks can also be nested when logical grouping is useful.

Example:

```js
test.describe('E-Commerce Application', () => {

  test.describe('Login Tests', () => {

    test('Valid Login', async ({ page }) => {
    });

    test('Invalid Login', async ({ page }) => {
    });

  });

});
```

Structure:

```text
E-Commerce Application
        │
        └── Login Tests
              ├── Valid Login
              └── Invalid Login
```

Use nested groups only when they make the test structure clearer.

Do not create unnecessary levels of grouping.

---

## 12. Important Point — `test.describe()` Does Not Execute a Test

This is an important distinction.

```js
test.describe('Login Tests', () => {
```

does not itself represent a test case.

It is a **container/group** for related tests.

The actual test cases are created using:

```js
test()
```

Example:

```js
test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
  });

});
```

Here:

```text
test.describe() → Group
test()          → Actual test
```

---

## 13. Multiple Test Groups in One File

A single test file can contain multiple groups.

```js
const { test } = require('@playwright/test');

test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
  });

  test('Invalid Login', async ({ page }) => {
  });

});

test.describe('Logout Tests', () => {

  test('Verify Logout', async ({ page }) => {
  });

});
```

Structure:

```text
Login Tests
├── Valid Login
└── Invalid Login

Logout Tests
└── Verify Logout
```

---

## 14. Common Mistakes

### Mistake 1 — Using `describe()` as the test

Incorrect:

```js
test.describe('Login Test', async ({ page }) => {
});
```

`test.describe()` is for grouping tests, not defining an individual test.

Correct:

```js
test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
  });

});
```

---

### Mistake 2 — Putting unrelated tests in one group

Avoid:

```js
test.describe('Login Tests', () => {

  test('Login', async ({ page }) => {
  });

  test('Database Test', async ({ page }) => {
  });

  test('Payment', async ({ page }) => {
  });

});
```

If these belong to different features, create separate groups.

---

### Mistake 3 — Too many nested groups

Avoid unnecessary structures like:

```text
Application
 └── Module
      └── Feature
           └── Scenario
                └── Test
```

Use grouping only when it improves organization.

---

### Mistake 4 — Forgetting the import

Make sure Playwright Test is imported:

```js
const { test } = require('@playwright/test');
```

---

## 15. Interview Questions

### Q1. What is `test.describe()` in Playwright?

`test.describe()` is used to group related Playwright test cases under a common logical name or feature.

---

### Q2. What is the difference between `test()` and `test.describe()`?

`test()` defines an individual test case.

`test.describe()` groups multiple related test cases.

Simple answer:

```text
test()          → Individual test
test.describe() → Group of tests
```

---

### Q3. Can we have multiple `test()` blocks inside `test.describe()`?

Yes.

Example:

```js
test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
  });

  test('Invalid Login', async ({ page }) => {
  });

});
```

---

### Q4. Can we use hooks inside `test.describe()`?

Yes.

Hooks such as `beforeEach` and `afterEach` can be used within a `test.describe()` block to apply common setup or cleanup to tests in that group.

---

### Q5. Can `test.describe()` be nested?

Yes.

Nested `test.describe()` blocks can be used when additional logical grouping is useful.

---

### Q6. Does `test.describe()` itself represent a test case?

No.

`test.describe()` is a grouping/container mechanism.

The actual test case is created using:

```js
test()
```

---

## 16. Quick Revision

```text
test.describe()
       ↓
   Test Group
       ↓
 ┌───────────────┐
 │ test()        │
 │ test()        │
 │ test()        │
 └───────────────┘
```

Remember:

```text
test()          → One test
test.describe() → Group of tests
```

---

## 17. Easy Memory Trick

Remember:

```text
DESCRIBE = GROUP
TEST     = TEST
```

Think of a real QA project:

```text
Login Tests
│
├── Valid Login
├── Invalid Login
└── Empty Credentials
```

`test.describe()` = **Login Tests**

`test()` = **Valid Login / Invalid Login / Empty Credentials**

---

## 18. Final Definition

> `test.describe()` is a Playwright Test grouping function used to organize related test cases under a common logical feature or module. It improves test readability, reporting, maintenance, and can also be used with hooks to apply common setup or cleanup to the tests inside the group.

---

## 19. Concept Status

Concept: `test.describe()`

Status: COMPLETED

Next Concept:

Playwright test structure and combining `test()`, `expect()`, and `test.describe()`.