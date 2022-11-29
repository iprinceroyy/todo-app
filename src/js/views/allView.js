class AllView {
	_status = document.querySelector('.all');

	addHandlerAllView(handler) {
		this._status.addEventListener('click', handler);
	}
}

export default new AllView();
