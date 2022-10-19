export const state = {
	todo: [],
	completed: [],
	active: [],
};

export const addTask = task => {
	state.todo.push({ id: Date.now().toString(), task, marked: false });
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
};

export const clearCompleted = () => {
	if (state.active.length == 0) return;
	state.todo = state.active;
};

export const deleteTask = () => {};
