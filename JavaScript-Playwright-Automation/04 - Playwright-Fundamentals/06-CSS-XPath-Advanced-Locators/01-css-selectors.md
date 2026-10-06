# Concept 16 — CSS Selectors

## 1. What is a CSS Selector?

A CSS selector is a pattern used to identify HTML elements.

Playwright can use CSS selectors through:

```js
page.locator('selector');
```

In simple words:

> A CSS selector tells Playwright which HTML element or elements to find.

Example HTML:

```html
<input id="username">
```

CSS selector:

```css
#username
```

Playwright:

```js
const username = page.locator('#username');
```

---

# 2. Why Do We Need CSS Selectors?

In real automation projects, every application does not provide perfect:

- Roles
- Labels
- Placeholders
- Test IDs
- Visible text

Sometimes we need to identify elements using their HTML attributes or structure.

For example:

```html
<input id="username">
```

We can use:

```js
page.locator('#username');
```

CSS selectors are especially useful when:

- An element has a stable ID
- An element has a stable class
- A custom attribute is available
- We need to combine multiple conditions
- We need to locate elements using CSS structure
- Built-in locators are not suitable

---

# 3. Basic CSS Selector Syntax

The basic Playwright syntax is:

```js
page.locator('CSS_SELECTOR');
```

Example:

```js
page.locator('#username');
```

Here:

```text
page
 ↓
locator()
 ↓
CSS selector
 ↓
Element
```

---

# 4. CSS ID Selector

Suppose HTML is:

```html
<input id="username">
```

The CSS ID selector is:

```css
#username
```

Playwright:

```js
const username = page.locator('#username');
```

Action:

```js
await username.fill('testuser');
```

### Memory trick

```text
# → ID
```

Example:

```js
page.locator('#username');
page.locator('#password');
page.locator('#login');
```

---

# 5. CSS Class Selector

Suppose HTML is:

```html
<button class="login-button">
  Login
</button>
```

The CSS class selector is:

```css
.login-button
```

Playwright:

```js
const loginButton = page.locator('.login-button');
```

Action:

```js
await loginButton.click();
```

### Memory trick

```text
. → Class
```

Example:

```js
page.locator('.login-button');
page.locator('.submit-button');
```

---

# 6. Element / Tag Selector

We can select an element using its HTML tag.

Example:

```html
button>Login</button>
```

CSS selector:

```css
button
```

Playwright:

```js
const buttons = page.locator('button');
```

This identifies button elements.

However, if the page contains several buttons, this locator may match multiple elements.

Therefore, a more specific selector may be required.

---

# 7. ID vs Class vs Element Selector

Consider:

```html
<input id="username" class="form-input">
```

We can identify it in several ways.

### ID

```js
page.locator('#username');
```

### Class

```js
page.locator('.form-input');
```

### Element

```js
page.locator('input');
```

Among these, the ID may be more specific if it is unique and stable.

The important QA principle is:

> Prefer the most stable selector that uniquely identifies the intended element.

---

# 8. Attribute Selector

CSS allows us to select elements based on attributes.

Example:

```html
<input
  type="email"
  name="email"
>
```

CSS:

```css
input[name="email"]
```

Playwright:

```js
const email = page.locator(
  'input[name="email"]'
);
```

Then:

```js
await email.fill('test@example.com');
```

---

# 9. Attribute Selector Syntax

The general syntax is:

```css
[element][attribute="value"]
```

Example:

```css
input[name="username"]
```

HTML:

```html
<input
  type="text"
  name="username"
>
```

Playwright:

```js
page.locator('input[name="username"]');
```

---

# 10. Custom Attribute Selector

Suppose:

```html
<button data-action="login">
  Login
</button>
```

We can use:

```js
page.locator('[data-action="login"]');
```

Or:

```js
page.locator(
  'button[data-action="login"]'
);
```

The second selector is more specific because it also specifies the element type.

---

# 11. `data-testid` with CSS

Suppose:

```html
<button data-testid="login-button">
  Login
</button>
```

CSS selector:

```js
page.locator(
  '[data-testid="login-button"]'
);
```

However, since Playwright provides:

```js
page.getByTestId('login-button');
```

the built-in locator is usually more expressive when the application uses test IDs.

---

# 12. Multiple Classes

Suppose:

```html
<button class="btn primary login-button">
  Login
</button>
```

The element has three classes:

```text
btn
primary
login-button
```

We can use:

```css
.btn.primary.login-button
```

Playwright:

```js
page.locator(
  '.btn.primary.login-button'
);
```

