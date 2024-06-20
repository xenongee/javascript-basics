/* 
    Loops
*/

console.log('>>> loops - for');

console.log('loop #1');
for (let i = 0; i < 5; i++) {
    console.log(' ', i);
}

console.log('loop #2');
for (let i = -4; i <= 4; i+=2) {
    console.log(' ', i);
}

console.log('>>> loops - break and continue');

let tasks = [" task1", " task2", " task3", " task4"];

console.log('loop #1 - continue');
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === "task3") {
        continue;
    }
    console.log(tasks[i]);
}

console.log('loop #2 - break');
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === "task3") {
        break;
    }
    console.log(tasks[i]);
}

console.log('>>> loop in reverse order');

let greetings = ["!", "you", "meet", "to", "nice", ",", "hello"];
let greetings2 = [];
console.log(' ', greetings);
for (let i = greetings.length - 1; i >= 0; i--) {
    greetings2.push(greetings[i]);
}
console.log(' ', greetings2);

console.log('>>> loop within loop');

console.log('loop #1 - simple');
for (let i = 1; i < 3; i++) {
    console.log('loop #1 - i = ', i);
    for (let j = 0; j < 3; j++) {
        console.log(' loop #2 - j = ', j);
    }
}

console.log('loop #1 - nested array');
const tasks2 = [["task1", "task2", "task3", "task4"], ["task5", "task6", "task7", "task8"]];
for (let i = 0; i < tasks2.length; i++) {
    console.log('task group', i + 1);
    for (let j = 0; j < tasks2[i].length; j++) {
        console.log(' ', tasks2[i][j]);
    }
}

console.log('>>> loops - while');

console.log('loop #1');
let i = 0;
while (i < 5) {
    console.log(' ', i);
    i++;
}

console.log('loop #2');
const arr = ["a", "b", "c", "d"];
let j = 0;
while(j < arr.length) {
    console.log(' ', arr[j]);
    j++;
}

console.log('>>> loops - do while');

let x = 0;
do {
    console.log(' ', x);
    x++;
} while (x < 5);

console.log('>>> loops - for of and for in');

console.log('loop #1 - for of');
for (let i of arr) {
    console.log(' ', 'i:', i + ' arr[i]: ' + arr[i]);
}

console.log('loop #2 - for in');
for (let i in arr) {
    console.log(' ', 'i:', i + ' arr[i]: ' + arr[i]);
}
