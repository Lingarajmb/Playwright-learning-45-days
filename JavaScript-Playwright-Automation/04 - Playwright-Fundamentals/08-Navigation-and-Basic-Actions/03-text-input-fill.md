# Concept 21 — Text Input and `fill()`

## 1. What Is Text Input?

Text input means entering text into a field on a web page.

Examples:

- Username
- Password
- Email
- Search
- Address
- Phone number
- Comments
- Message
- Form fields

In Playwright, the most commonly used method for entering text is:

```js
locator.fill()
```

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

This means:

```text
Find Username field
        ↓
Enter "Lingaraj"
```

---

# 2. Why Do We Need Text Input?

Most web applications require users to enter information.

For example, a login form:

```text
Username
[ Lingaraj              ]

Password
[ ********              ]

[ Login ]
```

Automation needs to perform the same actions:

```text
Open Login Page
      ↓
Enter Username
      ↓
Enter Password
      ↓
Click Login
      ↓
Verify Result
```

---

# 3. Basic `fill()` Syntax

Syntax:

```js
await locator.fill('value');
```

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

Another example:

```js
await page.locator('#email').fill('lingaraj@example.com');
```

---

# 4. How `fill()` Works

Suppose the HTML is:

```html
<input id="username" type="text">
```

Playwright:

```js
await page.locator('#username').fill('Lingaraj');
```

Flow:

```text
Locate input
    ↓
Clear existing value
    ↓
Enter new value
    ↓
Input contains "Lingaraj"
```

One important feature of `fill()` is that it replaces the existing value.

---

# 5. `fill()` Replaces Existing Text

Suppose the input already contains:

```text
OldUsername
```

Then:

```js
await page.locator('#username').fill('Lingaraj');
```

The final value becomes:

```text
Lingaraj
```

It does not append the new text to the old value.

Conceptually:

```text
Before:
OldUsername

fill("Lingaraj")

After:
Lingaraj
```

---

# 6. `fill()` vs Typing Character by Character

`fill()` is designed to populate an input with a value.

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

This is usually preferable for normal form automation.

If the test specifically needs to simulate individual keyboard input, Playwright also provides:

```js
locator.press()
```

and keyboard APIs.

Those are useful when the behavior depends on keyboard events.

---

# 7. Text Input Using `getByLabel()`

If the field has a proper label:

```html
<label for="username">Username</label>
<input id="username">
```

Use:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

This is readable and closely represents the user-facing field.

---

# 8. Text Input Using `getByPlaceholder()`

Example:

```html
<input placeholder="Enter username">
```

Playwright:

```js
await page
  .getByPlaceholder('Enter username')
  .fill('Lingaraj');
```

---

# 9. Text Input Using `locator()`

Example HTML:

```html
<input id="username">
```

Playwright:

```js
await page
  .locator('#username')
  .fill('Lingaraj');
```

XPath can also be used:

```js
await page
  .locator("//input[@id='username']")
  .fill('Lingaraj');
```

---

# 10. Text Input in a Password Field

Example:

```html
<label for="password">Password</label>
<input id="password" type="password">
```

Playwright:

```js
await page
  .getByLabel('Password')
  .fill('Password123');
```

The value is entered even though the browser displays it as masked characters.

---

# 11. Text Input in an Email Field

Example:

```html
<label for="email">Email</label>
<input id="email" type="email">
```

Playwright:

```js
await page
  .getByLabel('Email')
  .fill('lingaraj@example.com');
```

---

# 12. Text Input in a Search Field

Example:

```html
<input placeholder="Search products">
```

Playwright:

```js
await page
  .getByPlaceholder('Search products')
  .fill('Laptop');
```

Then the test might click Search:

```js
await page
  .getByRole('button', { name: 'Search' })
  .click();
```

---

# 13. Textarea

`fill()` can also be used with a textarea.

Example:

```html
<textarea id="comments"></textarea>
```

Playwright:

```js
await page
  .locator('#comments')
  .fill('This is my feedback.');
```

The concept is the same:

```text
Locate textarea
       ↓
fill(value)
       ↓
Text entered
```

---

# 14. Complete Login Example

```js
const { test, expect } = require('@playwright/test');

test('Login with valid credentials', async ({ page }) => {

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

---

# 15. Line-by-Line Explanation

```js
await page.goto('/login');
```

Opens the login page.

---

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

Finds the Username field and enters:

```text
Lingaraj
```

---

```js
await page
  .getByLabel('Password')
  .fill('Password123');
