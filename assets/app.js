`use strict`;

const habitKey = 'HABIT_DATA';
let habitsData = [];
let globalActiveHabit = 0;
const page = {
    sidePanel: {
        menu: document.querySelector('.habitsMenu'),
    },
    mainPanel: {
        header: document.querySelector('.habitName'),
        progress: document.querySelector('.habitProgress'),
        progressValue: document.querySelector('.habitProgress progress'),
        main: document.querySelector('.mainPanel main'),
        daysList: document.querySelector('.daysList'),
        currentDay: document.querySelector('.currentDay'),
    },
    modal: document.querySelector('.modal'),
};

const templates = {
    menuElement: function (id, icon, name) {
        const elem = document.createElement('span');
        elem.setAttribute('habit-menu-id', id);
        elem.innerHTML = `${icon} <a>${name}</a>`;
        return elem;
    },
    habitHeader: function (name) {
        const elem = document.createElement('strong');
        elem.innerHTML = name;
        return elem;
    },
    habitProgress: function (value, max) {
        const parent = document.createElement('div');
        const spanElem = document.createElement('span')
        const progressElem = document.createElement('progress')
        spanElem.innerHTML = `Progress: ${(value / max) * 100}%`;
        progressElem.setAttribute('max', max);
        progressElem.setAttribute('value', value);
        parent.append(spanElem, progressElem);
        return parent.children;
    },
    habitDay: function (dayCount, comment) {
        const elem = document.createElement('li');
        elem.innerHTML = `<strong>Day ${dayCount}</strong><div class="comment"><i>${comment}</i><button onclick="removeComment()">Remove</button></div>`
        return elem;
    }

}

const habitIcons = {
    sport: '🏆',
    food: '🥗',
    edu: '📚'
};


/*
    Data
*/

function saveData() {
    localStorage.setItem(habitKey, JSON.stringify(habitsData));
}

function loadData() {
    const data = JSON.parse(localStorage.getItem(habitKey));
    if (Array.isArray(data)) {
        habitsData = data;
    }
}

function addDay(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(event.target);
    const comment = data.get('comment');
    if (!comment) {
        form['comment'].classList.add('error');
        return;
    }
    if (form['comment'].classList.contains('error')) {
        form['comment'].classList.remove('error');
    }
    console.log(habitsData);
    habitsData = habitsData.map(habbit => {
        if (habbit.id === globalActiveHabit) {
            return {
                ...habbit,
                days: habbit.days.concat([{comment}])
            }
        }
        return habbit;
    })
    console.log(habitsData);
    form['comment'].value = '';
    renderPage(globalActiveHabit);
    saveData();
}

function addhabit(event) {
    console.log(event);
    event.preventDefault();
}

/* 
    Render 
*/

function toggleModal() {
    page.modal.classList.toggle('hidden');
}

function renderSidePanel(currenthabit) {
    for (const habit of habitsData) {
        // exists elem
        const existsElem = page.sidePanel.menu.querySelector(`[habit-menu-id="${habit.id}"]`);

        // if not exist - create elem
        if (!existsElem) {
            const newElement = templates.menuElement(habit.id, habitIcons[habit.icon], habit.name);
            newElement.addEventListener('click', () => renderPage(habit.id));

            if (habit.id === currenthabit.id) {
                newElement.classList.add('active');
            }

            page.sidePanel.menu.appendChild(newElement);

            // go to next elem
            continue;
        }

        // if exist - toggle 'active' class
        if (habit.id === currenthabit.id) {
            existsElem.classList.add('active');
        } else {
            existsElem.classList.remove('active');
        }
    }
}

function renderMainPanel(currenthabit) {
    if (!currenthabit) {
        return;
    }

    const progressMax = currenthabit.target;
    const progressValue = currenthabit.days.length > progressMax ? progressMax : currenthabit.days.length;

    // header of habit and its progress
    page.mainPanel.header.replaceChildren(templates.habitHeader(currenthabit.name));
    page.mainPanel.progress.replaceChildren(...templates.habitProgress(progressValue, progressMax));

    // main of habit with days of tasks completed
    page.mainPanel.daysList.innerHTML = '';
    for (const index in currenthabit.days) {
        page.mainPanel.daysList.appendChild(templates.habitDay(Number(index) + 1, currenthabit.days[index].comment));
    }

    page.mainPanel.currentDay.innerHTML = `Day ${currenthabit.days.length + 1}`;

    // unhide main panel of habit
    if (page.mainPanel.main.classList.contains('hidden')) {
        page.mainPanel.main.classList.remove('hidden');
    }
}

function renderPage(activeHabitId) {
    const activeHabit = habitsData.find(habitElem => habitElem.id === activeHabitId) ?? 0;
    globalActiveHabit = activeHabit.id;

    // console.log(habitsData);

    renderSidePanel(activeHabit);
    renderMainPanel(activeHabit);
}


/*
    Init
*/

(() => {
    loadData();
    renderPage(1);
})()