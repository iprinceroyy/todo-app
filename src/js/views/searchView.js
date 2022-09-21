class SearchView {
	_parentEl = document.querySelector('.todo__inputs');

	getQuery() {
		const query = this._parentEl.lastElementChild.value;
		this._clear();
		return query;
	}

	_clear() {
		this._parentEl.lastElementChild.value = '';
	}

	addHandlerSubmit(handler) {
		this._parentEl.addEventListener('submit', e => {
			e.preventDefault();
			handler();
		});
	}
}

export default new SearchView();
