`use strict`;

const habbitKey = 'HABBIT_DATA';
let habbitsData = [];
const page = {
    sidePanel: {
        menu: document.querySelector('.habbitsMenu'),
    },
    mainPanel: {
        header: document.querySelector('.habbitName'),
        progress: document.querySelector('.habbitProgress'),
        taskList: document.querySelector('.commentList'),
        currentDay: document.querySelector('.commentCurrentDay'),
    },
    modal: document.querySelector('.modal'),
};

const templates = {
    menuElement: function(id, icon, name) {
        const elem = document.createElement('span');
        elem.setAttribute('habbit-menu-id', id);
        elem.innerHTML = `${icon} <a>${name}</a>`;
        return elem;
    }
}

const habbitIcons = {
    sport: '🏆',
    food: '🥗',
    edu: '📚'
};


/*
    Data
*/

function saveData() {
    localStorage.setItem(habbitKey, JSON.stringify(habbitsData));
}

function loadData() {
    const data = JSON.parse(localStorage.getItem(habbitKey));
    if (Array.isArray(data)) {
        habbitsData = data;
    }
}


/* 
    Render 
*/

function toggleModal() {
    page.modal.classList.toggle('hidden');
}

function renderSidePanel(activeId) {
    const activeElem = habbitsData.find(habbitElem => habbitElem.id === activeId) ?? 0;

    for(const habbit of habbitsData) {
        // console.log('elem:', index, habbit);
        // exists elem
        const existsElem = page.sidePanel.menu.querySelector(`[habbit-menu-id="${habbit.id}"]`);
        // create elem
        if (!existsElem)  {
            const newElement = templates.menuElement(habbit.id, habbitIcons[habbit.icon], habbit.name);
            newElement.addEventListener('click', () => renderPage(habbit.id));
            if (habbit.id === activeElem.id) {
                newElement.classList.add('active');
            }
            page.sidePanel.menu.appendChild(newElement);
            continue;
        }
        // active-class
        if (habbit.id === activeElem.id) {
            existsElem.classList.add('active');
        } else {
            existsElem.classList.remove('active');
        }
    }
}

function renderMainPanel(activeId) {

}

function renderPage(activeId) {
    console.log('activeId:', activeId);
    renderSidePanel(activeId);
    renderMainPanel(activeId)
}


/*
    Init
*/

(() => {
    loadData();
    renderPage(0);
})()