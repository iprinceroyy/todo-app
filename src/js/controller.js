import * as model from './model';
import listView from './views/listView';
import addView from './views/addView';
import markView from './views/markView';
import deleteView from './views/deleteView';
import clearView from './views/clearView';
import allView from './views/allView';
import activeView from './views/activeView';
import completedView from './views/completedView';
import themeView from './views/themeView';

// To add task
const controlInputs = () => {
	// 1) Get task
	const { task, marked } = addView.getItem();

	// 2) Add task
	model.addTask(task, marked);

	// 3) Render task
	listView.render(model.state.todo, model.state.active);
};

const controlMark = () => {
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

const controlAll = () => {
	listView.render(model.state.todo, model.state.active);
};

const controlActive = () => {
	listView.render(model.state.active);
};

const controlCompleted = () => {
	listView.render(model.state.completed, model.state.active);
};

const controlTheme = () => {
	// 1) Get theme
	const currTheme = themeView.getThemeNum();

	// 2) save the theme state
	model.changeTheme(currTheme);
};

const init = () => {
	addView.addHandlerSubmit(controlInputs);
	markView.addHandlerMark(controlMark);
	clearView.addHandler(controlClear);
	deleteView.addHandlerDelete(controlDelete);
	allView.addHandlerAllView(controlAll);
	activeView.addHandlerActiveView(controlActive);
	completedView.addHandlerCompleteView(controlCompleted);
	listView.render(model.state.todo, model.state.active);
	themeView.addHandlerToggle(controlTheme);
	themeView.setTheme(model.state.theme);
};
init();
