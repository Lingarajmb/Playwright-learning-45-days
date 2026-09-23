//-------------------------------------------------------------------------------------------------------------
//**************************************************** */
// Topic 1: Object Basics — Creating an Object
//**************************************************** */

// 📁 New folder/file:

// 08 - Objects/
// └── 01 - Object Basics.js


// 🧠 What is an Object?
// An object stores related information using key-value pairs.

// Example:
// const user = {
//     name: "Lingaraj",
//     age: 28,
//     role: "QA Engineer"
// };
// console.log(user);

// Here:
// name  → "Lingaraj"
// age   → 28
// role  → "QA Engineer"
// name, age, and role are called properties/keys.

// The values are:
// "Lingaraj"
// 28
// "QA Engineer"

// 🔹 Accessing Object Properties
// We can use dot notation:
// console.log(user.name);

// Output:
// Lingaraj

// Or bracket notation:
// console.log(user["age"]);

// Output:
// 28

// 🧠 Easy memory
// user.name
// ➡️ Dot notation
// user["name"]
// ➡️ Bracket notation
// Both access the same property.

// 🎯 Q1–Q4
// Q1
// const user = {
//     name: "Rahul",
//     age: 25,
//     role: "Tester"
// };
// console.log(user.name);
// What is the output?

//output : Rahul

// Q2
// const user = {
//     name: "Rahul",
//     age: 25,
//     role: "Tester"
// };
// console.log(user["role"]);
// What is the output?

//output : Tester


// Q3
// const product = {
//     name: "Laptop",
//     price: 50000
// };
// console.log(product.price);
// What is the output?

// output : 50000

// Q4
// Which is a valid way to access the name property?
// A) user.name
// B) user["name"]
// C) Both A and B
// D) user(name)
// 🔥 Send Q1–Q4 answers.

//answer : C) Both A and B

// Chalooo 🔥🔥 Topic 1 — Object Basics: 4/4 correct! 🎯

// Question	Your Answer	Result
// Q1	Rahul	✅
// Q2	Tester	✅
// Q3	50000	✅
// Q4	C) Both A and B	✅
// 🏆 Score: 4/4 — 100%

// You clearly understand:

// Object creation
// Key-value pairs
// Properties
// Dot notation → user.name
// Bracket notation → user["name"]

// Topic 1 — Object Basics ✅ COMPLETE

//-------------------------------------------------------------------------------------------------------------------------

// //******************************************* */
// 🚀 Topic 2 — Nested Objects
// //******************************************* */\

// Same file:

// 08 - Objects/
// └── 01 - Object Basics.js

// A nested object means an object inside another object.

// Example:

// const user = {
//     name: "Lingaraj",
//     age: 28,
//     address: {
//         city: "Bengaluru",
//         state: "Karnataka"
//     }
// };

// Here:

// user
//  ├── name
//  ├── age
//  └── address
//       ├── city
//       └── state

// To access the nested values:

// console.log(user.address.city);
// // Bengaluru

// console.log(user.address.state);
// // Karnataka

// 💡 Simple rule
// For nested objects, use dot notation step by step:
// object.outerProperty.innerProperty

// Example:
// user.address.city

// means:
// user → address → city

// 🔥 Practice Q1
// What will this print?
// const employee = {
//     name: "Rahul",
//     job: {
//         role: "Tester",
//         experience: 4
//     }
// };
// console.log(employee.job.role);
// 👉 Your answer? 😎

//answer : Tester

// Correct! ✅🔥

// employee.job.role
//        ↓
//       job
//        ↓
//       role
//        ↓
//     "Tester"
// 🎯 Topic 2 — Q1: Correct

// Let's continue.

// 🔥 Q2

// What will be the output?
// const user = {
//     name: "Lingaraj",
//     address: {
//         city: "Bengaluru",
//         pincode: 560001
//     }
// };
// console.log(user.address.pincode);
// 👉 Your answer? 😎

//answer ; 560001

// Exactly! ✅🔥

// user.address.pincode
//           ↓
//        560001
// 🎯 Topic 2 — Q2: Correct

// Score so far: 2/2 💯

// 🔥 Q3
// What will be the output?
// const product = {
//     name: "Laptop",
//     details: {
//         brand: "Dell",
//         price: 50000
//     }
// };
// console.log(product.details.brand);
// 👉 Your answer? 😎

