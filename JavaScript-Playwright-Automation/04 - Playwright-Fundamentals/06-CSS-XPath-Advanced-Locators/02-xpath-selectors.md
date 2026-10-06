# Concept 17 — XPath Selectors

## 1. What is XPath?

XPath stands for **XML Path Language**.

In Playwright, XPath is a way to locate elements on a web page based on their:

- Tag name
- Attribute
- Text
- Parent/child relationship
- Position
- Other relationships between elements

Playwright can use XPath through `locator()`.

Example:

```js
await page.locator("//input[@id='username']").fill("Lingaraj");
```

Here:

```text
//input[@id='username']
```

is the XPath.

---

## 2. Why Do We Use XPath?

XPath is useful when an element does not have a simple or stable locator such as:

- Role
- Label
- Placeholder
- Test ID

XPath can be useful for:

- Dynamic elements
- Elements with changing attributes
- Elements identified by text
- Elements based on parent/child relationships
- Elements where CSS selectors become difficult
- Complex DOM structures

Example:

```html
<button>Login</button>
```

We can locate it using:

```js
page.locator("//button[text()='Login']")
```

---

# 3. Basic XPath Syntax

The basic XPath structure is:

```text
//tag[@attribute='value']
```

Example:

```text
//input[@id='username']
```

Meaning:

```text
//        → Search anywhere in the page
input     → Look for input elements
@id       → Check the id attribute
='username' → Attribute value must be username
```

---

# 4. How XPath Works

Consider this HTML:

```html
<input id="username" type="text">
```

XPath:

```text
//input[@id='username']
```

Playwright:

```js
await page.locator("//input[@id='username']").fill("Lingaraj");
```

Flow:

```text
Web Page
   ↓
HTML DOM
   ↓
XPath expression
   ↓
Find matching element
   ↓
Playwright Locator
   ↓
Perform action
```

---

# 5. `/` vs `//`

This is an important XPath concept.

## `/`

`/` represents a direct path.

Example:

```text
/html/body/div
```

This follows a specific hierarchy.

It is commonly associated with absolute XPath.

---

## `//`

`//` searches for matching elements anywhere under the current context.

Example:

```text
//input
```

Meaning:

```text
Find input elements anywhere in the page.
```

Example:

```js
await page.locator("//input[@id='username']");
```

### Easy memory trick

```text
/  → specific path

// → search anywhere
```

---

# 6. Absolute XPath

Absolute XPath starts from the root of the HTML document.

Example:

```text
/html/body/div/form/input
```

It describes the complete path from the root.

Example:

```js
await page.locator("/html/body/div/form/input");
```

## Problem with Absolute XPath

It is usually brittle.

If the HTML structure changes:

```text
/html/body/div/form/input
```

may no longer work.

For example:

```text
/html/body/main/div/form/input
```

The XPath has changed because the DOM structure changed.

### Best practice

Avoid absolute XPath whenever possible.

Prefer relative XPath.

---

# 7. Relative XPath

Relative XPath normally starts with:

```text
//
```

Example:

```text
//input[@id='username']
```

Instead of:

```text
/html/body/div/form/input
```

Relative XPath is generally more maintainable.

---

# 8. XPath Using Attribute

One of the most common XPath patterns is:

```text
//*[@attribute='value']
```

Example:

```html
<input id="username">
```

XPath:

```text
//*[@id='username']
```

Here:

```text
* → Any element
@id → id attribute
'username' → expected value
```

Playwright:

```js
await page.locator("//*[@id='username']").fill("Lingaraj");
```

---

# 9. XPath Using Element + Attribute

We can specify the element type.

Example:

```html
<input id="username">
```

XPath:

```text
//input[@id='username']
```

This is more specific than:

```text
//*[@id='username']
```

Example:

```js
await page.locator("//input[@id='username']").fill("Lingaraj");
```

---

# 10. XPath Using Text

XPath can locate an element using its visible text.

Example:

```html
<button>Login</button>
```

XPath:

```text
//button[text()='Login']
```

Playwright:

```js
await page.locator("//button[text()='Login']").click();
```

Meaning:

```text
//button
    ↓
Find button elements

[text()='Login']
    ↓
Find button whose text is exactly Login
```

---

# 11. XPath Using `contains()`

Sometimes the complete attribute value is dynamic.

Example:

```html
<button id="login-btn-12345">Login</button>
```

The number may change.

Instead of:

```text
//button[@id='login-btn-12345']
```

we can use:

