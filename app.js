/* 
    Strict mode

'use strict';

let someVar = 100;

if (true) {
	someVare = 3; // error with strict mode, without it would have been ignored
}
console.log(someVar);


function a(b, b) { // error with strict mode, because: Duplicate parameter name not allowed in this context
	console.log(b);
}

a(1,1);
*/

/*
    Пример scope chain
    Example of scope chain

'use strict'

let successMsg = 'Success!';
const user = {
    name: 'John',
    roles: []
}

function addRole(user, role) {
    if (role === 'admin') {
        console.warn('Cannot add admin role');
        // console.log(a); // a is not defined (a in another scope)
        return user;
    }
    user.roles.push(role);
    // console.log(successMsg1); // successMsg1 is not defined
    let successMsg = 'Greatings!';
    console.log(successMsg);
    
    function logRoles() {
        const a = 3;
        console.log(user.roles);
    }
    
    logRoles()
    return user;
}

console.log(addRole(user, 'admin'));
console.log(addRole(user, 'redactor'));
*/

/*
    Поднятие 
    Hoisting

addUser(); // 'User added'
// console.log(a); // Cannot access before initialization
console.log(b); // undefined
let a = 3; // also const
var b = 2;

function addUser() {
	console.log('User added');
}

// arr1(); // Cannot access before initialization
const arr1 = () => {
    console.log('arr1');
}

// arr2(); // err, no function, because var is undefined
var arr2 = () => {
    console.log('arr2');
}

addUser(); // 'User added'
*/

/*
    Ключевое слово this
    Keyword this

'use strict';

console.log(this); // window
console.log(window); // window

function addNum(a, b) {
    console.log(this);
    return a + b;
}

addNum(1, 2); // undefined

const addNumNew = (a, b) => {
    console.log(this);
    return a + b;
}

addNumNew(1, 2); // window

const user = {
    username: 'John',
    sayHi() {
        console.log('hi', this.username, this);
    }
}

user.sayHi(); // hi John {name: 'John', sayHi: ƒ}

const user2 = {
    username: 'Bob'
}

user2.sayHi = user.sayHi;
user2.sayHi(); // hi Bob {name: 'Bob', sayHi: ƒ}

const sayHello = user2.sayHi;
sayHello(); // error
*/

/*
    Context in methods
*/

'use strict';

const user = {
    firstname: 'Denis',
    lastname: 'Morozov',
    age: 25,
    getUserInfo: function() {
        console.log(this);
        console.log(this.firstname, this.lastname, this.age);

        function canDrink() {
            if (this.age >= 18) {
                console.log('yes');
            } else {
                console.log('no');
            }
        }

        // canDrink(); //error

        const canDrink2 = () => {
            if (this.age >= 18) {
                console.log('yes');
            } else {
                console.log('no');
            }
        }

        canDrink2(); // yes
    },
    getUserInfo2: () => {   
        console.log(this);
        console.log(this.firstname, this.lastname, this.age);
    }
}

user.getUserInfo(); // Denis Morozov 25
user.getUserInfo2(); // undefined undefined undefined