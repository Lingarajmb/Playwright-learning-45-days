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
// Next: splice() 🧠
//********************************************* */

// Unlike slice(), splice() changes the original array.

// Basic syntax:
// array.splice(startIndex, deleteCount);

// Example:
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(1, 2);
// console.log(fruits);

// Here:
// splice(1, 2)
//        ↑  ↑
//        │  └─ delete 2 elements
//        └──── start at index 1

// Original:
// Index:    0        1         2        3
//         Apple    Banana    Mango    Orange

// Start at index 1 and remove 2 elements:
// Banana ❌
// Mango  ❌

// Result:
// ["Apple", "Orange"]

// 🔑 Biggest difference
// slice()  → copies part of array → original NOT changed
// splice() → adds/removes elements → original IS changed
// We'll first practice removing with splice(), Q1–Q4, before learning how splice() can also add elements. 🔥

// Q1. Predict the output
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(1, 1);
// console.log(fruits);

//output :["Apple", "Mango", "Orange"]

// Q2. Predict the output
const numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 2);
console.log(numbers);

//output : [ 10, 20, 50 ]

// Q3. What is the value of removed?
const browsers = ["Chrome", "Firefox", "Edge", "Safari"];
const removed = browsers.splice(1, 2);
console.log(removed);
// A) ["Firefox", "Edge"]
// B) ["Chrome", "Safari"]
// C) ["Firefox"]
// D) undefined

//option : A) ["Firefox", "Edge"]

// Q4. What happens to the original array?
const fruits = ["Apple", "Banana", "Mango"];
const result = fruits.splice(1, 1);
console.log(fruits);
// A) Original array remains unchanged
// B) Original array is modified
// C) A new array is created and original is deleted
// D) undefined
// Send Q1–Q4. 🔥

//answer : B) Original array is modified

// 🔥🔥 Perfect — 4/4!

// You got every splice() question correct.

// Q1 → Correct ✅
// ["Apple", "Mango", "Orange"]

// splice(1, 1) starts at index 1 and removes 1 element → "Banana".

// Q2 → Correct ✅
// [10, 20, 50]

// splice(2, 2) removes "30" and "40".

// Q3 → Correct ✅
// const removed = browsers.splice(1, 2);

// splice() returns the elements it removed:

// ["Firefox", "Edge"]
// Q4 → Correct ✅

// B) Original array is modified ✅

// That's the biggest difference from slice().

// 🧠 Remember this
// slice()  → original array NOT changed
// splice() → original array IS changed
// 🏆 Score: 4/4

// Next, we'll learn the second use of splice() — adding elements.

// And we'll continue in the same file:

// 📄 07 - Arrays/01 - Array Basics.js

//------------------------------------------------------------------------------------------------------------------------

//****************************************** */
// 🧠 splice() can ADD elements
//****************************************** */

// Syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...);

// Example:
// const fruits = ["Apple", "Mango"];
// fruits.splice(1, 0, "Banana");
// console.log(fruits);

// Output:
// ["Apple", "Banana", "Mango"]
// 🔍 Understand splice(1, 0, "Banana")
//         1    → start at index 1
//         0    → delete ZERO elements
//         Banana → add this element

// Because we're deleting 0, nothing is removed.
// We're simply inserting "Banana" at index 1.

// Another example
// const numbers = [10, 40];
// numbers.splice(1, 0, 20, 30);
// console.log(numbers);

// Output:
// [10, 20, 30, 40]

// Here:
// splice(1, 0, 20, 30)
//        ↑  ↑  ↑
//        │  │  └─ add 20 and 30
//        │  └──── delete 0
//        └─────── start at index 1


// 🔑 Remember
// splice(start, deleteCount)
// → remove
// splice(start, 0, value)
// → add
// And the original array is modified.

// 🎯 Q1–Q4
// Q1
// const fruits = ["Apple", "Mango"];
// fruits.splice(1, 0, "Banana");
// console.log(fruits);
// What is the output?

//output : ["Apple","Banana", "Mango"]


// Q2
const numberss = [10, 40];
numberss.splice(1, 0, 20, 30);
console.log(numberss);
// What is the output?

//output :[10,20, 30, 40]


// Q3
// const browsers = ["Chrome", "Safari"];
// browsers.splice(1, 0, "Firefox", "Edge");
// console.log(browsers);
// What is the output?

//output : ["Chrome","Firefox", "Edge" , "Safari"]


