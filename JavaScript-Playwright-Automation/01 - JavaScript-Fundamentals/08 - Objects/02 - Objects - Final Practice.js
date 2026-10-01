// 🔥 Chalooo! Final Objects Review — full set 🔥

// File: 01 - JavaScript - Fundamentals/08 - Objects/02 - Objects - Final Practice

// This review covers all 5 topics: Basics, Nested Objects, Destructuring, Methods, Spread & Rest.

// Answer all questions together. I'll check everything and give you the final score.

// 🧠 Q1 — Object Basics
// What is the output?
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };
// console.log(user.role);

// A) Lingaraj
// B) QA Engineer
// C) 4
// D) undefined

//anwer :B) QA Engineer

// 🧠 Q2 — Bracket Notation
// What is the output?
// const user = {
//     name: "Rahul",
//     role: "Tester"
// };
// console.log(user["name"]);

// A) Rahul
// B) name
// C) undefined
// D) Error

//anwer : A) Rahul

// 🧠 Q3 — Nested Object
// What is the output?
// const employee = {
//     name: "Lingaraj",
//     job: {
//         role: "QA Engineer",
//         experience: 4
//     }
// };

// console.log(employee.job.experience);

// Answer: ___4___



// 🧠 Q4 — Nested Object
// What is the correct way to access Bengaluru?

// const user = {
//     name: "Lingaraj",
//     address: {
//         city: "Bengaluru",
//         pincode: 560001
//     }
// };

// A) user.city
// B) user.address.city
// C) user["city"]
// D) user.address

//anwer :B) user.address.city

// 🧠 Q5 — Destructuring
// What will be the output?

// const user = {
//     name: "Rahul",
//     age: 25,
//     role: "Tester"
// };

// const { name, role } = user;

// console.log(name);
// console.log(role);

// Answer: Rahul and Tester



// 🧠 Q6 — Destructuring Concept

// Complete the statement:
// Object destructuring allows us to __________.
// Write it in your own words.

//anwer : Object destructuring allows us to take values from an object and store them directly in variables.

// 🧠 Q7 — Object Method
// What is the output?
// const user = {
//     name: "Lingaraj",
//     greet() {
//         return "Hello " + this.name;
//     }
// };
// console.log(user.greet());

// Answer: ___Hello Lingaraj ___

// 🧠 Q8 — this
// In this code:
// const user = {
//     name: "Rahul",

//     greet() {
//         console.log(this.name);
//     }
// };
// user.greet();

// What does this refer to?

// A) greet function
// B) user object
// C) name property
// D) Global object

//anwer :  C) name property

// 🧠 Q9 — Spread
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

// Answer: Rahul and Tester and 4

// 🧠 Q10 — Spread Override 🔥
// What is the output?
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

//anwer : B) QA Engineer

// 🧠 Q11 — Rest
// What will details contain?
// const user = {
//     name: "Lingaraj",
//     age: 28,
//     role: "QA Engineer"
// };
// const { name, ...details } = user;
// console.log(details);

// Answer: ____ age: 28 and role: "QA Engineer"__

// 🧠 Q12 — Spread vs Rest
// Explain the difference between:

// Spread and Rest
// Keep it simple, in your own words.
//anwer :  Spread → spreads/copies properties OUT and Rest → collects remaining properties IN

// 💻 Q13 — Coding
// Create this object:
// const product = {
//     name: "Laptop",
//     brand: "Dell",
//     price: 50000
// };

// Write code to print:
// Laptop
// 50000
// Use dot notation.

//Program anwer :

const product = {
    name: "Laptop",
    brand: "Dell",
    price: 50000
};
console.log(product.name)
console.log(product.price)

// 💻 Q14 — Coding: Nested Object
// Create:
// const employee = {
//     name: "Lingaraj",
//     job: {
//         role: "QA Engineer",
//         experience: 4
//     }
// };
// Write code to print:
// QA Engineer
// 4

//Program anwer :
const employee = {
    name: "Lingaraj",
    job: {
        role: "QA Engineer",
        experience: 4
    }
};
console.log(employee.job.role);
console.log(employee.job.experience);


// 💻 Q15 — Coding: Destructuring
// Create:
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };
// Use destructuring to create variables for:
// name
// role
// experience
// Then print all three.


//Program anwer :
// const user = {
//     name: "Lingaraj",
//     role: "QA Engineer",
//     experience: 4
// };

