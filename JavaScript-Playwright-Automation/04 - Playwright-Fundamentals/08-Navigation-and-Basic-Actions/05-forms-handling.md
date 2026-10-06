# Concept 23 — Forms Handling in Playwright

## 1. What is Form Handling?

Form handling means interacting with different form controls on a web application and verifying the form behavior.

In Playwright, we can automate actions such as:

- Entering text
- Entering passwords
- Entering email
- Entering text into a textarea
- Selecting checkboxes
- Selecting radio buttons
- Selecting dropdown options
- Submitting forms
- Verifying validation messages
- Verifying successful submission
- Verifying required-field behavior

Forms are one of the most common areas tested in web applications.

### Simple Example

```js
await page.getByLabel('Username').fill('lingaraj');
await page.getByLabel('Password').fill('Password123');
await page.getByLabel('Remember me').check();
await page.getByRole('button', { name: 'Login' }).click();
```

Here Playwright:

1. Enters the username.
2. Enters the password.
3. Checks the checkbox.
4. Clicks the Login button.

---

# 2. Why is Form Handling Important in QA?

Forms are used in almost every application.

Examples:

- Login
- Registration
- Sign up
- Checkout
- Payment
- Profile update
- Employee creation
- Customer creation
- Search
- Feedback
- Contact forms

As a QA engineer, we need to verify both:

### Positive scenarios

The form accepts valid data and submits successfully.

Example:

```text
Username: Lingaraj
Email: lingaraj@gmail.com
Password: Test@123
```

Expected:

```text
Registration successful
```

### Negative scenarios

The form rejects invalid or missing data.

Example:

```text
Username: Lingaraj
Email: invalid-email
Password: 123
```

Expected:

```text
Please enter a valid email address
Password must contain at least 8 characters
```

---

# 3. Common Form Controls

A typical web form can contain:

```text
Form
 |
 +-- Text field
 |
 +-- Password field
 |
 +-- Email field
 |
 +-- Textarea
 |
 +-- Checkbox
 |
 +-- Radio button
 |
 +-- Dropdown
 |
 +-- Submit button
 |
 +-- Validation message
```

Let's understand how Playwright interacts with each one.

---

# 4. Text Input

A text input allows the user to enter text.

Example HTML:

```html
<label for="username">Username</label>
<input id="username" type="text">
```

Playwright:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

### What happens?

Playwright locates the Username field and enters:

```text
Lingaraj
```

---

# 5. Password Field

Password fields are normally used for confidential information.

Example:

```html
<label for="password">Password</label>
<input id="password" type="password">
```

Playwright:

```js
await page.getByLabel('Password').fill('Password123');
```

The same `fill()` method can be used.

---

# 6. Email Field

Example:

```html
<label for="email">Email</label>
<input id="email" type="email">
```

Playwright:

```js
await page.getByLabel('Email').fill('lingaraj@gmail.com');
```

We can then verify the entered value:

```js
await expect(page.getByLabel('Email'))
  .toHaveValue('lingaraj@gmail.com');
```

---

# 7. Textarea

A textarea is used when the user needs to enter larger text.

Example:

```html
<label for="address">Address</label>
<textarea id="address"></textarea>
```

Playwright:

```js
await page.getByLabel('Address').fill('Bengaluru, Karnataka');
```

Example:

```js
await expect(page.getByLabel('Address'))
  .toHaveValue('Bengaluru, Karnataka');
```

---

# 8. Checkbox

A checkbox allows the user to select or deselect an option.

Example:

```html
<label>
  <input type="checkbox" id="terms">
  I agree to the Terms and Conditions
</label>
```

Playwright:

```js
await page.getByLabel('I agree to the Terms and Conditions').check();
```

---

# 9. Why Use `check()`?

For a checkbox, `check()` makes sure the checkbox is selected.

```js
await page.getByLabel('Remember me').check();
```

If the checkbox is already checked, Playwright does not need to click it again just to make it checked.

This is useful because our test is expressing the required state:

```text
Checkbox should be checked
```

rather than simply:

```text
Click checkbox
```

---

# 10. `uncheck()`

`uncheck()` makes sure a checkbox is not selected.

Example:

```js
await page.getByLabel('Remember me').uncheck();
```

Use it when the expected state is:

```text
Unchecked
```

---

# 11. Verify Checkbox State

We can verify a checkbox using:

```js
await expect(page.getByLabel('Remember me')).toBeChecked();
```

This verifies:

```text
Remember me = Checked
```

Example:

