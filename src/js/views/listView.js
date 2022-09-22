import cross from '../../assets/images/icon-cross.svg';

class ListView {
	_parentEl = document.querySelector('.todo__list');

	render(todoList) {
		this._parentEl.innerHTML = '';
		const html = `
					<div class="list__item list__item__statistics">
						<span>5 items left</span>
						<span>Clear Completed</span>
					</div>
					`;

		this._parentEl.insertAdjacentHTML('afterbegin', html);
		todoList.map(({ id, task }) => this._generateMarkup(id, task));
	}

	_generateMarkup(id, task) {
		const html = `
        <div class="list__item" data-key="${id}">
					<input type="checkbox" aria-label="check" data-mark-task />
					<h2>${task}</h2>
					<img src="${cross}" alt="cross" />
				</div>
        `;

		this._parentEl.insertAdjacentHTML('afterbegin', html);
	}
}

export default new ListView();
