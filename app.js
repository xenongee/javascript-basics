/* 
    Arrays
*/

const roles = ['admin', 'user', 'guest'];

console.log(roles);
console.log(roles[0]);
console.log(roles[1]);
console.log(roles[2]);
console.log(roles.length);
console.log(roles[roles.length - 1], '\n ---');

// new syntax
console.log(roles.at(0)); // like roles[0]
console.log(roles.at(-1)); // like roles[roles.length - 1]

const info = ['John', 30, true];
console.log(info);

const someInfo = new Array('Iron', 'Wood', 2024 - 1991, 10 > 5 ? 'yes' : 'no');
console.log(someInfo);

