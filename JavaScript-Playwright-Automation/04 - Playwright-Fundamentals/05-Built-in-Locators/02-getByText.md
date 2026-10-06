# Concept 11 — getByText()

## 1. What is `getByText()`?

`getByText()` is a Playwright built-in locator used to find an element based on the **text visible on the page**.

In simple words:

> `getByText()` tells Playwright: **Find the element containing this text.**

Example:

```js
const welcomeMessage = page.getByText('Welcome');
```

If the page contains:

```html
<h1>Welcome</h1>
```

Playwright can find that element using:

```js
page.getByText('Welcome');
```

---

# 2. Why Do We Use `getByText()`?

Web applications contain many elements identified by visible text.

For example:

```text
Login
Logout
Welcome
Dashboard
Profile
Settings
Order placed successfully
Payment successful
```

Sometimes we want to verify or interact with an element based on the text displayed to the user.

Example:

```js
await expect(page.getByText('Login successful')).toBeVisible();
```

This is very readable.

It clearly tells the tester:

> Verify that "Login successful" is displayed.

---

# 3. Basic Syntax

The basic syntax is:

```js
page.getByText('text');
```

Example:

```js
const message = page.getByText('Login successful');
```

Then we can use the locator:

```js
await expect(message).toBeVisible();
```

Or:

```js
await message.click();
```

if the matching element is clickable.

---

# 4. Simple Example

Suppose the page contains:

```html
<h1>Welcome to Dashboard</h1>
```

We can locate it using:

```js
const heading = page.getByText('Welcome to Dashboard');
```

Then verify:

```js
await expect(heading).toBeVisible();
```

The flow is:

```text
Visible Text
     ↓
"Welcome to Dashboard"
     ↓
getByText()
     ↓
Locator
     ↓
Assertion
```

---

# 5. `getByText()` Finds Text Visible to the User

Consider:

```html
<p>Login successful</p>
```

We can use:

```js
page.getByText('Login successful');
```

The locator is based on the text:

```text
Login successful
```

This makes the test easy to understand.

---

# 6. `getByText()` with an Assertion

One of the most common uses of `getByText()` is verifying messages.

Example:

```js
const successMessage = page.getByText('Login successful');

await expect(successMessage).toBeVisible();
```

Another example:

```js
await expect(
  page.getByText('Payment successful')
).toBeVisible();
```

This is especially useful for QA validation.

---

# 7. Real-Time QA Example — Login Success Message

Suppose a login application displays:

```text
Login successful
Welcome back, Lingaraj
```

After clicking Login:

```js
await page.getByRole('button', {
  name: 'Login'
}).click();
```

Verify the message:

```js
await expect(
  page.getByText('Login successful')
).toBeVisible();
```

The complete flow:

```text
Enter username
      ↓
Enter password
      ↓
Click Login
      ↓
Application processes login
      ↓
"Login successful"
      ↓
getByText()
      ↓
Verify message
```

---

# 8. `getByText()` for Error Messages

Suppose invalid credentials produce:

```text
Invalid username or password
```

Test:

```js
await expect(
  page.getByText('Invalid username or password')
).toBeVisible();
```

This is a very common real-world QA scenario.

Examples of messages we might verify:

```text
Invalid username or password
Email is required
Password is required
Payment failed
Order placed successfully
Profile updated successfully
```

---

# 9. `getByText()` for Links or Clickable Text

Suppose the page contains:

```html
<a href="/profile">Profile</a>
```

We can potentially locate it by text:

```js
const profile = page.getByText('Profile');
```

Then:

```js
await profile.click();
```

However, when the element is clearly a link, the more semantic locator is usually:

```js
page.getByRole('link', { name: 'Profile' });
```

The important point is:

> `getByText()` is based on text, while `getByRole()` is based on role + accessible name.

---

# 10. `getByText()` vs `getByRole()`

Consider:

```html
<button>Login</button>
```

Using `getByRole()`:

```js
page.getByRole('button', {
  name: 'Login'
});
```

Using `getByText()`:

```js
page.getByText('Login');
```

Both may identify the Login text/button, but they express different intentions.

### `getByRole()`

Means:

> Find the button named Login.

### `getByText()`

Means:

> Find the element containing the text Login.

Therefore, when the element's semantic role is important, `getByRole()` is often clearer.

When the main thing you care about is visible text, `getByText()` can be useful.

---

# 11. Text Matching

`getByText()` can match text in different situations.

Example:

```js
page.getByText('Welcome');
```

If the page contains:

```text
Welcome
```

it can locate the matching text.

For longer text:

```js
page.getByText('Welcome to the Banking Portal');
```

can locate that visible text.

---

# 12. Exact Text Matching

You can use the `exact` option when you want an exact text match.

Example:

```js
page.getByText('Login', {
  exact: true
});
```

This is useful when the page contains similar text.

For example:

```text
Login
Login to continue
Login successful
```

If you want specifically:

```text
Login
```

you can use:

```js
page.getByText('Login', {
  exact: true
});
```

---

# 13. Regular Expressions with `getByText()`