```

Finds the Password field and enters the password.

---

```js
await page
  .getByRole('button', { name: 'Login' })
  .click();
```

Finds and clicks the Login button.

---

```js
await expect(page).toHaveURL(/dashboard/);
```

Verifies that login navigation reached the dashboard.

---

# 16. Form Example

Suppose we have:

```text
First Name
[ Lingaraj ]

Last Name
[ Belagali ]

Email
[ lingaraj@example.com ]

Address
[ Bengaluru ]

[ Submit ]
```

Automation:

```js
await page
  .getByLabel('First Name')
  .fill('Lingaraj');

await page
  .getByLabel('Last Name')
  .fill('Belagali');

await page
  .getByLabel('Email')
  .fill('lingaraj@example.com');

await page
  .getByLabel('Address')
  .fill('Bengaluru');

await page
  .getByRole('button', { name: 'Submit' })
  .click();
```

---

# 17. Filling Multiple Fields

A complete form can be automated like this:

```js
await page.getByLabel('First Name').fill('Lingaraj');

await page.getByLabel('Last Name').fill('Belagali');

await page.getByLabel('Email').fill('lingaraj@example.com');

await page.getByLabel('Phone').fill('9876543210');

await page.getByLabel('Address').fill('Bengaluru');
```

Each field is independently located and filled.

---

# 18. Clearing a Field

Because `fill()` replaces the existing value, we can use it to replace text.

Example:

```js
await page
  .getByLabel('Username')
  .fill('OldUser');

await page
  .getByLabel('Username')
  .fill('NewUser');
```

Final value:

```text
NewUser
```

We can also explicitly clear an input:

```js
await page
  .getByLabel('Username')
  .fill('');
```

Now the field is empty.

---

# 19. Verifying the Entered Value

Use:

```js
toHaveValue()
```

Example:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');

await expect(
  page.getByLabel('Username')
).toHaveValue('Lingaraj');
```

Flow:

```text
Fill
 ↓
Verify value
```

This is useful when you want to confirm that the application accepted the entered value.

---

# 20. Real-Time QA Example — Registration

Requirement:

```text
Register a new user.
```

Test:

```js
test('Register new user', async ({ page }) => {

  await page.goto('/register');

  await page
    .getByLabel('First Name')
    .fill('Lingaraj');

  await page
    .getByLabel('Last Name')
    .fill('Belagali');

  await page
    .getByLabel('Email')
    .fill('lingaraj@example.com');

  await page
    .getByLabel('Password')
    .fill('Password123');

  await page
    .getByRole('button', { name: 'Register' })
    .click();

  await expect(
    page.getByText('Registration successful')
  ).toBeVisible();

});
```

---

# 21. Dynamic Input Fields

Some applications generate input fields dynamically.

Example:

```text
Address 1
Address 2
Address 3
```

If the fields have stable labels or test IDs, use those.

Example:

```js
await page
  .getByLabel('Address 1')
  .fill('Bengaluru');
```

Avoid relying only on position:

```js
await page.locator('input').nth(5).fill('Bengaluru');
```

unless the position is genuinely stable and meaningful.

---

# 22. Filling an Input Inside a Specific Container

Suppose there are multiple forms:

```text
Login Form
    Username
    Password

Registration Form
    Username
    Password
```

Instead of selecting a generic field, scope the locator.

Example:

```js
const loginForm = page.locator('#login-form');

await loginForm
  .getByLabel('Username')
  .fill('Lingaraj');
```

Flow:

```text
Page
 ↓
Login Form
 ↓
Username
 ↓
Fill
```

This avoids accidentally interacting with a field from another form.

---

# 23. Filling a Field Inside a Repeated Row

Suppose a table contains:

```text
Lingaraj    [Salary Input]
Rahul       [Salary Input]
Priya       [Salary Input]
```

Requirement:

```text
Update Lingaraj's salary.
```

Example:

```js
await page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .locator('input')
  .fill('100000');
```

Flow:

```text
Find rows
    ↓
Find Lingaraj row
    ↓
Find input inside that row
    ↓
Fill salary
```

This combines the concepts we learned earlier:

```text
filter()
+
locator()
+
fill()
```

---

# 24. `fill()` and Auto-Waiting

When you write:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

Playwright performs the necessary actionability checks before performing the action.

You normally do not need:

```js
await page.waitForTimeout(3000);
```

