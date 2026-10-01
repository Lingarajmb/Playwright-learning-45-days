

let number = 2;

switch (number) {

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

    default:
        console.log("Other");
}


// JavaScript switch
// What is switch?

// switch is another way to handle multiple possible values.

// For example, imagine you have a day:

// let day = "Monday";

// You want different output depending on the day.

// Instead of writing:

// if (day === "Monday") {
//     console.log("Start of the week");
// } else if (day === "Friday") {
//     console.log("Weekend is coming");
// } else {
//     console.log("Normal day");
// }

// You can use switch.

// Basic structure
// switch (value) {

//     case value1:
//         // code
//         break;

//     case value2:
//         // code
//         break;

//     default:
//         // code
// }
// Simple example
// let day = "Monday";

// switch (day) {

//     case "Monday":
//         console.log("Start of the week");
//         break;

//     case "Friday":
//         console.log("Weekend is coming");
//         break;

//     default:
//         console.log("Normal day");
// }

// Output:

// Start of the week
// 🧠 The important parts

// switch(day)

// Means:

// "Check the value of day."

// Then:

// case "Monday":

// Means:

// "Is day equal to "Monday"?"

// If yes, execute the code.

// What is break?

// This is very important.

// break;

// means:

// Stop the switch here.

// Without break, JavaScript can continue executing the next cases.

// What is default?

// default is like the final else.

// For example:

// let day = "Sunday";

// switch (day) {

//     case "Monday":
//         console.log("Monday");
//         break;

//     case "Friday":
//         console.log("Friday");
//         break;

//     default:
//         console.log("Other day");
// }

// Since Sunday doesn't match Monday or Friday:

// Other day


// 🎯 Your first switch question

// Don't write code yet. Just predict the output:

// let browser = "Chrome";

// switch (browser) {

//     case "Chrome":
//         console.log("Google Chrome");
//         break;

//     case "Firefox":
//         console.log("Mozilla Firefox");
//         break;

//     default:
//         console.log("Unknown browser");
// }

// What will be printed? And why?

// Google Chrome, beacse case 1 is passed and exit the switch due to break

// ✅ Exactly correct! 10/10 🎯

// Your explanation is also correct.

// browser = "Chrome"

// JavaScript checks:

// case "Chrome" → MATCH ✅
//        ↓
// "Google Chrome"
//        ↓
// break
//        ↓
// Exit switch

// So it doesn't check the Firefox case.

// 🧠 One small terminology correction

// Instead of saying "case 1 is passed", say:

// "The first case matches the value, so its code executes and break exits the switch."

// That's the proper technical explanation for an interview.

// Question 2 — Tricky one 🧠
// let browser = "Safari";

// switch (browser) {

//     case "Chrome":
//         console.log("Google Chrome");
//         break;

//     case "Firefox":
//         console.log("Mozilla Firefox");
//         break;

//     default:
//         console.log("Unknown browser");
// }

// What will be printed, and why?

// may be case 2, Tuesday,
// why is : may be we are saying that case 2 value need to display , by saying day = 2

// Yes! ✅ Your answer is correct: Tuesday.

// And your understanding is almost perfect. Let me make one small correction.

// We have:

// let day = 2;

// This means:

// The value of day is 2.

// Then:

// switch (day)

// means:

// "Check the value stored in day."

// JavaScript checks each case:

// day = 2

// case 1 → 2 === 1 → false
// case 2 → 2 === 2 → true ✅

// So it executes:

// console.log("Tuesday");

// Then:

// break;

// stops the switch.

// Output:
// Tuesday
// 🧠 Remember this pattern
// let day = 2;

// switch (day) {
//     case 1:
//         // if day is 1
//         break;

//     case 2:
//         // if day is 2
//         break;
// }

// So yes, when day = 2, the case 2 matches.

// You're understanding switch correctly. 👍

// Question 4 — Slightly tricky

// output : Lowercase chrome, beacuse JS is casesensitive

// ✅ Correct! 10/10 🎯

// Exactly. JavaScript is case-sensitive.

// Here:

// let browser = "chrome";

// But the first case is:

// case "Chrome":

// These are different:

// "chrome" ≠ "Chrome"

// So JavaScript moves to:

// case "chrome":

// That matches, so the output is:

// Lowercase chrome
// 🧠 Excellent point to remember
// "Chrome" === "chrome" // false
// "Chrome" === "Chrome" // true

// You're getting the switch concept very well. 👍

// Question 6 — Important break concept

// Predict all the output:

// let number = 2;

// switch (number) {

//     case 1:
//         console.log("One");

//     case 2:
//         console.log("Two");

//     case 3:
//         console.log("Three");

//     default:
//         console.log("Other");
// }

// ⚠️ Notice something important: there is no break.

// What will be printed? And why?

// Two  ,Three  ,Other  will be printed,

// and why is case 1 is fail due to number, from 2 numbers will print continusely becase there no break

// ✅ Correct! 10/10 🎯

// let choice = 3;

// So JavaScript finds:

// case 3:

// and prints:

// Delete

// Then break exits the switch.

// Question 9 🧠 — Think carefully
// let value = "2";

// switch (value) {

//     case 2:
//         console.log("Number");
//         break;

//     case "2":
//         console.log("String");
//         break;

//     default:
//         console.log("Unknown");
// }

// What will be printed, and why?

// String

// ✅ Correct! 10/10 🎯

// This is a very good one because it tests data type + switch matching.

// let value = "2";

// The value is a string.

// JavaScript checks:

// "2" === 2     → false ❌
// "2" === "2"   → true ✅

// So this case executes:

// case "2":
//     console.log("String");
// Output:
// String

// Excellent. 👏

// Question 10 — Final one 🏁
// let role = "admin";

// switch (role) {

//     case "user":
//         console.log("User access");
//         break;

//     case "manager":
//         console.log("Manager access");
//         break;

//     case "admin":
//         console.log("Full access");
//         break;

//     default:
//         console.log("No access");
// }

// What will be printed, and why?

// Full access"

// ✅ Correct! 10/10 🎯

// let role = "admin";

// JavaScript finds:

// case "admin":

// So it prints:

// Full access

// Then break exits the switch.

// 🏆 Switch Practice Score: 10/10

// You correctly understood:

// switch(value) ✅
// case matching ✅
// break ✅
// default ✅
// Case sensitivity ✅
// String vs number matching ✅
// Fall-through when break is missing ✅