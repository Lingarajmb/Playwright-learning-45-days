# Concept 9 — Locator Fundamentals

## 1. What is a Locator?

A **Locator** in Playwright is a way to identify and find an element on a web page.

In simple words:

> A locator tells Playwright **which web element you want to work with**.

For example, suppose a login page contains:

```html
<input type="text" id="username">
<button>Login</button>
```

To interact with these elements, Playwright needs to identify them.

Example:

```js
const username = page.locator('#username');
const loginButton = page.getByRole('button', { name: 'Login' });
```

Here:

- `username` identifies the username input.
- `loginButton` identifies the Login button.

Once Playwright identifies the element, we can perform actions or assertions on it.

---

# 2. Why Do We Need Locators?

A web page contains many elements:

- Text boxes
- Buttons
- Links
- Checkboxes
- Radio buttons
- Dropdowns
- Images
- Tables
- Forms
- Menus

Playwright needs a reliable way to identify these elements.

For example:

```text
Login Page
│
├── Username textbox
├── Password textbox
├── Remember Me checkbox
└── Login button
```

If we want to enter the username, Playwright must know:

```text
Which element = Username textbox?
```

The locator provides that information.

Example:

```js
const username = page.locator('#username');
```

Then:

```js
await username.fill('admin');
```

So the basic flow is:

```text
Web Page
   ↓
Find element
   ↓
Locator
   ↓
Perform action
   ↓
Element interaction
```

---

# 3. Locator vs Web Element

This is an important concept.

A **web element** is the actual element present in the browser.

A **locator** is Playwright's way of identifying that element.

For example:

```html
<button id="login">Login</button>
```

The actual button is the web element.

```js
const loginButton = page.locator('#login');
```

`loginButton` is the locator used to find that button.

Think of it like this:

```text
Actual web element
        ↓
     Login Button

Locator
        ↓
"Find the Login Button"
```

### Simple memory trick

> **Element = What is on the page**
>
> **Locator = How Playwright finds it**

---

# 4. Basic Locator Syntax

The basic locator syntax is:

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
'#username'
```

Playwright searches the page using the given selector.

Another example:

```js
const password = page.locator('#password');
```

And:

```js
await password.fill('Password123');
```

---

# 5. The `page.locator()` Method

`page.locator()` creates a Locator object.

Syntax:

```js
page.locator('selector');
```

Example:

```js
const username = page.locator('#username');
```

Now `username` represents the locator for the element matching:

```css
#username
```

We can then use the locator for actions.

Example:

```js
await username.fill('admin');
```

---

# 6. Locator Does Not Immediately Interact With the Element

This is an important point.

When we write:

```js
const username = page.locator('#username');
```

Playwright is not necessarily clicking or filling the element at that exact moment.

We are creating a locator that represents the element.

The actual interaction happens when we perform an action.

Example:

```js
const username = page.locator('#username');

await username.fill('admin');
```

Think:

```text
page.locator()
       ↓
Identify / represent the element
       ↓
fill()
       ↓
Interact with the element
```

---

# 7. Locator Actions

Once we have a locator, we can perform actions on the element.

Common actions include:

```js
click()
fill()
press()
check()
uncheck()
selectOption()
hover()
focus()
```

Examples:

```js
await loginButton.click();

await username.fill('admin');

await password.fill('Password123');

await checkbox.check();

await checkbox.uncheck();

await username.press('Enter');

await menu.hover();
```

The exact actions available depend on the type of element.

---

# 8. Locator Assertions

Locators can also be used with `expect()` for assertions.

Example:

```js
const loginButton = page.getByRole('button', { name: 'Login' });

await expect(loginButton).toBeVisible();
```

Here:

```text
Locator
   ↓
loginButton
   ↓
Assertion
   ↓
toBeVisible()
```

Another example:

```js
const message = page.locator('#successMessage');