```js
await page.getByLabel('Remember me').check();

await expect(page.getByLabel('Remember me'))
  .toBeChecked();
```

---

# 12. `isChecked()`

`isChecked()` can be used when we need the checkbox state as a JavaScript boolean.

Example:

```js
const checked = await page.getByLabel('Remember me').isChecked();

console.log(checked);
```

Possible result:

```text
true
```

or:

```text
false
```

### Difference

`toBeChecked()` is mainly used for an assertion:

```js
await expect(page.getByLabel('Remember me')).toBeChecked();
```

`isChecked()` returns the current state:

```js
const checked = await page.getByLabel('Remember me').isChecked();
```

---

# 13. Radio Buttons

Radio buttons are normally used when the user must select one option from a group.

Example:

```html
<label>
  <input type="radio" name="gender" value="male">
  Male
</label>

<label>
  <input type="radio" name="gender" value="female">
  Female
</label>
```

Playwright:

```js
await page.getByLabel('Male').check();
```

Another option:

```js
await page.getByLabel('Female').check();
```

### Important

Radio buttons are normally mutually exclusive.

For example:

```text
Gender

( ) Male
( ) Female
```

Selecting Female normally removes the selection from Male.

---

# 14. Dropdown

A native HTML `<select>` element can be handled using `selectOption()`.

Example HTML:

```html
<label for="country">Country</label>

<select id="country">
  <option value="india">India</option>
  <option value="usa">USA</option>
  <option value="uk">UK</option>
</select>
```

Playwright:

```js
await page.getByLabel('Country').selectOption('india');
```

We can also select by label:

```js
await page.getByLabel('Country').selectOption({
  label: 'India'
});
```

### Important

`selectOption()` is primarily for native HTML `<select>` elements.

Custom dropdowns such as:

```text
Click dropdown
     ↓
Custom menu appears
     ↓
Click option
```

may require normal locator and click actions.

Special dropdown handling will be covered separately later.

---

# 15. Submit Button

After entering the required information, we normally submit the form.

Example:

```js
await page.getByRole('button', { name: 'Submit' }).click();
```

Or:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

Playwright waits for the button to become actionable before clicking it.

---

# 16. Complete Form Example

Consider this form:

```text
Registration Form

Name       : [ Lingaraj             ]

Email      : [ lingaraj@gmail.com   ]

Password   : [ ********              ]

Gender     : ( ) Male  ( ) Female

Country    : [ India                 ]

☑ I agree to Terms

             [ Register ]
```

Playwright test:

```js
const { test, expect } = require('@playwright/test');

test('Registration Form Test', async ({ page }) => {

  await page.goto('https://example.com/register');

  await page.getByLabel('Name').fill('Lingaraj');

  await page.getByLabel('Email').fill('lingaraj@gmail.com');

  await page.getByLabel('Password').fill('Password123');

  await page.getByLabel('Male').check();

  await page.getByLabel('Country').selectOption('india');

  await page.getByLabel('I agree to Terms').check();

  await expect(page.getByLabel('Name'))
    .toHaveValue('Lingaraj');

  await expect(page.getByLabel('Email'))
    .toHaveValue('lingaraj@gmail.com');

  await expect(page.getByLabel('I agree to Terms'))
    .toBeChecked();

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('Registration successful'))
    .toBeVisible();
});
```

---

# 17. Line-by-Line Explanation

### Import Playwright

```js
const { test, expect } = require('@playwright/test');
```

We import:

- `test` → to create the test.
- `expect` → to perform assertions.

---

### Start the test

```js
test('Registration Form Test', async ({ page }) => {
```

Creates a Playwright test.

`page` represents the browser tab.

---

### Open the application

```js
await page.goto('https://example.com/register');
```

Navigates to the registration page.

---

### Enter name

```js
await page.getByLabel('Name').fill('Lingaraj');
```

Finds the Name field and enters:

```text
Lingaraj
```

---

### Enter email

```js
await page.getByLabel('Email').fill('lingaraj@gmail.com');
```

Enters the email address.

---

### Enter password

```js
await page.getByLabel('Password').fill('Password123');
```

Enters the password.

---

### Select radio button

```js
await page.getByLabel('Male').check();
```

Selects the Male radio button.

---

### Select country

```js
await page.getByLabel('Country').selectOption('india');
```

Selects India from the native dropdown.

---

### Select terms checkbox

```js
await page.getByLabel('I agree to Terms').check();
```

Checks the terms checkbox.

---

### Verify name

```js
await expect(page.getByLabel('Name'))
  .toHaveValue('Lingaraj');
```

