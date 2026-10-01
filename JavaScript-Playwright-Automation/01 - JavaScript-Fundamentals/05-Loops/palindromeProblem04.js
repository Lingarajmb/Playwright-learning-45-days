// What is a Palindrome ?
// A palindrome is something that reads the same forward and backward.

// Examples:

// 121  → 121 ✅
// madam → madam ✅
// level → level ✅

// Not palindromes:
// 123 → 321 ❌
// hello → olleh ❌

// For today, let's focus on numbers, because this is a good loop exercise.
// 🔢 Example: 121
// We want to reverse:
// 121 → 121
// Then compare:
// original === reversed
// If they're equal → palindrome.
// 🧠 How can we reverse a number ?
//     This is where the loop comes in.
//         Suppose:
// let number = 123;
// We can extract the last digit using % 10.
// 123 % 10 → 3
// Then we remove the last digit using:
// Math.floor(123 / 10) → 12
// So:
// 123
//  ↓
// last digit = 3
// remaining = 12

// Then:
// 12 % 10 → 2
// 12 / 10 → 1
// Then:
// 1 % 10 → 1
// So the digits are collected:
// 3 → 2 → 1
// and the reversed number becomes:
// 321

// Basic structure
// We'll eventually build something like:

// let number = 121;
// let original = number;
// let reversed = 0;
// while (number > 0) {
//     let digit = number % 10;
//     reversed = reversed * 10 + digit;
//     number = Math.floor(number / 10);
// }

// Then:
// if (original === reversed) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

// Don't memorize this yet. Let's understand the important line:
// reversed = reversed * 10 + digit;
// For 121:
// Start reversed = 0
// digit = 1
// reversed = 0 × 10 + 1 = 1
// digit = 2
// reversed = 1 × 10 + 2 = 12
// digit = 1
// reversed = 12 × 10 + 1 = 121

// So:
// Original = 121
// Reversed = 121
// Therefore → Palindrome ✅

// 🎯 Your turn
// Let's make sure you understand the pieces before writing the complete program.

// Q1
// What does this give ?
//     123 % 10
//output : 3

// Q2
// What does this give ?
//     Math.floor(123 / 10)
//output : 12

// Q3
// If:
// let reversed = 12;
// let digit = 3;
// What will this produce ?
//     reversed = reversed * 10 + digit;

// output : 123


// Q4
// Is 1221 a palindrome ?
//     Explain briefly why.

// yes beacause  something that reads the same forward and backward.


//Q5 🔥
// Is 1234 a palindrome ?
// Answer : this not beacause this not  something that reads the same forward and backward.

//     Once you answer these, I'll give you the complete coding challenge, and you write the program yourself. 💪


// Now the coding challenge

// Write a JavaScript program that checks whether a number is a palindrome.

// Start with:

// let number = 1221;

// Your program should:

// Save the original number.
// Reverse the number using a while loop.
// Use % 10 to get the last digit.
// Use Math.floor() to remove the last digit.
// Compare the original and reversed numbers.
// Print either:
// 1221 is a palindrome.

// or:

// 1221 is not a palindrome.
// 💡 Hints

// You'll need:

// let original = number;
// let reversed = 0;

// Inside the loop:

// let digit = number % 10;

// Then update:

// reversed = reversed * 10 + digit;

// And remove the last digit:

// number = Math.floor(number / 10);

// Try writing the complete program yourself.

let number = 1221;

let original = number;
let reversed = 0;

while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
}

if (original === reversed) {
    console.log(original + " is a palindrome.");
} else {
    console.log(original + " is not a palindrome.");
}


// ✅ What you got right
// original = number → preserves the original value ✅
// % 10 → extracts the last digit ✅
// reversed * 10 + digit → builds the reversed number ✅
// Math.floor(number / 10) → removes the last digit ✅
// while loop → processes all digits ✅
// original === reversed → final comparison ✅

// For 1221:

// 1221 → reverse → 1221

// Therefore:

// 1221 is a palindrome.
// 🏆 Day 4 progress
// FizzBuzz       ✅
// Prime Number   ✅
// Factorial      ✅
// Palindrome     ✅