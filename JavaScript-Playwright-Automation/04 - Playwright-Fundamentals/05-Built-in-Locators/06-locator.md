# Concept 15 — locator()

## 1. What is `locator()`?

`locator()` is a Playwright method used to identify elements on a web page using a selector.

The basic syntax is:

```js
page.locator('selector');
```

In simple words:

> `locator()` tells Playwright: **Find the element that matches this selector.**

Example:

```html
<input id="username">
```

Playwright:

```js
const username = page.locator('#username');
```

Then:

```js
await username.fill('testuser');
```

---

# 2. Why Do We Use `locator()`?

`locator()` is one of the fundamental ways to locate elements in Playwright.

It is useful when:

- A suitable built-in locator is not available
- The application has stable CSS selectors
- We need to work with custom HTML attributes
- We need to locate elements using CSS selectors
- We need more control over element identification

Example:

```js
const username = page.locator('#username');
```

Then:

```js
await username.fill('testuser');
```

---

# 3. Basic Syntax

The basic syntax is:

```js
page.locator('selector');
```

Example:

```js
const username = page.locator('#username');
```

Here:

```text
page
 ↓
locator()
 ↓
#username
 ↓
Locator
```

---

# 4. What is a Selector?

A selector is a pattern used to identify an element in HTML.

For example:

```html
<input id="username">
```

The CSS ID selector is:

```css
#username
```

Therefore:

```js
page.locator('#username');
```

can identify the element.

Another example:

```html
<button class="login-button">
  Login
</button>
```

CSS class selector:

```css
.login-button
```

Playwright:

```js
page.locator('.login-button');
```

---

# 5. Simple Example

HTML:

```html
<input id="username">
```

Playwright:

```js
const username = page.locator('#username');

await username.fill('admin');
```

Flow:

```text
HTML Element
     ↓
id="username"
     ↓
CSS selector
#username
     ↓
page.locator()
     ↓
Locator
     ↓
fill()
```

---

# 6. `locator()` with ID

HTML:

```html
<input id="username">
```

Locator:

```js
const username = page.locator('#username');
```

Action:

```js
await username.fill('testuser');
```

Another example:

```html
<button id="login">Login</button>
```

Locator:

```js
const loginButton = page.locator('#login');
```

Action:

```js
await loginButton.click();
```

---

# 7. `locator()` with Class

HTML:

```html
<button class="login-button">
  Login
</button>
```

Locator:

```js
const loginButton = page.locator('.login-button');
```

Action:

```js
await loginButton.click();
```

Important:

```text
HTML class:
login-button

CSS selector:
.login-button
```

The `.` represents a CSS class selector.

---

# 8. `locator()` with Element Name

A CSS selector can also use an element/tag name.

HTML:

```html
button>Login</button>
```

Locator:

```js
const buttons = page.locator('button');
```

This identifies button elements.

If the page has several buttons:

```text
Login
Cancel
Register
Submit
```

then:

```js
page.locator('button');
```

may match multiple elements.

A more specific locator is generally better.

---

# 9. `locator()` with Attribute Selector

CSS supports attribute selectors.

Example:

```html
<input
  type="email"
  name="email"
>
```

Locator:

```js
const email = page.locator(
  'input[name="email"]'
);
```

Another example:

```html
<button data-testid="login-button">
  Login
</button>
```

Locator:

```js
const loginButton = page.locator(
  '[data-testid="login-button"]'
);
```

However, when using `data-testid`, Playwright also provides:

```js
page.getByTestId('login-button');
```

which is more expressive.

---

# 10. `locator()` with CSS ID

Example:

```html
<input id="email">
```

Locator:

```js
page.locator('#email');
```

Remember:

```text
# = CSS ID selector
```

Example:

```js
page.locator('#username');
page.locator('#password');
page.locator('#email');
```

---

# 11. `locator()` with CSS Class

Example:

```html
button class="submit-button">
  Submit
</button>
```

Locator:

```js
page.locator('.submit-button');
```

Remember:

```text
. = CSS class selector
```

Example:

```js
page.locator('.login-button');
page.locator('.submit-button');
```

---

# 12. `locator()` with Combined CSS Selectors

CSS selectors can be combined.

