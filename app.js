/*
    First class functions vs. Higher order functions
    Функции певого класса (классика программирования) vs. Функции высшего порядка (из мира функционального программирования)


const someFunction = (x) => x*=16 ; // храниение функции (стрелочной) в переменной (store function (arrow) in variable)

function sum(x, y) {
    return x + y;
}

function add(x, y) { // передача функции в качестве параметра (pass function as a parameter)
    return sum(x, y); // возвращение функции суммы значений (return function sum of values)
}

console.log(add(someFunction(4), -32));  // 32
*/

/*
    Callback function
    Функция обратного вызова

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function calculate(x, y, callback) {
    console.log(callback.name);
    
    return callback(x, y);
}

console.log(calculate(3, 5, add));
console.log(calculate(3, 5, sub));
*/

/*
    Return function
    Возврат функции


function power(pow) {
    return function (num) {
        return num**pow;
    }
}

const powTest = power(2); // pow
console.log(powTest(5)) // num -> 25

console.log(power(2)(5)); // (pow)(num) -> 25
*/

/* 
    Exercise - Arrow functions
    Упражнение - Стрелочные функции
*/

const arrow_power = (pow) => (num) => num**pow;
console.log(arrow_power(2)(8)); // 64
