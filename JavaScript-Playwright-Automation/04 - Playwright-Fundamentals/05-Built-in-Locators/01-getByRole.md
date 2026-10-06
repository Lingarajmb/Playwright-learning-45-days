# Concept 10 — getByRole()

## 1. What is `getByRole()`?

`getByRole()` is a Playwright built-in locator used to find elements based on their **accessible role**.

In simple words:

> `getByRole()` identifies an element based on what the element represents to the user.

For example:

```js
page.getByRole('button', { name: 'Login' })
```

This means:

> Find the element whose role is `button` and whose accessible name is `Login`.

Example HTML:

```html
<button>Login</button>
```

Playwright locator:

```js
const loginButton = page.getByRole('button', { name: 'Login' });
```

Then:

```js
await loginButton.click();
```

---

# 2. Why Do We Use `getByRole()`?

A major reason is **reliable and user-focused element identification**.

Instead of depending heavily on HTML structure:

```js
page.locator('div.login-container > button')
```

we can identify the element by its role:

```js
page.getByRole('button', { name: 'Login' })
```

This makes the test:

- More readable
- More meaningful
- Easier to understand
- More aligned with how users interact with the application
- Less dependent on complicated DOM structure

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

Anyone reading the test can understand:

> Click the Login button.

---

# 3. What is an Accessible Role?

A role describes what an element represents.

Common roles include:

```text
button
textbox
link
checkbox
radio
combobox
heading
list
listitem
dialog
tab
menu
```

For example:

```html
<button>Login</button>
```

has a role similar to:

```text
button
```

A link:

```html
<a href="/profile">Profile</a>
```

has a role:

```text
link
```

A checkbox:

```html
<input type="checkbox">
```

has a role:

```text
checkbox
```

Therefore:

```js
page.getByRole('button')
```

can locate buttons.

```js
page.getByRole('link')
```

can locate links.

```js
page.getByRole('checkbox')
```

can locate checkboxes.

---

# 4. Basic Syntax

The basic syntax is:

```js
page.getByRole('role');
```

Example:

```js
const loginButton = page.getByRole('button');
```

We can make it more specific by providing the accessible name:

```js
const loginButton = page.getByRole('button', {
  name: 'Login'
});
```

The commonly used syntax is:

```js
page.getByRole('role', { name: 'accessible name' });
```

---

# 5. Why is the `name` Important?

Suppose a page contains:

```html
<button>Login</button>
<button>Cancel</button>
<button>Register</button>
```

If we write:

```js
page.getByRole('button')
```

there are multiple buttons.

Playwright cannot know which button we want.

Instead:

```js
page.getByRole('button', { name: 'Login' })
```

specifically identifies:

```text
Role  = button
Name  = Login
```

This makes the locator more specific.

---

# 6. Simple Example

HTML:

```html
<button>Login</button>
```

Playwright:

```js
const loginButton = page.getByRole('button', {
  name: 'Login'
});

await loginButton.click();
```

The flow is:

```text
Web Element
    ↓
<button>Login</button>
    ↓
Role = button
Name = Login
    ↓
getByRole()
    ↓
Locator
    ↓
click()
```

---

# 7. Common `getByRole()` Examples

## Button

```js
page.getByRole('button', { name: 'Login' });
```

## Link

```js
page.getByRole('link', { name: 'Profile' });
```

## Checkbox

```js
page.getByRole('checkbox', { name: 'Remember me' });
```

## Radio button

```js
page.getByRole('radio', { name: 'Male' });
```

## Heading

```js
page.getByRole('heading', { name: 'Dashboard' });
```

## Textbox

```js
page.getByRole('textbox', { name: 'Username' });
```

## Dialog

```js
page.getByRole('dialog');
```

---

# 8. `getByRole()` with a Button

Suppose the page contains:

```html
<button>Login</button>
```

Use:

```js
const loginButton = page.getByRole('button', {
  name: 'Login'
});

await loginButton.click();
```

This is much easier to understand than a complicated CSS selector.

---

# 9. `getByRole()` with a Link

HTML:

```html
<a href="/dashboard">Dashboard</a>
```

Locator:

```js
const dashboardLink = page.getByRole('link', {
  name: 'Dashboard'
});
```

Click:

```js
await dashboardLink.click();
```

---

# 10. `getByRole()` with a Checkbox

HTML:

```html
<label>
  <input type="checkbox">
  Remember me
</label>
```

Locator:

```js
const rememberMe = page.getByRole('checkbox', {
  name: 'Remember me'
});
```

Action:

```js
await rememberMe.check();
```

Assertion:

```js
await expect(rememberMe).toBeChecked();
```

---

# 11. `getByRole()` with a Radio Button

HTML:

```html
<label>
  <input type="radio" name="gender">
  Male
</label>
```

Locator:

```js
const maleRadio = page.getByRole('radio', {
  name: 'Male'
});
```

Action:

```js
await maleRadio.check();
```

---

# 12. `getByRole()` with a Heading

HTML:

```html
<h1>Dashboard</h1>
```

Locator:

```js
const dashboardHeading = page.getByRole('heading', {
  name: 'Dashboard'
});
```

