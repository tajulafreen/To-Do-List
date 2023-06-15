class ToDoList {
  constructor() {
    const form = document.querySelector('.form-section');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.addTask();
    });
    this.allTasks = [];
    this.storageName = 'to-do-list';
    this.loadTasks();
  }

  addTask() {
    const desc = document.querySelector('#add');
    const task = {
      description: desc.value,
      completed: false,
      index: (this.allTasks.length + 1),
    };
    this.allTasks.push(task);
    desc.value = '';
    this.reload();
  }

  deleteTask(index) {
    this.allTasks.splice(index, 1);
    this.allTasks.forEach((task, newIndex) => {
      task.index = newIndex + 1;
    });
    this.reload();
  }

  loadTasks() {
    const storage = localStorage.getItem(this.storageName);
    if (storage) {
      this.allTasks = JSON.parse(storage);
    }
  }

  saveTasks() {
    localStorage.setItem(this.storageName, JSON.stringify(this.allTasks));
  }

  createTaskElement(task, index) {
    const newTask = document.createElement('li');
    newTask.id = index;
    newTask.className = 'task-item';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'form-check';
    check.checked = task.completed;

    const text = document.createElement('p');
    text.className = 'm-0';
    text.textContent = task.description;

    const deleteEl = document.createElement('button');
    deleteEl.classList = 'delete-btn';
    deleteEl.innerHTML = '<i class="bi bi-trash"></i>';
    deleteEl.addEventListener('click', () => {
      this.deleteTask(index);
    });

    newTask.appendChild(check);
    newTask.appendChild(text);

    newTask.appendChild(deleteEl);
    return newTask;
  }

  displayAllTasks() {
    const taskContainer = document.querySelector('.all-tasks');
    taskContainer.innerHTML = '';
    this.allTasks.forEach((task, index) => {
      taskContainer.appendChild(this.createTaskElement(task, index));
    });
  }

  reload() {
    this.saveTasks();
    this.loadTasks();
    this.displayAllTasks();
  }
}

export default ToDoList;