// Q4
// What does this do?
// fruits.splice(2, 0, "Orange");
// A) Removes "Orange"
// B) Adds "Orange" at index 2
// C) Replaces the value at index 2
// D) Does nothing
// Send your Q1–Q4 answers. 🔥

//answer : // B) Adds "Orange" at index 2

// 🎯 Q1–Q4 Results

// Excellent! 🔥 All 4 answers are correct.

// Question	Your Answer	Result
// Q1	["Apple", "Banana", "Mango"]	✅
// Q2	[10, 20, 30, 40]	✅
// Q3	["Chrome", "Firefox", "Edge", "Safari"]	✅
// Q4	B) Adds "Orange" at index 2	✅
// 🧠 You now understand splice() addition
// array.splice(startIndex, deleteCount, items...)
// splice(1, 0, "Banana") → add without removing
// splice(1, 0, 20, 30) → add multiple items
// deleteCount = 0 → nothing is removed
// splice() modifies the original array

// 🔥 Score: 4/4 — 100%

//---------------------------------------------------------------------------------------------------------------
//********************************************* *
//Next Topic: splice() — Replacing Elements

//********************************************* *

// 📁 Continue in the same file:
// 07 - Arrays/
// └── 01 - Array Basics.js
// You already learned:

// splice(startIndex, deleteCount)
// → removes elements

// And:
// splice(startIndex, 0, value)
// → adds elements

// Now let's learn replacement.

// 🧠 How replacement works
// We give deleteCount as 1 and provide the new value.
// const fruits = ["Apple", "Mango", "Orange"];
// fruits.splice(1, 1, "Banana");
// console.log(fruits);

// Output:
// ["Apple", "Banana", "Orange"]

// What happened?
// Index:     0         1         2
//            ↓         ↓         ↓
// Before:  Apple     Mango     Orange
//                     ↑
//                   remove
//                     ↓
//                   Banana

// So:
// fruits.splice(1, 1, "Banana");

// means:
// 1 → start at index 1
// 1 → remove 1 element
// "Banana" → add "Banana" at that position


// 🔑 Remember
// splice(start, 1, newValue)
// 👉 Replace one element


// 🎯 Practice Q1–Q4
// Q1
// const fruits = ["Apple", "Mango", "Orange"];
// fruits.splice(1, 1, "Banana");
// console.log(fruits);
// What is the output?

//output : ["Apple", "Banana", "Orange"]

// Q2
const abrowsers = ["Chrome", "Firefox", "Safari"];
abrowsers.splice(2, 1, "Edge");
console.log(abrowsers);
// What is the output?

//output : ["Chrome", "Firefox", "Edge"]

// Q3
const numbersss = [10, 20, 30, 40];
numbersss.splice(1, 1, 25);
console.log(numbersss);
// What is the output?

//output : [10, 25, 30, 40];

// Q4

// What does this do?
// fruits.splice(0, 1, "Pineapple");
// A) Adds Pineapple without removing anything
// B) Removes Pineapple
// C) Replaces the element at index 0 with Pineapple
// D) Removes the entire array
// Send your Q1–Q4 answers. 🔥

//answer : C) Replaces the element at index 0 with Pineapple

// Chalooo 😎🔥 Excellent! All 4 are correct.

// Question	Your Answer	Result
// Q1	["Apple", "Banana", "Orange"]	✅
// Q2	["Chrome", "Firefox", "Edge"]	✅
// Q3	[10, 25, 30, 40]	✅
// Q4	C) Replaces the element at index 0 with Pineapple	✅
// 🎯 Score: 4/4 — 100% 🔥

// You now understand all three important splice() patterns:

// // Remove
// array.splice(start, deleteCount);

// // Add
// array.splice(start, 0, value);

// // Replace
// array.splice(start, 1, newValue);
// 🧠 One important point

// For replacement:

// fruits.splice(1, 1, "Banana");

// Think:

// Go to index 1 → remove 1 → put Banana there.

// 📁 We are still working in:

// 07 - Arrays/
// └── 01 - Array Basics.js

// Next topic: concat() — combining arrays. 🚀

//---------------------------------------------------------------------------------------------------------------
//********************************************* *
// Chalooo 😎🔥
// 🔹 Next Topic: concat() — Combining Arrays
//********************************************* *

// 📁 Continue in the same file:
// 07 - Arrays/
// └── 01 - Array Basics.js

