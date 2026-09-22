// In this file, we start with:
// What is an array?
// Creating an array
// Accessing array elements
// Array indexing (0, 1, 2...)
// Updating an array element
// .length ⭐
// Basic practice Q1–Q4

//********************************************* */
// 🧠 Topic 1: What is an Array?
//********************************************* */
// An array is used to store multiple values in a single variable.

// Instead of:

// let test1 = "Login";
// let test2 = "Search";
// let test3 = "Logout";

// We can use:
// const testCases = ["Login", "Search", "Logout"];
// Now testCases contains 3 values.
// Array indexing
// JavaScript starts counting from 0:
// Login  → index 0
// Search → index 1
// Logout → index 2

// So:
// console.log(testCases[0]);
// Output:
// Login
// And:
// console.log(testCases[2]);
// Output:
// Logout

//********************************************* */
// ⭐ .length
//********************************************* */
// Now the thing we skipped earlier.
// const testCases = ["Login", "Search", "Logout"];
// console.log(testCases.length);
// Output:
// 3
// .length tells us how many elements are in the array.
// Important:
// Number of elements = 3
// Last index         = 2
// Because indexing starts at 0.

// 🎯 First practice
// Don't worry about coding yet. Just answer:
// const browsers = ["Chrome", "Firefox", "Edge"];
// Q1: What is browsers[0]?
//answer : Chrome
// Q2: What is browsers[2]?
//answer : Edge
// Q3: What is browsers.length?
//answer : 3
// Q4: What is the index of "Firefox"?
//answer : 1

// Send your four answers. 😎

// 🔥🔥 Perfect — 4/4!

// All four are correct:

// Q1 → "Chrome" ✅
// Q2 → "Edge" ✅
// Q3 → 3 ✅
// Q4 → 1 ✅

//--------------------------------------------------------------------------------------------

//********************************************* */
// 🎯 Next Array topic: Updating elements
//********************************************* */

// You can change an existing array value using its index:
// const browsers = ["Chrome", "Firefox", "Edge"];
// browsers[1] = "Safari";
// console.log(browsers);

// Output:
// ["Chrome", "Safari", "Edge"]

// Here:
// browsers[1] = "Safari";
// means replace the value at index 1.

// Q1–Q4
// Q1. What is the output?
// const fruits = ["Apple", "Banana", "Mango"];
// fruits[1] = "Orange";
// console.log(fruits);

//output : ["Apple", "Orange", "Mango" ]

// Q2. What is the value of fruits[1] after the update?
//Orange

// Q3. What is the value of fruits.length after the update?
//3

// Q4. Does updating fruits[1] add a new element or replace the existing element?
//replace the existing element
// Answer all four. 😎

// 🔥 Perfect! 4/4 again!

// All correct:

// Q1 → ["Apple", "Orange", "Mango"] ✅
// Q2 → "Orange" ✅
// Q3 → 3 ✅
// Q4 → Replaces the existing element ✅
// 🧠 Important rule
// fruits[1] = "Orange";

// You are changing the value at index 1.

// It does not increase the array size:

// Before:  ["Apple", "Banana", "Mango"]  → length 3
// After:   ["Apple", "Orange", "Mango"]  → length 3

//--------------------------------------------------------------------------------------------

//********************************************* */
// 🎯 Next: Adding elements with push()
//********************************************* */

// push() adds a new element to the end of an array.

// const fruits = ["Apple", "Banana"];
// fruits.push("Mango");
// console.log(fruits);

// Output:
// ["Apple", "Banana", "Mango"]

// And now:
// console.log(fruits.length);
// Output:
// 3

// 🔑 Remember
// fruits[1] = "Orange" → replaces an existing value
// fruits.push("Mango") → adds a new value at the end

// Q1–Q4
// Q1. What is the output?
// const browsers = ["Chrome", "Firefox"];
// browsers.push("Edge");
// console.log(browsers);

//output : ["Chrome", "Firefox", "Edge" ]

// Q2. What is browsers.length after push()?
//answer : 3

// Q3. Where does push() add the new element?
// A) Beginning
// B) Middle
// C) End
// D) Random position

//answer :C) End

// Q4. How many elements are in this array after the code runs?
// const numbers = [10, 20, 30];
// numbers.push(40);
// numbers.push(50);
// Your answers? 😎

//answer : 5

// 🔥 Perfect! 4/4 again! 🎯

// Q1 → ["Chrome", "Firefox", "Edge"] ✅
// Q2 → 3 ✅
// Q3 → C) End ✅
// Q4 → 5 ✅
// 🧠 One useful point about push()

// You can add multiple elements with one push():

// const numbers = [10, 20, 30];

// numbers.push(40, 50);

// console.log(numbers);

// Output:

// [10, 20, 30, 40, 50]

// So:

// push() → adds element(s) to the END

//--------------------------------------------------------------------------------------------

//********************************************* */
// 🎯 Next topic: pop()
//********************************************* */



// 🧠 What is pop()?
// pop() removes the last element from an array.
// pop() is basically the opposite of push():

