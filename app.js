/* 
    Arrays

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
*/

/*
    Array element management

const users = ['John', 'Pavel', 'Mark'];
console.log(users);

users[2] = 'Katya';
console.log(users);

// добавление элементов - adding elements
// может создать пустые элементы если индекс не следующий за последним
// сan create empty elements if the index is not next to the last one
users[3] = 'Alexey';
console.log(users);

// изменяет ориггинальный массив и не создает пустые элементы, возвращает новую длину
// modifies the original array, does not create empty elements; returns new length of the array
users.push('Olga');
console.log(users);

// добавляет элемент в начало массива, сдвигает индексы существующих элементов
// add element to the beginning of the array, shifts the indexes of existing elements
users.unshift('Vasiliy');
console.log(users);

// удаление элементов - deleting elements
// удаляет последний элемент, также его и возвращает
// deletes the last element
users.pop();
console.log(users);

// удаляет первый элемент, возвращает удаленный элемент и сдвигает индексы
// deletes the first element, returns the deleted element and shifts the indexes
users.shift();
console.log(users);
*/

/*
    Search element in array
*/

const roles = ['admin', 'user', 'guest', 'moderator', 'reviewer'];

// indexOf  - возвращает индекс первого вхождения элемента, если не найден возвращает -1
// indexOf - returns the index of the first occurrence of the element, if not found returns -1
console.log(roles.indexOf('admin'));
console.log(roles.indexOf('vip'));
console.log(roles.indexOf('reviewer'));

if (roles.indexOf('admin') >= 0) {
    console.log('Admin exist');
}

// includes - проверяет наличие элемента в массиве, возвращает true при нахождении
// includes - checks for the presence of an element in the array, returns true if found
console.log(roles.includes('admin'));
console.log(roles.includes('vip'));
console.log(roles.includes('reviewer'));

if (roles.includes('admin')) {
    console.log('Admin exist');
}