You can also use a regular expression.

Example:

```js
page.getByText(/login successful/i);
```

Here:

```text
/login successful/i
```

means the text matching `login successful`, without caring about letter case.

It can match:

```text
Login successful
LOGIN SUCCESSFUL
login successful
```

This can be useful when the exact capitalization may vary.

---

# 14. Partial Text Matching

Sometimes we may want to identify text based on part of a message.

Example:

```text
Order #12345 placed successfully
```

We may want to verify the success message without depending on the dynamic order number.

A text-based pattern can be useful:

```js
page.getByText(/placed successfully/i);
```

Then:

```js
await expect(
  page.getByText(/placed successfully/i)
).toBeVisible();
```

This is useful when part of the text is dynamic.

---

# 15. Dynamic Text Example

Suppose the application displays:

```text
Welcome, Lingaraj
```

The username may change for different test users.

Instead of depending on the complete text:

```js
page.getByText('Welcome, Lingaraj');
```

we can use a pattern if the requirement is to verify the Welcome message:

```js
page.getByText(/Welcome,/i);
```

This can make the locator less dependent on the dynamic username.

Use this carefully so the locator does not become too broad.

---

# 16. `getByText()` and Assertions

Common assertions include:

```js
await expect(
  page.getByText('Login successful')
).toBeVisible();
```

```js
await expect(
  page.getByText('Error')
).toBeHidden();
```

You can also use:

```js
await expect(
  page.getByText('Order placed successfully')
).toHaveText('Order placed successfully');
```

The exact assertion should match what you want to verify.

---

# 17. `getByText()` and Auto-Waiting

`getByText()` creates a Playwright locator.

When used with an action or assertion, Playwright can use its auto-waiting behavior.

Example:

```js
await expect(
  page.getByText('Payment successful')
).toBeVisible();
```

If the message appears after the payment request finishes, Playwright can wait for the expected condition within the configured timeout.

This helps avoid unnecessary fixed waits.

Avoid:

```js
await page.waitForTimeout(5000);

await expect(
  page.getByText('Payment successful')
).toBeVisible();
```

Prefer:

```js
await expect(
  page.getByText('Payment successful')
).toBeVisible();
```

---

# 18. `getByText()` for Toast Messages

Many applications display temporary notification messages called toast messages.

Example:

```text
Profile updated successfully
```

Playwright:

```js
await expect(
  page.getByText('Profile updated successfully')
).toBeVisible();
```

This is a very common automation use case.

Other examples:

```text
Saved successfully
File uploaded successfully
Password changed successfully
Order cancelled successfully
```

---

# 19. Real-Time QA Example — Profile Update

Suppose a user changes their profile information.

Test:

```js
await page.getByRole('button', {
  name: 'Save'
}).click();
```

Application displays:

```text
Profile updated successfully
```

Verification:

```js
await expect(
  page.getByText('Profile updated successfully')
).toBeVisible();
```

Complete flow:

```text
Change profile
      ↓
Click Save
      ↓
Application saves data
      ↓
Toast message appears
      ↓
"Profile updated successfully"
      ↓
Verify using getByText()
```

---

# 20. Real-Time QA Example — E-Commerce Order

Suppose the user places an order.

```js
await page.getByRole('button', {
  name: 'Place Order'
}).click();
```

Application displays:

```text
Order placed successfully
```

Verify:

```js
await expect(
  page.getByText('Order placed successfully')
).toBeVisible();
```

This is a clean and readable QA automation test.

---

# 21. Multiple Matching Texts

Sometimes the same text appears more than once.

Example:

```text
Save
Save
```

If we use:

```js
page.getByText('Save')
```

there may be multiple matches.

This can make an action ambiguous.

The solution is to make the locator more specific or use a more appropriate locator strategy.

For example, if the element is a button:

```js
page.getByRole('button', {
  name: 'Save'
});
```

If there are still multiple matching buttons, we need to identify the correct one using more specific locator techniques.

Advanced filtering and chaining will be covered later in the locator roadmap.

---

# 22. `getByText()` Is Not Always the Best Locator

Do not automatically use `getByText()` for every element.

Example:

```html
<button>Login</button>
```

Instead of:

```js
page.getByText('Login');
```

a role-based locator is usually more descriptive:

```js
page.getByRole('button', {
  name: 'Login'
});
```

Why?

Because it communicates:

```text
This is a button
+
Its accessible name is Login
```

Whereas:

```js
page.getByText('Login');
```

only communicates:

```text
Find text Login
```

---

# 23. When Should We Use `getByText()`?

Good use cases include:

### 1. Success messages

```js
page.getByText('Payment successful');
```

### 2. Error messages

```js
page.getByText('Invalid credentials');
```

### 3. Notifications

```js
page.getByText('Profile updated successfully');
```

### 4. Visible informational text

```js
page.getByText('No records found');
```

### 5. Dynamic messages

```js
page.getByText(/Order .* placed successfully/i);
```

The main idea:

> Use `getByText()` when the visible text itself is an important part of what you want to locate or verify.

