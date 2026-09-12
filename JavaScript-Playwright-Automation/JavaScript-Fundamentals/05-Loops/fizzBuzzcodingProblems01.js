// < !--Now Hour 2: Coding Problems

// According to your roadmap, we have 5 problems:
// FizzBuzz
// Prime Number
// Factorial
// Palindrome
// Multiplication Table

// We'll not jump into all five at once.
// We'll start with FizzBuzz, understand the logic, and you write it yourself.

// FizzBuzz requirements
// Loop from 1 to 20.
// For each number:
// Divisible by 3 AND 5 → "FizzBuzz"
// Divisible by 3        → "Fizz"
// Divisible by 5        → "Buzz"
// Otherwise             → print the number

// Example:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// ...

// Your challenge 🎯
// Write the JavaScript code using a for loop.
// Don't worry if you make mistakes. That's exactly what we're practicing. 😄 -->

//FizzBuzz

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}




// let i = 1;

// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz")
// } else if (i % 3 === 3) {
//     console.log("Fizz")
// } else if (i % 5 === 5) {
//     console.log("Bizz")
// } else { console.log(i) }
// // continue;
