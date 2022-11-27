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
	listView.render(model.state.todo, model.state.active);
};

const controlCompleted = () => {
	// 1) get id
	const id = markView.getMark();

	// 2) mark task with that as completed
	model.markCompleted(id);

	// 3) re-render
	const { todo, active } = model.state;
	listView.render(todo, active);
};

const controlClear = () => {
	// 1) clear completed task
	model.clearCompleted();

	// 2) re-render
	listView.render(model.state.todo, model.state.active);
};

const controlDelete = () => {
	// 1) get key id
	const keyID = deleteView.getID();

	// 2) delete the task with the above id
	model.deleteTask(keyID);

	// 3) re-render
	listView.render(model.state.todo, model.state.active);
};

const init = () => {
	addView.addHandlerSubmit(controlInputs);
	markView.addHandlerMark(controlCompleted);
	clearView.addHandler(controlClear);
	deleteView.addHandlerDelete(controlDelete);
};
init();
