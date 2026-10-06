
//////////////////////////////


# Playwright Architecture

## 1. What is Playwright Architecture?

Playwright follows a hierarchical structure for controlling browsers and web pages.

The basic architecture is:

Playwright
    ↓
Browser
    ↓
Browser Context
    ↓
Page
    ↓
Web Application

Each level has a different responsibility.

---

## 2. Browser

A Browser represents the actual browser instance launched by Playwright.

Playwright supports three major browser engines:

- Chromium
- Firefox
- WebKit

Example:

Browser
    ↓
Chromium

The Browser is the top-level browser instance.

It provides the environment in which Browser Contexts are created.

---

## 3. Browser Context

A Browser Context is an isolated browser session created inside a Browser.

A single Browser can contain multiple Browser Contexts.

Example:

Browser
    │
    ├── Context 1
    │
    └── Context 2

Each context has its own browser session data, such as:

- Cookies
- Local Storage
- Session Storage
- Login/session state

The contexts are isolated from each other.

This means data from one context does not normally affect another context.

---

## 4. Why is Browser Context Isolation Important?

Browser Context isolation is important because it allows us to run tests with independent sessions.

For example, suppose we want to test two different users:

- Admin
- Normal User

We can create separate contexts:

Browser
    │
    ├── Context 1 → Admin session
    │
    └── Context 2 → Normal User session

The Admin session and Normal User session remain isolated.

This prevents cookies, storage and login state from one test/session from affecting another.

It also helps us create reliable and independent tests.

---

## 5. Page

A Page represents a single browser tab/page inside a Browser Context.

A Browser Context can contain multiple Pages.

Example:

Browser
    ↓
Context
    ├── Page 1
    ├── Page 2
    └── Page 3

Each Page can navigate to a different URL.

For example:

Page 1 → Login page
Page 2 → Dashboard
Page 3 → Help page

The Page is the object we use most often while writing Playwright test scripts.

We use the Page to:

- Navigate to URLs
- Click elements
- Enter text
- Select options
- Perform keyboard actions
- Perform mouse actions
- Read page information
- Interact with web elements

---

## 6. Browser → Context → Page

The most important architecture to remember is:

Browser
    ↓
Browser Context
    ↓
Page

Example:

Chromium Browser
       ↓
   Browser Context
       ↓
       Page
       ↓
Web Application

Meaning:

Browser = Browser instance

Browser Context = Isolated browser session

Page = Browser tab/page

---

## 7. One Browser Can Have Multiple Contexts

A single browser can have multiple independent contexts.

Example:

Browser
    │
    ├── Context 1
    │      └── Admin User
    │
    └── Context 2
           └── Normal User

This is useful when we need to test multiple users or multiple independent sessions.

---

## 8. One Context Can Have Multiple Pages

A single Browser Context can contain multiple Pages.

Example:

Browser
    ↓
Context
    ├── Page 1
    ├── Page 2
    └── Page 3

Each Page represents a separate browser tab/page.

This becomes useful when handling multiple tabs or windows.

---

## 9. Creating Browser, Context and Page Manually

Example:

const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://example.com');

    await browser.close();

})();

### Line-by-line explanation

### 1. Launch Browser

const browser = await chromium.launch();

This launches a Chromium browser instance.

Structure:

Browser
    ↓
Chromium

---

### 2. Create Browser Context

const context = await browser.newContext();

This creates a new isolated browser session inside the browser.

Structure:

Browser
    ↓
Browser Context

---

### 3. Create Page

const page = await context.newPage();

This creates a new browser page/tab inside the context.

Structure:

Browser
    ↓
Context
    ↓
Page

---

### 4. Navigate to Application

await page.goto('https://example.com');

The Page navigates to the specified URL.

---

### 5. Close Browser

await browser.close();

This closes the browser instance.

---

## 10. Browser Context Isolation — Real QA Example

Suppose we have a banking application.

We need to test:

User 1:
Admin

User 2:
Customer

We can create:

Browser
    │
    ├── Context 1
    │      └── Admin login/session
    │
    └── Context 2
           └── Customer login/session

Context 1 and Context 2 have independent session information.

This allows us to test different users without their sessions interfering with each other.

---

## 11. Page Fixture in Playwright Test

