# Concept 18 — Advanced and Dynamic Locators

## 1. What Are Advanced and Dynamic Locators?

Advanced and dynamic locators are techniques used to locate elements when a simple locator is not enough.

In real web applications, we often have:

- Multiple elements with the same role
- Repeated buttons
- Dynamic lists
- Dynamic text
- Elements inside specific containers
- Elements that cannot be uniquely identified by one attribute
- Multiple matching elements

Playwright provides locator methods that help us narrow down the exact element.

Important methods include:

```text
locator()
filter()
hasText
has
nth()
first()
last()
```

Example:

```js
page.getByRole('row').filter({ hasText: 'Lingaraj' });
```

This means:

```text
Find rows
   ↓
Keep the row containing "Lingaraj"
```

---

# 2. Why Do We Need Advanced Locators?

Consider this page:

```html
<button>Edit</button>
<button>Edit</button>
<button>Edit</button>
```

If we write:

```js
page.getByRole('button', { name: 'Edit' })
```

there are multiple matching buttons.

But suppose we need the Edit button belonging to the user:

```text
Lingaraj
```

We need a more specific locator.

Example:

```js
page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

This is a real-world use of advanced locator techniques.

---

# 3. Basic Locator Chaining

Locator chaining means using one locator to narrow down another locator.

Example:

```js
const loginForm = page.locator('#login-form');

const username = loginForm.locator('#username');
```

Here:

```text
page
 ↓
#login-form
 ↓
#username
```

The second locator searches within the first locator's scope.

---

# 4. Why Locator Chaining Is Useful

Consider:

```html
<div id="login-form">
    <input id="username">
</div>

<div id="registration-form">
    <input id="username">
</div>
```

There are two elements with:

```text
id="username"
```

A simple locator may not represent the intended scope.

Instead:

```js
const loginForm = page.locator('#login-form');

await loginForm.locator('#username').fill('Lingaraj');
```

Now the search is scoped to the login form.

---

# 5. Locator Chaining Syntax

Basic syntax:

```js
const parent = page.locator('parent-selector');

const child = parent.locator('child-selector');
```

Example:

```js
const productCard = page.locator('.product-card');

const productName = productCard.locator('.product-name');
```

Another example:

```js
await page
  .locator('.login-form')
  .locator('input[name="username"]')
  .fill('Lingaraj');
```

---

# 6. `filter()`

`filter()` is used to narrow down a locator based on additional conditions.

Basic syntax:

```js
locator.filter({ condition });
```

Example:

```js
page.getByRole('row').filter({ hasText: 'Lingaraj' });
```

This means:

```text
Find all rows
      ↓
Keep only rows containing "Lingaraj"
```

---

# 7. `filter({ hasText })`

`hasText` is one of the most useful filtering techniques.

Example:

```html
<div class="product">
    <h3>iPhone</h3>
    <button>Add to Cart</button>
</div>

<div class="product">
    <h3>Samsung</h3>
    <button>Add to Cart</button>
</div>
```

Suppose we want to click Add to Cart for Samsung.

We can write:

```js
await page
  .locator('.product')
  .filter({ hasText: 'Samsung' })
  .getByRole('button', { name: 'Add to Cart' })
  .click();
```

---

# 8. How `hasText` Works

The flow is:

```text
All product containers
        ↓
filter()
        ↓
Container containing "Samsung"
        ↓
Find Add to Cart button
        ↓
Click
```

This is much better than simply selecting:

```js
page.getByRole('button', { name: 'Add to Cart' }).nth(2)
```

because the position of products can change.

---

# 9. `hasText` With Dynamic Text

Suppose an application displays:

```text
Order #1001 - Lingaraj
Order #1002 - Rahul
Order #1003 - Priya
```

We can find the order containing Lingaraj:

```js
const order = page
  .locator('.order')
  .filter({ hasText: 'Lingaraj' });
```

Then interact with something inside it:

```js
await order
  .getByRole('button', { name: 'View Details' })
  .click();