await expect(message).toHaveText('Login successful');
```

So locators are used for both:

```text
Actions
+
Assertions
```

---

# 9. Locator with Action vs Locator with Assertion

### Action

An action changes or interacts with the application.

Example:

```js
await username.fill('admin');
```

```js
await loginButton.click();
```

### Assertion

An assertion verifies the application behavior.

Example:

```js
await expect(loginButton).toBeVisible();
```

```js
await expect(message).toHaveText('Login successful');
```

Simple difference:

```text
Action     → Do something
Assertion  → Verify something
```

---

# 10. Simple Locator Example

Consider this HTML:

```html
<input id="username" type="text">
<input id="password" type="password">
<button id="login">Login</button>
```

Playwright test:

```js
const { test, expect } = require('@playwright/test');

test('Login test', async ({ page }) => {

  await page.goto('https://example.com/login');

  const username = page.locator('#username');
  const password = page.locator('#password');
  const loginButton = page.locator('#login');

  await username.fill('admin');
  await password.fill('Password123');

  await loginButton.click();

  await expect(page).toHaveURL(/dashboard/);
});
```

---

# 11. Line-by-Line Explanation

### Import Playwright

```js
const { test, expect } = require('@playwright/test');
```

Imports:

- `test` → used to create a test.
- `expect` → used for assertions.

---

### Create the test

```js
test('Login test', async ({ page }) => {
```

Creates a test named:

```text
Login test
```

The `page` fixture represents the browser page/tab.

---

### Open application

```js
await page.goto('https://example.com/login');
```

Navigates to the login page.

---

### Create username locator

```js
const username = page.locator('#username');
```

Finds the element whose ID is:

```text
username
```

---

### Create password locator

```js
const password = page.locator('#password');
```

Finds the password input.

---

### Create login button locator

```js
const loginButton = page.locator('#login');
```

Finds the Login button.

---

### Enter username

```js
await username.fill('admin');
```

Enters:

```text
admin
```

into the username field.

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

### Verify URL

```js
await expect(page).toHaveURL(/dashboard/);
```

Verifies that the application navigated to a dashboard URL.

---

# 12. Locator Strategy

Locator strategy means:

> How should we choose a locator to identify an element?

A good locator should be:

- Reliable
- Stable
- Readable
- Maintainable
- Less likely to break when the UI changes

Example:

```js
page.locator('#username')
```

can be reliable if the `id` is stable.

But this can be fragile:

```js
page.locator('div:nth-child(3) > div:nth-child(2) > button')
```

because a small UI structure change can break it.

---

# 13. Stable Locator vs Brittle Locator

## Stable Locator

A stable locator continues to work even when the UI structure changes slightly.

Example:

```js
page.getByRole('button', { name: 'Login' })
```

or:

```js
page.locator('#username')
```

if the ID is stable.

---

## Brittle Locator

A brittle locator depends heavily on the exact HTML structure.

Example:

```js
page.locator('div > div > div:nth-child(2) > button')
```

If the developer adds another `<div>`, the locator may stop working.

### Remember:

```text
Stable locator
      ↓
Less maintenance
      ↓
More reliable tests
```

```text
Brittle locator
      ↓
UI change
      ↓
Locator breaks
      ↓
Test maintenance
```

---

# 14. User-Facing Locator Philosophy

Playwright encourages locators that represent how a user sees or interacts with the application.

For example:

```js
page.getByRole('button', { name: 'Login' })
```

is meaningful because a user sees a button named:

```text
Login
```

Another example:

```js
page.getByLabel('Username')
```

represents the field associated with the visible label:

```text
Username
```

These user-facing locator types will be covered individually in the next folder:

```text
05-Built-in-Locators/
```

For now, remember the principle:

> Prefer meaningful and stable locators instead of depending unnecessarily on complicated HTML structure.

---

# 15. Locator Reusability

One advantage of locators is that we can store them in variables and reuse them.

Example:

```js
const loginButton = page.getByRole('button', { name: 'Login' });

await expect(loginButton).toBeVisible();

await loginButton.click();
```

The same locator is used twice.

Another example:

```js
const username = page.locator('#username');

await expect(username).toBeVisible();

await username.fill('admin');
```

This improves readability.

Instead of repeatedly writing:

```js
page.locator('#username')
```

we can write:

```js
username
```

---

# 16. Locator Naming Best Practice

Use meaningful variable names.

Good:

```js
const usernameInput = page.locator('#username');

const passwordInput = page.locator('#password');

const loginButton = page.getByRole('button', { name: 'Login' });
```

Avoid unclear names:

```js
const x = page.locator('#username');

const a = page.locator('#password');

const b = page.locator('#login');
```

Good names make the test easier to understand.

---

# 17. Locator and Auto-Waiting

Locators work closely with Playwright's auto-waiting mechanism.

For example:

```js
await loginButton.click();
```

Playwright does not blindly click immediately.

It performs the required actionability checks and waits for the element to be ready.

Similarly:

```js
await expect(loginButton).toBeVisible();
```

Playwright automatically waits for the expected condition within the configured timeout.

This is one of the reasons Playwright locators are powerful.

---

# 18. Locator and Multiple Matching Elements

A locator can sometimes match more than one element.

Example:

```html
<button>Delete</button>
<button>Delete</button>
<button>Delete</button>
```

This locator:

```js
page.getByRole('button', { name: 'Delete' })
```

may match multiple buttons.

Playwright generally expects an action such as `click()` to resolve to a single intended element.

If multiple elements match, the test can fail because Playwright cannot determine which one should be clicked.

This is related to Playwright's **strictness** behavior.

---

# 19. Strictness — Basic Understanding

For actions, Playwright normally expects the locator to identify one unique element.

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

If exactly one Login button exists:

```text
1 match
↓
Action works
```

If multiple matching Login buttons exist:

```text
2+ matches
↓
Playwright cannot determine the intended element
↓
Strictness error
```

This is useful because it helps detect ambiguous locators instead of silently interacting with the wrong element.

---

# 20. Locator Count

We can check how many elements match a locator using:

```js
await locator.count();
```

Example:

```js
const buttons = page.getByRole('button');

const count = await buttons.count();

console.log(count);
```

If the page contains:

```text
Login
Cancel
Submit
```

the result may be:

```text
3
```

This can be useful when debugging locator problems.

---

# 21. Basic Locator Filtering

At the fundamentals level, you may encounter cases where a locator identifies multiple elements and you need to narrow it down.

For example:

```js
const buttons = page.getByRole('button');
```

If several buttons exist, you may later use locator filtering/chaining techniques to identify the intended element.

Example:

```js
const loginButton = page.getByRole('button').filter({
  hasText: 'Login'
});
```

However, advanced filtering, chaining, `nth()`, `hasText`, `has`, and dynamic locator techniques belong to the later **CSS + XPath + Advanced/Dynamic Locators** topic.

So for now, remember only the basic idea:

> If a locator matches too many elements, we need a more specific locator.

---

# 22. Locator Examples for Common Elements

## Textbox

```js
const username = page.locator('#username');

await username.fill('admin');
```

## Button

```js
const loginButton = page.locator('#login');

await loginButton.click();
```

## Checkbox

```js
const rememberMe = page.locator('#rememberMe');

await rememberMe.check();
```

## Link

```js
const profileLink = page.locator('#profile');

await profileLink.click();
```

## Dropdown

```js
const country = page.locator('#country');

await country.selectOption('India');
```

The exact locator strategy will depend on the application's HTML and the element.

---

# 23. Real-Time QA Example — Login Page

Imagine you are testing an enterprise banking application.

Login page:

```text
--------------------------------
        Banking Portal
--------------------------------

Username: [____________]

Password: [____________]

☐ Remember Me

        [ Login ]

--------------------------------
```

A Playwright test can identify the elements:

```js
const username = page.locator('#username');

const password = page.locator('#password');

const rememberMe = page.locator('#rememberMe');

const loginButton = page.getByRole('button', { name: 'Login' });
```

Then perform actions:

```js
await username.fill('testuser');

await password.fill('Password123');

await rememberMe.check();

await loginButton.click();
```

Then verify:

```js
await expect(page).toHaveURL(/dashboard/);
```

The overall flow is:

```text
Open Login Page
       ↓
Create Locators
       ↓
Username Locator
Password Locator
Remember Me Locator
Login Button Locator
       ↓
Perform Actions
       ↓
Click Login
       ↓
Verify Dashboard
```

---

# 24. Real-Time QA Example — E-Commerce

Suppose you are testing an e-commerce application.

Requirement:

> Search for a product and add it to the cart.

Possible flow:

```js
const searchBox = page.locator('#search');

await searchBox.fill('Laptop');

await searchBox.press('Enter');
```

Then locate the Add to Cart button:

```js
const addToCart = page.getByRole('button', { name: 'Add to Cart' });

await addToCart.click();
```

Then verify the cart:

```js
const cart = page.locator('#cart');

await expect(cart).toBeVisible();
```

This demonstrates the basic Locator → Action → Assertion flow.

---

# 25. Locator Flow in a Test

Remember this pattern:

```text
1. Open page
      ↓
2. Identify element
      ↓
3. Create locator
      ↓
4. Perform action
      ↓
5. Verify result
```

Example:

```js
await page.goto('https://example.com/login');

const username = page.locator('#username');

await username.fill('admin');

await expect(username).toHaveValue('admin');
```

---

# 26. Common Locator Mistakes

## Mistake 1 — Using unstable CSS structure

Avoid unnecessarily complicated selectors:

```js
page.locator('div > div > div:nth-child(2) > button')
```

Prefer a stable and meaningful locator.

---

## Mistake 2 — Using unclear variable names

Bad:

```js
const x = page.locator('#username');
```

Better:

```js
const usernameInput = page.locator('#username');
```

---

## Mistake 3 — Forgetting `await`

Incorrect:

```js
loginButton.click();
```

Correct:

```js
await loginButton.click();
```

Most Playwright actions are asynchronous.

---

## Mistake 4 — Creating an ambiguous locator

Example:

```js
const button = page.getByRole('button');
await button.click();
```

If there are many buttons, Playwright may not know which one you mean.

Better:

```js
const loginButton = page.getByRole('button', { name: 'Login' });

await loginButton.click();
```

---

## Mistake 5 — Using `waitForTimeout()` to solve locator problems

Avoid:

```js
await page.waitForTimeout(5000);
await loginButton.click();
```

A fixed wait does not make a bad locator reliable.

Instead, use a proper locator and let Playwright's auto-waiting handle synchronization.

---

## Mistake 6 — Repeating the same locator unnecessarily

Instead of:

```js
await page.locator('#username').fill('admin');

await expect(page.locator('#username')).toHaveValue('admin');
```

Use:

```js
const username = page.locator('#username');

await username.fill('admin');

await expect(username).toHaveValue('admin');
```

This is easier to read and maintain.

---

# 27. Important Locator Principles

Remember these principles:

### Principle 1

> Choose stable locators.

### Principle 2

> Prefer meaningful locators.

### Principle 3

> Avoid unnecessarily complicated selectors.

### Principle 4

> Give locator variables meaningful names.

### Principle 5

> Make locators specific enough to identify the intended element.

### Principle 6

> Use locators for both actions and assertions.

### Principle 7

> Let Playwright's auto-waiting work with locators.

---

# 28. Locator vs `page`

This is another important distinction.

`page` represents the browser page/tab.

Example:

```js
page.goto()
```

means:

> Navigate the current page.

A locator represents an element on that page.

Example:

```js
page.locator('#username')
```

means:

> Find the username element on this page.

Think:

```text
PAGE
 │
 ├── Username
 ├── Password
 ├── Login
 └── Forgot Password
```

`page` = entire page

`locator` = specific element on the page

---

# 29. Locator vs Selector

A **selector** is the expression used to identify an element.

Example:

```css
#username
```

A **locator** is the Playwright object created using a selector or another locator strategy.

Example:

```js
const username = page.locator('#username');
```

Think:

```text
Selector
   ↓
#username
   ↓
page.locator()
   ↓
Locator
   ↓
Action / Assertion
```

This distinction becomes especially important when learning CSS and XPath later.

---

# 30. Important Commands / Methods

For basic Locator fundamentals, remember:

```js
page.locator()
```

Create a locator.

```js
locator.click()
```

Click an element.

```js
locator.fill()
```

Enter text.

```js
locator.press()
```

Press a keyboard key.

```js
locator.check()
```

Check a checkbox.

```js
locator.uncheck()
```

Uncheck a checkbox.

```js
locator.hover()
```

Hover over an element.

```js
locator.focus()
```

Focus an element.

```js
locator.count()
```

Count matching elements.

And with assertions:

```js
expect(locator).toBeVisible()
```

```js
expect(locator).toBeHidden()
```

```js
expect(locator).toHaveText()
```

```js
expect(locator).toHaveValue()
```

---

# 31. Interview Questions

## Q1. What is a Locator in Playwright?

A locator is a mechanism used by Playwright to identify and interact with elements on a web page.

---

## Q2. Why do we use locators?

We use locators to identify web elements so that Playwright can perform actions and assertions on them.

---

## Q3. What is `page.locator()`?

`page.locator()` creates a Playwright Locator using the specified selector.

Example:

```js
const username = page.locator('#username');
```

---

## Q4. What is the difference between a locator and an element?

An element is the actual object displayed on the web page.

A locator is Playwright's way of identifying that element.

---

## Q5. Can we use a locator for assertions?

Yes.

Example:

```js
await expect(loginButton).toBeVisible();
```

---

## Q6. Can we reuse a locator?

Yes.

Example:

```js
const username = page.locator('#username');

await username.fill('admin');

await expect(username).toHaveValue('admin');
```

---

## Q7. What happens if a locator matches multiple elements?

For actions that require a single target, Playwright's strictness can cause the test to fail because the locator is ambiguous.

The locator should be made more specific.

---

## Q8. What makes a good locator?

A good locator should be:

- Stable
- Specific
- Readable
- Maintainable
- Less dependent on fragile HTML structure

---

## Q9. Why should we avoid brittle locators?

Because small UI or DOM structure changes can break the locator and cause unnecessary test failures.

---

## Q10. How are locators related to auto-waiting?

Playwright uses locators together with its auto-waiting mechanism to wait for elements to become ready for actions and for expected conditions to become true.

---

# 32. Quick Revision

```text
Locator
   ↓
Identifies a web element
   ↓
Used for actions and assertions
```

Basic syntax:

```js
const element = page.locator('selector');
```

Action:

```js
await element.click();
```

Input:

```js
await element.fill('text');
```

Assertion:

```js
await expect(element).toBeVisible();
```

Count:

```js
await element.count();
```

Important principles:

```text
Stable locator
      ↓
Reliable test
      ↓
Less maintenance
```

---

# 33. Easy Memory Trick

Remember:

```text
L → A → V
```

### L = Locator

Find the element.

```js
const loginButton = page.getByRole('button', { name: 'Login' });
```

### A = Action

Interact with the element.

```js
await loginButton.click();
```

### V = Verify

Check the result.

```js
await expect(loginButton).toBeVisible();
```

So:

```text
L → A → V
Locator → Action → Verify
```

This is a very useful pattern for QA automation.

---

# 34. Complete Real-Time Example

```js
const { test, expect } = require('@playwright/test');

test('Verify login functionality', async ({ page }) => {

  await page.goto('https://example.com/login');

  const usernameInput = page.locator('#username');
  const passwordInput = page.locator('#password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await usernameInput.fill('testuser');

  await passwordInput.fill('Password123');

  await expect(loginButton).toBeVisible();

  await loginButton.click();

  await expect(page).toHaveURL(/dashboard/);
});
```

The complete automation flow is:

```text
Page
 ↓
Create Locators
 ↓
Username Locator
Password Locator
Login Button Locator
 ↓
Actions
 ↓
Fill Username
Fill Password
Click Login
 ↓
Verification
 ↓
Dashboard URL
```

---

# 35. Final Definition

> **A Locator in Playwright is a mechanism used to identify a web element so that Playwright can perform actions on it and verify its state or behavior.**

The most important idea to remember is:

```text
Locator = How Playwright finds the element
```

And the common automation pattern is:

```text
Find
 ↓
Act
 ↓
Verify
```

```text
Locator
 ↓
Action
 ↓
Assertion
```

This concept is the foundation for all the upcoming locator topics.

Next, we will learn the **Built-in Locators**, including:

```text
getByRole()
getByText()
getByLabel()
getByPlaceholder()
getByTestId()
locator()
```

These will be covered as separate concepts under:

```text
04 - Playwright-Fundamentals/
└── 05-Built-in-Locators/
```