Verifies that the Name field contains:

```text
Lingaraj
```

---

### Verify email

```js
await expect(page.getByLabel('Email'))
  .toHaveValue('lingaraj@gmail.com');
```

Verifies the entered email.

---

### Verify checkbox

```js
await expect(page.getByLabel('I agree to Terms'))
  .toBeChecked();
```

Verifies that the checkbox is selected.

---

### Submit

```js
await page.getByRole('button', { name: 'Register' }).click();
```

Clicks Register.

---

### Verify success

```js
await expect(page.getByText('Registration successful'))
  .toBeVisible();
```

Verifies that the success message is displayed.

---

# 18. Form Validation Testing

Form testing is not only about submitting valid data.

As a QA engineer, we also test validation.

For example:

```text
Name     : empty
Email    : invalid
Password : empty

        [Submit]
```

Expected:

```text
Name is required
Email is invalid
Password is required
```

Example:

```js
await page.getByRole('button', { name: 'Submit' }).click();

await expect(page.getByText('Name is required'))
  .toBeVisible();

await expect(page.getByText('Email is invalid'))
  .toBeVisible();

await expect(page.getByText('Password is required'))
  .toBeVisible();
```

---

# 19. Required Field Testing

A required field should not allow the form to submit without valid data.

Example:

```js
await page.getByLabel('Email').fill('');

await page.getByRole('button', { name: 'Submit' }).click();

await expect(page.getByText('Email is required'))
  .toBeVisible();
```

This is a negative test case.

---

# 20. Invalid Email Testing

Example:

```js
await page.getByLabel('Email').fill('abc');

await page.getByRole('button', { name: 'Submit' }).click();

await expect(page.getByText('Enter a valid email'))
  .toBeVisible();
```

We are verifying that invalid input is rejected.

---

# 21. Password Validation

Example:

```js
await page.getByLabel('Password').fill('123');

await page.getByRole('button', { name: 'Submit' }).click();

await expect(page.getByText('Password must contain at least 8 characters'))
  .toBeVisible();
```

---

# 22. Form Validation Test Scenarios

As a QA engineer, common scenarios include:

### Positive

```text
Valid username
Valid email
Valid password
Valid selections
Submit
Expected → Successful submission
```

### Negative

```text
Empty required field
Invalid email
Invalid password
Terms not selected
Invalid input
Expected → Validation message
```

---

# 23. `toHaveValue()`

`toHaveValue()` verifies the value inside an input or textarea.

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');

await expect(page.getByLabel('Username'))
  .toHaveValue('Lingaraj');
```

Think:

```text
Input field → What value does it contain?
```

Answer with:

```js
toHaveValue()
```

---

# 24. `toBeVisible()`

`toBeVisible()` verifies that an element is visible.

Example:

```js
await expect(page.getByText('Registration successful'))
  .toBeVisible();
```

Useful for:

- Success messages
- Error messages
- Validation messages
- Dialogs
- Buttons
- Form sections

---

# 25. `toBeEnabled()`

Checks whether an element is enabled.

Example:

```js
await expect(page.getByRole('button', { name: 'Submit' }))
  .toBeEnabled();
```

This verifies that the Submit button can be used.

---

# 26. `toBeDisabled()`

Checks whether an element is disabled.

Example:

```js
await expect(page.getByRole('button', { name: 'Submit' }))
  .toBeDisabled();
```

This is useful when a form should prevent submission until required information is entered.

Example:

```text
Name      : [              ]
Email     : [              ]

Submit button → Disabled
```

After entering valid data:

```text
Name      : [ Lingaraj     ]
Email     : [ valid email  ]

Submit button → Enabled
```

---

# 27. Real-Time QA Example — Employee Registration

Imagine an HR application with:

```text
Create Employee

Employee Name : [                 ]

Email         : [                 ]

Password      : [                 ]

Department    : [ IT ▼           ]

Employment    : ( ) Permanent
                ( ) Contract

☐ I agree to company policy

             [ Create Employee ]
```

Test:

```js
test('Create Employee', async ({ page }) => {

  await page.goto('https://example.com/employees/create');

  await page.getByLabel('Employee Name')
    .fill('Lingaraj');

  await page.getByLabel('Email')
    .fill('lingaraj@gmail.com');

  await page.getByLabel('Password')
    .fill('Password123');

  await page.getByLabel('Department')
    .selectOption('IT');

  await page.getByLabel('Permanent')
    .check();

  await page.getByLabel('I agree to company policy')
    .check();

  await expect(page.getByLabel('Employee Name'))
    .toHaveValue('Lingaraj');

  await expect(page.getByLabel('I agree to company policy'))
    .toBeChecked();

  await page.getByRole('button', { name: 'Create Employee' })
    .click();

  await expect(page.getByText('Employee created successfully'))
    .toBeVisible();
});
```

This represents a realistic QA automation flow:

```text
Open page
    ↓
