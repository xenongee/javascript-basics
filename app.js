// console.log("Hello World, i love you");

/* 
    Variables and values

const userName = 'Gleb';
let userAge = 23;
let something = 0;
// console.log(userName, userAge, something);
// userName = 'Alexey'; - cannot assign because it is const
userAge = 24;
something = 'hi';
// console.log(userName, userAge, something);\

console.log(userName + ', age: ' + userAge + ', something: ' + something);
*/

/* 
    Arithmetic operators

const width = 5;
const height = 10;
const areaSquare = width * height;
console.log('width:', width, 'height:', height, 'square area:', areaSquare);

const width2 = width + 7;
const width3 = width2 - 2;
console.log('width2:', width2, 'width3:',width3);

const division = width2 / width3;
const volume = 2**3 // 2*2*2
console.log('division:', division, 'volume:', volume);
*/

/*
    Assignment and comparison operators
*/

// Assignment operators
let num = 10+5;
num += 3; // num = num + 3
num -= 2; // num = num - 2
num *= 5; // num = num * 5
num /= 10; // num = num / 10
num %= 10; // num = num % 10
num++; // num = num + 1
num--; // num = num - 1

console.log(num);

// Comparison operators
console.log(10 == 10); // true
console.log(10 === 10); // true
console.log(10 == '10'); // true
console.log(10 == '11'); // false
console.log(10 === '10'); // false
console.log(10 != 10); // false
console.log(10 !== 10); // false
console.log(13 > 10); // true
console.log(15 < 10); // false
console.log(13 >= 10); // true
console.log(15 <= 10); // false