/*
    Enhanced Object Literals for methods

'use strict';

const a = 1;
const b = {
    a,
    getA: function() {
        return this.a
    },
    getAnew() {
        return this.a
    }
}

console.log(b.getA());
console.log(b.getAnew());
*/

/*
    Call, apply

'use strict';

const automobile = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    damages: [],
    addDamage(part, rate) {
        console.log(`on auto ${this.brand} ${this.model} ${this.year} added damage '${part}' with ${rate} damage rate`);
        this.damages.push({
            part,
            rate
        });
    }
}

let ford = Object.assign({}, automobile);
ford.addDamage('wheels', 2);
ford.addDamage('brakes', 3);
ford.addDamage('bumper', 4);

let toyota = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    damages: []
}
toyota.addDamage = automobile.addDamage;
toyota.addDamage('door', 3);
toyota.addDamage('engine', 5);

console.log(ford);
console.log(toyota);

const addDamageFunc = automobile.addDamage;
// addDamageFunc(); //error
addDamageFunc.call(ford, 'steering', 10);
addDamageFunc.call(toyota, 'chassis', 8);
addDamageFunc.apply(ford, ['lights', 7]);
addDamageFunc.apply(toyota, ['suspension', 2]);
*/

/*
    Bind

const automobile = {
    brand: 'Ford',
    model: 'Mustang',
    damages: [],
}

const carManipulation = {
    addDamage(part, rate) {
        console.log(`on auto ${this.brand} ${this.model} ${this.year} added damage '${part}' with ${rate} damage rate`);
        this.damages.push({
            part,
            rate
        });
    }
}

const addDamageFord = carManipulation.addDamage.bind(automobile);
addDamageFord('wheels', 2);
addDamageFord('brakes', 3);
addDamageFord('bumper', 4);
const addDamageFord_Roof = carManipulation.addDamage.bind(automobile, 'roof');
addDamageFord_Roof(9);
console.log(automobile);
*/

/*
    Exercise - managing this

const user = {
    login: 'example@mail.com',
    password: '12345'
};

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    }
}

const resetPwd = removePassword.bind(user, true);
resetPwd();
// removePassword.bind(user, true)();
console.log(user);
*/

/*
    IIFE (Immediately Invoked Function Expression)
    Самовызывающаяся функция

function init() {
    console.log('init');
}

init();

(function () {
    console.log('init IIFE');
})();
*/

/*
    Closures
    Замыкания

function changeBalance() {
    let balance = 0;
    return function(amount) {
        balance += amount;
        console.log(`Balance: ${balance}`);
    }
}

const addBalance = changeBalance();

addBalance(100);
addBalance(-50);
addBalance(200);

console.dir(addBalance);

const addBalance2 = changeBalance();
addBalance2(100);

console.dir(addBalance2);
*/

/*
    Exercise - working with closures
    Упражнение - работа с замыканиями


    Make a user function that takes 'userInfo' as a basis and creates a new object with which you can work as a shortcut
    // user1().increase(100);
    
    Сделать функцию пользователя которая берет за основу 'userInfo' и за счет замыкания создает новый объект, с которым можно работать как
    // user1().increase(100);

*/

`use strict`

const userInfo = { 
    balance: 0, 
    operations: 0, 
    increase(sum) { 
      this.balance += sum; 
      this.operations++;
    }, 
};

function someUser () {
    const userObj = Object.create(userInfo);
    return function() {
        return userObj;
    }
}

const user1 = someUser();
user1().increase(100);
user1().increase(-55);

console.log(user1());

const user2 = someUser();
user2().increase(500);
user2().increase(-256);

console.log(user2());

console.log(userInfo);