// //Dell

// Correct! ✅🔥

// product.details.brand
//                ↓
//              "Dell"
// 🎯 Topic 2 — Q3: Correct

// Score: 3/3 💯

// 🔥 Q4 — Last one for Nested Objects

// What will be the output?
// const order = {
//     id: 101,
//     customer: {
//         name: "Rahul",
//         address: {
//             city: "Bengaluru"
//         }
//     }
// };
// console.log(order.customer.address.city);

// 👉 Your answer? 😎

//Bengaluru


// Yesss! 🔥🔥 Correct — Bengaluru!

// 🏆 Topic 2 — Nested Objects

// Score: 4/4 — 100% 🎯

// You correctly understand how to access multiple levels:

// order.customer.address.city

// ➡️ order → customer → address → city
// ➡️ "Bengaluru"

// ✅ Topic 2 COMPLETE

// So far today:

// Topic	Status	Score
// 1. Object Basics	✅ Complete	4/4
// 2. Nested Objects	✅ Complete	4/4
// 3. Destructuring	⏳ Next	—
// 4. Object Methods	⏳	—
// 5. Spread & Rest	⏳	—

// 2/5 topics completed. 😎🔥


//-------------------------------------------------------------------------------------------------------------------------

// //******************************************* */

// 🚀 Topic 3 — Object Destructuring
// //******************************************* */\

// Same file:

// 08 - Objects/
// └── 01 - Object Basics.js

// 📌 What is Destructuring?
// Destructuring lets us take values from an object and store them directly in variables.

// Without destructuring:

// const user = {
//     name: "Lingaraj",
//     age: 28
// };
// const name = user.name;
// const age = user.age;
// console.log(name);
// console.log(age);

// With destructuring:

// const user = {
//     name: "Lingaraj",
//     age: 28
// };
// const { name, age } = user;
// console.log(name);
// console.log(age);

// Output:
// Lingaraj
// 28


// 🧠 Important syntax
// const { property1, property2 } = object;

// So:
// const { name, age } = user;
// means:
// Take name and age from user and create variables with those names.

// One important point
// The variable names normally match the object property names:

// const user = {
//     name: "Rahul",
//     age: 25
// };

// const { name, age } = user;

// Now:
// console.log(name); // Rahul
// console.log(age);  // 25


// 🔥 Practice Q1
// What will be the output?

// const employee = {
//     name: "Rahul",
//     role: "Tester",
//     experience: 4
// };
// const { name, role } = employee;
// console.log(name);
// console.log(role);
// 👉 Give me both outputs. 😎

//output : Rahul and Tester

// give me set of questions

// Absolutely 😎🔥 Since you want to finish Objects today, let's do a set of questions for Topic 3 — Object Destructuring instead of one-by-one.

// 🧩 Topic 3 — Object Destructuring Practice

// Q1. What is the output?
// const user = {
//     name: "Rahul",
//     age: 25,
//     role: "Tester"
// };
// const { name, age } = user;
// console.log(name);
// console.log(age);

//output : Rahul and 25

// Q2. What is the output?
// const product = {
//     name: "Laptop",
//     price: 50000
// };
// const { price } = product;
// console.log(price);

//output :50000

// Q3. Fill in the blank:
// const employee = {
//     name: "Rahul",
//     role: "Tester"
// };
// const { ______ } = employee;
// console.log(role);
// What should go in the blank?

//output : role

// Q4. Which is the correct destructuring syntax?
// A)  const name, age = user;
// B) const { name, age } = user;
// C) const [name, age] = user;
// D) const (name, age) = user;

//output : B) const { name, age } = user;

// Q5. What is the output?
// const employee = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };
// const { role, experience } = employee;
// console.log(role);
// console.log(experience);

//output :QA Engineer and 4

// Q6. True or False?
// const user = {
//     name: "Rahul",
//     age: 25
// };
// const { name } = user;
// This creates a variable called name containing "Rahul".

//answer : true

// Q7. What is the output?
// const user = {
//     name: "Rahul",
//     age: 25
// };
// const { age } = user;
// console.log(age);

//output : 25

// Q8. Interview-style:
// In simple words, what is object destructuring?

