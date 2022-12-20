import icon1 from '../../assets/images/icon-sun.svg';
import icon2 from '../../assets/images/icon-moon.svg';
class ThemeView {
	_toggle = document.querySelector('.toggler');
	_appEl = this._toggle.closest('.todo-app');
	_themeNum;

	getThemeNum() {
		return this._themeNum;
	}

	setTheme(theme) {
		this._appEl.classList.add('todo-app', `${theme}`);
	}

	addHandlerToggle(handler) {
		this._toggle.addEventListener('click', () => {
			const currTheme = this._appEl.classList[1];
			this._appEl.classList = '';

			if (currTheme === 'theme-1') {
				this.setTheme('theme-2');
				this._toggle.setAttribute('src', `${icon1}`);
			} else {
				this.setTheme('theme-1');
				this._toggle.setAttribute('src', `${icon2}`);
			}

			this._themeNum = this._appEl.classList[1];
			handler();
		});
	}
}

export default new ThemeView();
