import 'jest-localstorage-mock';
const taskList = require('../taskList.js');
import LocalStorage from '../localStorage.js';

jest.mock('./localStorage', () => ({
  getTasks: jest.fn(),
  saveTasks: jest.fn(),
}));

const taskListElement = document.createElement('ul');
document.getElementById = jest.fn().mockReturnValue(taskListElement);

describe('TaskList', () => {
  // let taskList;

  beforeEach(() => {
    jest.clearAllMocks();
    taskListElement.innerHTML = '';
    taskList = new TaskList();
 
  })
    describe('addTask()', () => {
      test('should add element to the taskListElement', () => {
        const value = '<li></li>'
        taskList.addTask(value)
        expect(taskList.tasks[0].description).toBe(value);
        expect(LocalStorage.saveTasks).toHaveBeenCalledWith(taskList.tasks);
      });
    });
  });

  // describe('addTask', () => {
  //   test('should add a task to the task list and update localStorage', () => {
  //     taskList.addTask('Task 1');

  //     expect(taskList.tasks.length).toBe(1);
     
  //     
  //   });