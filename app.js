/*
    Пример работы call stack
    Example of call stack operation

const sum = 1;
console.log('start');
console.log(sum);

function add5(n) {
	n = n + 5;
	if (n > 100) {
		return n;
	}
	console.log(n);
	return add5(n);
}

add5(sum)
console.log('ended');

*/

/*
    Примитивы и объекты
    Primitives and objects
*/

'use strict';

let fisrtName = 'John';
let secondName = fisrtName;
fisrtName = 'Max';
console.log(fisrtName, secondName); // Max John

const user = {
    name: 'John',
};

const user2 = user;
user2.name = 'Max';
console.log(user.name, user2.name); // Max Max

const user3 = Object.assign({}, user);
user3.name = 'Jack';
console.log(user.name, user2.name, user3.name); // Max Max Jack

const user4 = {
    ...user
}
user4.name = 'Bob';
console.log(user.name, user2.name, user3.name, user4.name); // Max Max Jack Bob

