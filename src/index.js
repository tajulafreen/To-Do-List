import './index.css';

import ToDoList from './add-remove.js';

window.addEventListener('load', () => {
  const list = new ToDoList();
  list.displayAllTasks();
});