---

# 24. Common Mistakes

## Mistake 1 — Using text when a better semantic locator exists

For a button:

```js
page.getByText('Login');
```

A clearer choice may be:

```js
page.getByRole('button', {
  name: 'Login'
});
```

---

## Mistake 2 — Using overly broad text

Example:

```js
page.getByText('success');
```

If many elements contain the word `success`, the locator may match more elements than expected.

Prefer a more meaningful text:

```js
page.getByText('Payment successful');
```

---

## Mistake 3 — Ignoring dynamic text

Suppose the application displays:

```text
Order #45872 placed successfully
```

Using:

```js
page.getByText('Order #45872 placed successfully');
```

may fail for another order.

A pattern may be more suitable:

```js
page.getByText(/placed successfully/i);
```

---

## Mistake 4 — Forgetting `await`

Incorrect:

```js
message.isVisible();
```

Correct:

```js
await expect(message).toBeVisible();
```

---

## Mistake 5 — Using fixed waits

Avoid:

```js
await page.waitForTimeout(3000);
```

just because a message is expected to appear.

Prefer an assertion:

```js
await expect(
  page.getByText('Payment successful')
).toBeVisible();
```

---

# 25. Complete Real-Time Example

```js
const { test, expect } = require('@playwright/test');

test('Verify successful profile update', async ({ page }) => {

  await page.goto('https://example.com/profile');

  const saveButton = page.getByRole('button', {
    name: 'Save'
  });

  await saveButton.click();

  const successMessage = page.getByText(
    'Profile updated successfully'
  );

  await expect(successMessage).toBeVisible();
});
```

### Flow:

```text
Open Profile
     ↓
Find Save button
     ↓
Click Save
     ↓
Application updates profile
     ↓
Success message appears
     ↓
Find message using getByText()
     ↓
Verify message
```

---

# 26. Important Syntax

Basic:

```js
page.getByText('text');
```

Exact:

```js
page.getByText('Login', {
  exact: true
});
```

Regular expression:

```js
page.getByText(/login successful/i);
```

With assertion:

```js
await expect(
  page.getByText('Login successful')
).toBeVisible();
```

With action:

```js
await page.getByText('Profile').click();
```

---

# 27. Interview Questions

## Q1. What is `getByText()`?

`getByText()` is a Playwright built-in locator used to identify elements based on visible text.

---

## Q2. Give an example.

```js
page.getByText('Login successful');
```

This locates an element containing the specified text.

---

## Q3. Where is `getByText()` commonly used?

It is commonly used for:

- Success messages
- Error messages
- Toast messages
- Notifications
- Informational text
- User-visible messages

---

## Q4. What is the difference between `getByText()` and `getByRole()`?

`getByText()` locates elements based on visible text.

```js
page.getByText('Login');
```

`getByRole()` locates elements based on accessible role and accessible name.

```js
page.getByRole('button', {
  name: 'Login'
});
```

---

## Q5. Can we use regular expressions with `getByText()`?

Yes.

Example:

```js
page.getByText(/payment successful/i);
```

---

## Q6. How do you perform exact text matching?

Use:

```js
page.getByText('Login', {
  exact: true
});
```

---

## Q7. What if multiple elements contain the same text?

The locator may match multiple elements. We should make the locator more specific or use a more appropriate locator such as `getByRole()`.

---

## Q8. Can `getByText()` be used with assertions?

Yes.

Example:

```js
await expect(
  page.getByText('Order placed successfully')
).toBeVisible();
```

---

# 28. Quick Revision

```text
getByText()
     ↓
Find element using visible text
```

Basic:

```js
page.getByText('Login successful');
```

Exact:

```js
page.getByText('Login', {
  exact: true
});
```

Regex:

```js
page.getByText(/successful/i);
```

Assertion:

```js
await expect(
  page.getByText('Payment successful')
).toBeVisible();
```

Common use:

```text
Success message
Error message
Toast message
Notification
Information text
```

---

# 29. Easy Memory Trick

Remember:

```text
getByText()
     ↓
"What does the user SEE?"
     ↓
Visible Text
```

For example:

```text
User sees:
"Payment successful"
        ↓
getByText()
        ↓
page.getByText('Payment successful')
```

Simple memory:

```text
ROLE → What type of element?
TEXT → What text does the user see?
```

Example:

```js
getByRole('button', { name: 'Login' })
```

means:

> Find the Login button.

```js
getByText('Login successful')
```

means:

> Find the text "Login successful".

---

# 30. Final Definition

> **`getByText()` is a Playwright built-in locator used to find elements based on the text visible to the user. It is especially useful for validating messages, notifications, errors, success messages, and other user-visible content.**

Most important syntax:

```js
page.getByText('Login successful');
```

Remember:

```text
getByText()
     ↓
Visible Text
     ↓
Locator
     ↓
Action / Assertion
```

Next concept:

```text
Concept 12 — getByLabel()
```

File:

```text
04 - Playwright-Fundamentals/
└── 05-Built-in-Locators/
    └── 03-getByLabel.md
```