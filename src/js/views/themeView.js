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
		theme === 'theme-2'
			? this._updateClasslistAndAttributes('theme-2', icon1)
			: this._updateClasslistAndAttributes('theme-1', icon2);
	}

	_updateClasslistAndAttributes(theme, icon) {
		this._appEl.classList = '';
		this._appEl.classList.add('todo-app', theme);
		this._toggle.setAttribute('src', `${icon}`);
	}

	_getClass() {
		return this._appEl.classList[1];
	}

	addHandlerToggle(handler) {
		this._toggle.addEventListener('click', () => {
			const currTheme = this._getClass();

			currTheme === 'theme-1'
				? this._updateClasslistAndAttributes('theme-2', icon1)
				: this._updateClasslistAndAttributes('theme-1', icon2);

			this._themeNum = this._getClass();
			handler();
		});
	}
}

export default new ThemeView();
