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
      const desc = document.querySelector('#task-item');
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
  
    editTask(index, form) {
      const editEl = document.getElementById('edit');
      editEl.placeholder = `Write here to change "${this.allTasks[index].description}":`;
      editEl.value = this.allTasks[index].description;
      editEl.focus();
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.allTasks[index].description = editEl.value;
       
        this.reload();
      });
  
      form.addEventListener('reset', (e) => {
        e.preventDefault();
        
        this.reload();
      });
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
      check.className = 'form-section';
      check.checked = task.completed;
  
      // Task Description
      const text = document.createElement('p');
      
      text.textContent = task.description;
  
      // Edot icon
      const editEl = document.createElement('ion-icon');
    
  
      editEl.addEventListener('click', () => {
        const editForm = document.querySelector('.add');
        if (!editForm.classList.contains('d-none')) {
          return;
        }
        editForm.classList.remove('d-none');
        this.editTask(index, editForm);
      });
  
      const deleteEl = document.createElement('button');
      deleteEl.name = 'trash-outline';
      deleteEl.classList = 'delets-btn';
      deleteEl.innerHTML = '<i class="bi bi-trash"></i>'
  
      deleteEl.addEventListener('click', () => {
        this.deleteTask(index);
      });
  
      newTask.appendChild(check);
      newTask.appendChild(text);
      newTask.appendChild(editEl);
      newTask.appendChild(deleteEl);
      return newTask;
    }
  

    displayAllTasks() {
      const taskContainer = document.querySelector('.task-list');
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