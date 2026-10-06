# Concept 20 — Click Actions

## 1. What is a Click Action?

A click action is an interaction where Playwright clicks an element on a web page.

In Playwright, the most common method is:

```js
locator.click()
```

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

This means:

```text
Find Login button
       ↓
Click it
       ↓
Application performs the action
```

---

# 2. Why Do We Need Click Actions?

Clicking is one of the most common actions performed by a real user.

In QA automation, we use clicks to test:

- Buttons
- Links
- Checkboxes
- Radio buttons
- Menus
- Tabs
- Search buttons
- Submit buttons
- Login buttons
- Add to Cart
- Edit/Delete actions
- Navigation

Example:

```text
User opens Login page
        ↓
Enters username
        ↓
Enters password
        ↓
Clicks Login
        ↓
Dashboard opens
```

Playwright can automate the same interaction.

---

# 3. Basic Click Syntax

The basic syntax is:

```js
await locator.click();
```

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

Another example:

```js
await page.locator('#submit').click();
```

---

# 4. Click Using `getByRole()`

For buttons, `getByRole()` is often a clean approach.

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

For links:

```js
await page.getByRole('link', { name: 'Products' }).click();
```

This is readable because it describes the element the user interacts with.

---

# 5. Click Using `getByText()`

If the visible text is the most useful locator:

```js
await page.getByText('Login').click();
```

Another example:

```js
await page.getByText('Add to Cart').click();
```

However, if the element is a button or link, a role-based locator may communicate the intent more clearly.

Example:

```js
await page.getByRole('button', { name: 'Add to Cart' }).click();
```

---

# 6. Click Using `locator()`

We can also use CSS or XPath through `locator()`.

CSS:

```js
await page.locator('#login-button').click();
```

XPath:

```js
await page.locator("//button[text()='Login']").click();
```

Use a stable locator whenever possible.

---

# 7. What Happens When Playwright Clicks?

When Playwright performs:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

Playwright does more than simply send a mouse click.

It performs actionability checks before clicking.

Conceptually:

```text
Find element
     ↓
Check it can be interacted with
     ↓
Wait if necessary
     ↓
Perform click
```

This is one of the reasons Playwright tests are more reliable than tests based on arbitrary fixed waits.

---

# 8. Click and Auto-Waiting

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

If the button is temporarily not ready, Playwright can wait for the required actionability conditions instead of immediately failing.

You normally should not write:

```js
await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Login' }).click();
```

just to make the click work.

Prefer Playwright's built-in waiting behavior.

---

# 9. Click a Login Button

Real QA example:

```js
test('Login test', async ({ page }) => {

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

});
```

Flow:

```text
Open Login
    ↓
Enter Username
    ↓
Enter Password
    ↓
Click Login
```

---

# 10. Click and Verify Navigation

Often a click causes navigation.

Example:

```js
await page
  .getByRole('link', { name: 'Dashboard' })
  .click();

await expect(page).toHaveURL(/dashboard/);
```

Flow:

```text
Dashboard link
       ↓
Click
       ↓
Dashboard page
       ↓
Verify URL
```

---

# 11. Click a Link

Example HTML:

```html
<a href="/products">Products</a>
```

Playwright:

```js
await page
  .getByRole('link', { name: 'Products' })
  .click();
```

Then verify:

```js
await expect(page).toHaveURL(/products/);
```

---

# 12. Click a Checkbox

Suppose:

```html
<input type="checkbox" id="terms">
<label for="terms">I agree to the terms</label>
```

Using the label:

```js
await page.getByLabel('I agree to the terms').check();
```

Although `check()` is generally more appropriate for checkboxes than `click()`, a checkbox can also be interacted with through a click when appropriate.

Example:

```js
await page.getByLabel('I agree to the terms').click();
```

For checkbox-specific automation, prefer:

```js
check()
uncheck()
```

because they communicate the intended state.

---

# 13. Click a Radio Button

Example:

```html
<input type="radio" id="male" name="gender">
<label for="male">Male</label>
```

Using the label:

```js
await page.getByLabel('Male').check();
```

