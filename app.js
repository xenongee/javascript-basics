/*
    If Else Conditions

const money = 100;

if (money > 50) {
    console.log('Can buy our product');
} else if (money > 25) {
    console.log('Can buy our product mini');
} else {
    console.log('Money is not enough');
}
*/

/*
    Exercise - Placing a Deposit

// Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. 
// Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада и остаток после покупки.
// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

// Vasya deposited $12,000 on a 7% annual deposit with capitalization once a month. 
// Output to the console whether he will be able to buy a house for $13,500 in 2 years after withdrawing the deposit and the balance after the purchase.
// Total = Amount * (1 + Rate per month not in %) ^ Term in months

const deposit = 12000;
const annualRate = 0.07;
const depositDuration = 24; // months - 2 year
const homeCost = 13500;

const answer = deposit * (1 + annualRate / 12) ** depositDuration;
console.log(`We have ${answer}$ after ${depositDuration} months.`); // We have 13797.672210032075$ after 24 months.

if (answer > homeCost) {
    console.log('Yes, he can buy the house'); 
} else {
    console.log('No, he cannot buy the house');
}
*/

/*
    Equality operators
*/

// const secretNumber = 7;
const secretNumber = '7';

if (secretNumber === 7) {
    console.log('Yes, you guess (strong)');
}

if (Number(secretNumber) === 7) {
    console.log('Yes, you guess (strong)');
}

if (secretNumber == 7) {
    console.log('Yes, you guess (weak)');
}

const guess = prompt('Guess the secret number');
if (guess === secretNumber) {
    console.log('Yes, it is 7 (strong)');
} else {
    console.log('No, it is not 7');
}