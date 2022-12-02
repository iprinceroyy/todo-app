class AddView {
	_parentEl = document.querySelector('.todo__inputs');

	getItem() {
		const task = this._parentEl.lastElementChild.value;
		this._clear();
		return task;
	}

	_isMarked() {
		this._parentEl.firstChild;
	}

	_clear() {
		this._parentEl.lastElementChild.value = '';
	}

	addHandlerSubmit(handler) {
		this._parentEl.addEventListener('submit', e => {
			e.preventDefault();
			handler();
			console.log(this._parentEl.firstElementChild.ariaChecked);
		});
	}
}

export default new AddView();
