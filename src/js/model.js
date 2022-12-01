import { icon } from '../assets/images/icon-moon.svg';

export const state = {
	todo: [],
	completed: [],
	active: [],
};

const persistTasks = (key, val) => {
	localStorage.setItem(key, JSON.stringify(val));
};

export const addTask = task => {
	state.todo.push({ id: Date.now().toString(), task, marked: false });
	state.active.push({ id: Date.now().toString(), task, marked: false });

	// Store the data to the web storage
	persistTasks('tasks', state.todo);
	persistTasks('active', state.active);
};

export const markCompleted = id => {
	// First remove all elements from the completed array
	state.completed = [];
	state.active = [];

	state.todo.forEach(task => {
		if (task.id === id) task.marked = !task.marked;

		task.marked && state.completed.push(task);

		!task.marked && state.active.push(task);
	});

	persistTasks('tasks', state.todo);
	persistTasks('active', state.active);
	persistTasks('completed', state.completed);
};

export const clearCompleted = () => {
	if (state.active.length == 0) return;
	state.todo = [...state.todo.filter(item => !item.marked)];

	persistTasks('tasks', state.todo);
};

export const deleteTask = id => {
	state.todo = [...state.todo.filter(item => item.id !== id)];
	state.active = [...state.active.filter(item => item.id !== id)];

	persistTasks('tasks', state.todo);
	persistTasks('active', state.active);
};

const init = () => {
	const todoTasks = localStorage.getItem('tasks');
	const activeTasks = localStorage.getItem('active');
	const completedTasks = localStorage.getItem('completed');

	if (!todoTasks) return;

	// Initialize the state with the fetched data
	state.todo = JSON.parse(todoTasks);
	state.active = JSON.parse(activeTasks);
	state.completed = JSON.parse(completedTasks);
};
init();

const clearBookmarks = () => {
	localStorage.clear('tasks');
	localStorage.clear('active');
	localStorage.clear('completed');
};
//clearBookmarks();

// Push notifications
const checkNotificationPromise = () => {
	try {
		Notification.requestPermission().then();
	} catch (e) {
		return false;
	}

	return true;
};

const askNotificationPermission = () => {
	const handlePermission = permission => (Notification.permission === 'granted' ? 'none' : 'block');

	if (!('Notification' in window)) {
		console.log('This browser does not support notifications.');
	} else if (checkNotificationPromise()) {
		Notification.requestPermission().then(permission => {
			handlePermission(permission);
		});
	} else {
		Notification.requestPermission(permission => {
			handlePermission(permission);
		});
	}
};

//const notification = new Notification('To do list', {
//body: 'Hey! Your task is now overdue.',
//icon: { icon },
//});

let newNotification;
let interval;
document.addEventListener('visibilitychange', () => {
	if (document.visibilityState === 'hidden') {
		while (document.visibilityState === 'hidden') {
			setTimeout(() => {
				newNotification = new Notification('To do list', {
					body: 'You have some tasks left',
				});
			}, 1000);
		}
	} else {
		if (newNotification) newNotification.close();
	}
});

askNotificationPermission();
