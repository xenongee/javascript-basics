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
*/

/*
    Строки и массивы
    Strings and arrays

const fullName = 'Knyazev Konstantin Konstantinovich';
console.log(fullName.split(' ')); // ['Knyazev', 'Konstantin', 'Konstantinovich']
const [surName, firstName, patronymic] = fullName.split(' ');
console.log(surName, firstName, patronymic); // Knyazev Konstantin Konstantinovich

const string = ['Hello', 'World'];
console.log(string.join(' ')); // Hello World
*/

/*
    Дополнение строк
    Addition of strings
*/

const film = 'The Fast and the Furious';
console.log(film.padStart(50, '*')); // **********The Fast and the Furious
console.log(film.padEnd(50, '*'));   // The Fast and the Furious**********
console.log(film.repeat(5));         // The Fast and the FuriousThe Fast and the FuriousThe Fast and the FuriousThe Fast and the FuriousThe Fast and the Furious