Example HTML:

```html
<div class="login-form">
  <button class="login-button">
    Login
  </button>
</div>
```

Locator:

```js
page.locator(
  '.login-form .login-button'
);
```

This means:

> Find an element with class `login-button` inside an element with class `login-form`.

This gives us more control over element identification.

---

# 13. `locator()` with Attribute + Element

Example:

```html
<input
  type="text"
  name="username"
>
```

Locator:

```js
page.locator(
  'input[name="username"]'
);
```

Another example:

```html
<button type="submit">
  Login
</button>
```

Locator:

```js
page.locator(
  'button[type="submit"]'
);
```

---

# 14. `locator()` with Text-Based CSS

CSS selectors can sometimes use attributes, but do not confuse CSS selectors with Playwright's text locator.

For example:

```js
page.getByText('Login');
```

is a Playwright text locator.

Whereas:

```js
page.locator('button');
```

is a CSS-based locator.

For text-specific matching, Playwright's built-in:

```js
getByText()
```

is often clearer.

---

# 15. `locator()` with Custom Attributes

Suppose the application contains:

```html
<div data-component="user-profile">
  Profile
</div>
```

We can locate it with:

```js
const profile = page.locator(
  '[data-component="user-profile"]'
);
```

Then:

```js
await expect(profile).toBeVisible();
```

This can be useful when the application provides stable custom attributes.

---

# 16. `locator()` with Actions

Once we create a locator, we can perform actions.

Example:

```js
const username = page.locator('#username');

await username.fill('admin');
```

Click:

```js
const loginButton = page.locator('#login');

await loginButton.click();
```

Check:

```js
const rememberMe = page.locator('#remember');

await rememberMe.check();
```

Hover:

```js
const menu = page.locator('#menu');

await menu.hover();
```

---

# 17. `locator()` with Assertions

Locators can also be used with `expect()`.

Example:

```js
const loginButton = page.locator('#login');

await expect(loginButton).toBeVisible();
```

Another example:

```js
const message = page.locator('#successMessage');

await expect(message).toHaveText(
  'Login successful'
);
```

Value assertion:

```js
const username = page.locator('#username');

await expect(username).toHaveValue('admin');
```

---

# 18. Real-Time QA Example — Login

Suppose the application contains:

```html
<input id="username">

<input id="password" type="password">

<button id="login">
  Login
</button>

<div id="successMessage">
  Login successful
</div>
```

Playwright:

```js
const username = page.locator('#username');

const password = page.locator('#password');

const loginButton = page.locator('#login');

const successMessage = page.locator(
  '#successMessage'
);
```

Actions:

```js
await username.fill('testuser');

await password.fill('Password123');

await loginButton.click();
```

Assertion:

```js
await expect(successMessage).toBeVisible();
```

---

# 19. Complete Login Example

```js
const { test, expect } = require('@playwright/test');

test('Verify login using locator()', async ({ page }) => {

  await page.goto('https://example.com/login');

  const username = page.locator('#username');

  const password = page.locator('#password');

  const loginButton = page.locator('#login');

  const successMessage = page.locator(
    '#successMessage'
  );

  await username.fill('testuser');

  await password.fill('Password123');

  await loginButton.click();

  await expect(successMessage).toBeVisible();
});
```

---

# 20. Line-by-Line Explanation

### Import

```js
const { test, expect } = require('@playwright/test');
```

Imports Playwright's test framework and assertion function.

---

### Create test

```js
test('Verify login using locator()', async ({ page }) => {
```

Creates a login test.

---

### Open page

```js
await page.goto('https://example.com/login');
```

Navigates to the login page.

---

### Username locator

```js
const username = page.locator('#username');
```

Uses the CSS ID selector:

```css
#username
```

to identify the username input.

---

### Password locator

```js
const password = page.locator('#password');
```

Identifies the password field.

---

### Login button

```js
const loginButton = page.locator('#login');
```

Identifies the Login button.

---

### Success message

```js
const successMessage = page.locator(
  '#successMessage'
);
```

Identifies the success message.

---

### Fill username

```js
await username.fill('testuser');
```

Enters the username.

---

### Fill password

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

Verifies that the success message is visible.

