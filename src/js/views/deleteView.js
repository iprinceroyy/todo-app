class DeleteView {
	_parentEl = document.querySelector('.todo__list');

	getId() {
		this._parentEl.addEventListener('click', e => {
			if (!e.target.classList.contains('.cross')) return;
			console.log('hey');
		});
	}

	addHandlerDelete(handler) {
		this._parentEl.addEventListener('click', e => {
			handler();
		});
	}
}

export default new DeleteView();
