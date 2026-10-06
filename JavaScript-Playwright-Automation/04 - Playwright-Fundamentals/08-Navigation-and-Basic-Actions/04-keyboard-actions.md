# Concept 22 — Keyboard Actions

## 1. What Are Keyboard Actions?

Keyboard actions are interactions that simulate a user pressing keys on the keyboard.

In real applications, users use the keyboard to:

- Enter text
- Press Enter
- Move between fields using Tab
- Close dialogs using Escape
- Select all text
- Copy and paste
- Use keyboard shortcuts
- Navigate menus
- Submit forms

Playwright provides keyboard APIs to automate these interactions.

The most commonly used method is:

```js
locator.press()
```

Example:

```js
await page
  .getByPlaceholder('Search products')
  .press('Enter');
```

---

# 2. Why Do We Need Keyboard Actions?

Not every user interaction is performed using the mouse.

For example:

```text
Enter text
    ↓
Press Tab
    ↓
Move to Password
    ↓
Press Enter
    ↓
Submit Login
```

Keyboard automation is especially useful for testing:

- Forms
- Search boxes
- Login forms
- Keyboard shortcuts
- Dialogs
- Dropdowns
- Accessibility
- Focus behavior
- Navigation
- Applications that depend on keyboard events

---

# 3. Basic `press()` Syntax

Syntax:

```js
await locator.press('Key');
```

Example:

```js
await page
  .getByPlaceholder('Search')
  .press('Enter');
```

This means:

```text
Find Search field
      ↓
Press Enter
```

---

# 4. Pressing Enter

One of the most common keyboard actions is Enter.

Example:

```js
await page
  .getByPlaceholder('Search products')
  .press('Enter');
```

Real QA use case:

```text
Enter search text
       ↓
Press Enter
       ↓
Search starts
```

---

# 5. Search Example

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
Search field
     ↓
Fill "Laptop"
     ↓
Press Enter
     ↓
Search executes
```

We can verify the result:

```js
await expect(
  page.getByText('Laptop')
).toBeVisible();
```

---

# 6. Pressing Escape

The Escape key is commonly used to:

- Close dialogs
- Close dropdowns
- Close menus
- Cancel an operation
- Exit overlays

Example:

```js
await page.keyboard.press('Escape');
```

This sends the Escape key to the page.

---

# 7. `locator.press()` vs `page.keyboard.press()`

There are two useful approaches.

### Locator-based press

```js
await page
  .getByPlaceholder('Search')
  .press('Enter');
```

This presses the key while interacting with the specified element.

### Page-level keyboard

```js
await page.keyboard.press('Escape');
```

This sends the key through the page's keyboard interface.

Easy memory:

```text
Specific element
      ↓
locator.press()

Page-level keyboard action
      ↓
page.keyboard.press()
```

---

# 8. Pressing Tab

Tab is commonly used to move focus between form fields.

Example:

```js
await page
  .getByLabel('Username')
  .press('Tab');
```

This simulates pressing the Tab key from the Username field.

Typical flow:

```text
Username
   ↓
Tab
   ↓
Password
   ↓
Tab
   ↓
Login button
```

---

# 9. Form Navigation Using Tab

Example:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');

await page
  .getByLabel('Username')
  .press('Tab');
```

The browser moves focus to the next focusable element.

This can be useful when testing keyboard accessibility.

---

# 10. Pressing Backspace

Example:

```js
await page
  .getByLabel('Username')
  .press('Backspace');
```

This sends a Backspace key to the input.

However, if the requirement is simply to replace the entire value, prefer:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');
```

Use keyboard keys when the actual keyboard behavior is what you want to test.

---

# 11. Pressing Delete

Example:

```js
await page
  .getByLabel('Username')
  .press('Delete');
```

This simulates the Delete key.

---

# 12. Pressing Arrow Keys

Playwright supports arrow keys.

Examples:

```js
await locator.press('ArrowDown');
```

```js
await locator.press('ArrowUp');
```

```js
await locator.press('ArrowLeft');
```

```js
await locator.press('ArrowRight');
```

These can be useful for:

- Dropdowns
- Menus
- Custom controls
- Keyboard navigation
- Date pickers

---

# 13. Example — Dropdown Keyboard Navigation

Suppose a custom dropdown opens when clicked.

```js
await page
  .getByRole('combobox', { name: 'Country' })
  .click();

await page
  .getByRole('combobox', { name: 'Country' })
  .press('ArrowDown');

await page
  .getByRole('combobox', { name: 'Country' })
  .press('Enter');
```

Flow:

```text
Open dropdown
     ↓
Arrow Down
     ↓
