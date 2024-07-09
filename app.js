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
*/

/*
    Exercise - average value
    Упражнение - среднее значение

    Find the average value of the last sequence of numbers with reduce
    Найти среднее значение последоватедьности чисел с помощью reduce

const arr = [1, 4, 4, 10];
let result = arr.reduce((acc, el, i) => {
    // console.log(acc, el, i);
    acc += el;
    if (i+1 >= arr.length) {
        return acc / arr.length;
    }
    return acc;
}, 0);

console.log("res:", result);
*/

/*
    find and findIndex

const arr = [1, 4, 4, 10];

console.log('find by forloop');
for (let el of arr) {
    if (el > 5) {
        console.log(el); // 10
        break;
    }
}

console.log('find');
let result = arr.find(el => el > 5);
console.log(result); // 10

console.log('findIndex');
result = arr.findIndex(el => el > 5);
console.log(result); // 3
*/

/*
    Exercise - realization of some
    Упражнение - реализация some

    Write a function that checks if the array contains some element
    Написать функцию, которая возвращает true, если элемент есть, и false, если нет.

const arr = [2, 4, 4, 10, 20];

function some(array, elem) {
    if (array.find(el => el === elem) === elem) {
        return true;
    }
    return false;
}

console.log(some(arr, 10))

// console.log(arr.some(el => el === 10));
*/

/* 
    flat and flatMap

const prices = [[100, 200], [120, 100], [200, 350], [80, 90, [10, 15]]];

console.log(prices.flat()); // [100, 200, 120, 100, 200, 350, 80, 90, Array(2)]
console.log(prices.flat(2)); // [100, 200, 120, 100, 200, 350, 80, 90, 10, 15]
console.log(prices.flatMap(el => el.concat([999]))); // [100, 200, 999, 120, 100, 999, 200, 350, 999, 80, 90, Array(2), 999]
*/

/*
    sort

const users = ["Dmitry", "Yana", "Viktor", "Tatyana", "Alexander", "Vladimir", "Sergey", "Olga"];
console.log(users);
users.sort();
console.log(users); // ['Alexander', 'Dmitry', 'Olga', 'Sergey', 'Tatyana', 'Viktor', 'Vladimir', 'Yana']

const transactionUSD = [10, -5, 20, 15, -10];
console.log(transactionUSD);
// transactionUSD.sort();
// console.log(transactionUSD); // [-10, -5, 10, 15, 20] ???

transactionUSD.sort((a, b) => {
    // if (a > b)
    //     return 1;
    // if (a < b) 
    //     return -1;
    return a - b
})
console.log(transactionUSD); // [-10, -5, 10, 15, 20] 

transactionUSD.sort((a, b) => {
    // if (a < b)
    //     return 1;
    // if (a > b) 
    //     return -1;
    return b - a
})
console.log(transactionUSD); // [20, 15, 10, -5, -10]
*/

/* 
    Fast array creation
*/

const arr1 = [1, 2, 3];

const arr2 = new Array(1, 2, 3);

const arr3 = []

const arr4 = new Array(3);

console.log('arrays');
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
console.log(arr3); // []
console.log(arr4); // [empty × 3]

console.log('fill');
arr3.fill(69);
console.log(arr3); // []
arr4.fill(69);
console.log(arr4); // [69, 69, 69]

console.log('from');
const arr5 = Array.from({length: 3}, (cur, i) => i + 1);
console.log(arr5); // [1, 2, 3]
console.log(Array.from([3, 2, 1], (cur, i) => `${i+1}: ${cur}`));