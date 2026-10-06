# Concept 14 — getByTestId()

## 1. What is `getByTestId()`?

`getByTestId()` is a Playwright built-in locator used to find an element using a dedicated **test ID attribute**.

In simple words:

> `getByTestId()` tells Playwright: **Find the element using its test ID.**

Example HTML:

```html
<button data-testid="login-button">
  Login
</button>
```

Playwright:

```js
const loginButton = page.getByTestId('login-button');
```

Then:

```js
await loginButton.click();
```

The basic idea is:

```text
HTML Element
     ↓
data-testid="login-button"
     ↓
getByTestId()
     ↓
Locator
     ↓
Action / Assertion
```

---

# 2. What is a Test ID?

A test ID is an attribute added to an HTML element specifically to make that element easy to identify in automated tests.

A common example is:

```html
data-testid="login-button"
```

Example:

```html
<button data-testid="login-button">
  Login
</button>
```

The value:

```text
login-button
```

is the test ID.

Playwright can use it:

```js
page.getByTestId('login-button');
```

---

# 3. Why Do We Use `getByTestId()`?

Sometimes an element does not have a good:

- Role
- Label
- Placeholder
- Stable visible text

In such situations, a dedicated test ID can provide a stable way to identify the element.

Example:

```html
<button data-testid="submit-order">
  Submit
</button>
```

Locator:

```js
page.getByTestId('submit-order');
```

This can be especially useful in large applications where developers intentionally provide stable test IDs for automation.

---

# 4. Basic Syntax

The basic syntax is:

```js
page.getByTestId('test-id');
```

Example:

```js
const loginButton = page.getByTestId('login-button');
```

Then:

```js
await loginButton.click();
```

---

# 5. Simple Example

HTML:

```html
<button data-testid="login-button">
  Login
</button>
```

Playwright:

```js
const loginButton = page.getByTestId('login-button');

await loginButton.click();
```

The flow:

```text
data-testid
     ↓
login-button
     ↓
getByTestId()
     ↓
Locator
     ↓
click()
```

---

# 6. How `getByTestId()` Works

Suppose the application contains:

```html
<button data-testid="login-button">
  Login
</button>
```

Playwright:

```js
page.getByTestId('login-button');
```

Playwright uses the configured test ID attribute to identify the element.

By default, Playwright uses:

```html
data-testid
```

for `getByTestId()`.

So:

```js
page.getByTestId('login-button');
```

corresponds to:

```html
data-testid="login-button"
```

---

# 7. Example with a Textbox

HTML:

```html
<input
  type="text"
  data-testid="username-input"
>
```

Playwright:

```js
const username = page.getByTestId('username-input');

await username.fill('testuser');
```

---

# 8. Example with a Button

HTML:

```html
<button data-testid="login-button">
  Login
</button>
```

Playwright:

```js
const loginButton = page.getByTestId('login-button');

await loginButton.click();
```

---

# 9. Example with a Checkbox

HTML:

```html
<input
  type="checkbox"
  data-testid="remember-me"
>
```

Playwright:

```js
const rememberMe = page.getByTestId('remember-me');

await rememberMe.check();
```

Assertion:

```js
await expect(rememberMe).toBeChecked();
```

---

# 10. Example with a Success Message

HTML:

```html
<div data-testid="success-message">
  Payment successful
</div>
```

Playwright:

```js
const successMessage = page.getByTestId(
  'success-message'
);

await expect(successMessage).toBeVisible();
```

This is a common real-world QA use case.

---

# 11. Real-Time QA Example — Login

Imagine a login application:

```text
Username
[________________]

Password
[________________]

[ Login ]

Login successful
```

The development team provides test IDs:

```html
<input
  data-testid="username-input"
>

<input
  data-testid="password-input"
>

<button
  data-testid="login-button"
>
  Login
</button>

<div
  data-testid="success-message"
>
  Login successful
</div>
```

Playwright:

```js
const username = page.getByTestId('username-input');

const password = page.getByTestId('password-input');

const loginButton = page.getByTestId('login-button');

const successMessage = page.getByTestId(
  'success-message'
);
```

Actions:

```js
await username.fill('testuser');

await password.fill('Password123');

await loginButton.click();
```

Verification:

```js
await expect(successMessage).toBeVisible();
```

---

# 12. Complete Login Example

```js
const { test, expect } = require('@playwright/test');

test('Verify login using test IDs', async ({ page }) => {

  await page.goto('https://example.com/login');

  const username = page.getByTestId('username-input');

  const password = page.getByTestId('password-input');

  const loginButton = page.getByTestId('login-button');

  const successMessage = page.getByTestId(
    'success-message'
  );

  await username.fill('testuser');

  await password.fill('Password123');

  await loginButton.click();

  await expect(successMessage).toBeVisible();
});
```

