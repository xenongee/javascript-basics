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
*/

/*
    Order of operators

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

//                  12   10   12
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

let a;
let b;
a = b = 10 + 5 + 5;
console.log(a, b);
*/

/*
    Data types

// primitive types
const number = 18;
const string = 'whoami';
const bool = true;
const undefinedValue = undefined;
let nullData;
nullData = null;
const symbol = Symbol('Admin');
const big = BigInt(99999999999999999999);
console.log(number, string, bool, undefinedValue, nullData, symbol, big);

// object types
const person = {
    name: 'Gleb',
    age: 24
};
console.log(person, typeof person);
*/

/*
    Exercise - Project Calculation

// Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
// Выведете в консоль:
// Boolean переменную успеете ли вы взяться за работу
// Сколько вы за неё попросите?

// Your hourly rate is $80 and you are willing to work no more than 5 hours a day, 5 days a week (except weekends).
// A customer comes to you and offers you an order for 40 hours of work. It's Monday. You have to leave in 11 days.
// You'll be in the console:
// Boolean variable whether you will have time to take the job.
// How much will you ask for it?

const workHoursPerDay = 5;
const workDaysPerWeek = 5;
const dayOffs = 7 - workDaysPerWeek; // 2
const daysToLeave = 11;

const hourlyRateUSD = 80;
const projectHours = 40;

const calculatedTimeForWork = workHoursPerDay * (daysToLeave - dayOffs); // 45

const answer1 = projectHours <= calculatedTimeForWork;
const answer2 = projectHours * hourlyRateUSD;
console.log(answer1, answer2);

*/

/*
    Template literals
*/

let projectName = 'HTML Company';
let price = 1000;
price = `${price} rub.`;
let author = 'Vasiliy';

const oldTemplate = 'Project name: ' + projectName + ', price: ' + price + ', author: ' + author;
const template = `Project name: ${projectName}, price: ${price}, author: ${author}`;
const template2 = 
`Project name: ${projectName}
Price: ${price}
Author: ${author}`
console.log(template2);