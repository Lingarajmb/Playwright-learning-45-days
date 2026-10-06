This is the next concept after "Forms Handling".

It will cover:
- What are mouse actions?
- Why mouse actions are needed in QA
- click()
- dblclick()
- hover()
- mouse.move()
- mouse.down()
- mouse.up()
- Right-click / button: 'right'
- Middle-click
- Coordinates
- Drag and drop
- Real QA examples
- Line-by-line explanation
- Common mistakes
- Interview questions
- Quick revision + memory trick


# Concept 24 — Mouse Actions in Playwright

## 1. What are Mouse Actions?

Mouse actions are operations that simulate how a real user interacts with a web application using a mouse.

In Playwright, we can automate actions such as:

- Click
- Double-click
- Hover
- Right-click
- Middle-click
- Mouse movement
- Mouse button press
- Mouse button release
- Drag and drop

Mouse actions are commonly used when testing:

- Buttons
- Links
- Menus
- Tooltips
- Context menus
- Dropdown menus
- Sliders
- Drag-and-drop functionality
- Interactive UI components

---

# 2. Why are Mouse Actions Important in QA?

Real users interact with applications using a mouse.

For example:

```text
User
  |
  +-- Moves mouse
  |
  +-- Hovers over menu
  |
  +-- Clicks button
  |
  +-- Right-clicks
  |
  +-- Drags an item
  |
  +-- Drops it somewhere
```

As a QA engineer, we need to verify that these interactions work correctly.

Example:

```text
Hover over Profile
        ↓
Dropdown menu appears
        ↓
Click Settings
        ↓
Settings page opens
```

Playwright can automate this entire flow.

---

# 3. Main Mouse Actions

The important mouse-related actions are:

```text
Mouse Actions
     |
     +-- click()
     |
     +-- dblclick()
     |
     +-- hover()
     |
     +-- mouse.move()
     |
     +-- mouse.down()
     |
     +-- mouse.up()
     |
     +-- Right-click
     |
     +-- Middle-click
     |
     +-- Drag and Drop
```

---

# 4. `click()`

`click()` simulates a normal left mouse click.

Example:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

This is equivalent to a user clicking:

```text
[ Login ]
    ↑
  Mouse click
```

---

# 5. Click a Link

Example:

```js
await page.getByRole('link', { name: 'Home' }).click();
```

This simulates the user clicking the Home link.

---

# 6. Click a Checkbox

Example:

```js
await page.getByLabel('Remember me').click();
```

However, when the requirement is specifically to ensure a checkbox is checked, prefer:

```js
await page.getByLabel('Remember me').check();
```

The important point is:

```text
click() → perform a mouse click

check() → make sure checkbox is checked
```

---

# 7. Click with a CSS Locator

Example:

```js
await page.locator('#loginButton').click();
```

This finds:

```html
<button id="loginButton">Login</button>
```

and clicks it.

---

# 8. Double Click

Playwright provides:

```js
dblclick()
```

to simulate a double-click.

Example:

```js
await page.getByText('Document 1').dblclick();
```

This performs:

```text
Click
  +
Click
  ↓
Double click
```

---

# 9. Real QA Example — File Manager

Imagine a file manager:

```text
Documents
    |
    +-- Document 1
    +-- Document 2
    +-- Report
```

A user double-clicks a document to open it.

Playwright:

```js
await page.getByText('Document 1').dblclick();
```

Then verify:

```js
await expect(page.getByText('Document 1 Details'))
  .toBeVisible();
```

---

# 10. `hover()`

`hover()` moves the mouse over an element.

Example:

```js
await page.getByText('Products').hover();
```

This simulates:

```text
Mouse
  ↓
[ Products ]
```

Hover is commonly used for:

- Menus
- Tooltips
- Hidden buttons
- User profile menus
- Navigation menus

---

# 11. Real QA Example — Hover Menu

Imagine:

```text
Products
    ↓
Hover
    ↓
+----------------+
| Laptops        |
| Mobiles        |
| Accessories    |
+----------------+
```

