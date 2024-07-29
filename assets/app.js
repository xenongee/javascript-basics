'use strict';

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
	modal: {
		window: document.querySelector('.modal'),
		icons: document.querySelector('.modal .modalContent .icons'),
		habitName: document.querySelector('.modal .modalContent .habitName'),
        habitDaysCount: document.querySelector('.modal .modalContent .habitDaysCount'),
	},
};

const templates = {
	menuElement: (id, icon, name) => {
        const elem = document.createElement('span');
        elem.setAttribute('habit-menu-id', id);
		elem.innerHTML = `${icon} <a>${name}</a>`;
		return elem;
	},
	habitHeader: (name) => {
		const elem = document.createElement('strong');
		elem.innerHTML = name;
		return elem;
	},
	habitProgress: (value, max) => {
		const parent = document.createElement('div');
		const spanElem = document.createElement('span');
		const progressElem = document.createElement('progress');
		const removeHabitElem = document.createElement('button');
		spanElem.innerHTML = `Progress: ${Math.round((value / max) * 100)}%`;
		progressElem.setAttribute('max', max);
		progressElem.setAttribute('value', value);
		removeHabitElem.innerHTML = '🗑️';
		removeHabitElem.setAttribute('onclick', 'removeHabit()');
		parent.append(spanElem, progressElem, removeHabitElem);
		return parent.children;
	},
	habitDay: (dayCount, comment) => {
		const elem = document.createElement('li');
		elem.innerHTML = `<strong>Day ${dayCount}</strong><div class="comment"><i>${comment}</i><button onclick="removeDay(${dayCount - 1})">Remove</button></div>`;
		return elem;
	},
	modalIcons: (icons) => {
		const parent = document.createElement('div');
		for (const icon in icons) {
			const inputElem = document.createElement('input');
			const labelElem = document.createElement('label');
			inputElem.setAttribute('type', 'radio');
			inputElem.setAttribute('name', 'habitIcon');
			inputElem.setAttribute('id', icon);
			inputElem.setAttribute('value', icon);
			labelElem.setAttribute('for', icon);
			labelElem.innerHTML = icons[icon];
			parent.append(inputElem, labelElem);
		}
		return parent.children;
	},
};

