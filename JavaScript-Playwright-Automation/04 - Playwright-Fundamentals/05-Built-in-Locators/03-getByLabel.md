# Concept 12 — getByLabel()

## 1. What is `getByLabel()`?

`getByLabel()` is a Playwright built-in locator used to find form controls using their associated **label text**.

In simple words:

> `getByLabel()` tells Playwright: **Find the form field associated with this label.**

For example:

```html
<label for="username">Username</label>
<input id="username">
```

We can locate the input using:

```js
const username = page.getByLabel('Username');
```

Then:

```js
await username.fill('testuser');
```

---

# 2. Why Do We Use `getByLabel()`?

Forms commonly contain labels such as:

```text
Username
Password
Email
Phone Number
Address
Date of Birth
```

Instead of depending on:

```text
id
CSS selector
XPath
DOM structure
```

we can identify the input using the label that the user sees.

For example:

```js
const username = page.getByLabel('Username');
```

This makes the automation code:

- Easy to read
- User-focused
- Easy to maintain
- Suitable for form fields
- Less dependent on complicated DOM structure

---

# 3. Basic Syntax

The basic syntax is:

```js
page.getByLabel('label text');
```

Example:

```js
const username = page.getByLabel('Username');
```

Then:

```js
await username.fill('testuser');
```

Another example:

```js
const password = page.getByLabel('Password');

await password.fill('Password123');
```

---

# 4. Simple Example

HTML:

```html
<label for="username">Username</label>
<input id="username" type="text">
```

Playwright:

```js
const username = page.getByLabel('Username');

await username.fill('admin');
```

The flow is:

```text
Label
  ↓
"Username"
  ↓
getByLabel()
  ↓
Associated form control
  ↓
Fill / Check / Select / Assert
```

---

# 5. How Does `getByLabel()` Work?

Consider:

```html
<label for="username">Username</label>
<input id="username" type="text">
```

The label has:

```html
for="username"
```

The input has:

```html
id="username"
```

These connect the label with the input.

So:

```js
page.getByLabel('Username')
```

can identify the associated input.

Think:

```text
<label>
Username
   │
   │ associated with
   ↓
<input>
```

Playwright uses this label relationship to locate the form control.

---

# 6. Label with `for` and `id`

This is a very common HTML structure.

```html
<label for="email">Email</label>

<input
  id="email"
  type="email"
>
```

Playwright:

```js
const email = page.getByLabel('Email');
```

Then:

```js
await email.fill('test@example.com');
```

The important relationship is:

```text
label for="email"
       ↓
input id="email"
```

---

# 7. Label Wrapping the Input

A label can also contain the input.

Example:

```html
<label>
  Username
  <input type="text">
</label>
```

Playwright can use:

```js
const username = page.getByLabel('Username');
```

Then:

```js
await username.fill('testuser');
```

The label and input are associated because the input is inside the label.

---

# 8. `getByLabel()` with Password Field

HTML:

```html
<label for="password">Password</label>
<input id="password" type="password">
```

Playwright:

```js
const password = page.getByLabel('Password');

await password.fill('Password123');
```

This is very readable.

Anyone reading the test can immediately understand:

```text
Find Password field
↓
Enter password
```

---

# 9. `getByLabel()` with Email Field

HTML:

```html
<label for="email">Email Address</label>
<input id="email" type="email">
```

Playwright:

```js
const email = page.getByLabel('Email Address');

await email.fill('test@example.com');
```

---

# 10. `getByLabel()` with Checkbox

`getByLabel()` is not limited to textboxes.

Example:

```html
<label for="remember">
  Remember me
</label>

<input
  id="remember"
  type="checkbox"
>
```

Locator:

```js
const rememberMe = page.getByLabel('Remember me');
```

Check it:

```js
await rememberMe.check();
```

Verify:

```js
await expect(rememberMe).toBeChecked();
```

---

# 11. `getByLabel()` with Radio Button

Example:

```html
<label for="male">Male</label>
<input id="male" type="radio" name="gender">

<label for="female">Female</label>
<input id="female" type="radio" name="gender">
```

Locators:

```js
const male = page.getByLabel('Male');

const female = page.getByLabel('Female');
```

Select Male:

```js
await male.check();
```

Or Female:

```js
await female.check();
```

---

# 12. `getByLabel()` with Form Controls

