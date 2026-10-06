This is the next concept in our roadmap.
It will cover:
- What are assertions?
- Why assertions are important in QA
- expect()
- Visibility assertions
- Text assertions
- Value assertions
- URL assertions
- Title assertions
- Enabled/disabled assertions
- Checked/unchecked assertions
- Attribute assertions
- Soft assertions
- Positive vs negative assertions
- Real QA examples
- Common mistakes
- Interview questions
- Quick revision + memory trick



# Concept 25 — Assertions in Playwright

## 1. What are Assertions?

An assertion is a verification that checks whether the actual result of the application matches the expected result.

In simple words:

> **Assertion = Verify that the application behaves as expected.**

For example, suppose we test a login page.

```text
Enter username
      ↓
Enter password
      ↓
Click Login
      ↓
Dashboard appears
```

A QA test should not stop after clicking Login.

We need to verify:

```text
Expected:
Dashboard should be visible

Actual:
Dashboard is visible
```

Playwright uses the `expect()` function for assertions.

Example:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

---

# 2. Why are Assertions Important in QA?

Without assertions, an automation script may only perform actions.

Example:

```js
await page.getByLabel('Username').fill('Lingaraj');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button', { name: 'Login' }).click();
```

This performs the login steps.

But how do we know the login was successful?

We need an assertion:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Now the test verifies the expected result.

---

# 3. Action vs Assertion

This is very important.

### Action

An action performs something.

```js
await page.getByRole('button', { name: 'Login' }).click();
```

Meaning:

```text
Do something
```

### Assertion

An assertion verifies something.

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Meaning:

```text
Verify something
```

Remember:

```text
ACTION
  ↓
Do something

ASSERTION
  ↓
Verify something
```

---

# 4. The `expect()` Function

Playwright provides:

```js
expect()
```

for assertions.

Basic structure:

```js
await expect(locator).toBeVisible();
```

Another example:

```js
await expect(page).toHaveURL(/dashboard/);
```

Another:

```js
await expect(page).toHaveTitle('Dashboard');
```

The basic pattern is:

```text
expect()
   ↓
What are we checking?
   ↓
Matcher
   ↓
Expected result
```

---

# 5. What is a Matcher?

A matcher tells Playwright what condition we expect.

Examples:

```js
toBeVisible()
toBeHidden()
toHaveText()
toContainText()
toHaveValue()
toBeChecked()
toBeEnabled()
toBeDisabled()
toHaveAttribute()
toHaveURL()
toHaveTitle()
```

Example:

```js
await expect(button).toBeEnabled();
```

Here:

```text
expect(button)
      ↓
What are we checking?

toBeEnabled()
      ↓
What condition do we expect?
```

---

# 6. Types of Assertions

Common Playwright assertions include:

```text
Assertions
    |
    +-- Visibility
    |
    +-- Text
    |
    +-- Value
    |
    +-- URL
    |
    +-- Title
    |
    +-- Enabled / Disabled
    |
    +-- Checked / Unchecked
    |
    +-- Attribute
    |
    +-- Count
    |
    +-- Soft assertions
```

---

# 7. Visibility Assertion — `toBeVisible()`

`toBeVisible()` verifies that an element is visible to the user.

Example:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Expected:

```text
Dashboard → Visible
```

If the Dashboard is not visible, the assertion fails.

---

# 8. Real QA Example — Login

```js
await page.getByLabel('Username').fill('Lingaraj');

await page.getByLabel('Password').fill('Password123');

await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Flow:

```text
Enter credentials
       ↓
Click Login
       ↓
Dashboard appears
       ↓
Verify Dashboard is visible
```

---

# 9. `toBeHidden()`

`toBeHidden()` verifies that an element is hidden.

Example:

```js
await expect(page.getByText('Login error'))
  .toBeHidden();
```

This means:

```text
Login error → Should NOT be visible
```

Use this when the expected result is that an element is hidden.

---

# 10. Text Assertion — `toHaveText()`

`toHaveText()` verifies the text content of an element.

Example:

```js
await expect(page.getByRole('heading'))
  .toHaveText('Dashboard');
```

Expected:

```text
Dashboard
```

If the actual text is:

```text
Welcome
```

the assertion fails.

---

# 11. `toContainText()`

`toContainText()` checks whether an element contains specific text.

Example:

```js
await expect(page.getByRole('heading'))
  .toContainText('Dashboard');
