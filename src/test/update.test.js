import TaskList from '../taskList.js';
import LocalStorage from '../localStorage.js';
import Task from '../task.js';

jest.mock('../localStorage.js', () => ({
  getTasks: jest.fn(() => []),
  saveTasks: jest.fn(),
}));
describe('TaskList', () => {
  describe('updateTask', () => {
    test('should update the description and completion status of a task', () => {
      const taskList = new TaskList();
      taskList.tasks = [
        new Task('Task 1', false, 1),
        new Task('Task 2', true, 2),
        new Task('Task 3', false, 3),
      ];
      taskList.updateTask(1, 'Updated Task', false);
      expect(taskList.tasks[1].description).toBe('Updated Task');
      expect(taskList.tasks[1].completed).toBe(false);
    });
    test('should save the tasks after updating', () => {
      const taskList = new TaskList();
      taskList.tasks = [
        new Task('Task 1', false, 1),
        new Task('Task 2', true, 2),
      ];
      taskList.updateTask(0, 'Updated Task', true);
      expect(LocalStorage.saveTasks).toHaveBeenCalledWith(taskList.tasks);
    });
  });
});