---

# 13. Line-by-Line Explanation

### Import

```js
const { test, expect } = require('@playwright/test');
```

Imports Playwright's test function and assertion library.

---

### Create test

```js
test('Verify login using test IDs', async ({ page }) => {
```

Creates the login test.

---

### Navigate

```js
await page.goto('https://example.com/login');
```

Opens the login page.

---

### Username locator

```js
const username = page.getByTestId('username-input');
```

Finds:

```html
data-testid="username-input"
```

---

### Password locator

```js
const password = page.getByTestId('password-input');
```

Finds:

```html
data-testid="password-input"
```

---

### Login button

```js
const loginButton = page.getByTestId('login-button');
```

Finds:

```html
data-testid="login-button"
```

---

### Success message

```js
const successMessage = page.getByTestId(
  'success-message'
);
```

Finds:

```html
data-testid="success-message"
```

---

### Enter username

```js
await username.fill('testuser');
```

Enters the username.

---

### Enter password

```js
await password.fill('Password123');
```

Enters the password.

---

### Click Login

```js
await loginButton.click();
```

Clicks the Login button.

---

### Verify message

```js
await expect(successMessage).toBeVisible();
```

Verifies that the login success message is displayed.

---

# 14. `getByTestId()` vs `getByRole()`

Consider:

```html
<button data-testid="login-button">
  Login
</button>
```

Using `getByRole()`:

```js
page.getByRole('button', {
  name: 'Login'
});
```

Using `getByTestId()`:

```js
page.getByTestId('login-button');
```

Both can identify the same button.

But they communicate different information.

### `getByRole()`

```js
getByRole('button', { name: 'Login' })
```

Means:

> Find the Login button.

### `getByTestId()`

```js
getByTestId('login-button')
```

Means:

> Find the element whose test ID is `login-button`.

---

# 15. When Should We Use `getByTestId()`?

A practical locator preference is to first consider meaningful user-facing locators such as:

```text
getByRole()
getByLabel()
getByText()
getByPlaceholder()
```

If those are not suitable or stable enough, a dedicated test ID can be a good choice.

Example:

```html
<div data-testid="order-summary">
```

Then:

```js
page.getByTestId('order-summary');
```

This is especially useful for:

- Dynamic elements
- Complex components
- Elements without useful visible text
- Stable application-specific identifiers
- Important components where the development team intentionally provides test IDs

---

# 16. Test ID vs CSS Selector

Suppose:

```html
<button
  id="login"
  data-testid="login-button"
>
  Login
</button>
```

CSS selector:

```js
page.locator('#login');
```

Test ID:

```js
page.getByTestId('login-button');
```

The test ID communicates:

> This identifier is intended for test automation.

A CSS ID may have been created for many other reasons.

---

# 17. Test ID vs HTML ID

These are different attributes.

HTML ID:

```html
id="login"
```

Test ID:

```html
data-testid="login-button"
```

Using the HTML ID:

```js
page.locator('#login');
```

Using the test ID:

```js
page.getByTestId('login-button');
```

Remember:

```text
id
 ↓
HTML identifier

data-testid
 ↓
Test identifier
```

---

# 18. Why Test IDs Can Be Stable

Imagine the HTML structure changes.

Before:

```html
<div class="login-container">
  <button data-testid="login-button">
    Login
  </button>
</div>
```

Later:

```html
<section class="authentication">
  <div class="actions">
    <button data-testid="login-button">
      Login
    </button>
  </div>
</section>
```

The DOM structure changed.

But:

```html
data-testid="login-button"
```

remained the same.

Therefore:

```js
page.getByTestId('login-button');
```

can continue to identify the button.

This is one reason dedicated test IDs can be useful.

---

# 19. Test IDs Are a Team Decision

A test ID is normally added by the development team to the application's HTML.

Example:

```html
<button data-testid="submit-order">
  Submit Order
</button>
```

The automation team can then use:

```js
page.getByTestId('submit-order');
```

This means good test ID usage often requires cooperation between:

```text
Developer
    +
QA / Automation Engineer
    ↓
Stable test identifiers
```

---

# 20. Naming Test IDs

A good test ID should clearly describe the element.

Good examples:

```text
login-button
username-input
password-input
search-input
submit-order
success-message
cart-count
order-summary
```

Poor examples:

```text
button1
element1
test
abc
xyz
temp
```

Good naming improves readability.

Example:

```js
page.getByTestId('submit-order');
```

