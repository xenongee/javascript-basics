/*
    DOM API
    Selecting and manipulating elements

const panel = document.querySelector('.panel')

console.log(panel.innerHTML);

panel.innerText = 'Hello World!';
panel.value = 'Hello everyone!';
*/

/*
    Keyboard and Click handling
*/

function changePanel() {
    const input = document.querySelector('.input');
    const panel = document.querySelector('.panel');

    if (!input.value) return;

    // console.log(input.value);
    panel.innerHTML = input.value;
    input.value = '';
}

document.querySelector('.button').addEventListener('click', function () {
    changePanel();
})

document.querySelector('.input').addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key === 'Enter') {
        changePanel();
    }
});