

//scope
var a = 5;
console.log(a); // accessible outside the block

let c = "Lingaraj";
console.log(c); // accessible outside the block

const d = "Belagali";
console.log(d); // accessible outside the block



//Blockscope
//example1 of blockscope
if (true) {
    let browser = 10;
    console.log(browser); // accessible inside the block
}
//console.log(browser); // not accessible outside the block

//example2 of blockscope

if (true) {
    const x = 20;
    let y = 30;
    console.log(x); // accessible inside the block
    console.log(y); // accessible inside the block
}
//console.log(x); // not accessible outside the block
//console.log(y); // not accessible outside the block 

//what about var variable in blockscope
if (true) {
    var z = 40;
    console.log(z); // accessible inside the block
}
console.log(z); // accessible outside the block
//console.log(z); // not accessible outside the block


//primitive data types in javascript
//1. String
let firstName = 'Lingaraj';
console.log(firstName);

//2. Number
let age = 25; // Number
console.log(age);

let salary = 25000.50; // Number
console.log(salary);

//3. Boolean
let isMarried = false; // Boolean
console.log(isMarried);

//4. Undefined
let address; // Undefined
console.log(address);

//5. Null
let city = null; // Null
console.log(city);

//6. Symbol
let symbol1 = Symbol('symbol1');
console.log(symbol1);

//7. BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);

//------------------------------------------------

//Reference types (Non-primitive data types in javascript)
//1. Object
let person = {
    firstName: 'Lingaraj',
    lastName: 'Belagali',
    age: 25
};
console.log(person);

//2. Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//3. Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Lingaraj'));

//4. Date
let currentDate = new Date();
console.log(currentDate);

//5. RegExp
let pattern = /ab+c/;
console.log(pattern);

//6. Map
let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map);

//7. Set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);

//8. WeakMap
let weakMap = new WeakMap();
let obj1 = {};
weakMap.set(obj1, 'value1');
console.log(weakMap);

//9. WeakSet
let weakSet = new WeakSet();
let obj2 = {};
weakSet.add(obj2);
console.log(weakSet);

//10. Error
try {
    throw new Error('This is an error');
} catch (error) {
    console.log(error.message);
}

//11. Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 1000);
});
promise.then((result) => {
    console.log(result);
});

//12. Async/Await
async function asyncFunction() {
    let result = await promise;
    console.log(result);
}

//13. Generator
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//14. Class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let person1 = new Person('Lingaraj', 'Belagali');
console.log(person1);

//15. Module
// In JavaScript, modules are used to encapsulate code and export/import functionality between files. 
// Example of exporting a function from a module (in file module.js):
export function greet(name) {
    return `Hello, ${name}!`;
}

// Example of importing the function in another file (in file main.js):
import { greet } from './module.js';
console.log(greet('Lingaraj'));

//16. JSON
let jsonString = '{"firstName": "Lingaraj", "lastName": "Belagali"}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

//17. TypedArray
let typedArray = new Uint8Array([1, 2, 3, 4, 5]);
console.log(typedArray);

//18. DataView
let buffer = new ArrayBuffer(16);
let dataView = new DataView(buffer);
dataView.setInt8(0, 42);
console.log(dataView.getInt8(0));
//19. ArrayBuffer
let arrayBuffer = new ArrayBuffer(8);
let view = new Uint32Array(arrayBuffer);
view[0] = 42;
console.log(view[0]);

//20. SharedArrayBuffer
let sharedBuffer = new SharedArrayBuffer(8);
let sharedView = new Uint32Array(sharedBuffer);
sharedView[0] = 42;
console.log(sharedView[0]);