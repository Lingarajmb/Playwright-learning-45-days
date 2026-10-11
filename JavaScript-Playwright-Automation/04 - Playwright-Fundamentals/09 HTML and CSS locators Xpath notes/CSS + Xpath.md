Phase 1 — HTML Fundamentals
Step	Topic	What you need to learn	QA importance
1	HTML structure	html, head, body, basic page structure	⭐⭐
2	Common elements	button, input, a, div, span, label, select	⭐⭐⭐
3	Attributes	id, class, name, type, placeholder, value	⭐⭐⭐⭐⭐
4	Text/content	Visible text inside elements	⭐⭐⭐⭐⭐
5	Parent & child	Parent, child, sibling relationships	⭐⭐⭐⭐
6	Forms	input, label, button, select	⭐⭐⭐⭐⭐
7	Inspecting elements	Using browser DevTools → Inspect	⭐⭐⭐⭐⭐


Phase 2 — CSS Selector Fundamentals
Step	Topic	Example	QA importance
8	Element selector	button	⭐⭐⭐
9	ID selector	#loginBtn	⭐⭐⭐⭐⭐
10	Class selector	.login-button	⭐⭐⭐⭐⭐
11	Attribute selector	[name="username"]	⭐⭐⭐⭐⭐
12	Multiple conditions	input[name="username"]	⭐⭐⭐⭐⭐
13	Parent/child selector	.login-form input	⭐⭐⭐⭐
14	Multiple elements	button.login-button	⭐⭐⭐⭐



--------------------------------------------

# CSS + XPath for Playwright QA — Complete Learning Notes

## 1. Course Objective

Learn how to locate HTML elements for Playwright automation testing using CSS selectors and XPath.

The course should be:
- Simple, short, and practical.
- Focused on real QA automation.
- Taught one concept at a time.
- Based on practice questions and answer reviews.
- Free from unnecessary repetition of completed topics.

## 2. Learning Method

Follow this sequence for every lesson:

1. Explain the concept.
2. Explain why it is needed.
3. Show a simple HTML example.
4. Explain the selector briefly.
5. Show its Playwright usage.
6. Give one practice question at a time.
7. Wait for my answer.
8. Check my answer and explain briefly.
9. Do not start the next question until my current answer is reviewed.
10. Do not repeat completed topics unless I request revision.

---

# PART 1: CSS SELECTORS

## 3. CSS Learning Roadmap

| Lesson | Topic | Status |
|---|---|---|
| 1 | Basic CSS syntax and selectors | Completed |
| 2 | ID selectors | Completed |
| 3 | Class selectors | Completed |
| 4 | Attribute selectors | Completed |
| 5 | Combining selectors | Completed |
| 6 | Descendant and child selectors | Completed |
| 7 | Multiple matching elements | Completed |
| 8 | Browser DevTools practice | Completed |

## Lesson 1: Basic CSS Syntax and Selectors

### What is a CSS selector?

A CSS selector identifies HTML elements on a webpage.

Examples:

```css
button
input
a
div
h2
```

These are tag selectors. They select elements based on their HTML tag names.

### Important rule

Use the tag name directly when selecting by tag.

```css
input
```

Do not write `.input` unless you intend to select an element with the class `input`.

Do not write `#input` unless you intend to select an element with the ID `input`.

### Practice result

This lesson introduced the difference between tag selectors and selectors using `.` or `#`. Some early practice answers needed correction, and the correct tag-only selector was reinforced.

## Lesson 2: ID Selectors

### What is an ID selector?

An ID selector identifies an element using its HTML `id` attribute.

HTML:

```html
<input id="username">
<button id="submitBtn">Submit</button>
<a id="helpLink">Help</a>
```

CSS:

```css
#username
#submitBtn
#helpLink
```

### Important rule

Use `#` before an ID value in CSS.

The HTML contains:

```html
id="username"
```

The CSS selector is:

```css
#username
```

### Playwright example

```javascript
await page.locator('#helpLink').click();
```