before every `fill()`.

Avoid fixed waits as a default synchronization technique.

---

# 25. Common Mistake — Forgetting `await`

Avoid:

```js
page.getByLabel('Username').fill('Lingaraj');
```

Prefer:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

Because `fill()` is asynchronous.

---

# 26. Common Mistake — Using the Wrong Locator

Suppose there are multiple fields:

```text
Username
Search Username
Admin Username
```

Using an overly broad locator can target the wrong element.

Avoid blindly using:

```js
page.locator('input').first().fill('Lingaraj');
```

Prefer a meaningful locator:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

---

# 27. Common Mistake — Using `nth()` Without a Reason

Avoid:

```js
await page.locator('input').nth(3).fill('Lingaraj');
```

if you can identify the field using:

```js
getByLabel()
getByPlaceholder()
getByTestId()
getByRole()
```

or a stable CSS/XPath locator.

---

# 28. Common Mistake — Using `waitForTimeout()`

Avoid:

```js
await page.waitForTimeout(2000);

await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

Prefer:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

Playwright handles the normal synchronization for the action.

---

# 29. Common Mistake — Filling the Wrong Field

Suppose:

```html
<input placeholder="Search">
<input placeholder="Username">
```

Do not use:

```js
await page.locator('input').first().fill('Lingaraj');
```

unless the first input is guaranteed to be Username.

Better:

```js
await page
  .getByPlaceholder('Username')
  .fill('Lingaraj');
```

---

# 30. `fill()` vs `press()`

These serve different purposes.

### `fill()`

Used to populate an input.

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

### `press()`

Used to send a keyboard key.

```js
await page
  .getByLabel('Search')
  .press('Enter');
```

Example:

```js
await page
  .getByPlaceholder('Search products')
  .fill('Laptop');

await page
  .getByPlaceholder('Search products')
  .press('Enter');
```

Flow:

```text
Fill search text
       ↓
Press Enter
       ↓
Search executes
```

Keyboard actions will be covered separately.

---

# 31. `fill()` vs `type()`

In modern Playwright usage, `fill()` is normally preferred for simply setting an input value.

Example:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

For scenarios where the test specifically needs to simulate typing behavior or individual keyboard events, use the appropriate keyboard/input APIs.

The important idea is:

```text
Normal form population
        ↓
fill()

Specific keyboard behavior
        ↓
keyboard / press / typing-related APIs
```

---

# 32. Real QA Example — Search

```js
test('Search product', async ({ page }) => {

  await page.goto('/products');

  await page
    .getByPlaceholder('Search products')
    .fill('Laptop');

  await page
    .getByRole('button', { name: 'Search' })
    .click();

  await expect(
    page.getByText('Laptop')
  ).toBeVisible();

});
```

Flow:

```text
Products page
     ↓
Search field
     ↓
Fill "Laptop"
     ↓
Click Search
     ↓
Verify result
```

---

# 33. Real QA Example — Contact Form

```js
test('Submit contact form', async ({ page }) => {

  await page.goto('/contact');

  await page
    .getByLabel('Name')
    .fill('Lingaraj');

  await page
    .getByLabel('Email')
    .fill('lingaraj@example.com');

  await page
    .getByLabel('Message')
    .fill('I need support with my account.');

  await page
    .getByRole('button', { name: 'Send' })
    .click();

  await expect(
    page.getByText('Message sent successfully')
  ).toBeVisible();

});
```

---

# 34. Complete Real-Time QA Example

```js
const { test, expect } = require('@playwright/test');

test('Create customer', async ({ page }) => {

  await page.goto('/customers/new');

  await page
    .getByLabel('First Name')
    .fill('Lingaraj');

  await page
    .getByLabel('Last Name')
    .fill('Belagali');

  await page
    .getByLabel('Email')
    .fill('lingaraj@example.com');

  await page
    .getByLabel('Phone')
    .fill('9876543210');

  await page
    .getByLabel('Address')
    .fill('Bengaluru');

  await expect(
    page.getByLabel('First Name')
  ).toHaveValue('Lingaraj');

  await page
    .getByRole('button', { name: 'Create Customer' })
    .click();

  await expect(
    page.getByText('Customer created successfully')
  ).toBeVisible();

});
```

---

# 35. Line-by-Line Explanation

```js
await page.goto('/customers/new');
```

Opens the customer creation page.

---

```js
await page
  .getByLabel('First Name')
  .fill('Lingaraj');