```

Suppose the actual text is:

```text
Welcome to Dashboard
```

The assertion passes because:

```text
Welcome to Dashboard
          ↑
      Dashboard
```

is contained in the text.

---

# 12. `toHaveText()` vs `toContainText()`

This is an important interview point.

### `toHaveText()`

Used when we expect the text to match the expected text.

```js
await expect(locator)
  .toHaveText('Dashboard');
```

### `toContainText()`

Used when we only need specific text to be present inside the element.

```js
await expect(locator)
  .toContainText('Dashboard');
```

Memory:

```text
HAVE
 ↓
Expected text

CONTAIN
 ↓
Expected text is somewhere inside
```

---

# 13. Exact Text vs Partial Text

Suppose the application displays:

```text
Welcome to Lingaraj Dashboard
```

If we expect the complete text:

```js
await expect(locator)
  .toHaveText('Welcome to Lingaraj Dashboard');
```

If we only care about:

```text
Dashboard
```

use:

```js
await expect(locator)
  .toContainText('Dashboard');
```

---

# 14. Value Assertion — `toHaveValue()`

`toHaveValue()` verifies the value inside an input or textarea.

Example:

```js
await page.getByLabel('Username')
  .fill('Lingaraj');

await expect(page.getByLabel('Username'))
  .toHaveValue('Lingaraj');
```

This verifies:

```text
Username field
      ↓
Value = Lingaraj
```

---

# 15. Real QA Example — Form

```js
await page.getByLabel('Email')
  .fill('lingaraj@gmail.com');

await expect(page.getByLabel('Email'))
  .toHaveValue('lingaraj@gmail.com');
```

This verifies that the email field contains the expected value.

---

# 16. URL Assertion — `toHaveURL()`

`toHaveURL()` verifies the current page URL.

Example:

```js
await expect(page)
  .toHaveURL('https://example.com/dashboard');
```

You can also use a regular expression:

```js
await expect(page)
  .toHaveURL(/dashboard/);
```

This is useful after navigation.

---

# 17. Real QA Example — Login Navigation

```js
await page.getByRole('button', { name: 'Login' }).click();

await expect(page)
  .toHaveURL(/dashboard/);
```

Expected:

```text
Login
  ↓
Dashboard URL
```

---

# 18. Title Assertion — `toHaveTitle()`

`toHaveTitle()` verifies the browser page title.

Example:

```js
await expect(page)
  .toHaveTitle('Dashboard');
```

Suppose the HTML contains:

```html
<title>Dashboard</title>
```

The assertion passes.

---

# 19. Regular Expression with Title

You can also use a regular expression.

Example:

```js
await expect(page)
  .toHaveTitle(/Dashboard/);
```

This is useful when the title contains additional text.

Example:

```text
My Company - Dashboard
```

The following can pass:

```js
await expect(page)
  .toHaveTitle(/Dashboard/);
```

---

# 20. Checked Assertion — `toBeChecked()`

`toBeChecked()` verifies that a checkbox or radio button is selected.

Example:

```js
await page.getByLabel('Remember me').check();

await expect(page.getByLabel('Remember me'))
  .toBeChecked();
```

Expected:

```text
Remember me → Checked
```

---

# 21. Negative Checked Assertion

If we expect a checkbox to be unchecked:

```js
await expect(page.getByLabel('Remember me'))
  .not.toBeChecked();
```

Important:

```text
toBeChecked()
       ↓
Should be checked

not.toBeChecked()
       ↓
Should NOT be checked
```

---

# 22. Enabled Assertion — `toBeEnabled()`

`toBeEnabled()` verifies that an element is enabled.

Example:

```js
await expect(page.getByRole('button', { name: 'Submit' }))
  .toBeEnabled();
```

Expected:

```text
Submit button → Enabled
```

---

# 23. Disabled Assertion — `toBeDisabled()`

`toBeDisabled()` verifies that an element is disabled.

Example:

```js
await expect(page.getByRole('button', { name: 'Submit' }))
  .toBeDisabled();
```

Expected:

```text
Submit button → Disabled
```

---

# 24. Attribute Assertion — `toHaveAttribute()`

`toHaveAttribute()` verifies an HTML attribute.

Example:

```html
<input
  id="username"
  type="text"
  placeholder="Enter username">
