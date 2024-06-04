/* 
    Functions

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
*/

/* 
    Anonymous functions

function powerOfTwo(x) {
    return x ** 2;
}

console.log(powerOfTwo(2));

const powerOfTwoNew = function (x) {
    return x ** 2;
}

console.log(powerOfTwoNew(4));
*/

/* 
    Arrow functions

const powerOfTwoNewNew = x => x ** 2;

console.log(powerOfTwoNewNew(5));
*/

/* 
    Functions default parameters

function powerOfTwo(x, power = 2) {
    // power = power ?? 2;
    return x ** power;
}

console.log(powerOfTwo(5)); // 25
console.log(powerOfTwo(5, 3)); // 125
*/

/*
    Conditions in functions

function canAccess(age) {
    if (age <= 18) {
        return false;;
    }
    return true;
}

console.log(canAccess(18));

const canAccessNew = age => age <= 18 ? false : true;
console.log(canAccessNew(18));
*/

/*
    Functions in functions
*/

const KG_USD = 7;
const KM_USD = 5;

function calculateDistance (distance) {
    return distance * KM_USD;
}

function calculateWeight (present) {
    return present * KG_USD;
}

function getExchangePrice (present1, present2, distance) {
    const price1 = calculateWeight(present1);
    const price2 = calculateWeight(present2);
    const distancePrice = calculateDistance(distance);
    return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1, 2, 10));