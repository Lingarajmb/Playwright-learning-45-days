// 4. break Statement

// You already know loops repeat code.
// Sometimes we want to stop the loop immediately, even though the loop condition is still true.
// That's what break does.

// Example
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }
// Output:
// 1
// 2
// 3
// 4
// What happened?
// The loop reaches:
// i === 5
// That's true, so:
// break;
// immediately stops the loop.

// Think:
// 1 → print
// 2 → print
// 3 → print
// 4 → print
// 5 → BREAK 🛑
// 6 → never reached
// 🧪 QA-style example

// Imagine you're checking test cases and want to stop when you find a failed test:
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         console.log("Test failed — stopping");
//         break;
//     }
//     console.log("Test " + i + " passed");
// }

// Output:
// Test 1 passed
// Test 2 passed
// Test failed — stopping

// This is useful conceptually in automation when you need to stop processing after a particular condition.

// 🎯 Your turn
// Q1 — Predict the output
// for (let i = 1; i <= 10; i++) {
//     if (i === 7) {
//         break;
//     }
//     console.log(i);
// }
//output : 1,2,3,4,5,6


// Q2 — Predict the output
// let i = 1;
// while (i <= 10) {
//     if (i === 4) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
//Output :1,2,3


// Q3 — Write the code
// Using a for loop and break:
// Print:
// 1
// 2
// 3
// 4
// 5
// and stop the loop when i becomes 6.

// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }


// Q4 — Think carefully 🤔
// What will happen?
for (let i = 1; i <= 5; i++) {
    break;
    console.log(i);
}
// What is the output?

//output : Nothing