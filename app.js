/*
    forEach

let score = [1, 3, 5, 7, 9];

// console.log('for loop');
// for (let el of score) {
//     console.log(el);
// }

// console.log('for loop with index');
// for (let [index, el] of score.entries()) {
//     console.log(index, el);
// }

console.log('forEach');
score.forEach(el => console.log(el));

console.log('forEach with index');
score.forEach((el, index) => console.log(index, el));

console.log('forEach with index and print array');
score.forEach((el, index, score) => console.log(index, el, score));
*/

/* 
    map


let transactionUSD = [10, -5, 20, 15, -10];
let transactionRUB = [];

transactionUSD.forEach(el => {
    transactionRUB.push(el * 90);
});

console.log(transactionRUB);

console.log('map');

let transactionRUB2 = transactionUSD.map((el, i) => { 
    console.log(el, i);
    return el * 90;
});
console.log(transactionRUB2);
*/

/* 
    filter

let transactionUSD = [10, -5, 20, 15, -10];
let positiveTransactionsOld = [];

for (let el of transactionUSD) {
    if (el > 0) {
        positiveTransactionsOld.push(el);
    }
}
console.log(positiveTransactionsOld);

console.log('filter');
let positiveTransactions = transactionUSD.filter(el => el > 0);
console.log(positiveTransactions);

console.log('map + filter');
let positiveTransactionsRUB = transactionUSD
    .filter(el => el > 0)
    .map(el => el * 90);
console.log(positiveTransactionsRUB);
*/

/*
    Exercise - output of price changes
    Упражнение - вывод изменений цен

    There is an array of price changes, where 
    the 1st element of the array is the price at time X and 
    the 2nd element is the price at time Y. 
    We need to convert the data into an array that shows 
    only positive price changes: [100, 150]

    Имеется массив изменения цен prices, где внутри
    1й элемент массива является ценой в момент Х, 
    2й - ценой в момент Y.
    Нужно преобразовать данные в массив, где будут отображены 
    только положительные изменения цен: [100, 150]

const prices = [[100, 200], [120, 100], [200, 350]];
let result = prices.map(el => el[1] - el[0]).filter(el => el > 0);
console.log(result);
*/

/* 
    reduce
*/

let transactionUSD = [10, -5, 20, 15, -10];
let balance = 0;
for (let el of transactionUSD) {
    balance += el;
}
console.log(balance);

console.log('reduce');
balance = transactionUSD.reduce((acc, el) => {
    console.log(acc, el);
    return acc + el;
}, 0);
console.log(balance);