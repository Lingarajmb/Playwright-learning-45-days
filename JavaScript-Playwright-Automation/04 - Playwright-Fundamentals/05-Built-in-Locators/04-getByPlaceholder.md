# Concept 13 — getByPlaceholder()

## 1. What is `getByPlaceholder()`?

`getByPlaceholder()` is a Playwright built-in locator used to find an input element using its **placeholder text**.

In simple words:

> `getByPlaceholder()` tells Playwright: **Find the input field that has this placeholder.**

For example:

```html
<input
  type="text"
  placeholder="Enter username"
>
```

Playwright:

```js
const username = page.getByPlaceholder('Enter username');
```

Then:

```js
await username.fill('testuser');
```

---

# 2. What is a Placeholder?

A placeholder is the temporary hint displayed inside an input field before the user enters a value.

Example:

```text
Username
┌──────────────────────────┐
│ Enter username            │
└──────────────────────────┘
```

Here:

```text
Enter username
```

is the placeholder.

HTML:

```html
<input
  type="text"
  placeholder="Enter username"
>
```

Playwright:

```js
page.getByPlaceholder('Enter username');
```

---

# 3. Why Do We Use `getByPlaceholder()`?

Many modern web applications use placeholders to guide users.

Examples:

```text
Enter username
Enter password
Enter email address
Search products
Enter mobile number
Enter city
Search...
```

When a stable and meaningful placeholder is available, we can use it to identify the input.

Example:

```js
const searchBox = page.getByPlaceholder('Search products');

await searchBox.fill('Laptop');
```

This is readable and easy to understand.

---

# 4. Basic Syntax

The basic syntax is:

```js
page.getByPlaceholder('placeholder text');
```

Example:

```js
const username = page.getByPlaceholder('Enter username');
```

Then:

```js
await username.fill('admin');
```

---

# 5. Simple Example

HTML:

```html
<input
  type="text"
  placeholder="Enter username"
>
```

Playwright:

```js
const username = page.getByPlaceholder('Enter username');

await username.fill('testuser');
```

The flow is:

```text
Input Field
     ↓
Placeholder = "Enter username"
     ↓
getByPlaceholder()
     ↓
Locator
     ↓
fill()
```

---

# 6. `getByPlaceholder()` vs `getByLabel()`

This is very important.

Consider:

```html
<label for="email">Email Address</label>

<input
  id="email"
  type="email"
  placeholder="Enter your email"
>
```

There are two different pieces of user-facing information:

```text
Label:
Email Address

Placeholder:
Enter your email
```

Therefore:

Using the label:

```js
page.getByLabel('Email Address');
```

Using the placeholder:

```js
page.getByPlaceholder('Enter your email');
```

### Memory trick

```text
Label
 ↓
Name of the field

Placeholder
 ↓
Hint inside the field
```

---

# 7. `getByPlaceholder()` with Username

HTML:

```html
<input
  type="text"
  placeholder="Enter username"
>
```

Playwright:

```js
const username = page.getByPlaceholder('Enter username');

await username.fill('testuser');
```

---

# 8. `getByPlaceholder()` with Password

HTML:

```html
<input
  type="password"
  placeholder="Enter password"
>
```

Playwright:

```js
const password = page.getByPlaceholder('Enter password');

await password.fill('Password123');
```

---

# 9. `getByPlaceholder()` with Email

HTML:

```html
<input
  type="email"
  placeholder="Enter email address"
>
```

Playwright:

```js
const email = page.getByPlaceholder('Enter email address');

await email.fill('test@example.com');
```

---

# 10. `getByPlaceholder()` with Search

HTML:

```html
<input
  type="search"
  placeholder="Search products"
>
```

Playwright:

```js
const searchBox = page.getByPlaceholder('Search products');

await searchBox.fill('Laptop');
```

Then:

```js
await searchBox.press('Enter');
```

---

# 11. Real-Time QA Example — Login Form

Suppose a login page looks like:

```text
Username
┌──────────────────────────┐
│ Enter username            │
└──────────────────────────┘

Password
┌──────────────────────────┐
│ Enter password            │
└──────────────────────────┘

             [ Login ]
```

HTML:

```html
<input
  type="text"
  placeholder="Enter username"
>

<input
  type="password"
  placeholder="Enter password"
>

<button>Login</button>
```

