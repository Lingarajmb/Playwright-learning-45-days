
//what is if condition in javascript?
//The if statement is used to execute a block of code only if a specified condition evaluates to true. It allows you to control the flow of your program based on certain conditions. If the condition is true, the code inside the if block will run; if it's false, the code will be skipped.

//if condition

let salary = 1000000;
if (salary > 100000) {
    console.log("You are highly paid");
}


//Practice 

//Question 01
let agel = 20;
if (agel > 18) {
    console.log("Eligible");
}
//What will be printed?
//Answer : Eligible

//Question 02
let age = 18;
if (age > 18) {
    console.log("Eligible");
}
//Will it print anything? Why?
//Answer : No, it will not print anything because the condition age > 18 is false since age is equal to 18, not greater than 18.

//Question 03
let marks = 40;

if (marks >= 40) {
    console.log("Pass");
}
//What is the output?
//Answer : Pass, because the condition marks >= 40 is true since marks is equal to 40.

//Question 04
let number = 10;

if (number < 10) {
    console.log("Less");
}
//What happens?
//Answer : Nothing will be printed, because the condition number < 10 is false since number is equal to 10, not less than 10.

//Question 05
let agea = 25;
let hasId = true;

if (agea >= 18 && hasId === true) {
    console.log("Entry allowed");
}
//What is the output?
//Answer : Entry allowed, because both conditions age >= 18 and hasId === true are true.

//Question 06
let ages = 16;
let hasPermission = true;

if (ages >= 18 || hasPermission === true) {
    console.log("Allowed");
}
//What is the output?
//Answer : Allowed, because the condition hasPermission === true is true, even though age >= 18 is false. The logical OR operator (||) allows the overall condition to be true if at least one of the conditions is true.

//Question 07
let username = "admin";

if (username === "Admin") {
    console.log("Login successful");
}
//Will the condition be true or false?
//Answer : The condition will be false because the string comparison is case-sensitive. "admin" is not equal to "Admin", so "Login successful" will not be printed.

//Question 08
let value = "10";

if (value === 10) {
    console.log("Same");
}
//Tricky one: What happens?
//Answer : Nothing will be printed because the strict equality operator (===) checks for both value and type. Here, value is a string "10" and 10 is a number, so they are not strictly equal.

//Question 09
let temperature = 30;

if (temperature >= 20 && temperature <= 30) {
    console.log("Comfortable");
}
//What is the output?
//Answer : Comfortable, because the condition temperature >= 20 && temperature <= 30 is true since temperature is 30, which falls within the range of 20 to 30 inclusive.

//Question 10
let balance = 500;

if (balance > 100 && balance < 500) {
    console.log("Valid balance");
}
//What happens?
//Answer : Nothing will be printed because the condition balance > 100 && balance < 500 is false. While balance is greater than 100, it is not less than 500 (it is equal to 500), so the overall condition evaluates to false.
