// Concept 3 — Browser vs BrowserContext vs Page
// You already know the basic architecture, so let's make this very simple.
// 1. Browser
// The Browser is the actual browser launched by Playwright.
// Example:
// Chromium
// Firefox
// WebKit

// Think:
// Browser = Main browser
// 2. BrowserContext
// A BrowserContext is an isolated session inside the browser.
// It keeps things like:
// - Cookies
// - Login/session data
// - Local storage
// Think:
// Context = Separate user session
// Example:
// Browser
// ├── Admin Context
// └── User Context

// Admin and User don't interfere with each other's login.
// 3. Page
// A Page is basically a browser tab.
// Think:
// Page = Tab
// Example:
// Browser
// └── Context
//     ├── Page 1
//     └── Page 2

// Easy memory 🧠
// Browser  = Browser
// Context  = User session
// Page     = Tab

// That's enough for now. Don't memorize anything else.
// Tiny QA example
// Suppose we test Admin and User:
// Browser
// ├── Admin Context → Admin Page
// └── User Context  → User Page

// Why two contexts?
// 👉 So Admin's login doesn't affect User's login.
// One-line interview answer
// Browser is the browser instance, BrowserContext is an isolated user session, and Page is a browser tab where we perform actions.

// Your turn — only 3 questions
// Q1. What is a BrowserContext in simple words?
// Q2. Why would we use two contexts for Admin and User?
// Q3. What is a Page?
// Answer these in your own words. Then I'll check them and move forward.



// //----------Answers-------------///

// q1 answer : BrowserContext is an isolated user session
// q2 answer :  Admin and User don't interfere with each other's login.
// q3 answer :  A Page is basically a browser tab.


// /////-------------Validations---------------////

// Perfect macha! 🔥 All 3 are 100% correct.
// - Q1: BrowserContext = isolated user session ✅
// - Q2: Separate contexts prevent Admin/User login sessions from interfering ✅
// - Q3: Page = browser tab ✅
// Score: 3/3 — 100% 🎯
// Key takeaway
// Browser  → Browser instance
// Context  → Isolated user session
// Page     → Browser tab

// You’ve understood the concept correctly. Concept 3 — Browser vs BrowserContext vs Page = COMPLETE ✅
// Next, we’ll continue with the next incomplete concept from the tracker, keeping it just as simple and without repeating what you already know.