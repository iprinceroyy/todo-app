import icon1 from '../../assets/images/icon-sun.svg';
import icon2 from '../../assets/images/icon-moon.svg';
class DarkView {
	toggle = document.querySelector('.toggler');

	addHandlerToggle() {
		this.toggle.addEventListener('click', () => {
			const appEl = this.toggle.closest('.todo-app');
			if (appEl.classList.contains('theme-1')) {
				appEl.classList.remove('theme-1');
				appEl.classList.add('theme-2');
				this.toggle.setAttribute('src', `${icon1}`);
			} else {
				appEl.classList.remove('theme-2');
				appEl.classList.add('theme-1');
				this.toggle.setAttribute('src', `${icon2}`);
			}
		});
	}
}

export default new DarkView();