```text
//button[contains(@id,'login-btn')]
```

Playwright:

```js
await page.locator("//button[contains(@id,'login-btn')]").click();
```

### Why is `contains()` useful?

It is useful when only part of an attribute value is stable.

Example:

```text
login-btn-12345
login-btn-56789
login-btn-98765
```

Common stable part:

```text
login-btn
```

So:

```text
//button[contains(@id,'login-btn')]
```

---

# 12. `contains()` With Text

We can also use `contains()` with text.

Example:

```html
<div>Login successful</div>
```

XPath:

```text
//div[contains(text(),'Login')]
```

Playwright:

```js
await expect(
  page.locator("//div[contains(text(),'Login')]")
).toBeVisible();
```

This can be useful for messages where the complete text may change.

Example:

```text
Login successful
Login successful for Lingaraj
Login successful at 10:30 AM
```

Common text:

```text
Login
```

---

# 13. XPath Using `starts-with()`

`starts-with()` checks whether an attribute value starts with specific text.

Example:

```html
<input id="user-12345">
```

XPath:

```text
//input[starts-with(@id,'user-')]
```

Playwright:

```js
await page.locator("//input[starts-with(@id,'user-')]").fill("Lingaraj");
```

This is useful for dynamic attributes.

Example:

```text
user-123
user-456
user-789
```

Common beginning:

```text
user-
```

So:

```text
//input[starts-with(@id,'user-')]
```

---

# 14. XPath Using `normalize-space()`

Sometimes text contains extra spaces.

Example:

```html
<button>
    Login
</button>
```

We can use:

```text
//button[normalize-space()='Login']
```

Playwright:

```js
await page.locator("//button[normalize-space()='Login']").click();
```

`normalize-space()` helps normalize unnecessary whitespace before comparing text.

### Memory trick

```text
text()           → exact text condition

contains()       → partial match

starts-with()    → beginning match

normalize-space() → ignore unnecessary whitespace
```

---

# 15. XPath Using Multiple Attributes

We can use more than one condition.

Example:

```html
<input id="username" type="text">
```

XPath:

```text
//input[@id='username' and @type='text']
```

Playwright:

```js
await page.locator(
  "//input[@id='username' and @type='text']"
).fill("Lingaraj");
```

This means:

```text
Element must be input
AND
id must be username
AND
type must be text
```

---

# 16. XPath `and`

`and` means all conditions must be true.

Example:

```text
//input[@name='username' and @type='text']
```

Example HTML:

```html
<input name="username" type="text">
```

Both conditions must match.

---

# 17. XPath `or`

`or` means at least one condition can match.

Example:

```text
//input[@id='username' or @name='username']
```

This can match an input where:

```text
id = username
```

OR:

```text
name = username
```

### Memory trick

```text
and → both conditions

or → either condition
```

---

# 18. XPath Parent and Child Relationship

XPath can navigate through relationships between elements.

Example:

```html
<div>
    <label>Username</label>
    <input id="username">
</div>
```

We can locate the input through its parent structure.

Example:

```text
//div/label
```

This means:

```text
Find div
   ↓
Find label directly under div
```

Similarly:

```text
//div/input
```

means:

```text
Find div
   ↓
Find input directly under div
```

---

# 19. Parent → Child Relationship

Consider:

```html
<div class="login-form">
    <input id="username">
    <input id="password">
</div>
```

XPath:

```text
//div[@class='login-form']/input
```

This finds `input` elements that are direct children of the `div`.

In Playwright:

```js
const inputs = page.locator(
  "//div[@class='login-form']/input"
);
```

---

# 20. Descendant Relationship

Sometimes the element is not a direct child.

Example:

```html
<div class="login-form">
    <form>
        <div>
            <input id="username">
        </div>
    </form>
</div>
```

We can use:

```text
//div[@class='login-form']//input
```

Meaning:

```text
Find login-form div
   ↓
Search anywhere inside it
   ↓
Find input
```

Remember:

```text
/  → direct child/path

// → descendant/anywhere below
```

---

# 21. XPath Parent Axis

We can navigate from an element to its parent.

Example:

```html
<div class="field">
    <input id="username">
</div>
```

XPath:

```text
//input[@id='username']/parent::div
```

Meaning:

```text
Find username input
        ↓
Go to its parent
        ↓
Find parent div
```

This is useful when the target element itself is difficult to identify but its relationship to another element is known.

---

# 22. XPath Ancestor

`ancestor` allows us to move upward through the DOM.

Example:

```text
//input[@id='username']/ancestor::form
```

Meaning:

```text
Find username input
        ↓
Move upward
        ↓
Find ancestor form
```

---

# 23. XPath Following-Sibling

Sibling elements share the same parent.

Example:

```html
<div>
    <label>Username</label>
    <input id="username">
</div>
```

The `input` is a following sibling of the `label`.

Example:

```text
//label[text()='Username']/following-sibling::input
```

This means:

```text
Find label with Username
        ↓
Find following sibling
        ↓
Find input
```

This technique can be useful when the relationship between elements is stable.

---

# 24. XPath Indexing

XPath can also select an element based on position.

Example:

```html
<button>Save</button>
<button>Cancel</button>
<button>Delete</button>
```

XPath:

```text
(//button)[1]
```

This selects the first matching button.

```text
(//button)[2]
```

selects the second.

```text
(//button)[3]
```

selects the third.

---

# 25. Important Difference: `//button[1]` vs `(//button)[1]`

This is an important interview point.

Consider:

```html
<div>
    <button>Save</button>
    <button>Cancel</button>
</div>

<div>
    <button>Delete</button>
    <button>Edit</button>
</div>
```

### `//button[1]`

```text
//button[1]
```

can select the first `button` within each relevant parent context.

### `(//button)[1]`

```text
(//button)[1]
```

selects the first button from the complete result set.

For Playwright XPath, when you mean the first result overall, this form is clearer:

```js
await page.locator("(//button)[1]").click();
```

### Important

Do not use positional XPath unless the position is stable.

A new button inserted before it can change the result.

---

# 26. XPath With `page.locator()`

In Playwright, XPath can be passed to `locator()`.

Example:

```js
const username = page.locator("//input[@id='username']");
```

Then:

```js
await username.fill("Lingaraj");
```

Another example:

```js
const loginButton = page.locator("//button[text()='Login']");
```

Then:

```js
await loginButton.click();
```

---

# 27. XPath With Assertions

XPath can also be used with Playwright assertions.

Example:

```js
await expect(
  page.locator("//button[text()='Login']")
).toBeVisible();
```

Another example:

```js
await expect(
  page.locator("//div[contains(text(),'Login successful')]")
).toBeVisible();
```

The locator finds the element.

The assertion verifies the expected state.

---

# 28. Real-Time QA Example — Login Page

Suppose we have:

```html
<input id="username" type="text">
<input id="password" type="password">
<button id="login-btn-123">Login</button>
```

Test:

```js
const { test, expect } = require('@playwright/test');

test('Verify login page', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page
    .locator("//input[@id='username']")
    .fill("Lingaraj");

  await page
    .locator("//input[@id='password']")
    .fill("Password123");

  await page
    .locator("//button[contains(@id,'login-btn')]")
    .click();

  await expect(
    page.locator("//div[contains(text(),'Login successful')]")
  ).toBeVisible();
});
```

---

# 29. Line-by-Line Explanation

```js
const { test, expect } = require('@playwright/test');
```

Imports:

```text
test   → creates the test
expect → performs assertions
```

---

```js
test('Verify login page', async ({ page }) => {
```

Creates a Playwright test.

`page` is the browser tab used by the test.

---

```js
await page.goto('https://example.com/login');
```

Opens the login page.

---

```js
await page
  .locator("//input[@id='username']")
  .fill("Lingaraj");
```

Finds:

```text
input
```

with:

```text
id = username
```

Then enters:

```text
Lingaraj
```

---

```js
await page
  .locator("//input[@id='password']")
  .fill("Password123");
```

Finds the password input and enters the password.

---

```js
await page
  .locator("//button[contains(@id,'login-btn')]")
  .click();
```

Finds a button whose ID contains:

```text
login-btn
```

This is useful because the complete ID may be dynamic.

---

```js
await expect(
  page.locator("//div[contains(text(),'Login successful')]")
).toBeVisible();
```

Finds a message containing:

```text
Login successful
```

and verifies that it is visible.

---

# 30. XPath vs CSS Selector

Both CSS and XPath can be used with:

```js
page.locator()
```

Example CSS:

```js
page.locator("#username");
```

Equivalent XPath:

```js
page.locator("//input[@id='username']");
```

### Comparison

