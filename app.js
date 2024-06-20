/* 
    Loops

console.log('>>> loops - for');

console.log('loop #1');
for (let i = 0; i < 5; i++) {
    console.log(' ', i);
}

console.log('loop #2');
for (let i = -4; i <= 4; i+=2) {
    console.log(' ', i);
}

console.log('>>> loops - break and continue');

let tasks = [" task1", " task2", " task3", " task4"];

console.log('loop #1 - continue');
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === "task3") {
        continue;
    }
    console.log(tasks[i]);
}

console.log('loop #2 - break');
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === "task3") {
        break;
    }
    console.log(tasks[i]);
}

console.log('>>> loop in reverse order');

let greetings = ["!", "you", "meet", "to", "nice", ",", "hello"];
let greetings2 = [];
console.log(' ', greetings);
for (let i = greetings.length - 1; i >= 0; i--) {
    greetings2.push(greetings[i]);
}
console.log(' ', greetings2);

console.log('>>> loop within loop');

console.log('loop #1 - simple');
for (let i = 1; i < 3; i++) {
    console.log('loop #1 - i = ', i);
    for (let j = 0; j < 3; j++) {
        console.log(' loop #2 - j = ', j);
    }
}

console.log('loop #1 - nested array');
const tasks2 = [["task1", "task2", "task3", "task4"], ["task5", "task6", "task7", "task8"]];
for (let i = 0; i < tasks2.length; i++) {
    console.log('task group', i + 1);
    for (let j = 0; j < tasks2[i].length; j++) {
        console.log(' ', tasks2[i][j]);
    }
}

console.log('>>> loops - while');

console.log('loop #1');
let i = 0;
while (i < 5) {
    console.log(' ', i);
    i++;
}

console.log('loop #2');
const arr = ["a", "b", "c", "d"];
let j = 0;
while(j < arr.length) {
    console.log(' ', arr[j]);
    j++;
}

console.log('>>> loops - do while');

let x = 0;
do {
    console.log(' ', x);
    x++;
} while (x < 5);

console.log('>>> loops - for of and for in');

console.log('loop #1 - for of');
for (let i of arr) {
    console.log(' ', 'i:', i + ' arr[i]: ' + arr[i]);
}

console.log('loop #2 - for in');
for (let i in arr) {
    console.log(' ', 'i:', i + ' arr[i]: ' + arr[i]);
}
*/

/* 
    Exercise - Calculation of the closing balance sheet

// Цели:
// - Расчёт итогового баланса
// - Проверка наличия отрицательного баланса
// - Расчёт среднего дохода и среднего расхода
// Данные:
// - Operations: Массив чисел (каждое число = операция)
// - Начальный баланс: 100 долларов

// Objectives:
// - Calculating the closing balance sheet
// - Checking if there is a negative balance
// - Calculation of average income and average expenditure
// Data:
// - Operations: Array of numbers (each number = operation)
// - Opening balance: 100 dollars
*/

let balance = 100;
let operations = [1000, -700, 300, -500, 10000];

function getBalance(balance, operations) {
    for (let act of operations) {
        balance += act;
    }
    return balance;
}

function checkOperations(balance) {
    if (balance < 0) {
        return false;
    } else {
        return true;
    }
}

function averageOperations(operations) {
    let [positive, posCount, negative, negCount] = [0, 0, 0, 0];
    for(let act in operations) {
        if (operations[act] > 0) {
            positive += operations[act];
            posCount++;
        }
        if (operations[act] < 0) {
            negative += operations[act];
            negCount++;
        }
    }
    return [positive / posCount, negative / negCount]
}

let currentBalance = getBalance(balance, operations);

console.log(`Old balance: ${balance} - Operations: ${operations}`);
console.log(`Current balance: ${currentBalance}`);
console.log(`Balance is positive: ${checkOperations(currentBalance)}`);
console.log(`Average +/-:`, averageOperations(operations));

console.log('---');

operations = [450, -2000, 800, -100, 700];
currentBalance = getBalance(balance, operations);

console.log(`Old balance: ${balance} - Operations: ${operations}`);
console.log(`Current balance: ${currentBalance}`);
console.log(`Balance is positive: ${checkOperations(currentBalance)}`);
console.log(`Average +/-:`, averageOperations(operations));
