We’ll cover: Screenshots in Playwright.
- What is a screenshot?
- Why screenshots are useful in QA
- page.screenshot()
- Full-page screenshots
- Element screenshots
- Screenshot path and naming
- Screenshots on test failure
- Real-time QA examples
- Line-by-line explanation
- Common mistakes
- Interview questions
- Quick revision + memory trick


# Concept 26 — Screenshots in Playwright

## 1. What is a Screenshot?

A screenshot is a captured image of the web page or a specific element at a particular point during test execution.

In Playwright, screenshots are mainly used to:

- Debug test failures
- Understand the UI state
- Capture evidence
- Verify visual state
- Investigate unexpected behavior
- Keep test execution evidence
- Support CI/CD failure analysis

Basic example:

```js
await page.screenshot({
  path: 'screenshots/home-page.png'
});
```

This captures the current browser page and saves the image to the specified path.

---

# 2. Why are Screenshots Important in QA?

Suppose an automated test fails.

Without a screenshot:

```text
Test Failed
    ↓
Why?
    ↓
Need to investigate manually
```

With a screenshot:

```text
Test Failed
    ↓
Screenshot captured
    ↓
See actual UI state
    ↓
Investigate the problem
```

For example:

```text
Expected:
Login successful

Actual:
Invalid username or password
```

A screenshot can provide visual evidence of what was displayed during the test.

---

# 3. Screenshot Flow

The general flow is:

```text
Playwright Test
      ↓
Browser opens
      ↓
User actions
      ↓
Application state
      ↓
Screenshot
      ↓
PNG/image file
```

Example:

```js
await page.goto('https://example.com');

await page.screenshot({
  path: 'screenshots/home.png'
});
```

---

# 4. Basic Screenshot Syntax

The basic syntax is:

```js
await page.screenshot({
  path: 'screenshots/home.png'
});
```

Important parts:

```text
page.screenshot()
       ↓
Captures screenshot

path
       ↓
Specifies where the screenshot should be saved
```

---

# 5. Simple Example

```js
const { test } = require('@playwright/test');

test('Take Screenshot', async ({ page }) => {

  await page.goto('https://example.com');

  await page.screenshot({
    path: 'screenshots/example.png'
  });

});
```

This test:

1. Opens the website.
2. Captures the current page.
3. Saves the screenshot as:

```text
screenshots/example.png
```

---

# 6. Line-by-Line Explanation

### Import Playwright

```js
const { test } = require('@playwright/test');
```

Imports the Playwright test function.

---

### Create the test

```js
test('Take Screenshot', async ({ page }) => {
```

Creates a test named:

```text
Take Screenshot
```

---

### Open the application

```js
await page.goto('https://example.com');
```

Navigates to the application.

---

### Capture screenshot

```js
await page.screenshot({
  path: 'screenshots/example.png'
});
```

Captures the current page and saves it as:

```text
example.png
```

---

# 7. Where is the Screenshot Saved?

The location is controlled by the `path`.

Example:

```js
await page.screenshot({
  path: 'screenshots/login-page.png'
});
```

The screenshot is saved under:

```text
screenshots/
└── login-page.png
```

The exact location is relative to the working directory from which the test is executed.

---

# 8. Screenshot File Format

Screenshots are commonly saved as:

```text
.png
```

Example:

```js
await page.screenshot({
  path: 'screenshots/login.png'
});
```

Other image formats may be supported depending on Playwright's screenshot options, but PNG is the common choice for test evidence.

---

# 9. Full-Page Screenshot

By default, a screenshot captures the current viewport.

Sometimes a web page is longer than the visible browser area.

Example:

```text
+----------------------+
| Header               |
|                      |
| Login Form           |
|                      |
| Products             |
+----------------------+
       ↓
     viewport

More content exists below
```

To capture the entire scrollable page:

```js
await page.screenshot({
  path: 'screenshots/full-page.png',
  fullPage: true
});
```

---

# 10. What does `fullPage: true` Mean?

```js
fullPage: true
```

tells Playwright to capture the full scrollable page instead of only the currently visible viewport.

Example:

```js
await page.goto('https://example.com');

await page.screenshot({
  path: 'screenshots/full-page.png',
  fullPage: true
});
```

