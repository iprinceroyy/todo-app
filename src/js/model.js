export const state = {
	todo: [],
	completed: [],
	active: [],
};

export const addTask = task => {
	state.todo.push({ id: Date.now(), task });
};

export const markCompleted = () => {};
