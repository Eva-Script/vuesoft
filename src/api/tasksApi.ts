import { Task } from '../types/task';

const mockTasks: Task[] = [
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Build Todo App', completed: false }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const tasksApi = {
  async getTasks(): Promise<Task[]> {
    await delay(500);
    return [...mockTasks];
  },

  async addTask(title: string): Promise<Task> {
    await delay(500);
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    mockTasks.push(newTask);
    return newTask;
  },

  async deleteTask(id: number): Promise<void> {
    await delay(500);
    const index = mockTasks.findIndex(task => task.id === id);
    if (index !== -1) {
      mockTasks.splice(index, 1);
    }
  },

  async toggleTask(id: number): Promise<Task> {
    await delay(500);
    const task = mockTasks.find(task => task.id === id);
    if (!task) throw new Error('Task not found');
    task.completed = !task.completed;
    return { ...task };
  }
}; 