// const fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// console.log(fruits);

// Output:
// ["Apple", "Banana"]

// Before:
// Apple → 0
// Banana → 1
// Mango → 2

// After pop():
// Apple → 0
// Banana → 1

// So:
// push() → adds to the END
// pop()  → removes from the END

// ⭐ Important: pop() returns the removed element
// const fruits = ["Apple", "Banana", "Mango"];
// const removedFruit = fruits.pop();
// console.log(removedFruit);

// Output:
// Mango

// The array becomes:
// ["Apple", "Banana"]


// 🎯 Q1–Q4
// Q1
// const browsers = ["Chrome", "Firefox", "Edge"];
// browsers.pop();
// console.log(browsers);
// What is the output?

// output : ["Chrome", "Firefox" ]


// Q2
// const numbers = [10, 20, 30, 40];
// const removed = numbers.pop();
// console.log(removed);
// What is the output?

// output : [10, 20, 30 ]

// Q3
// After this code:
// const fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// What is fruits.length?

//answer : 2

// Q4
// What is the difference?
// push() → push() add the last element to an array
// pop()  → pop() removes the last element from an array
// Send your Q1–Q4 answers. 🔥


// Good work 😎🔥 Q1, Q3, Q4 are correct. Q2 needs one correction.

// Q1 → Correct ✅
// browsers.pop();

// removes "Edge".

// Output:

// ["Chrome", "Firefox"]
// Q2 → ❌ Small mistake

// You answered:

// [10, 20, 30]

// But the question was:

// const removed = numbers.pop();
// console.log(removed);

// Remember: pop() returns the element it removed.

// So:

// numbers = [10, 20, 30, 40]

// pop() removes → 40
// removed = 40

// Therefore output:

// 40

// The array itself becomes:

// [10, 20, 30]

// So there are two different things:

// pop()        → returns 40
// numbers      → becomes [10, 20, 30]
// Q3 → Correct ✅
// 2
// Q4 → Correct ✅

// Your explanation is right. Slightly cleaner interview wording:

// push() → adds element(s) to the end of an array
// pop()  → removes and returns the last element
// 🏆 Score: 3/4

// And this Q2 mistake is actually useful because it teaches an important distinction:

// The array after the operation ≠ the value returned by the operation.

// We'll keep that in mind as we continue. 🔥

//--------------------------------------------------------------------------------------------

//********************************************* */
//Chalooo 😎🔥 Next topic: shift()
// 🧠 What is shift()?
//********************************************* */

// shift() removes the first element from an array.

// const fruits = ["Apple", "Banana", "Mango"];
// const removed = fruits.shift();
// console.log(removed);
// console.log(fruits);

// Output:
// Apple
// ["Banana", "Mango"]

// So remember:
// push()  → adds to END
// pop()   → removes from END
// shift() → removes from BEGINNING

// And just like pop(), shift() returns the element it removes.

// 🎯 Q1–Q4
// Q1. What is the output?
// const browsers = ["Chrome", "Firefox", "Edge"];
// browsers.shift();
// console.log(browsers);

//output : ["Firefox", "Edge"]

// Q2. What is the output?
// const numbers = [10, 20, 30];
// const removed = numbers.shift();
// console.log(removed);

//output : 10

// Q3. What is fruits.length after this?
// const fruits = ["Apple", "Banana", "Mango"];
// fruits.shift();

// fruits.length will be 2

// Q4. Complete the table:
// push()  → ?
// pop()   → ?
// shift() → ?
// Your turn 😎🔥

//answer :
// push()  → add the value to array, at the end
// pop()   → ? remove the value from the array, at the end.
// shift() → ? remove the value from the array, at the bigning.

// 🔥 Perfect! 4/4 🎯

// All your answers are correct.

// Q1 → Correct ✅
// ["Firefox", "Edge"]
// Q2 → Correct ✅

// shift() removes and returns the first element:

// 10
// Q3 → Correct ✅

// 3 elements → remove 1 → length = 2

// Q4 → Correct ✅

// Your understanding is right. Just make the wording a little cleaner:

// push()  → adds element(s) to the END
// pop()   → removes and returns the LAST element
// shift() → removes and returns the FIRST element
// 🧠 Easy memory trick
//         BEGINNING             END

//         shift()  ←            → push()
//         removes                adds

//         ← pop()
//         removes

// 🔥 shift() COMPLETE — 4/4

// Next topic is unshift() — the opposite of shift().

//--------------------------------------------------------------------------------------------

//********************************************* */
// 🧠 What is unshift()?
//********************************************* */

// unshift() adds element(s) to the beginning of an array.

// const fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");
// console.log(fruits);

// Output:
// ["Apple", "Banana", "Mango"]

// It also returns the new length of the array:
// const fruits = ["Banana", "Mango"];
// const result = fruits.unshift("Apple");
// console.log(result);

// Output:
// 3

// 🔑 Remember
// push()    → add to END
// pop()     → remove from END
// unshift() → add to BEGINNING
// shift()   → remove from BEGINNING


