import './style.css';

const allTasks = [
  { description: 'complete project', completed: true, index: 1 },
  { description: 'Learn webpack', completed: true, index: 2 },
  { description: 'Reivew my code', completed: false, index: 3 },
];

const createTaskItem = (description) => {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'form-check-input';

  const taskDescription = document.createElement('label');
  taskDescription.className = 'task-description';
  taskDescription.textContent = description;

  const deletebtn = document.createElement('button');
  deletebtn.type = 'button';
  deletebtn.className = 'delete-btn';
  deletebtn.innerHTML = '<i class="bi bi-trash"></i>';

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(deletebtn);

  return taskItem;
};

const addTask = () => {
  const inputField = document.querySelector('.add');
  const description = inputField.value.trim();

  if (description !== '') {
    const taskItem = createTaskItem(description);
    const tasksList = document.getElementById('tasks-list');
    tasksList.appendChild(taskItem);
    inputField.value = '';
  }
};
const renderTasks = () => {
  const taskList = document.getElementById('task-list');

  allTasks.forEach((task) => {
    const taskItem = createTaskItem(task.description);
    taskList.appendChild(taskItem);
  });
};
window.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  const addButton = document.querySelector('.btn-add');
  addButton.addEventListener('click', addTask);
});