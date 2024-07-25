`use strict`;


const habbitKey = 'HABBIT_DATA';
let habbits = [];
const modal = document.querySelector('.modal');


function saveData() {
    localStorage.setItem(habbitKey, JSON.stringify(habbits));
}

function loadData() {
    const habbitData = JSON.parse(localStorage.getItem(habbitKey));
    if (Array.isArray(habbitData)) {
        habbits = habbitData;
    }
}


function toggleModal() {
    modal.classList.toggle('hidden');
}


(()=>{
    loadData();

    console.log(habbits);
})()