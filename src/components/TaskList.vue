<template>
  <div class="task-list">
    <TaskItem
      v-for="task in filteredList"
      :key="task.id"
      :task="task"
      @toggle="toggleTask(task.id)"
      @delete="deleteTask(task.id)"
    />
    <div v-if="filteredList.length === 0" class="task-list__empty">
      No tasks found
    </div>
  </div>
</template>

<script setup lang="ts">
import { Task } from '../types/task';
import TaskItem from './TaskItem.vue';
import { useStore } from 'vuex';

const props = defineProps<{
  filteredList: Task[];
}>();

const store = useStore();

const toggleTask = (id: number) => {
  store.dispatch('toggleTask', id);
};

const deleteTask = (id: number) => {
  store.dispatch('deleteTask', id);
};
</script>

<style scoped lang="scss">
.task-list {
  &__empty {
    text-align: center;
    color: #888;
    padding: 20px;
    font-style: italic;
  }
}
</style> 