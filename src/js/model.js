import register from '../../serviceWorkerRegistration';

export const state = {
	todo: [],
	completed: [],
	active: [],
	theme: 'theme-2',
};

const persistTasks = (key, val) => {
	localStorage.setItem(key, JSON.stringify(val));
};

export const addTask = (task, marked) => {
	state.todo.push({ id: Date.now().toString(), task, marked });
	state.active.push({ id: Date.now().toString(), task, marked });

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
	if (state.todo.length == 0) return;
	state.todo = [...state.todo.filter(item => !item.marked)];
	state.completed = [];

	persistTasks('completed', state.completed);
	persistTasks('tasks', state.todo);
};

export const deleteTask = id => {
	state.todo = [...state.todo.filter(item => item.id !== id)];
	state.active = [...state.active.filter(item => item.id !== id)];

	persistTasks('tasks', state.todo);
	persistTasks('active', state.active);
};

export const changeTheme = theme => {
	state.theme = theme;
	persistTasks('theme', theme);
};

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

let notification;
document.addEventListener('visibilitychange', () => {
	if (document.visibilityState === 'hidden') {
		let i = 24 - new Date().getHours();
		while (i > 0) {
			if (state.todo.length === 0) break;

			setTimeout(() => {
				notification = new Notification('To do list', {
					body: 'You have some tasks left',
				});
			}, 3600000);
			i--;
		}
	} else {
		if (notification) notification.close();
	}
});

// Initial call
const init = () => {
	const todoTasks = localStorage.getItem('tasks');
	const activeTasks = localStorage.getItem('active');
	const completedTasks = localStorage.getItem('completed');
	const themeChoice = localStorage.getItem('theme');

	if (!todoTasks) return;

	// Initialize the state with the fetched data
	state.todo = JSON.parse(todoTasks);
	state.active = JSON.parse(activeTasks);
	state.completed = JSON.parse(completedTasks);
	state.theme = JSON.parse(themeChoice);

	askNotificationPermission();
	register();
};
init();

const clearBookmarks = () => {
	localStorage.clear('tasks');
	localStorage.clear('active');
	localStorage.clear('completed');
};
//clearBookmarks();
