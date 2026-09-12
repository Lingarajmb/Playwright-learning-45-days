// //Continue
// continue does NOT stop the loop.

// Instead:
// Skip the current iteration and move to the next iteration.

// Example:
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }

// Output:
// 1
// 2
// 4
// 5

// When i is 3:
// 3 → continue ⏭️ → skip
// But the loop keeps going:
// 1 → print
// 2 → print
// 3 → skip
// 4 → print
// 5 → print

// 🧠 Difference
// break     → STOP the entire loop 🛑
// continue  → SKIP this iteration ⏭️

// 🎯 Your turn
// Q1
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }
// What is the output?
//Output : 1,2,4,5



// Q2
// for (let i = 1; i <= 6; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// What is the output?

//output : 1,3,5


// Q3
// What is the difference between break and continue in your own words?
//these 2 are related to loops, break is when we need to intentionly need to break the loop on that case we use this, 
//continue is we have issue in loops even though we need continue the flow on the case we need to use continue

// Q3 — ✅ Concept understood
// Your explanation is basically right. Let me make it interview-ready:
// break completely terminates the loop when a specific condition is met. continue skips the current iteration and allows the loop to continue with the next iteration.
// Easy memory trick:
// break     → 🛑 STOP everything
// continue  → ⏭️ SKIP this one, keep going

// Q4
// Write a for loop that prints:
// 1
// 2
// 4
// 5
// Skip 3 using continue.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}