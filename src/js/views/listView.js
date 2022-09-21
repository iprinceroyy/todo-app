import cross from '../../assets/images/icon-cross.svg';

class ListView {
	_parentEl = document.querySelector('.todo__list');

	render(data) {
		const html = `
        <div class="list__item">
					<input type="checkbox" aria-label="check" />
					<h2>${data}</h2>
					<img src="${cross}" alt="cross" />
				</div>
        `;

		this._parentEl.insertAdjacentHTML('afterbegin', html);
	}
}

export default new ListView();
