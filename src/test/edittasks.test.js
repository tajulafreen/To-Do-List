import TaskList from '../taskList.js';
// import LocalStorage from '../localStorage.js';
import Task from '../task.js';

jest.mock('../localStorage', () => ({
  getTasks: jest.fn(),
  saveTasks: jest.fn(),
}));

describe('taskList', () => {
  describe('updateTask()', () => {
    test('should update description of the task', () => {
      const taskList = new TaskList();
      taskList.tasks = [
        new Task('task 1', false, 1),
        new Task('task 2', false, 2),
        new Task('task 2', false, 3),
      ];

      taskList.updateTask(2, 'updated task', false);
      expect(taskList.tasks[2].description).toBe('updated task');
    });
    test('should update description of the task', () => {
      const taskList = new TaskList();
      taskList.tasks = [
        new Task('studying', false, 1),
        new Task('working on porject', false, 2),
        new Task('washing the cloths', false, 3),
      ];

      taskList.updateTask(0, 1, false);
      expect(taskList.tasks[0].description).toBe(1);
    });
  });
  describe('clearcompletedTasks()', () => {
    test('should remove the item that completed is true', () => {
      const taskList = new TaskList();
      taskList.tasks = [
        new Task('studying', false, 1),
        new Task('working on porject', true, 2),
        new Task('washing the cloths', false, 3),
      ];
      taskList.clearCompletedTasks();
      expect(taskList.tasks.length).toBe(2);
    });
    test('should remove the item that completed is true', () => {
      const taskList = new TaskList();
      taskList.tasks = [
        new Task('studying', false, 1),
        new Task('working on porject', true, 2),
        new Task('washing the cloths', false, 3),
      ];
      taskList.clearCompletedTasks();
      expect(taskList.tasks[1].description).toBe('washing the cloths');
    });
  });
});