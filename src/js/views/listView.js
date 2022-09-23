import cross from '../../assets/images/icon-cross.svg';

class ListView {
	_parentEl = document.querySelector('.todo__list');

	render(todoList, activeList) {
		this._parentEl.innerHTML = '';
		const html = `
					<div class="list__item list__item__statistics">
						<span>${activeList ? activeList.length : todoList.length} items left</span>
						<span>Clear Completed</span>
					</div>
					`;

		this._parentEl.insertAdjacentHTML('afterbegin', html);
		todoList.map(todo => this._generateMarkup(todo));
	}

	_generateMarkup(todo) {
		const { id, task, marked } = todo;
		const html = `
        <div class="list__item" data-key="${id}">
					<input type="checkbox" aria-label="check" data-mark-task ${marked ? 'checked' : ''} />
					<h2>${task}</h2>
					<img src="${cross}" alt="cross" />
				</div>
        `;

		this._parentEl.insertAdjacentHTML('afterbegin', html);
	}
}

export default new ListView();
