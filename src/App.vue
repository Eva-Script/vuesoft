<template>
  <div class="app">
    <h1>Todo List</h1>
    <TaskInput />
    <TaskFilters v-model="currentFilter" />
    <TaskList :filtered-list="filteredTasks" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { TaskFilter } from './types/task';
import TaskInput from './components/TaskInput.vue';
import TaskFilters from './components/TaskFilters.vue';
import TaskList from './components/TaskList.vue';

const store = useStore();
const currentFilter = ref<TaskFilter>('all');

const filteredTasks = computed(() => {
  return store.getters.filteredTasks(currentFilter.value);
});

onMounted(() => {
  store.dispatch('fetchTasks');
});
</script>

<style scoped lang="scss">
.app {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
  }
}
</style>
