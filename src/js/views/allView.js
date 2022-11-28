class AllView {
	_status = document.querySelector('.list__item_status');

	addHandlerAllView(handler) {
		this._status.addEventListener('click', e => {
			if (!e.target.classList.contains('all')) return;
			handler();
			console.log(e.target);
		});
	}
}

export default new AllView();