Playwright:

```js
await page.getByText('Products').hover();

await expect(page.getByText('Laptops'))
  .toBeVisible();
```

The test verifies that the submenu appears after hovering.

---

# 12. Hover Over a Button

Example:

```js
await page.getByRole('button', { name: 'Help' }).hover();
```

Then verify a tooltip:

```js
await expect(page.getByText('Contact support'))
  .toBeVisible();
```

---

# 13. Why is Hover Important in QA?

Some UI elements appear only when the mouse moves over another element.

Examples:

```text
Hover profile
      ↓
Profile menu appears
```

```text
Hover information icon
      ↓
Tooltip appears
```

```text
Hover product
      ↓
Quick View button appears
```

Without `hover()`, these elements may not become visible.

---

# 14. Right-Click

A right-click opens the context menu in many applications.

Playwright can perform a right-click using:

```js
await page.getByText('File 1').click({
  button: 'right'
});
```

Example:

```js
await page.getByText('Document 1').click({
  button: 'right'
});
```

Expected:

```text
+----------------+
| Open           |
| Rename         |
| Delete         |
| Properties     |
+----------------+
```

---

# 15. Real QA Example — Context Menu

```js
await page.getByText('Document 1').click({
  button: 'right'
});

await expect(page.getByText('Rename'))
  .toBeVisible();

await expect(page.getByText('Delete'))
  .toBeVisible();
```

This verifies that the context menu appears after a right-click.

---

# 16. Middle Click

A middle mouse click can be performed using:

```js
await page.getByRole('link', { name: 'Reports' }).click({
  button: 'middle'
});
```

Middle-click behavior depends on the application and browser.

A common browser behavior is opening a link in another tab.

---

# 17. Click with Modifier Keys

Sometimes a user clicks while holding a keyboard modifier.

Example:

```js
await page.getByText('Report').click({
  modifiers: ['Control']
});
```

This simulates:

```text
Hold Ctrl
   +
Click Report
```

Other modifier keys include:

```text
Control
Shift
Alt
Meta
```

Example:

```js
await page.getByText('Report').click({
  modifiers: ['Shift']
});
```

---

# 18. `page.mouse`

Playwright also provides a low-level mouse API:

```js
page.mouse
```

It allows us to control the mouse using coordinates.

Important methods include:

```js
page.mouse.move()
page.mouse.down()
page.mouse.up()
page.mouse.click()
page.mouse.dblclick()
```

These are lower-level mouse operations compared with locator actions.

---

# 19. `mouse.move()`

`mouse.move()` moves the mouse pointer to a specific coordinate.

Syntax:

```js
await page.mouse.move(x, y);
```

Example:

```js
await page.mouse.move(500, 300);
```

This moves the mouse to:

```text
X = 500
Y = 300
```

---

# 20. Understanding Coordinates

A browser page can be represented approximately like this:

```text
(0,0)
  +------------------------------+
  |                              |
  |                              |
  |          Page                |
  |                              |
  |                X →           |
  |                              |
  +------------------------------+
                 ↓
                 Y
```

For example:

```js
await page.mouse.move(500, 300);
```

means:

```text
Move mouse to X=500, Y=300
```

---

# 21. Why Prefer Locator-Based Mouse Actions?

Usually prefer:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

instead of:

```js
await page.mouse.click(500, 300);
```

Why?

Because coordinates can change.

For example:

```text
Screen 1
Login button → X=500, Y=300

Screen 2
Login button → X=650, Y=400
```

The coordinate-based test may fail.

Locator-based testing finds the actual element.

Therefore:

```text
Locator-based action
        ↓
More stable
```

```text
Coordinate-based action
        ↓
More dependent on UI position
```

Use low-level mouse coordinates when the test genuinely requires coordinate-based interaction.

---

# 22. `mouse.down()`

`mouse.down()` presses a mouse button.

Example:

```js
await page.mouse.down();
```

This means:

```text
Mouse button → Pressed
```

It is commonly used together with:

```js
mouse.move()
mouse.down()
mouse.move()
mouse.up()
```

for operations such as dragging.

---

# 23. `mouse.up()`

`mouse.up()` releases the mouse button.

Example:

```js
await page.mouse.up();
```

Flow:

```text
mouse.down()
     ↓
Mouse button pressed
     ↓
mouse.move()
     ↓
Move while holding button
     ↓
mouse.up()
     ↓
Mouse button released
```

---

# 24. Drag and Drop

Drag and drop means:

```text
Click and hold
      ↓
Move element
      ↓
Release
```

Example:

```text
[Item A]

        Drag
          ↓
          ↓
          ↓

[Drop Area]
```

---

# 25. Simple Drag-and-Drop

Playwright provides:

```js
await page.locator('#source')
  .dragTo(page.locator('#target'));
```

Example:

```js
const source = page.locator('#source');
const target = page.locator('#target');

await source.dragTo(target);
```

This is the preferred approach when the application supports normal drag-and-drop behavior.

---

# 26. Real QA Drag-and-Drop Example

Imagine a task management application:

```text
To Do
+------------------+
| Login task       |
| API task         |
+------------------+

Completed
+------------------+
|                  |
+------------------+
```

Test:

```js
const task = page.getByText('Login task');
const completed = page.getByText('Completed');

await task.dragTo(completed);
```

Then verify:

```js
await expect(completed.getByText('Login task'))
  .toBeVisible();
```

The exact locator depends on the application's DOM structure.

---

# 27. Manual Drag Flow with Mouse API

For special cases, mouse APIs can be used.

Example:

```js
await page.mouse.move(200, 200);

await page.mouse.down();

await page.mouse.move(500, 400);

await page.mouse.up();
```

Flow:

```text
Move
 ↓
Press mouse
 ↓
Move while holding
 ↓
Release
```

This gives lower-level control.

---

# 28. `mouse.click()`

The mouse API also has:

```js
await page.mouse.click(x, y);
```

Example:

```js
await page.mouse.click(500, 300);
```

This clicks at the specified coordinates.

But remember:

```text
Locator action
    ↓
Preferred for normal element interaction

Mouse coordinates
    ↓
Useful for special coordinate-based interactions
```

---

# 29. `mouse.dblclick()`

The low-level mouse API also supports double-click:

```js
await page.mouse.dblclick(500, 300);
```

This performs a double-click at the given coordinates.

For normal elements, prefer:

```js
await page.getByText('Document').dblclick();
```

---

# 30. Real-Time QA Example — Product Menu

Consider an e-commerce application:

```text
Home
Products
Cart
Profile
```

Hover over Products:

```js
await page.getByText('Products').hover();
```

Verify submenu:

```js
await expect(page.getByText('Laptops'))
  .toBeVisible();

await expect(page.getByText('Mobiles'))
  .toBeVisible();
```

Click Laptops:

```js
await page.getByText('Laptops').click();
```

Verify navigation:

```js
await expect(page).toHaveURL(/laptops/);
```

Complete flow:

```js
await page.getByText('Products').hover();

await expect(page.getByText('Laptops'))
  .toBeVisible();

await page.getByText('Laptops').click();

await expect(page).toHaveURL(/laptops/);
```

---

# 31. Real-Time QA Example — Tooltip

Suppose an application has:

```text
Password field     [?]
```

When the user hovers over `?`:

```text
Password must contain at least 8 characters
```

Test:

```js
await page.getByLabel('Password information').hover();

await expect(
  page.getByText('Password must contain at least 8 characters')
).toBeVisible();
```

This verifies hover-based tooltip behavior.

---

# 32. Real-Time QA Example — Context Menu

```js
await page.getByText('Employee 101').click({
  button: 'right'
});

await expect(page.getByText('Edit'))
  .toBeVisible();

await expect(page.getByText('Delete'))
  .toBeVisible();
```

This verifies that the expected context-menu options appear.

---

# 33. Mouse Actions vs Locator Actions

