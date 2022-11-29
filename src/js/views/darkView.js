class DarkView {
	toggle = document.querySelector('.toggler');

	addHandlerToggle(handler) {
		this.toggle.addEventListener('click', e => {
			handler();
			const appEl = this.toggle.closest('.todo-app');
			if (appEl.classList.contains('theme-1')) {
				appEl.classList.remove('theme-1');
				appEl.classList.add('theme-2');
			} else {
				appEl.classList.remove('theme-2');
				appEl.classList.add('theme-1');
			}
		});
	}
}

export default new DarkView();
