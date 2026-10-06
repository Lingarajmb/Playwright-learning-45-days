# Concept 19 — Page Navigation

## 1. What is Page Navigation?

Page navigation means moving the browser page from one URL to another using Playwright.

In Playwright, the most commonly used navigation method is:

```js
page.goto()
```

Example:

```js
await page.goto('https://example.com');
```

This tells Playwright to open the specified URL in the current browser page.

---

## 2. Why Do We Need Page Navigation?

Navigation is the starting point for most web automation tests.

Before testing a feature, we normally need to open the required application page.

For example:

```text
Start Test
    ↓
Open Application
    ↓
Navigate to Login Page
    ↓
Enter Username
    ↓
Enter Password
    ↓
Click Login
    ↓
Verify Dashboard
```

Without navigation, Playwright would not know which application page it needs to test.

---

# 3. Basic `page.goto()`

Syntax:

```js
await page.goto('URL');
```

Example:

```js
await page.goto('https://example.com');
```

Here:

```text
page
 ↓
goto()
 ↓
URL
```

---

# 4. Why Do We Use `await`?

`page.goto()` is an asynchronous operation.

The browser needs time to navigate to the requested page.

Therefore we normally use:

```js
await page.goto('https://example.com');
```

instead of:

```js
page.goto('https://example.com');
```

`await` tells JavaScript:

```text
Wait for this navigation operation
before continuing to the next statement.
```

---

# 5. Basic Navigation Test

```js
const { test, expect } = require('@playwright/test');

test('Verify application navigation', async ({ page }) => {

  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);

});
```

---

# 6. Line-by-Line Explanation

```js
const { test, expect } = require('@playwright/test');
```

Imports Playwright Test functions.

```text
test   → creates the test
expect → performs assertions
```

---

```js
test('Verify application navigation', async ({ page }) => {
```

Creates a test case.

`page` is the Playwright Page fixture.

It represents the browser tab used by the test.

---

```js
await page.goto('https://example.com');
```

Navigates the browser page to the specified URL.

---

```js
await expect(page).toHaveTitle(/Example/);
```

Verifies that the page title contains:

```text
Example
```

---

# 7. Navigation Flow

```text
test()
  ↓
page
  ↓
page.goto(URL)
  ↓
Browser navigates
  ↓
Web application loads
  ↓
Playwright continues
```

---

# 8. Navigate to a Login Page

Real QA example:

```js
test('Open login page', async ({ page }) => {

  await page.goto('https://example.com/login');

});
```

The browser opens:

```text
https://example.com/login
```

---

# 9. Navigation + Locator

Navigation is normally followed by element interaction.

Example:

```js
test('Login page test', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page
    .getByLabel('Username')
    .fill('Lingaraj');

});
```

Flow:

```text
Open Login Page
       ↓
Find Username field
       ↓
Enter Username
```

---

# 10. Navigation + Assertion

We can verify that navigation was successful.

Example:

```js
test('Verify login page', async ({ page }) => {

  await page.goto('https://example.com/login');

  await expect(page).toHaveURL(/login/);

});
```

The assertion verifies that the current URL contains:

```text
login
```

---

# 11. `toHaveURL()`

`toHaveURL()` is a Playwright assertion used to verify the current page URL.

Example:

```js
await expect(page).toHaveURL('https://example.com/login');
```

Another example:

```js
await expect(page).toHaveURL(/login/);
```

---

# 12. Exact URL vs Regular Expression

Exact URL:

```js
await expect(page).toHaveURL('https://example.com/login');
```

Regular expression:

```js
await expect(page).toHaveURL(/login/);
```

The second approach is useful when part of the URL may change.

Example:

```text
https://example.com/login
https://example.com/login?redirect=dashboard
```

Both contain:

```text
login
```

---

# 13. Navigation With `baseURL`

In a Playwright project, we can configure a common application URL using `baseURL`.

Example configuration:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://example.com'
  }
});
```

Then the test can use:

```js
await page.goto('/login');
```

Instead of:

```js
await page.goto('https://example.com/login');
```

---

# 14. Why Is `baseURL` Useful?

Suppose the application URL is:

```text
https://test.example.com
```

and we have many tests.

Without `baseURL`:

```js
await page.goto('https://test.example.com/login');
await page.goto('https://test.example.com/dashboard');
await page.goto('https://test.example.com/products');
```

With `baseURL`:

```js
await page.goto('/login');
await page.goto('/dashboard');
await page.goto('/products');
```

This makes the tests shorter and easier to maintain.

---

# 15. Navigation to Different Pages

Example:

```js
await page.goto('/login');

await page.goto('/dashboard');

await page.goto('/reports');
```

The same `page` can navigate between different URLs.

Flow:

```text
Login
  ↓
Dashboard
  ↓
Reports
```

---

# 16. Browser Back

Playwright provides:

```js
await page.goBack();
```

Example:

```js
await page.goto('/login');

await page.goto('/dashboard');

await page.goBack();
```

Flow:

```text
/login
   ↓
/dashboard
   ↓
goBack()
   ↓
/login
```

---

# 17. Browser Forward

Playwright provides:

```js
await page.goForward();
```

Example:

```js
await page.goto('/login');

await page.goto('/dashboard');

await page.goBack();

await page.goForward();
```

Flow:

```text
/login
   ↓
/dashboard
   ↓
Back
   ↓
/login
   ↓
Forward
   ↓
/dashboard
```

---

# 18. Reload the Page

Playwright provides:

```js
await page.reload();
```

Example:

```js
await page.goto('/dashboard');