Common elements that can be associated with labels include:

```text
Text input
Password input
Email input
Checkbox
Radio button
Select / form controls
```

Example:

```js
const username = page.getByLabel('Username');

const password = page.getByLabel('Password');

const rememberMe = page.getByLabel('Remember me');
```

This gives a clean representation of the form.

---

# 13. Real-Time QA Example — Login Form

Suppose a login page contains:

```text
Username
[________________]

Password
[________________]

☐ Remember me

[ Login ]
```

HTML:

```html
<label for="username">Username</label>
<input id="username" type="text">

<label for="password">Password</label>
<input id="password" type="password">

<label for="remember">
  Remember me
</label>
<input id="remember" type="checkbox">

<button>Login</button>
```

Playwright:

```js
const username = page.getByLabel('Username');

const password = page.getByLabel('Password');

const rememberMe = page.getByLabel('Remember me');

await username.fill('testuser');

await password.fill('Password123');

await rememberMe.check();
```

This is much easier to understand than complicated selectors.

---

# 14. Complete Login Example

```js
const { test, expect } = require('@playwright/test');

test('Verify login form', async ({ page }) => {

  await page.goto('https://example.com/login');

  const username = page.getByLabel('Username');

  const password = page.getByLabel('Password');

  const rememberMe = page.getByLabel('Remember me');

  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  await username.fill('testuser');

  await password.fill('Password123');

  await rememberMe.check();

  await expect(rememberMe).toBeChecked();

  await loginButton.click();
});
```

---

# 15. Line-by-Line Explanation

### Import

```js
const { test, expect } = require('@playwright/test');
```

Imports the Playwright test framework.

---

### Create test

```js
test('Verify login form', async ({ page }) => {
```

Creates a test case.

---

### Open page

```js
await page.goto('https://example.com/login');
```

Navigates to the login page.

---

### Find Username field

```js
const username = page.getByLabel('Username');
```

Finds the form control associated with the `Username` label.

---

### Find Password field

```js
const password = page.getByLabel('Password');
```

Finds the control associated with the `Password` label.

---

### Find Remember Me checkbox

```js
const rememberMe = page.getByLabel('Remember me');
```

Finds the checkbox associated with the label.

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

### Check checkbox

```js
await rememberMe.check();
```

Checks Remember Me.

---

### Verify checkbox

```js
await expect(rememberMe).toBeChecked();
```

Verifies that the checkbox is selected.

---

### Find Login button

```js
const loginButton = page.getByRole('button', {
  name: 'Login'
});
```

Finds the Login button using its role and accessible name.

---

### Click Login

```js
await loginButton.click();
```

Clicks the Login button.

---

# 16. `getByLabel()` vs `getByRole()`

Consider:

```html
<label for="username">Username</label>
<input id="username">
```

Using `getByLabel()`:

```js
page.getByLabel('Username');
```

This means:

> Find the form control associated with the Username label.

Using `getByRole()`:

```js
page.getByRole('textbox', {
  name: 'Username'
});
```

This means:

> Find the textbox whose accessible name is Username.

Both can be valid.

For a form field with a proper label, `getByLabel()` is usually very clear.

---

# 17. `getByLabel()` vs `locator()`

Using `locator()`:

```js
page.locator('#username');
```

Using `getByLabel()`:

```js
page.getByLabel('Username');
```

Difference:

```text
locator()
    ↓
Uses a selector

getByLabel()
    ↓
Uses associated label text
```

Example:

```html
<label for="username">Username</label>
<input id="username">
```

Both can locate the input:

```js
page.locator('#username');
```

and:

```js
page.getByLabel('Username');
```

But the second one communicates the user-facing form relationship more clearly.

---

# 18. Why `getByLabel()` Is Useful in QA

Imagine a large enterprise application.

A developer may change:

```html
<input id="username">
```

to:

```html
<input id="user-name">
```

If your test uses:

```js
page.locator('#username');
```

the test may break.

If the visible label remains:

```text
Username
```

then:

```js
page.getByLabel('Username');
```

can continue to represent the same user-facing field.

The important principle is:

> Prefer stable, meaningful locators that reflect how the user interacts with the application.

---

# 19. Exact Label Matching

You can use:

```js
page.getByLabel('Username', {
  exact: true
});
```

This requests an exact label match.