//answer : Destructuring lets us take values from an object and store them directly in variables.

// Chalooo 🔥 Topic 3 — Object Destructuring: 8/8 correct! 🎯

// Q	Result
// Q1	✅ Rahul, Tester
// Q2	✅ 50000
// Q3	✅ role
// Q4	✅ B
// Q5	✅ QA Engineer, 4
// Q6	✅ True
// Q7	✅ 25
// Q8	✅ Correct definition
// 🏆 Score: 8/8 — 100%

// Your Q8 explanation is exactly right:

// Destructuring lets us take values from an object and store them directly in variables.

// ✅ Objects Progress
// Topic	Status	Score
// 1. Object Basics	✅ Complete	4/4
// 2. Nested Objects	✅ Complete	4/4
// 3. Destructuring	✅ Complete	8/8
// 4. Object Methods	⏳ Next	—
// 5. Spread & Rest	⏳	—

// 3/5 topics completed today. 🔥

//-------------------------------------------------------------------------------------------------------------------------

// //******************************************* */
//🚀 Next: Topic 4 — Object Methods
// //******************************************* */\

// We'll learn:

// What is an object method ?
// How to create a function inside an object
// How to call an object method
// Basic use of this

// Same file:

// 08 - Objects /
// └── 01 - Object Basics.js

// Let's start Object Methods. 😎🔥

// Today 10:05 PM
// yes

// Chalooo 😎🔥 Topic 4 — Object Methods

// Same file:

// 08 - Objects /
// └── 01 - Object Basics.js
// 📌 What is an Object Method ?

//     When we put a function inside an object, that function is called an object method.

//         Example:

// const user = {
//     name: "Lingaraj",

//     greet: function () {
//         console.log("Hello!");
//     }
// };

// Here:

// name → property
// greet → method
// function() { ... } → function assigned to the method
// ▶️ Calling the method

// We use dot notation:

// user.greet();

// Output:

// Hello!
// 💡 Shorter syntax

// JavaScript also allows:

// const user = {
//     name: "Lingaraj",

//     greet() {
//         console.log("Hello!");
//     }
// };

// user.greet();

// Both are object methods.

// 🔥 Now "this"

// Inside an object method, "this" can refer to the current object.

//     Example:

// const user = {
//     name: "Lingaraj",

//     greet() {
//         console.log("Hello " + this.name);
//     }
// };

// user.greet();

// Output:

// Hello Lingaraj

// Here:

// this.name

// refers to:

// user.name

// So:

// this → user
// this.name → "Lingaraj"
// 🧠 Simple interview definition

// An object method is a function defined inside an object.this is used inside the method to access properties of the current object.

// 🔥 Practice Q1

// What will be the output ?

// const user = {
//     name: "Rahul",

//     greet() {
//         console.log("Hello " + this.name);
//     }
// };

// user.greet();

// 👉 Your answer ? 😎


//answer : Hello Rahul


// Correct! ✅🔥
// user.greet();
// calls the method, and:
// this.name
// refers to user.name, which is "Rahul".

// 🎯 Topic 4 — Q1: Correct
// Score: 1/1 💯
// Let's continue with a set of questions so we can move faster.

// 🔥 Object Methods — Q2
// What will be the output?
const employee = {
    name: "Lingaraj",

    introduce() {
        console.log("My name is " + this.name);
    }
};
employee.introduce();

//output : My name is Lingaraj

// Q3
// What will be the output?
const calculator = {
    a: 10,
    b: 20,
    add() {
        return this.a + this.b;
    }
};
console.log(calculator.add());

//output : 30

// Q4
// Which one is an object method?
// A
// const user = {
//     name: "Rahul"
// };

// B
// const user = {
//     greet() {
//         console.log("Hello");
//     }
// };

// C
// const user = {
//     name: "Rahul",
//     age: 25
// };

// D
// const user = {};

//output : option B
// const user = {
//     greet() {
//         console.log("Hello");
//     }
// };

// Q5
// True or False:
// const user = {
//     name: "Rahul",
//     greet() {
//         console.log(this.name);
//     }
// };
// Inside greet(), this.name refers to the name property of the user object.

//output : True