await page.reload();
```

This reloads the current page.

---

# 19. Why Is `reload()` Useful in QA?

Reloading can be useful when testing:

- Page refresh behavior
- Data persistence
- Session behavior
- Form state
- Dashboard data
- Application state after refresh

Example:

```js
test('Verify dashboard after refresh', async ({ page }) => {

  await page.goto('/dashboard');

  await page.reload();

  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

});
```

---

# 20. Complete Navigation Methods

Important methods:

```text
page.goto()
page.goBack()
page.goForward()
page.reload()
```

Remember:

```text
goto       → open URL
goBack     → browser back
goForward  → browser forward
reload     → refresh page
```

---

# 21. Real-Time QA Example — Login Flow

```js
const { test, expect } = require('@playwright/test');

test('Verify login navigation', async ({ page }) => {

  await page.goto('/login');

  await page
    .getByLabel('Username')
    .fill('Lingaraj');

  await page
    .getByLabel('Password')
    .fill('Password123');

  await page
    .getByRole('button', { name: 'Login' })
    .click();

  await expect(page).toHaveURL(/dashboard/);

});
```

Flow:

```text
Login URL
   ↓
Username
   ↓
Password
   ↓
Login
   ↓
Dashboard
   ↓
Verify URL
```

---

# 22. Important Point — Navigation Is Not the Same as Clicking

These are different operations.

Navigation:

```js
await page.goto('/login');
```

means:

```text
Directly navigate to a URL.
```

Click:

```js
await page.getByRole('link', { name: 'Login' }).click();
```

means:

```text
Find Login link
      ↓
Click it
      ↓
Application performs navigation
```

In real QA, both approaches are useful.

---

# 23. Direct Navigation vs UI Navigation

### Direct navigation

```js
await page.goto('/login');
```

Useful when:

- Starting a test from a specific page
- Avoiding unnecessary UI steps
- Testing the page directly

### UI navigation

```js
await page
  .getByRole('link', { name: 'Login' })
  .click();
```

Useful when:

- Testing navigation functionality
- Verifying menus
- Testing links
- Testing actual user journeys

---

# 24. Real QA Example — Navigation Menu

Suppose the application has:

```text
Home
Products
Orders
Reports
```

Test:

```js
await page.getByRole('link', { name: 'Orders' }).click();

await expect(page).toHaveURL(/orders/);
```

Flow:

```text
Orders link
    ↓
Click
    ↓
Orders page
    ↓
Verify URL
```

---

# 25. Navigation and Auto-Waiting

Playwright handles navigation and waiting intelligently.

Example:

```js
await page.goto('/dashboard');
```

Playwright waits for the navigation operation to reach the appropriate state before continuing.

You should not normally add:

```js
await page.waitForTimeout(5000);
```

just because the page is loading.

Avoid unnecessary fixed waits.

---

# 26. Common Mistakes

## Mistake 1 — Forgetting `await`

Avoid:

```js
page.goto('/login');
```

Prefer:

```js
await page.goto('/login');
```

---

## Mistake 2 — Using `waitForTimeout()` After Every Navigation

Avoid:

```js
await page.goto('/login');

await page.waitForTimeout(5000);
```

Do not use fixed waits as a default synchronization strategy.

---

## Mistake 3 — Hardcoding URLs Everywhere

Instead of repeatedly writing:

```js
https://test.example.com/login
https://test.example.com/dashboard
https://test.example.com/orders
```

consider using `baseURL`:

```js
await page.goto('/login');
await page.goto('/dashboard');
await page.goto('/orders');
```

---

## Mistake 4 — Not Verifying Navigation

If navigation itself is part of the requirement, verify it.

Example:

```js
await page.getByRole('link', { name: 'Orders' }).click();

await expect(page).toHaveURL(/orders/);
```

---

# 27. Interview Questions

## Q1. How do you navigate to a URL in Playwright?

Using:

```js
await page.goto('https://example.com');
```

---

## Q2. How do you go back to the previous page?

```js
await page.goBack();
```

---

## Q3. How do you move forward in browser history?

```js
await page.goForward();
```

---

## Q4. How do you refresh the current page?

```js
await page.reload();
```

---

## Q5. How do you verify the current URL?

Using:

```js
await expect(page).toHaveURL(/dashboard/);
```

---

## Q6. What is the benefit of `baseURL`?

It allows us to define a common application URL in configuration and use relative paths in tests.

Example:

```js
await page.goto('/login');
```

instead of:

```js
await page.goto('https://example.com/login');
```

---

# 28. Quick Revision

```text
Page Navigation
       ↓
page.goto()
       ↓
Open a URL

page.goBack()
       ↓
Browser Back

page.goForward()
       ↓
Browser Forward

page.reload()
       ↓
Refresh Current Page

expect(page).toHaveURL()
       ↓
Verify Current URL
```

---

# 29. Easy Memory Trick

Remember:

```text
G B F R
```

```text
G → goto()
B → goBack()
F → goForward()
R → reload()
```

Think:

```text
G → Go somewhere
B → Back
F → Forward
R → Refresh
```

---

# 30. Final Definition

**Page navigation in Playwright is the process of opening, changing, refreshing, or moving between web pages using methods such as `page.goto()`, `page.goBack()`, `page.goForward()`, and `page.reload()`. Navigation can be verified using Playwright assertions such as `toHaveURL()`.**

---

# 31. Key Takeaway

For everyday Playwright automation, remember these four methods:

```js
await page.goto('/login');

await page.goBack();

await page.goForward();

await page.reload();
```

And when navigation needs to be verified:

```js
await expect(page).toHaveURL(/dashboard/);
```

The basic QA flow is:

```text
Navigate
   ↓
Interact
   ↓
Application navigates
   ↓
Verify destination
```

Example:

```js
await page.goto('/login');

await page
  .getByRole('button', { name: 'Login' })
  .click();

await expect(page).toHaveURL(/dashboard/);
```