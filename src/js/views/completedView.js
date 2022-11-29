class CompletedView {
	_status = document.querySelector('.completed');

	addHandlerCompleteView(handler) {
		this._status.addEventListener('click', handler);
	}
}

export default new CompletedView();