// Q6 — Interview-style
// In simple words, what is an object method?
// Send Q2–Q6 together. 😎🔥
//answer : When we put a function inside an object, that function is called an object method.

/*Chalooo 🔥 Topic 4 — Object Methods: 6/6 correct! 🎯

Q	Your Answer	Result
Q1	Hello Rahul	✅
Q2	My name is Lingaraj	✅
Q3	30	✅
Q4	B	✅
Q5	True	✅
Q6	Function inside an object = object method	✅
🏆 Score: 6/6 — 100%

Your interview answer is good and simple:

When we put a function inside an object, that function is called an object method. ✅

And you also understand this.name correctly. 💯

📊 Objects Progress
Topic	Status	Score
1. Object Basics	✅	4/4
2. Nested Objects	✅	4/4
3. Destructuring	✅	8/8
4. Object Methods	✅	6/6
5. Spread & Rest	⏳ LAST TOPIC	—

🔥 4/5 completed!

Only Spread & Rest is remaining. After */


//-------------------------------------------------------------------------------------------------------------------------

// //******************************************* */
// 😎🔥 LAST TOPIC — Topic 5: Spread & Rest with Objects
// //******************************************* */
// Same file:
// 08 - Objects /
// └── 01 - Object Basics.js
// 1️⃣ Object Spread ...

// Object spread is used to copy or combine object properties.

//     Example:

// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer"
// };

// const updatedUser = {
//     ...user,
//     experience: 4
// };

// console.log(updatedUser);

// Output:
// {
//     name: "Lingaraj",
//         role: "QA Engineer",
//             experience: 4
// }

// Here:
// ...user
// copies the properties from user into updatedUser.

// Another example — combining objects
// const personal = {
//     name: "Lingaraj"
// };

// const professional = {
//     role: "QA Engineer"
// };

// const user = {
//     ...personal,
//     ...professional
// };

// console.log(user);

// Output:

// {
//     name: "Lingaraj",
//         role: "QA Engineer"
// }


// 2️⃣ Object Rest ...
// Rest is used when destructuring to collect the remaining properties.

//     Example:
// const user = {
//     name: "Lingaraj",
//     age: 28,
//     role: "QA Engineer"
// };

// const { name, ...details } = user;

// console.log(name);
// console.log(details);

// Output:
// Lingaraj
// {
//     age: 28,
//         role: "QA Engineer"
// }

// Here:
// const { name, ...details } = user;
// means:
// name → gets the name property
// ...details → collects the remaining properties


// 🧠 Easy way to remember
// Spread → spreads / copies properties OUT
// const newUser = { ...user };

// Rest → collects remaining properties IN
// const { name, ...details } = user;

// Same ...syntax, but the usage is different.

// 🔥 Practice — Q1

// What will be the output ?
// const user = {
//     name: "Rahul",
//     role: "Tester"
// };

// const updatedUser = {
//     ...user,
//     experience: 4
// };

// console.log(updatedUser.name);
// console.log(updatedUser.experience);

// 👉 Give me both outputs. 😎

//outputs : Rahul and 4

// Q2

// What will be the output?
// const personal = {
//     name: "Lingaraj"
// };

// const professional = {
//     role: "QA Engineer"
// };

// const user = {
//     ...personal,
//     ...professional
// };

// console.log(user.role);

// A) name
// B) QA Engineer
// C) undefined
// D) Error

//answer : B) QA Engineer


// Topic 5 — Spread & Rest
// You already answered Q1 correctly, so here is the remaining full set.

// Q2 — Spread
// What is the output?
// const personal = {
//     name: "Lingaraj"
// };

// const professional = {
//     role: "QA Engineer"
// };

// const user = {
//     ...personal,
//     ...professional
// };

// console.log(user);

// A) { name: "Lingaraj" }
// B) { role: "QA Engineer" }
// C) { name: "Lingaraj", role: "QA Engineer" }
// D) Error

//Answer :C) { name: "Lingaraj", role: "QA Engineer" }

// Q3 — Spread
// What is the output?
// const user = {
//     name: "Rahul",
//     role: "Tester"
// };

// const updatedUser = {
//     ...user,
//     experience: 4
// };

// console.log(updatedUser);
// Write the output.

//output : Rahul ,  Tester, 4