---

# 11. Viewport Screenshot vs Full-Page Screenshot

### Normal screenshot

```js
await page.screenshot({
  path: 'screenshots/page.png'
});
```

Captures the current viewport.

### Full-page screenshot

```js
await page.screenshot({
  path: 'screenshots/full-page.png',
  fullPage: true
});
```

Captures the full scrollable page.

Remember:

```text
Normal
→ Current viewport

fullPage: true
→ Entire scrollable page
```

---

# 12. Element Screenshot

We don't always need a screenshot of the complete page.

Sometimes we only need a specific element.

For example:

```text
+-----------------------------+
|                             |
|       Login Form            |
|                             |
|       Username              |
|       Password              |
|       Login                 |
|                             |
+-----------------------------+
```

We can capture only the Login form.

Syntax:

```js
await page.getByRole('form').screenshot({
  path: 'screenshots/login-form.png'
});
```

The exact locator depends on the application's HTML structure.

---

# 13. Element Screenshot Example

```js
const loginForm = page.locator('#login-form');

await loginForm.screenshot({
  path: 'screenshots/login-form.png'
});
```

This captures only the selected element.

---

# 14. Why Use Element Screenshots?

Element screenshots are useful when we want to capture:

- Login form
- Registration form
- Product card
- Error message
- Dashboard widget
- Table
- Button
- Modal
- Specific UI component

Instead of:

```text
Entire page
```

we capture:

```text
Specific component
```

---

# 15. Screenshot After an Action

We can take a screenshot after performing an action.

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();

await page.screenshot({
  path: 'screenshots/after-login.png'
});
```

Flow:

```text
Click Login
     ↓
Application changes
     ↓
Capture screenshot
     ↓
after-login.png
```

---

# 16. Real QA Example — Login

```js
const { test, expect } = require('@playwright/test');

test('Login Screenshot', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('Password123');

  await page.getByRole('button', { name: 'Login' })
    .click();

  await expect(page.getByText('Dashboard'))
    .toBeVisible();

  await page.screenshot({
    path: 'screenshots/login-success.png'
  });

});
```

This captures the application after successful login.

---

# 17. Screenshot Before an Action

We can also capture the UI before performing an action.

Example:

```js
await page.goto('https://example.com/login');

await page.screenshot({
  path: 'screenshots/before-login.png'
});

await page.getByLabel('Username')
  .fill('Lingaraj');
```

This gives us:

```text
Before action
     ↓
Screenshot
     ↓
Perform action
```

---

# 18. Screenshot Before and After

For debugging, we can capture both states.

```js
await page.screenshot({
  path: 'screenshots/before-login.png'
});

await page.getByRole('button', { name: 'Login' })
  .click();

await page.screenshot({
  path: 'screenshots/after-login.png'
});
```

This allows us to compare:

```text
Before Login
     VS
After Login
```

---

# 19. Screenshot with Assertions

Screenshots and assertions can be used together.

Example:

```js
await page.getByRole('button', { name: 'Login' })
  .click();

await expect(page.getByText('Dashboard'))
  .toBeVisible();

await page.screenshot({
  path: 'screenshots/dashboard.png'
});
```

The flow is:

```text
Action
  ↓
Assertion
  ↓
Screenshot
```

---

# 20. Screenshot on Failure

One of the most useful QA scenarios is capturing screenshots when a test fails.

Playwright can be configured to take screenshots automatically.

Example configuration:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure'
  }
});
```

This means:

```text
Test passes
   ↓
No screenshot required

Test fails
   ↓
Screenshot captured
```

---

# 21. Screenshot Configuration Options

Playwright provides screenshot behavior through the `use` configuration.

Common options include:

```text
screenshot: 'off'
screenshot: 'on'
screenshot: 'only-on-failure'
```

### `off`

```js
screenshot: 'off'
```

Screenshots are not automatically captured.

### `on`

```js
screenshot: 'on'
```

Screenshot is captured for tests.

### `only-on-failure`

```js
screenshot: 'only-on-failure'
```

Screenshot is captured when the test fails.

For normal automation projects, `only-on-failure` is often useful for debugging.

---

