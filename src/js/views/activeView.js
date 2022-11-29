class ActiveView {
	_activeEl = document.querySelector('.active');

	addHandlerActiveView(handler) {
		this._activeEl.addEventListener('click', handler);
	}
}
export default new ActiveView();
