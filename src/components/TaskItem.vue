<template>
  <div class="task-item" :class="{ completed: task.completed }">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle')"
      class="task-item__checkbox"
    />
    <span class="task-item__title">{{ task.title }}</span>
    <button @click="$emit('delete')" class="task-item__delete">×</button>
  </div>
</template>

<script setup lang="ts">
import { Task } from '../types/task';

defineProps<{
  task: Task;
}>();

defineEmits<{
  (e: 'toggle'): void;
  (e: 'delete'): void;
}>();
</script>

<style scoped lang="scss">
.task-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &.completed {
    opacity: 0.7;
    .task-item__title {
      text-decoration: line-through;
      color: #888;
    }
  }

  &__checkbox {
    margin-right: 12px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  &__title {
    flex: 1;
    font-size: 16px;
  }

  &__delete {
    background: none;
    border: none;
    color: #ff4444;
    font-size: 20px;
    cursor: pointer;
    padding: 0 8px;
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
}
</style> 