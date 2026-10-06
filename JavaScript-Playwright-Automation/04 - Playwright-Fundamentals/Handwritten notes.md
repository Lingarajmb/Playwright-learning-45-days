Page 1 — Playwright Introduction

What is Playwright?

Free & open source framework for web automation testing | Created by Microsoft
Applications → web browser apps | mobile web apps | API
Languages → JavaScript, TypeScript, Java, Python, .NET (C#) — (Node.js libraries)
Browsers → all modern engines: Chromium, WebKit & Firefox (headless or headed)
Ex: Chromium is the search engine which is used by multiple browsers. For example: Google Chrome, Microsoft Edge, Brave, Opera, Vivaldi
WebKit is another browser engine used to display websites, similar to Chromium. Ex: Safari, Apple devices, iPhone (iOS), iPad, Mac browsers
Headed means the website has a User Interface. Headless means we don't have UI — it will run in backend (this will increase the speed, doesn't have UI dependency)
OS → Windows, MacOS, Linux | Supports Cloud (if you run in any CI/CD or Docker, this will be supported)

Features of Playwright:

Free & open source
Multi-Browser | Multi-Language | Multi-OS
Easy setup and configuration
Functional testing | API testing | Accessibility testing (for this we have 3rd party plugin we can add to test that too)
Built-in Reporters | Custom Reporters
CI/CD | Docker support (like Jenkins)
Recording | Debugging | Explore selectors
We can do parallel testing (we can run in multiple browsers)
Auto-wait (default we have 5 seconds, if we want we can change this for more/less)
Built-in assertions | less flaky tests
For example: if you click on button, let's say we want click on login button. In step, we just add "click on login button" — in backend, Playwright will run built-in assertion like: is page already loaded, and if object is available or not, is that clickable or not — this all happens in backend assertion.
Less flaky test means → sometimes due to network, or internet, or system battery issues test cases will fail; this kind of situation Playwright re-runs the test case, checks multiple times, and gives proper output.
Test retry, log, screenshots, videos
Multi-tab & multi-window
Frames | Shadow DOM
Emulate mobile devices, geo-locations (resolution set)
Test parameterization
Fast
Page 2 — Installation

Install VS Code & Node.js. Download both.

For VS Code:

Create a folder as you want
Open the folder which you created in VS Code
Then go to terminal (Install the Playwright)
In terminal → D:\Projects\Playwright-Automation>
npm init playwright@latest

Installation

Install using command as npm package.

Step 1 → Create a new folder, and open in VS Code
Step 2 → Go to terminal and run command: npm init playwright@latest
Step 3 → Following will be added:
package.json → This file shows all libraries that are added in the project
playwright.config.ts → This file shows all configurations and timeouts, parallel run, workers, retry, reports, browsers
tests folder → basic example test file. Here shows how the test case will be written. For example, by Playwright
.gitignore file → to be used during git commit & push
.github → playwright.yml → to be used during CI/CD pipeline
Step 4 → Check Playwright added: npm playwright -v
Step 5 → Check Playwright command options: npx playwright -h

Shortcut Keys

Ctrl + J : for New terminal
Ctrl + C : for clear the terminal
Page 3 — Playwright VS Code Extension & Running Tests

What are the benefits of using the Playwright VS Code Extension?

The Playwright VS Code Extension provides a graphical interface to run, debug, and manage Playwright tests directly from VS Code. It automatically discovers test cases, allows browser selection, highlights steps during execution, displays execution time for each step, and offers debugging capabilities such as breakpoints and step-by-step execution. This improves productivity and makes test execution easier compared to using only terminal commands.

Key Advantages:

User-Friendly Interface: Provides a visual interface instead of command-line execution
Browser selection: Run tests on specific browsers with one click
Real-time monitoring: View execution progress live
Execution timing: Track time taken by each step
Debugging Support: Debug directly within VS Code
Test Management: Automatically detects and organizes test cases

Running Tests:

npx playwright test : Run all tests on all browsers in headless mode
npx playwright test --workers 3 : Run with 3 workers in parallel
npx playwright test one.spec.js : Run a specific test file
npx playwright test one.spec.js two.spec.js : Run the files specified
npx playwright test -g "check title" : Run test with the title
npx playwright test --project=chromium : Run on specific browser
npx playwright test --headed : Run tests in headed mode
npx playwright test --debug : Debug tests
npx playwright test example.spec.js --debug : Debug specific test file
npx playwright test example.spec.js:21 --debug : Debug starting from specific line (where test starts)
Page 4 — How to Write Tests

Step 1 - Create a new file under test folder

Step 2 → Add module playwright/test

