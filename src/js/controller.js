console.log('Server started..');
import listView from './views/listView';
import searchView from './views/searchView';

const controlInputs = () => {
	// 1) Get task
	const query = searchView.getQuery();

	// 2) Render task
	listView.render(query);
};

const init = () => {
	searchView.addHandlerSubmit(controlInputs);
};
init();
