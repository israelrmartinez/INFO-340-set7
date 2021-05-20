'use strict';

/* your code goes here! */
// (1)
class Task {
	constructor(desc, completed) {
		this.description = desc;
		this.complete = completed;
	}

	render() {
		this.newTask = document.createElement('li');
		this.newTask.textContent = this.description;
		if (this.complete) {
			this.newTask.classList.add('font-strike');
		}

		this.newTask.addEventListener('click', () => {
			this.newTask = this.toggleFinished();
		});
		return this.newTask;
	}

	// (2)
	toggleFinished() {
		this.newTask.classList.toggle('font-strike');
		if (this.complete) {
			this.complete = false;
		} else {
			this.complete = true;
		}
		return this.newTask;
	}
}
// let myTask = new Task('check the gas', true);
const APP = document.querySelector('#app');

// APP.appendChild(myTask.render());


// (3)
class TaskList {
	constructor(tasks) {
		this.tasks = tasks;
	}

	addTask(desc) {
		this.tasks.push(new Task(desc, false));
	}

	render() {
		let list = document.createElement('ol');
		this.tasks.forEach( (item) => {
			list.appendChild(item.render());
		});
		return list;
	}
}

// takis.addTask('check gas');
// APP.appendChild(takis.render());


// (4)
class NewTaskForm {

	// (8)
	constructor(callback) {
		this.submitCallback = callback;
	}
	
	render() {
		let form = document.createElement('form');
		
		let input = document.createElement('input');
		input.classList.add('form-control');
		input.classList.add('mb-3');
		input.setAttribute('placeholder', 'What else do you have to do?');
		
		let button = document.createElement('button');
		button.classList.add('btn');
		button.classList.add('btn-primary');
		button.textContent = 'Add task to list';

		button.addEventListener('click', (event) => {
			event.preventDefault();
			this.submitCallback(input.value);
		});

		form.appendChild(input);
		form.appendChild(button);
		return form;
	}
}
// let form = new NewTaskForm;
// APP.appendChild(form.render());


// (5)
class App {
	constructor(parentElem, taskList) {
		this.parentElem = parentElem;
		this.taskList = taskList;
	}

	// (7)
	addTaskToList(desc) {
		this.taskList.addTask(desc);
		let contents = Array.from(this.parentElem.children);

		contents.forEach( (item) => {
			this.parentElem.removeChild(item);
		});
		console.log(contents);
		this.render();
	}
	
	render() {
		let heading = document.createElement('p');
		heading.classList.add('lead');

		this.parentElem.appendChild(heading);
		this.parentElem.appendChild(this.taskList.render());

		let form = new NewTaskForm(this.addTaskToList.bind(this));
		this.parentElem.appendChild(form.render());
	}
}


// (6)
let list = [new Task('Make some class', true), new Task('Make some classes', true)];
let takis = new TaskList(list);


let content = new App(APP, takis);
content.render();
// content.addTaskToList('get the gas');



//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
