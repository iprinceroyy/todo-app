class MarkView {
	_parentEl = document.querySelector('[data-mark-task]');

	addHandlerMark() {
		this._parentEl.addEventListener('checked', () => {});
	}
}

export default new MarkView();