Playwright:

```js
const username = page.getByPlaceholder('Enter username');

const password = page.getByPlaceholder('Enter password');

await username.fill('testuser');

await password.fill('Password123');
```

Then:

```js
await page.getByRole('button', {
  name: 'Login'
}).click();
```

---

# 12. Complete Login Example

```js
const { test, expect } = require('@playwright/test');

test('Verify login using placeholders', async ({ page }) => {

  await page.goto('https://example.com/login');

  const username = page.getByPlaceholder('Enter username');

  const password = page.getByPlaceholder('Enter password');

  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  await username.fill('testuser');

  await password.fill('Password123');

  await loginButton.click();

  await expect(page).toHaveURL(/dashboard/);
});
```

---

# 13. Line-by-Line Explanation

### Import

```js
const { test, expect } = require('@playwright/test');
```

Imports the Playwright test framework.

---

### Create test

```js
test('Verify login using placeholders', async ({ page }) => {
```

Creates a test case.

---

### Navigate

```js
await page.goto('https://example.com/login');
```

Opens the login page.

---

### Username locator

```js
const username = page.getByPlaceholder('Enter username');
```

Finds the input with:

```text
placeholder="Enter username"
```

---

### Password locator

```js
const password = page.getByPlaceholder('Enter password');
```

Finds the password input with that placeholder.

---

### Login button

```js
const loginButton = page.getByRole('button', {
  name: 'Login'
});
```

Finds the Login button using its role and accessible name.

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

### Verify result

```js
await expect(page).toHaveURL(/dashboard/);
```

Verifies that the application navigated to the dashboard.

---

# 14. Real-Time QA Example — Search

Suppose an e-commerce application has:

```text
┌────────────────────────────────────┐
│ Search products...                 │
└────────────────────────────────────┘
```

HTML:

```html
<input
  type="search"
  placeholder="Search products..."
>
```

Playwright:

```js
const searchBox = page.getByPlaceholder(
  'Search products...'
);

await searchBox.fill('Laptop');

await searchBox.press('Enter');
```

This is a very common automation scenario.

---

# 15. Real-Time QA Example — Registration

Suppose a registration form contains:

```text
First Name
[ Enter first name ]

Last Name
[ Enter last name ]

Email
[ Enter email address ]

Password
[ Enter password ]
```

Locators:

```js
const firstName = page.getByPlaceholder(
  'Enter first name'
);

const lastName = page.getByPlaceholder(
  'Enter last name'
);

const email = page.getByPlaceholder(
  'Enter email address'
);

const password = page.getByPlaceholder(
  'Enter password'
);
```

Fill the fields:

```js
await firstName.fill('Lingaraj');

await lastName.fill('Test');

await email.fill('test@example.com');

await password.fill('Password123');
```

---

# 16. Exact Placeholder Matching

You can use:

```js
page.getByPlaceholder('Enter username', {
  exact: true
});
```

This is useful when there are similar placeholders.

For example:

```text
Enter username
Enter username or email
```

If you specifically want:

```text
Enter username
```

use:

```js
page.getByPlaceholder('Enter username', {
  exact: true
});
```

---

# 17. Regular Expressions

You can use a regular expression when the placeholder text may vary.

Example:

```js
page.getByPlaceholder(/enter username/i);
```

This can match different capitalization such as:

```text
Enter username
ENTER USERNAME
enter username
```

The `i` means case-insensitive.

Use regular expressions only when they provide a real benefit.

---

# 18. Dynamic Placeholder Example

Suppose an application uses:

```text
Search products
Search products...
Search products here
```

If the exact placeholder is not stable, a regular expression may be useful:

```js
page.getByPlaceholder(/search products/i);
```

However, a locator should still be specific enough to identify the intended field.

Do not make the matching pattern unnecessarily broad.

---

# 19. Assertions with `getByPlaceholder()`

A locator created using `getByPlaceholder()` can be used with assertions.

Example:

```js
const username = page.getByPlaceholder('Enter username');

await expect(username).toBeVisible();
```

You can also verify its value:

```js
await username.fill('testuser');

await expect(username).toHaveValue('testuser');
```

Another example:

```js
const searchBox = page.getByPlaceholder(
  'Search products'
);

await expect(searchBox).toBeVisible();
```

---