There are two important levels.

### Locator-based actions

```js
await button.click();
await menu.hover();
await item.dblclick();
```

These interact with actual elements.

### Low-level mouse actions

```js
await page.mouse.move(500, 300);
await page.mouse.down();
await page.mouse.move(700, 400);
await page.mouse.up();
```

These interact using mouse coordinates.

---

# 34. When Should You Use Each?

Use locator actions for normal UI interactions:

```text
Button
Link
Menu
Checkbox
Product
Table row
Tooltip trigger
```

Example:

```js
await page.getByRole('button', { name: 'Submit' }).click();
```

Use low-level mouse actions when you need special mouse control:

```text
Coordinate-based interaction
Custom drag behavior
Canvas
Drawing area
Special graphical component
```

Example:

```js
await page.mouse.move(100, 100);
await page.mouse.down();
await page.mouse.move(300, 300);
await page.mouse.up();
```

---

# 35. Mouse Actions and Auto-Waiting

Locator-based mouse actions benefit from Playwright's actionability checks.

For example:

```js
await page.getByRole('button', { name: 'Submit' }).click();
```

Playwright waits for the element to be ready for the action.

It checks conditions such as whether the element can be interacted with.

This helps reduce flaky tests.

---

# 36. Common Mistakes

## Mistake 1 — Using coordinates unnecessarily

Avoid:

```js
await page.mouse.click(500, 300);
```

when you can use:

```js
await page.getByRole('button', { name: 'Login' }).click();
```

---

## Mistake 2 — Using `click()` instead of `hover()`

If the requirement is:

```text
Hover over menu → submenu appears
```

use:

```js
await menu.hover();
```

not:

```js
await menu.click();
```

---

## Mistake 3 — Forgetting to verify hover behavior

Don't stop at:

```js
await menu.hover();
```

Also verify the expected UI:

```js
await expect(page.getByText('Settings'))
  .toBeVisible();
```

---

## Mistake 4 — Using fixed waits

Avoid:

```js
await page.waitForTimeout(3000);
```

just because a menu appears after hover.

Prefer an assertion:

```js
await expect(page.getByText('Settings'))
  .toBeVisible();
```

---

## Mistake 5 — Using low-level mouse APIs for everything

Do not write every test using:

```js
page.mouse.move()
page.mouse.click()
```

when a locator can perform the action.

Locator-based actions are generally easier to read and maintain.

---

# 37. Best Practices

### 1. Prefer locators

Good:

```js
await page.getByRole('button', { name: 'Submit' }).click();
```

### 2. Use hover for hover-dependent UI

```js
await page.getByText('Products').hover();
```

### 3. Verify the result

```js
await expect(page.getByText('Laptops'))
  .toBeVisible();
```

### 4. Use coordinates only when necessary

```js
await page.mouse.move(500, 300);
```

Use this for special cases rather than normal buttons and links.

### 5. Keep the test close to real user behavior

Think:

```text
User action
    ↓
Playwright action
    ↓
Expected result
```

---

# 38. Important Mouse Methods

| Method | Purpose |
|---|---|
| `click()` | Normal mouse click |
| `dblclick()` | Double-click |
| `hover()` | Move mouse over an element |
| `click({ button: 'right' })` | Right-click |
| `click({ button: 'middle' })` | Middle-click |
| `click({ modifiers: [...] })` | Click with keyboard modifier |
| `mouse.move()` | Move mouse to coordinates |
| `mouse.down()` | Press mouse button |
| `mouse.up()` | Release mouse button |
| `mouse.click()` | Coordinate-based click |
| `mouse.dblclick()` | Coordinate-based double-click |
| `dragTo()` | Drag one element to another |

---

# 39. Important Syntax

### Click

```js
await locator.click();
```

### Double-click

```js
await locator.dblclick();
```

### Hover

```js
await locator.hover();
```

### Right-click

```js
await locator.click({
  button: 'right'
});
```

### Middle-click

```js
await locator.click({
  button: 'middle'
});
```

### Modifier click

