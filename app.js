/*
    Работа со строками
    Working with strings

    Базовые методы
    Basic methods

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
*/

/*
    Преобразование строк
    String conversion
*/

const string = 'John Doe';
console.log(string.includes('Doe')); // true
console.log(string.startsWith('John')); // true
console.log(string.endsWith('Doe')); // true
console.log(new String('John Doe').includes('Doe')); // true

console.log(string.toLowerCase); // john doe
console.log(string.toUpperCase); // JOHN DOE
console.log(string.replace('e', 'n')); // John Don
console.log(string.replaceAll('o', 'a')); // Jahn Dan
console.log(string.replace(/o/g, 'a')); // Jahn Dan (regex alternative)

const string2 = '  Hello World       \n';
console.log(string2); // ' Hello World       '
console.log(string2.trim()); // 'Hello World'