Enter data
    ↓
Select options
    ↓
Verify entered data
    ↓
Submit form
    ↓
Verify result
```

---

# 28. Form Handling Flow

Remember this general flow:

```text
1. Open page
       ↓
2. Locate form field
       ↓
3. Enter/select data
       ↓
4. Verify field state/value
       ↓
5. Submit form
       ↓
6. Verify success/error
```

Example:

```js
await page.goto('https://example.com');

await page.getByLabel('Username').fill('Lingaraj');

await page.getByLabel('Password').fill('Password123');

await page.getByLabel('Remember me').check();

await expect(page.getByLabel('Username'))
  .toHaveValue('Lingaraj');

await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Login successful'))
  .toBeVisible();
```

---

# 29. Important Form Methods

| Method | Purpose |
|---|---|
| `fill()` | Enter/replace text |
| `check()` | Check checkbox/radio |
| `uncheck()` | Uncheck checkbox |
| `isChecked()` | Get checkbox state |
| `selectOption()` | Select native `<select>` option |
| `click()` | Click submit/button |
| `toHaveValue()` | Verify input value |
| `toBeChecked()` | Verify checkbox/radio is checked |
| `toBeVisible()` | Verify element is visible |
| `toBeEnabled()` | Verify element is enabled |
| `toBeDisabled()` | Verify element is disabled |

---

# 30. Important Commands

Run all Playwright tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/registration.spec.js
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run in debug mode:

```bash
npx playwright test --debug
```

Open HTML report:

```bash
npx playwright show-report
```

---

# 31. Common Mistakes

## Mistake 1 — Using click to enter text

Incorrect:

```js
await page.getByLabel('Username').click();
```

This only focuses the field.

Correct:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

---

## Mistake 2 — Using `click()` for checkbox state without thinking about state

Instead of:

```js
await page.getByLabel('Remember me').click();
```

Prefer:

```js
await page.getByLabel('Remember me').check();
```

when your requirement is specifically:

```text
Checkbox must be checked
```

---

## Mistake 3 — Not verifying the entered value

Only doing:

```js
await page.getByLabel('Email').fill('lingaraj@gmail.com');
```

does not explicitly verify the value.

You can verify it:

```js
await expect(page.getByLabel('Email'))
  .toHaveValue('lingaraj@gmail.com');
```

---

## Mistake 4 — Not testing negative scenarios

Do not test only:

```text
Valid data → Submit → Success
```

Also test:

```text
Missing data
Invalid data
Boundary data
Incorrect format
Unchecked required checkbox
```

---

## Mistake 5 — Using `selectOption()` on every dropdown

`selectOption()` is designed for native HTML `<select>` elements.

Custom dropdowns may require:

```js
await page.getByRole('combobox').click();
await page.getByText('India').click();
```

depending on the application's implementation.

---

## Mistake 6 — Hardcoded waits

Avoid:

```js
await page.waitForTimeout(3000);
```

Do not use fixed waits just to wait for a form to become ready.

Prefer Playwright's built-in waiting and assertions.

---

# 32. Best Practices

### 1. Prefer user-facing locators

Good:

```js
page.getByLabel('Email')
```

```js
page.getByRole('button', { name: 'Submit' })
```

### 2. Verify important form states

```js
await expect(email).toHaveValue('lingaraj@gmail.com');
```

```js
await expect(checkbox).toBeChecked();
```

### 3. Test positive and negative scenarios

Do not test only successful submissions.

### 4. Keep tests readable

Good:

```js
await page.getByLabel('Email').fill('lingaraj@gmail.com');
await page.getByLabel('Remember me').check();
await page.getByRole('button', { name: 'Login' }).click();
```

This clearly describes the user flow.

### 5. Avoid unnecessary waits

Let Playwright's auto-waiting and assertions handle synchronization.

---

# 33. Interview Questions

## Q1. How do you handle text fields in Playwright?

Answer:

I use the `fill()` method with a suitable locator.

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');
```

---

## Q2. How do you handle checkboxes?

Answer:

I use `check()` to select a checkbox and `uncheck()` to remove the selection.

