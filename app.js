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
    jsonify(input.value);
    input.value = '';
    notify(true);
}

document.querySelector('.button').addEventListener('click', function () {
    changePanel();
})

document.querySelector('.input').addEventListener('keydown', function (event) {
    // console.log(event);
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

function bimbom() {
    const doc = document;
    const someText = 'Click Me!';
    const someClass = 'btn btn-success';
    const wrapper = doc.querySelector('.test');
    const newBtn = doc.createElement('div');

    newBtn.setAttribute('someAttr', 'wrapper-btn');
    newBtn.classList.add('it-is-wrapper');
    newBtn.innerHTML = `<button class="${someClass}">${someText}</button>`;

    wrapper.appendChild(newBtn);
}

/*
    Local Storage
*/
function bimbim() {
    localStorage.setItem('iamkey', 'i am value');
    localStorage.setItem('iamkey', 'i am value!');
    localStorage.setItem('binary', '01010011');
    localStorage.setItem('token', 'e53Pvd27owE320001pqXGEE23');

    console.log(localStorage.getItem('iamkey'));
    console.log(localStorage.getItem('binary'));
    localStorage.removeItem('binary');
    console.log(localStorage.getItem('binary'));
    console.log(localStorage.getItem('token'));

    const token = localStorage.getItem('token');
    console.log(typeof (token));

    localStorage.clear();
}
/*
    JSON
*/

// { 
//     "key": "value", 
//     "num": 0, 
//     "bool": true, 
//     "array": ["hello", "world"], 
//     "object": { 
//         "key": "value" 
//     } 
// }
function bombom() {
    const someJson = JSON.parse('{"key": "value", "num": 0, "bool": true, "array": ["hello", "world"], "object": {"key": "value" }}');
    console.log(someJson);
    const stringJson = JSON.stringify(someJson);
    console.log(stringJson);
}

/*
    Exercise - saving JSON
*/

function jsonify(value) {
    const unixKey = Date.now();
    value = JSON.stringify({"value": value});
    localStorage.setItem(unixKey, value); // if value is object -> [object Object] 

    console.log(JSON.parse(localStorage.getItem(unixKey)));

    const localStorage2JSON = JSON.parse(JSON.stringify(localStorage));
    console.log(localStorage2JSON);
}