// 3. do...while Loop

// This one is very simple once you understand the difference.

// while loop

// First it checks the condition:

// while (condition) {
//     // code
// }

// So if the condition is false from the beginning, the code doesn't execute even once.

// Example:

// let i = 10;

// while (i < 5) {
//     console.log(i);
// }

// Output:

// // Nothing

// Because:

// 10 < 5 → false
// do...while

// With do...while, JavaScript executes the code first, and checks the condition afterward.

// Syntax
// do {
//     // code
// } while (condition);

// Example:

// let i = 10;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// Output:

// 10

// Why?

// Because the do block runs first:

// print 10
//    ↓
// i becomes 11
//    ↓
// check 11 < 5
//    ↓
// false → STOP

// So remember:

// while
// CHECK → RUN
// do...while
// RUN → CHECK

// That's the main difference. 🧠

// 🎯 QA-style example

// Imagine we want to perform an action at least once and then check whether we should continue:

// let attempt = 1;

// do {
//     console.log("Running test attempt " + attempt);
//     attempt++;
// } while (attempt <= 3);

// Output:

// Running test attempt 1
// Running test attempt 2
// Running test attempt 3

// Later, you'll see similar logic when dealing with retries or repeated operations.

// 🧪 Your turn
// Q1 — Predict the output
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 3);

//output : 1 , 2, 3

// Q2 — Think carefully 🤔
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// What is the output?

//output : 10

// Q3 — Compare
// What is the output of this?
// let i = 10;
// while (i < 5) {
//     console.log(i);
// }
// And why is it different from Q2?

//nothing will prient because tis while loop and we don't have update for i


// Q4 — Write the code
// Using do...while, print:
// 5
// 4
// 3
// 2
// 1

let i = 5;
do {
    console.log(i)
    i--;
} while (i >= 1);



// Remember this
// while
// CHECK → RUN → UPDATE

// If the first check is false:

// CHECK ❌ → STOP
// do...while
// RUN → UPDATE → CHECK

// So it always runs at least once.

// 🏆 Loop progress
// for          ✅
// while        ✅
// do...while   ✅

// Next we have:

// 4. break
// 5. continue
// 6. Nested loops

// Then we'll move to your 5 coding problems:

// FizzBuzz → Prime → Factorial → Palindrome → Table 🚀