```

Playwright:

```js
await expect(page.getByLabel('Username'))
  .toHaveAttribute('type', 'text');
```

Another example:

```js
await expect(page.getByLabel('Username'))
  .toHaveAttribute('placeholder', 'Enter username');
```

---

# 25. Why Attribute Assertions are Useful

Attributes can tell us important information about an element.

Examples:

```text
type
placeholder
href
value
class
id
data-testid
aria-label
```

For example:

```js
await expect(page.getByRole('link', { name: 'Home' }))
  .toHaveAttribute('href', '/home');
```

This verifies that the Home link points to the expected location.

---

# 26. Count Assertion — `toHaveCount()`

`toHaveCount()` verifies the number of matching elements.

Example:

```js
await expect(page.getByRole('button'))
  .toHaveCount(3);
```

Expected:

```text
Number of buttons = 3
```

---

# 27. Real QA Example — Product List

Suppose a page displays:

```text
Products

Laptop
Mobile
Tablet
Monitor
```

We can verify:

```js
await expect(page.locator('.product-card'))
  .toHaveCount(4);
```

This verifies that four product cards are displayed.

---

# 28. Negative Assertions

Sometimes we need to verify that something should NOT happen.

Playwright uses:

```js
.not
```

Example:

```js
await expect(page.getByText('Error'))
  .not.toBeVisible();
```

Meaning:

```text
Error message should NOT be visible.
```

---

# 29. More Negative Assertion Examples

### Element should not be visible

```js
await expect(locator)
  .not.toBeVisible();
```

### Checkbox should not be checked

```js
await expect(checkbox)
  .not.toBeChecked();
```

### Button should not be disabled

```js
await expect(button)
  .not.toBeDisabled();
```

### Text should not exist

```js
await expect(locator)
  .not.toContainText('Error');
```

---

# 30. Soft Assertions

A normal assertion can stop the test flow when it fails.

Example:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();

await expect(page.getByText('Profile'))
  .toBeVisible();
```

If the first assertion fails, the test does not continue normally to the second assertion.

A soft assertion allows the test to continue after the assertion failure.

Syntax:

```js
await expect.soft(page.getByText('Dashboard'))
  .toBeVisible();
```

Example:

```js
await expect.soft(page.getByText('Dashboard'))
  .toBeVisible();

await expect.soft(page.getByText('Profile'))
  .toBeVisible();

await expect.soft(page.getByText('Settings'))
  .toBeVisible();
```

This is useful when we want to collect multiple verification failures in one test.

---

# 31. Normal vs Soft Assertion

### Normal assertion

```js
await expect(locator).toBeVisible();
```

Concept:

```text
Assertion fails
      ↓
Test flow stops normally
```

### Soft assertion

```js
await expect.soft(locator).toBeVisible();
```

Concept:

```text
Assertion fails
      ↓
Test continues
      ↓
Other assertions can execute
      ↓
Failure is reported later
```

---

# 32. Assertion Auto-Waiting

Playwright assertions automatically wait and retry for the expected condition.

Example:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Suppose the Dashboard takes some time to appear.

Playwright waits for the expected condition instead of immediately failing.

Conceptually:

```text
Check
  ↓
Not ready?
  ↓
Wait
  ↓
Check again
  ↓
Condition met?
  ↓
Pass
```

If the expected condition does not become true within the applicable timeout:

```text
Assertion fails
```

---

# 33. Why Assertions Help Reduce Flaky Tests

Without proper assertions, testers may use fixed waits.

Example:

```js
await page.waitForTimeout(3000);
```

Then:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

The fixed wait is usually unnecessary.

Prefer:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

This allows Playwright to wait for the expected condition.

---

# 34. Complete Login Assertion Example

```js
const { test, expect } = require('@playwright/test');

test('Login Verification', async ({ page }) => {

  await page.goto('https://example.com/login');

  await expect(page)
    .toHaveTitle(/Login/);

  await expect(page.getByLabel('Username'))
    .toBeVisible();

  await expect(page.getByLabel('Password'))
    .toBeVisible();

  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('Password123');

  await expect(page.getByLabel('Username'))
    .toHaveValue('Lingaraj');

  await page.getByRole('button', { name: 'Login' })
    .click();

  await expect(page)
    .toHaveURL(/dashboard/);

  await expect(page.getByText('Dashboard'))
    .toBeVisible();
});
```

