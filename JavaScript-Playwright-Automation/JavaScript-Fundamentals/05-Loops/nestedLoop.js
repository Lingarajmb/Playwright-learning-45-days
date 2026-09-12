// 🔁 Nested Loops
// A nested loop simply means:
// One loop is placed inside another loop.

// Example:
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(i, j);
//     }
// }

// Here:
// Outer loop → i
// Inner loop → j
// How does it execute?
// When i = 1, the inner loop completes fully:
// 1 1
// 1 2
// Then i becomes 2:
// 2 1
// 2 2
// Then i = 3:
// 3 1
// 3 2
// So the complete output is:
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2
// 🧠 The key rule
// For every one iteration of the outer loop, the inner loop runs from beginning to end.
// Think:
// i = 1
//   → j = 1
//   → j = 2
// i = 2
//   → j = 1
//   → j = 2
// i = 3
//   → j = 1
//   → j = 2
// This is the part you need to understand.

// 🎯 Your turn
// Q1 — Predict the output
// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i, j);
//     }
// }

//Output : 11,12,13,21,22,23



// Q2 — How many times will "Hello" be printed?
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 4; j++) {
//         console.log("Hello");
//     }
// }
// Don't give the output—just tell me the number of times.

//output : 12 times

// Q3 — Predict the output
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log("*");
//     }
// }
// How many * will be printed?

//output :6 times

// Q4 — Practical thinking
// Imagine:
// 3 browsers
// 4 test cases per browser
// If we use a nested loop:
// Outer loop → browsers
// Inner loop → test cases
// How many total test executions would happen?

//output : total 12  test executions