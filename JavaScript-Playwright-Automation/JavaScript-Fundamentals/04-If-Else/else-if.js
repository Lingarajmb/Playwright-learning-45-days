
//what is else-if conditions in javascript?
//The else-if statement is used to specify a new condition to test, if the first condition is false. It allows you to check multiple conditions in a sequence. If the first condition is false, the program will check the next else-if condition, and so on, until it finds a true condition or reaches the else block (if present).

//Example of else-if condition
let hours = 10;
if (hours >= 5 && hours < 10) {
    console.log("Good Morning");
} else if (hours >= 10 && hours < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}

//else if Practice — 10 Questions

//Question 01
//1. Predict the output

//let marks = 75;

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 60) {
//     console.log("Grade B");
// } else {
//     console.log("Grade C");
// }
//Answer : Grade B, because the condition marks >= 60 is true since marks is equal to 75, which falls in the range for Grade B.

//Question 02
//2. Predict the output
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}
//Answer : Teenager, because the condition age >= 13 is true since age is equal to 16, which falls in the range for Teenager.

//Question 03
//3. Predict the output
let number = 0;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
//Answer : Zero, because the condition number > 0 is false and number < 0 is also false, so it falls to the else block which prints "Zero".

//Question 04
//4. Predict the output

//let marks = 40;

// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 60) {
//     console.log("B");
// } else if (marks >= 40) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }
//Answer : C, because the condition marks >= 40 is true since marks is equal to 40, which falls in the range for Grade C.

//Question 05
//5. Predict the output
let temperature = 35;

if (temperature >= 40) {
    console.log("Very Hot");
} else if (temperature >= 30) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Normal");
} else {
    console.log("Cold");
}
//Answer : Hot, because the condition temperature >= 30 is true since temperature is equal to 35, which falls in the range for Hot.

//Question 06
//6. Tricky — Predict the output
//let marks = 95;

// if (marks >= 40) {
//     console.log("Pass");
// } else if (marks >= 90) {
//     console.log("Excellent");
// } else {
//     console.log("Fail");
// }
//Answer : Pass, because the first condition marks >= 40 is true, so it executes that block and does not check the subsequent else-if conditions.

//Question 07
//7. Tricky — Predict the output

// let age = 18;

// if (age > 18) {
//     console.log("Adult");
// } else if (age === 18) {
//     console.log("Exactly 18");
// } else {
//     console.log("Minor");
// }
//Answer : Exactly 18, because the first condition age > 18 is false, but the second condition age === 18 is true, so it executes that block.

// Question 08
//8. Predict the output

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful");
} else if (username === "admin") {
    console.log("Wrong password");
} else {
    console.log("Invalid username");
}
//Answer : Login successful, because both conditions username === "admin" and password === "1234" are true, so it executes the first block.

//Question 09
//9. Tricky — Predict the output
let score = 60;

if (score > 60) {
    console.log("Above 60");
} else if (score >= 60) {
    console.log("60 or above");
} else {
    console.log("Below 60");
}

//Answer : 60 or above, because the first condition score > 60 is false, but the second condition score >= 60 is true, so it executes that block.


//Question 10
//Create an if / else if / else condition for:
// marks >= 90  → "Excellent"
// marks >= 75  → "Very Good"
// marks >= 50  → "Good"
// marks >= 35  → "Pass"
// below 35     → "Fail"
//Use: let marks = 82;
//Write the complete JavaScript code.

let marks = 82;

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 75) {
    console.log("Very Good");
}
else if (marks >= 50) {
    console.log("Good");
}
else if (marks >= 35) {
    console.log("Pass");
}
else { console.log("Fail"); }
