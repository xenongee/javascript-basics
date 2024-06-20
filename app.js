/*
    First class functions vs. Higher order functions
    Функции певого класса (классика программирования) vs. Функции высшего порядка (из мира функционального программирования)

*/

const someFunction = (x) => x*=16 ; // храниение функции (стрелочной) в переменной (store function (arrow) in variable)

function sum(x, y) {
    return x + y;
}

function add(x, y) { // передача функции в качестве параметра (pass function as a parameter)
    return sum(x, y); // возвращение функции суммы значений (return function sum of values)
}

console.log(add(someFunction(4), -32));  // 32
