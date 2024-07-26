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
        progressValue: document.querySelector('.habbitProgress progress'),
        main: document.querySelector('.mainPanel main'),
        daysList: document.querySelector('.daysList'),
        currentDay: document.querySelector('.currentDay'),
    },
    modal: document.querySelector('.modal'),
};

const templates = {
    menuElement: function (id, icon, name) {
        const elem = document.createElement('span');
        elem.setAttribute('habbit-menu-id', id);
        elem.innerHTML = `${icon} <a>${name}</a>`;
        return elem;
    },
    habbitHeader: function (name) {
        const elem = document.createElement('strong');
        elem.innerHTML = name;
        return elem;
    },
    habbitProgress: function (value, max) {
        const parent = document.createElement('div');
        const spanElem = document.createElement('span')
        const progressElem = document.createElement('progress')
        spanElem.innerHTML = `Progress: ${(value / max) * 100}%`;
        progressElem.setAttribute('max', max);
        progressElem.setAttribute('value', value);
        parent.append(spanElem, progressElem);
        return parent.children;
    },
    habbitDay: function (dayCount, comment) {
        const elem = document.createElement('li');
        elem.innerHTML = `<strong>Day ${dayCount}</strong><div class="comment"><i>${comment}</i><button onclick="removeComment()">Remove</button></div>`
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

function renderSidePanel(currentHabbit) {
    for (const habbit of habbitsData) {
        // exists elem
        const existsElem = page.sidePanel.menu.querySelector(`[habbit-menu-id="${habbit.id}"]`);

        // if not exist - create elem
        if (!existsElem) {
            const newElement = templates.menuElement(habbit.id, habbitIcons[habbit.icon], habbit.name);
            newElement.addEventListener('click', () => renderPage(habbit.id));

            if (habbit.id === currentHabbit.id) {
                newElement.classList.add('active');
            }

            page.sidePanel.menu.appendChild(newElement);

            // go to next elem
            continue;
        }

        // if exist - toggle 'active' class
        if (habbit.id === currentHabbit.id) {
            existsElem.classList.add('active');
        } else {
            existsElem.classList.remove('active');
        }
    }
}

function renderMainPanel(currentHabbit) {
    if (!currentHabbit) {
        return;
    }

    const progressMax = currentHabbit.target;
    const progressValue = currentHabbit.days.length > progressMax ? progressMax : currentHabbit.days.length;

    // header of habbit and its progress
    page.mainPanel.header.replaceChildren(templates.habbitHeader(currentHabbit.name));
    page.mainPanel.progress.replaceChildren(...templates.habbitProgress(progressValue, progressMax));

    // main of habbit with days of tasks completed
    page.mainPanel.daysList.innerHTML = '';
    for (const index in currentHabbit.days) {
        page.mainPanel.daysList.appendChild(templates.habbitDay(Number(index) + 1, currentHabbit.days[index].comment));
    }

    page.mainPanel.currentDay.innerHTML = `Day ${currentHabbit.days.length + 1}`;

    // unhide main panel of habbit
    if (page.mainPanel.main.classList.contains('hidden')) {
        page.mainPanel.main.classList.remove('hidden');
    }
}

function renderPage(activeHabbitId) {
    const activeHabbit = habbitsData.find(habbitElem => habbitElem.id === activeHabbitId) ?? 0;

    renderSidePanel(activeHabbit);
    renderMainPanel(activeHabbit)
}


/*
    Init
*/

(() => {
    loadData();
    renderPage();
})()