is much clearer than:

```js
page.getByTestId('button3');
```

---

# 21. Naming Principle

A useful pattern is:

```text
<feature>-<element>
```

Examples:

```text
login-button
search-input
profile-save-button
order-summary
payment-success-message
```

The exact naming convention should be agreed upon by the project team.

The important point is consistency.

---

# 22. Assertions with `getByTestId()`

Example:

```js
const successMessage = page.getByTestId(
  'success-message'
);

await expect(successMessage).toBeVisible();
```

Value assertion:

```js
const username = page.getByTestId(
  'username-input'
);

await expect(username).toHaveValue('testuser');
```

Text assertion:

```js
await expect(
  page.getByTestId('success-message')
).toHaveText('Login successful');
```

---

# 23. Auto-Waiting with `getByTestId()`

`getByTestId()` returns a Playwright Locator.

Therefore, normal Playwright auto-waiting applies when the locator is used for actions and assertions.

Example:

```js
await page.getByTestId('login-button').click();
```

Or:

```js
await expect(
  page.getByTestId('success-message')
).toBeVisible();
```

Avoid unnecessary fixed waits:

```js
await page.waitForTimeout(5000);
```

Use the locator and appropriate assertion instead.

---

# 24. Configuring a Custom Test ID Attribute

By default, Playwright's `getByTestId()` uses:

```html
data-testid
```

A project can configure a different test ID attribute.

For example, the application may use:

```html
data-pw="login-button"
```

The Playwright configuration can define:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    testIdAttribute: 'data-pw'
  }
});
```

Then:

```js
page.getByTestId('login-button');
```

will use:

```html
data-pw="login-button"
```

instead of:

```html
data-testid="login-button"
```

### Important

The important idea is:

```text
Default:
data-testid

Custom project configuration:
testIdAttribute
```

---

# 25. Why Configure a Custom Test ID?

Some projects already have an established attribute convention.

For example:

```html
data-pw="login-button"
```

instead of:

```html
data-testid="login-button"
```

Instead of changing all application code, Playwright can be configured to use the project's existing test ID attribute.

This is useful in enterprise projects with established automation conventions.

---

# 26. `getByTestId()` and Page Object Model

Test IDs are also commonly useful with the Page Object Model.

For example:

```js
class LoginPage {

  constructor(page) {
    this.page = page;

    this.username = page.getByTestId('username-input');

    this.password = page.getByTestId('password-input');

    this.loginButton = page.getByTestId('login-button');
  }

  async login(username, password) {
    await this.username.fill(username);

    await this.password.fill(password);

    await this.loginButton.click();
  }
}
```

This makes the locators reusable.

The Page Object Model will be covered much later in the roadmap.

For now, understand only the relationship:

```text
Test ID
   ↓
Locator
   ↓
Page Object
   ↓
Reusable automation
```

---

# 27. Real-Time QA Example — Order Management

Suppose an enterprise application contains:

```text
Order #12345

Customer: Lingaraj

Status: Completed

[ Download Invoice ]
```

The development team provides:

```html
<div data-testid="order-number">
  Order #12345
</div>

<div data-testid="order-status">
  Completed
</div>

<button data-testid="download-invoice">
  Download Invoice
</button>
```

Playwright:

```js
const orderNumber = page.getByTestId(
  'order-number'
);

const orderStatus = page.getByTestId(
  'order-status'
);

const downloadInvoice = page.getByTestId(
  'download-invoice'
);
```

Assertions:

```js
await expect(orderNumber).toBeVisible();

await expect(orderStatus).toHaveText('Completed');
```

Action:

```js
await downloadInvoice.click();
```

---

# 28. Common Mistakes

## Mistake 1 — Assuming every application has test IDs

Not every application uses:

```html
data-testid
```

If test IDs are not available, use another appropriate locator.

---

## Mistake 2 — Using an unstable test ID

If developers frequently change:

```html
data-testid="button1"
```

to:

```html
data-testid="button2"
```

the automation will break.

Test IDs should be stable.

---

## Mistake 3 — Using meaningless names

Avoid:

```html
data-testid="test1"
```

Prefer:

```html
data-testid="login-button"
```

---

## Mistake 4 — Confusing `id` with `data-testid`

These are different:

```html
id="login"
```

and:

```html
data-testid="login-button"
```

Do not confuse them.

---

## Mistake 5 — Using test IDs for everything automatically

Do not assume:

> Every locator must use `getByTestId()`.

If a clean user-facing locator is available, it may be more expressive.

Example:

```js
page.getByRole('button', {
  name: 'Login'
});
```

may clearly describe the user interaction.

---

# 29. Important Comparison

Suppose:

```html
<button
  id="login"
  data-testid="login-button"
