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
*/

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