```

Finds the First Name field and enters:

```text
Lingaraj
```

---

```js
await page
  .getByLabel('Last Name')
  .fill('Belagali');
```

Enters the last name.

---

```js
await page
  .getByLabel('Email')
  .fill('lingaraj@example.com');
```

Enters the email address.

---

```js
await page
  .getByLabel('Phone')
  .fill('9876543210');
```

Enters the phone number.

---

```js
await page
  .getByLabel('Address')
  .fill('Bengaluru');
```

Enters the address.

---

```js
await expect(
  page.getByLabel('First Name')
).toHaveValue('Lingaraj');
```

Verifies that the First Name field contains the expected value.

---

```js
await page
  .getByRole('button', { name: 'Create Customer' })
  .click();
```

Submits the form.

---

```js
await expect(
  page.getByText('Customer created successfully')
).toBeVisible();
```

Verifies that the customer was successfully created.

---

# 36. Best Practices

## 1. Prefer user-facing locators

Example:

```js
getByLabel()
```

instead of:

```js
locator('input:nth-child(4)')
```

---

## 2. Use meaningful field identification

Good:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

Less maintainable:

```js
await page.locator('input').nth(2).fill('Lingaraj');
```

---

## 3. Verify important input values

Example:

```js
await expect(
  page.getByLabel('Username')
).toHaveValue('Lingaraj');
```

---

## 4. Avoid unnecessary fixed waits

Do not add:

```js
await page.waitForTimeout(3000);
```

before every `fill()`.

---

## 5. Keep the test readable

A good test should read almost like the manual test case:

```text
Open customer page
Enter first name
Enter last name
Enter email
Enter phone
Click Create Customer
Verify success message
```

---

# 37. Interview Questions

## Q1. How do you enter text into an input field in Playwright?

Using:

```js
await locator.fill('value');
```

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

---

## Q2. Does `fill()` replace the existing value?

Yes.

If an input contains:

```text
OldValue
```

and we execute:

```js
await locator.fill('NewValue');
```

the final value becomes:

```text
NewValue
```

---

## Q3. How do you verify an input value?

Using:

```js
await expect(locator).toHaveValue('expected value');
```

Example:

```js
await expect(
  page.getByLabel('Username')
).toHaveValue('Lingaraj');
```

---

## Q4. Can `fill()` be used with a textarea?

Yes.

Example:

```js
await page
  .getByLabel('Comments')
  .fill('This is my feedback.');
```

---

## Q5. What is the difference between `fill()` and `press()`?

```text
fill()
  ↓
Sets the input value

press()
  ↓
Sends a keyboard key
```

Example:

```js
await search.fill('Laptop');

await search.press('Enter');
```

---

## Q6. Should we use `waitForTimeout()` before `fill()`?

No, not as a default strategy.

Playwright provides automatic waiting for normal locator actions.

---

## Q7. Why is `getByLabel()` useful for text input?

Because it identifies the form field through its user-facing label.

Example:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

This is readable and maintainable when the application has proper labels.

---

# 38. Quick Revision

```text
Text Input
    ↓
fill()
    ↓
Locate field
    ↓
Set value
    ↓
Optional assertion
    ↓
Continue test
```

Basic syntax:

```js
await locator.fill('value');
```

Example:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

Verify:

```js
await expect(
  page.getByLabel('Username')
).toHaveValue('Lingaraj');
```

Clear:

```js
await page
  .getByLabel('Username')
  .fill('');
```

---

# 39. Easy Memory Trick

Remember:

```text
F → Find
I → Input
V → Verify
```

Think:

```text
Find the field
      ↓
Input the value
      ↓
Verify the value
```

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');

await expect(
  page.getByLabel('Username')
).toHaveValue('Lingaraj');
```

---

# 40. Final Definition

**Text input in Playwright is the process of entering or replacing values in input fields and text areas using methods such as `fill()`. The `fill()` method is commonly used for normal form automation because it sets the required value directly and works with Playwright's locator and automatic waiting model.**

---

# 41. Key Takeaway

The most important pattern is:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

For a real QA test:

```text
Locate field
     ↓
Fill value
     ↓
Verify value if required
     ↓
Continue with next action
```

Example:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');

await expect(
  page.getByLabel('Username')
).toHaveValue('Lingaraj');
```

Use meaningful locators, avoid unnecessary waits, and do not depend on element position when a stable locator is available.