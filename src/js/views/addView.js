class AddView {
	_parentEl = document.querySelector('.todo__inputs');
	checkbox = document.querySelector('#add');

	getItem() {
		const task = this._parentEl.lastElementChild.value;
		const marked = this._isMarked();
		this._clear();
		return { task, marked };
	}

	_isMarked() {
		const marked = this._parentEl.firstElementChild.checked;
		this._parentEl.firstElementChild.checked = false;
		return marked;
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
