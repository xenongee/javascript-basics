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
    notify(true);
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


/*
    Working with styles and classes
*/

function notify(status) {
    const notify = document.querySelector('.notify');
    // notify.style.display = 'block';
    if (status) {
        notify.classList.add('notify-active');
    } else {
        notify.classList.remove('notify-active');
    }
}

/*
    Attribute setting
*/

function notifyAttributes() {
    console.log(document.querySelector('.notify').getAttribute('class'));
    document.querySelector('.notify').setAttribute('data-notify', 'Hello World!');
}

notifyAttributes();

/*
    Add HTML on the fly
*/

const doc = document;
const someText = 'Click Me!';
const someClass = 'btn btn-success';
const wrapper = doc.querySelector('.test');
const newBtn = doc.createElement('div');

newBtn.setAttribute('someAttr', 'wrapper-btn');
newBtn.classList.add('it-is-wrapper');
newBtn.innerHTML = `<button class="${someClass}">${someText}</button>`;

wrapper.appendChild(newBtn);