Again, `check()` communicates the intended radio-button state better than a generic click.

---

# 14. Click a Menu

Example:

```js
await page
  .getByRole('button', { name: 'Menu' })
  .click();
```

Then:

```js
await page
  .getByRole('link', { name: 'Orders' })
  .click();
```

Flow:

```text
Menu
 ↓
Click
 ↓
Menu options
 ↓
Orders
 ↓
Click
```

---

# 15. Click a Tab

Example:

```js
await page
  .getByRole('tab', { name: 'Orders' })
  .click();
```

Then verify:

```js
await expect(
  page.getByRole('tabpanel')
).toBeVisible();
```

---

# 16. Click an Add-to-Cart Button

Example:

```js
await page
  .getByRole('button', { name: 'Add to Cart' })
  .click();
```

Then verify:

```js
await expect(
  page.getByText('Added to cart')
).toBeVisible();
```

Complete example:

```js
await page
  .getByRole('button', { name: 'Add to Cart' })
  .click();

await expect(
  page.getByText('Added to cart')
).toBeVisible();
```

---

# 17. Click an Element Inside a Specific Container

Suppose several products have the same Add to Cart button.

Example:

```text
iPhone
Add to Cart

Samsung
Add to Cart

Pixel
Add to Cart
```

Requirement:

```text
Add Samsung to cart.
```

Use a scoped locator:

```js
await page
  .locator('.product-card')
  .filter({ hasText: 'Samsung' })
  .getByRole('button', { name: 'Add to Cart' })
  .click();
```

This is better than:

```js
await page
  .getByRole('button', { name: 'Add to Cart' })
  .nth(1)
  .click();
```

because the filtered approach is based on the product, not its position.

---

# 18. Double Click

Playwright provides:

```js
locator.dblclick()
```

Example:

```js
await page
  .getByText('Document.txt')
  .dblclick();
```

This simulates a double-click.

Useful for applications where double-click opens or edits an item.

Example QA use case:

```text
File list
   ↓
Double-click file
   ↓
Editor opens
```

---

# 19. Right Click

A right-click can be performed using:

```js
locator.click({ button: 'right' });
```

Example:

```js
await page
  .getByText('Document.txt')
  .click({ button: 'right' });
```

This can be useful for testing custom context menus.

Example:

```text
Right-click file
       ↓
Context menu opens
       ↓
Verify menu option
```

---

# 20. Middle Click

Playwright also supports:

```js
await locator.click({ button: 'middle' });
```

This performs a middle mouse button click.

Use it only when the application's behavior specifically depends on middle-click.

---

# 21. Click With Modifier Keys

Playwright allows modifier keys during clicks.

Example:

```js
await page
  .getByRole('link', { name: 'Products' })
  .click({ modifiers: ['Control'] });
```

This simulates:

```text
Ctrl + Click
```

On macOS, a different modifier may be appropriate depending on the required behavior.

Other modifiers include:

```text
Alt
Control
Meta
Shift
```

Example:

```js
await locator.click({
  modifiers: ['Shift']
});
```

---

# 22. Force Click

Playwright provides:

```js
locator.click({ force: true });
```

Example:

```js
await page
  .getByRole('button', { name: 'Login' })
  .click({ force: true });
```

This tells Playwright to perform the click without performing the normal actionability checks that would otherwise prevent the action.

## Important

Do not use:

```js
force: true
```

as the first solution when a normal click fails.

If a click fails, first understand why.

Possible reasons include:

- Wrong locator
- Element is covered
- Element is not visible
- Application has not finished rendering
- Overlay is present
- Wrong element was selected

`force: true` can hide a real UI problem.

---

# 23. `force: true` — QA Example

Suppose a test has:

```js
await page.getByRole('button', { name: 'Submit' }).click();
```

and Playwright reports that the element cannot be clicked because another element is covering it.

Do not immediately change it to:

```js
await page
  .getByRole('button', { name: 'Submit' })
  .click({ force: true });
```

First investigate the UI.

For example:

```text
Button
  ↓
Overlay covering button
  ↓
User cannot actually click button
```