// Q4 — Spread
// What happens here?
// const user = {
//     name: "Rahul",
//     role: "Tester"
// };

// const updatedUser = {
//     ...user,
//     role: "QA Engineer"
// };

// console.log(updatedUser.role);

// A) Tester
// B) QA Engineer
// C) undefined
// D) Error

//output : B) QA Engineer

// Q5 — Rest
// What will be the output?

// const user = {
//     name: "Lingaraj",
//     age: 28,
//     role: "QA Engineer"
// };

// const { name, ...details } = user;
// console.log(details);

// A) { name: "Lingaraj" }
// B) { age: 28, role: "QA Engineer" }
// C) { role: "QA Engineer" }
// D) Error

////output : B) { age: 28, role: "QA Engineer" }

// Q6 — Rest
// What does ...details do here?
// const user = {
//     name: "Rahul",
//     age: 25,
//     role: "Tester"
// };

// const { name, ...details } = user;

// A) Copies only name
// B) Deletes name from the original object
// C) Collects the remaining properties into details
// D) Creates an array

//output : C) Collects the remaining properties into details


// Q7 — Spread or Rest?
// Identify whether ... is Spread or Rest.

// const user = {
//     name: "Rahul",
//     role: "Tester"
// };

// const newUser = {
//     ...user,
//     experience: 4
// };

// Answer: Spread

// Q8 — Spread or Rest?
// Identify whether ... is Spread or Rest.

// const user = {
//     name: "Rahul",
//     age: 25,
//     role: "Tester"
// };

// const { name, ...details } = user;

// Answer:  Rest

// Q9 — Concept
// In your own words:
// What is the difference between Spread and Rest?

//answer : Spread → spreads/copies properties OUT and Rest → collects remaining properties IN

// Q10 — Coding 🔥
// Create these two objects:
// const basicInfo = {
//     name: "Lingaraj",
//     age: 28
// };

// const jobInfo = {
//     role: "QA Engineer",
//     experience: 4
// };

// Using spread, create one user object containing all four properties.

// Expected structure:

// {
//     name: "Lingaraj",
//     age: 28,
//     role: "QA Engineer",
//     experience: 4
// }

// //program
// const basicInfo = {
//     name: "Lingaraj",
//     age: 28
// };

// const jobInfo = {
//     role: "QA Engineer",
//     experience: 4
// };

// const user = {
//     ...basicInfo,
//     ...jobInfo
// }

// console.log(user);

// 🔥🔥 Chalooo! Topic 5 — Spread & Rest checked.

// You did very well. Let's check each one carefully.

// Question	Your Answer	Result
// Q1	Rahul, 4	✅ Correct
// Q2	B — QA Engineer	✅ Correct
// Q3	Rahul, Tester, 4	✅ Correct
// Q4	B — QA Engineer	✅ Correct
// Q5	B — { age: 28, role: "QA Engineer" }	✅ Correct
// Q6	C — collects remaining properties	✅ Correct
// Q7	Spread	✅ Correct
// Q8	Rest	✅ Correct
// Q9	Spread copies OUT, Rest collects IN	✅ Correct
// Q10	Spread both objects	✅ Correct
// Q10 — Your code
// const user = {
//     ...basicInfo,
//     ...jobInfo
// }

// console.log(user);

// ✅ Exactly right.

// Output:

// {
//     name: "Lingaraj",
//     age: 28,
//     role: "QA Engineer",
//     experience: 4
// }
// 🎯 Topic 5 Score

// 10/10 — 100% 🔥🔥🔥

// You now understand:

// Object Spread ...
// Combining objects
// Adding properties using spread
// Overriding properties with spread
// Object Rest ...
// Collecting remaining properties
// Difference between Spread and Rest
// 🏆 Objects Chapter Progress

// You've now completed all 5 topics:

// ✅ Object Basics / Object Literals — 4/4
// ✅ Nested Objects — 4/4
// ✅ Object Destructuring — 8/8
// ✅ Object Methods — 6/6
// ✅ Spread & Rest — 10/10

// Objects chapter learning is complete. 🎉

// But before we mark it fully complete, let's do a Final Objects Interview + Coding Review covering all 5 topics. This will make sure you can actually use objects, not just answer individual topic questions.

// I'll give you the whole final question set at once, just like you requested. 😎🔥