---

# 35. Line-by-Line Explanation

### Import

```js
const { test, expect } = require('@playwright/test');
```

Imports:

- `test` → creates the test.
- `expect` → performs assertions.

---

### Start test

```js
test('Login Verification', async ({ page }) => {
```

Creates a test called:

```text
Login Verification
```

---

### Open login page

```js
await page.goto('https://example.com/login');
```

Navigates to the login page.

---

### Verify title

```js
await expect(page)
  .toHaveTitle(/Login/);
```

Verifies that the page title contains:

```text
Login
```

---

### Verify username field

```js
await expect(page.getByLabel('Username'))
  .toBeVisible();
```

Verifies that the Username field is visible.

---

### Verify password field

```js
await expect(page.getByLabel('Password'))
  .toBeVisible();
```

Verifies that the Password field is visible.

---

### Enter username

```js
await page.getByLabel('Username')
  .fill('Lingaraj');
```

Enters the username.

---

### Enter password

```js
await page.getByLabel('Password')
  .fill('Password123');
```

Enters the password.

---

### Verify username value

```js
await expect(page.getByLabel('Username'))
  .toHaveValue('Lingaraj');
```

Verifies that the username field contains the expected value.

---

### Click Login

```js
await page.getByRole('button', { name: 'Login' })
  .click();
```

Submits the login form.

---

### Verify URL

```js
await expect(page)
  .toHaveURL(/dashboard/);
```

Verifies that the application navigated to the Dashboard URL.

---

### Verify Dashboard

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

Verifies that the Dashboard is visible.

---

# 36. Real-Time QA Example — Registration

Suppose we have:

```text
Registration Form

Name
Email
Password
Country
Terms

[Register]
```

Test:

```js
await page.getByLabel('Name')
  .fill('Lingaraj');

await page.getByLabel('Email')
  .fill('lingaraj@gmail.com');

await page.getByLabel('Password')
  .fill('Password123');

await page.getByLabel('Country')
  .selectOption('india');

await page.getByLabel('I agree to Terms')
  .check();
```

Verify:

```js
await expect(page.getByLabel('Name'))
  .toHaveValue('Lingaraj');

await expect(page.getByLabel('Email'))
  .toHaveValue('lingaraj@gmail.com');

await expect(page.getByLabel('I agree to Terms'))
  .toBeChecked();
```

Submit:

```js
await page.getByRole('button', { name: 'Register' })
  .click();
```

Verify:

```js
await expect(page.getByText('Registration successful'))
  .toBeVisible();
```

---

# 37. Real-Time QA Example — Negative Login

Suppose the user enters an incorrect password.

```js
await page.getByLabel('Username')
  .fill('Lingaraj');

await page.getByLabel('Password')
  .fill('WrongPassword');

await page.getByRole('button', { name: 'Login' })
  .click();
```

Verify the error:

```js
await expect(page.getByText('Invalid username or password'))
  .toBeVisible();
```

And verify Dashboard is not visible:

```js
await expect(page.getByText('Dashboard'))
  .not.toBeVisible();
```

This is a good negative test.

---

# 38. Positive vs Negative Assertions

### Positive assertion

Verify something SHOULD happen.

```js
await expect(page.getByText('Success'))
  .toBeVisible();
```

### Negative assertion

Verify something SHOULD NOT happen.

```js
await expect(page.getByText('Error'))
  .not.toBeVisible();
```

Think:

```text
Positive
    ↓
Should exist / happen

Negative
    ↓
Should NOT exist / happen
```

---

# 39. Common Assertion Mistakes

## Mistake 1 — Performing actions without assertions

Weak test:

```js
await page.getByLabel('Username').fill('Lingaraj');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button', { name: 'Login' }).click();
```

Better:

```js
await page.getByLabel('Username').fill('Lingaraj');
await page.getByLabel('Password').fill('Password123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

---

# 40. Mistake 2 — Using the Wrong Assertion

If you want to verify an input's value:

Do not use:

```js
await expect(input).toHaveText('Lingaraj');
```

Prefer:

```js
await expect(input).toHaveValue('Lingaraj');
```

Remember:

```text
Input value → toHaveValue()

