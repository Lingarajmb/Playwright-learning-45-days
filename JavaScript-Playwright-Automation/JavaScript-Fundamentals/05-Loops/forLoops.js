// 1. What is a Loop?

// A loop is used when we want to execute the same code repeatedly.

// Without a loop:

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// That's repetitive.

// With a loop:

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Output:

// 1
// 2
// 3
// 4
// 5

// Much cleaner. 👍

// 🔹 for Loop

// The basic syntax is:

// for (initialization; condition; update) {
//     // code to repeat
// }

// Example:

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// There are 3 important parts:

// 1️⃣ Initialization
// let i = 1

// We create the counter and start it at 1.

// 2️⃣ Condition
// i <= 5

// The loop continues while this condition is true.

// 3️⃣ Update
// i++

// After each iteration, i increases by 1.

// So mentally:

// i = 1 → print 1
// i = 2 → print 2
// i = 3 → print 3
// i = 4 → print 4
// i = 5 → print 5
// i = 6 → STOP ❌

// That's the basic idea.

// 🧪 Let's connect it to QA

// Imagine you have 5 test cases:

// for (let i = 1; i <= 5; i++) {
//     console.log("Running test case " + i);
// }

// Output:

// Running test case 1
// Running test case 2
// Running test case 3
// Running test case 4
// Running test case 5

// Later in Playwright, this same idea can help us process multiple test-data records instead of writing the same code repeatedly.

// 🎯 Your first practice

// Don't worry about difficult questions yet.

// // Q1 — Predict the output
// // for (let i = 1; i <= 3; i++) {
// //     console.log(i);
// // }

// //ans: 1,2.3

// // Q2 — Predict the output
// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// // }
// //0,1,2,3,4


// // Q3 — Write the code
// // Print:
// // 10
// // 20
// // 30
// // 40
// // 50
// // using a for loop.

// for (let i = 10; i <= 50; i += 10) {
//     console.log("i will be " + i)
// }


// // Q4 — Write the code

// // Print:

// // 5
// // 4
// // 3
// // 2
// // 1

// // using a for loop.

// for (i = 5; i >= 1; i--) {
//     console.log(i)
// }

// Next challenge 🔥
// Before moving to while, let's make sure you're comfortable with how the loop actually executes.
// What is the output?
// Q5
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }
//output : 2,4,6,8,10


// Q6
// for (let i = 10; i >= 5; i--) {
//     console.log(i);
// }
//output : 10,9,8,7,6,5


// Q7
// for (let i = 1; i <= 5; i++) {
//     console.log("Test " + i);
// }
//output : Test 1, Test 2, Test 3, Test 4, Test 5


// Q8 — Think carefully 🤔
// What numbers are printed?
for (let i = 1; i < 5; i++) {
    console.log(i);
}
//Output : 1 , 2, 3, 4

// 🏆 For Loop — You got it

// You now understand:

// for (let i = start; condition; update) {
//     // repeated code
// }

// And these patterns:

// i++      // +1
// i--      // -1
// i += 2   // +2
// i -= 2   // -2

// That's enough for the basic for loop. ✅

// One small interview tip

// If an interviewer asks:

// "What is the difference between i < 5 and i <= 5?"

// Answer naturally:

// "i < 5 runs until 4, so 5 is excluded. i <= 5 includes 5."

// That's a good interview answer. 👍