---

# 21. `locator()` vs `getByRole()`

Suppose:

```html
<button id="login">
  Login
</button>
```

Using `locator()`:

```js
page.locator('#login');
```

Using `getByRole()`:

```js
page.getByRole('button', {
  name: 'Login'
});
```

Difference:

```text
locator()
    ↓
Selector-based

getByRole()
    ↓
Role + accessible name
```

Both can be valid.

The choice depends on the application's HTML and the locator strategy you want.

---

# 22. `locator()` vs `getByText()`

Example:

```html
<div>Login successful</div>
```

Using text locator:

```js
page.getByText('Login successful');
```

Using CSS:

```js
page.locator('div');
```

The first expresses:

> Find this visible text.

The second expresses:

> Find a `div` element.

If visible text is the important part, `getByText()` is generally more expressive.

---

# 23. `locator()` vs `getByLabel()`

Example:

```html
<label for="username">Username</label>

<input id="username">
```

Using:

```js
page.getByLabel('Username');
```

communicates:

> Find the form control associated with Username.

Using:

```js
page.locator('#username');
```

communicates:

> Find the element whose ID is username.

Both can locate the same input.

---

# 24. `locator()` vs `getByPlaceholder()`

Example:

```html
<input
  placeholder="Enter username"
  id="username"
>
```

Using:

```js
page.getByPlaceholder('Enter username');
```

means:

> Find the input using its placeholder.

Using:

```js
page.locator('#username');
```

means:

> Find the element using its ID.

---

# 25. `locator()` vs `getByTestId()`

Example:

```html
<button
  data-testid="login-button"
>
  Login
</button>
```

Using:

```js
page.getByTestId('login-button');
```

Using:

```js
page.locator(
  '[data-testid="login-button"]'
);
```

Both can identify the same element.

But:

```js
page.getByTestId('login-button');
```

is more directly expressive when the project intentionally uses test IDs.

---

# 26. Locator Reusability

We can store a locator in a variable.

Example:

```js
const loginButton = page.locator('#login');
```

Then reuse it:

```js
await expect(loginButton).toBeVisible();

await loginButton.click();
```

This is better than repeatedly writing:

```js
await expect(
  page.locator('#login')
).toBeVisible();

await page.locator('#login').click();
```

Meaningful variables improve readability.

---

# 27. Good Locator Variable Names

Good:

```js
const usernameInput = page.locator('#username');

const passwordInput = page.locator('#password');

const loginButton = page.locator('#login');

const successMessage = page.locator(
  '#successMessage'
);
```

Avoid:

```js
const x = page.locator('#username');

const a = page.locator('#password');

const b = page.locator('#login');
```

A good variable name should describe what the element represents.

---

# 28. Multiple Matching Elements

A selector can match multiple elements.

Example:

```html
<button>Save</button>
<button>Save</button>
<button>Cancel</button>
```

This locator:

```js
page.locator('button');
```

matches multiple buttons.

If we perform an action that requires a single element:

```js
await page.locator('button').click();
```

the locator may be ambiguous.

The solution is to create a more specific locator.

For example:

```js
page.getByRole('button', {
  name: 'Cancel'
});
```

or use appropriate filtering/narrowing techniques.

---

# 29. Locator Count

We can find how many elements match a locator:

```js
const buttons = page.locator('button');

const count = await buttons.count();

console.log(count);
```

Example result:

```text
4
```

This means four elements match the locator.

This is useful for debugging.

---

# 30. Locator and Auto-Waiting

`locator()` creates a Playwright Locator.

Playwright can automatically wait for an element to become ready before performing an action.

Example:

```js
const loginButton = page.locator('#login');

await loginButton.click();
```

Playwright handles the necessary actionability checks and synchronization.

Similarly:

```js
await expect(loginButton).toBeVisible();
```

uses Playwright's assertion waiting behavior.

Avoid unnecessary fixed waits:

```js
await page.waitForTimeout(5000);
```

Use reliable locators and assertions instead.

---

# 31. CSS Selector Examples

These are useful to recognize before the dedicated CSS locator topic.

## ID

```js
page.locator('#username');
```

## Class

```js
page.locator('.login-button');
```

## Element

