class AddView {
	_parentEl = document.querySelector('.todo__inputs');

	getItem() {
		const task = this._parentEl.lastElementChild.value;
		this._clear();
		return task;
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

export default new AddView();