# 20. Auto-Waiting with `getByPlaceholder()`

`getByPlaceholder()` returns a Playwright Locator.

Therefore, Playwright's auto-waiting behavior applies when performing actions or assertions.

Example:

```js
await page.getByPlaceholder('Search products').fill('Laptop');
```

Playwright waits for the element to be ready for the action.

For an assertion:

```js
await expect(
  page.getByPlaceholder('Search products')
).toBeVisible();
```

Playwright waits for the expected condition within the configured timeout.

Avoid unnecessary fixed waits such as:

```js
await page.waitForTimeout(3000);
```

when a proper locator and assertion can handle synchronization.

---

# 21. What If There Is No Placeholder?

Consider:

```html
<input id="username">
```

There is no:

```html
placeholder="..."
```

So:

```js
page.getByPlaceholder('Enter username');
```

is not appropriate.

You may use another suitable locator:

```js
page.getByLabel('Username');
```

or:

```js
page.locator('#username');
```

The important rule is:

> Use `getByPlaceholder()` only when the input actually has a suitable placeholder.

---

# 22. Placeholder vs Value

Another important distinction:

Before entering data:

```html
<input
  placeholder="Enter username"
>
```

Placeholder:

```text
Enter username
```

After:

```js
await username.fill('admin');
```

The field value becomes:

```text
admin
```

The placeholder is not the value.

Think:

```text
Placeholder
     ↓
Hint for the user

Value
     ↓
Actual data entered by the user
```

---

# 23. Placeholder vs Label vs Value

Consider:

```html
<label for="email">Email Address</label>

<input
  id="email"
  placeholder="Enter your email"
>
```

There are three different concepts:

```text
Label
 ↓
Email Address

Placeholder
 ↓
Enter your email

Value
 ↓
Actual entered email
```

Playwright:

```js
page.getByLabel('Email Address');
```

```js
page.getByPlaceholder('Enter your email');
```

After entering:

```js
await email.fill('test@example.com');
```

the value is:

```text
test@example.com
```

---

# 24. `getByPlaceholder()` vs `locator()`

Example HTML:

```html
<input
  id="username"
  placeholder="Enter username"
>
```

Using `locator()`:

```js
page.locator('#username');
```

Using `getByPlaceholder()`:

```js
page.getByPlaceholder('Enter username');
```

Difference:

```text
locator()
    ↓
Selector-based

getByPlaceholder()
    ↓
Placeholder-based
```

When the placeholder is stable and meaningful, `getByPlaceholder()` can make the test more readable.

---

# 25. `getByPlaceholder()` vs `getByLabel()`

Example:

```html
<label for="username">Username</label>

<input
  id="username"
  placeholder="Enter username"
>
```

Using label:

```js
page.getByLabel('Username');
```

Using placeholder:

```js
page.getByPlaceholder('Enter username');
```

Which one should you choose?

A practical approach is:

```text
Proper stable label available?
        ↓
getByLabel()

Stable meaningful placeholder available?
        ↓
getByPlaceholder()
```

The locator should represent the most stable and meaningful way to identify the element.

---

# 26. Common Mistakes

## Mistake 1 — Using placeholder text as label text

Given:

```html
<label>Email Address</label>

<input placeholder="Enter your email">
```

These are different:

```js
page.getByLabel('Email Address');
```

and:

```js
page.getByPlaceholder('Enter your email');
```

Do not mix them.

---

## Mistake 2 — Assuming every input has a placeholder

Not every input uses a placeholder.

If there is no placeholder, use another appropriate locator.

---

## Mistake 3 — Depending on unstable placeholder text

If developers frequently change:

```text
Enter username
```

to:

```text
Type username
```

then the locator may break.

Always consider the stability of the placeholder.

---

## Mistake 4 — Using overly broad matching

Avoid unnecessarily broad patterns such as:

```js
page.getByPlaceholder(/user/i);
```

if many fields can contain the word `user`.

Prefer a specific placeholder:

```js
page.getByPlaceholder('Enter username');
```

---

## Mistake 5 — Forgetting `await`

Incorrect:

```js
username.fill('admin');
```

Correct:

```js
await username.fill('admin');
```

---

## Mistake 6 — Using fixed waits

Avoid:

```js
await page.waitForTimeout(5000);
```

just to wait for an input.

Prefer the locator and Playwright's built-in synchronization.