# 22. Screenshot Configuration Example

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure'
  }
});
```

Now when a test fails, Playwright can capture the screenshot as part of the test artifacts.

---

# 23. Manual Screenshot vs Automatic Screenshot

There are two approaches.

### Manual

You explicitly write:

```js
await page.screenshot({
  path: 'screenshots/login.png'
});
```

Use this when you intentionally want a screenshot at a specific point.

### Automatic

Configure:

```js
use: {
  screenshot: 'only-on-failure'
}
```

Use this when you want Playwright to automatically capture screenshots based on test outcome.

---

# 24. When Should We Take Screenshots?

Good situations include:

### 1. After important business actions

```text
Login
Payment
Order creation
Employee creation
```

### 2. Before/after a critical UI change

```text
Before submitting
After submitting
```

### 3. On failure

```text
Test fails
     ↓
Screenshot
     ↓
Debug
```

### 4. Visual validation

When we need to inspect the visual state of an element or page.

---

# 25. Screenshot and Test Failure Debugging

Suppose this test fails:

```js
await expect(page.getByText('Payment Successful'))
  .toBeVisible();
```

The error says:

```text
Expected element to be visible
But it was not found
```

A failure screenshot may show:

```text
Payment Failed
Insufficient balance
```

Now the QA engineer can quickly understand the actual application state.

---

# 26. Screenshot + Trace

Screenshots can also be part of broader Playwright debugging.

Playwright provides:

```text
Screenshot
Video
Trace
HTML report
```

Conceptually:

```text
Test Failure
     |
     +-- Screenshot
     |
     +-- Trace
     |
     +-- Video
     |
     +-- Error details
```

These artifacts help investigate failures.

---

# 27. Screenshot Naming

Use meaningful screenshot names.

Good:

```text
login-success.png
login-failure.png
checkout-page.png
payment-error.png
employee-created.png
dashboard-after-login.png
```

Avoid unclear names such as:

```text
image1.png
abc.png
test.png
final.png
```

Good naming makes debugging easier.

---

# 28. Screenshot Folder Structure

A project can organize screenshots like:

```text
JavaScript-Playwright-Automation/
│
├── tests/
│
├── screenshots/
│   ├── login-success.png
│   ├── login-failure.png
│   ├── checkout.png
│   └── dashboard.png
│
└── playwright.config.js
```

The actual Playwright project may also generate its own test artifacts depending on configuration.

---

# 29. Full Example — QA Login Test

```js
const { test, expect } = require('@playwright/test');

test('Verify Login', async ({ page }) => {

  await page.goto('https://example.com/login');

  // Screenshot before login
  await page.screenshot({
    path: 'screenshots/before-login.png'
  });

  // Enter username
  await page.getByLabel('Username')
    .fill('Lingaraj');

  // Enter password
  await page.getByLabel('Password')
    .fill('Password123');

  // Click login
  await page.getByRole('button', { name: 'Login' })
    .click();

  // Verify dashboard
  await expect(page.getByText('Dashboard'))
    .toBeVisible();

  // Verify URL
  await expect(page)
    .toHaveURL(/dashboard/);

  // Screenshot after successful login
  await page.screenshot({
    path: 'screenshots/after-login.png'
  });
});
```

---

# 30. Line-by-Line Explanation

### Open application

```js
await page.goto('https://example.com/login');
```

Navigates to the login page.

### Capture initial state

```js
await page.screenshot({
  path: 'screenshots/before-login.png'
});
```

Captures the login page before interaction.

### Enter username

```js
await page.getByLabel('Username')
  .fill('Lingaraj');
```

Enters the username.

### Enter password

```js
await page.getByLabel('Password')
  .fill('Password123');
```

Enters the password.

### Click Login

```js
await page.getByRole('button', { name: 'Login' })
  .click();
```

Submits the login form.

### Verify Dashboard

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Confirms the login was successful.

### Verify URL

```js
await expect(page)
  .toHaveURL(/dashboard/);
```

Confirms navigation to the Dashboard.

### Capture final state

```js
await page.screenshot({
  path: 'screenshots/after-login.png'
});
```

Captures the successful login state.

---

# 31. Element Screenshot Example

Suppose we have a product card:

```html
<div class="product-card">
  <h2>Laptop</h2>
  <p>₹50,000</p>
  <button>Add to Cart</button>
