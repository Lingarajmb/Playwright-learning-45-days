

// Let's do Positive / Negative / Zero.

// 🧠 First understand the logic

// We have three possibilities:

// Number > 0  → Positive
// Number < 0  → Negative
// Number = 0  → Zero

// So we use:

// if (number > 0) {
//     // Positive
// } else if (number < 0) {
//     // Negative
// } else {
//     // Zero
// }
// Example
// let number = -10;

// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// For -10:

// -10 > 0 → false
// -10 < 0 → true
//            ↓
//        Negative
// 🧑‍💻 Your turn

// Write the complete program for:

// let number = 25;

// Requirements:

// Positive → "Positive"
// Negative → "Negative"
// Zero     → "Zero"

// Write it yourself and send me the code. I'll check it.


let number = 0;

if (number > 0) {
    console.log("Postive number")
} else if (number < 0) {
    console.log("Negative Number")
} else {
    console.log("Zero")
}