This means:

> Find an element having all three classes.

---

# 13. Descendant Selector

Suppose:

```html
<div class="login-form">
  <button class="login-button">
    Login
  </button>
</div>
```

We can use:

```css
.login-form .login-button
```

Playwright:

```js
page.locator(
  '.login-form .login-button'
);
```

This means:

> Find `.login-button` inside `.login-form`.

---

# 14. Child Selector

CSS also supports direct child selection using:

```text
>
```

Example:

```html
<div class="login-form">
  <button class="login-button">
    Login
  </button>
</div>
```

Selector:

```css
.login-form > .login-button
```

Playwright:

```js
page.locator(
  '.login-form > .login-button'
);
```

The `>` means direct child.

---

# 15. Descendant vs Direct Child

### Descendant

```css
.login-form .login-button
```

Means:

> Find `.login-button` anywhere inside `.login-form`.

### Direct child

```css
.login-form > .login-button
```

Means:

> Find `.login-button` that is directly inside `.login-form`.

Memory:

```text
space
 ↓
Descendant

>
 ↓
Direct child
```

---

# 16. Multiple Conditions

CSS selectors can combine conditions.

Example:

```html
<input
  type="text"
  name="username"
  class="form-control"
>
```

Selector:

```css
input[type="text"][name="username"]
```

Playwright:

```js
const username = page.locator(
  'input[type="text"][name="username"]'
);
```

This is more specific than simply:

```js
page.locator('input');
```

---

# 17. CSS Selector with ID and Class

Example:

```html
<button
  id="login"
  class="primary-button"
>
  Login
</button>
```

Selector:

```css
#login.primary-button
```

Playwright:

```js
page.locator('#login.primary-button');
```

This means:

> Find the element with ID `login` and class `primary-button`.

---

# 18. CSS Selector with Attribute Starts With

CSS provides attribute matching operators.

For example:

```css
[data-testid^="login"]
```

The `^=` operator means:

> Attribute value starts with.

Example:

```html
<button data-testid="login-button">
  Login
</button>
```

Locator:

```js
page.locator(
  '[data-testid^="login"]'
);
```

This can match:

```text
login-button
login-link
login-submit
```

Use such patterns carefully so that the locator remains specific.

---

# 19. CSS Attribute Ends With

The `$=` operator means:

> Attribute value ends with.

Example:

```css
[data-testid$="button"]
```

This can match:

```text
login-button
submit-button
cancel-button
```

Playwright:

```js
page.locator(
  '[data-testid$="button"]'
);
```

---

# 20. CSS Attribute Contains

The `*=` operator means:

> Attribute value contains.

Example:

```css
[data-testid*="login"]
```

This can match values such as:

```text
login-button
user-login
login-submit
```

Playwright:

```js
page.locator(
  '[data-testid*="login"]'
);
```

Again, be careful about multiple matches.

---

# 21. CSS Selector with `:first-child`

CSS provides pseudo-classes.

Example:

```html
<ul>
  <li>Apple</li>
  <li>Orange</li>
  <li>Banana</li>
</ul>
```

Selector:

```css
li:first-child
```

Playwright:

```js
page.locator('li:first-child');
```

This identifies the first `li` that is the first child of its parent.

---

# 22. CSS Selector with `:last-child`

Example:

```css
li:last-child
```

Playwright:

```js
page.locator('li:last-child');
```

This identifies the last child matching the condition.

---

# 23. CSS `:nth-child()`

Example:

```css
li:nth-child(2)
```

Playwright:

```js
page.locator('li:nth-child(2)');
```

This identifies the second child.

Important:

```text
:nth-child(1)
:nth-child(2)
:nth-child(3)
```

are based on the element's position among its siblings.

Do not confuse this with Playwright's `nth()` locator method.

---

# 24. CSS Selector vs Playwright `nth()`

CSS:

```js
page.locator('li:nth-child(2)');
```

Playwright locator method:

```js
page.locator('li').nth(1);
```

Notice:

```text
CSS nth-child(2)
```

means the second child.

But:

```js
nth(1)
```

uses zero-based indexing:

```text
0 → first
1 → second
2 → third
```

This difference is important.

---

# 25. Why Avoid Overly Complex CSS?

Consider:

```js
page.locator(
  'div.container > div.row > div:nth-child(2) > button'
);
```

This depends heavily on the DOM structure.

If a developer adds a new `<div>`:

```text
Old structure
    ↓
New structure
    ↓
Locator may break
```