| Feature | CSS | XPath |
|---|---|---|
| ID | `#username` | `//input[@id='username']` |
| Class | `.login-btn` | `//button[contains(@class,'login-btn')]` |
| Attribute | `[type='text']` | `//*[@type='text']` |
| Text relationship | Limited | Strong |
| Parent navigation | Limited | Strong |
| Sibling navigation | Limited | Strong |
| Complex DOM relationships | Less convenient | More convenient |
| Readability | Usually simple | Can become complex |

### Important

Do not automatically choose XPath just because it is powerful.

Prefer the simplest stable locator.

---

# 31. Locator Priority

In Playwright, generally prefer user-facing built-in locators when they are available and stable.

A practical preference is:

```text
1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText()
5. getByTestId()
6. locator() with stable CSS/XPath
```

XPath is useful when the simpler locator strategies do not provide a suitable stable locator.

---

# 32. Stable XPath vs Brittle XPath

## Stable XPath

```text
//input[@id='username']
```

If the ID is stable, this is a good locator.

Another example:

```text
//button[@data-testid='login-button']
```

---

## Brittle XPath

```text
/html/body/div[2]/div[1]/form/div[3]/input
```

This depends heavily on the DOM structure.

If developers add or remove a `div`, the XPath may break.

---

# 33. Dynamic Element Example

Suppose the application generates:

```text
user-12345
user-45678
user-98765
```

Instead of:

```text
//input[@id='user-12345']
```

use:

```text
//input[starts-with(@id,'user-')]
```

or:

```text
//input[contains(@id,'user-')]
```

depending on the requirement.

---

# 34. Common XPath Mistakes

## Mistake 1 — Using Absolute XPath Everywhere

Avoid:

```text
/html/body/div[2]/div/form/input
```

Prefer a stable relative XPath:

```text
//input[@id='username']
```

---

## Mistake 2 — Incorrect Quotes

Incorrect:

```text
//input[@id=username]
```

Correct:

```text
//input[@id='username']
```

---

## Mistake 3 — Forgetting `@` for Attributes

Incorrect:

```text
//input[id='username']
```

Correct:

```text
//input[@id='username']
```

---

## Mistake 4 — Using Exact Dynamic Values

Avoid:

```text
//button[@id='login-847392']
```

if the number changes.

Prefer:

```text
//button[contains(@id,'login-')]
```

---

## Mistake 5 — Overly Complex XPath

Avoid creating a very long XPath when a simple locator is available.

For example, if this works:

```js
page.getByRole('button', { name: 'Login' })
```

there may be no reason to use:

```js
page.locator("//div/form/div/button[contains(@class,'btn')][1]")
```

---

## Mistake 6 — Depending Only on Index

Example:

```text
(//button)[3]
```

If the UI changes, the third button may no longer be the required button.

Use a stable attribute, role, text, or relationship when possible.

---

# 35. Important XPath Functions to Remember

```text
text()
```

Matches text.

Example:

```text
//button[text()='Login']
```

---

```text
contains()
```

Matches part of a value.

Example:

```text
//button[contains(@id,'login')]
```

---

```text
starts-with()
```

Matches the beginning of a value.

Example:

```text
//input[starts-with(@id,'user-')]
```

---

```text
normalize-space()
```

Helps normalize whitespace.

Example:

```text
//button[normalize-space()='Login']
```

---

# 36. Important XPath Relationships

```text
parent
```

Move to parent.

```text
//input[@id='username']/parent::div
```

---

```text
ancestor
```

Move upward to an ancestor.

```text
//input[@id='username']/ancestor::form
```

---

```text
child
```

Move to child.

```text
//div[@class='login']/child::input
```

---

```text
following-sibling
```

Find a sibling after the current element.

```text
//label[text()='Username']/following-sibling::input
```

---

# 37. Real QA Use Cases

XPath can be useful in automation for:

### Login

```text
//input[@id='username']
```

### Password

```text
//input[@id='password']
```

### Login button

```text
//button[text()='Login']
```

### Dynamic button

```text
//button[contains(@id,'login')]
```

### Success message

```text
//div[contains(text(),'successful')]
```

### Table row relationship

```text
//tr[td[text()='Lingaraj']]
```

### Form relationship

```text
//label[text()='Username']/following-sibling::input
```

---

# 38. XPath and Playwright Auto-Waiting

When using:

```js
page.locator("//button[text()='Login']")
```

Playwright still provides its normal locator behavior and actionability checks.

For example:

```js
await page.locator("//button[text()='Login']").click();
```

Playwright waits for the element to become actionable before performing the click.

You generally should not add:

```js
await page.waitForTimeout(5000);
```

just because you are using XPath.

---

# 39. XPath Does Not Mean Manual Waiting

