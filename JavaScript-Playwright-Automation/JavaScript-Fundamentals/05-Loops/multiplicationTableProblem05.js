// Multiplication Table

// Let's say we want the table of 5:

// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ...
// 5 × 10 = 50

// A loop is perfect because the pattern repeats.

// Basic idea
// let number = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(number * i);
// }

// This gives:

// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50

// But for a proper table, we can print the expression too:

// let number = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(number + " × " + i + " = " + (number * i));
// }

// Output:

// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ...
// 5 × 10 = 50
// 🎯 Your challenge

// Write a JavaScript program that prints the 7 multiplication table from 1 to 10.

// Expected:

// 7 × 1 = 7
// 7 × 2 = 14
// 7 × 3 = 21
// 7 × 4 = 28
// 7 × 5 = 35
// 7 × 6 = 42
// 7 × 7 = 49
// 7 × 8 = 56
// 7 × 9 = 63
// 7 × 10 = 70
// Requirements

// Use:

// let
// for loop
// multiplication *
//     console.log()

// Write it yourself — don't copy my example. 😄

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (i * num))
}


// Perfect! 10/10.

// Your code is completely correct:

// let num = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " * " + i + " = " + (i * num));
// }

// Output:

// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
// 7 * 4 = 28
// 7 * 5 = 35
// 7 * 6 = 42
// 7 * 7 = 49
// 7 * 8 = 56
// 7 * 9 = 63
// 7 * 10 = 70

// Only difference from the expected output is that you used * instead of ×. That's completely fine in JavaScript. 👍

// 🏆 DAY 4 — COMPLETE!

// You've completed everything in your Day 4 roadmap:

// Hour 1 — Learn
// for             ✅
// while           ✅
// do...while      ✅
// break           ✅
// continue        ✅
// nested loops    ✅
// Hour 2 — Coding Problems
// FizzBuzz        ✅ 9.5/10
// Prime Number    ✅ 10/10
// Factorial       ✅ 10/10
// Palindrome      ✅ 10/10
// Table           ✅ 10/10
// 🎯 Most importantly

// You didn't just memorize syntax. You actually used:

// loops
// conditions
// %
// &&
// break
// continue
// nested loops
// flag variables
// accumulators

// together to solve problems. That's exactly what we wanted from Day 4. 💪

// 📌 Your roadmap status
// Day 3 — Control Statements  ✅ COMPLETE
// Day 4 — Loops               ✅ COMPLETE