```

---

# 10. Real QA Example — User Management

Suppose the page contains:

```html
<div class="user-row">
    <span>Lingaraj</span>
    <button>Edit</button>
    <button>Delete</button>
</div>

<div class="user-row">
    <span>Rahul</span>
    <button>Edit</button>
    <button>Delete</button>
</div>
```

Requirement:

```text
Edit Lingaraj's user
```

We can write:

```js
await page
  .locator('.user-row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

This is a strong real-world locator.

---

# 11. `has`

`has` allows us to filter a locator based on whether it contains another locator.

Example:

```js
const product = page
  .locator('.product')
  .filter({
    has: page.getByText('Samsung')
  });
```

Meaning:

```text
Find product containers
       ↓
Keep the container
that contains Samsung
```

---

# 12. `has` vs `hasText`

### `hasText`

Used when you want to match text.

```js
.filter({ hasText: 'Samsung' })
```

### `has`

Used when you want to match another locator.

```js
.filter({
  has: page.getByRole('heading', { name: 'Samsung' })
})
```

Easy memory:

```text
hasText → text condition

has     → element/locator condition
```

---

# 13. `has` Example

HTML:

```html
<div class="product-card">
    <h2>Samsung Galaxy</h2>
    <button>Add to Cart</button>
</div>
```

Locator:

```js
const productCard = page
  .locator('.product-card')
  .filter({
    has: page.getByRole('heading', { name: 'Samsung Galaxy' })
  });
```

Then:

```js
await productCard
  .getByRole('button', { name: 'Add to Cart' })
  .click();
```

---

# 14. `first()`

`first()` selects the first matching element.

Example:

```js
await page
  .getByRole('button', { name: 'Edit' })
  .first()
  .click();
```

If there are multiple Edit buttons:

```text
Edit
Edit
Edit
```

`first()` selects the first one.

---

# 15. `last()`

`last()` selects the last matching element.

Example:

```js
await page
  .getByRole('button', { name: 'Edit' })
  .last()
  .click();
```

If there are:

```text
Edit
Edit
Edit
```

`last()` selects the final Edit button.

---

# 16. `nth()`

`nth()` selects an element by zero-based index.

Example:

```js
await page
  .getByRole('button', { name: 'Edit' })
  .nth(1)
  .click();
```

Important:

```text
nth(0) → first element
nth(1) → second element
nth(2) → third element
```

Remember:

```text
Playwright indexing starts from 0.
```

---

# 17. `first()` vs `last()` vs `nth()`

| Method | Meaning |
|---|---|
| `first()` | First matching element |
| `last()` | Last matching element |
| `nth(0)` | First matching element |
| `nth(1)` | Second matching element |
| `nth(2)` | Third matching element |

Example:

```js
locator.first()
```

```js
locator.last()
```

```js
locator.nth(2)
```

---

# 18. Important Warning About `nth()`

Avoid using `nth()` just because it is easy.

Example:

```js
page.getByRole('button').nth(2).click();
```

This assumes that the required button will always remain third.

But the application may change:

```text
Today:
Save
Edit
Delete

Tomorrow:
Add
Save
Edit
Delete
```

Now:

```js
nth(2)
```

points to:

```text
Edit
```

instead of:

```text
Delete
```

So the test can become incorrect.

---

# 19. Better Alternative to `nth()`

Instead of:

```js
page.getByRole('button', { name: 'Delete' }).nth(2).click();
```

try to identify the correct container first.

Example:

```js
await page
  .locator('.user-row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Delete' })
  .click();
```

This is more meaningful.

It says:

```text
Find Lingaraj's row
       ↓
Find Delete button inside that row
       ↓
Click
```

---

# 20. Combining `filter()` and `hasText`

Example:

```js
const userRow = page
  .locator('.user-row')
  .filter({ hasText: 'Lingaraj' });
```

Then:

```js
await userRow
  .getByRole('button', { name: 'Edit' })
  .click();
```

This is one of the most useful patterns in real automation.

---

# 21. Combining `filter()` and `has`

Example:

```js
const productCard = page
  .locator('.product-card')
  .filter({
    has: page.getByText('iPhone')
  });
```

Then:

```js
await productCard
  .getByRole('button', { name: 'Add to Cart' })
  .click();
```

---

# 22. Combining Multiple Locator Techniques

Playwright allows us to build locators step by step.

Example:

```js
await page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

Flow:

```text
Page
 ↓
Rows
 ↓
Row containing Lingaraj
 ↓
Edit button inside that row
 ↓
Click
```

This is called **locator chaining**.

---

# 23. Real-Time QA Example — Employee Table

Imagine a table:

```text
--------------------------------------------------
Name       Role          Status       Action
--------------------------------------------------
Lingaraj   QA Engineer   Active       Edit Delete
Rahul      Developer     Active       Edit Delete
Priya      Manager       Active       Edit Delete
--------------------------------------------------
```

Requirement:

```text
Edit Lingaraj's employee record.
```

A weak approach:

```js
await page.getByRole('button', { name: 'Edit' }).first().click();
```

This depends on position.

Better:

```js
await page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

Why is this better?

Because the locator describes the actual requirement:

```text
Lingaraj's row
      ↓
Edit button
```

---

# 24. Real-Time QA Example — E-Commerce

Suppose we have:

```text
Product: iPhone
Price: ₹70,000
Add to Cart

Product: Samsung
Price: ₹60,000
Add to Cart
```

Requirement:

```text
Add Samsung to cart.
```

Code:

```js
await page
  .locator('.product-card')
  .filter({ hasText: 'Samsung' })
  .getByRole('button', { name: 'Add to Cart' })
  .click();
```

This is better than:

```js
page.getByRole('button', { name: 'Add to Cart' }).nth(1)
```

because it does not depend on product position.

---

# 25. Real-Time QA Example — Orders

Suppose:

```text
Order #1001 - Lingaraj
View Details
Cancel

Order #1002 - Rahul
View Details
Cancel
```

Requirement:

```text
Cancel Lingaraj's order.
```

Code:

```js
await page
  .locator('.order')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Cancel' })
  .click();
```

Flow:

```text
All orders
   ↓
Order containing Lingaraj
   ↓
Cancel button inside that order
   ↓
Click
```

---

# 26. Advanced Locator With Assertions

Advanced locators can also be used with assertions.

Example:

```js
const userRow = page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' });

await expect(userRow).toBeVisible();
```

Then:

```js
await expect(
  userRow.getByRole('button', { name: 'Edit' })
).toBeVisible();
```

This makes the test easier to understand.

---

# 27. Advanced Locator With `count()`

We can check how many elements match.

Example:

```js
const editButtons = page.getByRole('button', {
  name: 'Edit'
});

console.log(await editButtons.count());
```

If there are three Edit buttons:

```text
3
```

This is useful when debugging locator problems.

---

# 28. Checking Multiple Matching Elements

Suppose:

```js
const buttons = page.getByRole('button', {
  name: 'Edit'
});
```

We can check:

```js
console.log(await buttons.count());
```

Then:

```js
await buttons.first().click();
```

or:

```js
await buttons.last().click();
```

or:

```js
await buttons.nth(1).click();
```

But remember:

```text
Prefer meaningful filtering over positional selection.
```

---

# 29. Dynamic Locator Strategy

When working with dynamic applications, follow this strategy:

```text
1. Identify the business object
        ↓
2. Find its container
        ↓
3. Filter the container
        ↓
4. Find the required element inside it
        ↓
5. Perform action/assertion
```

Example:

```js
await page
  .locator('.user-row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

---

# 30. Locator Strategy for Repeated Elements

Suppose the UI contains:

```text
Card 1 → Edit
Card 2 → Edit
Card 3 → Edit
Card 4 → Edit
```

Do not immediately use:

```js
getByRole('button', { name: 'Edit' }).nth(2)
```

Instead ask:

```text
Which card?
        ↓
How can I uniquely identify that card?
        ↓
Can I filter it?
        ↓
Can I find Edit inside that card?
```

Example:

```js
await page
  .locator('.card')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

---

# 31. Advanced Locators and Maintainability

A good locator should be:

```text
Stable
Readable
Specific
Maintainable
Related to the business requirement
```

Good:

```js
page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
```

Less maintainable:

```js
page.locator('div:nth-child(4) > div:nth-child(2) > button:nth-child(1)')
```

The second locator depends heavily on the DOM structure.

---

# 32. Common Mistakes

## Mistake 1 — Using `nth()` Everywhere

Avoid:

```js
locator.nth(3)
```

unless the position is genuinely part of the requirement.

---

## Mistake 2 — Not Filtering Repeated Elements

If there are multiple cards:

```js
page.getByRole('button', { name: 'Delete' })
```

may identify multiple buttons.

Instead:

```js
page
  .locator('.user-row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Delete' })
```

---

## Mistake 3 — Creating Very Long CSS/XPath

Do not create an extremely complicated selector when Playwright's locator methods can express the requirement more clearly.

---

## Mistake 4 — Ignoring the Parent Container

If multiple identical elements exist, first identify the correct container.

Example:

```text
User Row
   ↓
Lingaraj
   ↓
Edit
```

Instead of searching for every Edit button on the page, search inside Lingaraj's row.

---

## Mistake 5 — Using `first()` Without Understanding the UI

This:

```js
locator.first()
```

does not mean "the correct element."

It only means:

```text
the first matching element
```

---

# 33. `filter()` vs `nth()`

### `filter()`

Identifies an element based on a meaningful condition.

Example:

```js
page
  .locator('.user-row')
  .filter({ hasText: 'Lingaraj' });
```

### `nth()`

Identifies an element based on position.

Example:

```js
page
  .getByRole('button', { name: 'Edit' })
  .nth(1);
```

### Which is generally better?

```text
Meaningful condition
        ↓
filter()
        ↓
Position
        ↓
nth()
```

Use `nth()` when position is actually meaningful or when no better stable strategy exists.

---

# 34. Important Methods to Remember

```text
locator()
```

Creates a locator.

```js
page.locator('.user-row');
```

---

```text
filter()
```

Narrows down matching elements.

```js
locator.filter({ hasText: 'Lingaraj' });
```

---

```text
hasText
```

Filters based on text.

```js
filter({ hasText: 'Lingaraj' });
```

---

```text
has
```

Filters based on another locator.

```js
filter({
  has: page.getByText('Lingaraj')
});
```

---

```text
first()
```

Gets the first matching element.

```js
locator.first();
```

---

```text
last()
```

Gets the last matching element.

```js
locator.last();
```

---

```text
nth()
```

Gets an element by zero-based position.

```js
locator.nth(1);
```

---

# 35. Complete Real-Time QA Example

```js
const { test, expect } = require('@playwright/test');

test('Edit Lingaraj user', async ({ page }) => {

  await page.goto('https://example.com/users');

  const userRow = page
    .getByRole('row')
    .filter({ hasText: 'Lingaraj' });

  await expect(userRow).toBeVisible();

  await userRow
    .getByRole('button', { name: 'Edit' })
    .click();

  await expect(
    page.getByRole('heading', { name: 'Edit User' })
  ).toBeVisible();
});
```

---

# 36. Line-by-Line Explanation

```js
const { test, expect } = require('@playwright/test');
```

Imports Playwright Test and the assertion function.

---

```js
test('Edit Lingaraj user', async ({ page }) => {
```

Creates the test.

---

```js
await page.goto('https://example.com/users');
```

Navigates to the user management page.

---

```js
const userRow = page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' });
```

First finds rows.

Then filters them to the row containing:

```text
Lingaraj
```

---

```js
await expect(userRow).toBeVisible();
```

Verifies that the required row is visible.

---

```js
await userRow
  .getByRole('button', { name: 'Edit' })
  .click();
```

Searches inside Lingaraj's row for the Edit button and clicks it.

---

```js
await expect(
  page.getByRole('heading', { name: 'Edit User' })
).toBeVisible();
```

Verifies that the Edit User page/dialog is displayed.

---

# 37. Best Practices

### 1. Prefer stable locators

Use:

```js
getByRole()
getByLabel()
getByTestId()
```

when suitable.

---

### 2. Scope repeated elements

Use:

```js
filter()
```

and locator chaining.

---

### 3. Prefer meaning over position

Better:

```js
.filter({ hasText: 'Lingaraj' })
```

than:

```js
.nth(2)
```

when possible.

---

### 4. Use `hasText` for text-based filtering

```js
.filter({ hasText: 'Samsung' })
```

---

### 5. Use `has` for locator-based filtering

```js
.filter({
  has: page.getByRole('heading', { name: 'Samsung' })
})
```

---

### 6. Keep locators readable

A future team member should understand what the locator is targeting.

---

# 38. Interview Questions

## Q1. What is locator chaining?

Locator chaining means narrowing down an element by starting with a broader locator and locating another element inside its scope.

Example:

```js
page
  .locator('.user-row')
  .getByRole('button', { name: 'Edit' });
```

---

## Q2. What is `filter()` used for?

`filter()` narrows down a locator based on conditions such as text or another locator.

Example:

```js
page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' });
```

---

## Q3. What is the difference between `hasText` and `has`?

```text
hasText → filters based on text

has → filters based on another locator
```

---

## Q4. What does `nth()` do?

`nth()` selects a matching element using a zero-based index.

Example:

```js
locator.nth(1);
```

selects the second matching element.

---

## Q5. Why should we avoid excessive use of `nth()`?

Because the position of elements can change when the UI changes, which can make the test target the wrong element.

---

## Q6. What is the difference between `first()` and `nth(0)`?

Both select the first matching element.

```js
locator.first();
```

and:

```js
locator.nth(0);
```

select the first match.

`first()` communicates the intention more clearly.

---

## Q7. How would you click Edit for a specific user when every row has an Edit button?

Example:

```js
await page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

---

# 39. Quick Revision

```text
Advanced Locators
        ↓
Locator chaining
        ↓
filter()
        ↓
hasText
        ↓
has
        ↓
first()
        ↓
last()
        ↓
nth()
        ↓
Scope repeated elements
        ↓
Target the exact element
```

Most important pattern:

```js
page
  .locator('container')
  .filter({ hasText: 'specific data' })
  .getByRole('button', { name: 'Action' })
  .click();
```

Example:

```js
await page
  .locator('.user-row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

---

# 40. Easy Memory Trick

Remember:

```text
F → Filter
H → hasText / has
C → Chain
N → nth
F → first
L → last
```

Think:

```text
F H C N F L
```

The most important idea is:

```text
Find the container
        ↓
Filter the container
        ↓
Find the required element
        ↓
Perform the action
```

---

# 41. Final Definition

**Advanced and dynamic locators are Playwright locator techniques used to precisely identify elements in complex or dynamic web applications. They use locator chaining, filtering, `hasText`, `has`, `first()`, `last()`, and `nth()` to narrow down repeated or dynamic elements and interact with the exact required element.**

---

# 42. Key Takeaway

In real QA automation, the goal is not to find an element using the shortest selector.

The goal is to find the **correct element in a stable, readable, and maintainable way**.

Remember:

```text
Repeated elements
       ↓
Find the correct container
       ↓
Filter it
       ↓
Find the required element inside it
       ↓
Perform action / assertion
```

Example:

```js
await page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Edit' })
  .click();
```

This is the type of locator strategy you will frequently use in real Playwright automation frameworks.