### Result

The ID selector lesson was completed successfully.

## Lesson 3: Class Selectors

### What is a class selector?

A class selector identifies elements using their HTML `class` attribute.

HTML:

```html
<h2 class="page-title">Registration</h2>
<input class="username-field">
<button class="submit-btn">Submit</button>
```

CSS:

```css
.page-title
.username-field
.submit-btn
```

### Important rule

Use `.` before a class name in CSS.

The HTML contains:

```html
class="submit-btn"
```

The CSS selector is:

```css
.submit-btn
```

### Playwright example

```javascript
await page.locator('.submit-btn').click();
```

### Result

The class selector lesson was completed with a score of 5/5.

## Lesson 4: Attribute Selectors

### What is an attribute selector?

An attribute selector locates elements using HTML attributes and their values.

HTML:

```html
<input name="username">
<input type="password">
<input placeholder="Enter email">
```

CSS:

```css
[name="username"]
[type="password"]
[placeholder="Enter email"]
```

### How it works

- `[` and `]` identify an attribute selector.
- `name`, `type`, and `placeholder` are attribute names.
- The quoted text is the attribute value.

### Playwright example

```javascript
await page.locator('[name="username"]').fill('Lingaraj');
```

### Important rule

Spaces inside the selector string are unnecessary unless the selector syntax specifically requires them.

### Result

The attribute selector lesson was completed with a score of 5/5.

## Lesson 5: Combining Selectors

### What does combining selectors mean?

Combine a tag name with an ID, class, or attribute to make a selector more specific.

Examples:

```css
input#username
button.login-button
input[name="email"]
```

### Explanation

```css
input#username
```

Selects an input element with ID `username`.

```css
button.login-button
```

Selects a button element with class `login-button`.

```css
input[name="email"]
```

Selects an input element whose `name` attribute is `email`.

### Important rule

Do not put a space between the tag name and its ID, class, or attribute selector.

Correct:

```css
input#username
```

Incorrect for the same intended combination:

```css
input #username
```

The space changes the meaning because it represents a descendant relationship.

### Playwright example

```javascript
await page.locator('input#username').fill('Lingaraj');
```

### Result

The lesson was completed. An initially incorrect combined-selector answer was corrected through follow-up practice.

## Lesson 6: Descendant and Child Selectors

### Descendant selector

A space selects a matching element anywhere inside a parent element, including nested descendants.

```css
.registration button
```

This selects buttons inside an element with class `registration`, even when the button is nested inside another element.

### Child selector

The `>` symbol selects only direct children.

```css
.registration > input
```

This selects input elements that are immediate children of the `registration` element.

### Difference

| Selector | Meaning |
|---|---|
| `.registration button` | Any descendant button |
| `.registration > input` | Direct child input |
| `button#saveBtn` | Button with a specific ID; not a descendant selector |

### Playwright examples

```javascript
await page.locator('.registration button').click();
await page.locator('.registration > input').fill('Test');
```

### Result

The lesson was completed after correcting confusion between combined selectors and descendant selectors.

## Lesson 7: Multiple Matching Elements

### Example HTML

```html
<button class="action">Save</button>
<button class="action">Cancel</button>
<button class="action">Delete</button>
```

### What happens with `.action`?

```css
.action
```

This selector matches all three buttons because they share the same class.

### Playwright example

```javascript
page.locator('.action')
```

This creates a locator matching the three buttons. It does not click any button by itself.

If an action such as `click()` is attempted on a locator matching multiple elements, Playwright generally reports a strictness error because it expects a unique target for that action.

### Ways to identify the intended element

Use a role-based locator:

```javascript
await page.getByRole('button', { name: 'Cancel' }).click();
```

Or use an index when the order is reliable:

```javascript
await page.locator('.action').nth(1).click();
```

Indexes are zero-based:

| Index | Button |
|---|---|
| `nth(0)` | Save |
| `nth(1)` | Cancel |
| `nth(2)` | Delete |

### Result

