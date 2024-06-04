/* 
    Boolean logic
    Logical operators

// A = true
// B = false

// A && B - AND
//      A    B
// A  true false
// B false false

// A || B - OR
//      A    B
// A  true true
// B true false

// ! - NOT
// !A - true -> false
// !B - false -> true

const isAdmin = false;
const canWrite = true;

console.log(`System file write access: ${isAdmin && canWrite}`); // false
console.log(`System file write access: ${isAdmin || canWrite}`); // true
console.log(`Inverse admin rights: ${!isAdmin}`); // true

const isEdited = true;
const owner = true;
console.log(`System file write/edit access: ${isAdmin && canWrite && (!isEdited || owner)}`); // false 

let a = 7;
if (a === -8 || a === 22) {
    console.log('a is -8 or 22');
}
*/

/* 
    Operators with other types

console.log('Kirill' || 'Alex'); // Kirill
console.log(false || 'Alex'); // Alex
console.log('Kirill' || false); // Kirill

console.log('Kirill' && 'Alex'); // Alex
console.log(false && 'Alex'); // false
console.log('Kirill' && false); // false

let a;
let username = a || 'Guest';
console.log(username); // Guest
a = 'Alex';
username = a || 'Guest';
console.log(username); // Alex

let isAdmin = false;
let filename = isAdmin && 'music.mp3';
console.log(filename); // false
isAdmin = true;
filename = isAdmin && 'music.mp3';
console.log(filename); // music.mp3
*/

/*
    Nullish coalescing operator

const username = '';
console.log(username || 'Guest'); // Guest
console.log(username ?? 'Guest'); // ''
let age = 0;
console.log(age || 18); // 18
console.log(age ?? 18); // 0
*/

/*
    Exercise - Verification of rights

// Определить, может ли пользователь купить игру в интернет-магазине (например, Steam) на основании четырех условий.
//
//  Баланс пользователя более 1000 рублей или более 100 бонусов.
//  Пользователь не забанен в магазине.
//  Игра не куплена ранее пользователем.
//  Игра доступна в продаже.

// Determine whether a user can buy a game from an online store (e.g., Steam) based on four conditions.
//
//  User's balance is more than 1000 rubles or more than 100 bonuses.
//  The user is not banned in the store.
//  The game has not been previously purchased by the user.
//  The game is available for sale.

let balance = 1200;
let bonus = 100;
let magazineBan = false;
let gamePurchased = false;
let gameAvailable = true;

console.log(`User can buy game: ${(balance > 1000 || bonus > 100) && !magazineBan && !gamePurchased && gameAvailable}`);
*/

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