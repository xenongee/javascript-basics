/*
    Работа со строками
    Working with strings

    Базовые методы
    Basic methods
*/

const user = 'John Doe';
console.log(user[0]); // J
console.log(user.charAt(0)); // J

console.log(user.length); // 7
console.log(user.indexOf('e')); // 7
console.log(user.lastIndexOf('e')); // 6
console.log(user.indexOf('Doe')); // 5
console.log(user.includes('Doe')); // true

console.log(user.slice(0, 4)); // John
console.log(user.slice(5, 8)); // Doe