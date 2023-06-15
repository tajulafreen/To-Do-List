import './style.css';

const allTasks = [
  { description: 'complete project', completed: true, index: 1 },
  { description: 'Learn webpack', completed: true, index: 2 },
  { description: 'Reivew my code', completed: false, index: 3 },
];

const displayTasks = () => {
  const elemTaskList = document.querySelector('.task-list');
  elemTaskList.innerHTML = '';
  allTasks.forEach((el, index) => {
    const task = document.createElement('li');
    task.id = index;

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'form-check';
    check.checked = el.completed;

    const text = document.createElement('p');

    text.textContent = el.description;

    const delbtn = document.createElement('button');
    delbtn.classList = 'delete';
    delbtn.innerHTML = '<i class="bi bi-trash"></i>';

    task.appendChild(check);
    task.appendChild(text);
    task.appendChild(delbtn);

    elemTaskList.appendChild(task);
  });
};
displayTasks();