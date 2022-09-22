class MarkView {
	_parentEl = document.querySelector('.todo__list');
	_id;

	getMark() {
		return this._id;
	}

	addHandlerMark(handler) {
		this._parentEl.addEventListener('change', e => {
			this._id = e.target.closest('.list__item').dataset.key;
			handler();
		});
	}
}

export default new MarkView();