// 🧠 What is concat()?
// concat() is used to combine two or more arrays.

// Example:
// const fruits1 = ["Apple", "Mango"];
// const fruits2 = ["Banana", "Orange"];
// const allFruits = fruits1.concat(fruits2);
// console.log(allFruits);

// Output:
// ["Apple", "Mango", "Banana", "Orange"]

// Important point
// concat() does not modify the original array.
// console.log(fruits1);
// Still:
// ["Apple", "Mango"]
// Instead, it creates and returns a new array.

// 🔑 Syntax
// const newArray = array1.concat(array2);
// You can also combine more than two:

// const a = [1, 2];
// const b = [3, 4];
// const c = [5, 6];

// const result = a.concat(b, c);
// console.log(result);

// Output:
// [1, 2, 3, 4, 5, 6]


// 🧠 Easy memory
// concat() = combine arrays → returns a new array

// 🎯 Practice Q1–Q4
// Q1
// const fruits1 = ["Apple", "Mango"];
// const fruits2 = ["Banana", "Orange"];
// const result = fruits1.concat(fruits2);
// console.log(result);
// What is the output?

//output :["Apple", "Mango", "Banana", "Orange"];


// Q2
// const numbers1 = [10, 20];
// const numbers2 = [30, 40];
// const result = numbers1.concat(numbers2);
// console.log(result);
// What is the output?

//output :[10, 20, 30, 40];

// Q3
// const a = [1, 2];
// const b = [3, 4];
// const result = a.concat(b);
// console.log(a);
// What is the output?
// A) [1, 2, 3, 4]
// B) [1, 2]
// C) [3, 4]
// D) undefined

//answer :  B) [1, 2]

// Q4
// What does concat() do?
// A) Removes elements from an array
// B) Replaces elements in an array
// C) Combines arrays and returns a new array
// D) Sorts an array
// Send your Q1–Q4 answers. 🔥

//answer : C) Combines arrays and returns a new array

// Chalooo 😎🔥 Excellent! All 4 are correct.

// Question	Your Answer	Result
// Q1	["Apple", "Mango", "Banana", "Orange"]	✅
// Q2	[10, 20, 30, 40]	✅
// Q3	B) [1, 2]	✅
// Q4	C) Combines arrays and returns a new array	✅
// 🎯 Score: 4/4 — 100% 🔥

// You now know:

// concat()

// ➡️ Combines arrays
// ➡️ Returns a new array
// ➡️ Does not modify the original array

// 📌 Array Basics covered so far
// ✅ Array creation
// ✅ Indexing
// ✅ .length
// ✅ Updating elements
// ✅ push()
// ✅ pop()
// ✅ shift()
// ✅ unshift()
// ✅ slice()
// ✅ splice() — remove
// ✅ splice() — add
// ✅ splice() — replace
// ✅ concat()

// 📁 Still working in:

// 07 - Arrays/
// └── 01 - Array Basics.js

// Next, we'll take one topic at a time. 🔥

//---------------------------------------------------------------------------------------------------------------
//********************************************* *
// 🔹 Next topic: includes()
//********************************************* *

// includes() checks whether an array contains a particular value.

// Example:
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits.includes("Mango"));

// Output:
// true

// If the value isn't present:
// console.log(fruits.includes("Banana"));
// Output:
// false

// 🧠 Remember
// array.includes(value)
// ➡️ Found → true
// ➡️ Not found → false


// Perfect 😎🔥 Let's practice includes().

// 📁 File: 07 - Arrays/01 - Array Basics.js

// 🎯 Q1–Q4
// Q1
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits.includes("Mango"));
// What is the output?

//output : true

// Q2
// const browsers = ["Chrome", "Firefox", "Edge"];
// console.log(browsers.includes("Safari"));
// What is the output?

//output : false

// Q3
// const numbers = [10, 20, 30, 40];
// console.log(numbers.includes(30));
// What is the output?

//output : true

// Q4
// What does includes() return?
// A) The index of the element
// B) The element itself
// C) true or false
// D) A new array

//answer : C) true or false


// Chalooo 😎🔥 Perfect! All 4 are correct.

// Question	Your Answer	Result
// Q1	true	✅
// Q2	false	✅
// Q3	true	✅
// Q4	C) true or false	✅
// 🎯 Score: 4/4 — 100% 🔥

// 🧠 Remember
// fruits.includes("Mango")