```js
page.locator('button');
```

## Attribute

```js
page.locator('[data-testid="login-button"]');
```

## Element + attribute

```js
page.locator('input[name="username"]');
```

## Combined classes

```js
page.locator('.login-form .login-button');
```

The complete CSS/XPath/advanced locator topic will be covered later in the roadmap.

---

# 32. `locator()` with XPath

`locator()` can also be used with XPath expressions.

Example:

```js
page.locator('//button[@id="login"]');
```

This identifies a button whose ID is `login`.

However, CSS and XPath are part of the later:

```text
CSS + XPath + Advanced/Dynamic Locators
```

topic.

At this stage, remember only:

> `locator()` can work with selector expressions, including CSS and XPath.

Do not jump ahead into advanced XPath techniques yet.

---

# 33. Real-Time QA Example — E-Commerce

Suppose an application contains:

```html
<input id="search">

<button class="search-button">
  Search
</button>

<div id="product-name">
  Laptop
</div>
```

Playwright:

```js
const searchBox = page.locator('#search');

const searchButton = page.locator(
  '.search-button'
);

const productName = page.locator(
  '#product-name'
);
```

Actions:

```js
await searchBox.fill('Laptop');

await searchButton.click();
```

Assertion:

```js
await expect(productName).toHaveText(
  'Laptop'
);
```

Flow:

```text
Search box
    ↓
Fill Laptop
    ↓
Click Search
    ↓
Product appears
    ↓
Verify product text
```

---

# 34. Real-Time QA Example — Banking Application

Suppose a banking application has:

```html
<input id="accountNumber">

<button id="searchAccount">
  Search
</button>

<div id="accountStatus">
  Active
</div>
```

Playwright:

```js
const accountNumber = page.locator(
  '#accountNumber'
);

const searchButton = page.locator(
  '#searchAccount'
);

const accountStatus = page.locator(
  '#accountStatus'
);
```

Actions:

```js
await accountNumber.fill('123456789');

await searchButton.click();
```

Assertion:

```js
await expect(accountStatus).toHaveText(
  'Active'
);
```

This demonstrates a typical enterprise QA flow:

```text
Identify
   ↓
Enter data
   ↓
Perform action
   ↓
Verify result
```

---

# 35. Common Mistakes

## Mistake 1 — Using a very brittle CSS selector

Example:

```js
page.locator(
  'div > div:nth-child(2) > div > button'
);
```

A small DOM structure change can break this locator.

Prefer a stable selector when possible.

---

## Mistake 2 — Using `locator('button')` when many buttons exist

Example:

```js
await page.locator('button').click();
```

If there are multiple buttons, the locator is ambiguous.

Make it more specific.

---

## Mistake 3 — Using unstable classes

Some applications generate classes dynamically.

Example:

```html
<button class="css-1x8abc">
```

If the class changes between builds, the locator can break.

Prefer stable attributes or user-facing locators.

---

## Mistake 4 — Forgetting `await`

Incorrect:

```js
loginButton.click();
```

Correct:

```js
await loginButton.click();
```

---

## Mistake 5 — Using fixed waits instead of reliable locators

Avoid:

```js
await page.waitForTimeout(3000);
await loginButton.click();
```

A better locator plus Playwright's auto-waiting is usually preferable.

---

# 36. Important Locator Principles

Remember:

### Principle 1

> Use stable selectors.

### Principle 2

> Make the locator specific enough to identify the intended element.

### Principle 3

> Prefer readable locator strategies.

### Principle 4

> Avoid unnecessary DOM-structure dependency.

### Principle 5

> Give locators meaningful variable names.

### Principle 6

> Reuse locators when appropriate.

### Principle 7

> Use locators for both actions and assertions.

---

# 37. Locator Family — Complete Built-in Locator Section

You have now completed the main built-in locator concepts:

### 1. `getByRole()`

```js
page.getByRole('button', {
  name: 'Login'
});
```

```text
Element type + accessible name
```

### 2. `getByText()`

```js
page.getByText('Login successful');
```

```text
Visible text
```

### 3. `getByLabel()`

```js
page.getByLabel('Username');
```

```text
Associated form label
```

### 4. `getByPlaceholder()`