This is called a **brittle locator**.

Prefer:

```js
page.getByRole('button', {
  name: 'Login'
});
```

or a stable attribute:

```js
page.locator('[data-testid="login-button"]');
```

when appropriate.

---

# 26. Stable CSS Selector vs Brittle CSS Selector

### Stable

```js
page.locator('#username');
```

if the ID is stable.

### Stable

```js
page.locator(
  '[data-testid="login-button"]'
);
```

if the test ID is stable.

### Potentially brittle

```js
page.locator(
  'div > div:nth-child(3) > button'
);
```

The more a selector depends on exact DOM structure, the more maintenance it may require.

---

# 27. Real-Time QA Example — Login

HTML:

```html
<div class="login-form">

  <input
    id="username"
    type="text"
  >

  <input
    id="password"
    type="password"
  >

  <button
    class="login-button"
  >
    Login
  </button>

</div>
```

Playwright:

```js
const username = page.locator('#username');

const password = page.locator('#password');

const loginButton = page.locator(
  '.login-button'
);
```

Actions:

```js
await username.fill('testuser');

await password.fill('Password123');

await loginButton.click();
```

---

# 28. Real-Time QA Example — Search

HTML:

```html
<div class="search-container">

  <input
    class="search-input"
    type="text"
  >

  <button
    class="search-button"
  >
    Search
  </button>

</div>
```

Locators:

```js
const searchBox = page.locator(
  '.search-input'
);

const searchButton = page.locator(
  '.search-button'
);
```

Actions:

```js
await searchBox.fill('Laptop');

await searchButton.click();
```

---

# 29. Real-Time QA Example — Form

HTML:

```html
<form id="registration-form">

  <input
    name="firstName"
    type="text"
  >

  <input
    name="email"
    type="email"
  >

  <button type="submit">
    Register
  </button>

</form>
```

Locators:

```js
const firstName = page.locator(
  '#registration-form input[name="firstName"]'
);

const email = page.locator(
  '#registration-form input[name="email"]'
);

const registerButton = page.locator(
  '#registration-form button[type="submit"]'
);
```

Actions:

```js
await firstName.fill('Lingaraj');

await email.fill('test@example.com');

await registerButton.click();
```

This demonstrates combining:

```text
ID
+
Element
+
Attribute
```

to create a more specific CSS selector.

---

# 30. Complete QA Example

```js
const { test, expect } = require('@playwright/test');

test('Verify login using CSS selectors', async ({ page }) => {

  await page.goto('https://example.com/login');

  const username = page.locator('#username');

  const password = page.locator('#password');

  const loginButton = page.locator(
    'button.login-button'
  );

  await username.fill('testuser');

  await password.fill('Password123');

  await loginButton.click();

  await expect(page).toHaveURL(/dashboard/);
});
```

---

# 31. Line-by-Line Explanation

### Create username locator

```js
const username = page.locator('#username');
```

Uses the ID selector.

```text
#username
```

means:

> Find the element whose ID is username.

---

### Create password locator

```js
const password = page.locator('#password');
```

Finds the password field.

---

### Create login button locator

```js
const loginButton = page.locator(
  'button.login-button'
);
```

This means:

```text
button
+
class login-button
```

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

Clicks the button.

---

### Verify URL

```js
await expect(page).toHaveURL(/dashboard/);
```

Verifies successful navigation.

---

# 32. CSS Selector Best Practices

## Practice 1 — Prefer stable attributes

Good:

```js
page.locator('#username');
```

if the ID is stable.

Good:

```js
page.locator('[data-testid="login-button"]');
```

if the test ID is stable.

---

## Practice 2 — Avoid unnecessary DOM traversal

Avoid:

```js
page.locator(
  'div > div > div > button'
);
```

when a stable attribute exists.

---

## Practice 3 — Make the locator specific

Avoid:

```js
page.locator('button');
```

when there are many buttons.

Prefer a specific locator.

---

## Practice 4 — Keep locators readable

Good:

```js
page.locator(
  'input[name="username"]'
);
```

Hard to maintain:

```js
page.locator(
  'div:nth-child(2) > form > div:nth-child(1) > input'
);
```

---

## Practice 5 — Avoid generated classes

If the application generates classes such as:

```text
css-1abc23
```

they may change frequently.

Do not depend on them unless the project confirms they are stable.

---

# 33. Common Mistakes

## Mistake 1 — Forgetting `#` for ID

HTML:

```html
<input id="username">
```

Incorrect:

```js
page.locator('username');
```