---

# 27. Important Methods

Create locator:

```js
page.getByPlaceholder('Enter username');
```

Fill:

```js
await page.getByPlaceholder('Enter username')
  .fill('admin');
```

Press key:

```js
await page.getByPlaceholder('Search products')
  .press('Enter');
```

Assertion:

```js
await expect(
  page.getByPlaceholder('Enter username')
).toBeVisible();
```

Value assertion:

```js
await expect(
  page.getByPlaceholder('Enter username')
).toHaveValue('admin');
```

---

# 28. Interview Questions

## Q1. What is `getByPlaceholder()`?

`getByPlaceholder()` is a Playwright built-in locator used to identify input elements using their placeholder text.

---

## Q2. Give an example.

HTML:

```html
<input placeholder="Enter username">
```

Playwright:

```js
page.getByPlaceholder('Enter username');
```

---

## Q3. What is a placeholder?

A placeholder is temporary hint text displayed inside an input field before the user enters a value.

---

## Q4. What is the difference between `getByLabel()` and `getByPlaceholder()`?

`getByLabel()` identifies a form control using its associated label.

```js
page.getByLabel('Username');
```

`getByPlaceholder()` identifies an input using its placeholder.

```js
page.getByPlaceholder('Enter username');
```

---

## Q5. What happens if the input has no placeholder?

`getByPlaceholder()` is not appropriate. We should use another suitable locator strategy.

---

## Q6. Can we use `getByPlaceholder()` with assertions?

Yes.

Example:

```js
await expect(
  page.getByPlaceholder('Enter username')
).toBeVisible();
```

---

## Q7. Can we use regular expressions?

Yes.

Example:

```js
page.getByPlaceholder(/enter username/i);
```

---

## Q8. Can we use `getByPlaceholder()` for search fields?

Yes.

Example:

```js
const searchBox = page.getByPlaceholder('Search products');

await searchBox.fill('Laptop');
```

---

# 29. Quick Revision

```text
getByPlaceholder()
        ↓
Find input
        ↓
Using placeholder text
```

Basic:

```js
page.getByPlaceholder('Enter username');
```

Fill:

```js
await page.getByPlaceholder(
  'Enter username'
).fill('admin');
```

Exact:

```js
page.getByPlaceholder('Enter username', {
  exact: true
});
```

Regex:

```js
page.getByPlaceholder(/enter username/i);
```

Assertion:

```js
await expect(
  page.getByPlaceholder('Enter username')
).toBeVisible();
```

---

# 30. Easy Memory Trick

Remember:

```text
PLACEHOLDER
     ↓
Hint inside the input
     ↓
getByPlaceholder()
```

For example:

```text
┌─────────────────────────┐
│ Enter your email        │
└─────────────────────────┘
```

Think:

```text
"Enter your email"
        ↓
getByPlaceholder()
        ↓
Email input
```

Also remember:

```text
Label
 ↓
What is this field?

Placeholder
 ↓
What hint is shown inside?
```

---

# 31. Locator Family Learned So Far

We have now learned three important built-in locators:

### `getByRole()`

```js
page.getByRole('button', {
  name: 'Login'
});
```

Think:

```text
What type of element?
```

### `getByText()`

```js
page.getByText('Login successful');
```

Think:

```text
What text is visible?
```

### `getByLabel()`

```js
page.getByLabel('Username');
```

Think:

```text
What is the form field called?
```

### `getByPlaceholder()`

```js
page.getByPlaceholder('Enter username');
```

Think:

```text
What hint is inside the input?
```

Memory:

```text
ROLE        → Element type
TEXT        → Visible text
LABEL       → Form field label
PLACEHOLDER → Input hint
```

---

# 32. Final Definition

> **`getByPlaceholder()` is a Playwright built-in locator used to find an input element using its placeholder text. It is useful when the input has a stable and meaningful placeholder that can clearly identify the field.**

Most important syntax:

```js
page.getByPlaceholder('Enter username');
```

Remember:

```text
Placeholder
     ↓
getByPlaceholder()
     ↓
Input Locator
     ↓
Action / Assertion
```

Next concept:

```text
Concept 14 — getByTestId()
```

File:

```text
04 - Playwright-Fundamentals/
└── 05-Built-in-Locators/
    └── 05-getByTestId.md
```