Wrong approach:

```js
await page.waitForTimeout(3000);

await page.locator("//button[text()='Login']").click();
```

Better:

```js
await page.locator("//button[text()='Login']").click();
```

Use explicit waiting only when there is a genuine synchronization requirement.

---

# 40. Interview Questions

## Q1. What is XPath?

XPath is a query language used to locate elements in the DOM based on attributes, text, hierarchy, position, and relationships.

---

## Q2. How do you use XPath in Playwright?

Using `page.locator()`.

Example:

```js
await page.locator("//input[@id='username']").fill("Lingaraj");
```

---

## Q3. What is the difference between `/` and `//`?

```text
/  → follows a specific/direct path

// → searches for matching elements anywhere below the current context
```

---

## Q4. What is the difference between absolute and relative XPath?

Absolute XPath starts from the root of the document and depends heavily on the DOM structure.

Relative XPath generally starts with `//` and is usually more maintainable.

---

## Q5. How do you locate an element using text?

Example:

```text
//button[text()='Login']
```

---

## Q6. How do you handle dynamic attributes using XPath?

Use functions such as:

```text
contains()
starts-with()
```

Example:

```text
//button[contains(@id,'login-')]
```

---

## Q7. What is `normalize-space()`?

It normalizes whitespace before comparing text.

Example:

```text
//button[normalize-space()='Login']
```

---

## Q8. What is the difference between `//button[1]` and `(//button)[1]`?

They can have different positional behavior because the first applies the position in the relevant node context, while the second applies it to the overall result set.

For selecting the first matching button overall:

```text
(//button)[1]
```

---

## Q9. Is XPath always better than CSS?

No.

The best locator is the one that is:

- Stable
- Readable
- Maintainable
- Closely related to the user-facing behavior

Use XPath when it provides a useful and stable way to identify the element.

---

## Q10. Why should we avoid absolute XPath?

Because it depends heavily on the exact DOM hierarchy.

Small UI/HTML changes can break it.

---

# 41. Quick Revision

```text
XPath
  ↓
Used to locate DOM elements
  ↓
Used with page.locator()
  ↓
Relative XPath → //element
  ↓
Attribute → //input[@id='username']
  ↓
Text → //button[text()='Login']
  ↓
Partial match → contains()
  ↓
Beginning match → starts-with()
  ↓
Whitespace handling → normalize-space()
  ↓
Multiple conditions → and / or
  ↓
Relationships → parent / child / ancestor / sibling
  ↓
Position → (//button)[1]
```

---

# 42. Most Important XPath Examples

```js
// By ID
page.locator("//input[@id='username']");

// By attribute
page.locator("//*[@data-testid='login']");

// By text
page.locator("//button[text()='Login']");

// Contains
page.locator("//button[contains(@id,'login')]");

// Starts with
page.locator("//input[starts-with(@id,'user-')]");

// Normalize space
page.locator("//button[normalize-space()='Login']");

// Multiple conditions
page.locator("//input[@type='text' and @name='username']");

// Parent
page.locator("//input[@id='username']/parent::div");

// Ancestor
page.locator("//input[@id='username']/ancestor::form");

// Following sibling
page.locator("//label[text()='Username']/following-sibling::input");

// First matching result
page.locator("(//button)[1]");
```

---

# 43. Easy Memory Trick

Remember:

```text
A T C S R
```

### A → Attribute

```text
//input[@id='username']
```

### T → Text

```text
//button[text()='Login']
```

### C → Contains

```text
//button[contains(@id,'login')]
```

### S → Starts-with

```text
//input[starts-with(@id,'user-')]
```

### R → Relationship

```text
parent
ancestor
child
following-sibling
```

So remember:

```text
XPath = Attribute + Text + Contains + Starts-with + Relationships
```

---

# 44. Final Definition

**XPath is a powerful locator strategy used in Playwright to identify web elements based on their attributes, text, position, hierarchy, and relationships within the DOM. In Playwright, XPath is commonly used through `page.locator()` when a stable built-in locator or simple CSS selector is not suitable.**

---

# 45. Key Takeaway

As a QA Automation Engineer, do not try to use the most complicated XPath.

Your goal should be:

```text
Stable locator
      ↓
Simple locator
      ↓
Readable locator
      ↓
Maintainable automation
```

Prefer Playwright's user-facing locators when they are suitable.

Use XPath when it gives you a **stable and useful way to identify the element**, especially when you need text-based or DOM relationship-based locating.