Element text → toHaveText()
```

---

# 41. Mistake 3 — Using `toHaveText()` for URL

Incorrect:

```js
await expect(page)
  .toHaveText('/dashboard');
```

Correct:

```js
await expect(page)
  .toHaveURL(/dashboard/);
```

---

# 42. Mistake 4 — Checking Visibility Instead of State

Suppose we need to verify a checkbox is checked.

Do not only check:

```js
await expect(checkbox)
  .toBeVisible();
```

This verifies visibility, not selection.

Use:

```js
await expect(checkbox)
  .toBeChecked();
```

---

# 43. Mistake 5 — Using Fixed Waits Instead of Assertions

Avoid:

```js
await page.waitForTimeout(5000);
```

just to wait for an element.

Prefer:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

---

# 44. Mistake 6 — Overusing Soft Assertions

Soft assertions are useful, but they should not replace normal assertions everywhere.

Use normal assertions when the test should stop if a critical condition fails.

Example:

```text
Login must succeed
      ↓
Dashboard must exist
      ↓
Continue test
```

If Dashboard does not appear, continuing may not make sense.

---

# 45. Best Practices

### 1. Every important user flow should have assertions

```text
Action → Expected result
```

### 2. Use the correct matcher

```text
Visibility → toBeVisible()
Text → toHaveText()
Partial text → toContainText()
Input value → toHaveValue()
URL → toHaveURL()
Title → toHaveTitle()
Checked → toBeChecked()
Enabled → toBeEnabled()
Disabled → toBeDisabled()
Attribute → toHaveAttribute()
Count → toHaveCount()
```

### 3. Prefer web-first assertions

Use Playwright's built-in assertions rather than manually polling or using fixed waits.

### 4. Verify business results

Do not verify only that a button was clicked.

Verify what the click actually achieved.

Example:

```text
Click Login
     ↓
Dashboard appears
```

The important assertion is:

```js
await expect(page.getByText('Dashboard'))
  .toBeVisible();
```

---

# 46. Important Assertion Methods

| Assertion | Purpose |
|---|---|
| `toBeVisible()` | Element is visible |
| `toBeHidden()` | Element is hidden |
| `toHaveText()` | Verify exact/expected text |
| `toContainText()` | Verify text is contained |
| `toHaveValue()` | Verify input value |
| `toHaveURL()` | Verify URL |
| `toHaveTitle()` | Verify page title |
| `toBeChecked()` | Verify checkbox/radio is checked |
| `toBeEnabled()` | Verify element is enabled |
| `toBeDisabled()` | Verify element is disabled |
| `toHaveAttribute()` | Verify an attribute |
| `toHaveCount()` | Verify number of elements |
| `not` | Verify the opposite condition |
| `expect.soft()` | Continue after assertion failure |

---

# 47. Assertion Cheat Sheet

```text
VISIBLE
→ toBeVisible()

HIDDEN
→ toBeHidden()

TEXT
→ toHaveText()

PARTIAL TEXT
→ toContainText()

INPUT VALUE
→ toHaveValue()

URL
→ toHaveURL()

TITLE
→ toHaveTitle()

CHECKED
→ toBeChecked()

ENABLED
→ toBeEnabled()

DISABLED
→ toBeDisabled()

ATTRIBUTE
→ toHaveAttribute()

COUNT
→ toHaveCount()

NEGATIVE
→ not

SOFT
→ expect.soft()
```

---

# 48. Interview Questions

## Q1. What is an assertion in Playwright?

Answer:

> An assertion verifies that the actual application state or result matches the expected result. Playwright provides the `expect()` API for performing assertions.

---

## Q2. Why are assertions important in automation?

Answer:

> Assertions validate the actual behavior of the application. Without assertions, an automation script may perform actions but cannot reliably confirm whether the expected result was achieved.

---

## Q3. What is the difference between `toHaveText()` and `toContainText()`?

Answer:

> `toHaveText()` verifies the expected text of an element, while `toContainText()` verifies that the specified text is present within the element's text.

---

## Q4. How do you verify an input value?

Answer:

```js
await expect(page.getByLabel('Username'))
  .toHaveValue('Lingaraj');
```

---

## Q5. How do you verify the current URL?

Answer:

```js
await expect(page)
  .toHaveURL(/dashboard/);
```

---

## Q6. How do you verify the page title?

Answer:

```js
await expect(page)
  .toHaveTitle(/Dashboard/);