// const name = user.name;
// const role = user.role;
// const experience = user.experience;
// console.log(name);
// console.log(role);
// console.log(experience);


// 💻 Q16 — Coding: Object Method
// Create an object:
// const user = {
//     name: "Lingaraj"
// };
// Add a method called greet() that returns:
// Hello Lingaraj
// Then call the method.

//Program anwer :
// const user = {
//     name: "Lingaraj",
//     greet() {
//         return ("Hello " + this.name);
//     }
// };

// console.log(user.greet());


// 💻 Q17 — Coding: Spread 🔥
// Create:
// const personal = {
//     name: "Lingaraj",
//     age: 28
// };
// const professional = {
//     role: "QA Engineer",
//     experience: 4
// };
// Using spread, create one user object containing all four properties.

//Program anwer :
// const personal = {
//     name: "Lingaraj",
//     age: 28
// };
// const professional = {
//     role: "QA Engineer",
//     experience: 4
// };
// const user = {
//     ...personal,
//     ...professional
// }
// console.log(user);



// 💻 Q18 — Coding: Rest 🔥
// Given:
// const user = {
//     name: "Lingaraj",
//     age: 28,
//     role: "QA Engineer",
//     experience: 4
// };
// Using rest, extract name separately and store the remaining properties in details.
// Expected:
// name = "Lingaraj"
// details = {
//     age: 28,
//     role: "QA Engineer",
//     experience: 4
// }

//Program anwer :
const user = {
    name: "Lingaraj",
    age: 28,
    role: "QA Engineer",
    experience: 4
};

const { name, ...deatils } = user;
console.log(name);
console.log(deatils);


/*🔥 Chalooo! Final Objects Review checked completely. You did very well overall. Let's go question by question.

Q	Result	Notes
Q1	✅	QA Engineer
Q2	✅	Rahul
Q3	✅	4
Q4	✅	user.address.city
Q5	✅	Rahul and Tester
Q6	✅	Correct definition
Q7	✅	Hello Lingaraj
Q8	❌	Small concept mistake
Q9	⚠️	Output idea correct, but exact object output should include property names
Q10	✅	QA Engineer
Q11	✅	Remaining properties
Q12	✅	Excellent distinction
Q13	✅	Correct code
Q14	✅	Correct nested access
Q15	❌	You used property access instead of destructuring
Q16	✅	Correct method
Q17	✅	Correct spread
Q18	✅	Correct rest; variable spelling doesn't affect the concept
❌ Q8 — Important correction

You answered:

C) name property

Correct answer is:

B) user object

Because:

const user = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

Inside greet(), when we call:

user.greet();

this refers to the object that called the method, which is user.

So:

this.name

means:

user.name

which gives:

Rahul
⚠️ Q9 — Your concept is correct

You wrote:

Rahul and Tester and 4

The actual object is:

{
    name: "Rahul",
    role: "Tester",
    experience: 4
}

So I'll give you credit because you understood the values correctly. 👍

❌ Q15 — One important correction

You wrote:

const name = user.name;
const role = user.role;
const experience = user.experience;

This does retrieve the values, but the question specifically asked you to use object destructuring.

You should write:

const { name, role, experience } = user;

console.log(name);
console.log(role);
console.log(experience);

That's the key syntax you need to remember:

const { property1, property2 } = object;
Q18 — Correct ✅

You wrote:

const { name, ...deatils } = user;

deatils is just a spelling choice. It still works because you consistently use:

console.log(deatils);

The cleaner spelling would be:

const { name, ...details } = user;

But conceptually your answer is correct. 👍

🎯 Final Score

16/18 fully correct + 1 partially correct + 1 minor output-format issue

For learning purposes, I'd record this as:

🏆 17/18 — 94%

The two things to reinforce are:

this inside an object method → current object
Object destructuring syntax → const { name, role } = user;

Everything else is solid. 🔥

✅ Objects Chapter — COMPLETE
08 - Objects
├── Object Basics              ✅
├── Nested Objects             ✅
├── Destructuring              ✅
├── Object Methods             ✅
├── Spread & Rest              ✅
└── Final Practice             ✅ 17/18

Objects is now completed. 🎉🔥

Your next folder according to your existing structure is:

01 - JavaScript - Fundamentals/
└── 09 - Strings - and - Dates/

We should start Strings & Dates there, one topic at a time, with a full question set after each topic.*/