// ➡️ Value exists → true
// ➡️ Value doesn't exist → false

// And importantly:

// includes()

// does not return the index. It only checks whether the value exists.

// 📁 Current file:

// 07 - Arrays/
// └── 01 - Array Basics.js

// Array Basics is coming along nicely. 💪🔥

//---------------------------------------------------------------------------------------------------------------
//********************************************* *
// 🔹 Next Topic: indexOf()
//********************************************* *

// 📁 Continue in the same file:

// 07 - Arrays/
// └── 01 - Array Basics.js

// You just learned includes(), which tells us whether a value exists.
// indexOf() goes one step further: it tells us the index of the value.

// Example
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits.indexOf("Mango"));

// Output:
// 1

// Because:
// Index:   0        1         2
//          ↓        ↓         ↓
//        Apple    Mango     Orange

// If the value doesn't exist:
// console.log(fruits.indexOf("Banana"));

// Output:
// -1

// 🧠 Remember
// array.indexOf(value)
// Found → returns the index
// Not found → returns -1
// includes() vs indexOf()
// fruits.includes("Mango");  // true
// fruits.indexOf("Mango");   // 1

// So:
// includes() → Does it exist?
// indexOf() → Where is it?

// 🎯 Q1–Q4
// Q1
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits.indexOf("Mango"));
// What is the output?

// Output: 1

// Q2
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits.indexOf("Banana"));
// What is the output?

// Output: -1

// Q3
// const numbers = [10, 20, 30, 40];
// console.log(numbers.indexOf(30));
// What is the output?

// Output: 2

// Q4
// What does indexOf() return when the value is not found?
// A) 0
// B) undefined
// C) -1
// D) false
// Send your Q1–Q4 answers. 🔥
//answer : C) -1


// Chalooo 😎🔥 Excellent! All 4 are correct.

// Question	Your Answer	Result
// Q1	1	✅
// Q2	-1	✅
// Q3	2	✅
// Q4	C) -1	✅
// 🎯 Score: 4/4 — 100% 🔥
// 🧠 Remember
// array.indexOf(value)
// Value found → returns its index
// Value not found → returns -1

// Example:

// const fruits = ["Apple", "Mango", "Orange"];

// fruits.indexOf("Apple");   // 0
// fruits.indexOf("Mango");   // 1
// fruits.indexOf("Banana");  // -1

// And the difference:

// includes()  → true / false
// indexOf()   → index / -1

// 📁 Current file remains:

// 07 - Arrays/
// └── 01 - Array Basics.js

// 🔥 Next topic: join() — converting array elements into a string.

//---------------------------------------------------------------------------------------------------------------
//********************************************* *
// 🔹 Next Topic: join()
//********************************************* *
// 📁 Continue in the same file:

// 07 - Arrays /
// └── 01 - Array Basics.js

// 🧠 What is join() ?
//     join() combines all elements of an array into one string.

// Example:
// const fruits = ["Apple", "Mango", "Orange"];
// const result = fruits.join();
// console.log(result);

// Output:
// Apple, Mango, Orange

// By default, join() uses a comma, between the elements.
// We can specify our own separator
// const fruits = ["Apple", "Mango", "Orange"];
// const result = fruits.join(" - ");
// console.log(result);

// Output:
// Apple - Mango - Orange
// Another example:
// const words = ["JavaScript", "is", "easy"];
// console.log(words.join(" "));

// Output:
// JavaScript is easy

// 🔑 Remember
// array.join(separator)

// ➡️ Array → String

// And join() does not modify the original array.

// 🎯 Q1–Q4
// Q1
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits.join());
// What is the output ?

//output : Apple,Mango,Orange

//     Q2
// const fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits.join(" - "));
// What is the output ?

//output :Apple - Mango - Orange

//     Q3
// const words = ["JavaScript", "is", "easy"];
// console.log(words.join(" "));
// What is the output ?

//output : JavaScript is easy

//     Q4
// What does join() do?
// A) Combines array elements into a string
// B) Removes array elements
// C) Finds an element's index
// D) Creates a new array
// Send your Q1–Q4 answers. 🔥

//answer : A) Combines array elements into a string

// Chalooo 😎🔥 Perfect! All 4 are correct.