```js
await locator.click({
  modifiers: ['Control']
});
```

### Mouse movement

```js
await page.mouse.move(x, y);
```

### Mouse press

```js
await page.mouse.down();
```

### Mouse release

```js
await page.mouse.up();
```

### Coordinate click

```js
await page.mouse.click(x, y);
```

### Drag and drop

```js
await source.dragTo(target);
```

---

# 40. Interview Questions

## Q1. How do you perform a mouse hover in Playwright?

Answer:

I use the `hover()` method.

```js
await page.getByText('Products').hover();
```

---

## Q2. How do you perform a double-click?

Answer:

I use `dblclick()`.

```js
await page.getByText('Document').dblclick();
```

---

## Q3. How do you perform a right-click?

Answer:

I use `click()` with the `button` option.

```js
await page.getByText('Document').click({
  button: 'right'
});
```

---

## Q4. What is `page.mouse`?

Answer:

`page.mouse` is Playwright's low-level mouse API. It allows us to control the mouse using operations such as `move()`, `down()`, `up()`, `click()`, and `dblclick()`.

---

## Q5. Why should we avoid unnecessary coordinate-based mouse actions?

Answer:

Coordinate-based actions depend on the position of elements on the page. If the UI layout changes, the coordinates may no longer point to the intended element. Locator-based actions are generally more stable and readable.

---

## Q6. How do you perform drag and drop?

Answer:

For normal element drag-and-drop, I can use `dragTo()`.

```js
await source.dragTo(target);
```

For special cases, low-level mouse actions can be used with `mouse.move()`, `mouse.down()`, and `mouse.up()`.

---

## Q7. When would you use `page.mouse`?

Answer:

I use `page.mouse` when I need low-level mouse control, such as coordinate-based interactions, canvas interactions, custom drag behavior, or other graphical components where normal locator actions are not sufficient.

---

# 41. Quick Revision

```text
MOUSE ACTIONS
      |
      +-- click()
      |      → Normal click
      |
      +-- dblclick()
      |      → Double-click
      |
      +-- hover()
      |      → Move over element
      |
      +-- Right-click
      |      → button: 'right'
      |
      +-- Middle-click
      |      → button: 'middle'
      |
      +-- page.mouse
      |      |
      |      +-- move()
      |      +-- down()
      |      +-- up()
      |      +-- click()
      |      +-- dblclick()
      |
      +-- dragTo()
             → Drag and drop
```

---

# 42. Easy Memory Trick

Remember:

```text
CLICK     → click()
DOUBLE    → dblclick()
HOVER     → hover()
RIGHT     → button: 'right'
MOVE      → mouse.move()
PRESS     → mouse.down()
RELEASE   → mouse.up()
DRAG      → dragTo()
```

Easy sentence:

> **Click → Double-click → Hover → Move → Press → Drag → Release**

---

# 43. Final Definition

> **Mouse actions in Playwright are operations used to simulate user mouse interactions such as clicking, double-clicking, hovering, right-clicking, moving, pressing, releasing, and dragging elements in a web application.**

---

# 44. One-Line Interview Summary

> **In Playwright, I use locator-based actions such as `click()`, `dblclick()`, and `hover()` for normal UI interactions, and the low-level `page.mouse` API for coordinate-based or special mouse interactions such as custom dragging and graphical components.**

---

# 45. Final Example to Remember

```js
const { test, expect } = require('@playwright/test');

test('Mouse Actions Example', async ({ page }) => {

  await page.goto('https://example.com');

  // Normal click
  await page.getByRole('button', { name: 'Login' }).click();

  // Hover
  await page.getByText('Products').hover();

  // Verify hover menu
  await expect(page.getByText('Laptops'))
    .toBeVisible();

  // Double-click
  await page.getByText('Document').dblclick();

  // Right-click
  await page.getByText('Report').click({
    button: 'right'
  });

  // Drag and drop
  const source = page.locator('#source');
  const target = page.locator('#target');

  await source.dragTo(target);
});
```
```