Move to option
     ↓
Enter
     ↓
Select option
```

---

# 14. Modifier Keys

Keyboard actions can include modifier keys.

Common modifiers:

```text
Control
Shift
Alt
Meta
```

Example:

```js
await page
  .getByLabel('Search')
  .press('Control+A');
```

This means:

```text
Control + A
```

It is commonly used to select all text.

---

# 15. Select All Text

Example:

```js
await page
  .getByLabel('Username')
  .press('Control+A');
```

Then:

```js
await page
  .getByLabel('Username')
  .press('Backspace');
```

Flow:

```text
Username field
      ↓
Ctrl + A
      ↓
Select all
      ↓
Backspace
      ↓
Clear text
```

However, if your goal is simply to clear the field, this is usually simpler:

```js
await page
  .getByLabel('Username')
  .fill('');
```

Use keyboard selection when you specifically want to test keyboard behavior.

---

# 16. Control vs Meta

Keyboard shortcuts can differ between operating systems.

For example:

```text
Windows/Linux → Control
macOS         → Meta
```

So when designing cross-platform tests, be aware of the platform-specific modifier required by the application.

---

# 17. Keyboard Shortcut Example

Suppose an application supports:

```text
Ctrl + S
```

for Save.

Playwright:

```js
await page.keyboard.press('Control+S');
```

Then verify:

```js
await expect(
  page.getByText('Saved successfully')
).toBeVisible();
```

Flow:

```text
Enter data
    ↓
Ctrl + S
    ↓
Application saves
    ↓
Verify success
```

---

# 18. Page-Level Keyboard Actions

Use:

```js
page.keyboard.press()
```

when the action is intended for the current page/focused element.

Example:

```js
await page.keyboard.press('Escape');
```

Another example:

```js
await page.keyboard.press('Control+S');
```

The current focus/context matters.

---

# 19. Keyboard Down and Up

Playwright also provides lower-level keyboard methods.

```js
await page.keyboard.down('Shift');
```

Then:

```js
await page.keyboard.up('Shift');
```

These are useful when you specifically need to hold a key down while performing another keyboard or mouse action.

Example:

```js
await page.keyboard.down('Shift');

await page.getByText('Item 2').click();

await page.keyboard.up('Shift');
```

This can simulate:

```text
Hold Shift
    ↓
Click item
    ↓
Release Shift
```

---

# 20. `keyboard.press()` vs `keyboard.down()` / `keyboard.up()`

### `press()`

Performs a complete key press.

```js
await page.keyboard.press('Enter');
```

Conceptually:

```text
Key down
   ↓
Key up
```

### `down()`

Presses and holds the key.

```js
await page.keyboard.down('Shift');
```

### `up()`

Releases the key.

```js
await page.keyboard.up('Shift');
```

Memory:

```text
press() → complete key action

down()  → press/hold

up()    → release
```

---

# 21. Typing Text vs Keyboard Keys

For normal form input:

```js
await locator.fill('Lingaraj');
```

For a specific keyboard key:

```js
await locator.press('Enter');
```

For page-level keyboard actions:

```js
await page.keyboard.press('Escape');
```

Think:

```text
Need to set text?
      ↓
fill()

Need to press a key?
      ↓
press()
```

---

# 22. Real-Time QA Example — Login With Keyboard

Suppose the requirement is:

```text
User should be able to submit login using Enter.
```

Test:

```js
test('Login using Enter key', async ({ page }) => {

  await page.goto('/login');

  await page
    .getByLabel('Username')
    .fill('Lingaraj');

  await page
    .getByLabel('Password')
    .fill('Password123');

  await page
    .getByLabel('Password')
    .press('Enter');

  await expect(page).toHaveURL(/dashboard/);

});
```

This tests actual keyboard-based form submission.

---

# 23. Real-Time QA Example — Search With Enter

Requirement:

```text
Search should execute when the user presses Enter.
```

Test:

```js
test('Search using Enter key', async ({ page }) => {

  await page.goto('/products');

  const search = page.getByPlaceholder('Search products');

  await search.fill('Laptop');

  await search.press('Enter');

  await expect(
    page.getByText('Laptop')
  ).toBeVisible();

});
```

---

# 24. Real-Time QA Example — Close Dialog With Escape

Requirement:

```text
Pressing Escape should close the dialog.
```

Test:

```js
test('Close dialog using Escape', async ({ page }) => {

  await page.goto('/settings');

  await page
    .getByRole('button', { name: 'Open Settings' })
    .click();

  await expect(
    page.getByRole('dialog')
  ).toBeVisible();

  await page.keyboard.press('Escape');

  await expect(
    page.getByRole('dialog')
  ).toBeHidden();

});
```

Flow:

```text
Open dialog
    ↓