The lesson was completed with a score of 4/4.

## Lesson 8: Browser DevTools Practice

### Objective

Inspect real HTML and test CSS selectors using Chrome DevTools.

### Practice steps

1. Open Wikipedia in Chrome.
2. Right-click the search box and select **Inspect**.
3. Locate the highlighted input element in the Elements panel.
4. Inspect its HTML attributes.
5. Press `Ctrl + F` in the Elements panel.
6. Search for a CSS selector, such as:

```css
input[type="search"]
```

### Practical exercise answers

The observed search box details were:

- ID: `searchInput`
- Type: `search`
- Placeholder: Not mentioned in the inspected HTML
- CSS ID selector: `#searchInput`
- Initial Ctrl + F result: Multiple matches

### Important DevTools observation

The screenshot showed a result counter of `1 of 2` when searching for `#searchInput`.

A text search in the Elements panel may find the selector text in both the actual HTML and a CSS/style section. Therefore, two text matches do not necessarily mean there are two HTML elements with that ID.

To count actual matching HTML elements, run this in the browser Console:

```javascript
document.querySelectorAll('#searchInput').length
```

Interpret the result:

- `1` means one matching HTML element.
- `2` means two matching HTML elements.
- `0` means no matching HTML element.

### Result

The CSS roadmap was marked complete. The screenshot review established why DevTools text-match counts and actual DOM element counts can differ.

---

# PART 2: CSS COURSE REVISION

## 4. CSS Selector Quick Reference

| Purpose | CSS selector | Example HTML |
|---|---|---|
| Select by tag | `input` | `<input>` |
| Select by ID | `#username` | `<input id="username">` |
| Select by class | `.login-button` | `<button class="login-button">` |
| Select by attribute | `[name="email"]` | `<input name="email">` |
| Combine tag and ID | `input#username` | `<input id="username">` |
| Combine tag and class | `button.login-button` | `<button class="login-button">` |
| Select descendant | `.login-form input` | Input anywhere inside the form container |
| Select direct child | `.login-form > input` | Input directly inside the container |

### Playwright examples

```javascript
await page.locator('input').first().fill('Test');
await page.locator('#username').fill('Lingaraj');
await page.locator('.login-button').click();
await page.locator('[name="email"]').fill('test@example.com');
await page.locator('input#username').fill('Lingaraj');
await page.locator('.login-form input').first().fill('Test');
```

Note: `.first()` is useful when multiple matches are expected, but use it only when the first match is genuinely the intended target.

---

# PART 3: XPATH FOR PLAYWRIGHT QA

## 5. XPath Learning Progress

The XPath practice began after completing the CSS roadmap.

The first lesson introduced locating elements using XPath and checking HTML attributes.

### XPath Lesson 1: Basic Attribute-Based XPath

An XPath expression can identify HTML elements using their tag names, attributes, and attribute values.

Example HTML:

```html
<input id="username" type="text">
```

XPath:

```xpath
//input[@id='username']
```

### Explanation

| Part | Meaning |
|---|---|
| `//` | Search for matching elements anywhere in the document |
| `input` | Match input elements |
| `@id` | Refer to the ID attribute |
| `'username'` | Match the attribute value |

### Playwright example

```javascript
await page.locator("//input[@id='username']").fill("Lingaraj");
```

### CSS versus XPath

| CSS | XPath |
|---|---|
| `#username` | `//input[@id='username']` |
| `input[name="email"]` | `//input[@name='email']` |
| `button` | `//button` |

CSS and XPath are both locator strategies. Choose the selector that is clear, reliable, and appropriate for the application.

## 6. XPath Attribute Rule

The key rule reinforced during the first lesson:

**Use `@` before an attribute name when checking its value in XPath.**

Correct:

```xpath
//input[@name='email']
```

Incorrect:

```xpath
//input[name='email']
```

In the incorrect example, `name` is not being used as an attribute reference.

---

# PART 4: XPATH LESSON 1 — ALL 10 QUESTIONS