Correct:

```js
page.locator('#username');
```

---

## Mistake 2 — Forgetting `.` for class

HTML:

```html
<button class="login-button">
```

Incorrect:

```js
page.locator('login-button');
```

Correct:

```js
page.locator('.login-button');
```

---

## Mistake 3 — Using only the tag when multiple elements exist

```js
page.locator('button');
```

may match many buttons.

Make the selector more specific.

---

## Mistake 4 — Using unstable classes

Avoid relying on dynamically generated classes when possible.

---

## Mistake 5 — Creating extremely long CSS selectors

Example:

```js
page.locator(
  'div > div > section > div > form > div > input'
);
```

This is difficult to maintain and likely to break when the UI structure changes.

---

## Mistake 6 — Forgetting `await`

Incorrect:

```js
loginButton.click();
```

Correct:

```js
await loginButton.click();
```

---

# 34. Interview Questions

## Q1. What is a CSS selector?

A CSS selector is a pattern used to identify HTML elements based on their tag, ID, class, attributes, relationships, and other CSS conditions.

---

## Q2. How do you use CSS selectors in Playwright?

Using:

```js
page.locator('CSS_SELECTOR');
```

Example:

```js
page.locator('#username');
```

---

## Q3. How do you locate an element by ID?

Use:

```js
page.locator('#username');
```

---

## Q4. How do you locate an element by class?

Use:

```js
page.locator('.login-button');
```

---

## Q5. How do you locate an element using an attribute?

Example:

```js
page.locator(
  'input[name="username"]'
);
```

---

## Q6. What is the difference between `#` and `.` in CSS selectors?

```text
# → ID
. → Class
```

Example:

```js
page.locator('#username');
```

```js
page.locator('.username');
```

---

## Q7. What is the difference between descendant and child selectors?

Descendant:

```css
.parent .child
```

means the child can exist anywhere inside the parent.

Direct child:

```css
.parent > .child
```

means the child must be directly inside the parent.

---

## Q8. Why should we avoid brittle CSS selectors?

Because selectors that depend heavily on DOM structure can break when the UI structure changes.

---

## Q9. Can CSS selectors be used with `page.locator()`?

Yes.

```js
page.locator('#username');
```

---

## Q10. Can `locator()` use XPath?

Yes. `locator()` can also work with XPath expressions.

Example:

```js
page.locator('//button[@id="login"]');
```

XPath will be covered separately.

---

# 35. Quick Revision

### ID

```js
page.locator('#username');
```

### Class

```js
page.locator('.login-button');
```

### Element

```js
page.locator('button');
```

### Attribute

```js
page.locator(
  'input[name="username"]'
);
```

### Custom attribute

```js
page.locator(
  '[data-testid="login-button"]'
);
```

### Descendant

```js
page.locator(
  '.login-form .login-button'
);
```

### Direct child

```js
page.locator(
  '.login-form > .login-button'
);
```

### Multiple classes

```js
page.locator(
  '.btn.primary.login-button'
);
```

### Attribute starts with

```js
page.locator(
  '[data-testid^="login"]'
);
```

### Attribute ends with

```js
page.locator(
  '[data-testid$="button"]'
);
```

### Attribute contains

```js
page.locator(
  '[data-testid*="login"]'
);
```

---

# 36. Easy Memory Trick

Remember:

```text
#  → ID
.  → Class
[] → Attribute
>  → Direct child
space → Descendant
```

Example:

```css
#login
```

means:

```text
ID = login
```

```css
.login-button
```

means:

```text
Class = login-button
```

```css
input[name="username"]
```

means:

```text
Input
+
name = username
```

```css
.login-form > .login-button
```

means:

```text
login-button
     ↓
Direct child of
     ↓
login-form
```

---

# 37. Final Definition

> **A CSS selector is a pattern used to identify HTML elements based on properties such as tag name, ID, class, attributes, and relationships. In Playwright, CSS selectors are commonly used with `page.locator()` to identify elements for automation actions and assertions.**

Most important syntax:

```js
page.locator('CSS_SELECTOR');
```

Remember:

```text
CSS Selector
      ↓
page.locator()
      ↓
Element
      ↓
Action / Assertion
```

The most important selectors for now are:

```text
#id
.class
tag
[attribute="value"]
parent child
parent > child
```

Next concept:

```text
Concept 17 — XPath Selectors
```

File:

```text
04 - Playwright-Fundamentals/
└── 06-CSS-XPath-Advanced-Locators/
    └── 02-xpath-selectors.md
```