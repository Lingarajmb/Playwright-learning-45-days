

// let number = 7; // Change this number to test others
// let isPrime = true;

// if (number <= 1) {
//     isPrime = false; // Numbers less than or equal to 1 are not prime
// } else {
//     // Check if the number can be divided by any number from 2 up to number - 1
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false; // It was completely divided, so it's not prime
//             break;           // Exit the loop early since we found a divisor
//         }
//     }
// }
// // Print the result using if-else
// if (isPrime) {
//     console.log(number + " is a prime number.");
// } else {
//     console.log(number + " is not a prime number.");
// }


// Now your actual challenge

// Don't copy your previous code.

// Write a program that checks every number from 1 to 20 and prints only the prime numbers.

// Expected output:

// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// Requirement

// Use:

// nested for loops
// %
// if
// break
// a flag variable such as isPrime

// This will combine everything you've learned in Day 4 so far. 💪

// Write it yourself and send me the code.

for (let num = 1; num <= 20; num++) {
    if (num < 2) continue;

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}