>
  Login
</button>
```

### CSS/ID locator

```js
page.locator('#login');
```

### Test ID locator

```js
page.getByTestId('login-button');
```

### Role locator

```js
page.getByRole('button', {
  name: 'Login'
});
```

All can potentially identify the same button.

The choice should depend on:

```text
Stability
Readability
Application design
Team conventions
User-facing semantics
```

---

# 30. Locator Family Learned So Far

We have now learned four built-in locator concepts.

## 1. `getByRole()`

```js
page.getByRole('button', {
  name: 'Login'
});
```

Think:

```text
What type of element?
```

---

## 2. `getByText()`

```js
page.getByText('Login successful');
```

Think:

```text
What visible text?
```

---

## 3. `getByLabel()`

```js
page.getByLabel('Username');
```

Think:

```text
What is the form field called?
```

---

## 4. `getByPlaceholder()`

```js
page.getByPlaceholder('Enter username');
```

Think:

```text
What hint is inside the input?
```

---

## 5. `getByTestId()`

```js
page.getByTestId('login-button');
```

Think:

```text
What dedicated test identifier was provided?
```

Memory:

```text
ROLE
  ↓
Element type

TEXT
  ↓
Visible text

LABEL
  ↓
Form field label

PLACEHOLDER
  ↓
Input hint

TEST ID
  ↓
Dedicated test identifier
```

---

# 31. Interview Questions

## Q1. What is `getByTestId()`?

`getByTestId()` is a Playwright built-in locator used to identify an element using a dedicated test ID attribute.

---

## Q2. What is the default attribute used by `getByTestId()`?

By default, Playwright uses:

```html
data-testid
```

Example:

```html
<button data-testid="login-button">
  Login
</button>
```

---

## Q3. Give an example of `getByTestId()`.

```js
page.getByTestId('login-button');
```

---

## Q4. When would you use `getByTestId()`?

When a stable dedicated test identifier is available, especially when other user-facing locator strategies are not suitable or stable enough.

---

## Q5. What is the difference between `getByTestId()` and `locator()`?

`getByTestId()` uses a configured test ID attribute.

```js
page.getByTestId('login-button');
```

`locator()` can use selectors such as CSS.

```js
page.locator('#login');
```

---

## Q6. What is the difference between `id` and `data-testid`?

`id` is a general HTML identifier.

```html
id="login"
```

`data-testid` is commonly used as a dedicated test identifier.

```html
data-testid="login-button"
```

---

## Q7. Can we configure a custom test ID attribute?

Yes.

Example:

```js
use: {
  testIdAttribute: 'data-pw'
}
```

Then:

```js
page.getByTestId('login-button');
```

can locate:

```html
data-pw="login-button"
```

---

## Q8. Are test IDs always the best locator?

Not necessarily.

If a stable and meaningful user-facing locator is available, such as:

```js
page.getByRole('button', {
  name: 'Login'
});
```

it may communicate the intended user interaction more clearly.

---

# 32. Quick Revision

Basic:

```js
page.getByTestId('login-button');
```

HTML:

```html
<button data-testid="login-button">
  Login
</button>
```

Action:

```js
await page.getByTestId('login-button').click();
```

Assertion:

```js
await expect(
  page.getByTestId('success-message')
).toBeVisible();
```

Default attribute:

```text
data-testid
```

Custom attribute:

```js
testIdAttribute: 'data-pw'
```

---

# 33. Easy Memory Trick

Remember:

```text
TEST ID
   ↓
Dedicated ID for automation
   ↓
getByTestId()
```

Example:

```html
data-testid="login-button"
```

becomes:

```js
page.getByTestId('login-button');
```

Simple memory:

```text
Role        → What is it?
Text        → What does it say?
Label       → What is the field called?
Placeholder → What hint is inside?
Test ID     → What test identifier was provided?
```

---

# 34. Final Definition

> **`getByTestId()` is a Playwright built-in locator used to identify an element through a dedicated test ID attribute, typically `data-testid`. It is useful when the application provides stable identifiers specifically for reliable automation.**

Most important syntax:

```js
page.getByTestId('login-button');
```

Default HTML:

```html
<button data-testid="login-button">
  Login
</button>
```

Remember:

```text
Test ID
   ↓
getByTestId()
   ↓
Locator
   ↓
Action / Assertion
```

Next concept:

```text
Concept 15 — locator()
```

File:

```text
04 - Playwright-Fundamentals/
└── 05-Built-in-Locators/
    └── 06-locator.md
```
```