export const state = {
	todo: [],
	completed: [],
	active: [],
};

export const addTask = task => {
	state.todo.push({ id: Date.now().toString(), task, completed: false });
};

export const markCompleted = id => {
	// First remove all elements from the completed array
	state.completed = [];

	state.todo.forEach(task => {
		if (task.id === id) task.completed = !task.completed;

		task.completed && state.completed.push(task);
	});
	console.log(state.completed);
};