When using the Playwright Test framework, we usually do not manually create Browser, Context and Page for every test.

Playwright Test provides fixtures such as `page`.

Example:

const { test, expect } = require('@playwright/test');

test('Verify application', async ({ page }) => {

    await page.goto('https://example.com');

});

Here, Playwright Test provides the `page` fixture to the test.

The `page` fixture represents the browser page that the test will interact with.

Conceptually:

test()
    ↓
Playwright Test manages browser/context
    ↓
page fixture
    ↓
Page
    ↓
Web Application

Fixtures will be covered in detail later.

---

## 12. Browser vs Browser Context vs Page

| Component | Meaning |
|---|---|
| Browser | Actual browser instance |
| Browser Context | Isolated browser session |
| Page | Browser tab/page |

Remember:

Browser
    ↓
Context
    ↓
Page

---

## 13. Important Terms

### Browser

The actual browser instance launched by Playwright.

### Browser Context

An isolated browser session inside the browser.

### Page

A single browser tab/page inside a Browser Context.

### Isolation

Keeping browser sessions independent so that one session does not normally affect another.

---

## 14. Interview Question

### What is the difference between Browser, Browser Context and Page?

Answer:

A Browser is the actual browser instance launched by Playwright, such as Chromium, Firefox or WebKit.

A Browser Context is an isolated browser session inside that browser. It has its own cookies, storage and session state and is independent from other contexts.

A Page represents an individual browser tab/page inside a Browser Context where we perform actions such as navigation, clicking and entering data.

The relationship is:

Browser
    ↓
Browser Context
    ↓
Page

---

## 15. Quick Revision

Remember these three points:

Browser = Browser instance

Browser Context = Isolated browser session

Page = Browser tab/page

Main architecture:

Browser
    ↓
Browser Context
    ↓
Page
    ↓
Web Application

One Browser can have multiple Contexts.

One Context can have multiple Pages.

Browser Context isolation helps keep test sessions independent.

---

## 16. Easy Memory Trick

Think of it this way:

Browser
    ↓
House

Browser Context
    ↓
Separate room/session

Page
    ↓
Window/tab through which we interact with the application

So remember:

Browser → Context → Page


//////////////////////////////



/////////----------Answer-------------///
Q1. What is a Browser in Playwright?
A Browser in Playwright represents an actual browser instance — like Chromium, Firefox, or WebKit — that Playwright launches to perform automation. It's the top-level object that everything else (contexts and pages) runs inside of.

Q2. What is a Browser Context?
A Browser Context is an isolated session within a browser instance — similar to an incognito window. It has its own separate cookies, local storage, and session data, completely independent from other contexts, even though multiple contexts can exist within the same browser instance.

Q3. Why is Browser Context isolation important in automation testing?
Because it lets us run multiple tests with different states — like different logged-in users — without their sessions interfering with each other. For example, we could test an Admin login and a Normal User login at the same time, each in its own isolated context, without one session's cookies or data leaking into the other. This also makes tests more reliable and allows safe parallel execution.

Q4. What is a Page in Playwright?
A Page represents a single tab or window within a Browser Context, where the actual test interactions happen — navigating to URLs, clicking elements, filling forms, and so on. It's the object we interact with the most when writing test scripts.

Q5. Explain the architecture: Browser → Browser Context → Page
A Browser is the overall browser instance that Playwright launches. Inside that browser, we can create one or more Browser Contexts, each acting as an independent, isolated session. Within each Browser Context, we can open one or more Pages, which are the actual tabs where our tests perform real actions. So the hierarchy flows from the broadest level (Browser) down to isolated sessions (Context) down to individual tabs (Page), giving Playwright flexibility to run multiple isolated tests efficiently.

Q6 ⭐ Interview: Difference between Browser, Browser Context, and Page
"A Browser is the actual browser instance that Playwright launches, like Chromium or Firefox. A Browser Context is an isolated session within that browser — similar to an incognito window — with its own cookies and storage, completely separate from other contexts. And a Page is an individual tab within a context, where the real test actions like clicking or navigating actually take place. So the relationship is: one Browser can have multiple Browser Contexts, and each Context can have multiple Pages, which gives us a lot of flexibility to run isolated and parallel tests efficiently."