## Question 1: Locate a button by ID

HTML:

```html
<button id="loginBtn">Login</button>
```

Question: Which XPath correctly locates the Login button?

Options:

- A. `//button[@id='loginBtn']`
- B. `#loginBtn`
- C. `//input[@id='loginBtn']`
- D. `.loginBtn`

My answer: **A**

Correct answer: **A**

Explanation: `//button` selects button elements, and `[@id='loginBtn']` checks the ID attribute.

Playwright:

```javascript
await page.locator("//button[@id='loginBtn']").click();
```

Status: Correct.

## Question 2: Locate an input by name

HTML:

```html
<input type="text" name="email">
```

Question: Which XPath correctly locates the input using its `name` attribute?

Options:

- A. `//input[@name='email']`
- B. `//input[name='email']`
- C. `//button[@name='email']`
- D. `input#email`

My answer: **B**

Correct answer: **A**

Explanation: XPath attribute references require `@`. The correct expression is `//input[@name='email']`.

My mistake: I forgot `@` before `name`.

Status: Incorrect, reviewed and corrected.

## Question 3: Locate a submit button

HTML:

```html
<button type="submit">Login</button>
```

Question: Which XPath correctly locates the Login button using its `type` attribute?

Options:

- A. `//button[type='submit']`
- B. `//button[@type='submit']`
- C. `//input[@type='submit']`
- D. `button[type="submit"]`

My answer: **B**

Correct answer: **B**

Explanation: `@type='submit'` matches the button's type attribute.

Playwright:

```javascript
await page.locator("//button[@type='submit']").click();
```

Status: Correct.

## Question 4: Locate an input using ID and type

HTML:

```html
<input id="username" type="text">
```

Question: Which XPath uses both the ID and type attributes?

Options:

- A. `//input[@id='username' or @type='text']`
- B. `//input[@id='username' and @type='text']`
- C. `//input[id='username' and type='text']`
- D. `//button[@id='username' and @type='text']`

My answer: **B**

Correct answer: **B**

Explanation: `and` requires both conditions to match the same element. Each attribute uses `@`.

Playwright:

```javascript
await page.locator("//input[@id='username' and @type='text']").fill("Lingaraj");
```

Status: Correct.

## Question 5: Locate a button using ID and type

HTML:

```html
<button id="loginBtn" type="submit">Login</button>
```

Question: Which XPath correctly locates the button using both attributes?

Options:

- A. `//button[@id='loginBtn' and @type='submit']`
- B. `//button[id='loginBtn' and type='submit']`
- C. `//input[@id='loginBtn' and @type='submit']`
- D. `//button[@id='loginBtn' or @type='submit']`

My answer: **A**

Correct answer: **A**

Explanation: The tag is `button`, both attribute references use `@`, and `and` requires both conditions to match.

Playwright:

```javascript
await page.locator("//button[@id='loginBtn' and @type='submit']").click();
```

Status: Correct.

## Question 6: Locate a password input

HTML:

```html
<input type="password" name="password">
```

Question: Which XPath correctly locates the password input using its type?

Options:

- A. `//input[type='password']`
- B. `//button[@type='password']`
- C. `//input[@type='password']`
- D. `//input[@name='type']`

My answer: **C**

Correct answer: **C**

Explanation: `input` is the correct tag and `@type='password'` matches the type attribute.

Playwright:

```javascript
await page.locator("//input[@type='password']").fill("MyPassword123");
```

Status: Correct.

## Question 7: Locate a link by href

HTML:

```html
<a href="/register" id="registerLink">Register Now</a>
```

Question: Which XPath correctly locates the link using its `href` attribute?

Options:

- A. `//button[@href='/register']`
- B. `//a[@href='/register']`
- C. `//a[href='/register']`
- D. `//input[@href='/register']`

My answer: **B**

Correct answer: **B**

Explanation: The correct tag is `a`, and `@href='/register'` matches the link destination attribute.

Playwright:

```javascript
await page.locator("//a[@href='/register']").click();
```

Status: Correct.

## Question 8: Locate a heading by class

HTML:

```html
<h2 class="page-title">Registration</h2>
```

Question: Which XPath correctly locates the heading using its class attribute?

Options:

- A. `//h2[class='page-title']`
- B. `//div[@class='page-title']`
- C. `//h2[@class='page-title']`
- D. `.page-title`

My answer: **C**

Correct answer: **C**

Explanation: `h2` matches the heading tag, and `@class='page-title'` checks the class attribute.

Playwright:

```javascript
await page.locator("//h2[@class='page-title']").textContent();
```

Expected text: `Registration`

Status: Correct.

## Question 9: Locate only the Cancel button

HTML:

```html
<button id="saveBtn" type="button">Save</button>
<button id="cancelBtn" type="button">Cancel</button>
```

Question: Which XPath correctly locates only the Cancel button?

Options:

- A. `//button[@id='saveBtn']`
- B. `//button[@id='cancelBtn']`
- C. `//input[@id='cancelBtn']`
- D. `//button[id='cancelBtn']`

My answer: **B**

Correct answer: **B**

Explanation: The XPath matches the button whose ID is exactly `cancelBtn`.

Playwright:

```javascript
await page.locator("//button[@id='cancelBtn']").click();
```

Status: Correct.

## Question 10: Locate an input using ID and name

HTML:

```html
<input id="email" type="text" name="email">
```

Question: Which XPath correctly locates the input using both its ID and name attributes?

Options:

- A. `//input[@id='email' and @name='email']`
- B. `//input[id='email' and name='email']`
- C. `//button[@id='email' and @name='email']`
- D. `//input[@id='email' or @name='username']`

My answer: **A**

Correct answer: **A**

Explanation: The correct tag is `input`, both attributes use `@`, and `and` requires both conditions to match.

Playwright:

```javascript
await page.locator("//input[@id='email' and @name='email']").fill("test@example.com");
```

Status: Correct. The question was submitted twice, and both submissions had the same correct answer.

---

# PART 5: RESULTS AND NEXT STEPS

## 7. XPath Question Results

| Question | My answer | Result |
|---|---|---|
| 1 | A | Correct |
| 2 | B | Incorrect |
| 3 | B | Correct |
| 4 | B | Correct |
| 5 | A | Correct |
| 6 | C | Correct |
| 7 | B | Correct |
| 8 | C | Correct |
| 9 | B | Correct |
| 10 | A | Correct |

**Final score: 9/10**

My only mistake was Question 2, where I forgot the `@` symbol before `name`.

## 8. Important Rules to Remember

### CSS

- `#` selects by ID.
- `.` selects by class.
- `[attribute="value"]` selects by attribute.
- A space selects descendants.
- `>` selects direct children.
- More than one element can match a selector.

### XPath

- `//` searches for matching elements anywhere in the document.
- Use the correct HTML tag.
- Use `@` before attribute names.
- Use `and` when both conditions must match.
- Use `or` when either condition may match.
- Check the actual HTML in DevTools before writing a locator.

## 9. Current Learning Status

### CSS
All 8 roadmap lessons completed.

### XPath
XPath Lesson 1 has covered:
- Basic XPath syntax.
- Tag and attribute matching.
- ID, name, type, href, and class attributes.
- Combining conditions with `and`.
- Identifying the correct HTML tag.
- Writing XPath locators in Playwright.

Practice result: 9/10.

## 10. Instructions for Continuing This Course

When continuing this learning journey:

1. Review this document before teaching anything new.
2. Do not repeat the completed CSS roadmap.
3. Continue from the existing XPath progress.
4. Keep each explanation short and practical.
5. Ask one question at a time.
6. Review my submitted answer before giving the next question.
7. Explain mistakes clearly without repeating the entire lesson.
8. Move to a new XPath concept only after the current concept's practice is complete.
9. Use English and practical QA examples.
10. Maintain an accurate record of progress and scores.
