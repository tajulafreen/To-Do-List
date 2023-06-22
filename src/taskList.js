import Task from './task.js';
import LocalStorage from './localStorage.js';

export default class TaskList {
  constructor() {
    this.tasks = LocalStorage.getTasks() || [];
  }

  addTask(description) {
    const task = new Task(description(task), false, this.tasks.length + 1);
    // this.tasks.push;
    this.saveTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.updateTaskIndexes();
    this.saveTasks();
  }

  updateTask(index, description, completed) {
    const task = this.tasks[index];
    task.description = description;
    task.completed = completed;
    this.saveTasks();
  }

  updateTaskIndexes() {
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i + 1;
    }
  }

  saveTasks() {
    LocalStorage.saveTasks(this.tasks);
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.updateTaskIndexes();
    this.saveTasks();
  }

  renderTasks(taskListElement) {
    taskListElement.innerHTML = '';

    for (let i = 0; i < this.tasks.length; i += 1) {
      const task = this.tasks[i];

      const listItem = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'check';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        this.updateTask(i, task.description, checkbox.checked);
      });

      const descriptionInput = document.createElement('input');
      descriptionInput.type = 'text';
      descriptionInput.className = 'des';
      descriptionInput.value = task.description;
      descriptionInput.addEventListener('change', () => {
        this.updateTask(i, descriptionInput.value, task.completed);
      });

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
      deleteButton.addEventListener('click', () => {
        this.deleteTask(i);
        this.renderTasks(taskListElement);
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(descriptionInput);
      listItem.appendChild(deleteButton);

      taskListElement.appendChild(listItem);
    }
    const clearButton = document.querySelector('.clear-btn');
    clearButton.addEventListener('click', () => {
      this.clearCompletedTasks();
      this.renderTasks(taskListElement);
    });
  }
}
