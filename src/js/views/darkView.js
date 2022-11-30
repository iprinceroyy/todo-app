import { icon } from '../../assets/images/icon-sun.svg';
class DarkView {
	toggle = document.querySelector('.toggler');

	addHandlerToggle() {
		this.toggle.addEventListener('click', () => {
			this.toggle.src = `./src/assets/images/icon-sun.svg`;
			console.log(this.toggle.src);
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