Assertion:

```js
await expect(dashboardHeading).toBeVisible();
```

---

# 13. `getByRole()` with a Textbox

Suppose the page contains:

```html
<label for="username">Username</label>
<input id="username" type="text">
```

A role-based locator can be:

```js
const username = page.getByRole('textbox', {
  name: 'Username'
});
```

Then:

```js
await username.fill('testuser');
```

However, when a proper label is available, `getByLabel()` is also a natural choice.

We will learn `getByLabel()` separately.

---

# 14. `getByRole()` and Accessible Name

The `name` option generally refers to the element's **accessible name**, not necessarily the HTML `name` attribute.

For example:

```html
<button>Login</button>
```

The button's accessible name is:

```text
Login
```

Therefore:

```js
page.getByRole('button', { name: 'Login' });
```

is valid.

Do not confuse:

```text
accessible name
```

with:

```html
name="..."
```

attribute.

They are not the same concept.

---

# 15. Case Sensitivity

By default, matching can be exact depending on how the locator is used.

Example:

```js
page.getByRole('button', { name: 'Login' });
```

If you need case-insensitive or pattern-based matching, a regular expression can be used.

Example:

```js
page.getByRole('button', { name: /login/i });
```

This can match text such as:

```text
Login
LOGIN
login
```

The `/i` means case-insensitive matching.

---

# 16. Exact Matching

You can also use:

```js
exact: true
```

Example:

```js
page.getByRole('button', {
  name: 'Login',
  exact: true
});
```

This tells Playwright to look for an exact accessible name.

This can be useful when multiple elements have similar names.

---

# 17. `getByRole()` and Actions

A locator created using `getByRole()` can be used for actions.

Example:

```js
const loginButton = page.getByRole('button', {
  name: 'Login'
});

await loginButton.click();
```

Other examples:

```js
await page.getByRole('checkbox', {
  name: 'Remember me'
}).check();
```

```js
await page.getByRole('radio', {
  name: 'Male'
}).check();
```

```js
await page.getByRole('link', {
  name: 'Profile'
}).click();
```

---

# 18. `getByRole()` and Assertions

We can also use `getByRole()` locators with assertions.

Example:

```js
const loginButton = page.getByRole('button', {
  name: 'Login'
});

await expect(loginButton).toBeVisible();
```

Another example:

```js
const dashboardHeading = page.getByRole('heading', {
  name: 'Dashboard'
});

await expect(dashboardHeading).toHaveText('Dashboard');
```

---

# 19. Real-Time QA Example — Login

Imagine a banking application:

```text
--------------------------------
        Banking Portal
--------------------------------

Username: [____________]

Password: [____________]

☐ Remember me

       [ Login ]

--------------------------------
```

Test:

```js
const { test, expect } = require('@playwright/test');

test('Verify login button', async ({ page }) => {

  await page.goto('https://example.com/login');

  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  await expect(loginButton).toBeVisible();

  await loginButton.click();
});
```

The locator clearly communicates the requirement:

```text
Find the button named Login
```

---

# 20. Real-Time QA Example — E-Commerce

Suppose an e-commerce application has:

```text
Product: Laptop

[ Add to Cart ]
```

The HTML might contain:

```html
<button>Add to Cart</button>
```

Locator:

```js
const addToCart = page.getByRole('button', {
  name: 'Add to Cart'
});
```

Action:

```js
await addToCart.click();
```

Verification:

```js
await expect(
  page.getByRole('button', { name: 'Remove from Cart' })
).toBeVisible();
```

---

# 21. Multiple Buttons

Suppose a page contains:

```text
[Login]
[Cancel]
[Register]
```

This:

```js
page.getByRole('button')
```

can identify buttons, but there are multiple matches.

Better:

```js
page.getByRole('button', { name: 'Login' });
```

For Cancel:

```js
page.getByRole('button', { name: 'Cancel' });
```

For Register:

```js
page.getByRole('button', { name: 'Register' });
```

The name makes the locator specific.

---

# 22. `getByRole()` vs `page.locator()`

Both can be used to identify elements.

Example using `locator()`:

```js
page.locator('#login');
```

Example using `getByRole()`:

```js
page.getByRole('button', { name: 'Login' });
```

### Difference

`locator()` can use selectors such as CSS.

```js
page.locator('#login');
```

`getByRole()` identifies an element using its accessible role and accessible name.

```js
page.getByRole('button', { name: 'Login' });
```

### Simple memory

```text
locator()
    ↓
Selector-based identification

getByRole()
    ↓
Role + accessible name
```

CSS and XPath selectors will be covered later in the locator roadmap.

---

# 23. Why `getByRole()` Is Often Preferred

Consider:

```js
page.locator('div.login-container > button');
```

A developer may change the HTML structure:

```text
div
 └── div
      └── button
```

to:

```text
section
 └── div
      └── button
```

The locator may break.

But if the user-facing role and name remain:

```text
Login button
```

then:

```js
page.getByRole('button', { name: 'Login' });
```

can remain meaningful and stable.

The important principle is:

> Prefer locators based on stable user-facing behavior when possible.

---

