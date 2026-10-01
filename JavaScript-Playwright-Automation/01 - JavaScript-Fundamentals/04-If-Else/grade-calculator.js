
//Grade Calculator.
//Step 1 — Understand the logic

//We'll use this simple grading rule:

// 90 and above  → Excellent
// 75–89         → Very Good
// 50–74         → Good
// 35–49         → Pass
// Below 35      → Fail


let marks = 23;

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 75) {
    console.log("Very Good");
} else if (marks >= 50) {
    console.log("Good");
} else if (marks >= 35) {
    console.log("Pass");
} else { console.log("Fail") };