</div>
```

Playwright:

```js
const productCard = page.locator('.product-card');

await productCard.screenshot({
  path: 'screenshots/laptop-card.png'
});
```

Only the product card is captured.

---

# 32. Full-Page Screenshot Example

```js
await page.goto('https://example.com/products');

await page.screenshot({
  path: 'screenshots/all-products.png',
  fullPage: true
});
```

This captures the full scrollable products page.

---

# 33. Real-Time QA Example — Checkout

Imagine a checkout flow:

```text
Cart
 ↓
Address
 ↓
Payment
 ↓
Order Confirmation
```

After successful payment:

```js
await page.getByRole('button', { name: 'Pay Now' })
  .click();

await expect(page.getByText('Payment Successful'))
  .toBeVisible();

await page.screenshot({
  path: 'screenshots/payment-success.png'
});
```

This provides evidence of the successful payment state.

---

# 34. Real-Time QA Example — Error

Suppose payment fails:

```js
await page.getByRole('button', { name: 'Pay Now' })
  .click();

await expect(page.getByText('Payment Successful'))
  .toBeVisible();
```

If the assertion fails, a configured failure screenshot can help show:

```text
Payment Failed
Transaction declined
```

This makes troubleshooting easier.

---

# 35. Common Mistakes

## Mistake 1 — Taking screenshots everywhere

Do not add screenshots after every single action without a reason.

For example:

```js
await page.getByLabel('Username').fill('Lingaraj');

await page.screenshot(...);

await page.getByLabel('Password').fill('Password123');

await page.screenshot(...);

await page.getByRole('button', { name: 'Login' }).click();

await page.screenshot(...);
```

This can create unnecessary artifacts.

Instead, capture important states or configure screenshots on failure.

---

# 36. Mistake 2 — Using unclear filenames

Avoid:

```text
test1.png
image.png
abc.png
```

Prefer:

```text
login-success.png
payment-failure.png
checkout-page.png
```

---

# 37. Mistake 3 — Forgetting `fullPage: true`

If you need the entire scrollable page:

```js
await page.screenshot({
  path: 'screenshots/page.png',
  fullPage: true
});
```

Without `fullPage: true`, the screenshot normally represents the current viewport.

---

# 38. Mistake 4 — Taking page screenshots when only an element is needed

If you only need a specific component:

```js
await page.locator('.product-card').screenshot({
  path: 'screenshots/product-card.png'
});
```

This is cleaner than capturing the entire page.

---

# 39. Mistake 5 — Confusing screenshot capture with visual testing

A screenshot is simply an image captured from the application.

Taking a screenshot does not automatically mean Playwright is comparing it against an expected image.

Concept:

```text
Screenshot
    ↓
Capture current visual state
```

Visual comparison is a separate testing concept.

---

# 40. Screenshot vs Visual Assertion

### Screenshot

```js
await page.screenshot({
  path: 'screenshots/page.png'
});
```

Purpose:

```text
Capture image
```

### Visual comparison

Playwright can also perform screenshot-based comparisons.

Example:

```js
await expect(page)
  .toHaveScreenshot();
```

Purpose:

```text
Compare current screenshot
        ↓
