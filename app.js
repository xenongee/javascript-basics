/*
    DOM API
    Selecting and manipulating elements

const panel = document.querySelector('.panel')

console.log(panel.innerHTML);

panel.innerText = 'Hello World!';
panel.value = 'Hello everyone!';
*/

/*
    Click handling
*/

`use strict`;

document.querySelector('.button').addEventListener('click', function () {
    changePanel();
})

function changePanel() {
    const input = document.querySelector('.input');
    const panel = document.querySelector('.panel');

    if (!input.value) return;

    // console.log(input.value);
    panel.innerHTML = input.value;
    input.value = '';
}


