import { createStore } from 'vuex';
import { Task, TaskFilter } from '../types/task';
import { tasksApi } from '../api/tasksApi';

export default createStore({
  state: {
    tasks: [] as Task[]
  },

  mutations: {
    setTasks(state, tasks: Task[]) {
      state.tasks = tasks;
    },
    addTask(state, task: Task) {
      state.tasks.push(task);
    },
    removeTask(state, taskId: number) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    updateTask(state, updatedTask: Task) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    }
  },

  actions: {
    async fetchTasks({ commit }) {
      const tasks = await tasksApi.getTasks();
      commit('setTasks', tasks);
    },
    async createTask({ commit }, title: string) {
      const task = await tasksApi.addTask(title);
      commit('addTask', task);
    },
    async deleteTask({ commit }, id: number) {
      await tasksApi.deleteTask(id);
      commit('removeTask', id);
    },
    async toggleTask({ commit }, id: number) {
      const task = await tasksApi.toggleTask(id);
      commit('updateTask', task);
    }
  },

  getters: {
    filteredTasks: (state) => (filter: TaskFilter) => {
      switch (filter) {
        case 'active':
          return state.tasks.filter(task => !task.completed);
        case 'completed':
          return state.tasks.filter(task => task.completed);
        default:
          return state.tasks;
      }
    }
  }
}); 