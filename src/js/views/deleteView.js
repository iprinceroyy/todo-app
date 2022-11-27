class DeleteView {
	_parentEl = document.querySelector('.todo__list');
	_elKey;

	getID() {
		return undefined ?? this._elKey;
	}

	addHandlerDelete(handler) {
		this._parentEl.addEventListener('click', e => {
			if (!e.target.classList.contains('cross')) return;
			this._elKey = e.target.closest('.list__item').dataset.key;
			handler();
		});
	}
}

export default new DeleteView();
