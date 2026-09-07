//Operators in JavaScript

// Arithmetic Operators
// Addition
let x = 10;
let y = 5;
let z = x + y; // Addition
console.log(z);

// Subtraction
let a = 10;
let b = 5;
let c = a - b; // Subtraction
console.log(c);

// Multiplication
let m = 10;
let n = 5;
let o = m * n; // Multiplication
console.log(o);

// Division
let p = 10;
let q = 5;
let r = p / q; // Division
console.log(r);

// Modulus
let s = 10;
let t = 3;
let u = s % t; // Modulus
console.log(u);

// Increment and Decrement Operators
// Increment
let v = 10;
v++; // Increment
console.log(v);

// Decrement
let w = 10;
w--; // Decrement
console.log(w);

//post increment
let postIncrement = 5;
console.log(postIncrement++);

//pre increment
let preIncrement = 5;
console.log(++preIncrement);


// Assignment Operators

let va = 10;
va += 5; // va = va + 5
console.log(va);

let vb = 10;
vb -= 3; // vb = vb - 3
console.log(vb);

let vc = 10;
vc *= 2; // vc = vc * 2
console.log(vc);

let vd = 10;
vd /= 4; // vd = vd / 4
console.log(vd);

let ve = 10;
ve %= 3; // ve = ve % 3
console.log(ve);

let vf = 10;
vf **= 2; // vf = vf ** 2
console.log(vf);


//Relational Operators

// Equal to
let a1 = 10;
let b1 = 10;
console.log(a1 == b1); // true

// Not equal to
let c1 = 10;
let d1 = 5;
console.log(c1 != d1); // true

// Greater than
let e1 = 10;
let f1 = 5;
console.log(e1 > f1); // true

// Less than
let g1 = 10;
let h1 = 5;
console.log(g1 < h1); // false

// Greater than or equal to
let i1 = 10;
let j1 = 10;
console.log(i1 >= j1); // true

// Less than or equal to
let k1 = 10;
let l1 = 10;
console.log(k1 <= l1); // true

// Logical Operators

// AND
let m1 = true;
let n1 = false;
console.log(m1 && n1); // false

// OR
let o1 = true;
let p1 = false;
console.log(o1 || p1); // true

// NOT
let q1 = true;
console.log(!q1); // false

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Yes

