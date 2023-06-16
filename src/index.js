import './index.css';
import TaskList from './taskList.js';

const taskList = new TaskList();
const taskListElement = document.getElementById('task-list');
const addInput = document.getElementById('add');
const editInput = document.getElementById('edit');

taskList.renderTasks(taskListElement);

document.querySelector('.form-section').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = addInput.value.trim();
  if (description !== '') {
    taskList.addTask(description);
    taskList.renderTasks(taskListElement);
    addInput.value = '';
  }
});

document.querySelector('.edit-task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = editInput.value.trim();
  if (description !== '') {
    const selectedIndex = document.querySelector('.selected').dataset.index;
    taskList.updateTask(selectedIndex, description, false);
    taskList.renderTasks(taskListElement);
    editInput.value = '';
    document.querySelector('.selected').classList.remove('selected');
  }
});