// Question	Your Answer	Result
// Q1	Apple,Mango,Orange	✅
// Q2	Apple - Mango - Orange	✅
// Q3	JavaScript is easy	✅
// Q4	A) Combines array elements into a string	✅
// 🎯 Score: 4/4 — 100% 🔥
// 🧠 Remember
// array.join(separator)

// ➡️ Converts array elements into one string.

// Examples:

// ["A", "B", "C"].join()
// // "A,B,C"
// ["A", "B", "C"].join(" - ")
// // "A - B - C"
// ["A", "B", "C"].join(" ")
// // "A B C"

// And join() does not modify the original array.

// 📁 Current file:

// 07 - Arrays/
// └── 01 - Array Basics.js

// 🔥 Next topic: reverse() — reversing an array.

//---------------------------------------------------------------------------------------------------------------
//********************************************* *
// 🔹 Next Topic: reverse()
//********************************************* *

// 📁 Continue in the same file:

// 07 - Arrays/
// └── 01 - Array Basics.js

// 🧠 What is reverse()?
// reverse() changes the order of the elements so that the last element becomes the first.

// Example:
// const fruits = ["Apple", "Mango", "Orange"];
// fruits.reverse();
// console.log(fruits);

// Output:
// ["Orange", "Mango", "Apple"]

// ⚠️ Important
// Unlike join() and concat(), reverse() modifies the original array.

// Before:
// ["Apple", "Mango", "Orange"]

// After:
// ["Orange", "Mango", "Apple"]

// 🔑 Remember
// array.reverse();

// ➡️ Reverses the array
// ➡️ Modifies the original array

// 🎯 Q1–Q4
// Q1
// const fruits = ["Apple", "Mango", "Orange"];
// fruits.reverse();
// console.log(fruits);
// What is the output?

// Output:["Orange", "Mango", "Apple"]

// Q2
// const numbers = [10, 20, 30, 40];
// numbers.reverse();
// console.log(numbers);
// What is the output?

// Output: [40, 30, 20 ,10 ]

// Q3
// const browsers = ["Chrome", "Firefox", "Edge"];
// browsers.reverse();
// console.log(browsers);
// What is the output?

// Output:["Edge", "Firefox", "Chrome"]


// Q4
// What does reverse() do?
// A) Creates a new array without changing the original
// B) Reverses the array and modifies the original array
// C) Converts the array into a string
// D) Finds the index of an element
// Send your Q1–Q4 answers. 🔥

// answer :  B) Reverses the array and modifies the original array

// Chalooo 😎🔥 Perfect! All 4 are correct.

// Question	Your Answer	Result
// Q1	["Orange", "Mango", "Apple"]	✅
// Q2	[40, 30, 20, 10]	✅
// Q3	["Edge", "Firefox", "Chrome"]	✅
// Q4	B) Reverses the array and modifies the original array	✅
// 🎯 Score: 4/4 — 100% 🔥
// 🧠 Key point
// array.reverse();

// ➡️ Reverses the order
// ➡️ Modifies the original array

// So remember:

// concat()  → does NOT modify original
// join()    → does NOT modify original
// reverse() → DOES modify original

// 📁 Current file:

// 07 - Arrays/
// └── 01 - Array Basics.js

// 🔥 Next topic: sort() — sorting array elements.

//---------------------------------------------------------------------------------------------------------------
//********************************************* *
// 🔹 Next Topic: sort()
//********************************************* *

// 📁 Same file:

// 07 - Arrays/
// └── 01 - Array Basics.js


// 🧠 What does sort() do?
// sort() arranges the elements of an array.

// For simple strings:
// const fruits = ["Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// Output:
// ["Apple", "Mango", "Orange"]

// ⚠️ Important
// Like reverse(), sort() modifies the original array.

// const fruits = ["Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// The original fruits array is now sorted.

// 🔑 For now, remember
// array.sort();

// ➡️ Sorts the array
// ➡️ Modifies the original array

// We'll learn number sorting separately because JavaScript's default numeric sorting has an important rule.

// 🎯 Q1–Q4
// Q1
// const fruits = ["Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// What is the output?

// Output:["Apple", "Mango", "Orange"]

// Q2
// const browsers = ["Safari", "Chrome", "Firefox"];
// browsers.sort();
// console.log(browsers);
// What is the output?

// Output:["Chrome", "Firefox", "Safari"];

// Q3
// const fruits = ["Banana", "Apple", "Orange"];
// fruits.sort();
// console.log(fruits);
// What is the output?

