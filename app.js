/* 
    Functions
*/

function logName(name, surname) {
    console.log(name, surname);
}

logName('Oleg', 'Ivanov');

const x = logName('Fedor', 'Petrov');
console.log(typeof x);

function countDepositSum(depositUSD, month, rate) {
    return depositUSD * (1 + rate / 12) ** month;
}

console.log(countDepositSum(1000, 12, 0.12));

/* 
    Anonymous functions
*/

function powerOfTwo(x) {
    return x ** 2;
}

console.log(powerOfTwo(2));

const powerOfTwoNew = function (x) {
    return x ** 2;
}

console.log(powerOfTwoNew(4));