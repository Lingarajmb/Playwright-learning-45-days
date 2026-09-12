// 2. while Loop

// You already understand the for loop:

// for (initialization; condition; update) {
//     // code
// }

// A while loop is a little different.

// Basic syntax
// while (condition) {
//     // code
// }

// It means:

// While the condition is true, keep executing the code.

// Simple example
// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// Output:

// 1
// 2
// 3
// 4
// 5
// How does it work?

// First:

// let i = 1;

// Then JavaScript checks:

// i <= 5

// If true → execute the loop.

// Then:

// i++;

// increases i.

// So:

// i = 1 → true → print 1
// i = 2 → true → print 2
// i = 3 → true → print 3
// i = 4 → true → print 4
// i = 5 → true → print 5
// i = 6 → false → STOP
// ⚠️ Very important

// With a while loop, you need to make sure the condition eventually becomes false.

// For example:

// let i = 1;

// while (i <= 5) {
//     console.log(i);
// }

// 🚨 This is an infinite loop because i never changes.

// You need:

// i++;

// inside the loop.

// for vs while

// You can think of them like this:

// For loop:

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// While loop:

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// Both produce:

// 1
// 2
// 3
// 4
// 5

// The main difference is that the for loop keeps initialization, condition, and update together, while while separates them.

// 🎯 Your turn
// Q1 — Predict the output
// let i = 1;
// while (i <= 4) {
//     console.log(i);
//     i++;
// }
//output : 1, 2, 3, 4

// Q2 — Predict the output
// let i = 5;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
//output : 5,4,3,2,1

// Q3 — Write the code
// Using a while loop, print:
// 10
// 20
// 30
// 40
// 50

let i = 10;
while (i <= 50) {
    console.log(i)
    i += 10
}

// Q4 — Find the problem 🤔
// What's wrong with this code?
// let i = 1;
// while (i <= 5) {
//     console.log(i);
// }
// Tell me what will happen and why.

// answer : this is infinte loop we doesn't have update in this

// While Loop — COMPLETE

// You now understand:

// Initialization
//      ↓
// Condition
//      ↓
// Execute
//      ↓
// Update
//      ↓
// Condition again

// And you've already understood the most important while-loop mistake: forgetting the update.