import LocalStorage from './localStorage.js';

const clearCompletedTasks = () => {
  const localstore = new LocalStorage();
  const filter = localstore.getTasks().filter((task) => !task.completed);
  localstore.getTasks().length = 0;
  localstore.getTasks().push(...filter);
  localstore.saveTasks();
};

export default clearCompletedTasks;