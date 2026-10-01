// Yes macha 🔥 Now we move to the Day 9 practice/build portion from the roadmap.
// The roadmap specifically asks us to:
// Build a small Page-like class and reusable data model.
// 📁 Exact file path
// Create:
// Playwright - learning - 45 - days/
// └── 01 - JavaScript - Fundamentals/
//     └── 10 - ES6 - and - OOP/
//         └── 11 - Page Like Class and Data Model.js
// We are not jumping to Playwright code yet. This is JavaScript/OOP practice that prepares you for POM later.

// 🧩 Part 1 — Page-like Class
// Imagine we have a login page.
// We can create a class:
// class LoginPage {
//     open() {
//         console.log("Opening Login Page");
//     }
//     login() {
//         console.log("Logging in");
//     }
// }
// Create an object:
// const loginPage = new LoginPage();
// loginPage.open();
// loginPage.login();

// Output:
// Opening Login Page
// Logging in
// This is called Page-like because we're modeling a page as a class.
// Later, when you learn Playwright POM, this idea becomes much more practical.

// 🧩 Part 2 — Reusable Data Model
// Now let's create test data using a class.
// class UserData {
//     constructor(username, role) {
//         this.username = username;
//         this.role = role;
//     }
// }
// Create different users:
// const user1 = new UserData("testuser", "Tester");
// const user2 = new UserData("admin", "Admin");
// Now the same class can create reusable data objects.

// user1
//  ├── username: testuser
//  └── role: Tester

// user2
//  ├── username: admin
//  └── role: Admin


// 🧩 Part 3 — Combining Both Ideas
// We can have:
// Page-like class
// class LoginPage {
//     open() {
//         console.log("Opening Login Page");
//     }
//     login(userData) {
//         console.log(`Logging in as ${userData.username}`);
//     }
// }
// Data model
// class UserData {
//     constructor(username, role) {
//         this.username = username;
//         this.role = role;
//     }
// }
// Then:
// const user = new UserData("testuser", "Tester");
// const loginPage = new LoginPage();
// loginPage.open();
// loginPage.login(user);

// Output:
// Opening Login Page
// Logging in as testuser
// What happened here?
// UserData
//    ↓
// creates reusable test data
//    ↓
// LoginPage
//    ↓
// uses that data
// This is the basic design idea you'll later see in automation frameworks.

// 🧪 Your Build Challenge
// Now you write it yourself. Don't copy the complete example above.

// Task 2 — Reusable Data Model
// Create:
// LoginData
// with a constructor accepting:
// username
// password
// Create an object with:
// testuser
// Test@123

class LoginData {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
let logindata = new LoginData("testuser", "Test@123");


// Task 1 — Page-like class
// Create:
// LoginPage
// with these methods:
// open()
// enterUsername(username)
// enterPassword(password)
// login()
// Expected messages:
// Opening Login Page
// Entering username: testuser
// Entering password
// Clicking Login button

class LoginPage {
    open() {
        console.log(`Opening Login Page`);
    }
    enterUsername(username) {
        console.log(`Entering username: ${username}`);
    }
    enterPassword(password) {
        console.log(`Entering password`);
    }
    login() {
        console.log(`Clicking Login button`);
    }
}
const login = new LoginPage();

// Task 3 — Connect them
// Create a LoginPage object.
// Then call:
// open()
// enterUsername()
// enterPassword()
// login()
// Use the values from your LoginData object.
// Your final output should be:
// Opening Login Page
// Entering username: testuser
// Entering password
// Clicking Login button

login.open();
login.enterUsername(logindata.username);
login.enterPassword(logindata.password);
login.login();

// 💡 Hint
// Your structure will roughly be:
// class LoginData {
//     // constructor
// }
// class LoginPage {
//     // methods
// }
// // create data object
// // create page object
// // use data with page
// Send me your complete code. I'll review the whole implementation line-by-line and check whether you've correctly combined classes + constructors + methods
//  + objects + reusable data, which is the actual Day 9 practice goal. 💪



////---/// review ////---////

// Macha 🔥 this is a very good Day 9 build. You correctly connected the concepts instead of writing isolated examples.

// Line-by-line review
// 1. LoginData — ✅
// class LoginData {

//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//     }
// }

// Perfect.

// You correctly used:

// Class
// Constructor
// Constructor parameters
// this
// Object properties

// Then:

// let logindata = new LoginData("testuser", "Test@123");

// Also correct.

// Small improvement

// Since you're not reassigning logindata, prefer:

// const loginData = new LoginData("testuser", "Test@123");

// Two improvements:

// const instead of let
// loginData instead of logindata for standard camelCase readability

// This is a style improvement, not an error.

// 2. LoginPage — ✅

// Your class:

// class LoginPage {
//     open() {
//         console.log(`Opening Login Page`);
//     }

//     enterUsername(username) {
//         console.log(`Entering username: ${username}`);
//     }

//     enterPassword(password) {
//         console.log(`Entering password`);
//     }

//     login() {
//         console.log(`Clicking Login button`);
//     }
// }

// Excellent. 💯

// You correctly created all four required methods.

// One small observation:

// enterPassword(password)

// accepts password, but doesn't actually use it.

// That's intentional for this exercise, because the required output was only:

// Entering password

// So your implementation is correct.

// 3. Create Page Object — ✅
// const login = new LoginPage();

// Correct.

// You've created an object from the LoginPage class.

// For readability, I would eventually prefer:

// const loginPage = new LoginPage();

// because login sounds like an action, while loginPage clearly represents an object.

// Again, style only.

// 4. Connect Data Model + Page Class — 🔥

// This is the most important part:

// login.open();

// login.enterUsername(logindata.username);

// login.enterPassword(logindata.password);

// login.login();

// This is exactly the connection we wanted.

// You created:

// LoginData
//     ↓
// stores test data
//     ↓
// loginData.username
// loginData.password
//     ↓
// LoginPage
//     ↓
// uses the test data

// That's the important idea behind reusable automation design.

// Expected Output

// Your code produces:

// Opening Login Page
// Entering username: testuser
// Entering password
// Clicking Login button

// ✅ Exactly as required.

// 🏆 Build Challenge Score: 10/10
// Area	Result
// LoginData class	✅
// Constructor	✅
// this properties	✅
// LoginPage class	✅
// Required methods	✅
// Object creation	✅
// Reusable test data	✅
// Connecting data to page	✅
// Expected output	✅
// Overall structure	✅
// Your only improvements are naming/style:

// Instead of:

// let logindata = new LoginData(...)
// const login = new LoginPage()

// I'd recommend:

// const loginData = new LoginData("testuser", "Test@123");
// const loginPage = new LoginPage();
// 🎯 Day 9 Build Goal: COMPLETE

// You've now completed the Day 9 learning + practice scope:

// ✅ Arrow Functions
// ✅ Destructuring
// ✅ Spread / Rest
// ✅ Modules Preview
// ✅ Classes
// ✅ Constructors
// ✅ Inheritance
// ✅ Encapsulation
// ✅ Page-like class
// ✅ Reusable data model
// ✅ Connected page + test data

// The roadmap's Day 9 practice specifically calls for a small Page-like class and reusable data model, and you've completed that successfully.

// Don't move to Day 10 yet. We should do the Day 9 final mixed practice/interview test and score it, then mark the chapter complete and update the tracker according to your learning workflow.