```js
await page.getByLabel('Remember me').check();

await page.getByLabel('Remember me').uncheck();
```

---

## Q3. How do you verify that a checkbox is selected?

Answer:

I use the `toBeChecked()` assertion.

```js
await expect(page.getByLabel('Remember me'))
  .toBeChecked();
```

---

## Q4. What is the difference between `isChecked()` and `toBeChecked()`?

Answer:

`isChecked()` returns the current checkbox state as a boolean.

```js
const checked = await checkbox.isChecked();
```

`toBeChecked()` is an assertion used to verify that the checkbox is checked.

```js
await expect(checkbox).toBeChecked();
```

---

## Q5. How do you handle a native dropdown?

Answer:

I use `selectOption()` for a native HTML `<select>` element.

```js
await page.getByLabel('Country').selectOption('india');
```

---

## Q6. How do you verify an input value?

Answer:

I use `toHaveValue()`.

```js
await expect(page.getByLabel('Username'))
  .toHaveValue('Lingaraj');
```

---

## Q7. How do you test form validation?

Answer:

I provide invalid or missing data, submit the form, and verify that the expected validation message is displayed.

Example:

```js
await page.getByLabel('Email').fill('');

await page.getByRole('button', { name: 'Submit' }).click();

await expect(page.getByText('Email is required'))
  .toBeVisible();
```

---

## Q8. What form scenarios do you automate?

Answer:

I automate positive and negative scenarios such as valid submissions, required-field validation, invalid formats, checkbox and radio selection, dropdown selection, error messages, successful submission, and button enabled/disabled behavior.

---

# 34. Quick Revision

```text
FORM HANDLING
     |
     +-- Text field
     |      → fill()
     |
     +-- Password
     |      → fill()
     |
     +-- Email
     |      → fill()
     |
     +-- Textarea
     |      → fill()
     |
     +-- Checkbox
     |      → check()
     |      → uncheck()
     |      → isChecked()
     |      → toBeChecked()
     |
     +-- Radio
     |      → check()
     |
     +-- Native dropdown
     |      → selectOption()
     |
     +-- Submit
     |      → click()
     |
     +-- Verify input
     |      → toHaveValue()
     |
     +-- Verify message
     |      → toBeVisible()
     |
     +-- Button state
            → toBeEnabled()
            → toBeDisabled()
```

---

# 35. Easy Memory Trick

Remember:

```text
TEXT      → fill()
CHECK     → check()
UNCHECK   → uncheck()
STATE     → isChecked()
VERIFY    → expect()
VALUE     → toHaveValue()
VISIBLE   → toBeVisible()
DROPDOWN  → selectOption()
SUBMIT    → click()
```

Easy sentence:

> **Fill → Check → Select → Submit → Verify**

Think of a real QA form:

```text
Fill the fields
      ↓
Check the checkbox
      ↓
Select the option
      ↓
Submit the form
      ↓
Verify the result
```

---

# 36. Final Definition

> **Form handling in Playwright is the process of interacting with and validating web form controls such as text fields, passwords, email fields, textareas, checkboxes, radio buttons, dropdowns, and submit buttons, while verifying the expected values, states, validation messages, and final results.**

---

# 37. Final Example to Remember

```js
const { test, expect } = require('@playwright/test');

test('Form Handling Example', async ({ page }) => {

  await page.goto('https://example.com/register');

  // Enter text
  await page.getByLabel('Name').fill('Lingaraj');

  // Enter email
  await page.getByLabel('Email').fill('lingaraj@gmail.com');

  // Enter password
  await page.getByLabel('Password').fill('Password123');

  // Select radio button
  await page.getByLabel('Male').check();

  // Select native dropdown
  await page.getByLabel('Country').selectOption('india');

  // Check checkbox
  await page.getByLabel('I agree to Terms').check();

  // Verify input value
  await expect(page.getByLabel('Name'))
    .toHaveValue('Lingaraj');

  // Verify checkbox
  await expect(page.getByLabel('I agree to Terms'))
    .toBeChecked();

  // Submit
  await page.getByRole('button', { name: 'Register' }).click();

  // Verify result
  await expect(page.getByText('Registration successful'))
    .toBeVisible();
});
```

## One-line interview summary

> **In Playwright, I handle forms using methods like `fill()`, `check()`, `uncheck()`, `selectOption()`, and `click()`, and validate the form using assertions such as `toHaveValue()`, `toBeChecked()`, `toBeVisible()`, `toBeEnabled()`, and `toBeDisabled()`.**