# 24. Common Mistakes

## Mistake 1 — Using only the role when multiple elements exist

Example:

```js
page.getByRole('button').click();
```

If there are multiple buttons, the locator is ambiguous.

Better:

```js
page.getByRole('button', { name: 'Login' }).click();
```

---

## Mistake 2 — Confusing role with HTML tag

Do not simply think:

```text
role = HTML tag
```

For many common elements they correspond naturally, but accessible roles are about the element's semantic meaning and accessibility tree.

---

## Mistake 3 — Confusing accessible name with HTML `name`

For example:

```html
<button name="loginButton">Login</button>
```

The accessible name may be:

```text
Login
```

not:

```text
loginButton
```

So:

```js
page.getByRole('button', { name: 'Login' });
```

is the relevant role-based locator.

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

## Mistake 5 — Using complicated selectors unnecessarily

Avoid immediately using:

```js
page.locator('div > div:nth-child(2) > button');
```

when a clear role-based locator is available:

```js
page.getByRole('button', { name: 'Login' });
```

---

# 25. Important Roles to Remember

For interviews and daily automation, remember these common roles:

```text
button
link
textbox
checkbox
radio
combobox
heading
dialog
list
listitem
tab
menu
```

You do not need to memorize every possible ARIA role at this stage.

Focus first on the roles commonly encountered in web applications.

---

# 26. Complete Example

```js
const { test, expect } = require('@playwright/test');

test('Verify login page', async ({ page }) => {

  await page.goto('https://example.com/login');

  const username = page.getByRole('textbox', {
    name: 'Username'
  });

  const password = page.getByRole('textbox', {
    name: 'Password'
  });

  const rememberMe = page.getByRole('checkbox', {
    name: 'Remember me'
  });

  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  await username.fill('testuser');

  await password.fill('Password123');

  await rememberMe.check();

  await expect(loginButton).toBeVisible();

  await loginButton.click();
});
```

The test is readable almost like a manual test case:

```text
Find Username textbox
      ↓
Enter username

Find Password textbox
      ↓
Enter password

Find Remember Me checkbox
      ↓
Check checkbox

Find Login button
      ↓
Verify visible
      ↓
Click Login
```

---

# 27. Interview Questions

## Q1. What is `getByRole()` in Playwright?

`getByRole()` is a built-in Playwright locator used to identify elements based on their accessible role and, optionally, accessible name.

---

## Q2. Give an example of `getByRole()`.

```js
page.getByRole('button', { name: 'Login' });
```

This identifies a button with the accessible name `Login`.

---

## Q3. Why do we use the `name` option?

The `name` option makes the locator more specific by identifying the element using its accessible name.

---

## Q4. What is an accessible role?

An accessible role describes the semantic purpose of an element, such as:

```text
button
link
checkbox
textbox
radio
heading
```

---

## Q5. What is the difference between `getByRole()` and `locator()`?

`getByRole()` identifies elements using their accessible role and name.

`locator()` can identify elements using selectors such as CSS.

Example:

```js
page.getByRole('button', { name: 'Login' });
```

```js
page.locator('#login');
```

---

## Q6. Why is `getByRole()` useful in automation?

It creates readable, user-focused locators and can reduce dependency on fragile DOM structure.

---

## Q7. What happens if `getByRole('button')` matches multiple buttons?

The locator may be ambiguous for an action requiring a single element. We should make the locator more specific, for example:

```js
page.getByRole('button', { name: 'Login' });
```

---

## Q8. Can `getByRole()` be used with assertions?

Yes.

Example:

```js
await expect(
  page.getByRole('button', { name: 'Login' })
).toBeVisible();
```

---

# 28. Quick Revision

### Basic syntax

```js
page.getByRole('role');
```

### Role + name

```js
page.getByRole('button', {
  name: 'Login'
});
```

### Click

```js
await page.getByRole('button', {
  name: 'Login'
}).click();
```

### Assertion

```js
await expect(
  page.getByRole('button', {
    name: 'Login'
  })
).toBeVisible();
```

### Common roles

```text
button
link
textbox
checkbox
radio
combobox
heading
dialog
tab
```

---

# 29. Easy Memory Trick

Remember:

```text
ROLE + NAME = getByRole()
```

For example:

```text
Button + Login
      ↓
getByRole('button', { name: 'Login' })
```

Think like a QA tester:

> "I want the Login button."

Playwright:

```js
page.getByRole('button', { name: 'Login' });
```

So remember:

```text
What is it?
    ↓
ROLE

Which one?
    ↓
NAME
```

---

# 30. Final Definition

> **`getByRole()` is a Playwright built-in locator used to find elements by their accessible role and accessible name, making locators readable, user-focused, and easier to maintain.**

Most important syntax:

```js
page.getByRole('button', { name: 'Login' });
```

Remember:

```text
getByRole()
     ↓
Role
     +
Accessible Name
     ↓
Specific Element
     ↓
Action / Assertion
```

Next concept:

```text
Concept 11 — getByText()
```

File:

```text
04 - Playwright-Fundamentals/
└── 05-Built-in-Locators/
    └── 02-getByText.md
```