// Output: [ "Apple","Banana", "Orange"]

// Q4
// What does sort() do?
// A) Reverses the array
// B) Sorts the array and modifies the original array
// C) Converts the array into a string
// D) Removes the first element
// Send Q1–Q4. 🔥

// answer : // B) Sorts the array and modifies the original array

// Chalooo 😎🔥 4/4 — 100% again!

// Question	Your Answer	Result
// Q1	["Apple", "Mango", "Orange"]	✅
// Q2	["Chrome", "Firefox", "Safari"]	✅
// Q3	["Apple", "Banana", "Orange"]	✅
// Q4	B) Sorts the array and modifies the original array	✅
// 🧠 Key point
// array.sort();

// ➡️ Sorts the array
// ➡️ Modifies the original array

// You've now covered the important Array Basics methods we planned.

// 📁 Current file:

// 07 - Arrays/
// └── 01 - Array Basics.js
// 🎯 One important topic before we leave Arrays

// Number sorting with sort() is different from string sorting in JavaScript. We'll learn that next, then do a final Array Basics review and move to:

// 08 - Objects/

// 🔥 Keep going!


//---------------------------------------------------------------------------------------------------------------
//********************************************* *
// 🔹 Next Topic: Number Sorting with sort()
//********************************************* *

// 📁 Same file:

// 07 - Arrays/
// └── 01 - Array Basics.js

// This is an important JavaScript point.
// With strings, sort() works as you just learned:
// const fruits = ["Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// // ["Apple", "Mango", "Orange"]
// But with numbers, don't assume sort() automatically sorts numerically.

// Example
// const numbers = [10, 5, 25, 2];
// numbers.sort();
// console.log(numbers);

// JavaScript's default sort() converts values to strings for comparison.
// So the result is:
// [10, 2, 25, 5]

// That's because it compares them like:
// "10"
// "2"
// "25"
// "5"

// 🔑 Numeric sorting
//-----------------------
// For ascending order, use:
// numbers.sort((a, b) => a - b);

// Result:
// [2, 5, 10, 25]

// For descending order:
// numbers.sort((a, b) => b - a);

// Result:
// [25, 10, 5, 2]

// 🧠 Easy memory
// a - b  → ascending  ↑
// b - a  → descending ↓
// Don't worry about understanding the callback deeply yet—we'll revisit callbacks/functions when needed.

// 🎯 Q1–Q4
// Q1
// const numbers = [10, 5, 25, 2];
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// What is the output?

// Result:[ 2,5,10, 25]

// Q2
// const numbers = [10, 5, 25, 2];
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// What is the output?

// Result:[25,10,5,2]

// Q3
// Which one sorts numbers in ascending order?
// A) numbers.sort()
// B) numbers.sort((a, b) => a - b)
// C) numbers.sort((a, b) => b - a)
// D) numbers.reverse()

// Result: B) numbers.sort((a, b) => a - b)

// Q4
// What does this do?
// numbers.sort((a, b) => b - a);
// A) Sorts numbers ascending
// B) Sorts numbers descending
// C) Reverses without sorting
// D) Removes numbers
// Send Q1–Q4. 🔥

// Result:B) Sorts numbers descending

// Chalooo 😎🔥 Perfect! 4/4 — 100%

// Question	Your Answer	Result
// Q1	[2, 5, 10, 25]	✅
// Q2	[25, 10, 5, 2]	✅
// Q3	B) numbers.sort((a, b) => a - b)	✅
// Q4	B) Sorts numbers descending	✅
// 🧠 Final sort() memory
// numbers.sort((a, b) => a - b);

// ➡️ Ascending: small → large

// numbers.sort((a, b) => b - a);

// ➡️ Descending: large → small

// And:

// numbers.sort();

// ⚠️ Default sorting is not reliable for numeric ascending order because JavaScript compares values as strings.

// 🎯 Array Basics — Almost Complete

// You've now covered:

// Array creation       ✅
// Indexing              ✅
// .length               ✅
// Updating              ✅
// push()                ✅
// pop()                 ✅
// shift()               ✅
// unshift()             ✅
// slice()               ✅
// splice()              ✅
// concat()              ✅
// includes()            ✅
// indexOf()             ✅
// join()                ✅
// reverse()             ✅
// sort()                ✅

// Next, we'll do a final Array Basics review with mixed questions.

// After that:

// 07 - Arrays/   ✅ COMPLETE
//         ↓
// 08 - Objects/  🚀