Forcing the click could make the automated test pass even though a real user cannot use the application.

---

# 24. `noWaitAfter`

Some Playwright APIs support options related to navigation waiting.

However, you generally should not disable normal waiting behavior unless you understand the exact navigation behavior and have a specific reason.

For normal automation, prefer the default behavior.

The important principle is:

```text
Do not disable Playwright's synchronization behavior unnecessarily.
```

---

# 25. Click Options

Common click options include:

```js
await locator.click({
  button: 'left',
  clickCount: 1,
  delay: 100,
  force: false,
  modifiers: ['Control'],
});
```

Important options:

```text
button
clickCount
delay
force
modifiers
```

Do not use options just for the sake of using them.

Use them only when the test requirement needs them.

---

# 26. `clickCount`

You can specify how many times the click should happen.

Example:

```js
await locator.click({
  clickCount: 2
});
```

This performs a double-click.

However, when the intention is clearly a double-click, this is usually more readable:

```js
await locator.dblclick();
```

---

# 27. Click Delay

A click can include a delay:

```js
await locator.click({
  delay: 100
});
```

The value is in milliseconds.

Example:

```text
100 ms
= 0.1 second
```

Use this only when the application's behavior genuinely depends on mouse timing.

Do not add arbitrary delays to normal tests.

---

# 28. Clicking a Specific Repeated Element

Suppose:

```text
User 1 → Delete
User 2 → Delete
User 3 → Delete
```

Avoid:

```js
await page.getByRole('button', { name: 'Delete' }).nth(1).click();
```

Prefer:

```js
await page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' })
  .getByRole('button', { name: 'Delete' })
  .click();
```

This is more stable and readable.

---

# 29. Click and Assertion

A good test usually verifies the result of the click.

Example:

```js
await page
  .getByRole('button', { name: 'Submit' })
  .click();

await expect(
  page.getByText('Submitted successfully')
).toBeVisible();
```

Flow:

```text
Action
  ↓
Click Submit
  ↓
Application processes request
  ↓
Expected result
  ↓
Assertion
```

---

# 30. Real-Time QA Example — Delete User

Requirement:

```text
Delete Lingaraj's user.
```

Test:

```js
const userRow = page
  .getByRole('row')
  .filter({ hasText: 'Lingaraj' });

await userRow
  .getByRole('button', { name: 'Delete' })
  .click();

await page
  .getByRole('button', { name: 'Confirm' })
  .click();

await expect(
  page.getByText('User deleted successfully')
).toBeVisible();
```

This represents a realistic QA flow:

```text
Find correct user
       ↓
Click Delete
       ↓
Confirm deletion
       ↓
Verify success message
```

---

# 31. Real-Time QA Example — Search

Suppose there is a Search button:

```js
await page
  .getByRole('button', { name: 'Search' })
  .click();
```

Then:

```js
await expect(
  page.getByRole('heading', { name: 'Search Results' })
).toBeVisible();
```

---

# 32. Real-Time QA Example — Navigation

```js
await page
  .getByRole('link', { name: 'Orders' })
  .click();

await expect(page).toHaveURL(/orders/);
```

The click performs the action.

The assertion verifies the result.

---

# 33. Common Click Mistakes

## Mistake 1 — Using a Fixed Wait Before Clicking

Avoid:

```js
await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Login' }).click();
```

Prefer:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

---

## Mistake 2 — Using `force: true` Immediately

Avoid using:

```js
.click({ force: true })
```

as a workaround for every click failure.

Investigate the actual reason first.

---

## Mistake 3 — Using `nth()` Without a Reason

Avoid:

```js
page.getByRole('button', { name: 'Edit' }).nth(4).click();
```

if the position is not meaningful.

Use a scoped locator.

---

## Mistake 4 — Clicking Without Verifying the Result

Weak:

```js
await page.getByRole('button', { name: 'Submit' }).click();
```

Better:

```js
await page.getByRole('button', { name: 'Submit' }).click();

await expect(
  page.getByText('Submitted successfully')
).toBeVisible();
```

---

