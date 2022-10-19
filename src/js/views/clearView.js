class ClearView {
	_parentEl = document.querySelector('.todo__list');

	addHandler(handler) {
		this._parentEl.addEventListener('click', e => {
			if (!e.target.classList.contains('clear')) return;
			handler();
		});
	}
}

export default new ClearView();
