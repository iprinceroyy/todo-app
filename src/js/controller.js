import * as model from './model';
import listView from './views/listView';
import addView from './views/addView';
import markView from './views/markView';
import deleteView from './views/deleteView';
import clearView from './views/clearView';

// To add task
const controlInputs = () => {
	// 1) Get task
	const task = addView.getItem();

	// 2) Add task
	model.addTask(task);

	// 3) Render task
	listView.render(model.state.todo);
};

const controlCompleted = () => {
	// 1) get id
	const id = markView.getMark();

	// 2) mark task with that as completed
	model.markCompleted(id);

	// 3) re-render
	const { todo } = model.state;
	listView.render(todo);
};

const controlClear = () => {
	// 1) clear completed task
	model.clearCompleted();

	// 2) re-render
	listView.render(model.state.todo);
};

const controlDelete = () => {
	const key1 = deleteView.getID();

	model.deleteTask(key1);
};

const init = () => {
	addView.addHandlerSubmit(controlInputs);
	markView.addHandlerMark(controlCompleted);
	clearView.addHandler(controlClear);
	deleteView.addHandlerDelete(controlDelete);
};
init();