javascript
const {test, expect} = require('@playwright/test');

Note: require() is a Node.js built-in function used to load modules present in separate files. Here we are loading test & expect modules from Playwright package.

Note: In test folder, create a Demo folder — in that create a hello.js file. In this file create functions, and export those functions — mention the export keyword along with the variable name. (hello.js is the function created file)

Now go to My-first-test.spec.js file — this is your test file. Here call the function which you created in hello.js file:

javascript
const {hello, helloworld} = require('./demo/hello')
Variable type we can change this according to our requirement (eg: var...)
These are the function names which we defined in hello.js
Here we need to give the location which created functions or module or scripts to access the functions

Alternative command:

javascript
import {hello, helloworld} from './demo/hello'

This is also an alternative to above command. This also will work.

Now, you can use and print the function. For that:

javascript
console.log(hello());

This is printing command.

Now run the cmd in terminal:

node ./tests/my-first-test.spec.js

Note: Playwright Test provides a test function to declare tests and expect function to write assertions.

Step 3: Create a test block — test(title, testFunction) in my-first-test.spec.js file.

javascript
test('My first Test', async ({page}) => {
    // to visit the URL command
    await page.goto('http://google.com')
    await expect(page).toHaveTitle('Google')
});

Note: async keyword before a function makes the function return a promise. The keyword await before a function makes the function wait for a promise.

Page 5 — Codegen (Test Generator)

What is Codegen - Test Generator?

Playwright comes with a tool — Codegen, also called Test Generator. This can be used to record test & generate test scripts.

It opens 2 windows:

A browser window to interact with the website
Playwright Inspector window to record test

Step 1 → Open terminal & run codegen: npx playwright codegen
Step 2 → Check 2 windows open — Browser and Playwright Inspector
Step 3 → Record your test steps and check the test scripts getting created
Step 4 → Save the recorded script in a test file | Run and check

Note: Along with cmd we also add the URL so that it will open directly. URL
Eg: npx playwright codegen google.com

How to record test - Test Generator

Playwright comes with a tool - Codegen also called Test Generator. Can be used to record test and generate test scripts.

Record on a specific browser: npx playwright codegen --browser firefox (default: chromium)
Record and save to a file: npx playwright codegen --target javascript -o record-example.js
Set viewport - screen resolution (size): npx playwright codegen --viewport-size=800,600
Emulate devices: npx playwright codegen --device="iPhone 11"
Emulate color scheme: npx playwright codegen --color-scheme=dark (if available on the website)
See all options: npx playwright codegen --help
Page 6 — Trace Viewer

What is Trace Viewer?

GUI tool that helps viewing the executed test along with snapshots, timeline and other details (traces).

How to use Trace Viewer:

Step 1: Open config file and set trace: 'on-first-retry'
It means - collect trace when retrying the failed test for the 1st time only.

Step 2: Save & run a test to fail
Step 3: Check trace.zip file created under test-results folder
Step 4: View trace - npx playwright show-trace trace.zip

Trace Viewer Options:

'on-first-retry' - Record a trace only when retrying a test for the 1st time
'off' - Do not record a trace
'on' - Record a trace for each test (not recommended as it's performance heavy)
'retain-on-failure' - Records a trace for each test, but removes it from successful test runs

To set trace on from cmd: npx playwright test --trace on

Different ways to view trace:

Using Command: npx playwright show-trace trace.zip
Using HTML Report
Using utility: https://trace.playwright.dev (drag & drop file)

How to set tracing programmatically:

javascript
test.only('test demo', async ({page, context}) => {
    await context.tracing.start({snapshots: true, screenshots: true}); // test code
    await context.tracing.stop({path: 'test-trace.zip'});
});
Page 7 — Hooks, Selectors & Locators
javascript
let context;
let page;

test.beforeAll(async ({browser}) => {
    context = await browser.newContext();
    await context.tracing.start({screenshots: true, snapshots: true});
    page = await context.newPage();
});

test.afterAll(async () => {
    await context.tracing.stop({path: 'test-trace.zip'});
});

Hook topics not covered in this (4th video)

What are Selectors and Locators?

Selectors are the strings/properties of the web objects. Selectors are used to create Locators.

Selector eg: CSS, Class, Name, ID, Text, XPath

To find an object or element, we use the syntax: page.locator(selector[, options])

Locator is a class in Playwright library.

How to find web objects with Playwright:

javascript
await page.goto('https://sauceDemo.com');

Using any object property.

Page 8 — Playwright Window Modes

There are 3 ways to open the Playwright window:

--debug
page.pause()
--headed
codegen (Recode)