Verify dialog visible
    ↓
Press Escape
    ↓
Verify dialog hidden
```

---

# 25. Real-Time QA Example — Keyboard Navigation

Requirement:

```text
User should be able to navigate from Username to Password using Tab.
```

Example:

```js
await page
  .getByLabel('Username')
  .fill('Lingaraj');

await page
  .getByLabel('Username')
  .press('Tab');
```

If focus behavior is important, you can verify the focused element using appropriate Playwright assertions or DOM evaluation when necessary.

The important QA idea is:

```text
Keyboard action
      ↓
Focus changes
      ↓
Expected field receives focus
```

---

# 26. Keyboard Actions and Accessibility Testing

Keyboard testing is important for accessibility.

Real users may navigate an application without a mouse.

Important keyboard interactions include:

```text
Tab
Enter
Escape
Arrow keys
Space
Shift
Control
```

QA can verify:

- Elements are keyboard accessible
- Focus moves correctly
- Buttons can be activated
- Dialogs can be closed
- Menus can be navigated
- Forms can be submitted
- Keyboard shortcuts work as expected

---

# 27. Space Key

The Space key can be sent using:

```js
await locator.press('Space');
```

This can be useful for controls where Space is expected to activate or toggle an element.

For example, custom accessible controls may respond to Space.

For standard checkboxes, prefer:

```js
await locator.check();
```

when the test requirement is simply to make the checkbox checked.

---

# 28. Enter vs Space

These keys can have different meanings depending on the control.

```text
Enter
  ↓
Often activates/submits

Space
  ↓
Often toggles or activates certain controls
```

Do not assume they are interchangeable.

If the requirement specifically says:

```text
Press Enter
```

test:

```js
await locator.press('Enter');
```

If it says:

```text
Press Space
```

test:

```js
await locator.press('Space');
```

---

# 29. Keyboard Actions With Locators

A good pattern is:

```js
const search = page.getByPlaceholder('Search');

await search.fill('Laptop');

await search.press('Enter');
```

Using a variable makes the test easier to read.

Flow:

```text
Create locator
      ↓
Fill
      ↓
Press key
      ↓
Verify result
```

---

# 30. Keyboard Actions With Assertions

Example:

```js
const search = page.getByPlaceholder('Search products');

await search.fill('Laptop');

await search.press('Enter');

await expect(
  page.getByRole('heading', { name: /Laptop/ })
).toBeVisible();
```

This gives a complete test flow:

```text
Action
  ↓
Keyboard action
  ↓
Application response
  ↓
Assertion
```

---

# 31. Common Keyboard Mistakes

## Mistake 1 — Using `waitForTimeout()`

Avoid:

```js
await page.waitForTimeout(2000);

await search.press('Enter');
```

Do not add fixed waits just before keyboard actions unless there is a genuine reason.

---

## Mistake 2 — Using `fill()` When the Requirement Is a Keyboard Action

If the requirement is:

```text
Press Enter to submit
```

do not replace it with:

```js
await page.getByRole('button', { name: 'Submit' }).click();
```

That tests a different user interaction.

Instead:

```js
await locator.press('Enter');
```

---

## Mistake 3 — Using `press()` to Enter Large Text

For normal form population, prefer:

```js
await locator.fill('Lingaraj');
```

Use keyboard APIs when the keyboard behavior itself matters.

---

## Mistake 4 — Using the Wrong Focus

A page-level keyboard action:

```js
await page.keyboard.press('Enter');
```

acts on the current keyboard focus/context.

If the test requires a specific field, it can be clearer to use:

```js
await page
  .getByLabel('Password')
  .press('Enter');
```

---

## Mistake 5 — Ignoring Platform Differences

Keyboard shortcuts can differ between:

```text
Windows/Linux
```

and:

```text
macOS
```

Consider the target execution environment when using modifier keys.

---

# 32. Important Keyboard Methods

### Locator-level

```js
await locator.press('Enter');
```

---

### Page-level

```js
await page.keyboard.press('Escape');
```

---

### Hold a key

```js
await page.keyboard.down('Shift');
```

---

### Release a key

```js
await page.keyboard.up('Shift');
```

---

# 33. Important Keys to Remember

Common Playwright key names include:

```text
Enter
Tab
Escape
Backspace
Delete
Space
ArrowUp
ArrowDown
ArrowLeft
ArrowRight
Home
End
PageUp
PageDown
Control
Shift
Alt
Meta
```

Use the key name appropriate to the required keyboard action.

---

# 34. Complete Real-Time QA Example

```js
const { test, expect } = require('@playwright/test');

