/*
    Объекты
    Objects
*/

const userArr = ['John', 'Doe', 25, 'male'];
const user = {
    name: 'John',
    surname: 'Doe',
    age: 25,
    gender: 'male'
};

console.log(userArr); // ['John', 'Doe', 25, 'male']
console.log(user); // { name: 'John', surname: 'Doe', age: 25, gender: 'male' }

user['skills'] = ['html', 'css', 'js'];
user[1] = 'Hello';

console.log(user); // { name: 'John', surname: 'Doe', age: 25, gender: 'male', skills: [ 'html', 'css', 'js' ], 1: 'Hello' }