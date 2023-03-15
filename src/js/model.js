export const state = {
	todo: [],
	completed: [],
	active: [],
	theme: 'theme-1',
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

// Service worker registration
export const registerServiceWorker = () => {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () =>
			navigator.serviceWorker.register(new URL('../../serviceWorker', import.meta.url))
		);
	}
};

// Initial call
const init = () => {
	const todoTasks = localStorage.getItem('tasks');
	const activeTasks = localStorage.getItem('active');
	const completedTasks = localStorage.getItem('completed');
	const themeChoice = localStorage.getItem('theme');
	state.theme = JSON.parse(themeChoice);

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
