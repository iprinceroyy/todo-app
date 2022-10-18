import * as model from './model';
import listView from './views/listView';
import addView from './views/addView';
import markView from './views/markView';
import deleteView from './views/deleteView';

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
	const { todo, active } = model.state;
	console.log(active);
	listView.render(todo, active);
};

const controlDelete = () => {
	listView.render(model.state.active);
};

const init = () => {
	addView.addHandlerSubmit(controlInputs);
	markView.addHandlerMark(controlCompleted);
	deleteView.addHandler(controlDelete);
};
init();