This can be useful when labels have similar text.

For example:

```text
Username
Username for administrator
```

If you specifically want:

```text
Username
```

you can use:

```js
page.getByLabel('Username', {
  exact: true
});
```

---

# 20. Regular Expressions

You can also use a regular expression.

Example:

```js
page.getByLabel(/username/i);
```

This can match label text without depending on capitalization.

For example:

```text
Username
USERNAME
username
```

The `i` means case-insensitive matching.

Use regular expressions when they solve a real matching problem. Do not make locators unnecessarily broad.

---

# 21. Assertions with `getByLabel()`

A locator created using `getByLabel()` can be used with assertions.

Example:

```js
const username = page.getByLabel('Username');

await expect(username).toBeVisible();
```

For a value:

```js
await expect(username).toHaveValue('testuser');
```

For a checkbox:

```js
const rememberMe = page.getByLabel('Remember me');

await expect(rememberMe).toBeChecked();
```

---

# 22. Auto-Waiting with `getByLabel()`

`getByLabel()` returns a Playwright locator.

Therefore, when used with actions and assertions, Playwright's normal auto-waiting behavior applies.

Example:

```js
await page.getByLabel('Username').fill('testuser');
```

Playwright waits for the field to be ready for the action.

For an assertion:

```js
await expect(
  page.getByLabel('Username')
).toBeVisible();
```

Playwright waits for the expected condition within the configured timeout.

Avoid unnecessary fixed waits:

```js
await page.waitForTimeout(3000);
```

Prefer proper locators and assertions.

---

# 23. Real-Time QA Example — Registration Form

Imagine a registration form:

```text
First Name
[____________]

Last Name
[____________]

Email
[____________]

Password
[____________]

☐ Accept Terms

[ Register ]
```

Test:

```js
const firstName = page.getByLabel('First Name');

const lastName = page.getByLabel('Last Name');

const email = page.getByLabel('Email');

const password = page.getByLabel('Password');

const terms = page.getByLabel('Accept Terms');

await firstName.fill('Lingaraj');

await lastName.fill('Test');

await email.fill('test@example.com');

await password.fill('Password123');

await terms.check();
```

The code is readable like a manual test case.

---

# 24. Real-Time QA Example — Checkout

Suppose an e-commerce checkout form contains:

```text
Card Number
[________________]

Expiry Date
[________]

CVV
[______]

☐ Save card
```

Locators:

```js
const cardNumber = page.getByLabel('Card Number');

const expiryDate = page.getByLabel('Expiry Date');

const cvv = page.getByLabel('CVV');

const saveCard = page.getByLabel('Save card');
```

Actions:

```js
await cardNumber.fill('4111111111111111');

await expiryDate.fill('12/30');

await cvv.fill('123');

await saveCard.check();
```

The key idea is that the test identifies fields using their labels.

---

# 25. What if the Label Is Missing?

`getByLabel()` depends on an accessible label relationship.

If the application has an input with no associated label:

```html
<input id="username">
```

and there is no:

```html
<label>Username</label>
```

then `getByLabel('Username')` may not be appropriate.

In that situation, another locator strategy may be needed.

For example:

```js
page.locator('#username');
```

or another suitable built-in locator.

Important QA point:

> Do not force a locator strategy when the application's HTML does not support it.

---

# 26. Common Mistakes

## Mistake 1 — Using the input's ID as the label

Given:

```html
<label for="username">Username</label>
<input id="username">
```

Correct:

```js
page.getByLabel('Username');
```

Not:

```js
page.getByLabel('username');
```

The locator is based on the **label text**, not the input ID.

---

## Mistake 2 — Assuming every input has a label

This may not be true.

If there is no accessible label relationship, `getByLabel()` may not work as expected.

---

## Mistake 3 — Confusing label text with placeholder text

Given:

```html
<label for="email">Email Address</label>

<input
  id="email"
  placeholder="Enter your email"
>
```

The label is:

```text
Email Address
```

The placeholder is:

```text
Enter your email
```

So:

```js
page.getByLabel('Email Address');
```

is different from:

```js
page.getByPlaceholder('Enter your email');
```

`getByPlaceholder()` will be covered as a separate concept.

---

## Mistake 4 — Forgetting `await`

Incorrect:

```js
username.fill('admin');
```

Correct:

```js
await username.fill('admin');
```

---

## Mistake 5 — Using a broad label match unnecessarily

Avoid making a locator unnecessarily broad.

Prefer the label that uniquely identifies the intended field.

---

# 27. Important Difference: Label vs Placeholder

This is very important for interviews.

Consider:

```html
<label for="email">Email Address</label>

<input
  id="email"
  placeholder="Enter your email"
>
```

### Label

```text
Email Address
```

Use:

```js
page.getByLabel('Email Address');
```

### Placeholder

```text
Enter your email
```

Use:

```js
page.getByPlaceholder('Enter your email');
```

Memory:

```text
Label
 ↓
What is this field?

Placeholder
 ↓
What hint is shown inside the field?
```

---

# 28. Important Methods

Creation:

```js
page.getByLabel('Username');
```

Fill:

```js
await page.getByLabel('Username').fill('admin');
```

Check:

```js
await page.getByLabel('Remember me').check();
```

Assertion:

```js
await expect(
  page.getByLabel('Username')
).toBeVisible();
```

Value assertion:

```js
await expect(
  page.getByLabel('Username')
).toHaveValue('admin');
```

---

# 29. Interview Questions

## Q1. What is `getByLabel()`?

`getByLabel()` is a Playwright built-in locator used to find a form control through its associated label text.

---

## Q2. Give an example.

HTML:

```html
<label for="username">Username</label>
<input id="username">
```

Playwright:

```js
page.getByLabel('Username');
```

---

## Q3. Where is `getByLabel()` commonly used?

It is commonly used for form controls such as:

- Text inputs
- Password fields
- Email fields
- Checkboxes
- Radio buttons
- Other properly labelled form controls

---

## Q4. What is the difference between `getByLabel()` and `getByPlaceholder()`?

`getByLabel()` uses the associated label text.

```js
page.getByLabel('Username');
```

`getByPlaceholder()` uses the placeholder text.

```js
page.getByPlaceholder('Enter username');
```

---

## Q5. What is the difference between `getByLabel()` and `locator()`?

`getByLabel()` identifies a form control through its associated label.

```js
page.getByLabel('Username');
```

`locator()` can use selectors such as CSS.

```js
page.locator('#username');
```

---

## Q6. Does `getByLabel()` depend on the label relationship?

Yes. The form control needs to have an appropriate accessible label relationship for `getByLabel()` to identify it.

---

## Q7. Can `getByLabel()` be used with checkboxes?

Yes.

Example:

```js
const rememberMe = page.getByLabel('Remember me');

await rememberMe.check();
```

---

## Q8. Can we use assertions with `getByLabel()`?

Yes.

Example:

```js
await expect(
  page.getByLabel('Username')
).toBeVisible();
```

---

# 30. Quick Revision

```text
getByLabel()
      ↓
Find form control
      ↓
Using associated label text
```

Basic syntax:

```js
page.getByLabel('Username');
```

Fill:

```js
await page.getByLabel('Username').fill('admin');
```

Checkbox:

```js
await page.getByLabel('Remember me').check();
```

Assertion:

```js
await expect(
  page.getByLabel('Username')
).toBeVisible();
```

Important distinction:

```text
Label
 ↓
getByLabel()

Placeholder
 ↓
getByPlaceholder()
```

---

# 31. Easy Memory Trick

Remember:

```text
LABEL → FIELD
```

If the page says:

```text
Username
[____________]
```

Think:

```text
Username
    ↓
getByLabel()
    ↓
Username field
```

Another memory trick:

```text
getByRole()
    ↓
What type of element?

getByText()
    ↓
What text is visible?

getByLabel()
    ↓
What is the field called?
```

---

# 32. Final Definition

> **`getByLabel()` is a Playwright built-in locator used to identify a form control through its associated label text. It is especially useful for locating text fields, password fields, checkboxes, radio buttons, and other properly labelled form controls.**

Most important syntax:

```js
page.getByLabel('Username');
```

Remember:

```text
Label
  ↓
Associated Form Control
  ↓
getByLabel()
  ↓
Locator
  ↓
Action / Assertion
```

Next concept:

```text
Concept 13 — getByPlaceholder()
```

File:

```text
04 - Playwright-Fundamentals/
└── 05-Built-in-Locators/
    └── 04-getByPlaceholder.md
```