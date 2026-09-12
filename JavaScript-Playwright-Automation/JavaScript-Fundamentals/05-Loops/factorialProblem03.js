// What is Factorial?
// The factorial of a number means multiplying that number by every positive integer below it.
// We represent factorial using !.

// Example: 5!
// 5! = 5 × 4 × 3 × 2 × 1
//    = 120
// More examples
// 3! = 3 × 2 × 1 = 6
// 4! = 4 × 3 × 2 × 1 = 24
// 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720
// Important special case
// 0! = 1

// For now, just remember that.
// 🧠 How do we solve it with a loop?
// Suppose:
// let number = 5;
// We need to keep multiplying.
// So we start with:
// let factorial = 1;
// Why 1?
// Because we're doing multiplication.
// Then:
// for (let i = 1; i <= number; i++) {
//     factorial = factorial * i;
// }
// Let's trace it for 5:
// factorial = 1
// i = 1 → 1 × 1 = 1
// i = 2 → 1 × 2 = 2
// i = 3 → 2 × 3 = 6
// i = 4 → 6 × 4 = 24
// i = 5 → 24 × 5 = 120

// Finally:
// console.log(factorial);
// Output:
// 120

// 🔑 Important pattern
// This is called an accumulator pattern:
// let factorial = 1;
// for (...) {
//     factorial = factorial * i;
// }
// Each loop updates the previous result.
// You'll see this pattern frequently in programming.

// 🎯 Your turn
// Q1 — Calculate manually
// What is:
// 4!
// output : 24

// Q2 — Predict the output
// let factorial = 1;
// for (let i = 1; i <= 4; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

//output :24

// Q3 — Write the code
// Write a JavaScript program to calculate:
// 5!
// Use a for loop and an accumulator variable.

// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);


// Q4 — Slightly harder 🔥
// Write a program to calculate:
// 7!
// Again, use a for loop.
// Don't use any built-in factorial function.

let a = 1;
for (let i = 1; i <= 7; i++) {
    a = a * i;
}
console.log(a);


// Send me Q1–Q4 and I'll check them. 💪