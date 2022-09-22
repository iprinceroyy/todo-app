import * as model from './model';
import listView from './views/listView';
import addView from './views/addView';
import markView from './views/markView';

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
};

const controlDelete = () => {
	// 1) Get element to be deleted
	// 2) Render new list
};

const init = () => {
	addView.addHandlerSubmit(controlInputs);
	markView.addHandlerMark(controlCompleted);
};
init();
