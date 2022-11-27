class DeleteView {
	_parentEl = document.querySelector('.todo__list');
	_elKey;

	getID() {
		return this._elKey;
	}

	addHandlerDelete(handler) {
		handler();

		this._parentEl.addEventListener('click', e => {
			if (!e.target.classList.contains('cross')) return;
			this._elKey = e.target.closest('.list__item').dataset.key;
			console.log(this._elKey);
		});
	}
}

export default new DeleteView();
