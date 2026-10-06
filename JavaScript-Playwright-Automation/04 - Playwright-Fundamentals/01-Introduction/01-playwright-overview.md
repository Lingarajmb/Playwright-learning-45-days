# Playwright Test Runner

## 1. What is Playwright Test?

Playwright Test is the official test runner and testing framework provided by Playwright.

It gives us the structure and features required to:

- Create tests
- Organize tests
- Execute tests
- Validate expected results
- Run tests in parallel
- Retry failed tests when configured
- Generate test reports
- Capture test artifacts
- Manage test setup and cleanup

In simple words:

Playwright
    ↓
Browser Automation

Playwright Test
    ↓
Test Creation + Execution + Assertions + Reporting
Send me your answers. I'll check them one by one, correct them, give you a score, and then mark Concept 1 complete.


////-------Answer////////

Q1. What is Playwright?
"Playwright is a browser automation framework developed by Microsoft that lets us write code — in JavaScript, TypeScript, Python, or other languages — to control real browsers programmatically. We use it mainly for end-to-end testing of web applications, where it can open a browser, navigate pages, interact with elements like buttons and forms, and verify that the application behaves as expected."

Q2. Which browsers does Playwright support?
"Playwright supports three major browser engines: Chromium, which covers browsers like Chrome and Edge, Firefox, and WebKit, which is the engine used by Safari. This means we can write a single test and run it across all three engines to check cross-browser compatibility, without needing separate test scripts for each browser."

Q3. Difference between headed and headless execution?
"Headed execution means the browser actually opens visibly on the screen while the test runs, so we can watch the automation happen in real time — this is useful for debugging. Headless execution means the browser runs in the background without any visible UI, which is faster and uses fewer resources, making it the preferred mode for running tests in CI/CD pipelines where no one needs to visually watch the test run."

Q4. Why is Playwright useful for a QA engineer?
"Playwright helps a QA engineer automate repetitive testing tasks, like regression testing, which would otherwise take a lot of time and effort to do manually every release. It also has built-in auto-waiting, which reduces flaky tests compared to older tools that need manual timeouts. On top of that, it supports multiple browsers, parallel test execution, and comes with debugging tools like trace viewer and built-in reporting, which makes building and maintaining a reliable automation framework much easier."

Q5. What is Playwright Test?
"Playwright Test is the built-in test runner that comes with Playwright. It provides features specifically designed for automation testing, like test fixtures, parallel execution, built-in assertions, retries for flaky tests, and generating HTML reports after a test run. Instead of just using Playwright as a library to control a browser, Playwright Test gives us a complete testing framework structure to organize, run, and report on our tests."