const habitIcons = {
	sport: '🏆',
	food: '🍕',
	edu: '📚',
	health: '💊',
	programming: '💻',
	bike: '🚴‍♀️',
	music: '🎼',
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

function addComment(event) {
	event.preventDefault();
	const data = validateForm(event.target, ['comment']);
	
	if (!data) return;

	habitsData = habitsData.map((habbit) => {
		if (habbit.id === globalActiveHabit) {
			return {
				...habbit,
				days: habbit.days.concat([{ comment: data.comment }]),
			};
		}
		return habbit;
	});

	resetForm(event.target, ['comment']);
	renderPage(globalActiveHabit);
	saveData();
}

function removeDay(day) {
	habitsData = habitsData.map((habit) => {
		if (habit.id === globalActiveHabit) {
			habit.days.splice(day, 1);
			return {
				...habit,
				days: habit.days,
			};
		}
		return habit;
	});

	renderPage(globalActiveHabit);
	saveData();
}

function addHabit(event) {
	event.preventDefault();
	const fields = ['habitIcon', 'habitName', 'habitDaysCount']; 
	const data = validateForm(event.target, fields);

	if (!data) return;

	resetForm(event.target, fields);

	const maxId = habitsData.reduce((max, habit) => {
		console.log(max, habit.id);
		if (max > habit.id) {
			return max;
		}
		return habit.id;
	}, 0)

	habitsData.push({
	    id: maxId + 1,
	    icon: data.habitIcon,
	    name: data.habitName,
	    days: [],
	    target: data.habitDaysCount
	});

	toggleModal();
	saveData();
	renderPage(habitsData.length);
}

function removeHabit() {
	console.log(habitsData);
	habitsData = habitsData.filter((habit) => {
		if (habit.id !== globalActiveHabit) {
			return {
				...habit
			}
		}
		return;		
	});
	console.log(habitsData);
	saveData();
	renderPage(0);
}

/* 
    Render 
*/

function validateForm(form, fields) {
	const data = new FormData(form);
	const formFields = {};
	let isValid = true;

	for (const field of fields) {
		const fieldValue = data.get(field);
		if (form[field].constructor.name === 'HTMLInputElement') {
			if (form[field].classList.contains('error')) {
				form[field].classList.remove('error');
			}
			if (!fieldValue) {
				form[field].classList.add('error');
			}
		} else {
			if (form[field][0].parentElement.classList.contains('error')) {
				form[field][0].parentElement.classList.remove('error');
			}
			if (!fieldValue) {
				form[field][0].parentElement.classList.add('error');
			}
		}
		formFields[field] = fieldValue;
		if (!formFields[field]) isValid = false;
	}

	if (!isValid) return;
	return formFields;

	
}

function resetForm(form, fields) {
	for (const field of fields) {
		// console.log(form[field], form[field].value);
		if (form[field].constructor.name === 'RadioNodeList') {
			form[field][0].checked = true;
			form[field][0].checked = false;
		}
		form[field].value = '';
	}
}

function toggleModal() {
	page.modal.window.classList.toggle('hidden');
}

function renderSidePanel(currentHabit) {
	const habitsIds = [];
	for (const habit of habitsData) {
		habitsIds.push(habit.id);

		const existsElem = page.sidePanel.menu.querySelector(
			`[habit-menu-id='${habit.id}']`,
		);

		// if not exist - create elem
		if (!existsElem) {
			const newElement = templates.menuElement(
				habit.id,
				habitIcons[habit.icon],
				habit.name,
			);
			newElement.addEventListener('click', () => renderPage(habit.id));

			if (habit.id === currentHabit.id) {
				newElement.classList.add('active');
			}

			page.sidePanel.menu.appendChild(newElement);

			// go to next elem
			continue;
		}

		// if exist - toggle 'active' class
		if (habit.id === currentHabit.id) {
			existsElem.classList.add('active');
		} else {
			existsElem.classList.remove('active');
		}
	}

	// check remove or unneed elems
	const allElems = page.sidePanel.menu.querySelectorAll('[habit-menu-id]')
	for(let i = 0; i < allElems.length; i++) {
		if (!habitsIds.includes(Number(allElems[i].getAttribute('habit-menu-id')))) {
			allElems[i].remove();
		}
	}
		
}

function renderMainPanel(currentHabit) {
	if (!currentHabit) {
		page.mainPanel.header.innerHTML = '<strong>&lt;Select a habit&gt;</strong>';
		page.mainPanel.progress.innerHTML = 'Progress: <progress></progress>';
		page.mainPanel.main.classList.add('hidden');
		return;
	}

	const progressMax = currentHabit.target;
	const progressValue =
		currentHabit.days.length > progressMax
			? progressMax
			: currentHabit.days.length;

	// header of habit and its progress
	page.mainPanel.header.replaceChildren(
		templates.habitHeader(currentHabit.name),
	);
	page.mainPanel.progress.replaceChildren(
		...templates.habitProgress(progressValue, progressMax),
	);

	// main of habit with days of tasks completed
	page.mainPanel.daysList.innerHTML = '';
	for (const index in currentHabit.days) {
		page.mainPanel.daysList.appendChild(
			templates.habitDay(Number(index) + 1, currentHabit.days[index].comment),
		);
	}

	page.mainPanel.currentDay.innerHTML = `Day ${currentHabit.days.length + 1}`;

	// unhide main panel of habit
	if (page.mainPanel.main.classList.contains('hidden')) {
		page.mainPanel.main.classList.remove('hidden');
	}
}

function renderModalIcons() {
	page.modal.icons.replaceChildren(...templates.modalIcons(habitIcons));
}

function renderPage(activeHabitId) {
	const activeHabit = habitsData.find(habitElem => habitElem.id === activeHabitId) ?? 0;
	globalActiveHabit = activeHabit.id;

	document.location.replace(`${document.location.pathname}#${activeHabitId}`);

	renderSidePanel(activeHabit);
	renderMainPanel(activeHabit);
}

/*
    Init
*/

(() => {
	loadData();
	renderModalIcons();
	const hashId = Number(document.location.hash.replace('#', ''));
	const url = habitsData.find(habit => habit.id === hashId);
	console.log(url.id);
	if (url) {
		renderPage(url.id);
	} else {
		renderPage(0);
	}
})();