```js
page.getByPlaceholder('Enter username');
```

```text
Input placeholder
```

### 5. `getByTestId()`

```js
page.getByTestId('login-button');
```

```text
Dedicated test ID
```

### 6. `locator()`

```js
page.locator('#username');
```

```text
Selector-based identification
```

Memory:

```text
ROLE
  ↓
What type?

TEXT
  ↓
What text?

LABEL
  ↓
What field?

PLACEHOLDER
  ↓
What hint?

TEST ID
  ↓
What test identifier?

LOCATOR
  ↓
What selector?
```

---

# 38. Interview Questions

## Q1. What is `locator()` in Playwright?

`locator()` is a Playwright method used to identify elements using a selector.

Example:

```js
page.locator('#username');
```

---

## Q2. What selectors can be used with `locator()`?

Common examples include:

- CSS selectors
- XPath expressions
- Attribute selectors
- Element selectors
- Combined selectors

Example:

```js
page.locator('#username');
```

```js
page.locator('.login-button');
```

```js
page.locator('input[name="email"]');
```

---

## Q3. What is the difference between `locator()` and `getByRole()`?

`locator()` commonly uses selector expressions.

```js
page.locator('#login');
```

`getByRole()` uses accessible role and name.

```js
page.getByRole('button', {
  name: 'Login'
});
```

---

## Q4. What is the difference between `locator()` and `getByTestId()`?

`locator()` can use selectors.

```js
page.locator('#login');
```

`getByTestId()` uses the configured test ID attribute.

```js
page.getByTestId('login-button');
```

---

## Q5. Can `locator()` be reused?

Yes.

```js
const loginButton = page.locator('#login');

await expect(loginButton).toBeVisible();

await loginButton.click();
```

---

## Q6. Can `locator()` be used with assertions?

Yes.

```js
await expect(
  page.locator('#successMessage')
).toBeVisible();
```

---

## Q7. What happens if a locator matches multiple elements?

For actions that require a single target, the locator can become ambiguous and Playwright's strictness behavior can cause the test to fail.

The locator should be made more specific.

---

## Q8. Why should we avoid brittle locators?

Because small changes in the DOM structure or unstable attributes can cause the locator to break.

---

# 39. Quick Revision

Basic:

```js
page.locator('selector');
```

ID:

```js
page.locator('#username');
```

Class:

```js
page.locator('.login-button');
```

Element:

```js
page.locator('button');
```

Attribute:

```js
page.locator('[data-testid="login-button"]');
```

Combined:

```js
page.locator(
  'input[name="username"]'
);
```

Action:

```js
await page.locator('#login').click();
```

Assertion:

```js
await expect(
  page.locator('#successMessage')
).toBeVisible();
```

Count:

```js
await page.locator('button').count();
```

---

# 40. Easy Memory Trick

Remember:

```text
locator()
    ↓
SELECTOR
    ↓
ELEMENT
```

For example:

```text
#username
    ↓
page.locator()
    ↓
Username input
```

Think:

> "I know the selector, so I use `locator()`."

Examples:

```js
page.locator('#username');
```

```js
page.locator('.login-button');
```

```js
page.locator('input[name="email"]');
```

---

# 41. Final Definition

> **`locator()` is a Playwright method used to create a Locator object from a selector so that an element can be interacted with and verified through actions and assertions.**

Most important syntax:

```js
page.locator('selector');
```

Common examples:

```js
page.locator('#username');
```

```js
page.locator('.login-button');
```

```js
page.locator('input[name="email"]');
```

Remember:

```text
Selector
   ↓
locator()
   ↓
Locator
   ↓
Action / Assertion
```

You have now completed the six main locator concepts under:

```text
04 - Playwright-Fundamentals/
└── 05-Built-in-Locators/
    ├── 01-getByRole.md
    ├── 02-getByText.md
    ├── 03-getByLabel.md
    ├── 04-getByPlaceholder.md
    ├── 05-getByTestId.md
    └── 06-locator.md
```

Next roadmap topic:

```text
Concept 16 — CSS Selectors + XPath + Advanced/Dynamic Locators
```

This belongs to the next locator topic/folder, not the Built-in Locators folder.