## Mistake 5 — Using the Wrong Locator

If there are multiple buttons:

```text
Save
Save
Save
```

do not blindly click the first one.

Identify the correct container or use a more specific locator.

---

# 34. Click vs Check

For checkboxes and radio buttons, prefer state-specific methods.

Checkbox:

```js
await page.getByLabel('I agree').check();
```

Uncheck:

```js
await page.getByLabel('I agree').uncheck();
```

Radio:

```js
await page.getByLabel('Male').check();
```

Why?

Because:

```text
click()
```

means:

```text
Perform a mouse click
```

while:

```text
check()
```

communicates:

```text
Make sure this control is checked
```

This makes the test intention clearer.

---

# 35. Important Click Methods

```text
click()
```

Normal click.

```js
await locator.click();
```

---

```text
dblclick()
```

Double-click.

```js
await locator.dblclick();
```

---

```text
click({ button: 'right' })
```

Right-click.

```js
await locator.click({ button: 'right' });
```

---

```text
click({ modifiers: ['Control'] })
```

Click with modifier key.

```js
await locator.click({
  modifiers: ['Control']
});
```

---

```text
click({ force: true })
```

Force the action.

```js
await locator.click({
  force: true
});
```

Use carefully.

---

# 36. Interview Questions

## Q1. How do you click an element in Playwright?

Using:

```js
await locator.click();
```

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

---

## Q2. How do you double-click?

Using:

```js
await locator.dblclick();
```

---

## Q3. How do you perform a right-click?

Using:

```js
await locator.click({
  button: 'right'
});
```

---

## Q4. How do you click with a keyboard modifier?

Example:

```js
await locator.click({
  modifiers: ['Control']
});
```

---

## Q5. What does `force: true` do?

It forces the click without the normal actionability checks that would otherwise prevent the action.

It should be used carefully because it can hide real UI problems.

---

## Q6. Should we use `waitForTimeout()` before every click?

No.

Playwright provides automatic waiting for actionability. Fixed waits should not be the default synchronization strategy.

---

## Q7. Why should we avoid excessive `nth()` usage?

Because element positions can change when the UI changes.

A scoped, meaningful locator is usually more stable.

---

## Q8. How do you verify that a click successfully navigated to another page?

Example:

```js
await page
  .getByRole('link', { name: 'Orders' })
  .click();

await expect(page).toHaveURL(/orders/);
```

---

# 37. Quick Revision

```text
Click Action
      ↓
locator.click()
      ↓
Find element
      ↓
Actionability checks
      ↓
Click
      ↓
Application response
      ↓
Assertion
```

Important methods:

```js
locator.click();

locator.dblclick();

locator.click({
  button: 'right'
});

locator.click({
  modifiers: ['Control']
});
```

For checkboxes/radios:

```js
locator.check();
locator.uncheck();
```

---

# 38. Easy Memory Trick

Remember:

```text
C D R M F
```

```text
C → Click
D → Double-click
R → Right-click
M → Modifier click
F → Force
```

And remember:

```text
Normal click
      ↓
click()

Double click
      ↓
dblclick()

Right click
      ↓
click({ button: 'right' })

Modifier
      ↓
click({ modifiers: [...] })

Force
      ↓
click({ force: true })
```

---

# 39. Final Definition

**Click action in Playwright is the process of interacting with a web element through methods such as `click()` and `dblclick()`. Playwright performs actionability checks and automatic waiting before normal clicks, making click-based automation more reliable. Advanced click options can be used for right-clicks, modifier keys, multiple clicks, and specific interaction requirements.**

---

# 40. Key Takeaway

The most important Playwright click pattern is:

```js
await page
  .getByRole('button', { name: 'Login' })
  .click();
```

For real QA automation:

```text
Find the correct element
        ↓
Click
        ↓
Wait for application response
        ↓
Verify expected result
```

Example:

```js
await page
  .getByRole('button', { name: 'Submit' })
  .click();

await expect(
  page.getByText('Submitted successfully')
).toBeVisible();
```

A good automation test does not simply click an element.

It **performs the user action and verifies the expected business result**.