// 🔥 No more new Array Basics methods after the final review unless the 45-day plan specifically requires them.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Chalooo 😎🔥 Final Array Basics Review!

// 📁 We are still reviewing:

// 07 - Arrays/
// └── 01 - Array Basics.js

// This is a mixed review, so I'll only test topics we've already covered.

// 🎯 Final Array Review — Q1 to Q8

// Q1 — push()
// const fruits = ["Apple", "Mango"];
// fruits.push("Orange");
// console.log(fruits);
// What is the output?

// Output:["Apple", "Mango" ,"Orange" ]

// Q2 — pop()
// const Lnumbers = [10, 20, 30];
// const Lresult = Lnumbers.pop();
// console.log(Lresult);
// console.log(Lnumbers);
// What are the two outputs?

// Output: 30  and  [10, 20]

// Q3 — slice()
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const result = fruits.slice(1, 3);
// console.log(result);
// console.log(fruits);
// What are both outputs?

// Output: ["Banana", "Mango" ] and ["Apple", "Banana", "Mango", "Orange"]

// Q4 — splice()
const fruitts = ["Apple", "Mango", "Orange"];
fruits.splice(1, 1, "Banana");
console.log(fruitts);
// What is the output?

// Output:["Apple", "Mango", "Orange"]

// Q5 — concat()
// const a = [1, 2];
// const b = [3, 4];
// const result = a.concat(b);
// console.log(result);
// console.log(a);
// What are both outputs?

// Output:[1, 2, 3, 4] and [1, 2]

// Q6 — includes() vs indexOf()
// const browsers = ["Chrome", "Firefox", "Edge"];
// console.log(browsers.includes("Safari"));
// console.log(browsers.indexOf("Safari"));
// What are the two outputs?

// Output: false and -1

// Q7 — sort()
// const numbers = [20, 5, 10, 2];
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// What is the output?

// Output: [2 , 5, 10 ,20 ]

// Q8 — Concept
// Which statement is correct?
// A) slice() modifies the original array
// B) splice() never modifies the original array
// C) concat() returns a new array and doesn't modify the originals
// D) reverse() returns true or false
// 🔥 Send Q1–Q8 answers.

// Output:C) concat() returns a new array and doesn't modify the originals

// After you answer, I'll give you your final Array score and we'll officially move to:
// 07 - Arrays/   ✅ COMPLETE
//         ↓
// 08 - Objects/  🚀

// Chalooo 😎🔥 You did very well, but there is one issue in Q4. Let's check carefully.

// Q	Your Answer	Result
// Q1	["Apple", "Mango", "Orange"]	✅
// Q2	30 and [10, 20]	✅
// Q3	["Banana", "Mango"] and original unchanged	✅
// Q4	["Apple", "Mango", "Orange"]	❌
// Q5	[1, 2, 3, 4] and [1, 2]	✅
// Q6	false and -1	✅
// Q7	[2, 5, 10, 20]	✅
// Q8	C	✅
// 🔴 Q4 — Important

// You wrote:

// const fruitts = ["Apple", "Mango", "Orange"];

// fruits.splice(1, 1, "Banana");

// console.log(fruitts);

// Notice the variable names:

// fruitts  ← declared
// fruits   ← used in splice()

// These are different variable names.

// So JavaScript will throw an error:

// ReferenceError: fruits is not defined

// Therefore, it will not print:

// ["Apple", "Mango", "Orange"]
// If the code was:
// const fruits = ["Apple", "Mango", "Orange"];

// fruits.splice(1, 1, "Banana");

// console.log(fruits);

// Then the output would be:

// ["Apple", "Banana", "Orange"]
// 🎯 Final Score: 7/8 — 87.5% 🔥

// And honestly, your understanding of the Array concepts is strong. Q4 was a variable-name typo, not a splice() concept mistake.

// ✅ Arrays — Complete

// Based on the 45-day plan, the core Array work is now covered: array creation/indexing/iteration plus map, filter, reduce, find, some, and every.

// So let's officially move on:

// 07 - Arrays/      ✅ COMPLETE
//         ↓
// 08 - Objects/     🚀 NEXT
// 🔥 Next topic

// Objects — Object creation and accessing properties

// 📁 New file:

// 08 - Objects/
// └── 01 - Object Basics.js

// We will start with only one topic at a time, exactly like we've been doing.