// 🎯 Q1–Q4
// Q1
// const browsers = ["Firefox", "Edge"];
// browsers.unshift("Chrome");
// console.log(browsers);
// What is the output?

//output : ["Chrome" , "Firefox", "Edge"]

// Q2
// const numbers = [20, 30];
// const result = numbers.unshift(10);
// console.log(result);
//What is the output ?

//output : 10

// Q3
// const fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");
// console.log(fruits.length);
// What is the output?

//output : 3

// Q4
// Complete this:
// push()     → add to ______
// pop()      → remove from ______
// unshift()  → add to ______
// shift()    → remove from ______
// Your turn 😎🔥

//answers:
// push()     → add to array in end
// pop()      → remove from array at end
// unshift()  → add to array in BEGINNING
// shift()    → remove from from array at BEGINNING

// Good job 😎🔥 Q1, Q3, Q4 are correct. Q2 has one important mistake.

// Q1 → Correct ✅
// ["Chrome", "Firefox", "Edge"]
// Q2 → ❌ Small correction

// You answered:

// 10

// But remember, unshift() returns the new length, not the value added.

// const numbers = [20, 30];

// const result = numbers.unshift(10);

// console.log(result);

// After unshift():

// [10, 20, 30]

// There are 3 elements, so:

// result = 3

// The important distinction:

// unshift(10)
//      ↓
// adds 10 to the array
//      ↓
// returns 3 (new length)
// Q3 → Correct ✅

// 3

// Q4 → Correct ✅

// Your understanding is exactly right:

// push()    → add to END
// pop()     → remove from END
// unshift() → add to BEGINNING
// shift()   → remove from BEGINNING
// 🏆 Score: 3/4

// And this is a useful mistake because now you know:

// pop()    → returns removed element
// shift()  → returns removed element
// unshift() → returns NEW array length

// 🔥 Next we'll learn slice() vs splice(). This is an important one, so we'll go slowly.

//--------------------------------------------------------------------------------------------

//********************************************* */
// Perfect 😎🔥 Next topic: slice() vs splice()
//********************************************* */

// 📁 No new file.Continue in:

// 07 - Arrays /
// └── 01 - Array Basics.js

// We'll learn slice() first, then splice(). Don't mix them yet.

// 🧠 slice()
// slice() is used to copy a portion of an array.

// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const result = fruits.slice(1, 3);
// console.log(result);

// Output:
// ["Banana", "Mango"]

// Important rule
// slice(start, end)
// start → included
// end → not included

// So:
// Index: 0        1         2        3
//         Apple    Banana    Mango    Orange

// slice(1, 3)
//           ↑                 ↑
//        included          excluded

// Result:

// ["Banana", "Mango"]
// ⭐ Very important
// slice() does NOT change the original array.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const result = fruits.slice(1, 3);
// console.log(fruits);
// console.log(result);

// Output:
// ["Apple", "Banana", "Mango", "Orange"]
// ["Banana", "Mango"]
// Original array stays unchanged.

// 🎯 Q1–Q4
// Q1
// const browsers = ["Chrome", "Firefox", "Edge", "Safari"];
// const result = browsers.slice(1, 3);
// console.log(result);
// What is the output ?

//output ; [ "Firefox", "Edge"]

// Q2
// const numberss = [10, 20, 30, 40, 50];
// const results = numberss.slice(2, 5);
// console.log(results);
// What is the output ?

//answer : [ 30, 40, 50 ]

//     Q3
// After this code:
// const fruits = ["Apple", "Banana", "Mango"];
// const result = fruits.slice(0, 2);
// What is fruits ?
// A)["Apple", "Banana"]
// B)["Mango"]
// C)["Apple", "Banana", "Mango"]
// D) undefined

//answer : A)["Apple", "Banana"]

// Q4
// True or False:
// slice() changes the original array.
// Your answers ? 😎🔥

//answer : False

// 🔥🔥 Perfect! 4/4 🎯

// All four are correct.

// Q1 → Correct ✅
// ["Firefox", "Edge"]
// Q2 → Correct ✅
// [30, 40, 50]

// Because slice(2, 5) starts at index 2 and stops before index 5.

// Q3 → ❌ One small correction

// You selected:

// A) ["Apple", "Banana"]

// But the question asks:

// What is fruits?

// The original array is still:

// ["Apple", "Banana", "Mango"]

// So the correct answer is:

// C) ["Apple", "Banana", "Mango"] ✅

// The result is:

// ["Apple", "Banana"]

// This is exactly why we learned:

// slice() does not modify the original array.

// Q4 → Correct ✅

// slice() does not change the original array.

// 🏆 Score: 3/4

// Don't worry about Q3 — your understanding of slice() is actually correct. You just answered what result contains instead of what fruits contains. 👍

// 🔑 Remember
// const result = fruits.slice(0, 2);

// Think:

// fruits → original array → unchanged
// result → copied portion

// Next we'll learn splice(), which is important because unlike slice(), splice() can modify the original array.
//--------------------------------------------------------------------------------------------

//********************************************* */