```

---

## Q7. How do you verify that an element is visible?

Answer:

```js
await expect(locator)
  .toBeVisible();
```

---

## Q8. How do you verify that a checkbox is selected?

Answer:

```js
await expect(checkbox)
  .toBeChecked();
```

---

## Q9. What is a soft assertion?

Answer:

> A soft assertion allows the test to continue executing after an assertion failure, so multiple verification failures can be collected within the same test.

Example:

```js
await expect.soft(locator)
  .toBeVisible();
```

---

## Q10. Why are Playwright assertions useful for dynamic applications?

Answer:

> Playwright's web-first assertions automatically wait and retry for the expected condition, which helps synchronize tests with dynamic web applications and reduces unnecessary fixed waits.

---

# 49. Quick Revision

```text
ACTION
  ↓
Do something

ASSERTION
  ↓
Verify something
```

Main pattern:

```js
await expect(locator).matcher();
```

Examples:

```js
await expect(locator).toBeVisible();

await expect(locator).toHaveText('Dashboard');

await expect(locator).toHaveValue('Lingaraj');

await expect(page).toHaveURL(/dashboard/);

await expect(page).toHaveTitle(/Dashboard/);

await expect(checkbox).toBeChecked();

await expect(button).toBeEnabled();

await expect(button).toBeDisabled();
```

Negative:

```js
await expect(locator).not.toBeVisible();
```

Soft:

```js
await expect.soft(locator).toBeVisible();
```

---

# 50. Easy Memory Trick

Remember:

```text
SEE       → toBeVisible()
TEXT      → toHaveText()
CONTAIN   → toContainText()
VALUE     → toHaveValue()
URL       → toHaveURL()
TITLE     → toHaveTitle()
CHECK     → toBeChecked()
ENABLE    → toBeEnabled()
DISABLE   → toBeDisabled()
ATTRIBUTE → toHaveAttribute()
COUNT     → toHaveCount()
NOT       → not
SOFT      → expect.soft()
```

Easy sentence:

> **See → Text → Value → URL → Title → Check → Enable → Attribute → Count**

---

# 51. Final Definition

> **Assertions in Playwright are verification statements used to compare the actual state or behavior of a web application with the expected result. Playwright uses `expect()` and different matchers such as `toBeVisible()`, `toHaveText()`, `toHaveValue()`, `toHaveURL()`, and `toBeChecked()` to validate application behavior.**

---

# 52. One-Line Interview Summary

> **I use Playwright's `expect()` assertions to verify application behavior, such as element visibility, text, input values, URL, title, checkbox state, enabled/disabled state, attributes, and element count, with web-first assertions providing automatic waiting and retrying.**

---

# 53. Final Example to Remember

```js
const { test, expect } = require('@playwright/test');

test('Complete Assertion Example', async ({ page }) => {

  await page.goto('https://example.com/login');

  // Verify page title
  await expect(page)
    .toHaveTitle(/Login/);

  // Verify fields are visible
  await expect(page.getByLabel('Username'))
    .toBeVisible();

  await expect(page.getByLabel('Password'))
    .toBeVisible();

  // Enter data
  await page.getByLabel('Username')
    .fill('Lingaraj');

  await page.getByLabel('Password')
    .fill('Password123');

  // Verify input value
  await expect(page.getByLabel('Username'))
    .toHaveValue('Lingaraj');

  // Login
  await page.getByRole('button', { name: 'Login' })
    .click();

  // Verify URL
  await expect(page)
    .toHaveURL(/dashboard/);

  // Verify Dashboard
  await expect(page.getByText('Dashboard'))
    .toBeVisible();

  // Verify error is not visible
  await expect(page.getByText('Invalid username or password'))
    .not.toBeVisible();
});
```

## Final Mental Model

```text
PLAYWRIGHT TEST
      |
      +-- ACTION
      |     |
      |     +-- fill()
      |     +-- click()
      |     +-- check()
      |     +-- selectOption()
      |
      +-- ASSERTION
            |
            +-- Visible?
            +-- Text correct?
            +-- Value correct?
            +-- URL correct?
            +-- Title correct?
            +-- Checked?
            +-- Enabled?
            +-- Attribute correct?
            +-- Count correct?
```

> **Actions perform the test. Assertions prove that the test passed.**