Against expected screenshot
```

This is a different use case from simply saving a screenshot.

---

# 41. Important Screenshot Methods

| Method | Purpose |
|---|---|
| `page.screenshot()` | Capture page/viewport |
| `locator.screenshot()` | Capture specific element |
| `fullPage: true` | Capture full scrollable page |
| `path` | Specify screenshot file path |
| `expect(page).toHaveScreenshot()` | Screenshot-based visual assertion |

---

# 42. Important Configuration

Automatic screenshot capture can be configured:

```js
use: {
  screenshot: 'only-on-failure'
}
```

Possible screenshot settings include:

```text
off
on
only-on-failure
```

---

# 43. Interview Questions

## Q1. How do you take a screenshot in Playwright?

Answer:

I use `page.screenshot()`.

```js
await page.screenshot({
  path: 'screenshots/home.png'
});
```

---

## Q2. How do you capture the full page?

Answer:

I use the `fullPage: true` option.

```js
await page.screenshot({
  path: 'screenshots/full-page.png',
  fullPage: true
});
```

---

## Q3. How do you take a screenshot of a specific element?

Answer:

I use the element locator's `screenshot()` method.

```js
await page.locator('.product-card').screenshot({
  path: 'screenshots/product-card.png'
});
```

---

## Q4. How can screenshots be captured automatically when tests fail?

Answer:

I can configure the Playwright configuration:

```js
use: {
  screenshot: 'only-on-failure'
}
```

---

## Q5. Why are screenshots useful in automation testing?

Answer:

> Screenshots provide visual evidence of the application's state and are useful for debugging failures, investigating unexpected UI behavior, and maintaining test execution evidence.

---

## Q6. What is the difference between `page.screenshot()` and `locator.screenshot()`?

Answer:

> `page.screenshot()` captures the page viewport or full page, while `locator.screenshot()` captures only the specific element represented by the locator.

---

## Q7. Does taking a screenshot automatically perform visual validation?

Answer:

> No. A normal screenshot only captures the current UI state. Visual comparison is a separate process, such as using Playwright's screenshot assertion.

---

## Q8. How do you perform a screenshot assertion?

Answer:

```js
await expect(page)
  .toHaveScreenshot();
```

This is used for screenshot-based visual comparison.

---

# 44. Quick Revision

```text
SCREENSHOT
    |
    +-- page.screenshot()
    |       ↓
    |    Page screenshot
    |
    +-- locator.screenshot()
    |       ↓
    |    Element screenshot
    |
    +-- fullPage: true
    |       ↓
    |    Full scrollable page
    |
    +-- path
    |       ↓
    |    Save location
    |
    +-- only-on-failure
    |       ↓
    |    Automatic failure screenshot
    |
    +-- toHaveScreenshot()
            ↓
         Visual assertion
```

---

# 45. Easy Memory Trick

Remember:

```text
PAGE       → page.screenshot()
ELEMENT    → locator.screenshot()
FULL PAGE  → fullPage: true
SAVE       → path
FAILURE    → only-on-failure
COMPARE    → toHaveScreenshot()
```

Easy sentence:

> **Capture → Save → Verify → Debug**

---

# 46. Final Definition

> **A screenshot in Playwright is a captured image of the current page or a specific UI element used as visual evidence for debugging, validation, and test-result analysis. Playwright supports page screenshots, element screenshots, full-page screenshots, automatic failure screenshots, and screenshot-based visual assertions.**

---

# 47. One-Line Interview Summary

> **In Playwright, I use `page.screenshot()` for page screenshots, `locator.screenshot()` for element screenshots, `fullPage: true` for full-page capture, and `screenshot: 'only-on-failure'` for automatic failure evidence; for visual validation I can use `toHaveScreenshot()`.**

---

# 48. Final Example to Remember

```js
const { test, expect } = require('@playwright/test');

test('Screenshot Example', async ({ page }) => {

  await page.goto('https://example.com/login');

  // Capture initial page
  await page.screenshot({
    path: 'screenshots/login-page.png'
  });

  // Fill form
  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('Password123');

  // Login
  await page.getByRole('button', { name: 'Login' })
    .click();

  // Verify result
  await expect(page.getByText('Dashboard'))
    .toBeVisible();

  await expect(page)
    .toHaveURL(/dashboard/);

  // Capture full page
  await page.screenshot({
    path: 'screenshots/dashboard.png',
    fullPage: true
  });

  // Capture specific element
  await page.getByText('Dashboard').screenshot({
    path: 'screenshots/dashboard-heading.png'
  });
});
```

## Final Mental Model

```text
                    SCREENSHOTS
                         |
          +--------------+--------------+
          |              |              |
        PAGE          ELEMENT        FULL PAGE
          |              |              |
 page.screenshot()  locator.screenshot() fullPage:true
          |
          +----------------------+
                                 |
                         Test Evidence
                                 |
                    +------------+------------+
                    |                         |
                 Debugging              Visual Testing
                    |                         |
             Failure Screenshot       toHaveScreenshot()
```

> **A screenshot shows us what the application actually looked like at a particular point in the test.**