test('Submit login using keyboard', async ({ page }) => {

  await page.goto('/login');

  const username = page.getByLabel('Username');
  const password = page.getByLabel('Password');

  await username.fill('Lingaraj');

  await password.fill('Password123');

  await password.press('Enter');

  await expect(page).toHaveURL(/dashboard/);

});
```

---

# 35. Line-by-Line Explanation

```js
const username = page.getByLabel('Username');
```

Creates a locator for the Username field.

---

```js
const password = page.getByLabel('Password');
```

Creates a locator for the Password field.

---

```js
await username.fill('Lingaraj');
```

Enters the username.

---

```js
await password.fill('Password123');
```

Enters the password.

---

```js
await password.press('Enter');
```

Presses Enter while interacting with the Password field.

This tests keyboard-based form submission.

---

```js
await expect(page).toHaveURL(/dashboard/);
```

Verifies that login reached the dashboard.

---

# 36. Best Practices

## 1. Use keyboard actions only when they represent the requirement

If the requirement says:

```text
Press Enter
```

use:

```js
press('Enter')
```

---

## 2. Use `fill()` for normal text entry

```js
await locator.fill('Lingaraj');
```

---

## 3. Prefer locator-level keyboard actions when the target element matters

Good:

```js
await search.press('Enter');
```

---

## 4. Use page-level keyboard actions for page-wide behavior

Example:

```js
await page.keyboard.press('Escape');
```

---

## 5. Verify the result

Do not stop at the keyboard action.

Example:

```js
await search.press('Enter');

await expect(
  page.getByText('Laptop')
).toBeVisible();
```

---

# 37. Interview Questions

## Q1. How do you press a keyboard key in Playwright?

Using:

```js
await locator.press('Enter');
```

---

## Q2. How do you press Escape at page level?

```js
await page.keyboard.press('Escape');
```

---

## Q3. What is the difference between `locator.press()` and `page.keyboard.press()`?

```text
locator.press()
    ↓
Presses a key through a specific locator/focused element.

page.keyboard.press()
    ↓
Sends a keyboard key through the page keyboard interface.
```

---

## Q4. How do you test pressing Enter in a search box?

```js
const search = page.getByPlaceholder('Search');

await search.fill('Laptop');

await search.press('Enter');
```

---

## Q5. How do you simulate Ctrl+A?

```js
await locator.press('Control+A');
```

---

## Q6. How do you hold and release a keyboard key?

Hold:

```js
await page.keyboard.down('Shift');
```

Release:

```js
await page.keyboard.up('Shift');
```

---

## Q7. Why is keyboard testing important in QA?

Because real users may operate applications using keyboards, and keyboard accessibility and shortcuts are important parts of application usability and accessibility.

---

# 38. Quick Revision

```text
Keyboard Actions
        ↓
locator.press()
        ↓
Enter
Tab
Escape
Arrow keys
Backspace
Delete
Space
        ↓
page.keyboard.press()
        ↓
Page-level keyboard action
        ↓
keyboard.down()
        ↓
Hold key
        ↓
keyboard.up()
        ↓
Release key
```

Most common examples:

```js
await locator.press('Enter');

await locator.press('Tab');

await locator.press('Escape');

await page.keyboard.press('Escape');

await page.keyboard.press('Control+S');
```

---

# 39. Easy Memory Trick

Remember:

```text
P → Press
D → Down
U → Up
```

```text
press() → complete key action

down() → hold the key

up() → release the key
```

And remember:

```text
Text → fill()

Key → press()
```

Example:

```js
await search.fill('Laptop');

await search.press('Enter');
```

---

# 40. Final Definition

**Keyboard actions in Playwright are used to simulate user keyboard interactions such as Enter, Tab, Escape, arrow keys, shortcuts, and modifier keys. Playwright provides `locator.press()`, `page.keyboard.press()`, `keyboard.down()`, and `keyboard.up()` for different keyboard interaction requirements.**

---

# 41. Key Takeaway

The most important keyboard pattern is:

```js
const search = page.getByPlaceholder('Search products');

await search.fill('Laptop');

await search.press('Enter');

await expect(
  page.getByText('Laptop')
).toBeVisible();
```

Remember:

```text
Need to enter text?
        ↓
fill()

Need to press a key?
        ↓
press()

Need a page-level keyboard action?
        ↓
page.keyboard.press()

Need to hold a key?
        ↓
keyboard.down()

Need to release it?
        ↓
keyboard.up()
```

In real QA automation, always test the **actual user interaction required by the requirement**, and then verify the expected application behavior.